import React, { Component } from "react";
import get from "lodash/get";
import isArray from "lodash/isArray";
import isEmpty from "lodash/isEmpty";
import find from "lodash/find";

import Property from "../../uiComponents/property";
import TextInput from "../../uiComponents/textInput";
import Select from "../../uiComponents/dropDown";
import "./styles.scss";

interface Props {
  instanceProps: {};
  changeInsnanceProperty(propId: string, value: any): void;
  changeInstanceSourceActionProps(propId: string, value: any): void;
}

class InstanceProps extends Component<Props> {
  componentDidUpdate() {
    const { instanceProps } = this.props;
    if (!get(instanceProps, "sourceAction")) {
      const sourceActionList: [] = get(instanceProps, "props", []);
      if (!isEmpty(sourceActionList)) {
        this.handleInstanceSourceActionChange(
          get(sourceActionList, "[0].name", "")
        );
      }
    }
  }
  handleInstanceEntryIdChange = (value: string) => {
    const { changeInsnanceProperty } = this.props;
    changeInsnanceProperty("entryId", value);
  };
  handleInstanceSourceActionChange = (value: string) => {
    const { changeInsnanceProperty, instanceProps } = this.props;
    const sourceActionList: [] = get(instanceProps, "props", []);
    const sourceAction = find(sourceActionList, ["name", value]);
    changeInsnanceProperty("sourceAction", sourceAction);
  };
  renderSourceActionSelect = () => {
    const { instanceProps } = this.props;
    const sourceActionList: [] = get(instanceProps, "props", []);
    if (isArray(sourceActionList)) {
      const options = sourceActionList.map((el: any) =>
        get(el, "name", "name isn't provided")
      );
      return (
        <div className="property">
          <span className="property-label">Source action</span>
          <Select
            value={get(instanceProps, "sourceAction.name", "")}
            onChange={this.handleInstanceSourceActionChange}
            required
            options={[...options]}
          />
        </div>
      );
    }
    return null;
  };
  renderSourceActionProps = () => {
    const { instanceProps, changeInstanceSourceActionProps } = this.props;
    const sourceActionProps: [] = get(instanceProps, "sourceAction.props", []);
    return sourceActionProps.map((p: any) => (
      <div key={p.id}>
        <Property onChange={changeInstanceSourceActionProps} {...p} />
      </div>
    ));
  };
  render() {
    const { instanceProps } = this.props;
    if (isEmpty(get(instanceProps, "props", []))) {
      return null;
    }
    return (
      <div className="instance-properties">
        <div className="property">
          <span className="property-label">Entry Id</span>
          <TextInput
            value={get(instanceProps, "entryId", "")}
            onChange={this.handleInstanceEntryIdChange}
            required
            type="string"
          />
        </div>
        {this.renderSourceActionSelect()}
        {this.renderSourceActionProps()}
      </div>
    );
  }
}

export default InstanceProps;
