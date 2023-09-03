/* eslint-disable */
import React, { useContext, useMemo, useState } from "react";
import PropTypes from "prop-types";
import context from "../../methods/context";
import CommonElement from "./components/CommonElement";
import bpmnIcon from "./icons/BPMN.png";
import openIcon from "./icons/open.png";

import "./index.less";
import BaseInfo from "./components/BaseInfo";

function Panel() {
  const { module } = useContext(context);

  const definitions = module?.getDefinitions();

  const title = definitions?.rootElements[0]?.name || "未定义流程图";

  const [hidden, setHidden] = useState(false);

  return (
    <section className={`bpmn-panel-body ${hidden ? "hidden" : ""}`}>
      <div className="bpmn-panel-title">
        <div className="title-text">
          <img className="bpmn-icon" src={bpmnIcon} />
          {title}
        </div>
        <div className="title-open-box" onClick={() => setHidden(!hidden)}>
          <img className="title-open" src={openIcon} />
        </div>
      </div>
      <div className="bpmn-panel-content">
        <BaseInfo />
        <CommonElement />
      </div>
    </section>
  );
}

Panel.propTypes = {};

Panel.defaultProps = {};

export default Panel;
