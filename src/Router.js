import { Routes, Route } from "react-router-dom";
import "./config/firebase";
import { Contratos } from "./Pages/Contratos";
import { Login } from "./Pages/Login";



export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/contratos" element={<Contratos />} />
    </Routes>
  );
}
