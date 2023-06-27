/* eslint-disable */
import React, { useContext, useEffect, useMemo } from "react";
import PropTypes from "prop-types";
import { Empty, Form, Select, Slider, Switch } from "antd";
import { FormItemOption } from "../../../../../../methods/types";
import context from "../../../../../../methods/context";
import FormItem from "../../../../../../methods/FormItem";
import TextInput from "../TextInput";
import InputOption from "./components/InputOption";
import NumberOption from "./components/NumberOption";
import SelectOption from "./components/SelectOption";
import CascaderOption from "./components/CascaderOption";
import RadioOption from "./components/RadioOption";
import SliderOption from "./components/SliderOption";
import SwitchOption from "./components/SwitchOption";
import TimeOption from "./components/TimeOption";
import DateOption from "./components/DateOption";

import "./index.less";

function getComponent(data: FormItem) {
  switch (data.type) {
    case "input":
    case "textarea":
    case "password":
      return <InputOption />;
    case "number":
      return <NumberOption />;
    case "select":
      return <SelectOption />;
    case "cascader":
      return <CascaderOption />;
    case "radio":
    case "checkbox":
      return <RadioOption />;
    case "switch":
      return <SwitchOption />;
    case "slider":
      return <SliderOption />;
    case "time":
      return <TimeOption />;
    case "times":
    case "date":
      return <DateOption />;
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
      queryParams: _data.queryParams,
      disabled: _data.disabled,
      required: _data.required,
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
        <Form.Item label="字段编码" name="name">
          <TextInput />
        </Form.Item>
        <Form.Item label="字段名称" name="label">
          <TextInput />
        </Form.Item>
        <Form.Item label="必填" name="required" valuePropName="checked">
          <Switch />
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
      </Form>
      <hr />
      {getComponent(data)}
    </div>
  );
}

ItemOption.propTypes = {};

ItemOption.defaultProps = {};

export default ItemOption;
