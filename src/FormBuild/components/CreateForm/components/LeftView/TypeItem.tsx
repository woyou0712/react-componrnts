/* eslint-disable */
import React, { useContext } from "react";
import PropTypes from "prop-types";
import { useDrag } from "react-dnd";
import context from "../../../../methods/context";
import { ItemTypeOption } from "../../../../methods/types.d";
import "./index.less";

function TypeItem({ data }: { data: ItemTypeOption }) {
  const modules = useContext(context);

  const [{ isDragging }, drag] = useDrag(() => ({
    type: modules.dragType.CREATE,
    item() {
      return data;
    },
    end(item, monitor) {
      modules.form.createingType = undefined;
      console.log("拖动结束", item, monitor.getDropResult());
    },
    collect(monitor) {
      return { isDragging: monitor.isDragging() };
    },
  }));

  if (isDragging) {
    modules.form.createingType = data;
  }

  return (
    <div
      ref={drag}
      className="create-form-left-type"
      onClick={() => {
        modules.form.createItem(data);
      }}
    >
      {data.label}
    </div>
  );
}

TypeItem.propTypes = {
  data: PropTypes.object,
};

TypeItem.defaultProps = {};

export default TypeItem;
