import React from "react";

import FeatureList from "./featureList";
import FeatureStack from "./featureStack";

import "./styles.scss";

const Features = () => (
  <div className="features">
    <div>
      <span className="section-label">Avaliable actions</span>
      <FeatureList />
    </div>
    <div>
      <FeatureStack />
    </div>
  </div>
);

export default Features;
