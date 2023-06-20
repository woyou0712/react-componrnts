/* eslint-disable */
import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Form, Checkbox } from "antd";
import FormItem from "../../methods/FormItem";
import context from "../../methods/context";

import "./index.less";

function FormCheckbox({ data }: { data: FormItem }) {
  const modules = useContext(context);
  const { form } = modules;

  return (
    <Form.Item
      name={data.name}
      label={data.label}
      required={data.required}
      rules={data.rules}
    >
      <Checkbox.Group
        defaultValue={data.defaultValue as any[]}
        disabled={data.disabled || form.disabled}
      />
    </Form.Item>
  );
}

FormCheckbox.propTypes = {
  data: PropTypes.object,
};

FormCheckbox.defaultProps = {};

export default FormCheckbox;
