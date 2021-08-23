import React, { Component } from "react";
import Property from "../../uiComponents/property";
import "./styles.scss";

interface Props {
  list: [];
  changeFeatureProperty(id: any, value: any): void;
}

class FeatureProps extends Component<Props> {
  render() {
    const { list } = this.props;
    if (list.length < 1) {
      return null;
    }
    return (
      <div className="feature-properties">
        {list.map((p: any) => (
          <div key={p.id}>
            <Property onChange={this.props.changeFeatureProperty} {...p} />
          </div>
        ))}
      </div>
    );
  }
}

export default FeatureProps;
