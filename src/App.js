import './App.css';
import Navbar from './componant/Navbar';
import Alert from './componant/Alert';
import Utility from './componant/Utility';
import About from './componant/About';
import Footer from './componant/Footer';
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";

function App() {
  const [mode, SetMode] = useState('light'); // whether it is dark or an light enabled
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);// used for alert fun
  }
  const toggleMode = () => {
    if (mode === 'light') {
      SetMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert("dark mode on", 'primary');// used for alert fun
    }
    else {
      SetMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("light mode on", 'primary');// used for alert fun
    }
  }
  return (
    <>
      {/* <Navbar title= 1007 (proptype explains)  Featur="Features of Notes"/> */}
      {/* <Navbar (this is testing of default props )/> */}
      <Router>
        <Navbar title="Text-Tool"  mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Switch>
          <Route exact path="/about" >
            <About heading="About the Text-Tool" mode={mode}  /> 
          </Route>
          <Route exact path="/">
            <Utility showAlert={showAlert} heading="Text Utilities" mode={mode} />
          </Route>
        </Switch>
        < Footer title="Text-Tool" mode={mode} toggleMode={toggleMode} />
      </Router>
    </>
  );
}

export default App;
