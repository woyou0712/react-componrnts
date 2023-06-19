import React from "react";
import PropTypes from "prop-types";
import { ItemTypeOptions } from "../../../../methods/ConstData";
import TypeItem from "./TypeItem";

import "./index.less";

function LeftView() {
  return (
    <div className="create-form-left-view">
      {ItemTypeOptions.map((item) => (
        <TypeItem key={item.type} data={item} />
      ))}
    </div>
  );
}

LeftView.propTypes = {};

LeftView.defaultProps = {};

export default LeftView;
