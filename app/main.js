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
// window._ = _
// console.log(_.join([1,2,3],'***'));
function getComponent() {
  return import(/* webpackChunkName: "lodash" */'lodash').then(({ default: _ }) => {
    var el = document.createElement('div')
    el.innerHTML = _.join([111, 222], '-')
    return el
  })
}
getComponent().then(el => {
  document.body.appendChild(el);
})

