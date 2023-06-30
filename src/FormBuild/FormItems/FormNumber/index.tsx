/* eslint-disable */
import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Form, InputNumber } from "antd";
import { SelfRule } from "../../methods/types.d";
import FormItem from "../../methods/FormItem";
import context from "../../methods/context";

import "./index.less";

function FormNumber({ data }: { data: FormItem }) {
  const modules = useContext(context);
  const { form } = modules;
  const { max, min, placeholder, defaultValue } = data.attribute;
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
      <InputNumber
        placeholder={placeholder as string}
        disabled={data.disabled || form.disabled}
        maxLength={data.maxLength}
        max={max}
        min={min}
      />
    </Form.Item>
  );
}

FormNumber.propTypes = {
  data: PropTypes.object,
};

FormNumber.defaultProps = {};

export default FormNumber;
