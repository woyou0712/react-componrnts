/* eslint-disable */
import React, { useContext } from "react";
import context from "../../../../methods/context";
import PropTypes from "prop-types";

import "./index.less";

function CommonElement() {
  const { module } = useContext(context);

  return (
    <section className="bpmn-common-element">
      <span>CommonElement Component</span>
    </section>
  );
}

CommonElement.propTypes = {};

CommonElement.defaultProps = {};

export default CommonElement;
