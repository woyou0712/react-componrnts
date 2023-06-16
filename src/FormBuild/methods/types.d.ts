export type Align = "left" | "center" | "right";
export type Size = "large" | "default" | "small";

export interface FormModuleOption {
  name: string; // 表名称
  formSize: Size; // 表单大小
  labelAlign: Align; // label对齐方式
  labelWidth: string; // label宽度
  disabled: boolean; // 是否禁用
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

export type DataType = "number" | "datetime" | "string";

export interface FormItemOption {
  type: FormItemType; // 组件类型
  name: string; // 字段名称
  dataType: DataType; // 数据类型
  maxLength: number; // 最大输入数量
  primaryKey: boolean; // 是否是主键
  autoIncrement: boolean; // 是否自增
  connectTable: string; // 关联表
  connectCol: string; // 关联字段

  defaultValue: string | number | Date; // 默认值
  require: boolean; // 是否必须
  placeholder: string; // 占位提示符
}
