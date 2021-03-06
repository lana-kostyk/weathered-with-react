import React from "react";
import './App.css';
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
      <footer>Open sourced on {" "}<a href="https://github.com/lana-kostyk/weathered-with-react" target="_blank" rel="noreferrer">github</a> by Svitlana Kostyk</footer> 
     </div>
    </div>
  );
}


