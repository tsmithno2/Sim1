import React from "react";

var FormInput = props => {
  return (
    <li>
      <p>{props.Title}</p>
      <input
        value={this.state.itemInput}
        onChange={e => this.setState({ itemInput: e.target.value })}
      />
    </li>
  );
};

export default FormInput;
