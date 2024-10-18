
import './App.css';
import Navbar from "./Components.js/Navbar"
import Textform from "./Components.js/Textform"

function App() {
  return (
    <>
      <Navbar />
      <div className="container my-3 ">
        <Textform heading="Enter the text to analyze below" />
      </div>
    </>
  );
}

export default App;
