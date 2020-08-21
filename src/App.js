import React, { useState } from 'react';
import './App.css';
import DesignForm from './components/designForm';
import DisplayBoxes from './components/displayBoxes'

function App() {
  const [results, setResults] = useState([]);
  const [state, setState] = useState({
    color:"",
    height:"",
    width:""
  })
  return (
    <div className="App">
      <DesignForm state={state} setState={setState} results={results} setResults={setResults}/>
      <DisplayBoxes state={state} results={results}/>
    </div>
  );
}

export default App;
