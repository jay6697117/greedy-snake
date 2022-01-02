!(function () {
  'use strict';
  function e(e, t) {
    for (var i = 0; i < t.length; i++) {
      var n = t[i];
      (n.enumerable = n.enumerable || !1),
        (n.configurable = !0),
        'value' in n && (n.writable = !0),
        Object.defineProperty(e, n.key, n);
    }
  }
  var t = (function () {
    function t() {
      !(function (e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
      })(this, t),
        (this.element = document.querySelector('.snake')),
        (this.head = document.querySelector('.snake > div')),
        (this.bodies = this.element.getElementsByTagName('div'));
    }
    var i, n;
    return (
      (i = t),
      (n = [
        {
          key: 'X',
          get: function () {
            return this.head.offsetLeft;
          },
          set: function (e) {
            if (this.X !== e) {
              if (e < 0 || e > 290) throw new Error('蛇撞墙了！');
              this.bodies[1] && this.bodies[1].offsetLeft === e && (e = e > this.X ? this.X - 10 : this.X + 10),
                this.moveBody(),
                (this.head.style.left = e + 'px'),
                this.checkHeadBody();
            }
          }
        },
        {
          key: 'Y',
          get: function () {
            return this.head.offsetTop;
          },
          set: function (e) {
            if (this.Y !== e) {
              if (e < 0 || e > 290) throw new Error('蛇撞墙了！');
              this.bodies[1] && this.bodies[1].offsetTop === e && (e = e > this.Y ? this.Y - 10 : this.Y + 10),
                this.moveBody(),
                (this.head.style.top = e + 'px'),
                this.checkHeadBody();
            }
          }
        },
        {
          key: 'addBody',
          value: function () {
            this.element.insertAdjacentHTML('beforeend', '<div></div>');
          }
        },
        {
          key: 'moveBody',
          value: function () {
            for (var e = this.bodies.length - 1; e > 0; e--) {
              var t = this.bodies[e - 1].offsetLeft,
                i = this.bodies[e - 1].offsetTop;
              (this.bodies[e].style.left = t + 'px'), (this.bodies[e].style.top = i + 'px');
            }
          }
        },
        {
          key: 'checkHeadBody',
          value: function () {
            for (var e = 1; e < this.bodies.length; e++) {
              var t = this.bodies[e];
              if (this.X === t.offsetLeft && this.Y === t.offsetTop) throw new Error('撞到自己了！');
            }
          }
        }
      ]) && e(i.prototype, n),
      Object.defineProperty(i, 'prototype', { writable: !1 }),
      t
    );
  })();
  function i(e, t) {
    for (var i = 0; i < t.length; i++) {
      var n = t[i];
      (n.enumerable = n.enumerable || !1),
        (n.configurable = !0),
        'value' in n && (n.writable = !0),
        Object.defineProperty(e, n.key, n);
    }
  }
  var n = (function () {
    function e() {
      !(function (e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
      })(this, e),
        (this.element = document.querySelector('.food'));
    }
    var t, n;
    return (
      (t = e),
      (n = [
        {
          key: 'X',
          get: function () {
            return this.element.offsetLeft;
          }
        },
        {
          key: 'Y',
          get: function () {
            return this.element.offsetTop;
          }
        },
        {
          key: 'change',
          value: function () {
            Math.round(29 * Math.random());
            var e = 10 * Math.round(29 * Math.random());
            (this.element.style.left = e + 'px'), (this.element.style.top = e + 'px');
          }
        }
      ]) && i(t.prototype, n),
      Object.defineProperty(t, 'prototype', { writable: !1 }),
      e
    );
  })();
  function o(e, t) {
    if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
  }
  function s(e, t) {
    for (var i = 0; i < t.length; i++) {
      var n = t[i];
      (n.enumerable = n.enumerable || !1),
        (n.configurable = !0),
        'value' in n && (n.writable = !0),
        Object.defineProperty(e, n.key, n);
    }
  }
  var r = (function () {
      function e() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10,
          i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
        o(this, e),
          (this.score = 0),
          (this.level = 1),
          (this.scoreEle = document.querySelector('.score')),
          (this.levelEle = document.querySelector('.level')),
          (this.maxLevel = t),
          (this.upScore = i);
      }
      var t, i;
      return (
        (t = e),
        (i = [
          {
            key: 'addScore',
            value: function () {
              (this.scoreEle.innerHTML = ++this.score + ''), this.score % this.upScore == 0 && this.levelUp();
            }
          },
          {
            key: 'levelUp',
            value: function () {
              this.level < this.maxLevel && (this.levelEle.innerHTML = ++this.level + '');
            }
          }
        ]) && s(t.prototype, i),
        Object.defineProperty(t, 'prototype', { writable: !1 }),
        e
      );
    })(),
    a = r;
  function c(e, t) {
    for (var i = 0; i < t.length; i++) {
      var n = t[i];
      (n.enumerable = n.enumerable || !1),
        (n.configurable = !0),
        'value' in n && (n.writable = !0),
        Object.defineProperty(e, n.key, n);
    }
  }
  var h = new ((function () {
    function e() {
      !(function (e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
      })(this, e),
        (this.direction = ''),
        (this.isLive = !0),
        (this.snake = new t()),
        (this.food = new n()),
        (this.scorePanel = new a(10, 2)),
        this.init();
    }
    var i, o;
    return (
      (i = e),
      (o = [
        {
          key: 'init',
          value: function () {
            document.addEventListener('keydown', this.keydownHandler.bind(this)), this.run();
          }
        },
        {
          key: 'keydownHandler',
          value: function (e) {
            (this.direction = e.key), console.log('this.direction', this.direction);
          }
        },
        {
          key: 'run',
          value: function () {
            var e = this.snake.X,
              t = this.snake.Y;
            switch (this.direction) {
              case 'W':
              case 'w':
              case 'Up':
                t -= 10;
                break;
              case 'S':
              case 's':
              case 'Down':
                t += 10;
                break;
              case 'A':
              case 'a':
              case 'Left':
                e -= 10;
                break;
              case 'D':
              case 'd':
              case 'Right':
                e += 10;
            }
            this.checkEat(e, t);
            try {
              (this.snake.X = e), (this.snake.Y = t);
            } catch (e) {
              alert(e.message + ' GAME OVER!'), (this.isLive = !1);
            }
            this.isLive && setTimeout(this.run.bind(this), 300 - 30 * (this.scorePanel.level - 1));
          }
        },
        {
          key: 'checkEat',
          value: function (e, t) {
            e === this.food.X &&
              t === this.food.Y &&
              (this.food.change(), this.scorePanel.addScore(), this.snake.addBody());
          }
        }
      ]) && c(i.prototype, o),
      Object.defineProperty(i, 'prototype', { writable: !1 }),
      e
    );
  })())();
  console.log('gameControl:', h);
})();
