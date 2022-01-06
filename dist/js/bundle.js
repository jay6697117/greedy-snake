!(function () {
  'use strict';
  function e(e, t) {
    for (var o = 0; o < t.length; o++) {
      var n = t[o];
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
        (this.element = document.querySelector('.food')),
        console.log('this.element.offsetLeft:', this.element.offsetLeft),
        console.log('this.element.offsetTop:', this.element.offsetTop);
    }
    var o, n;
    return (
      (o = t),
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
            var e = 10 * Math.floor(30 * Math.random()),
              t = 10 * Math.floor(30 * Math.random());
            (this.element.style.left = e + 'px'), (this.element.style.top = t + 'px');
          }
        }
      ]) && e(o.prototype, n),
      Object.defineProperty(o, 'prototype', { writable: !1 }),
      t
    );
  })();
  !(function e() {
    setTimeout(function () {
      var o = new t();
      console.log('1:', o.X, o.Y), o.change(), console.log('2:', o.X, o.Y), e();
    }, 3e3);
  })();
  var o = new t();
  console.log('food:\n', o);
})();
