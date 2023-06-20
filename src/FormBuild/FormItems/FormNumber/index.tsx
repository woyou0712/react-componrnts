/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";
import { Form, InputNumber } from "antd";
import FormItem from "../../methods/FormItem";

import "./index.less";

function FormNumber({ data }: { data: FormItem }) {
  return (
    <Form.Item
      name={data.name}
      label={data.label}
      required={data.required}
      rules={data.rules}
    >
      <InputNumber
        placeholder={data.placeholder}
        disabled={data.disabled}
        defaultValue={data.defaultValue as string}
      />
    </Form.Item>
  );
}

FormNumber.propTypes = {
  data: PropTypes.object,
};

FormNumber.defaultProps = {};

export default FormNumber;
