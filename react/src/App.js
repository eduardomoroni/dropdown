import React from "react";
import "./App.css";
import Countries from "./countries";
import { Dropdown } from "./Dropdown";
import { Button } from "./Button";

function App() {
  console.log(Countries);

  return (
    <>
      <Dropdown />
      <Button>SEND!</Button>
    </>
  );
}

export default App;
