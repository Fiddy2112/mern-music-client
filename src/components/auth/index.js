import React, { useEffect, useState } from "react";
import Login from "../../pages/Login/Login";
import { getAuth } from "firebase/auth";
import { app } from "../../config/firebase.config";
import { useNavigate } from "react-router-dom";
import { validateUser } from "../../api/index.";
import { useStateValue } from "../../context/StateProvider";
import { actionType } from "../../context/reducer";

function Auth({ authRoute }) {
  const firebaseAuth = getAuth(app);

  const navigate = useNavigate();

  const [{ user }, dispatch] = useStateValue();

  const [auth, setAuth] = useState(
    false || window.localStorage.getItem("auth") === "true"
  );

  useEffect(() => {
    firebaseAuth.onAuthStateChanged((userCred) => {
      if (userCred) {
        userCred.getIdToken().then((token) => {
          // console.log(token);
          window.localStorage.setItem("auth", "true");
          validateUser(token).then((data) => {
            dispatch({
              type: actionType.SET_USER,
              user: data,
            });
          });
        });
      } else {
        setAuth(false);
        dispatch({
          type: actionType.SET_USER,
          user: null,
        });

        window.localStorage.setItem("auth", "false");
        navigate("/login");
      }
    });
  }, []);

  return <div>{authRoute === "/login" && <Login setAuth={setAuth} />}</div>;
}

export default Auth;
