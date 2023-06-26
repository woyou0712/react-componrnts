/* eslint-disable */
import React, { useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { Form, Input, Radio, Slider, Switch, InputNumber } from "antd";
import { FormItemOption } from "../../../../../../../../methods/types";
import FormItem from "../../../../../../../../methods/FormItem";

import "./index.less";

function InputOption({ data }: { data: FormItem }) {
  const [formV] = Form.useForm();

  const setValues = () => {
    const values = {
      name: data.name,
      label: data.label,
      dataType: data.dataType,
      maxLength: data.maxLength,
    };
    formV.setFieldsValue(values);
  };

  useEffect(() => {
    setValues();
  }, [data]);

  const onInput = (option: FormItemOption) => {
    data.setOption(option);
  };

  return (
    <div className="InputOption">
      <Form form={formV} labelCol={{ span: 6 }} onValuesChange={onInput}>
        <Form.Item label="字段名称" name="name">
          <Input />
        </Form.Item>
        <Form.Item label="字段备注" name="label">
          <Input />
        </Form.Item>
        <Form.Item label="数据类型" name="dataType">
          <Radio.Group buttonStyle="solid">
            <Radio.Button value="string">字符</Radio.Button>
            <Radio.Button value="datetime">时间</Radio.Button>
            <Radio.Button value="number">数值</Radio.Button>
            <Radio.Button value="float">小数</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="最大长度" name="maxLength">
          <InputNumber />
        </Form.Item>
        <Form.Item label="标签宽度" name="labelCol">
          <Slider min={1} max={24} />
        </Form.Item>
        <Form.Item label="禁用表单" name="disabled" valuePropName="checked">
          <Switch />
        </Form.Item>
        <Form.Item label="表单布局" name="layout">
          <Radio.Group buttonStyle="solid">
            <Radio.Button value="vertical">上下</Radio.Button>
            <Radio.Button value="horizontal">默认</Radio.Button>
            <Radio.Button value="inline">行内</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="显示冒号" name="colon" valuePropName="checked">
          <Switch />
        </Form.Item>
      </Form>
    </div>
  );
}

InputOption.propTypes = {};

InputOption.defaultProps = {};

export default InputOption;
