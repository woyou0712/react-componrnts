/* eslint-disable */
import React, { useContext, useEffect, useMemo } from 'react';
import { Form, Radio, TimePicker } from 'antd';
import { Moment } from 'moment';
import { str2times, times2str } from '../../../../../../../../methods/utils';
import Inputs from '../../../Inputs';
import FormItem from '../../../../../../../../methods/FormItem';
import context from '../../../../../../../../methods/context';
import { ItemAttribute } from '../../../../../../../../methods/types';

import './index.less';

function TimesOption() {
  const modules = useContext(context);
  const data = useMemo(() => modules.form.activeItem, [modules]);
  const [formA] = Form.useForm();
  const setValues = (_data: FormItem) => {
    const attribute = {
      datetime: _data.attribute.datetime || 'HH:mm:ss',
      defaultValue: _data.attribute.defaultValue ? str2times(_data.attribute.defaultValue as string) : undefined,
      placeholder: _data.attribute.placeholder,
    };
    formA.setFieldsValue(attribute);
  };

  useEffect(() => {
    if (data) {
      setValues(data);
    }
  }, [modules]);

  const onAttribute = (attribute: ItemAttribute) => {
    const _attribute: ItemAttribute = { ...attribute };
    if (Array.isArray(_attribute.defaultValue)) {
      _attribute.defaultValue = times2str(_attribute.defaultValue as [Moment, Moment]);
    }
    data?.pushAttribute(_attribute);
  };

  return data ? (
    <div className="TimesOption">
      <Form form={formA} labelCol={{ span: 6 }} onValuesChange={onAttribute}>
        <Form.Item label="精度" name="datetime">
          <Radio.Group>
            <Radio value="HH">时</Radio>
            <Radio value="HH:mm">分</Radio>
            <Radio value="HH:mm:ss">秒</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="默认值" name="defaultValue">
          <TimePicker.RangePicker format={data.attribute.datetime} />
        </Form.Item>
        <Form.Item label="占位提示符" name="placeholder">
          <Inputs />
        </Form.Item>
      </Form>
    </div>
  ) : null;
}

TimesOption.propTypes = {};

TimesOption.defaultProps = {};

export default TimesOption;
