import React from "react";
import "./styles.scss";

interface Props {
  onClick: any;
  label: string;
  selected: boolean;
}

const FeatureItem = (props: Props) => (
  <div
    className={`feature-item${props.selected ? " selected" : ""}`}
    onClick={props.onClick}
  >
    <span className="feature-label">{props.label}</span>
  </div>
);
export default FeatureItem;
