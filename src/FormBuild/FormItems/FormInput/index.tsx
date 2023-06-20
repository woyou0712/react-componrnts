/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";
import FormItem from "../../methods/FormItem";

import "./index.less";

function FormInput({ data }: { data: FormItem }) {
  return (
    <div className="FormInput">
      <span>FormInput Component</span>
    </div>
  );
}

FormInput.propTypes = {
  data: PropTypes.object,
};

FormInput.defaultProps = {};

export default FormInput;
