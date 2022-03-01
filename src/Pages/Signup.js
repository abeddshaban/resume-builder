import "./Styles/Signup.css";
import { Box, Button, Card, TextField } from "@mui/material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../Redux/userSlice";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../Firebase/firebase";

const Signup = () => {
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [repeatPassword, setrepeatPassword] = useState("");

  let navigate = useNavigate();

  const dispatch = useDispatch();

  const Register = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, Email, Password)
      .then((userCredential) => {
        // Sign-up
        const user = userCredential.user;

        updateProfile(auth.currentUser, {
          displayName: FirstName + " " + LastName,
        }).then(() => {
          console.log("profile status updated");

          dispatch(
            login({
              email: user.email,
              uid: user.uid,
              displayName: user.displayName,
            })
          );
        });

        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        console.log(errorCode);
        console.log(errorMessage);
      });

    // push history and go to dashboard
    navigate("/");
  };

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
              value={FirstName}
              onChange={(e) => setFirstName(e.target.value)}
              sx={{ margin: "20px" }}
              label="First Name"
              variant="standard"
            />
            <TextField
              value={LastName}
              onChange={(e) => setLastName(e.target.value)}
              sx={{ margin: "20px" }}
              label="Last Name"
              variant="standard"
            />
            <TextField
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{ margin: "20px" }}
              label="Email"
              variant="standard"
            />
            <TextField
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
              sx={{ margin: "20px" }}
              label="Password"
              variant="standard"
            />
            <TextField
              value={repeatPassword}
              onChange={(e) => setrepeatPassword(e.target.value)}
              sx={{ margin: "20px" }}
              label="Repeat Password"
              variant="standard"
            />
          </div>

          <span className="padtop20 padLeft20 bold">
            Have an account?
            <Link to="/login" className="link bold blue underlined">
              Login now!
            </Link>
          </span>

          <div className="contentcenter margintop20">
            <Link to="/" className="link">
              <Button variant="outlined">cancel</Button>
            </Link>

            <Button onClick={Register} variant="outlined">
              signup
            </Button>
          </div>
        </Card>
      </Box>
    </div>
  );
};

export default Signup;
