// import './a.css'
import "./common.css";
import "./style.less";
import "./images/1.jpg";

// console.log(11);
// let arr = {a:1,b:2}
// console.log(...arr);
let arr = [new Promise(() => {}), new Promise(() => {})];

arr.map((item) => {
  console.log(item);
});
