import FlowNode from "./FlowNode";

export interface ModelAttribute {
  xmlns?: string;
  "xmlns:xsi"?: string;
  "xmlns:xsd"?: string;
  "xmlns:activiti"?: string;
  "xmlns:bpmndi"?: string;
  "xmlns:omgdc"?: string;
  "xmlns:omgdi"?: string;
  typeLanguage?: string;
  expressionLanguage?: string;
  targetNamespace?: string;
  processId?: string;
  processName?: string;
  BPMNDiagramId?: string;
}

export interface FlowModelType {
  id: string;
  attribute: ModelAttribute;
  nodes: FlowNode[];
}

export type NodeType =
  | "startEvent" // 开始节点
  | "endEvent" // 结束节点
  | "exclusiveGateway" // 条件节点
  | "userTask"; // 用户审批节点

export interface NodeAttribute {}
export interface FlowNodeType {
  id: string;
  type: NodeType;
  attribute: NodeAttribute; // 属性
  sourceRefs: string[]; // 父节点ID列表
  targetRefs: string[]; // 子节点ID列表
}
