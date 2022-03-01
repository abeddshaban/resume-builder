import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "../Redux/userSlice";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { auth } from "../Firebase/firebase";

const DashbordRedirect = () => {
  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        // user is logged in
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
          })
        );
      } else {
        // user is logged out
        dispatch(logout());
      }
    });
  }, [dispatch]);
  return (
    <>
      {!user ? (
        <>
          <h2>user out</h2>
          {/* <Navigate to="/signup" /> */}
        </>
      ) : (
        <div>
          <h2>logged in</h2>
        </div>
      )}
    </>
  );
};

export default DashbordRedirect;
