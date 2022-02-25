import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import PDF from "../Components/PDF";
import Stepper from "../Components/Stepper";
import "./Styles/Home.css";

const Home = () => {
  const [data, setdata] = useState({
    profile: {
      firstname: "Abed Al Ghani",
      lastname: "Shaaban",
      email: "example@gmail.com",
      phonenumber: "ex: 563278723",
      JobCategory: "Job Category",
      selfDescription: `A summation of relevant professional abilities, 
      accomplishments, and personal qualities that make you the right
       candidate for the job. Be sure to give your potential employer 
       a relevant snapshot of who you are and what you can offer. Tailor
        it to the position you're applying for, focusing on the most releva
        nt qualifications for the job.
        `,
    },
    contactInformation: {
      StreetAddress: "street address",
      City: "city",
      State: "state",
      Country: "country",
    },
    experience: {
      company: "Company, organization or volunteer group",
      role: "Role or job title",
      StartDate: "",
      EndDate: "",
      responsibilitiesAccomplishments: "",
      currentstate: {
        currentlylyEmployed: false,
        City: "city",
        State: "state",
        Country: "country",
      },
    },

    education: {
      studyPlace: "where did u study",
      major: "What did you study?",
      City: "city",
      State: "state",
      Country: "country",
      graduationDate: "Graduation Date",
      academicAchievements: "academic achievements",
    },
    skills: "",
    languages: "",
    certificates: "",
    awards: "",
  });
  console.log(data);
  return (
    <div className="home_div">
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          required
          id="outlined-required"
          label="First Name"
          variant="outlined"
          value={data.profile.firstname}
          onChange={(e) => {
            const { value } = e.target;
            setdata({
              ...data,
              profile: {
                firstname: value,
                lastname: data.profile.lastname,
                email: data.profile.email,
                phonenumber: data.profile.phonenumber,
                JobCategory: data.profile.JobCategory,
                selfDescription: data.profile.selfDescription,
              },
            });
          }}
        />
        <TextField
          required
          id="outlined-required"
          label="Second Name"
          variant="outlined"
          value={data.profile.lastname}
          onChange={(e) => {
            const { value } = e.target;
            setdata({
              ...data,
              profile: {
                firstname: data.profile.firstname,
                lastname: value,
                email: data.profile.email,
                phonenumber: data.profile.phonenumber,
                JobCategory: data.profile.JobCategory,
                selfDescription: data.profile.selfDescription,
              },
            });
          }}
        />
        <TextField
          required
          id="outlined-required"
          label="Email"
          variant="outlined"
          value={data.profile.email}
          onChange={(e) => {
            const { value } = e.target;
            setdata({
              ...data,
              profile: {
                firstname: data.profile.firstname,
                lastname: data.profile.lastname,
                email: value,
                phonenumber: data.profile.phonenumber,
                JobCategory: data.profile.JobCategory,
                selfDescription: data.profile.selfDescription,
              },
            });
          }}
        />
        <TextField
          required
          id="outlined-required"
          label="Phone Number"
          variant="outlined"
          value={data.profile.phonenumber}
          onChange={(e) => {
            const { value } = e.target;
            setdata({
              ...data,
              profile: {
                firstname: data.profile.firstname,
                lastname: data.profile.lastname,
                email: data.profile.email,
                phonenumber: value,
                JobCategory: data.profile.JobCategory,
                selfDescription: data.profile.selfDescription,
              },
            });
          }}
        />
        <TextField
          required
          id="outlined-required"
          label="Job Category"
          variant="outlined"
          value={data.profile.JobCategory}
          onChange={(e) => {
            const { value } = e.target;
            setdata({
              ...data,
              profile: {
                firstname: data.profile.firstname,
                lastname: data.profile.lastname,
                email: data.profile.email,
                phonenumber: data.profile.phonenumber,
                JobCategory: value,
                selfDescription: data.profile.selfDescription,
              },
            });
          }}
        />
        <TextField
          required
          id="outlined-required"
          label="Description"
          variant="outlined"
          value={data.profile.selfDescription}
          onChange={(e) => {
            const { value } = e.target;
            setdata({
              ...data,
              profile: {
                firstname: data.profile.firstname,
                lastname: data.profile.lastname,
                email: data.profile.email,
                phonenumber: data.profile.phonenumber,
                JobCategory: data.profile.JobCategory,
                selfDescription: value,
              },
            });
          }}
        />
      </Box>
      <button
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
      </button>
      <Stepper />
      <hr />
      <PDF data={data} />
      <hr />
    </div>
  );
};

export default Home;
