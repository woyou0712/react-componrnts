import {
  FormItemOption,
  FormItemType,
  DataType,
  InputValueType,
} from "./types.d";

export default class FormItem {
  private static _changeTimeout?: NodeJS.Timeout; // 监听防抖定时器

  private _id = Date.now();
  get id() {
    return this._id;
  }
  set id(v) {
    this._id = v;
    this._onChange();
  }

  private _type: FormItemType = "input"; // 组件类型
  get type() {
    return this._type;
  }
  set type(v) {
    this._type = v;
    this._onChange();
  }

  private _name = `name_${Date.now()}`; // 字段名称
  get name() {
    return this._name;
  }
  set name(v) {
    this._name = v;
    this._onChange();
  }
  private _dataType: DataType = "string"; // 数据类型
  get dataType() {
    return this._dataType;
  }
  set dataType(v) {
    this._dataType = v;
    this._onChange();
  }

  private _maxLength = 255; // 最大输入数量
  get maxLength() {
    return this._maxLength;
  }
  set maxLength(v) {
    this._maxLength = v;
    this._onChange();
  }
  private _connectTable?: string; // 关联表
  get connectTable() {
    return this._connectTable;
  }
  set connectTable(v) {
    this._connectTable = v;
    this._onChange();
  }
  private _connectCol?: string; // 关联字段
  get connectCol() {
    return this._connectCol;
  }
  set connectCol(v) {
    this._connectCol = v;
    this._onChange();
  }
  private _queryParams = false; // 是否用于查询入参
  get queryParams() {
    return this._queryParams;
  }
  set queryParams(v) {
    this._queryParams = v;
    this._onChange();
  }

  private _require = false; // 是否必须
  get require() {
    return this._require;
  }
  set require(v) {
    this._require = v;
    this._onChange();
  }
  private _placeholder?: string; // 占位提示符
  get placeholder() {
    return this._placeholder;
  }
  set placeholder(v) {
    this._placeholder = v;
    this._onChange();
  }
  private _defaultValue?: InputValueType | InputValueType[]; // 默认值
  get defaultValue() {
    return this._defaultValue;
  }
  set defaultValue(v) {
    this._defaultValue = v;
    this._onChange();
  }
  private _rowspan = 12; // 格栅布局宽度
  get colspan() {
    return this._rowspan;
  }
  set colspan(v) {
    this._rowspan = v;
    this._onChange();
  }
  private _attribute: { [key: string]: any } = {}; // 其他属性
  get attribute() {
    return this._attribute;
  }
  set attribute(v) {
    this._attribute = v;
    this._onChange();
  }

  private _changeCalls: ((data: FormItem) => void)[] = [];

  constructor(option?: FormItemOption) {
    if (option) this.setOption(option);
  }

  setOption(option: FormItemOption) {
    if ("id" in option) {
      this.id = option.id || Date.now();
    }
    if ("type" in option) {
      this.type = option.type || "input";
    }
    if ("name" in option) {
      this.name = option.name || `name_${Date.now()}`;
    }
    if ("dataType" in option) {
      this.dataType = option.dataType || "string";
    }
    if ("maxLength" in option) {
      this.maxLength = option.maxLength || 255;
    }
    if ("connectTable" in option) {
      this.connectTable = option.connectTable;
    }
    if ("connectCol" in option) {
      this.connectCol = option.connectCol;
    }
    if ("queryParams" in option) {
      this.queryParams = option.queryParams || false;
    }
    if ("require" in option) {
      this.require = option.require || false;
    }
    if ("placeholder" in option) {
      this.placeholder = option.placeholder;
    }
    if ("defaultValue" in option) {
      this.defaultValue = option.defaultValue;
    }
    if ("colspan" in option) {
      this.colspan = option.colspan || 24;
    }
    if ("attribute" in option) {
      this.attribute = option.attribute || {};
    }
  }

  private _onChange() {
    clearTimeout(FormItem._changeTimeout);
    FormItem._changeTimeout = setTimeout(() => {
      this._changeCalls.forEach((fn) => fn(this));
    }, 5);
  }

  // 添加属性
  pushAttribute(newData: { [key: string]: any }) {
    this.attribute = Object.assign({}, this._attribute, newData);
    return this;
  }
  // 删除属性
  removeAttribute(key: string) {
    delete this.attribute[key];
    this._onChange();
    return this;
  }

  removeOnCaheng() {
    this._changeCalls = [];
    return this;
  }

  onChange(callback: (data: FormItem) => void) {
    this._changeCalls.push(callback);
    return this;
  }
}
