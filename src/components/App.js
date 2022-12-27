import React from "react";
import '../styles/App.css';
import Welcome from './Welcome';

const App = () => {
  const myName = "man"
  return (
    <Welcome name={myName}/>
  )
}


export default App;
