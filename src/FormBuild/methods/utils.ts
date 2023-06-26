import { OriginType } from "./types.d";

/**
 * 获取选项配置项
 */
export function getFieldNames(params?: OriginType) {
  const option: OriginType = {
    value: "value",
    label: "label",
    children: "children",
  };
  if (params) {
    if (params.value) option.value = params.value;
    if (params.label) option.label = params.label;
    if (params.children) option.children = params.children;
  }

  return option;
}
