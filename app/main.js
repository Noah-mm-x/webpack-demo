// 配合@babel/preset-env使用
// import "@babel/polyfill";
// import './a.css'
// import "./common.css";
// import "./style.less";
// import "./images/1.jpg";

// import { add } from "./index.js"
// add(12,3)

// console.log(11);
// let arr = {a:1,b:2}
// console.log(...arr);
// let arr = [new Promise(() => {}), new Promise(() => {})];
// arr.map((item) => {
//   console.log(item);
// });

// import _ from 'lodash'

// 懒加载
// async function getComponent() {
//   const { default: _ } = await import(/* webpackChunkName: "lodash" */ 'lodash')
//   const el = document.createElement('div')
//   el.innerHTML = _.join([111, 222], '-')
//   return el
// }

// document.addEventListener('click', () => {
//   getComponent().then(el => {
//     document.body.appendChild(el);
//   })
// })
// Preloading
document.addEventListener('click', () => {
  // const el = document.createElement('div')
  // el.innerHTML = '我爱学习，学习使我快乐'
  // document.body.appendChild(el)
  import('./click.js').then(({ default: fnc }) => {
    fnc()
  })
})

