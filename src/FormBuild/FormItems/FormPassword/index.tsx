/* eslint-disable */
import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Form, Input } from "antd";
import { SelfRule } from "../../methods/types.d";
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
      initialValue={modules.mode === "view" ? defaultValue : undefined}
      rules={data.rules.map((item) => {
        const rule: SelfRule = {
          required: item.required,
          message: item.message,
        };
        try {
          const pattern = item.pattern ? new RegExp(item.pattern) : undefined;
          if (pattern) {
            rule.pattern = pattern as RegExp & string;
          }
        } catch (e) {
          console.log("正则表达式格式错误");
        }
        return rule;
      })}
    >
      <Input.Password
        placeholder={placeholder as string}
        disabled={data.disabled || form.disabled}
        maxLength={data.maxLength}
      />
    </Form.Item>
  );
}

FormPassword.propTypes = {
  data: PropTypes.object,
};

FormPassword.defaultProps = {};

export default FormPassword;
