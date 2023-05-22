import { getKey } from "../../utils/Tools";
import AppItem from "./AppItem";
import { AppTextOption } from "./nodes.d";

export default class AppText {
  private id: string;
  private parent: AppItem;
  private textAlign: string;
  private fontSize: string | number;
  private fontWeight: string | number;
  private color: string;
  private background?: string;

  constructor(options: AppTextOption) {
    const { id, parent, textAlign, fontSize, fontWeight, color, background } =
      options;
    this.id = id || getKey();
    this.parent = parent;
    this.textAlign = textAlign;
    this.fontSize = fontSize;
    this.fontWeight = fontWeight;
    this.color = color;
    this.background = background;
    this.render();
  }

  get(key: keyof AppTextOption) {
    return this[key];
  }

  set<K extends keyof AppTextOption>(key: K, value: AppTextOption[K]) {
    switch (key) {
      case "id":
        this.id = value as string;
        break;
      case "parent":
        this.parent = value as AppItem;
        break;
      case "textAlign":
        this.textAlign = value as string;
        break;
      case "fontSize":
        this.fontSize = value as string | number;
        break;
      case "fontWeight":
        this.fontWeight = value as string | number;
        break;
      case "color":
        this.color = value as string;
        break;
      case "background":
        this.background = value as string;
        break;
    }
  }

  private render() {}
}
