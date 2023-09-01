/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";
import useModuler from "./methods/useModuler";
import context from "./methods/context";
import Toolbar from "./components/Toolbar";

import "./index.less";
import Panel from "./components/Panel";

const { Provider } = context;

function BPMNView() {
  const modulers = useModuler("#bpmn-view");

  return (
    <Provider value={modulers}>
      <section id="bpmn-view">
        <Toolbar />
        <Panel />
      </section>
    </Provider>
  );
}

BPMNView.propTypes = {};

BPMNView.defaultProps = {};

export default BPMNView;
