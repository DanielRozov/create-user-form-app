import React, { Component } from "react";
import { InputText } from "../../node_modules/primereact/components/inputtext/InputText";
import "primereact/resources/primereact.min.css";
import { Button } from "../../node_modules/primereact/components/button/Button";

export class InputTextDemo extends Component {
  constructor() {
    super();
    this.state = {
      vardas: "",
      pavarde: "",
      ePastas: "",
      telNumeris: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
    console.log(event.target.value);
  }

  render() {
    return (
      <div>
        <div className="content-section">
          <div className="feature-into">
            <h1>Administratoriaus registracijos forma</h1>
          </div>
        </div>
        <div className="content-section implementation">
          <h3>Vardas</h3>
          <span className="ui-float-label">
            <InputText
            name="vardas"
            id="float-input"
             type="text"
              size="30"
              onChange={this.handleChange} />
            <label htmlFor="float-input">Vardas</label>
          </span>

          <h3>Pavardė</h3>
          <span className="ui-float-label">
            <InputText
             name="pavarde"
             id="float-input"
             type="text"
             size="30"
             onChange={this.handleChange}
              />
            <label htmlFor="float-input">Pavardė</label>
          </span>

          <h3>Elektroninio pašto adresas</h3>
          <span className="ui-float-label">
            <InputText
              name="ePastas"
              id="float-input"
              type="text"
              size="30"
              onChange={this.handleChange}
            />
            <label htmlFor="float-input">elektroninis@adresas.lt</label>
          </span>

          <h3>Telefono numeris</h3>
          <span className="ui-float-label">
            <InputText
              name="telNumeris"
              id="float-input"
              type="text"
              size="30"
              onChange={this.handleChange}
            />
            <label htmlFor="float-input">telefono numeris</label>
          </span>
        </div>

        <Button label="Save" className="ui-button-danger" />
      </div>
    );
  }
}

export default InputTextDemo;
