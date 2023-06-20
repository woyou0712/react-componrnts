/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";
import { Form, Input } from "antd";
import FormItem from "../../methods/FormItem";

import "./index.less";

function FormTextarea({ data }: { data: FormItem }) {
  return (
    <Form.Item
      name={data.name}
      label={data.label}
      required={data.required}
      rules={data.rules}
    >
      <Input.TextArea
        placeholder={data.placeholder}
        disabled={data.disabled}
        maxLength={data.maxLength}
        defaultValue={data.defaultValue as string}
      />
    </Form.Item>
  );
}

FormTextarea.propTypes = {
  data: PropTypes.object,
};

FormTextarea.defaultProps = {};

export default FormTextarea;
