import { Box, Button, Card, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import "./Styles/Signup.css";

const Signup = () => {
  return (
    <div className="signup_div contentcenter padtop20">
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
          paddingLeft: "10px",
          marginBottom: "40px",
          "& > :not(style)": {
            m: 1,
            width: 330,
            height: 630,
          },
        }}
      >
        <Card variant="outlined">
          <h2 className="logincenter">Signup</h2>
          <div className="contentcentercolumn">
            <TextField
              sx={{ margin: "20px" }}
              label="First Name"
              variant="standard"
            />
            <TextField
              sx={{ margin: "20px" }}
              label="Last Name"
              variant="standard"
            />
            <TextField
              sx={{ margin: "20px" }}
              label="Email"
              variant="standard"
            />
            <TextField
              sx={{ margin: "20px" }}
              label="Password"
              variant="standard"
            />
            <TextField
              sx={{ margin: "20px" }}
              label="Repeat Password"
              variant="standard"
            />
          </div>
          <div className="contentcenter margintop20">
            <Link to="/" className="link">
              <Button variant="outlined">cancel</Button>
            </Link>
            <Button variant="outlined">signup</Button>
          </div>
        </Card>
      </Box>
    </div>
  );
};

export default Signup;
