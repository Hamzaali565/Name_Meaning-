import logo from "./logo.svg";
import "./App.css";
import NameAPIComponent from "./components/NameAPIComponent";
import GoogleSearchComponent from "./components/GoogleSearchComponents";
import Search from "./components/Search/Search";
import Container from "./components/Container/Container";
import TextManipulation from "./components/TextManipulation";
import HomePage from "./screen/HomePage/HomePage";
import Header from "./screen/Header/Header";
import Sidebaar from "./components/Sidebaar/Sidebaar";
import PageI from "./screen/Main1/PageI";
import Loader from "./components/Animation/Loader";
import Container2 from "./components/Container/Container2";
import Error from "./components/Error/Error";
import Boys from "./screen/Names/Boys";

function App() {
  return (
    <div className="">
      <PageI />
      {/* <Boys /> */}
    </div>
  );
}

export default App;
