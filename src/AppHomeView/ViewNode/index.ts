import { querySelector } from "../utils/Tools";
import { nodeTypes } from "./methods/ststic";

export default class ViewNode {
  // 所有的节点类型
  static nodeTypes = nodeTypes;
  // 可视区域
  private viewContent: Element | null;
  // 当前激活的节点
  public activeElement?: HTMLElement;

  constructor({ viewContent }: { viewContent: string | HTMLElement }) {
    if (typeof viewContent === "string") {
      this.viewContent = querySelector(viewContent);
    } else {
      this.viewContent = viewContent;
    }
  }

  public moveCreateNode(nodeType: string) {
    console.log(nodeType);
  }
}
