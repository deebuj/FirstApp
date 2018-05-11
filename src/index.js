import React from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import NewComponent from "./components/UserList.js";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => (
  <div style={styles}>
    <Hello name="CodeSandbox" />
    <NewComponent />
    <h2>Start editing to see some magic happen. Changing {"\u2728"}</h2>
  </div>
);

render(<App />, document.getElementById("root"));
