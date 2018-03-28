import React, { Component } from "react";
import { InputText } from "primereact/components/inputtext/InputText";

class InputForm extends Component {
  constructor() {
    super();
    this.state = {
      value: ""
    };
  }

  render() {
    return (
      <div>
        <InputText
          onChange={e => {
            this.setState({ value: e.target.value });
            console.log(this.state.value);
          }}
        />
      </div>
    );
  }
}

export default InputForm;
