/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";

import "./index.less";
import { useDrop } from "react-dnd";

function CenterView() {
  useDrop(() => ({
    type: "box",
    accept: "box",
    drop(item, monitor) {
      const dropResult = monitor.getDropResult();
      console.log(dropResult);
    },
    collect: (monitor) => ({ canDrop: monitor.canDrop() }),
  }));
  return (
    <div className="create-form-center-view">
      <span>CenterView Component</span>
    </div>
  );
}

CenterView.propTypes = {};

CenterView.defaultProps = {};

export default CenterView;
