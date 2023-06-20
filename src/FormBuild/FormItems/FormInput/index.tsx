/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";
import { Form, Input } from "antd";
import FormItem from "../../methods/FormItem";

import "./index.less";

function FormInput({ data }: { data: FormItem }) {
  return (
    <Form.Item
      name={data.name}
      label={data.label}
      required={data.required}
      rules={data.rules}
    >
      <Input
        placeholder={data.placeholder}
        disabled={data.disabled}
        maxLength={data.maxLength}
        defaultValue={data.defaultValue as string}
      />
    </Form.Item>
  );
}

FormInput.propTypes = {
  data: PropTypes.object,
};

FormInput.defaultProps = {};

export default FormInput;
