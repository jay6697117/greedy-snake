// 引入样式
import './assets/style/index.less';
import GameControl from './modules/GameControl';
const gameControl = new GameControl();
//游戏开启
gameControl.init();
console.log(`首页gameControl:`, gameControl)
