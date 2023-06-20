/* eslint-disable */
import React, { useRef } from "react";
import PropTypes from "prop-types";
import { useDrag, useDrop } from "react-dnd";
import FormItem from "../../../../methods/FormItem";
import FormItems from "../../../../FormItems";
import useModules from "../../../../methods/useModules";
import { ItemTypeOption } from "../../../../methods/types";

import "./index.less";

function MoveItem({ data }: { data: FormItem }) {
  const ref = useRef(null);
  const modules = useModules();

  const [{ isDragging }, drag] = useDrag(() => ({
    type: modules.dragType.MOVE,
    item() {
      return data;
    },
    end(item, monitor) {
      modules.form.createingType = undefined;
      console.log("拖动结束", item, monitor.getDropResult());
    },
    collect(monitor) {
      return { isDragging: monitor.isDragging(), canDrag: monitor.canDrag() };
    },
  }));
  const [{ isOver, isOverShallow }, drop] = useDrop<FormItem, any, any>({
    accept: [modules.dragType.CREATE, modules.dragType.MOVE],
    collect: (monitor) => {
      return {
        dropRes: monitor.getDropResult(),
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop(),
        // You can check monitor.isOver({ shallow: true })to test whether the hover happens over only the current target, or over a nested one
        isOverShallow: monitor.isOver({ shallow: true }),
      };
    },
    canDrop() {
      // 是否允许拖动
      return true;
    },
    drop(item) {
      if (item.id) {
        
      }
    },
    hover(item, monitor) {},
  });

  drag(drop(ref));

  return (
    <div ref={ref} className="create-form-item-view">
      <FormItems data={data} />
    </div>
  );
}

MoveItem.propTypes = {
  data: PropTypes.object,
};

MoveItem.defaultProps = {};

export default MoveItem;
