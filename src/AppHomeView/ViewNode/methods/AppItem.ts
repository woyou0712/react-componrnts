import { getKey } from "../../utils/Tools";
import AppCol from "./AppCol";
import AppText from "./AppText";
import { AppItemOption } from "./nodes.d";

export default class AppItem {
  private id?: string;
  private key: string;
  private parent: AppCol;
  private background?: string;
  private children: AppText[] = [];

  constructor(option: AppItemOption) {
    const { id, key, parent, background, children } = option;
    this.id = id;
    this.key = key || getKey();
    this.parent = parent;
    this.background = background;
    this.children = children;
  }

  get(key: keyof AppItemOption) {
    return this[key];
  }
  set<K extends keyof AppItemOption>(key: K, value: AppItemOption[K]) {
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
      case "children":
        this.children = value as AppText[];
        break;
    }
  }
}
