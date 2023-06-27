/* eslint-disable */
import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Form, TimePicker } from "antd";
import FormItem from "../../methods/FormItem";
import context from "../../methods/context";
import { str2times } from "../../methods/utils";
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
      initialValue={str2times(defaultValue as string)}
    >
      <TimePicker.RangePicker
        placeholder={placeholder as [string, string]}
        disabled={data.disabled || form.disabled}
      />
    </Form.Item>
  );
}

FormTimes.propTypes = {
  data: PropTypes.object,
};

FormTimes.defaultProps = {};

export default FormTimes;
