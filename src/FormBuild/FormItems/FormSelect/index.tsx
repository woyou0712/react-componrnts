/* eslint-disable */
import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Form, Select } from "antd";
import { FieldNames } from "rc-select/lib/Select.d";
import FormItem from "../../methods/FormItem";
import context from "../../methods/context";
import { OptionType } from "../../methods/types";

import "./index.less";
import { getFieldNames } from "../../methods/utils";

function FormSelect({ data }: { data: FormItem }) {
  const modules = useContext(context);
  const { multiple, options, dataOrigin, origin } = data.attribute;
  const [_options, setOptions] = useState<OptionType[]>([]);
  const [fieldNames, setFieldNames] = useState<FieldNames>();

  useEffect(() => {
    if (dataOrigin === "self") {
      // 自定义选项
      if (options) {
        setOptions((options as OptionType[]).map((item) => ({ ...item })));
      } else {
        setOptions([]);
      }
    } else {
      // 网络源
      setOptions([
        { label: "外部数据1", value: 1 },
        { label: "外部数据2", value: 2 },
      ]);
      setFieldNames(getFieldNames(origin));
    }
  }, [modules]);

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
        fieldNames={fieldNames}
        options={_options}
      />
    </Form.Item>
  );
}

FormSelect.propTypes = {
  data: PropTypes.object,
};

FormSelect.defaultProps = {};

export default FormSelect;
