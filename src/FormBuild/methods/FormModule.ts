import FormItem from "./FormItem";
import { FormModuleOption, Size, Align, FormItemOption } from "./types.d";
export default class FormModule {
  private static _changeTimeout?: NodeJS.Timeout; // 防抖定时器

  private _name = `table_${Date.now()}`; // 表名称
  get name() {
    return this._name;
  }
  set name(v) {
    this._name = v;
    this._onChange();
  }
  private _formSize: Size = "default"; // 表单大小
  get formSize() {
    return this._formSize;
  }
  set formSize(v) {
    this._formSize = v;
    this._onChange();
  }
  private _labelAlign: Align = "right"; // label对齐方式
  get labelAlign() {
    return this._labelAlign;
  }
  set labelAlign(v) {
    this._labelAlign = v;
    this._onChange();
  }
  private _labelWidth = "100px"; // label宽度
  get labelWidth() {
    return this._labelWidth;
  }
  set labelWidth(v) {
    this._labelWidth = v;
    this._onChange();
  }
  private _disabled = false; // 是否禁用
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

  private _changeCalls: ((data: FormModule) => void)[] = [];

  constructor(option?: FormModuleOption) {
    if (option) {
      if ("name" in option) {
        this.name = option.name || `table_${Date.now()}`;
      }
      if ("formSize" in option) {
        this.formSize = option.formSize || "default";
      }
      if ("labelAlign" in option) {
        this.labelAlign = option.labelAlign || "right";
      }
      if ("labelWidth" in option) {
        this.labelWidth = option.labelWidth || "100px";
      }
      if ("disabled" in option) {
        this.disabled = option.disabled || false;
      }
      if ("children" in option) {
        this.children = (option.children || []).map(
          (option) => new FormItem(option)
        );
      }
    }
  }

  private _onChange() {
    clearTimeout(FormModule._changeTimeout);
    FormModule._changeTimeout = setTimeout(() => {
      this._changeCalls.forEach((fn) => fn(this));
    }, 5);
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
    this._children.push(new FormItem(option));
    this._onChange();
    return this;
  }
}
