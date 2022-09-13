import React, { useEffect, useState } from "react";
import Login from "../../pages/Login/Login";
import { getAuth } from "firebase/auth";
import { app } from "../../config/firebase.config";
import { useNavigate } from "react-router-dom";

function Auth({ authRoute }) {
  const firebaseAuth = getAuth(app);

  const navigate = useNavigate();

  const [auth, setAuth] = useState(
    false || window.localStorage.getItem("auth") === "true"
  );

  useEffect(() => {
    firebaseAuth.onAuthStateChanged((userCred) => {
      if (userCred) {
        userCred.getIdToken().then((tokenId) => {
          console.log(tokenId);
        });
      } else {
        setAuth(false);
        window.localStorage.setItem("auth", "false");
        navigate("/login");
      }
    });
  }, []);

  return <div>{authRoute === "/login" && <Login setAuth={setAuth} />}</div>;
}

export default Auth;
