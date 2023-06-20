/* eslint-disable */
import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Form, DatePicker } from "antd";
import { Moment } from "moment";
import FormItem from "../../methods/FormItem";
import context from "../../methods/context";
import "./index.less";

function FormDates({ data }: { data: FormItem }) {
  const modules = useContext(context);
  const { form } = modules;

  return (
    <Form.Item
      name={data.name}
      label={data.label}
      required={data.required}
      rules={data.rules}
    >
      <DatePicker.RangePicker
        placeholder={data.placeholder as [string, string]}
        disabled={data.disabled || form.disabled}
        defaultValue={data.defaultValue as [Moment, Moment]}
      />
    </Form.Item>
  );
}

FormDates.propTypes = {
  data: PropTypes.object,
};

FormDates.defaultProps = {};

export default FormDates;