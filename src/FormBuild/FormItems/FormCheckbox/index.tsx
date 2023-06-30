/* eslint-disable */
import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Checkbox } from 'antd';
import FormItem from '../../methods/FormItem';
import context from '../../methods/context';
import { OptionType } from '../../methods/types';
import { getFieldNames } from '../../methods/utils';

import './index.less';

function FormCheckbox({ data }: { data: FormItem }) {
  const modules = useContext(context);
  const { options, dataOrigin, origin, defaultValue } = data.attribute;
  const [_options, setOptions] = useState<OptionType[]>([]);

  useEffect(() => {
    if (dataOrigin === 'self') {
      // 自定义选项
      if (options) {
        setOptions((options as OptionType[]).map((item) => ({ ...item })));
      } else {
        setOptions([]);
      }
    } else {
      // 网络源
      setOptions([
        { label: '外部数据1', value: 1 },
        { label: '外部数据2', value: 2 },
      ]);
      // getFieldNames(origin);
    }
  }, [modules]);

  return (
    <Form.Item
      name={data.name}
      label={data.label}
      required={data.required}
      rules={data.rules}
      initialValue={modules.mode === 'view' && defaultValue ? [defaultValue] : undefined}
    >
      <Checkbox.Group disabled={data.disabled || modules.form.disabled}>
        {_options.map((item, index) => {
          const key = `r-${index}`;
          return (
            <Checkbox key={key} value={item.value}>
              {item.label}
            </Checkbox>
          );
        })}
      </Checkbox.Group>
    </Form.Item>
  );
}

FormCheckbox.propTypes = {
  data: PropTypes.object,
};

FormCheckbox.defaultProps = {};

export default FormCheckbox;
