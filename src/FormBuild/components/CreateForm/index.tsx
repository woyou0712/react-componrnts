/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import LeftView from "./components/LeftView";
import CenterView from "./components/CenterView";
import RightView from "./components/RightView";

import "./index.less";

function CreateForm() {
  return (
    <DndProvider backend={HTML5Backend}>
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
    </DndProvider>
  );
}

CreateForm.propTypes = {};

CreateForm.defaultProps = {};

export default CreateForm;
