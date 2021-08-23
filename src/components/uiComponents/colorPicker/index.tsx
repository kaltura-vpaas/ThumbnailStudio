import React, { Component } from "react";
import replace from "lodash/replace";
import { isValidHexColor, isHexaColor } from "../../../utils";

interface Props {
  value: string;
  required: boolean;
  onChange: any;
}

class ColorPicker extends Component<Props> {
  onChange = (e: any) => {
    const value = e.target.value;
    if (isValidHexColor(value)) {
      this.props.onChange(replace(value, "#", ""));
    } else {
      this.props.onChange(value);
    }
  };
  prepareValue = (value: any) => {
    if (isHexaColor(value)) {
      return `#${value}`;
    }
    return value;
  };
  render() {
    const { value, required } = this.props;
    return (
      <input
        type="color"
        value={this.prepareValue(value)}
        onChange={this.onChange}
        required={required}
        className="color-picker"
      />
    );
  }
}
export default ColorPicker;
