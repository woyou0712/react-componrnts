/* eslint-disable */
import React, { useContext } from "react";
import PropTypes from "prop-types";
import context from "../../methods/context";

function Toolbar() {
  const { module } = useContext(context);

  return (
    <section className="bpmn-toolbar">
      <div className="toolbar-body">
        <div className="toolbar-item">导入XML</div>
        <div className="toolbar-item">导出XML</div>
      </div>
      <div className="toolbar-body">
        <div className="toolbar-item">上一步</div>
        <div className="toolbar-item">下一步</div>
      </div>
      <div className="toolbar-body">
        <div className="toolbar-item">缩小</div>
        <div className="toolbar-item">{}%</div>
        <div className="toolbar-item">放大</div>
      </div>
    </section>
  );
}

Toolbar.propTypes = {};

Toolbar.defaultProps = {};

export default Toolbar;
