class Snake {
  // 舞台宽度
  private stageWidth: number;
  // 舞台高度
  private stageHeight: number;
  // 表示蛇元素
  private snakeEle: HTMLElement;
  // 表示蛇头的元素
  private snakeHeadEle: HTMLElement;
  // 蛇的身体（包括蛇头）
  private snakeBody: HTMLCollection;
  constructor() {
    this.stageWidth = (document.querySelector('.stage') as HTMLElement).clientWidth; //舞台宽度
    this.stageHeight = (document.querySelector('.stage') as HTMLElement).clientHeight; //舞台高度
    this.snakeEle = document.querySelector('.stage > .snake') as HTMLElement;
    this.snakeHeadEle = document.querySelectorAll('.stage > .snake > div')[0] as HTMLElement;
    this.snakeBody = this.snakeEle.getElementsByTagName('div') as HTMLCollection;
  }
  // 获取蛇头X轴坐标
  public get X() {
    return this.snakeHeadEle.offsetLeft;
  }
  // 获取蛇头Y轴坐标
  public get Y() {
    return this.snakeHeadEle.offsetTop;
  }
  // 设置蛇头X轴坐标
  public set X(value: number) {
    // console.log(`set X value:`, value)
    // 如果新值和旧值相同，则直接返回不再修改
    if (this.X === value) {
      return;
    }
    // console.log(`Snake set X value:`, value);
    // console.log(`Snake set X this.stageWidth:`, this.stageWidth);
    //X值的合法范围
    if (value < 0 || value > this.stageWidth - 10) {
      // 进入判断说明蛇真的撞墙了
      throw new Error('蛇撞墙了～');
    }
    // 修改X时，是在修改水平坐标，蛇在左右移动，蛇在向左移动时，不能向右掉头，反之亦然
    if (this.snakeBody[1] && (this.snakeBody[1] as HTMLElement).offsetLeft === value) {
      console.warn('发生了水平方向掉头');
      // 说明发生了水平方向掉头
      // 如果发生了掉头，让蛇向反方向继续移动
      if (value > this.X) {
        // 如果新值value大于旧值X，则说明蛇正在向左走，此时发生向右掉头，应该-10使蛇继续向左走
        value = this.X - 10;
      } else {
        // 如果新值value小于旧值X，则说明蛇正在向右走，此时发生向左掉头，应该+10使蛇继续向右走
        value = this.X + 10;
      }
    }
    // 移动身体
    this.moveSnakeBody();
    this.snakeHeadEle.style.left = value + 'px';
    // 检查蛇头有没有撞到自己:在获得最新蛇头坐标之后执行
    this.checkSnakeHeadBody();
  }
  // 设置蛇头XY轴坐标
  public set Y(value: number) {
    // console.log(`set Y value:`, value)
    // 如果新值和旧值相同，则直接返回不再修改
    if (this.Y === value) {
      return;
    }
    // console.log(`Snake set Y value:`, value);
    // console.log(`Snake set Y this.stageWidth:`, this.stageHeight);
    //X值的合法范围
    if (value < 0 || value > this.stageHeight - 10) {
      throw new Error('蛇撞墙了～');
    }
    // 修改Y时，是在修改垂直坐标，蛇在上下移动，蛇在向下移动时，不能向上掉头，反之亦然
    if (this.snakeBody[1] && (this.snakeBody[1] as HTMLElement).offsetTop === value) {
      console.log('发生了垂直方向掉头');
      // 说明发生了水平方向掉头
      // 如果发生了掉头，让蛇向反方向继续移动
      if (value > this.Y) {
        // 如果新值value大于旧值X，则说明蛇正在向左走，此时发生向右掉头，应该-10使蛇继续向左走
        value = this.Y - 10;
      } else {
        // 如果新值value小于旧值X，则说明蛇正在向右走，此时发生向左掉头，应该+10使蛇继续向右走
        value = this.Y + 10;
      }
    }
    // 移动身体
    this.moveSnakeBody();
    this.snakeHeadEle.style.top = value + 'px';
    // 检查蛇头有没有撞到自己:在获得最新蛇头坐标之后执行
    this.checkSnakeHeadBody();
  }
  // 蛇增加身体的方法
  addSnakeBody() {
    this.snakeEle.insertAdjacentHTML('beforeend', '<div></div>');
  }

  //添加一个蛇身体移动的方法
  moveSnakeBody() {
    /*
     *   将后边的身体设置为前边身体的位置
     *       举例子：
     *           第4节 = 第3节的位置
     *           第3节 = 第2节的位置
     *           第2节 = 蛇头的位置
     * */
    // 遍历获取所有的身体
    for (let index = this.snakeBody.length - 1; index > 0; index--) {
      // 获取前边身体的位置
      const X = (this.snakeBody[index - 1] as HTMLElement).offsetLeft;
      const Y = (this.snakeBody[index - 1] as HTMLElement).offsetTop;

      // 将值设置到当前身体上
      (this.snakeBody[index] as HTMLElement).style.left = X + 'px';
      (this.snakeBody[index] as HTMLElement).style.top = Y + 'px';
    }
  }
  // 检查蛇头是否撞到身体的方法
  checkSnakeHeadBody() {
    // 获取所有的身体，检查其是否和蛇头的坐标发生重叠: inde 1 开始排除蛇头
    for (let index = 1; index < this.snakeBody.length; index++) {
      let element = this.snakeBody[index] as HTMLElement;
      if (this.X === element.offsetLeft && this.Y === element.offsetTop) {
        // 进入判断说明蛇头撞到了身体，游戏结束
        throw new Error('撞到自己了～');
      }
    }
  }
}

export default Snake;
