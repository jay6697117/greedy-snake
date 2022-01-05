// 引入样式
import './assets/style/index.less'; //ESM
// require('./assets/style/index.less');//CJS

import GameControl from './modules/GameControl';
const gameControl = new GameControl();
console.log(`gameControl:`, gameControl);
