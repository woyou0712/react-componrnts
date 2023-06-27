/* eslint-disable */
import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Form, TimePicker } from "antd";
import { Moment } from "moment";
import FormItem from "../../methods/FormItem";
import context from "../../methods/context";
import "./index.less";

function FormTimes({ data }: { data: FormItem }) {
  const modules = useContext(context);
  const { form } = modules;
  const { placeholder, defaultValue } = data.attribute;

  return (
    <Form.Item
      name={data.name}
      label={data.label}
      required={data.required}
      rules={data.rules}
    >
      <TimePicker.RangePicker
        placeholder={placeholder as [string, string]}
        disabled={data.disabled || form.disabled}
        defaultValue={defaultValue as [Moment, Moment]}
      />
    </Form.Item>
  );
}

FormTimes.propTypes = {
  data: PropTypes.object,
};

FormTimes.defaultProps = {};

export default FormTimes;
