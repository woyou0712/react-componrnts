import { Rule } from "rc-field-form/lib/interface";

export type Align = "left" | "center" | "right";
export type Size = "large" | "default" | "small";

export interface FormModuleOption {
  id?: number;
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
  | "number"
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

export type ItemTypeOption = { type: FormItemType; label: string };

export type DataType = "number" | "datetime" | "string";
export type InputValueType = string | number | Date | boolean;

export interface FormItemOption {
  id?: number;
  type?: FormItemType; // 组件类型
  name?: string; // 字段名称
  label?: string; // 组件名称
  dataType?: DataType; // 数据类型
  maxLength?: number; // 最大输入数量
  connectTable?: string; // 关联表
  connectCol?: string; // 关联字段
  queryParams?: boolean; // 是否用于查询入参
  disabled?: boolean; // 是否禁用

  required?: boolean; // 必填样式
  rules?: Rule[]; // 校验规则，设置字段的校验逻辑

  placeholder?: string; // 占位提示符
  defaultValue?: InputValueType | InputValueType[]; // 默认值
  colspan?: number; // 格栅布局宽度

  attribute?: { [key: string]: any }; // 其他属性
}

interface DragType {
  CREATE: string;
  MOVE: string;
}
