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

function FormItems({ data }: { data: FormItem }) {
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
      return <FormSlider />;
    case "time":
      return <FormTime />;
    case "times":
      return <FormTimes />;
    case "date":
      return <FormDate />;
    case "dates":
      return <FormDates />;
    case "rate":
      return <FormRate />;
    case "upload":
      return <FormUpload />;
    case "block":
      return <FormBlock />;
    case "button":
      return <FormButton />;
    default:
      return <FormInput data={data} />;
  }
}

FormItems.propTypes = {
  data: PropTypes.object,
};

FormItems.defaultProps = {};

export default FormItems;
