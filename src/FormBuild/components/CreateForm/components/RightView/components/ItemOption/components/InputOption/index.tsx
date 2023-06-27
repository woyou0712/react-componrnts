/* eslint-disable */
import React, { useContext, useEffect, useMemo } from "react";
import { Form, Input, InputNumber } from "antd";
import {
  Attribute,
  FormItemOption,
} from "../../../../../../../../methods/types";
import FormItem from "../../../../../../../../methods/FormItem";
import context from "../../../../../../../../methods/context";
import RulesOptions from "../RulesOptions";

import "./index.less";

function InputOption() {
  const modules = useContext(context);
  const data = useMemo(() => modules.form.activeItem, [modules]);
  const [form] = Form.useForm();
  const [formA] = Form.useForm();
  const setValues = (_data: FormItem) => {
    const values = {
      rules: _data.rules,
      maxLength: _data.maxLength,
    };
    form.setFieldsValue(values);

    const attribute = {
      placeholder: _data.attribute.placeholder,
      defaultValue: _data.attribute.defaultValue,
      addonBefore: _data.attribute.addonBefore,
      addonAfter: _data.attribute.addonAfter,
    };
    formA.setFieldsValue(attribute);
  };

  useEffect(() => {
    if (data) {
      setValues(data);
    }
  }, [modules]);

  const onInput = (option: FormItemOption) => {
    data?.setOption(option);
  };

  const onAttribute = (attribute: Attribute) => {
    data?.pushAttribute(attribute);
  };

  return data ? (
    <div className="InputOption">
      <Form form={formA} labelCol={{ span: 6 }} onValuesChange={onAttribute}>
        <Form.Item label="前缀" name="addonBefore">
          <Input />
        </Form.Item>
        <Form.Item label="后缀" name="addonAfter">
          <Input />
        </Form.Item>
        <Form.Item label="默认值" name="defaultValue">
          <Input />
        </Form.Item>
        <Form.Item label="占位提示符" name="placeholder">
          <Input />
        </Form.Item>
      </Form>
      <Form form={form} labelCol={{ span: 6 }} onValuesChange={onInput}>
        <Form.Item label="最大长度" name="maxLength">
          <InputNumber />
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
