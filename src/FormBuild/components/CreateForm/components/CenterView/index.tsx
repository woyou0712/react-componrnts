/* eslint-disable */
import React, { useContext, useMemo, useState } from "react";
import PropTypes from "prop-types";
import { useDrop } from "react-dnd";
import { Row, Col, Form } from "antd";
import { SizeType } from "antd/lib/config-provider/SizeContext";
import { ItemTypeOption, LabelAlign } from "../../../../methods/types";
import MoveItem from "./MoveItem";
import context from "../../../../methods/context";
import FormItem from "../../../../methods/FormItem";

import "./index.less";

function CenterView() {
  const modules = useContext(context);
  const [, drop] = useDrop(() => ({
    accept: modules.dragType.CREATE,
    drop(item: ItemTypeOption, monitor) {
      if (!item) return;
      const dropResult = monitor.getDropResult();
      if (dropResult === null) {
        modules.form.createItem(item);
      }
    },
    collect: (monitor) => ({ canDrop: monitor.canDrop() }),
  }));

  const [children, setChildren] = useState<FormItem[]>(modules.form.children);
  const [size, setSize] = useState<SizeType>(modules.form.formSize);
  const [algin, setAlgin] = useState<LabelAlign>(modules.form.labelAlign);
  const [col, setCol] = useState<number>(modules.form.labelCol);
  modules.form.onChange((form) => {
    setChildren([...form.children]);
    setSize(form.formSize);
    setAlgin(form.labelAlign);
    setCol(form.labelCol);
  });
  return (
    <div className="create-form-center-view" ref={drop}>
      <Form size={size} labelAlign={algin} labelCol={{ span: col }}>
        <Row>
          {children.map((item) => (
            <Col span={item.colspan} key={item.id}>
              <MoveItem data={item} />
            </Col>
          ))}
        </Row>
      </Form>
    </div>
  );
}

CenterView.propTypes = {};

CenterView.defaultProps = {};

export default CenterView;
