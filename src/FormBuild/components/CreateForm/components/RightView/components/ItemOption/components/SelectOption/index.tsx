/* eslint-disable */
import React, { useContext, useEffect, useMemo } from "react";
import PropTypes from "prop-types";
import { Form, Input, Radio, Select, Switch, InputNumber } from "antd";
import { FormItemOption } from "../../../../../../../../methods/types";
import FormItem from "../../../../../../../../methods/FormItem";
import context from "../../../../../../../../methods/context";
import Options from "../Options";
import DataOrigin from "../DataOrigin";
import RulesOptions from "../RulesOptions";

import "./index.less";

function SelectOption() {
  const modules = useContext(context);
  const data = useMemo(() => modules.form.activeItem, [modules]);
  const [form] = Form.useForm();
  const [formA] = Form.useForm();
  const setValues = (_data: FormItem) => {
    const values = {
      placeholder: _data.placeholder,
      defaultValue: _data.defaultValue,
    };
    form.setFieldsValue(values);

    const attribute = {
      multiple: _data.attribute.multiple,
      options: _data.attribute.options,
      dataOrigin: _data.attribute.dataOrigin,
      origin: _data.attribute.origin,
      connectTable: _data.attribute.connectTable,
      connectCol: _data.attribute.connectCol,
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
    <div className="SelectOption">
      <Form form={formA} labelCol={{ span: 6 }} onValuesChange={onAttribute}>
        <Form.Item label="多选" name="multiple" valuePropName="checked">
          <Switch />
        </Form.Item>
        <Form.Item label="数据来源" name="dataOrigin">
          <Radio.Group buttonStyle="solid">
            <Radio.Button value="self">自定义</Radio.Button>
            <Radio.Button value="join">关联表</Radio.Button>
            <Radio.Button value="import">外部数据</Radio.Button>
          </Radio.Group>
        </Form.Item>
        {((dataOrigin) => {
          switch (dataOrigin) {
            case "self":
              return (
                <Form.Item label="选项" name="options">
                  <Options />
                </Form.Item>
              );
            case "import":
              return (
                <Form.Item label="数据源" name="origin">
                  <DataOrigin />
                </Form.Item>
              );
            case "join":
              return (
                <>
                  <Form.Item label="关联表" name="connectTable">
                    <Select />
                  </Form.Item>
                  <Form.Item label="关联字段" name="connectCol">
                    <Select disabled={!data?.attribute.connectTable} />
                  </Form.Item>
                </>
              );
            default:
              break;
          }
        })(data.attribute.dataOrigin)}
      </Form>
      <Form form={form} labelCol={{ span: 6 }} onValuesChange={onInput}>
        <Form.Item label="占位提示符" name="placeholder">
          <Input />
        </Form.Item>
        <Form.Item label="默认值" name="defaultValue">
          <Input />
        </Form.Item>
      </Form>
    </div>
  ) : null;
}

SelectOption.propTypes = {};

SelectOption.defaultProps = {};

export default SelectOption;
