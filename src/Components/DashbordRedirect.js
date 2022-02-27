import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "../Redux/userSlice";
import auth from "../Firebase/firebase";

const DashbordRedirect = () => {
  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  useEffect(
    () => {
      auth.onAuthStateChanged((userAuth) => {
        if (userAuth) {
          // user is  logged in
          dispatch(
            login({
              email: userAuth.email,
              uid: userAuth.uid,
              displayName: userAuth.displayName,
              photoURL: userAuth.photoURL,
            })
          );
        } else {
          // user is  logged out
          dispatch(logout());
        }
      });
    },
    // i added disdpatch
    [dispatch]
  );
  return (
    <>
      {!user ? (
        // <Login />
        <>
          {/* <h2>hi</h2> */}
          <h2>no</h2>
        </>
      ) : (
        <div className="app__body">
          <h2>hi</h2>
          {/* <Navigate to="/questions/1" replace /> */}
        </div>
      )}
    </>
  );
};

export default DashbordRedirect;
