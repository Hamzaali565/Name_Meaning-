import logo from "./logo.svg";
import "./App.css";
import NameAPIComponent from "./components/NameAPIComponent";
import GoogleSearchComponent from "./components/GoogleSearchComponents";
import Search from "./components/Search/Search";
import Container from "./components/Container/Container";
import TextManipulation from "./components/TextManipulation";
import HomePage from "./screen/HomePage/HomePage";

function App() {
  return (
    <div className="">
      {/* <GoogleSearchComponent /> */}
      {/* <Search /> */}
      {/* <Container /> */}
      {/* <TextManipulation /> */}
      <HomePage />
      {/* <NameAPIComponent /> */}
    </div>
  );
}

export default App;
