/* eslint-disable */
import React, { useContext } from "react";
import PropTypes from "prop-types";
import { ItemTypeOptions } from "../../../../methods/ConstData";
import context from "../../../../methods/context";

import "./index.less";

function LeftView() {
  const module = useContext(context);
  return (
    <div className="create-form-left-view">
      {ItemTypeOptions.map((type) => (
        <div className="create-form-left-type" key={type.value}>
          {type.label}
        </div>
      ))}
    </div>
  );
}

LeftView.propTypes = {};

LeftView.defaultProps = {};

export default LeftView;
