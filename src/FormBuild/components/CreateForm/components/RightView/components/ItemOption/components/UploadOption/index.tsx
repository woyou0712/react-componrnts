/* eslint-disable */
import React, { useContext, useEffect, useMemo } from "react";
import { Form, InputNumber, Input } from "antd";
import { Attribute } from "../../../../../../../../methods/types";
import FormItem from "../../../../../../../../methods/FormItem";
import context from "../../../../../../../../methods/context";

import "./index.less";

function UploadOption() {
  const modules = useContext(context);
  const data = useMemo(() => modules.form.activeItem, [modules]);
  const [formA] = Form.useForm();
  const setValues = (_data: FormItem) => {
    const attribute = {
      fileUploadTitle: _data.attribute.fileUploadTitle,
      fileUploadMaxCount: _data.attribute.fileUploadMaxCount,
      fileUploadMaxSize: _data.attribute.fileUploadMaxSize,
    };
    formA.setFieldsValue(attribute);
  };

  useEffect(() => {
    if (data) {
      setValues(data);
    }
  }, [modules]);

  const onAttribute = (attribute: Attribute) => {
    data?.pushAttribute(attribute);
  };

  return data ? (
    <div className="UploadOption">
      <Form form={formA} labelCol={{ span: 6 }} onValuesChange={onAttribute}>
        <Form.Item label="说明标题" name="fileUploadTitle">
          <Input />
        </Form.Item>
        <Form.Item label="上传数量限制" name="fileUploadMaxCount">
          <InputNumber />
        </Form.Item>
        <Form.Item label="文件大小限制" name="fileUploadMaxSize">
          <InputNumber addonAfter="MB" />
        </Form.Item>
      </Form>
    </div>
  ) : null;
}

UploadOption.propTypes = {};

UploadOption.defaultProps = {};

export default UploadOption;
