// 引入样式
import './assets/style/index.less'; //ESM
// require('./assets/style/index.less');//CJS

import Food from './modules/Food';
import ScorePanel from './modules/ScorePanel';
import Snake from './modules/Snake';
console.log(`Snake:`, Snake);

// Food类: 测试代码
const food = new Food(300, 400);
food.change();
console.log(`food`, food);
console.log('-----------------------');

// ScorePanel类: 测试代码
const scorePanel = new ScorePanel(100, 1);
(function fn() {
  setTimeout(() => {
    scorePanel.addScore();
    console.log(`scorePanel.score:`, scorePanel.score);
    console.log('-----------------------');
    fn();
  }, 500);
})();
