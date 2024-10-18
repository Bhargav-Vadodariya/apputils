
import React, {useState} from 'react'

export default function Textform(props) {
    const [text, setText] = useState("enter text here");
    const handleupclick = ()=>
    {
        
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Converted to uppercase', 'success');
    }
    const handleloclick = ()=>
    {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('Converted to lowercase', 'success');
    }
    const handleonchange = (event)=>
    {
        console.log('onchange is clicked');
        setText(event.target.value);
    }
    const handleClearClick = () => {
      let newText = '';
      setText(newText);
      props.showAlert('Text Cleared!', 'success');
    };
    const handleCopy = () => {
      navigator.clipboard.writeText(text);
      props.showAlert('Copied to Clipboard!', 'success');
    };

    
    const handleExtraSpaces = () => {
      let newText = text.split(/[ ]+/);
      setText(newText.join(' '));
      props.showAlert('Extra spaces removed!', 'success');
    };
    

  return (
    <>
      <div
        className="container my-3"
        style={{ color: props.mode === 'dark' ? 'white' : 'black' }}
      >
        <div>
          <h1>{props.heading}</h1>
          <div className="mb-3">
            <textarea
              className="form-control"
              value={text}
              onChange={handleonchange}
              style={{
                backgroundColor: props.mode === 'dark' ? '#13466e' : 'white',
                color: props.mode === 'dark' ? 'white' : '#042743',
              }}
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
          <button
            
            className="btn btn-primary mx-1 my-1"
            onClick={handleClearClick}
          >
            Clear Text
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-primary mx-1 my-1"
            onClick={handleCopy}
          >
            Copy Text
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-primary mx-1 my-1"
            onClick={handleExtraSpaces}
          >
            Remove Extra Spaces
          </button>
        </div>
      </div>
      <div
        className="container"
        style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}
      >
        <h1>Your text summary</h1>
        <p>
          {text.length} character and {text.split(' ').length} words
          <h3>Preview </h3>
          {text.length > 0
            ? text
            : 'Enter something in the textbox above to preview it here'}
        </p>
      </div>
    </>
  );
}

