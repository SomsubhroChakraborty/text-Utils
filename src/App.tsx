import React, { useState } from 'react';
import './style.css';
import Navbar from './componant/Navbar';
import TextForm from './componant/TextForm';

export default function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
    } else {
      setMode('light');
    }
  };

  return (
    <>
      <Navbar
        title="TextUtils"
        className="container"
        mode={mode}
        toggleMode={toggleMode}
      />
      <TextForm heading="Enter your text to analyze" />
    </>
  );
}
