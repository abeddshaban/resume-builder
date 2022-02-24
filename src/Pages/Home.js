import React, { useState } from "react";
import PDF from "../Components/PDF";

const Home = () => {
  const [data, setdata] = useState({
    profile: {
      firstname: "Abed Al Ghani",
      lastname: "Shaaban",
      email: "example@gmail.com",
      phonenumber: "ex: 563278723",
      JobCategory: "Job Category",
      selfDescription:
        "A summation of relevant professional abilities, accomplishments, and personal qualities that make you the right candidate for the job. Be sure to give your potential employer a relevant snapshot of who you are and what you can offer. Tailor it to the position you're applying for, focusing on the most relevant qualifications for the job.",
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
    <div>
      <label>
        name: {data.profile.firstname} {data.profile.lastname}
      </label>
      <hr />
      <label>email: {data.profile.email} </label>
      <hr />
      <label>coutry: {data.contactInformation.Country} </label>
      <hr />
      <input
        type="text"
        name="firstname"
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

      <input
        type="text"
        name="lasttname"
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
      <input
        type="email"
        name="email"
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
      <input
        type="tel"
        name="phonenumber"
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
      <input
        type="text"
        name="jobcategoty"
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
      <input
        type="text"
        name="selfDescription"
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
      <hr />
      <PDF data={data} />
      <hr />
    </div>
  );
};

export default Home;
