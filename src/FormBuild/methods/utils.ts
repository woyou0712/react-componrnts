import moment, { Moment } from "moment";
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

/**
 * 时间转字符串
 */
export function time2str(time: Moment) {
  return moment(time).format("YYYY-MM-DD HH:mm:ss");
}
/**
 * 时间段转字符串
 */
export function times2str(times: [Moment, Moment]) {
  return [time2str(times[0]), time2str(times[1])].join("~");
}

/**
 * 字符串转时间段
 */
export function str2times(str: string): [Moment, Moment] | undefined {
  if (!str || str.indexOf("~") === -1) return undefined;
  const strs = str.split("~");
  return [moment(strs[0]), moment(strs[1])];
}

/**
 * 日期转字符串
 */
export function date2str(date: Moment) {
  return moment(date).format("YYYY-MM-DD");
}
/**
 * 日期段转字符串
 */
export function dates2str(dates: [Moment, Moment]) {
  return [date2str(dates[0]), date2str(dates[1])].join("~");
}

/**
 * 字符串转日期段
 */
export function str2dates(str: string): [Moment, Moment] | undefined {
  if (str.indexOf("~") === -1) return undefined;
  const strs = str.split("~");
  return [moment(strs[0]), moment(strs[1])];
}
