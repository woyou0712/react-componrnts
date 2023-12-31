/* eslint-disable */
import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Form, Cascader } from "antd";
import FormItem from "../../methods/FormItem";
import context from "../../methods/context";

import "./index.less";

function FormBlock({ data }: { data: FormItem }) {
  const modules = useContext(context);
  const { form } = modules;

  return (
    <div className="form-block-body">
      <Form.Item
        name={data.name}
        label={data.label}
        required={data.required}
        rules={data.rules}
        labelCol={{ span: 24 }}
      >
        <div className="form-block-content"></div>
      </Form.Item>
    </div>
  );
}

FormBlock.propTypes = {
  data: PropTypes.object,
};

FormBlock.defaultProps = {};

export default FormBlock;
