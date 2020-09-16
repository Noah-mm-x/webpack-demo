// Tree Shaking: 需要哪个打包哪个 （备注：只支持es module 引入）
export const add = (a, b) => {
  console.log(a + b);
}

export const minus = (a, b) => {
  console.log(a - b);
}
