/* eslint-disable */
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Form, DatePicker } from 'antd';
import FormItem from '../../methods/FormItem';
import context from '../../methods/context';
import { str2dates } from '../../methods/utils';
import './index.less';

function FormDates({ data }: { data: FormItem }) {
  const modules = useContext(context);
  const { form } = modules;
  const { placeholder, defaultValue, datetime } = data.attribute;
  return (
    <Form.Item
      name={data.name}
      label={data.label}
      required={data.required}
      rules={data.rules}
      initialValue={modules.mode === 'view' && str2dates(defaultValue as string)}
    >
      <DatePicker.RangePicker
        showTime={datetime ? { format: datetime } : undefined}
        format={datetime ? `YYYY-MM-DD ${datetime}` : undefined}
        placeholder={placeholder as [string, string]}
        disabled={data.disabled || form.disabled}
      />
    </Form.Item>
  );
}

FormDates.propTypes = {
  data: PropTypes.object,
};

FormDates.defaultProps = {};

export default FormDates;
