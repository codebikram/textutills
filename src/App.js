import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import TextBox from "./components/TextBox";
import Alert from "./components/Alert";
import About from "./components/About";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert ({
      msg: message,
      type: type,
    });
    console.log(alert);
  };
  setTimeout(() => {
    setAlert(null)
  }, 1800);

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#03294f";
      showAlert("Dark mode has been Enabled","success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been Enabled","success");
    }
  };
  return (
    <Router>
      <Navbar title="TextUtills" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <Switch>
          <Route exact path="/about">
            <About mode={mode}/>
          </Route>
          <Route exact path="/">
            <TextBox heading="Try TextUtills - Word Counter | Character Counter | Remove Extra spaces" mode={mode} showAlert={showAlert}/>          
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
