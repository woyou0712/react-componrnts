/* eslint-disable */
import React from "react";
import LeftNavbar from "./components/LeftNavbar";
import AppView from "./components/AppView";
import RightConf from "./components/RightConf";
import context from "./methods/context";
import useModule from "./methods/useModule";

import "./index.less";

function AppHomeView() {
  const { Provider } = context;
  const module = useModule();
  return (
    <div className="app-home-view">
      <Provider value={module}>
        <LeftNavbar />
        <AppView />
        <RightConf />
      </Provider>
    </div>
  );
}

AppHomeView.propTypes = {};

AppHomeView.defaultProps = {};

export default AppHomeView;
