import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Check from "@mui/icons-material/Check";
import PersonIcon from "@mui/icons-material/Person";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import BlurOnIcon from "@mui/icons-material/BlurOn";
import SummarizeIcon from "@mui/icons-material/Summarize";
import SchoolIcon from "@mui/icons-material/School";
import LanguageIcon from "@mui/icons-material/Language";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import CardMembershipIcon from "@mui/icons-material/CardMembership";
import { Box, Button, TextField } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";

import "./Styles/FormStepper.css";

const QontoStepIconRoot = styled("div")(({ theme, ownerState }) => ({
  color: theme.palette.mode === "dark" ? theme.palette.grey[700] : "#eaeaf0",
  display: "flex",
  height: 22,
  alignItems: "center",
  ...(ownerState.active && {
    color: "#784af4",
  }),
  "& .QontoStepIcon-completedIcon": {
    color: "#784af4",
    zIndex: 1,
    fontSize: 18,
  },
  "& .QontoStepIcon-circle": {
    width: 8,
    height: 8,
    borderRadius: "50%",
    backgroundColor: "currentColor",
  },
}));

function QontoStepIcon(props) {
  const { active, completed, className } = props;

  return (
    <QontoStepIconRoot ownerState={{ active }} className={className}>
      {completed ? (
        <Check className="QontoStepIcon-completedIcon" />
      ) : (
        <div className="QontoStepIcon-circle" />
      )}
    </QontoStepIconRoot>
  );
}

QontoStepIcon.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  active: PropTypes.bool,
  className: PropTypes.string,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: PropTypes.bool,
};

const ColorlibStepIconRoot = styled("div")(({ theme, ownerState }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? theme.palette.grey[700] : "#ccc",
  zIndex: 1,
  color: "#fff",
  width: 50,
  height: 50,
  display: "flex",
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "center",
  ...(ownerState.active && {
    backgroundImage:
      "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
  }),
  ...(ownerState.completed && {
    backgroundImage:
      "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
  }),
}));

