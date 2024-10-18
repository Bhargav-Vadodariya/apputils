
import React, {useState} from 'react'

export default function Textform(props) {
    const [text, setText] = useState("enter text here");
    const handleupclick = ()=>
    {
        
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleloclick = ()=>
    {
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleonchange = (event)=>
    {
        console.log('onchange is clicked');
        setText(event.target.value);
    }
  return (
    <>
      <div className="container my-3">
        <div>
          <h1>{props.heading}</h1>
          <div className="mb-3">
            <textarea
              className="form-control"
              value={text}
              onChange={handleonchange}
              id="my-box"
              rows="8"
            ></textarea>
          </div>
          <button className="btn btn-primary mx-1" onClick={handleupclick}>
            Convert to Uppercase
          </button>
          <button className="btn btn-primary mx-1" onClick={handleloclick}>
            Convert to Lowercase
          </button>
        </div>
      </div>
      <div className="container">
        <h1>Your text summary</h1>
        <p>
          {text.length} character and {text.split(' ').length} words
          <h3>Preview </h3>
          {text}
        </p>
      </div>
    </>
  );
}

