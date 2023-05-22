import AppBlock from "./AppBlock";
import AppCol from "./AppCol";
import AppHead from "./AppHead";
import { Proportion, AppRowOption } from "./nodes.d";

export default class AppRow {
  parent?: AppBlock | AppHead;
  proportion: Proportion; // 份额
  height: string | number;
  margin: string | number;
  padding: string | number;
  children: AppCol[] = [];

  constructor(option: AppRowOption) {
    const { parent, proportion, height, margin, padding, children } = option;
    this.parent = parent;
    this.proportion = proportion;
    this.height = height;
    this.margin = margin;
    this.padding = padding;
    this.children = children;
  }

  get(key: keyof AppRowOption) {
    return this[key];
  }
  set<K extends keyof AppRowOption>(key: K, value: AppRowOption[K]) {
    switch (key) {
      case "parent":
        this.parent = value as AppBlock | AppHead;
        break;
      case "proportion":
        this.proportion = value as Proportion;
        break;
      case "height":
        this.height = value as string | number;
        break;
      case "margin":
        this.margin = value as string | number;
        break;
      case "padding":
        this.padding = value as string | number;
        break;
      case "children":
        this.children = value as AppCol[];
        break;
    }
  }
}
