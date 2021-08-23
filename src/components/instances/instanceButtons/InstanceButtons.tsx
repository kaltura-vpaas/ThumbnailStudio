import React from "react";
import Instance from "../instanceList/modules/models";
import "./styles.scss";

interface Props {
  addInstance(): void;
  removeInstance(): void;
  selectedInstance: Instance | null;
}

const FeatureButtons = (props: Props) => (
  <div className="instance-button-wrapper">
    <button onClick={props.addInstance}>add</button>
    {props.selectedInstance && (
      <button onClick={props.removeInstance}>remove</button>
    )}
  </div>
);

export default FeatureButtons;
