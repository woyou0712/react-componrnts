import AppBlock from "./AppBlock";
import AppRow from "./AppRow";
import { AppHeadOption } from "./nodes.d";

export default class AppHead {
  private id: string;
  private parent: AppBlock;
  private children: AppRow[];
  private border?: string;

  constructor(option: AppHeadOption) {
    const { id, parent, children, border } = option;
    this.id = id;
    this.parent = parent;
    this.children = children;
    this.border = border;
  }

  get(key: keyof AppHeadOption) {
    return this[key];
  }
  set<K extends keyof AppHeadOption>(key: K, value: AppHeadOption[K]) {
    switch (key) {
      case "id":
        this.id = value as string;
        break;
      case "parent":
        this.parent = value as AppBlock;
        break;
      case "children":
        this.children = value as AppRow[];
        break;
      case "border":
        this.border = value as string;
        break;
    }
    return this;
  }
}
