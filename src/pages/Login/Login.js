import React from "react";
import { FcGoogle } from "react-icons/fc";
import { SiFacebook } from "react-icons/si";
import { app } from "../../config/firebase.config";
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Login() {
  //firebase
  const firebaseAuth = getAuth(app);
  //   const google = new GoogleAuthProvider();
  //   const facebook = new FacebookAuthProvider();

  const navigate = useNavigate();

  const loginWithGoogle = async () => {
    console.log("gugo");
  };
  return (
    <div className="relative w-screen h-screen">
      <div className="absolute inset-0 bg-darkOverlay flex items-center justify-center p-4">
        <div className="w-full md:w-375 p-4 bg-lightOverlay shadow-2xl rounded-md backdrop-blur-md flex flex-col items-center justify-center">
          <div className="flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-cardOverlay cursor-pointer hover:bg-card hover:shadow-md duration-100 ease-in-out transition-all my-2">
            <FcGoogle className="text-xl" onClick={loginWithGoogle} />
            Sign in with Google
          </div>
          <div className="flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-cardOverlay cursor-pointer hover:bg-card hover:shadow-md duration-100 ease-in-out transition-all my-2">
            <SiFacebook className="text-xl" />
            Sign in with Facebook
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
