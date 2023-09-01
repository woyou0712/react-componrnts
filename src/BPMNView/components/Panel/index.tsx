/* eslint-disable */
import React, { useContext, useMemo, useState } from "react";
import PropTypes from "prop-types";
import context from "../../methods/context";
import CommonElement from "./components/CommonElement";
import bpmnIcon from "./icons/BPMN.png";
import openIcon from "./icons/open.png";

import "./index.less";

function Panel() {
  const { module } = useContext(context);
  const definitions = module?.getDefinitions();

  const title = definitions?.rootElements[0]?.name || "未定义流程图";

  const [open, setOpen] = useState(false);

  return (
    <section className="bpmn-panel-body">
      <div className="bpmn-panel-title">
        <div className="title-open-box">
          <img className="title-open" src={openIcon} />
        </div>
        <div className="title-text">
          <img className="bpmn-icon" src={bpmnIcon} />
          {title}
        </div>
      </div>
      <div className="bpmn-panel-content">
        {!module?.activeElement ? <CommonElement /> : null}
      </div>
    </section>
  );
}

Panel.propTypes = {};

Panel.defaultProps = {};

export default Panel;
