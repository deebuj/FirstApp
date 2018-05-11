import React from "react";
import PropTypes from "prop-types";
import UserAPI from "../api/userApi.js";

class UserPosts extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      posts: []
    };
  }
  componentDidUpdate(previousProps, previousState) {
    if (this.props.user.id !== previousProps.user.id) {
      console.log("componenet did update");
      if (this.props.user.id > 0) {
        UserAPI.getPosts(this, this.props.user.id);
      }
    }
  }

  setPosts(posts) {
    let newState = JSON.parse(JSON.stringify(posts)); //deep copy/clone
    this.setState({ posts: newState });
    console.log(newState);
  }

  render() {
    const user = this.props.user || {};
    return (
      <div>
        <div>{user.name}</div>
        <div>{user.username}</div>
        <div>
          {this.state.posts.map(post => (
            <div>
              <div>{post.body}</div>
              <hr />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
UserPosts.propTypes = {
  user: PropTypes.object.isRequired
};
export default UserPosts;
