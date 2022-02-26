import "./Styles/Home.css";
import React from "react";
import { Button } from "@mui/material";
// import PDF from "../Components/PDF";

const Home = () => {
  return (
    <div className="home">
      {/* section 1 */}
      <section className="home_section">
        <h1 className="home_h1 padding20">
          Build a professional resume right now!
        </h1>
        <p className="padding20 par bold">
          Create your resume easily with our professional builder.
        </p>
        <div className="margin">
          <Button variant="contained">Go To Dashboard</Button>
        </div>
      </section>

      {/* section 2 */}
      <section className="home_section ">
        <h2 className="home_h2 padding20">
          Land your dream job with the help of our resume builder
        </h2>
      </section>

      {/* section 3 */}
      <section className="home_section bgblue topborder">
        <h2 className="home_h2 center padding20 textwhite bigtext">
          Start building your resume today, land your dream job tomorrow
        </h2>
        <div className="center">
          <Button
            style={{
              backgroundColor: "#ffffff",
              color: "#440ccd",
            }}
            variant="contained"
          >
            Go To Dashboard
          </Button>
        </div>
      </section>
      {/* <PDF data={data} /> */}
    </div>
  );
};

export default Home;
