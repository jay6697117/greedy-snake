(function () {
  console.log('属性的封装');
  // TS可以在属性前添加属性的修饰符
  /*
   *   public 修饰的属性可以在任意位置访问（修改） 默认值
   *   private 私有属性，私有属性只能在类内部进行访问（修改）
   *       - 通过在类中添加方法使得私有属性可以被外部访问
   *   protected 受保护的属性，只能在当前类和当前类的子类中访问（修改）
   *
   * */
  class Person {
    private _name: string;
    private _age: number;

    constructor(name: string, age: number) {
      this._name = name;
      this._age = age;
    }

    /*
     *   getter方法用来读取属性
     *   setter方法用来设置属性
     *       - 它们被称为属性的存取器
     * */
    // getName() {
    //   return this.name;
    // }
    // setName(newVal: string) {
    //   this.name = newVal;
    // }
    // getAge() {
    //   return this.age;
    // }
    // setAge(newVal: number) {
    //   if (newVal < 0) {
    //     alert('年龄参数格式不对');
    //     return;
    //   }
    //   this.age = newVal;
    // }

    // TS中设置getter方法的方式
    get name() {
      return this._name;
    }

    set name(newVal) {
      this._name = newVal;
    }

    get age() {
      return this._age;
    }

    set age(newVal) {
      if (newVal < 0) {
        console.error('set age:', '年龄参数格式不对');
        return;
      }
      this._age = newVal;
    }
  }

  /*
   * 现在属性是在对象中设置的，属性可以任意的被修改,
   *   属性可以任意被修改将会导致对象中的数据变得非常不安全
   * */
  const p = new Person('zjh', 33);
  console.log(`p 1:`, p);
  p.name = 'ytt'; // 报错
  p.age = -32; // 报错
  // console.log(`p.getName() 1:`, p.getName());
  // console.log(`p.getAge() 1:`, p.getAge());
  // p.setName('ytt');
  // p.setAge(-32);
  console.log(`p 2:`, p);
  // console.log(`p.getName() 2:`, p.getName());
  // console.log(`p.getAge() 2:`, p.getAge());

  console.log('---------------------------------------------');
  // class A {
  //   // public _age: number;
  //   // private _age: number;
  //   protected _age: number;
  //   constructor(age: number) {
  //     this._age = age;
  //   }
  //   printAge1() {
  //     console.log(`printAge this._age:`, this._age);
  //   }
  // }

  class A {
    protected _age: number;
    constructor(_age: number) {
      this._age = _age;
    }
    // constructor(protected _age: number) {}
    printAge1() {
      console.log(`printAge1:`, this._age);
    }
  }

  const a = new A(100);
  console.log(`a`, a);
  // console.log(`a._age:`, a._age);
  a.printAge1();

  class B extends A {
    printAge2() {
      console.log(`printAge2:`, this._age);
    }
  }

  const b = new B(100);
  console.log(`b`, b);
  // console.log(`b._age:`, b._age);
  b.printAge2();

  console.log('---------------------------------------------');

  class C {
    //1.传统
    // public name: string;
    // public age: number;
    // constructor( name: string,  age: number) {
    //   this.name = name;
    //   this.age = age;
    // }
     //2.新语法
    constructor(public name: string, public age: number) {}
  }

  const c = new C('张金辉', 11);
  console.log(`c:`, c);
})();
