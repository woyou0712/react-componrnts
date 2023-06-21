/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";
import FormItem from "../methods/FormItem";

import FormInput from "./FormInput";
import FormTextarea from "./FormTextarea";
import FormPassword from "./FormPassword";
import FormNumber from "./FormNumber";
import FormSelect from "./FormSelect";
import FormCascader from "./FormCascader";
import FormRadio from "./FormRadio";
import FormCheckbox from "./FormCheckbox";
import FormSwitch from "./FormSwitch";
import FormSlider from "./FormSlider";
import FormTime from "./FormTime";
import FormTimes from "./FormTimes";
import FormDate from "./FormDate";
import FormDates from "./FormDates";
import FormRate from "./FormRate";
import FormUpload from "./FormUpload";
import FormBlock from "./FormBlock";
import FormButton from "./FormButton";

import "./index.less";

function getItem(data: FormItem) {
  switch (data.type) {
    case "input":
      return <FormInput data={data} />;
    case "textarea":
      return <FormTextarea data={data} />;
    case "password":
      return <FormPassword data={data} />;
    case "number":
      return <FormNumber data={data} />;
    case "select":
      return <FormSelect data={data} />;
    case "cascader":
      return <FormCascader data={data} />;
    case "radio":
      return <FormRadio data={data} />;
    case "checkbox":
      return <FormCheckbox data={data} />;
    case "switch":
      return <FormSwitch data={data} />;
    case "slider":
      return <FormSlider data={data} />;
    case "time":
      return <FormTime data={data} />;
    case "times":
      return <FormTimes data={data} />;
    case "date":
      return <FormDate data={data} />;
    case "dates":
      return <FormDates data={data} />;
    case "rate":
      return <FormRate data={data} />;
    case "upload":
      return <FormUpload data={data} />;
    case "block":
      return <FormBlock />;
    case "button":
      return <FormButton />;
    default:
      return <FormInput data={data} />;
  }
}

function FormItems({ data }: { data: FormItem }) {
  return <div className="form-item-view">{getItem(data)}</div>;
}

FormItems.propTypes = {
  data: PropTypes.object,
};

FormItems.defaultProps = {};

export default FormItems;
