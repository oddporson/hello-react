import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Button = (props) => {
  // console.log("am i seeing props?", props);
  return (
    <button onClick={props.reset}>
      {props.text}
    </button>
  );
};


const Application = () => {
  const [name, setName] = useState("");
  // your code here
  
  // input field handler
  const handleInputUser = (e) => setName(e.target.value);

  // reset input field handler
  const reset = () => setName("");


  return (
    <main>
      <input value={name} placeholder="Type your name" onChange={handleInputUser}></input>
      <Button text="reset" reset={reset}/>
      {/* your code here -- this entire line including the curly braces can be removed */}
      {name && <h1>Hello {name}</h1>}
      {!name && ""}
      
    </main>
  );
};

ReactDOM.render(<Application />, document.getElementById("root"));