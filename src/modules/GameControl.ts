// 引入其他的类
import Stage from './Stage';
import Snake from './Snake';
import Food from './Food';
import ScorePanel from './ScorePanel';

// 游戏控制器，控制其他的所有类
class GameControl {
  // 定义三个属性
  //舞台
  private stage: Stage;
  // 蛇
  private snake: Snake;
  // 食物
  private food: Food;
  // 记分牌
  private scorePanel: ScorePanel;
  // 创建一个属性来存储蛇的移动方向（也就是按键的方向）
  private direction: string = '';
  private isLive: boolean = true;
  constructor() {
    let widthVal: string = window.localStorage.getItem('widthVal') || '30';
    let heightVal: string = window.localStorage.getItem('heightVal') || '30';
    // console.log(`GameControl widthVal:`, widthVal, typeof widthVal);
    // console.log(`GameControl heightVal:`, heightVal, typeof heightVal);
    // this.stage = new Stage(100, 100);
    this.stage = new Stage(parseInt(widthVal), parseInt(heightVal));
    this.snake = new Snake();
    this.food = new Food();
    this.scorePanel = new ScorePanel(10, 1);
    // 初始化食物位置
    this.food.change();
    //游戏开启
    this.init();
  }
  // 游戏的初始化方法，调用后游戏即开始
  init() {
    // 绑定键盘按键按下的事件
    // 1.箭头函数
    // document.addEventListener('keydown', (e: KeyboardEvent) => {
    //   this.keydownHandler(e);
    // });
    // 2.bind重新生成一个函数绑定正确的this
    document.addEventListener('keydown', this.keydownHandler.bind(this));
    this.snakeRun();
  }
  keydownHandler(e: KeyboardEvent) {
    // console.log(`keydownHandler this:`, this);
    // console.log(`keydownHandler e.key:`, e.key);
    this.direction = e.key;
  }
  snakeRun() {
    /*
     *   根据方向（this.direction）来使蛇的位置改变
     *       向上 top 减少
     *       向下 top 增加
     *       向左  left 减少
     *       向右  left 增加
     * */
    // 获取蛇现在坐标
    let X = this.snake.X;
    let Y = this.snake.Y;
    // console.log(`snakeRun this.direction:`, this.direction);
    // 根据按键方向来修改X值和Y值
    switch (this.direction) {
      case 'ArrowUp':
      case 'W':
      case 'w':
      case 'Up':
        // 向上移动 top 减少
        Y -= 10;
        break;
      case 'ArrowDown':
      case 'S':
      case 's':
      case 'Down':
        // 向下移动 top 增加
        Y += 10;
        break;
      case 'ArrowLeft':
      case 'A':
      case 'a':
      case 'Left':
        // 向左移动 left 减少
        X -= 10;
        break;
      case 'ArrowRight':
      case 'D':
      case 'd':
      case 'Right':
        // 向右移动 left 增加
        X += 10;
        break;
    }

    // 检查蛇是否吃到了食物
    this.checkSnakeEat(X, Y);

    // 重新设置蛇的坐标
    try {
      this.snake.X = X;
      this.snake.Y = Y;
    } catch (error: any) {
      alert(error.message + ' -- Game Over!');
      this.isLive = false;
    }

    this.isLive && setTimeout(this.snakeRun.bind(this), 300 - (this.scorePanel.level - 1) * 30);
  }

  // 定义一个方法，用来检查蛇是否吃到食物
  checkSnakeEat(X: number, Y: number) {
    if (X % 10 !== 0 || Y % 10 !== 0 || this.food.X % 10 !== 0 || this.food.Y % 10 !== 0) {
      return false;
    }
    if (X === this.food.X && Y === this.food.Y) {
      console.warn('吃到食物了');
      // 食物位置改变
      this.food.change();
      // 分数要增加
      this.scorePanel.addScore();
      // 蛇增加一节
      this.snake.addSnakeBody();
    }
  }
}

export default GameControl;
