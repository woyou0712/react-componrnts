import AppBlock from "./AppBlock";
import AppRow from "./AppRow";
import { AppHeadOption } from "./nodes.d";

export default class AppHead {
  private parent: AppBlock;
  private children: AppRow;

  constructor(option: AppHeadOption) {
    const { parent, children } = option;
    this.parent = parent;
    this.children = children;
  }

  get(key: keyof AppHeadOption) {
    return this[key];
  }
  set<K extends keyof AppHeadOption>(key: K, value: AppHeadOption[K]) {
    switch (key) {
      case "parent":
        this.parent = value as AppBlock;
        break;
      case "children":
        this.children = value as AppRow;
        break;
    }
    return this;
  }
}
