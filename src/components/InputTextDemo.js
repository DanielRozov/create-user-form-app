import React, { Component } from "react";
import { InputText } from "../../node_modules/primereact/components/inputtext/InputText";
import "primereact/resources/primereact.min.css";
import { Button } from "../../node_modules/primereact/components/button/Button";
import Demo from './InputTextDemo.css';
import { Messages } from '../../node_modules/primereact/components/messages/Messages';
import { Message } from '../../node_modules/primereact/components/message/Message';

export class InputTextDemo extends Component {
  constructor() {
    super();

    this.state = {
      vardas: "",
      pavarde: "",
      ePastas: "",
      telNumeris: ""
    };
    this.showInfo = this.showInfo.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
    console.log(event.target.value);
  }

  handleSubmit(event) {
    alert('"' + this.state.title + '" užregistruotas administratorius.');
    event.preventDefault();
  }

  showInfo() {
    this.messages.show({ severity: 'info', summary: 'Info Message', detail: 'PrimeReact rocks' });
}
  render() {
    return (
      <div className="Demo">
        <div className="content-section">
          <div className="feature-intro">
            <h1>Administratoriaus registracijos forma</h1>
          </div>
        </div>

        <div className="content-section implementation">

        <Messages ref={(el) => { this.messages = el; }}></Messages>
          <h3>Vardas</h3>
          <span className="ui-float-label">
            <InputText id="float-input" type="text" size="30" name="vardas"
              onChange={this.handleChange}
            />
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
          
          <div className="ui-g ui-fluid">
                        
                        <div className="ui-g-12 ui-md-3">
                            <Button onClick={this.showInfo} label="Info" className="ui-button-info" />
                        </div>
                    </div>

        <Button label="Save" className="ui-button-danger" onClick={this.handleSubmit} />
      </div>
    );
  }
}

export default InputTextDemo;
