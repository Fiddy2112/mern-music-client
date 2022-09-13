import { Routes, Route } from "react-router-dom";
import "./App.css";
import Auth from "./components/auth";
import { Home } from "./components/index";

function App() {
  return (
    <div className="w-screen h-screen bg-primary flex justify-center items-center ">
      <Routes>
        <Route path="/login" element={<Auth authRoute="/login" />} />
        <Route path="/*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
