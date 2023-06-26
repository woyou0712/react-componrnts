import { Rule } from "rc-field-form/lib/interface";
import { Moment } from "moment";
import { SizeType } from "antd/lib/config-provider/SizeContext";

export type LabelAlign = "left" | "right";
export type FormLayout = "horizontal" | "vertical" | "inline";

export type SelfRule = Rule & {
  pattern?: string;
  message?: string;
};

export interface FormModuleOption {
  id?: number;
  name?: string; // 表名
  label?: string; // 表备注
  formSize?: SizeType; // 表单尺寸
  labelAlign?: LabelAlign; // label对齐方式
  labelCol?: number; // label宽度
  disabled?: boolean; // 是否禁用
  layout?: FormLayout; // 表单布局
  colon?: boolean; // 是否显示 label 后面的冒号
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

export type DataType = "number" | "datetime" | "string" | "float";
export type InputValueType = string | number | Moment | boolean;

export interface FormItemOption {
  id?: number;
  index?: number;
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
  rules?: SelfRule[]; // 校验规则，设置字段的校验逻辑

  placeholder?: string | [string, string]; // 占位提示符
  defaultValue?: InputValueType | InputValueType[]; // 默认值
  colspan?: number; // 格栅布局宽度

  attribute?: { [key: string]: any }; // 其他属性

  parentId?: number;
  children?: FormItemOption[];
}

interface DragType {
  CREATE: "create";
  MOVE: "move";
}
