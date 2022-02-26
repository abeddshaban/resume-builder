import "./App.css";
import Home from "./Pages/Home";
import FormStepper from "./Components/FormStepper";
import { Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <br />
      <FormStepper />
      <Home />

      <Routes>
        {/* <Route path="*" element={<PageNotFound />} /> */}

        {/* <Route exact path="/12-ls/History" element={<TwelveLsHistory />} /> */}
      </Routes>
    </div>
  );
}

export default App;
