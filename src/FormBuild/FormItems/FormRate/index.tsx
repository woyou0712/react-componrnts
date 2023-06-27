/* eslint-disable */
import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Form, Rate } from "antd";
import FormItem from "../../methods/FormItem";
import context from "../../methods/context";

import "./index.less";

function FormRate({ data }: { data: FormItem }) {
  const modules = useContext(context);
  const { form } = modules;
  const { defaultValue } = data.attribute;

  return (
    <Form.Item
      name={data.name}
      label={data.label}
      required={data.required}
      rules={data.rules}
    >
      <Rate
        disabled={data.disabled || form.disabled}
        defaultValue={defaultValue as number}
      />
    </Form.Item>
  );
}

FormRate.propTypes = {
  data: PropTypes.object,
};

FormRate.defaultProps = {};

export default FormRate;
