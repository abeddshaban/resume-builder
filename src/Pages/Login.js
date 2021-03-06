import "./Styles/Login.css";
import { Box, Button, Card, TextField } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../Redux/userSlice";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase/firebase";

const Login = () => {
  let navigate = useNavigate();
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const dispatch = useDispatch();

  const LoginTpApp = (e) => {
    e.preventDefault();

    if (!Email) {
      return alert("Please enter your email.");
    }
    if (!Password) {
      return alert("Please enter your password.");
    }

    signInWithEmailAndPassword(auth, Email, Password)
      .then((userCredential) => {
        // Sign-in
        const user = userCredential.user;
        dispatch(
          login({
            email: user.email,
            uid: user.uid,
            displayName: user.displayName,
          })
        );
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // push history to dashboard
        if (error) {
          return alert("Email or password are incorrect.");
        } else {
          navigate("/dashbordredirect");
        }
        console.log(errorCode);
        console.log(errorMessage);
      });
  };
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
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
              label="Email"
              variant="standard"
              sx={{ margin: "20px" }}
            />
            <TextField
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
              label="Password"
              variant="standard"
              sx={{ margin: "20px" }}
            />
          </div>

          <span className="padtop20 padLeft20 bold">
            Don't have an account?
            <Link to="/signup" className="link bold blue underlined padleft4">
              Signup now!
            </Link>
          </span>

          <div className="contentcenter margintop20">
            <Link to="/" className="link">
              <Button variant="outlined">cancel</Button>
            </Link>
            <Button onClick={LoginTpApp} variant="outlined">
              login
            </Button>
          </div>
        </Card>
      </Box>
    </div>
  );
};

export default Login;
