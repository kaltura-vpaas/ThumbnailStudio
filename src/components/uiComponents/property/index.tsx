import React, { Component } from "react";
import { getPropertyComponent } from "../../../utils";
import "./styles.scss";

interface Props {
  id: number;
  type: string;
  defaultValue?: number | string;
  value?: number | string;
  label: string;
  required: boolean;
  description: string;
  props: any;
  onChange(id: any, value: any): void;
}

class Property extends Component<Props> {
  handleOnChange = (value: any) => {
    const { onChange, id } = this.props;
    onChange(id, value);
  };
  render() {
    const { value, label, required, props, description } = this.props;
    const PropertyComponent: any = getPropertyComponent(this.props.type);
    if (!PropertyComponent) {
      return null;
    }
    return (
      <div className="property">
        <span className="property-label">{label}
          <a href="/#" className="tooltip" title={description}> </a>
        </span>

        <PropertyComponent
          value={value}
          onChange={this.handleOnChange}
          required={required}
          type={this.props.type}
          {...props}
        />
      </div>
    );
  }
}

export default Property;
