import React from "react";

import InstanceList from "./instanceList";
import InstanceButtons from "./instanceButtons";
import InstanceProps from "./instanceProps";

import "./styles.scss";

const Instances = () => (
  <div className="instances">
    <div>
      <span className="section-label">Transformation steps</span>
      <InstanceButtons />
      <InstanceList />
    </div>
    <div>
      <InstanceProps />
    </div>
  </div>
);

export default Instances;
