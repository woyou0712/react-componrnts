import { ModdleElement } from "bpmn-js/lib/BaseModeler";
import BpmnModeler, { ImportXMLResult } from "bpmn-js/lib/Modeler";
import { BaseViewerOptions, InternalEvent, Shape } from "./types.d";

export default class Moduler extends BpmnModeler {
  static _onChangeTime?: any;

  private _onChangeCall = (data?: Moduler) => {};

  private _onChange() {
    clearTimeout(Moduler._onChangeTime);
    Moduler._onChangeTime = setTimeout(() => {
      this._onChangeCall(this);
    }, 25);
  }

  public activeElement?: Shape;

  constructor(options?: BaseViewerOptions) {
    super(options);
    this._onUserEvent();
  }

  private _setActiveElement(element: Shape) {
    if (element) {
      this.activeElement = element;
    } else {
      const elementRegistry: Shape[] = this.get("elementRegistry");
      this.activeElement =
        elementRegistry.find((e) => e.type === "bpmn:Process") ||
        elementRegistry.find((e) => e.type === "bpmn:Collaboration");
    }
    this._onChange();
  }
  /** 监听用户操作 */
  private _onUserEvent() {
    // 监听选择事件，修改当前激活的元素以及表单
    this.on("selection.changed", ({ newSelection }: InternalEvent) => {
      const element = newSelection[0];
      this._setActiveElement(element);
    });
    // 监听元素修改变化，触发更新
    this.on("element.changed", ({ element }: { element: Shape }) => {
      // 保证 修改 "默认流转路径" 等类似需要修改多个元素的事件发生的时候，更新表单的元素与原选中元素不一致。
      if (!this.activeElement || this.activeElement.id === element?.id) {
        this._setActiveElement(element);
      }
    });
  }

  /** 渲染XML */
  renderXML(
    xml: string,
    bpmnDiagram?: ModdleElement | string
  ): Promise<ImportXMLResult> {
    return new Promise((resolve, reject) => {
      this.importXML(xml, bpmnDiagram)
        .then((res) => {
          const definitions = this.getDefinitions();
          console.log("重置命名空间definitions：", definitions);
          definitions.set("xmlns:activiti", "http://activiti.org/bpmn");
          definitions.set("xmlns:flowable", "http://flowable.org/bpmn");
          definitions.set("xmlns:camunda", "http://camunda.org/bpmn");
          resolve(res);

          this._onChange();
        })
        .catch((e) => reject(e));
    });
  }
  /** 监听数据变更 */
  onChange(callback: (data?: Moduler) => void) {
    this._onChangeCall = callback;
  }

  /** 获取元素ID */
  getElementId() {
    return this.activeElement?.businessObject.id;
  }
}
