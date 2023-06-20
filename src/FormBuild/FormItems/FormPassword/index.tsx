/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";
import { Form, Input } from "antd";
import FormItem from "../../methods/FormItem";

import "./index.less";

function FormPassword({ data }: { data: FormItem }) {
  return (
    <Form.Item
      name={data.name}
      label={data.label}
      required={data.required}
      rules={data.rules}
    >
      <Input.Password
        placeholder={data.placeholder}
        disabled={data.disabled}
        maxLength={data.maxLength}
        defaultValue={data.defaultValue as string}
      />
    </Form.Item>
  );
}

FormPassword.propTypes = {
  data: PropTypes.object,
};

FormPassword.defaultProps = {};

export default FormPassword;
