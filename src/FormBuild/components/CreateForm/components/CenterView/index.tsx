/* eslint-disable */
import React, { useContext, useEffect, useState } from "react";
import { useDrop } from "react-dnd";
import { Row, Col, Form } from "antd";
import context from "../../../../methods/context";
import FormItem from "../../../../methods/FormItem";
import { ItemTypeOption } from "../../../../methods/types";
import MoveItem from "./components/MoveItem";

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
    hover() {
      modules.form.hoveringItem = undefined;
      modules.form.hoveringPosition = undefined;
    },
  }));

  const [children, setChildren] = useState<FormItem[]>(modules.form.children);
  const { formSize, labelAlign, labelCol, colon, layout } = modules.form;
  useEffect(() => {
    setChildren([...modules.form.children]);
  }, [modules]);

  return (
    <div className="create-form-center-body">
      <div className="create-form-center-view" ref={drop}>
        <Form
          size={formSize}
          labelAlign={labelAlign}
          labelCol={{ span: labelCol }}
          colon={colon}
          layout={layout}
        >
          <Row>
            {children.map((item) => (
              <Col span={item.colspan} key={item.id}>
                <MoveItem data={item} />
              </Col>
            ))}
          </Row>
        </Form>
      </div>
    </div>
  );
}

CenterView.propTypes = {};

CenterView.defaultProps = {};

export default CenterView;
