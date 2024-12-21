import React from "react";
import MainRouter from "./routers/main";
import Header from "./components/Header";

const App = () => {
  return (
    <div>
      <Header />
      <div className="max-w-[1440px] mx-auto py-10 px-4">
        <MainRouter />
      </div>
    </div>
  );
};

export default App;
