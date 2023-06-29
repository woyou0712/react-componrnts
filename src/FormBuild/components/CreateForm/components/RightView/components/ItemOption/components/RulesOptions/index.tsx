/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { Input } from 'antd';
import { SelfRule } from '../../../../../../../../methods/types.d';
import DeleteButton from '../../../../../DeleteButton';
import './index.less';

function RulesOptions({ value, onChange }: { value?: SelfRule[]; onChange?: (data: SelfRule[]) => void }) {
  const [values, setValues] = useState<SelfRule[]>([]);
  useEffect(() => {
    setValues(value ? [...value] : []);
  }, [value]);
  return (
    <div className="form-rules-options">
      {values
        ? values.map((rule, index) => {
            const key = `rule-${index}`;
            return (
              <div key={key} className="form-rule-options-item">
                <DeleteButton
                  onClick={() => {
                    const rules = [...values];
                    rules.splice(index, 1);
                    setValues(rules);
                    if (onChange) onChange(rules);
                  }}
                />
                <Input
                  value={rule.pattern}
                  placeholder="正则表达式"
                  onChange={(e) => {
                    rule.pattern = e.target.value;
                    setValues([...values]);
                  }}
                  onBlur={() => {
                    if (onChange) onChange([...values]);
                  }}
                />
                <Input
                  value={rule.message}
                  placeholder="提示文本"
                  style={{ marginTop: '10px' }}
                  onChange={(e) => {
                    rule.message = e.target.value;
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
        className="form-rule-options-item button"
        onClick={() => {
          const rules = values ? [...values] : [];
          rules.push({});
          setValues(rules);
          if (onChange) onChange(rules);
        }}
      >
        +添加校验规则
      </div>
    </div>
  );
}

RulesOptions.propTypes = {};

RulesOptions.defaultProps = {};

export default RulesOptions;
