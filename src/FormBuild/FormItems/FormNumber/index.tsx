/* eslint-disable */
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Form, InputNumber } from 'antd';
import FormItem from '../../methods/FormItem';
import context from '../../methods/context';

import './index.less';

function FormNumber({ data }: { data: FormItem }) {
  const modules = useContext(context);
  const { form } = modules;
  const { max, min, placeholder, defaultValue } = data.attribute;
  return (
    <Form.Item
      name={data.name}
      label={data.label}
      required={data.required}
      initialValue={modules.mode === 'view' ? defaultValue : undefined}
      rules={data.rules.map((item) => {
        let pattern;
        try {
          pattern = item.pattern ? new RegExp(item.pattern) : undefined;
        } catch (e) {
          console.log('正则表达式格式错误');
        }
        return {
          required: item.required,
          message: item.message,
          pattern,
        };
      })}
    >
      <InputNumber
        placeholder={placeholder as string}
        disabled={data.disabled || form.disabled}
        maxLength={data.maxLength}
        max={max}
        min={min}
      />
    </Form.Item>
  );
}

FormNumber.propTypes = {
  data: PropTypes.object,
};

FormNumber.defaultProps = {};

export default FormNumber;
