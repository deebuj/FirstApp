import React from "react";
import { render } from "react-dom";
import ChildComponent from "./ChildComponent";
import UserPosts from "./UserPosts.js";
import UserAPI from "../api/userApi.js";

class UserList extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      users: [],
      user: {
        id: 0,
        name: "initial",
        username: ""
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

  selectUser(user) {
    this.setState({ user: user });
  }

  render() {
    return (
      <div>
        <h3>Users</h3>
        <ul>
          {this.state.users.map(user => (
            <li key={user.id} onClick={this.selectUser.bind(this, user)}>
              {user.name}
            </li>
          ))}
        </ul>
        <hr />
        <UserPosts user={this.state.user} />
        <hr />
        <div>
          <div>
            First Name
            <input type="text" name="name" onChange={this.handleInputChange} />
          </div>
          <div>
            Last Name
            <input
              type="text"
              name="username"
              onChange={this.handleInputChange}
            />
          </div>
        </div>

        <hr />
        <h3>Child component</h3>
        <ChildComponent user={this.state.user} />
      </div>
    );
  }
}

export default UserList;
