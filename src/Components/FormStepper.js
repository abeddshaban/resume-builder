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
import { Box, Button, Card, TextareaAutosize, TextField } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import Autocomplete from "@mui/material/Autocomplete";

import "./Styles/FormStepper.css";
import { Link } from "react-router-dom";

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
  const skillsdic = [
    {
      name: "HTML",
    },
    {
      name: "CSS",
    },
    {
      name: "CSS tools",
    },
    {
      name: "Photoshop",
    },
    {
      name: "JavaScript",
    },
    {
      name: "Java",
    },
    {
      name: "JavaFX",
    },
    {
      name: "NodeJS",
    },
    {
      name: "Go",
    },
    {
      name: "Python",
    },
    {
      name: "NumPy",
    },
    {
      name: "Scrum",
    },
    {
      name: "Coaching",
    },
    {
      name: "Machine Learning",
    },
    {
      name: "UI/UX Design",
    },
    {
      name: "React",
    },
    {
      name: "Search Engine Optimization",
    },
    {
      name: "Project Coordination",
    },
    {
      name: "Stakeholder Engagement",
    },
    {
      name: "Microsoft Excel",
    },
    {
      name: "Microsoft Outlook",
    },
    {
      name: "Microsoft Word",
    },
    {
      name: "Commercial Awareness",
    },
    {
      name: "Robot Framework",
    },
    {
      name: "Scaled Agile Framework",
    },
    {
      name: "Test-driven development",
    },
    {
      name: "Conflict resolution",
    },
    {
      name: "Negotiation",
    },
    {
      name: "HR Policies",
    },
    {
      name: "Spring framework",
    },
    {
      name: "Git",
    },
    {
      name: "Docker",
    },
    {
      name: "Redis",
    },
    {
      name: "Jira",
    },
    {
      name: "PostgreSQL",
    },
    {
      name: "Facilitation",
    },
    {
      name: "Building Trust",
    },
    {
      name: "Professional Networking",
    },
    {
      name: "Identifying External Influences",
    },
    {
      name: "Managing Talent",
    },
    {
      name: "Creating Company Culture",
    },
    {
      name: "Effective Listening",
    },
    {
      name: "Being Approachable & Accessible",
    },
    {
      name: "Change Management",
    },
    {
      name: "Persuasion",
    },
    {
      name: "Negotiating",
    },
    {
      name: "Problem-Solving",
    },
    {
      name: "Training",
    },
    {
      name: "Consulting",
    },
  ];

  const languagesdic = [
    { language: "Abkhaz" },
    { language: "Afar" },
    { language: "Afrikaans" },
    { language: "Akan" },
    { language: "Albanian" },
    { language: "Amharic" },
    { language: "Arabic" },
    { language: "Aragonese" },
    { language: "Armenian" },
    { language: "Assamese" },
    { language: "Avaric" },
    { language: "Avestan" },
    { language: "Aymara" },
    { language: "Azerbaijani" },
    { language: "Bambara" },
    { language: "Bashkir" },
    { language: "Basque" },
    { language: "Belarusian" },
    { language: "Bengali" },
    { language: "Bihari" },
    { language: "Bislama" },
    { language: "Bosnian" },
    { language: "Breton" },
    { language: "Bulgarian" },
    { language: "Burmese" },
    { language: "Catalan; Valencian" },
    { language: "Chamorro" },
    { language: "Chechen" },
    { language: "Chichewa; Chewa; Nyanja" },
    { language: "Chinese" },
    { language: "Chuvash" },
    { language: "Cornish" },
    { language: "Corsican" },
    { language: "Cree" },
    { language: "Croatian" },
    { language: "Czech" },
    { language: "Danish" },
    { language: "Divehi; Dhivehi; Maldivian;" },
    { language: "Dutch" },
    { language: "English" },
    { language: "Esperanto" },
    { language: "Estonian" },
    { language: "Ewe" },
    { language: "Faroese" },
    { language: "Fijian" },
    { language: "Finnish" },
    { language: "French" },
    { language: "Fula; Fulah; Pulaar; Pular" },
    { language: "Galician" },
    { language: "Georgian" },
    { language: "German" },
    { language: "Greek, Modern" },
    { language: "Guaraní" },
    { language: "Gujarati" },
    { language: "Haitian; Haitian Creole" },
    { language: "Hausa" },
    { language: "Hebrew (modern)" },
    { language: "Herero" },
    { language: "Hindi" },
    { language: "Hiri Motu" },
    { language: "Hungarian" },
    { language: "Interlingua" },
    { language: "Indonesian" },
    { language: "Interlingue" },
    { language: "Irish" },
    { language: "Igbo" },
    { language: "Inupiaq" },
    { language: "Ido" },
    { language: "Icelandic" },
    { language: "Italian" },
    { language: "Inuktitut" },
    { language: "Japanese" },
    { language: "Javanese" },
    { language: "Kalaallisut, Greenlandic" },
    { language: "Kannada" },
    { language: "Kanuri" },
    { language: "Kashmiri" },
    { language: "Kazakh" },
    { language: "Khmer" },
    { language: "Kikuyu, Gikuyu" },
    { language: "Kinyarwanda" },
    { language: "Kirghiz, Kyrgyz" },
    { language: "Komi" },
    { language: "Kongo" },
    { language: "Korean" },
    { language: "Kurdish" },
    { language: "Kwanyama, Kuanyama" },
    { language: "Latin" },
    { language: "Luxembourgish, Letzeburgesch" },
    { language: "Luganda" },
    { language: "Limburgish, Limburgan, Limburger" },
    { language: "Lingala" },
    { language: "Lao" },
    { language: "Lithuanian" },
    { language: "Luba-Katanga" },
    { language: "Latvian" },
    { language: "Manx" },
    { language: "Macedonian" },
    { language: "Malagasy" },
    { language: "Malay" },
    { language: "Malayalam" },
    { language: "Maltese" },
    { language: "Māori" },
    { language: "Marathi (Marāṭhī)" },
    { language: "Marshallese" },
    { language: "Mongolian" },
    { language: "Nauru" },
    { language: "Navajo, Navaho" },
    { language: "Norwegian Bokmål" },
    { language: "North Ndebele" },
    { language: "Nepali" },
    { language: "Ndonga" },
    { language: "Norwegian Nynorsk" },
    { language: "Norwegian" },
    { language: "Nuosu" },
    { language: "South Ndebele" },
    { language: "Occitan" },
    { language: "Ojibwe, Ojibwa" },
    {
      language:
        "Old Church Slavonic, Church Slavic, Church Slavonic, Old Bulgarian, Old Slavonic",
    },
    { language: "Oromo" },
    { language: "Oriya" },
    { language: "Ossetian, Ossetic" },
    { language: "Panjabi, Punjabi" },
    { language: "Pāli" },
    { language: "Persian" },
    { language: "Polish" },
    { language: "Pashto, Pushto" },
    { language: "Portuguese" },
    { language: "Quechua" },
    { language: "Romansh" },
    { language: "Kirundi" },
    { language: "Romanian, Moldavian, Moldovan" },
    { language: "Russian" },
    { language: "Sanskrit (Saṁskṛta)" },
    { language: "Sardinian" },
    { language: "Sindhi" },
    { language: "Northern Sami" },
    { language: "Samoan" },
    { language: "Sango" },
    { language: "Serbian" },
    { language: "Scottish Gaelic; Gaelic" },
    { language: "Shona" },
    { language: "Sinhala, Sinhalese" },
    { language: "Slovak" },
    { language: "Slovene" },
    { language: "Somali" },
    { language: "Southern Sotho" },
    { language: "Spanish; Castilian" },
    { language: "Sundanese" },
    { language: "Swahili" },
    { language: "Swati" },
    { language: "Swedish" },
    { language: "Tamil" },
    { language: "Telugu" },
    { language: "Tajik" },
    { language: "Thai" },
    { language: "Tigrinya" },
    { language: "Tibetan Standard, Tibetan, Central" },
    { language: "Turkmen" },
    { language: "Tagalog" },
    { language: "Tswana" },
    { language: "Tonga (Tonga Islands)" },
    { language: "Turkish" },
    { language: "Tsonga" },
    { language: "Tatar" },
    { language: "Twi" },
    { language: "Tahitian" },
    { language: "Uighur, Uyghur" },
    { language: "Ukrainian" },
    { language: "Urdu" },
    { language: "Uzbek" },
    { language: "Venda" },
    { language: "Vietnamese" },
    { language: "Volapük" },
    { language: "Walloon" },
    { language: "Welsh" },
    { language: "Wolof" },
    { language: "Western Frisian" },
    { language: "Xhosa" },
    { language: "Yiddish" },
    { language: "Yoruba" },
    { language: "Zhuang, Chuang" },
  ];

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
      selfDescription:
        " A summation of relevant professional abilities, accomplishments, and personal qualities that make you the right candidate for the job. Be sure to give your potential employer a relevant snapshot of who you are and what you can offer. Tailor it to the position you are applying for, focusing on the most relevant qualifications for the job.",
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
        currentlylyEmployed: true,
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
    skills: [],
    languages: [],
    certificates: "",
    awards: "",
  });

  const CreateResume = (e) => {
    e.preventDefault();
    console.log("create cv");
  };

  console.log(data);
  const forms = [
    {
      label: "Profile",
      input: (
        <>
          <TextField
            value={data.profile.firstname}
            required
            label="First Name"
            variant="outlined"
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
            value={data.profile.lastname}
            required
            label="Second Name"
            variant="outlined"
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
            value={data.profile.email}
            required
            label="Email"
            variant="outlined"
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
            value={data.profile.phonenumber}
            required
            label="Phone Number"
            variant="outlined"
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
            value={data.profile.JobCategory}
            required
            label="Job Category"
            variant="outlined"
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

          <TextareaAutosize
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
            minRows={3}
            placeholder="Description"
            style={{
              minHeight: 50,
              maxWidth: 210,
              minWidth: 210,
              width: 210,
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
            value={data.contactInformation.StreetAddress}
            label="Street Address"
            variant="outlined"
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
            value={data.contactInformation.City}
            label="City"
            variant="outlined"
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
            value={data.contactInformation.State}
            label="State"
            variant="outlined"
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
            value={data.contactInformation.Country}
            label="Country"
            variant="outlined"
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
            value={data.experience.company}
            label="Company, organization, volunteer "
            variant="outlined"
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
            value={data.experience.role}
            label="Role or job title"
            variant="outlined"
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
          <TextField
            value={data.experience.StartDate}
            label="Start Date"
            variant="outlined"
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
          {checked === true ? (
            <TextField
              value={data.experience.EndDate}
              label="End Date"
              variant="outlined"
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
              value={data.experience.EndDate}
              disabled
              label="End Date"
              variant="filled"
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
          <div>
            <Checkbox
              checked={data.experience.currentstate.currentlylyEmployed}
              {...label}
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
          </div>
          <TextField
            value={data.experience.currentstate.City}
            label="City"
            variant="outlined"
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
            value={data.experience.currentstate.State}
            label="State"
            variant="outlined"
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
            value={data.experience.currentstate.Country}
            label="Country"
            variant="outlined"
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

          <TextareaAutosize
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
            minRows={3}
            placeholder="Responsibilities and Accomplishments"
            style={{ maxWidth: 210, minWidth: 210, width: 210 }}
          />
        </>
      ),
    },
    {
      label: "Skills",
      input: (
        <>
          <Autocomplete
            value={data.skills}
            multiple
            options={skillsdic}
            getOptionLabel={(option) => option.name}
            onChange={(event, value) => {
              setdata({
                ...data,
                skills: value,
              });
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="standard"
                label="Skills"
                placeholder="Favorites"
                value={data.skills}
              />
            )}
          />
        </>
      ),
    },
    {
      label: "Education",
      input: (
        <>
          <TextField
            value={data.education.studyPlace}
            label="What school did you go to?"
            variant="outlined"
            onChange={(e) => {
              const { value } = e.target;
              setdata({
                ...data,
                education: {
                  studyPlace: value,
                  major: data.education.major,
                  City: data.education.City,
                  State: data.education.State,
                  Country: data.education.Country,
                  graduationDate: data.education.graduationDate,
                  academicAchievements: data.education.academicAchievements,
                },
              });
            }}
          />
          <TextField
            value={data.education.major}
            label="What did you study?"
            variant="outlined"
            onChange={(e) => {
              const { value } = e.target;
              setdata({
                ...data,
                education: {
                  studyPlace: data.education.studyPlace,
                  major: value,
                  City: data.education.City,
                  State: data.education.State,
                  Country: data.education.Country,
                  graduationDate: data.education.graduationDate,
                  academicAchievements: data.education.academicAchievements,
                },
              });
            }}
          />
          <TextField
            value={data.education.City}
            label="City"
            variant="outlined"
            onChange={(e) => {
              const { value } = e.target;
              setdata({
                ...data,
                education: {
                  studyPlace: data.education.studyPlace,
                  major: data.education.major,
                  City: value,
                  State: data.education.State,
                  Country: data.education.Country,
                  graduationDate: data.education.graduationDate,
                  academicAchievements: data.education.academicAchievements,
                },
              });
            }}
          />
          <TextField
            value={data.education.State}
            label="State"
            variant="outlined"
            onChange={(e) => {
              const { value } = e.target;
              setdata({
                ...data,
                education: {
                  studyPlace: data.education.studyPlace,
                  major: data.education.major,
                  City: data.education.City,
                  State: value,
                  Country: data.education.Country,
                  graduationDate: data.education.graduationDate,
                  academicAchievements: data.education.academicAchievements,
                },
              });
            }}
          />
          <TextField
            value={data.education.Country}
            label="Country"
            variant="outlined"
            onChange={(e) => {
              const { value } = e.target;
              setdata({
                ...data,
                education: {
                  studyPlace: data.education.studyPlace,
                  major: data.education.major,
                  City: data.education.City,
                  State: data.education.State,
                  Country: value,
                  graduationDate: data.education.graduationDate,
                  academicAchievements: data.education.academicAchievements,
                },
              });
            }}
          />
          <TextField
            value={data.education.graduationDate}
            label="Graduation Date"
            variant="outlined"
            onChange={(e) => {
              const { value } = e.target;
              setdata({
                ...data,
                education: {
                  studyPlace: data.education.studyPlace,
                  major: data.education.major,
                  City: data.education.City,
                  State: data.education.State,
                  Country: data.education.Country,
                  graduationDate: value,
                  academicAchievements: data.education.academicAchievements,
                },
              });
            }}
          />

          <TextareaAutosize
            value={data.education.academicAchievements}
            onChange={(e) => {
              const { value } = e.target;
              setdata({
                ...data,
                education: {
                  studyPlace: data.education.studyPlace,
                  major: data.education.major,
                  City: data.education.City,
                  State: data.education.State,
                  Country: data.education.Country,
                  graduationDate: data.education.graduationDate,
                  academicAchievements: value,
                },
              });
            }}
            minRows={3}
            placeholder="Academic Achievements"
            style={{ maxWidth: 210, minWidth: 210, width: 210 }}
          />
        </>
      ),
    },
    {
      label: "Languages",
      input: (
        <>
          <Autocomplete
            value={data.languages}
            multiple
            options={languagesdic}
            getOptionLabel={(option) => option.language}
            onChange={(event, value) => {
              setdata({
                ...data,
                languages: value,
              });
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="standard"
                label="Languages"
                placeholder="Favorites"
                value={data.languages}
              />
            )}
          />
        </>
      ),
    },
    {
      label: "Certificates",
      input: (
        <>
          <TextField
            value={data.certificates}
            label="Certificates"
            variant="outlined"
            onChange={(e) => {
              const { value } = e.target;
              setdata({
                ...data,
                certificates: value,
              });
            }}
          />
          <p className="small_grey_text">separate each certificate with a /</p>
        </>
      ),
    },
    {
      label: "Awards",
      input: (
        <>
          <TextField
            value={data.awards}
            label="Awards"
            variant="outlined"
            onChange={(e) => {
              const { value } = e.target;
              setdata({
                ...data,
                awards: value,
              });
            }}
          />
          <p className="small_grey_text">separate each Award with a /</p>
        </>
      ),
    },
  ];
  return (
    <div className="form_stepper ">
      <br />
      <br />
      <br />
      <Box
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        className="center_text"
        component="form"
        noValidate
        autoComplete="off"
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            flexWrap: "wrap",
            paddingLeft: "10px",
            "& > :not(style)": {
              m: 1,
              width: 340,
            },
          }}
        >
          <Card
            sx={{
              paddingTop: "40px",
              paddingBottom: "40px",
            }}
            variant="outlined"
          >
            <h2>{forms[activeStep].label}</h2>
            <div>{forms[activeStep].input}</div>
          </Card>
        </Box>
      </Box>

      <footer className="form_footer">
        {/* back btn */}
        {activeStep === 0 ? (
          <Button variant="outlined" size="medium" disabled>
            Back
          </Button>
        ) : (
          <Button
            variant="contained"
            size="medium"
            onClick={() => {
              handleBack();
            }}
          >
            Back
          </Button>
        )}

        {/* next / create btn */}
        {activeStep === 7 ? (
          <Link to={{ pathname: "/resume" }} className="link">
            <Button onClick={CreateResume} variant="contained" size="medium">
              create
            </Button>
          </Link>
        ) : (
          <Button
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
