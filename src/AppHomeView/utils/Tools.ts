const baseString =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_-+";

export function querySelector(cssSelector: string) {
  return document.querySelector(cssSelector) as HTMLElement;
}

export function createElement(
  tagName: keyof HTMLElementTagNameMap,
  options?: { id?: string; class?: string; text?: string }
) {
  const tag = document.createElement(tagName);
  if (options) {
    if (options.id) tag.setAttribute("id", options.id);
    if (options.class) tag.setAttribute("class", options.class);
    if (options.text) tag.innerText = options.text;
  }
  return tag;
}

export function getKey() {
  let key = "";
  for (let index = 0; index < 5; index++) {
    const i = Math.floor(Math.random() * baseString.length);
    key += i;
  }
  return `${key}${Date.now().toString()}`;
}
