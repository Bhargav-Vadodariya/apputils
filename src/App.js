import { useState } from 'react';
import './App.css';
import AboutUs from './Components.js/AboutUs';
import Navbar from './Components.js/Navbar';
import Textform from './Components.js/Textform';
import Alert from './Components.js/Alert';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert('Dark mode has been enabled', 'success');
      document.title = 'TextUtils - Dark Mode';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled', 'success');
      document.title = 'TextUtils - Light Mode';
    }
  };



    const [alert, setAlert] = useState('');
    const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  return (
    <>
    <Router>
      <Navbar mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3 ">
        <Switch>
      <Route path="/about">
      <AboutUs mode={mode} />
      </Route>
      <Route path="/">
        <Textform showAlert={showAlert} mode={mode} heading="Enter the text to analyze below" />
        </Route>
      </Switch>
      </div>
      </Router>
    </>
  );
}

export default App;
