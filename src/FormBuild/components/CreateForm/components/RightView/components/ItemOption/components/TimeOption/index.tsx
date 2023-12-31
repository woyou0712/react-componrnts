/* eslint-disable */
import React, { useContext, useEffect, useMemo } from 'react';
import { Form, Input, TimePicker, Radio } from 'antd';
import moment, { Moment } from 'moment';
import FormItem from '../../../../../../../../methods/FormItem';
import context from '../../../../../../../../methods/context';
import { ItemAttribute } from '../../../../../../../../methods/types';
import { time2str } from '../../../../../../../../methods/utils';

import './index.less';

function TimeOption() {
  const modules = useContext(context);
  const data = useMemo(() => modules.form.activeItem, [modules]);
  const [formA] = Form.useForm();
  const setValues = (_data: FormItem) => {
    const attribute: ItemAttribute = {
      datetime: _data.attribute.datetime || 'HH:mm:ss',
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
      _attribute.defaultValue = time2str(_attribute.defaultValue as Moment);
    }
    data?.pushAttribute(_attribute);
  };

  return data ? (
    <div className="TimeOption">
      <Form form={formA} labelCol={{ span: 6 }} onValuesChange={onAttribute}>
        <Form.Item label="精度" name="datetime">
          <Radio.Group>
            <Radio value="HH">时</Radio>
            <Radio value="HH:mm">分</Radio>
            <Radio value="HH:mm:ss">秒</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="默认值" name="defaultValue">
          <TimePicker format={data.attribute.datetime} />
        </Form.Item>
        <Form.Item label="占位提示符" name="placeholder">
          <Input />
        </Form.Item>
      </Form>
    </div>
  ) : null;
}

TimeOption.propTypes = {};

TimeOption.defaultProps = {};

export default TimeOption;
