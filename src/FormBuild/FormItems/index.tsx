/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";
import FormItem from "../methods/FormItem";
import FormInput from "./FormInput";
import FormTextarea from "./FormTextarea";
import FormPassword from "./FormPassword";
import FormCount from "./FormCount";
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
      return <FormTextarea />;
    case "password":
      return <FormPassword />;
    case "count":
      return <FormCount />;
    case "select":
      return <FormSelect />;
    case "cascader":
      return <FormCascader />;
    case "radio":
      return <FormRadio />;
    case "checkbox":
      return <FormCheckbox />;
    case "switch":
      return <FormSwitch />;
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
