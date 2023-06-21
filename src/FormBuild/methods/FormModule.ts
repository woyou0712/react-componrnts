import FormItem from "./FormItem";
import {
  FormModuleOption,
  LabelAlign,
  FormItemOption,
  ItemTypeOption,
  FormLayout,
} from "./types.d";
import { SizeType } from "antd/lib/config-provider/SizeContext";

export default class FormModule {
  private static _changeTimeout?: NodeJS.Timeout; // 防抖定时器
  /** ========================= 基础属性 Start ========================= */
  private _id = Date.now();
  get id() {
    return this._id;
  }
  set id(v) {
    this._id = v;
    this._onChange();
  }

  private _name = `table_${Date.now()}`; // 表名称
  get name() {
    return this._name;
  }
  set name(v) {
    this._name = v;
    this._onChange();
  }

  private _label = `新建表`; // 表名称
  get label() {
    return this._label;
  }
  set label(v) {
    this._label = v;
    this._onChange();
  }
  private _formSize: SizeType = "middle"; // 表单大小
  get formSize() {
    return this._formSize;
  }
  set formSize(v) {
    this._formSize = v;
    this._onChange();
  }
  private _labelAlign: LabelAlign = "right"; // label对齐方式
  get labelAlign() {
    return this._labelAlign;
  }
  set labelAlign(v) {
    this._labelAlign = v;
    this._onChange();
  }
  private _labelWidth = 3; // label宽度
  get labelCol() {
    return this._labelWidth;
  }
  set labelCol(v) {
    this._labelWidth = v;
    this._onChange();
  }
  private _disabled = false; // 是否禁用表单
  get disabled() {
    return this._disabled;
  }
  set disabled(v) {
    this._disabled = v;
    this._onChange();
  }
  private _layout: FormLayout = "horizontal"; // 表单布局
  get layout() {
    return this._layout;
  }
  set layout(v) {
    this._layout = v;
    this._onChange();
  }
  private _colon = true; // 是否显示 label 后面的冒号
  get colon() {
    return this._colon;
  }
  set colon(v) {
    this._colon = v;
    this._onChange();
  }

  private _children: FormItem[] = [];
  get children() {
    return this._children;
  }
  set children(v) {
    v.forEach((item, i) => (item.index = i));
    this._children = v;
    this._onChange();
  }
  /** ========================= 基础属性 End ========================= */

  /** ========================= 编辑中的属性 Start ========================= */
  private _activeItem?: FormItem; // 当前激活的对象
  get activeItem() {
    return this._activeItem;
  }
  set activeItem(v) {
    this._activeItem = v;
    this._onChange();
  }
  private _moveingItem?: FormItem; // 当前正在移动的对象
  get moveingItem() {
    return this._moveingItem;
  }
  set moveingItem(v) {
    this._moveingItem = v;
    this._onChange();
  }
  private _createingType?: ItemTypeOption; // 当前正在创建的类型
  get createingType() {
    return this._createingType;
  }
  set createingType(v) {
    this._createingType = v;
    this._onChange();
  }
  /** ========================= 编辑中的属性 End ========================= */

  private _changeCalls: ((data: FormModule) => void)[] = [];

  constructor(option?: FormModuleOption) {
    if (option) this.setOption(option);
  }

  private _onChange() {
    clearTimeout(FormModule._changeTimeout);
    FormModule._changeTimeout = setTimeout(() => {
      this._changeCalls.forEach((fn) => fn(this));
    }, 20);
  }

  setOption(option: FormModuleOption) {
    if (option.id !== undefined) {
      this.id = option.id;
    }
    if (option.name !== undefined) {
      this.name = option.name;
    }
    if (option.label !== undefined) {
      this.label = option.label;
    }
    if (option.formSize !== undefined) {
      this.formSize = option.formSize;
    }
    if (option.labelAlign !== undefined) {
      this.labelAlign = option.labelAlign;
    }
    if (option.labelCol !== undefined) {
      this.labelCol = option.labelCol;
    }
    if (option.disabled !== undefined) {
      this.disabled = option.disabled;
    }
    if (option.layout !== undefined) {
      this.layout = option.layout;
    }
    if (option.colon !== undefined) {
      this.colon = option.colon;
    }
    if (option.children !== undefined) {
      (option.children || []).forEach((option) => {
        this.createItem(option);
      });
    }
  }

  removeOnCaheng() {
    this._changeCalls = [];
    return this;
  }

  onChange(callback: (data: FormModule) => void) {
    this._changeCalls.push(callback);
    return this;
  }

  createItem(option: FormItemOption, index?: number) {
    const item = new FormItem(option);
    const children = [...this.children];
    if (index || index === 0) {
      children.splice(index, 0, item);
    } else {
      children.push(item);
    }
    this.children = children;
    this.activeItem = item;
    return this;
  }

  moveItem(move: FormItem, drop: FormItem, position: "up" | "down" = "down") {
    // 无法和自己交换位置
    if (move.id === drop.id) return this;
    const children = [...this.children];
    // 先从列表删除该选项
    children.splice(move.index, 1);
    // 插入到指定位置
    for (let i = 0; i < children.length; i++) {
      const item = children[i];
      if (item.id === drop.id) {
        const index = position === "down" ? i + 1 : i;
        children.splice(index, 0, move);
        break;
      }
    }

    this.children = children;
    return this;
  }
}
