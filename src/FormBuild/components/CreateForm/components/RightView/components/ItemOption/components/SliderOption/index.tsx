/* eslint-disable */
import React, { useContext, useEffect, useMemo } from "react";
import PropTypes from "prop-types";
import { Form, Input, Select, Slider, Switch, InputNumber } from "antd";
import { FormItemOption } from "../../../../../../../../methods/types";
import FormItem from "../../../../../../../../methods/FormItem";
import context from "../../../../../../../../methods/context";
import RulesOptions from "../RulesOptions";

import "./index.less";

function SliderOption() {
  const modules = useContext(context);
  const data = useMemo(() => modules.form.activeItem, [modules]);
  const [form] = Form.useForm();
  const [formA] = Form.useForm();
  const setValues = (_data: FormItem) => {
    const values = {
      defaultValue: _data.defaultValue,
    };
    form.setFieldsValue(values);

    const attribute = {
      min: _data.attribute.min,
      max: _data.attribute.max,
    };
    formA.setFieldsValue(attribute);
  };

  useEffect(() => {
    if (data) {
      setValues(data);
    }
  }, [modules]);

  const onInput = (option: FormItemOption) => {
    data?.setOption(option);
  };

  const onAttribute = (attribute: { [key: string]: any }) => {
    data?.pushAttribute(attribute);
  };

  return data ? (
    <div className="SliderOption">
      <Form form={formA} labelCol={{ span: 6 }} onValuesChange={onAttribute}>
        <Form.Item label="最小值" name="min">
          <InputNumber />
        </Form.Item>
        <Form.Item label="最小值" name="max">
          <InputNumber />
        </Form.Item>
      </Form>
      <Form form={form} labelCol={{ span: 6 }} onValuesChange={onInput}>
        <Form.Item label="默认值" name="defaultValue">
          <InputNumber />
        </Form.Item>
      </Form>
    </div>
  ) : null;
}

SliderOption.propTypes = {};

SliderOption.defaultProps = {};

export default SliderOption;
