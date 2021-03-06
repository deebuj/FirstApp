import React from "react";
import { render } from "react-dom";
import PropTypes from "prop-types";
import { shape, number, string, oneOfType } from "prop-types";

class ChildComponent extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const user = this.props.user || {};
    return (
      <div>
        <div>This is child Component.</div>
        <div>{user.name}</div>
        <div>{user.username}</div>
      </div>
    );
  }
}
ChildComponent.propTypes = {
  user: PropTypes.object.isRequired
};
export default ChildComponent;
