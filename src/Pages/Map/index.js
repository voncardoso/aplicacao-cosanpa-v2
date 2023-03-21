import { collection, doc, getDoc, getDocs, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import ReactMapGL, { Layer, Source } from "react-map-gl";
import { useParams } from "react-router-dom";
import { db, storage } from "../../config/firebase";
import Rede from "../../geojson/rede_antiga.geojson"
import axios from 'axios';

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

  async function getGeoJSON() {
    try {
      // Referência ao arquivo no armazenamento do Firebase
      const geoJSONRef = storage.ref('GEOJSON/rede_antiga.geojson');
      
      geoJSONRef.getDownloadURL()
    .then(url => {
    console.log(url); // Imprime a URL do arquivo GeoJSON
      fetch(url, {headers: {"Access-Control-Allow-Origin": "*"}, method: "no-cors"})
      .then(response => {
        const data = response.data;
        console.log(data); // Imprime o conteúdo do arquivo GeoJSON
     })
  .catch(error => {
    console.error(error);
  });
  })
  .catch(error => {
    console.error(error);
  });
     
    } catch (error) {
      console.error(error);
    }
  }

  getGeoJSON();

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
