import { Routes, Route } from "react-router-dom";
import "./config/firebase";
import { ContractItems } from "./Pages/ContractItems";
import { Contratos } from "./Pages/Contratos";
import { Login } from "./Pages/Login";
import { MapKML } from "./Pages/Map";
import { Obras } from "./Pages/Obras";



export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/contratos" element={<Contratos />} />
      <Route path="/contratos/:id" element={<ContractItems />} />
      <Route path="/obras/:id" element={<Obras />} />
      <Route path="/obras/:id/map/:id" element={<MapKML />} />
    </Routes>
  );
}
