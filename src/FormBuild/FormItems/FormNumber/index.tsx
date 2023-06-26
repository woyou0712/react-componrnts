/* eslint-disable */
import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Form, InputNumber } from "antd";
import FormItem from "../../methods/FormItem";
import context from "../../methods/context";

import "./index.less";

function FormNumber({ data }: { data: FormItem }) {
  const modules = useContext(context);
  const { form } = modules;
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
      <InputNumber
        placeholder={data.placeholder as string}
        disabled={data.disabled || form.disabled}
        maxLength={data.maxLength}
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
