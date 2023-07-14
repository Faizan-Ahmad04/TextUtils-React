import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import Alert from "./components/Alert";


function App() {
  // mode hook
  const [mode, setMode] = useState("ligthTheme");

  // change dark mode to ligth and ligth to dark 
  const toggleMode = () => {
    if (mode === "darkTheme") {
      setMode("ligthTheme");
      document.body.style.backgroundColor = "white";
      showAlert("Ligth mode has been enabled", "Success");
    } else {
      setMode("darkTheme");
      document.body.style.backgroundColor = "rgb(3 33 47)";
      showAlert("Dark mode has been enable", "Success");

    }
  };

  // Creat ha Alert Hook
  const [alert, setAlert] = useState(null);

  // show Alert method
  const showAlert = (message, type) => {
    // set alert 
    setAlert({
      msg: message,
      type:type
    })

    // auto dismiss alert after 2sec
    setTimeout(()=> {
      setAlert(null);
    },2000)
  };

  return (
    <>
      <Navbar Name="TextUtils" Home="Home" mode={mode} toggleMode={toggleMode} />

      <Alert alert={alert} />

      <Textform heading="Enter text to analyze" mode={mode} showAlert={showAlert}/>
    </>
  );
}

export default App;
