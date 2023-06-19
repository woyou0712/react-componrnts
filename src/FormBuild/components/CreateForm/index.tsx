/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";
import LeftView from "./components/LeftView";
import CenterView from "./components/CenterView";
import RightView from "./components/RightView";

import "./index.less";

function CreateForm() {
  return (
    <div className="create-form-build">
      <div className="left-block">
        <LeftView />
      </div>
      <div className="center-block">
        <CenterView />
      </div>
      <div className="right-block">
        <RightView />
      </div>
    </div>
  );
}

CreateForm.propTypes = {};

CreateForm.defaultProps = {};

export default CreateForm;
