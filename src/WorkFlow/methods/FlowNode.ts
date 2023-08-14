import { FlowNodeType, NodeAttribute, NodeType } from "./types";

export default class FlowNode implements FlowNodeType {
  id = Date.now().toString();
  type: NodeType = "startEvent";
  sourceRefs: string[] = [];
  targetRefs: string[] = [];

  private _attribute: NodeAttribute = {};
  get attribute() {
    return this._attribute;
  }
  set attribute(v) {
    this._attribute = v;
  }

  constructor() {}
}
