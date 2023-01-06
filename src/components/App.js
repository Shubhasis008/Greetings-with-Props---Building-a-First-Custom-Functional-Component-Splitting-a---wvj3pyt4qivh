import React from "react";
import '../styles/App.css';
import Welcome from './Welcome';

const App = () => {
  const myName = "man"
  return (
    <>
    
    <Welcome name={myName}/>
    <h2>Welcome To Newton School</h2>
    </>
  )
}


export default App;
