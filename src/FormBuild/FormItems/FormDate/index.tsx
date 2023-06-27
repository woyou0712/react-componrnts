/* eslint-disable */
import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Form, DatePicker } from "antd";
import { Moment } from "moment";
import FormItem from "../../methods/FormItem";
import context from "../../methods/context";
import "./index.less";

function FormDate({ data }: { data: FormItem }) {
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
      <DatePicker
        placeholder={placeholder as string}
        disabled={data.disabled || form.disabled}
        defaultValue={defaultValue as Moment}
      />
    </Form.Item>
  );
}

FormDate.propTypes = {
  data: PropTypes.object,
};

FormDate.defaultProps = {};

export default FormDate;
