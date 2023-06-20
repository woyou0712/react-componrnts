/* eslint-disable */
import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Form, Input } from "antd";
import FormItem from "../../methods/FormItem";
import context from "../../methods/context";

import "./index.less";

function FormInput({ data }: { data: FormItem }) {
  const modules = useContext(context);
  const { form } = modules;

  return (
    <Form.Item
      name={data.name}
      label={data.label}
      required={data.required}
      rules={data.rules}
    >
      <Input
        placeholder={data.placeholder as string}
        disabled={data.disabled || form.disabled}
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
