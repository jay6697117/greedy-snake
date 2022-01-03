class Snake {
  // 表示蛇元素
  private snakeEle: HTMLElement;
  // 表示蛇头的元素
  private snakeHeadEle: HTMLElement;
  // 蛇的身体（包括蛇头）
  private snakeBody: HTMLCollection;
  constructor() {
    this.snakeEle = document.querySelector('.stage > .snake') as HTMLElement;
    this.snakeHeadEle = document.querySelectorAll('.stage > .snake > div')[0] as HTMLElement;
    this.snakeBody = this.snakeEle.getElementsByTagName('div') as HTMLCollection;
  }
  // 获取蛇头X轴坐标
  get X() {
    return this.snakeHeadEle.offsetLeft;
  }
  // 获取蛇头Y轴坐标
  get Y() {
    return this.snakeHeadEle.offsetTop;
  }
  // 设置蛇头X轴坐标
  set X(value: number) {
    this.snakeHeadEle.style.left = value + 'px';
  }
  // 设置蛇头XY轴坐标
  set Y(value: number) {
    this.snakeHeadEle.style.top = value + 'px';
  }
  // 蛇增加身体的方法
  addSnakeBody() {
    this.snakeEle.insertAdjacentHTML('beforeend', '<div></div>');
  }
}

export default Snake;
