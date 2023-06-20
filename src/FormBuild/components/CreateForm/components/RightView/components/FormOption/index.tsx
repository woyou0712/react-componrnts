/* eslint-disable */
import React, { useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { Form, Input, Radio, Slider, Switch } from "antd";
import { FormModuleOption } from "../../../../../../methods/types";
import context from "../../../../../../methods/context";

import "./index.less";

function FormOption() {
  const [formV] = Form.useForm();
  const modules = useContext(context);
  const { form } = modules;
  const setValues = () => {
    const values = {
      name: form.name,
      label: form.label,
      formSize: form.formSize,
      labelAlign: form.labelAlign,
      labelCol: form.labelCol,
      disabled: form.disabled,
    };
    console.log(values);
    formV.setFieldsValue(values);
  };

  useEffect(() => {
    setValues();
  }, [form]);
  form.onChange(() => setValues());

  const onInput = (option: FormModuleOption) => {
    form.setOption(option);
  };

  return (
    <div className="FormOption">
      <Form form={formV} labelCol={{ span: 6 }} onValuesChange={onInput}>
        <Form.Item label="表名" name="name">
          <Input />
        </Form.Item>
        <Form.Item label="备注" name="label">
          <Input />
        </Form.Item>
        <Form.Item label="表单尺寸" name="formSize">
          <Radio.Group buttonStyle="solid">
            <Radio.Button value="small">小</Radio.Button>
            <Radio.Button value="middle">中</Radio.Button>
            <Radio.Button value="large">大</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="标签对齐" name="labelAlign">
          <Radio.Group buttonStyle="solid">
            <Radio.Button value="left">左</Radio.Button>
            <Radio.Button value="right">右</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="标签宽度" name="labelCol">
          <Slider min={1} max={24} />
        </Form.Item>
        <Form.Item label="禁用表单" name="disabled">
          <Switch />
        </Form.Item>
      </Form>
    </div>
  );
}

FormOption.propTypes = {};

FormOption.defaultProps = {};

export default FormOption;
