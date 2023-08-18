/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";
import useModuler from "./methods/useModuler";

import "./index.less";

function BPMNView() {
  const bpmn = useModuler("#bpmn-view");

  return <section id="bpmn-view">
    
  </section>;
}

BPMNView.propTypes = {};

BPMNView.defaultProps = {};

export default BPMNView;
