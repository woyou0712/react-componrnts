/* eslint-disable */
import React, { useContext, useEffect, useMemo } from "react";
import PropTypes from "prop-types";
import { Form, Input, Radio } from "antd";
import { FormItemOption } from "../../../../../../../../methods/types";
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
      options: _data.attribute.options,
      dataOrigin: _data.attribute.dataOrigin,
      origin: _data.attribute.origin,
    };
    formA.setFieldsValue(attribute);
  };

  useEffect(() => {
    if (data) {
      setValues(data);
    }
  }, [modules]);
  const onAttribute = (attribute: { [key: string]: any }) => {
    data?.pushAttribute(attribute);
  };
  return data ? (
    <div className="RadioOption">
      <Form form={formA} labelCol={{ span: 6 }} onValuesChange={onAttribute}>
        <Form.Item label="数据来源" name="dataOrigin">
          <Radio.Group buttonStyle="solid">
            <Radio.Button value="self">自定义选项</Radio.Button>
            <Radio.Button value="import">外部数据</Radio.Button>
          </Radio.Group>
        </Form.Item>
        {data.attribute.dataOrigin === "self" ? (
          <Form.Item label="选项" name="options">
            <Options />
          </Form.Item>
        ) : (
          <Form.Item label="数据源" name="origin">
            <DataOrigin />
          </Form.Item>
        )}
      </Form>
    </div>
  ) : null;
}

RadioOption.propTypes = {};

RadioOption.defaultProps = {};

export default RadioOption;
