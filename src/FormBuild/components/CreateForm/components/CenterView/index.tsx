/* eslint-disable */
import React, { useContext, useEffect, useState } from "react";
import { useDrop } from "react-dnd";
import { Row, Col, Form } from "antd";
import MoveItem from "./components/MoveItem";
import context from "../../../../methods/context";
import FormItem from "../../../../methods/FormItem";
import { ItemTypeOption } from "../../../../methods/types";

import "./index.less";

function CenterView() {
  const modules = useContext(context);
  const [, drop] = useDrop(() => ({
    accept: [modules.dragType.CREATE, modules.dragType.MOVE],
    drop(item: ItemTypeOption | FormItem, monitor) {
      if (!item) return;
      const dropResult = monitor.getDropResult();
      if (dropResult) return;
      console.log(item);
      if (item instanceof FormItem && item.id) {
        modules.form.moveItem(item);
      } else {
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
    <div className="create-form-center-view" ref={drop}>
      <Form
        size={formSize}
        labelAlign={labelAlign}
        labelCol={labelCol !== 0 ? { span: labelCol } : undefined}
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
  );
}

CenterView.propTypes = {};

CenterView.defaultProps = {};

export default CenterView;
