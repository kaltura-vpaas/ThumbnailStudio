import React from "react";
import { Provider } from "react-redux";
import "./styles.scss";
import store from "./store";

import Features from "./components/features";
import Preview from "./components/preview";
import AppConfig from "./components/appConfig";
import Instances from "./components/instances";

function App() {
  return (
    <Provider store={store}>
      <div className="main">
        <AppConfig />
        <div className="feature-container">
          <Instances />
          <Features />
          <Preview />
        </div>
      </div>
    </Provider>
  );
}

export default App;
