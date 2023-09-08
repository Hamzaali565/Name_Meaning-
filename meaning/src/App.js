import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Pagel from "./screen/Main1/PageI";
import Girls from "./screen/Names/Girls";
import Boys from "./screen/Names/Boys";
import BoysName from "./components/GenderWise/BoysName";
function App() {
  return (
    <Routes>
      <Route path="/home" element={<Pagel />} />
      <Route path="girls" element={<Girls />} />
      <Route path="boys" element={<Boys />} />
      <Route path="*" element={<Navigate to="/home" replace={true} />} />
    </Routes>
    // <Pagel />
  );
}

export default App;
