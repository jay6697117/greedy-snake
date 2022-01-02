// 定义食物类Food
class Food {
  // 舞台宽度
  private stageWidth: number;
  // 舞台高度
  private stageHeight: number;
  // 定义一个属性表示舞台所对应的元素
  private stageEle: HTMLElement;
  // 定义一个属性表示食物所对应的元素
  private foodEle: HTMLElement;

  constructor(stageWidth: number = 300, stageHeight = 300) {
    //初始化舞台宽度
    this.stageWidth = stageWidth;
    //初始化舞台高度
    this.stageHeight = stageHeight;
    // 获取页面中的stage元素并将其赋值给stageEle(结尾感叹号是非空断言)
    this.stageEle = document.querySelector('.stage')!;
    // 设置stage元素宽度
    this.stageEle.style.width = stageWidth + 'px';
    // 设置stage元素高度
    this.stageEle.style.height = stageHeight + 'px';

    // 获取页面中的food元素并将其赋值给element(结尾感叹号是非空断言)
    this.foodEle = document.querySelector('.stage > .food')!;
  }

  // 定义一个获取食物X轴坐标的方法
  public get X(): number {
    return this.foodEle.offsetLeft;
  }

  // 定义一个获取食物Y轴坐标的方法
  public get Y(): number {
    return this.foodEle.offsetTop;
  }

  // 修改食物的位置
  change() {
    // 生成一个随机的位置
    // 食物的位置最小是0 最大是290
    // 蛇移动一次就是一格，一格的大小就是10，所以就要求食物的坐标必须是整10
    let left: number = Math.floor(Math.random() * Math.floor(this.stageWidth / 10)) * 10;
    let top: number = Math.floor(Math.random() * Math.floor(this.stageHeight / 10)) * 10;

    //随机数
    this.foodEle.style.left = left + 'px';
    this.foodEle.style.top = top + 'px';
  }
}
export default Food