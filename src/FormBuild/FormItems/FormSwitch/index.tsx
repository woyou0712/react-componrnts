/* eslint-disable */
import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Form, Switch } from "antd";
import FormItem from "../../methods/FormItem";
import context from "../../methods/context";

import "./index.less";

function FormSwitch({ data }: { data: FormItem }) {
  const modules = useContext(context);
  const { form } = modules;

  return (
    <Form.Item
      name={data.name}
      label={data.label}
      required={data.required}
      rules={data.rules}
    >
      <Switch
        disabled={data.disabled || form.disabled}
        defaultChecked={data.defaultValue as boolean}
      />
    </Form.Item>
  );
}

FormSwitch.propTypes = {
  data: PropTypes.object,
};

FormSwitch.defaultProps = {};

export default FormSwitch;
