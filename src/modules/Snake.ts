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
    this.stageWidth = document.querySelector('.stage')!.clientWidth; //舞台宽度
    this.stageHeight = document.querySelector('.stage')!.clientHeight; //舞台高度
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

    // //X值的合法范围
    // if(value <0 || value > ){

    // }
    this.snakeHeadEle.style.left = value + 'px';
  }
  // 设置蛇头XY轴坐标
  public set Y(value: number) {
    // console.log(`set Y value:`, value)
    // 如果新值和旧值相同，则直接返回不再修改
    if (this.Y === value) {
      return;
    }
    this.snakeHeadEle.style.top = value + 'px';
  }
  // 蛇增加身体的方法
  addSnakeBody() {
    this.snakeEle.insertAdjacentHTML('beforeend', '<div></div>');
  }
}

export default Snake;
