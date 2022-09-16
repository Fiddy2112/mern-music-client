import React from "react";
import { Header } from "../../components";

function Dashboard() {
  return (
    <div className="w-full h-auto flex flex-col  justify-center bg-primary">
      <Header />

      <div className="w-[60%] my-2 bg-yellow-500 py-4  items-center justify-center"></div>
    </div>
  );
}

export default Dashboard;
