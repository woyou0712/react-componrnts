/* eslint-disable */
import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Form, Slider } from "antd";
import FormItem from "../../methods/FormItem";
import context from "../../methods/context";

import "./index.less";

function FormSlider({ data }: { data: FormItem }) {
  const modules = useContext(context);
  const { form } = modules;

  return (
    <Form.Item
      name={data.name}
      label={data.label}
      required={data.required}
      rules={data.rules}
    >
      <Slider
        disabled={data.disabled || form.disabled}
        defaultValue={data.defaultValue as number}
      />
    </Form.Item>
  );
}

FormSlider.propTypes = {
  data: PropTypes.object,
};

FormSlider.defaultProps = {};

export default FormSlider;
