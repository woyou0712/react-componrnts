/* eslint-disable */
import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Form, Cascader } from "antd";
import FormItem from "../../methods/FormItem";
import context from "../../methods/context";

import "./index.less";

function FormCascader({ data }: { data: FormItem }) {
  const modules = useContext(context);
  const { form } = modules;

  return (
    <Form.Item
      name={data.name}
      label={data.label}
      required={data.required}
      rules={data.rules}
    >
      <Cascader
        placeholder={data.placeholder}
        disabled={data.disabled || form.disabled}
        defaultValue={data.defaultValue as any[]}
      />
    </Form.Item>
  );
}

FormCascader.propTypes = {
  data: PropTypes.object,
};

FormCascader.defaultProps = {};

export default FormCascader;
