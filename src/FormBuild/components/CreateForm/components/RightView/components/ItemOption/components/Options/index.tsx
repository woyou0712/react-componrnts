/* eslint-disable */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Input, Space } from 'antd';
import { OptionType } from '../../../../../../../../methods/types.d';
import DeleteButton from '../../../../../DeleteButton';
import './index.less';

function Options({ value, onChange }: { value?: OptionType[]; onChange?: (data: OptionType[]) => void }) {
  const [values, setValues] = useState<OptionType[]>([]);
  useEffect(() => {
    setValues(value ? [...value] : []);
  }, [value]);
  return (
    <div className="form-optios-options">
      {values
        ? values.map((option, index) => {
            const key = `option-${index}`;
            return (
              <div key={key} className="form-option-options-item">
                <DeleteButton
                  onClick={() => {
                    const options = [...values];
                    options.splice(index, 1);
                    setValues(options);
                    if (onChange) onChange(options);
                  }}
                />
                <Input
                  value={option.value}
                  placeholder="编码"
                  onChange={(e) => {
                    option.value = e.target.value;
                    setValues([...values]);
                  }}
                  onBlur={() => {
                    if (onChange) onChange([...values]);
                  }}
                />
                <Input
                  value={option.label}
                  placeholder="名称"
                  style={{ marginTop: '10px' }}
                  onChange={(e) => {
                    option.label = e.target.value;
                    setValues([...values]);
                  }}
                  onBlur={() => {
                    if (onChange) onChange([...values]);
                  }}
                />
              </div>
            );
          })
        : null}
      <div
        className="form-option-options-item button"
        onClick={() => {
          const options = values ? [...values] : [];
          options.push({});
          setValues(options);
          if (onChange) onChange(options);
        }}
      >
        +添加选项
      </div>
    </div>
  );
}

Options.propTypes = {};

Options.defaultProps = {};

export default Options;
