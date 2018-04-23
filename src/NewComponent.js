import React from "react";
import { render } from "react-dom";
import ChildComponent from "./ChildComponent";

class NewComponent extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      user: {
        firstName: "initial",
        lastName: ""
      }
    };
  }

  handleInputChange = e => {
    let newUserState = {};
    newUserState[e.target.name] = e.target.value;
    let newState = { ...this.state.user, ...newUserState };
    this.setState({ user: newState });
  };

  render() {
    return (
      <div>
        <ChildComponent user={this.state.user} />
        <table>
          <tr>
            <td>First Name</td>
            <td>
              <input
                type="text"
                name="firstName"
                onChange={this.handleInputChange}
                //value={this.state.firstName}
              />
            </td>
          </tr>
          <tr>
            <td>Last Name</td>
            <td>
              <input
                type="text"
                name="lastName"
                onChange={this.handleInputChange}
                //value={this.state.firstName}
              />
            </td>
          </tr>
        </table>
        <div>First Name - {this.state.user.firstName}</div>
        <div>Last Name - {this.state.user.lastName}</div>
      </div>
    );
  }
}

export default NewComponent;
