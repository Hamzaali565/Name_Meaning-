import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Pagel from "./screen/Main1/PageI";
import Girls from "./screen/Names/Girls";
import Boys from "./screen/Names/Boys";
import BoysName from "./components/GenderWise/BoysName";
import Button from "./components/Button/Button";
import Header from "./screen/Header/Header";
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/home" element={<Pagel />} />
        <Route path="girls" element={<Girls />} />
        <Route path="boys" element={<Boys />} />
        <Route path="*" element={<Navigate to="/home" replace={true} />} />
      </Routes>
    </div>
    // <Button />
  );
}

export default App;
