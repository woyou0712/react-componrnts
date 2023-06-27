/* eslint-disable */
import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Form, TimePicker } from "antd";
import { Moment } from "moment";
import FormItem from "../../methods/FormItem";
import context from "../../methods/context";
import "./index.less";

function FormTime({ data }: { data: FormItem }) {
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
      <TimePicker
        placeholder={placeholder as string}
        disabled={data.disabled || form.disabled}
        defaultValue={defaultValue as Moment}
      />
    </Form.Item>
  );
}

FormTime.propTypes = {
  data: PropTypes.object,
};

FormTime.defaultProps = {};

export default FormTime;
