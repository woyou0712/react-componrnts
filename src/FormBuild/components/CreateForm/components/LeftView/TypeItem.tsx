/* eslint-disable */
import React, { useContext } from "react";
import PropTypes from "prop-types";
import { useDrag } from "react-dnd";
import context from "../../../../methods/context";
import { ItemTypeOption } from "../../../../methods/types.d";
import "./index.less";

function TypeItem({ data }: { data: ItemTypeOption }) {
  const module = useContext(context);

  const [{ isDragging }, drag] = useDrag(() => ({
    type: "box",
    item() {
      return data;
    },
    end(item, monitor) {
      module.form.createingType = undefined;
      console.log("拖动结束", item, monitor.getDropResult());
    },
    collect(monitor) {
      return { isDragging: monitor.isDragging() };
    },
  }));

  if (isDragging) {
    module.form.createingType = data;
  }

  return (
    <div ref={drag} className="create-form-left-type">
      {data.label}
    </div>
  );
}

TypeItem.propTypes = {
  data: PropTypes.object,
};

TypeItem.defaultProps = {};

export default TypeItem;
