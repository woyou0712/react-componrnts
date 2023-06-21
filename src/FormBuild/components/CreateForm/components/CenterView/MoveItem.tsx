/* eslint-disable */
import React, { useContext, useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { useDrag, useDrop } from "react-dnd";
import FormItem from "../../../../methods/FormItem";
import FormItems from "../../../../FormItems";
import context from "../../../../methods/context";

import "./index.less";

function MoveItem({ data }: { data: FormItem }) {
  const ref = useRef<HTMLDivElement>(null);
  const modules = useContext(context);
  const [activeItem, setActiveItem] = useState<FormItem>();
  useEffect(() => {
    setActiveItem(modules.form.activeItem);
  }, [modules]);

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

  const [movePosition, setMovePosition] = useState<"up" | "down">("down");
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
      // 如果放置对象有ID，则是调整位置
      if (item.id) {
        modules.form.moveItem(item, data, movePosition);
      } else {
        modules.form.createItem(
          item,
          movePosition === "up" ? data.index : data.index + 1
        );
      }
    },
    hover(item, monitor) {
      // 鼠标位置
      const mousePosition = monitor.getClientOffset();
      // 当前元素边界
      const box = ref.current?.getBoundingClientRect();
      if (!mousePosition || !box) return;
      const mY = mousePosition.y;
      if (Math.abs(mY - box.top) < Math.abs(mY - box.bottom)) {
        setMovePosition("up");
      } else {
        setMovePosition("down");
      }
    },
  });

  drag(drop(ref));
  const style = { opacity: "1" };
  if (isDragging) {
    style.opacity = "0.4";
  }
  return (
    <div ref={ref}>
      <div
        style={style}
        className={`create-form-item-view ${
          activeItem?.id === data.id ? "active" : ""
        }`}
        onClick={() => {
          modules.form.activeItem = data;
        }}
      >
        <FormItems data={data} />
      </div>
    </div>
  );
}

MoveItem.propTypes = {
  data: PropTypes.object,
};

MoveItem.defaultProps = {};

export default MoveItem;
