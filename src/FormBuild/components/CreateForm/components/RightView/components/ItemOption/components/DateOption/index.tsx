/* eslint-disable */
import React, { useContext, useEffect, useMemo } from 'react';
import { Form, Input, DatePicker, Radio } from 'antd';
import { ItemAttribute } from '../../../../../../../../methods/types';
import { date2str } from '../../../../../../../../methods/utils';
import FormItem from '../../../../../../../../methods/FormItem';
import context from '../../../../../../../../methods/context';
import moment, { Moment } from 'moment';

import './index.less';

function DateOption() {
  const modules = useContext(context);
  const data = useMemo(() => modules.form.activeItem, [modules]);
  const [formA] = Form.useForm();

  const setValues = (_data: FormItem) => {
    const attribute = {
      datetime: _data.attribute.datetime,
      placeholder: _data.attribute.placeholder,
      defaultValue: _data.attribute.defaultValue ? moment(_data.attribute.defaultValue as string) : undefined,
    };
    formA.setFieldsValue(attribute);
  };

  useEffect(() => {
    if (data) {
      setValues(data);
    }
  }, [modules]);

  const onAttribute = (attribute: ItemAttribute) => {
    const _attribute = { ...attribute };
    if (_attribute.defaultValue) {
      _attribute.defaultValue = date2str(_attribute.defaultValue as Moment);
    }
    data?.pushAttribute(_attribute);
  };

  return data ? (
    <div className="DateOption">
      <Form form={formA} labelCol={{ span: 6 }} onValuesChange={onAttribute}>
        <Form.Item label="精度" name="datetime">
          <Radio.Group>
            <Radio value="">日</Radio>
            <Radio value="HH">时</Radio>
            <Radio value="HH:mm">分</Radio>
            <Radio value="HH:mm:ss">秒</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="默认值" name="defaultValue">
          <DatePicker />
        </Form.Item>
        <Form.Item label="占位提示符" name="placeholder">
          <Input />
        </Form.Item>
      </Form>
    </div>
  ) : null;
}

DateOption.propTypes = {};

DateOption.defaultProps = {};

export default DateOption;
