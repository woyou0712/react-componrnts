import { FormModuleOption, Size, Align } from "./types.d";
export default class FormModule {
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

  private _changeCalls: ((data: FormModule) => void)[] = [];

  constructor(option?: FormModuleOption) {
    if (option) {
      if ("name" in option) {
        this.name = option.name;
      }
      if ("formSize" in option) {
        this.formSize = option.formSize;
      }
      if ("labelAlign" in option) {
        this.labelAlign = option.labelAlign;
      }
      if ("labelWidth" in option) {
        this.labelWidth = option.labelWidth;
      }
      if ("disabled" in option) {
        this.disabled = option.disabled;
      }
    }
  }

  private _onChange() {
    this._changeCalls.forEach((fn) => fn(this));
  }

  removeOnCaheng() {
    this._changeCalls = [];
  }

  onChange(callback: (data: FormModule) => void) {
    this._changeCalls.push(callback);
  }
}
