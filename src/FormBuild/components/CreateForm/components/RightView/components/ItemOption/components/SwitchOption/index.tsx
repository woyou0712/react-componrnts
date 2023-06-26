/* eslint-disable */
import React, { useContext, useEffect, useMemo } from "react";
import PropTypes from "prop-types";
import { Form, Input, Select, Slider, Switch, InputNumber, Radio } from "antd";
import { FormItemOption } from "../../../../../../../../methods/types";
import FormItem from "../../../../../../../../methods/FormItem";
import context from "../../../../../../../../methods/context";

import "./index.less";

function SwitchOption() {
  const modules = useContext(context);
  const data = useMemo(() => modules.form.activeItem, [modules]);
  const [form] = Form.useForm();
  const setValues = (_data: FormItem) => {
    const values = {
      defaultValue: _data.defaultValue,
    };
    form.setFieldsValue(values);
  };

  useEffect(() => {
    if (data) {
      setValues(data);
    }
  }, [modules]);

  const onInput = (option: FormItemOption) => {
    data?.setOption(option);
  };

  return data ? (
    <div className="SwitchOption">
      <Form form={form} labelCol={{ span: 6 }} onValuesChange={onInput}>
        <Form.Item label="默认值" name="defaultValue">
          <Radio.Group defaultValue="false">
            <Radio value="false">关闭</Radio>
            <Radio value="true">打开</Radio>
          </Radio.Group>
        </Form.Item>
      </Form>
    </div>
  ) : null;
}

SwitchOption.propTypes = {};

SwitchOption.defaultProps = {};

export default SwitchOption;
