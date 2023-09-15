import React, { useState } from 'react';

export default function TextForm(props) {
  const [text, setText] = useState('Enter text here');
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);
  const [isExtraspace, setExtraspaces] = useState(false);

  const handleUpClick = () => {
    console.log('Uppercase was clicked: ' + text);
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLoClick = () => {
    console.log('Lowercase was clicked: ' + text);
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleSpaceClick = () => {
    console.log('Lowercase was clicked: ' + text);
    let newText = text.replace(/\s+/g, ' ');
    setText(newText);
  };

  const handleBoldClick = () => {
    setIsBold(!isBold);
  };

  const handleItalicClick = () => {
    setIsItalic(!isItalic);
  };

  const handleUnderlineClick = () => {
    setIsUnderline(!isUnderline);
  };

  const handleOnChange = (event) => {
    console.log('On change');
    setText(event.target.value);
  };

  return (
    <div className="container">
      <h1>{props.heading}</h1>
      <div className="mb-8">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="mybox"
          rows="8"
        ></textarea>
      </div>
      <button
        type="button"
        className="btn btn-primary m-1"
        onClick={handleUpClick}
      >
        Uppercase
      </button>
      <button
        type="button"
        className="btn btn-primary m-1"
        onClick={handleLoClick}
      >
        Lowercase
      </button>
      <button
        type="button"
        className="btn btn-primary m-1"
        onClick={handleBoldClick}
      >
        {isBold ? 'Unbold' : 'Bold'}
      </button>
      <button
        type="button"
        className="btn btn-primary m-1"
        onClick={handleItalicClick}
      >
        {isItalic ? 'Unitalic' : 'Italic'}
      </button>
      <button
        type="button"
        className="btn btn-primary m-1"
        onClick={handleUnderlineClick}
      >
        {isUnderline ? 'Remove Underline' : 'Underline'}
      </button>
      <button
        type="button"
        className="btn btn-primary m-1"
        onClick={handleSpaceClick}
      >
        Remove Extra Space
      </button>
      <div className="container">
        <h1>Number of Words</h1>
        <p>{text.split(' ').length} words</p>
      </div>
      <div className="container">
        <h1>Your text currently looks</h1>
        <p
          style={{
            fontWeight: isBold ? 'bold' : 'normal',
            fontStyle: isItalic ? 'italic' : 'normal',
            textDecoration: isUnderline ? 'underline' : 'none',
          }}
        >
          {text}
        </p>
      </div>
    </div>
  );
}
