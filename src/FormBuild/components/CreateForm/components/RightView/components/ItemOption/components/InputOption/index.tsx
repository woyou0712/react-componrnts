/* eslint-disable */
import React, { useContext, useEffect, useMemo } from "react";
import PropTypes from "prop-types";
import { Form, Input, Radio, Slider, Switch, InputNumber } from "antd";
import { FormItemOption } from "../../../../../../../../methods/types";
import FormItem from "../../../../../../../../methods/FormItem";
import context from "../../../../../../../../methods/context";
import RulesOptions from "../RulesOptions";

import "./index.less";

function InputOption() {
  const modules = useContext(context);
  const data = useMemo(() => modules.form.activeItem, [modules]);
  const [form] = Form.useForm();
  const setValues = (_data: FormItem) => {
    const values = {
      rules: _data.rules,
      maxLength: _data.maxLength,
      placeholder: _data.placeholder,
    };
    form.setFieldsValue(values);
  };

  useEffect(() => {
    if (data) {
      setValues(data);
    }
  }, [modules]);

  const onInput = (option: FormItemOption) => {
    data?.setOption(option);
  };

  return data ? (
    <div className="InputOption">
      <Form form={form} labelCol={{ span: 6 }} onValuesChange={onInput}>
        <Form.Item label="最大长度" name="maxLength">
          <InputNumber />
        </Form.Item>
        <Form.Item label="占位提示符" name="placeholder">
          <Input />
        </Form.Item>
        <Form.Item label="校验规则" name="rules">
          <RulesOptions />
        </Form.Item>
      </Form>
    </div>
  ) : null;
}

InputOption.propTypes = {};

InputOption.defaultProps = {};

export default InputOption;
