import FlowNode from "./FlowNode";
import { ModelAttribute, FlowModelType } from "./types";

export default class FlowModel implements FlowModelType {
  id = Date.now().toString();

  private _attribute: ModelAttribute = {
    xmlns: "http://www.omg.org/spec/BPMN/20100524/MODEL",
    "xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
    "xmlns:xsd": "http://www.w3.org/2001/XMLSchema",
    "xmlns:activiti": "http://activiti.org/bpmn",
    "xmlns:bpmndi": "http://www.omg.org/spec/BPMN/20100524/DI",
    "xmlns:omgdc": "http://www.omg.org/spec/DD/20100524/DC",
    "xmlns:omgdi": "http://www.omg.org/spec/DD/20100524/DI",
    typeLanguage: "http://www.w3.org/2001/XMLSchema",
    expressionLanguage: "http://www.w3.org/1999/XPath",
    targetNamespace: "BNQ",
  };

  get attribute() {
    return this._attribute;
  }

  private _nodes: FlowNode[] = [];

  get nodes() {
    return this._nodes;
  }

  private xmlContent: string = "";

  constructor(data: string | FlowModelType) {
    if (typeof data === "string") {
      this.xmlContent = data;
    } else {
    }
  }

  setAttribute<T extends keyof ModelAttribute>(
    key: T,
    value: ModelAttribute[T]
  ) {
    this._attribute[key] = value;
  }

  pushNodes(node: FlowNode) {
    this._nodes.push(node);
  }
}
