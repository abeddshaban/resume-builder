import "./Styles/NavBar.css";
import React, { useEffect } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import { Link, useNavigate } from "react-router-dom";

//
import ListItemText from "@mui/material/ListItemText";
import { useDispatch, useSelector } from "react-redux";
import { signOut, onAuthStateChanged } from "firebase/auth";

import { login, logout, selectUser } from "../Redux/userSlice";
import { auth } from "../Firebase/firebase";

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-start",
}));

export default function PersistentDrawerRight() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  let navigate = useNavigate();

  const userState = useSelector(selectUser);

  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (userState) {
        // user is  logged in
        dispatch(
          login({
            email: user.email,
            uid: user.uid,
            displayName: user.displayName,
          })
        );
        // const uid = user.uid;
        console.log("loged-in");
      } else {
        // User is signed out
        dispatch(logout());
        console.log("loged-out");
      }
    });
  }, [dispatch]);

  const logoutOfApp = () => {
    dispatch(logout());
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log("Sign-out successful.");
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
    navigate("/");
  };

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <DrawerHeader />

        <AppBar position="fixed" open={open}>
          <Toolbar>
            <Typography
              variant="h6"
              noWrap
              sx={{ flexGrow: 1 }}
              component="div"
            >
              Project Name
            </Typography>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerOpen}
              sx={{ ...(open && { display: "none" }) }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>

        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
            },
          }}
          variant="persistent"
          anchor="right"
          open={open}
        >
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List>
            {/* home */}
            <Link to="/" className="link" onClick={handleDrawerClose}>
              <ListItem button>
                <ListItemText primary="Home" />
              </ListItem>
            </Link>

            {/* resume-builder */}
            <Link
              to="/resume-builder"
              className="link"
              onClick={handleDrawerClose}
            >
              <ListItem button>
                <ListItemText primary="Resume builder" />
              </ListItem>
            </Link>

            {/* login / logout */}
            {!userState ? (
              <Link to="/login" className="link" onClick={handleDrawerClose}>
                <ListItem button>
                  <ListItemText primary="login" />
                </ListItem>
              </Link>
            ) : (
              <ListItem sx={{ color: "#ff0000" }} button>
                <ListItemText
                  onClick={(logoutOfApp, handleDrawerClose)}
                  primary="logout"
                />
              </ListItem>
            )}
          </List>
          <Divider />
        </Drawer>
      </Box>
    </>
  );
}
