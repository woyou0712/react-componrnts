import { Rule } from "rc-field-form/lib/interface";
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
  private _index: number = 0;
  get index() {
    return this._index;
  }
  set index(v) {
    this._index = v;
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

  private _label = `name_${Date.now()}`; // 字段名称
  get label() {
    return this._label;
  }
  set label(v) {
    this._label = v;
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
  private _disabled = false; // 是否禁用
  get disabled() {
    return this._disabled;
  }
  set disabled(v) {
    this._disabled = v;
    this._onChange();
  }

  private _required = false; // 是否必须
  get required() {
    return this._required;
  }
  set required(v) {
    this._required = v;
    if (v) {
      if (this._rules && this._rules.length) {
        this._rules[0] = Object.assign(this._rules[0], { required: v });
      } else {
        this._rules = [{ required: v }];
      }
    } else {
      if (this._rules && this._rules.length) {
        const rules = this._rules;
        rules.forEach((rule, i) => {
          rules[i] = Object.assign(rule, { required: v });
        });
      }
    }
    this._onChange();
  }
  private _rules?: Rule[]; // 校验规则，设置字段的校验逻辑
  get rules() {
    return this._rules;
  }
  set rules(v) {
    this._rules = v;
    if (!v || !v.length) {
      this._required = false;
    }
    this._onChange();
  }

  private _placeholder?: string | [string, string]; // 占位提示符
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
  private _rowspan = 24; // 格栅布局宽度
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
    if (!this.placeholder) this._placeholder = this._label;
  }

  setOption(option: FormItemOption) {
    if (option.id !== undefined) {
      this.id = option.id;
    }
    if (option.index !== undefined) {
      this.index = option.index;
    }
    if (option.type !== undefined) {
      this.type = option.type;
    }
    if (option.name !== undefined) {
      this.name = option.name;
    }
    if (option.label !== undefined) {
      this.label = option.label;
    }
    if (option.dataType !== undefined) {
      this.dataType = option.dataType;
    }
    if (option.maxLength !== undefined) {
      this.maxLength = option.maxLength;
    }
    if (option.connectTable !== undefined) {
      this.connectTable = option.connectTable;
    }
    if (option.connectCol !== undefined) {
      this.connectCol = option.connectCol;
    }
    if (option.queryParams !== undefined) {
      this.queryParams = option.queryParams;
    }
    if (option.disabled !== undefined) {
      this.disabled = option.disabled;
    }
    if (option.required !== undefined) {
      this.required = option.required;
    }
    if (option.rules !== undefined) {
      this.rules = option.rules;
    }
    if (option.placeholder !== undefined) {
      this.placeholder = option.placeholder;
    }
    if (option.defaultValue !== undefined) {
      this.defaultValue = option.defaultValue;
    }
    if (option.colspan !== undefined) {
      this.colspan = option.colspan;
    }
    if (option.attribute !== undefined) {
      this.attribute = option.attribute;
    }
  }

  private _onChange() {
    clearTimeout(FormItem._changeTimeout);
    FormItem._changeTimeout = setTimeout(() => {
      this._changeCalls.forEach((fn) => fn(this));
    }, 20);
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
