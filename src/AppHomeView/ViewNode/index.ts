import { createElement, querySelector } from "../utils/Tools";
import { nodeTypes } from "./methods/ststic";
import { Node, NodeType } from "./methods/nodes.d";
import AppBlock from "./methods/AppBlock";
import AppHead from "./methods/AppHead";
import AppItem from "./methods/AppItem";
import AppText from "./methods/AppText";
import AppRow from "./methods/AppRow";
import AppCol from "./methods/AppCol";
export default class ViewNode {
  // 所有的节点类型
  static nodeTypes = nodeTypes;
  // 鼠标移动元素层
  static moveElement = createElement("div", {
    class: "app-mouse-move-element",
  });
  // 可视区域（可以放置元素的区域）
  private viewContent: HTMLElement | null;

  // 当前待创建的对象
  private beforeCreateNodeType?: NodeType;
  // 所有节点id map表（方便快速查找）
  private nodeMap: { [id: string]: Node } = {};
  // 已添加的节点
  private _nodes: (AppBlock | AppRow)[] = [];

  get nodes() {
    return this._nodes;
  }

  set nodes(v) {
    this._nodes = v;
  }

  // 当前激活的节点
  public activeElement?: HTMLElement;

  constructor({
    viewContent,
    nodes,
  }: {
    viewContent: string | HTMLElement;
    nodes?: any[];
  }) {
    if (typeof viewContent === "string") {
      this.viewContent = querySelector(viewContent);
    } else {
      this.viewContent = viewContent;
    }
    this.viewContent.setAttribute("data-type", "BaseCntent");
    this.viewContent.setAttribute("id", "BaseCntent");
    this.nodes = nodes || [];
    this.setEvent(this.viewContent);
  }

  private setEvent(el: HTMLElement) {
    el.ondragover = null;
    el.ondrop = null;
    // 拖入区域
    el.ondragenter = (e) => {
      e.preventDefault();
      const bool = this.verify(el);
      if (bool) {
        el.style.backgroundColor = "#FFF";
        el.ondragover = (e) => e.preventDefault();
        el.ondrop = () => {
          console.log("创建对象");
        };
      }
    };
    el.ondragleave = (e) => {
      e.preventDefault();
      el.style.backgroundColor = "initial";
      el.ondragover = null;
      el.ondrop = null;
    };
  }

  /**
   * 校验该区域是否可以放置该元素
   */
  private verify(el: HTMLElement) {
    const nodeType: NodeType | "BaseCntent" = el.getAttribute("data-type") as
      | NodeType
      | "BaseCntent";
    switch (nodeType) {
      case "BaseCntent":
        return (
          ["AppBlock", "AppRow"].indexOf(
            this.beforeCreateNodeType || "error"
          ) !== -1
        );

      default:
        break;
    }
    return false;
  }

  private render(nodes: any[]) {}

  public moveCreateNode(nodeType: NodeType) {
    this.beforeCreateNodeType = nodeType;
  }

  private createNode(el: HTMLElement) {
    const option: { [key: string]: any } = {};
    const id = el.getAttribute("id");
    if (id && id !== "BaseCntent") {
      option.parent = this.nodeMap[id];
    }
    switch (this.beforeCreateNodeType) {
      case "AppBlock":
        break;

      default:
        break;
    }
  }
}
