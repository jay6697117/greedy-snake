// 定义食物类Food
class Stage {
  // 舞台宽度
  private stageWidth: number;
  // 舞台高度
  private stageHeight: number;
  // 定义一个属性表示舞台所对应的元素
  private stageEle: HTMLElement;

  constructor(stageWidth: number = 300, stageHeight = 400) {
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
  }
}
export default Stage;