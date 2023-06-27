/* eslint-disable */
import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Form, Input } from "antd";
import FormItem from "../../methods/FormItem";
import context from "../../methods/context";

import "./index.less";

function FormPassword({ data }: { data: FormItem }) {
  const modules = useContext(context);
  const { form } = modules;
  const { placeholder, defaultValue } = data.attribute;

  return (
    <Form.Item
      name={data.name}
      label={data.label}
      required={data.required}
      rules={data.rules.map((item) => {
        let pattern;
        try {
          pattern = item.pattern ? new RegExp(item.pattern) : undefined;
        } catch (e) {
          console.log("正则表达式格式错误");
        }
        return {
          required: item.required,
          message: item.message,
          pattern,
        };
      })}
    >
      <Input.Password
        placeholder={placeholder as string}
        disabled={data.disabled || form.disabled}
        maxLength={data.maxLength}
        defaultValue={defaultValue as string}
      />
    </Form.Item>
  );
}

FormPassword.propTypes = {
  data: PropTypes.object,
};

FormPassword.defaultProps = {};

export default FormPassword;
