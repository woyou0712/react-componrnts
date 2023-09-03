import { ModdleElement } from "bpmn-js/lib/BaseModeler";
import BpmnModeler, { ImportXMLResult } from "bpmn-js/lib/Modeler";
import { BaseViewerOptions, InternalEvent, Shape } from "./types.d";
import { getBusinessObject, is, isAny } from "bpmn-js/lib/util/ModelUtil";
import { add as collectionAdd } from "diagram-js/lib/util/Collections";

function createCategoryValue(definitions, bpmnFactory) {
  const categoryValue = bpmnFactory.create("bpmn:CategoryValue");
  const category = bpmnFactory.create("bpmn:Category", {
    categoryValue: [categoryValue],
  });
  collectionAdd(definitions.get("rootElements"), category);
  getBusinessObject(category).$parent = definitions;
  getBusinessObject(categoryValue).$parent = category;

  return categoryValue;
}
function initializeCategory(businessObject, rootElement, bpmnFactory) {
  const definitions = getBusinessObject(rootElement).$parent;

  businessObject.categoryValueRef = createCategoryValue(
    definitions,
    bpmnFactory
  );
}

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

  /** 元素ID */
  getElementId() {
    return this.activeElement?.businessObject.id;
  }
  setElementId(id: string) {
    const modeling: any = this.get("modeling");
    const definitions = this.getDefinitions();
    const assigned = definitions?.$model?.ids?.assigned(id);
    if (assigned && assigned !== this.activeElement) {
      return alert("ID不能重复");
    }
    modeling.updateProperties(this.activeElement, { id });
  }
  /** 元素名称 */
  getElementName() {
    this._onChange();
    if (
      isAny(this.activeElement, [
        "bpmn:Collaboration",
        "bpmn:DataAssociation",
        "bpmn:Association",
      ])
    ) {
      return undefined;
    }
    if (is(this.activeElement, "bpmn:TextAnnotation")) {
      return this.activeElement.businessObject.text;
    }
    if (is(this.activeElement, "bpmn:Group")) {
      const businessObject = getBusinessObject(this.activeElement);
      const categoryValueRef = businessObject?.categoryValueRef;
      return categoryValueRef?.value;
    }
    return this.activeElement?.businessObject.name;
  }
  setElementName(name: string) {
    this._onChange();
    const modeling: any = this.get("modeling");
    const canvas: any = this.get("canvas");
    const bpmnFactory: any = this.get("bpmnFactory");
    if (
      isAny(this.activeElement, [
        "bpmn:Collaboration",
        "bpmn:DataAssociation",
        "bpmn:Association",
      ])
    ) {
      return undefined;
    }
    if (is(this.activeElement, "bpmn:TextAnnotation")) {
      return modeling?.updateProperties(this.activeElement, { text: name });
    }
    if (is(this.activeElement, "bpmn:Group")) {
      const businessObject = getBusinessObject(this.activeElement);
      const { categoryValueRef } = businessObject;
      if (!categoryValueRef) {
        initializeCategory(
          businessObject,
          canvas?.getRootElement(),
          bpmnFactory
        );
      }
      return modeling?.updateLabel(this.activeElement, name);
    }
    modeling?.updateProperties(this.activeElement, { name: name });
    return undefined;
  }
}
