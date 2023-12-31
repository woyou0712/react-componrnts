/* eslint-disable */
import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Form } from "antd";
import FormItem from "../../methods/FormItem";
import context from "../../methods/context";
import FileUpload from "./FileUpload";

import "./index.less";

function FormUpload({ data }: { data: FormItem }) {
  const modules = useContext(context);
  const { form } = modules;
  const { fileUploadTitle, fileUploadMaxCount, fileUploadMaxSize } =
    data.attribute;

  return (
    <Form.Item
      name={data.name}
      label={data.label}
      required={data.required}
      rules={data.rules}
    >
      <FileUpload
        disabled={data.disabled || form.disabled}
        title={fileUploadTitle}
        maxCount={fileUploadMaxCount}
        maxSize={fileUploadMaxSize}
      />
    </Form.Item>
  );
}

FormUpload.propTypes = {
  data: PropTypes.object,
};

FormUpload.defaultProps = {};

export default FormUpload;
