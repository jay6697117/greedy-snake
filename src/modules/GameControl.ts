// 引入其他的类
import Food from './Food';
import ScorePanel from './ScorePanel';
import Snake from './Snake';

// 游戏控制器，控制其他的所有类
class GameControl {
  // 定义三个属性
  // 蛇
  snake: Snake;
  food: Food;
  scorePanel: ScorePanel;
  constructor() {
    this.food = new Food(400, 300);
    this.scorePanel = new ScorePanel(100, 10);
    this.snake = new Snake();
  }
}

export default GameControl;


// Food类: 测试代码
// const food = new Food(400, 200);
// food.change();
// console.log(`food:`, food);

// ScorePanel类: 测试代码
// const scorePanel = new ScorePanel(100, 1);
// console.log(`scorePanel:`, scorePanel);
// (function fn() {
//   setTimeout(() => {
//     scorePanel.addScore();
//     console.log(`scorePanel.score:`, scorePanel.score);
//     console.log('-----------------------');
//     fn();
//   }, 500);
// })();

// Snake类: 测试代码
// const snake = new Snake();
// console.log(`snake:`, snake);
