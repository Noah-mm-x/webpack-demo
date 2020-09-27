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

// chunkFilename: 
// require.ensure(
//   dependencies: String[],
//   callback: function(require),
//   errorCallback: function(error),
//   chunkName: String
// )
// require.ensure(['./list'], () => {
//   console.log(111);
// }, 'list')
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
// document.addEventListener('click', () => {
//   // const el = document.createElement('div')
//   // el.innerHTML = '我爱学习，学习使我快乐'
//   // document.body.appendChild(el)
//   import('./click.js').then(({ default: fnc }) => {
//     fnc()
//   })
// })
// Prefetching
// document.addEventListener('click', () => {
//   import(/* webpackPrefetch: true */ './click.js').then(({ default: fnc }) => {
//     fnc()
//   })
// })
// css代码分割
// import "./style.less";
// import "./style1.css";
// console.log('main');
// import img from '@img/1.jpg'
// // import img from './images/1.jpg'
// console.log(img);

// caching
// import _ from "lodash"
// import $ from "jquery"
// const dom = $('<div>')
// dom.html(_.join([111, 'aaa11'], ' '))
// $('body').append(dom)

// shimming
// import _ from "lodash"
// import $ from "jquery"
// import { ui } from './ui'
// ui()
// require('imports-loader?this=>window');
// console.log(this);
// console.log(process.env.NODE_ENV);

