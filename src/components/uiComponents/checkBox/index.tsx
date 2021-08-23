import React, { Component } from "react";
import "./styles.scss";

interface Props {
  value: boolean;
  required: boolean;
  onChange: any;
  options: string[];
}

class CheckBox extends Component<Props> {
  onChange = (e: any) => {
    this.props.onChange(e.target.checked);
  };
  render() {
    const { value, required } = this.props;
    return (
      <input
        checked={value}
        onChange={this.onChange}
        required={required}
        className={`checkbox${required && !value ? " error" : ""}`}
        type="checkbox"
      />
    );
  }
}
export default CheckBox;
