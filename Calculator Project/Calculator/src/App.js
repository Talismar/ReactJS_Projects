import React, {useState} from 'react';
import Calculator from './Components/Calculator';
import './App.css';

function App() {

  const [value, setValue] = useState("")
  const [operation, setOperation] = useState("")

  return (
    <div className="App">

      <Calculator value={value} setValue={setValue} operation={operation} setOperation={setOperation}/>

    </div>
  );
}

export default App;
