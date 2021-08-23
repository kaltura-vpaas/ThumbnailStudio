import React, { Component } from "react";
import isArray from "lodash/isArray";
import "./styles.scss";

interface Props {
  value: string;
  required: boolean;
  onChange: any;
  options: string[];
}

class DropDown extends Component<Props> {
  onChange = (e: any) => {
    this.props.onChange(e.target.value);
  };
  render() {
    const { value, required, options } = this.props;
    if (!isArray(options)) {
      return null;
    }
    return (
      <select
        onChange={this.onChange}
        className={`dropdown${required && !value ? " error" : ""}`}
        required={required}
        value={value}
      >
        {options.map((el, i) => (
          <option key={i} value={el} label={el} />
        ))}
      </select>
    );
  }
}
export default DropDown;
