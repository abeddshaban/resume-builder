import * as React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Check from "@mui/icons-material/Check";
import PersonIcon from "@mui/icons-material/Person";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import BlurOnIcon from "@mui/icons-material/BlurOn";
import SummarizeIcon from "@mui/icons-material/Summarize";
import SchoolIcon from "@mui/icons-material/School";
import LanguageIcon from "@mui/icons-material/Language";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import CardMembershipIcon from "@mui/icons-material/CardMembership";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import { Box, Button } from "@mui/material";

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

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor:
      theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
    borderRadius: 1,
  },
}));

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

const steps = [
  "Profile",
  "Summary",
  "Experience",
  "Skills",
  "Education",
  "Languages",
  "Certificates",
  "Awards",
];

const forms = [
  {
    label: "Select campaign settings",
    description: `For each ad campaign that you create`,
  },
  {
    label: "Create an ad group",
    description: "An ad group contains one or more ",
  },
  {
    label: "Create an ad",
    description: `Try out different ad text to see`,
  },
  {
    label: "Create an ad",
    description: `4`,
  },
  {
    label: "Create an ad",
    description: `5`,
  },
  {
    label: "Create an ad",
    description: `6`,
  },
  {
    label: "Create an ad",
    description: `7`,
  },
  {
    label: "Create an ad",
    description: `8`,
  },
];

export default function CustomizedSteppers() {
  const [activeStep, setActiveStep] = useState(0);

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

  return (
    <div className="form_stepper">
      {/* <Stack sx={{ width: "100%" }} spacing={4}>
        <Stepper
          alternativeLabel
          activeStep={activeStep}
          connector={<ColorlibConnector />}
        >
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel StepIconComponent={ColorlibStepIcon}>
                {label}
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      </Stack> */}

      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <h2>hi</h2>
        {forms[activeStep].label}
        <br />
        {forms[activeStep].description}
        <h2>hi</h2>
      </Box>

      <footer className="navbar_footer">
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
