import { collection, doc, getDoc, getDocs, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import ReactMapGL, { Layer, Source,   GeolocateControl,
  FullscreenControl,
  NavigationControl, } from "react-map-gl";
import { useParams } from "react-router-dom";
import { db, storage } from "../../config/firebase";
import Rede from "../../geojson/rede_antiga.geojson"
import axios from 'axios';
import { Container } from "./style";

export function MapKML() {
  const [contracts, setContracts] = useState([]);
  const [geojsonData, setGeojsonData] = useState(null);
  const [viewport, setViewport] = useState({});
  const params = useParams();
  const [workData, setWorkData] = useState([]);
  const [teste, setTeste] = useState();



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

  useEffect(() =>{
    async function getGeoJSON() {
  
      // Referência ao arquivo no armazenamento do Firebase
      const geoJSONRef = storage.ref('GEOJSON/rede_antiga.geojson');
      
      geoJSONRef.getDownloadURL().then(url => {
        fetch("https://firebasestorage.googleapis.com/v0/b/e-gs-encibra.appspot.com/o/GEOJSON%2Frede_antiga.geojson?alt=media&token=051cd0fd-4616-4d3b-936c-2b48d8b319f1")
          .then(response => response.json())
          .then(data => setGeojsonData(data))
          .catch(error => console.log(error));
      }).catch(error => {
        console.log(error);
      });
    
  }

  getGeoJSON()
  },[])





  const rede2 = {
    id: "line-layer",
    type: "line",
    source: "line-source",
    layout: {
      'line-join': 'round',
'line-cap': 'round'
    },
    paint: {
      //  "fill-color": " #F4F3F1"
      "line-color": "#11b4da",
      'line-width': 3
    },
    
  };

  return (
    <Container>
      {" "}
      <ReactMapGL
        initialViewState={{
          latitude: -1.9450735,
          longitude: -54.7422771,
          zoom: 14,
        }}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        mapboxAccessToken="pk.eyJ1Ijoidm9uMzQiLCJhIjoiY2w5NzJkaTI0MnJ6eTNub2l1dXA4M3YxeCJ9.Z0GAMbATYKVCN_esIi7lFw"
        {...viewport}
        onViewportChange={(event) => setViewport(event)}
        cooperativeGestures={true}
      >
        <Source id="line-layer" type="geojson" lineMetrics data={geojsonData}>
          <Layer {...rede2} />
        </Source>
      </ReactMapGL>
    </Container>
  );
}
