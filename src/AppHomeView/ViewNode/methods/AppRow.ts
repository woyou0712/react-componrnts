import AppBlock from "./AppBlock";
import AppCol from "./AppCol";
import AppHead from "./AppHead";
import { Partition, AppRowOption } from "./nodes.d";

export default class AppRow {
  private id: string;
  private parent?: AppBlock | AppHead;
  private partition: Partition; // 份额
  private height: string | number = 50;
  private margin: string | number;
  private padding: string | number;
  private children: AppCol[] = [];

  constructor(option: AppRowOption) {
    const { id, parent, partition, height, margin, padding, children } = option;
    this.id = id;
    this.parent = parent;
    this.partition = partition;
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
      case "id":
        this.id = value as string;
        break;
      case "parent":
        this.parent = value as AppBlock | AppHead;
        break;
      case "partition":
        this.partition = value as Partition;
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
