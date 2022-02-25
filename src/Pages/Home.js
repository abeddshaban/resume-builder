import "./Styles/Home.css";
import React from "react";
import PDF from "../Components/PDF";

const Home = () => {
  return (
    <div className="home_div">
      {/* <button
        onClick={() => {
          setdata({
            ...data,
            profile: {
              firstname: "mosbah123",
              lastname: data.profile.lastname,
              email: data.profile.email,
              phonenumber: data.profile.phonenumber,
              JobCategory: data.profile.JobCategory,
              selfDescription: data.profile.selfDescription,
            },
          });
        }}
      >
        the name is mosbah123
      </button> */}
      <hr />
      {/* <PDF data={data} /> */}
    </div>
  );
};

export default Home;