function ColorlibStepIcon(props) {
  const { active, completed, className } = props;

  const icons = {
    1: <PersonIcon />,
    2: <SummarizeIcon />,
    3: <WorkOutlineIcon />,
    4: <BlurOnIcon />,
    5: <SchoolIcon />,
    6: <LanguageIcon />,
    7: <CardMembershipIcon />,
    8: <EmojiEventsIcon />,
  };

  return (
    <ColorlibStepIconRoot
      ownerState={{ completed, active }}
      className={className}
    >
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}

ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  active: PropTypes.bool,
  className: PropTypes.string,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node,
};

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function CustomizedSteppers() {
  const [activeStep, setActiveStep] = useState(0);

  const [checked, setChecked] = useState(false);
  const toggleChecked = () => setChecked((value) => !value);

  const handleNext = () => {
    if (activeStep === 7) {
      console.log("no more " + activeStep);
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      console.log("less " + activeStep);
    }
  };

  const handleBack = () => {
    if (activeStep === 0) {
      console.log("no more " + activeStep);
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
      console.log("less " + activeStep);
    }
  };

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
        currentlylyEmployed: Boolean,
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
  const forms = [
    {
      label: "Profile",
      input: (
        <>
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
        </>
      ),
    },
    {
      label: "Summary",
      input: (
        <>
          <TextField
            id="outlined-required"
            label="Street Address"
            variant="outlined"
            value={data.contactInformation.StreetAddress}
            onChange={(e) => {
              const { value } = e.target;
              setdata({
                ...data,
                contactInformation: {
                  StreetAddress: value,
                  City: data.contactInformation.City,
                  State: data.contactInformation.State,
                  Country: data.contactInformation.Country,
                },
              });
            }}
          />
          <TextField
            id="outlined-required"
            label="City"
            variant="outlined"
            value={data.contactInformation.City}
            onChange={(e) => {
              const { value } = e.target;
              setdata({
                ...data,
                contactInformation: {
                  StreetAddress: data.contactInformation.StreetAddress,
                  City: value,
                  State: data.contactInformation.State,
                  Country: data.contactInformation.Country,
                },
              });
            }}
          />
          <TextField
            id="outlined-required"
            label="State"
            variant="outlined"
            value={data.contactInformation.State}
            onChange={(e) => {
              const { value } = e.target;
              setdata({
                ...data,
                contactInformation: {
                  StreetAddress: data.contactInformation.StreetAddress,
                  City: data.contactInformation.City,
                  State: value,
                  Country: data.contactInformation.Country,
                },
              });
            }}
          />
          <TextField
            id="outlined-required"
            label="Country"
            variant="outlined"
            value={data.contactInformation.Country}
            onChange={(e) => {
              const { value } = e.target;
              setdata({
                ...data,
                contactInformation: {
                  StreetAddress: data.contactInformation.StreetAddress,
                  City: data.contactInformation.City,
                  State: data.contactInformation.State,
                  Country: value,
                },
              });
            }}
          />
        </>
      ),
    },
    {
      label: "Experience",
      input: (
        <>
          <TextField
            id="outlined-required"
            label="Company, organization, volunteer "
            variant="outlined"
            value={data.experience.company}
            onChange={(e) => {
              const { value } = e.target;
              setdata({
                ...data,
                experience: {
                  company: value,
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
              });
            }}
          />
          <TextField
            id="outlined-required"
            label="Role or job title"
            variant="outlined"
            value={data.experience.role}
            onChange={(e) => {
              const { value } = e.target;
              setdata({
                ...data,
                experience: {
                  company: data.experience.company,
                  role: value,
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
              });
            }}
          />
          <br />
          <TextField
            id="outlined-required"
            label="Start Date"
            variant="outlined"
            value={data.experience.StartDate}
            onChange={(e) => {
              const { value } = e.target;
              setdata({
                ...data,
                experience: {
                  company: data.experience.company,
                  role: data.experience.role,
                  StartDate: value,
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
              });
            }}
          />
          {checked === false ? (
            <TextField
              id="outlined-required"
              label="End Date"
              variant="outlined"
              value={data.experience.EndDate}
              onChange={(e) => {
                const { value } = e.target;
                setdata({
                  ...data,
                  experience: {
                    company: data.experience.company,
                    role: data.experience.role,
                    StartDate: data.experience.StartDate,
                    EndDate: value,
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
                });
              }}
            />
          ) : (
            <TextField
              disabled
              id="outlined-required"
              label="End Date"
              variant="filled"
              value={data.experience.EndDate}
              onChange={(e) => {
                const { value } = e.target;
                setdata({
                  ...data,
                  experience: {
                    company: data.experience.company,
                    role: data.experience.role,
                    StartDate: data.experience.StartDate,
                    EndDate: value,
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
                });
              }}
            />
          )}

          <br />
          <Checkbox
            {...label}
            value={data.experience.currentstate.currentlylyEmployed}
            onChange={() => {
              setdata({
                ...data,
                experience: {
                  company: data.experience.company,
                  role: data.experience.role,
                  StartDate: data.experience.StartDate,
                  EndDate: data.experience.EndDate,
                  responsibilitiesAccomplishments:
                    data.experience.responsibilitiesAccomplishments,
                  currentstate: {
                    currentlylyEmployed: checked,
                    City: data.experience.currentstate.City,
                    State: data.experience.currentstate.State,
                    Country: data.experience.currentstate.Country,
                  },
                },
              });
              toggleChecked();
            }}
          />
          <span>currentlyly employed</span>

          <br />
          <TextField
            id="outlined-required"
            label="City"
            variant="outlined"
            value={data.experience.currentstate.City}
            onChange={(e) => {
              const { value } = e.target;
              setdata({
                ...data,
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
                    City: value,
                    State: data.experience.currentstate.State,
                    Country: data.experience.currentstate.Country,
                  },
                },
              });
            }}
          />
          <TextField
            id="outlined-required"
            label="State"
            variant="outlined"
            value={data.experience.currentstate.State}
            onChange={(e) => {
              const { value } = e.target;
              setdata({
                ...data,
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
                    State: value,
                    Country: data.experience.currentstate.Country,
                  },
                },
              });
            }}
          />
          <TextField
            id="outlined-required"
            label="Country"
            variant="outlined"
            value={data.experience.currentstate.Country}
            onChange={(e) => {
              const { value } = e.target;
              setdata({
                ...data,
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
                    Country: value,
                  },
                },
              });
            }}
          />
          <br />
          <textarea
            placeholder="Responsibilities and Accomplishments"
            className="resize_input"
            value={data.experience.responsibilitiesAccomplishments}
            onChange={(e) => {
              const { value } = e.target;
              setdata({
                ...data,
                experience: {
                  company: data.experience.company,
                  role: data.experience.role,
                  StartDate: data.experience.StartDate,
                  EndDate: data.experience.EndDate,
                  responsibilitiesAccomplishments: value,
                  currentstate: {
                    currentlylyEmployed:
                      data.experience.currentstate.currentlylyEmployed,
                    City: data.experience.currentstate.City,
                    State: data.experience.currentstate.State,
                    Country: data.experience.currentstate.Country,
                  },
                },
              });
            }}
          />
        </>
      ),
    },
    {
      label: "Skills",
      input: <>hi</>,
    },
    {
      label: "Education",
      input: <>oki</>,
    },
    {
      label: "Languages",
      input: <>nice</>,
    },
    {
      label: "Certificates",
      input: <>no</>,
    },
    {
      label: "Awards",
      input: <>none</>,
    },
  ];
  return (
    <div className="form_stepper">
      <Box
        className="center_text"
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div>{forms[activeStep].label}</div>
        <div>{forms[activeStep].input}</div>
      </Box>

      <footer className="form_footer">
        {activeStep === 0 ? (
          <Button className="nav_btn" variant="outlined" size="medium" disabled>
            Back
          </Button>
        ) : (
          <Button
            className="nav_btn"
            variant="contained"
            size="medium"
            onClick={() => {
              handleBack();
            }}
          >
            Back
          </Button>
        )}

        {activeStep === 7 ? (
          <Button className="nav_btn" variant="outlined" size="medium" disabled>
            Next
          </Button>
        ) : (
          <Button
            className="nav_btn"
            variant="contained"
            size="medium"
            onClick={() => {
              handleNext();
            }}
          >
            Next
          </Button>
        )}
      </footer>
    </div>
  );
}

export default CustomizedSteppers;
