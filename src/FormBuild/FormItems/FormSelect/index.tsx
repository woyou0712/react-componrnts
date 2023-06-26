/* eslint-disable */
import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Form, Select } from "antd";
import FormItem from "../../methods/FormItem";
import context from "../../methods/context";
import { OptionType } from "../../methods/types";

import "./index.less";

function FormSelect({ data }: { data: FormItem }) {
  const modules = useContext(context);
  const { multiple, options } = data.attribute;
  return (
    <Form.Item
      name={data.name}
      label={data.label}
      required={data.required}
      rules={data.rules}
    >
      <Select
        mode={multiple ? "multiple" : undefined}
        placeholder={data.placeholder as string}
        disabled={data.disabled || modules.form.disabled}
        defaultValue={data.defaultValue as string}
        options={(options as OptionType[])?.map((item) => ({
          label: item.label,
          value: item.value,
        }))}
      />
    </Form.Item>
  );
}

FormSelect.propTypes = {
  data: PropTypes.object,
};

FormSelect.defaultProps = {};

export default FormSelect;
