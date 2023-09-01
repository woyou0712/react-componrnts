/* eslint-disable */
import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import context from "../../methods/context";
import { downloadFile, readFile } from "../../methods/utils";

function Toolbar() {
  const { module } = useContext(context);

  const [command, setCommand] = useState(null);

  const [canvas, setCanvas] = useState(null);
  const [currentScale, setCurrentScale] = useState(null);
  useEffect(() => {
    if (!module) return;
    const s: any = module.get("commandStack");
    setCommand(s);
    const c: any = module.get("canvas");
    setCanvas(c);
    setCurrentScale(c.zoom());
  }, [module]);

  return (
    <section className="bpmn-toolbar">
      <div className="toolbar-body">
        <div
          className="toolbar-item"
          onClick={() => {
            readFile(".bpmn,.xml").then((xml) => {
              module.renderXML(xml as string);
            });
          }}
        >
          导入XML
        </div>
        <div
          className="toolbar-item"
          onClick={() => {
            module.saveXML().then(({ xml }) => {
              const definitions = module.getDefinitions();
              downloadFile(
                xml,
                `${definitions?.rootElements[0]?.name || Date.now()}.bpmn`
              );
            });
          }}
        >
          导出XML
        </div>
      </div>
      <div className="toolbar-body">
        <div
          className="toolbar-item"
          onClick={() => {
            if (command && command.canUndo()) command.undo();
          }}
        >
          上一步
        </div>
        <div
          className="toolbar-item"
          onClick={() => {
            if (command && command.canRedo()) command.redo();
          }}
        >
          下一步
        </div>
      </div>
      <div className="toolbar-body">
        <div
          className="toolbar-item"
          onClick={() => {
            const c = Math.floor(currentScale * 100 - 0.1 * 100) / 100;
            setCurrentScale(c);
            if (canvas) canvas.zoom(c, { x: 0, y: 0 });
          }}
        >
          缩小
        </div>
        <div
          className="toolbar-item"
          title="还原"
          onClick={() => {
            setCurrentScale(1);
            if (canvas) canvas.zoom(1, { x: 0, y: 0 });
          }}
        >
          {Math.floor(currentScale * 10) * 10}%
        </div>
        <div
          className="toolbar-item"
          onClick={() => {
            const c = Math.floor(currentScale * 100 + 0.1 * 100) / 100;
            setCurrentScale(c);
            if (canvas) canvas.zoom(c, { x: 0, y: 0 });
          }}
        >
          放大
        </div>
      </div>
    </section>
  );
}

Toolbar.propTypes = {};

Toolbar.defaultProps = {};

export default Toolbar;
