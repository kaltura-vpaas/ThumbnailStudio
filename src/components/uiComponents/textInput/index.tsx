import React, { Component } from "react";
import "./styles.scss";

interface Props {
  value: string;
  required?: boolean;
  onChange: any;
  type: string;
}

class TextInput extends Component<Props> {
  onChange = (e: any) => {
    this.props.onChange(e.target.value);
  };
  render() {
    const { value, required, type } = this.props;
    const inputProps: any = {
      type: type === "string" ? "text" : "number"
    };
    if (type === "float") {
      inputProps.step = 0.01;
    }
    return (
      <input
        value={value}
        onChange={this.onChange}
        required={required}
        className={`text-input${required && !value ? " error" : ""}`}
        {...inputProps}
      />
    );
  }
}
export default TextInput;
