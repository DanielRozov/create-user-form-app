import React,{Component} from 'react';
import {Dropdown} from '../../node_modules/primereact/components/dropdown/Dropdown';
import 'primereact/resources/primereact.min.css';

export class DropDownDemo extends Component {

    constructor() {
        super();
        this.state = {
            user: null
        };

        this.onUserChange = this.onUserChange.bind(this);
    }

    onUserChange(e) {
        this.setState({user: e.value});
    }

render() {
    var users = [
        {name: "Administrator", code: "Admin"},
        {name: "Salesman", code: "Salesm"},
        {name: "Customer", code: "Custm"}
    ];
    return(
        <div>
            <div>This is DropDownDemo</div>
                <div className="content-section implementation">
                    <h3>Select User</h3>
                    <Dropdown value={this.state.user} options={users} onChange={this.onUserChange} style={{width:'150px'}} placeholder="Select a User"/>
                    <div style={{marginTop: '.5em'}}>{this.state.user ? 'Selected User: ' + this.state.user.name : 'No user selected'}</div>
                </div>

        </div>
    );
}

}

export default DropDownDemo;