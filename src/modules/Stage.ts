// 定义食物类Food
class Stage {
  // 舞台宽度
  private stageWidth: number;
  // 舞台高度
  private stageHeight: number;
  // 定义一个属性表示舞台所对应的元素
  private stageEle: HTMLElement;

  constructor(stageWidth: number, stageHeight: number) {
    if (stageWidth < 30) {
      console.warn('舞台宽度不能低于30像素');
      stageWidth = 30;
    }
    if (stageHeight < 30) {
      console.warn('舞台高度不能低于30像素');
      stageHeight = 30;
    }
    //初始化舞台宽度
    this.stageWidth = stageWidth;
    //初始化舞台高度
    this.stageHeight = stageHeight;
    // 获取页面中的stage元素并将其赋值给stageEle(结尾感叹号是非空断言)
    this.stageEle = document.querySelector('.stage') as HTMLElement;
    // 设置stage元素宽度
    this.stageEle.style.width = stageWidth + 'px';
    // 设置stage元素高度
    this.stageEle.style.height = stageHeight + 'px';
  }
}
export default Stage;
