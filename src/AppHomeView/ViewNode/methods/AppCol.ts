import AppBlock from "./AppBlock";
import AppItem from "./AppItem";
import AppRow from "./AppRow";
import { Proportion, AppColOption } from "./nodes.d";

export default class AppCol {
  private parent: AppRow;
  private proportion: Proportion; // 占比
  private margin: string | number;
  private padding: string | number;
  private children: (AppBlock | AppItem)[] = [];
  constructor(option: AppColOption) {
    const { parent, proportion, margin, padding, children } = option;
    this.parent = parent;
    this.proportion = proportion;
    this.margin = margin;
    this.padding = padding;
    this.children = children;
  }

  get(key: keyof AppColOption) {
    return this[key];
  }
  set<K extends keyof AppColOption>(key: K, value: AppColOption[K]) {
    switch (key) {
      case "parent":
        this.parent = value as AppRow;
        break;
      case "proportion":
        this.proportion = value as Proportion;
        break;
      case "margin":
        this.margin = value as string | number;
        break;
      case "padding":
        this.padding = value as string | number;
        break;
      case "children":
        this.children = value as (AppBlock | AppItem)[];
        break;
    }
    return this;
  }
}
