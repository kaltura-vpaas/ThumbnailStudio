import React, { Component } from "react";
import Instance from "./modules/models";
import InctanceItem from "../../uiComponents/item";
import "./styles.scss";

interface Props {
  list: Instance[];
  selectedInstance: Instance | null;
  setSelectedInstance(f: Instance): void;
}

class InstanceList extends Component<Props> {
  setSelected = (f: Instance) => () => {
    this.props.setSelectedInstance(f);
  };
  render() {
    const { list, selectedInstance } = this.props;
    return (
      <div className="instance-list">
        {list.map((f: Instance, index: number) => (
          <InctanceItem
            key={f.id}
            onClick={this.setSelected(f)}
            selected={selectedInstance ? selectedInstance.id === f.id : false}
            label={`Step #${index + 1}`}
          />
        ))}
      </div>
    );
  }
}

export default InstanceList;
