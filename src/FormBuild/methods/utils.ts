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

/**
 * 去除前后空格
 */
export function removeEmpty(str: string) {
  return str.replace(/^\s+|\s+$/g, "");
}

/**
 * 过滤emjio表情包
 */
export function removeEmjio(str: string) {
  const iconRule =
    /[^\u0020-\u007E\u00A0-\u00BE\u2E80-\uA4CF\uF900-\uFAFF\uFE30-\uFE4F\uFF00-\uFFEF\u0080-\u009F\u2000-\u201f\u2026\u2022\u20ac\r\n]/g;
  return str.replace(iconRule, "");
}
