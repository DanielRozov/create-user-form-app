import React, { Component } from "react";
import InputForm from "./components/InputForm";
import InputTextDemo from "./components/InputTextDemo";
import DropDemo from './components/DropDownDemo'
import "primereact/resources/primereact.min.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <InputForm />
        <InputTextDemo />
        <DropDemo/>
      </div>
    );
  }
}

export default App;
