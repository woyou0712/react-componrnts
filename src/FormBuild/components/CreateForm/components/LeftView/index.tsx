import React from "react";
import PropTypes from "prop-types";
import { ItemTypeOptions } from "../../../../methods/ConstData";
import TypeItem from "./TypeItem";

import "./index.less";

function LeftView() {
  return (
    <div className="create-form-left-view">
      {ItemTypeOptions.map((type) => (
        <TypeItem key={type.value} type={type} />
      ))}
    </div>
  );
}

LeftView.propTypes = {};

LeftView.defaultProps = {};

export default LeftView;
