export type Align = "left" | "center" | "right";
export type Size = "large" | "default" | "small";

export interface FormModuleOption {
  name?: string; // 表名称
  formSize?: Size; // 表单大小
  labelAlign?: Align; // label对齐方式
  labelWidth?: string; // label宽度
  disabled?: boolean; // 是否禁用
  children?: FormItemOption[]; // 表单字段列表
}

export type FormItemType =
  | "input"
  | "textarea"
  | "password"
  | "count"
  | "select"
  | "cascader"
  | "radio"
  | "checkbox"
  | "switch"
  | "slider"
  | "time"
  | "times"
  | "date"
  | "dates"
  | "rate"
  | "upload"
  | "block"
  | "button";

export type ItemTypeOption = { value: FormItemType; label: string };

export type DataType = "number" | "datetime" | "string";
export type InputValueType = string | number | Date;

export interface FormItemOption {
  type?: FormItemType; // 组件类型
  name?: string; // 字段名称
  dataType?: DataType; // 数据类型
  maxLength?: number; // 最大输入数量
  connectTable?: string; // 关联表
  connectCol?: string; // 关联字段
  queryParams?: boolean; // 是否用于查询入参

  require?: boolean; // 是否必须

  placeholder?: string; // 占位提示符
  defaultValue?: InputValueType | InputValueType[]; // 默认值

  attribute?: { [key: string]: any }; // 其他属性
}
