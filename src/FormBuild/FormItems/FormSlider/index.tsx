/* eslint-disable */
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Form, Slider } from 'antd';
import FormItem from '../../methods/FormItem';
import context from '../../methods/context';

import './index.less';

function FormSlider({ data }: { data: FormItem }) {
  const modules = useContext(context);
  const { form } = modules;
  const { max, min, defaultValue } = data.attribute;
  return (
    <Form.Item
      name={data.name}
      label={data.label}
      required={data.required}
      rules={data.rules}
      initialValue={modules.mode === 'view' ? defaultValue : undefined}
    >
      <Slider disabled={data.disabled || form.disabled} max={max} min={min} />
    </Form.Item>
  );
}

FormSlider.propTypes = {
  data: PropTypes.object,
};

FormSlider.defaultProps = {};

export default FormSlider;
