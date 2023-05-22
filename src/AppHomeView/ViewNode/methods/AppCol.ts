import AppBlock from "./AppBlock";
import AppItem from "./AppItem";
import AppRow from "./AppRow";
import { Partition, AppColOption } from "./nodes.d";

export default class AppCol {
  private id: string;
  private parent: AppRow;
  private partition: Partition; // 占比
  private margin: string | number;
  private padding: string | number;
  private children: (AppBlock | AppItem)[] = [];
  constructor(option: AppColOption) {
    const { id, parent, partition, margin, padding, children } = option;
    this.id = id;
    this.parent = parent;
    this.partition = partition;
    this.margin = margin;
    this.padding = padding;
    this.children = children;
  }

  get(key: keyof AppColOption) {
    return this[key];
  }
  set<K extends keyof AppColOption>(key: K, value: AppColOption[K]) {
    switch (key) {
      case "id":
        this.id = value as string;
        break;
      case "parent":
        this.parent = value as AppRow;
        break;
      case "partition":
        this.partition = value as Partition;
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
