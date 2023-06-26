/* eslint-disable */
import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Form, Cascader } from "antd";
import { FieldNames } from "rc-select/lib/Select.d";
import FormItem from "../../methods/FormItem";
import context from "../../methods/context";
import { OptionType } from "../../methods/types";
import { getFieldNames } from "../../methods/utils";

import "./index.less";

function FormCascader({ data }: { data: FormItem }) {
  const modules = useContext(context);
  const { multiple, origin } = data.attribute;
  const [_options, setOptions] = useState<OptionType[]>([]);
  const [fieldNames, setFieldNames] = useState<FieldNames>();

  useEffect(() => {
    // 网络源
    setOptions([
      {
        label: "数据1",
        value: "1",
        children: [
          { label: "数据1-1", value: "11" },
          { label: "数据1-2", value: "12" },
        ],
      },
      {
        label: "数据2",
        value: "2",
        children: [
          { label: "数据2-1", value: "21" },
          { label: "数据2-2", value: "22" },
        ],
      },
    ]);
    setFieldNames(getFieldNames(origin));
  }, []);

  return (
    <Form.Item
      name={data.name}
      label={data.label}
      required={data.required}
      rules={data.rules}
    >
      <Cascader
        multiple={multiple}
        placeholder={data.placeholder as string}
        disabled={data.disabled || modules.form.disabled}
        defaultValue={
          data.defaultValue ? [data.defaultValue as string] : undefined
        }
        fieldNames={fieldNames}
        options={_options}
      />
    </Form.Item>
  );
}

FormCascader.propTypes = {
  data: PropTypes.object,
};

FormCascader.defaultProps = {};

export default FormCascader;
