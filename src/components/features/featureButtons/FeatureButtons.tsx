import React, { Component } from "react";
import "./styles.scss";

interface Props {
  addFeature(): void;
  removeFeature(): void;
  changeFeaturePosition(oldIndex: number, newIndex: number): void;
  selectedFeatureStack: any;
  selectedFeatureList: any;
  isMoveDownEnabled: any;
  isMoveUpEnabled: any;
  selectedFeatureIndex: number;
}

class FeatureButtons extends Component<Props> {
  handleMove = (modifier: number) => (event: any) => {
    const { selectedFeatureIndex, changeFeaturePosition } = this.props;
    changeFeaturePosition(
      selectedFeatureIndex,
      selectedFeatureIndex - modifier
    );
  };
  render() {
    const {
      addFeature,
      removeFeature,
      selectedFeatureStack,
      selectedFeatureList,
      isMoveDownEnabled,
      isMoveUpEnabled
    } = this.props;
    return (
      <div className="button-wrapper">
        {isMoveUpEnabled && (
          <button onClick={this.handleMove(1)}>move Up</button>
        )}
        {selectedFeatureList && <button onClick={addFeature}>add</button>}
        {selectedFeatureStack && (
          <button onClick={removeFeature}>remove</button>
        )}
        {isMoveDownEnabled && (
          <button onClick={this.handleMove(-1)}>move Down</button>
        )}
      </div>
    );
  }
}

export default FeatureButtons;
