import { Rule } from "rc-field-form/lib/interface";
import { Moment } from "moment";
import { SizeType } from "antd/lib/config-provider/SizeContext";

export type LabelAlign = "left" | "right";
export type FormLayout = "horizontal" | "vertical";
export type TimeFormatType = "HH" | "HH:mm" | "HH:mm:ss";
export type DataOriginType = "self" | "import" | "join";

export type SelfRule = Rule & {
  required?: boolean;
  pattern?: string;
  message?: string;
};

export type OptionType = {
  value?: string | number;
  label?: string;
  children?: OptionType[];
};

export type OptionsOrigin = {
  url?: string; // 数据源地址
  value?: string; // 值取字段
  label?: string; // 名称取字段
  children?: string; // 子级取字段
};

export type ValueOrigin = {
  url?: string; // 数据源地址
  keys?: string; // 取字段key(例如：data.userInfo.name)
  joinItem?: string; // 关联其他组件
  paramsKey?: string; // 参数key
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
export interface ItemAttribute {
  placeholder?: string | string[]; // 占位提示符
  defaultValue?: InputValueType | InputValueType[]; // 默认值
  defaultValueOriginType?: DataOriginType; // 默认值数据源类型
  defaultValueOrigin?: ValueOrigin; // 默认值数据源配置项

  multiple?: boolean;
  options?: OptionType[];
  optionsOriginType?: DataOriginType; // 选项数据源类型
  optionsOrigin?: OptionsOrigin; // 选项数据源配置项
  connectTable?: string; // 关联表
  connectCol?: string; // 关联字段
  min?: number;
  max?: number;
  addonBefore?: string;
  addonAfter?: string;

  datetime?: TimeFormatType; // 日期、时间选择器是否显示时分秒

  fileUploadTitle?: string;
  fileUploadMaxCount?: number;
  fileUploadMaxSize?: number;
  [key: string]: any;
}

export interface FormItemOption {
  id?: number;
  index?: number;
  type?: FormItemType; // 组件类型
  name?: string; // 字段编码
  label?: string; // 字段名称
  dataType?: DataType; // 数据类型
  maxLength?: number; // 最大输入数量
  queryParams?: boolean; // 是否用于查询入参
  showTable?: boolean; // 是否在表格展示
  disabled?: boolean; // 是否禁用

  required?: boolean; // 必填样式
  rules?: SelfRule[]; // 校验规则，设置字段的校验逻辑
  colspan?: number; // 格栅布局宽度

  attribute?: ItemAttribute; // 其他属性

  parentId?: number;
  children?: FormItemOption[];
}

interface DragType {
  CREATE: "create";
  MOVE: "move";
}
