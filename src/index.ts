// 引入样式
import './assets/style/index.less'; //ESM
// require('./assets/style/index.less');//CJS

import Food from './moduls/Food';
const food = new Food();
console.log(`food:\n`, food);

// import GameControl from './moduls/GameControl';
// const gameControl = new GameControl();
// console.log(`gameControl:`, gameControl);
// setInterval(()=>{
//     console.log(gameControl.direction);
// }, 1000);
