import "./App.css";
import Home from "./components/Home";
import Paralex from "./components/Paralex";
import AOS from "aos";
import React, { useEffect } from "react";
function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  //return <Paralex />;
  return <Home />;
  /*return (
    
  );*/
}

export default App;
