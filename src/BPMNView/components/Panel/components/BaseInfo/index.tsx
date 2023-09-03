/* eslint-disable */
import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import context from "../../../../../BPMNView/methods/context";

import "./index.less";

function BaseInfo() {
  const { module } = useContext(context);
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  useEffect(() => {
    if (!module) return;
    setId(module.getElementId() || "");
    setName(module.getElementName() || "");
  }, [module?.activeElement]);
  useEffect(() => {
    if (!id) {
      return;
    }
    const oldId = module?.getElementId();
    if (id === oldId) return;
    module?.setElementId(id);
  }, [id]);

  useEffect(() => {
    if (!name) return;
    const oldName = module?.getElementName();
    if (name === oldName) return;
    module?.setElementName(name);
  }, [name]);

  return (
    <section className="bpmn-base-info">
      <div className="bpmn-form">
        <div className="bpmn-form-item">
          <div className="bpmn-form-label">名称：</div>
          <div className="bpmn-form-data">
            <input
              value={name}
              onChange={(e) => {
                let v = e.target.value;
                v = v?.replace(/\s/g, "");
                setName(v);
              }}
            />
          </div>
        </div>
        <div className="bpmn-form-item">
          <div className="bpmn-form-label">编号：</div>
          <div className="bpmn-form-data">
            <input
              value={id}
              onChange={(e) => {
                let v = e.target.value;
                v = v?.replace(/[^\w]/, "");
                setId(v);
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

BaseInfo.propTypes = {};

BaseInfo.defaultProps = {};

export default BaseInfo;
