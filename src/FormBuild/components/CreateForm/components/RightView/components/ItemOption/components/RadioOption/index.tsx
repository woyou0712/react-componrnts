/* eslint-disable */
import React, { useContext, useEffect, useMemo } from "react";
import { Form, Input, Radio } from "antd";
import { ItemAttribute } from "../../../../../../../../methods/types";
import FormItem from "../../../../../../../../methods/FormItem";
import context from "../../../../../../../../methods/context";
import Options from "../Options";
import DataOrigin from "../DataOrigin";

import "./index.less";

function RadioOption() {
  const modules = useContext(context);
  const data = useMemo(() => modules.form.activeItem, [modules]);
  const [formA] = Form.useForm();
  const setValues = (_data: FormItem) => {
    const attribute = {
      defaultValue: _data.attribute.defaultValue,
      options: _data.attribute.options,
      optionsOriginType: _data.attribute.optionsOriginType,
      optionsOrigin: _data.attribute.optionsOrigin,
    };
    formA.setFieldsValue(attribute);
  };

  useEffect(() => {
    if (data) {
      setValues(data);
    }
  }, [modules]);

  const onAttribute = (attribute: ItemAttribute) => {
    data?.pushAttribute(attribute);
  };
  return data ? (
    <div className="RadioOption">
      <Form form={formA} labelCol={{ span: 6 }} onValuesChange={onAttribute}>
        <Form.Item label="数据来源" name="optionsOriginType">
          <Radio.Group buttonStyle="solid">
            <Radio.Button value="self">自定义</Radio.Button>
            <Radio.Button value="import">外部数据</Radio.Button>
          </Radio.Group>
        </Form.Item>
        {((optionsOriginType) => {
          switch (optionsOriginType) {
            case "self":
              return (
                <Form.Item label="选项" name="options">
                  <Options />
                </Form.Item>
              );
            case "import":
              return (
                <Form.Item label="数据源" name="optionsOrigin">
                  <DataOrigin />
                </Form.Item>
              );
            default:
              break;
          }
        })(data.attribute.optionsOriginType)}
        <Form.Item label="默认值" name="defaultValue">
          <Input />
        </Form.Item>
      </Form>
    </div>
  ) : null;
}

RadioOption.propTypes = {};

RadioOption.defaultProps = {};

export default RadioOption;
