// 定义表示记分牌的类
class ScorePanel {
  //score和level用来记录分数和等级
  public score: number = 0;
  public level: number = 1;
  // 设置一个变量限制等级
  private maxLevel: number;
  // 设置一个变量表示多少分时升级
  private levelUpScore: number;
  //分数和等级所在的元素，在构造函数中进行初始化
  private scoreEle: HTMLElement;
  private levelEle: HTMLElement;
  constructor(maxLevel: number = 10, levelUpScore: number = 10) {
    this.maxLevel = maxLevel;
    this.levelUpScore = levelUpScore;
    this.scoreEle = document.querySelector('.score-panel .score') as HTMLElement;
    this.levelEle = document.querySelector('.score-panel .level') as HTMLElement;
  }

  //设置一个加分的方法
  addScore() {
    this.score += 1;
    this.scoreEle.innerHTML = String(this.score);
    if (this.score % this.levelUpScore === 0) {
      this.levelUp();
    }
  }

  //提升等级的方法
  levelUp() {
    if (this.level >= this.maxLevel) {
      //level到达最大值
      return;
    }
    this.level += 1;
    this.levelEle.innerHTML = String(this.level);
  }
}
export default ScorePanel
