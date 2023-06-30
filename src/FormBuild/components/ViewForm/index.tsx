/* eslint-disable */
import React, { useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Form, Row, Col, Space, Button } from "antd";
import context from "../../methods/context";
import FormItem from "../../methods/FormItem";
import FormItems from "../../FormItems";

import "./index.less";
import FormModule from "../../methods/FormModule";

function ViewForm({
  onBack,
  onSubmit,
}: {
  onBack?: () => void;
  onSubmit?: (data: FormModule) => void;
}) {
  const modules = useContext(context);
  const [children, setChildren] = useState<FormItem[]>(modules.form.children);
  const [formData] = Form.useForm();

  useEffect(() => {
    setChildren([...modules.form.children]);
  }, [modules]);
  const { formSize, labelAlign, labelCol, colon, layout } = modules.form;
  return (
    <div className="view-form-build">
      <Form
        form={formData}
        size={formSize}
        labelAlign={labelAlign}
        labelCol={{ span: labelCol }}
        colon={colon}
        layout={layout}
      >
        <Row>
          {children.map((item) => (
            <Col span={item.colspan} key={item.id}>
              <FormItems data={item} />
            </Col>
          ))}
        </Row>
      </Form>
      <div className="button-box">
        <Space>
          <Button onClick={onBack}>返回</Button>
          <Button
            type="primary"
            onClick={() =>
              formData.validateFields().then((values) => {
                if (onSubmit) onSubmit(values);
              })
            }
          >
            提交
          </Button>
        </Space>
      </div>
    </div>
  );
}

ViewForm.propTypes = {};

ViewForm.defaultProps = {};

export default ViewForm;
