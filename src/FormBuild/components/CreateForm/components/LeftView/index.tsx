import React, { useContext } from "react";
import PropTypes from "prop-types";
import TypeItem from "./TypeItem";
import context from "../../../../methods/context";

import "./index.less";

function LeftView() {
  const modules = useContext(context);
  return (
    <div className="create-form-left-view">
      {modules.itemOptions.map((item) => (
        <TypeItem key={item.type} data={item} />
      ))}
    </div>
  );
}

LeftView.propTypes = {};

LeftView.defaultProps = {};

export default LeftView;
