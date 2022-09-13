import { initializeApp, getApp, getApps } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBE6qt5TMjgSzifV5U_a64plzxqIhaofVg",
  authDomain: "mern-music.firebaseapp.com",
  projectId: "mern-music",
  storageBucket: "mern-music.appspot.com",
  messagingSenderId: "733587757471",
  appId: "1:733587757471:web:c267af2c9665a03e2905aa",
  measurementId: "G-6DLN2RFTXM",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const storage = getStorage(app);

export { app, storage };
