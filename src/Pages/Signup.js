import { Box, Button, Card, TextField } from "@mui/material";
import "./Styles/Signup.css";

const Signup = () => {
  return (
    <div className="login_div contentcenter padtop20">
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
          paddingLeft: "10px",
          "& > :not(style)": {
            m: 1,
            width: 330,
            height: 400,
          },
        }}
      >
        <Card variant="outlined">
          <h2 className="logincenter">Login</h2>
          <div className="contentcentercolumn">
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
          </div>
          <div className="contentcenter margintop20">
            <Button variant="outlined">cancel</Button>
            <Button variant="outlined">login</Button>
          </div>
        </Card>
      </Box>
    </div>
  );
};

export default Signup;
