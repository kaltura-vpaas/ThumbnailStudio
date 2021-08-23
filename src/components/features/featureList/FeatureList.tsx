import React, { Component } from "react";
import Feature from "../modules/models";
import FeatureItem from "../../uiComponents/item";
import "./styles.scss";

interface Props {
  list: Feature[];
  selectedFeature: any;
  setSelectedFeature(f: Feature): void;
  fetchFeatureList(): void;
  disabled: boolean;
}

class FeatureList extends Component<Props> {
  componentDidMount() {
    this.props.fetchFeatureList();
  }
  setSelected = (f: Feature) => () => {
    this.props.setSelectedFeature(f);
  };
  render() {
    const { list, selectedFeature, disabled } = this.props;
    return (
      <div className="feature-list">
        {!disabled &&
          list.map((f: Feature) => (
            <FeatureItem
              key={f.id}
              onClick={this.setSelected(f)}
              label={f.label}
              selected={selectedFeature ? selectedFeature.id === f.id : false}
            />
          ))}
      </div>
    );
  }
}

export default FeatureList;
