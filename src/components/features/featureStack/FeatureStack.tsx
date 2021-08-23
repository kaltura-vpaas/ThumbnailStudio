import React, { Component } from "react";
import { FeatureStack as FeatureStackModel } from "../modules/models";
import FeatureItem from "../../uiComponents/item";
import FeatureProps from "../featureProps";
import FeatureButtons from "../featureButtons";
import "./styles.scss";

interface Props {
  setSelectedFeature(f: FeatureStackModel): void;
  list: FeatureStackModel[];
  selectedFeature: any;
}

class FeatureStack extends Component<Props> {
  setSelectedFeature = (feature: FeatureStackModel) => () => {
    this.props.setSelectedFeature(feature);
  };
  render() {
    const { list, selectedFeature } = this.props;
    return (
      <div className="feature-stack">
        <FeatureButtons />
        <div className="feature-wrapper">
          <span className="section-label">Step stack</span>
          <div className="feature-stack-list">
            {list.map((f: FeatureStackModel) => (
              <FeatureItem
                key={f.uniqId}
                onClick={this.setSelectedFeature(f)}
                label={f.label}
                selected={
                  selectedFeature ? selectedFeature.uniqId === f.uniqId : false
                }
              />
            ))}
          </div>
          <FeatureProps />
        </div>
      </div>
    );
  }
}

export default FeatureStack;
