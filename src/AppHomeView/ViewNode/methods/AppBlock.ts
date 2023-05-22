import { getKey } from "../../utils/Tools";
import AppCol from "./AppCol";
import AppHead from "./AppHead";
import AppRow from "./AppRow";
import { Partition, AppBlockOption } from "./nodes.d";

export default class AppBlock {
  private id: string;
  private key: string;
  private parent?: AppCol;
  private background?: string;
  private borderRadius?: string | number;
  private border?: string;
  private height: string | number = 50;
  private partition: Partition;
  private margin: string | number = 10;
  private padding: string | number = 15;
  private children: (AppRow | AppHead)[] = [];

  constructor(options: AppBlockOption) {
    const {
      id,
      key,
      parent,
      background,
      border,
      borderRadius,
      partition,
      height,
      margin,
      padding,
      children,
    } = options;
    this.id = id || getKey();
    this.key = key || getKey();
    this.parent = parent;
    this.background = background;
    this.border = border;
    this.borderRadius = borderRadius;
    this.partition = partition;
    this.height = height;
    this.margin = margin;
    this.padding = padding;
    this.children = children;
    this.render();
  }

  get(key: keyof AppBlockOption) {
    return this[key];
  }

  set<K extends keyof AppBlockOption>(key: K, value: AppBlockOption[K]) {
    switch (key) {
      case "id":
        this.id = value as string;
        break;
      case "key":
        this.key = value as string;
        break;
      case "parent":
        this.parent = value as AppCol;
        break;
      case "background":
        this.background = value as string;
        break;
      case "border":
        this.border = value as string;
        break;
      case "borderRadius":
        this.borderRadius = value as string | number;
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
        this.children = value as (AppRow | AppHead)[];
        break;
    }
  }

  private render() {}
}
