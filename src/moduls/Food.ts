// 定义食物类Food
class Food {
  // 定义一个属性表示食物所对应的元素
  element: HTMLElement;

  constructor() {
    // 获取页面中的food元素并将其赋值给element(结尾感叹号是非空断言)
    this.element = document.querySelector('.food')!;
    console.log(`this.element.offsetLeft:`, this.element.offsetLeft);
    console.log(`this.element.offsetTop:`, this.element.offsetTop);
  }

  // 定义一个获取食物X轴坐标的方法
  get X() {
    return this.element.offsetLeft;
  }

  // 定义一个获取食物Y轴坐标的方法
  get Y() {
    return this.element.offsetTop;
  }

  // 修改食物的位置
  change() {
    // 生成一个随机的位置
    // 食物的位置最小是0 最大是290
    // 蛇移动一次就是一格，一格的大小就是10，所以就要求食物的坐标必须是整10
    let left: number = Math.floor(Math.random() * 30) * 10;
    let top: number = Math.floor(Math.random() * 30) * 10;

    //写死
    // this.element.style.left = '240px';
    // this.element.style.top = '240px';
    //随机数
    this.element.style.left = left + 'px';
    this.element.style.top = top + 'px';
  }
}

// 测试代码
(function fn() {
  setTimeout(() => {
    const food = new Food();
    console.log('1:', food.X, food.Y);
    food.change();
    console.log('2:', food.X, food.Y);
    fn();
  }, 3000);
})();

export default Food;
