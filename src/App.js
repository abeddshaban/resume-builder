import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import PageNotFound from "./Components/PageNotFound";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import Terms from "./Pages/Terms";
import Login from "./Pages/Login";
// import FormStepper from "./Components/FormStepper";

function App() {
  return (
    <div className="App">
      {/* <FormStepper /> */}
      <NavBar />

      <Routes>
        <Route path="*" element={<PageNotFound />} />

        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />

        <Route exact path="/Terms-Privacy" element={<Terms />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
