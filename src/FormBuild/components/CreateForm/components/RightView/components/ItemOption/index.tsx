/* eslint-disable */
import React, { useContext, useEffect, useMemo } from "react";
import PropTypes from "prop-types";
import { Empty, Form, Input, Select, Slider, Switch, InputNumber } from "antd";
import { FormItemOption } from "../../../../../../methods/types";
import context from "../../../../../../methods/context";
import FormItem from "../../../../../../methods/FormItem";
import InputOption from "./components/InputOption";

import "./index.less";
import SelectOption from "./components/SelectOption";

function getComponent(data: FormItem) {
  switch (data.type) {
    case "input":
    case "textarea":
    case "password":
    case "number":
      return <InputOption />;
    case "radio":
    case "checkbox":
    case "select":
      return <SelectOption />;
    case "cascader":
    case "switch":
    case "slider":
    case "time":
    case "times":
    case "date":
    case "dates":
    case "rate":
    case "upload":
    case "block":
    case "button":
  }
}

function ItemOption() {
  const modules = useContext(context);
  const data = useMemo(() => modules.form.activeItem, [modules]);
  const [form] = Form.useForm();
  const setValues = (_data: FormItem) => {
    const values = {
      name: _data.name,
      label: _data.label,
      dataType: _data.dataType,
      maxLength: _data.maxLength,
      connectTable: _data.connectTable,
      connectCol: _data.connectCol,
      queryParams: _data.queryParams,
      disabled: _data.disabled,
      required: _data.required,
      rules: _data.rules,
      placeholder: _data.placeholder,
      defaultValue: _data.defaultValue,
      colspan: _data.colspan,
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

  if (!data) {
    return <Empty description="未选中组件" style={{ marginTop: "150px" }} />;
  }
  return (
    <div className="InputOption">
      <Form form={form} labelCol={{ span: 6 }} onValuesChange={onInput}>
        <Form.Item label="字段名称" name="name">
          <Input />
        </Form.Item>
        <Form.Item label="字段备注" name="label">
          <Input />
        </Form.Item>
        <Form.Item label="栅格" name="colspan">
          <Slider min={6} max={24} />
        </Form.Item>
        <Form.Item label="查询条件" name="queryParams" valuePropName="checked">
          <Switch />
        </Form.Item>
        <Form.Item label="禁用" name="disabled" valuePropName="checked">
          <Switch />
        </Form.Item>
        <Form.Item label="关联表" name="connectTable">
          <Select />
        </Form.Item>
        <Form.Item label="关联字段" name="connectCol">
          <Select disabled={!data?.connectTable} />
        </Form.Item>
        <Form.Item label="数据类型" name="dataType">
          <Select disabled>
            <Select.Option value="string">字符</Select.Option>
            <Select.Option value="datetime">时间</Select.Option>
            <Select.Option value="number">数值</Select.Option>
            <Select.Option value="float">小数</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="必填" name="required" valuePropName="checked">
          <Switch />
        </Form.Item>
      </Form>
      {getComponent(data)}
    </div>
  );
}

ItemOption.propTypes = {};

ItemOption.defaultProps = {};

export default ItemOption;
