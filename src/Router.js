import { Routes, Route } from "react-router-dom";
import "./config/firebase";
import { Login } from "./Pages/Login";



export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
    </Routes>
  );
}
