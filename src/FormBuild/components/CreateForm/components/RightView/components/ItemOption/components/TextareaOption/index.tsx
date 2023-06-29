/* eslint-disable */
import React, { useContext, useEffect, useMemo } from 'react';
import { Form, Input, InputNumber } from 'antd';
import { ItemAttribute, FormItemOption } from '../../../../../../../../methods/types';
import FormItem from '../../../../../../../../methods/FormItem';
import context from '../../../../../../../../methods/context';
import RulesOptions from '../RulesOptions';

import './index.less';

function TextareaOption() {
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

  const onAttribute = (attribute: ItemAttribute) => {
    data?.pushAttribute(attribute);
  };

  return data ? (
    <div className="TextareaOption">
      <Form form={formA} labelCol={{ span: 6 }} onValuesChange={onAttribute}>
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

TextareaOption.propTypes = {};

TextareaOption.defaultProps = {};

export default TextareaOption;
