/* eslint-disable */
import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Form, Radio } from "antd";
import FormItem from "../../methods/FormItem";
import context from "../../methods/context";

import "./index.less";

function FormRadio({ data }: { data: FormItem }) {
  const modules = useContext(context);
  const { form } = modules;

  return (
    <Form.Item
      name={data.name}
      label={data.label}
      required={data.required}
      rules={data.rules}
    >
      <Radio.Group
        defaultValue={data.defaultValue}
        disabled={data.disabled || form.disabled}
      />
    </Form.Item>
  );
}

FormRadio.propTypes = {
  data: PropTypes.object,
};

FormRadio.defaultProps = {};

export default FormRadio;
