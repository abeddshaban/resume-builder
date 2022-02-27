import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import PageNotFound from "./Components/PageNotFound";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import Terms from "./Pages/Terms";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import FormStepper from "./Components/FormStepper";
import PDFresume from "./Components/PDFresume";
import DashbordRedirect from "./Components/DashbordRedirect";

function App() {
  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route path="*" element={<PageNotFound />} />

        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/dashbordredirect" element={<DashbordRedirect />} />

        <Route exact path="/Terms-Privacy" element={<Terms />} />

        <Route exact path="/resume-builder" element={<FormStepper />} />
        <Route exact path="/resume" element={<PDFresume />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
