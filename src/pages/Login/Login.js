import React, { useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { SiFacebook } from "react-icons/si";
import { useNavigate } from "react-router-dom";
import { app } from "../../config/firebase.config";
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
} from "firebase/auth";

function Login({ setAuth }) {
  //firebase
  const firebaseAuth = getAuth(app);
  const google = new GoogleAuthProvider();
  const facebook = new FacebookAuthProvider();

  const navigate = useNavigate();

  const loginWithGoogle = async () => {
    try {
      const userCred = await signInWithPopup(firebaseAuth, google);
      if (userCred) {
        if (userCred) {
          if (userCred) {
            setAuth(true);
            window.localStorage.setItem("auth", "true");
          }
          firebaseAuth.onAuthStateChanged((userCred) => {
            if (userCred) {
              userCred.getIdToken().then((tokenId) => {
                console.log(tokenId);
              });
              navigate("/", { replace: true });
            } else {
              setAuth(false);
              navigate("/login");
            }
          });
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  const loginWithFacebook = async () => {
    try {
      const userCred = await signInWithPopup(firebaseAuth, facebook);
      if (userCred) {
        if (userCred) {
          setAuth(true);
          window.localStorage.setItem("auth", "true");
        }
        firebaseAuth.onAuthStateChanged((userCred) => {
          if (userCred) {
            userCred.getIdToken().then((tokenId) => {
              console.log(tokenId);
            });
            navigate("/", { replace: true });
          } else {
            setAuth(false);
            navigate("/login");
          }
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (window.localStorage.getItem("auth") === "true") {
      navigate("/", { replace: true });
    }
  }, []);
  return (
    <div className="relative w-screen h-screen">
      <div className="absolute inset-0 bg-darkOverlay flex items-center justify-center p-4">
        <div className="w-full md:w-375 p-4 bg-lightOverlay shadow-2xl rounded-md backdrop-blur-md flex flex-col items-center justify-center">
          <div
            className="flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-cardOverlay cursor-pointer hover:bg-card hover:shadow-md duration-100 ease-in-out transition-all my-2"
            onClick={loginWithGoogle}
          >
            <FcGoogle className="text-xl" />
            Sign in with Google
          </div>
          <div
            className="flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-cardOverlay cursor-pointer hover:bg-card hover:shadow-md duration-100 ease-in-out transition-all my-2"
            onClick={loginWithFacebook}
          >
            <SiFacebook className="text-xl" />
            Sign in with Facebook
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
