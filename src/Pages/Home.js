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
      <label>job: {data.profile.JobCategory} </label>
      <hr />
      <button
        onClick={() => {
          setdata({
            profile: {
              firstname: "Mosbah",
              lastname: data.profile.lastname,
              email: data.profile.email,
              phonenumber: data.profile.phonenumber,
              JobCategory: data.profile.JobCategory,
              selfDescription: data.profile.selfDescription,
            },
            contactInformation: {
              StreetAddress: data.contactInformation.StreetAddress,
              City: data.contactInformation.City,
              State: data.contactInformation.State,
              Country: data.contactInformation.Country,
            },
            experience: {
              company: data.experience.company,
              role: data.experience.role,
              StartDate: data.experience.StartDate,
              EndDate: data.experience.EndDate,
              responsibilitiesAccomplishments:
                data.experience.responsibilitiesAccomplishments,
              currentstate: {
                currentlylyEmployed:
                  data.experience.currentstate.currentlylyEmployed,
                City: data.experience.currentstate.City,
                State: data.experience.currentstate.State,
                Country: data.experience.currentstate.Country,
              },
            },
            skills: data.skills,
            education: {
              studyPlace: data.education.studyPlace,
              major: data.education.major,
              City: data.education.City,
              State: data.education.State,
              Country: data.education.Country,
              graduationDate: data.education.graduationDate,
              academicAchievements: data.education.academicAchievements,
            },
            languages: data.languages,
            certificates: data.certificates,
            awards: data.awards,
          });
        }}
      >
        the name is mosbah123
      </button>

      <hr />
      <PDF data={data} />
      <hr />
    </div>
  );
};

export default Home;
