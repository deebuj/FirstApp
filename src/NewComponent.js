import React from "react";
import { render } from "react-dom";
import ChildComponent from "./ChildComponent";
import UserAPI from "./api/userApi.js";

class NewComponent extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      users: [],
      user: {
        firstName: "initial",
        lastName: ""
      }
    };
  }

  componentDidMount() {
    UserAPI.getUsers(this);
  }

  setUsers(data) {
    let newState = JSON.parse(JSON.stringify(data)); //deep copy/clone
    this.setState({ users: newState });
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
        <h3>Load Data from API</h3>
        <ul>
          {this.state.users.map(function(user) {
            return <li key={user.id}>{user.name}</li>;
          })}
        </ul>

        <hr />
        <h3>Child component</h3>
        <ChildComponent user={this.state.user} />
        <hr />

        <table>
          <tbody>
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
          </tbody>
        </table>

        <div>First Name - {this.state.user.firstName}</div>
        <div>Last Name - {this.state.user.lastName}</div>
      </div>
    );
  }
}

export default NewComponent;
