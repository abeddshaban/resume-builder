import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import PageNotFound from "./Components/PageNotFound";
import Home from "./Pages/Home";
// import FormStepper from "./Components/FormStepper";

function App() {
  return (
    <div className="App">
      <br />
      {/* <FormStepper /> */}
      <NavBar />
      <Home />

      <Routes>
        <Route path="*" element={<PageNotFound />} />

        <Route exact path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
