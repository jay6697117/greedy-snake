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
    console.log(`Snake set X value:`, value);
    console.log(`Snake set X this.stageWidth:`, this.stageWidth);
    //X值的合法范围
    if (value < 0 || value > this.stageWidth - 10) {
      // 进入判断说明蛇真的撞墙了
      throw new Error('蛇撞墙了');
    }
    this.snakeHeadEle.style.left = value + 'px';
  }
  // 设置蛇头XY轴坐标
  public set Y(value: number) {
    // console.log(`set Y value:`, value)
    // 如果新值和旧值相同，则直接返回不再修改
    if (this.Y === value) {
      return;
    }
    console.log(`Snake set Y value:`, value);
    console.log(`Snake set Y this.stageWidth:`, this.stageHeight);
    //X值的合法范围
    if (value < 0 || value > this.stageHeight - 10) {
      throw new Error('蛇撞墙了');
    }
    this.snakeHeadEle.style.top = value + 'px';
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
}

export default Snake;
