import FormItem from "./FormItem";
import {
  FormModuleOption,
  LabelAlign,
  FormItemOption,
  ItemTypeOption,
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

  private _children: FormItem[] = [];
  get children() {
    return this._children;
  }
  set children(v) {
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
    }, 5);
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

  createItem(option?: FormItemOption) {
    const item = new FormItem(option);
    this._children.push(item);
    this.activeItem = item;
    return this;
  }
}
