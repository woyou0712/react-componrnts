/* eslint-disable */
import React, { useContext, useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { useDrag, useDrop } from "react-dnd";
import FormItem from "../../../../../../methods/FormItem";
import FormItems from "../../../../../../FormItems";
import context from "../../../../../../methods/context";
import FormBlock from "../FormBlock";
import DeleteButton from "../../../DeleteButton";

function MoveItem({ data }: { data: FormItem }) {
  const ref = useRef<HTMLDivElement>(null);
  const modules = useContext(context);
  const [activeItem, setActiveItem] = useState<FormItem>();
  const [hoveringItem, setHoveringItem] = useState<FormItem>();
  useEffect(() => {
    setActiveItem(modules.form.activeItem);
    setHoveringItem(modules.form.hoveringItem);
  }, [modules]);

  const [{ isDragging }, drag] = useDrag(() => ({
    type: modules.dragType.MOVE,
    item() {
      return data;
    },
    end(item, monitor) {
      modules.form.createingType = undefined;
      modules.form.moveingItem = undefined;
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
    drop(item, monitor) {
      const dropResult = monitor.getDropResult();
      console.log(dropResult);
      if (dropResult) return;

      // 是否可以嵌套
      let parentId = undefined;
      if (item.type !== "block") {
        parentId = data.parentId || data.id;
      }
      // 如果放置对象有ID，则是调整位置
      if (item.id) {
        modules.form.moveItem(item);
        return;
      }
      modules.form.createItem(item);
    },
    hover(item, monitor) {
      if (item.id === data.id) {
        modules.form.hoveringItem = undefined;
        return;
      }
      // 鼠标位置
      const mousePosition = monitor.getClientOffset();
      // 当前元素边界
      const box = ref.current?.getBoundingClientRect();
      if (!mousePosition || !box) return;
      // 判断是否落在子组件上
      if (data.type !== "block") {
        modules.form.hoveringItem = data;
      } else if (modules.form.hoveringItem?.parentId !== data.id) {
        modules.form.hoveringItem = data;
      }
      // 判断距离上边和下边的距离，绝对值小的距离近
      const mY = mousePosition.y;
      if (Math.abs(mY - box.top) < Math.abs(mY - box.bottom)) {
        modules.form.hoveringPosition = "up";
      } else {
        modules.form.hoveringPosition = "down";
      }
    },
  });

  drag(drop(ref));
  const style = { opacity: "1" };
  if (isDragging) {
    style.opacity = "0.4";
  }
  return (
    <div
      className={`create-form-item-mover ${
        hoveringItem?.type !== "block" &&
        isOver &&
        isOverShallow &&
        hoveringItem?.id === data.id
          ? modules.form.hoveringPosition
          : ""
      }`}
      ref={ref}
    >
      <div
        style={style}
        className={`create-form-item-view ${
          activeItem?.id === data.id ? "active" : ""
        }`}
        onClick={(e) => {
          e.stopPropagation();
          modules.form.activeItem = data;
        }}
      >
        <DeleteButton
          onClick={() => {
            modules.form.removeItem(data.id);
          }}
        />
        {data.type === "block" ? (
          <FormBlock data={data} />
        ) : (
          <FormItems data={data} />
        )}
      </div>
    </div>
  );
}

MoveItem.propTypes = {
  data: PropTypes.object,
};

MoveItem.defaultProps = {};

export default MoveItem;
