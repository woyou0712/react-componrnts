/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";
import CreateForm from "./components/CreateForm";
import ViewForm from "./components/ViewForm";
import context from "./methods/context";
import useModules from "./methods/useModules";

import "./index.less";
const { Provider } = context;

function FormBuild({ mode }: { mode: "view" | "create" }) {
  const modules = useModules();
  return (
    <Provider value={modules}>
      <div className="form-build">
        {mode === "create" ? <CreateForm /> : <ViewForm />}
      </div>
    </Provider>
  );
}

FormBuild.propTypes = {
  mode: PropTypes.string,
};

FormBuild.defaultProps = {
  mode: "view",
};

export default FormBuild;
