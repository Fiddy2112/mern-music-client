import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Auth from "./components/auth";
import { Home, Dashboard } from "./components/index";
import "./App.css";

function App() {
  return (
    <AnimatePresence exitBeforeEnter>
      <div className="h-auto min-w-[680px] bg-primary flex justify-center items-center ">
        <Routes>
          <Route path="/login" element={<Auth authRoute="/login" />} />

          <Route path="/" element={<Home />} />
          <Route path="/dashboard/" element={<Dashboard />} />
        </Routes>
      </div>
    </AnimatePresence>
  );
}

export default App;
