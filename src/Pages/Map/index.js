import { collection, doc, getDoc, getDocs, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import ReactMapGL, { Layer, Source } from "react-map-gl";
import { useParams } from "react-router-dom";
import { db, storage } from "../../config/firebase";
import Rede from "../../geojson/rede_antiga.geojson"


export function MapKML() {
  const [contracts, setContracts] = useState([]);
  const [geojsonData, setGeojsonData] = useState(null);
  const [viewport, setViewport] = useState({});
  const params = useParams();
  const [workData, setWorkData] = useState([]);


  useEffect(() => {
    async function getContracts() {
      const collectionRef = doc(
        db,
        "contracts",
        `${window.localStorage.getItem("contrato")}`
      );
      // const collectionRef = collection(db, "contracts");
      const querySnapshot = await getDoc(collectionRef);
      setContracts(querySnapshot.data());
    }
    getContracts();
  }, []);

  useEffect(() => {
    async function kml() {
      if (contracts) {
        const workQ = query(
          collection(
            db,
            `contracts/${window.localStorage.getItem("contrato")}/kmls`
          )
        );
        const workDetails = await getDocs(workQ);
        setWorkData(
          workDetails.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }))
        );
      }
    }

    kml();
  }, [contracts]);


  const kml = workData.filter((item) => {
    return item.id === params.id;
  });

  let urlTeste = "";

  if (kml) {
    const  storageRef = storage.ref();
    const geoJsonRef = storageRef.child( "KML/PA/ALENQUER/16-2022/rede_antiga.geojson");
      
    geoJsonRef
      .getDownloadURL()
      .then((url) => {
        fetch(url)
        .then(response => response.json())
        .then(data => {
          console.log("teste",data)
        })
        .catch(error => {
          // Lida com erros ao tentar analisar o arquivo GeoJSON
        });
      })
      .catch((error) => console.error(error));

  }

   useEffect(() => {
     
   }, [kml]);

   function Teste(){
    console.log("saghj")

    fetch(urlTeste)
    .then(response => response.json())
    .then(data => {
      console.log("teste",data)
    })
    .catch(error => {
      // Lida com erros ao tentar analisar o arquivo GeoJSON
    });
   
   }

   Teste()
  
 console.log("json", geojsonData)

  const layerStylePara = {
    id: "maine0",
    type: "fill",
    source: "maine",
    layout: {},
    paint: {
      "fill-opacity": 0.1,
    },
  };

  return (
    <>
      <ReactMapGL
        mapboxAccessToken="pk.eyJ1Ijoidm9uMzQiLCJhIjoiY2w5NzRuOHpsMTRqNDNvb3pjMG52M2cxNyJ9.UGOW9fwC70K9dNuX23SBdQ"
        initialViewState={{
          longitude: -122.4,
          latitude: 37.8,
          zoom: 14,
        }}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        {...viewport}
        cooperativeGestures={true}
      ></ReactMapGL>
    </>
  );
}
