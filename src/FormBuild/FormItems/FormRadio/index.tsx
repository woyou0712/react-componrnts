/* eslint-disable */
import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Form, Radio } from "antd";
import { FieldNames } from "rc-select/lib/Select.d";
import FormItem from "../../methods/FormItem";
import context from "../../methods/context";
import { OptionType } from "../../methods/types";

import "./index.less";
import { getFieldNames } from "../../methods/utils";

function FormRadio({ data }: { data: FormItem }) {
  const modules = useContext(context);
  const { multiple, options, dataOrigin, origin } = data.attribute;
  const [_options, setOptions] = useState<OptionType[]>([]);
  const [fieldNames, setFieldNames] = useState<FieldNames>(getFieldNames());

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
      <Radio.Group defaultValue={data.defaultValue}>
        {_options.map((item, index) => {
          const key = `r-${index}`;
          return (
            <Radio key={key} value={item.value}>
              {item.label}
            </Radio>
          );
        })}
      </Radio.Group>
    </Form.Item>
  );
}

FormRadio.propTypes = {
  data: PropTypes.object,
};

FormRadio.defaultProps = {};

export default FormRadio;
