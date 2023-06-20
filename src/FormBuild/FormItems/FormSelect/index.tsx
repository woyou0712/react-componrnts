/* eslint-disable */
import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Form, Select } from "antd";
import FormItem from "../../methods/FormItem";
import context from "../../methods/context";

import "./index.less";

function FormSelect({ data }: { data: FormItem }) {
  const modules = useContext(context);
  const { form } = modules;

  return (
    <Form.Item
      name={data.name}
      label={data.label}
      required={data.required}
      rules={data.rules}
    >
      <Select
        placeholder={data.placeholder as string}
        disabled={data.disabled || form.disabled}
        defaultValue={data.defaultValue as string}
      />
    </Form.Item>
  );
}

FormSelect.propTypes = {
  data: PropTypes.object,
};

FormSelect.defaultProps = {};

export default FormSelect;
