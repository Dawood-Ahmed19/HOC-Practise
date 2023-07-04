import React, { useState, useRef } from "react";
import "./App.css";

function App() {
  return (
    <>
      <div className="app">
        <HOCred comp={Counter} />
        <HOCGreen comp={Counter} />
      </div>
    </>
  );
}

function HOCred(props) {
  return (
    <>
      <h2 style={{ color: "red" }}>
        <props.comp />
      </h2>
    </>
  );
}

function HOCGreen(props) {
  return (
    <>
      <h2 style={{ color: "green" }}>
        <props.comp />
      </h2>
    </>
  );
}

function Counter() {
  const [count, setcount] = useState(0);
  return (
    <>
      <div>
        <h1>{count}</h1>
        <button onClick={() => setcount(count + 1)}>Increase</button>
      </div>
    </>
  );
}

export default App;
