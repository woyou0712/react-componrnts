/* eslint-disable */
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Form, Input } from "antd";
import { SelfRule } from "../../../../../../../../methods/types.d";
import FormItem from "../../../../../../../../methods/FormItem";
import "./index.less";

function RulesOptions({ data }: { data: FormItem }) {
  const [rules, setRules] = useState<SelfRule[]>([]);
  useEffect(() => {
    setRules([...data.rules]);
  }, [data]);
  return (
    <div className="form-rules-options">
      {rules.map((rule, index) => {
        const key = `rule-${index}`;
        return (
          <Form key={key}>
            <Form.Item name="regExp" label="正则表达式">
              <Input />
            </Form.Item>
            <Form.Item name="message" label="提示信息">
              <Input />
            </Form.Item>
          </Form>
        );
      })}
    </div>
  );
}

RulesOptions.propTypes = {};

RulesOptions.defaultProps = {};

export default RulesOptions;
