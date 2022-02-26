import "./Styles/Home.css";
import React from "react";
// import PDF from "../Components/PDF";

const Home = () => {
  return (
    <div className="home_div">
      <section>
        <h1 className="home_header1">Build a professional resume right now!</h1>
      </section>
      <section>
        <h2 className="home_header2">
          Land your dream job with the help of our resume builder
        </h2>
      </section>
      {/* <PDF data={data} /> */}
    </div>
  );
};

export default Home;
