(window.webpackJsonp = window.webpackJsonp || []).push([
  [3], {
    2: function (t, e, n) {
      t.exports = n("zUnb")
    },
    crnd: function (t, e) {
      function n(t) {
        return Promise.resolve().then(function () {
          var e = new Error('Cannot find module "' + t + '".');
          throw e.code = "MODULE_NOT_FOUND", e
        })
      }
      n.keys = function () {
        return []
      }, n.resolve = n, t.exports = n, n.id = "crnd"
    },
    zUnb: function (t, e, n) {
      "use strict";
      n.r(e);
      var r = function (t, e) {
        return (r = Object.setPrototypeOf || {
            __proto__: []
          }
          instanceof Array && function (t, e) {
            t.__proto__ = e
          } || function (t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
          })(t, e)
      };

      function o(t, e) {
        function n() {
          this.constructor = t
        }
        r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
      }
      var i = function () {
        return (i = Object.assign || function (t) {
          for (var e, n = 1, r = arguments.length; n < r; n++)
            for (var o in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
          return t
        }).apply(this, arguments)
      };

      function a(t, e, n, r) {
        var o, i = arguments.length,
          a = i < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, n) : r;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, r);
        else
          for (var s = t.length - 1; s >= 0; s--)(o = t[s]) && (a = (i < 3 ? o(a) : i > 3 ? o(e, n, a) : o(e, n)) || a);
        return i > 3 && a && Object.defineProperty(e, n, a), a
      }

      function s(t, e) {
        return function (n, r) {
          e(n, r, t)
        }
      }

      function l(t, e) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, e)
      }

      function u(t) {
        var e = "function" == typeof Symbol && t[Symbol.iterator],
          n = 0;
        return e ? e.call(t) : {
          next: function () {
            return t && n >= t.length && (t = void 0), {
              value: t && t[n++],
              done: !t
            }
          }
        }
      }

      function c(t, e) {
        var n = "function" == typeof Symbol && t[Symbol.iterator];
        if (!n) return t;
        var r, o, i = n.call(t),
          a = [];
        try {
          for (;
            (void 0 === e || e-- > 0) && !(r = i.next()).done;) a.push(r.value)
        } catch (t) {
          o = {
            error: t
          }
        } finally {
          try {
            r && !r.done && (n = i.return) && n.call(i)
          } finally {
            if (o) throw o.error
          }
        }
        return a
      }

      function h() {
        for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(c(arguments[e]));
        return t
      }

      function p(t) {
        return "function" == typeof t
      }
      var f = !1,
        d = {
          Promise: void 0,
          set useDeprecatedSynchronousErrorHandling(t) {
            f = t
          },
          get useDeprecatedSynchronousErrorHandling() {
            return f
          }
        };

      function m(t) {
        setTimeout(function () {
          throw t
        })
      }
      var y = {
          closed: !0,
          next: function (t) {},
          error: function (t) {
            if (d.useDeprecatedSynchronousErrorHandling) throw t;
            m(t)
          },
          complete: function () {}
        },
        g = Array.isArray || function (t) {
          return t && "number" == typeof t.length
        };

      function v(t) {
        return null != t && "object" == typeof t
      }
      var _, b = {
        e: {}
      };

      function w() {
        try {
          return _.apply(this, arguments)
        } catch (t) {
          return b.e = t, b
        }
      }

      function C(t) {
        return _ = t, w
      }

      function E(t) {
        return Error.call(this), this.message = t ? t.length + " errors occurred during unsubscription:\n" + t.map(function (t, e) {
          return e + 1 + ") " + t.toString()
        }).join("\n  ") : "", this.name = "UnsubscriptionError", this.errors = t, this
      }
      E.prototype = Object.create(Error.prototype);
      var S = E,
        x = function () {
          function t(t) {
            this.closed = !1, this._parent = null, this._parents = null, this._subscriptions = null, t && (this._unsubscribe = t)
          }
          var e;
          return t.prototype.unsubscribe = function () {
            var t, e = !1;
            if (!this.closed) {
              var n = this._parent,
                r = this._parents,
                o = this._unsubscribe,
                i = this._subscriptions;
              this.closed = !0, this._parent = null, this._parents = null, this._subscriptions = null;
              for (var a = -1, s = r ? r.length : 0; n;) n.remove(this), n = ++a < s && r[a] || null;
              if (p(o) && C(o).call(this) === b && (e = !0, t = t || (b.e instanceof S ? k(b.e.errors) : [b.e])), g(i))
                for (a = -1, s = i.length; ++a < s;) {
                  var l = i[a];
                  if (v(l) && C(l.unsubscribe).call(l) === b) {
                    e = !0, t = t || [];
                    var u = b.e;
                    u instanceof S ? t = t.concat(k(u.errors)) : t.push(u)
                  }
                }
              if (e) throw new S(t)
            }
          }, t.prototype.add = function (e) {
            if (!e || e === t.EMPTY) return t.EMPTY;
            if (e === this) return this;
            var n = e;
            switch (typeof e) {
              case "function":
                n = new t(e);
              case "object":
                if (n.closed || "function" != typeof n.unsubscribe) return n;
                if (this.closed) return n.unsubscribe(), n;
                if ("function" != typeof n._addParent) {
                  var r = n;
                  (n = new t)._subscriptions = [r]
                }
                break;
              default:
                throw new Error("unrecognized teardown " + e + " added to Subscription.")
            }
            return (this._subscriptions || (this._subscriptions = [])).push(n), n._addParent(this), n
          }, t.prototype.remove = function (t) {
            var e = this._subscriptions;
            if (e) {
              var n = e.indexOf(t); - 1 !== n && e.splice(n, 1)
            }
          }, t.prototype._addParent = function (t) {
            var e = this._parent,
              n = this._parents;
            e && e !== t ? n ? -1 === n.indexOf(t) && n.push(t) : this._parents = [t] : this._parent = t
          }, t.EMPTY = ((e = new t).closed = !0, e), t
        }();

      function k(t) {
        return t.reduce(function (t, e) {
          return t.concat(e instanceof S ? e.errors : e)
        }, [])
      }
      var P = "function" == typeof Symbol ? Symbol("rxSubscriber") : "@@rxSubscriber_" + Math.random(),
        T = function (t) {
          function e(n, r, o) {
            var i = t.call(this) || this;
            switch (i.syncErrorValue = null, i.syncErrorThrown = !1, i.syncErrorThrowable = !1, i.isStopped = !1, i._parentSubscription = null, arguments.length) {
              case 0:
                i.destination = y;
                break;
              case 1:
                if (!n) {
                  i.destination = y;
                  break
                }
                if ("object" == typeof n) {
                  n instanceof e ? (i.syncErrorThrowable = n.syncErrorThrowable, i.destination = n, n.add(i)) : (i.syncErrorThrowable = !0, i.destination = new O(i, n));
                  break
                }
              default:
                i.syncErrorThrowable = !0, i.destination = new O(i, n, r, o)
            }
            return i
          }
          return o(e, t), e.prototype[P] = function () {
            return this
          }, e.create = function (t, n, r) {
            var o = new e(t, n, r);
            return o.syncErrorThrowable = !1, o
          }, e.prototype.next = function (t) {
            this.isStopped || this._next(t)
          }, e.prototype.error = function (t) {
            this.isStopped || (this.isStopped = !0, this._error(t))
          }, e.prototype.complete = function () {
            this.isStopped || (this.isStopped = !0, this._complete())
          }, e.prototype.unsubscribe = function () {
            this.closed || (this.isStopped = !0, t.prototype.unsubscribe.call(this))
          }, e.prototype._next = function (t) {
            this.destination.next(t)
          }, e.prototype._error = function (t) {
            this.destination.error(t), this.unsubscribe()
          }, e.prototype._complete = function () {
            this.destination.complete(), this.unsubscribe()
          }, e.prototype._unsubscribeAndRecycle = function () {
            var t = this._parent,
              e = this._parents;
            return this._parent = null, this._parents = null, this.unsubscribe(), this.closed = !1, this.isStopped = !1, this._parent = t, this._parents = e, this._parentSubscription = null, this
          }, e
        }(x),
        O = function (t) {
          function e(e, n, r, o) {
            var i, a = t.call(this) || this;
            a._parentSubscriber = e;
            var s = a;
            return p(n) ? i = n : n && (i = n.next, r = n.error, o = n.complete, n !== y && (p((s = Object.create(n)).unsubscribe) && a.add(s.unsubscribe.bind(s)), s.unsubscribe = a.unsubscribe.bind(a))), a._context = s, a._next = i, a._error = r, a._complete = o, a
          }
          return o(e, t), e.prototype.next = function (t) {
            if (!this.isStopped && this._next) {
              var e = this._parentSubscriber;
              d.useDeprecatedSynchronousErrorHandling && e.syncErrorThrowable ? this.__tryOrSetError(e, this._next, t) && this.unsubscribe() : this.__tryOrUnsub(this._next, t)
            }
          }, e.prototype.error = function (t) {
            if (!this.isStopped) {
              var e = this._parentSubscriber,
                n = d.useDeprecatedSynchronousErrorHandling;
              if (this._error) n && e.syncErrorThrowable ? (this.__tryOrSetError(e, this._error, t), this.unsubscribe()) : (this.__tryOrUnsub(this._error, t), this.unsubscribe());
              else if (e.syncErrorThrowable) n ? (e.syncErrorValue = t, e.syncErrorThrown = !0) : m(t), this.unsubscribe();
              else {
                if (this.unsubscribe(), n) throw t;
                m(t)
              }
            }
          }, e.prototype.complete = function () {
            var t = this;
            if (!this.isStopped) {
              var e = this._parentSubscriber;
              if (this._complete) {
                var n = function () {
                  return t._complete.call(t._context)
                };
                d.useDeprecatedSynchronousErrorHandling && e.syncErrorThrowable ? (this.__tryOrSetError(e, n), this.unsubscribe()) : (this.__tryOrUnsub(n), this.unsubscribe())
              } else this.unsubscribe()
            }
          }, e.prototype.__tryOrUnsub = function (t, e) {
            try {
              t.call(this._context, e)
            } catch (t) {
              if (this.unsubscribe(), d.useDeprecatedSynchronousErrorHandling) throw t;
              m(t)
            }
          }, e.prototype.__tryOrSetError = function (t, e, n) {
            if (!d.useDeprecatedSynchronousErrorHandling) throw new Error("bad call");
            try {
              e.call(this._context, n)
            } catch (e) {
              return d.useDeprecatedSynchronousErrorHandling ? (t.syncErrorValue = e, t.syncErrorThrown = !0, !0) : (m(e), !0)
            }
            return !1
          }, e.prototype._unsubscribe = function () {
            var t = this._parentSubscriber;
            this._context = null, this._parentSubscriber = null, t.unsubscribe()
          }, e
        }(T),
        A = "function" == typeof Symbol && Symbol.observable || "@@observable";

      function I() {}

      function R() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        return D(t)
      }

      function D(t) {
        return t ? 1 === t.length ? t[0] : function (e) {
          return t.reduce(function (t, e) {
            return e(t)
          }, e)
        } : I
      }
      var N = function () {
        function t(t) {
          this._isScalar = !1, t && (this._subscribe = t)
        }
        return t.prototype.lift = function (e) {
          var n = new t;
          return n.source = this, n.operator = e, n
        }, t.prototype.subscribe = function (t, e, n) {
          var r = this.operator,
            o = function (t, e, n) {
              if (t) {
                if (t instanceof T) return t;
                if (t[P]) return t[P]()
              }
              return t || e || n ? new T(t, e, n) : new T(y)
            }(t, e, n);
          if (r ? r.call(o, this.source) : o.add(this.source || d.useDeprecatedSynchronousErrorHandling && !o.syncErrorThrowable ? this._subscribe(o) : this._trySubscribe(o)), d.useDeprecatedSynchronousErrorHandling && o.syncErrorThrowable && (o.syncErrorThrowable = !1, o.syncErrorThrown)) throw o.syncErrorValue;
          return o
        }, t.prototype._trySubscribe = function (t) {
          try {
            return this._subscribe(t)
          } catch (e) {
            d.useDeprecatedSynchronousErrorHandling && (t.syncErrorThrown = !0, t.syncErrorValue = e),
              function (t) {
                for (; t;) {
                  var e = t.destination;
                  if (t.closed || t.isStopped) return !1;
                  t = e && e instanceof T ? e : null
                }
                return !0
              }(t) ? t.error(e) : console.warn(e)
          }
        }, t.prototype.forEach = function (t, e) {
          var n = this;
          return new(e = M(e))(function (e, r) {
            var o;
            o = n.subscribe(function (e) {
              try {
                t(e)
              } catch (t) {
                r(t), o && o.unsubscribe()
              }
            }, r, e)
          })
        }, t.prototype._subscribe = function (t) {
          var e = this.source;
          return e && e.subscribe(t)
        }, t.prototype[A] = function () {
          return this
        }, t.prototype.pipe = function () {
          for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
          return 0 === t.length ? this : D(t)(this)
        }, t.prototype.toPromise = function (t) {
          var e = this;
          return new(t = M(t))(function (t, n) {
            var r;
            e.subscribe(function (t) {
              return r = t
            }, function (t) {
              return n(t)
            }, function () {
              return t(r)
            })
          })
        }, t.create = function (e) {
          return new t(e)
        }, t
      }();

      function M(t) {
        if (t || (t = d.Promise || Promise), !t) throw new Error("no Promise impl found");
        return t
      }

      function j(t) {
        return t && "function" == typeof t.schedule
      }
      var F = function (t) {
          function e(e, n, r) {
            var o = t.call(this) || this;
            return o.parent = e, o.outerValue = n, o.outerIndex = r, o.index = 0, o
          }
          return o(e, t), e.prototype._next = function (t) {
            this.parent.notifyNext(this.outerValue, t, this.outerIndex, this.index++, this)
          }, e.prototype._error = function (t) {
            this.parent.notifyError(t, this), this.unsubscribe()
          }, e.prototype._complete = function () {
            this.parent.notifyComplete(this), this.unsubscribe()
          }, e
        }(T),
        V = function (t) {
          return function (e) {
            for (var n = 0, r = t.length; n < r && !e.closed; n++) e.next(t[n]);
            e.closed || e.complete()
          }
        },
        L = function (t) {
          return function (e) {
            return t.then(function (t) {
              e.closed || (e.next(t), e.complete())
            }, function (t) {
              return e.error(t)
            }).then(null, m), e
          }
        },
        H = function () {
          return "function" == typeof Symbol && Symbol.iterator ? Symbol.iterator : "@@iterator"
        }(),
        B = function (t) {
          return function (e) {
            for (var n = t[H]();;) {
              var r = n.next();
              if (r.done) {
                e.complete();
                break
              }
              if (e.next(r.value), e.closed) break
            }
            return "function" == typeof n.return && e.add(function () {
              n.return && n.return()
            }), e
          }
        },
        z = function (t) {
          return function (e) {
            var n = t[A]();
            if ("function" != typeof n.subscribe) throw new TypeError("Provided object does not correctly implement Symbol.observable");
            return n.subscribe(e)
          }
        },
        U = function (t) {
          return t && "number" == typeof t.length && "function" != typeof t
        };

      function q(t) {
        return t && "function" != typeof t.subscribe && "function" == typeof t.then
      }
      var G = function (t) {
        if (t instanceof N) return function (e) {
          return t._isScalar ? (e.next(t.value), void e.complete()) : t.subscribe(e)
        };
        if (t && "function" == typeof t[A]) return z(t);
        if (U(t)) return V(t);
        if (q(t)) return L(t);
        if (t && "function" == typeof t[H]) return B(t);
        var e = v(t) ? "an invalid object" : "'" + t + "'";
        throw new TypeError("You provided " + e + " where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.")
      };

      function Q(t, e, n, r, o) {
        if (void 0 === o && (o = new F(t, n, r)), !o.closed) return G(e)(o)
      }
      var W = function (t) {
        function e() {
          return null !== t && t.apply(this, arguments) || this
        }
        return o(e, t), e.prototype.notifyNext = function (t, e, n, r, o) {
          this.destination.next(e)
        }, e.prototype.notifyError = function (t, e) {
          this.destination.error(t)
        }, e.prototype.notifyComplete = function (t) {
          this.destination.complete()
        }, e
      }(T);

      function Z(t, e) {
        return function (n) {
          if ("function" != typeof t) throw new TypeError("argument is not a function. Are you looking for `mapTo()`?");
          return n.lift(new K(t, e))
        }
      }
      var K = function () {
          function t(t, e) {
            this.project = t, this.thisArg = e
          }
          return t.prototype.call = function (t, e) {
            return e.subscribe(new Y(t, this.project, this.thisArg))
          }, t
        }(),
        Y = function (t) {
          function e(e, n, r) {
            var o = t.call(this, e) || this;
            return o.project = n, o.count = 0, o.thisArg = r || o, o
          }
          return o(e, t), e.prototype._next = function (t) {
            var e;
            try {
              e = this.project.call(this.thisArg, t, this.count++)
            } catch (t) {
              return void this.destination.error(t)
            }
            this.destination.next(e)
          }, e
        }(T);

      function X(t, e) {
        return new N(e ? function (n) {
          var r = new x,
            o = 0;
          return r.add(e.schedule(function () {
            o !== t.length ? (n.next(t[o++]), n.closed || r.add(this.schedule())) : n.complete()
          })), r
        } : V(t))
      }

      function J(t, e) {
        if (!e) return t instanceof N ? t : new N(G(t));
        if (null != t) {
          if (function (t) {
              return t && "function" == typeof t[A]
            }(t)) return function (t, e) {
            return new N(e ? function (n) {
              var r = new x;
              return r.add(e.schedule(function () {
                var o = t[A]();
                r.add(o.subscribe({
                  next: function (t) {
                    r.add(e.schedule(function () {
                      return n.next(t)
                    }))
                  },
                  error: function (t) {
                    r.add(e.schedule(function () {
                      return n.error(t)
                    }))
                  },
                  complete: function () {
                    r.add(e.schedule(function () {
                      return n.complete()
                    }))
                  }
                }))
              })), r
            } : z(t))
          }(t, e);
          if (q(t)) return function (t, e) {
            return new N(e ? function (n) {
              var r = new x;
              return r.add(e.schedule(function () {
                return t.then(function (t) {
                  r.add(e.schedule(function () {
                    n.next(t), r.add(e.schedule(function () {
                      return n.complete()
                    }))
                  }))
                }, function (t) {
                  r.add(e.schedule(function () {
                    return n.error(t)
                  }))
                })
              })), r
            } : L(t))
          }(t, e);
          if (U(t)) return X(t, e);
          if (function (t) {
              return t && "function" == typeof t[H]
            }(t) || "string" == typeof t) return function (t, e) {
            if (!t) throw new Error("Iterable cannot be null");
            return new N(e ? function (n) {
              var r, o = new x;
              return o.add(function () {
                r && "function" == typeof r.return && r.return()
              }), o.add(e.schedule(function () {
                r = t[H](), o.add(e.schedule(function () {
                  if (!n.closed) {
                    var t, e;
                    try {
                      var o = r.next();
                      t = o.value, e = o.done
                    } catch (t) {
                      return void n.error(t)
                    }
                    e ? n.complete() : (n.next(t), this.schedule())
                  }
                }))
              })), o
            } : B(t))
          }(t, e)
        }
        throw new TypeError((null !== t && typeof t || t) + " is not observable")
      }

      function tt(t, e, n) {
        return void 0 === n && (n = Number.POSITIVE_INFINITY), "function" == typeof e ? function (r) {
          return r.pipe(tt(function (n, r) {
            return J(t(n, r)).pipe(Z(function (t, o) {
              return e(n, t, r, o)
            }))
          }, n))
        } : ("number" == typeof e && (n = e), function (e) {
          return e.lift(new et(t, n))
        })
      }
      var et = function () {
          function t(t, e) {
            void 0 === e && (e = Number.POSITIVE_INFINITY), this.project = t, this.concurrent = e
          }
          return t.prototype.call = function (t, e) {
            return e.subscribe(new nt(t, this.project, this.concurrent))
          }, t
        }(),
        nt = function (t) {
          function e(e, n, r) {
            void 0 === r && (r = Number.POSITIVE_INFINITY);
            var o = t.call(this, e) || this;
            return o.project = n, o.concurrent = r, o.hasCompleted = !1, o.buffer = [], o.active = 0, o.index = 0, o
          }
          return o(e, t), e.prototype._next = function (t) {
            this.active < this.concurrent ? this._tryNext(t) : this.buffer.push(t)
          }, e.prototype._tryNext = function (t) {
            var e, n = this.index++;
            try {
              e = this.project(t, n)
            } catch (t) {
              return void this.destination.error(t)
            }
            this.active++, this._innerSub(e, t, n)
          }, e.prototype._innerSub = function (t, e, n) {
            var r = new F(this, void 0, void 0);
            this.destination.add(r), Q(this, t, e, n, r)
          }, e.prototype._complete = function () {
            this.hasCompleted = !0, 0 === this.active && 0 === this.buffer.length && this.destination.complete(), this.unsubscribe()
          }, e.prototype.notifyNext = function (t, e, n, r, o) {
            this.destination.next(e)
          }, e.prototype.notifyComplete = function (t) {
            var e = this.buffer;
            this.remove(t), this.active--, e.length > 0 ? this._next(e.shift()) : 0 === this.active && this.hasCompleted && this.destination.complete()
          }, e
        }(W);

      function rt(t) {
        return t
      }

      function ot(t) {
        return void 0 === t && (t = Number.POSITIVE_INFINITY), tt(rt, t)
      }

      function it() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        var n = Number.POSITIVE_INFINITY,
          r = null,
          o = t[t.length - 1];
        return j(o) ? (r = t.pop(), t.length > 1 && "number" == typeof t[t.length - 1] && (n = t.pop())) : "number" == typeof o && (n = t.pop()), null === r && 1 === t.length && t[0] instanceof N ? t[0] : ot(n)(X(t, r))
      }

      function at() {
        return Error.call(this), this.message = "object unsubscribed", this.name = "ObjectUnsubscribedError", this
      }
      at.prototype = Object.create(Error.prototype);
      var st = at,
        lt = function (t) {
          function e(e, n) {
            var r = t.call(this) || this;
            return r.subject = e, r.subscriber = n, r.closed = !1, r
          }
          return o(e, t), e.prototype.unsubscribe = function () {
            if (!this.closed) {
              this.closed = !0;
              var t = this.subject,
                e = t.observers;
              if (this.subject = null, e && 0 !== e.length && !t.isStopped && !t.closed) {
                var n = e.indexOf(this.subscriber); - 1 !== n && e.splice(n, 1)
              }
            }
          }, e
        }(x),
        ut = function (t) {
          function e(e) {
            var n = t.call(this, e) || this;
            return n.destination = e, n
          }
          return o(e, t), e
        }(T),
        ct = function (t) {
          function e() {
            var e = t.call(this) || this;
            return e.observers = [], e.closed = !1, e.isStopped = !1, e.hasError = !1, e.thrownError = null, e
          }
          return o(e, t), e.prototype[P] = function () {
            return new ut(this)
          }, e.prototype.lift = function (t) {
            var e = new ht(this, this);
            return e.operator = t, e
          }, e.prototype.next = function (t) {
            if (this.closed) throw new st;
            if (!this.isStopped)
              for (var e = this.observers, n = e.length, r = e.slice(), o = 0; o < n; o++) r[o].next(t)
          }, e.prototype.error = function (t) {
            if (this.closed) throw new st;
            this.hasError = !0, this.thrownError = t, this.isStopped = !0;
            for (var e = this.observers, n = e.length, r = e.slice(), o = 0; o < n; o++) r[o].error(t);
            this.observers.length = 0
          }, e.prototype.complete = function () {
            if (this.closed) throw new st;
            this.isStopped = !0;
            for (var t = this.observers, e = t.length, n = t.slice(), r = 0; r < e; r++) n[r].complete();
            this.observers.length = 0
          }, e.prototype.unsubscribe = function () {
            this.isStopped = !0, this.closed = !0, this.observers = null
          }, e.prototype._trySubscribe = function (e) {
            if (this.closed) throw new st;
            return t.prototype._trySubscribe.call(this, e)
          }, e.prototype._subscribe = function (t) {
            if (this.closed) throw new st;
            return this.hasError ? (t.error(this.thrownError), x.EMPTY) : this.isStopped ? (t.complete(), x.EMPTY) : (this.observers.push(t), new lt(this, t))
          }, e.prototype.asObservable = function () {
            var t = new N;
            return t.source = this, t
          }, e.create = function (t, e) {
            return new ht(t, e)
          }, e
        }(N),
        ht = function (t) {
          function e(e, n) {
            var r = t.call(this) || this;
            return r.destination = e, r.source = n, r
          }
          return o(e, t), e.prototype.next = function (t) {
            var e = this.destination;
            e && e.next && e.next(t)
          }, e.prototype.error = function (t) {
            var e = this.destination;
            e && e.error && this.destination.error(t)
          }, e.prototype.complete = function () {
            var t = this.destination;
            t && t.complete && this.destination.complete()
          }, e.prototype._subscribe = function (t) {
            return this.source ? this.source.subscribe(t) : x.EMPTY
          }, e
        }(ct);

      function pt() {
        return function (t) {
          return t.lift(new ft(t))
        }
      }
      var ft = function () {
          function t(t) {
            this.connectable = t
          }
          return t.prototype.call = function (t, e) {
            var n = this.connectable;
            n._refCount++;
            var r = new dt(t, n),
              o = e.subscribe(r);
            return r.closed || (r.connection = n.connect()), o
          }, t
        }(),
        dt = function (t) {
          function e(e, n) {
            var r = t.call(this, e) || this;
            return r.connectable = n, r
          }
          return o(e, t), e.prototype._unsubscribe = function () {
            var t = this.connectable;
            if (t) {
              this.connectable = null;
              var e = t._refCount;
              if (e <= 0) this.connection = null;
              else if (t._refCount = e - 1, e > 1) this.connection = null;
              else {
                var n = this.connection,
                  r = t._connection;
                this.connection = null, !r || n && r !== n || r.unsubscribe()
              }
            } else this.connection = null
          }, e
        }(T),
        mt = function (t) {
          function e(e, n) {
            var r = t.call(this) || this;
            return r.source = e, r.subjectFactory = n, r._refCount = 0, r._isComplete = !1, r
          }
          return o(e, t), e.prototype._subscribe = function (t) {
            return this.getSubject().subscribe(t)
          }, e.prototype.getSubject = function () {
            var t = this._subject;
            return t && !t.isStopped || (this._subject = this.subjectFactory()), this._subject
          }, e.prototype.connect = function () {
            var t = this._connection;
            return t || (this._isComplete = !1, (t = this._connection = new x).add(this.source.subscribe(new gt(this.getSubject(), this))), t.closed ? (this._connection = null, t = x.EMPTY) : this._connection = t), t
          }, e.prototype.refCount = function () {
            return pt()(this)
          }, e
        }(N).prototype,
        yt = {
          operator: {
            value: null
          },
          _refCount: {
            value: 0,
            writable: !0
          },
          _subject: {
            value: null,
            writable: !0
          },
          _connection: {
            value: null,
            writable: !0
          },
          _subscribe: {
            value: mt._subscribe
          },
          _isComplete: {
            value: mt._isComplete,
            writable: !0
          },
          getSubject: {
            value: mt.getSubject
          },
          connect: {
            value: mt.connect
          },
          refCount: {
            value: mt.refCount
          }
        },
        gt = function (t) {
          function e(e, n) {
            var r = t.call(this, e) || this;
            return r.connectable = n, r
          }
          return o(e, t), e.prototype._error = function (e) {
            this._unsubscribe(), t.prototype._error.call(this, e)
          }, e.prototype._complete = function () {
            this.connectable._isComplete = !0, this._unsubscribe(), t.prototype._complete.call(this)
          }, e.prototype._unsubscribe = function () {
            var t = this.connectable;
            if (t) {
              this.connectable = null;
              var e = t._connection;
              t._refCount = 0, t._subject = null, t._connection = null, e && e.unsubscribe()
            }
          }, e
        }(ut);

      function vt() {
        return new ct
      }

      function _t(t) {
        return {
          providedIn: t.providedIn || null,
          factory: t.factory,
          value: void 0
        }
      }
      var bt = function () {
          function t(t, e) {
            this._desc = t, this.ngMetadataName = "InjectionToken", this.ngInjectableDef = void 0 !== e ? _t({
              providedIn: e.providedIn || "root",
              factory: e.factory
            }) : void 0
          }
          return t.prototype.toString = function () {
            return "InjectionToken " + this._desc
          }, t
        }(),
        wt = "__parameters__",
        Ct = "__prop__metadata__";

      function Et(t) {
        return function () {
          for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
          if (t) {
            var r = t.apply(void 0, h(e));
            for (var o in r) this[o] = r[o]
          }
        }
      }

      function St(t, e, n) {
        var r = Et(e);

        function o() {
          for (var t, e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
          if (this instanceof o) return r.apply(this, e), this;
          var i = new((t = o).bind.apply(t, h([void 0], e)));
          return a.annotation = i, a;

          function a(t, e, n) {
            for (var r = t.hasOwnProperty(wt) ? t[wt] : Object.defineProperty(t, wt, {
                value: []
              })[wt]; r.length <= n;) r.push(null);
            return (r[n] = r[n] || []).push(i), t
          }
        }
        return n && (o.prototype = Object.create(n.prototype)), o.prototype.ngMetadataName = t, o.annotationCls = o, o
      }

      function xt(t, e, n) {
        var r = Et(e);

        function o() {
          for (var t, e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
          if (this instanceof o) return r.apply(this, e), this;
          var i = new((t = o).bind.apply(t, h([void 0], e)));
          return function (t, e) {
            var n = t.constructor,
              r = n.hasOwnProperty(Ct) ? n[Ct] : Object.defineProperty(n, Ct, {
                value: {}
              })[Ct];
            r[e] = r.hasOwnProperty(e) && r[e] || [], r[e].unshift(i)
          }
        }
        return n && (o.prototype = Object.create(n.prototype)), o.prototype.ngMetadataName = t, o.annotationCls = o, o
      }
      var kt = new bt("AnalyzeForEntryComponents"),
        Pt = St("Attribute", function (t) {
          return {
            attributeName: t
          }
        }),
        Tt = xt("Input", function (t) {
          return {
            bindingPropertyName: t
          }
        }),
        Ot = xt("HostBinding", function (t) {
          return {
            hostPropertyName: t
          }
        });
      Function;
      var At = "undefined" != typeof window && window,
        It = "undefined" != typeof self && "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope && self,
        Rt = "undefined" != typeof global && global || At || It,
        Dt = Promise.resolve(0),
        Nt = null;

      function Mt() {
        if (!Nt) {
          var t = Rt.Symbol;
          if (t && t.iterator) Nt = t.iterator;
          else
            for (var e = Object.getOwnPropertyNames(Map.prototype), n = 0; n < e.length; ++n) {
              var r = e[n];
              "entries" !== r && "size" !== r && Map.prototype[r] === Map.prototype.entries && (Nt = r)
            }
        }
        return Nt
      }

      function jt(t) {
        "undefined" == typeof Zone ? Dt.then(function () {
          t && t.apply(null, null)
        }) : Zone.current.scheduleMicroTask("scheduleMicrotask", t)
      }

      function Ft(t, e) {
        return t === e || "number" == typeof t && "number" == typeof e && isNaN(t) && isNaN(e)
      }

      function Vt(t) {
        if ("string" == typeof t) return t;
        if (t instanceof Array) return "[" + t.map(Vt).join(", ") + "]";
        if (null == t) return "" + t;
        if (t.overriddenName) return "" + t.overriddenName;
        if (t.name) return "" + t.name;
        var e = t.toString();
        if (null == e) return "" + e;
        var n = e.indexOf("\n");
        return -1 === n ? e : e.substring(0, n)
      }

      function Lt(t) {
        return t.__forward_ref__ = Lt, t.toString = function () {
          return Vt(this())
        }, t
      }

      function Ht(t) {
        return "function" == typeof t && t.hasOwnProperty("__forward_ref__") && t.__forward_ref__ === Lt ? t() : t
      }
      var Bt = St("Inject", function (t) {
          return {
            token: t
          }
        }),
        zt = St("Optional"),
        Ut = St("Self"),
        qt = St("SkipSelf"),
        Gt = St("Host"),
        Qt = "__source",
        Wt = new Object,
        Zt = Wt,
        Kt = new bt("INJECTOR"),
        $t = function () {
          function t() {}
          return t.prototype.get = function (t, e) {
            if (void 0 === e && (e = Wt), e === Wt) throw new Error("NullInjectorError: No provider for " + Vt(t) + "!");
            return e
          }, t
        }(),
        Yt = function () {
          function t() {}
          return t.create = function (t, e) {
            return Array.isArray(t) ? new se(t, e) : new se(t.providers, t.parent, t.name || null)
          }, t.THROW_IF_NOT_FOUND = Wt, t.NULL = new $t, t.ngInjectableDef = _t({
            providedIn: "any",
            factory: function () {
              return fe(Kt)
            }
          }), t
        }(),
        Xt = function (t) {
          return t
        },
        Jt = [],
        te = Xt,
        ee = function () {
          return Array.prototype.slice.call(arguments)
        },
        ne = {},
        re = function (t) {
          for (var e in t)
            if (t[e] === ne) return e;
          throw Error("!prop")
        }({
          provide: String,
          useValue: ne
        }),
        oe = Yt.NULL,
        ie = /\n/gm,
        ae = "\u0275",
        se = function () {
          function t(t, e, n) {
            void 0 === e && (e = oe), void 0 === n && (n = null), this.parent = e, this.source = n;
            var r = this._records = new Map;
            r.set(Yt, {
                token: Yt,
                fn: Xt,
                deps: Jt,
                value: this,
                useNew: !1
              }), r.set(Kt, {
                token: Kt,
                fn: Xt,
                deps: Jt,
                value: this,
                useNew: !1
              }),
              function t(e, n) {
                if (n)
                  if ((n = Ht(n)) instanceof Array)
                    for (var r = 0; r < n.length; r++) t(e, n[r]);
                  else {
                    if ("function" == typeof n) throw ce("Function/Class not supported", n);
                    if (!n || "object" != typeof n || !n.provide) throw ce("Unexpected provider", n);
                    var o = Ht(n.provide),
                      i = function (t) {
                        var e = function (t) {
                            var e = Jt,
                              n = t.deps;
                            if (n && n.length) {
                              e = [];
                              for (var r = 0; r < n.length; r++) {
                                var o = 6;
                                if ((l = Ht(n[r])) instanceof Array)
                                  for (var i = 0, a = l; i < a.length; i++) {
                                    var s = a[i];
                                    s instanceof zt || s == zt ? o |= 1 : s instanceof qt || s == qt ? o &= -3 : s instanceof Ut || s == Ut ? o &= -5 : l = s instanceof Bt ? s.token : Ht(s)
                                  }
                                e.push({
                                  token: l,
                                  options: o
                                })
                              }
                            } else if (t.useExisting) {
                              var l;
                              e = [{
                                token: l = Ht(t.useExisting),
                                options: 6
                              }]
                            } else if (!(n || re in t)) throw ce("'deps' required", t);
                            return e
                          }(t),
                          n = Xt,
                          r = Jt,
                          o = !1,
                          i = Ht(t.provide);
                        if (re in t) r = t.useValue;
                        else if (t.useFactory) n = t.useFactory;
                        else if (t.useExisting);
                        else if (t.useClass) o = !0, n = Ht(t.useClass);
                        else {
                          if ("function" != typeof i) throw ce("StaticProvider does not have [useValue|useFactory|useExisting|useClass] or [provide] is not newable", t);
                          o = !0, n = i
                        }
                        return {
                          deps: e,
                          fn: n,
                          useNew: o,
                          value: r
                        }
                      }(n);
                    if (!0 === n.multi) {
                      var a = e.get(o);
                      if (a) {
                        if (a.fn !== ee) throw le(o)
                      } else e.set(o, a = {
                        token: n.provide,
                        deps: [],
                        useNew: !1,
                        fn: ee,
                        value: Jt
                      });
                      a.deps.push({
                        token: o = n,
                        options: 6
                      })
                    }
                    var s = e.get(o);
                    if (s && s.fn == ee) throw le(o);
                    e.set(o, i)
                  }
              }(r, t)
          }
          return t.prototype.get = function (t, e, n) {
            void 0 === n && (n = 0);
            var r = this._records.get(t);
            try {
              return function t(e, n, r, o, i, a) {
                try {
                  return function (e, n, r, o, i, a) {
                    var s, l;
                    if (!n || 4 & a) 2 & a || (l = o.get(e, i, 0));
                    else {
                      if ((l = n.value) == te) throw Error(ae + "Circular dependency");
                      if (l === Jt) {
                        n.value = te;
                        var u = n.useNew,
                          c = n.fn,
                          p = n.deps,
                          f = Jt;
                        if (p.length) {
                          f = [];
                          for (var d = 0; d < p.length; d++) {
                            var m = p[d],
                              y = m.options,
                              g = 2 & y ? r.get(m.token) : void 0;
                            f.push(t(m.token, g, r, g || 4 & y ? o : oe, 1 & y ? null : Yt.THROW_IF_NOT_FOUND, 0))
                          }
                        }
                        n.value = l = u ? new((s = c).bind.apply(s, h([void 0], f))) : c.apply(void 0, f)
                      }
                    }
                    return l
                  }(e, n, r, o, i, a)
                } catch (t) {
                  throw t instanceof Error || (t = new Error(t)), (t.ngTempTokenPath = t.ngTempTokenPath || []).unshift(e), n && n.value == te && (n.value = Jt), t
                }
              }(t, r, this._records, this.parent, e, n)
            } catch (e) {
              var o = e.ngTempTokenPath;
              throw t[Qt] && o.unshift(t[Qt]), e.message = ue("\n" + e.message, o, this.source), e.ngTokenPath = o, e.ngTempTokenPath = null, e
            }
          }, t.prototype.toString = function () {
            var t = [];
            return this._records.forEach(function (e, n) {
              return t.push(Vt(n))
            }), "StaticInjector[" + t.join(", ") + "]"
          }, t
        }();

      function le(t) {
        return ce("Cannot mix multi providers and regular providers", t)
      }

      function ue(t, e, n) {
        void 0 === n && (n = null), t = t && "\n" === t.charAt(0) && t.charAt(1) == ae ? t.substr(2) : t;
        var r = Vt(e);
        if (e instanceof Array) r = e.map(Vt).join(" -> ");
        else if ("object" == typeof e) {
          var o = [];
          for (var i in e)
            if (e.hasOwnProperty(i)) {
              var a = e[i];
              o.push(i + ":" + ("string" == typeof a ? JSON.stringify(a) : Vt(a)))
            } r = "{" + o.join(", ") + "}"
        }
        return "StaticInjectorError" + (n ? "(" + n + ")" : "") + "[" + r + "]: " + t.replace(ie, "\n  ")
      }

      function ce(t, e) {
        return new Error(ue(t, e))
      }
      var he = void 0;

      function pe(t) {
        var e = he;
        return he = t, e
      }

      function fe(t, e) {
        if (void 0 === e && (e = 0), void 0 === he) throw new Error("inject() must be called from an injection context");
        if (null === he) {
          var n = t.ngInjectableDef;
          if (n && "root" == n.providedIn) return void 0 === n.value ? n.value = n.factory() : n.value;
          if (8 & e) return null;
          throw new Error("Injector: NOT_FOUND [" + Vt(t) + "]")
        }
        return he.get(t, 8 & e ? null : void 0, e)
      }

      function de(t) {
        for (var e = [], n = 0; n < t.length; n++) {
          var r = t[n];
          if (Array.isArray(r)) {
            if (0 === r.length) throw new Error("Arguments array must have arguments.");
            for (var o = void 0, i = 0, a = 0; a < r.length; a++) {
              var s = r[a];
              s instanceof zt || "Optional" === s.ngMetadataName ? i |= 8 : s instanceof qt || "SkipSelf" === s.ngMetadataName ? i |= 4 : s instanceof Ut || "Self" === s.ngMetadataName ? i |= 2 : o = s instanceof Bt ? s.token : s
            }
            e.push(fe(o, i))
          } else e.push(fe(r))
        }
        return e
      }
      String;
      var me = function (t) {
          return t[t.Emulated = 0] = "Emulated", t[t.Native = 1] = "Native", t[t.None = 2] = "None", t[t.ShadowDom = 3] = "ShadowDom", t
        }({}),
        ye = new function (t) {
          this.full = t, this.major = t.split(".")[0], this.minor = t.split(".")[1], this.patch = t.split(".").slice(2).join(".")
        }("6.1.10"),
        ge = "ngDebugContext",
        ve = "ngOriginalError",
        _e = "ngErrorLogger";

      function be(t) {
        return t[ge]
      }

      function we(t) {
        return t[ve]
      }

      function Ce(t) {
        for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
        t.error.apply(t, h(e))
      }
      var Ee = function () {
          function t() {
            this._console = console
          }
          return t.prototype.handleError = function (t) {
            var e = this._findOriginalError(t),
              n = this._findContext(t),
              r = function (t) {
                return t[_e] || Ce
              }(t);
            r(this._console, "ERROR", t), e && r(this._console, "ORIGINAL ERROR", e), n && r(this._console, "ERROR CONTEXT", n)
          }, t.prototype._findContext = function (t) {
            return t ? be(t) ? be(t) : this._findContext(we(t)) : null
          }, t.prototype._findOriginalError = function (t) {
            for (var e = we(t); e && we(e);) e = we(e);
            return e
          }, t
        }(),
        Se = new bt("The presence of this token marks an injector as being the root injector."),
        xe = {},
        ke = {},
        Pe = [],
        Te = void 0;

      function Oe() {
        return void 0 === Te && (Te = new $t), Te
      }
      var Ae = function () {
        function t(t, e, n) {
          var r = this;
          this.parent = n, this.records = new Map, this.injectorDefTypes = new Set, this.onDestroy = new Set, this.destroyed = !1, De([t], function (t) {
            return r.processInjectorType(t, new Set)
          }), e && De(e, function (t) {
            return r.processProvider(t)
          }), this.records.set(Kt, Re(void 0, this)), this.isRootInjector = this.records.has(Se), this.injectorDefTypes.forEach(function (t) {
            return r.get(t)
          })
        }
        return t.prototype.destroy = function () {
          this.assertNotDestroyed(), this.destroyed = !0;
          try {
            this.onDestroy.forEach(function (t) {
              return t.ngOnDestroy()
            })
          } finally {
            this.records.clear(), this.onDestroy.clear(), this.injectorDefTypes.clear()
          }
        }, t.prototype.get = function (t, e, n) {
          void 0 === e && (e = Zt), void 0 === n && (n = 0), this.assertNotDestroyed();
          var r, o = pe(this);
          try {
            if (!(4 & n)) {
              var i = this.records.get(t);
              if (void 0 === i) {
                var a = ("function" == typeof (r = t) || "object" == typeof r && r instanceof bt) && t.ngInjectableDef || void 0;
                void 0 !== a && this.injectableDefInScope(a) && (i = Ie(t), this.records.set(t, i))
              }
              if (void 0 !== i) return this.hydrate(t, i)
            }
            return 2 & n && Oe(), this.parent.get(t, e)
          } finally {
            pe(o)
          }
        }, t.prototype.assertNotDestroyed = function () {
          if (this.destroyed) throw new Error("Injector has already been destroyed.")
        }, t.prototype.processInjectorType = function (t, e) {
          var n = this,
            r = (t = Ht(t)).ngInjectorDef,
            o = null == r && t.ngModule || void 0,
            i = void 0 === o ? t : o,
            a = void 0 !== o && t.providers || Pe;
          if (void 0 !== o && (r = o.ngInjectorDef), null != r) {
            if (e.has(i)) throw new Error("Circular dependency: type " + Vt(i) + " ends up importing itself.");
            if (this.injectorDefTypes.add(i), this.records.set(i, Re(r.factory)), null != r.imports) {
              e.add(i);
              try {
                De(r.imports, function (t) {
                  return n.processInjectorType(t, e)
                })
              } finally {
                e.delete(i)
              }
            }
            null != r.providers && De(r.providers, function (t) {
              return n.processProvider(t)
            }), De(a, function (t) {
              return n.processProvider(t)
            })
          }
        }, t.prototype.processProvider = function (t) {
          var e = Ne(t = Ht(t)) ? t : Ht(t.provide),
            n = function (t) {
              var e = Ht(t),
                n = xe,
                r = void 0;
              if (Ne(t)) return Ie(t);
              if (e = Ht(t.provide), re in t) n = t.useValue;
              else if (t.useExisting) r = function () {
                return fe(t.useExisting)
              };
              else if (t.useFactory) r = function () {
                return t.useFactory.apply(t, h(de(t.deps || [])))
              };
              else {
                var o = t.useClass || e;
                if (!t.deps) return Ie(o);
                r = function () {
                  return new(o.bind.apply(o, h([void 0], de(t.deps))))
                }
              }
              return Re(r, n)
            }(t);
          if (Ne(t) || !0 !== t.multi) {
            var r = this.records.get(e);
            if (r && void 0 !== r.multi) throw new Error("Mixed multi-provider for " + Vt(e))
          } else {
            var o = this.records.get(e);
            if (o) {
              if (void 0 === o.multi) throw new Error("Mixed multi-provider for " + e + ".")
            } else(o = Re(void 0, xe, !0)).factory = function () {
              return de(o.multi)
            }, this.records.set(e, o);
            e = t, o.multi.push(t)
          }
          this.records.set(e, n)
        }, t.prototype.hydrate = function (t, e) {
          if (e.value === ke) throw new Error("Circular dep for " + Vt(t));
          var n;
          return e.value === xe && (e.value = ke, e.value = e.factory()), "object" == typeof e.value && e.value && "object" == typeof (n = e.value) && null != n && n.ngOnDestroy && "function" == typeof n.ngOnDestroy && this.onDestroy.add(e.value), e.value
        }, t.prototype.injectableDefInScope = function (t) {
          return !!t.providedIn && ("string" == typeof t.providedIn ? "any" === t.providedIn || "root" === t.providedIn && this.isRootInjector : this.injectorDefTypes.has(t.providedIn))
        }, t
      }();

      function Ie(t) {
        var e = t.ngInjectableDef;
        if (void 0 === e) {
          if (t instanceof bt) throw new Error("Token " + Vt(t) + " is missing an ngInjectableDef definition.");
          return Re(function () {
            return new t
          })
        }
        return Re(e.factory)
      }

      function Re(t, e, n) {
        return void 0 === e && (e = xe), void 0 === n && (n = !1), {
          factory: t,
          value: e,
          multi: n ? [] : void 0
        }
      }

      function De(t, e) {
        t.forEach(function (t) {
          return Array.isArray(t) ? De(t, e) : e(t)
        })
      }

      function Ne(t) {
        return "function" == typeof t
      }

      function Me(t) {
        return !!t && "function" == typeof t.then
      }

      function je(t) {
        return !!t && "function" == typeof t.subscribe
      }
      var Fe = new bt("Application Initializer"),
        Ve = function () {
          function t(t) {
            var e = this;
            this.appInits = t, this.initialized = !1, this.done = !1, this.donePromise = new Promise(function (t, n) {
              e.resolve = t, e.reject = n
            })
          }
          return t.prototype.runInitializers = function () {
            var t = this;
            if (!this.initialized) {
              var e = [],
                n = function () {
                  t.done = !0, t.resolve()
                };
              if (this.appInits)
                for (var r = 0; r < this.appInits.length; r++) {
                  var o = this.appInits[r]();
                  Me(o) && e.push(o)
                }
              Promise.all(e).then(function () {
                n()
              }).catch(function (e) {
                t.reject(e)
              }), 0 === e.length && n(), this.initialized = !0
            }
          }, a([s(0, Bt(Fe)), s(0, zt())], t)
        }(),
        Le = new bt("AppId");

      function He() {
        return "" + Be() + Be() + Be()
      }

      function Be() {
        return String.fromCharCode(97 + Math.floor(25 * Math.random()))
      }
      var ze = new bt("Platform Initializer"),
        Ue = new bt("Platform ID"),
        qe = new bt("appBootstrapListener"),
        Ge = function () {
          function t() {}
          return t.prototype.log = function (t) {
            console.log(t)
          }, t.prototype.warn = function (t) {
            console.warn(t)
          }, t
        }();

      function Qe() {
        throw new Error("Runtime compiler is not loaded")
      }
      var We = function () {
          function t() {}
          return t.prototype.compileModuleSync = function (t) {
            throw Qe()
          }, t.prototype.compileModuleAsync = function (t) {
            throw Qe()
          }, t.prototype.compileModuleAndAllComponentsSync = function (t) {
            throw Qe()
          }, t.prototype.compileModuleAndAllComponentsAsync = function (t) {
            throw Qe()
          }, t.prototype.clearCache = function () {}, t.prototype.clearCacheFor = function (t) {}, t.prototype.getModuleId = function (t) {}, t
        }(),
        Ze = function () {},
        Ke = function () {},
        $e = function () {};

      function Ye(t) {
        var e = Error("No component factory found for " + Vt(t) + ". Did you add it to @NgModule.entryComponents?");
        return e[tn] = t, e
      }
      var Xe, Je, tn = "ngComponent",
        en = function () {
          function t() {}
          return t.prototype.resolveComponentFactory = function (t) {
            throw Ye(t)
          }, t
        }(),
        nn = function () {
          function t() {}
          return t.NULL = new en, t
        }(),
        rn = function () {
          function t(t, e, n) {
            this._parent = e, this._ngModule = n, this._factories = new Map;
            for (var r = 0; r < t.length; r++) {
              var o = t[r];
              this._factories.set(o.componentType, o)
            }
          }
          return t.prototype.resolveComponentFactory = function (t) {
            var e = this._factories.get(t);
            if (!e && this._parent && (e = this._parent.resolveComponentFactory(t)), !e) throw Ye(t);
            return new on(e, this._ngModule)
          }, t
        }(),
        on = function (t) {
          function e(e, n) {
            var r = t.call(this) || this;
            return r.factory = e, r.ngModule = n, r.selector = e.selector, r.componentType = e.componentType, r.ngContentSelectors = e.ngContentSelectors, r.inputs = e.inputs, r.outputs = e.outputs, r
          }
          return o(e, t), e.prototype.create = function (t, e, n, r) {
            return this.factory.create(t, e, n, r || this.ngModule)
          }, e
        }($e),
        an = function () {},
        sn = function () {},
        ln = function () {
          var t = Rt.wtf;
          return !(!t || !(Xe = t.trace) || (Je = Xe.events, 0))
        }();

      function un(t, e) {
        return null
      }
      var cn = ln ? function (t, e) {
          return void 0 === e && (e = null), Je.createScope(t, e)
        } : function (t, e) {
          return un
        },
        hn = ln ? function (t, e) {
          return Xe.leaveScope(t, e), e
        } : function (t, e) {
          return e
        },
        pn = function (t) {
          function e(e) {
            void 0 === e && (e = !1);
            var n = t.call(this) || this;
            return n.__isAsync = e, n
          }
          return o(e, t), e.prototype.emit = function (e) {
            t.prototype.next.call(this, e)
          }, e.prototype.subscribe = function (e, n, r) {
            var o, i = function (t) {
                return null
              },
              a = function () {
                return null
              };
            e && "object" == typeof e ? (o = this.__isAsync ? function (t) {
              setTimeout(function () {
                return e.next(t)
              })
            } : function (t) {
              e.next(t)
            }, e.error && (i = this.__isAsync ? function (t) {
              setTimeout(function () {
                return e.error(t)
              })
            } : function (t) {
              e.error(t)
            }), e.complete && (a = this.__isAsync ? function () {
              setTimeout(function () {
                return e.complete()
              })
            } : function () {
              e.complete()
            })) : (o = this.__isAsync ? function (t) {
              setTimeout(function () {
                return e(t)
              })
            } : function (t) {
              e(t)
            }, n && (i = this.__isAsync ? function (t) {
              setTimeout(function () {
                return n(t)
              })
            } : function (t) {
              n(t)
            }), r && (a = this.__isAsync ? function () {
              setTimeout(function () {
                return r()
              })
            } : function () {
              r()
            }));
            var s = t.prototype.subscribe.call(this, o, i, a);
            return e instanceof x && e.add(s), s
          }, e
        }(ct),
        fn = function () {
          function t(t) {
            var e, n = t.enableLongStackTrace,
              r = void 0 !== n && n;
            if (this.hasPendingMicrotasks = !1, this.hasPendingMacrotasks = !1, this.isStable = !0, this.onUnstable = new pn(!1), this.onMicrotaskEmpty = new pn(!1), this.onStable = new pn(!1), this.onError = new pn(!1), "undefined" == typeof Zone) throw new Error("In this configuration Angular requires Zone.js");
            Zone.assertZonePatched(), this._nesting = 0, this._outer = this._inner = Zone.current, Zone.wtfZoneSpec && (this._inner = this._inner.fork(Zone.wtfZoneSpec)), Zone.TaskTrackingZoneSpec && (this._inner = this._inner.fork(new Zone.TaskTrackingZoneSpec)), r && Zone.longStackTraceZoneSpec && (this._inner = this._inner.fork(Zone.longStackTraceZoneSpec)), (e = this)._inner = e._inner.fork({
              name: "angular",
              properties: {
                isAngularZone: !0
              },
              onInvokeTask: function (t, n, r, o, i, a) {
                try {
                  return gn(e), t.invokeTask(r, o, i, a)
                } finally {
                  vn(e)
                }
              },
              onInvoke: function (t, n, r, o, i, a, s) {
                try {
                  return gn(e), t.invoke(r, o, i, a, s)
                } finally {
                  vn(e)
                }
              },
              onHasTask: function (t, n, r, o) {
                t.hasTask(r, o), n === r && ("microTask" == o.change ? (e.hasPendingMicrotasks = o.microTask, yn(e)) : "macroTask" == o.change && (e.hasPendingMacrotasks = o.macroTask))
              },
              onHandleError: function (t, n, r, o) {
                return t.handleError(r, o), e.runOutsideAngular(function () {
                  return e.onError.emit(o)
                }), !1
              }
            })
          }
          return t.isInAngularZone = function () {
            return !0 === Zone.current.get("isAngularZone")
          }, t.assertInAngularZone = function () {
            if (!t.isInAngularZone()) throw new Error("Expected to be in Angular Zone, but it is not!")
          }, t.assertNotInAngularZone = function () {
            if (t.isInAngularZone()) throw new Error("Expected to not be in Angular Zone, but it is!")
          }, t.prototype.run = function (t, e, n) {
            return this._inner.run(t, e, n)
          }, t.prototype.runTask = function (t, e, n, r) {
            var o = this._inner,
              i = o.scheduleEventTask("NgZoneEvent: " + r, t, mn, dn, dn);
            try {
              return o.runTask(i, e, n)
            } finally {
              o.cancelTask(i)
            }
          }, t.prototype.runGuarded = function (t, e, n) {
            return this._inner.runGuarded(t, e, n)
          }, t.prototype.runOutsideAngular = function (t) {
            return this._outer.run(t)
          }, t
        }();

      function dn() {}
      var mn = {};

      function yn(t) {
        if (0 == t._nesting && !t.hasPendingMicrotasks && !t.isStable) try {
          t._nesting++, t.onMicrotaskEmpty.emit(null)
        } finally {
          if (t._nesting--, !t.hasPendingMicrotasks) try {
            t.runOutsideAngular(function () {
              return t.onStable.emit(null)
            })
          } finally {
            t.isStable = !0
          }
        }
      }

      function gn(t) {
        t._nesting++, t.isStable && (t.isStable = !1, t.onUnstable.emit(null))
      }

      function vn(t) {
        t._nesting--, yn(t)
      }
      var _n, bn = function () {
          function t() {
            this.hasPendingMicrotasks = !1, this.hasPendingMacrotasks = !1, this.isStable = !0, this.onUnstable = new pn, this.onMicrotaskEmpty = new pn, this.onStable = new pn, this.onError = new pn
          }
          return t.prototype.run = function (t) {
            return t()
          }, t.prototype.runGuarded = function (t) {
            return t()
          }, t.prototype.runOutsideAngular = function (t) {
            return t()
          }, t.prototype.runTask = function (t) {
            return t()
          }, t
        }(),
        wn = function () {
          function t(t) {
            var e = this;
            this._ngZone = t, this._pendingCount = 0, this._isZoneStable = !0, this._didWork = !1, this._callbacks = [], this._watchAngularEvents(), t.run(function () {
              e.taskTrackingZone = Zone.current.get("TaskTrackingZone")
            })
          }
          return t.prototype._watchAngularEvents = function () {
            var t = this;
            this._ngZone.onUnstable.subscribe({
              next: function () {
                t._didWork = !0, t._isZoneStable = !1
              }
            }), this._ngZone.runOutsideAngular(function () {
              t._ngZone.onStable.subscribe({
                next: function () {
                  fn.assertNotInAngularZone(), jt(function () {
                    t._isZoneStable = !0, t._runCallbacksIfReady()
                  })
                }
              })
            })
          }, t.prototype.increasePendingRequestCount = function () {
            return this._pendingCount += 1, this._didWork = !0, this._pendingCount
          }, t.prototype.decreasePendingRequestCount = function () {
            if (this._pendingCount -= 1, this._pendingCount < 0) throw new Error("pending async requests below zero");
            return this._runCallbacksIfReady(), this._pendingCount
          }, t.prototype.isStable = function () {
            return this._isZoneStable && 0 === this._pendingCount && !this._ngZone.hasPendingMacrotasks
          }, t.prototype._runCallbacksIfReady = function () {
            var t = this;
            if (this.isStable()) jt(function () {
              for (; 0 !== t._callbacks.length;) {
                var e = t._callbacks.pop();
                clearTimeout(e.timeoutId), e.doneCb(t._didWork)
              }
              t._didWork = !1
            });
            else {
              var e = this.getPendingTasks();
              this._callbacks = this._callbacks.filter(function (t) {
                return !t.updateCb || !t.updateCb(e) || (clearTimeout(t.timeoutId), !1)
              }), this._didWork = !0
            }
          }, t.prototype.getPendingTasks = function () {
            return this.taskTrackingZone ? this.taskTrackingZone.macroTasks.map(function (t) {
              return {
                source: t.source,
                isPeriodic: t.data.isPeriodic,
                delay: t.data.delay,
                creationLocation: t.creationLocation,
                xhr: t.data.target
              }
            }) : []
          }, t.prototype.addCallback = function (t, e, n) {
            var r = this,
              o = -1;
            e && e > 0 && (o = setTimeout(function () {
              r._callbacks = r._callbacks.filter(function (t) {
                return t.timeoutId !== o
              }), t(r._didWork, r.getPendingTasks())
            }, e)), this._callbacks.push({
              doneCb: t,
              timeoutId: o,
              updateCb: n
            })
          }, t.prototype.whenStable = function (t, e, n) {
            if (n && !this.taskTrackingZone) throw new Error('Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/dist/task-tracking.js" loaded?');
            this.addCallback(t, e, n), this._runCallbacksIfReady()
          }, t.prototype.getPendingRequestCount = function () {
            return this._pendingCount
          }, t.prototype.findProviders = function (t, e, n) {
            return []
          }, t
        }(),
        Cn = function () {
          function t() {
            this._applications = new Map, En.addToWindow(this)
          }
          return t.prototype.registerApplication = function (t, e) {
            this._applications.set(t, e)
          }, t.prototype.unregisterApplication = function (t) {
            this._applications.delete(t)
          }, t.prototype.unregisterAllApplications = function () {
            this._applications.clear()
          }, t.prototype.getTestability = function (t) {
            return this._applications.get(t) || null
          }, t.prototype.getAllTestabilities = function () {
            return Array.from(this._applications.values())
          }, t.prototype.getAllRootElements = function () {
            return Array.from(this._applications.keys())
          }, t.prototype.findTestabilityInTree = function (t, e) {
            return void 0 === e && (e = !0), En.findTestabilityInTree(this, t, e)
          }, a([l("design:paramtypes", [])], t)
        }(),
        En = new(function () {
          function t() {}
          return t.prototype.addToWindow = function (t) {}, t.prototype.findTestabilityInTree = function (t, e, n) {
            return null
          }, t
        }()),
        Sn = !0,
        xn = !1,
        kn = new bt("AllowMultipleToken");

      function Pn() {
        return xn = !0, Sn
      }
      var Tn = function (t, e) {
        this.name = t, this.token = e
      };

      function On(t, e, n) {
        void 0 === n && (n = []);
        var r = "Platform: " + e,
          o = new bt(r);
        return function (e) {
          void 0 === e && (e = []);
          var i = An();
          if (!i || i.injector.get(kn, !1))
            if (t) t(n.concat(e).concat({
              provide: o,
              useValue: !0
            }));
            else {
              var a = n.concat(e).concat({
                provide: o,
                useValue: !0
              });
              ! function (t) {
                if (_n && !_n.destroyed && !_n.injector.get(kn, !1)) throw new Error("There can be only one platform. Destroy the previous one to create a new one.");
                _n = t.get(In);
                var e = t.get(ze, null);
                e && e.forEach(function (t) {
                  return t()
                })
              }(Yt.create({
                providers: a,
                name: r
              }))
            } return function (t) {
            var e = An();
            if (!e) throw new Error("No platform exists!");
            if (!e.injector.get(t, null)) throw new Error("A platform with a different configuration has been created. Please destroy it first.");
            return e
          }(o)
        }
      }

      function An() {
        return _n && !_n.destroyed ? _n : null
      }
      var In = function () {
        function t(t) {
          this._injector = t, this._modules = [], this._destroyListeners = [], this._destroyed = !1
        }
        return t.prototype.bootstrapModuleFactory = function (t, e) {
          var n, r = this,
            o = "noop" === (n = e ? e.ngZone : void 0) ? new bn : ("zone.js" === n ? void 0 : n) || new fn({
              enableLongStackTrace: Pn()
            }),
            i = [{
              provide: fn,
              useValue: o
            }];
          return o.run(function () {
            var e = Yt.create({
                providers: i,
                parent: r.injector,
                name: t.moduleType.name
              }),
              n = t.create(e),
              a = n.injector.get(Ee, null);
            if (!a) throw new Error("No ErrorHandler. Is platform module (BrowserModule) included?");
            return n.onDestroy(function () {
                return Nn(r._modules, n)
              }), o.runOutsideAngular(function () {
                return o.onError.subscribe({
                  next: function (t) {
                    a.handleError(t)
                  }
                })
              }),
              function (t, e, o) {
                try {
                  var i = ((a = n.injector.get(Ve)).runInitializers(), a.donePromise.then(function () {
                    return r._moduleDoBootstrap(n), n
                  }));
                  return Me(i) ? i.catch(function (n) {
                    throw e.runOutsideAngular(function () {
                      return t.handleError(n)
                    }), n
                  }) : i
                } catch (n) {
                  throw e.runOutsideAngular(function () {
                    return t.handleError(n)
                  }), n
                }
                var a
              }(a, o)
          })
        }, t.prototype.bootstrapModule = function (t, e) {
          var n = this;
          void 0 === e && (e = []);
          var r = this.injector.get(Ze),
            o = Rn({}, e);
          return r.createCompiler([o]).compileModuleAsync(t).then(function (t) {
            return n.bootstrapModuleFactory(t, o)
          })
        }, t.prototype._moduleDoBootstrap = function (t) {
          var e = t.injector.get(Dn);
          if (t._bootstrapComponents.length > 0) t._bootstrapComponents.forEach(function (t) {
            return e.bootstrap(t)
          });
          else {
            if (!t.instance.ngDoBootstrap) throw new Error("The module " + Vt(t.instance.constructor) + ' was bootstrapped, but it does not declare "@NgModule.bootstrap" components nor a "ngDoBootstrap" method. Please define one of these.');
            t.instance.ngDoBootstrap(e)
          }
          this._modules.push(t)
        }, t.prototype.onDestroy = function (t) {
          this._destroyListeners.push(t)
        }, Object.defineProperty(t.prototype, "injector", {
          get: function () {
            return this._injector
          },
          enumerable: !0,
          configurable: !0
        }), t.prototype.destroy = function () {
          if (this._destroyed) throw new Error("The platform has already been destroyed!");
          this._modules.slice().forEach(function (t) {
            return t.destroy()
          }), this._destroyListeners.forEach(function (t) {
            return t()
          }), this._destroyed = !0
        }, Object.defineProperty(t.prototype, "destroyed", {
          get: function () {
            return this._destroyed
          },
          enumerable: !0,
          configurable: !0
        }), t
      }();

      function Rn(t, e) {
        return Array.isArray(e) ? e.reduce(Rn, t) : i({}, t, e)
      }
      var Dn = function () {
        function t(t, e, n, r, o, i) {
          var a = this;
          this._zone = t, this._console = e, this._injector = n, this._exceptionHandler = r, this._componentFactoryResolver = o, this._initStatus = i, this._bootstrapListeners = [], this._views = [], this._runningTick = !1, this._enforceNoNewChanges = !1, this._stable = !0, this.componentTypes = [], this.components = [], this._enforceNoNewChanges = Pn(), this._zone.onMicrotaskEmpty.subscribe({
            next: function () {
              a._zone.run(function () {
                a.tick()
              })
            }
          });
          var s = new N(function (t) {
              a._stable = a._zone.isStable && !a._zone.hasPendingMacrotasks && !a._zone.hasPendingMicrotasks, a._zone.runOutsideAngular(function () {
                t.next(a._stable), t.complete()
              })
            }),
            l = new N(function (t) {
              var e;
              a._zone.runOutsideAngular(function () {
                e = a._zone.onStable.subscribe(function () {
                  fn.assertNotInAngularZone(), jt(function () {
                    a._stable || a._zone.hasPendingMacrotasks || a._zone.hasPendingMicrotasks || (a._stable = !0, t.next(!0))
                  })
                })
              });
              var n = a._zone.onUnstable.subscribe(function () {
                fn.assertInAngularZone(), a._stable && (a._stable = !1, a._zone.runOutsideAngular(function () {
                  t.next(!1)
                }))
              });
              return function () {
                e.unsubscribe(), n.unsubscribe()
              }
            });
          this.isStable = it(s, l.pipe(function (t) {
            return pt()((e = vt, function (t) {
              var n;
              n = "function" == typeof e ? e : function () {
                return e
              };
              var r = Object.create(t, yt);
              return r.source = t, r.subjectFactory = n, r
            })(t));
            var e
          }))
        }
        var e;
        return e = t, t.prototype.bootstrap = function (t, e) {
          var n, r = this;
          if (!this._initStatus.done) throw new Error("Cannot bootstrap as there are still asynchronous initializers running. Bootstrap components in the `ngDoBootstrap` method of the root module.");
          n = t instanceof $e ? t : this._componentFactoryResolver.resolveComponentFactory(t), this.componentTypes.push(n.componentType);
          var o = n instanceof on ? null : this._injector.get(an),
            i = n.create(Yt.NULL, [], e || n.selector, o);
          i.onDestroy(function () {
            r._unloadComponent(i)
          });
          var a = i.injector.get(wn, null);
          return a && i.injector.get(Cn).registerApplication(i.location.nativeElement, a), this._loadComponent(i), Pn() && this._console.log("Angular is running in the development mode. Call enableProdMode() to enable the production mode."), i
        }, t.prototype.tick = function () {
          var t = this;
          if (this._runningTick) throw new Error("ApplicationRef.tick is called recursively");
          var n = e._tickScope();
          try {
            this._runningTick = !0, this._views.forEach(function (t) {
              return t.detectChanges()
            }), this._enforceNoNewChanges && this._views.forEach(function (t) {
              return t.checkNoChanges()
            })
          } catch (e) {
            this._zone.runOutsideAngular(function () {
              return t._exceptionHandler.handleError(e)
            })
          } finally {
            this._runningTick = !1, hn(n)
          }
        }, t.prototype.attachView = function (t) {
          var e = t;
          this._views.push(e), e.attachToAppRef(this)
        }, t.prototype.detachView = function (t) {
          var e = t;
          Nn(this._views, e), e.detachFromAppRef()
        }, t.prototype._loadComponent = function (t) {
          this.attachView(t.hostView), this.tick(), this.components.push(t), this._injector.get(qe, []).concat(this._bootstrapListeners).forEach(function (e) {
            return e(t)
          })
        }, t.prototype._unloadComponent = function (t) {
          this.detachView(t.hostView), Nn(this.components, t)
        }, t.prototype.ngOnDestroy = function () {
          this._views.slice().forEach(function (t) {
            return t.destroy()
          })
        }, Object.defineProperty(t.prototype, "viewCount", {
          get: function () {
            return this._views.length
          },
          enumerable: !0,
          configurable: !0
        }), t._tickScope = cn("ApplicationRef#tick()"), t
      }();

      function Nn(t, e) {
        var n = t.indexOf(e);
        n > -1 && t.splice(n, 1)
      }
      var Mn = function () {},
        jn = function (t) {
          return t[t.Important = 1] = "Important", t[t.DashCase = 2] = "DashCase", t
        }({}),
        Fn = function () {},
        Vn = function (t) {
          this.nativeElement = t
        },
        Ln = function () {},
        Hn = function () {
          function t() {
            this.dirty = !0, this._results = [], this.changes = new pn, this.length = 0
          }
          return t.prototype.map = function (t) {
            return this._results.map(t)
          }, t.prototype.filter = function (t) {
            return this._results.filter(t)
          }, t.prototype.find = function (t) {
            return this._results.find(t)
          }, t.prototype.reduce = function (t, e) {
            return this._results.reduce(t, e)
          }, t.prototype.forEach = function (t) {
            this._results.forEach(t)
          }, t.prototype.some = function (t) {
            return this._results.some(t)
          }, t.prototype.toArray = function () {
            return this._results.slice()
          }, t.prototype[Mt()] = function () {
            return this._results[Mt()]()
          }, t.prototype.toString = function () {
            return this._results.toString()
          }, t.prototype.reset = function (t) {
            this._results = function t(e) {
              return e.reduce(function (e, n) {
                var r = Array.isArray(n) ? t(n) : n;
                return e.concat(r)
              }, [])
            }(t), this.dirty = !1, this.length = this._results.length, this.last = this._results[this.length - 1], this.first = this._results[0]
          }, t.prototype.notifyOnChanges = function () {
            this.changes.emit(this)
          }, t.prototype.setDirty = function () {
            this.dirty = !0
          }, t.prototype.destroy = function () {
            this.changes.complete(), this.changes.unsubscribe()
          }, t
        }(),
        Bn = function () {},
        zn = {
          factoryPathPrefix: "",
          factoryPathSuffix: ".ngfactory"
        },
        Un = function () {
          function t(t, e) {
            this._compiler = t, this._config = e || zn
          }
          return t.prototype.load = function (t) {
            return this._compiler instanceof We ? this.loadFactory(t) : this.loadAndCompile(t)
          }, t.prototype.loadAndCompile = function (t) {
            var e = this,
              r = c(t.split("#"), 2),
              o = r[0],
              i = r[1];
            return void 0 === i && (i = "default"), n("crnd")(o).then(function (t) {
              return t[i]
            }).then(function (t) {
              return qn(t, o, i)
            }).then(function (t) {
              return e._compiler.compileModuleAsync(t)
            })
          }, t.prototype.loadFactory = function (t) {
            var e = c(t.split("#"), 2),
              r = e[0],
              o = e[1],
              i = "NgFactory";
            return void 0 === o && (o = "default", i = ""), n("crnd")(this._config.factoryPathPrefix + r + this._config.factoryPathSuffix).then(function (t) {
              return t[o + i]
            }).then(function (t) {
              return qn(t, r, o)
            })
          }, a([s(1, zt())], t)
        }();

      function qn(t, e, n) {
        if (!t) throw new Error("Cannot find '" + n + "' in '" + e + "'");
        return t
      }
      var Gn = function () {},
        Qn = function () {},
        Wn = function () {},
        Zn = function () {
          function t(t, e, n) {
            this._debugContext = n, this.nativeNode = t, e && e instanceof Kn ? e.addChild(this) : this.parent = null, this.listeners = []
          }
          return Object.defineProperty(t.prototype, "injector", {
            get: function () {
              return this._debugContext.injector
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(t.prototype, "componentInstance", {
            get: function () {
              return this._debugContext.component
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(t.prototype, "context", {
            get: function () {
              return this._debugContext.context
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(t.prototype, "references", {
            get: function () {
              return this._debugContext.references
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(t.prototype, "providerTokens", {
            get: function () {
              return this._debugContext.providerTokens
            },
            enumerable: !0,
            configurable: !0
          }), t
        }(),
        Kn = function (t) {
          function e(e, n, r) {
            var o = t.call(this, e, n, r) || this;
            return o.properties = {}, o.attributes = {}, o.classes = {}, o.styles = {}, o.childNodes = [], o.nativeElement = e, o
          }
          return o(e, t), e.prototype.addChild = function (t) {
            t && (this.childNodes.push(t), t.parent = this)
          }, e.prototype.removeChild = function (t) {
            var e = this.childNodes.indexOf(t); - 1 !== e && (t.parent = null, this.childNodes.splice(e, 1))
          }, e.prototype.insertChildrenAfter = function (t, e) {
            var n, r = this,
              o = this.childNodes.indexOf(t); - 1 !== o && ((n = this.childNodes).splice.apply(n, h([o + 1, 0], e)), e.forEach(function (t) {
              t.parent && t.parent.removeChild(t), t.parent = r
            }))
          }, e.prototype.insertBefore = function (t, e) {
            var n = this.childNodes.indexOf(t); - 1 === n ? this.addChild(e) : (e.parent && e.parent.removeChild(e), e.parent = this, this.childNodes.splice(n, 0, e))
          }, e.prototype.query = function (t) {
            return this.queryAll(t)[0] || null
          }, e.prototype.queryAll = function (t) {
            var e = [];
            return function t(e, n, r) {
              e.childNodes.forEach(function (e) {
                e instanceof Kn && (n(e) && r.push(e), t(e, n, r))
              })
            }(this, t, e), e
          }, e.prototype.queryAllNodes = function (t) {
            var e = [];
            return function t(e, n, r) {
              e instanceof Kn && e.childNodes.forEach(function (e) {
                n(e) && r.push(e), e instanceof Kn && t(e, n, r)
              })
            }(this, t, e), e
          }, Object.defineProperty(e.prototype, "children", {
            get: function () {
              return this.childNodes.filter(function (t) {
                return t instanceof e
              })
            },
            enumerable: !0,
            configurable: !0
          }), e.prototype.triggerEventHandler = function (t, e) {
            this.listeners.forEach(function (n) {
              n.name == t && n.callback(e)
            })
          }, e
        }(Zn),
        $n = new Map;

      function Yn(t) {
        return $n.get(t) || null
      }

      function Xn(t) {
        $n.set(t.nativeNode, t)
      }

      function Jn(t, e) {
        var n = nr(t),
          r = nr(e);
        return n && r ? function (t, e, n) {
          for (var r = t[Mt()](), o = e[Mt()]();;) {
            var i = r.next(),
              a = o.next();
            if (i.done && a.done) return !0;
            if (i.done || a.done) return !1;
            if (!n(i.value, a.value)) return !1
          }
        }(t, e, Jn) : !(n || !t || "object" != typeof t && "function" != typeof t || r || !e || "object" != typeof e && "function" != typeof e) || Ft(t, e)
      }
      var tr = function () {
          function t(t) {
            this.wrapped = t
          }
          return t.wrap = function (e) {
            return new t(e)
          }, t.unwrap = function (e) {
            return t.isWrapped(e) ? e.wrapped : e
          }, t.isWrapped = function (e) {
            return e instanceof t
          }, t
        }(),
        er = function () {
          function t(t, e, n) {
            this.previousValue = t, this.currentValue = e, this.firstChange = n
          }
          return t.prototype.isFirstChange = function () {
            return this.firstChange
          }, t
        }();

      function nr(t) {
        return !!rr(t) && (Array.isArray(t) || !(t instanceof Map) && Mt() in t)
      }

      function rr(t) {
        return null !== t && ("function" == typeof t || "object" == typeof t)
      }
      var or = function () {
          function t() {}
          return t.prototype.supports = function (t) {
            return nr(t)
          }, t.prototype.create = function (t) {
            return new ar(t)
          }, t
        }(),
        ir = function (t, e) {
          return e
        },
        ar = function () {
          function t(t) {
            this.length = 0, this._linkedRecords = null, this._unlinkedRecords = null, this._previousItHead = null, this._itHead = null, this._itTail = null, this._additionsHead = null, this._additionsTail = null, this._movesHead = null, this._movesTail = null, this._removalsHead = null, this._removalsTail = null, this._identityChangesHead = null, this._identityChangesTail = null, this._trackByFn = t || ir
          }
          return t.prototype.forEachItem = function (t) {
            var e;
            for (e = this._itHead; null !== e; e = e._next) t(e)
          }, t.prototype.forEachOperation = function (t) {
            for (var e = this._itHead, n = this._removalsHead, r = 0, o = null; e || n;) {
              var i = !n || e && e.currentIndex < cr(n, r, o) ? e : n,
                a = cr(i, r, o),
                s = i.currentIndex;
              if (i === n) r--, n = n._nextRemoved;
              else if (e = e._next, null == i.previousIndex) r++;
              else {
                o || (o = []);
                var l = a - r,
                  u = s - r;
                if (l != u) {
                  for (var c = 0; c < l; c++) {
                    var h = c < o.length ? o[c] : o[c] = 0,
                      p = h + c;
                    u <= p && p < l && (o[c] = h + 1)
                  }
                  o[i.previousIndex] = u - l
                }
              }
              a !== s && t(i, a, s)
            }
          }, t.prototype.forEachPreviousItem = function (t) {
            var e;
            for (e = this._previousItHead; null !== e; e = e._nextPrevious) t(e)
          }, t.prototype.forEachAddedItem = function (t) {
            var e;
            for (e = this._additionsHead; null !== e; e = e._nextAdded) t(e)
          }, t.prototype.forEachMovedItem = function (t) {
            var e;
            for (e = this._movesHead; null !== e; e = e._nextMoved) t(e)
          }, t.prototype.forEachRemovedItem = function (t) {
            var e;
            for (e = this._removalsHead; null !== e; e = e._nextRemoved) t(e)
          }, t.prototype.forEachIdentityChange = function (t) {
            var e;
            for (e = this._identityChangesHead; null !== e; e = e._nextIdentityChange) t(e)
          }, t.prototype.diff = function (t) {
            if (null == t && (t = []), !nr(t)) throw new Error("Error trying to diff '" + Vt(t) + "'. Only arrays and iterables are allowed");
            return this.check(t) ? this : null
          }, t.prototype.onDestroy = function () {}, t.prototype.check = function (t) {
            var e = this;
            this._reset();
            var n, r, o, i = this._itHead,
              a = !1;
            if (Array.isArray(t)) {
              this.length = t.length;
              for (var s = 0; s < this.length; s++) o = this._trackByFn(s, r = t[s]), null !== i && Ft(i.trackById, o) ? (a && (i = this._verifyReinsertion(i, r, o, s)), Ft(i.item, r) || this._addIdentityChange(i, r)) : (i = this._mismatch(i, r, o, s), a = !0), i = i._next
            } else n = 0,
              function (t, e) {
                if (Array.isArray(t))
                  for (var n = 0; n < t.length; n++) e(t[n]);
                else
                  for (var r = t[Mt()](), o = void 0; !(o = r.next()).done;) e(o.value)
              }(t, function (t) {
                o = e._trackByFn(n, t), null !== i && Ft(i.trackById, o) ? (a && (i = e._verifyReinsertion(i, t, o, n)), Ft(i.item, t) || e._addIdentityChange(i, t)) : (i = e._mismatch(i, t, o, n), a = !0), i = i._next, n++
              }), this.length = n;
            return this._truncate(i), this.collection = t, this.isDirty
          }, Object.defineProperty(t.prototype, "isDirty", {
            get: function () {
              return null !== this._additionsHead || null !== this._movesHead || null !== this._removalsHead || null !== this._identityChangesHead
            },
            enumerable: !0,
            configurable: !0
          }), t.prototype._reset = function () {
            if (this.isDirty) {
              var t = void 0,
                e = void 0;
              for (t = this._previousItHead = this._itHead; null !== t; t = t._next) t._nextPrevious = t._next;
              for (t = this._additionsHead; null !== t; t = t._nextAdded) t.previousIndex = t.currentIndex;
              for (this._additionsHead = this._additionsTail = null, t = this._movesHead; null !== t; t = e) t.previousIndex = t.currentIndex, e = t._nextMoved;
              this._movesHead = this._movesTail = null, this._removalsHead = this._removalsTail = null, this._identityChangesHead = this._identityChangesTail = null
            }
          }, t.prototype._mismatch = function (t, e, n, r) {
            var o;
            return null === t ? o = this._itTail : (o = t._prev, this._remove(t)), null !== (t = null === this._linkedRecords ? null : this._linkedRecords.get(n, r)) ? (Ft(t.item, e) || this._addIdentityChange(t, e), this._moveAfter(t, o, r)) : null !== (t = null === this._unlinkedRecords ? null : this._unlinkedRecords.get(n, null)) ? (Ft(t.item, e) || this._addIdentityChange(t, e), this._reinsertAfter(t, o, r)) : t = this._addAfter(new sr(e, n), o, r), t
          }, t.prototype._verifyReinsertion = function (t, e, n, r) {
            var o = null === this._unlinkedRecords ? null : this._unlinkedRecords.get(n, null);
            return null !== o ? t = this._reinsertAfter(o, t._prev, r) : t.currentIndex != r && (t.currentIndex = r, this._addToMoves(t, r)), t
          }, t.prototype._truncate = function (t) {
            for (; null !== t;) {
              var e = t._next;
              this._addToRemovals(this._unlink(t)), t = e
            }
            null !== this._unlinkedRecords && this._unlinkedRecords.clear(), null !== this._additionsTail && (this._additionsTail._nextAdded = null), null !== this._movesTail && (this._movesTail._nextMoved = null), null !== this._itTail && (this._itTail._next = null), null !== this._removalsTail && (this._removalsTail._nextRemoved = null), null !== this._identityChangesTail && (this._identityChangesTail._nextIdentityChange = null)
          }, t.prototype._reinsertAfter = function (t, e, n) {
            null !== this._unlinkedRecords && this._unlinkedRecords.remove(t);
            var r = t._prevRemoved,
              o = t._nextRemoved;
            return null === r ? this._removalsHead = o : r._nextRemoved = o, null === o ? this._removalsTail = r : o._prevRemoved = r, this._insertAfter(t, e, n), this._addToMoves(t, n), t
          }, t.prototype._moveAfter = function (t, e, n) {
            return this._unlink(t), this._insertAfter(t, e, n), this._addToMoves(t, n), t
          }, t.prototype._addAfter = function (t, e, n) {
            return this._insertAfter(t, e, n), this._additionsTail = null === this._additionsTail ? this._additionsHead = t : this._additionsTail._nextAdded = t, t
          }, t.prototype._insertAfter = function (t, e, n) {
            var r = null === e ? this._itHead : e._next;
            return t._next = r, t._prev = e, null === r ? this._itTail = t : r._prev = t, null === e ? this._itHead = t : e._next = t, null === this._linkedRecords && (this._linkedRecords = new ur), this._linkedRecords.put(t), t.currentIndex = n, t
          }, t.prototype._remove = function (t) {
            return this._addToRemovals(this._unlink(t))
          }, t.prototype._unlink = function (t) {
            null !== this._linkedRecords && this._linkedRecords.remove(t);
            var e = t._prev,
              n = t._next;
            return null === e ? this._itHead = n : e._next = n, null === n ? this._itTail = e : n._prev = e, t
          }, t.prototype._addToMoves = function (t, e) {
            return t.previousIndex === e ? t : (this._movesTail = null === this._movesTail ? this._movesHead = t : this._movesTail._nextMoved = t, t)
          }, t.prototype._addToRemovals = function (t) {
            return null === this._unlinkedRecords && (this._unlinkedRecords = new ur), this._unlinkedRecords.put(t), t.currentIndex = null, t._nextRemoved = null, null === this._removalsTail ? (this._removalsTail = this._removalsHead = t, t._prevRemoved = null) : (t._prevRemoved = this._removalsTail, this._removalsTail = this._removalsTail._nextRemoved = t), t
          }, t.prototype._addIdentityChange = function (t, e) {
            return t.item = e, this._identityChangesTail = null === this._identityChangesTail ? this._identityChangesHead = t : this._identityChangesTail._nextIdentityChange = t, t
          }, t
        }(),
        sr = function (t, e) {
          this.item = t, this.trackById = e, this.currentIndex = null, this.previousIndex = null, this._nextPrevious = null, this._prev = null, this._next = null, this._prevDup = null, this._nextDup = null, this._prevRemoved = null, this._nextRemoved = null, this._nextAdded = null, this._nextMoved = null, this._nextIdentityChange = null
        },
        lr = function () {
          function t() {
            this._head = null, this._tail = null
          }
          return t.prototype.add = function (t) {
            null === this._head ? (this._head = this._tail = t, t._nextDup = null, t._prevDup = null) : (this._tail._nextDup = t, t._prevDup = this._tail, t._nextDup = null, this._tail = t)
          }, t.prototype.get = function (t, e) {
            var n;
            for (n = this._head; null !== n; n = n._nextDup)
              if ((null === e || e <= n.currentIndex) && Ft(n.trackById, t)) return n;
            return null
          }, t.prototype.remove = function (t) {
            var e = t._prevDup,
              n = t._nextDup;
            return null === e ? this._head = n : e._nextDup = n, null === n ? this._tail = e : n._prevDup = e, null === this._head
          }, t
        }(),
        ur = function () {
          function t() {
            this.map = new Map
          }
          return t.prototype.put = function (t) {
            var e = t.trackById,
              n = this.map.get(e);
            n || (n = new lr, this.map.set(e, n)), n.add(t)
          }, t.prototype.get = function (t, e) {
            var n = this.map.get(t);
            return n ? n.get(t, e) : null
          }, t.prototype.remove = function (t) {
            var e = t.trackById;
            return this.map.get(e).remove(t) && this.map.delete(e), t
          }, Object.defineProperty(t.prototype, "isEmpty", {
            get: function () {
              return 0 === this.map.size
            },
            enumerable: !0,
            configurable: !0
          }), t.prototype.clear = function () {
            this.map.clear()
          }, t
        }();

      function cr(t, e, n) {
        var r = t.previousIndex;
        if (null === r) return r;
        var o = 0;
        return n && r < n.length && (o = n[r]), r + e + o
      }
      var hr = function () {
          function t() {}
          return t.prototype.supports = function (t) {
            return t instanceof Map || rr(t)
          }, t.prototype.create = function () {
            return new pr
          }, t
        }(),
        pr = function () {
          function t() {
            this._records = new Map, this._mapHead = null, this._appendAfter = null, this._previousMapHead = null, this._changesHead = null, this._changesTail = null, this._additionsHead = null, this._additionsTail = null, this._removalsHead = null, this._removalsTail = null
          }
          return Object.defineProperty(t.prototype, "isDirty", {
            get: function () {
              return null !== this._additionsHead || null !== this._changesHead || null !== this._removalsHead
            },
            enumerable: !0,
            configurable: !0
          }), t.prototype.forEachItem = function (t) {
            var e;
            for (e = this._mapHead; null !== e; e = e._next) t(e)
          }, t.prototype.forEachPreviousItem = function (t) {
            var e;
            for (e = this._previousMapHead; null !== e; e = e._nextPrevious) t(e)
          }, t.prototype.forEachChangedItem = function (t) {
            var e;
            for (e = this._changesHead; null !== e; e = e._nextChanged) t(e)
          }, t.prototype.forEachAddedItem = function (t) {
            var e;
            for (e = this._additionsHead; null !== e; e = e._nextAdded) t(e)
          }, t.prototype.forEachRemovedItem = function (t) {
            var e;
            for (e = this._removalsHead; null !== e; e = e._nextRemoved) t(e)
          }, t.prototype.diff = function (t) {
            if (t) {
              if (!(t instanceof Map || rr(t))) throw new Error("Error trying to diff '" + Vt(t) + "'. Only maps and objects are allowed")
            } else t = new Map;
            return this.check(t) ? this : null
          }, t.prototype.onDestroy = function () {}, t.prototype.check = function (t) {
            var e = this;
            this._reset();
            var n = this._mapHead;
            if (this._appendAfter = null, this._forEach(t, function (t, r) {
                if (n && n.key === r) e._maybeAddToChanges(n, t), e._appendAfter = n, n = n._next;
                else {
                  var o = e._getOrCreateRecordForKey(r, t);
                  n = e._insertBeforeOrAppend(n, o)
                }
              }), n) {
              n._prev && (n._prev._next = null), this._removalsHead = n;
              for (var r = n; null !== r; r = r._nextRemoved) r === this._mapHead && (this._mapHead = null), this._records.delete(r.key), r._nextRemoved = r._next, r.previousValue = r.currentValue, r.currentValue = null, r._prev = null, r._next = null
            }
            return this._changesTail && (this._changesTail._nextChanged = null), this._additionsTail && (this._additionsTail._nextAdded = null), this.isDirty
          }, t.prototype._insertBeforeOrAppend = function (t, e) {
            if (t) {
              var n = t._prev;
              return e._next = t, e._prev = n, t._prev = e, n && (n._next = e), t === this._mapHead && (this._mapHead = e), this._appendAfter = t, t
            }
            return this._appendAfter ? (this._appendAfter._next = e, e._prev = this._appendAfter) : this._mapHead = e, this._appendAfter = e, null
          }, t.prototype._getOrCreateRecordForKey = function (t, e) {
            if (this._records.has(t)) {
              var n = this._records.get(t);
              this._maybeAddToChanges(n, e);
              var r = n._prev,
                o = n._next;
              return r && (r._next = o), o && (o._prev = r), n._next = null, n._prev = null, n
            }
            var i = new fr(t);
            return this._records.set(t, i), i.currentValue = e, this._addToAdditions(i), i
          }, t.prototype._reset = function () {
            if (this.isDirty) {
              var t = void 0;
              for (this._previousMapHead = this._mapHead, t = this._previousMapHead; null !== t; t = t._next) t._nextPrevious = t._next;
              for (t = this._changesHead; null !== t; t = t._nextChanged) t.previousValue = t.currentValue;
              for (t = this._additionsHead; null != t; t = t._nextAdded) t.previousValue = t.currentValue;
              this._changesHead = this._changesTail = null, this._additionsHead = this._additionsTail = null, this._removalsHead = null
            }
          }, t.prototype._maybeAddToChanges = function (t, e) {
            Ft(e, t.currentValue) || (t.previousValue = t.currentValue, t.currentValue = e, this._addToChanges(t))
          }, t.prototype._addToAdditions = function (t) {
            null === this._additionsHead ? this._additionsHead = this._additionsTail = t : (this._additionsTail._nextAdded = t, this._additionsTail = t)
          }, t.prototype._addToChanges = function (t) {
            null === this._changesHead ? this._changesHead = this._changesTail = t : (this._changesTail._nextChanged = t, this._changesTail = t)
          }, t.prototype._forEach = function (t, e) {
            t instanceof Map ? t.forEach(e) : Object.keys(t).forEach(function (n) {
              return e(t[n], n)
            })
          }, t
        }(),
        fr = function (t) {
          this.key = t, this.previousValue = null, this.currentValue = null, this._nextPrevious = null, this._next = null, this._prev = null, this._nextAdded = null, this._nextRemoved = null, this._nextChanged = null
        },
        dr = function () {
          function t(t) {
            this.factories = t
          }
          return t.create = function (e, n) {
            if (null != n) {
              var r = n.factories.slice();
              e = e.concat(r)
            }
            return new t(e)
          }, t.extend = function (e) {
            return {
              provide: t,
              useFactory: function (n) {
                if (!n) throw new Error("Cannot extend IterableDiffers without a parent injector");
                return t.create(e, n)
              },
              deps: [
                [t, new qt, new zt]
              ]
            }
          }, t.prototype.find = function (t) {
            var e, n = this.factories.find(function (e) {
              return e.supports(t)
            });
            if (null != n) return n;
            throw new Error("Cannot find a differ supporting object '" + t + "' of type '" + ((e = t).name || typeof e) + "'")
          }, t.ngInjectableDef = _t({
            providedIn: "root",
            factory: function () {
              return new t([new or])
            }
          }), t
        }(),
        mr = function () {
          function t(t) {
            this.factories = t
          }
          return t.create = function (e, n) {
            if (n) {
              var r = n.factories.slice();
              e = e.concat(r)
            }
            return new t(e)
          }, t.extend = function (e) {
            return {
              provide: t,
              useFactory: function (n) {
                if (!n) throw new Error("Cannot extend KeyValueDiffers without a parent injector");
                return t.create(e, n)
              },
              deps: [
                [t, new qt, new zt]
              ]
            }
          }, t.prototype.find = function (t) {
            var e = this.factories.find(function (e) {
              return e.supports(t)
            });
            if (e) return e;
            throw new Error("Cannot find a differ supporting object '" + t + "'")
          }, t
        }(),
        yr = [new hr],
        gr = new dr([new or]),
        vr = new mr(yr),
        _r = On(null, "core", [{
          provide: Ue,
          useValue: "unknown"
        }, {
          provide: In,
          deps: [Yt]
        }, {
          provide: Cn,
          deps: []
        }, {
          provide: Ge,
          deps: []
        }]),
        br = new bt("LocaleId");

      function wr() {
        return gr
      }

      function Cr() {
        return vr
      }

      function Er(t) {
        return t || "en-US"
      }
      var Sr = function (t) {},
        xr = function () {
          function t(t) {
            if (this.defaultDoc = t, this.inertDocument = this.defaultDoc.implementation.createHTMLDocument("sanitization-inert"), this.inertBodyElement = this.inertDocument.body, null == this.inertBodyElement) {
              var e = this.inertDocument.createElement("html");
              this.inertDocument.appendChild(e), this.inertBodyElement = this.inertDocument.createElement("body"), e.appendChild(this.inertBodyElement)
            }
            this.inertBodyElement.innerHTML = '<svg><g onload="this.parentNode.remove()"></g></svg>', !this.inertBodyElement.querySelector || this.inertBodyElement.querySelector("svg") ? (this.inertBodyElement.innerHTML = '<svg><p><style><img src="</style><img src=x onerror=alert(1)//">', this.getInertBodyElement = this.inertBodyElement.querySelector && this.inertBodyElement.querySelector("svg img") && function () {
              try {
                return !!window.DOMParser
              } catch (t) {
                return !1
              }
            }() ? this.getInertBodyElement_DOMParser : this.getInertBodyElement_InertDocument) : this.getInertBodyElement = this.getInertBodyElement_XHR
          }
          return t.prototype.getInertBodyElement_XHR = function (t) {
            t = "<body><remove></remove>" + t + "</body>";
            try {
              t = encodeURI(t)
            } catch (t) {
              return null
            }
            var e = new XMLHttpRequest;
            e.responseType = "document", e.open("GET", "data:text/html;charset=utf-8," + t, !1), e.send(null);
            var n = e.response.body;
            return n.removeChild(n.firstChild), n
          }, t.prototype.getInertBodyElement_DOMParser = function (t) {
            t = "<body><remove></remove>" + t + "</body>";
            try {
              var e = (new window.DOMParser).parseFromString(t, "text/html").body;
              return e.removeChild(e.firstChild), e
            } catch (t) {
              return null
            }
          }, t.prototype.getInertBodyElement_InertDocument = function (t) {
            var e = this.inertDocument.createElement("template");
            return "content" in e ? (e.innerHTML = t, e) : (this.inertBodyElement.innerHTML = t, this.defaultDoc.documentMode && this.stripCustomNsAttrs(this.inertBodyElement), this.inertBodyElement)
          }, t.prototype.stripCustomNsAttrs = function (t) {
            for (var e = t.attributes, n = e.length - 1; 0 < n; n--) {
              var r = e.item(n).name;
              "xmlns:ns1" !== r && 0 !== r.indexOf("ns1:") || t.removeAttribute(r)
            }
            for (var o = t.firstChild; o;) o.nodeType === Node.ELEMENT_NODE && this.stripCustomNsAttrs(o), o = o.nextSibling
          }, t
        }(),
        kr = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
        Pr = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i;

      function Tr(t) {
        return (t = String(t)).match(kr) || t.match(Pr) ? t : (Pn() && console.warn("WARNING: sanitizing unsafe URL value " + t + " (see http://g.co/ng/security#xss)"), "unsafe:" + t)
      }

      function Or(t) {
        var e, n, r = {};
        try {
          for (var o = u(t.split(",")), i = o.next(); !i.done; i = o.next()) r[i.value] = !0
        } catch (t) {
          e = {
            error: t
          }
        } finally {
          try {
            i && !i.done && (n = o.return) && n.call(o)
          } finally {
            if (e) throw e.error
          }
        }
        return r
      }

      function Ar() {
        for (var t, e, n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
        var o = {};
        try {
          for (var i = u(n), a = i.next(); !a.done; a = i.next()) {
            var s = a.value;
            for (var l in s) s.hasOwnProperty(l) && (o[l] = !0)
          }
        } catch (e) {
          t = {
            error: e
          }
        } finally {
          try {
            a && !a.done && (e = i.return) && e.call(i)
          } finally {
            if (t) throw t.error
          }
        }
        return o
      }
      var Ir, Rr = Or("area,br,col,hr,img,wbr"),
        Dr = Or("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),
        Nr = Or("rp,rt"),
        Mr = Ar(Nr, Dr),
        jr = Ar(Rr, Ar(Dr, Or("address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul")), Ar(Nr, Or("a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video")), Mr),
        Fr = Or("background,cite,href,itemtype,longdesc,poster,src,xlink:href"),
        Vr = Or("srcset"),
        Lr = Ar(Fr, Vr, Or("abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width")),
        Hr = function () {
          function t() {
            this.sanitizedSomething = !1, this.buf = []
          }
          return t.prototype.sanitizeChildren = function (t) {
            for (var e = t.firstChild; e;)
              if (e.nodeType === Node.ELEMENT_NODE ? this.startElement(e) : e.nodeType === Node.TEXT_NODE ? this.chars(e.nodeValue) : this.sanitizedSomething = !0, e.firstChild) e = e.firstChild;
              else
                for (; e;) {
                  e.nodeType === Node.ELEMENT_NODE && this.endElement(e);
                  var n = this.checkClobberedElement(e, e.nextSibling);
                  if (n) {
                    e = n;
                    break
                  }
                  e = this.checkClobberedElement(e, e.parentNode)
                }
            return this.buf.join("")
          }, t.prototype.startElement = function (t) {
            var e = t.nodeName.toLowerCase();
            if (jr.hasOwnProperty(e)) {
              this.buf.push("<"), this.buf.push(e);
              for (var n, r = t.attributes, o = 0; o < r.length; o++) {
                var i = r.item(o),
                  a = i.name,
                  s = a.toLowerCase();
                if (Lr.hasOwnProperty(s)) {
                  var l = i.value;
                  Fr[s] && (l = Tr(l)), Vr[s] && (n = l, l = (n = String(n)).split(",").map(function (t) {
                    return Tr(t.trim())
                  }).join(", ")), this.buf.push(" ", a, '="', Ur(l), '"')
                } else this.sanitizedSomething = !0
              }
              this.buf.push(">")
            } else this.sanitizedSomething = !0
          }, t.prototype.endElement = function (t) {
            var e = t.nodeName.toLowerCase();
            jr.hasOwnProperty(e) && !Rr.hasOwnProperty(e) && (this.buf.push("</"), this.buf.push(e), this.buf.push(">"))
          }, t.prototype.chars = function (t) {
            this.buf.push(Ur(t))
          }, t.prototype.checkClobberedElement = function (t, e) {
            if (e && (t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_CONTAINED_BY) === Node.DOCUMENT_POSITION_CONTAINED_BY) throw new Error("Failed to sanitize html because the element is clobbered: " + t.outerHTML);
            return e
          }, t
        }(),
        Br = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
        zr = /([^\#-~ |!])/g;

      function Ur(t) {
        return t.replace(/&/g, "&amp;").replace(Br, function (t) {
          return "&#" + (1024 * (t.charCodeAt(0) - 55296) + (t.charCodeAt(1) - 56320) + 65536) + ";"
        }).replace(zr, function (t) {
          return "&#" + t.charCodeAt(0) + ";"
        }).replace(/</g, "&lt;").replace(/>/g, "&gt;")
      }

      function qr(t) {
        return "content" in t && function (t) {
          return t.nodeType === Node.ELEMENT_NODE && "TEMPLATE" === t.nodeName
        }(t) ? t.content : null
      }
      var Gr = new RegExp("^([-,.\"'%_!# a-zA-Z0-9]+|(?:(?:matrix|translate|scale|rotate|skew|perspective)(?:X|Y|3d)?|(?:rgb|hsl)a?|(?:repeating-)?(?:linear|radial)-gradient|(?:calc|attr))\\([-0-9.%, #a-zA-Z]+\\))$", "g"),
        Qr = /^url\(([^)]+)\)$/,
        Wr = function (t) {
          return t[t.NONE = 0] = "NONE", t[t.HTML = 1] = "HTML", t[t.STYLE = 2] = "STYLE", t[t.SCRIPT = 3] = "SCRIPT", t[t.URL = 4] = "URL", t[t.RESOURCE_URL = 5] = "RESOURCE_URL", t
        }({}),
        Zr = function () {};

      function Kr(t, e, n) {
        var r = t.state,
          o = 1792 & r;
        return o === e ? (t.state = -1793 & r | n, t.initIndex = -1, !0) : o === n
      }

      function $r(t, e, n) {
        return (1792 & t.state) === e && t.initIndex <= n && (t.initIndex = n + 1, !0)
      }

      function Yr(t, e) {
        return t.nodes[e]
      }

      function Xr(t, e) {
        return t.nodes[e]
      }

      function Jr(t, e) {
        return t.nodes[e]
      }

      function to(t, e) {
        return t.nodes[e]
      }

      function eo(t, e) {
        return t.nodes[e]
      }
      var no = {
        setCurrentNode: void 0,
        createRootView: void 0,
        createEmbeddedView: void 0,
        createComponentView: void 0,
        createNgModuleRef: void 0,
        overrideProvider: void 0,
        overrideComponentView: void 0,
        clearOverrides: void 0,
        checkAndUpdateView: void 0,
        checkNoChangesView: void 0,
        destroyView: void 0,
        resolveDep: void 0,
        createDebugContext: void 0,
        handleEvent: void 0,
        updateDirectives: void 0,
        updateRenderer: void 0,
        dirtyParentQueries: void 0
      };

      function ro(t, e, n, r) {
        var o = "ExpressionChangedAfterItHasBeenCheckedError: Expression has changed after it was checked. Previous value: '" + e + "'. Current value: '" + n + "'.";
        return r && (o += " It seems like the view has been created after its parent and its children have been dirty checked. Has it been created in a change detection hook ?"),
          function (t, e) {
            var n = new Error(t);
            return oo(n, e), n
          }(o, t)
      }

      function oo(t, e) {
        t[ge] = e, t[_e] = e.logError.bind(e)
      }

      function io(t) {
        return new Error("ViewDestroyedError: Attempt to use a destroyed view: " + t)
      }
      var ao = function () {},
        so = new Map;

      function lo(t) {
        var e = so.get(t);
        return e || (e = Vt(t) + "_" + so.size, so.set(t, e)), e
      }

      function uo(t, e, n, r) {
        if (tr.isWrapped(r)) {
          r = tr.unwrap(r);
          var o = t.def.nodes[e].bindingIndex + n,
            i = tr.unwrap(t.oldValues[o]);
          t.oldValues[o] = new tr(i)
        }
        return r
      }
      var co = "$$undefined",
        ho = "$$empty";

      function po(t) {
        return {
          id: co,
          styles: t.styles,
          encapsulation: t.encapsulation,
          data: t.data
        }
      }
      var fo = 0;

      function mo(t, e, n, r) {
        return !(!(2 & t.state) && Ft(t.oldValues[e.bindingIndex + n], r))
      }

      function yo(t, e, n, r) {
        return !!mo(t, e, n, r) && (t.oldValues[e.bindingIndex + n] = r, !0)
      }

      function go(t, e, n, r) {
        var o = t.oldValues[e.bindingIndex + n];
        if (1 & t.state || !Jn(o, r)) {
          var i = e.bindings[n].name;
          throw ro(no.createDebugContext(t, e.nodeIndex), i + ": " + o, i + ": " + r, 0 != (1 & t.state))
        }
      }

      function vo(t) {
        for (var e = t; e;) 2 & e.def.flags && (e.state |= 8), e = e.viewContainerParent || e.parent
      }

      function _o(t, e) {
        for (var n = t; n && n !== e;) n.state |= 64, n = n.viewContainerParent || n.parent
      }

      function bo(t, e, n, r) {
        try {
          return vo(33554432 & t.def.nodes[e].flags ? Xr(t, e).componentView : t), no.handleEvent(t, e, n, r)
        } catch (e) {
          t.root.errorHandler.handleError(e)
        }
      }

      function wo(t) {
        return t.parent ? Xr(t.parent, t.parentNodeDef.nodeIndex) : null
      }

      function Co(t) {
        return t.parent ? t.parentNodeDef.parent : null
      }

      function Eo(t, e) {
        switch (201347067 & e.flags) {
          case 1:
            return Xr(t, e.nodeIndex).renderElement;
          case 2:
            return Yr(t, e.nodeIndex).renderText
        }
      }

      function So(t) {
        return !!t.parent && !!(32768 & t.parentNodeDef.flags)
      }

      function xo(t) {
        return !(!t.parent || 32768 & t.parentNodeDef.flags)
      }

      function ko(t) {
        return 1 << t % 32
      }

      function Po(t) {
        var e = {},
          n = 0,
          r = {};
        return t && t.forEach(function (t) {
          var o = c(t, 2),
            i = o[0],
            a = o[1];
          "number" == typeof i ? (e[i] = a, n |= ko(i)) : r[i] = a
        }), {
          matchedQueries: e,
          references: r,
          matchedQueryIds: n
        }
      }

      function To(t, e) {
        return t.map(function (t) {
          var n, r, o;
          return Array.isArray(t) ? (o = (n = c(t, 2))[0], r = n[1]) : (o = 0, r = t), r && ("function" == typeof r || "object" == typeof r) && e && Object.defineProperty(r, Qt, {
            value: e,
            configurable: !0
          }), {
            flags: o,
            token: r,
            tokenKey: lo(r)
          }
        })
      }

      function Oo(t, e, n) {
        var r = n.renderParent;
        return r ? 0 == (1 & r.flags) || 0 == (33554432 & r.flags) || r.element.componentRendererType && r.element.componentRendererType.encapsulation === me.Native ? Xr(t, n.renderParent.nodeIndex).renderElement : void 0 : e
      }
      var Ao = new WeakMap;

      function Io(t) {
        var e = Ao.get(t);
        return e || ((e = t(function () {
          return ao
        })).factory = t, Ao.set(t, e)), e
      }

      function Ro(t, e, n, r, o) {
        3 === e && (n = t.renderer.parentNode(Eo(t, t.def.lastRenderRootNode))), Do(t, e, 0, t.def.nodes.length - 1, n, r, o)
      }

      function Do(t, e, n, r, o, i, a) {
        for (var s = n; s <= r; s++) {
          var l = t.def.nodes[s];
          11 & l.flags && Mo(t, l, e, o, i, a), s += l.childCount
        }
      }

      function No(t, e, n, r, o, i) {
        for (var a = t; a && !So(a);) a = a.parent;
        for (var s = a.parent, l = Co(a), u = l.nodeIndex + l.childCount, c = l.nodeIndex + 1; c <= u; c++) {
          var h = s.def.nodes[c];
          h.ngContentIndex === e && Mo(s, h, n, r, o, i), c += h.childCount
        }
        if (!s.parent) {
          var p = t.root.projectableNodes[e];
          if (p)
            for (c = 0; c < p.length; c++) jo(t, p[c], n, r, o, i)
        }
      }

      function Mo(t, e, n, r, o, i) {
        if (8 & e.flags) No(t, e.ngContent.index, n, r, o, i);
        else {
          var a = Eo(t, e);
          if (3 === n && 33554432 & e.flags && 48 & e.bindingFlags ? (16 & e.bindingFlags && jo(t, a, n, r, o, i), 32 & e.bindingFlags && jo(Xr(t, e.nodeIndex).componentView, a, n, r, o, i)) : jo(t, a, n, r, o, i), 16777216 & e.flags)
            for (var s = Xr(t, e.nodeIndex).viewContainer._embeddedViews, l = 0; l < s.length; l++) Ro(s[l], n, r, o, i);
          1 & e.flags && !e.element.name && Do(t, n, e.nodeIndex + 1, e.nodeIndex + e.childCount, r, o, i)
        }
      }

      function jo(t, e, n, r, o, i) {
        var a = t.renderer;
        switch (n) {
          case 1:
            a.appendChild(r, e);
            break;
          case 2:
            a.insertBefore(r, e, o);
            break;
          case 3:
            a.removeChild(r, e);
            break;
          case 0:
            i.push(e)
        }
      }
      var Fo = /^:([^:]+):(.+)$/;

      function Vo(t) {
        if (":" === t[0]) {
          var e = t.match(Fo);
          return [e[1], e[2]]
        }
        return ["", t]
      }

      function Lo(t) {
        for (var e = 0, n = 0; n < t.length; n++) e |= t[n].flags;
        return e
      }

      function Ho(t, e, n, r, o, i, a, s, l, u, c, h, p, f, d, m, y, g, v, _) {
        switch (t) {
          case 1:
            return e + Bo(n) + r;
          case 2:
            return e + Bo(n) + r + Bo(o) + i;
          case 3:
            return e + Bo(n) + r + Bo(o) + i + Bo(a) + s;
          case 4:
            return e + Bo(n) + r + Bo(o) + i + Bo(a) + s + Bo(l) + u;
          case 5:
            return e + Bo(n) + r + Bo(o) + i + Bo(a) + s + Bo(l) + u + Bo(c) + h;
          case 6:
            return e + Bo(n) + r + Bo(o) + i + Bo(a) + s + Bo(l) + u + Bo(c) + h + Bo(p) + f;
          case 7:
            return e + Bo(n) + r + Bo(o) + i + Bo(a) + s + Bo(l) + u + Bo(c) + h + Bo(p) + f + Bo(d) + m;
          case 8:
            return e + Bo(n) + r + Bo(o) + i + Bo(a) + s + Bo(l) + u + Bo(c) + h + Bo(p) + f + Bo(d) + m + Bo(y) + g;
          case 9:
            return e + Bo(n) + r + Bo(o) + i + Bo(a) + s + Bo(l) + u + Bo(c) + h + Bo(p) + f + Bo(d) + m + Bo(y) + g + Bo(v) + _;
          default:
            throw new Error("Does not support more than 9 expressions")
        }
      }

      function Bo(t) {
        return null != t ? t.toString() : ""
      }

      function zo(t, e, n, r, o, i) {
        t |= 1;
        var a = Po(e);
        return {
          nodeIndex: -1,
          parent: null,
          renderParent: null,
          bindingIndex: -1,
          outputIndex: -1,
          flags: t,
          checkIndex: -1,
          childFlags: 0,
          directChildFlags: 0,
          childMatchedQueries: 0,
          matchedQueries: a.matchedQueries,
          matchedQueryIds: a.matchedQueryIds,
          references: a.references,
          ngContentIndex: n,
          childCount: r,
          bindings: [],
          bindingFlags: 0,
          outputs: [],
          element: {
            ns: null,
            name: null,
            attrs: null,
            template: i ? Io(i) : null,
            componentProvider: null,
            componentView: null,
            componentRendererType: null,
            publicProviders: null,
            allProviders: null,
            handleEvent: o || ao
          },
          provider: null,
          text: null,
          query: null,
          ngContent: null
        }
      }

      function Uo(t, e, n, r, o, i, a, s, l, u, h, p) {
        var f;
        void 0 === a && (a = []), u || (u = ao);
        var d = Po(n),
          m = d.matchedQueries,
          y = d.references,
          g = d.matchedQueryIds,
          v = null,
          _ = null;
        i && (v = (f = c(Vo(i), 2))[0], _ = f[1]), s = s || [];
        for (var b = new Array(s.length), w = 0; w < s.length; w++) {
          var C = c(s[w], 3),
            E = C[0],
            S = C[2],
            x = c(Vo(C[1]), 2),
            k = x[0],
            P = x[1],
            T = void 0,
            O = void 0;
          switch (15 & E) {
            case 4:
              O = S;
              break;
            case 1:
            case 8:
              T = S
          }
          b[w] = {
            flags: E,
            ns: k,
            name: P,
            nonMinifiedName: P,
            securityContext: T,
            suffix: O
          }
        }
        l = l || [];
        var A = new Array(l.length);
        for (w = 0; w < l.length; w++) {
          var I = c(l[w], 2);
          A[w] = {
            type: 0,
            target: I[0],
            eventName: I[1],
            propName: null
          }
        }
        var R = (a = a || []).map(function (t) {
          var e = c(t, 2),
            n = e[1],
            r = c(Vo(e[0]), 2);
          return [r[0], r[1], n]
        });
        return p = function (t) {
          if (t && t.id === co) {
            var e = null != t.encapsulation && t.encapsulation !== me.None || t.styles.length || Object.keys(t.data).length;
            t.id = e ? "c" + fo++ : ho
          }
          return t && t.id === ho && (t = null), t || null
        }(p), h && (e |= 33554432), {
          nodeIndex: -1,
          parent: null,
          renderParent: null,
          bindingIndex: -1,
          outputIndex: -1,
          checkIndex: t,
          flags: e |= 1,
          childFlags: 0,
          directChildFlags: 0,
          childMatchedQueries: 0,
          matchedQueries: m,
          matchedQueryIds: g,
          references: y,
          ngContentIndex: r,
          childCount: o,
          bindings: b,
          bindingFlags: Lo(b),
          outputs: A,
          element: {
            ns: v,
            name: _,
            attrs: R,
            template: null,
            componentProvider: null,
            componentView: h || null,
            componentRendererType: p,
            publicProviders: null,
            allProviders: null,
            handleEvent: u || ao
          },
          provider: null,
          text: null,
          query: null,
          ngContent: null
        }
      }

      function qo(t, e, n) {
        var r, o = n.element,
          i = t.root.selectorOrNode,
          a = t.renderer;
        if (t.parent || !i) {
          r = o.name ? a.createElement(o.name, o.ns) : a.createComment("");
          var s = Oo(t, e, n);
          s && a.appendChild(s, r)
        } else r = a.selectRootElement(i);
        if (o.attrs)
          for (var l = 0; l < o.attrs.length; l++) {
            var u = c(o.attrs[l], 3);
            a.setAttribute(r, u[1], u[2], u[0])
          }
        return r
      }

      function Go(t, e, n, r) {
        for (var o = 0; o < n.outputs.length; o++) {
          var i = n.outputs[o],
            a = Qo(t, n.nodeIndex, (h = i.eventName, (c = i.target) ? c + ":" + h : h)),
            s = i.target,
            l = t;
          "component" === i.target && (s = null, l = e);
          var u = l.renderer.listen(s || r, i.eventName, a);
          t.disposables[n.outputIndex + o] = u
        }
        var c, h
      }

      function Qo(t, e, n) {
        return function (r) {
          return bo(t, e, n, r)
        }
      }

      function Wo(t, e, n, r) {
        if (!yo(t, e, n, r)) return !1;
        var o = e.bindings[n],
          i = Xr(t, e.nodeIndex),
          a = i.renderElement,
          s = o.name;
        switch (15 & o.flags) {
          case 1:
            ! function (t, e, n, r, o, i) {
              var a = e.securityContext,
                s = a ? t.root.sanitizer.sanitize(a, i) : i;
              s = null != s ? s.toString() : null;
              var l = t.renderer;
              null != i ? l.setAttribute(n, o, s, r) : l.removeAttribute(n, o, r)
            }(t, o, a, o.ns, s, r);
            break;
          case 2:
            ! function (t, e, n, r) {
              var o = t.renderer;
              r ? o.addClass(e, n) : o.removeClass(e, n)
            }(t, a, s, r);
            break;
          case 4:
            ! function (t, e, n, r, o) {
              var i = t.root.sanitizer.sanitize(Wr.STYLE, o);
              if (null != i) {
                i = i.toString();
                var a = e.suffix;
                null != a && (i += a)
              } else i = null;
              var s = t.renderer;
              null != i ? s.setStyle(n, r, i) : s.removeStyle(n, r)
            }(t, o, a, s, r);
            break;
          case 8:
            ! function (t, e, n, r, o) {
              var i = e.securityContext,
                a = i ? t.root.sanitizer.sanitize(i, o) : o;
              t.renderer.setProperty(n, r, a)
            }(33554432 & e.flags && 32 & o.flags ? i.componentView : t, o, a, s, r)
        }
        return !0
      }
      var Zo = new Object,
        Ko = lo(Yt),
        $o = lo(Kt),
        Yo = lo(an);

      function Xo(t, e, n, r) {
        return n = Ht(n), {
          index: -1,
          deps: To(r, Vt(e)),
          flags: t,
          token: e,
          value: n
        }
      }

      function Jo(t, e, n) {
        void 0 === n && (n = Yt.THROW_IF_NOT_FOUND);
        var r, o, i = pe(t);
        try {
          if (8 & e.flags) return e.token;
          if (2 & e.flags && (n = null), 1 & e.flags) return t._parent.get(e.token, n);
          var a = e.tokenKey;
          switch (a) {
            case Ko:
            case $o:
            case Yo:
              return t
          }
          var s = t._def.providersByKey[a];
          if (s) {
            var l = t._providers[s.index];
            return void 0 === l && (l = t._providers[s.index] = ti(t, s)), l === Zo ? void 0 : l
          }
          if (e.token.ngInjectableDef && (r = t, null != (o = e.token.ngInjectableDef).providedIn && (function (t, e) {
              return t._def.modules.indexOf(o.providedIn) > -1
            }(r) || "root" === o.providedIn && r._def.isRoot))) {
            var u = t._providers.length;
            return t._def.providersByKey[e.tokenKey] = {
              flags: 5120,
              value: e.token.ngInjectableDef.factory,
              deps: [],
              index: u,
              token: e.token
            }, t._providers[u] = Zo, t._providers[u] = ti(t, t._def.providersByKey[e.tokenKey])
          }
          return 4 & e.flags ? n : t._parent.get(e.token, n)
        } finally {
          pe(i)
        }
      }

      function ti(t, e) {
        var n;
        switch (201347067 & e.flags) {
          case 512:
            n = function (t, e, n) {
              var r = n.length;
              switch (r) {
                case 0:
                  return new e;
                case 1:
                  return new e(Jo(t, n[0]));
                case 2:
                  return new e(Jo(t, n[0]), Jo(t, n[1]));
                case 3:
                  return new e(Jo(t, n[0]), Jo(t, n[1]), Jo(t, n[2]));
                default:
                  for (var o = new Array(r), i = 0; i < r; i++) o[i] = Jo(t, n[i]);
                  return new(e.bind.apply(e, h([void 0], o)))
              }
            }(t, e.value, e.deps);
            break;
          case 1024:
            n = function (t, e, n) {
              var r = n.length;
              switch (r) {
                case 0:
                  return e();
                case 1:
                  return e(Jo(t, n[0]));
                case 2:
                  return e(Jo(t, n[0]), Jo(t, n[1]));
                case 3:
                  return e(Jo(t, n[0]), Jo(t, n[1]), Jo(t, n[2]));
                default:
                  for (var o = Array(r), i = 0; i < r; i++) o[i] = Jo(t, n[i]);
                  return e.apply(void 0, h(o))
              }
            }(t, e.value, e.deps);
            break;
          case 2048:
            n = Jo(t, e.deps[0]);
            break;
          case 256:
            n = e.value
        }
        return n === Zo || null == n || "object" != typeof n || 131072 & e.flags || "function" != typeof n.ngOnDestroy || (e.flags |= 131072), void 0 === n ? Zo : n
      }

      function ei(t, e) {
        var n = t.viewContainer._embeddedViews;
        if ((null == e || e >= n.length) && (e = n.length - 1), e < 0) return null;
        var r = n[e];
        return r.viewContainerParent = null, ii(n, e), no.dirtyParentQueries(r), ri(r), r
      }

      function ni(t, e, n) {
        var r = e ? Eo(e, e.def.lastRenderRootNode) : t.renderElement;
        Ro(n, 2, n.renderer.parentNode(r), n.renderer.nextSibling(r), void 0)
      }

      function ri(t) {
        Ro(t, 3, null, null, void 0)
      }

      function oi(t, e, n) {
        e >= t.length ? t.push(n) : t.splice(e, 0, n)
      }

      function ii(t, e) {
        e >= t.length - 1 ? t.pop() : t.splice(e, 1)
      }
      var ai = new Object;

      function si(t, e, n, r, o, i) {
        return new li(t, e, n, r, o, i)
      }
      var li = function (t) {
          function e(e, n, r, o, i, a) {
            var s = t.call(this) || this;
            return s.selector = e, s.componentType = n, s._inputs = o, s._outputs = i, s.ngContentSelectors = a, s.viewDefFactory = r, s
          }
          return o(e, t), Object.defineProperty(e.prototype, "inputs", {
            get: function () {
              var t = [],
                e = this._inputs;
              for (var n in e) t.push({
                propName: n,
                templateName: e[n]
              });
              return t
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(e.prototype, "outputs", {
            get: function () {
              var t = [];
              for (var e in this._outputs) t.push({
                propName: e,
                templateName: this._outputs[e]
              });
              return t
            },
            enumerable: !0,
            configurable: !0
          }), e.prototype.create = function (t, e, n, r) {
            if (!r) throw new Error("ngModule should be provided");
            var o = Io(this.viewDefFactory),
              i = o.nodes[0].element.componentProvider.nodeIndex,
              a = no.createRootView(t, e || [], n, o, r, ai),
              s = Jr(a, i).instance;
            return n && a.renderer.setAttribute(Xr(a, 0).renderElement, "ng-version", ye.full), new ui(a, new fi(a), s)
          }, e
        }($e),
        ui = function (t) {
          function e(e, n, r) {
            var o = t.call(this) || this;
            return o._view = e, o._viewRef = n, o._component = r, o._elDef = o._view.def.nodes[0], o.hostView = n, o.changeDetectorRef = n, o.instance = r, o
          }
          return o(e, t), Object.defineProperty(e.prototype, "location", {
            get: function () {
              return new Vn(Xr(this._view, this._elDef.nodeIndex).renderElement)
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(e.prototype, "injector", {
            get: function () {
              return new gi(this._view, this._elDef)
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(e.prototype, "componentType", {
            get: function () {
              return this._component.constructor
            },
            enumerable: !0,
            configurable: !0
          }), e.prototype.destroy = function () {
            this._viewRef.destroy()
          }, e.prototype.onDestroy = function (t) {
            this._viewRef.onDestroy(t)
          }, e
        }(Ke);

      function ci(t, e, n) {
        return new hi(t, e, n)
      }
      var hi = function () {
        function t(t, e, n) {
          this._view = t, this._elDef = e, this._data = n, this._embeddedViews = []
        }
        return Object.defineProperty(t.prototype, "element", {
          get: function () {
            return new Vn(this._data.renderElement)
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(t.prototype, "injector", {
          get: function () {
            return new gi(this._view, this._elDef)
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(t.prototype, "parentInjector", {
          get: function () {
            for (var t = this._view, e = this._elDef.parent; !e && t;) e = Co(t), t = t.parent;
            return t ? new gi(t, e) : new gi(this._view, null)
          },
          enumerable: !0,
          configurable: !0
        }), t.prototype.clear = function () {
          for (var t = this._embeddedViews.length - 1; t >= 0; t--) {
            var e = ei(this._data, t);
            no.destroyView(e)
          }
        }, t.prototype.get = function (t) {
          var e = this._embeddedViews[t];
          if (e) {
            var n = new fi(e);
            return n.attachToViewContainerRef(this), n
          }
          return null
        }, Object.defineProperty(t.prototype, "length", {
          get: function () {
            return this._embeddedViews.length
          },
          enumerable: !0,
          configurable: !0
        }), t.prototype.createEmbeddedView = function (t, e, n) {
          var r = t.createEmbeddedView(e || {});
          return this.insert(r, n), r
        }, t.prototype.createComponent = function (t, e, n, r, o) {
          var i = n || this.parentInjector;
          o || t instanceof on || (o = i.get(an));
          var a = t.create(i, r, void 0, o);
          return this.insert(a.hostView, e), a
        }, t.prototype.insert = function (t, e) {
          if (t.destroyed) throw new Error("Cannot insert a destroyed View in a ViewContainer!");
          var n, r, o, i, a = t;
          return o = a._view, i = (n = this._data).viewContainer._embeddedViews, null !== (r = e) && void 0 !== r || (r = i.length), o.viewContainerParent = this._view, oi(i, r, o),
            function (t, e) {
              var n = wo(e);
              if (n && n !== t && !(16 & e.state)) {
                e.state |= 16;
                var r = n.template._projectedViews;
                r || (r = n.template._projectedViews = []), r.push(e),
                  function (t, n) {
                    if (!(4 & n.flags)) {
                      e.parent.def.nodeFlags |= 4, n.flags |= 4;
                      for (var r = n.parent; r;) r.childFlags |= 4, r = r.parent
                    }
                  }(0, e.parentNodeDef)
              }
            }(n, o), no.dirtyParentQueries(o), ni(n, r > 0 ? i[r - 1] : null, o), a.attachToViewContainerRef(this), t
        }, t.prototype.move = function (t, e) {
          if (t.destroyed) throw new Error("Cannot move a destroyed View in a ViewContainer!");
          var n, r, o, i, a, s = this._embeddedViews.indexOf(t._view);
          return o = e, a = (i = (n = this._data).viewContainer._embeddedViews)[r = s], ii(i, r), null == o && (o = i.length), oi(i, o, a), no.dirtyParentQueries(a), ri(a), ni(n, o > 0 ? i[o - 1] : null, a), t
        }, t.prototype.indexOf = function (t) {
          return this._embeddedViews.indexOf(t._view)
        }, t.prototype.remove = function (t) {
          var e = ei(this._data, t);
          e && no.destroyView(e)
        }, t.prototype.detach = function (t) {
          var e = ei(this._data, t);
          return e ? new fi(e) : null
        }, t
      }();

      function pi(t) {
        return new fi(t)
      }
      var fi = function () {
        function t(t) {
          this._view = t, this._viewContainerRef = null, this._appRef = null
        }
        return Object.defineProperty(t.prototype, "rootNodes", {
          get: function () {
            return Ro(this._view, 0, void 0, void 0, t = []), t;
            var t
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(t.prototype, "context", {
          get: function () {
            return this._view.context
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(t.prototype, "destroyed", {
          get: function () {
            return 0 != (128 & this._view.state)
          },
          enumerable: !0,
          configurable: !0
        }), t.prototype.markForCheck = function () {
          vo(this._view)
        }, t.prototype.detach = function () {
          this._view.state &= -5
        }, t.prototype.detectChanges = function () {
          var t = this._view.root.rendererFactory;
          t.begin && t.begin();
          try {
            no.checkAndUpdateView(this._view)
          } finally {
            t.end && t.end()
          }
        }, t.prototype.checkNoChanges = function () {
          no.checkNoChangesView(this._view)
        }, t.prototype.reattach = function () {
          this._view.state |= 4
        }, t.prototype.onDestroy = function (t) {
          this._view.disposables || (this._view.disposables = []), this._view.disposables.push(t)
        }, t.prototype.destroy = function () {
          this._appRef ? this._appRef.detachView(this) : this._viewContainerRef && this._viewContainerRef.detach(this._viewContainerRef.indexOf(this)), no.destroyView(this._view)
        }, t.prototype.detachFromAppRef = function () {
          this._appRef = null, ri(this._view), no.dirtyParentQueries(this._view)
        }, t.prototype.attachToAppRef = function (t) {
          if (this._viewContainerRef) throw new Error("This view is already attached to a ViewContainer!");
          this._appRef = t
        }, t.prototype.attachToViewContainerRef = function (t) {
          if (this._appRef) throw new Error("This view is already attached directly to the ApplicationRef!");
          this._viewContainerRef = t
        }, t
      }();

      function di(t, e) {
        return new mi(t, e)
      }
      var mi = function (t) {
        function e(e, n) {
          var r = t.call(this) || this;
          return r._parentView = e, r._def = n, r
        }
        return o(e, t), e.prototype.createEmbeddedView = function (t) {
          return new fi(no.createEmbeddedView(this._parentView, this._def, this._def.element.template, t))
        }, Object.defineProperty(e.prototype, "elementRef", {
          get: function () {
            return new Vn(Xr(this._parentView, this._def.nodeIndex).renderElement)
          },
          enumerable: !0,
          configurable: !0
        }), e
      }(Gn);

      function yi(t, e) {
        return new gi(t, e)
      }
      var gi = function () {
        function t(t, e) {
          this.view = t, this.elDef = e
        }
        return t.prototype.get = function (t, e) {
          return void 0 === e && (e = Yt.THROW_IF_NOT_FOUND), no.resolveDep(this.view, this.elDef, !!this.elDef && 0 != (33554432 & this.elDef.flags), {
            flags: 0,
            token: t,
            tokenKey: lo(t)
          }, e)
        }, t
      }();

      function vi(t, e) {
        var n = t.def.nodes[e];
        if (1 & n.flags) {
          var r = Xr(t, n.nodeIndex);
          return n.element.template ? r.template : r.renderElement
        }
        if (2 & n.flags) return Yr(t, n.nodeIndex).renderText;
        if (20240 & n.flags) return Jr(t, n.nodeIndex).instance;
        throw new Error("Illegal state: read nodeValue for node index " + e)
      }

      function _i(t) {
        return new bi(t.renderer)
      }
      var bi = function () {
        function t(t) {
          this.delegate = t
        }
        return t.prototype.selectRootElement = function (t) {
          return this.delegate.selectRootElement(t)
        }, t.prototype.createElement = function (t, e) {
          var n = c(Vo(e), 2),
            r = this.delegate.createElement(n[1], n[0]);
          return t && this.delegate.appendChild(t, r), r
        }, t.prototype.createViewRoot = function (t) {
          return t
        }, t.prototype.createTemplateAnchor = function (t) {
          var e = this.delegate.createComment("");
          return t && this.delegate.appendChild(t, e), e
        }, t.prototype.createText = function (t, e) {
          var n = this.delegate.createText(e);
          return t && this.delegate.appendChild(t, n), n
        }, t.prototype.projectNodes = function (t, e) {
          for (var n = 0; n < e.length; n++) this.delegate.appendChild(t, e[n])
        }, t.prototype.attachViewAfter = function (t, e) {
          for (var n = this.delegate.parentNode(t), r = this.delegate.nextSibling(t), o = 0; o < e.length; o++) this.delegate.insertBefore(n, e[o], r)
        }, t.prototype.detachView = function (t) {
          for (var e = 0; e < t.length; e++) {
            var n = t[e],
              r = this.delegate.parentNode(n);
            this.delegate.removeChild(r, n)
          }
        }, t.prototype.destroyView = function (t, e) {
          for (var n = 0; n < e.length; n++) this.delegate.destroyNode(e[n])
        }, t.prototype.listen = function (t, e, n) {
          return this.delegate.listen(t, e, n)
        }, t.prototype.listenGlobal = function (t, e, n) {
          return this.delegate.listen(t, e, n)
        }, t.prototype.setElementProperty = function (t, e, n) {
          this.delegate.setProperty(t, e, n)
        }, t.prototype.setElementAttribute = function (t, e, n) {
          var r = c(Vo(e), 2),
            o = r[0],
            i = r[1];
          null != n ? this.delegate.setAttribute(t, i, n, o) : this.delegate.removeAttribute(t, i, o)
        }, t.prototype.setBindingDebugInfo = function (t, e, n) {}, t.prototype.setElementClass = function (t, e, n) {
          n ? this.delegate.addClass(t, e) : this.delegate.removeClass(t, e)
        }, t.prototype.setElementStyle = function (t, e, n) {
          null != n ? this.delegate.setStyle(t, e, n) : this.delegate.removeStyle(t, e)
        }, t.prototype.invokeElementMethod = function (t, e, n) {
          t[e].apply(t, n)
        }, t.prototype.setText = function (t, e) {
          this.delegate.setValue(t, e)
        }, t.prototype.animate = function () {
          throw new Error("Renderer.animate is no longer supported!")
        }, t
      }();

      function wi(t, e, n, r) {
        return new Ci(t, e, n, r)
      }
      var Ci = function () {
          function t(t, e, n, r) {
            this._moduleType = t, this._parent = e, this._bootstrapComponents = n, this._def = r, this._destroyListeners = [], this._destroyed = !1, this.injector = this,
              function (t) {
                for (var e = t._def, n = t._providers = new Array(e.providers.length), r = 0; r < e.providers.length; r++) {
                  var o = e.providers[r];
                  4096 & o.flags || void 0 === n[r] && (n[r] = ti(t, o))
                }
              }(this)
          }
          return t.prototype.get = function (t, e, n) {
            void 0 === e && (e = Yt.THROW_IF_NOT_FOUND), void 0 === n && (n = 0);
            var r = 0;
            return 4 & n ? r |= 1 : 2 & n && (r |= 4), Jo(this, {
              token: t,
              tokenKey: lo(t),
              flags: r
            }, e)
          }, Object.defineProperty(t.prototype, "instance", {
            get: function () {
              return this.get(this._moduleType)
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(t.prototype, "componentFactoryResolver", {
            get: function () {
              return this.get(nn)
            },
            enumerable: !0,
            configurable: !0
          }), t.prototype.destroy = function () {
            if (this._destroyed) throw new Error("The ng module " + Vt(this.instance.constructor) + " has already been destroyed.");
            this._destroyed = !0,
              function (t, e) {
                for (var n = t._def, r = new Set, o = 0; o < n.providers.length; o++)
                  if (131072 & n.providers[o].flags) {
                    var i = t._providers[o];
                    if (i && i !== Zo) {
                      var a = i.ngOnDestroy;
                      "function" != typeof a || r.has(i) || (a.apply(i), r.add(i))
                    }
                  }
              }(this), this._destroyListeners.forEach(function (t) {
                return t()
              })
          }, t.prototype.onDestroy = function (t) {
            this._destroyListeners.push(t)
          }, t
        }(),
        Ei = lo(function () {}),
        Si = lo(Fn),
        xi = lo(Vn),
        ki = lo(Qn),
        Pi = lo(Gn),
        Ti = lo(Wn),
        Oi = lo(Yt),
        Ai = lo(Kt);

      function Ii(t, e, n, r, o, i, a, s) {
        var l = [];
        if (a)
          for (var u in a) {
            var h = c(a[u], 2);
            l[h[0]] = {
              flags: 8,
              name: u,
              nonMinifiedName: h[1],
              ns: null,
              securityContext: null,
              suffix: null
            }
          }
        var p = [];
        if (s)
          for (var f in s) p.push({
            type: 1,
            propName: f,
            target: null,
            eventName: s[f]
          });
        return Ni(t, e |= 16384, n, r, o, o, i, l, p)
      }

      function Ri(t, e, n) {
        return Ni(-1, t |= 16, null, 0, e, e, n)
      }

      function Di(t, e, n, r, o) {
        return Ni(-1, t, e, 0, n, r, o)
      }

      function Ni(t, e, n, r, o, i, a, s, l) {
        var u = Po(n),
          c = u.matchedQueries,
          h = u.references,
          p = u.matchedQueryIds;
        l || (l = []), s || (s = []), i = Ht(i);
        var f = To(a, Vt(o));
        return {
          nodeIndex: -1,
          parent: null,
          renderParent: null,
          bindingIndex: -1,
          outputIndex: -1,
          checkIndex: t,
          flags: e,
          childFlags: 0,
          directChildFlags: 0,
          childMatchedQueries: 0,
          matchedQueries: c,
          matchedQueryIds: p,
          references: h,
          ngContentIndex: -1,
          childCount: r,
          bindings: s,
          bindingFlags: Lo(s),
          outputs: l,
          element: null,
          provider: {
            token: o,
            value: i,
            deps: f
          },
          text: null,
          query: null,
          ngContent: null
        }
      }

      function Mi(t, e) {
        return Li(t, e)
      }

      function ji(t, e) {
        for (var n = t; n.parent && !So(n);) n = n.parent;
        return Hi(n.parent, Co(n), !0, e.provider.value, e.provider.deps)
      }

      function Fi(t, e) {
        var n = Hi(t, e.parent, (32768 & e.flags) > 0, e.provider.value, e.provider.deps);
        if (e.outputs.length)
          for (var r = 0; r < e.outputs.length; r++) {
            var o = e.outputs[r],
              i = n[o.propName].subscribe(Vi(t, e.parent.nodeIndex, o.eventName));
            t.disposables[e.outputIndex + r] = i.unsubscribe.bind(i)
          }
        return n
      }

      function Vi(t, e, n) {
        return function (r) {
          return bo(t, e, n, r)
        }
      }

      function Li(t, e) {
        var n = (8192 & e.flags) > 0,
          r = e.provider;
        switch (201347067 & e.flags) {
          case 512:
            return Hi(t, e.parent, n, r.value, r.deps);
          case 1024:
            return function (t, e, n, r, o) {
              var i = o.length;
              switch (i) {
                case 0:
                  return r();
                case 1:
                  return r(zi(t, e, n, o[0]));
                case 2:
                  return r(zi(t, e, n, o[0]), zi(t, e, n, o[1]));
                case 3:
                  return r(zi(t, e, n, o[0]), zi(t, e, n, o[1]), zi(t, e, n, o[2]));
                default:
                  for (var a = Array(i), s = 0; s < i; s++) a[s] = zi(t, e, n, o[s]);
                  return r.apply(void 0, h(a))
              }
            }(t, e.parent, n, r.value, r.deps);
          case 2048:
            return zi(t, e.parent, n, r.deps[0]);
          case 256:
            return r.value
        }
      }

      function Hi(t, e, n, r, o) {
        var i = o.length;
        switch (i) {
          case 0:
            return new r;
          case 1:
            return new r(zi(t, e, n, o[0]));
          case 2:
            return new r(zi(t, e, n, o[0]), zi(t, e, n, o[1]));
          case 3:
            return new r(zi(t, e, n, o[0]), zi(t, e, n, o[1]), zi(t, e, n, o[2]));
          default:
            for (var a = new Array(i), s = 0; s < i; s++) a[s] = zi(t, e, n, o[s]);
            return new(r.bind.apply(r, h([void 0], a)))
        }
      }
      var Bi = {};

      function zi(t, e, n, r, o) {
        if (void 0 === o && (o = Yt.THROW_IF_NOT_FOUND), 8 & r.flags) return r.token;
        var i = t;
        2 & r.flags && (o = null);
        var a = r.tokenKey;
        a === Ti && (n = !(!e || !e.element.componentView)), e && 1 & r.flags && (n = !1, e = e.parent);
        for (var s = t; s;) {
          if (e) switch (a) {
            case Ei:
              return _i(Ui(s, e, n));
            case Si:
              return Ui(s, e, n).renderer;
            case xi:
              return new Vn(Xr(s, e.nodeIndex).renderElement);
            case ki:
              return Xr(s, e.nodeIndex).viewContainer;
            case Pi:
              if (e.element.template) return Xr(s, e.nodeIndex).template;
              break;
            case Ti:
              return pi(Ui(s, e, n));
            case Oi:
            case Ai:
              return yi(s, e);
            default:
              var l = (n ? e.element.allProviders : e.element.publicProviders)[a];
              if (l) {
                var u = Jr(s, l.nodeIndex);
                return u || (u = {
                  instance: Li(s, l)
                }, s.nodes[l.nodeIndex] = u), u.instance
              }
          }
          n = So(s), e = Co(s), s = s.parent, 4 & r.flags && (s = null)
        }
        var c = i.root.injector.get(r.token, Bi);
        return c !== Bi || o === Bi ? c : i.root.ngModule.injector.get(r.token, o)
      }

      function Ui(t, e, n) {
        var r;
        if (n) r = Xr(t, e.nodeIndex).componentView;
        else
          for (r = t; r.parent && !So(r);) r = r.parent;
        return r
      }

      function qi(t, e, n, r, o, i) {
        if (32768 & n.flags) {
          var a = Xr(t, n.parent.nodeIndex).componentView;
          2 & a.def.flags && (a.state |= 8)
        }
        if (e.instance[n.bindings[r].name] = o, 524288 & n.flags) {
          i = i || {};
          var s = tr.unwrap(t.oldValues[n.bindingIndex + r]);
          i[n.bindings[r].nonMinifiedName] = new er(s, o, 0 != (2 & t.state))
        }
        return t.oldValues[n.bindingIndex + r] = o, i
      }

      function Gi(t, e) {
        if (t.def.nodeFlags & e)
          for (var n = t.def.nodes, r = 0, o = 0; o < n.length; o++) {
            var i = n[o],
              a = i.parent;
            for (!a && i.flags & e && Wi(t, o, i.flags & e, r++), 0 == (i.childFlags & e) && (o += i.childCount); a && 1 & a.flags && o === a.nodeIndex + a.childCount;) a.directChildFlags & e && (r = Qi(t, a, e, r)), a = a.parent
          }
      }

      function Qi(t, e, n, r) {
        for (var o = e.nodeIndex + 1; o <= e.nodeIndex + e.childCount; o++) {
          var i = t.def.nodes[o];
          i.flags & n && Wi(t, o, i.flags & n, r++), o += i.childCount
        }
        return r
      }

      function Wi(t, e, n, r) {
        var o = Jr(t, e);
        if (o) {
          var i = o.instance;
          i && (no.setCurrentNode(t, e), 1048576 & n && $r(t, 512, r) && i.ngAfterContentInit(), 2097152 & n && i.ngAfterContentChecked(), 4194304 & n && $r(t, 768, r) && i.ngAfterViewInit(), 8388608 & n && i.ngAfterViewChecked(), 131072 & n && i.ngOnDestroy())
        }
      }

      function Zi(t, e, n) {
        var r = [];
        for (var o in n) r.push({
          propName: o,
          bindingType: n[o]
        });
        return {
          nodeIndex: -1,
          parent: null,
          renderParent: null,
          bindingIndex: -1,
          outputIndex: -1,
          checkIndex: -1,
          flags: t,
          childFlags: 0,
          directChildFlags: 0,
          childMatchedQueries: 0,
          ngContentIndex: -1,
          matchedQueries: {},
          matchedQueryIds: 0,
          references: {},
          childCount: 0,
          bindings: [],
          bindingFlags: 0,
          outputs: [],
          element: null,
          provider: null,
          text: null,
          query: {
            id: e,
            filterId: ko(e),
            bindings: r
          },
          ngContent: null
        }
      }

      function Ki(t) {
        for (var e = t.def.nodeMatchedQueries; t.parent && xo(t);) {
          var n = t.parentNodeDef;
          t = t.parent;
          for (var r = n.nodeIndex + n.childCount, o = 0; o <= r; o++) 67108864 & (i = t.def.nodes[o]).flags && 536870912 & i.flags && (i.query.filterId & e) === i.query.filterId && eo(t, o).setDirty(), !(1 & i.flags && o + i.childCount < n.nodeIndex) && 67108864 & i.childFlags && 536870912 & i.childFlags || (o += i.childCount)
        }
        if (134217728 & t.def.nodeFlags)
          for (o = 0; o < t.def.nodes.length; o++) {
            var i;
            134217728 & (i = t.def.nodes[o]).flags && 536870912 & i.flags && eo(t, o).setDirty(), o += i.childCount
          }
      }

      function $i(t, e) {
        var n = eo(t, e.nodeIndex);
        if (n.dirty) {
          var r, o = void 0;
          if (67108864 & e.flags) {
            var i = e.parent.parent;
            o = Yi(t, i.nodeIndex, i.nodeIndex + i.childCount, e.query, []), r = Jr(t, e.parent.nodeIndex).instance
          } else 134217728 & e.flags && (o = Yi(t, 0, t.def.nodes.length - 1, e.query, []), r = t.component);
          n.reset(o);
          for (var a = e.query.bindings, s = !1, l = 0; l < a.length; l++) {
            var u = a[l],
              c = void 0;
            switch (u.bindingType) {
              case 0:
                c = n.first;
                break;
              case 1:
                c = n, s = !0
            }
            r[u.propName] = c
          }
          s && n.notifyOnChanges()
        }
      }

      function Yi(t, e, n, r, o) {
        for (var i = e; i <= n; i++) {
          var a = t.def.nodes[i],
            s = a.matchedQueries[r.id];
          if (null != s && o.push(Xi(t, a, s)), 1 & a.flags && a.element.template && (a.element.template.nodeMatchedQueries & r.filterId) === r.filterId) {
            var l = Xr(t, i);
            if ((a.childMatchedQueries & r.filterId) === r.filterId && (Yi(t, i + 1, i + a.childCount, r, o), i += a.childCount), 16777216 & a.flags)
              for (var u = l.viewContainer._embeddedViews, c = 0; c < u.length; c++) {
                var h = u[c],
                  p = wo(h);
                p && p === l && Yi(h, 0, h.def.nodes.length - 1, r, o)
              }
            var f = l.template._projectedViews;
            if (f)
              for (c = 0; c < f.length; c++) {
                var d = f[c];
                Yi(d, 0, d.def.nodes.length - 1, r, o)
              }
          }(a.childMatchedQueries & r.filterId) !== r.filterId && (i += a.childCount)
        }
        return o
      }

      function Xi(t, e, n) {
        if (null != n) switch (n) {
          case 1:
            return Xr(t, e.nodeIndex).renderElement;
          case 0:
            return new Vn(Xr(t, e.nodeIndex).renderElement);
          case 2:
            return Xr(t, e.nodeIndex).template;
          case 3:
            return Xr(t, e.nodeIndex).viewContainer;
          case 4:
            return Jr(t, e.nodeIndex).instance
        }
      }

      function Ji(t, e) {
        return {
          nodeIndex: -1,
          parent: null,
          renderParent: null,
          bindingIndex: -1,
          outputIndex: -1,
          checkIndex: -1,
          flags: 8,
          childFlags: 0,
          directChildFlags: 0,
          childMatchedQueries: 0,
          matchedQueries: {},
          matchedQueryIds: 0,
          references: {},
          ngContentIndex: t,
          childCount: 0,
          bindings: [],
          bindingFlags: 0,
          outputs: [],
          element: null,
          provider: null,
          text: null,
          query: null,
          ngContent: {
            index: e
          }
        }
      }

      function ta(t, e, n) {
        var r = Oo(t, e, n);
        r && No(t, n.ngContent.index, 1, r, null, void 0)
      }

      function ea(t, e) {
        return oa(128, t, new Array(e + 1))
      }

      function na(t, e) {
        return oa(32, t, new Array(e))
      }

      function ra(t, e) {
        for (var n = Object.keys(e), r = n.length, o = new Array(r), i = 0; i < r; i++) {
          var a = n[i];
          o[e[a]] = a
        }
        return oa(64, t, o)
      }

      function oa(t, e, n) {
        for (var r = new Array(n.length), o = 0; o < n.length; o++) {
          var i = n[o];
          r[o] = {
            flags: 8,
            name: i,
            ns: null,
            nonMinifiedName: i,
            securityContext: null,
            suffix: null
          }
        }
        return {
          nodeIndex: -1,
          parent: null,
          renderParent: null,
          bindingIndex: -1,
          outputIndex: -1,
          checkIndex: e,
          flags: t,
          childFlags: 0,
          directChildFlags: 0,
          childMatchedQueries: 0,
          matchedQueries: {},
          matchedQueryIds: 0,
          references: {},
          ngContentIndex: -1,
          childCount: 0,
          bindings: r,
          bindingFlags: Lo(r),
          outputs: [],
          element: null,
          provider: null,
          text: null,
          query: null,
          ngContent: null
        }
      }

      function ia(t, e, n) {
        for (var r = new Array(n.length - 1), o = 1; o < n.length; o++) r[o - 1] = {
          flags: 8,
          name: null,
          ns: null,
          nonMinifiedName: null,
          securityContext: null,
          suffix: n[o]
        };
        return {
          nodeIndex: -1,
          parent: null,
          renderParent: null,
          bindingIndex: -1,
          outputIndex: -1,
          checkIndex: t,
          flags: 2,
          childFlags: 0,
          directChildFlags: 0,
          childMatchedQueries: 0,
          matchedQueries: {},
          matchedQueryIds: 0,
          references: {},
          ngContentIndex: e,
          childCount: 0,
          bindings: r,
          bindingFlags: 8,
          outputs: [],
          element: null,
          provider: null,
          text: {
            prefix: n[0]
          },
          query: null,
          ngContent: null
        }
      }

      function aa(t, e, n) {
        var r, o = t.renderer;
        r = o.createText(n.text.prefix);
        var i = Oo(t, e, n);
        return i && o.appendChild(i, r), {
          renderText: r
        }
      }

      function sa(t, e) {
        return (null != t ? t.toString() : "") + e.suffix
      }

      function la(t, e, n, r) {
        for (var o = 0, i = 0, a = 0, s = 0, l = 0, u = null, c = null, h = !1, p = !1, f = null, d = 0; d < e.length; d++) {
          var m = e[d];
          if (m.nodeIndex = d, m.parent = u, m.bindingIndex = o, m.outputIndex = i, m.renderParent = c, a |= m.flags, l |= m.matchedQueryIds, m.element) {
            var y = m.element;
            y.publicProviders = u ? u.element.publicProviders : Object.create(null), y.allProviders = y.publicProviders, h = !1, p = !1, m.element.template && (l |= m.element.template.nodeMatchedQueries)
          }
          if (ca(u, m, e.length), o += m.bindings.length, i += m.outputs.length, !c && 3 & m.flags && (f = m), 20224 & m.flags) {
            h || (h = !0, u.element.publicProviders = Object.create(u.element.publicProviders), u.element.allProviders = u.element.publicProviders);
            var g = 0 != (32768 & m.flags);
            0 == (8192 & m.flags) || g ? u.element.publicProviders[lo(m.provider.token)] = m : (p || (p = !0, u.element.allProviders = Object.create(u.element.publicProviders)), u.element.allProviders[lo(m.provider.token)] = m), g && (u.element.componentProvider = m)
          }
          if (u ? (u.childFlags |= m.flags, u.directChildFlags |= m.flags, u.childMatchedQueries |= m.matchedQueryIds, m.element && m.element.template && (u.childMatchedQueries |= m.element.template.nodeMatchedQueries)) : s |= m.flags, m.childCount > 0) u = m, ua(m) || (c = m);
          else
            for (; u && d === u.nodeIndex + u.childCount;) {
              var v = u.parent;
              v && (v.childFlags |= u.childFlags, v.childMatchedQueries |= u.childMatchedQueries), c = (u = v) && ua(u) ? u.renderParent : u
            }
        }
        return {
          factory: null,
          nodeFlags: a,
          rootNodeFlags: s,
          nodeMatchedQueries: l,
          flags: t,
          nodes: e,
          updateDirectives: n || ao,
          updateRenderer: r || ao,
          handleEvent: function (t, n, r, o) {
            return e[n].element.handleEvent(t, r, o)
          },
          bindingCount: o,
          outputCount: i,
          lastRenderRootNode: f
        }
      }

      function ua(t) {
        return 0 != (1 & t.flags) && null === t.element.name
      }

      function ca(t, e, n) {
        var r = e.element && e.element.template;
        if (r) {
          if (!r.lastRenderRootNode) throw new Error("Illegal State: Embedded templates without nodes are not allowed!");
          if (r.lastRenderRootNode && 16777216 & r.lastRenderRootNode.flags) throw new Error("Illegal State: Last root node of a template can't have embedded views, at index " + e.nodeIndex + "!")
        }
        if (20224 & e.flags && 0 == (1 & (t ? t.flags : 0))) throw new Error("Illegal State: StaticProvider/Directive nodes need to be children of elements or anchors, at index " + e.nodeIndex + "!");
        if (e.query) {
          if (67108864 & e.flags && (!t || 0 == (16384 & t.flags))) throw new Error("Illegal State: Content Query nodes need to be children of directives, at index " + e.nodeIndex + "!");
          if (134217728 & e.flags && t) throw new Error("Illegal State: View Query nodes have to be top level nodes, at index " + e.nodeIndex + "!")
        }
        if (e.childCount) {
          var o = t ? t.nodeIndex + t.childCount : n - 1;
          if (e.nodeIndex <= o && e.nodeIndex + e.childCount > o) throw new Error("Illegal State: childCount of node leads outside of parent, at index " + e.nodeIndex + "!")
        }
      }

      function ha(t, e, n, r) {
        var o = da(t.root, t.renderer, t, e, n);
        return ma(o, t.component, r), ya(o), o
      }

      function pa(t, e, n) {
        var r = da(t, t.renderer, null, null, e);
        return ma(r, n, n), ya(r), r
      }

      function fa(t, e, n, r) {
        var o, i = e.element.componentRendererType;
        return o = i ? t.root.rendererFactory.createRenderer(r, i) : t.root.renderer, da(t.root, o, t, e.element.componentProvider, n)
      }

      function da(t, e, n, r, o) {
        var i = new Array(o.nodes.length),
          a = o.outputCount ? new Array(o.outputCount) : null;
        return {
          def: o,
          parent: n,
          viewContainerParent: null,
          parentNodeDef: r,
          context: null,
          component: null,
          nodes: i,
          state: 13,
          root: t,
          renderer: e,
          oldValues: new Array(o.bindingCount),
          disposables: a,
          initIndex: -1
        }
      }

      function ma(t, e, n) {
        t.component = e, t.context = n
      }

      function ya(t) {
        var e;
        So(t) && (e = Xr(t.parent, t.parentNodeDef.parent.nodeIndex).renderElement);
        for (var n = t.def, r = t.nodes, o = 0; o < n.nodes.length; o++) {
          var i = n.nodes[o];
          no.setCurrentNode(t, o);
          var a = void 0;
          switch (201347067 & i.flags) {
            case 1:
              var s = qo(t, e, i),
                l = void 0;
              if (33554432 & i.flags) {
                var u = Io(i.element.componentView);
                l = no.createComponentView(t, i, u, s)
              }
              Go(t, l, i, s), a = {
                renderElement: s,
                componentView: l,
                viewContainer: null,
                template: i.element.template ? di(t, i) : void 0
              }, 16777216 & i.flags && (a.viewContainer = ci(t, i, a));
              break;
            case 2:
              a = aa(t, e, i);
              break;
            case 512:
            case 1024:
            case 2048:
            case 256:
              (a = r[o]) || 4096 & i.flags || (a = {
                instance: Mi(t, i)
              });
              break;
            case 16:
              a = {
                instance: ji(t, i)
              };
              break;
            case 16384:
              (a = r[o]) || (a = {
                instance: Fi(t, i)
              }), 32768 & i.flags && ma(Xr(t, i.parent.nodeIndex).componentView, a.instance, a.instance);
              break;
            case 32:
            case 64:
            case 128:
              a = {
                value: void 0
              };
              break;
            case 67108864:
            case 134217728:
              a = new Hn;
              break;
            case 8:
              ta(t, e, i), a = void 0
          }
          r[o] = a
        }
        xa(t, Sa.CreateViewNodes), Oa(t, 201326592, 268435456, 0)
      }

      function ga(t) {
        ba(t), no.updateDirectives(t, 1), ka(t, Sa.CheckNoChanges), no.updateRenderer(t, 1), xa(t, Sa.CheckNoChanges), t.state &= -97
      }

      function va(t) {
        1 & t.state ? (t.state &= -2, t.state |= 2) : t.state &= -3, Kr(t, 0, 256), ba(t), no.updateDirectives(t, 0), ka(t, Sa.CheckAndUpdate), Oa(t, 67108864, 536870912, 0);
        var e = Kr(t, 256, 512);
        Gi(t, 2097152 | (e ? 1048576 : 0)), no.updateRenderer(t, 0), xa(t, Sa.CheckAndUpdate), Oa(t, 134217728, 536870912, 0), Gi(t, 8388608 | ((e = Kr(t, 512, 768)) ? 4194304 : 0)), 2 & t.def.flags && (t.state &= -9), t.state &= -97, Kr(t, 768, 1024)
      }

      function _a(t, e, n, r, o, i, a, s, l, u, c, p, f) {
        return 0 === n ? function (t, e, n, r, o, i, a, s, l, u, c, h) {
          switch (201347067 & e.flags) {
            case 1:
              return function (t, e, n, r, o, i, a, s, l, u, c, h) {
                var p = e.bindings.length,
                  f = !1;
                return p > 0 && Wo(t, e, 0, n) && (f = !0), p > 1 && Wo(t, e, 1, r) && (f = !0), p > 2 && Wo(t, e, 2, o) && (f = !0), p > 3 && Wo(t, e, 3, i) && (f = !0), p > 4 && Wo(t, e, 4, a) && (f = !0), p > 5 && Wo(t, e, 5, s) && (f = !0), p > 6 && Wo(t, e, 6, l) && (f = !0), p > 7 && Wo(t, e, 7, u) && (f = !0), p > 8 && Wo(t, e, 8, c) && (f = !0), p > 9 && Wo(t, e, 9, h) && (f = !0), f
              }(t, e, n, r, o, i, a, s, l, u, c, h);
            case 2:
              return function (t, e, n, r, o, i, a, s, l, u, c, h) {
                var p = !1,
                  f = e.bindings,
                  d = f.length;
                if (d > 0 && yo(t, e, 0, n) && (p = !0), d > 1 && yo(t, e, 1, r) && (p = !0), d > 2 && yo(t, e, 2, o) && (p = !0), d > 3 && yo(t, e, 3, i) && (p = !0), d > 4 && yo(t, e, 4, a) && (p = !0), d > 5 && yo(t, e, 5, s) && (p = !0), d > 6 && yo(t, e, 6, l) && (p = !0), d > 7 && yo(t, e, 7, u) && (p = !0), d > 8 && yo(t, e, 8, c) && (p = !0), d > 9 && yo(t, e, 9, h) && (p = !0), p) {
                  var m = e.text.prefix;
                  d > 0 && (m += sa(n, f[0])), d > 1 && (m += sa(r, f[1])), d > 2 && (m += sa(o, f[2])), d > 3 && (m += sa(i, f[3])), d > 4 && (m += sa(a, f[4])), d > 5 && (m += sa(s, f[5])), d > 6 && (m += sa(l, f[6])), d > 7 && (m += sa(u, f[7])), d > 8 && (m += sa(c, f[8])), d > 9 && (m += sa(h, f[9]));
                  var y = Yr(t, e.nodeIndex).renderText;
                  t.renderer.setValue(y, m)
                }
                return p
              }(t, e, n, r, o, i, a, s, l, u, c, h);
            case 16384:
              return function (t, e, n, r, o, i, a, s, l, u, c, h) {
                var p = Jr(t, e.nodeIndex),
                  f = p.instance,
                  d = !1,
                  m = void 0,
                  y = e.bindings.length;
                return y > 0 && mo(t, e, 0, n) && (d = !0, m = qi(t, p, e, 0, n, m)), y > 1 && mo(t, e, 1, r) && (d = !0, m = qi(t, p, e, 1, r, m)), y > 2 && mo(t, e, 2, o) && (d = !0, m = qi(t, p, e, 2, o, m)), y > 3 && mo(t, e, 3, i) && (d = !0, m = qi(t, p, e, 3, i, m)), y > 4 && mo(t, e, 4, a) && (d = !0, m = qi(t, p, e, 4, a, m)), y > 5 && mo(t, e, 5, s) && (d = !0, m = qi(t, p, e, 5, s, m)), y > 6 && mo(t, e, 6, l) && (d = !0, m = qi(t, p, e, 6, l, m)), y > 7 && mo(t, e, 7, u) && (d = !0, m = qi(t, p, e, 7, u, m)), y > 8 && mo(t, e, 8, c) && (d = !0, m = qi(t, p, e, 8, c, m)), y > 9 && mo(t, e, 9, h) && (d = !0, m = qi(t, p, e, 9, h, m)), m && f.ngOnChanges(m), 65536 & e.flags && $r(t, 256, e.nodeIndex) && f.ngOnInit(), 262144 & e.flags && f.ngDoCheck(), d
              }(t, e, n, r, o, i, a, s, l, u, c, h);
            case 32:
            case 64:
            case 128:
              return function (t, e, n, r, o, i, a, s, l, u, c, h) {
                var p = e.bindings,
                  f = !1,
                  d = p.length;
                if (d > 0 && yo(t, e, 0, n) && (f = !0), d > 1 && yo(t, e, 1, r) && (f = !0), d > 2 && yo(t, e, 2, o) && (f = !0), d > 3 && yo(t, e, 3, i) && (f = !0), d > 4 && yo(t, e, 4, a) && (f = !0), d > 5 && yo(t, e, 5, s) && (f = !0), d > 6 && yo(t, e, 6, l) && (f = !0), d > 7 && yo(t, e, 7, u) && (f = !0), d > 8 && yo(t, e, 8, c) && (f = !0), d > 9 && yo(t, e, 9, h) && (f = !0), f) {
                  var m = to(t, e.nodeIndex),
                    y = void 0;
                  switch (201347067 & e.flags) {
                    case 32:
                      y = new Array(p.length), d > 0 && (y[0] = n), d > 1 && (y[1] = r), d > 2 && (y[2] = o), d > 3 && (y[3] = i), d > 4 && (y[4] = a), d > 5 && (y[5] = s), d > 6 && (y[6] = l), d > 7 && (y[7] = u), d > 8 && (y[8] = c), d > 9 && (y[9] = h);
                      break;
                    case 64:
                      y = {}, d > 0 && (y[p[0].name] = n), d > 1 && (y[p[1].name] = r), d > 2 && (y[p[2].name] = o), d > 3 && (y[p[3].name] = i), d > 4 && (y[p[4].name] = a), d > 5 && (y[p[5].name] = s), d > 6 && (y[p[6].name] = l), d > 7 && (y[p[7].name] = u), d > 8 && (y[p[8].name] = c), d > 9 && (y[p[9].name] = h);
                      break;
                    case 128:
                      var g = n;
                      switch (d) {
                        case 1:
                          y = g.transform(n);
                          break;
                        case 2:
                          y = g.transform(r);
                          break;
                        case 3:
                          y = g.transform(r, o);
                          break;
                        case 4:
                          y = g.transform(r, o, i);
                          break;
                        case 5:
                          y = g.transform(r, o, i, a);
                          break;
                        case 6:
                          y = g.transform(r, o, i, a, s);
                          break;
                        case 7:
                          y = g.transform(r, o, i, a, s, l);
                          break;
                        case 8:
                          y = g.transform(r, o, i, a, s, l, u);
                          break;
                        case 9:
                          y = g.transform(r, o, i, a, s, l, u, c);
                          break;
                        case 10:
                          y = g.transform(r, o, i, a, s, l, u, c, h)
                      }
                  }
                  m.value = y
                }
                return f
              }(t, e, n, r, o, i, a, s, l, u, c, h);
            default:
              throw "unreachable"
          }
        }(t, e, r, o, i, a, s, l, u, c, p, f) : function (t, e, n) {
          switch (201347067 & e.flags) {
            case 1:
              return function (t, e, n) {
                for (var r = !1, o = 0; o < n.length; o++) Wo(t, e, o, n[o]) && (r = !0);
                return r
              }(t, e, n);
            case 2:
              return function (t, e, n) {
                for (var r = e.bindings, o = !1, i = 0; i < n.length; i++) yo(t, e, i, n[i]) && (o = !0);
                if (o) {
                  var a = "";
                  for (i = 0; i < n.length; i++) a += sa(n[i], r[i]);
                  a = e.text.prefix + a;
                  var s = Yr(t, e.nodeIndex).renderText;
                  t.renderer.setValue(s, a)
                }
                return o
              }(t, e, n);
            case 16384:
              return function (t, e, n) {
                for (var r = Jr(t, e.nodeIndex), o = r.instance, i = !1, a = void 0, s = 0; s < n.length; s++) mo(t, e, s, n[s]) && (i = !0, a = qi(t, r, e, s, n[s], a));
                return a && o.ngOnChanges(a), 65536 & e.flags && $r(t, 256, e.nodeIndex) && o.ngOnInit(), 262144 & e.flags && o.ngDoCheck(), i
              }(t, e, n);
            case 32:
            case 64:
            case 128:
              return function (t, e, n) {
                for (var r = e.bindings, o = !1, i = 0; i < n.length; i++) yo(t, e, i, n[i]) && (o = !0);
                if (o) {
                  var a = to(t, e.nodeIndex),
                    s = void 0;
                  switch (201347067 & e.flags) {
                    case 32:
                      s = n;
                      break;
                    case 64:
                      for (s = {}, i = 0; i < n.length; i++) s[r[i].name] = n[i];
                      break;
                    case 128:
                      var l = n[0],
                        u = n.slice(1);
                      s = l.transform.apply(l, h(u))
                  }
                  a.value = s
                }
                return o
              }(t, e, n);
            default:
              throw "unreachable"
          }
        }(t, e, r)
      }

      function ba(t) {
        var e = t.def;
        if (4 & e.nodeFlags)
          for (var n = 0; n < e.nodes.length; n++) {
            var r = e.nodes[n];
            if (4 & r.flags) {
              var o = Xr(t, n).template._projectedViews;
              if (o)
                for (var i = 0; i < o.length; i++) {
                  var a = o[i];
                  a.state |= 32, _o(a, t)
                }
            } else 0 == (4 & r.childFlags) && (n += r.childCount)
          }
      }

      function wa(t, e, n, r, o, i, a, s, l, u, c, h, p) {
        return 0 === n ? function (t, e, n, r, o, i, a, s, l, u, c, h) {
          var p = e.bindings.length;
          p > 0 && go(t, e, 0, n), p > 1 && go(t, e, 1, r), p > 2 && go(t, e, 2, o), p > 3 && go(t, e, 3, i), p > 4 && go(t, e, 4, a), p > 5 && go(t, e, 5, s), p > 6 && go(t, e, 6, l), p > 7 && go(t, e, 7, u), p > 8 && go(t, e, 8, c), p > 9 && go(t, e, 9, h)
        }(t, e, r, o, i, a, s, l, u, c, h, p) : function (t, e, n) {
          for (var r = 0; r < n.length; r++) go(t, e, r, n[r])
        }(t, e, r), !1
      }

      function Ca(t, e) {
        if (eo(t, e.nodeIndex).dirty) throw ro(no.createDebugContext(t, e.nodeIndex), "Query " + e.query.id + " not dirty", "Query " + e.query.id + " dirty", 0 != (1 & t.state))
      }

      function Ea(t) {
        if (!(128 & t.state)) {
          if (ka(t, Sa.Destroy), xa(t, Sa.Destroy), Gi(t, 131072), t.disposables)
            for (var e = 0; e < t.disposables.length; e++) t.disposables[e]();
          ! function (t) {
            if (16 & t.state) {
              var e = wo(t);
              if (e) {
                var n = e.template._projectedViews;
                n && (ii(n, n.indexOf(t)), no.dirtyParentQueries(t))
              }
            }
          }(t), t.renderer.destroyNode && function (t) {
            for (var e = t.def.nodes.length, n = 0; n < e; n++) {
              var r = t.def.nodes[n];
              1 & r.flags ? t.renderer.destroyNode(Xr(t, n).renderElement) : 2 & r.flags ? t.renderer.destroyNode(Yr(t, n).renderText) : (67108864 & r.flags || 134217728 & r.flags) && eo(t, n).destroy()
            }
          }(t), So(t) && t.renderer.destroy(), t.state |= 128
        }
      }
      var Sa = function (t) {
        return t[t.CreateViewNodes = 0] = "CreateViewNodes", t[t.CheckNoChanges = 1] = "CheckNoChanges", t[t.CheckNoChangesProjectedViews = 2] = "CheckNoChangesProjectedViews", t[t.CheckAndUpdate = 3] = "CheckAndUpdate", t[t.CheckAndUpdateProjectedViews = 4] = "CheckAndUpdateProjectedViews", t[t.Destroy = 5] = "Destroy", t
      }({});

      function xa(t, e) {
        var n = t.def;
        if (33554432 & n.nodeFlags)
          for (var r = 0; r < n.nodes.length; r++) {
            var o = n.nodes[r];
            33554432 & o.flags ? Pa(Xr(t, r).componentView, e) : 0 == (33554432 & o.childFlags) && (r += o.childCount)
          }
      }

      function ka(t, e) {
        var n = t.def;
        if (16777216 & n.nodeFlags)
          for (var r = 0; r < n.nodes.length; r++) {
            var o = n.nodes[r];
            if (16777216 & o.flags)
              for (var i = Xr(t, r).viewContainer._embeddedViews, a = 0; a < i.length; a++) Pa(i[a], e);
            else 0 == (16777216 & o.childFlags) && (r += o.childCount)
          }
      }

      function Pa(t, e) {
        var n = t.state;
        switch (e) {
          case Sa.CheckNoChanges:
            0 == (128 & n) && (12 == (12 & n) ? ga(t) : 64 & n && Ta(t, Sa.CheckNoChangesProjectedViews));
            break;
          case Sa.CheckNoChangesProjectedViews:
            0 == (128 & n) && (32 & n ? ga(t) : 64 & n && Ta(t, e));
            break;
          case Sa.CheckAndUpdate:
            0 == (128 & n) && (12 == (12 & n) ? va(t) : 64 & n && Ta(t, Sa.CheckAndUpdateProjectedViews));
            break;
          case Sa.CheckAndUpdateProjectedViews:
            0 == (128 & n) && (32 & n ? va(t) : 64 & n && Ta(t, e));
            break;
          case Sa.Destroy:
            Ea(t);
            break;
          case Sa.CreateViewNodes:
            ya(t)
        }
      }

      function Ta(t, e) {
        ka(t, e), xa(t, e)
      }

      function Oa(t, e, n, r) {
        if (t.def.nodeFlags & e && t.def.nodeFlags & n)
          for (var o = t.def.nodes.length, i = 0; i < o; i++) {
            var a = t.def.nodes[i];
            if (a.flags & e && a.flags & n) switch (no.setCurrentNode(t, a.nodeIndex), r) {
              case 0:
                $i(t, a);
                break;
              case 1:
                Ca(t, a)
            }
            a.childFlags & e && a.childFlags & n || (i += a.childCount)
          }
      }
      var Aa = !1;

      function Ia(t, e, n, r, o, i) {
        return pa(Da(t, o, o.injector.get(Mn), e, n), r, i)
      }

      function Ra(t, e, n, r, o, i) {
        var a = o.injector.get(Mn),
          s = Da(t, o, new fs(a), e, n),
          l = Ua(r);
        return hs(Xa.create, pa, null, [s, l, i])
      }

      function Da(t, e, n, r, o) {
        var i = e.injector.get(Zr),
          a = e.injector.get(Ee);
        return {
          ngModule: e,
          injector: t,
          projectableNodes: r,
          selectorOrNode: o,
          sanitizer: i,
          rendererFactory: n,
          renderer: n.createRenderer(null, null),
          errorHandler: a
        }
      }

      function Na(t, e, n, r) {
        var o = Ua(n);
        return hs(Xa.create, ha, null, [t, e, o, r])
      }

      function Ma(t, e, n, r) {
        return n = La.get(e.element.componentProvider.provider.token) || Ua(n), hs(Xa.create, fa, null, [t, e, n, r])
      }

      function ja(t, e, n, r) {
        return wi(t, e, n, function (t) {
          var e = function (t) {
              var e = !1,
                n = !1;
              return 0 === Fa.size ? {
                hasOverrides: e,
                hasDeprecatedOverrides: n
              } : (t.providers.forEach(function (t) {
                var r = Fa.get(t.token);
                3840 & t.flags && r && (e = !0, n = n || r.deprecatedBehavior)
              }), t.modules.forEach(function (t) {
                Va.forEach(function (r, o) {
                  o.ngInjectableDef.providedIn === t && (e = !0, n = n || r.deprecatedBehavior)
                })
              }), {
                hasOverrides: e,
                hasDeprecatedOverrides: n
              })
            }(t),
            n = e.hasDeprecatedOverrides;
          return e.hasOverrides ? (function (t) {
            for (var e = 0; e < t.providers.length; e++) {
              var r = t.providers[e];
              n && (r.flags |= 4096);
              var o = Fa.get(r.token);
              o && (r.flags = -3841 & r.flags | o.flags, r.deps = To(o.deps), r.value = o.value)
            }
            if (Va.size > 0) {
              var i = new Set(t.modules);
              Va.forEach(function (e, r) {
                if (i.has(r.ngInjectableDef.providedIn)) {
                  var o = {
                    token: r,
                    flags: e.flags | (n ? 4096 : 0),
                    deps: To(e.deps),
                    value: e.value,
                    index: t.providers.length
                  };
                  t.providers.push(o), t.providersByKey[lo(r)] = o
                }
              })
            }
          }(t = t.factory(function () {
            return ao
          })), t) : t
        }(r))
      }
      var Fa = new Map,
        Va = new Map,
        La = new Map;

      function Ha(t) {
        Fa.set(t.token, t), "function" == typeof t.token && t.token.ngInjectableDef && "function" == typeof t.token.ngInjectableDef.providedIn && Va.set(t.token, t)
      }

      function Ba(t, e) {
        var n = Io(Io(e.viewDefFactory).nodes[0].element.componentView);
        La.set(t, n)
      }

      function za() {
        Fa.clear(), Va.clear(), La.clear()
      }

      function Ua(t) {
        if (0 === Fa.size) return t;
        var e = function (t) {
          for (var e = [], n = null, r = 0; r < t.nodes.length; r++) {
            var o = t.nodes[r];
            1 & o.flags && (n = o), n && 3840 & o.flags && Fa.has(o.provider.token) && (e.push(n.nodeIndex), n = null)
          }
          return e
        }(t);
        if (0 === e.length) return t;
        t = t.factory(function () {
          return ao
        });
        for (var n = 0; n < e.length; n++) r(t, e[n]);
        return t;

        function r(t, e) {
          for (var n = e + 1; n < t.nodes.length; n++) {
            var r = t.nodes[n];
            if (1 & r.flags) return;
            if (3840 & r.flags) {
              var o = r.provider,
                i = Fa.get(o.token);
              i && (r.flags = -3841 & r.flags | i.flags, o.deps = To(i.deps), o.value = i.value)
            }
          }
        }
      }

      function qa(t, e, n, r, o, i, a, s, l, u, c, h, p) {
        var f = t.def.nodes[e];
        return _a(t, f, n, r, o, i, a, s, l, u, c, h, p), 224 & f.flags ? to(t, e).value : void 0
      }

      function Ga(t, e, n, r, o, i, a, s, l, u, c, h, p) {
        var f = t.def.nodes[e];
        return wa(t, f, n, r, o, i, a, s, l, u, c, h, p), 224 & f.flags ? to(t, e).value : void 0
      }

      function Qa(t) {
        return hs(Xa.detectChanges, va, null, [t])
      }

      function Wa(t) {
        return hs(Xa.checkNoChanges, ga, null, [t])
      }

      function Za(t) {
        return hs(Xa.destroy, Ea, null, [t])
      }
      var Ka, $a, Ya, Xa = function (t) {
        return t[t.create = 0] = "create", t[t.detectChanges = 1] = "detectChanges", t[t.checkNoChanges = 2] = "checkNoChanges", t[t.destroy = 3] = "destroy", t[t.handleEvent = 4] = "handleEvent", t
      }({});

      function Ja(t, e) {
        $a = t, Ya = e
      }

      function ts(t, e, n, r) {
        return Ja(t, e), hs(Xa.handleEvent, t.def.handleEvent, null, [t, e, n, r])
      }

      function es(t, e) {
        if (128 & t.state) throw io(Xa[Ka]);
        return Ja(t, ss(t, 0)), t.def.updateDirectives(function (t, n, r) {
          for (var o = [], i = 3; i < arguments.length; i++) o[i - 3] = arguments[i];
          var a = t.def.nodes[n];
          return 0 === e ? rs(t, a, r, o) : os(t, a, r, o), 16384 & a.flags && Ja(t, ss(t, n)), 224 & a.flags ? to(t, a.nodeIndex).value : void 0
        }, t)
      }

      function ns(t, e) {
        if (128 & t.state) throw io(Xa[Ka]);
        return Ja(t, ls(t, 0)), t.def.updateRenderer(function (t, n, r) {
          for (var o = [], i = 3; i < arguments.length; i++) o[i - 3] = arguments[i];
          var a = t.def.nodes[n];
          return 0 === e ? rs(t, a, r, o) : os(t, a, r, o), 3 & a.flags && Ja(t, ls(t, n)), 224 & a.flags ? to(t, a.nodeIndex).value : void 0
        }, t)
      }

      function rs(t, e, n, r) {
        if (_a.apply(void 0, h([t, e, n], r))) {
          var o = 1 === n ? r[0] : r;
          if (16384 & e.flags) {
            for (var i = {}, a = 0; a < e.bindings.length; a++) {
              var s = e.bindings[a],
                l = o[a];
              8 & s.flags && (i[(f = s.nonMinifiedName, "ng-reflect-" + (f = f.replace(/[$@]/g, "_").replace(is, function () {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                return "-" + t[1].toLowerCase()
              })))] = as(l))
            }
            var u = e.parent,
              c = Xr(t, u.nodeIndex).renderElement;
            if (u.element.name)
              for (var p in i) null != (l = i[p]) ? t.renderer.setAttribute(c, p, l) : t.renderer.removeAttribute(c, p);
            else t.renderer.setValue(c, "bindings=" + JSON.stringify(i, null, 2))
          }
        }
        var f
      }

      function os(t, e, n, r) {
        wa.apply(void 0, h([t, e, n], r))
      }
      var is = /([A-Z])/g;

      function as(t) {
        try {
          return null != t ? t.toString().slice(0, 30) : t
        } catch (t) {
          return "[ERROR] Exception while trying to serialize the value"
        }
      }

      function ss(t, e) {
        for (var n = e; n < t.def.nodes.length; n++) {
          var r = t.def.nodes[n];
          if (16384 & r.flags && r.bindings && r.bindings.length) return n
        }
        return null
      }

      function ls(t, e) {
        for (var n = e; n < t.def.nodes.length; n++) {
          var r = t.def.nodes[n];
          if (3 & r.flags && r.bindings && r.bindings.length) return n
        }
        return null
      }
      var us = function () {
        function t(t, e) {
          this.view = t, this.nodeIndex = e, null == e && (this.nodeIndex = e = 0), this.nodeDef = t.def.nodes[e];
          for (var n = this.nodeDef, r = t; n && 0 == (1 & n.flags);) n = n.parent;
          if (!n)
            for (; !n && r;) n = Co(r), r = r.parent;
          this.elDef = n, this.elView = r
        }
        return Object.defineProperty(t.prototype, "elOrCompView", {
          get: function () {
            return Xr(this.elView, this.elDef.nodeIndex).componentView || this.view
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(t.prototype, "injector", {
          get: function () {
            return yi(this.elView, this.elDef)
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(t.prototype, "component", {
          get: function () {
            return this.elOrCompView.component
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(t.prototype, "context", {
          get: function () {
            return this.elOrCompView.context
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(t.prototype, "providerTokens", {
          get: function () {
            var t = [];
            if (this.elDef)
              for (var e = this.elDef.nodeIndex + 1; e <= this.elDef.nodeIndex + this.elDef.childCount; e++) {
                var n = this.elView.def.nodes[e];
                20224 & n.flags && t.push(n.provider.token), e += n.childCount
              }
            return t
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(t.prototype, "references", {
          get: function () {
            var t = {};
            if (this.elDef) {
              cs(this.elView, this.elDef, t);
              for (var e = this.elDef.nodeIndex + 1; e <= this.elDef.nodeIndex + this.elDef.childCount; e++) {
                var n = this.elView.def.nodes[e];
                20224 & n.flags && cs(this.elView, n, t), e += n.childCount
              }
            }
            return t
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(t.prototype, "componentRenderElement", {
          get: function () {
            var t = function (t) {
              for (; t && !So(t);) t = t.parent;
              return t.parent ? Xr(t.parent, Co(t).nodeIndex) : null
            }(this.elOrCompView);
            return t ? t.renderElement : void 0
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(t.prototype, "renderNode", {
          get: function () {
            return 2 & this.nodeDef.flags ? Eo(this.view, this.nodeDef) : Eo(this.elView, this.elDef)
          },
          enumerable: !0,
          configurable: !0
        }), t.prototype.logError = function (t) {
          for (var e, n, r = [], o = 1; o < arguments.length; o++) r[o - 1] = arguments[o];
          2 & this.nodeDef.flags ? (e = this.view.def, n = this.nodeDef.nodeIndex) : (e = this.elView.def, n = this.elDef.nodeIndex);
          var i = function (t, e) {
              for (var n = -1, r = 0; r <= e; r++) 3 & t.nodes[r].flags && n++;
              return n
            }(e, n),
            a = -1;
          e.factory(function () {
            var e;
            return ++a === i ? (e = t.error).bind.apply(e, h([t], r)) : ao
          }), a < i && (t.error("Illegal state: the ViewDefinitionFactory did not call the logger!"), t.error.apply(t, h(r)))
        }, t
      }();

      function cs(t, e, n) {
        for (var r in e.references) n[r] = Xi(t, e, e.references[r])
      }

      function hs(t, e, n, r) {
        var o = Ka,
          i = $a,
          a = Ya;
        try {
          Ka = t;
          var s = e.apply(n, r);
          return $a = i, Ya = a, Ka = o, s
        } catch (t) {
          if (be(t) || !$a) throw t;
          throw function (t, e) {
            return t instanceof Error || (t = new Error(t.toString())), oo(t, e), t
          }(t, ps())
        }
      }

      function ps() {
        return $a ? new us($a, Ya) : null
      }
      var fs = function () {
          function t(t) {
            this.delegate = t
          }
          return t.prototype.createRenderer = function (t, e) {
            return new ds(this.delegate.createRenderer(t, e))
          }, t.prototype.begin = function () {
            this.delegate.begin && this.delegate.begin()
          }, t.prototype.end = function () {
            this.delegate.end && this.delegate.end()
          }, t.prototype.whenRenderingDone = function () {
            return this.delegate.whenRenderingDone ? this.delegate.whenRenderingDone() : Promise.resolve(null)
          }, t
        }(),
        ds = function () {
          function t(t) {
            this.delegate = t, this.data = this.delegate.data
          }
          return t.prototype.destroyNode = function (t) {
            ! function (t) {
              $n.delete(t.nativeNode)
            }(Yn(t)), this.delegate.destroyNode && this.delegate.destroyNode(t)
          }, t.prototype.destroy = function () {
            this.delegate.destroy()
          }, t.prototype.createElement = function (t, e) {
            var n = this.delegate.createElement(t, e),
              r = ps();
            if (r) {
              var o = new Kn(n, null, r);
              o.name = t, Xn(o)
            }
            return n
          }, t.prototype.createComment = function (t) {
            var e = this.delegate.createComment(t),
              n = ps();
            return n && Xn(new Zn(e, null, n)), e
          }, t.prototype.createText = function (t) {
            var e = this.delegate.createText(t),
              n = ps();
            return n && Xn(new Zn(e, null, n)), e
          }, t.prototype.appendChild = function (t, e) {
            var n = Yn(t),
              r = Yn(e);
            n && r && n instanceof Kn && n.addChild(r), this.delegate.appendChild(t, e)
          }, t.prototype.insertBefore = function (t, e, n) {
            var r = Yn(t),
              o = Yn(e),
              i = Yn(n);
            r && o && r instanceof Kn && r.insertBefore(i, o), this.delegate.insertBefore(t, e, n)
          }, t.prototype.removeChild = function (t, e) {
            var n = Yn(t),
              r = Yn(e);
            n && r && n instanceof Kn && n.removeChild(r), this.delegate.removeChild(t, e)
          }, t.prototype.selectRootElement = function (t) {
            var e = this.delegate.selectRootElement(t),
              n = ps();
            return n && Xn(new Kn(e, null, n)), e
          }, t.prototype.setAttribute = function (t, e, n, r) {
            var o = Yn(t);
            o && o instanceof Kn && (o.attributes[r ? r + ":" + e : e] = n), this.delegate.setAttribute(t, e, n, r)
          }, t.prototype.removeAttribute = function (t, e, n) {
            var r = Yn(t);
            r && r instanceof Kn && (r.attributes[n ? n + ":" + e : e] = null), this.delegate.removeAttribute(t, e, n)
          }, t.prototype.addClass = function (t, e) {
            var n = Yn(t);
            n && n instanceof Kn && (n.classes[e] = !0), this.delegate.addClass(t, e)
          }, t.prototype.removeClass = function (t, e) {
            var n = Yn(t);
            n && n instanceof Kn && (n.classes[e] = !1), this.delegate.removeClass(t, e)
          }, t.prototype.setStyle = function (t, e, n, r) {
            var o = Yn(t);
            o && o instanceof Kn && (o.styles[e] = n), this.delegate.setStyle(t, e, n, r)
          }, t.prototype.removeStyle = function (t, e, n) {
            var r = Yn(t);
            r && r instanceof Kn && (r.styles[e] = null), this.delegate.removeStyle(t, e, n)
          }, t.prototype.setProperty = function (t, e, n) {
            var r = Yn(t);
            r && r instanceof Kn && (r.properties[e] = n), this.delegate.setProperty(t, e, n)
          }, t.prototype.listen = function (t, e, n) {
            if ("string" != typeof t) {
              var r = Yn(t);
              r && r.listeners.push(new function (t, e) {
                this.name = t, this.callback = e
              }(e, n))
            }
            return this.delegate.listen(t, e, n)
          }, t.prototype.parentNode = function (t) {
            return this.delegate.parentNode(t)
          }, t.prototype.nextSibling = function (t) {
            return this.delegate.nextSibling(t)
          }, t.prototype.setValue = function (t, e) {
            return this.delegate.setValue(t, e)
          }, t
        }(),
        ms = function (t) {
          function e(e, n, r) {
            var o = t.call(this) || this;
            return o.moduleType = e, o._bootstrapComponents = n, o._ngModuleDefFactory = r, o
          }
          return o(e, t), e.prototype.create = function (t) {
            ! function () {
              if (!Aa) {
                Aa = !0;
                var t = Pn() ? {
                  setCurrentNode: Ja,
                  createRootView: Ra,
                  createEmbeddedView: Na,
                  createComponentView: Ma,
                  createNgModuleRef: ja,
                  overrideProvider: Ha,
                  overrideComponentView: Ba,
                  clearOverrides: za,
                  checkAndUpdateView: Qa,
                  checkNoChangesView: Wa,
                  destroyView: Za,
                  createDebugContext: function (t, e) {
                    return new us(t, e)
                  },
                  handleEvent: ts,
                  updateDirectives: es,
                  updateRenderer: ns
                } : {
                  setCurrentNode: function () {},
                  createRootView: Ia,
                  createEmbeddedView: ha,
                  createComponentView: fa,
                  createNgModuleRef: wi,
                  overrideProvider: ao,
                  overrideComponentView: ao,
                  clearOverrides: ao,
                  checkAndUpdateView: va,
                  checkNoChangesView: ga,
                  destroyView: Ea,
                  createDebugContext: function (t, e) {
                    return new us(t, e)
                  },
                  handleEvent: function (t, e, n, r) {
                    return t.def.handleEvent(t, e, n, r)
                  },
                  updateDirectives: function (t, e) {
                    return t.def.updateDirectives(0 === e ? qa : Ga, t)
                  },
                  updateRenderer: function (t, e) {
                    return t.def.updateRenderer(0 === e ? qa : Ga, t)
                  }
                };
                no.setCurrentNode = t.setCurrentNode, no.createRootView = t.createRootView, no.createEmbeddedView = t.createEmbeddedView, no.createComponentView = t.createComponentView, no.createNgModuleRef = t.createNgModuleRef, no.overrideProvider = t.overrideProvider, no.overrideComponentView = t.overrideComponentView, no.clearOverrides = t.clearOverrides, no.checkAndUpdateView = t.checkAndUpdateView, no.checkNoChangesView = t.checkNoChangesView, no.destroyView = t.destroyView, no.resolveDep = zi, no.createDebugContext = t.createDebugContext, no.handleEvent = t.handleEvent, no.updateDirectives = t.updateDirectives, no.updateRenderer = t.updateRenderer, no.dirtyParentQueries = Ki
              }
            }();
            var e = function (t) {
              var e = Array.from(t.providers),
                n = Array.from(t.modules),
                r = {};
              for (var o in t.providersByKey) r[o] = t.providersByKey[o];
              return {
                factory: t.factory,
                isRoot: t.isRoot,
                providers: e,
                modules: n,
                providersByKey: r
              }
            }(Io(this._ngModuleDefFactory));
            return no.createNgModuleRef(this.moduleType, t || Yt.NULL, this._bootstrapComponents, e)
          }, e
        }(sn);

      function ys(t, e, n) {
        t != e && vs(n)
      }

      function gs(t, e) {
        null == t && vs(e)
      }

      function vs(t) {
        throw new Error("ASSERTION ERROR: " + t)
      }
      var _s = 16,
        bs = 0,
        ws = 1,
        Cs = 2,
        Es = 3,
        Ss = 4,
        xs = 5,
        ks = 6,
        Ps = 7,
        Ts = 8,
        Os = 9,
        As = 10,
        Is = 11,
        Rs = 14;

      function Ds(t, e, n) {
        t.afterContentInit && (e.contentHooks || (e.contentHooks = [])).push(n, t.afterContentInit), t.afterContentChecked && ((e.contentHooks || (e.contentHooks = [])).push(n, t.afterContentChecked), (e.contentCheckHooks || (e.contentCheckHooks = [])).push(n, t.afterContentChecked))
      }

      function Ns(t, e, n) {
        t.afterViewInit && (e.viewHooks || (e.viewHooks = [])).push(n, t.afterViewInit), t.afterViewChecked && ((e.viewHooks || (e.viewHooks = [])).push(n, t.afterViewChecked), (e.viewCheckHooks || (e.viewCheckHooks = [])).push(n, t.afterViewChecked))
      }

      function Ms(t, e, n) {
        null != t.onDestroy && (e.destroyHooks || (e.destroyHooks = [])).push(n, t.onDestroy)
      }

      function js(t, e, n) {
        16 & t[Ss] && (Fs(t[Ps], e.initHooks, e.checkHooks, n), t[Ss] &= -17)
      }

      function Fs(t, e, n, r) {
        var o = r ? e : n;
        o && Vs(t, o)
      }

      function Vs(t, e) {
        for (var n = 0; n < e.length; n += 2) e[n + 1].call(t[e[n]])
      }
      "undefined" == typeof ngDevMode || ngDevMode;
      var Ls = 0,
        Hs = 4,
        Bs = "ngProjectAs";

      function zs(t) {
        return !!t.listen
      }
      var Us = {
        createRenderer: function (t, e) {
          return document
        }
      };

      function qs(t, e) {
        gs(t, "should be called with a node"), ys(t.tNode.type, e, "should be a " + function (t) {
          return 1 == t ? "Projection" : 0 == t ? "Container" : 2 == t ? "View" : 3 == t ? "Element" : "<unknown>"
        }(e))
      }

      function Gs(t) {
        return Array.isArray(t) ? t[0] : t
      }

      function Qs(t) {
        if (2 === t.tNode.type) {
          var e = t.data;
          return e[Cs] ? e[Cs][xs] : null
        }
        return t.tNode.next ? t.view[t.tNode.next.index] : null
      }

      function Ws(t) {
        return t.tNode.child ? Gs((2 === t.tNode.type ? t.data : t.view)[t.tNode.child.index]) : null
      }

      function Zs(t) {
        if (-1 === t.tNode.index && 2 === t.tNode.type) {
          var e = t.data[Rs];
          return -1 === e ? null : t.view[e].dynamicLContainerNode
        }
        var n = t.tNode.parent;
        return Gs(n ? t.view[n.index] : t.view[xs])
      }
      var Ks = [];

      function $s(t) {
        for (var e = t[xs]; 2 === e.tNode.type;) ngDevMode && gs(t[ws], "lViewData.parent"), e = (t = t[ws])[xs];
        return ngDevMode && qs(e, 3), ngDevMode && gs(e.data, "node.data"), e
      }

      function Ys(t, e, n, r, o) {
        0 === t ? zs(e) ? e.insertBefore(n, r, o) : n.insertBefore(r, o, !0) : 1 === t ? zs(e) ? e.removeChild(n, r) : n.removeChild(r) : 2 === t && (ngDevMode && ngDevMode.rendererDestroyNode++, e.destroyNode(r))
      }

      function Xs(t) {
        if (-1 === t[bs].childIndex) return null;
        var e = t[t[bs].childIndex];
        return e.data ? e.data : e.dynamicLContainerNode.data
      }

      function Js(t, e) {
        var n;
        return (n = t[xs]) && 2 === n.tNode.type ? Zs(n).data : t[ws] === e ? null : t[ws]
      }

      function tl(t) {
        if (t[bs]) {
          var e = t;
          ! function (t) {
            var e = t[bs].cleanup;
            if (null != e) {
              for (var n = 0; n < e.length - 1; n += 2) "string" == typeof e[n] ? (Gs(t[e[n + 1]]).native.removeEventListener(e[n], t[Ts][e[n + 2]], e[n + 3]), n += 2) : "number" == typeof e[n] ? (0, t[Ts][e[n]])() : e[n].call(t[Ts][e[n + 1]]);
              t[Ts] = null
            }
          }(e),
          function (t) {
            var e, n = t[bs];
            null != n && null != (e = n.destroyHooks) && Vs(t[Ps], e)
          }(e), (r = (n = e)[bs] && n[bs].pipeDestroyHooks) && Vs(n, r), -1 === e[bs].id && zs(e[Is]) && (ngDevMode && ngDevMode.rendererDestroy++, e[Is].destroy())
        }
        var n, r
      }
      var el, nl, rl, ol, il, al, sl, ll, ul, cl = "__ngHostLNode__",
        hl = Promise.resolve(null),
        pl = [0, 0],
        fl = new Array(_s).fill(null),
        dl = !1,
        ml = !0;

      function yl(t, e) {
        var n = ll;
        return ul = t && t[Ps], il = t && t[bs], sl = t && 1 == (1 & t[Ss]), ml = t && il.firstTemplatePass, el = t && t[Is], null != e && (rl = e, ol = !0), ll = t, al = t && t[Es], n
      }

      function gl(t, e) {
        e || (dl || Fs(ul, il.viewHooks, il.viewCheckHooks, sl), ll[Ss] &= -6), ll[Ss] |= 16, ll[ks] = -1, yl(t, null)
      }

      function vl() {
        dl || js(ll, il, sl),
          function (t) {
            for (var e = Xs(ll); null !== e; e = e[Cs])
              if (e.length < _s && null === e[Ls])
                for (var n = e, r = 0; r < n[Hs].length; r++) {
                  var o = n[Hs][r],
                    i = o.data;
                  ngDevMode && gs(i[bs], "TView must be allocated"), Cl(o, i[bs], i[Os], 2)
                }
          }(), dl || Fs(ul, il.contentHooks, il.contentCheckHooks, sl), il.firstTemplatePass = ml = !1, _l(il.hostBindings),
          function (t) {
            if (null != t.contentQueries)
              for (var e = 0; e < t.contentQueries.length; e += 2) {
                var n = t.contentQueries[e];
                t.directives[n].contentQueriesRefresh(n, t.contentQueries[e + 1])
              }
          }(il),
          function (t) {
            if (null != t)
              for (var e = 0; e < t.length; e += 2) Al(t[e], t[e + 1])
          }(il.components)
      }

      function _l(t) {
        if (null != t)
          for (var e = il.directives, n = 0; n < t.length; n += 2) {
            var r = t[n],
              o = e[r];
            o.hostBindings && o.hostBindings(r, t[n + 1])
          }
      }

      function bl(t, e, n, r, o) {
        return [e, ll, null, null, 25 | r, null, -1, null, null, n, ll && ll[As], t, o || null, null, -1, null]
      }

      function wl(t, e, n, r, o, i) {
        var a = ol ? rl : rl && Zs(rl),
          s = a && a.view === ll ? a.tNode : null,
          l = (ol ? al : rl && rl.queries) || a && a.queries && a.queries.child(),
          u = null != i,
          c = function (t, e, n, r, o, i) {
            return {
              native: r,
              view: ll,
              nodeInjector: n ? n.nodeInjector : null,
              data: o,
              queries: i,
              tNode: null,
              dynamicLContainerNode: null
            }
          }(0, 0, a, n, u ? i : null, l);
        if (-1 === t || 2 === e) c.tNode = (i ? i[bs].node : null) || Ol(e, t, null, null, s, null);
        else {
          var h = t + _s;
          ngDevMode && Fl(h);
          var p = il.data;
          if (ll[h] = c, h >= p.length) {
            var f = p[h] = Ol(e, h, r, o, s, null);
            if (!ol && rl) {
              var d = rl.tNode;
              d.next = f, d.dynamicContainerNode && (d.dynamicContainerNode.next = f)
            }
          }
          c.tNode = p[h], ol && (al = null, (null == rl.tNode.child && rl.view === ll || 2 === rl.tNode.type) && (rl.tNode.child = c.tNode))
        }
        if (2 == (2 & e) && u) {
          var m = i;
          ngDevMode && null != m[xs] && vs("lViewData[HOST_NODE] should not have been initialized"), m[xs] = c, ml && (m[bs].node = c.tNode)
        }
        return rl = c, ol = !0, c
      }

      function Cl(t, e, n, r) {
        var o, i = ol,
          a = rl;
        if (null == t.data[ws] && t.data[Os] && !e.template) Rl(t.data[Os]);
        else try {
          ol = !0, rl = null, o = yl(t.data, t), kl(), e.template(r, n), 2 & r ? vl() : t.data[bs].firstTemplatePass = ml = !1
        } finally {
          gl(o, 1 == (1 & r)), ol = i, rl = a
        }
        return t
      }

      function El(t, e, n, r) {
        var o = yl(e, t);
        try {
          nl.begin && nl.begin(), r ? (kl(), r(Sl(e), n), vl()) : (dl || (js(ll, il, sl), Fs(ul, il.contentHooks, il.contentCheckHooks, sl)), _l(pl), Al(0, _s))
        } finally {
          nl.end && nl.end(), gl(o)
        }
      }

      function Sl(t) {
        return 1 & t[Ss] ? 3 : 2
      }
      var xl = null;

      function kl() {
        xl = null
      }

      function Pl(t, e, n, r, o) {
        return ngDevMode && ngDevMode.tView++, {
          id: t,
          template: e,
          viewQuery: o,
          node: null,
          data: fl.slice(),
          childIndex: -1,
          bindingStartIndex: -1,
          directives: null,
          firstTemplatePass: !0,
          initHooks: null,
          checkHooks: null,
          contentHooks: null,
          contentCheckHooks: null,
          viewHooks: null,
          viewCheckHooks: null,
          destroyHooks: null,
          pipeDestroyHooks: null,
          cleanup: null,
          hostBindings: null,
          contentQueries: null,
          components: null,
          directiveRegistry: "function" == typeof n ? n() : n,
          pipeRegistry: "function" == typeof r ? r() : r,
          currentMatches: null
        }
      }

      function Tl(t, e) {
        ngDevMode && jl(-1), nl = t;
        var n, r = t.createRenderer(null, null),
          o = "string" == typeof e ? zs(r) ? r.selectRootElement(e) : r.querySelector(e) : e;
        if (ngDevMode && !o) throw new Error("Renderer: " + ("string" == typeof e ? "Host node with selector not found:" : "Host node is required:") + " [" + ("function" == typeof (n = e) ? n.name || n : "string" == typeof n ? n : null == n ? "" : "" + n) + "]");
        return o
      }

      function Ol(t, e, n, r, o, i) {
        return ngDevMode && ngDevMode.tNode++, {
          type: t,
          index: e,
          flags: 0,
          tagName: n,
          attrs: r,
          localNames: null,
          initialInputs: void 0,
          inputs: void 0,
          outputs: void 0,
          tViews: i,
          next: null,
          child: null,
          parent: o,
          dynamicContainerNode: null,
          detached: null,
          stylingTemplate: null,
          projection: null
        }
      }

      function Al(t, e) {
        ngDevMode && jl(e);
        var n = ll[e];
        ngDevMode && qs(n, 3), ngDevMode && gs(n.data, "Component's host node should have an LViewData attached.");
        var r = n.data;
        Il(r) && 6 & r[Ss] && (ngDevMode && jl(t, ul), Ml(r, n, ul[t]))
      }

      function Il(t) {
        return 8 == (8 & t[Ss])
      }

      function Rl(t) {
        for (var e = 0; e < t.components.length; e++) {
          var n = t.components[e],
            r = Vl(n);
          ngDevMode && gs(r.data, "Component host node should be attached to an LView"), El(r, Dl(n), n)
        }
      }

      function Dl(t) {
        ngDevMode && gs(t, "component");
        for (var e = Vl(t).view; e[ws];) e = e[ws];
        return e
      }

      function Nl(t) {
        var e = Vl(t);
        ngDevMode && gs(e.data, "Component host node should be attached to an LViewData instance."), Ml(e.data, e, t)
      }

      function Ml(t, e, n) {
        var r = yl(t, e),
          o = t[bs],
          i = o.template,
          a = o.viewQuery;
        try {
          kl(),
            function (e, n, r) {
              e && 1 & t[Ss] && e(1, r)
            }(a, 0, n), i(Sl(t), n), vl(),
            function (t, e) {
              t && t(2, e)
            }(a, n)
        } finally {
          gl(r)
        }
      }

      function jl(t, e) {
        null == e && (e = ll),
          function (t, e) {
            t >= (e ? e.length : 0) && vs("index expected to be a valid data index")
          }(t, e || ll)
      }

      function Fl(t, e) {
        null == e && (e = ll), ys(e.length, t, "index " + t + " expected to be at the end of arr (length " + e.length + ")")
      }

      function Vl(t) {
        ngDevMode && gs(t, "expecting component got null");
        var e = t[cl];
        return ngDevMode && gs(t, "object is not a component"), e
      }
      var Ll = hl;

      function Hl(t) {
        return {
          components: [],
          scheduler: t,
          clean: Ll
        }
      }
      var Bl = function () {
          function t(t, e) {
            this._view = t, this._appRef = null, this._viewContainerRef = null, this._lViewNode = null, this.context = e
          }
          return t.prototype._setComponentContext = function (t, e) {
            this._view = t, this.context = e
          }, Object.defineProperty(t.prototype, "destroyed", {
            get: function () {
              return 32 == (32 & this._view[Ss])
            },
            enumerable: !0,
            configurable: !0
          }), t.prototype.destroy = function () {
            var t, e;
            this._viewContainerRef && Il(this._view) && (this._viewContainerRef.detach(this._viewContainerRef.indexOf(this)), this._viewContainerRef = null), zs(e = (t = this._view)[Is]) && e.destroyNode && function (e, n, r, o, i, a) {
                for (var s = t[xs], l = -1; s;) {
                  var u = null,
                    c = s.tNode.type;
                  if (3 === c) Ys(2, o, null, s.native, a), s.dynamicLContainerNode && Ys(2, o, null, s.dynamicLContainerNode.native, a);
                  else if (0 === c) {
                    Ys(2, o, null, s.native, a);
                    var h = s,
                      p = h.dynamicLContainerNode ? h.dynamicLContainerNode.data : h.data;
                    (u = p[Hs].length ? Ws(p[Hs][0]) : null) && (a = h.dynamicLContainerNode ? h.dynamicLContainerNode.native : h.native)
                  } else if (1 === c) {
                    var f = $s(s.view),
                      d = f.tNode.projection[s.tNode.projection];
                    Ks[++l] = s, u = d ? f.data[ws][d.index] : null
                  } else u = Ws(s);
                  if (null === u)
                    for (null === (u = Qs(s)) && 8192 & s.tNode.flags && (u = Qs(Ks[l--])); s && !u;) {
                      if (null === (s = Zs(s)) || s === n) return null;
                      s.tNode.next || 0 !== c || (a = s.native), u = Qs(s)
                    }
                  s = u
                }
              }(0, t[xs], 0, e),
              function (t) {
                if (-1 === t[bs].childIndex) return tl(t);
                for (var e = Xs(t); e;) {
                  var n = null;
                  if (e.length >= _s ? e[bs].childIndex > -1 && (n = Xs(e)) : e[Hs].length && (n = e[Hs][0].data), null == n) {
                    for (; e && !e[Cs] && e !== t;) tl(e), e = Js(e, t);
                    tl(e || t), n = e && e[Cs]
                  }
                  e = n
                }
              }(t), t[Ss] |= 32
          }, t.prototype.onDestroy = function (t) {
            var e, n;
            n = t,
              function (t) {
                return t[Ts] || (t[Ts] = [])
              }(e = this._view).push(n), e[bs].firstTemplatePass && function (t) {
                return t[bs].cleanup || (t[bs].cleanup = [])
              }(e).push(e[Ts].length - 1, null)
          }, t.prototype.markForCheck = function () {
            ! function (t) {
              for (var e = t; null != e[ws];) e[Ss] |= 4, e = e[ws];
              var n, r;
              e[Ss] |= 4, ngDevMode && gs(e[Os], "rootContext"), (n = e[Os]).clean == hl && (n.clean = new Promise(function (t) {
                return r = t
              }), n.scheduler(function () {
                Rl(n), r(null), n.clean = hl
              }))
            }(this._view)
          }, t.prototype.detach = function () {
            this._view[Ss] &= -9
          }, t.prototype.reattach = function () {
            this._view[Ss] |= 8
          }, t.prototype.detectChanges = function () {
            Nl(this.context)
          }, t.prototype.checkNoChanges = function () {
            ! function (t) {
              dl = !0;
              try {
                Nl(t)
              } finally {
                dl = !1
              }
            }(this.context)
          }, t.prototype.attachToViewContainerRef = function (t) {
            this._viewContainerRef = t
          }, t.prototype.detachFromAppRef = function () {
            this._appRef = null
          }, t.prototype.attachToAppRef = function (t) {
            this._appRef = t
          }, t
        }(),
        zl = function (t) {
          function e() {
            return null !== t && t.apply(this, arguments) || this
          }
          return o(e, t), e.prototype.resolveComponentFactory = function (t) {
            return ngDevMode && (void 0 === e && (e = "Type passed in is not ComponentType, it does not have 'ngComponentDef' property."), t.ngComponentDef || vs(e)), new Ql(t.ngComponentDef);
            var e
          }, e
        }(nn);

      function Ul(t) {
        var e = [];
        for (var n in t) t.hasOwnProperty(n) && e.push({
          propName: t[n],
          templateName: n
        });
        return e
      }
      var ql = new bt("ROOT_CONTEXT_TOKEN", {
          providedIn: "root",
          factory: function () {
            return Hl(fe(Gl))
          }
        }),
        Gl = new bt("SCHEDULER_TOKEN", {
          providedIn: "root",
          factory: function () {
            return requestAnimationFrame.bind(window)
          }
        }),
        Ql = function (t) {
          function e(e) {
            var n = t.call(this) || this;
            return n.componentDef = e, n.componentType = e.type, n.selector = e.selectors[0][0], n.ngContentSelectors = [], n
          }
          return o(e, t), Object.defineProperty(e.prototype, "inputs", {
            get: function () {
              return Ul(this.componentDef.inputs)
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(e.prototype, "outputs", {
            get: function () {
              return Ul(this.componentDef.outputs)
            },
            enumerable: !0,
            configurable: !0
          }), e.prototype.create = function (t, e, n, r) {
            var o, i, a = void 0 === n,
              s = r ? r.injector.get(Mn) : Us,
              l = a ? (o = this.selector, zs(i = s.createRenderer(null, this.componentDef.rendererType) || el) ? i.createElement(o, xl) : null === xl ? i.createElement(o) : i.createElementNS(xl, o)) : Tl(s, n),
              u = r && !a ? r.injector.get(ql) : Hl(requestAnimationFrame.bind(window)),
              c = bl(s.createRenderer(l, this.componentDef.rendererType), Pl(-1, null, null, null, null), u, this.componentDef.onPush ? 4 : 2);
            c[As] = r && r.injector || null;
            var h, p, f = yl(c, null);
            try {
              if (s.begin && s.begin(), p = function (t, e, n, r) {
                  ol = !1, rl = null;
                  var o, i = wl(0, 3, e, null, null, bl(el, (o = n.template).ngPrivateData || (o.ngPrivateData = Pl(-1, o, n.directiveDefs, n.pipeDefs, n.viewQuery)), null, n.onPush ? 4 : 2, r));
                  return ml && (i.tNode.flags = 4096, n.diPublic && n.diPublic(n), il.directives = [n]), i
                }(0, l, this.componentDef), u.components.push(h = function (t, e, n) {
                  if (ngDevMode && ys(ll[ks], -1, "directives should be created before any bindings"), ngDevMode && ys(ol, !0, "previousOrParentNode should be a parent"), Object.defineProperty(e, cl, {
                      enumerable: !1,
                      value: rl
                    }), null == ul && (ll[Ps] = ul = []), ngDevMode && Fl(t, ul), ul[t] = e, ml) {
                    var r = rl.tNode.flags;
                    0 == (4095 & r) ? rl.tNode.flags = t << 14 | 4096 & r | 1 : (ngDevMode && 4095 == (4095 & r) && vs("Reached the max number of directives"), rl.tNode.flags++)
                  } else {
                    var o = n.diPublic;
                    o && o(n)
                  }
                  return null != n.attributes && 3 == rl.tNode.type && function (t, e) {
                    for (var n = zs(el), r = 0; r < e.length;) {
                      var o = e[r];
                      if (1 === o) break;
                      if (o === Bs) r += 2;
                      else if (ngDevMode && ngDevMode.rendererSetAttribute++, 0 === o) {
                        var i = e[r + 1],
                          a = e[r + 2],
                          s = e[r + 3];
                        n ? el.setAttribute(t, a, s, i) : t.setAttributeNS(i, a, s), r += 4
                      } else s = e[r + 1], n ? el.setAttribute(t, o, s) : t.setAttribute(o, s), r += 2
                    }
                  }(rl.native, n.attributes), e
                }(0, this.componentDef.factory(), this.componentDef)), function (t, e, n) {
                  t && null != t.changeDetectorRef && t.changeDetectorRef._setComponentContext(p.data, h)
                }(p.nodeInjector), function (t, e) {
                  var n = Vl(t),
                    r = n.view[bs];
                  (function (t, e, n, r) {
                    ngDevMode && ys(r.firstTemplatePass, !0, "Should only be called on first template pass"), e && (r.initHooks || (r.initHooks = [])).push(0, e), n && ((r.initHooks || (r.initHooks = [])).push(0, n), (r.checkHooks || (r.checkHooks = [])).push(0, n))
                  })(0, e.onInit, e.doCheck, r),
                  function (t, e) {
                    if (e.firstTemplatePass)
                      for (var n = t >> 14, r = n + (4095 & t), o = n; o < r; o++) {
                        var i = e.directives[o];
                        Ds(i, e, o), Ns(i, e, o), Ms(i, e, o)
                      }
                  }(n.tNode.flags, r)
                }(h, this.componentDef), e)
                for (var d = 0, m = p.tNode.projection = [], y = 0; y < e.length; y++) {
                  for (var g = e[y], v = null, _ = null, b = 0; b < g.length; b++) {
                    var w = wl(++d, 3, g[b], null, null);
                    _ ? _.next = w.tNode : v = w.tNode, _ = w.tNode
                  }
                  m.push(v)
                }
              Cl(p, p.data[bs], h, 1), p.data[Ss] &= -2
            } finally {
              yl(f, null), s.end && s.end()
            }
            var C = new Wl(this.componentType, h, c, t, l);
            return a && (C.hostView._lViewNode.tNode.child = p.tNode), C
          }, e
        }($e),
        Wl = function (t) {
          function e(e, n, r, o, i) {
            var a = t.call(this) || this;
            return a.destroyCbs = [], a.instance = n, a.hostView = a.changeDetectorRef = new Bl(r, n), a.hostView._lViewNode = wl(-1, 2, null, null, null, r), a.injector = o, a.location = new Vn(i), a.componentType = e, a
          }
          return o(e, t), e.prototype.destroy = function () {
            ngDevMode && gs(this.destroyCbs, "NgModule already destroyed"), this.destroyCbs.forEach(function (t) {
              return t()
            }), this.destroyCbs = null
          }, e.prototype.onDestroy = function (t) {
            ngDevMode && gs(this.destroyCbs, "NgModule already destroyed"), this.destroyCbs.push(t)
          }, e
        }(Ke),
        Zl = {
          provide: nn,
          useFactory: function () {
            return new zl
          },
          deps: []
        },
        Kl = function (t) {
          function e(e, n) {
            var r = t.call(this) || this;
            r._bootstrapComponents = [], r.destroyCbs = [];
            var o = e.ngModuleDef;
            return ngDevMode && gs(o, "NgModule '" + Vt(e) + "' is not a subtype of 'NgModuleType'."), r._bootstrapComponents = o.bootstrap, r.injector = function (t, e, n) {
              return void 0 === e && (e = null), void 0 === n && (n = null), e = e || Oe(), new Ae(t, n, e)
            }(e, n, [Zl, {
              provide: an,
              useValue: r
            }]), r.instance = r.injector.get(e), r.componentFactoryResolver = new zl, r
          }
          return o(e, t), e.prototype.destroy = function () {
            ngDevMode && gs(this.destroyCbs, "NgModule already destroyed"), this.destroyCbs.forEach(function (t) {
              return t()
            }), this.destroyCbs = null
          }, e.prototype.onDestroy = function (t) {
            ngDevMode && gs(this.destroyCbs, "NgModule already destroyed"), this.destroyCbs.push(t)
          }, e
        }(an);
      ! function (t) {
        function e(e) {
          var n = t.call(this) || this;
          return n.moduleType = e, n
        }
        o(e, t), e.prototype.create = function (t) {
          return new Kl(this.moduleType, t)
        }
      }(sn);
      var $l = function () {},
        Yl = new bt("Location Initialized"),
        Xl = function () {},
        Jl = new bt("appBaseHref"),
        tu = function () {
          function t(t) {
            var n = this;
            this._subject = new pn, this._platformStrategy = t;
            var r = this._platformStrategy.getBaseHref();
            this._baseHref = e.stripTrailingSlash(eu(r)), this._platformStrategy.onPopState(function (t) {
              n._subject.emit({
                url: n.path(!0),
                pop: !0,
                state: t.state,
                type: t.type
              })
            })
          }
          var e;
          return e = t, t.prototype.path = function (t) {
            return void 0 === t && (t = !1), this.normalize(this._platformStrategy.path(t))
          }, t.prototype.isCurrentPathEqualTo = function (t, n) {
            return void 0 === n && (n = ""), this.path() == this.normalize(t + e.normalizeQueryParams(n))
          }, t.prototype.normalize = function (t) {
            return e.stripTrailingSlash(function (t, e) {
              return t && e.startsWith(t) ? e.substring(t.length) : e
            }(this._baseHref, eu(t)))
          }, t.prototype.prepareExternalUrl = function (t) {
            return t && "/" !== t[0] && (t = "/" + t), this._platformStrategy.prepareExternalUrl(t)
          }, t.prototype.go = function (t, e, n) {
            void 0 === e && (e = ""), void 0 === n && (n = null), this._platformStrategy.pushState(n, "", t, e)
          }, t.prototype.replaceState = function (t, e, n) {
            void 0 === e && (e = ""), void 0 === n && (n = null), this._platformStrategy.replaceState(n, "", t, e)
          }, t.prototype.forward = function () {
            this._platformStrategy.forward()
          }, t.prototype.back = function () {
            this._platformStrategy.back()
          }, t.prototype.subscribe = function (t, e, n) {
            return this._subject.subscribe({
              next: t,
              error: e,
              complete: n
            })
          }, t.normalizeQueryParams = function (t) {
            return t && "?" !== t[0] ? "?" + t : t
          }, t.joinWithSlash = function (t, e) {
            if (0 == t.length) return e;
            if (0 == e.length) return t;
            var n = 0;
            return t.endsWith("/") && n++, e.startsWith("/") && n++, 2 == n ? t + e.substring(1) : 1 == n ? t + e : t + "/" + e
          }, t.stripTrailingSlash = function (t) {
            var e = t.match(/#|\?|$/),
              n = e && e.index || t.length;
            return t.slice(0, n - ("/" === t[n - 1] ? 1 : 0)) + t.slice(n)
          }, t
        }();

      function eu(t) {
        return t.replace(/\/index.html$/, "")
      }
      var nu = function (t) {
          function e(e, n) {
            var r = t.call(this) || this;
            return r._platformLocation = e, r._baseHref = "", null != n && (r._baseHref = n), r
          }
          return o(e, t), e.prototype.onPopState = function (t) {
            this._platformLocation.onPopState(t), this._platformLocation.onHashChange(t)
          }, e.prototype.getBaseHref = function () {
            return this._baseHref
          }, e.prototype.path = function (t) {
            void 0 === t && (t = !1);
            var e = this._platformLocation.hash;
            return null == e && (e = "#"), e.length > 0 ? e.substring(1) : e
          }, e.prototype.prepareExternalUrl = function (t) {
            var e = tu.joinWithSlash(this._baseHref, t);
            return e.length > 0 ? "#" + e : e
          }, e.prototype.pushState = function (t, e, n, r) {
            var o = this.prepareExternalUrl(n + tu.normalizeQueryParams(r));
            0 == o.length && (o = this._platformLocation.pathname), this._platformLocation.pushState(t, e, o)
          }, e.prototype.replaceState = function (t, e, n, r) {
            var o = this.prepareExternalUrl(n + tu.normalizeQueryParams(r));
            0 == o.length && (o = this._platformLocation.pathname), this._platformLocation.replaceState(t, e, o)
          }, e.prototype.forward = function () {
            this._platformLocation.forward()
          }, e.prototype.back = function () {
            this._platformLocation.back()
          }, a([s(1, zt()), s(1, Bt(Jl))], e)
        }(Xl),
        ru = function (t) {
          function e(e, n) {
            var r = t.call(this) || this;
            if (r._platformLocation = e, null == n && (n = r._platformLocation.getBaseHrefFromDOM()), null == n) throw new Error("No base href set. Please provide a value for the APP_BASE_HREF token or add a base element to the document.");
            return r._baseHref = n, r
          }
          return o(e, t), e.prototype.onPopState = function (t) {
            this._platformLocation.onPopState(t), this._platformLocation.onHashChange(t)
          }, e.prototype.getBaseHref = function () {
            return this._baseHref
          }, e.prototype.prepareExternalUrl = function (t) {
            return tu.joinWithSlash(this._baseHref, t)
          }, e.prototype.path = function (t) {
            void 0 === t && (t = !1);
            var e = this._platformLocation.pathname + tu.normalizeQueryParams(this._platformLocation.search),
              n = this._platformLocation.hash;
            return n && t ? "" + e + n : e
          }, e.prototype.pushState = function (t, e, n, r) {
            var o = this.prepareExternalUrl(n + tu.normalizeQueryParams(r));
            this._platformLocation.pushState(t, e, o)
          }, e.prototype.replaceState = function (t, e, n, r) {
            var o = this.prepareExternalUrl(n + tu.normalizeQueryParams(r));
            this._platformLocation.replaceState(t, e, o)
          }, e.prototype.forward = function () {
            this._platformLocation.forward()
          }, e.prototype.back = function () {
            this._platformLocation.back()
          }, a([s(1, zt()), s(1, Bt(Jl))], e)
        }(Xl),
        ou = void 0,
        iu = ["en", [
            ["a", "p"],
            ["AM", "PM"], ou
          ],
          [
            ["AM", "PM"], ou, ou
          ],
          [
            ["S", "M", "T", "W", "T", "F", "S"],
            ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]
          ], ou, [
            ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
            ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
          ], ou, [
            ["B", "A"],
            ["BC", "AD"],
            ["Before Christ", "Anno Domini"]
          ], 0, [6, 0],
          ["M/d/yy", "MMM d, y", "MMMM d, y", "EEEE, MMMM d, y"],
          ["h:mm a", "h:mm:ss a", "h:mm:ss a z", "h:mm:ss a zzzz"],
          ["{1}, {0}", ou, "{1} 'at' {0}", ou],
          [".", ",", ";", "%", "+", "-", "E", "\xd7", "\u2030", "\u221e", "NaN", ":"],
          ["#,##0.###", "#,##0%", "\xa4#,##0.00", "#E0"], "$", "US Dollar", {},
          function (t) {
            var e = Math.floor(Math.abs(t)),
              n = t.toString().replace(/^[^.]*\.?/, "").length;
            return 1 === e && 0 === n ? 1 : 5
          }
        ],
        au = {},
        su = function (t) {
          return t[t.Decimal = 0] = "Decimal", t[t.Percent = 1] = "Percent", t[t.Currency = 2] = "Currency", t[t.Scientific = 3] = "Scientific", t
        }({}),
        lu = function (t) {
          return t[t.Zero = 0] = "Zero", t[t.One = 1] = "One", t[t.Two = 2] = "Two", t[t.Few = 3] = "Few", t[t.Many = 4] = "Many", t[t.Other = 5] = "Other", t
        }({}),
        uu = function (t) {
          return t[t.Format = 0] = "Format", t[t.Standalone = 1] = "Standalone", t
        }({}),
        cu = function (t) {
          return t[t.Narrow = 0] = "Narrow", t[t.Abbreviated = 1] = "Abbreviated", t[t.Wide = 2] = "Wide", t[t.Short = 3] = "Short", t
        }({}),
        hu = function (t) {
          return t[t.Short = 0] = "Short", t[t.Medium = 1] = "Medium", t[t.Long = 2] = "Long", t[t.Full = 3] = "Full", t
        }({}),
        pu = function (t) {
          return t[t.Decimal = 0] = "Decimal", t[t.Group = 1] = "Group", t[t.List = 2] = "List", t[t.PercentSign = 3] = "PercentSign", t[t.PlusSign = 4] = "PlusSign", t[t.MinusSign = 5] = "MinusSign", t[t.Exponential = 6] = "Exponential", t[t.SuperscriptingExponent = 7] = "SuperscriptingExponent", t[t.PerMille = 8] = "PerMille", t[t[1 / 0] = 9] = "Infinity", t[t.NaN = 10] = "NaN", t[t.TimeSeparator = 11] = "TimeSeparator", t[t.CurrencyDecimal = 12] = "CurrencyDecimal", t[t.CurrencyGroup = 13] = "CurrencyGroup", t
        }({});

      function fu(t, e) {
        return vu(bu(t)[10], e)
      }

      function du(t, e) {
        return vu(bu(t)[11], e)
      }

      function mu(t, e) {
        return vu(bu(t)[12], e)
      }

      function yu(t, e) {
        var n = bu(t),
          r = n[13][e];
        if (void 0 === r) {
          if (e === pu.CurrencyDecimal) return n[13][pu.Decimal];
          if (e === pu.CurrencyGroup) return n[13][pu.Group]
        }
        return r
      }

      function gu(t) {
        if (!t[19]) throw new Error('Missing extra locale data for the locale "' + t[0] + '". Use "registerLocaleData" to load new data. See the "I18n guide" on angular.io to know more.')
      }

      function vu(t, e) {
        for (var n = e; n > -1; n--)
          if (void 0 !== t[n]) return t[n];
        throw new Error("Locale data API: locale data undefined")
      }

      function _u(t) {
        var e = c(t.split(":"), 2);
        return {
          hours: +e[0],
          minutes: +e[1]
        }
      }

      function bu(t) {
        var e = t.toLowerCase().replace(/_/g, "-"),
          n = au[e];
        if (n) return n;
        var r = e.split("-")[0];
        if (n = au[r]) return n;
        if ("en" === r) return iu;
        throw new Error('Missing locale data for the locale "' + t + '".')
      }
      var wu = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/,
        Cu = {},
        Eu = /((?:[^GyMLwWdEabBhHmsSzZO']+)|(?:'(?:[^']|'')*')|(?:G{1,5}|y{1,4}|M{1,5}|L{1,5}|w{1,2}|W{1}|d{1,2}|E{1,6}|a{1,5}|b{1,5}|B{1,5}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|O{1,4}))([\s\S]*)/,
        Su = function (t) {
          return t[t.Short = 0] = "Short", t[t.ShortGMT = 1] = "ShortGMT", t[t.Long = 2] = "Long", t[t.Extended = 3] = "Extended", t
        }({}),
        xu = function (t) {
          return t[t.FullYear = 0] = "FullYear", t[t.Month = 1] = "Month", t[t.Date = 2] = "Date", t[t.Hours = 3] = "Hours", t[t.Minutes = 4] = "Minutes", t[t.Seconds = 5] = "Seconds", t[t.FractionalSeconds = 6] = "FractionalSeconds", t[t.Day = 7] = "Day", t
        }({}),
        ku = function (t) {
          return t[t.DayPeriods = 0] = "DayPeriods", t[t.Days = 1] = "Days", t[t.Months = 2] = "Months", t[t.Eras = 3] = "Eras", t
        }({});

      function Pu(t, e) {
        return e && (t = t.replace(/\{([^}]+)}/g, function (t, n) {
          return null != e && n in e ? e[n] : t
        })), t
      }

      function Tu(t, e, n, r, o) {
        void 0 === n && (n = "-");
        var i = "";
        (t < 0 || o && t <= 0) && (o ? t = 1 - t : (t = -t, i = n));
        for (var a = String(t); a.length < e;) a = "0" + a;
        return r && (a = a.substr(a.length - e)), i + a
      }

      function Ou(t, e, n, r, o) {
        return void 0 === n && (n = 0), void 0 === r && (r = !1), void 0 === o && (o = !1),
          function (i, a) {
            var s, l = function (t, e) {
              switch (t) {
                case xu.FullYear:
                  return e.getFullYear();
                case xu.Month:
                  return e.getMonth();
                case xu.Date:
                  return e.getDate();
                case xu.Hours:
                  return e.getHours();
                case xu.Minutes:
                  return e.getMinutes();
                case xu.Seconds:
                  return e.getSeconds();
                case xu.FractionalSeconds:
                  return e.getMilliseconds();
                case xu.Day:
                  return e.getDay();
                default:
                  throw new Error('Unknown DateType value "' + t + '".')
              }
            }(t, i);
            if ((n > 0 || l > -n) && (l += n), t === xu.Hours) 0 === l && -12 === n && (l = 12);
            else if (t === xu.FractionalSeconds) return s = e, Tu(l, 3).substr(0, s);
            var u = yu(a, pu.MinusSign);
            return Tu(l, e, u, r, o)
          }
      }

      function Au(t, e, n, r) {
        return void 0 === n && (n = uu.Format), void 0 === r && (r = !1),
          function (o, i) {
            return function (t, e, n, r, o, i) {
              switch (n) {
                case ku.Months:
                  return function (t, e, n) {
                    var r = bu(t);
                    return vu(vu([r[5], r[6]], e), n)
                  }(e, o, r)[t.getMonth()];
                case ku.Days:
                  return function (t, e, n) {
                    var r = bu(t);
                    return vu(vu([r[3], r[4]], e), n)
                  }(e, o, r)[t.getDay()];
                case ku.DayPeriods:
                  var a = t.getHours(),
                    s = t.getMinutes();
                  if (i) {
                    var l, u = function (t) {
                        var e = bu(t);
                        return gu(e), (e[19][2] || []).map(function (t) {
                          return "string" == typeof t ? _u(t) : [_u(t[0]), _u(t[1])]
                        })
                      }(e),
                      c = function (t, e, n) {
                        var r = bu(t);
                        return gu(r), vu(vu([r[19][0], r[19][1]], e) || [], n) || []
                      }(e, o, r);
                    if (u.forEach(function (t, e) {
                        if (Array.isArray(t)) {
                          var n = t[0],
                            r = t[1],
                            o = r.hours;
                          a >= n.hours && s >= n.minutes && (a < o || a === o && s < r.minutes) && (l = c[e])
                        } else t.hours === a && t.minutes === s && (l = c[e])
                      }), l) return l
                  }
                  return function (t, e, n) {
                    var r = bu(t);
                    return vu(vu([r[1], r[2]], e), n)
                  }(e, o, r)[a < 12 ? 0 : 1];
                case ku.Eras:
                  return function (t, e) {
                    return vu(bu(t)[7], e)
                  }(e, r)[t.getFullYear() <= 0 ? 0 : 1];
                default:
                  throw new Error("unexpected translation type " + n)
              }
            }(o, i, t, e, n, r)
          }
      }

      function Iu(t) {
        return function (e, n, r) {
          var o = -1 * r,
            i = yu(n, pu.MinusSign),
            a = o > 0 ? Math.floor(o / 60) : Math.ceil(o / 60);
          switch (t) {
            case Su.Short:
              return (o >= 0 ? "+" : "") + Tu(a, 2, i) + Tu(Math.abs(o % 60), 2, i);
            case Su.ShortGMT:
              return "GMT" + (o >= 0 ? "+" : "") + Tu(a, 1, i);
            case Su.Long:
              return "GMT" + (o >= 0 ? "+" : "") + Tu(a, 2, i) + ":" + Tu(Math.abs(o % 60), 2, i);
            case Su.Extended:
              return 0 === r ? "Z" : (o >= 0 ? "+" : "") + Tu(a, 2, i) + ":" + Tu(Math.abs(o % 60), 2, i);
            default:
              throw new Error('Unknown zone width "' + t + '"')
          }
        }
      }
      var Ru = 0,
        Du = 4;

      function Nu(t, e) {
        return void 0 === e && (e = !1),
          function (n, r) {
            var o, i, a, s;
            if (e) {
              var l = new Date(n.getFullYear(), n.getMonth(), 1).getDay() - 1,
                u = n.getDate();
              o = 1 + Math.floor((u + l) / 7)
            } else {
              var c = (a = n.getFullYear(), s = new Date(a, Ru, 1).getDay(), new Date(a, 0, 1 + (s <= Du ? Du : Du + 7) - s)),
                h = (i = n, new Date(i.getFullYear(), i.getMonth(), i.getDate() + (Du - i.getDay()))).getTime() - c.getTime();
              o = 1 + Math.round(h / 6048e5)
            }
            return Tu(o, t, yu(r, pu.MinusSign))
          }
      }
      var Mu = {};

      function ju(t, e) {
        t = t.replace(/:/g, "");
        var n = Date.parse("Jan 01, 1970 00:00:00 " + t) / 6e4;
        return isNaN(n) ? e : n
      }

      function Fu(t) {
        return t instanceof Date && !isNaN(t.valueOf())
      }
      var Vu = /^(\d+)?\.((\d+)(-(\d+))?)?$/;

      function Lu(t) {
        var e = parseInt(t);
        if (isNaN(e)) throw new Error("Invalid integer literal when parsing " + t);
        return e
      }
      var Hu = new bt("UseV4Plurals"),
        Bu = function () {},
        zu = function (t) {
          function e(e, n) {
            var r = t.call(this) || this;
            return r.locale = e, r.deprecatedPluralFn = n, r
          }
          return o(e, t), e.prototype.getPluralCategory = function (t, e) {
            switch (this.deprecatedPluralFn ? this.deprecatedPluralFn(e || this.locale, t) : function (t) {
              return bu(t)[18]
            }(e || this.locale)(t)) {
              case lu.Zero:
                return "zero";
              case lu.One:
                return "one";
              case lu.Two:
                return "two";
              case lu.Few:
                return "few";
              case lu.Many:
                return "many";
              default:
                return "other"
            }
          }, a([s(0, Bt(br)), s(1, zt()), s(1, Bt(Hu))], e)
        }(Bu),
        Uu = function () {
          function t(t, e, n, r) {
            this._iterableDiffers = t, this._keyValueDiffers = e, this._ngEl = n, this._renderer = r, this._initialClasses = []
          }
          return Object.defineProperty(t.prototype, "klass", {
            set: function (t) {
              this._removeClasses(this._initialClasses), this._initialClasses = "string" == typeof t ? t.split(/\s+/) : [], this._applyClasses(this._initialClasses), this._applyClasses(this._rawClass)
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(t.prototype, "ngClass", {
            set: function (t) {
              this._removeClasses(this._rawClass), this._applyClasses(this._initialClasses), this._iterableDiffer = null, this._keyValueDiffer = null, this._rawClass = "string" == typeof t ? t.split(/\s+/) : t, this._rawClass && (nr(this._rawClass) ? this._iterableDiffer = this._iterableDiffers.find(this._rawClass).create() : this._keyValueDiffer = this._keyValueDiffers.find(this._rawClass).create())
            },
            enumerable: !0,
            configurable: !0
          }), t.prototype.ngDoCheck = function () {
            if (this._iterableDiffer) {
              var t = this._iterableDiffer.diff(this._rawClass);
              t && this._applyIterableChanges(t)
            } else if (this._keyValueDiffer) {
              var e = this._keyValueDiffer.diff(this._rawClass);
              e && this._applyKeyValueChanges(e)
            }
          }, t.prototype._applyKeyValueChanges = function (t) {
            var e = this;
            t.forEachAddedItem(function (t) {
              return e._toggleClass(t.key, t.currentValue)
            }), t.forEachChangedItem(function (t) {
              return e._toggleClass(t.key, t.currentValue)
            }), t.forEachRemovedItem(function (t) {
              t.previousValue && e._toggleClass(t.key, !1)
            })
          }, t.prototype._applyIterableChanges = function (t) {
            var e = this;
            t.forEachAddedItem(function (t) {
              if ("string" != typeof t.item) throw new Error("NgClass can only toggle CSS classes expressed as strings, got " + Vt(t.item));
              e._toggleClass(t.item, !0)
            }), t.forEachRemovedItem(function (t) {
              return e._toggleClass(t.item, !1)
            })
          }, t.prototype._applyClasses = function (t) {
            var e = this;
            t && (Array.isArray(t) || t instanceof Set ? t.forEach(function (t) {
              return e._toggleClass(t, !0)
            }) : Object.keys(t).forEach(function (n) {
              return e._toggleClass(n, !!t[n])
            }))
          }, t.prototype._removeClasses = function (t) {
            var e = this;
            t && (Array.isArray(t) || t instanceof Set ? t.forEach(function (t) {
              return e._toggleClass(t, !1)
            }) : Object.keys(t).forEach(function (t) {
              return e._toggleClass(t, !1)
            }))
          }, t.prototype._toggleClass = function (t, e) {
            var n = this;
            (t = t.trim()) && t.split(/\s+/g).forEach(function (t) {
              e ? n._renderer.addClass(n._ngEl.nativeElement, t) : n._renderer.removeClass(n._ngEl.nativeElement, t)
            })
          }, t
        }(),
        qu = function () {
          function t(t, e, n, r) {
            this.$implicit = t, this.ngForOf = e, this.index = n, this.count = r
          }
          return Object.defineProperty(t.prototype, "first", {
            get: function () {
              return 0 === this.index
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(t.prototype, "last", {
            get: function () {
              return this.index === this.count - 1
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(t.prototype, "even", {
            get: function () {
              return this.index % 2 == 0
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(t.prototype, "odd", {
            get: function () {
              return !this.even
            },
            enumerable: !0,
            configurable: !0
          }), t
        }(),
        Gu = function () {
          function t(t, e, n) {
            this._viewContainer = t, this._template = e, this._differs = n, this._ngForOfDirty = !0, this._differ = null
          }
          return Object.defineProperty(t.prototype, "ngForOf", {
            set: function (t) {
              this._ngForOf = t, this._ngForOfDirty = !0
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(t.prototype, "ngForTrackBy", {
            get: function () {
              return this._trackByFn
            },
            set: function (t) {
              Pn() && null != t && "function" != typeof t && console && console.warn && console.warn("trackBy must be a function, but received " + JSON.stringify(t) + ". See https://angular.io/docs/ts/latest/api/common/index/NgFor-directive.html#!#change-propagation for more information."), this._trackByFn = t
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(t.prototype, "ngForTemplate", {
            set: function (t) {
              t && (this._template = t)
            },
            enumerable: !0,
            configurable: !0
          }), t.prototype.ngDoCheck = function () {
            if (this._ngForOfDirty) {
              this._ngForOfDirty = !1;
              var t = this._ngForOf;
              if (!this._differ && t) try {
                this._differ = this._differs.find(t).create(this.ngForTrackBy)
              } catch (n) {
                throw new Error("Cannot find a differ supporting object '" + t + "' of type '" + ((e = t).name || typeof e) + "'. NgFor only supports binding to Iterables such as Arrays.")
              }
            }
            var e;
            if (this._differ) {
              var n = this._differ.diff(this._ngForOf);
              n && this._applyChanges(n)
            }
          }, t.prototype._applyChanges = function (t) {
            var e = this,
              n = [];
            t.forEachOperation(function (t, r, o) {
              if (null == t.previousIndex) {
                var i = e._viewContainer.createEmbeddedView(e._template, new qu(null, e._ngForOf, -1, -1), o),
                  a = new Qu(t, i);
                n.push(a)
              } else null == o ? e._viewContainer.remove(r) : (i = e._viewContainer.get(r), e._viewContainer.move(i, o), a = new Qu(t, i), n.push(a))
            });
            for (var r = 0; r < n.length; r++) this._perViewChange(n[r].view, n[r].record);
            r = 0;
            for (var o = this._viewContainer.length; r < o; r++) {
              var i = this._viewContainer.get(r);
              i.context.index = r, i.context.count = o, i.context.ngForOf = this._ngForOf
            }
            t.forEachIdentityChange(function (t) {
              e._viewContainer.get(t.currentIndex).context.$implicit = t.item
            })
          }, t.prototype._perViewChange = function (t, e) {
            t.context.$implicit = e.item
          }, t
        }(),
        Qu = function (t, e) {
          this.record = t, this.view = e
        },
        Wu = function () {
          function t(t, e) {
            this._viewContainer = t, this._context = new Zu, this._thenTemplateRef = null, this._elseTemplateRef = null, this._thenViewRef = null, this._elseViewRef = null, this._thenTemplateRef = e
          }
          return Object.defineProperty(t.prototype, "ngIf", {
            set: function (t) {
              this._context.$implicit = this._context.ngIf = t, this._updateView()
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(t.prototype, "ngIfThen", {
            set: function (t) {
              Ku("ngIfThen", t), this._thenTemplateRef = t, this._thenViewRef = null, this._updateView()
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(t.prototype, "ngIfElse", {
            set: function (t) {
              Ku("ngIfElse", t), this._elseTemplateRef = t, this._elseViewRef = null, this._updateView()
            },
            enumerable: !0,
            configurable: !0
          }), t.prototype._updateView = function () {
            this._context.$implicit ? this._thenViewRef || (this._viewContainer.clear(), this._elseViewRef = null, this._thenTemplateRef && (this._thenViewRef = this._viewContainer.createEmbeddedView(this._thenTemplateRef, this._context))) : this._elseViewRef || (this._viewContainer.clear(), this._thenViewRef = null, this._elseTemplateRef && (this._elseViewRef = this._viewContainer.createEmbeddedView(this._elseTemplateRef, this._context)))
          }, t
        }(),
        Zu = function () {
          this.$implicit = null, this.ngIf = null
        };

      function Ku(t, e) {
        if (e && !e.createEmbeddedView) throw new Error(t + " must be a TemplateRef, but received '" + Vt(e) + "'.")
      }
      var $u = function () {
          function t(t, e) {
            this._viewContainerRef = t, this._templateRef = e, this._created = !1
          }
          return t.prototype.create = function () {
            this._created = !0, this._viewContainerRef.createEmbeddedView(this._templateRef)
          }, t.prototype.destroy = function () {
            this._created = !1, this._viewContainerRef.clear()
          }, t.prototype.enforceState = function (t) {
            t && !this._created ? this.create() : !t && this._created && this.destroy()
          }, t
        }(),
        Yu = function () {
          function t() {
            this._defaultUsed = !1, this._caseCount = 0, this._lastCaseCheckIndex = 0, this._lastCasesMatched = !1
          }
          return Object.defineProperty(t.prototype, "ngSwitch", {
            set: function (t) {
              this._ngSwitch = t, 0 === this._caseCount && this._updateDefaultCases(!0)
            },
            enumerable: !0,
            configurable: !0
          }), t.prototype._addCase = function () {
            return this._caseCount++
          }, t.prototype._addDefault = function (t) {
            this._defaultViews || (this._defaultViews = []), this._defaultViews.push(t)
          }, t.prototype._matchCase = function (t) {
            var e = t == this._ngSwitch;
            return this._lastCasesMatched = this._lastCasesMatched || e, this._lastCaseCheckIndex++, this._lastCaseCheckIndex === this._caseCount && (this._updateDefaultCases(!this._lastCasesMatched), this._lastCaseCheckIndex = 0, this._lastCasesMatched = !1), e
          }, t.prototype._updateDefaultCases = function (t) {
            if (this._defaultViews && t !== this._defaultUsed) {
              this._defaultUsed = t;
              for (var e = 0; e < this._defaultViews.length; e++) this._defaultViews[e].enforceState(t)
            }
          }, t
        }(),
        Xu = function () {
          function t(t, e, n) {
            this.ngSwitch = n, n._addCase(), this._view = new $u(t, e)
          }
          return t.prototype.ngDoCheck = function () {
            this._view.enforceState(this.ngSwitch._matchCase(this.ngSwitchCase))
          }, a([s(2, Gt())], t)
        }();

      function Ju(t, e) {
        return Error("InvalidPipeArgument: '" + e + "' for pipe '" + Vt(t) + "'")
      }
      var tc = function () {
          function t() {}
          return t.prototype.createSubscription = function (t, e) {
            return t.subscribe({
              next: e,
              error: function (t) {
                throw t
              }
            })
          }, t.prototype.dispose = function (t) {
            t.unsubscribe()
          }, t.prototype.onDestroy = function (t) {
            t.unsubscribe()
          }, t
        }(),
        ec = new(function () {
          function t() {}
          return t.prototype.createSubscription = function (t, e) {
            return t.then(e, function (t) {
              throw t
            })
          }, t.prototype.dispose = function (t) {}, t.prototype.onDestroy = function (t) {}, t
        }()),
        nc = new tc,
        rc = function () {
          function t(t) {
            this._ref = t, this._latestValue = null, this._latestReturnedValue = null, this._subscription = null, this._obj = null, this._strategy = null
          }
          var e;
          return e = t, t.prototype.ngOnDestroy = function () {
            this._subscription && this._dispose()
          }, t.prototype.transform = function (t) {
            return this._obj ? t !== this._obj ? (this._dispose(), this.transform(t)) : this._latestValue === this._latestReturnedValue ? this._latestReturnedValue : (this._latestReturnedValue = this._latestValue, tr.wrap(this._latestValue)) : (t && this._subscribe(t), this._latestReturnedValue = this._latestValue, this._latestValue)
          }, t.prototype._subscribe = function (t) {
            var e = this;
            this._obj = t, this._strategy = this._selectStrategy(t), this._subscription = this._strategy.createSubscription(t, function (n) {
              return e._updateLatestValue(t, n)
            })
          }, t.prototype._selectStrategy = function (t) {
            if (Me(t)) return ec;
            if (je(t)) return nc;
            throw Ju(e, t)
          }, t.prototype._dispose = function () {
            this._strategy.dispose(this._subscription), this._latestValue = null, this._latestReturnedValue = null, this._subscription = null, this._obj = null
          }, t.prototype._updateLatestValue = function (t, e) {
            t === this._obj && (this._latestValue = e, this._ref.markForCheck())
          }, t
        }(),
        oc = function () {
          function t(t) {
            this.locale = t
          }
          var e;
          return e = t, t.prototype.transform = function (t, n, r, o) {
            if (void 0 === n && (n = "mediumDate"), null == t || "" === t || t != t) return null;
            try {
              return function (t, e, n, r) {
                var o = function (t) {
                  if (Fu(t)) return t;
                  if ("number" == typeof t && !isNaN(t)) return new Date(t);
                  if ("string" == typeof t) {
                    t = t.trim();
                    var e, n = parseFloat(t);
                    if (!isNaN(t - n)) return new Date(n);
                    if (/^(\d{4}-\d{1,2}-\d{1,2})$/.test(t)) {
                      var r = c(t.split("-").map(function (t) {
                        return +t
                      }), 3);
                      return new Date(r[0], r[1] - 1, r[2])
                    }
                    if (e = t.match(wu)) return function (t) {
                      var e = new Date(0),
                        n = 0,
                        r = 0,
                        o = t[8] ? e.setUTCFullYear : e.setFullYear,
                        i = t[8] ? e.setUTCHours : e.setHours;
                      t[9] && (n = Number(t[9] + t[10]), r = Number(t[9] + t[11])), o.call(e, Number(t[1]), Number(t[2]) - 1, Number(t[3]));
                      var a = Number(t[4] || 0) - n,
                        s = Number(t[5] || 0) - r,
                        l = Number(t[6] || 0),
                        u = Math.round(1e3 * parseFloat("0." + (t[7] || 0)));
                      return i.call(e, a, s, l, u), e
                    }(e)
                  }
                  var o = new Date(t);
                  if (!Fu(o)) throw new Error('Unable to convert "' + t + '" into a date');
                  return o
                }(t);
                e = function t(e, n) {
                  var r = function (t) {
                    return bu(t)[0]
                  }(e);
                  if (Cu[r] = Cu[r] || {}, Cu[r][n]) return Cu[r][n];
                  var o = "";
                  switch (n) {
                    case "shortDate":
                      o = fu(e, hu.Short);
                      break;
                    case "mediumDate":
                      o = fu(e, hu.Medium);
                      break;
                    case "longDate":
                      o = fu(e, hu.Long);
                      break;
                    case "fullDate":
                      o = fu(e, hu.Full);
                      break;
                    case "shortTime":
                      o = du(e, hu.Short);
                      break;
                    case "mediumTime":
                      o = du(e, hu.Medium);
                      break;
                    case "longTime":
                      o = du(e, hu.Long);
                      break;
                    case "fullTime":
                      o = du(e, hu.Full);
                      break;
                    case "short":
                      var i = t(e, "shortTime"),
                        a = t(e, "shortDate");
                      o = Pu(mu(e, hu.Short), [i, a]);
                      break;
                    case "medium":
                      var s = t(e, "mediumTime"),
                        l = t(e, "mediumDate");
                      o = Pu(mu(e, hu.Medium), [s, l]);
                      break;
                    case "long":
                      var u = t(e, "longTime"),
                        c = t(e, "longDate");
                      o = Pu(mu(e, hu.Long), [u, c]);
                      break;
                    case "full":
                      var h = t(e, "fullTime"),
                        p = t(e, "fullDate");
                      o = Pu(mu(e, hu.Full), [h, p])
                  }
                  return o && (Cu[r][n] = o), o
                }(n, e) || e;
                for (var i, a = []; e;) {
                  if (!(i = Eu.exec(e))) {
                    a.push(e);
                    break
                  }
                  var s = (a = a.concat(i.slice(1))).pop();
                  if (!s) break;
                  e = s
                }
                var l = o.getTimezoneOffset();
                r && (l = ju(r, l), o = function (t, e, n) {
                  var r = t.getTimezoneOffset();
                  return function (t, e) {
                    return (t = new Date(t.getTime())).setMinutes(t.getMinutes() + e), t
                  }(t, -1 * (ju(e, r) - r))
                }(o, r));
                var u = "";
                return a.forEach(function (t) {
                  var e = function (t) {
                    if (Mu[t]) return Mu[t];
                    var e;
                    switch (t) {
                      case "G":
                      case "GG":
                      case "GGG":
                        e = Au(ku.Eras, cu.Abbreviated);
                        break;
                      case "GGGG":
                        e = Au(ku.Eras, cu.Wide);
                        break;
                      case "GGGGG":
                        e = Au(ku.Eras, cu.Narrow);
                        break;
                      case "y":
                        e = Ou(xu.FullYear, 1, 0, !1, !0);
                        break;
                      case "yy":
                        e = Ou(xu.FullYear, 2, 0, !0, !0);
                        break;
                      case "yyy":
                        e = Ou(xu.FullYear, 3, 0, !1, !0);
                        break;
                      case "yyyy":
                        e = Ou(xu.FullYear, 4, 0, !1, !0);
                        break;
                      case "M":
                      case "L":
                        e = Ou(xu.Month, 1, 1);
                        break;
                      case "MM":
                      case "LL":
                        e = Ou(xu.Month, 2, 1);
                        break;
                      case "MMM":
                        e = Au(ku.Months, cu.Abbreviated);
                        break;
                      case "MMMM":
                        e = Au(ku.Months, cu.Wide);
                        break;
                      case "MMMMM":
                        e = Au(ku.Months, cu.Narrow);
                        break;
                      case "LLL":
                        e = Au(ku.Months, cu.Abbreviated, uu.Standalone);
                        break;
                      case "LLLL":
                        e = Au(ku.Months, cu.Wide, uu.Standalone);
                        break;
                      case "LLLLL":
                        e = Au(ku.Months, cu.Narrow, uu.Standalone);
                        break;
                      case "w":
                        e = Nu(1);
                        break;
                      case "ww":
                        e = Nu(2);
                        break;
                      case "W":
                        e = Nu(1, !0);
                        break;
                      case "d":
                        e = Ou(xu.Date, 1);
                        break;
                      case "dd":
                        e = Ou(xu.Date, 2);
                        break;
                      case "E":
                      case "EE":
                      case "EEE":
                        e = Au(ku.Days, cu.Abbreviated);
                        break;
                      case "EEEE":
                        e = Au(ku.Days, cu.Wide);
                        break;
                      case "EEEEE":
                        e = Au(ku.Days, cu.Narrow);
                        break;
                      case "EEEEEE":
                        e = Au(ku.Days, cu.Short);
                        break;
                      case "a":
                      case "aa":
                      case "aaa":
                        e = Au(ku.DayPeriods, cu.Abbreviated);
                        break;
                      case "aaaa":
                        e = Au(ku.DayPeriods, cu.Wide);
                        break;
                      case "aaaaa":
                        e = Au(ku.DayPeriods, cu.Narrow);
                        break;
                      case "b":
                      case "bb":
                      case "bbb":
                        e = Au(ku.DayPeriods, cu.Abbreviated, uu.Standalone, !0);
                        break;
                      case "bbbb":
                        e = Au(ku.DayPeriods, cu.Wide, uu.Standalone, !0);
                        break;
                      case "bbbbb":
                        e = Au(ku.DayPeriods, cu.Narrow, uu.Standalone, !0);
                        break;
                      case "B":
                      case "BB":
                      case "BBB":
                        e = Au(ku.DayPeriods, cu.Abbreviated, uu.Format, !0);
                        break;
                      case "BBBB":
                        e = Au(ku.DayPeriods, cu.Wide, uu.Format, !0);
                        break;
                      case "BBBBB":
                        e = Au(ku.DayPeriods, cu.Narrow, uu.Format, !0);
                        break;
                      case "h":
                        e = Ou(xu.Hours, 1, -12);
                        break;
                      case "hh":
                        e = Ou(xu.Hours, 2, -12);
                        break;
                      case "H":
                        e = Ou(xu.Hours, 1);
                        break;
                      case "HH":
                        e = Ou(xu.Hours, 2);
                        break;
                      case "m":
                        e = Ou(xu.Minutes, 1);
                        break;
                      case "mm":
                        e = Ou(xu.Minutes, 2);
                        break;
                      case "s":
                        e = Ou(xu.Seconds, 1);
                        break;
                      case "ss":
                        e = Ou(xu.Seconds, 2);
                        break;
                      case "S":
                        e = Ou(xu.FractionalSeconds, 1);
                        break;
                      case "SS":
                        e = Ou(xu.FractionalSeconds, 2);
                        break;
                      case "SSS":
                        e = Ou(xu.FractionalSeconds, 3);
                        break;
                      case "Z":
                      case "ZZ":
                      case "ZZZ":
                        e = Iu(Su.Short);
                        break;
                      case "ZZZZZ":
                        e = Iu(Su.Extended);
                        break;
                      case "O":
                      case "OO":
                      case "OOO":
                      case "z":
                      case "zz":
                      case "zzz":
                        e = Iu(Su.ShortGMT);
                        break;
                      case "OOOO":
                      case "ZZZZ":
                      case "zzzz":
                        e = Iu(Su.Long);
                        break;
                      default:
                        return null
                    }
                    return Mu[t] = e, e
                  }(t);
                  u += e ? e(o, n, l) : "''" === t ? "'" : t.replace(/(^'|'$)/g, "").replace(/''/g, "'")
                }), u
              }(t, n, o || this.locale, r)
            } catch (t) {
              throw Ju(e, t.message)
            }
          }, e = a([s(0, Bt(br))], t)
        }(),
        ic = function () {
          function t(t) {
            this._locale = t
          }
          var e;
          return e = t, t.prototype.transform = function (t, n, r) {
            if (function (t) {
                return null == t || "" === t || t != t
              }(t)) return null;
            r = r || this._locale;
            try {
              return function (t, e, n) {
                return function (t, e, n, r, o, i, a) {
                  void 0 === a && (a = !1);
                  var s = "",
                    l = !1;
                  if (isFinite(t)) {
                    var u = function (e) {
                      var n, r, o, i, a, s = Math.abs(t) + "",
                        l = 0;
                      for ((r = s.indexOf(".")) > -1 && (s = s.replace(".", "")), (o = s.search(/e/i)) > 0 ? (r < 0 && (r = o), r += +s.slice(o + 1), s = s.substring(0, o)) : r < 0 && (r = s.length), o = 0;
                        "0" === s.charAt(o); o++);
                      if (o === (a = s.length)) n = [0], r = 1;
                      else {
                        for (a--;
                          "0" === s.charAt(a);) a--;
                        for (r -= o, n = [], i = 0; o <= a; o++, i++) n[i] = Number(s.charAt(o))
                      }
                      return r > 22 && (n = n.splice(0, 21), l = r - 1, r = 1), {
                        digits: n,
                        exponent: l,
                        integerLen: r
                      }
                    }();
                    a && (u = function (t) {
                      if (0 === t.digits[0]) return t;
                      var e = t.digits.length - t.integerLen;
                      return t.exponent ? t.exponent += 2 : (0 === e ? t.digits.push(0, 0) : 1 === e && t.digits.push(0), t.integerLen += 2), t
                    }(u));
                    var c = e.minInt,
                      h = e.minFrac,
                      p = e.maxFrac;
                    if (i) {
                      var f = i.match(Vu);
                      if (null === f) throw new Error(i + " is not a valid digit info");
                      var d = f[1],
                        m = f[3],
                        y = f[5];
                      null != d && (c = Lu(d)), null != m && (h = Lu(m)), null != y ? p = Lu(y) : null != m && h > p && (p = h)
                    }! function (t, e, n) {
                      if (e > n) throw new Error("The minimum number of digits after fraction (" + e + ") is higher than the maximum (" + n + ").");
                      var r = t.digits,
                        o = r.length - t.integerLen,
                        i = Math.min(Math.max(e, o), n),
                        a = i + t.integerLen,
                        s = r[a];
                      if (a > 0) {
                        r.splice(Math.max(t.integerLen, a));
                        for (var l = a; l < r.length; l++) r[l] = 0
                      } else {
                        o = Math.max(0, o), t.integerLen = 1, r.length = Math.max(1, a = i + 1), r[0] = 0;
                        for (var u = 1; u < a; u++) r[u] = 0
                      }
                      if (s >= 5)
                        if (a - 1 < 0) {
                          for (var c = 0; c > a; c--) r.unshift(0), t.integerLen++;
                          r.unshift(1), t.integerLen++
                        } else r[a - 1]++;
                      for (; o < Math.max(0, i); o++) r.push(0);
                      var h = 0 !== i,
                        p = e + t.integerLen,
                        f = r.reduceRight(function (t, e, n, r) {
                          return r[n] = (e += t) < 10 ? e : e - 10, h && (0 === r[n] && n >= p ? r.pop() : h = !1), e >= 10 ? 1 : 0
                        }, 0);
                      f && (r.unshift(f), t.integerLen++)
                    }(u, h, p);
                    var g = u.digits,
                      v = u.integerLen,
                      _ = u.exponent,
                      b = [];
                    for (l = g.every(function (t) {
                        return !t
                      }); v < c; v++) g.unshift(0);
                    for (; v < 0; v++) g.unshift(0);
                    v > 0 ? b = g.splice(v, g.length) : (b = g, g = [0]);
                    var w = [];
                    for (g.length >= e.lgSize && w.unshift(g.splice(-e.lgSize, g.length).join("")); g.length > e.gSize;) w.unshift(g.splice(-e.gSize, g.length).join(""));
                    g.length && w.unshift(g.join("")), s = w.join(yu(n, r)), b.length && (s += yu(n, o) + b.join("")), _ && (s += yu(n, pu.Exponential) + "+" + _)
                  } else s = yu(n, pu.Infinity);
                  return t < 0 && !l ? e.negPre + s + e.negSuf : e.posPre + s + e.posSuf
                }(t, function (t, e) {
                  void 0 === e && (e = "-");
                  var n = {
                      minInt: 1,
                      minFrac: 0,
                      maxFrac: 0,
                      posPre: "",
                      posSuf: "",
                      negPre: "",
                      negSuf: "",
                      gSize: 0,
                      lgSize: 0
                    },
                    r = t.split(";"),
                    o = r[0],
                    i = r[1],
                    a = -1 !== o.indexOf(".") ? o.split(".") : [o.substring(0, o.lastIndexOf("0") + 1), o.substring(o.lastIndexOf("0") + 1)],
                    s = a[0],
                    l = a[1] || "";
                  n.posPre = s.substr(0, s.indexOf("#"));
                  for (var u = 0; u < l.length; u++) {
                    var c = l.charAt(u);
                    "0" === c ? n.minFrac = n.maxFrac = u + 1 : "#" === c ? n.maxFrac = u + 1 : n.posSuf += c
                  }
                  var h = s.split(",");
                  if (n.gSize = h[1] ? h[1].length : 0, n.lgSize = h[2] || h[1] ? (h[2] || h[1]).length : 0, i) {
                    var p = o.length - n.posPre.length - n.posSuf.length,
                      f = i.indexOf("#");
                    n.negPre = i.substr(0, f).replace(/'/g, ""), n.negSuf = i.substr(f + p).replace(/'/g, "")
                  } else n.negPre = e + n.posPre, n.negSuf = n.posSuf;
                  return n
                }(function (t, e) {
                  return bu(t)[14][e]
                }(e, su.Decimal), yu(e, pu.MinusSign)), e, pu.Group, pu.Decimal, n)
              }(function (t) {
                if ("string" == typeof t && !isNaN(Number(t) - parseFloat(t))) return Number(t);
                if ("number" != typeof t) throw new Error(t + " is not a number");
                return t
              }(t), r, n)
            } catch (t) {
              throw Ju(e, t.message)
            }
          }, e = a([s(0, Bt(br))], t)
        }(),
        ac = function () {},
        sc = new bt("DocumentToken"),
        lc = "browser",
        uc = "server",
        cc = function () {
          function t() {}
          return t.ngInjectableDef = _t({
            providedIn: "root",
            factory: function () {
              return new hc(fe(sc), window)
            }
          }), t
        }(),
        hc = function () {
          function t(t, e) {
            this.document = t, this.window = e, this.offset = function () {
              return [0, 0]
            }
          }
          return t.prototype.setOffset = function (t) {
            this.offset = Array.isArray(t) ? function () {
              return t
            } : t
          }, t.prototype.getScrollPosition = function () {
            return this.supportScrollRestoration() ? [this.window.scrollX, this.window.scrollY] : [0, 0]
          }, t.prototype.scrollToPosition = function (t) {
            this.supportScrollRestoration() && this.window.scrollTo(t[0], t[1])
          }, t.prototype.scrollToAnchor = function (t) {
            if (this.supportScrollRestoration()) {
              var e = this.document.querySelector("#" + t);
              if (e) return void this.scrollToElement(e);
              var n = this.document.querySelector("[name='" + t + "']");
              if (n) return void this.scrollToElement(n)
            }
          }, t.prototype.setHistoryScrollRestoration = function (t) {
            if (this.supportScrollRestoration()) {
              var e = this.window.history;
              e && e.scrollRestoration && (e.scrollRestoration = t)
            }
          }, t.prototype.scrollToElement = function (t) {
            var e = t.getBoundingClientRect(),
              n = e.left + this.window.pageXOffset,
              r = e.top + this.window.pageYOffset,
              o = this.offset();
            this.window.scrollTo(n - o[0], r - o[1])
          }, t.prototype.supportScrollRestoration = function () {
            try {
              return !!this.window && !!this.window.scrollTo
            } catch (t) {
              return !1
            }
          }, t
        }(),
        pc = null;

      function fc() {
        return pc
      }
      var dc, mc = {
          class: "className",
          innerHtml: "innerHTML",
          readonly: "readOnly",
          tabindex: "tabIndex"
        },
        yc = {
          "\b": "Backspace",
          "\t": "Tab",
          "\x7f": "Delete",
          "\x1b": "Escape",
          Del: "Delete",
          Esc: "Escape",
          Left: "ArrowLeft",
          Right: "ArrowRight",
          Up: "ArrowUp",
          Down: "ArrowDown",
          Menu: "ContextMenu",
          Scroll: "ScrollLock",
          Win: "OS"
        },
        gc = {
          A: "1",
          B: "2",
          C: "3",
          D: "4",
          E: "5",
          F: "6",
          G: "7",
          H: "8",
          I: "9",
          J: "*",
          K: "+",
          M: "-",
          N: ".",
          O: "/",
          "`": "0",
          "\x90": "NumLock"
        };
      Rt.Node && (dc = Rt.Node.prototype.contains || function (t) {
        return !!(16 & this.compareDocumentPosition(t))
      });
      var vc, _c = function (t) {
          function e() {
            return null !== t && t.apply(this, arguments) || this
          }
          return o(e, t), e.prototype.parse = function (t) {
            throw new Error("parse not implemented")
          }, e.makeCurrent = function () {
            var t;
            t = new e, pc || (pc = t)
          }, e.prototype.hasProperty = function (t, e) {
            return e in t
          }, e.prototype.setProperty = function (t, e, n) {
            t[e] = n
          }, e.prototype.getProperty = function (t, e) {
            return t[e]
          }, e.prototype.invoke = function (t, e, n) {
            var r;
            (r = t)[e].apply(r, h(n))
          }, e.prototype.logError = function (t) {
            window.console && (console.error ? console.error(t) : console.log(t))
          }, e.prototype.log = function (t) {
            window.console && window.console.log && window.console.log(t)
          }, e.prototype.logGroup = function (t) {
            window.console && window.console.group && window.console.group(t)
          }, e.prototype.logGroupEnd = function () {
            window.console && window.console.groupEnd && window.console.groupEnd()
          }, Object.defineProperty(e.prototype, "attrToPropMap", {
            get: function () {
              return mc
            },
            enumerable: !0,
            configurable: !0
          }), e.prototype.contains = function (t, e) {
            return dc.call(t, e)
          }, e.prototype.querySelector = function (t, e) {
            return t.querySelector(e)
          }, e.prototype.querySelectorAll = function (t, e) {
            return t.querySelectorAll(e)
          }, e.prototype.on = function (t, e, n) {
            t.addEventListener(e, n, !1)
          }, e.prototype.onAndCancel = function (t, e, n) {
            return t.addEventListener(e, n, !1),
              function () {
                t.removeEventListener(e, n, !1)
              }
          }, e.prototype.dispatchEvent = function (t, e) {
            t.dispatchEvent(e)
          }, e.prototype.createMouseEvent = function (t) {
            var e = this.getDefaultDocument().createEvent("MouseEvent");
            return e.initEvent(t, !0, !0), e
          }, e.prototype.createEvent = function (t) {
            var e = this.getDefaultDocument().createEvent("Event");
            return e.initEvent(t, !0, !0), e
          }, e.prototype.preventDefault = function (t) {
            t.preventDefault(), t.returnValue = !1
          }, e.prototype.isPrevented = function (t) {
            return t.defaultPrevented || null != t.returnValue && !t.returnValue
          }, e.prototype.getInnerHTML = function (t) {
            return t.innerHTML
          }, e.prototype.getTemplateContent = function (t) {
            return "content" in t && this.isTemplateElement(t) ? t.content : null
          }, e.prototype.getOuterHTML = function (t) {
            return t.outerHTML
          }, e.prototype.nodeName = function (t) {
            return t.nodeName
          }, e.prototype.nodeValue = function (t) {
            return t.nodeValue
          }, e.prototype.type = function (t) {
            return t.type
          }, e.prototype.content = function (t) {
            return this.hasProperty(t, "content") ? t.content : t
          }, e.prototype.firstChild = function (t) {
            return t.firstChild
          }, e.prototype.nextSibling = function (t) {
            return t.nextSibling
          }, e.prototype.parentElement = function (t) {
            return t.parentNode
          }, e.prototype.childNodes = function (t) {
            return t.childNodes
          }, e.prototype.childNodesAsList = function (t) {
            for (var e = t.childNodes, n = new Array(e.length), r = 0; r < e.length; r++) n[r] = e[r];
            return n
          }, e.prototype.clearNodes = function (t) {
            for (; t.firstChild;) t.removeChild(t.firstChild)
          }, e.prototype.appendChild = function (t, e) {
            t.appendChild(e)
          }, e.prototype.removeChild = function (t, e) {
            t.removeChild(e)
          }, e.prototype.replaceChild = function (t, e, n) {
            t.replaceChild(e, n)
          }, e.prototype.remove = function (t) {
            return t.parentNode && t.parentNode.removeChild(t), t
          }, e.prototype.insertBefore = function (t, e, n) {
            t.insertBefore(n, e)
          }, e.prototype.insertAllBefore = function (t, e, n) {
            n.forEach(function (n) {
              return t.insertBefore(n, e)
            })
          }, e.prototype.insertAfter = function (t, e, n) {
            t.insertBefore(n, e.nextSibling)
          }, e.prototype.setInnerHTML = function (t, e) {
            t.innerHTML = e
          }, e.prototype.getText = function (t) {
            return t.textContent
          }, e.prototype.setText = function (t, e) {
            t.textContent = e
          }, e.prototype.getValue = function (t) {
            return t.value
          }, e.prototype.setValue = function (t, e) {
            t.value = e
          }, e.prototype.getChecked = function (t) {
            return t.checked
          }, e.prototype.setChecked = function (t, e) {
            t.checked = e
          }, e.prototype.createComment = function (t) {
            return this.getDefaultDocument().createComment(t)
          }, e.prototype.createTemplate = function (t) {
            var e = this.getDefaultDocument().createElement("template");
            return e.innerHTML = t, e
          }, e.prototype.createElement = function (t, e) {
            return (e = e || this.getDefaultDocument()).createElement(t)
          }, e.prototype.createElementNS = function (t, e, n) {
            return (n = n || this.getDefaultDocument()).createElementNS(t, e)
          }, e.prototype.createTextNode = function (t, e) {
            return (e = e || this.getDefaultDocument()).createTextNode(t)
          }, e.prototype.createScriptTag = function (t, e, n) {
            var r = (n = n || this.getDefaultDocument()).createElement("SCRIPT");
            return r.setAttribute(t, e), r
          }, e.prototype.createStyleElement = function (t, e) {
            var n = (e = e || this.getDefaultDocument()).createElement("style");
            return this.appendChild(n, this.createTextNode(t, e)), n
          }, e.prototype.createShadowRoot = function (t) {
            return t.createShadowRoot()
          }, e.prototype.getShadowRoot = function (t) {
            return t.shadowRoot
          }, e.prototype.getHost = function (t) {
            return t.host
          }, e.prototype.clone = function (t) {
            return t.cloneNode(!0)
          }, e.prototype.getElementsByClassName = function (t, e) {
            return t.getElementsByClassName(e)
          }, e.prototype.getElementsByTagName = function (t, e) {
            return t.getElementsByTagName(e)
          }, e.prototype.classList = function (t) {
            return Array.prototype.slice.call(t.classList, 0)
          }, e.prototype.addClass = function (t, e) {
            t.classList.add(e)
          }, e.prototype.removeClass = function (t, e) {
            t.classList.remove(e)
          }, e.prototype.hasClass = function (t, e) {
            return t.classList.contains(e)
          }, e.prototype.setStyle = function (t, e, n) {
            t.style[e] = n
          }, e.prototype.removeStyle = function (t, e) {
            t.style[e] = ""
          }, e.prototype.getStyle = function (t, e) {
            return t.style[e]
          }, e.prototype.hasStyle = function (t, e, n) {
            var r = this.getStyle(t, e) || "";
            return n ? r == n : r.length > 0
          }, e.prototype.tagName = function (t) {
            return t.tagName
          }, e.prototype.attributeMap = function (t) {
            for (var e = new Map, n = t.attributes, r = 0; r < n.length; r++) {
              var o = n.item(r);
              e.set(o.name, o.value)
            }
            return e
          }, e.prototype.hasAttribute = function (t, e) {
            return t.hasAttribute(e)
          }, e.prototype.hasAttributeNS = function (t, e, n) {
            return t.hasAttributeNS(e, n)
          }, e.prototype.getAttribute = function (t, e) {
            return t.getAttribute(e)
          }, e.prototype.getAttributeNS = function (t, e, n) {
            return t.getAttributeNS(e, n)
          }, e.prototype.setAttribute = function (t, e, n) {
            t.setAttribute(e, n)
          }, e.prototype.setAttributeNS = function (t, e, n, r) {
            t.setAttributeNS(e, n, r)
          }, e.prototype.removeAttribute = function (t, e) {
            t.removeAttribute(e)
          }, e.prototype.removeAttributeNS = function (t, e, n) {
            t.removeAttributeNS(e, n)
          }, e.prototype.templateAwareRoot = function (t) {
            return this.isTemplateElement(t) ? this.content(t) : t
          }, e.prototype.createHtmlDocument = function () {
            return document.implementation.createHTMLDocument("fakeTitle")
          }, e.prototype.getDefaultDocument = function () {
            return document
          }, e.prototype.getBoundingClientRect = function (t) {
            try {
              return t.getBoundingClientRect()
            } catch (t) {
              return {
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                width: 0,
                height: 0
              }
            }
          }, e.prototype.getTitle = function (t) {
            return t.title
          }, e.prototype.setTitle = function (t, e) {
            t.title = e || ""
          }, e.prototype.elementMatches = function (t, e) {
            return !!this.isElementNode(t) && (t.matches && t.matches(e) || t.msMatchesSelector && t.msMatchesSelector(e) || t.webkitMatchesSelector && t.webkitMatchesSelector(e))
          }, e.prototype.isTemplateElement = function (t) {
            return this.isElementNode(t) && "TEMPLATE" === t.nodeName
          }, e.prototype.isTextNode = function (t) {
            return t.nodeType === Node.TEXT_NODE
          }, e.prototype.isCommentNode = function (t) {
            return t.nodeType === Node.COMMENT_NODE
          }, e.prototype.isElementNode = function (t) {
            return t.nodeType === Node.ELEMENT_NODE
          }, e.prototype.hasShadowRoot = function (t) {
            return null != t.shadowRoot && t instanceof HTMLElement
          }, e.prototype.isShadowRoot = function (t) {
            return t instanceof DocumentFragment
          }, e.prototype.importIntoDoc = function (t) {
            return document.importNode(this.templateAwareRoot(t), !0)
          }, e.prototype.adoptNode = function (t) {
            return document.adoptNode(t)
          }, e.prototype.getHref = function (t) {
            return t.getAttribute("href")
          }, e.prototype.getEventKey = function (t) {
            var e = t.key;
            if (null == e) {
              if (null == (e = t.keyIdentifier)) return "Unidentified";
              e.startsWith("U+") && (e = String.fromCharCode(parseInt(e.substring(2), 16)), 3 === t.location && gc.hasOwnProperty(e) && (e = gc[e]))
            }
            return yc[e] || e
          }, e.prototype.getGlobalEventTarget = function (t, e) {
            return "window" === e ? window : "document" === e ? t : "body" === e ? t.body : null
          }, e.prototype.getHistory = function () {
            return window.history
          }, e.prototype.getLocation = function () {
            return window.location
          }, e.prototype.getBaseHref = function (t) {
            var e, n = bc || (bc = document.querySelector("base")) ? bc.getAttribute("href") : null;
            return null == n ? null : (e = n, vc || (vc = document.createElement("a")), vc.setAttribute("href", e), "/" === vc.pathname.charAt(0) ? vc.pathname : "/" + vc.pathname)
          }, e.prototype.resetBaseElement = function () {
            bc = null
          }, e.prototype.getUserAgent = function () {
            return window.navigator.userAgent
          }, e.prototype.setData = function (t, e, n) {
            this.setAttribute(t, "data-" + e, n)
          }, e.prototype.getData = function (t, e) {
            return this.getAttribute(t, "data-" + e)
          }, e.prototype.getComputedStyle = function (t) {
            return getComputedStyle(t)
          }, e.prototype.supportsWebAnimation = function () {
            return "function" == typeof Element.prototype.animate
          }, e.prototype.performanceNow = function () {
            return window.performance && window.performance.now ? window.performance.now() : (new Date).getTime()
          }, e.prototype.supportsCookies = function () {
            return !0
          }, e.prototype.getCookie = function (t) {
            return function (t, e) {
              var n, r;
              e = encodeURIComponent(e);
              try {
                for (var o = u(t.split(";")), i = o.next(); !i.done; i = o.next()) {
                  var a = i.value,
                    s = a.indexOf("="),
                    l = c(-1 == s ? [a, ""] : [a.slice(0, s), a.slice(s + 1)], 2),
                    h = l[1];
                  if (l[0].trim() === e) return decodeURIComponent(h)
                }
              } catch (t) {
                n = {
                  error: t
                }
              } finally {
                try {
                  i && !i.done && (r = o.return) && r.call(o)
                } finally {
                  if (n) throw n.error
                }
              }
              return null
            }(document.cookie, t)
          }, e.prototype.setCookie = function (t, e) {
            document.cookie = encodeURIComponent(t) + "=" + encodeURIComponent(e)
          }, e
        }(function (t) {
          function e() {
            var e = t.call(this) || this;
            e._animationPrefix = null, e._transitionEnd = null;
            try {
              var n = e.createElement("div", document);
              if (null != e.getStyle(n, "animationName")) e._animationPrefix = "";
              else
                for (var r = ["Webkit", "Moz", "O", "ms"], o = 0; o < r.length; o++)
                  if (null != e.getStyle(n, r[o] + "AnimationName")) {
                    e._animationPrefix = "-" + r[o].toLowerCase() + "-";
                    break
                  } var i = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
              };
              Object.keys(i).forEach(function (t) {
                null != e.getStyle(n, t) && (e._transitionEnd = i[t])
              })
            } catch (t) {
              e._animationPrefix = null, e._transitionEnd = null
            }
            return e
          }
          return o(e, t), e.prototype.getDistributedNodes = function (t) {
            return t.getDistributedNodes()
          }, e.prototype.resolveAndSetHref = function (t, e, n) {
            t.href = null == n ? e : e + "/../" + n
          }, e.prototype.supportsDOMEvents = function () {
            return !0
          }, e.prototype.supportsNativeShadowDOM = function () {
            return "function" == typeof document.body.createShadowRoot
          }, e.prototype.getAnimationPrefix = function () {
            return this._animationPrefix ? this._animationPrefix : ""
          }, e.prototype.getTransitionEnd = function () {
            return this._transitionEnd ? this._transitionEnd : ""
          }, e.prototype.supportsAnimation = function () {
            return null != this._animationPrefix && null != this._transitionEnd
          }, e
        }(function () {
          function t() {
            this.resourceLoaderType = null
          }
          return Object.defineProperty(t.prototype, "attrToPropMap", {
            get: function () {
              return this._attrToPropMap
            },
            set: function (t) {
              this._attrToPropMap = t
            },
            enumerable: !0,
            configurable: !0
          }), t
        }())),
        bc = null,
        wc = sc;

      function Cc() {
        return !!window.history.pushState
      }
      var Ec = function (t) {
          function e(e) {
            var n = t.call(this) || this;
            return n._doc = e, n._init(), n
          }
          return o(e, t), e.prototype._init = function () {
            this.location = fc().getLocation(), this._history = fc().getHistory()
          }, e.prototype.getBaseHrefFromDOM = function () {
            return fc().getBaseHref(this._doc)
          }, e.prototype.onPopState = function (t) {
            fc().getGlobalEventTarget(this._doc, "window").addEventListener("popstate", t, !1)
          }, e.prototype.onHashChange = function (t) {
            fc().getGlobalEventTarget(this._doc, "window").addEventListener("hashchange", t, !1)
          }, Object.defineProperty(e.prototype, "pathname", {
            get: function () {
              return this.location.pathname
            },
            set: function (t) {
              this.location.pathname = t
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(e.prototype, "search", {
            get: function () {
              return this.location.search
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(e.prototype, "hash", {
            get: function () {
              return this.location.hash
            },
            enumerable: !0,
            configurable: !0
          }), e.prototype.pushState = function (t, e, n) {
            Cc() ? this._history.pushState(t, e, n) : this.location.hash = n
          }, e.prototype.replaceState = function (t, e, n) {
            Cc() ? this._history.replaceState(t, e, n) : this.location.hash = n
          }, e.prototype.forward = function () {
            this._history.forward()
          }, e.prototype.back = function () {
            this._history.back()
          }, a([s(0, Bt(wc)), l("design:paramtypes", [Object])], e)
        }($l),
        Sc = new bt("TRANSITION_ID"),
        xc = [{
          provide: Fe,
          useFactory: function (t, e, n) {
            return function () {
              n.get(Ve).donePromise.then(function () {
                var n = fc();
                Array.prototype.slice.apply(n.querySelectorAll(e, "style[ng-transition]")).filter(function (e) {
                  return n.getAttribute(e, "ng-transition") === t
                }).forEach(function (t) {
                  return n.remove(t)
                })
              })
            }
          },
          deps: [Sc, wc, Yt],
          multi: !0
        }],
        kc = function () {
          function t() {}
          return t.init = function () {
            var e;
            e = new t, En = e
          }, t.prototype.addToWindow = function (t) {
            Rt.getAngularTestability = function (e, n) {
              void 0 === n && (n = !0);
              var r = t.findTestabilityInTree(e, n);
              if (null == r) throw new Error("Could not find testability for element.");
              return r
            }, Rt.getAllAngularTestabilities = function () {
              return t.getAllTestabilities()
            }, Rt.getAllAngularRootElements = function () {
              return t.getAllRootElements()
            }, Rt.frameworkStabilizers || (Rt.frameworkStabilizers = []), Rt.frameworkStabilizers.push(function (t) {
              var e = Rt.getAllAngularTestabilities(),
                n = e.length,
                r = !1,
                o = function (e) {
                  r = r || e, 0 == --n && t(r)
                };
              e.forEach(function (t) {
                t.whenStable(o)
              })
            })
          }, t.prototype.findTestabilityInTree = function (t, e, n) {
            if (null == e) return null;
            var r = t.getTestability(e);
            return null != r ? r : n ? fc().isShadowRoot(e) ? this.findTestabilityInTree(t, fc().getHost(e), !0) : this.findTestabilityInTree(t, fc().parentElement(e), !0) : null
          }, t
        }();

      function Pc(t, e) {
        "undefined" != typeof COMPILED && COMPILED || ((Rt.ng = Rt.ng || {})[t] = e)
      }
      var Tc = {
        ApplicationRef: Dn,
        NgZone: fn
      };

      function Oc(t) {
        return Yn(t)
      }
      var Ac = new bt("EventManagerPlugins"),
        Ic = function () {
          function t(t, e) {
            var n = this;
            this._zone = e, this._eventNameToPlugin = new Map, t.forEach(function (t) {
              return t.manager = n
            }), this._plugins = t.slice().reverse()
          }
          return t.prototype.addEventListener = function (t, e, n) {
            return this._findPluginFor(e).addEventListener(t, e, n)
          }, t.prototype.addGlobalEventListener = function (t, e, n) {
            return this._findPluginFor(e).addGlobalEventListener(t, e, n)
          }, t.prototype.getZone = function () {
            return this._zone
          }, t.prototype._findPluginFor = function (t) {
            var e = this._eventNameToPlugin.get(t);
            if (e) return e;
            for (var n = this._plugins, r = 0; r < n.length; r++) {
              var o = n[r];
              if (o.supports(t)) return this._eventNameToPlugin.set(t, o), o
            }
            throw new Error("No event manager plugin found for event " + t)
          }, a([s(0, Bt(Ac))], t)
        }(),
        Rc = function () {
          function t(t) {
            this._doc = t
          }
          return t.prototype.addGlobalEventListener = function (t, e, n) {
            var r = fc().getGlobalEventTarget(this._doc, t);
            if (!r) throw new Error("Unsupported event target " + r + " for event " + e);
            return this.addEventListener(r, e, n)
          }, t
        }(),
        Dc = function () {
          function t() {
            this._stylesSet = new Set
          }
          return t.prototype.addStyles = function (t) {
            var e = this,
              n = new Set;
            t.forEach(function (t) {
              e._stylesSet.has(t) || (e._stylesSet.add(t), n.add(t))
            }), this.onStylesAdded(n)
          }, t.prototype.onStylesAdded = function (t) {}, t.prototype.getAllStyles = function () {
            return Array.from(this._stylesSet)
          }, t
        }(),
        Nc = function (t) {
          function e(e) {
            var n = t.call(this) || this;
            return n._doc = e, n._hostNodes = new Set, n._styleNodes = new Set, n._hostNodes.add(e.head), n
          }
          return o(e, t), e.prototype._addStylesToHost = function (t, e) {
            var n = this;
            t.forEach(function (t) {
              var r = n._doc.createElement("style");
              r.textContent = t, n._styleNodes.add(e.appendChild(r))
            })
          }, e.prototype.addHost = function (t) {
            this._addStylesToHost(this._stylesSet, t), this._hostNodes.add(t)
          }, e.prototype.removeHost = function (t) {
            this._hostNodes.delete(t)
          }, e.prototype.onStylesAdded = function (t) {
            var e = this;
            this._hostNodes.forEach(function (n) {
              return e._addStylesToHost(t, n)
            })
          }, e.prototype.ngOnDestroy = function () {
            this._styleNodes.forEach(function (t) {
              return fc().remove(t)
            })
          }, a([s(0, Bt(wc))], e)
        }(Dc),
        Mc = {
          svg: "http://www.w3.org/2000/svg",
          xhtml: "http://www.w3.org/1999/xhtml",
          xlink: "http://www.w3.org/1999/xlink",
          xml: "http://www.w3.org/XML/1998/namespace",
          xmlns: "http://www.w3.org/2000/xmlns/"
        },
        jc = /%COMP%/g,
        Fc = "_nghost-%COMP%",
        Vc = "_ngcontent-%COMP%";

      function Lc(t, e, n) {
        for (var r = 0; r < e.length; r++) {
          var o = e[r];
          Array.isArray(o) ? Lc(t, o, n) : (o = o.replace(jc, t), n.push(o))
        }
        return n
      }

      function Hc(t) {
        return function (e) {
          !1 === t(e) && (e.preventDefault(), e.returnValue = !1)
        }
      }
      var Bc = function () {
          function t(t, e) {
            this.eventManager = t, this.sharedStylesHost = e, this.rendererByCompId = new Map, this.defaultRenderer = new zc(t)
          }
          return t.prototype.createRenderer = function (t, e) {
            if (!t || !e) return this.defaultRenderer;
            switch (e.encapsulation) {
              case me.Emulated:
                var n = this.rendererByCompId.get(e.id);
                return n || (n = new Qc(this.eventManager, this.sharedStylesHost, e), this.rendererByCompId.set(e.id, n)), n.applyToHost(t), n;
              case me.Native:
              case me.ShadowDom:
                return new Wc(this.eventManager, this.sharedStylesHost, t, e);
              default:
                if (!this.rendererByCompId.has(e.id)) {
                  var r = Lc(e.id, e.styles, []);
                  this.sharedStylesHost.addStyles(r), this.rendererByCompId.set(e.id, this.defaultRenderer)
                }
                return this.defaultRenderer
            }
          }, t.prototype.begin = function () {}, t.prototype.end = function () {}, t
        }(),
        zc = function () {
          function t(t) {
            this.eventManager = t, this.data = Object.create(null)
          }
          return t.prototype.destroy = function () {}, t.prototype.createElement = function (t, e) {
            return e ? document.createElementNS(Mc[e], t) : document.createElement(t)
          }, t.prototype.createComment = function (t) {
            return document.createComment(t)
          }, t.prototype.createText = function (t) {
            return document.createTextNode(t)
          }, t.prototype.appendChild = function (t, e) {
            t.appendChild(e)
          }, t.prototype.insertBefore = function (t, e, n) {
            t && t.insertBefore(e, n)
          }, t.prototype.removeChild = function (t, e) {
            t && t.removeChild(e)
          }, t.prototype.selectRootElement = function (t) {
            var e = "string" == typeof t ? document.querySelector(t) : t;
            if (!e) throw new Error('The selector "' + t + '" did not match any elements');
            return e.textContent = "", e
          }, t.prototype.parentNode = function (t) {
            return t.parentNode
          }, t.prototype.nextSibling = function (t) {
            return t.nextSibling
          }, t.prototype.setAttribute = function (t, e, n, r) {
            if (r) {
              e = r + ":" + e;
              var o = Mc[r];
              o ? t.setAttributeNS(o, e, n) : t.setAttribute(e, n)
            } else t.setAttribute(e, n)
          }, t.prototype.removeAttribute = function (t, e, n) {
            if (n) {
              var r = Mc[n];
              r ? t.removeAttributeNS(r, e) : t.removeAttribute(n + ":" + e)
            } else t.removeAttribute(e)
          }, t.prototype.addClass = function (t, e) {
            t.classList.add(e)
          }, t.prototype.removeClass = function (t, e) {
            t.classList.remove(e)
          }, t.prototype.setStyle = function (t, e, n, r) {
            r & jn.DashCase ? t.style.setProperty(e, n, r & jn.Important ? "important" : "") : t.style[e] = n
          }, t.prototype.removeStyle = function (t, e, n) {
            n & jn.DashCase ? t.style.removeProperty(e) : t.style[e] = ""
          }, t.prototype.setProperty = function (t, e, n) {
            qc(e, "property"), t[e] = n
          }, t.prototype.setValue = function (t, e) {
            t.nodeValue = e
          }, t.prototype.listen = function (t, e, n) {
            return qc(e, "listener"), "string" == typeof t ? this.eventManager.addGlobalEventListener(t, e, Hc(n)) : this.eventManager.addEventListener(t, e, Hc(n))
          }, t
        }(),
        Uc = "@".charCodeAt(0);

      function qc(t, e) {
        if (t.charCodeAt(0) === Uc) throw new Error("Found the synthetic " + e + " " + t + '. Please include either "BrowserAnimationsModule" or "NoopAnimationsModule" in your application.')
      }
      var Gc, Qc = function (t) {
          function e(e, n, r) {
            var o = t.call(this, e) || this;
            o.component = r;
            var i = Lc(r.id, r.styles, []);
            return n.addStyles(i), o.contentAttr = Vc.replace(jc, r.id), o.hostAttr = Fc.replace(jc, r.id), o
          }
          return o(e, t), e.prototype.applyToHost = function (e) {
            t.prototype.setAttribute.call(this, e, this.hostAttr, "")
          }, e.prototype.createElement = function (e, n) {
            var r = t.prototype.createElement.call(this, e, n);
            return t.prototype.setAttribute.call(this, r, this.contentAttr, ""), r
          }, e
        }(zc),
        Wc = function (t) {
          function e(e, n, r, o) {
            var i = t.call(this, e) || this;
            i.sharedStylesHost = n, i.hostEl = r, i.component = o, i.shadowRoot = o.encapsulation === me.ShadowDom ? r.attachShadow({
              mode: "open"
            }) : r.createShadowRoot(), i.sharedStylesHost.addHost(i.shadowRoot);
            for (var a = Lc(o.id, o.styles, []), s = 0; s < a.length; s++) {
              var l = document.createElement("style");
              l.textContent = a[s], i.shadowRoot.appendChild(l)
            }
            return i
          }
          return o(e, t), e.prototype.nodeOrShadowRoot = function (t) {
            return t === this.hostEl ? this.shadowRoot : t
          }, e.prototype.destroy = function () {
            this.sharedStylesHost.removeHost(this.shadowRoot)
          }, e.prototype.appendChild = function (e, n) {
            return t.prototype.appendChild.call(this, this.nodeOrShadowRoot(e), n)
          }, e.prototype.insertBefore = function (e, n, r) {
            return t.prototype.insertBefore.call(this, this.nodeOrShadowRoot(e), n, r)
          }, e.prototype.removeChild = function (e, n) {
            return t.prototype.removeChild.call(this, this.nodeOrShadowRoot(e), n)
          }, e.prototype.parentNode = function (e) {
            return this.nodeOrShadowRoot(t.prototype.parentNode.call(this, this.nodeOrShadowRoot(e)))
          }, e
        }(zc),
        Zc = "undefined" != typeof Zone && Zone.__symbol__ || function (t) {
          return "__zone_symbol__" + t
        },
        Kc = Zc("addEventListener"),
        $c = Zc("removeEventListener"),
        Yc = {},
        Xc = "__zone_symbol__propagationStopped";
      "undefined" != typeof Zone && Zone[Zc("BLACK_LISTED_EVENTS")] && (Gc = {});
      var Jc = function (t) {
          return !!Gc && Gc.hasOwnProperty(t)
        },
        th = function (t) {
          var e = Yc[t.type];
          if (e) {
            var n = this[e];
            if (n) {
              var r = [t];
              if (1 === n.length) return (a = n[0]).zone !== Zone.current ? a.zone.run(a.handler, this, r) : a.handler.apply(this, r);
              for (var o = n.slice(), i = 0; i < o.length && !0 !== t[Xc]; i++) {
                var a;
                (a = o[i]).zone !== Zone.current ? a.zone.run(a.handler, this, r) : a.handler.apply(this, r)
              }
            }
          }
        },
        eh = function (t) {
          function e(e, n, r) {
            var o = t.call(this, e) || this;
            return o.ngZone = n, r && function (t) {
              return t === uc
            }(r) || o.patchEvent(), o
          }
          return o(e, t), e.prototype.patchEvent = function () {
            if ("undefined" != typeof Event && Event && Event.prototype && !Event.prototype.__zone_symbol__stopImmediatePropagation) {
              var t = Event.prototype.__zone_symbol__stopImmediatePropagation = Event.prototype.stopImmediatePropagation;
              Event.prototype.stopImmediatePropagation = function () {
                this && (this[Xc] = !0), t && t.apply(this, arguments)
              }
            }
          }, e.prototype.supports = function (t) {
            return !0
          }, e.prototype.addEventListener = function (t, e, n) {
            var r = this,
              o = n;
            if (!t[Kc] || fn.isInAngularZone() && !Jc(e)) t.addEventListener(e, o, !1);
            else {
              var i = Yc[e];
              i || (i = Yc[e] = Zc("ANGULAR" + e + "FALSE"));
              var a = t[i],
                s = a && a.length > 0;
              a || (a = t[i] = []);
              var l = Jc(e) ? Zone.root : Zone.current;
              if (0 === a.length) a.push({
                zone: l,
                handler: o
              });
              else {
                for (var u = !1, c = 0; c < a.length; c++)
                  if (a[c].handler === o) {
                    u = !0;
                    break
                  } u || a.push({
                  zone: l,
                  handler: o
                })
              }
              s || t[Kc](e, th, !1)
            }
            return function () {
              return r.removeEventListener(t, e, o)
            }
          }, e.prototype.removeEventListener = function (t, e, n) {
            var r = t[$c];
            if (!r) return t.removeEventListener.apply(t, [e, n, !1]);
            var o = Yc[e],
              i = o && t[o];
            if (!i) return t.removeEventListener.apply(t, [e, n, !1]);
            for (var a = !1, s = 0; s < i.length; s++)
              if (i[s].handler === n) {
                a = !0, i.splice(s, 1);
                break
              } a ? 0 === i.length && r.apply(t, [e, th, !1]) : t.removeEventListener.apply(t, [e, n, !1])
          }, a([s(0, Bt(wc)), s(2, zt()), s(2, Bt(Ue))], e)
        }(Rc),
        nh = {
          pan: !0,
          panstart: !0,
          panmove: !0,
          panend: !0,
          pancancel: !0,
          panleft: !0,
          panright: !0,
          panup: !0,
          pandown: !0,
          pinch: !0,
          pinchstart: !0,
          pinchmove: !0,
          pinchend: !0,
          pinchcancel: !0,
          pinchin: !0,
          pinchout: !0,
          press: !0,
          pressup: !0,
          rotate: !0,
          rotatestart: !0,
          rotatemove: !0,
          rotateend: !0,
          rotatecancel: !0,
          swipe: !0,
          swipeleft: !0,
          swiperight: !0,
          swipeup: !0,
          swipedown: !0,
          tap: !0
        },
        rh = new bt("HammerGestureConfig"),
        oh = new bt("HammerLoader"),
        ih = function () {
          function t() {
            this.events = [], this.overrides = {}
          }
          return t.prototype.buildHammer = function (t) {
            var e = new Hammer(t, this.options);
            for (var n in e.get("pinch").set({
                enable: !0
              }), e.get("rotate").set({
                enable: !0
              }), this.overrides) e.get(n).set(this.overrides[n]);
            return e
          }, t
        }(),
        ah = function (t) {
          function e(e, n, r, o) {
            var i = t.call(this, e) || this;
            return i._config = n, i.console = r, i.loader = o, i
          }
          return o(e, t), e.prototype.supports = function (t) {
            return !(!nh.hasOwnProperty(t.toLowerCase()) && !this.isCustomEvent(t) || !window.Hammer && !this.loader && (this.console.warn('The "' + t + '" event cannot be bound because Hammer.JS is not loaded and no custom loader has been specified.'), 1))
          }, e.prototype.addEventListener = function (t, e, n) {
            var r = this,
              o = this.manager.getZone();
            if (e = e.toLowerCase(), !window.Hammer && this.loader) {
              var i = !1,
                a = function () {
                  i = !0
                };
              return this.loader().then(function () {
                  if (!window.Hammer) return r.console.warn("The custom HAMMER_LOADER completed, but Hammer.JS is not present."), void(a = function () {});
                  i || (a = r.addEventListener(t, e, n))
                }).catch(function () {
                  r.console.warn('The "' + e + '" event cannot be bound because the custom Hammer.JS loader failed.'), a = function () {}
                }),
                function () {
                  a()
                }
            }
            return o.runOutsideAngular(function () {
              var i = r._config.buildHammer(t),
                a = function (t) {
                  o.runGuarded(function () {
                    n(t)
                  })
                };
              return i.on(e, a),
                function () {
                  i.off(e, a), "function" == typeof i.destroy && i.destroy()
                }
            })
          }, e.prototype.isCustomEvent = function (t) {
            return this._config.events.indexOf(t) > -1
          }, a([s(0, Bt(wc)), s(1, Bt(rh)), s(3, zt()), s(3, Bt(oh))], e)
        }(Rc),
        sh = ["alt", "control", "meta", "shift"],
        lh = {
          alt: function (t) {
            return t.altKey
          },
          control: function (t) {
            return t.ctrlKey
          },
          meta: function (t) {
            return t.metaKey
          },
          shift: function (t) {
            return t.shiftKey
          }
        },
        uh = function (t) {
          function e(e) {
            return t.call(this, e) || this
          }
          var n;
          return o(e, t), n = e, e.prototype.supports = function (t) {
            return null != n.parseEventName(t)
          }, e.prototype.addEventListener = function (t, e, r) {
            var o = n.parseEventName(e),
              i = n.eventCallback(o.fullKey, r, this.manager.getZone());
            return this.manager.getZone().runOutsideAngular(function () {
              return fc().onAndCancel(t, o.domEventName, i)
            })
          }, e.parseEventName = function (t) {
            var e = t.toLowerCase().split("."),
              r = e.shift();
            if (0 === e.length || "keydown" !== r && "keyup" !== r) return null;
            var o = n._normalizeKey(e.pop()),
              i = "";
            if (sh.forEach(function (t) {
                var n = e.indexOf(t);
                n > -1 && (e.splice(n, 1), i += t + ".")
              }), i += o, 0 != e.length || 0 === o.length) return null;
            var a = {};
            return a.domEventName = r, a.fullKey = i, a
          }, e.getEventFullKey = function (t) {
            var e = "",
              n = fc().getEventKey(t);
            return " " === (n = n.toLowerCase()) ? n = "space" : "." === n && (n = "dot"), sh.forEach(function (r) {
              r != n && (0, lh[r])(t) && (e += r + ".")
            }), e += n
          }, e.eventCallback = function (t, e, r) {
            return function (o) {
              n.getEventFullKey(o) === t && r.runGuarded(function () {
                return e(o)
              })
            }
          }, e._normalizeKey = function (t) {
            switch (t) {
              case "esc":
                return "escape";
              default:
                return t
            }
          }, n = a([s(0, Bt(wc))], e)
        }(Rc),
        ch = function () {},
        hh = function (t) {
          function e(e) {
            var n = t.call(this) || this;
            return n._doc = e, n
          }
          return o(e, t), e.prototype.sanitize = function (t, e) {
            if (null == e) return null;
            switch (t) {
              case Wr.NONE:
                return e;
              case Wr.HTML:
                return e instanceof fh ? e.changingThisBreaksApplicationSecurity : (this.checkNotSafeValue(e, "HTML"), function (t, e) {
                  var n = null;
                  try {
                    Ir = Ir || new xr(t);
                    var r = e ? String(e) : "";
                    n = Ir.getInertBodyElement(r);
                    var o = 5,
                      i = r;
                    do {
                      if (0 === o) throw new Error("Failed to sanitize html because the input is unstable");
                      o--, r = i, i = n.innerHTML, n = Ir.getInertBodyElement(r)
                    } while (r !== i);
                    var a = new Hr,
                      s = a.sanitizeChildren(qr(n) || n);
                    return Pn() && a.sanitizedSomething && console.warn("WARNING: sanitizing HTML stripped some content (see http://g.co/ng/security#xss)."), s
                  } finally {
                    if (n)
                      for (var l = qr(n) || n; l.firstChild;) l.removeChild(l.firstChild)
                  }
                }(this._doc, String(e)));
              case Wr.STYLE:
                return e instanceof dh ? e.changingThisBreaksApplicationSecurity : (this.checkNotSafeValue(e, "Style"), function (t) {
                  if (!(t = String(t).trim())) return "";
                  var e = t.match(Qr);
                  return e && Tr(e[1]) === e[1] || t.match(Gr) && function (t) {
                    for (var e = !0, n = !0, r = 0; r < t.length; r++) {
                      var o = t.charAt(r);
                      "'" === o && n ? e = !e : '"' === o && e && (n = !n)
                    }
                    return e && n
                  }(t) ? t : (Pn() && console.warn("WARNING: sanitizing unsafe style value " + t + " (see http://g.co/ng/security#xss)."), "unsafe")
                }(e));
              case Wr.SCRIPT:
                if (e instanceof mh) return e.changingThisBreaksApplicationSecurity;
                throw this.checkNotSafeValue(e, "Script"), new Error("unsafe value used in a script context");
              case Wr.URL:
                return e instanceof gh || e instanceof yh ? e.changingThisBreaksApplicationSecurity : (this.checkNotSafeValue(e, "URL"), Tr(String(e)));
              case Wr.RESOURCE_URL:
                if (e instanceof gh) return e.changingThisBreaksApplicationSecurity;
                throw this.checkNotSafeValue(e, "ResourceURL"), new Error("unsafe value used in a resource URL context (see http://g.co/ng/security#xss)");
              default:
                throw new Error("Unexpected SecurityContext " + t + " (see http://g.co/ng/security#xss)")
            }
          }, e.prototype.checkNotSafeValue = function (t, e) {
            if (t instanceof ph) throw new Error("Required a safe " + e + ", got a " + t.getTypeName() + " (see http://g.co/ng/security#xss)")
          }, e.prototype.bypassSecurityTrustHtml = function (t) {
            return new fh(t)
          }, e.prototype.bypassSecurityTrustStyle = function (t) {
            return new dh(t)
          }, e.prototype.bypassSecurityTrustScript = function (t) {
            return new mh(t)
          }, e.prototype.bypassSecurityTrustUrl = function (t) {
            return new yh(t)
          }, e.prototype.bypassSecurityTrustResourceUrl = function (t) {
            return new gh(t)
          }, a([s(0, Bt(wc))], e)
        }(ch),
        ph = function () {
          function t(t) {
            this.changingThisBreaksApplicationSecurity = t
          }
          return t.prototype.toString = function () {
            return "SafeValue must use [property]=binding: " + this.changingThisBreaksApplicationSecurity + " (see http://g.co/ng/security#xss)"
          }, t
        }(),
        fh = function (t) {
          function e() {
            return null !== t && t.apply(this, arguments) || this
          }
          return o(e, t), e.prototype.getTypeName = function () {
            return "HTML"
          }, e
        }(ph),
        dh = function (t) {
          function e() {
            return null !== t && t.apply(this, arguments) || this
          }
          return o(e, t), e.prototype.getTypeName = function () {
            return "Style"
          }, e
        }(ph),
        mh = function (t) {
          function e() {
            return null !== t && t.apply(this, arguments) || this
          }
          return o(e, t), e.prototype.getTypeName = function () {
            return "Script"
          }, e
        }(ph),
        yh = function (t) {
          function e() {
            return null !== t && t.apply(this, arguments) || this
          }
          return o(e, t), e.prototype.getTypeName = function () {
            return "URL"
          }, e
        }(ph),
        gh = function (t) {
          function e() {
            return null !== t && t.apply(this, arguments) || this
          }
          return o(e, t), e.prototype.getTypeName = function () {
            return "ResourceURL"
          }, e
        }(ph),
        vh = On(_r, "browser", [{
          provide: Ue,
          useValue: lc
        }, {
          provide: ze,
          useValue: function () {
            _c.makeCurrent(), kc.init()
          },
          multi: !0
        }, {
          provide: $l,
          useClass: Ec,
          deps: [wc]
        }, {
          provide: wc,
          useFactory: function () {
            return document
          },
          deps: []
        }]);

      function _h() {
        return new Ee
      }
      var bh = function () {
        function t(t) {
          if (t) throw new Error("BrowserModule has already been loaded. If you need access to common directives such as NgIf and NgFor from a lazy loaded module, import CommonModule instead.")
        }
        var e;
        return e = t, t.withServerTransition = function (t) {
          return {
            ngModule: e,
            providers: [{
              provide: Le,
              useValue: t.appId
            }, {
              provide: Sc,
              useExisting: Le
            }, xc]
          }
        }, e = a([s(0, zt()), s(0, qt()), s(0, Bt(e))], t)
      }();
      "undefined" != typeof window && window;
      var wh = function () {
          function t() {}
          return t.prototype.build = function () {
            return new XMLHttpRequest
          }, t
        }(),
        Ch = function (t) {
          return t[t.Get = 0] = "Get", t[t.Post = 1] = "Post", t[t.Put = 2] = "Put", t[t.Delete = 3] = "Delete", t[t.Options = 4] = "Options", t[t.Head = 5] = "Head", t[t.Patch = 6] = "Patch", t
        }({}),
        Eh = function (t) {
          return t[t.Basic = 0] = "Basic", t[t.Cors = 1] = "Cors", t[t.Default = 2] = "Default", t[t.Error = 3] = "Error", t[t.Opaque = 4] = "Opaque", t
        }({}),
        Sh = function (t) {
          return t[t.NONE = 0] = "NONE", t[t.JSON = 1] = "JSON", t[t.FORM = 2] = "FORM", t[t.FORM_DATA = 3] = "FORM_DATA", t[t.TEXT = 4] = "TEXT", t[t.BLOB = 5] = "BLOB", t[t.ARRAY_BUFFER = 6] = "ARRAY_BUFFER", t
        }({}),
        xh = function (t) {
          return t[t.Text = 0] = "Text", t[t.Json = 1] = "Json", t[t.ArrayBuffer = 2] = "ArrayBuffer", t[t.Blob = 3] = "Blob", t
        }({}),
        kh = function () {
          function t(e) {
            var n = this;
            this._headers = new Map, this._normalizedNames = new Map, e && (e instanceof t ? e.forEach(function (t, e) {
              t.forEach(function (t) {
                return n.append(e, t)
              })
            }) : Object.keys(e).forEach(function (t) {
              var r = Array.isArray(e[t]) ? e[t] : [e[t]];
              n.delete(t), r.forEach(function (e) {
                return n.append(t, e)
              })
            }))
          }
          return t.fromResponseHeaderString = function (e) {
            var n = new t;
            return e.split("\n").forEach(function (t) {
              var e = t.indexOf(":");
              if (e > 0) {
                var r = t.slice(0, e),
                  o = t.slice(e + 1).trim();
                n.set(r, o)
              }
            }), n
          }, t.prototype.append = function (t, e) {
            var n = this.getAll(t);
            null === n ? this.set(t, e) : n.push(e)
          }, t.prototype.delete = function (t) {
            var e = t.toLowerCase();
            this._normalizedNames.delete(e), this._headers.delete(e)
          }, t.prototype.forEach = function (t) {
            var e = this;
            this._headers.forEach(function (n, r) {
              return t(n, e._normalizedNames.get(r), e._headers)
            })
          }, t.prototype.get = function (t) {
            var e = this.getAll(t);
            return null === e ? null : e.length > 0 ? e[0] : null
          }, t.prototype.has = function (t) {
            return this._headers.has(t.toLowerCase())
          }, t.prototype.keys = function () {
            return Array.from(this._normalizedNames.values())
          }, t.prototype.set = function (t, e) {
            Array.isArray(e) ? e.length && this._headers.set(t.toLowerCase(), [e.join(",")]) : this._headers.set(t.toLowerCase(), [e]), this.mayBeSetNormalizedName(t)
          }, t.prototype.values = function () {
            return Array.from(this._headers.values())
          }, t.prototype.toJSON = function () {
            var t = this,
              e = {};
            return this._headers.forEach(function (n, r) {
              var o = [];
              n.forEach(function (t) {
                return o.push.apply(o, h(t.split(",")))
              }), e[t._normalizedNames.get(r)] = o
            }), e
          }, t.prototype.getAll = function (t) {
            return this.has(t) && this._headers.get(t.toLowerCase()) || null
          }, t.prototype.entries = function () {
            throw new Error('"entries" method is not implemented on Headers class')
          }, t.prototype.mayBeSetNormalizedName = function (t) {
            var e = t.toLowerCase();
            this._normalizedNames.has(e) || this._normalizedNames.set(e, t)
          }, t
        }(),
        Ph = function () {
          function t(t) {
            void 0 === t && (t = {});
            var e = t.body,
              n = t.status,
              r = t.headers,
              o = t.statusText,
              i = t.type,
              a = t.url;
            this.body = null != e ? e : null, this.status = null != n ? n : null, this.headers = null != r ? r : null, this.statusText = null != o ? o : null, this.type = null != i ? i : null, this.url = null != a ? a : null
          }
          return t.prototype.merge = function (e) {
            return new t({
              body: e && null != e.body ? e.body : this.body,
              status: e && null != e.status ? e.status : this.status,
              headers: e && null != e.headers ? e.headers : this.headers,
              statusText: e && null != e.statusText ? e.statusText : this.statusText,
              type: e && null != e.type ? e.type : this.type,
              url: e && null != e.url ? e.url : this.url
            })
          }, t
        }(),
        Th = function (t) {
          function e() {
            return t.call(this, {
              status: 200,
              statusText: "Ok",
              type: Eh.Default,
              headers: new kh
            }) || this
          }
          return o(e, t), e
        }(Ph),
        Oh = function () {};

      function Ah(t) {
        if ("string" != typeof t) return t;
        switch (t.toUpperCase()) {
          case "GET":
            return Ch.Get;
          case "POST":
            return Ch.Post;
          case "PUT":
            return Ch.Put;
          case "DELETE":
            return Ch.Delete;
          case "OPTIONS":
            return Ch.Options;
          case "HEAD":
            return Ch.Head;
          case "PATCH":
            return Ch.Patch
        }
        throw new Error('Invalid request method. The method "' + t + '" is not supported.')
      }
      var Ih = function (t) {
          return t >= 200 && t < 300
        },
        Rh = function () {
          function t() {}
          return t.prototype.encodeKey = function (t) {
            return Dh(t)
          }, t.prototype.encodeValue = function (t) {
            return Dh(t)
          }, t
        }();

      function Dh(t) {
        return encodeURIComponent(t).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/gi, "$").replace(/%2C/gi, ",").replace(/%3B/gi, ";").replace(/%2B/gi, "+").replace(/%3D/gi, "=").replace(/%3F/gi, "?").replace(/%2F/gi, "/")
      }
      var Nh = function () {
          function t(t, e) {
            void 0 === t && (t = ""), void 0 === e && (e = new Rh), this.rawParams = t, this.queryEncoder = e, this.paramsMap = function (t) {
              void 0 === t && (t = "");
              var e = new Map;
              return t.length > 0 && t.split("&").forEach(function (t) {
                var n = t.indexOf("="),
                  r = c(-1 == n ? [t, ""] : [t.slice(0, n), t.slice(n + 1)], 2),
                  o = r[0],
                  i = r[1],
                  a = e.get(o) || [];
                a.push(i), e.set(o, a)
              }), e
            }(t)
          }
          return t.prototype.clone = function () {
            var e = new t("", this.queryEncoder);
            return e.appendAll(this), e
          }, t.prototype.has = function (t) {
            return this.paramsMap.has(t)
          }, t.prototype.get = function (t) {
            var e = this.paramsMap.get(t);
            return Array.isArray(e) ? e[0] : null
          }, t.prototype.getAll = function (t) {
            return this.paramsMap.get(t) || []
          }, t.prototype.set = function (t, e) {
            if (void 0 !== e && null !== e) {
              var n = this.paramsMap.get(t) || [];
              n.length = 0, n.push(e), this.paramsMap.set(t, n)
            } else this.delete(t)
          }, t.prototype.setAll = function (t) {
            var e = this;
            t.paramsMap.forEach(function (t, n) {
              var r = e.paramsMap.get(n) || [];
              r.length = 0, r.push(t[0]), e.paramsMap.set(n, r)
            })
          }, t.prototype.append = function (t, e) {
            if (void 0 !== e && null !== e) {
              var n = this.paramsMap.get(t) || [];
              n.push(e), this.paramsMap.set(t, n)
            }
          }, t.prototype.appendAll = function (t) {
            var e = this;
            t.paramsMap.forEach(function (t, n) {
              for (var r = e.paramsMap.get(n) || [], o = 0; o < t.length; ++o) r.push(t[o]);
              e.paramsMap.set(n, r)
            })
          }, t.prototype.replaceAll = function (t) {
            var e = this;
            t.paramsMap.forEach(function (t, n) {
              var r = e.paramsMap.get(n) || [];
              r.length = 0;
              for (var o = 0; o < t.length; ++o) r.push(t[o]);
              e.paramsMap.set(n, r)
            })
          }, t.prototype.toString = function () {
            var t = this,
              e = [];
            return this.paramsMap.forEach(function (n, r) {
              n.forEach(function (n) {
                return e.push(t.queryEncoder.encodeKey(r) + "=" + t.queryEncoder.encodeValue(n))
              })
            }), e.join("&")
          }, t.prototype.delete = function (t) {
            this.paramsMap.delete(t)
          }, t
        }(),
        Mh = function () {
          function t() {}
          return t.prototype.json = function () {
            return "string" == typeof this._body ? JSON.parse(this._body) : this._body instanceof ArrayBuffer ? JSON.parse(this.text()) : this._body
          }, t.prototype.text = function (t) {
            if (void 0 === t && (t = "legacy"), this._body instanceof Nh) return this._body.toString();
            if (this._body instanceof ArrayBuffer) switch (t) {
              case "legacy":
                return String.fromCharCode.apply(null, new Uint16Array(this._body));
              case "iso-8859":
                return String.fromCharCode.apply(null, new Uint8Array(this._body));
              default:
                throw new Error("Invalid value for encodingHint: " + t)
            }
            return null == this._body ? "" : "object" == typeof this._body ? JSON.stringify(this._body, null, 2) : this._body.toString()
          }, t.prototype.arrayBuffer = function () {
            return this._body instanceof ArrayBuffer ? this._body : function (t) {
              for (var e = new Uint16Array(t.length), n = 0, r = t.length; n < r; n++) e[n] = t.charCodeAt(n);
              return e.buffer
            }(this.text())
          }, t.prototype.blob = function () {
            if (this._body instanceof Blob) return this._body;
            if (this._body instanceof ArrayBuffer) return new Blob([this._body]);
            throw new Error("The request body isn't either a blob or an array buffer")
          }, t
        }(),
        jh = function (t) {
          function e(e) {
            var n = t.call(this) || this;
            return n._body = e.body, n.status = e.status, n.ok = n.status >= 200 && n.status <= 299, n.statusText = e.statusText, n.headers = e.headers, n.type = e.type, n.url = e.url, n
          }
          return o(e, t), e.prototype.toString = function () {
            return "Response with status: " + this.status + " " + this.statusText + " for URL: " + this.url
          }, e
        }(Mh),
        Fh = /^\)\]\}',?\n/,
        Vh = function () {
          function t(t, e, n) {
            var r = this;
            this.request = t, this.response = new N(function (o) {
              var i = e.build();
              i.open(Ch[t.method].toUpperCase(), t.url), null != t.withCredentials && (i.withCredentials = t.withCredentials);
              var a = function () {
                  var e = 1223 === i.status ? 204 : i.status,
                    r = null;
                  204 !== e && "string" == typeof (r = void 0 === i.response ? i.responseText : i.response) && (r = r.replace(Fh, "")), 0 === e && (e = r ? 200 : 0);
                  var a, s = kh.fromResponseHeaderString(i.getAllResponseHeaders()),
                    l = ("responseURL" in (a = i) ? a.responseURL : /^X-Request-URL:/m.test(a.getAllResponseHeaders()) ? a.getResponseHeader("X-Request-URL") : null) || t.url,
                    u = new Ph({
                      body: r,
                      status: e,
                      headers: s,
                      statusText: i.statusText || "OK",
                      url: l
                    });
                  null != n && (u = n.merge(u));
                  var c = new jh(u);
                  if (c.ok = Ih(e), c.ok) return o.next(c), void o.complete();
                  o.error(c)
                },
                s = function (t) {
                  var e = new Ph({
                    body: t,
                    type: Eh.Error,
                    status: i.status,
                    statusText: i.statusText
                  });
                  null != n && (e = n.merge(e)), o.error(new jh(e))
                };
              if (r.setDetectedContentType(t, i), null == t.headers && (t.headers = new kh), t.headers.has("Accept") || t.headers.append("Accept", "application/json, text/plain, */*"), t.headers.forEach(function (t, e) {
                  return i.setRequestHeader(e, t.join(","))
                }), null != t.responseType && null != i.responseType) switch (t.responseType) {
                case xh.ArrayBuffer:
                  i.responseType = "arraybuffer";
                  break;
                case xh.Json:
                  i.responseType = "json";
                  break;
                case xh.Text:
                  i.responseType = "text";
                  break;
                case xh.Blob:
                  i.responseType = "blob";
                  break;
                default:
                  throw new Error("The selected responseType is not supported")
              }
              return i.addEventListener("load", a), i.addEventListener("error", s), i.send(r.request.getBody()),
                function () {
                  i.removeEventListener("load", a), i.removeEventListener("error", s), i.abort()
                }
            })
          }
          return t.prototype.setDetectedContentType = function (t, e) {
            if (null == t.headers || null == t.headers.get("Content-Type")) switch (t.contentType) {
              case Sh.NONE:
                break;
              case Sh.JSON:
                e.setRequestHeader("content-type", "application/json");
                break;
              case Sh.FORM:
                e.setRequestHeader("content-type", "application/x-www-form-urlencoded;charset=UTF-8");
                break;
              case Sh.TEXT:
                e.setRequestHeader("content-type", "text/plain");
                break;
              case Sh.BLOB:
                var n = t.blob();
                n.type && e.setRequestHeader("content-type", n.type)
            }
          }, t
        }(),
        Lh = function () {
          function t(t, e) {
            void 0 === t && (t = "XSRF-TOKEN"), void 0 === e && (e = "X-XSRF-TOKEN"), this._cookieName = t, this._headerName = e
          }
          return t.prototype.configureRequest = function (t) {
            var e = fc().getCookie(this._cookieName);
            e && t.headers.set(this._headerName, e)
          }, t
        }(),
        Hh = function () {
          function t(t, e, n) {
            this._browserXHR = t, this._baseResponseOptions = e, this._xsrfStrategy = n
          }
          return t.prototype.createConnection = function (t) {
            return this._xsrfStrategy.configureRequest(t), new Vh(t, this._browserXHR, this._baseResponseOptions)
          }, t
        }(),
        Bh = function () {
          function t(t) {
            void 0 === t && (t = {});
            var e = t.method,
              n = t.headers,
              r = t.body,
              o = t.url,
              i = t.search,
              a = t.params,
              s = t.withCredentials,
              l = t.responseType;
            this.method = null != e ? Ah(e) : null, this.headers = null != n ? n : null, this.body = null != r ? r : null, this.url = null != o ? o : null, this.params = this._mergeSearchParams(a || i), this.withCredentials = null != s ? s : null, this.responseType = null != l ? l : null
          }
          return Object.defineProperty(t.prototype, "search", {
            get: function () {
              return this.params
            },
            set: function (t) {
              this.params = t
            },
            enumerable: !0,
            configurable: !0
          }), t.prototype.merge = function (e) {
            return new t({
              method: e && null != e.method ? e.method : this.method,
              headers: e && null != e.headers ? e.headers : new kh(this.headers),
              body: e && null != e.body ? e.body : this.body,
              url: e && null != e.url ? e.url : this.url,
              params: e && this._mergeSearchParams(e.params || e.search),
              withCredentials: e && null != e.withCredentials ? e.withCredentials : this.withCredentials,
              responseType: e && null != e.responseType ? e.responseType : this.responseType
            })
          }, t.prototype._mergeSearchParams = function (t) {
            return t ? t instanceof Nh ? t.clone() : "string" == typeof t ? new Nh(t) : this._parseParams(t) : this.params
          }, t.prototype._parseParams = function (t) {
            var e = this;
            void 0 === t && (t = {});
            var n = new Nh;
            return Object.keys(t).forEach(function (r) {
              var o = t[r];
              Array.isArray(o) ? o.forEach(function (t) {
                return e._appendParam(r, t, n)
              }) : e._appendParam(r, o, n)
            }), n
          }, t.prototype._appendParam = function (t, e, n) {
            "string" != typeof e && (e = JSON.stringify(e)), n.append(t, e)
          }, t
        }(),
        zh = function (t) {
          function e() {
            return t.call(this, {
              method: Ch.Get,
              headers: new kh
            }) || this
          }
          return o(e, t), e
        }(Bh),
        Uh = function (t) {
          function e(e) {
            var n = t.call(this) || this,
              r = e.url;
            n.url = e.url;
            var o, i = e.params || e.search;
            if (i && (o = "object" != typeof i || i instanceof Nh ? i.toString() : function (t) {
                var e = new Nh;
                return Object.keys(t).forEach(function (n) {
                  var r = t[n];
                  r && Array.isArray(r) ? r.forEach(function (t) {
                    return e.append(n, t.toString())
                  }) : e.append(n, r.toString())
                }), e
              }(i).toString()).length > 0) {
              var a = "?"; - 1 != n.url.indexOf("?") && (a = "&" == n.url[n.url.length - 1] ? "" : "&"), n.url = r + a + o
            }
            return n._body = e.body, n.method = Ah(e.method), n.headers = new kh(e.headers), n.contentType = n.detectContentType(), n.withCredentials = e.withCredentials, n.responseType = e.responseType, n
          }
          return o(e, t), e.prototype.detectContentType = function () {
            switch (this.headers.get("content-type")) {
              case "application/json":
                return Sh.JSON;
              case "application/x-www-form-urlencoded":
                return Sh.FORM;
              case "multipart/form-data":
                return Sh.FORM_DATA;
              case "text/plain":
              case "text/html":
                return Sh.TEXT;
              case "application/octet-stream":
                return this._body instanceof Zh ? Sh.ARRAY_BUFFER : Sh.BLOB;
              default:
                return this.detectContentTypeFromBody()
            }
          }, e.prototype.detectContentTypeFromBody = function () {
            return null == this._body ? Sh.NONE : this._body instanceof Nh ? Sh.FORM : this._body instanceof Qh ? Sh.FORM_DATA : this._body instanceof Wh ? Sh.BLOB : this._body instanceof Zh ? Sh.ARRAY_BUFFER : this._body && "object" == typeof this._body ? Sh.JSON : Sh.TEXT
          }, e.prototype.getBody = function () {
            switch (this.contentType) {
              case Sh.JSON:
              case Sh.FORM:
                return this.text();
              case Sh.FORM_DATA:
                return this._body;
              case Sh.TEXT:
                return this.text();
              case Sh.BLOB:
                return this.blob();
              case Sh.ARRAY_BUFFER:
                return this.arrayBuffer();
              default:
                return null
            }
          }, e
        }(Mh),
        qh = function () {},
        Gh = "object" == typeof window ? window : qh,
        Qh = Gh.FormData || qh,
        Wh = Gh.Blob || qh,
        Zh = Gh.ArrayBuffer || qh;

      function Kh(t, e) {
        return t.createConnection(e).response
      }

      function $h(t, e, n, r) {
        return t.merge(new Bh(e ? {
          method: e.method || n,
          url: e.url || r,
          search: e.search,
          params: e.params,
          headers: e.headers,
          body: e.body,
          withCredentials: e.withCredentials,
          responseType: e.responseType
        } : {
          method: n,
          url: r
        }))
      }
      var Yh = function () {
        function t(t, e) {
          this._backend = t, this._defaultOptions = e
        }
        return t.prototype.request = function (t, e) {
          var n;
          if ("string" == typeof t) n = Kh(this._backend, new Uh($h(this._defaultOptions, e, Ch.Get, t)));
          else {
            if (!(t instanceof Uh)) throw new Error("First argument must be a url string or Request instance.");
            n = Kh(this._backend, t)
          }
          return n
        }, t.prototype.get = function (t, e) {
          return this.request(new Uh($h(this._defaultOptions, e, Ch.Get, t)))
        }, t.prototype.post = function (t, e, n) {
          return this.request(new Uh($h(this._defaultOptions.merge(new Bh({
            body: e
          })), n, Ch.Post, t)))
        }, t.prototype.put = function (t, e, n) {
          return this.request(new Uh($h(this._defaultOptions.merge(new Bh({
            body: e
          })), n, Ch.Put, t)))
        }, t.prototype.delete = function (t, e) {
          return this.request(new Uh($h(this._defaultOptions, e, Ch.Delete, t)))
        }, t.prototype.patch = function (t, e, n) {
          return this.request(new Uh($h(this._defaultOptions.merge(new Bh({
            body: e
          })), n, Ch.Patch, t)))
        }, t.prototype.head = function (t, e) {
          return this.request(new Uh($h(this._defaultOptions, e, Ch.Head, t)))
        }, t.prototype.options = function (t, e) {
          return this.request(new Uh($h(this._defaultOptions, e, Ch.Options, t)))
        }, t
      }();

      function Xh() {
        return new Lh
      }

      function Jh(t, e) {
        return new Yh(t, e)
      }
      var tp = function () {},
        ep = function () {
          function t(t) {
            this.http = t, this.gitApi = "https://api.github.com/search/users?q=", this.user = "https://api.github.com/users/"
          }
          return t.prototype.userList = function (t) {
            var e = this.gitApi.concat(t),
              n = new kh({
                "Content-Type": "application/json"
              });
            return this.http.get(e, {
              headers: n
            })
          }, t.prototype.userDetails = function (t) {
            var e = this.user.concat(t),
              n = new kh({
                "Content-Type": "application/json"
              });
            return this.http.get(e, {
              headers: n
            })
          }, t
        }(),
        np = function () {
          function t(t) {
            this.userservice = t, this.searchList = [], this.p = 1, this.collection = this.searchList
          }
          return t.prototype.ngOnInit = function () {}, t.prototype.searchUser = function () {
            var t = this;
            this.searchList = [], this.userservice.userList(this.search).subscribe(function (e) {
              t.totalCount = e.json().total_count, t.listUser = e.json().items, t.notfound = t.search, t.isCount_Visible = !0;
              for (var n = 0; n < t.listUser.length / 4; n++) t.userservice.userDetails(t.listUser[n].login).subscribe(function (e) {
                t.search_user_data = e.json(), t.searchList.push(t.search_user_data)
              }, function (e) {
                t.error = e.json().message
              })
            }, function (e) {
              t.isCount_Visible = !1, t.emptyList = e.json().message, t.showNotification("top", "center", "Something went to wrong " + t.emptyList)
            })
          }, t.prototype.keyDownFunction = function (t, e) {
            13 == t.which && (void 0 != e ? this.searchUser() : alert("Something went to wrong"))
          }, t.prototype.showNotification = function (t, e, n) {
            $.notify({
              icon: "fa fa-exclamation-circle",
              message: n
            }, {
              type: ["danger"],
              timer: 1e3,
              placement: {
                from: t,
                align: e
              }
            })
          }, t
        }(),
        rp = function () {
          function t(t, e, n) {
            this.route = t, this.userservice = e, this.http = n, this.listFollowers = [], this.listFollowing = [], this.p = 1, this.following = this.listFollowing, this.followers = this.listFollowers
          }
          return t.prototype.ngOnInit = function () {
            var t = this;
            this.modal = $("#modal").remodal(), this.route.paramMap.subscribe(function (e) {
              t.loginId = e.get("login"), t.userservice.userDetails(e.get("login")).subscribe(function (e) {
                t.image_url = e.json().avatar_url, t.name = e.json().name, t.username = e.json().login, t.blog = e.json().blog, t.email = e.json().email, t.oragnization = e.json().company, t.place = e.json().location, t.bio = e.json().bio, t.joinDate = e.json().created_at, t.repo_url = e.json().repos_url, t.follower_url = e.json().followers_url, t.follower_url = t.follower_url.substring(t.follower_url.indexOf("users") + 6), t.following_url = e.json().following_url, t.following_url = t.following_url.substring(0, t.following_url.indexOf("{")), t.http.get(e.json().repos_url).subscribe(function (e) {
                  t.userrepo = e.json(), t.repo_length = t.userrepo.length
                }, function (e) {
                  t.error = e.json().message
                }), t.http.get(t.following_url).subscribe(function (e) {
                  t.following_users_data = e.json(), t.following_count = t.following_users_data.length;
                  for (var n = 0; n < t.following_users_data.length / 3; n++) t.userservice.userDetails(t.following_users_data[n].login).subscribe(function (e) {
                    t.following_data = e.json(), t.listFollowing.push(t.following_data)
                  }, function (e) {
                    t.error = e.json().message
                  })
                }, function (e) {
                  t.error = e.json().message
                })
              }, function (e) {
                t.error = e.json().message
              })
            })
          }, t.prototype.follower = function (t) {
            var e = this;
            this.userservice.userDetails(t).subscribe(function (t) {
              e.followers_data = t.json(), e.followers_count = e.followers_data.length;
              for (var n = 0; n < e.followers_data.length / 3; n++) e.userservice.userDetails(e.followers_data[n].login).subscribe(function (t) {
                e.followers_user_data = t.json(), e.listFollowers.push(e.followers_user_data)
              }, function (t) {
                e.error = t.json().message
              })
            }, function (t) {
              e.error = t.json().message
            })
          }, t.prototype.openModal = function (t) {
            this.modal.open(), this.clone_url = t
          }, t.prototype.close = function () {
            this.modal.close()
          }, t.prototype.copyLink = function () {
            $("input").select(), document.execCommand("copy")
          }, t
        }(),
        op = function () {},
        ip = function () {},
        ap = function () {},
        sp = "*";

      function lp(t, e) {
        return void 0 === e && (e = null), {
          type: 2,
          steps: t,
          options: e
        }
      }

      function up(t) {
        return {
          type: 6,
          styles: t,
          offset: null
        }
      }

      function cp(t) {
        Promise.resolve(null).then(t)
      }
      var hp = function () {
          function t(t, e) {
            void 0 === t && (t = 0), void 0 === e && (e = 0), this._onDoneFns = [], this._onStartFns = [], this._onDestroyFns = [], this._started = !1, this._destroyed = !1, this._finished = !1, this.parentPlayer = null, this.totalTime = t + e
          }
          return t.prototype._onFinish = function () {
            this._finished || (this._finished = !0, this._onDoneFns.forEach(function (t) {
              return t()
            }), this._onDoneFns = [])
          }, t.prototype.onStart = function (t) {
            this._onStartFns.push(t)
          }, t.prototype.onDone = function (t) {
            this._onDoneFns.push(t)
          }, t.prototype.onDestroy = function (t) {
            this._onDestroyFns.push(t)
          }, t.prototype.hasStarted = function () {
            return this._started
          }, t.prototype.init = function () {}, t.prototype.play = function () {
            this.hasStarted() || (this._onStart(), this.triggerMicrotask()), this._started = !0
          }, t.prototype.triggerMicrotask = function () {
            var t = this;
            cp(function () {
              return t._onFinish()
            })
          }, t.prototype._onStart = function () {
            this._onStartFns.forEach(function (t) {
              return t()
            }), this._onStartFns = []
          }, t.prototype.pause = function () {}, t.prototype.restart = function () {}, t.prototype.finish = function () {
            this._onFinish()
          }, t.prototype.destroy = function () {
            this._destroyed || (this._destroyed = !0, this.hasStarted() || this._onStart(), this.finish(), this._onDestroyFns.forEach(function (t) {
              return t()
            }), this._onDestroyFns = [])
          }, t.prototype.reset = function () {}, t.prototype.setPosition = function (t) {}, t.prototype.getPosition = function () {
            return 0
          }, t.prototype.triggerCallback = function (t) {
            var e = "start" == t ? this._onStartFns : this._onDoneFns;
            e.forEach(function (t) {
              return t()
            }), e.length = 0
          }, t
        }(),
        pp = function () {
          function t(t) {
            var e = this;
            this._onDoneFns = [], this._onStartFns = [], this._finished = !1, this._started = !1, this._destroyed = !1, this._onDestroyFns = [], this.parentPlayer = null, this.totalTime = 0, this.players = t;
            var n = 0,
              r = 0,
              o = 0,
              i = this.players.length;
            0 == i ? cp(function () {
              return e._onFinish()
            }) : this.players.forEach(function (t) {
              t.onDone(function () {
                ++n == i && e._onFinish()
              }), t.onDestroy(function () {
                ++r == i && e._onDestroy()
              }), t.onStart(function () {
                ++o == i && e._onStart()
              })
            }), this.totalTime = this.players.reduce(function (t, e) {
              return Math.max(t, e.totalTime)
            }, 0)
          }
          return t.prototype._onFinish = function () {
            this._finished || (this._finished = !0, this._onDoneFns.forEach(function (t) {
              return t()
            }), this._onDoneFns = [])
          }, t.prototype.init = function () {
            this.players.forEach(function (t) {
              return t.init()
            })
          }, t.prototype.onStart = function (t) {
            this._onStartFns.push(t)
          }, t.prototype._onStart = function () {
            this.hasStarted() || (this._started = !0, this._onStartFns.forEach(function (t) {
              return t()
            }), this._onStartFns = [])
          }, t.prototype.onDone = function (t) {
            this._onDoneFns.push(t)
          }, t.prototype.onDestroy = function (t) {
            this._onDestroyFns.push(t)
          }, t.prototype.hasStarted = function () {
            return this._started
          }, t.prototype.play = function () {
            this.parentPlayer || this.init(), this._onStart(), this.players.forEach(function (t) {
              return t.play()
            })
          }, t.prototype.pause = function () {
            this.players.forEach(function (t) {
              return t.pause()
            })
          }, t.prototype.restart = function () {
            this.players.forEach(function (t) {
              return t.restart()
            })
          }, t.prototype.finish = function () {
            this._onFinish(), this.players.forEach(function (t) {
              return t.finish()
            })
          }, t.prototype.destroy = function () {
            this._onDestroy()
          }, t.prototype._onDestroy = function () {
            this._destroyed || (this._destroyed = !0, this._onFinish(), this.players.forEach(function (t) {
              return t.destroy()
            }), this._onDestroyFns.forEach(function (t) {
              return t()
            }), this._onDestroyFns = [])
          }, t.prototype.reset = function () {
            this.players.forEach(function (t) {
              return t.reset()
            }), this._destroyed = !1, this._finished = !1, this._started = !1
          }, t.prototype.setPosition = function (t) {
            var e = t * this.totalTime;
            this.players.forEach(function (t) {
              var n = t.totalTime ? Math.min(1, e / t.totalTime) : 1;
              t.setPosition(n)
            })
          }, t.prototype.getPosition = function () {
            var t = 0;
            return this.players.forEach(function (e) {
              var n = e.getPosition();
              t = Math.min(n, t)
            }), t
          }, t.prototype.beforeDestroy = function () {
            this.players.forEach(function (t) {
              t.beforeDestroy && t.beforeDestroy()
            })
          }, t.prototype.triggerCallback = function (t) {
            var e = "start" == t ? this._onStartFns : this._onDoneFns;
            e.forEach(function (t) {
              return t()
            }), e.length = 0
          }, t
        }(),
        fp = "!";

      function dp(t) {
        return null != t && "" + t != "false"
      }

      function mp(t) {
        return Array.isArray(t) ? t : [t]
      }

      function yp(t) {
        return null == t ? "" : "string" == typeof t ? t : t + "px"
      }
      var gp, vp, _p = "undefined" != typeof Intl && Intl.v8BreakIterator,
        bp = function () {
          function t(t) {
            this._platformId = t, this.isBrowser = this._platformId ? this._platformId === lc : "object" == typeof document && !!document, this.EDGE = this.isBrowser && /(edge)/i.test(navigator.userAgent), this.TRIDENT = this.isBrowser && /(msie|trident)/i.test(navigator.userAgent), this.BLINK = this.isBrowser && !(!window.chrome && !_p) && "undefined" != typeof CSS && !this.EDGE && !this.TRIDENT, this.WEBKIT = this.isBrowser && /AppleWebKit/i.test(navigator.userAgent) && !this.BLINK && !this.EDGE && !this.TRIDENT, this.IOS = this.isBrowser && /iPad|iPhone|iPod/.test(navigator.userAgent) && !("MSStream" in window), this.FIREFOX = this.isBrowser && /(firefox|minefield)/i.test(navigator.userAgent), this.ANDROID = this.isBrowser && /android/i.test(navigator.userAgent) && !this.TRIDENT, this.SAFARI = this.isBrowser && /safari/i.test(navigator.userAgent) && this.WEBKIT
          }
          return t.ngInjectableDef = _t({
            factory: function () {
              return new t(fe(Ue, 8))
            },
            token: t,
            providedIn: "root"
          }), t
        }(),
        wp = function () {},
        Cp = ["color", "button", "checkbox", "date", "datetime-local", "email", "file", "hidden", "image", "month", "number", "password", "radio", "range", "reset", "search", "submit", "tel", "text", "time", "url", "week"];

      function Ep() {
        if (gp) return gp;
        if ("object" != typeof document || !document) return gp = new Set(Cp);
        var t = document.createElement("input");
        return gp = new Set(Cp.filter(function (e) {
          return t.setAttribute("type", e), t.type === e
        }))
      }
      var Sp = {},
        xp = function () {
          function t(t) {
            this.resultSelector = t
          }
          return t.prototype.call = function (t, e) {
            return e.subscribe(new kp(t, this.resultSelector))
          }, t
        }(),
        kp = function (t) {
          function e(e, n) {
            var r = t.call(this, e) || this;
            return r.resultSelector = n, r.active = 0, r.values = [], r.observables = [], r
          }
          return o(e, t), e.prototype._next = function (t) {
            this.values.push(Sp), this.observables.push(t)
          }, e.prototype._complete = function () {
            var t = this.observables,
              e = t.length;
            if (0 === e) this.destination.complete();
            else {
              this.active = e, this.toRespond = e;
              for (var n = 0; n < e; n++) {
                var r = t[n];
                this.add(Q(this, r, r, n))
              }
            }
          }, e.prototype.notifyComplete = function (t) {
            0 == (this.active -= 1) && this.destination.complete()
          }, e.prototype.notifyNext = function (t, e, n, r, o) {
            var i = this.values,
              a = this.toRespond ? i[n] === Sp ? --this.toRespond : this.toRespond : 0;
            i[n] = e, 0 === a && (this.resultSelector ? this._tryResultSelector(i) : this.destination.next(i.slice()))
          }, e.prototype._tryResultSelector = function (t) {
            var e;
            try {
              e = this.resultSelector.apply(this, t)
            } catch (t) {
              return void this.destination.error(t)
            }
            this.destination.next(e)
          }, e
        }(W),
        Pp = 1,
        Tp = {},
        Op = function (t) {
          function e(e, n) {
            var r = t.call(this, e, n) || this;
            return r.scheduler = e, r.work = n, r.pending = !1, r
          }
          return o(e, t), e.prototype.schedule = function (t, e) {
            if (void 0 === e && (e = 0), this.closed) return this;
            this.state = t;
            var n = this.id,
              r = this.scheduler;
            return null != n && (this.id = this.recycleAsyncId(r, n, e)), this.pending = !0, this.delay = e, this.id = this.id || this.requestAsyncId(r, this.id, e), this
          }, e.prototype.requestAsyncId = function (t, e, n) {
            return void 0 === n && (n = 0), setInterval(t.flush.bind(t, this), n)
          }, e.prototype.recycleAsyncId = function (t, e, n) {
            if (void 0 === n && (n = 0), null !== n && this.delay === n && !1 === this.pending) return e;
            clearInterval(e)
          }, e.prototype.execute = function (t, e) {
            if (this.closed) return new Error("executing a cancelled action");
            this.pending = !1;
            var n = this._execute(t, e);
            if (n) return n;
            !1 === this.pending && null != this.id && (this.id = this.recycleAsyncId(this.scheduler, this.id, null))
          }, e.prototype._execute = function (t, e) {
            var n = !1,
              r = void 0;
            try {
              this.work(t)
            } catch (t) {
              n = !0, r = !!t && t || new Error(t)
            }
            if (n) return this.unsubscribe(), r
          }, e.prototype._unsubscribe = function () {
            var t = this.id,
              e = this.scheduler,
              n = e.actions,
              r = n.indexOf(this);
            this.work = null, this.state = null, this.pending = !1, this.scheduler = null, -1 !== r && n.splice(r, 1), null != t && (this.id = this.recycleAsyncId(e, t, null)), this.delay = null
          }, e
        }(function (t) {
          function e(e, n) {
            return t.call(this) || this
          }
          return o(e, t), e.prototype.schedule = function (t, e) {
            return void 0 === e && (e = 0), this
          }, e
        }(x)),
        Ap = function (t) {
          function e(e, n) {
            var r = t.call(this, e, n) || this;
            return r.scheduler = e, r.work = n, r
          }
          return o(e, t), e.prototype.requestAsyncId = function (e, n, r) {
            return void 0 === r && (r = 0), null !== r && r > 0 ? t.prototype.requestAsyncId.call(this, e, n, r) : (e.actions.push(this), e.scheduled || (e.scheduled = (o = e.flush.bind(e, null), i = Pp++, Tp[i] = o, Promise.resolve().then(function () {
              return function (t) {
                var e = Tp[t];
                e && e()
              }(i)
            }), i)));
            var o, i
          }, e.prototype.recycleAsyncId = function (e, n, r) {
            if (void 0 === r && (r = 0), null !== r && r > 0 || null === r && this.delay > 0) return t.prototype.recycleAsyncId.call(this, e, n, r);
            0 === e.actions.length && (delete Tp[n], e.scheduled = void 0)
          }, e
        }(Op),
        Ip = function () {
          function t(e, n) {
            void 0 === n && (n = t.now), this.SchedulerAction = e, this.now = n
          }
          return t.prototype.schedule = function (t, e, n) {
            return void 0 === e && (e = 0), new this.SchedulerAction(this, t).schedule(n, e)
          }, t.now = function () {
            return Date.now()
          }, t
        }(),
        Rp = function (t) {
          function e(n, r) {
            void 0 === r && (r = Ip.now);
            var o = t.call(this, n, function () {
              return e.delegate && e.delegate !== o ? e.delegate.now() : r()
            }) || this;
            return o.actions = [], o.active = !1, o.scheduled = void 0, o
          }
          return o(e, t), e.prototype.schedule = function (n, r, o) {
            return void 0 === r && (r = 0), e.delegate && e.delegate !== this ? e.delegate.schedule(n, r, o) : t.prototype.schedule.call(this, n, r, o)
          }, e.prototype.flush = function (t) {
            var e = this.actions;
            if (this.active) e.push(t);
            else {
              var n;
              this.active = !0;
              do {
                if (n = t.execute(t.state, t.delay)) break
              } while (t = e.shift());
              if (this.active = !1, n) {
                for (; t = e.shift();) t.unsubscribe();
                throw n
              }
            }
          }, e
        }(Ip),
        Dp = new(function (t) {
          function e() {
            return null !== t && t.apply(this, arguments) || this
          }
          return o(e, t), e.prototype.flush = function (t) {
            this.active = !0, this.scheduled = void 0;
            var e, n = this.actions,
              r = -1,
              o = n.length;
            t = t || n.shift();
            do {
              if (e = t.execute(t.state, t.delay)) break
            } while (++r < o && (t = n.shift()));
            if (this.active = !1, e) {
              for (; ++r < o && (t = n.shift());) t.unsubscribe();
              throw e
            }
          }, e
        }(Rp))(Ap);

      function Np(t) {
        var e = new N(function (e) {
          e.next(t), e.complete()
        });
        return e._isScalar = !0, e.value = t, e
      }
      var Mp = new N(function (t) {
        return t.complete()
      });

      function jp(t) {
        return t ? function (t) {
          return new N(function (e) {
            return t.schedule(function () {
              return e.complete()
            })
          })
        }(t) : Mp
      }

      function Fp() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        var n = t[t.length - 1];
        switch (j(n) ? t.pop() : n = void 0, t.length) {
          case 0:
            return jp(n);
          case 1:
            return n ? X(t, n) : Np(t[0]);
          default:
            return X(t, n)
        }
      }

      function Vp() {
        return ot(1)
      }

      function Lp() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        return function (e) {
          var n = t[t.length - 1];
          j(n) ? t.pop() : n = null;
          var r = t.length;
          return function () {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            return 1 === t.length || 2 === t.length && j(t[1]) ? J(t[0]) : Vp()(Fp.apply(void 0, t))
          }(1 !== r || n ? r > 0 ? X(t, n) : jp(n) : Np(t[0]), e)
        }
      }
      var Hp = new Rp(Op);

      function Bp(t, e) {
        return void 0 === e && (e = Hp),
          function (n) {
            return n.lift(new zp(t, e))
          }
      }
      var zp = function () {
          function t(t, e) {
            this.dueTime = t, this.scheduler = e
          }
          return t.prototype.call = function (t, e) {
            return e.subscribe(new Up(t, this.dueTime, this.scheduler))
          }, t
        }(),
        Up = function (t) {
          function e(e, n, r) {
            var o = t.call(this, e) || this;
            return o.dueTime = n, o.scheduler = r, o.debouncedSubscription = null, o.lastValue = null, o.hasValue = !1, o
          }
          return o(e, t), e.prototype._next = function (t) {
            this.clearDebounce(), this.lastValue = t, this.hasValue = !0, this.add(this.debouncedSubscription = this.scheduler.schedule(qp, this.dueTime, this))
          }, e.prototype._complete = function () {
            this.debouncedNext(), this.destination.complete()
          }, e.prototype.debouncedNext = function () {
            if (this.clearDebounce(), this.hasValue) {
              var t = this.lastValue;
              this.lastValue = null, this.hasValue = !1, this.destination.next(t)
            }
          }, e.prototype.clearDebounce = function () {
            var t = this.debouncedSubscription;
            null !== t && (this.remove(t), t.unsubscribe(), this.debouncedSubscription = null)
          }, e
        }(T);

      function qp(t) {
        t.debouncedNext()
      }

      function Gp(t) {
        return function (e) {
          return e.lift(new Wp(t))
        }
      }
      var Qp, Wp = function () {
          function t(t) {
            this.notifier = t
          }
          return t.prototype.call = function (t, e) {
            var n = new Zp(t),
              r = Q(n, this.notifier);
            return r && !n.seenValue ? (n.add(r), e.subscribe(n)) : n
          }, t
        }(),
        Zp = function (t) {
          function e(e) {
            var n = t.call(this, e) || this;
            return n.seenValue = !1, n
          }
          return o(e, t), e.prototype.notifyNext = function (t, e, n, r, o) {
            this.seenValue = !0, this.complete()
          }, e.prototype.notifyComplete = function () {}, e
        }(W),
        Kp = new Set,
        $p = function () {
          function t(t) {
            this.platform = t, this._matchMedia = this.platform.isBrowser && window.matchMedia ? window.matchMedia.bind(window) : Yp
          }
          return t.prototype.matchMedia = function (t) {
            return this.platform.WEBKIT && function (t) {
              if (!Kp.has(t)) try {
                Qp || ((Qp = document.createElement("style")).setAttribute("type", "text/css"), document.head.appendChild(Qp)), Qp.sheet && (Qp.sheet.insertRule("@media " + t + " {.fx-query-test{ }}", 0), Kp.add(t))
              } catch (t) {
                console.error(t)
              }
            }(t), this._matchMedia(t)
          }, t.ngInjectableDef = _t({
            factory: function () {
              return new t(fe(bp))
            },
            token: t,
            providedIn: "root"
          }), t
        }();

      function Yp(t) {
        return {
          matches: "all" === t || "" === t,
          media: t,
          addListener: function () {},
          removeListener: function () {}
        }
      }
      var Xp = function () {
        function t(t, e) {
          this.mediaMatcher = t, this.zone = e, this._queries = new Map, this._destroySubject = new ct
        }
        return t.prototype.ngOnDestroy = function () {
          this._destroySubject.next(), this._destroySubject.complete()
        }, t.prototype.isMatched = function (t) {
          var e = this;
          return Jp(mp(t)).some(function (t) {
            return e._registerQuery(t).mql.matches
          })
        }, t.prototype.observe = function (t) {
          var e = this;
          return function () {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            var n = null,
              r = null;
            return j(t[t.length - 1]) && (r = t.pop()), "function" == typeof t[t.length - 1] && (n = t.pop()), 1 === t.length && g(t[0]) && (t = t[0]), X(t, r).lift(new xp(n))
          }(Jp(mp(t)).map(function (t) {
            return e._registerQuery(t).observable
          })).pipe(Bp(0, Dp), Z(function (t) {
            var e = {
              matches: !1,
              breakpoints: {}
            };
            return t.forEach(function (t) {
              e.matches = e.matches || t.matches, e.breakpoints[t.query] = t.matches
            }), e
          }))
        }, t.prototype._registerQuery = function (t) {
          var e = this;
          if (this._queries.has(t)) return this._queries.get(t);
          var n, r = this.mediaMatcher.matchMedia(t),
            o = {
              observable: function t(e, n, r) {
                return r ? t(e, n).pipe(Z(function (t) {
                  return g(t) ? r.apply(void 0, t) : r(t)
                })) : new N(function (t) {
                  var r, o = function () {
                    for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                    return t.next(1 === e.length ? e[0] : e)
                  };
                  try {
                    r = e(o)
                  } catch (e) {
                    return void t.error(e)
                  }
                  if (p(n)) return function () {
                    return n(o, r)
                  }
                })
              }(function (t) {
                r.addListener(n = function (n) {
                  return e.zone.run(function () {
                    return t(n)
                  })
                })
              }, function () {
                return r.removeListener(n)
              }).pipe(Lp(r), Z(function (e) {
                return {
                  query: t,
                  matches: e.matches
                }
              }), Gp(this._destroySubject)),
              mql: r
            };
          return this._queries.set(t, o), o
        }, t.ngInjectableDef = _t({
          factory: function () {
            return new t(fe($p), fe(fn))
          },
          token: t,
          providedIn: "root"
        }), t
      }();

      function Jp(t) {
        return t.map(function (t) {
          return t.split(",")
        }).reduce(function (t, e) {
          return t.concat(e)
        }).map(function (t) {
          return t.trim()
        })
      }
      var tf = {
        XSmall: "(max-width: 599.99px)",
        Small: "(min-width: 600px) and (max-width: 959.99px)",
        Medium: "(min-width: 960px) and (max-width: 1279.99px)",
        Large: "(min-width: 1280px) and (max-width: 1919.99px)",
        XLarge: "(min-width: 1920px)",
        Handset: "(max-width: 599.99px) and (orientation: portrait), (max-width: 959.99px) and (orientation: landscape)",
        Tablet: "(min-width: 600px) and (max-width: 839.99px) and (orientation: portrait), (min-width: 960px) and (max-width: 1279.99px) and (orientation: landscape)",
        Web: "(min-width: 840px) and (orientation: portrait), (min-width: 1280px) and (orientation: landscape)",
        HandsetPortrait: "(max-width: 599.99px) and (orientation: portrait)",
        TabletPortrait: "(min-width: 600px) and (max-width: 839.99px) and (orientation: portrait)",
        WebPortrait: "(min-width: 840px) and (orientation: portrait)",
        HandsetLandscape: "(max-width: 959.99px) and (orientation: landscape)",
        TabletLandscape: "(min-width: 960px) and (max-width: 1279.99px) and (orientation: landscape)",
        WebLandscape: "(min-width: 1280px) and (orientation: landscape)"
      };

      function ef(t, e, n, r) {
        return p(n) && (r = n, n = void 0), r ? ef(t, e, n).pipe(Z(function (t) {
          return g(t) ? r.apply(void 0, t) : r(t)
        })) : new N(function (r) {
          ! function t(e, n, r, o, i) {
            var a;
            if (function (t) {
                return t && "function" == typeof t.addEventListener && "function" == typeof t.removeEventListener
              }(e)) {
              var s = e;
              e.addEventListener(n, r, i), a = function () {
                return s.removeEventListener(n, r, i)
              }
            } else if (function (t) {
                return t && "function" == typeof t.on && "function" == typeof t.off
              }(e)) {
              var l = e;
              e.on(n, r), a = function () {
                return l.off(n, r)
              }
            } else if (function (t) {
                return t && "function" == typeof t.addListener && "function" == typeof t.removeListener
              }(e)) {
              var u = e;
              e.addListener(n, r), a = function () {
                return u.removeListener(n, r)
              }
            } else {
              if (!e || !e.length) throw new TypeError("Invalid event target");
              for (var c = 0, h = e.length; c < h; c++) t(e[c], n, r, o, i)
            }
            o.add(a)
          }(t, e, function (t) {
            r.next(arguments.length > 1 ? Array.prototype.slice.call(arguments) : t)
          }, r, n)
        })
      }
      Object;
      var nf = function () {
          function t(t) {
            this.durationSelector = t
          }
          return t.prototype.call = function (t, e) {
            return e.subscribe(new rf(t, this.durationSelector))
          }, t
        }(),
        rf = function (t) {
          function e(e, n) {
            var r = t.call(this, e) || this;
            return r.durationSelector = n, r.hasValue = !1, r
          }
          return o(e, t), e.prototype._next = function (t) {
            if (this.value = t, this.hasValue = !0, !this.throttled) {
              var e = C(this.durationSelector)(t);
              if (e === b) this.destination.error(b.e);
              else {
                var n = Q(this, e);
                !n || n.closed ? this.clearThrottle() : this.add(this.throttled = n)
              }
            }
          }, e.prototype.clearThrottle = function () {
            var t = this.value,
              e = this.hasValue,
              n = this.throttled;
            n && (this.remove(n), this.throttled = null, n.unsubscribe()), e && (this.value = null, this.hasValue = !1, this.destination.next(t))
          }, e.prototype.notifyNext = function (t, e, n, r) {
            this.clearThrottle()
          }, e.prototype.notifyComplete = function () {
            this.clearThrottle()
          }, e
        }(W);

      function of (t) {
        return !g(t) && t - parseFloat(t) + 1 >= 0
      }

      function af(t) {
        var e = t.index,
          n = t.period,
          r = t.subscriber;
        if (r.next(e), !r.closed) {
          if (-1 === n) return r.complete();
          t.index = e + 1, this.schedule(t, n)
        }
      }

      function sf(t, e) {
        return void 0 === e && (e = Hp), n = function () {
            return function (t, e, n) {
              void 0 === t && (t = 0);
              var r = -1;
              return of(e) ? r = Number(e) < 1 ? 1 : Number(e) : j(e) && (n = e), j(n) || (n = Hp), new N(function (e) {
                var o = of (t) ? t : +t - n.now();
                return n.schedule(af, o, {
                  index: 0,
                  period: r,
                  subscriber: e
                })
              })
            }(t, e)
          },
          function (t) {
            return t.lift(new nf(n))
          };
        var n
      }

      function lf(t, e) {
        return function (n) {
          return n.lift(new uf(t, e))
        }
      }
      var uf = function () {
          function t(t, e) {
            this.predicate = t, this.thisArg = e
          }
          return t.prototype.call = function (t, e) {
            return e.subscribe(new cf(t, this.predicate, this.thisArg))
          }, t
        }(),
        cf = function (t) {
          function e(e, n, r) {
            var o = t.call(this, e) || this;
            return o.predicate = n, o.thisArg = r, o.count = 0, o
          }
          return o(e, t), e.prototype._next = function (t) {
            var e;
            try {
              e = this.predicate.call(this.thisArg, t, this.count++)
            } catch (t) {
              return void this.destination.error(t)
            }
            e && this.destination.next(t)
          }, e
        }(T),
        hf = function () {
          function t(t, e) {
            this._ngZone = t, this._platform = e, this._scrolled = new ct, this._globalSubscription = null, this._scrolledCount = 0, this.scrollContainers = new Map
          }
          return t.prototype.register = function (t) {
            var e = this;
            this.scrollContainers.has(t) || this.scrollContainers.set(t, t.elementScrolled().subscribe(function () {
              return e._scrolled.next(t)
            }))
          }, t.prototype.deregister = function (t) {
            var e = this.scrollContainers.get(t);
            e && (e.unsubscribe(), this.scrollContainers.delete(t))
          }, t.prototype.scrolled = function (t) {
            var e = this;
            return void 0 === t && (t = 20), this._platform.isBrowser ? N.create(function (n) {
              e._globalSubscription || e._addGlobalListener();
              var r = t > 0 ? e._scrolled.pipe(sf(t)).subscribe(n) : e._scrolled.subscribe(n);
              return e._scrolledCount++,
                function () {
                  r.unsubscribe(), e._scrolledCount--, e._scrolledCount || e._removeGlobalListener()
                }
            }) : Fp()
          }, t.prototype.ngOnDestroy = function () {
            var t = this;
            this._removeGlobalListener(), this.scrollContainers.forEach(function (e, n) {
              return t.deregister(n)
            }), this._scrolled.complete()
          }, t.prototype.ancestorScrolled = function (t, e) {
            var n = this.getAncestorScrollContainers(t);
            return this.scrolled(e).pipe(lf(function (t) {
              return !t || n.indexOf(t) > -1
            }))
          }, t.prototype.getAncestorScrollContainers = function (t) {
            var e = this,
              n = [];
            return this.scrollContainers.forEach(function (r, o) {
              e._scrollableContainsElement(o, t) && n.push(o)
            }), n
          }, t.prototype._scrollableContainsElement = function (t, e) {
            var n = e.nativeElement,
              r = t.getElementRef().nativeElement;
            do {
              if (n == r) return !0
            } while (n = n.parentElement);
            return !1
          }, t.prototype._addGlobalListener = function () {
            var t = this;
            this._globalSubscription = this._ngZone.runOutsideAngular(function () {
              return ef(window.document, "scroll").subscribe(function () {
                return t._scrolled.next()
              })
            })
          }, t.prototype._removeGlobalListener = function () {
            this._globalSubscription && (this._globalSubscription.unsubscribe(), this._globalSubscription = null)
          }, t.ngInjectableDef = _t({
            factory: function () {
              return new t(fe(fn), fe(bp))
            },
            token: t,
            providedIn: "root"
          }), t
        }(),
        pf = function () {},
        ff = function () {
          function t(t, e) {
            var n = this;
            this._platform = t, e.runOutsideAngular(function () {
              n._change = t.isBrowser ? it(ef(window, "resize"), ef(window, "orientationchange")) : Fp(), n._invalidateCache = n.change().subscribe(function () {
                return n._updateViewportSize()
              })
            })
          }
          return t.prototype.ngOnDestroy = function () {
            this._invalidateCache.unsubscribe()
          }, t.prototype.getViewportSize = function () {
            this._viewportSize || this._updateViewportSize();
            var t = {
              width: this._viewportSize.width,
              height: this._viewportSize.height
            };
            return this._platform.isBrowser || (this._viewportSize = null), t
          }, t.prototype.getViewportRect = function () {
            var t = this.getViewportScrollPosition(),
              e = this.getViewportSize(),
              n = e.width,
              r = e.height;
            return {
              top: t.top,
              left: t.left,
              bottom: t.top + r,
              right: t.left + n,
              height: r,
              width: n
            }
          }, t.prototype.getViewportScrollPosition = function () {
            if (!this._platform.isBrowser) return {
              top: 0,
              left: 0
            };
            var t = document.documentElement,
              e = t.getBoundingClientRect();
            return {
              top: -e.top || document.body.scrollTop || window.scrollY || t.scrollTop || 0,
              left: -e.left || document.body.scrollLeft || window.scrollX || t.scrollLeft || 0
            }
          }, t.prototype.change = function (t) {
            return void 0 === t && (t = 20), t > 0 ? this._change.pipe(sf(t)) : this._change
          }, t.prototype._updateViewportSize = function () {
            this._viewportSize = this._platform.isBrowser ? {
              width: window.innerWidth,
              height: window.innerHeight
            } : {
              width: 0,
              height: 0
            }
          }, t.ngInjectableDef = _t({
            factory: function () {
              return new t(fe(bp), fe(fn))
            },
            token: t,
            providedIn: "root"
          }), t
        }();

      function df() {
        return Error.call(this), this.message = "argument out of range", this.name = "ArgumentOutOfRangeError", this
      }
      df.prototype = Object.create(Error.prototype);
      var mf = df;

      function yf(t) {
        return function (e) {
          return 0 === t ? jp() : e.lift(new gf(t))
        }
      }
      var gf = function () {
          function t(t) {
            if (this.total = t, this.total < 0) throw new mf
          }
          return t.prototype.call = function (t, e) {
            return e.subscribe(new vf(t, this.total))
          }, t
        }(),
        vf = function (t) {
          function e(e, n) {
            var r = t.call(this, e) || this;
            return r.total = n, r.count = 0, r
          }
          return o(e, t), e.prototype._next = function (t) {
            var e = this.total,
              n = ++this.count;
            n <= e && (this.destination.next(t), n === e && (this.destination.complete(), this.unsubscribe()))
          }, e
        }(T);

      function _f() {
        throw Error("Host already has a portal attached")
      }
      var bf = function () {
          function t() {}
          return t.prototype.attach = function (t) {
            return null == t && function () {
              throw Error("Attempting to attach a portal to a null PortalOutlet")
            }(), t.hasAttached() && _f(), this._attachedHost = t, t.attach(this)
          }, t.prototype.detach = function () {
            var t = this._attachedHost;
            null == t ? function () {
              throw Error("Attempting to detach a portal that is not attached to a host")
            }() : (this._attachedHost = null, t.detach())
          }, Object.defineProperty(t.prototype, "isAttached", {
            get: function () {
              return null != this._attachedHost
            },
            enumerable: !0,
            configurable: !0
          }), t.prototype.setAttachedHost = function (t) {
            this._attachedHost = t
          }, t
        }(),
        wf = function (t) {
          function e(e, n, r, o) {
            var i = t.call(this) || this;
            return i.component = e, i.viewContainerRef = n, i.injector = r, i.componentFactoryResolver = o, i
          }
          return o(e, t), e
        }(bf),
        Cf = function (t) {
          function e(e, n, r) {
            var o = t.call(this) || this;
            return o.templateRef = e, o.viewContainerRef = n, o.context = r, o
          }
          return o(e, t), Object.defineProperty(e.prototype, "origin", {
            get: function () {
              return this.templateRef.elementRef
            },
            enumerable: !0,
            configurable: !0
          }), e.prototype.attach = function (e, n) {
            return void 0 === n && (n = this.context), this.context = n, t.prototype.attach.call(this, e)
          }, e.prototype.detach = function () {
            return this.context = void 0, t.prototype.detach.call(this)
          }, e
        }(bf),
        Ef = function (t) {
          function e(e, n, r, o) {
            var i = t.call(this) || this;
            return i.outletElement = e, i._componentFactoryResolver = n, i._appRef = r, i._defaultInjector = o, i
          }
          return o(e, t), e.prototype.attachComponentPortal = function (t) {
            var e, n = this,
              r = (t.componentFactoryResolver || this._componentFactoryResolver).resolveComponentFactory(t.component);
            return t.viewContainerRef ? (e = t.viewContainerRef.createComponent(r, t.viewContainerRef.length, t.injector || t.viewContainerRef.injector), this.setDisposeFn(function () {
              return e.destroy()
            })) : (e = r.create(t.injector || this._defaultInjector), this._appRef.attachView(e.hostView), this.setDisposeFn(function () {
              n._appRef.detachView(e.hostView), e.destroy()
            })), this.outletElement.appendChild(this._getComponentRootNode(e)), e
          }, e.prototype.attachTemplatePortal = function (t) {
            var e = this,
              n = t.viewContainerRef,
              r = n.createEmbeddedView(t.templateRef, t.context);
            return r.detectChanges(), r.rootNodes.forEach(function (t) {
              return e.outletElement.appendChild(t)
            }), this.setDisposeFn(function () {
              var t = n.indexOf(r); - 1 !== t && n.remove(t)
            }), r
          }, e.prototype.dispose = function () {
            t.prototype.dispose.call(this), null != this.outletElement.parentNode && this.outletElement.parentNode.removeChild(this.outletElement)
          }, e.prototype._getComponentRootNode = function (t) {
            return t.hostView.rootNodes[0]
          }, e
        }(function () {
          function t() {
            this._isDisposed = !1
          }
          return t.prototype.hasAttached = function () {
            return !!this._attachedPortal
          }, t.prototype.attach = function (t) {
            return t || function () {
              throw Error("Must provide a portal to attach")
            }(), this.hasAttached() && _f(), this._isDisposed && function () {
              throw Error("This PortalOutlet has already been disposed")
            }(), t instanceof wf ? (this._attachedPortal = t, this.attachComponentPortal(t)) : t instanceof Cf ? (this._attachedPortal = t, this.attachTemplatePortal(t)) : void
            function () {
              throw Error("Attempting to attach an unknown Portal type. BasePortalOutlet accepts either a ComponentPortal or a TemplatePortal.")
            }()
          }, t.prototype.detach = function () {
            this._attachedPortal && (this._attachedPortal.setAttachedHost(null), this._attachedPortal = null), this._invokeDisposeFn()
          }, t.prototype.dispose = function () {
            this.hasAttached() && this.detach(), this._invokeDisposeFn(), this._isDisposed = !0
          }, t.prototype.setDisposeFn = function (t) {
            this._disposeFn = t
          }, t.prototype._invokeDisposeFn = function () {
            this._disposeFn && (this._disposeFn(), this._disposeFn = null)
          }, t
        }()),
        Sf = function () {},
        xf = function () {
          function t(t, e) {
            this._viewportRuler = t, this._previousHTMLStyles = {
              top: "",
              left: ""
            }, this._isEnabled = !1, this._document = e
          }
          return t.prototype.attach = function () {}, t.prototype.enable = function () {
            if (this._canBeEnabled()) {
              var t = this._document.documentElement;
              this._previousScrollPosition = this._viewportRuler.getViewportScrollPosition(), this._previousHTMLStyles.left = t.style.left || "", this._previousHTMLStyles.top = t.style.top || "", t.style.left = yp(-this._previousScrollPosition.left), t.style.top = yp(-this._previousScrollPosition.top), t.classList.add("cdk-global-scrollblock"), this._isEnabled = !0
            }
          }, t.prototype.disable = function () {
            if (this._isEnabled) {
              var t = this._document.documentElement,
                e = t.style,
                n = this._document.body.style,
                r = e.scrollBehavior || "",
                o = n.scrollBehavior || "";
              this._isEnabled = !1, e.left = this._previousHTMLStyles.left, e.top = this._previousHTMLStyles.top, t.classList.remove("cdk-global-scrollblock"), e.scrollBehavior = n.scrollBehavior = "auto", window.scroll(this._previousScrollPosition.left, this._previousScrollPosition.top), e.scrollBehavior = r, n.scrollBehavior = o
            }
          }, t.prototype._canBeEnabled = function () {
            if (this._document.documentElement.classList.contains("cdk-global-scrollblock") || this._isEnabled) return !1;
            var t = this._document.body,
              e = this._viewportRuler.getViewportSize();
            return t.scrollHeight > e.height || t.scrollWidth > e.width
          }, t
        }();

      function kf() {
        return Error("Scroll strategy has already been attached.")
      }
      var Pf = function () {
          function t(t, e, n, r) {
            var o = this;
            this._scrollDispatcher = t, this._ngZone = e, this._viewportRuler = n, this._config = r, this._scrollSubscription = null, this._detach = function () {
              o.disable(), o._overlayRef.hasAttached() && o._ngZone.run(function () {
                return o._overlayRef.detach()
              })
            }
          }
          return t.prototype.attach = function (t) {
            if (this._overlayRef) throw kf();
            this._overlayRef = t
          }, t.prototype.enable = function () {
            var t = this;
            if (!this._scrollSubscription) {
              var e = this._scrollDispatcher.scrolled(0);
              this._config && this._config.threshold && this._config.threshold > 1 ? (this._initialScrollPosition = this._viewportRuler.getViewportScrollPosition().top, this._scrollSubscription = e.subscribe(function () {
                var e = t._viewportRuler.getViewportScrollPosition().top;
                Math.abs(e - t._initialScrollPosition) > t._config.threshold ? t._detach() : t._overlayRef.updatePosition()
              })) : this._scrollSubscription = e.subscribe(this._detach)
            }
          }, t.prototype.disable = function () {
            this._scrollSubscription && (this._scrollSubscription.unsubscribe(), this._scrollSubscription = null)
          }, t
        }(),
        Tf = function () {
          function t() {}
          return t.prototype.enable = function () {}, t.prototype.disable = function () {}, t.prototype.attach = function () {}, t
        }();

      function Of(t, e) {
        return e.some(function (e) {
          return t.bottom < e.top || t.top > e.bottom || t.right < e.left || t.left > e.right
        })
      }

      function Af(t, e) {
        return e.some(function (e) {
          return t.top < e.top || t.bottom > e.bottom || t.left < e.left || t.right > e.right
        })
      }
      var If = function () {
          function t(t, e, n, r) {
            this._scrollDispatcher = t, this._viewportRuler = e, this._ngZone = n, this._config = r, this._scrollSubscription = null
          }
          return t.prototype.attach = function (t) {
            if (this._overlayRef) throw kf();
            this._overlayRef = t
          }, t.prototype.enable = function () {
            var t = this;
            this._scrollSubscription || (this._scrollSubscription = this._scrollDispatcher.scrolled(this._config ? this._config.scrollThrottle : 0).subscribe(function () {
              if (t._overlayRef.updatePosition(), t._config && t._config.autoClose) {
                var e = t._overlayRef.overlayElement.getBoundingClientRect(),
                  n = t._viewportRuler.getViewportSize(),
                  r = n.width,
                  o = n.height;
                Of(e, [{
                  width: r,
                  height: o,
                  bottom: o,
                  right: r,
                  top: 0,
                  left: 0
                }]) && (t.disable(), t._ngZone.run(function () {
                  return t._overlayRef.detach()
                }))
              }
            }))
          }, t.prototype.disable = function () {
            this._scrollSubscription && (this._scrollSubscription.unsubscribe(), this._scrollSubscription = null)
          }, t
        }(),
        Rf = function () {
          function t(t, e, n, r) {
            var o = this;
            this._scrollDispatcher = t, this._viewportRuler = e, this._ngZone = n, this.noop = function () {
              return new Tf
            }, this.close = function (t) {
              return new Pf(o._scrollDispatcher, o._ngZone, o._viewportRuler, t)
            }, this.block = function () {
              return new xf(o._viewportRuler, o._document)
            }, this.reposition = function (t) {
              return new If(o._scrollDispatcher, o._viewportRuler, o._ngZone, t)
            }, this._document = r
          }
          return t.ngInjectableDef = _t({
            factory: function () {
              return new t(fe(hf), fe(ff), fe(fn), fe(sc))
            },
            token: t,
            providedIn: "root"
          }), t
        }(),
        Df = function () {
          return function (t) {
            var e = this;
            this.scrollStrategy = new Tf, this.panelClass = "", this.hasBackdrop = !1, this.backdropClass = "cdk-overlay-dark-backdrop", this.disposeOnNavigation = !1, t && Object.keys(t).forEach(function (n) {
              void 0 !== t[n] && (e[n] = t[n])
            })
          }
        }();

      function Nf(t, e) {
        if ("top" !== e && "bottom" !== e && "center" !== e) throw Error("ConnectedPosition: Invalid " + t + ' "' + e + '". Expected "top", "bottom" or "center".')
      }

      function Mf(t, e) {
        if ("start" !== e && "end" !== e && "center" !== e) throw Error("ConnectedPosition: Invalid " + t + ' "' + e + '". Expected "start", "end" or "center".')
      }
      var jf = function () {
          function t(t) {
            var e = this;
            this._attachedOverlays = [], this._keydownListener = function (t) {
              for (var n = e._attachedOverlays, r = n.length - 1; r > -1; r--)
                if (n[r]._keydownEventSubscriptions > 0) {
                  n[r]._keydownEvents.next(t);
                  break
                }
            }, this._document = t
          }
          return t.prototype.ngOnDestroy = function () {
            this._detach()
          }, t.prototype.add = function (t) {
            this.remove(t), this._isAttached || (this._document.body.addEventListener("keydown", this._keydownListener, !0), this._isAttached = !0), this._attachedOverlays.push(t)
          }, t.prototype.remove = function (t) {
            var e = this._attachedOverlays.indexOf(t);
            e > -1 && this._attachedOverlays.splice(e, 1), 0 === this._attachedOverlays.length && this._detach()
          }, t.prototype._detach = function () {
            this._isAttached && (this._document.body.removeEventListener("keydown", this._keydownListener, !0), this._isAttached = !1)
          }, t.ngInjectableDef = _t({
            factory: function () {
              return new t(fe(sc))
            },
            token: t,
            providedIn: "root"
          }), t
        }(),
        Ff = function () {
          function t(t) {
            this._document = t
          }
          return t.prototype.ngOnDestroy = function () {
            this._containerElement && this._containerElement.parentNode && this._containerElement.parentNode.removeChild(this._containerElement)
          }, t.prototype.getContainerElement = function () {
            return this._containerElement || this._createContainer(), this._containerElement
          }, t.prototype._createContainer = function () {
            var t = this._document.createElement("div");
            t.classList.add("cdk-overlay-container"), this._document.body.appendChild(t), this._containerElement = t
          }, t.ngInjectableDef = _t({
            factory: function () {
              return new t(fe(sc))
            },
            token: t,
            providedIn: "root"
          }), t
        }(),
        Vf = function () {
          function t(t, e, n, r, o, i, a, s) {
            var l = this;
            this._portalOutlet = t, this._host = e, this._pane = n, this._config = r, this._ngZone = o, this._keyboardDispatcher = i, this._document = a, this._location = s, this._backdropElement = null, this._backdropClick = new ct, this._attachments = new ct, this._detachments = new ct, this._locationChanges = x.EMPTY, this._keydownEventsObservable = N.create(function (t) {
              var e = l._keydownEvents.subscribe(t);
              return l._keydownEventSubscriptions++,
                function () {
                  e.unsubscribe(), l._keydownEventSubscriptions--
                }
            }), this._keydownEvents = new ct, this._keydownEventSubscriptions = 0, r.scrollStrategy && r.scrollStrategy.attach(this), this._positionStrategy = r.positionStrategy
          }
          return Object.defineProperty(t.prototype, "overlayElement", {
            get: function () {
              return this._pane
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(t.prototype, "backdropElement", {
            get: function () {
              return this._backdropElement
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(t.prototype, "hostElement", {
            get: function () {
              return this._host
            },
            enumerable: !0,
            configurable: !0
          }), t.prototype.attach = function (t) {
            var e = this,
              n = this._portalOutlet.attach(t);
            return this._positionStrategy && this._positionStrategy.attach(this), !this._host.parentElement && this._previousHostParent && this._previousHostParent.appendChild(this._host), this._updateStackingOrder(), this._updateElementSize(), this._updateElementDirection(), this._config.scrollStrategy && this._config.scrollStrategy.enable(), this._ngZone.onStable.asObservable().pipe(yf(1)).subscribe(function () {
              e.hasAttached() && e.updatePosition()
            }), this._togglePointerEvents(!0), this._config.hasBackdrop && this._attachBackdrop(), this._config.panelClass && this._toggleClasses(this._pane, this._config.panelClass, !0), this._attachments.next(), this._keyboardDispatcher.add(this), this._config.disposeOnNavigation && this._location && (this._locationChanges = this._location.subscribe(function () {
              return e.dispose()
            })), n
          }, t.prototype.detach = function () {
            if (this.hasAttached()) {
              this.detachBackdrop(), this._togglePointerEvents(!1), this._positionStrategy && this._positionStrategy.detach && this._positionStrategy.detach(), this._config.scrollStrategy && this._config.scrollStrategy.disable();
              var t = this._portalOutlet.detach();
              return this._detachments.next(), this._keyboardDispatcher.remove(this), this._detachContentWhenStable(), this._locationChanges.unsubscribe(), t
            }
          }, t.prototype.dispose = function () {
            var t = this.hasAttached();
            this._positionStrategy && this._positionStrategy.dispose(), this._config.scrollStrategy && this._config.scrollStrategy.disable(), this.detachBackdrop(), this._locationChanges.unsubscribe(), this._keyboardDispatcher.remove(this), this._portalOutlet.dispose(), this._attachments.complete(), this._backdropClick.complete(), this._keydownEvents.complete(), this._host && this._host.parentNode && (this._host.parentNode.removeChild(this._host), this._host = null), this._previousHostParent = this._pane = null, t && this._detachments.next(), this._detachments.complete()
          }, t.prototype.hasAttached = function () {
            return this._portalOutlet.hasAttached()
          }, t.prototype.backdropClick = function () {
            return this._backdropClick.asObservable()
          }, t.prototype.attachments = function () {
            return this._attachments.asObservable()
          }, t.prototype.detachments = function () {
            return this._detachments.asObservable()
          }, t.prototype.keydownEvents = function () {
            return this._keydownEventsObservable
          }, t.prototype.getConfig = function () {
            return this._config
          }, t.prototype.updatePosition = function () {
            this._positionStrategy && this._positionStrategy.apply()
          }, t.prototype.updatePositionStrategy = function (t) {
            t !== this._positionStrategy && (this._positionStrategy && this._positionStrategy.dispose(), this._positionStrategy = t, this.hasAttached() && (t.attach(this), this.updatePosition()))
          }, t.prototype.updateSize = function (t) {
            this._config = i({}, this._config, t), this._updateElementSize()
          }, t.prototype.setDirection = function (t) {
            this._config = i({}, this._config, {
              direction: t
            }), this._updateElementDirection()
          }, t.prototype.getDirection = function () {
            var t = this._config.direction;
            return t ? "string" == typeof t ? t : t.value : "ltr"
          }, t.prototype._updateElementDirection = function () {
            this._host.setAttribute("dir", this.getDirection())
          }, t.prototype._updateElementSize = function () {
            var t = this._pane.style;
            t.width = yp(this._config.width), t.height = yp(this._config.height), t.minWidth = yp(this._config.minWidth), t.minHeight = yp(this._config.minHeight), t.maxWidth = yp(this._config.maxWidth), t.maxHeight = yp(this._config.maxHeight)
          }, t.prototype._togglePointerEvents = function (t) {
            this._pane.style.pointerEvents = t ? "auto" : "none"
          }, t.prototype._attachBackdrop = function () {
            var t = this;
            this._backdropElement = this._document.createElement("div"), this._backdropElement.classList.add("cdk-overlay-backdrop"), this._config.backdropClass && this._toggleClasses(this._backdropElement, this._config.backdropClass, !0), this._host.parentElement.insertBefore(this._backdropElement, this._host), this._backdropElement.addEventListener("click", function (e) {
              return t._backdropClick.next(e)
            }), "undefined" != typeof requestAnimationFrame ? this._ngZone.runOutsideAngular(function () {
              requestAnimationFrame(function () {
                t._backdropElement && t._backdropElement.classList.add("cdk-overlay-backdrop-showing")
              })
            }) : this._backdropElement.classList.add("cdk-overlay-backdrop-showing")
          }, t.prototype._updateStackingOrder = function () {
            this._host.nextSibling && this._host.parentNode.appendChild(this._host)
          }, t.prototype.detachBackdrop = function () {
            var t = this,
              e = this._backdropElement;
            if (e) {
              var n, r = function () {
                e && e.parentNode && e.parentNode.removeChild(e), t._backdropElement == e && (t._backdropElement = null), t._config.backdropClass && t._toggleClasses(e, t._config.backdropClass, !1), clearTimeout(n)
              };
              e.classList.remove("cdk-overlay-backdrop-showing"), this._ngZone.runOutsideAngular(function () {
                e.addEventListener("transitionend", r)
              }), e.style.pointerEvents = "none", n = this._ngZone.runOutsideAngular(function () {
                return setTimeout(r, 500)
              })
            }
          }, t.prototype._toggleClasses = function (t, e, n) {
            var r = t.classList;
            mp(e).forEach(function (t) {
              n ? r.add(t) : r.remove(t)
            })
          }, t.prototype._detachContentWhenStable = function () {
            var t = this;
            this._ngZone.runOutsideAngular(function () {
              var e = t._ngZone.onStable.asObservable().pipe(Gp(it(t._attachments, t._detachments))).subscribe(function () {
                t._pane && t._host && 0 !== t._pane.children.length || (t._pane && t._config.panelClass && t._toggleClasses(t._pane, t._config.panelClass, !1), t._host && t._host.parentElement && (t._previousHostParent = t._host.parentElement, t._previousHostParent.removeChild(t._host)), e.unsubscribe())
              })
            })
          }, t
        }(),
        Lf = function () {
          function t(t, e, n, r, o) {
            var i = this;
            this._viewportRuler = e, this._document = n, this._platform = r, this._overlayContainer = o, this._lastBoundingBoxSize = {
              width: 0,
              height: 0
            }, this._isPushed = !1, this._canPush = !0, this._growAfterOpen = !1, this._hasFlexibleDimensions = !0, this._positionLocked = !1, this._viewportMargin = 0, this.scrollables = [], this._preferredPositions = [], this._positionChanges = new ct, this._resizeSubscription = x.EMPTY, this._offsetX = 0, this._offsetY = 0, this._positionChangeSubscriptions = 0, this._appliedPanelClasses = [], this.positionChanges = N.create(function (t) {
              var e = i._positionChanges.subscribe(t);
              return i._positionChangeSubscriptions++,
                function () {
                  e.unsubscribe(), i._positionChangeSubscriptions--
                }
            }), this.setOrigin(t)
          }
          return Object.defineProperty(t.prototype, "positions", {
            get: function () {
              return this._preferredPositions
            },
            enumerable: !0,
            configurable: !0
          }), t.prototype.attach = function (t) {
            var e = this;
            if (this._overlayRef && t !== this._overlayRef) throw Error("This position strategy is already attached to an overlay");
            this._validatePositions(), t.hostElement.classList.add("cdk-overlay-connected-position-bounding-box"), this._overlayRef = t, this._boundingBox = t.hostElement, this._pane = t.overlayElement, this._isDisposed = !1, this._isInitialRender = !0, this._lastPosition = null, this._resizeSubscription.unsubscribe(), this._resizeSubscription = this._viewportRuler.change().subscribe(function () {
              e._isInitialRender = !0, e.apply()
            })
          }, t.prototype.apply = function () {
            if (!(this._isDisposed || this._platform && !this._platform.isBrowser))
              if (!this._isInitialRender && this._positionLocked && this._lastPosition) this.reapplyLastPosition();
              else {
                this._clearPanelClasses(), this._resetOverlayElementStyles(), this._resetBoundingBoxStyles(), this._viewportRect = this._getNarrowedViewportRect(), this._originRect = this._origin.getBoundingClientRect(), this._overlayRect = this._pane.getBoundingClientRect();
                for (var t, e = this._originRect, n = this._overlayRect, r = this._viewportRect, o = [], i = 0, a = this._preferredPositions; i < a.length; i++) {
                  var s = a[i],
                    l = this._getOriginPoint(e, s),
                    u = this._getOverlayPoint(l, n, s),
                    c = this._getOverlayFit(u, n, r, s);
                  if (c.isCompletelyWithinViewport) return this._isPushed = !1, void this._applyPosition(s, l);
                  this._canFitWithFlexibleDimensions(c, u, r) ? o.push({
                    position: s,
                    origin: l,
                    overlayRect: n,
                    boundingBoxRect: this._calculateBoundingBoxRect(l, s)
                  }) : (!t || t.overlayFit.visibleArea < c.visibleArea) && (t = {
                    overlayFit: c,
                    overlayPoint: u,
                    originPoint: l,
                    position: s,
                    overlayRect: n
                  })
                }
                if (o.length) {
                  for (var h = null, p = -1, f = 0, d = o; f < d.length; f++) {
                    var m = d[f],
                      y = m.boundingBoxRect.width * m.boundingBoxRect.height * (m.position.weight || 1);
                    y > p && (p = y, h = m)
                  }
                  return this._isPushed = !1, void this._applyPosition(h.position, h.origin)
                }
                if (this._canPush) return this._isPushed = !0, void this._applyPosition(t.position, t.originPoint);
                this._applyPosition(t.position, t.originPoint)
              }
          }, t.prototype.detach = function () {
            this._clearPanelClasses(), this._lastPosition = null, this._previousPushAmount = null, this._resizeSubscription.unsubscribe()
          }, t.prototype.dispose = function () {
            this._isDisposed || (this._boundingBox && Hf(this._boundingBox.style, {
              top: "",
              left: "",
              right: "",
              bottom: "",
              height: "",
              width: "",
              alignItems: "",
              justifyContent: ""
            }), this._pane && this._resetOverlayElementStyles(), this._overlayRef && this._overlayRef.hostElement.classList.remove("cdk-overlay-connected-position-bounding-box"), this.detach(), this._positionChanges.complete(), this._overlayRef = this._boundingBox = null, this._isDisposed = !0)
          }, t.prototype.reapplyLastPosition = function () {
            if (!this._isDisposed && (!this._platform || this._platform.isBrowser)) {
              this._originRect = this._origin.getBoundingClientRect(), this._overlayRect = this._pane.getBoundingClientRect(), this._viewportRect = this._getNarrowedViewportRect();
              var t = this._lastPosition || this._preferredPositions[0],
                e = this._getOriginPoint(this._originRect, t);
              this._applyPosition(t, e)
            }
          }, t.prototype.withScrollableContainers = function (t) {
            this.scrollables = t
          }, t.prototype.withPositions = function (t) {
            return this._preferredPositions = t, -1 === t.indexOf(this._lastPosition) && (this._lastPosition = null), this._validatePositions(), this
          }, t.prototype.withViewportMargin = function (t) {
            return this._viewportMargin = t, this
          }, t.prototype.withFlexibleDimensions = function (t) {
            return void 0 === t && (t = !0), this._hasFlexibleDimensions = t, this
          }, t.prototype.withGrowAfterOpen = function (t) {
            return void 0 === t && (t = !0), this._growAfterOpen = t, this
          }, t.prototype.withPush = function (t) {
            return void 0 === t && (t = !0), this._canPush = t, this
          }, t.prototype.withLockedPosition = function (t) {
            return void 0 === t && (t = !0), this._positionLocked = t, this
          }, t.prototype.setOrigin = function (t) {
            return this._origin = t instanceof Vn ? t.nativeElement : t, this
          }, t.prototype.withDefaultOffsetX = function (t) {
            return this._offsetX = t, this
          }, t.prototype.withDefaultOffsetY = function (t) {
            return this._offsetY = t, this
          }, t.prototype.withTransformOriginOn = function (t) {
            return this._transformOriginSelector = t, this
          }, t.prototype._getOriginPoint = function (t, e) {
            var n;
            if ("center" == e.originX) n = t.left + t.width / 2;
            else {
              var r = this._isRtl() ? t.right : t.left,
                o = this._isRtl() ? t.left : t.right;
              n = "start" == e.originX ? r : o
            }
            return {
              x: n,
              y: "center" == e.originY ? t.top + t.height / 2 : "top" == e.originY ? t.top : t.bottom
            }
          }, t.prototype._getOverlayPoint = function (t, e, n) {
            var r;
            return r = "center" == n.overlayX ? -e.width / 2 : "start" === n.overlayX ? this._isRtl() ? -e.width : 0 : this._isRtl() ? 0 : -e.width, {
              x: t.x + r,
              y: t.y + ("center" == n.overlayY ? -e.height / 2 : "top" == n.overlayY ? 0 : -e.height)
            }
          }, t.prototype._getOverlayFit = function (t, e, n, r) {
            var o = t.x,
              i = t.y,
              a = this._getOffset(r, "x"),
              s = this._getOffset(r, "y");
            a && (o += a), s && (i += s);
            var l = 0 - i,
              u = i + e.height - n.height,
              c = this._subtractOverflows(e.width, 0 - o, o + e.width - n.width),
              h = this._subtractOverflows(e.height, l, u),
              p = c * h;
            return {
              visibleArea: p,
              isCompletelyWithinViewport: e.width * e.height === p,
              fitsInViewportVertically: h === e.height,
              fitsInViewportHorizontally: c == e.width
            }
          }, t.prototype._canFitWithFlexibleDimensions = function (t, e, n) {
            if (this._hasFlexibleDimensions) {
              var r = n.bottom - e.y,
                o = n.right - e.x,
                i = this._overlayRef.getConfig().minHeight,
                a = this._overlayRef.getConfig().minWidth;
              return (t.fitsInViewportVertically || null != i && i <= r) && (t.fitsInViewportHorizontally || null != a && a <= o)
            }
          }, t.prototype._pushOverlayOnScreen = function (t, e, n) {
            if (this._previousPushAmount && this._positionLocked) return {
              x: t.x + this._previousPushAmount.x,
              y: t.y + this._previousPushAmount.y
            };
            var r, o, i = this._viewportRect,
              a = Math.max(t.x + e.width - i.right, 0),
              s = Math.max(t.y + e.height - i.bottom, 0),
              l = Math.max(i.top - n.top - t.y, 0),
              u = Math.max(i.left - n.left - t.x, 0);
            return this._previousPushAmount = {
              x: r = e.width < i.width ? u || -a : t.x < this._viewportMargin ? i.left - n.left - t.x : 0,
              y: o = e.height < i.height ? l || -s : t.y < this._viewportMargin ? i.top - n.top - t.y : 0
            }, {
              x: t.x + r,
              y: t.y + o
            }
          }, t.prototype._applyPosition = function (t, e) {
            if (this._setTransformOrigin(t), this._setOverlayElementStyles(e, t), this._setBoundingBoxStyles(e, t), t.panelClass && this._addPanelClasses(t.panelClass), this._lastPosition = t, this._positionChangeSubscriptions > 0) {
              var n = new function (t, e) {
                this.connectionPair = t, this.scrollableViewProperties = e
              }(t, this._getScrollVisibility());
              this._positionChanges.next(n)
            }
            this._isInitialRender = !1
          }, t.prototype._setTransformOrigin = function (t) {
            if (this._transformOriginSelector) {
              var e, n = this._boundingBox.querySelectorAll(this._transformOriginSelector),
                r = t.overlayY;
              e = "center" === t.overlayX ? "center" : this._isRtl() ? "start" === t.overlayX ? "right" : "left" : "start" === t.overlayX ? "left" : "right";
              for (var o = 0; o < n.length; o++) n[o].style.transformOrigin = e + " " + r
            }
          }, t.prototype._calculateBoundingBoxRect = function (t, e) {
            var n, r, o, i, a, s, l = this._viewportRect,
              u = this._isRtl();
            if ("top" === e.overlayY) r = t.y, n = l.bottom - t.y;
            else if ("bottom" === e.overlayY) n = l.height - (o = l.height - t.y + 2 * this._viewportMargin) + this._viewportMargin;
            else {
              var c = Math.min(l.bottom - t.y + l.top, t.y),
                h = this._lastBoundingBoxSize.height;
              r = t.y - c, (n = 2 * c) > h && !this._isInitialRender && !this._growAfterOpen && (r = t.y - h / 2)
            }
            if ("end" === e.overlayX && !u || "start" === e.overlayX && u) s = l.right - t.x + this._viewportMargin, i = t.x - l.left;
            else if ("start" === e.overlayX && !u || "end" === e.overlayX && u) a = t.x, i = l.right - t.x;
            else {
              c = Math.min(l.right - t.x + l.left, t.x);
              var p = this._lastBoundingBoxSize.width;
              a = t.x - c, (i = 2 * c) > p && !this._isInitialRender && !this._growAfterOpen && (a = t.x - p / 2)
            }
            return {
              top: r,
              left: a,
              bottom: o,
              right: s,
              width: i,
              height: n
            }
          }, t.prototype._setBoundingBoxStyles = function (t, e) {
            var n = this._calculateBoundingBoxRect(t, e);
            this._isInitialRender || this._growAfterOpen || (n.height = Math.min(n.height, this._lastBoundingBoxSize.height), n.width = Math.min(n.width, this._lastBoundingBoxSize.width));
            var r = {};
            if (this._hasExactPosition()) r.top = r.left = "0", r.bottom = r.right = "", r.width = r.height = "100%";
            else {
              var o = this._overlayRef.getConfig().maxHeight,
                i = this._overlayRef.getConfig().maxWidth;
              r.height = yp(n.height), r.top = yp(n.top), r.bottom = yp(n.bottom), r.width = yp(n.width), r.left = yp(n.left), r.right = yp(n.right), r.alignItems = "center" === e.overlayX ? "center" : "end" === e.overlayX ? "flex-end" : "flex-start", r.justifyContent = "center" === e.overlayY ? "center" : "bottom" === e.overlayY ? "flex-end" : "flex-start", o && (r.maxHeight = yp(o)), i && (r.maxWidth = yp(i))
            }
            this._lastBoundingBoxSize = n, Hf(this._boundingBox.style, r)
          }, t.prototype._resetBoundingBoxStyles = function () {
            Hf(this._boundingBox.style, {
              top: "0",
              left: "0",
              right: "0",
              bottom: "0",
              height: "",
              width: "",
              alignItems: "",
              justifyContent: ""
            })
          }, t.prototype._resetOverlayElementStyles = function () {
            Hf(this._pane.style, {
              top: "",
              left: "",
              bottom: "",
              right: "",
              position: ""
            })
          }, t.prototype._setOverlayElementStyles = function (t, e) {
            var n = {};
            if (this._hasExactPosition()) {
              var r = this._viewportRuler.getViewportScrollPosition();
              Hf(n, this._getExactOverlayY(e, t, r)), Hf(n, this._getExactOverlayX(e, t, r))
            } else n.position = "static";
            var o = "",
              i = this._getOffset(e, "x"),
              a = this._getOffset(e, "y");
            i && (o += "translateX(" + i + "px) "), a && (o += "translateY(" + a + "px)"), n.transform = o.trim(), this._hasFlexibleDimensions && this._overlayRef.getConfig().maxHeight && (n.maxHeight = ""), this._hasFlexibleDimensions && this._overlayRef.getConfig().maxWidth && (n.maxWidth = ""), Hf(this._pane.style, n)
          }, t.prototype._getExactOverlayY = function (t, e, n) {
            var r = {
                top: null,
                bottom: null
              },
              o = this._getOverlayPoint(e, this._overlayRect, t);
            this._isPushed && (o = this._pushOverlayOnScreen(o, this._overlayRect, n));
            var i = this._overlayContainer ? this._overlayContainer.getContainerElement().getBoundingClientRect().top : 0;
            return o.y -= i, "bottom" === t.overlayY ? r.bottom = this._document.documentElement.clientHeight - (o.y + this._overlayRect.height) + "px" : r.top = yp(o.y), r
          }, t.prototype._getExactOverlayX = function (t, e, n) {
            var r = {
                left: null,
                right: null
              },
              o = this._getOverlayPoint(e, this._overlayRect, t);
            return this._isPushed && (o = this._pushOverlayOnScreen(o, this._overlayRect, n)), "right" == (this._isRtl() ? "end" === t.overlayX ? "left" : "right" : "end" === t.overlayX ? "right" : "left") ? r.right = this._document.documentElement.clientWidth - (o.x + this._overlayRect.width) + "px" : r.left = yp(o.x), r
          }, t.prototype._getScrollVisibility = function () {
            var t = this._origin.getBoundingClientRect(),
              e = this._pane.getBoundingClientRect(),
              n = this.scrollables.map(function (t) {
                return t.getElementRef().nativeElement.getBoundingClientRect()
              });
            return {
              isOriginClipped: Af(t, n),
              isOriginOutsideView: Of(t, n),
              isOverlayClipped: Af(e, n),
              isOverlayOutsideView: Of(e, n)
            }
          }, t.prototype._subtractOverflows = function (t) {
            for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
            return e.reduce(function (t, e) {
              return t - Math.max(e, 0)
            }, t)
          }, t.prototype._getNarrowedViewportRect = function () {
            var t = this._document.documentElement.clientWidth,
              e = this._document.documentElement.clientHeight,
              n = this._viewportRuler.getViewportScrollPosition();
            return {
              top: n.top + this._viewportMargin,
              left: n.left + this._viewportMargin,
              right: n.left + t - this._viewportMargin,
              bottom: n.top + e - this._viewportMargin,
              width: t - 2 * this._viewportMargin,
              height: e - 2 * this._viewportMargin
            }
          }, t.prototype._isRtl = function () {
            return "rtl" === this._overlayRef.getDirection()
          }, t.prototype._hasExactPosition = function () {
            return !this._hasFlexibleDimensions || this._isPushed
          }, t.prototype._getOffset = function (t, e) {
            return "x" === e ? null == t.offsetX ? this._offsetX : t.offsetX : null == t.offsetY ? this._offsetY : t.offsetY
          }, t.prototype._validatePositions = function () {
            if (!this._preferredPositions.length) throw Error("FlexibleConnectedPositionStrategy: At least one position is required.");
            this._preferredPositions.forEach(function (t) {
              Mf("originX", t.originX), Nf("originY", t.originY), Mf("overlayX", t.overlayX), Nf("overlayY", t.overlayY)
            })
          }, t.prototype._addPanelClasses = function (t) {
            var e = this;
            this._pane && mp(t).forEach(function (t) {
              -1 === e._appliedPanelClasses.indexOf(t) && (e._appliedPanelClasses.push(t), e._pane.classList.add(t))
            })
          }, t.prototype._clearPanelClasses = function () {
            var t = this;
            this._pane && (this._appliedPanelClasses.forEach(function (e) {
              return t._pane.classList.remove(e)
            }), this._appliedPanelClasses = [])
          }, t
        }();

      function Hf(t, e) {
        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
        return t
      }
      var Bf = function () {
          function t(t, e, n, r, o, i) {
            this._preferredPositions = [], this._positionStrategy = new Lf(n, r, o, i).withFlexibleDimensions(!1).withPush(!1).withViewportMargin(0), this.withFallbackPosition(t, e)
          }
          return Object.defineProperty(t.prototype, "_isRtl", {
            get: function () {
              return "rtl" === this._overlayRef.getDirection()
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(t.prototype, "onPositionChange", {
            get: function () {
              return this._positionStrategy.positionChanges
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(t.prototype, "positions", {
            get: function () {
              return this._preferredPositions
            },
            enumerable: !0,
            configurable: !0
          }), t.prototype.attach = function (t) {
            this._overlayRef = t, this._positionStrategy.attach(t), this._direction && (t.setDirection(this._direction), this._direction = null)
          }, t.prototype.dispose = function () {
            this._positionStrategy.dispose()
          }, t.prototype.detach = function () {
            this._positionStrategy.detach()
          }, t.prototype.apply = function () {
            this._positionStrategy.apply()
          }, t.prototype.recalculateLastPosition = function () {
            this._positionStrategy.reapplyLastPosition()
          }, t.prototype.withScrollableContainers = function (t) {
            this._positionStrategy.withScrollableContainers(t)
          }, t.prototype.withFallbackPosition = function (t, e, n, r) {
            var o = new function (t, e, n, r, o) {
              this.offsetX = n, this.offsetY = r, this.panelClass = o, this.originX = t.originX, this.originY = t.originY, this.overlayX = e.overlayX, this.overlayY = e.overlayY
            }(t, e, n, r);
            return this._preferredPositions.push(o), this._positionStrategy.withPositions(this._preferredPositions), this
          }, t.prototype.withDirection = function (t) {
            return this._overlayRef ? this._overlayRef.setDirection(t) : this._direction = t, this
          }, t.prototype.withOffsetX = function (t) {
            return this._positionStrategy.withDefaultOffsetX(t), this
          }, t.prototype.withOffsetY = function (t) {
            return this._positionStrategy.withDefaultOffsetY(t), this
          }, t.prototype.withLockedPosition = function (t) {
            return this._positionStrategy.withLockedPosition(t), this
          }, t.prototype.withPositions = function (t) {
            return this._preferredPositions = t.slice(), this._positionStrategy.withPositions(this._preferredPositions), this
          }, t.prototype.setOrigin = function (t) {
            return this._positionStrategy.setOrigin(t), this
          }, t
        }(),
        zf = function () {
          function t() {
            this._cssPosition = "static", this._topOffset = "", this._bottomOffset = "", this._leftOffset = "", this._rightOffset = "", this._alignItems = "", this._justifyContent = "", this._width = "", this._height = ""
          }
          return t.prototype.attach = function (t) {
            var e = t.getConfig();
            this._overlayRef = t, this._width && !e.width && t.updateSize({
              width: this._width
            }), this._height && !e.height && t.updateSize({
              height: this._height
            }), t.hostElement.classList.add("cdk-global-overlay-wrapper"), this._isDisposed = !1
          }, t.prototype.top = function (t) {
            return void 0 === t && (t = ""), this._bottomOffset = "", this._topOffset = t, this._alignItems = "flex-start", this
          }, t.prototype.left = function (t) {
            return void 0 === t && (t = ""), this._rightOffset = "", this._leftOffset = t, this._justifyContent = "flex-start", this
          }, t.prototype.bottom = function (t) {
            return void 0 === t && (t = ""), this._topOffset = "", this._bottomOffset = t, this._alignItems = "flex-end", this
          }, t.prototype.right = function (t) {
            return void 0 === t && (t = ""), this._leftOffset = "", this._rightOffset = t, this._justifyContent = "flex-end", this
          }, t.prototype.width = function (t) {
            return void 0 === t && (t = ""), this._overlayRef ? this._overlayRef.updateSize({
              width: t
            }) : this._width = t, this
          }, t.prototype.height = function (t) {
            return void 0 === t && (t = ""), this._overlayRef ? this._overlayRef.updateSize({
              height: t
            }) : this._height = t, this
          }, t.prototype.centerHorizontally = function (t) {
            return void 0 === t && (t = ""), this.left(t), this._justifyContent = "center", this
          }, t.prototype.centerVertically = function (t) {
            return void 0 === t && (t = ""), this.top(t), this._alignItems = "center", this
          }, t.prototype.apply = function () {
            if (this._overlayRef && this._overlayRef.hasAttached()) {
              var t = this._overlayRef.overlayElement.style,
                e = this._overlayRef.hostElement.style,
                n = this._overlayRef.getConfig();
              t.position = this._cssPosition, t.marginLeft = "100%" === n.width ? "0" : this._leftOffset, t.marginTop = "100%" === n.height ? "0" : this._topOffset, t.marginBottom = this._bottomOffset, t.marginRight = this._rightOffset, "100%" === n.width ? e.justifyContent = "flex-start" : "center" === this._justifyContent ? e.justifyContent = "center" : "rtl" === this._overlayRef.getConfig().direction ? "flex-start" === this._justifyContent ? e.justifyContent = "flex-end" : "flex-end" === this._justifyContent && (e.justifyContent = "flex-start") : e.justifyContent = this._justifyContent, e.alignItems = "100%" === n.height ? "flex-start" : this._alignItems
            }
          }, t.prototype.dispose = function () {
            if (!this._isDisposed && this._overlayRef) {
              var t = this._overlayRef.overlayElement.style,
                e = this._overlayRef.hostElement,
                n = e.style;
              e.classList.remove("cdk-global-overlay-wrapper"), n.justifyContent = n.alignItems = t.marginTop = t.marginBottom = t.marginLeft = t.marginRight = t.position = "", this._overlayRef = null, this._isDisposed = !0
            }
          }, t
        }(),
        Uf = function () {
          function t(t, e, n, r) {
            this._viewportRuler = t, this._document = e, this._platform = n, this._overlayContainer = r
          }
          return t.prototype.global = function () {
            return new zf
          }, t.prototype.connectedTo = function (t, e, n) {
            return new Bf(e, n, t, this._viewportRuler, this._document)
          }, t.prototype.flexibleConnectedTo = function (t) {
            return new Lf(t, this._viewportRuler, this._document, this._platform, this._overlayContainer)
          }, t.ngInjectableDef = _t({
            factory: function () {
              return new t(fe(ff), fe(sc), fe(bp, 8), fe(Ff, 8))
            },
            token: t,
            providedIn: "root"
          }), t
        }(),
        qf = 0,
        Gf = function () {
          function t(t, e, n, r, o, i, a, s, l, u) {
            this.scrollStrategies = t, this._overlayContainer = e, this._componentFactoryResolver = n, this._positionBuilder = r, this._keyboardDispatcher = o, this._injector = i, this._ngZone = a, this._document = s, this._directionality = l, this._location = u
          }
          return t.prototype.create = function (t) {
            var e = this._createHostElement(),
              n = this._createPaneElement(e),
              r = this._createPortalOutlet(n),
              o = new Df(t);
            return o.direction = o.direction || this._directionality.value, new Vf(r, e, n, o, this._ngZone, this._keyboardDispatcher, this._document, this._location)
          }, t.prototype.position = function () {
            return this._positionBuilder
          }, t.prototype._createPaneElement = function (t) {
            var e = this._document.createElement("div");
            return e.id = "cdk-overlay-" + qf++, e.classList.add("cdk-overlay-pane"), t.appendChild(e), e
          }, t.prototype._createHostElement = function () {
            var t = this._document.createElement("div");
            return this._overlayContainer.getContainerElement().appendChild(t), t
          }, t.prototype._createPortalOutlet = function (t) {
            return this._appRef || (this._appRef = this._injector.get(Dn)), new Ef(t, this._componentFactoryResolver, this._appRef, this._injector)
          }, t
        }(),
        Qf = new bt("cdk-connected-overlay-scroll-strategy");

      function Wf(t) {
        return function () {
          return t.scrollStrategies.reposition()
        }
      }
      var Zf = function () {},
        Kf = 20,
        $f = new bt("mat-tooltip-scroll-strategy");

      function Yf(t) {
        return function () {
          return t.scrollStrategies.reposition({
            scrollThrottle: Kf
          })
        }
      }
      var Xf = function () {
          function t(t, e) {
            this._changeDetectorRef = t, this._breakpointObserver = e, this._visibility = "initial", this._closeOnInteraction = !1, this._onHide = new ct, this._isHandset = this._breakpointObserver.observe(tf.Handset)
          }
          return t.prototype.show = function (t) {
            var e = this;
            this._hideTimeoutId && (clearTimeout(this._hideTimeoutId), this._hideTimeoutId = null), this._closeOnInteraction = !0, this._showTimeoutId = setTimeout(function () {
              e._visibility = "visible", e._showTimeoutId = null, e._markForCheck()
            }, t)
          }, t.prototype.hide = function (t) {
            var e = this;
            this._showTimeoutId && (clearTimeout(this._showTimeoutId), this._showTimeoutId = null), this._hideTimeoutId = setTimeout(function () {
              e._visibility = "hidden", e._hideTimeoutId = null, e._markForCheck()
            }, t)
          }, t.prototype.afterHidden = function () {
            return this._onHide.asObservable()
          }, t.prototype.isVisible = function () {
            return "visible" === this._visibility
          }, t.prototype._animationStart = function () {
            this._closeOnInteraction = !1
          }, t.prototype._animationDone = function (t) {
            var e = t.toState;
            "hidden" !== e || this.isVisible() || this._onHide.next(), "visible" !== e && "hidden" !== e || (this._closeOnInteraction = !0)
          }, t.prototype._handleBodyInteraction = function () {
            this._closeOnInteraction && this.hide(0)
          }, t.prototype._markForCheck = function () {
            this._changeDetectorRef.markForCheck()
          }, t
        }(),
        Jf = function () {},
        td = function () {
          function t() {}
          return t.prototype.create = function (t) {
            return "undefined" == typeof MutationObserver ? null : new MutationObserver(t)
          }, t.ngInjectableDef = _t({
            factory: function () {
              return new t
            },
            token: t,
            providedIn: "root"
          }), t
        }(),
        ed = function () {
          function t(t) {
            this._mutationObserverFactory = t, this._observedElements = new Map
          }
          return t.prototype.ngOnDestroy = function () {
            var t = this;
            this._observedElements.forEach(function (e, n) {
              return t._cleanupObserver(n)
            })
          }, t.prototype.observe = function (t) {
            var e = this,
              n = t instanceof Vn ? t.nativeElement : t;
            return N.create(function (t) {
              var r = e._observeElement(n).subscribe(t);
              return function () {
                r.unsubscribe(), e._unobserveElement(n)
              }
            })
          }, t.prototype._observeElement = function (t) {
            if (this._observedElements.has(t)) this._observedElements.get(t).count++;
            else {
              var e = new ct,
                n = this._mutationObserverFactory.create(function (t) {
                  return e.next(t)
                });
              n && n.observe(t, {
                characterData: !0,
                childList: !0,
                subtree: !0
              }), this._observedElements.set(t, {
                observer: n,
                stream: e,
                count: 1
              })
            }
            return this._observedElements.get(t).stream
          }, t.prototype._unobserveElement = function (t) {
            this._observedElements.has(t) && (this._observedElements.get(t).count--, this._observedElements.get(t).count || this._cleanupObserver(t))
          }, t.prototype._cleanupObserver = function (t) {
            if (this._observedElements.has(t)) {
              var e = this._observedElements.get(t),
                n = e.observer,
                r = e.stream;
              n && n.disconnect(), r.complete(), this._observedElements.delete(t)
            }
          }, t.ngInjectableDef = _t({
            factory: function () {
              return new t(fe(td))
            },
            token: t,
            providedIn: "root"
          }), t
        }(),
        nd = function () {
          function t(t, e, n) {
            this._contentObserver = t, this._elementRef = e, this._ngZone = n, this.event = new pn, this._disabled = !1, this._currentSubscription = null
          }
          return Object.defineProperty(t.prototype, "disabled", {
            get: function () {
              return this._disabled
            },
            set: function (t) {
              this._disabled = dp(t), this._disabled ? this._unsubscribe() : this._subscribe()
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(t.prototype, "debounce", {
            get: function () {
              return this._debounce
            },
            set: function (t) {
              this._debounce = function (t, e) {
                return void 0 === e && (e = 0),
                  function (t) {
                    return !isNaN(parseFloat(t)) && !isNaN(Number(t))
                  }(t) ? Number(t) : e
              }(t), this._subscribe()
            },
            enumerable: !0,
            configurable: !0
          }), t.prototype.ngAfterContentInit = function () {
            this._currentSubscription || this.disabled || this._subscribe()
          }, t.prototype.ngOnDestroy = function () {
            this._unsubscribe()
          }, t.prototype._subscribe = function () {
            var t = this;
            this._unsubscribe();
            var e = this._contentObserver.observe(this._elementRef);
            this._ngZone.runOutsideAngular(function () {
              t._currentSubscription = (t.debounce ? e.pipe(Bp(t.debounce)) : e).subscribe(t.event)
            })
          }, t.prototype._unsubscribe = function () {
            this._currentSubscription && this._currentSubscription.unsubscribe()
          }, t
        }(),
        rd = function () {},
        od = new bt("cdk-dir-doc", {
          providedIn: "root",
          factory: function () {
            return fe(sc)
          }
        }),
        id = function () {
          function t(t) {
            if (this.value = "ltr", this.change = new pn, t) {
              var e = (t.body ? t.body.dir : null) || (t.documentElement ? t.documentElement.dir : null);
              this.value = "ltr" === e || "rtl" === e ? e : "ltr"
            }
          }
          return t.prototype.ngOnDestroy = function () {
            this.change.complete()
          }, t.ngInjectableDef = _t({
            factory: function () {
              return new t(fe(od, 8))
            },
            token: t,
            providedIn: "root"
          }), t
        }(),
        ad = function () {},
        sd = function () {
          function t(t, e, n) {
            this.nextOrObserver = t, this.error = e, this.complete = n
          }
          return t.prototype.call = function (t, e) {
            return e.subscribe(new ld(t, this.nextOrObserver, this.error, this.complete))
          }, t
        }(),
        ld = function (t) {
          function e(e, n, r, o) {
            var i = t.call(this, e) || this;
            return i._tapNext = I, i._tapError = I, i._tapComplete = I, i._tapError = r || I, i._tapComplete = o || I, p(n) ? (i._context = i, i._tapNext = n) : n && (i._context = n, i._tapNext = n.next || I, i._tapError = n.error || I, i._tapComplete = n.complete || I), i
          }
          return o(e, t), e.prototype._next = function (t) {
            try {
              this._tapNext.call(this._context, t)
            } catch (t) {
              return void this.destination.error(t)
            }
            this.destination.next(t)
          }, e.prototype._error = function (t) {
            try {
              this._tapError.call(this._context, t)
            } catch (t) {
              return void this.destination.error(t)
            }
            this.destination.error(t)
          }, e.prototype._complete = function () {
            try {
              this._tapComplete.call(this._context)
            } catch (t) {
              return void this.destination.error(t)
            }
            return this.destination.complete()
          }, e
        }(T),
        ud = function () {},
        cd = new bt("mat-sanity-checks", {
          providedIn: "root",
          factory: function () {
            return !0
          }
        }),
        hd = function () {
          function t(t, e) {
            this._sanityChecksEnabled = t, this._hammerLoader = e, this._hasDoneGlobalChecks = !1, this._hasCheckedHammer = !1, this._document = "object" == typeof document && document ? document : null, this._window = "object" == typeof window && window ? window : null, this._areChecksEnabled() && !this._hasDoneGlobalChecks && (this._checkDoctypeIsDefined(), this._checkThemeIsPresent(), this._hasDoneGlobalChecks = !0)
          }
          return t.prototype._areChecksEnabled = function () {
            return this._sanityChecksEnabled && Pn() && !this._isTestEnv()
          }, t.prototype._isTestEnv = function () {
            var t = this._window;
            return t && (t.__karma__ || t.jasmine)
          }, t.prototype._checkDoctypeIsDefined = function () {
            this._document && !this._document.doctype && console.warn("Current document does not have a doctype. This may cause some Angular Material components not to behave as expected.")
          }, t.prototype._checkThemeIsPresent = function () {
            if (this._document && this._document.body && "function" == typeof getComputedStyle) {
              var t = this._document.createElement("div");
              t.classList.add("mat-theme-loaded-marker"), this._document.body.appendChild(t);
              var e = getComputedStyle(t);
              e && "none" !== e.display && console.warn("Could not find Angular Material core theme. Most Material components may not work as expected. For more info refer to the theming guide: https://material.angular.io/guide/theming"), this._document.body.removeChild(t)
            }
          }, t.prototype._checkHammerIsAvailable = function () {
            !this._hasCheckedHammer && this._window && (!this._areChecksEnabled() || this._window.Hammer || this._hammerLoader || console.warn("Could not find HammerJS. Certain Angular Material components may not work correctly."), this._hasCheckedHammer = !0)
          }, t
        }(),
        pd = function () {
          function t() {}
          return t.prototype.isErrorState = function (t, e) {
            return !!(t && t.invalid && (t.touched || e && e.submitted))
          }, t.ngInjectableDef = _t({
            factory: function () {
              return new t
            },
            token: t,
            providedIn: "root"
          }), t
        }(),
        fd = new bt("MAT_HAMMER_OPTIONS"),
        dd = ["longpress", "slide", "slidestart", "slideend", "slideright", "slideleft"],
        md = {
          on: function () {},
          off: function () {}
        },
        yd = function (t) {
          function e(e, n) {
            var r = t.call(this) || this;
            return r._hammerOptions = e, r.events = dd, n && n._checkHammerIsAvailable(), r
          }
          return o(e, t), e.prototype.buildHammer = function (t) {
            var e = "undefined" != typeof window ? window.Hammer : null;
            if (!e) return md;
            var n = new e(t, this._hammerOptions || void 0),
              r = new e.Pan,
              o = new e.Swipe,
              i = new e.Press,
              a = this._createRecognizer(r, {
                event: "slide",
                threshold: 0
              }, o),
              s = this._createRecognizer(i, {
                event: "longpress",
                time: 500
              });
            return r.recognizeWith(o), s.recognizeWith(a), n.add([o, i, r, a, s]), n
          }, e.prototype._createRecognizer = function (t, e) {
            for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
            var o = new t.constructor(e);
            return n.push(t), n.forEach(function (t) {
              return o.recognizeWith(t)
            }), o
          }, e
        }(ih),
        gd = function () {},
        vd = new bt("mat-label-global-options"),
        _d = po({
          encapsulation: 2,
          styles: [".mat-tooltip-panel{pointer-events:none!important}.mat-tooltip{color:#fff;border-radius:4px;margin:14px;max-width:250px;padding-left:8px;padding-right:8px;overflow:hidden;text-overflow:ellipsis}@media screen and (-ms-high-contrast:active){.mat-tooltip{outline:solid 1px}}.mat-tooltip-handset{margin:24px;padding-left:16px;padding-right:16px}"],
          data: {
            animation: [{
              type: 7,
              name: "state",
              definitions: [{
                type: 0,
                name: "initial, void, hidden",
                styles: {
                  type: 6,
                  styles: {
                    opacity: 0,
                    transform: "scale(0)"
                  },
                  offset: null
                },
                options: void 0
              }, {
                type: 0,
                name: "visible",
                styles: {
                  type: 6,
                  styles: {
                    transform: "scale(1)"
                  },
                  offset: null
                },
                options: void 0
              }, {
                type: 1,
                expr: "* => visible",
                animation: {
                  type: 4,
                  styles: {
                    type: 5,
                    steps: [{
                      type: 6,
                      styles: {
                        opacity: 0,
                        transform: "scale(0)",
                        offset: 0
                      },
                      offset: null
                    }, {
                      type: 6,
                      styles: {
                        opacity: .5,
                        transform: "scale(0.99)",
                        offset: .5
                      },
                      offset: null
                    }, {
                      type: 6,
                      styles: {
                        opacity: 1,
                        transform: "scale(1)",
                        offset: 1
                      },
                      offset: null
                    }]
                  },
                  timings: "200ms cubic-bezier(0, 0, 0.2, 1)"
                },
                options: null
              }, {
                type: 1,
                expr: "* => hidden",
                animation: {
                  type: 4,
                  styles: {
                    type: 6,
                    styles: {
                      opacity: 0
                    },
                    offset: null
                  },
                  timings: "100ms cubic-bezier(0, 0, 0.2, 1)"
                },
                options: null
              }],
              options: {}
            }]
          }
        });

      function bd(t) {
        return la(2, [(t()(), Uo(0, 0, null, null, 3, "div", [
          ["class", "mat-tooltip"]
        ], [
          [2, "mat-tooltip-handset", null],
          [24, "@state", 0]
        ], [
          [null, "@state.start"],
          [null, "@state.done"]
        ], function (t, e, n) {
          var r = !0,
            o = t.component;
          return "@state.start" === e && (r = !1 !== o._animationStart() && r), "@state.done" === e && (r = !1 !== o._animationDone(n) && r), r
        }, null, null)), Ii(1, 278528, null, 0, Uu, [dr, mr, Vn, Fn], {
          klass: [0, "klass"],
          ngClass: [1, "ngClass"]
        }, null), Ri(131072, rc, [Wn]), (t()(), ia(3, null, ["", ""]))], function (t, e) {
          t(e, 1, 0, "mat-tooltip", e.component.tooltipClass)
        }, function (t, e) {
          var n, r = e.component;
          t(e, 0, 0, null == (n = uo(e, 0, 0, vi(e, 2).transform(r._isHandset))) ? null : n.matches, r._visibility), t(e, 3, 0, r.message)
        })
      }
      var wd = si("mat-tooltip-component", Xf, function (t) {
        return la(0, [(t()(), Uo(0, 0, null, null, 1, "mat-tooltip-component", [
          ["aria-hidden", "true"]
        ], [
          [4, "zoom", null]
        ], [
          ["body", "click"]
        ], function (t, e, n) {
          var r = !0;
          return "body:click" === e && (r = !1 !== vi(t, 1)._handleBodyInteraction() && r), r
        }, bd, _d)), Ii(1, 49152, null, 0, Xf, [Wn, Xp], null, null)], null, function (t, e) {
          t(e, 0, 0, "visible" === vi(e, 1)._visibility ? 1 : null)
        })
      }, {}, {}, []);

      function Cd() {
        return Error.call(this), this.message = "no elements in sequence", this.name = "EmptyError", this
      }
      Cd.prototype = Object.create(Error.prototype);
      var Ed = Cd,
        Sd = function (t) {
          function e(e) {
            var n = t.call(this) || this;
            return n._value = e, n
          }
          return o(e, t), Object.defineProperty(e.prototype, "value", {
            get: function () {
              return this.getValue()
            },
            enumerable: !0,
            configurable: !0
          }), e.prototype._subscribe = function (e) {
            var n = t.prototype._subscribe.call(this, e);
            return n && !n.closed && e.next(this._value), n
          }, e.prototype.getValue = function () {
            if (this.hasError) throw this.thrownError;
            if (this.closed) throw new st;
            return this._value
          }, e.prototype.next = function (e) {
            t.prototype.next.call(this, this._value = e)
          }, e
        }(ct);

      function xd(t, e) {
        return tt(t, e, 1)
      }

      function kd(t) {
        return function (e) {
          return 0 === t ? jp() : e.lift(new Pd(t))
        }
      }
      var Pd = function () {
          function t(t) {
            if (this.total = t, this.total < 0) throw new mf
          }
          return t.prototype.call = function (t, e) {
            return e.subscribe(new Td(t, this.total))
          }, t
        }(),
        Td = function (t) {
          function e(e, n) {
            var r = t.call(this, e) || this;
            return r.total = n, r.ring = new Array, r.count = 0, r
          }
          return o(e, t), e.prototype._next = function (t) {
            var e = this.ring,
              n = this.total,
              r = this.count++;
            e.length < n ? e.push(t) : e[r % n] = t
          }, e.prototype._complete = function () {
            var t = this.destination,
              e = this.count;
            if (e > 0)
              for (var n = this.count >= this.total ? this.total : this.count, r = this.ring, o = 0; o < n; o++) {
                var i = e++ % n;
                t.next(r[i])
              }
            t.complete()
          }, e
        }(T),
        Od = function (t) {
          return void 0 === t && (t = Ad), e = {
              hasValue: !1,
              next: function () {
                this.hasValue = !0
              },
              complete: function () {
                if (!this.hasValue) throw t()
              }
            },
            function (t) {
              return t.lift(new sd(e, void 0, void 0))
            };
          var e
        };

      function Ad() {
        return new Ed
      }

      function Id(t) {
        return void 0 === t && (t = null),
          function (e) {
            return e.lift(new Rd(t))
          }
      }
      var Rd = function () {
          function t(t) {
            this.defaultValue = t
          }
          return t.prototype.call = function (t, e) {
            return e.subscribe(new Dd(t, this.defaultValue))
          }, t
        }(),
        Dd = function (t) {
          function e(e, n) {
            var r = t.call(this, e) || this;
            return r.defaultValue = n, r.isEmpty = !0, r
          }
          return o(e, t), e.prototype._next = function (t) {
            this.isEmpty = !1, this.destination.next(t)
          }, e.prototype._complete = function () {
            this.isEmpty && this.destination.next(this.defaultValue), this.destination.complete()
          }, e
        }(T);

      function Nd(t, e) {
        var n = arguments.length >= 2;
        return function (r) {
          return r.pipe(t ? lf(function (e, n) {
            return t(e, n, r)
          }) : rt, kd(1), n ? Id(e) : Od(function () {
            return new Ed
          }))
        }
      }

      function Md(t) {
        return function (e) {
          var n = new jd(t),
            r = e.lift(n);
          return n.caught = r
        }
      }
      var jd = function () {
          function t(t) {
            this.selector = t
          }
          return t.prototype.call = function (t, e) {
            return e.subscribe(new Fd(t, this.selector, this.caught))
          }, t
        }(),
        Fd = function (t) {
          function e(e, n, r) {
            var o = t.call(this, e) || this;
            return o.selector = n, o.caught = r, o
          }
          return o(e, t), e.prototype.error = function (e) {
            if (!this.isStopped) {
              var n = void 0;
              try {
                n = this.selector(e, this.caught)
              } catch (e) {
                return void t.prototype.error.call(this, e)
              }
              this._unsubscribeAndRecycle();
              var r = new F(this, void 0, void 0);
              this.add(r), Q(this, n, void 0, void 0, r)
            }
          }, e
        }(W);

      function Vd(t, e) {
        return function (n) {
          return n.lift(new Ld(t, e, n))
        }
      }
      var Ld = function () {
          function t(t, e, n) {
            this.predicate = t, this.thisArg = e, this.source = n
          }
          return t.prototype.call = function (t, e) {
            return e.subscribe(new Hd(t, this.predicate, this.thisArg, this.source))
          }, t
        }(),
        Hd = function (t) {
          function e(e, n, r, o) {
            var i = t.call(this, e) || this;
            return i.predicate = n, i.thisArg = r, i.source = o, i.index = 0, i.thisArg = r || i, i
          }
          return o(e, t), e.prototype.notifyComplete = function (t) {
            this.destination.next(t), this.destination.complete()
          }, e.prototype._next = function (t) {
            var e = !1;
            try {
              e = this.predicate.call(this.thisArg, t, this.index++, this.source)
            } catch (t) {
              return void this.destination.error(t)
            }
            e || this.notifyComplete(!1)
          }, e.prototype._complete = function () {
            this.notifyComplete(!0)
          }, e
        }(T);

      function Bd(t, e) {
        var n = arguments.length >= 2;
        return function (r) {
          return r.pipe(t ? lf(function (e, n) {
            return t(e, n, r)
          }) : rt, yf(1), n ? Id(e) : Od(function () {
            return new Ed
          }))
        }
      }

      function zd(t, e) {
        var n = !1;
        return arguments.length >= 2 && (n = !0),
          function (r) {
            return r.lift(new Ud(t, e, n))
          }
      }
      var Ud = function () {
          function t(t, e, n) {
            void 0 === n && (n = !1), this.accumulator = t, this.seed = e, this.hasSeed = n
          }
          return t.prototype.call = function (t, e) {
            return e.subscribe(new qd(t, this.accumulator, this.seed, this.hasSeed))
          }, t
        }(),
        qd = function (t) {
          function e(e, n, r, o) {
            var i = t.call(this, e) || this;
            return i.accumulator = n, i._seed = r, i.hasSeed = o, i.index = 0, i
          }
          return o(e, t), Object.defineProperty(e.prototype, "seed", {
            get: function () {
              return this._seed
            },
            set: function (t) {
              this.hasSeed = !0, this._seed = t
            },
            enumerable: !0,
            configurable: !0
          }), e.prototype._next = function (t) {
            if (this.hasSeed) return this._tryNext(t);
            this.seed = t, this.destination.next(t)
          }, e.prototype._tryNext = function (t) {
            var e, n = this.index++;
            try {
              e = this.accumulator(this.seed, t, n)
            } catch (t) {
              this.destination.error(t)
            }
            this.seed = e, this.destination.next(e)
          }, e
        }(T),
        Gd = function (t, e) {
          this.id = t, this.url = e
        },
        Qd = function (t) {
          function e(e, n, r, o) {
            void 0 === r && (r = "imperative"), void 0 === o && (o = null);
            var i = t.call(this, e, n) || this;
            return i.navigationTrigger = r, i.restoredState = o, i
          }
          return o(e, t), e.prototype.toString = function () {
            return "NavigationStart(id: " + this.id + ", url: '" + this.url + "')"
          }, e
        }(Gd),
        Wd = function (t) {
          function e(e, n, r) {
            var o = t.call(this, e, n) || this;
            return o.urlAfterRedirects = r, o
          }
          return o(e, t), e.prototype.toString = function () {
            return "NavigationEnd(id: " + this.id + ", url: '" + this.url + "', urlAfterRedirects: '" + this.urlAfterRedirects + "')"
          }, e
        }(Gd),
        Zd = function (t) {
          function e(e, n, r) {
            var o = t.call(this, e, n) || this;
            return o.reason = r, o
          }
          return o(e, t), e.prototype.toString = function () {
            return "NavigationCancel(id: " + this.id + ", url: '" + this.url + "')"
          }, e
        }(Gd),
        Kd = function (t) {
          function e(e, n, r) {
            var o = t.call(this, e, n) || this;
            return o.error = r, o
          }
          return o(e, t), e.prototype.toString = function () {
            return "NavigationError(id: " + this.id + ", url: '" + this.url + "', error: " + this.error + ")"
          }, e
        }(Gd),
        $d = function (t) {
          function e(e, n, r, o) {
            var i = t.call(this, e, n) || this;
            return i.urlAfterRedirects = r, i.state = o, i
          }
          return o(e, t), e.prototype.toString = function () {
            return "RoutesRecognized(id: " + this.id + ", url: '" + this.url + "', urlAfterRedirects: '" + this.urlAfterRedirects + "', state: " + this.state + ")"
          }, e
        }(Gd),
        Yd = function (t) {
          function e(e, n, r, o) {
            var i = t.call(this, e, n) || this;
            return i.urlAfterRedirects = r, i.state = o, i
          }
          return o(e, t), e.prototype.toString = function () {
            return "GuardsCheckStart(id: " + this.id + ", url: '" + this.url + "', urlAfterRedirects: '" + this.urlAfterRedirects + "', state: " + this.state + ")"
          }, e
        }(Gd),
        Xd = function (t) {
          function e(e, n, r, o, i) {
            var a = t.call(this, e, n) || this;
            return a.urlAfterRedirects = r, a.state = o, a.shouldActivate = i, a
          }
          return o(e, t), e.prototype.toString = function () {
            return "GuardsCheckEnd(id: " + this.id + ", url: '" + this.url + "', urlAfterRedirects: '" + this.urlAfterRedirects + "', state: " + this.state + ", shouldActivate: " + this.shouldActivate + ")"
          }, e
        }(Gd),
        Jd = function (t) {
          function e(e, n, r, o) {
            var i = t.call(this, e, n) || this;
            return i.urlAfterRedirects = r, i.state = o, i
          }
          return o(e, t), e.prototype.toString = function () {
            return "ResolveStart(id: " + this.id + ", url: '" + this.url + "', urlAfterRedirects: '" + this.urlAfterRedirects + "', state: " + this.state + ")"
          }, e
        }(Gd),
        tm = function (t) {
          function e(e, n, r, o) {
            var i = t.call(this, e, n) || this;
            return i.urlAfterRedirects = r, i.state = o, i
          }
          return o(e, t), e.prototype.toString = function () {
            return "ResolveEnd(id: " + this.id + ", url: '" + this.url + "', urlAfterRedirects: '" + this.urlAfterRedirects + "', state: " + this.state + ")"
          }, e
        }(Gd),
        em = function () {
          function t(t) {
            this.route = t
          }
          return t.prototype.toString = function () {
            return "RouteConfigLoadStart(path: " + this.route.path + ")"
          }, t
        }(),
        nm = function () {
          function t(t) {
            this.route = t
          }
          return t.prototype.toString = function () {
            return "RouteConfigLoadEnd(path: " + this.route.path + ")"
          }, t
        }(),
        rm = function () {
          function t(t) {
            this.snapshot = t
          }
          return t.prototype.toString = function () {
            return "ChildActivationStart(path: '" + (this.snapshot.routeConfig && this.snapshot.routeConfig.path || "") + "')"
          }, t
        }(),
        om = function () {
          function t(t) {
            this.snapshot = t
          }
          return t.prototype.toString = function () {
            return "ChildActivationEnd(path: '" + (this.snapshot.routeConfig && this.snapshot.routeConfig.path || "") + "')"
          }, t
        }(),
        im = function () {
          function t(t) {
            this.snapshot = t
          }
          return t.prototype.toString = function () {
            return "ActivationStart(path: '" + (this.snapshot.routeConfig && this.snapshot.routeConfig.path || "") + "')"
          }, t
        }(),
        am = function () {
          function t(t) {
            this.snapshot = t
          }
          return t.prototype.toString = function () {
            return "ActivationEnd(path: '" + (this.snapshot.routeConfig && this.snapshot.routeConfig.path || "") + "')"
          }, t
        }(),
        sm = function () {
          function t(t, e, n) {
            this.routerEvent = t, this.position = e, this.anchor = n
          }
          return t.prototype.toString = function () {
            return "Scroll(anchor: '" + this.anchor + "', position: '" + (this.position ? this.position[0] + ", " + this.position[1] : null) + "')"
          }, t
        }(),
        lm = function () {},
        um = "primary",
        cm = function () {
          function t(t) {
            this.params = t || {}
          }
          return t.prototype.has = function (t) {
            return this.params.hasOwnProperty(t)
          }, t.prototype.get = function (t) {
            if (this.has(t)) {
              var e = this.params[t];
              return Array.isArray(e) ? e[0] : e
            }
            return null
          }, t.prototype.getAll = function (t) {
            if (this.has(t)) {
              var e = this.params[t];
              return Array.isArray(e) ? e : [e]
            }
            return []
          }, Object.defineProperty(t.prototype, "keys", {
            get: function () {
              return Object.keys(this.params)
            },
            enumerable: !0,
            configurable: !0
          }), t
        }();

      function hm(t) {
        return new cm(t)
      }

      function pm(t, e, n) {
        var r = n.path.split("/");
        if (r.length > t.length) return null;
        if ("full" === n.pathMatch && (e.hasChildren() || r.length < t.length)) return null;
        for (var o = {}, i = 0; i < r.length; i++) {
          var a = r[i],
            s = t[i];
          if (a.startsWith(":")) o[a.substring(1)] = s;
          else if (a !== s.path) return null
        }
        return {
          consumed: t.slice(0, r.length),
          posParams: o
        }
      }
      var fm = function (t, e) {
        this.routes = t, this.module = e
      };

      function dm(t, e) {
        void 0 === e && (e = "");
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          mm(r, ym(e, r))
        }
      }

      function mm(t, e) {
        if (!t) throw new Error("\n      Invalid configuration of route '" + e + "': Encountered undefined route.\n      The reason might be an extra comma.\n\n      Example:\n      const routes: Routes = [\n        { path: '', redirectTo: '/dashboard', pathMatch: 'full' },\n        { path: 'dashboard',  component: DashboardComponent },, << two commas\n        { path: 'detail/:id', component: HeroDetailComponent }\n      ];\n    ");
        if (Array.isArray(t)) throw new Error("Invalid configuration of route '" + e + "': Array cannot be specified");
        if (!t.component && !t.children && !t.loadChildren && t.outlet && t.outlet !== um) throw new Error("Invalid configuration of route '" + e + "': a componentless route without children or loadChildren cannot have a named outlet set");
        if (t.redirectTo && t.children) throw new Error("Invalid configuration of route '" + e + "': redirectTo and children cannot be used together");
        if (t.redirectTo && t.loadChildren) throw new Error("Invalid configuration of route '" + e + "': redirectTo and loadChildren cannot be used together");
        if (t.children && t.loadChildren) throw new Error("Invalid configuration of route '" + e + "': children and loadChildren cannot be used together");
        if (t.redirectTo && t.component) throw new Error("Invalid configuration of route '" + e + "': redirectTo and component cannot be used together");
        if (t.path && t.matcher) throw new Error("Invalid configuration of route '" + e + "': path and matcher cannot be used together");
        if (void 0 === t.redirectTo && !t.component && !t.children && !t.loadChildren) throw new Error("Invalid configuration of route '" + e + "'. One of the following must be provided: component, redirectTo, children or loadChildren");
        if (void 0 === t.path && void 0 === t.matcher) throw new Error("Invalid configuration of route '" + e + "': routes must have either a path or a matcher specified");
        if ("string" == typeof t.path && "/" === t.path.charAt(0)) throw new Error("Invalid configuration of route '" + e + "': path cannot start with a slash");
        if ("" === t.path && void 0 !== t.redirectTo && void 0 === t.pathMatch) throw new Error("Invalid configuration of route '{path: \"" + e + '", redirectTo: "' + t.redirectTo + "\"}': please provide 'pathMatch'. The default value of 'pathMatch' is 'prefix', but often the intent is to use 'full'.");
        if (void 0 !== t.pathMatch && "full" !== t.pathMatch && "prefix" !== t.pathMatch) throw new Error("Invalid configuration of route '" + e + "': pathMatch can only be set to 'prefix' or 'full'");
        t.children && dm(t.children, e)
      }

      function ym(t, e) {
        return e ? t || e.path ? t && !e.path ? t + "/" : !t && e.path ? e.path : t + "/" + e.path : "" : t
      }

      function gm(t) {
        var e = t.children && t.children.map(gm),
          n = e ? i({}, t, {
            children: e
          }) : i({}, t);
        return !n.component && (e || n.loadChildren) && n.outlet && n.outlet !== um && (n.component = lm), n
      }

      function vm(t, e) {
        var n, r = Object.keys(t),
          o = Object.keys(e);
        if (r.length != o.length) return !1;
        for (var i = 0; i < r.length; i++)
          if (t[n = r[i]] !== e[n]) return !1;
        return !0
      }

      function _m(t) {
        return Array.prototype.concat.apply([], t)
      }

      function bm(t) {
        return t.length > 0 ? t[t.length - 1] : null
      }

      function wm(t, e) {
        for (var n in t) t.hasOwnProperty(n) && e(t[n], n)
      }

      function Cm(t) {
        return t.pipe(ot(), Vd(function (t) {
          return !0 === t
        }))
      }

      function Em(t) {
        return je(t) ? t : Me(t) ? J(Promise.resolve(t)) : Fp(t)
      }

      function Sm(t, e, n) {
        return n ? function (t, e) {
          return vm(t, e)
        }(t.queryParams, e.queryParams) && function t(e, n) {
          if (!Tm(e.segments, n.segments)) return !1;
          if (e.numberOfChildren !== n.numberOfChildren) return !1;
          for (var r in n.children) {
            if (!e.children[r]) return !1;
            if (!t(e.children[r], n.children[r])) return !1
          }
          return !0
        }(t.root, e.root) : function (t, e) {
          return Object.keys(e).length <= Object.keys(t).length && Object.keys(e).every(function (n) {
            return e[n] === t[n]
          })
        }(t.queryParams, e.queryParams) && function t(e, n) {
          return function e(n, r, o) {
            if (n.segments.length > o.length) return !!Tm(a = n.segments.slice(0, o.length), o) && !r.hasChildren();
            if (n.segments.length === o.length) {
              if (!Tm(n.segments, o)) return !1;
              for (var i in r.children) {
                if (!n.children[i]) return !1;
                if (!t(n.children[i], r.children[i])) return !1
              }
              return !0
            }
            var a = o.slice(0, n.segments.length),
              s = o.slice(n.segments.length);
            return !!Tm(n.segments, a) && !!n.children[um] && e(n.children[um], r, s)
          }(e, n, n.segments)
        }(t.root, e.root)
      }
      var xm = function () {
          function t(t, e, n) {
            this.root = t, this.queryParams = e, this.fragment = n
          }
          return Object.defineProperty(t.prototype, "queryParamMap", {
            get: function () {
              return this._queryParamMap || (this._queryParamMap = hm(this.queryParams)), this._queryParamMap
            },
            enumerable: !0,
            configurable: !0
          }), t.prototype.toString = function () {
            return Rm.serialize(this)
          }, t
        }(),
        km = function () {
          function t(t, e) {
            var n = this;
            this.segments = t, this.children = e, this.parent = null, wm(e, function (t, e) {
              return t.parent = n
            })
          }
          return t.prototype.hasChildren = function () {
            return this.numberOfChildren > 0
          }, Object.defineProperty(t.prototype, "numberOfChildren", {
            get: function () {
              return Object.keys(this.children).length
            },
            enumerable: !0,
            configurable: !0
          }), t.prototype.toString = function () {
            return Dm(this)
          }, t
        }(),
        Pm = function () {
          function t(t, e) {
            this.path = t, this.parameters = e
          }
          return Object.defineProperty(t.prototype, "parameterMap", {
            get: function () {
              return this._parameterMap || (this._parameterMap = hm(this.parameters)), this._parameterMap
            },
            enumerable: !0,
            configurable: !0
          }), t.prototype.toString = function () {
            return Lm(this)
          }, t
        }();

      function Tm(t, e) {
        return t.length === e.length && t.every(function (t, n) {
          return t.path === e[n].path
        })
      }

      function Om(t, e) {
        var n = [];
        return wm(t.children, function (t, r) {
          r === um && (n = n.concat(e(t, r)))
        }), wm(t.children, function (t, r) {
          r !== um && (n = n.concat(e(t, r)))
        }), n
      }
      var Am = function () {},
        Im = function () {
          function t() {}
          return t.prototype.parse = function (t) {
            var e = new qm(t);
            return new xm(e.parseRootSegment(), e.parseQueryParams(), e.parseFragment())
          }, t.prototype.serialize = function (t) {
            var e, n;
            return "/" + function t(e, n) {
              if (!e.hasChildren()) return Dm(e);
              if (n) {
                var r = e.children[um] ? t(e.children[um], !1) : "",
                  o = [];
                return wm(e.children, function (e, n) {
                  n !== um && o.push(n + ":" + t(e, !1))
                }), o.length > 0 ? r + "(" + o.join("//") + ")" : r
              }
              var i = Om(e, function (n, r) {
                return r === um ? [t(e.children[um], !1)] : [r + ":" + t(n, !1)]
              });
              return Dm(e) + "/(" + i.join("//") + ")"
            }(t.root, !0) + (e = t.queryParams, (n = Object.keys(e).map(function (t) {
              var n = e[t];
              return Array.isArray(n) ? n.map(function (e) {
                return Mm(t) + "=" + Mm(e)
              }).join("&") : Mm(t) + "=" + Mm(n)
            })).length ? "?" + n.join("&") : "") + ("string" == typeof t.fragment ? "#" + encodeURI(t.fragment) : "")
          }, t
        }(),
        Rm = new Im;

      function Dm(t) {
        return t.segments.map(function (t) {
          return Lm(t)
        }).join("/")
      }

      function Nm(t) {
        return encodeURIComponent(t).replace(/%40/g, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",")
      }

      function Mm(t) {
        return Nm(t).replace(/%3B/gi, ";")
      }

      function jm(t) {
        return Nm(t).replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/%26/gi, "&")
      }

      function Fm(t) {
        return decodeURIComponent(t)
      }

      function Vm(t) {
        return Fm(t.replace(/\+/g, "%20"))
      }

      function Lm(t) {
        return "" + jm(t.path) + (e = t.parameters, Object.keys(e).map(function (t) {
          return ";" + jm(t) + "=" + jm(e[t])
        }).join(""));
        var e
      }
      var Hm = /^[^\/()?;=#]+/;

      function Bm(t) {
        var e = t.match(Hm);
        return e ? e[0] : ""
      }
      var zm = /^[^=?&#]+/,
        Um = /^[^?&#]+/,
        qm = function () {
          function t(t) {
            this.url = t, this.remaining = t
          }
          return t.prototype.parseRootSegment = function () {
            return this.consumeOptional("/"), "" === this.remaining || this.peekStartsWith("?") || this.peekStartsWith("#") ? new km([], {}) : new km([], this.parseChildren())
          }, t.prototype.parseQueryParams = function () {
            var t = {};
            if (this.consumeOptional("?"))
              do {
                this.parseQueryParam(t)
              } while (this.consumeOptional("&"));
            return t
          }, t.prototype.parseFragment = function () {
            return this.consumeOptional("#") ? decodeURIComponent(this.remaining) : null
          }, t.prototype.parseChildren = function () {
            if ("" === this.remaining) return {};
            this.consumeOptional("/");
            var t = [];
            for (this.peekStartsWith("(") || t.push(this.parseSegment()); this.peekStartsWith("/") && !this.peekStartsWith("//") && !this.peekStartsWith("/(");) this.capture("/"), t.push(this.parseSegment());
            var e = {};
            this.peekStartsWith("/(") && (this.capture("/"), e = this.parseParens(!0));
            var n = {};
            return this.peekStartsWith("(") && (n = this.parseParens(!1)), (t.length > 0 || Object.keys(e).length > 0) && (n[um] = new km(t, e)), n
          }, t.prototype.parseSegment = function () {
            var t = Bm(this.remaining);
            if ("" === t && this.peekStartsWith(";")) throw new Error("Empty path url segment cannot have parameters: '" + this.remaining + "'.");
            return this.capture(t), new Pm(Fm(t), this.parseMatrixParams())
          }, t.prototype.parseMatrixParams = function () {
            for (var t = {}; this.consumeOptional(";");) this.parseParam(t);
            return t
          }, t.prototype.parseParam = function (t) {
            var e = Bm(this.remaining);
            if (e) {
              this.capture(e);
              var n = "";
              if (this.consumeOptional("=")) {
                var r = Bm(this.remaining);
                r && this.capture(n = r)
              }
              t[Fm(e)] = Fm(n)
            }
          }, t.prototype.parseQueryParam = function (t) {
            var e, n = (e = this.remaining.match(zm)) ? e[0] : "";
            if (n) {
              this.capture(n);
              var r = "";
              if (this.consumeOptional("=")) {
                var o = function (t) {
                  var e = t.match(Um);
                  return e ? e[0] : ""
                }(this.remaining);
                o && this.capture(r = o)
              }
              var i = Vm(n),
                a = Vm(r);
              if (t.hasOwnProperty(i)) {
                var s = t[i];
                Array.isArray(s) || (t[i] = s = [s]), s.push(a)
              } else t[i] = a
            }
          }, t.prototype.parseParens = function (t) {
            var e = {};
            for (this.capture("("); !this.consumeOptional(")") && this.remaining.length > 0;) {
              var n = Bm(this.remaining),
                r = this.remaining[n.length];
              if ("/" !== r && ")" !== r && ";" !== r) throw new Error("Cannot parse url '" + this.url + "'");
              var o = void 0;
              n.indexOf(":") > -1 ? (o = n.substr(0, n.indexOf(":")), this.capture(o), this.capture(":")) : t && (o = um);
              var i = this.parseChildren();
              e[o] = 1 === Object.keys(i).length ? i[um] : new km([], i), this.consumeOptional("//")
            }
            return e
          }, t.prototype.peekStartsWith = function (t) {
            return this.remaining.startsWith(t)
          }, t.prototype.consumeOptional = function (t) {
            return !!this.peekStartsWith(t) && (this.remaining = this.remaining.substring(t.length), !0)
          }, t.prototype.capture = function (t) {
            if (!this.consumeOptional(t)) throw new Error('Expected "' + t + '".')
          }, t
        }(),
        Gm = function (t) {
          this.segmentGroup = t || null
        },
        Qm = function (t) {
          this.urlTree = t
        };

      function Wm(t) {
        return new N(function (e) {
          return e.error(new Gm(t))
        })
      }

      function Zm(t) {
        return new N(function (e) {
          return e.error(new Qm(t))
        })
      }

      function Km(t) {
        return new N(function (e) {
          return e.error(new Error("Only absolute redirects can have named outlets. redirectTo: '" + t + "'"))
        })
      }
      var $m = function () {
        function t(t, e, n, r, o) {
          this.configLoader = e, this.urlSerializer = n, this.urlTree = r, this.config = o, this.allowRedirects = !0, this.ngModule = t.get(an)
        }
        return t.prototype.apply = function () {
          var t = this;
          return this.expandSegmentGroup(this.ngModule, this.config, this.urlTree.root, um).pipe(Z(function (e) {
            return t.createUrlTree(e, t.urlTree.queryParams, t.urlTree.fragment)
          })).pipe(Md(function (e) {
            if (e instanceof Qm) return t.allowRedirects = !1, t.match(e.urlTree);
            if (e instanceof Gm) throw t.noMatchError(e);
            throw e
          }))
        }, t.prototype.match = function (t) {
          var e = this;
          return this.expandSegmentGroup(this.ngModule, this.config, t.root, um).pipe(Z(function (n) {
            return e.createUrlTree(n, t.queryParams, t.fragment)
          })).pipe(Md(function (t) {
            if (t instanceof Gm) throw e.noMatchError(t);
            throw t
          }))
        }, t.prototype.noMatchError = function (t) {
          return new Error("Cannot match any routes. URL Segment: '" + t.segmentGroup + "'")
        }, t.prototype.createUrlTree = function (t, e, n) {
          var r, o = t.segments.length > 0 ? new km([], ((r = {})[um] = t, r)) : t;
          return new xm(o, e, n)
        }, t.prototype.expandSegmentGroup = function (t, e, n, r) {
          return 0 === n.segments.length && n.hasChildren() ? this.expandChildren(t, e, n).pipe(Z(function (t) {
            return new km([], t)
          })) : this.expandSegment(t, n, e, n.segments, r, !0)
        }, t.prototype.expandChildren = function (t, e, n) {
          var r = this;
          return function (n, o) {
            if (0 === Object.keys(n).length) return Fp({});
            var i = [],
              a = [],
              s = {};
            return wm(n, function (n, o) {
              var l, u, c = (l = o, u = n, r.expandSegmentGroup(t, e, u, l)).pipe(Z(function (t) {
                return s[o] = t
              }));
              o === um ? i.push(c) : a.push(c)
            }), Fp.apply(null, i.concat(a)).pipe(Vp(), Nd(), Z(function () {
              return s
            }))
          }(n.children)
        }, t.prototype.expandSegment = function (t, e, n, r, o, i) {
          var a = this;
          return Fp.apply(void 0, h(n)).pipe(Z(function (s) {
            return a.expandSegmentAgainstRoute(t, e, n, s, r, o, i).pipe(Md(function (t) {
              if (t instanceof Gm) return Fp(null);
              throw t
            }))
          }), Vp(), Bd(function (t) {
            return !!t
          }), Md(function (t, n) {
            if (t instanceof Ed || "EmptyError" === t.name) {
              if (a.noLeftoversInUrl(e, r, o)) return Fp(new km([], {}));
              throw new Gm(e)
            }
            throw t
          }))
        }, t.prototype.noLeftoversInUrl = function (t, e, n) {
          return 0 === e.length && !t.children[n]
        }, t.prototype.expandSegmentAgainstRoute = function (t, e, n, r, o, i, a) {
          return ty(r) !== i ? Wm(e) : void 0 === r.redirectTo ? this.matchSegmentAgainstRoute(t, e, r, o) : a && this.allowRedirects ? this.expandSegmentAgainstRouteUsingRedirect(t, e, n, r, o, i) : Wm(e)
        }, t.prototype.expandSegmentAgainstRouteUsingRedirect = function (t, e, n, r, o, i) {
          return "**" === r.path ? this.expandWildCardWithParamsAgainstRouteUsingRedirect(t, n, r, i) : this.expandRegularSegmentAgainstRouteUsingRedirect(t, e, n, r, o, i)
        }, t.prototype.expandWildCardWithParamsAgainstRouteUsingRedirect = function (t, e, n, r) {
          var o = this,
            i = this.applyRedirectCommands([], n.redirectTo, {});
          return n.redirectTo.startsWith("/") ? Zm(i) : this.lineralizeSegments(n, i).pipe(tt(function (n) {
            var i = new km(n, {});
            return o.expandSegment(t, i, e, n, r, !1)
          }))
        }, t.prototype.expandRegularSegmentAgainstRouteUsingRedirect = function (t, e, n, r, o, i) {
          var a = this,
            s = Ym(e, r, o),
            l = s.consumedSegments,
            u = s.lastChild,
            c = s.positionalParamSegments;
          if (!s.matched) return Wm(e);
          var h = this.applyRedirectCommands(l, r.redirectTo, c);
          return r.redirectTo.startsWith("/") ? Zm(h) : this.lineralizeSegments(r, h).pipe(tt(function (r) {
            return a.expandSegment(t, e, n, r.concat(o.slice(u)), i, !1)
          }))
        }, t.prototype.matchSegmentAgainstRoute = function (t, e, n, r) {
          var o = this;
          if ("**" === n.path) return n.loadChildren ? this.configLoader.load(t.injector, n).pipe(Z(function (t) {
            return n._loadedConfig = t, new km(r, {})
          })) : Fp(new km(r, {}));
          var a = Ym(e, n, r),
            s = a.consumedSegments,
            l = a.lastChild;
          if (!a.matched) return Wm(e);
          var c = r.slice(l);
          return this.getChildConfig(t, n).pipe(tt(function (t) {
            var n = t.module,
              r = t.routes,
              a = function (t, e, n, r) {
                return n.length > 0 && function (t, e, n) {
                  return r.some(function (n) {
                    return Jm(t, e, n) && ty(n) !== um
                  })
                }(t, n) ? {
                  segmentGroup: Xm(new km(e, function (t, e) {
                    var n, r, o = {};
                    o[um] = e;
                    try {
                      for (var i = u(t), a = i.next(); !a.done; a = i.next()) {
                        var s = a.value;
                        "" === s.path && ty(s) !== um && (o[ty(s)] = new km([], {}))
                      }
                    } catch (t) {
                      n = {
                        error: t
                      }
                    } finally {
                      try {
                        a && !a.done && (r = i.return) && r.call(i)
                      } finally {
                        if (n) throw n.error
                      }
                    }
                    return o
                  }(r, new km(n, t.children)))),
                  slicedSegments: []
                } : 0 === n.length && function (t, e, n) {
                  return r.some(function (n) {
                    return Jm(t, e, n)
                  })
                }(t, n) ? {
                  segmentGroup: Xm(new km(t.segments, function (t, e, n, r) {
                    var o, a, s = {};
                    try {
                      for (var l = u(n), c = l.next(); !c.done; c = l.next()) {
                        var h = c.value;
                        Jm(t, e, h) && !r[ty(h)] && (s[ty(h)] = new km([], {}))
                      }
                    } catch (t) {
                      o = {
                        error: t
                      }
                    } finally {
                      try {
                        c && !c.done && (a = l.return) && a.call(l)
                      } finally {
                        if (o) throw o.error
                      }
                    }
                    return i({}, r, s)
                  }(t, n, r, t.children))),
                  slicedSegments: n
                } : {
                  segmentGroup: t,
                  slicedSegments: n
                }
              }(e, s, c, r),
              l = a.segmentGroup,
              h = a.slicedSegments;
            return 0 === h.length && l.hasChildren() ? o.expandChildren(n, r, l).pipe(Z(function (t) {
              return new km(s, t)
            })) : 0 === r.length && 0 === h.length ? Fp(new km(s, {})) : o.expandSegment(n, l, r, h, um, !0).pipe(Z(function (t) {
              return new km(s.concat(t.segments), t.children)
            }))
          }))
        }, t.prototype.getChildConfig = function (t, e) {
          var n = this;
          return e.children ? Fp(new fm(e.children, t)) : e.loadChildren ? void 0 !== e._loadedConfig ? Fp(e._loadedConfig) : function (t, e) {
            var n = e.canLoad;
            return n && 0 !== n.length ? Cm(J(n).pipe(Z(function (n) {
              var r = t.get(n);
              return Em(r.canLoad ? r.canLoad(e) : r(e))
            }))) : Fp(!0)
          }(t.injector, e).pipe(tt(function (r) {
            return r ? n.configLoader.load(t.injector, e).pipe(Z(function (t) {
              return e._loadedConfig = t, t
            })) : function (t) {
              return new N(function (e) {
                return e.error(((n = Error("NavigationCancelingError: Cannot load children because the guard of the route \"path: '" + t.path + "'\" returned false")).ngNavigationCancelingError = !0, n));
                var n
              })
            }(e)
          })) : Fp(new fm([], t))
        }, t.prototype.lineralizeSegments = function (t, e) {
          for (var n = [], r = e.root;;) {
            if (n = n.concat(r.segments), 0 === r.numberOfChildren) return Fp(n);
            if (r.numberOfChildren > 1 || !r.children[um]) return Km(t.redirectTo);
            r = r.children[um]
          }
        }, t.prototype.applyRedirectCommands = function (t, e, n) {
          return this.applyRedirectCreatreUrlTree(e, this.urlSerializer.parse(e), t, n)
        }, t.prototype.applyRedirectCreatreUrlTree = function (t, e, n, r) {
          var o = this.createSegmentGroup(t, e.root, n, r);
          return new xm(o, this.createQueryParams(e.queryParams, this.urlTree.queryParams), e.fragment)
        }, t.prototype.createQueryParams = function (t, e) {
          var n = {};
          return wm(t, function (t, r) {
            if ("string" == typeof t && t.startsWith(":")) {
              var o = t.substring(1);
              n[r] = e[o]
            } else n[r] = t
          }), n
        }, t.prototype.createSegmentGroup = function (t, e, n, r) {
          var o = this,
            i = this.createSegments(t, e.segments, n, r),
            a = {};
          return wm(e.children, function (e, i) {
            a[i] = o.createSegmentGroup(t, e, n, r)
          }), new km(i, a)
        }, t.prototype.createSegments = function (t, e, n, r) {
          var o = this;
          return e.map(function (e) {
            return e.path.startsWith(":") ? o.findPosParam(t, e, r) : o.findOrReturn(e, n)
          })
        }, t.prototype.findPosParam = function (t, e, n) {
          var r = n[e.path.substring(1)];
          if (!r) throw new Error("Cannot redirect to '" + t + "'. Cannot find '" + e.path + "'.");
          return r
        }, t.prototype.findOrReturn = function (t, e) {
          var n, r, o = 0;
          try {
            for (var i = u(e), a = i.next(); !a.done; a = i.next()) {
              var s = a.value;
              if (s.path === t.path) return e.splice(o), s;
              o++
            }
          } catch (t) {
            n = {
              error: t
            }
          } finally {
            try {
              a && !a.done && (r = i.return) && r.call(i)
            } finally {
              if (n) throw n.error
            }
          }
          return t
        }, t
      }();

      function Ym(t, e, n) {
        if ("" === e.path) return "full" === e.pathMatch && (t.hasChildren() || n.length > 0) ? {
          matched: !1,
          consumedSegments: [],
          lastChild: 0,
          positionalParamSegments: {}
        } : {
          matched: !0,
          consumedSegments: [],
          lastChild: 0,
          positionalParamSegments: {}
        };
        var r = (e.matcher || pm)(n, t, e);
        return r ? {
          matched: !0,
          consumedSegments: r.consumed,
          lastChild: r.consumed.length,
          positionalParamSegments: r.posParams
        } : {
          matched: !1,
          consumedSegments: [],
          lastChild: 0,
          positionalParamSegments: {}
        }
      }

      function Xm(t) {
        if (1 === t.numberOfChildren && t.children[um]) {
          var e = t.children[um];
          return new km(t.segments.concat(e.segments), e.children)
        }
        return t
      }

      function Jm(t, e, n) {
        return (!(t.hasChildren() || e.length > 0) || "full" !== n.pathMatch) && "" === n.path && void 0 !== n.redirectTo
      }

      function ty(t) {
        return t.outlet || um
      }
      var ey = function () {
        function t(t) {
          this._root = t
        }
        return Object.defineProperty(t.prototype, "root", {
          get: function () {
            return this._root.value
          },
          enumerable: !0,
          configurable: !0
        }), t.prototype.parent = function (t) {
          var e = this.pathFromRoot(t);
          return e.length > 1 ? e[e.length - 2] : null
        }, t.prototype.children = function (t) {
          var e = ny(t, this._root);
          return e ? e.children.map(function (t) {
            return t.value
          }) : []
        }, t.prototype.firstChild = function (t) {
          var e = ny(t, this._root);
          return e && e.children.length > 0 ? e.children[0].value : null
        }, t.prototype.siblings = function (t) {
          var e = ry(t, this._root);
          return e.length < 2 ? [] : e[e.length - 2].children.map(function (t) {
            return t.value
          }).filter(function (e) {
            return e !== t
          })
        }, t.prototype.pathFromRoot = function (t) {
          return ry(t, this._root).map(function (t) {
            return t.value
          })
        }, t
      }();

      function ny(t, e) {
        var n, r;
        if (t === e.value) return e;
        try {
          for (var o = u(e.children), i = o.next(); !i.done; i = o.next()) {
            var a = ny(t, i.value);
            if (a) return a
          }
        } catch (t) {
          n = {
            error: t
          }
        } finally {
          try {
            i && !i.done && (r = o.return) && r.call(o)
          } finally {
            if (n) throw n.error
          }
        }
        return null
      }

      function ry(t, e) {
        var n, r;
        if (t === e.value) return [e];
        try {
          for (var o = u(e.children), i = o.next(); !i.done; i = o.next()) {
            var a = ry(t, i.value);
            if (a.length) return a.unshift(e), a
          }
        } catch (t) {
          n = {
            error: t
          }
        } finally {
          try {
            i && !i.done && (r = o.return) && r.call(o)
          } finally {
            if (n) throw n.error
          }
        }
        return []
      }
      var oy = function () {
        function t(t, e) {
          this.value = t, this.children = e
        }
        return t.prototype.toString = function () {
          return "TreeNode(" + this.value + ")"
        }, t
      }();

      function iy(t) {
        var e = {};
        return t && t.children.forEach(function (t) {
          return e[t.value.outlet] = t
        }), e
      }
      var ay = function (t) {
        function e(e, n) {
          var r = t.call(this, e) || this;
          return r.snapshot = n, py(r, e), r
        }
        return o(e, t), e.prototype.toString = function () {
          return this.snapshot.toString()
        }, e
      }(ey);

      function sy(t, e) {
        var n = function (t, e) {
            var n = new cy([], {}, {}, "", {}, um, e, null, t.root, -1, {});
            return new hy("", new oy(n, []))
          }(t, e),
          r = new Sd([new Pm("", {})]),
          o = new Sd({}),
          i = new Sd({}),
          a = new Sd({}),
          s = new Sd(""),
          l = new ly(r, o, a, s, i, um, e, n.root);
        return l.snapshot = n.root, new ay(new oy(l, []), n)
      }
      var ly = function () {
        function t(t, e, n, r, o, i, a, s) {
          this.url = t, this.params = e, this.queryParams = n, this.fragment = r, this.data = o, this.outlet = i, this.component = a, this._futureSnapshot = s
        }
        return Object.defineProperty(t.prototype, "routeConfig", {
          get: function () {
            return this._futureSnapshot.routeConfig
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(t.prototype, "root", {
          get: function () {
            return this._routerState.root
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(t.prototype, "parent", {
          get: function () {
            return this._routerState.parent(this)
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(t.prototype, "firstChild", {
          get: function () {
            return this._routerState.firstChild(this)
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(t.prototype, "children", {
          get: function () {
            return this._routerState.children(this)
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(t.prototype, "pathFromRoot", {
          get: function () {
            return this._routerState.pathFromRoot(this)
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(t.prototype, "paramMap", {
          get: function () {
            return this._paramMap || (this._paramMap = this.params.pipe(Z(function (t) {
              return hm(t)
            }))), this._paramMap
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(t.prototype, "queryParamMap", {
          get: function () {
            return this._queryParamMap || (this._queryParamMap = this.queryParams.pipe(Z(function (t) {
              return hm(t)
            }))), this._queryParamMap
          },
          enumerable: !0,
          configurable: !0
        }), t.prototype.toString = function () {
          return this.snapshot ? this.snapshot.toString() : "Future(" + this._futureSnapshot + ")"
        }, t
      }();

      function uy(t, e) {
        void 0 === e && (e = "emptyOnly");
        var n = t.pathFromRoot,
          r = 0;
        if ("always" !== e)
          for (r = n.length - 1; r >= 1;) {
            var o = n[r],
              a = n[r - 1];
            if (o.routeConfig && "" === o.routeConfig.path) r--;
            else {
              if (a.component) break;
              r--
            }
          }
        return function (t) {
          return t.reduce(function (t, e) {
            return {
              params: i({}, t.params, e.params),
              data: i({}, t.data, e.data),
              resolve: i({}, t.resolve, e._resolvedData)
            }
          }, {
            params: {},
            data: {},
            resolve: {}
          })
        }(n.slice(r))
      }
      var cy = function () {
          function t(t, e, n, r, o, i, a, s, l, u, c) {
            this.url = t, this.params = e, this.queryParams = n, this.fragment = r, this.data = o, this.outlet = i, this.component = a, this.routeConfig = s, this._urlSegment = l, this._lastPathIndex = u, this._resolve = c
          }
          return Object.defineProperty(t.prototype, "root", {
            get: function () {
              return this._routerState.root
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(t.prototype, "parent", {
            get: function () {
              return this._routerState.parent(this)
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(t.prototype, "firstChild", {
            get: function () {
              return this._routerState.firstChild(this)
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(t.prototype, "children", {
            get: function () {
              return this._routerState.children(this)
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(t.prototype, "pathFromRoot", {
            get: function () {
              return this._routerState.pathFromRoot(this)
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(t.prototype, "paramMap", {
            get: function () {
              return this._paramMap || (this._paramMap = hm(this.params)), this._paramMap
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(t.prototype, "queryParamMap", {
            get: function () {
              return this._queryParamMap || (this._queryParamMap = hm(this.queryParams)), this._queryParamMap
            },
            enumerable: !0,
            configurable: !0
          }), t.prototype.toString = function () {
            return "Route(url:'" + this.url.map(function (t) {
              return t.toString()
            }).join("/") + "', path:'" + (this.routeConfig ? this.routeConfig.path : "") + "')"
          }, t
        }(),
        hy = function (t) {
          function e(e, n) {
            var r = t.call(this, n) || this;
            return r.url = e, py(r, n), r
          }
          return o(e, t), e.prototype.toString = function () {
            return fy(this._root)
          }, e
        }(ey);

      function py(t, e) {
        e.value._routerState = t, e.children.forEach(function (e) {
          return py(t, e)
        })
      }

      function fy(t) {
        var e = t.children.length > 0 ? " { " + t.children.map(fy).join(", ") + " } " : "";
        return "" + t.value + e
      }

      function dy(t) {
        if (t.snapshot) {
          var e = t.snapshot,
            n = t._futureSnapshot;
          t.snapshot = n, vm(e.queryParams, n.queryParams) || t.queryParams.next(n.queryParams), e.fragment !== n.fragment && t.fragment.next(n.fragment), vm(e.params, n.params) || t.params.next(n.params),
            function (t, e) {
              if (t.length !== e.length) return !1;
              for (var n = 0; n < t.length; ++n)
                if (!vm(t[n], e[n])) return !1;
              return !0
            }(e.url, n.url) || t.url.next(n.url), vm(e.data, n.data) || t.data.next(n.data)
        } else t.snapshot = t._futureSnapshot, t.data.next(t._futureSnapshot.data)
      }

      function my(t, e) {
        var n, r;
        return vm(t.params, e.params) && Tm(n = t.url, r = e.url) && n.every(function (t, e) {
          return vm(t.parameters, r[e].parameters)
        }) && !(!t.parent != !e.parent) && (!t.parent || my(t.parent, e.parent))
      }

      function yy(t) {
        return "object" == typeof t && null != t && !t.outlets && !t.segmentPath
      }

      function gy(t, e, n, r, o) {
        var i = {};
        return r && wm(r, function (t, e) {
          i[e] = Array.isArray(t) ? t.map(function (t) {
            return "" + t
          }) : "" + t
        }), new xm(n.root === t ? e : function t(e, n, r) {
          var o = {};
          return wm(e.children, function (e, i) {
            o[i] = e === n ? r : t(e, n, r)
          }), new km(e.segments, o)
        }(n.root, t, e), i, o)
      }
      var vy = function () {
          function t(t, e, n) {
            if (this.isAbsolute = t, this.numberOfDoubleDots = e, this.commands = n, t && n.length > 0 && yy(n[0])) throw new Error("Root segment cannot have matrix parameters");
            var r = n.find(function (t) {
              return "object" == typeof t && null != t && t.outlets
            });
            if (r && r !== bm(n)) throw new Error("{outlets:{}} has to be the last command")
          }
          return t.prototype.toRoot = function () {
            return this.isAbsolute && 1 === this.commands.length && "/" == this.commands[0]
          }, t
        }(),
        _y = function (t, e, n) {
          this.segmentGroup = t, this.processChildren = e, this.index = n
        };

      function by(t) {
        return "object" == typeof t && null != t && t.outlets ? t.outlets[um] : "" + t
      }

      function wy(t, e, n) {
        if (t || (t = new km([], {})), 0 === t.segments.length && t.hasChildren()) return Cy(t, e, n);
        var r = function (t, e, n) {
            for (var r = 0, o = e, i = {
                match: !1,
                pathIndex: 0,
                commandIndex: 0
              }; o < t.segments.length;) {
              if (r >= n.length) return i;
              var a = t.segments[o],
                s = by(n[r]),
                l = r < n.length - 1 ? n[r + 1] : null;
              if (o > 0 && void 0 === s) break;
              if (s && l && "object" == typeof l && void 0 === l.outlets) {
                if (!ky(s, l, a)) return i;
                r += 2
              } else {
                if (!ky(s, {}, a)) return i;
                r++
              }
              o++
            }
            return {
              match: !0,
              pathIndex: o,
              commandIndex: r
            }
          }(t, e, n),
          o = n.slice(r.commandIndex);
        if (r.match && r.pathIndex < t.segments.length) {
          var i = new km(t.segments.slice(0, r.pathIndex), {});
          return i.children[um] = new km(t.segments.slice(r.pathIndex), t.children), Cy(i, 0, o)
        }
        return r.match && 0 === o.length ? new km(t.segments, {}) : r.match && !t.hasChildren() ? Ey(t, e, n) : r.match ? Cy(t, 0, o) : Ey(t, e, n)
      }

      function Cy(t, e, n) {
        if (0 === n.length) return new km(t.segments, {});
        var r = function (t) {
            var e, n;
            return "object" != typeof t[0] ? ((e = {})[um] = t, e) : void 0 === t[0].outlets ? ((n = {})[um] = t, n) : t[0].outlets
          }(n),
          o = {};
        return wm(r, function (n, r) {
          null !== n && (o[r] = wy(t.children[r], e, n))
        }), wm(t.children, function (t, e) {
          void 0 === r[e] && (o[e] = t)
        }), new km(t.segments, o)
      }

      function Ey(t, e, n) {
        for (var r = t.segments.slice(0, e), o = 0; o < n.length;) {
          if ("object" == typeof n[o] && void 0 !== n[o].outlets) {
            var i = Sy(n[o].outlets);
            return new km(r, i)
          }
          if (0 === o && yy(n[0])) r.push(new Pm(t.segments[e].path, n[0])), o++;
          else {
            var a = by(n[o]),
              s = o < n.length - 1 ? n[o + 1] : null;
            a && s && yy(s) ? (r.push(new Pm(a, xy(s))), o += 2) : (r.push(new Pm(a, {})), o++)
          }
        }
        return new km(r, {})
      }

      function Sy(t) {
        var e = {};
        return wm(t, function (t, n) {
          null !== t && (e[n] = Ey(new km([], {}), 0, t))
        }), e
      }

      function xy(t) {
        var e = {};
        return wm(t, function (t, n) {
          return e[n] = "" + t
        }), e
      }

      function ky(t, e, n) {
        return t == n.path && vm(e, n.parameters)
      }
      var Py = function (t) {
          this.path = t, this.route = this.path[this.path.length - 1]
        },
        Ty = function (t, e) {
          this.component = t, this.route = e
        },
        Oy = function () {
          function t(t, e, n, r) {
            this.future = t, this.curr = e, this.moduleInjector = n, this.forwardEvent = r, this.canActivateChecks = [], this.canDeactivateChecks = []
          }
          return t.prototype.initialize = function (t) {
            var e = this.future._root;
            this.setupChildRouteGuards(e, this.curr ? this.curr._root : null, t, [e.value])
          }, t.prototype.checkGuards = function () {
            var t = this;
            return this.isDeactivating() || this.isActivating() ? this.runCanDeactivateChecks().pipe(tt(function (e) {
              return e ? t.runCanActivateChecks() : Fp(!1)
            })) : Fp(!0)
          }, t.prototype.resolveData = function (t) {
            var e = this;
            return this.isActivating() ? J(this.canActivateChecks).pipe(xd(function (n) {
              return e.runResolve(n.route, t)
            }), function (t, e) {
              return arguments.length >= 2 ? function (n) {
                return R(zd(t, e), kd(1), Id(e))(n)
              } : function (e) {
                return R(zd(function (e, n, r) {
                  return t(e, n, r + 1)
                }), kd(1))(e)
              }
            }(function (t, e) {
              return t
            })) : Fp(null)
          }, t.prototype.isDeactivating = function () {
            return 0 !== this.canDeactivateChecks.length
          }, t.prototype.isActivating = function () {
            return 0 !== this.canActivateChecks.length
          }, t.prototype.setupChildRouteGuards = function (t, e, n, r) {
            var o = this,
              i = iy(e);
            t.children.forEach(function (t) {
              o.setupRouteGuards(t, i[t.value.outlet], n, r.concat([t.value])), delete i[t.value.outlet]
            }), wm(i, function (t, e) {
              return o.deactivateRouteAndItsChildren(t, n.getContext(e))
            })
          }, t.prototype.setupRouteGuards = function (t, e, n, r) {
            var o = t.value,
              i = e ? e.value : null,
              a = n ? n.getContext(t.value.outlet) : null;
            if (i && o.routeConfig === i.routeConfig) {
              var s = this.shouldRunGuardsAndResolvers(i, o, o.routeConfig.runGuardsAndResolvers);
              s ? this.canActivateChecks.push(new Py(r)) : (o.data = i.data, o._resolvedData = i._resolvedData), this.setupChildRouteGuards(t, e, o.component ? a ? a.children : null : n, r), s && this.canDeactivateChecks.push(new Ty(a.outlet.component, i))
            } else i && this.deactivateRouteAndItsChildren(e, a), this.canActivateChecks.push(new Py(r)), this.setupChildRouteGuards(t, null, o.component ? a ? a.children : null : n, r)
          }, t.prototype.shouldRunGuardsAndResolvers = function (t, e, n) {
            switch (n) {
              case "always":
                return !0;
              case "paramsOrQueryParamsChange":
                return !my(t, e) || !vm(t.queryParams, e.queryParams);
              case "paramsChange":
              default:
                return !my(t, e)
            }
          }, t.prototype.deactivateRouteAndItsChildren = function (t, e) {
            var n = this,
              r = iy(t),
              o = t.value;
            wm(r, function (t, r) {
              n.deactivateRouteAndItsChildren(t, o.component ? e ? e.children.getContext(r) : null : e)
            }), this.canDeactivateChecks.push(new Ty(o.component && e && e.outlet && e.outlet.isActivated ? e.outlet.component : null, o))
          }, t.prototype.runCanDeactivateChecks = function () {
            var t = this;
            return J(this.canDeactivateChecks).pipe(tt(function (e) {
              return t.runCanDeactivate(e.component, e.route)
            }), Vd(function (t) {
              return !0 === t
            }))
          }, t.prototype.runCanActivateChecks = function () {
            var t = this;
            return J(this.canActivateChecks).pipe(xd(function (e) {
              return Cm(J([t.fireChildActivationStart(e.route.parent), t.fireActivationStart(e.route), t.runCanActivateChild(e.path), t.runCanActivate(e.route)]))
            }), Vd(function (t) {
              return !0 === t
            }))
          }, t.prototype.fireActivationStart = function (t) {
            return null !== t && this.forwardEvent && this.forwardEvent(new im(t)), Fp(!0)
          }, t.prototype.fireChildActivationStart = function (t) {
            return null !== t && this.forwardEvent && this.forwardEvent(new rm(t)), Fp(!0)
          }, t.prototype.runCanActivate = function (t) {
            var e = this,
              n = t.routeConfig ? t.routeConfig.canActivate : null;
            return n && 0 !== n.length ? Cm(J(n).pipe(Z(function (n) {
              var r = e.getToken(n, t);
              return Em(r.canActivate ? r.canActivate(t, e.future) : r(t, e.future)).pipe(Bd())
            }))) : Fp(!0)
          }, t.prototype.runCanActivateChild = function (t) {
            var e = this,
              n = t[t.length - 1];
            return Cm(J(t.slice(0, t.length - 1).reverse().map(function (t) {
              return e.extractCanActivateChild(t)
            }).filter(function (t) {
              return null !== t
            })).pipe(Z(function (t) {
              return Cm(J(t.guards).pipe(Z(function (r) {
                var o = e.getToken(r, t.node);
                return Em(o.canActivateChild ? o.canActivateChild(n, e.future) : o(n, e.future)).pipe(Bd())
              })))
            })))
          }, t.prototype.extractCanActivateChild = function (t) {
            var e = t.routeConfig ? t.routeConfig.canActivateChild : null;
            return e && 0 !== e.length ? {
              node: t,
              guards: e
            } : null
          }, t.prototype.runCanDeactivate = function (t, e) {
            var n = this,
              r = e && e.routeConfig ? e.routeConfig.canDeactivate : null;
            return r && 0 !== r.length ? J(r).pipe(tt(function (r) {
              var o = n.getToken(r, e);
              return Em(o.canDeactivate ? o.canDeactivate(t, e, n.curr, n.future) : o(t, e, n.curr, n.future)).pipe(Bd())
            })).pipe(Vd(function (t) {
              return !0 === t
            })) : Fp(!0)
          }, t.prototype.runResolve = function (t, e) {
            return this.resolveNode(t._resolve, t).pipe(Z(function (n) {
              return t._resolvedData = n, t.data = i({}, t.data, uy(t, e).resolve), null
            }))
          }, t.prototype.resolveNode = function (t, e) {
            var n = this,
              r = Object.keys(t);
            if (0 === r.length) return Fp({});
            if (1 === r.length) {
              var o = r[0];
              return this.getResolver(t[o], e).pipe(Z(function (t) {
                var e;
                return (e = {})[o] = t, e
              }))
            }
            var i = {};
            return J(r).pipe(tt(function (r) {
              return n.getResolver(t[r], e).pipe(Z(function (t) {
                return i[r] = t, t
              }))
            })).pipe(Nd(), Z(function () {
              return i
            }))
          }, t.prototype.getResolver = function (t, e) {
            var n = this.getToken(t, e);
            return Em(n.resolve ? n.resolve(e, this.future) : n(e, this.future))
          }, t.prototype.getToken = function (t, e) {
            var n = function (t) {
              if (!t) return null;
              for (var e = t.parent; e; e = e.parent) {
                var n = e.routeConfig;
                if (n && n._loadedConfig) return n._loadedConfig
              }
              return null
            }(e);
            return (n ? n.module.injector : this.moduleInjector).get(t)
          }, t
        }(),
        Ay = function () {},
        Iy = function () {
          function t(t, e, n, r, o, i) {
            this.rootComponentType = t, this.config = e, this.urlTree = n, this.url = r, this.paramsInheritanceStrategy = o, this.relativeLinkResolution = i
          }
          return t.prototype.recognize = function () {
            try {
              var t = Ny(this.urlTree.root, [], [], this.config, this.relativeLinkResolution).segmentGroup,
                e = this.processSegmentGroup(this.config, t, um),
                n = new cy([], Object.freeze({}), Object.freeze(i({}, this.urlTree.queryParams)), this.urlTree.fragment, {}, um, this.rootComponentType, null, this.urlTree.root, -1, {}),
                r = new oy(n, e),
                o = new hy(this.url, r);
              return this.inheritParamsAndData(o._root), Fp(o)
            } catch (t) {
              return new N(function (e) {
                return e.error(t)
              })
            }
          }, t.prototype.inheritParamsAndData = function (t) {
            var e = this,
              n = t.value,
              r = uy(n, this.paramsInheritanceStrategy);
            n.params = Object.freeze(r.params), n.data = Object.freeze(r.data), t.children.forEach(function (t) {
              return e.inheritParamsAndData(t)
            })
          }, t.prototype.processSegmentGroup = function (t, e, n) {
            return 0 === e.segments.length && e.hasChildren() ? this.processChildren(t, e) : this.processSegment(t, e, e.segments, n)
          }, t.prototype.processChildren = function (t, e) {
            var n, r = this,
              o = Om(e, function (e, n) {
                return r.processSegmentGroup(t, e, n)
              });
            return n = {}, o.forEach(function (t) {
              var e = n[t.value.outlet];
              if (e) {
                var r = e.url.map(function (t) {
                    return t.toString()
                  }).join("/"),
                  o = t.value.url.map(function (t) {
                    return t.toString()
                  }).join("/");
                throw new Error("Two segments cannot have the same outlet name: '" + r + "' and '" + o + "'.")
              }
              n[t.value.outlet] = t.value
            }), o.sort(function (t, e) {
              return t.value.outlet === um ? -1 : e.value.outlet === um ? 1 : t.value.outlet.localeCompare(e.value.outlet)
            }), o
          }, t.prototype.processSegment = function (t, e, n, r) {
            var o, i;
            try {
              for (var a = u(t), s = a.next(); !s.done; s = a.next()) {
                var l = s.value;
                try {
                  return this.processSegmentAgainstRoute(l, e, n, r)
                } catch (t) {
                  if (!(t instanceof Ay)) throw t
                }
              }
            } catch (t) {
              o = {
                error: t
              }
            } finally {
              try {
                s && !s.done && (i = a.return) && i.call(a)
              } finally {
                if (o) throw o.error
              }
            }
            if (this.noLeftoversInUrl(e, n, r)) return [];
            throw new Ay
          }, t.prototype.noLeftoversInUrl = function (t, e, n) {
            return 0 === e.length && !t.children[n]
          }, t.prototype.processSegmentAgainstRoute = function (t, e, n, r) {
            if (t.redirectTo) throw new Ay;
            if ((t.outlet || um) !== r) throw new Ay;
            var o, a = [],
              s = [];
            if ("**" === t.path) {
              var l = n.length > 0 ? bm(n).parameters : {};
              o = new cy(n, l, Object.freeze(i({}, this.urlTree.queryParams)), this.urlTree.fragment, Fy(t), r, t.component, t, Ry(e), Dy(e) + n.length, Vy(t))
            } else {
              var u = function (t, e, n) {
                if ("" === e.path) {
                  if ("full" === e.pathMatch && (t.hasChildren() || n.length > 0)) throw new Ay;
                  return {
                    consumedSegments: [],
                    lastChild: 0,
                    parameters: {}
                  }
                }
                var r = (e.matcher || pm)(n, t, e);
                if (!r) throw new Ay;
                var o = {};
                wm(r.posParams, function (t, e) {
                  o[e] = t.path
                });
                var a = r.consumed.length > 0 ? i({}, o, r.consumed[r.consumed.length - 1].parameters) : o;
                return {
                  consumedSegments: r.consumed,
                  lastChild: r.consumed.length,
                  parameters: a
                }
              }(e, t, n);
              a = u.consumedSegments, s = n.slice(u.lastChild), o = new cy(a, u.parameters, Object.freeze(i({}, this.urlTree.queryParams)), this.urlTree.fragment, Fy(t), r, t.component, t, Ry(e), Dy(e) + a.length, Vy(t))
            }
            var c = function (t) {
                return t.children ? t.children : t.loadChildren ? t._loadedConfig.routes : []
              }(t),
              h = Ny(e, a, s, c, this.relativeLinkResolution),
              p = h.segmentGroup,
              f = h.slicedSegments;
            if (0 === f.length && p.hasChildren()) {
              var d = this.processChildren(c, p);
              return [new oy(o, d)]
            }
            if (0 === c.length && 0 === f.length) return [new oy(o, [])];
            var m = this.processSegment(c, p, f, um);
            return [new oy(o, m)]
          }, t
        }();

      function Ry(t) {
        for (var e = t; e._sourceSegment;) e = e._sourceSegment;
        return e
      }

      function Dy(t) {
        for (var e = t, n = e._segmentIndexShift ? e._segmentIndexShift : 0; e._sourceSegment;) n += (e = e._sourceSegment)._segmentIndexShift ? e._segmentIndexShift : 0;
        return n - 1
      }

      function Ny(t, e, n, r, o) {
        if (n.length > 0 && function (t, e, n) {
            return r.some(function (n) {
              return My(t, e, n) && jy(n) !== um
            })
          }(t, n)) {
          var a = new km(e, function (t, e, n, r) {
            var o, i, a = {};
            a[um] = r, r._sourceSegment = t, r._segmentIndexShift = e.length;
            try {
              for (var s = u(n), l = s.next(); !l.done; l = s.next()) {
                var c = l.value;
                if ("" === c.path && jy(c) !== um) {
                  var h = new km([], {});
                  h._sourceSegment = t, h._segmentIndexShift = e.length, a[jy(c)] = h
                }
              }
            } catch (t) {
              o = {
                error: t
              }
            } finally {
              try {
                l && !l.done && (i = s.return) && i.call(s)
              } finally {
                if (o) throw o.error
              }
            }
            return a
          }(t, e, r, new km(n, t.children)));
          return a._sourceSegment = t, a._segmentIndexShift = e.length, {
            segmentGroup: a,
            slicedSegments: []
          }
        }
        if (0 === n.length && function (t, e, n) {
            return r.some(function (n) {
              return My(t, e, n)
            })
          }(t, n)) {
          var s = new km(t.segments, function (t, e, n, r, o, a) {
            var s, l, c = {};
            try {
              for (var h = u(r), p = h.next(); !p.done; p = h.next()) {
                var f = p.value;
                if (My(t, n, f) && !o[jy(f)]) {
                  var d = new km([], {});
                  d._sourceSegment = t, d._segmentIndexShift = "legacy" === a ? t.segments.length : e.length, c[jy(f)] = d
                }
              }
            } catch (t) {
              s = {
                error: t
              }
            } finally {
              try {
                p && !p.done && (l = h.return) && l.call(h)
              } finally {
                if (s) throw s.error
              }
            }
            return i({}, o, c)
          }(t, e, n, r, t.children, o));
          return s._sourceSegment = t, s._segmentIndexShift = e.length, {
            segmentGroup: s,
            slicedSegments: n
          }
        }
        var l = new km(t.segments, t.children);
        return l._sourceSegment = t, l._segmentIndexShift = e.length, {
          segmentGroup: l,
          slicedSegments: n
        }
      }

      function My(t, e, n) {
        return (!(t.hasChildren() || e.length > 0) || "full" !== n.pathMatch) && "" === n.path && void 0 === n.redirectTo
      }

      function jy(t) {
        return t.outlet || um
      }

      function Fy(t) {
        return t.data || {}
      }

      function Vy(t) {
        return t.resolve || {}
      }
      var Ly = function () {},
        Hy = function () {
          function t() {}
          return t.prototype.shouldDetach = function (t) {
            return !1
          }, t.prototype.store = function (t, e) {}, t.prototype.shouldAttach = function (t) {
            return !1
          }, t.prototype.retrieve = function (t) {
            return null
          }, t.prototype.shouldReuseRoute = function (t, e) {
            return t.routeConfig === e.routeConfig
          }, t
        }(),
        By = new bt("ROUTES"),
        zy = function () {
          function t(t, e, n, r) {
            this.loader = t, this.compiler = e, this.onLoadStartListener = n, this.onLoadEndListener = r
          }
          return t.prototype.load = function (t, e) {
            var n = this;
            return this.onLoadStartListener && this.onLoadStartListener(e), this.loadModuleFactory(e.loadChildren).pipe(Z(function (r) {
              n.onLoadEndListener && n.onLoadEndListener(e);
              var o = r.create(t);
              return new fm(_m(o.injector.get(By)).map(gm), o)
            }))
          }, t.prototype.loadModuleFactory = function (t) {
            var e = this;
            return "string" == typeof t ? J(this.loader.load(t)) : Em(t()).pipe(tt(function (t) {
              return t instanceof sn ? Fp(t) : J(e.compiler.compileModuleAsync(t))
            }))
          }, t
        }(),
        Uy = function () {},
        qy = function () {
          function t() {}
          return t.prototype.shouldProcessUrl = function (t) {
            return !0
          }, t.prototype.extract = function (t) {
            return t
          }, t.prototype.merge = function (t, e) {
            return t
          }, t
        }();

      function Gy(t) {
        throw t
      }

      function Qy(t, e, n) {
        return e.parse("/")
      }

      function Wy(t, e) {
        return Fp(null)
      }
      var Zy = function () {
          function t(t, e, n, r, o, i, a, s) {
            var l = this;
            this.rootComponentType = t, this.urlSerializer = e, this.rootContexts = n, this.location = r, this.config = s, this.navigations = new Sd(null), this.navigationId = 0, this.isNgZoneEnabled = !1, this.events = new ct, this.errorHandler = Gy, this.malformedUriErrorHandler = Qy, this.navigated = !1, this.lastSuccessfulId = -1, this.hooks = {
              beforePreactivation: Wy,
              afterPreactivation: Wy
            }, this.urlHandlingStrategy = new qy, this.routeReuseStrategy = new Hy, this.onSameUrlNavigation = "ignore", this.paramsInheritanceStrategy = "emptyOnly", this.urlUpdateStrategy = "deferred", this.relativeLinkResolution = "legacy", this.ngModule = o.get(an), this.console = o.get(Ge);
            var u = o.get(fn);
            this.isNgZoneEnabled = u instanceof fn, this.resetConfig(s), this.currentUrlTree = new xm(new km([], {}), {}, null), this.rawUrlTree = this.currentUrlTree, this.configLoader = new zy(i, a, function (t) {
              return l.triggerEvent(new em(t))
            }, function (t) {
              return l.triggerEvent(new nm(t))
            }), this.routerState = sy(this.currentUrlTree, this.rootComponentType), this.processNavigations()
          }
          return t.prototype.resetRootComponentType = function (t) {
            this.rootComponentType = t, this.routerState.root.component = this.rootComponentType
          }, t.prototype.initialNavigation = function () {
            this.setUpLocationChangeListener(), 0 === this.navigationId && this.navigateByUrl(this.location.path(!0), {
              replaceUrl: !0
            })
          }, t.prototype.setUpLocationChangeListener = function () {
            var t = this;
            this.locationSubscription || (this.locationSubscription = this.location.subscribe(function (e) {
              var n = t.parseUrl(e.url),
                r = "popstate" === e.type ? "popstate" : "hashchange",
                o = e.state && e.state.navigationId ? {
                  navigationId: e.state.navigationId
                } : null;
              setTimeout(function () {
                t.scheduleNavigation(n, r, o, {
                  replaceUrl: !0
                })
              }, 0)
            }))
          }, Object.defineProperty(t.prototype, "url", {
            get: function () {
              return this.serializeUrl(this.currentUrlTree)
            },
            enumerable: !0,
            configurable: !0
          }), t.prototype.triggerEvent = function (t) {
            this.events.next(t)
          }, t.prototype.resetConfig = function (t) {
            dm(t), this.config = t.map(gm), this.navigated = !1, this.lastSuccessfulId = -1
          }, t.prototype.ngOnDestroy = function () {
            this.dispose()
          }, t.prototype.dispose = function () {
            this.locationSubscription && (this.locationSubscription.unsubscribe(), this.locationSubscription = null)
          }, t.prototype.createUrlTree = function (t, e) {
            void 0 === e && (e = {});
            var n = e.relativeTo,
              r = e.queryParams,
              o = e.fragment,
              a = e.preserveQueryParams,
              s = e.queryParamsHandling,
              l = e.preserveFragment;
            Pn() && a && console && console.warn && console.warn("preserveQueryParams is deprecated, use queryParamsHandling instead.");
            var u = n || this.routerState.root,
              c = l ? this.currentUrlTree.fragment : o,
              p = null;
            if (s) switch (s) {
              case "merge":
                p = i({}, this.currentUrlTree.queryParams, r);
                break;
              case "preserve":
                p = this.currentUrlTree.queryParams;
                break;
              default:
                p = r || null
            } else p = a ? this.currentUrlTree.queryParams : r || null;
            return null !== p && (p = this.removeEmptyProps(p)),
              function (t, e, n, r, o) {
                if (0 === n.length) return gy(e.root, e.root, e, r, o);
                var i = function (t) {
                  if ("string" == typeof t[0] && 1 === t.length && "/" === t[0]) return new vy(!0, 0, t);
                  var e = 0,
                    n = !1,
                    r = t.reduce(function (t, r, o) {
                      if ("object" == typeof r && null != r) {
                        if (r.outlets) {
                          var i = {};
                          return wm(r.outlets, function (t, e) {
                            i[e] = "string" == typeof t ? t.split("/") : t
                          }), h(t, [{
                            outlets: i
                          }])
                        }
                        if (r.segmentPath) return h(t, [r.segmentPath])
                      }
                      return "string" != typeof r ? h(t, [r]) : 0 === o ? (r.split("/").forEach(function (r, o) {
                        0 == o && "." === r || (0 == o && "" === r ? n = !0 : ".." === r ? e++ : "" != r && t.push(r))
                      }), t) : h(t, [r])
                    }, []);
                  return new vy(n, e, r)
                }(n);
                if (i.toRoot()) return gy(e.root, new km([], {}), e, r, o);
                var a = function (t, n, r) {
                    if (t.isAbsolute) return new _y(e.root, !0, 0);
                    if (-1 === r.snapshot._lastPathIndex) return new _y(r.snapshot._urlSegment, !0, 0);
                    var o = yy(t.commands[0]) ? 0 : 1;
                    return function (e, n, i) {
                      for (var a = r.snapshot._urlSegment, s = r.snapshot._lastPathIndex + o, l = t.numberOfDoubleDots; l > s;) {
                        if (l -= s, !(a = a.parent)) throw new Error("Invalid number of '../'");
                        s = a.segments.length
                      }
                      return new _y(a, !1, s - l)
                    }()
                  }(i, 0, t),
                  s = a.processChildren ? Cy(a.segmentGroup, a.index, i.commands) : wy(a.segmentGroup, a.index, i.commands);
                return gy(a.segmentGroup, s, e, r, o)
              }(u, this.currentUrlTree, t, p, c)
          }, t.prototype.navigateByUrl = function (t, e) {
            void 0 === e && (e = {
              skipLocationChange: !1
            }), Pn() && this.isNgZoneEnabled && !fn.isInAngularZone() && this.console.warn("Navigation triggered outside Angular zone, did you forget to call 'ngZone.run()'?");
            var n = t instanceof xm ? t : this.parseUrl(t),
              r = this.urlHandlingStrategy.merge(n, this.rawUrlTree);
            return this.scheduleNavigation(r, "imperative", null, e)
          }, t.prototype.navigate = function (t, e) {
            return void 0 === e && (e = {
                skipLocationChange: !1
              }),
              function (t) {
                for (var e = 0; e < t.length; e++) {
                  var n = t[e];
                  if (null == n) throw new Error("The requested path contains " + n + " segment at index " + e)
                }
              }(t), this.navigateByUrl(this.createUrlTree(t, e), e)
          }, t.prototype.serializeUrl = function (t) {
            return this.urlSerializer.serialize(t)
          }, t.prototype.parseUrl = function (t) {
            var e;
            try {
              e = this.urlSerializer.parse(t)
            } catch (n) {
              e = this.malformedUriErrorHandler(n, this.urlSerializer, t)
            }
            return e
          }, t.prototype.isActive = function (t, e) {
            if (t instanceof xm) return Sm(this.currentUrlTree, t, e);
            var n = this.parseUrl(t);
            return Sm(this.currentUrlTree, n, e)
          }, t.prototype.removeEmptyProps = function (t) {
            return Object.keys(t).reduce(function (e, n) {
              var r = t[n];
              return null !== r && void 0 !== r && (e[n] = r), e
            }, {})
          }, t.prototype.processNavigations = function () {
            var t = this;
            this.navigations.pipe(xd(function (e) {
              return e ? (t.executeScheduledNavigation(e), e.promise.catch(function () {})) : Fp(null)
            })).subscribe(function () {})
          }, t.prototype.scheduleNavigation = function (t, e, n, r) {
            var o = this.navigations.value;
            if (o && "imperative" !== e && "imperative" === o.source && o.rawUrl.toString() === t.toString()) return Promise.resolve(!0);
            if (o && "hashchange" == e && "popstate" === o.source && o.rawUrl.toString() === t.toString()) return Promise.resolve(!0);
            if (o && "popstate" == e && "hashchange" === o.source && o.rawUrl.toString() === t.toString()) return Promise.resolve(!0);
            var i = null,
              a = null,
              s = new Promise(function (t, e) {
                i = t, a = e
              }),
              l = ++this.navigationId;
            return this.navigations.next({
              id: l,
              source: e,
              state: n,
              rawUrl: t,
              extras: r,
              resolve: i,
              reject: a,
              promise: s
            }), s.catch(function (t) {
              return Promise.reject(t)
            })
          }, t.prototype.executeScheduledNavigation = function (t) {
            var e = this,
              n = t.id,
              r = t.rawUrl,
              o = t.extras,
              i = t.resolve,
              a = t.reject,
              s = t.source,
              l = t.state,
              u = this.urlHandlingStrategy.extract(r),
              c = !this.navigated || u.toString() !== this.currentUrlTree.toString();
            ("reload" === this.onSameUrlNavigation || c) && this.urlHandlingStrategy.shouldProcessUrl(r) ? ("eager" !== this.urlUpdateStrategy || o.skipLocationChange || this.setBrowserUrl(r, !!o.replaceUrl, n), this.events.next(new Qd(n, this.serializeUrl(u), s, l)), Promise.resolve().then(function (t) {
              return e.runNavigate(u, r, !!o.skipLocationChange, !!o.replaceUrl, n, null)
            }).then(i, a)) : c && this.rawUrlTree && this.urlHandlingStrategy.shouldProcessUrl(this.rawUrlTree) ? (this.events.next(new Qd(n, this.serializeUrl(u), s, l)), Promise.resolve().then(function (t) {
              return e.runNavigate(u, r, !1, !1, n, sy(u, e.rootComponentType).snapshot)
            }).then(i, a)) : (this.rawUrlTree = r, i(null))
          }, t.prototype.runNavigate = function (t, e, n, r, o, i) {
            var a = this;
            return o !== this.navigationId ? (this.events.next(new Zd(o, this.serializeUrl(t), "Navigation ID " + o + " is not equal to the current navigation id " + this.navigationId)), Promise.resolve(!1)) : new Promise(function (s, l) {
              var c, h = (i ? Fp({
                appliedUrl: t,
                snapshot: i
              }) : new $m(a.ngModule.injector, a.configLoader, a.urlSerializer, t, a.config).apply().pipe(tt(function (e) {
                return function (t, e, n, r, o, i) {
                  return void 0 === o && (o = "emptyOnly"), void 0 === i && (i = "legacy"), new Iy(t, e, n, r, o, i).recognize()
                }(a.rootComponentType, a.config, e, a.serializeUrl(e), a.paramsInheritanceStrategy, a.relativeLinkResolution).pipe(Z(function (n) {
                  return a.events.next(new $d(o, a.serializeUrl(t), a.serializeUrl(e), n)), {
                    appliedUrl: e,
                    snapshot: n
                  }
                }))
              }))).pipe(tt(function (i) {
                return "boolean" == typeof i ? Fp(i) : a.hooks.beforePreactivation(i.snapshot, {
                  navigationId: o,
                  appliedUrlTree: t,
                  rawUrlTree: e,
                  skipLocationChange: n,
                  replaceUrl: r
                }).pipe(Z(function () {
                  return i
                }))
              })).pipe(Z(function (t) {
                if ("boolean" == typeof t) return t;
                var e = t.appliedUrl,
                  n = t.snapshot;
                return (c = new Oy(n, a.routerState.snapshot, a.ngModule.injector, function (t) {
                  return a.triggerEvent(t)
                })).initialize(a.rootContexts), {
                  appliedUrl: e,
                  snapshot: n
                }
              })).pipe(tt(function (e) {
                if ("boolean" == typeof e || a.navigationId !== o) return Fp(!1);
                var n = e.appliedUrl,
                  r = e.snapshot;
                return a.triggerEvent(new Yd(o, a.serializeUrl(t), a.serializeUrl(n), r)), c.checkGuards().pipe(Z(function (e) {
                  return a.triggerEvent(new Xd(o, a.serializeUrl(t), a.serializeUrl(n), r, e)), {
                    appliedUrl: n,
                    snapshot: r,
                    shouldActivate: e
                  }
                }))
              })).pipe(tt(function (e) {
                return "boolean" == typeof e || a.navigationId !== o ? Fp(!1) : e.shouldActivate && c.isActivating() ? (a.triggerEvent(new Jd(o, a.serializeUrl(t), a.serializeUrl(e.appliedUrl), e.snapshot)), c.resolveData(a.paramsInheritanceStrategy).pipe(Z(function () {
                  return a.triggerEvent(new tm(o, a.serializeUrl(t), a.serializeUrl(e.appliedUrl), e.snapshot)), e
                }))) : Fp(e)
              })).pipe(tt(function (i) {
                return "boolean" == typeof i || a.navigationId !== o ? Fp(!1) : a.hooks.afterPreactivation(i.snapshot, {
                  navigationId: o,
                  appliedUrlTree: t,
                  rawUrlTree: e,
                  skipLocationChange: n,
                  replaceUrl: r
                }).pipe(Z(function () {
                  return i
                }))
              })).pipe(Z(function (t) {
                if ("boolean" == typeof t || a.navigationId !== o) return !1;
                var e, n, r, i = t.appliedUrl,
                  s = t.shouldActivate;
                return s ? {
                  appliedUrl: i,
                  state: (r = function t(e, n, r) {
                    if (r && e.shouldReuseRoute(n.value, r.value.snapshot)) {
                      (l = r.value)._futureSnapshot = n.value;
                      var o = function (e, n, r) {
                        return n.children.map(function (n) {
                          var o, i;
                          try {
                            for (var a = u(r.children), s = a.next(); !s.done; s = a.next()) {
                              var l = s.value;
                              if (e.shouldReuseRoute(l.value.snapshot, n.value)) return t(e, n, l)
                            }
                          } catch (t) {
                            o = {
                              error: t
                            }
                          } finally {
                            try {
                              s && !s.done && (i = a.return) && i.call(a)
                            } finally {
                              if (o) throw o.error
                            }
                          }
                          return t(e, n)
                        })
                      }(e, n, r);
                      return new oy(l, o)
                    }
                    var i = e.retrieve(n.value);
                    if (i) {
                      var a = i.route;
                      return function t(e, n) {
                        if (e.value.routeConfig !== n.value.routeConfig) throw new Error("Cannot reattach ActivatedRouteSnapshot created from a different route");
                        if (e.children.length !== n.children.length) throw new Error("Cannot reattach ActivatedRouteSnapshot with a different number of children");
                        n.value._futureSnapshot = e.value;
                        for (var r = 0; r < e.children.length; ++r) t(e.children[r], n.children[r])
                      }(n, a), a
                    }
                    var s, l = new ly(new Sd((s = n.value).url), new Sd(s.params), new Sd(s.queryParams), new Sd(s.fragment), new Sd(s.data), s.outlet, s.component, s);
                    return o = n.children.map(function (n) {
                      return t(e, n)
                    }), new oy(l, o)
                  }(a.routeReuseStrategy, (e = t.snapshot)._root, (n = a.routerState) ? n._root : void 0), new ay(r, e)),
                  shouldActivate: s
                } : {
                  appliedUrl: i,
                  state: null,
                  shouldActivate: s
                }
              }));
              a.activateRoutes(h, a.routerState, a.currentUrlTree, o, t, e, n, r, s, l)
            })
          }, t.prototype.activateRoutes = function (t, e, n, r, o, i, a, s, l, u) {
            var c, h = this;
            t.forEach(function (t) {
              if ("boolean" != typeof t && t.shouldActivate && r === h.navigationId && t.state) {
                var n = t.state;
                h.currentUrlTree = t.appliedUrl, h.rawUrlTree = h.urlHandlingStrategy.merge(h.currentUrlTree, i), h.routerState = n, "deferred" !== h.urlUpdateStrategy || a || h.setBrowserUrl(h.rawUrlTree, s, r), new Ky(h.routeReuseStrategy, n, e, function (t) {
                  return h.triggerEvent(t)
                }).activate(h.rootContexts), c = !0
              } else c = !1
            }).then(function () {
              c ? (h.navigated = !0, h.lastSuccessfulId = r, h.events.next(new Wd(r, h.serializeUrl(o), h.serializeUrl(h.currentUrlTree))), l(!0)) : (h.resetUrlToCurrentUrlTree(), h.events.next(new Zd(r, h.serializeUrl(o), "")), l(!1))
            }, function (t) {
              if ((a = t) && a.ngNavigationCancelingError) h.navigated = !0, h.resetStateAndUrl(e, n, i), h.events.next(new Zd(r, h.serializeUrl(o), t.message)), l(!1);
              else {
                h.resetStateAndUrl(e, n, i), h.events.next(new Kd(r, h.serializeUrl(o), t));
                try {
                  l(h.errorHandler(t))
                } catch (t) {
                  u(t)
                }
              }
              var a
            })
          }, t.prototype.setBrowserUrl = function (t, e, n) {
            var r = this.urlSerializer.serialize(t);
            this.location.isCurrentPathEqualTo(r) || e ? this.location.replaceState(r, "", {
              navigationId: n
            }) : this.location.go(r, "", {
              navigationId: n
            })
          }, t.prototype.resetStateAndUrl = function (t, e, n) {
            this.routerState = t, this.currentUrlTree = e, this.rawUrlTree = this.urlHandlingStrategy.merge(this.currentUrlTree, n), this.resetUrlToCurrentUrlTree()
          }, t.prototype.resetUrlToCurrentUrlTree = function () {
            this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree), "", {
              navigationId: this.lastSuccessfulId
            })
          }, t
        }(),
        Ky = function () {
          function t(t, e, n, r) {
            this.routeReuseStrategy = t, this.futureState = e, this.currState = n, this.forwardEvent = r
          }
          return t.prototype.activate = function (t) {
            var e = this.futureState._root,
              n = this.currState ? this.currState._root : null;
            this.deactivateChildRoutes(e, n, t), dy(this.futureState.root), this.activateChildRoutes(e, n, t)
          }, t.prototype.deactivateChildRoutes = function (t, e, n) {
            var r = this,
              o = iy(e);
            t.children.forEach(function (t) {
              var e = t.value.outlet;
              r.deactivateRoutes(t, o[e], n), delete o[e]
            }), wm(o, function (t, e) {
              r.deactivateRouteAndItsChildren(t, n)
            })
          }, t.prototype.deactivateRoutes = function (t, e, n) {
            var r = t.value,
              o = e ? e.value : null;
            if (r === o)
              if (r.component) {
                var i = n.getContext(r.outlet);
                i && this.deactivateChildRoutes(t, e, i.children)
              } else this.deactivateChildRoutes(t, e, n);
            else o && this.deactivateRouteAndItsChildren(e, n)
          }, t.prototype.deactivateRouteAndItsChildren = function (t, e) {
            this.routeReuseStrategy.shouldDetach(t.value.snapshot) ? this.detachAndStoreRouteSubtree(t, e) : this.deactivateRouteAndOutlet(t, e)
          }, t.prototype.detachAndStoreRouteSubtree = function (t, e) {
            var n = e.getContext(t.value.outlet);
            if (n && n.outlet) {
              var r = n.outlet.detach(),
                o = n.children.onOutletDeactivated();
              this.routeReuseStrategy.store(t.value.snapshot, {
                componentRef: r,
                route: t,
                contexts: o
              })
            }
          }, t.prototype.deactivateRouteAndOutlet = function (t, e) {
            var n = this,
              r = e.getContext(t.value.outlet);
            if (r) {
              var o = iy(t),
                i = t.value.component ? r.children : e;
              wm(o, function (t, e) {
                return n.deactivateRouteAndItsChildren(t, i)
              }), r.outlet && (r.outlet.deactivate(), r.children.onOutletDeactivated())
            }
          }, t.prototype.activateChildRoutes = function (t, e, n) {
            var r = this,
              o = iy(e);
            t.children.forEach(function (t) {
              r.activateRoutes(t, o[t.value.outlet], n), r.forwardEvent(new am(t.value.snapshot))
            }), t.children.length && this.forwardEvent(new om(t.value.snapshot))
          }, t.prototype.activateRoutes = function (t, e, n) {
            var r = t.value,
              o = e ? e.value : null;
            if (dy(r), r === o)
              if (r.component) {
                var i = n.getOrCreateContext(r.outlet);
                this.activateChildRoutes(t, e, i.children)
              } else this.activateChildRoutes(t, e, n);
            else if (r.component)
              if (i = n.getOrCreateContext(r.outlet), this.routeReuseStrategy.shouldAttach(r.snapshot)) {
                var a = this.routeReuseStrategy.retrieve(r.snapshot);
                this.routeReuseStrategy.store(r.snapshot, null), i.children.onOutletReAttached(a.contexts), i.attachRef = a.componentRef, i.route = a.route.value, i.outlet && i.outlet.attach(a.componentRef, a.route.value), $y(a.route)
              } else {
                var s = function (t) {
                    for (var e = r.snapshot.parent; e; e = e.parent) {
                      var n = e.routeConfig;
                      if (n && n._loadedConfig) return n._loadedConfig;
                      if (n && n.component) return null
                    }
                    return null
                  }(),
                  l = s ? s.module.componentFactoryResolver : null;
                i.attachRef = null, i.route = r, i.resolver = l, i.outlet && i.outlet.activateWith(r, l), this.activateChildRoutes(t, null, i.children)
              }
            else this.activateChildRoutes(t, null, n)
          }, t
        }();

      function $y(t) {
        dy(t.value), t.children.forEach($y)
      }
      var Yy = function () {
          function t(t, e, n, r, o) {
            this.router = t, this.route = e, this.commands = [], null == n && r.setAttribute(o.nativeElement, "tabindex", "0")
          }
          return Object.defineProperty(t.prototype, "routerLink", {
            set: function (t) {
              this.commands = null != t ? Array.isArray(t) ? t : [t] : []
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(t.prototype, "preserveQueryParams", {
            set: function (t) {
              Pn() && console && console.warn && console.warn("preserveQueryParams is deprecated!, use queryParamsHandling instead."), this.preserve = t
            },
            enumerable: !0,
            configurable: !0
          }), t.prototype.onClick = function () {
            var t = {
              skipLocationChange: Jy(this.skipLocationChange),
              replaceUrl: Jy(this.replaceUrl)
            };
            return this.router.navigateByUrl(this.urlTree, t), !0
          }, Object.defineProperty(t.prototype, "urlTree", {
            get: function () {
              return this.router.createUrlTree(this.commands, {
                relativeTo: this.route,
                queryParams: this.queryParams,
                fragment: this.fragment,
                preserveQueryParams: Jy(this.preserve),
                queryParamsHandling: this.queryParamsHandling,
                preserveFragment: Jy(this.preserveFragment)
              })
            },
            enumerable: !0,
            configurable: !0
          }), a([s(2, Pt("tabindex"))], t)
        }(),
        Xy = function () {
          function t(t, e, n) {
            var r = this;
            this.router = t, this.route = e, this.locationStrategy = n, this.commands = [], this.subscription = t.events.subscribe(function (t) {
              t instanceof Wd && r.updateTargetUrlAndHref()
            })
          }
          return Object.defineProperty(t.prototype, "routerLink", {
            set: function (t) {
              this.commands = null != t ? Array.isArray(t) ? t : [t] : []
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(t.prototype, "preserveQueryParams", {
            set: function (t) {
              Pn() && console && console.warn && console.warn("preserveQueryParams is deprecated, use queryParamsHandling instead."), this.preserve = t
            },
            enumerable: !0,
            configurable: !0
          }), t.prototype.ngOnChanges = function (t) {
            this.updateTargetUrlAndHref()
          }, t.prototype.ngOnDestroy = function () {
            this.subscription.unsubscribe()
          }, t.prototype.onClick = function (t, e, n, r) {
            if (0 !== t || e || n || r) return !0;
            if ("string" == typeof this.target && "_self" != this.target) return !0;
            var o = {
              skipLocationChange: Jy(this.skipLocationChange),
              replaceUrl: Jy(this.replaceUrl)
            };
            return this.router.navigateByUrl(this.urlTree, o), !1
          }, t.prototype.updateTargetUrlAndHref = function () {
            this.href = this.locationStrategy.prepareExternalUrl(this.router.serializeUrl(this.urlTree))
          }, Object.defineProperty(t.prototype, "urlTree", {
            get: function () {
              return this.router.createUrlTree(this.commands, {
                relativeTo: this.route,
                queryParams: this.queryParams,
                fragment: this.fragment,
                preserveQueryParams: Jy(this.preserve),
                queryParamsHandling: this.queryParamsHandling,
                preserveFragment: Jy(this.preserveFragment)
              })
            },
            enumerable: !0,
            configurable: !0
          }), a([Ot("attr.target"), Tt(), l("design:type", String)], t.prototype, "target", void 0), t
        }();

      function Jy(t) {
        return "" === t || !!t
      }
      var tg = function () {
          return function () {
            this.outlet = null, this.route = null, this.resolver = null, this.children = new eg, this.attachRef = null
          }
        }(),
        eg = function () {
          function t() {
            this.contexts = new Map
          }
          return t.prototype.onChildOutletCreated = function (t, e) {
            var n = this.getOrCreateContext(t);
            n.outlet = e, this.contexts.set(t, n)
          }, t.prototype.onChildOutletDestroyed = function (t) {
            var e = this.getContext(t);
            e && (e.outlet = null)
          }, t.prototype.onOutletDeactivated = function () {
            var t = this.contexts;
            return this.contexts = new Map, t
          }, t.prototype.onOutletReAttached = function (t) {
            this.contexts = t
          }, t.prototype.getOrCreateContext = function (t) {
            var e = this.getContext(t);
            return e || (e = new tg, this.contexts.set(t, e)), e
          }, t.prototype.getContext = function (t) {
            return this.contexts.get(t) || null
          }, t
        }(),
        ng = function () {
          function t(t, e, n, r, o) {
            this.parentContexts = t, this.location = e, this.resolver = n, this.changeDetector = o, this.activated = null, this._activatedRoute = null, this.activateEvents = new pn, this.deactivateEvents = new pn, this.name = r || um, t.onChildOutletCreated(this.name, this)
          }
          return t.prototype.ngOnDestroy = function () {
            this.parentContexts.onChildOutletDestroyed(this.name)
          }, t.prototype.ngOnInit = function () {
            if (!this.activated) {
              var t = this.parentContexts.getContext(this.name);
              t && t.route && (t.attachRef ? this.attach(t.attachRef, t.route) : this.activateWith(t.route, t.resolver || null))
            }
          }, Object.defineProperty(t.prototype, "isActivated", {
            get: function () {
              return !!this.activated
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(t.prototype, "component", {
            get: function () {
              if (!this.activated) throw new Error("Outlet is not activated");
              return this.activated.instance
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(t.prototype, "activatedRoute", {
            get: function () {
              if (!this.activated) throw new Error("Outlet is not activated");
              return this._activatedRoute
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(t.prototype, "activatedRouteData", {
            get: function () {
              return this._activatedRoute ? this._activatedRoute.snapshot.data : {}
            },
            enumerable: !0,
            configurable: !0
          }), t.prototype.detach = function () {
            if (!this.activated) throw new Error("Outlet is not activated");
            this.location.detach();
            var t = this.activated;
            return this.activated = null, this._activatedRoute = null, t
          }, t.prototype.attach = function (t, e) {
            this.activated = t, this._activatedRoute = e, this.location.insert(t.hostView)
          }, t.prototype.deactivate = function () {
            if (this.activated) {
              var t = this.component;
              this.activated.destroy(), this.activated = null, this._activatedRoute = null, this.deactivateEvents.emit(t)
            }
          }, t.prototype.activateWith = function (t, e) {
            if (this.isActivated) throw new Error("Cannot activate an already activated outlet");
            this._activatedRoute = t;
            var n = (e = e || this.resolver).resolveComponentFactory(t._futureSnapshot.routeConfig.component),
              r = this.parentContexts.getOrCreateContext(this.name).children,
              o = new rg(t, r, this.location.injector);
            this.activated = this.location.createComponent(n, this.location.length, o), this.changeDetector.markForCheck(), this.activateEvents.emit(this.activated.instance)
          }, a([s(3, Pt("name"))], t)
        }(),
        rg = function () {
          function t(t, e, n) {
            this.route = t, this.childContexts = e, this.parent = n
          }
          return t.prototype.get = function (t, e) {
            return t === ly ? this.route : t === eg ? this.childContexts : this.parent.get(t, e)
          }, t
        }(),
        og = function () {},
        ig = function () {
          function t() {}
          return t.prototype.preload = function (t, e) {
            return e().pipe(Md(function () {
              return Fp(null)
            }))
          }, t
        }(),
        ag = function () {
          function t() {}
          return t.prototype.preload = function (t, e) {
            return Fp(null)
          }, t
        }(),
        sg = function () {
          function t(t, e, n, r, o) {
            this.router = t, this.injector = r, this.preloadingStrategy = o, this.loader = new zy(e, n, function (e) {
              return t.triggerEvent(new em(e))
            }, function (e) {
              return t.triggerEvent(new nm(e))
            })
          }
          return t.prototype.setUpPreloading = function () {
            var t = this;
            this.subscription = this.router.events.pipe(lf(function (t) {
              return t instanceof Wd
            }), xd(function () {
              return t.preload()
            })).subscribe(function () {})
          }, t.prototype.preload = function () {
            var t = this.injector.get(an);
            return this.processRoutes(t, this.router.config)
          }, t.prototype.ngOnDestroy = function () {
            this.subscription.unsubscribe()
          }, t.prototype.processRoutes = function (t, e) {
            var n, r, o = [];
            try {
              for (var i = u(e), a = i.next(); !a.done; a = i.next()) {
                var s = a.value;
                if (s.loadChildren && !s.canLoad && s._loadedConfig) {
                  var l = s._loadedConfig;
                  o.push(this.processRoutes(l.module, l.routes))
                } else s.loadChildren && !s.canLoad ? o.push(this.preloadConfig(t, s)) : s.children && o.push(this.processRoutes(t, s.children))
              }
            } catch (t) {
              n = {
                error: t
              }
            } finally {
              try {
                a && !a.done && (r = i.return) && r.call(i)
              } finally {
                if (n) throw n.error
              }
            }
            return J(o).pipe(ot(), Z(function (t) {}))
          }, t.prototype.preloadConfig = function (t, e) {
            var n = this;
            return this.preloadingStrategy.preload(e, function () {
              return n.loader.load(t.injector, e).pipe(tt(function (t) {
                return e._loadedConfig = t, n.processRoutes(t.module, t.routes)
              }))
            })
          }, t
        }(),
        lg = function () {
          function t(t, e, n) {
            void 0 === n && (n = {}), this.router = t, this.viewportScroller = e, this.options = n, this.lastId = 0, this.lastSource = "imperative", this.restoredId = 0, this.store = {}, n.scrollPositionRestoration = n.scrollPositionRestoration || "disabled", n.anchorScrolling = n.anchorScrolling || "disabled"
          }
          return t.prototype.init = function () {
            "disabled" !== this.options.scrollPositionRestoration && this.viewportScroller.setHistoryScrollRestoration("manual"), this.routerEventsSubscription = this.createScrollEvents(), this.scrollEventsSubscription = this.consumeScrollEvents()
          }, t.prototype.createScrollEvents = function () {
            var t = this;
            return this.router.events.subscribe(function (e) {
              e instanceof Qd ? (t.store[t.lastId] = t.viewportScroller.getScrollPosition(), t.lastSource = e.navigationTrigger, t.restoredId = e.restoredState ? e.restoredState.navigationId : 0) : e instanceof Wd && (t.lastId = e.id, t.scheduleScrollEvent(e, t.router.parseUrl(e.urlAfterRedirects).fragment))
            })
          }, t.prototype.consumeScrollEvents = function () {
            var t = this;
            return this.router.events.subscribe(function (e) {
              e instanceof sm && (e.position ? "top" === t.options.scrollPositionRestoration ? t.viewportScroller.scrollToPosition([0, 0]) : "enabled" === t.options.scrollPositionRestoration && t.viewportScroller.scrollToPosition(e.position) : e.anchor && "enabled" === t.options.anchorScrolling ? t.viewportScroller.scrollToAnchor(e.anchor) : "disabled" !== t.options.scrollPositionRestoration && t.viewportScroller.scrollToPosition([0, 0]))
            })
          }, t.prototype.scheduleScrollEvent = function (t, e) {
            this.router.triggerEvent(new sm(t, "popstate" === this.lastSource ? this.store[this.restoredId] : null, e))
          }, t.prototype.ngOnDestroy = function () {
            this.routerEventsSubscription && this.routerEventsSubscription.unsubscribe(), this.scrollEventsSubscription && this.scrollEventsSubscription.unsubscribe()
          }, t
        }(),
        ug = new bt("ROUTER_CONFIGURATION"),
        cg = new bt("ROUTER_FORROOT_GUARD"),
        hg = [tu, {
          provide: Am,
          useClass: Im
        }, {
          provide: Zy,
          useFactory: vg,
          deps: [Dn, Am, eg, tu, Yt, Ln, We, By, ug, [Uy, new zt],
            [Ly, new zt]
          ]
        }, eg, {
          provide: ly,
          useFactory: _g,
          deps: [Zy]
        }, {
          provide: Ln,
          useClass: Un
        }, sg, ag, ig, {
          provide: ug,
          useValue: {
            enableTracing: !1
          }
        }];

      function pg() {
        return new Tn("Router", Zy)
      }
      var fg = function () {
        function t(t, e) {}
        var e;
        return e = t, t.forRoot = function (t, n) {
          return {
            ngModule: e,
            providers: [hg, gg(t), {
                provide: cg,
                useFactory: yg,
                deps: [
                  [Zy, new zt, new qt]
                ]
              }, {
                provide: ug,
                useValue: n || {}
              }, {
                provide: Xl,
                useFactory: mg,
                deps: [$l, [new Bt(Jl), new zt], ug]
              }, {
                provide: lg,
                useFactory: dg,
                deps: [Zy, cc, ug]
              }, {
                provide: og,
                useExisting: n && n.preloadingStrategy ? n.preloadingStrategy : ag
              }, {
                provide: Tn,
                multi: !0,
                useFactory: pg
              },
              [bg, {
                provide: Fe,
                multi: !0,
                useFactory: wg,
                deps: [bg]
              }, {
                provide: Eg,
                useFactory: Cg,
                deps: [bg]
              }, {
                provide: qe,
                multi: !0,
                useExisting: Eg
              }]
            ]
          }
        }, t.forChild = function (t) {
          return {
            ngModule: e,
            providers: [gg(t)]
          }
        }, e = a([s(0, zt()), s(0, Bt(cg)), s(1, zt())], t)
      }();

      function dg(t, e, n) {
        return n.scrollOffset && e.setOffset(n.scrollOffset), new lg(t, e, n)
      }

      function mg(t, e, n) {
        return void 0 === n && (n = {}), n.useHash ? new nu(t, e) : new ru(t, e)
      }

      function yg(t) {
        if (t) throw new Error("RouterModule.forRoot() called twice. Lazy loaded modules should use RouterModule.forChild() instead.");
        return "guarded"
      }

      function gg(t) {
        return [{
          provide: kt,
          multi: !0,
          useValue: t
        }, {
          provide: By,
          multi: !0,
          useValue: t
        }]
      }

      function vg(t, e, n, r, o, i, a, s, l, u, c) {
        void 0 === l && (l = {});
        var h = new Zy(null, e, n, r, o, i, a, _m(s));
        if (u && (h.urlHandlingStrategy = u), c && (h.routeReuseStrategy = c), l.errorHandler && (h.errorHandler = l.errorHandler), l.malformedUriErrorHandler && (h.malformedUriErrorHandler = l.malformedUriErrorHandler), l.enableTracing) {
          var p = fc();
          h.events.subscribe(function (t) {
            p.logGroup("Router Event: " + t.constructor.name), p.log(t.toString()), p.log(t), p.logGroupEnd()
          })
        }
        return l.onSameUrlNavigation && (h.onSameUrlNavigation = l.onSameUrlNavigation), l.paramsInheritanceStrategy && (h.paramsInheritanceStrategy = l.paramsInheritanceStrategy), l.urlUpdateStrategy && (h.urlUpdateStrategy = l.urlUpdateStrategy), l.relativeLinkResolution && (h.relativeLinkResolution = l.relativeLinkResolution), h
      }

      function _g(t) {
        return t.routerState.root
      }
      var bg = function () {
        function t(t) {
          this.injector = t, this.initNavigation = !1, this.resultOfPreactivationDone = new ct
        }
        return t.prototype.appInitializer = function () {
          var t = this;
          return this.injector.get(Yl, Promise.resolve(null)).then(function () {
            var e = null,
              n = new Promise(function (t) {
                return e = t
              }),
              r = t.injector.get(Zy),
              o = t.injector.get(ug);
            if (t.isLegacyDisabled(o) || t.isLegacyEnabled(o)) e(!0);
            else if ("disabled" === o.initialNavigation) r.setUpLocationChangeListener(), e(!0);
            else {
              if ("enabled" !== o.initialNavigation) throw new Error("Invalid initialNavigation options: '" + o.initialNavigation + "'");
              r.hooks.afterPreactivation = function () {
                return t.initNavigation ? Fp(null) : (t.initNavigation = !0, e(!0), t.resultOfPreactivationDone)
              }, r.initialNavigation()
            }
            return n
          })
        }, t.prototype.bootstrapListener = function (t) {
          var e = this.injector.get(ug),
            n = this.injector.get(sg),
            r = this.injector.get(lg),
            o = this.injector.get(Zy),
            i = this.injector.get(Dn);
          t === i.components[0] && (this.isLegacyEnabled(e) ? o.initialNavigation() : this.isLegacyDisabled(e) && o.setUpLocationChangeListener(), n.setUpPreloading(), r.init(), o.resetRootComponentType(i.componentTypes[0]), this.resultOfPreactivationDone.next(null), this.resultOfPreactivationDone.complete())
        }, t.prototype.isLegacyEnabled = function (t) {
          return "legacy_enabled" === t.initialNavigation || !0 === t.initialNavigation || void 0 === t.initialNavigation
        }, t.prototype.isLegacyDisabled = function (t) {
          return "legacy_disabled" === t.initialNavigation || !1 === t.initialNavigation
        }, t
      }();

      function wg(t) {
        return t.appInitializer.bind(t)
      }

      function Cg(t) {
        return t.bootstrapListener.bind(t)
      }
      var Eg = new bt("Router Initializer"),
        Sg = po({
          encapsulation: 2,
          styles: [],
          data: {}
        });

      function xg(t) {
        return la(0, [(t()(), Uo(0, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), Ii(1, 212992, null, 0, ng, [eg, Qn, nn, [8, null], Wn], null, null)], function (t, e) {
          t(e, 1, 0)
        }, null)
      }
      var kg = si("ng-component", lm, function (t) {
          return la(0, [(t()(), Uo(0, 0, null, null, 1, "ng-component", [], null, null, null, xg, Sg)), Ii(1, 49152, null, 0, lm, [], null, null)], null, null)
        }, {}, {}, []),
        Pg = function () {
          function t() {
            this.change = new pn, this.instances = {}, this.DEFAULT_ID = "DEFAULT_PAGINATION_ID"
          }
          return t.prototype.defaultId = function () {
            return this.DEFAULT_ID
          }, t.prototype.register = function (t) {
            null == t.id && (t.id = this.DEFAULT_ID), this.instances[t.id] ? this.updateInstance(t) && this.change.emit(t.id) : (this.instances[t.id] = t, this.change.emit(t.id))
          }, t.prototype.updateInstance = function (t) {
            var e = !1;
            for (var n in this.instances[t.id]) t[n] !== this.instances[t.id][n] && (this.instances[t.id][n] = t[n], e = !0);
            return e
          }, t.prototype.getCurrentPage = function (t) {
            if (this.instances[t]) return this.instances[t].currentPage
          }, t.prototype.setCurrentPage = function (t, e) {
            if (this.instances[t]) {
              var n = this.instances[t];
              e <= Math.ceil(n.totalItems / n.itemsPerPage) && 1 <= e && (this.instances[t].currentPage = e, this.change.emit(t))
            }
          }, t.prototype.setTotalItems = function (t, e) {
            this.instances[t] && 0 <= e && (this.instances[t].totalItems = e, this.change.emit(t))
          }, t.prototype.setItemsPerPage = function (t, e) {
            this.instances[t] && (this.instances[t].itemsPerPage = e, this.change.emit(t))
          }, t.prototype.getInstance = function (t) {
            return void 0 === t && (t = this.DEFAULT_ID), this.instances[t] ? this.clone(this.instances[t]) : {}
          }, t.prototype.clone = function (t) {
            var e = {};
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
            return e
          }, t
        }(),
        Tg = Number.MAX_SAFE_INTEGER,
        Og = function () {
          function t(t) {
            this.service = t, this.state = {}
          }
          return t.prototype.transform = function (t, e) {
            if (e instanceof Array && (e = e[0]), !(t instanceof Array)) {
              var n = e.id || this.service.defaultId;
              return this.state[n] ? this.state[n].slice : t
            }
            var r, o, i = e.totalItems && e.totalItems !== t.length,
              a = this.createInstance(t, e),
              s = a.id,
              l = a.itemsPerPage;
            if (this.service.register(a), !i && t instanceof Array) {
              if (this.stateIsIdentical(s, t, r = (a.currentPage - 1) * (l = +l || Tg), o = r + l)) return this.state[s].slice;
              var u = t.slice(r, o);
              return this.saveState(s, t, u, r, o), this.service.change.emit(s), u
            }
            return this.saveState(s, t, t, r, o), t
          }, t.prototype.createInstance = function (t, e) {
            var n = e;
            return this.checkConfig(n), {
              id: null != n.id ? n.id : this.service.defaultId(),
              itemsPerPage: +n.itemsPerPage || 0,
              currentPage: +n.currentPage || 1,
              totalItems: +n.totalItems || t.length
            }
          }, t.prototype.checkConfig = function (t) {
            var e = ["itemsPerPage", "currentPage"].filter(function (e) {
              return !(e in t)
            });
            if (0 < e.length) throw new Error("PaginatePipe: Argument is missing the following required properties: " + e.join(", "))
          }, t.prototype.saveState = function (t, e, n, r, o) {
            this.state[t] = {
              collection: e,
              size: e.length,
              slice: n,
              start: r,
              end: o
            }
          }, t.prototype.stateIsIdentical = function (t, e, n, r) {
            var o = this.state[t];
            return !!o && !(o.size !== e.length || o.start !== n || o.end !== r) && o.slice.every(function (t, r) {
              return t === e[n + r]
            })
          }, t
        }();

      function Ag(t) {
        return !!t && "false" !== t
      }
      var Ig = function () {
          function t() {
            this.maxSize = 7, this.previousLabel = "Previous", this.nextLabel = "Next", this.screenReaderPaginationLabel = "Pagination", this.screenReaderPageLabel = "page", this.screenReaderCurrentLabel = "You're on page", this.pageChange = new pn, this._directionLinks = !0, this._autoHide = !1, this._responsive = !1
          }
          return Object.defineProperty(t.prototype, "directionLinks", {
            get: function () {
              return this._directionLinks
            },
            set: function (t) {
              this._directionLinks = Ag(t)
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(t.prototype, "autoHide", {
            get: function () {
              return this._autoHide
            },
            set: function (t) {
              this._autoHide = Ag(t)
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(t.prototype, "responsive", {
            get: function () {
              return this._responsive
            },
            set: function (t) {
              this._responsive = Ag(t)
            },
            enumerable: !0,
            configurable: !0
          }), t
        }(),
        Rg = function () {
          function t(t, e) {
            var n = this;
            this.service = t, this.changeDetectorRef = e, this.maxSize = 7, this.pageChange = new pn, this.pages = [], this.changeSub = this.service.change.subscribe(function (t) {
              n.id === t && (n.updatePageLinks(), n.changeDetectorRef.markForCheck(), n.changeDetectorRef.detectChanges())
            })
          }
          return t.prototype.ngOnInit = function () {
            void 0 === this.id && (this.id = this.service.defaultId()), this.updatePageLinks()
          }, t.prototype.ngOnChanges = function (t) {
            this.updatePageLinks()
          }, t.prototype.ngOnDestroy = function () {
            this.changeSub.unsubscribe()
          }, t.prototype.previous = function () {
            this.checkValidId(), this.setCurrent(this.getCurrent() - 1)
          }, t.prototype.next = function () {
            this.checkValidId(), this.setCurrent(this.getCurrent() + 1)
          }, t.prototype.isFirstPage = function () {
            return 1 === this.getCurrent()
          }, t.prototype.isLastPage = function () {
            return this.getLastPage() === this.getCurrent()
          }, t.prototype.setCurrent = function (t) {
            this.pageChange.emit(t)
          }, t.prototype.getCurrent = function () {
            return this.service.getCurrentPage(this.id)
          }, t.prototype.getLastPage = function () {
            var t = this.service.getInstance(this.id);
            return t.totalItems < 1 ? 1 : Math.ceil(t.totalItems / t.itemsPerPage)
          }, t.prototype.getTotalItems = function () {
            return this.service.getInstance(this.id).totalItems
          }, t.prototype.checkValidId = function () {
            null == this.service.getInstance(this.id).id && console.warn('PaginationControlsDirective: the specified id "' + this.id + '" does not match any registered PaginationInstance')
          }, t.prototype.updatePageLinks = function () {
            var t = this,
              e = this.service.getInstance(this.id),
              n = this.outOfBoundCorrection(e);
            n !== e.currentPage ? setTimeout(function () {
              t.setCurrent(n), t.pages = t.createPageArray(e.currentPage, e.itemsPerPage, e.totalItems, t.maxSize)
            }) : this.pages = this.createPageArray(e.currentPage, e.itemsPerPage, e.totalItems, this.maxSize)
          }, t.prototype.outOfBoundCorrection = function (t) {
            var e = Math.ceil(t.totalItems / t.itemsPerPage);
            return e < t.currentPage && 0 < e ? e : t.currentPage < 1 ? 1 : t.currentPage
          }, t.prototype.createPageArray = function (t, e, n, r) {
            r = +r;
            for (var o = [], i = Math.ceil(n / e), a = Math.ceil(r / 2), s = t <= a, l = i - a < t, u = !s && !l, c = r < i, h = 1; h <= i && h <= r;) {
              var p = this.calculatePageNumber(h, t, r, i);
              o.push({
                label: c && (2 === h && (u || l) || h === r - 1 && (u || s)) ? "..." : p,
                value: p
              }), h++
            }
            return o
          }, t.prototype.calculatePageNumber = function (t, e, n, r) {
            var o = Math.ceil(n / 2);
            return t === n ? r : 1 === t ? t : n < r ? r - o < e ? r - n + t : o < e ? e - o + t : t : t
          }, t
        }(),
        Dg = function () {},
        Ng = po({
          encapsulation: 2,
          styles: ["\n.ngx-pagination {\n  margin-left: 0;\n  margin-bottom: 1rem; }\n  .ngx-pagination::before, .ngx-pagination::after {\n    content: ' ';\n    display: table; }\n  .ngx-pagination::after {\n    clear: both; }\n  .ngx-pagination li {\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    -ms-user-select: none;\n    margin-right: 0.0625rem;\n    border-radius: 0; }\n  .ngx-pagination li {\n    display: inline-block; }\n  .ngx-pagination a,\n  .ngx-pagination button {\n    color: #0a0a0a; \n    display: block;\n    padding: 0.1875rem 0.625rem;\n    border-radius: 0; }\n    .ngx-pagination a:hover,\n    .ngx-pagination button:hover {\n      background: #e6e6e6; }\n  .ngx-pagination .current {\n    padding: 0.1875rem 0.625rem;\n    background: #2199e8;\n    color: #fefefe;\n    cursor: default; }\n  .ngx-pagination .disabled {\n    padding: 0.1875rem 0.625rem;\n    color: #cacaca;\n    cursor: default; } \n    .ngx-pagination .disabled:hover {\n      background: transparent; }\n  .ngx-pagination a, .ngx-pagination button {\n    cursor: pointer; }\n\n.ngx-pagination .pagination-previous a::before,\n.ngx-pagination .pagination-previous.disabled::before { \n  content: '\xab';\n  display: inline-block;\n  margin-right: 0.5rem; }\n\n.ngx-pagination .pagination-next a::after,\n.ngx-pagination .pagination-next.disabled::after {\n  content: '\xbb';\n  display: inline-block;\n  margin-left: 0.5rem; }\n\n.ngx-pagination .show-for-sr {\n  position: absolute !important;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0); }\n.ngx-pagination .small-screen {\n  display: none; }\n@media screen and (max-width: 601px) {\n  .ngx-pagination.responsive .small-screen {\n    display: inline-block; } \n  .ngx-pagination.responsive li:not(.small-screen):not(.pagination-previous):not(.pagination-next) {\n    display: none; }\n}\n  "],
          data: {}
        });

      function Mg(t) {
        return la(0, [(t()(), Uo(0, 0, null, null, 3, "a", [
          ["tabindex", "0"]
        ], [
          [1, "aria-label", 0]
        ], [
          [null, "keyup.enter"],
          [null, "click"]
        ], function (t, e, n) {
          var r = !0;
          return "keyup.enter" === e && (r = !1 !== vi(t.parent.parent.parent, 1).previous() && r), "click" === e && (r = !1 !== vi(t.parent.parent.parent, 1).previous() && r), r
        }, null, null)), (t()(), ia(1, null, [" ", " "])), (t()(), Uo(2, 0, null, null, 1, "span", [
          ["class", "show-for-sr"]
        ], null, null, null, null, null)), (t()(), ia(3, null, ["", ""]))], null, function (t, e) {
          var n = e.component;
          t(e, 0, 0, n.previousLabel + " " + n.screenReaderPageLabel), t(e, 1, 0, n.previousLabel), t(e, 3, 0, n.screenReaderPageLabel)
        })
      }

      function jg(t) {
        return la(0, [(t()(), Uo(0, 0, null, null, 3, "span", [], null, null, null, null, null)), (t()(), ia(1, null, [" ", " "])), (t()(), Uo(2, 0, null, null, 1, "span", [
          ["class", "show-for-sr"]
        ], null, null, null, null, null)), (t()(), ia(3, null, ["", ""]))], null, function (t, e) {
          var n = e.component;
          t(e, 1, 0, n.previousLabel), t(e, 3, 0, n.screenReaderPageLabel)
        })
      }

      function Fg(t) {
        return la(0, [(t()(), Uo(0, 0, null, null, 4, "li", [
          ["class", "pagination-previous"]
        ], [
          [2, "disabled", null]
        ], null, null, null, null)), (t()(), zo(16777216, null, null, 1, null, Mg)), Ii(2, 16384, null, 0, Wu, [Qn, Gn], {
          ngIf: [0, "ngIf"]
        }, null), (t()(), zo(16777216, null, null, 1, null, jg)), Ii(4, 16384, null, 0, Wu, [Qn, Gn], {
          ngIf: [0, "ngIf"]
        }, null)], function (t, e) {
          t(e, 2, 0, 1 < vi(e.parent.parent, 1).getCurrent()), t(e, 4, 0, vi(e.parent.parent, 1).isFirstPage())
        }, function (t, e) {
          t(e, 0, 0, vi(e.parent.parent, 1).isFirstPage())
        })
      }

      function Vg(t) {
        return la(0, [(t()(), Uo(0, 0, null, null, 4, "a", [
          ["tabindex", "0"]
        ], null, [
          [null, "keyup.enter"],
          [null, "click"]
        ], function (t, e, n) {
          var r = !0;
          return "keyup.enter" === e && (r = !1 !== vi(t.parent.parent.parent, 1).setCurrent(t.parent.context.$implicit.value) && r), "click" === e && (r = !1 !== vi(t.parent.parent.parent, 1).setCurrent(t.parent.context.$implicit.value) && r), r
        }, null, null)), (t()(), Uo(1, 0, null, null, 1, "span", [
          ["class", "show-for-sr"]
        ], null, null, null, null, null)), (t()(), ia(2, null, ["", " "])), (t()(), Uo(3, 0, null, null, 1, "span", [], null, null, null, null, null)), (t()(), ia(4, null, ["", ""]))], null, function (t, e) {
          t(e, 2, 0, e.component.screenReaderPageLabel), t(e, 4, 0, e.parent.context.$implicit.label)
        })
      }

      function Lg(t) {
        return la(0, [(t()(), Uo(0, 0, null, null, 4, null, null, null, null, null, null, null)), (t()(), Uo(1, 0, null, null, 1, "span", [
          ["class", "show-for-sr"]
        ], null, null, null, null, null)), (t()(), ia(2, null, ["", " "])), (t()(), Uo(3, 0, null, null, 1, "span", [], null, null, null, null, null)), (t()(), ia(4, null, ["", ""]))], null, function (t, e) {
          t(e, 2, 0, e.component.screenReaderCurrentLabel), t(e, 4, 0, e.parent.context.$implicit.label)
        })
      }

      function Hg(t) {
        return la(0, [(t()(), Uo(0, 0, null, null, 4, "li", [], [
          [2, "current", null],
          [2, "ellipsis", null]
        ], null, null, null, null)), (t()(), zo(16777216, null, null, 1, null, Vg)), Ii(2, 16384, null, 0, Wu, [Qn, Gn], {
          ngIf: [0, "ngIf"]
        }, null), (t()(), zo(16777216, null, null, 1, null, Lg)), Ii(4, 16384, null, 0, Wu, [Qn, Gn], {
          ngIf: [0, "ngIf"]
        }, null)], function (t, e) {
          t(e, 2, 0, vi(e.parent.parent, 1).getCurrent() !== e.context.$implicit.value), t(e, 4, 0, vi(e.parent.parent, 1).getCurrent() === e.context.$implicit.value)
        }, function (t, e) {
          t(e, 0, 0, vi(e.parent.parent, 1).getCurrent() === e.context.$implicit.value, "..." === e.context.$implicit.label)
        })
      }

      function Bg(t) {
        return la(0, [(t()(), Uo(0, 0, null, null, 3, "a", [
          ["tabindex", "0"]
        ], [
          [1, "aria-label", 0]
        ], [
          [null, "keyup.enter"],
          [null, "click"]
        ], function (t, e, n) {
          var r = !0;
          return "keyup.enter" === e && (r = !1 !== vi(t.parent.parent.parent, 1).next() && r), "click" === e && (r = !1 !== vi(t.parent.parent.parent, 1).next() && r), r
        }, null, null)), (t()(), ia(1, null, [" ", " "])), (t()(), Uo(2, 0, null, null, 1, "span", [
          ["class", "show-for-sr"]
        ], null, null, null, null, null)), (t()(), ia(3, null, ["", ""]))], null, function (t, e) {
          var n = e.component;
          t(e, 0, 0, n.nextLabel + " " + n.screenReaderPageLabel), t(e, 1, 0, n.nextLabel), t(e, 3, 0, n.screenReaderPageLabel)
        })
      }

      function zg(t) {
        return la(0, [(t()(), Uo(0, 0, null, null, 3, "span", [], null, null, null, null, null)), (t()(), ia(1, null, [" ", " "])), (t()(), Uo(2, 0, null, null, 1, "span", [
          ["class", "show-for-sr"]
        ], null, null, null, null, null)), (t()(), ia(3, null, ["", ""]))], null, function (t, e) {
          var n = e.component;
          t(e, 1, 0, n.nextLabel), t(e, 3, 0, n.screenReaderPageLabel)
        })
      }

      function Ug(t) {
        return la(0, [(t()(), Uo(0, 0, null, null, 4, "li", [
          ["class", "pagination-next"]
        ], [
          [2, "disabled", null]
        ], null, null, null, null)), (t()(), zo(16777216, null, null, 1, null, Bg)), Ii(2, 16384, null, 0, Wu, [Qn, Gn], {
          ngIf: [0, "ngIf"]
        }, null), (t()(), zo(16777216, null, null, 1, null, zg)), Ii(4, 16384, null, 0, Wu, [Qn, Gn], {
          ngIf: [0, "ngIf"]
        }, null)], function (t, e) {
          t(e, 2, 0, !vi(e.parent.parent, 1).isLastPage()), t(e, 4, 0, vi(e.parent.parent, 1).isLastPage())
        }, function (t, e) {
          t(e, 0, 0, vi(e.parent.parent, 1).isLastPage())
        })
      }

      function qg(t) {
        return la(0, [(t()(), Uo(0, 0, null, null, 8, "ul", [
          ["class", "ngx-pagination"],
          ["role", "navigation"]
        ], [
          [1, "aria-label", 0],
          [2, "responsive", null]
        ], null, null, null, null)), (t()(), zo(16777216, null, null, 1, null, Fg)), Ii(2, 16384, null, 0, Wu, [Qn, Gn], {
          ngIf: [0, "ngIf"]
        }, null), (t()(), Uo(3, 0, null, null, 1, "li", [
          ["class", "small-screen"]
        ], null, null, null, null, null)), (t()(), ia(4, null, [" ", " / ", " "])), (t()(), zo(16777216, null, null, 1, null, Hg)), Ii(6, 278528, null, 0, Gu, [Qn, Gn, dr], {
          ngForOf: [0, "ngForOf"]
        }, null), (t()(), zo(16777216, null, null, 1, null, Ug)), Ii(8, 16384, null, 0, Wu, [Qn, Gn], {
          ngIf: [0, "ngIf"]
        }, null)], function (t, e) {
          var n = e.component;
          t(e, 2, 0, n.directionLinks), t(e, 6, 0, vi(e.parent, 1).pages), t(e, 8, 0, n.directionLinks)
        }, function (t, e) {
          var n = e.component;
          t(e, 0, 0, n.screenReaderPaginationLabel, n.responsive), t(e, 4, 0, vi(e.parent, 1).getCurrent(), vi(e.parent, 1).getLastPage())
        })
      }

      function Gg(t) {
        return la(2, [(t()(), Uo(0, 0, null, null, 3, "pagination-template", [], null, [
          [null, "pageChange"]
        ], function (t, e, n) {
          var r = !0;
          return "pageChange" === e && (r = !1 !== t.component.pageChange.emit(n) && r), r
        }, null, null)), Ii(1, 737280, [
          ["p", 4]
        ], 0, Rg, [Pg, Wn], {
          id: [0, "id"],
          maxSize: [1, "maxSize"]
        }, {
          pageChange: "pageChange"
        }), (t()(), zo(16777216, null, null, 1, null, qg)), Ii(3, 16384, null, 0, Wu, [Qn, Gn], {
          ngIf: [0, "ngIf"]
        }, null)], function (t, e) {
          var n = e.component;
          t(e, 1, 0, n.id, n.maxSize), t(e, 3, 0, !(n.autoHide && vi(e, 1).pages.length <= 1))
        }, null)
      }
      var Qg = function (t) {
          function e(e, n) {
            var r = t.call(this, e) || this;
            r.sources = n, r.completed = 0, r.haveValues = 0;
            var o = n.length;
            r.values = new Array(o);
            for (var i = 0; i < o; i++) {
              var a = Q(r, n[i], null, i);
              a && r.add(a)
            }
            return r
          }
          return o(e, t), e.prototype.notifyNext = function (t, e, n, r, o) {
            this.values[n] = e, o._hasValue || (o._hasValue = !0, this.haveValues++)
          }, e.prototype.notifyComplete = function (t) {
            var e = this.destination,
              n = this.haveValues,
              r = this.values,
              o = r.length;
            t._hasValue ? (this.completed++, this.completed === o && (n === o && e.next(r), e.complete())) : e.complete()
          }, e
        }(W),
        Wg = function () {
          function t() {}
          return Object.defineProperty(t.prototype, "value", {
            get: function () {
              return this.control ? this.control.value : null
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(t.prototype, "valid", {
            get: function () {
              return this.control ? this.control.valid : null
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(t.prototype, "invalid", {
            get: function () {
              return this.control ? this.control.invalid : null
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(t.prototype, "pending", {
            get: function () {
              return this.control ? this.control.pending : null
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(t.prototype, "disabled", {
            get: function () {
              return this.control ? this.control.disabled : null
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(t.prototype, "enabled", {
            get: function () {
              return this.control ? this.control.enabled : null
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(t.prototype, "errors", {
            get: function () {
              return this.control ? this.control.errors : null
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(t.prototype, "pristine", {
            get: function () {
              return this.control ? this.control.pristine : null
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(t.prototype, "dirty", {
            get: function () {
              return this.control ? this.control.dirty : null
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(t.prototype, "touched", {
            get: function () {
              return this.control ? this.control.touched : null
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(t.prototype, "status", {
            get: function () {
              return this.control ? this.control.status : null
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(t.prototype, "untouched", {
            get: function () {
              return this.control ? this.control.untouched : null
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(t.prototype, "statusChanges", {
            get: function () {
              return this.control ? this.control.statusChanges : null
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(t.prototype, "valueChanges", {
            get: function () {
              return this.control ? this.control.valueChanges : null
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(t.prototype, "path", {
            get: function () {
              return null
            },
            enumerable: !0,
            configurable: !0
          }), t.prototype.reset = function (t) {
            void 0 === t && (t = void 0), this.control && this.control.reset(t)
          }, t.prototype.hasError = function (t, e) {
            return !!this.control && this.control.hasError(t, e)
          }, t.prototype.getError = function (t, e) {
            return this.control ? this.control.getError(t, e) : null
          }, t
        }(),
        Zg = function (t) {
          function e() {
            return null !== t && t.apply(this, arguments) || this
          }
          return o(e, t), Object.defineProperty(e.prototype, "formDirective", {
            get: function () {
              return null
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(e.prototype, "path", {
            get: function () {
              return null
            },
            enumerable: !0,
            configurable: !0
          }), e
        }(Wg);

      function Kg(t) {
        return null == t || 0 === t.length
      }
      var $g = new bt("NgValidators"),
        Yg = new bt("NgAsyncValidators"),
        Xg = /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/,
        Jg = function () {
          function t() {}
          return t.min = function (t) {
            return function (e) {
              if (Kg(e.value) || Kg(t)) return null;
              var n = parseFloat(e.value);
              return !isNaN(n) && n < t ? {
                min: {
                  min: t,
                  actual: e.value
                }
              } : null
            }
          }, t.max = function (t) {
            return function (e) {
              if (Kg(e.value) || Kg(t)) return null;
              var n = parseFloat(e.value);
              return !isNaN(n) && n > t ? {
                max: {
                  max: t,
                  actual: e.value
                }
              } : null
            }
          }, t.required = function (t) {
            return Kg(t.value) ? {
              required: !0
            } : null
          }, t.requiredTrue = function (t) {
            return !0 === t.value ? null : {
              required: !0
            }
          }, t.email = function (t) {
            return Kg(t.value) ? null : Xg.test(t.value) ? null : {
              email: !0
            }
          }, t.minLength = function (t) {
            return function (e) {
              if (Kg(e.value)) return null;
              var n = e.value ? e.value.length : 0;
              return n < t ? {
                minlength: {
                  requiredLength: t,
                  actualLength: n
                }
              } : null
            }
          }, t.maxLength = function (t) {
            return function (e) {
              var n = e.value ? e.value.length : 0;
              return n > t ? {
                maxlength: {
                  requiredLength: t,
                  actualLength: n
                }
              } : null
            }
          }, t.pattern = function (e) {
            return e ? ("string" == typeof e ? (r = "", "^" !== e.charAt(0) && (r += "^"), r += e, "$" !== e.charAt(e.length - 1) && (r += "$"), n = new RegExp(r)) : (r = e.toString(), n = e), function (t) {
              if (Kg(t.value)) return null;
              var e = t.value;
              return n.test(e) ? null : {
                pattern: {
                  requiredPattern: r,
                  actualValue: e
                }
              }
            }) : t.nullValidator;
            var n, r
          }, t.nullValidator = function (t) {
            return null
          }, t.compose = function (t) {
            if (!t) return null;
            var e = t.filter(tv);
            return 0 == e.length ? null : function (t) {
              return nv(function (t, n) {
                return e.map(function (e) {
                  return e(t)
                })
              }(t))
            }
          }, t.composeAsync = function (t) {
            if (!t) return null;
            var e = t.filter(tv);
            return 0 == e.length ? null : function (t) {
              return function t() {
                for (var e, n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
                return "function" == typeof n[n.length - 1] && (e = n.pop()), 1 === n.length && g(n[0]) && (n = n[0]), 0 === n.length ? Mp : e ? t(n).pipe(Z(function (t) {
                  return e.apply(void 0, t)
                })) : new N(function (t) {
                  return new Qg(t, n)
                })
              }(function (t, n) {
                return e.map(function (e) {
                  return e(t)
                })
              }(t).map(ev)).pipe(Z(nv))
            }
          }, t
        }();

      function tv(t) {
        return null != t
      }

      function ev(t) {
        var e = Me(t) ? J(t) : t;
        if (!je(e)) throw new Error("Expected validator to return Promise or Observable.");
        return e
      }

      function nv(t) {
        var e = t.reduce(function (t, e) {
          return null != e ? i({}, t, e) : t
        }, {});
        return 0 === Object.keys(e).length ? null : e
      }
      var rv = new bt("NgValueAccessor"),
        ov = function () {
          function t(t, e) {
            this._renderer = t, this._elementRef = e, this.onChange = function (t) {}, this.onTouched = function () {}
          }
          return t.prototype.writeValue = function (t) {
            this._renderer.setProperty(this._elementRef.nativeElement, "checked", t)
          }, t.prototype.registerOnChange = function (t) {
            this.onChange = t
          }, t.prototype.registerOnTouched = function (t) {
            this.onTouched = t
          }, t.prototype.setDisabledState = function (t) {
            this._renderer.setProperty(this._elementRef.nativeElement, "disabled", t)
          }, t
        }(),
        iv = new bt("CompositionEventMode"),
        av = function () {
          function t(t, e, n) {
            var r;
            this._renderer = t, this._elementRef = e, this._compositionMode = n, this.onChange = function (t) {}, this.onTouched = function () {}, this._composing = !1, null == this._compositionMode && (this._compositionMode = (r = fc() ? fc().getUserAgent() : "", !/android (\d+)/.test(r.toLowerCase())))
          }
          return t.prototype.writeValue = function (t) {
            this._renderer.setProperty(this._elementRef.nativeElement, "value", null == t ? "" : t)
          }, t.prototype.registerOnChange = function (t) {
            this.onChange = t
          }, t.prototype.registerOnTouched = function (t) {
            this.onTouched = t
          }, t.prototype.setDisabledState = function (t) {
            this._renderer.setProperty(this._elementRef.nativeElement, "disabled", t)
          }, t.prototype._handleInput = function (t) {
            (!this._compositionMode || this._compositionMode && !this._composing) && this.onChange(t)
          }, t.prototype._compositionStart = function () {
            this._composing = !0
          }, t.prototype._compositionEnd = function (t) {
            this._composing = !1, this._compositionMode && this.onChange(t)
          }, a([s(2, zt()), s(2, Bt(iv))], t)
        }();

      function sv(t) {
        return t.validate ? function (e) {
          return t.validate(e)
        } : t
      }

      function lv(t) {
        return t.validate ? function (e) {
          return t.validate(e)
        } : t
      }
      var uv = function () {
        function t(t, e) {
          this._renderer = t, this._elementRef = e, this.onChange = function (t) {}, this.onTouched = function () {}
        }
        return t.prototype.writeValue = function (t) {
          this._renderer.setProperty(this._elementRef.nativeElement, "value", null == t ? "" : t)
        }, t.prototype.registerOnChange = function (t) {
          this.onChange = function (e) {
            t("" == e ? null : parseFloat(e))
          }
        }, t.prototype.registerOnTouched = function (t) {
          this.onTouched = t
        }, t.prototype.setDisabledState = function (t) {
          this._renderer.setProperty(this._elementRef.nativeElement, "disabled", t)
        }, t
      }();

      function cv() {
        throw new Error("unimplemented")
      }
      var hv = function (t) {
          function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e._parent = null, e.name = null, e.valueAccessor = null, e._rawValidators = [], e._rawAsyncValidators = [], e
          }
          return o(e, t), Object.defineProperty(e.prototype, "validator", {
            get: function () {
              return cv()
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(e.prototype, "asyncValidator", {
            get: function () {
              return cv()
            },
            enumerable: !0,
            configurable: !0
          }), e
        }(Wg),
        pv = function () {
          function t() {
            this._accessors = []
          }
          return t.prototype.add = function (t, e) {
            this._accessors.push([t, e])
          }, t.prototype.remove = function (t) {
            for (var e = this._accessors.length - 1; e >= 0; --e)
              if (this._accessors[e][1] === t) return void this._accessors.splice(e, 1)
          }, t.prototype.select = function (t) {
            var e = this;
            this._accessors.forEach(function (n) {
              e._isSameGroup(n, t) && n[1] !== t && n[1].fireUncheck(t.value)
            })
          }, t.prototype._isSameGroup = function (t, e) {
            return !!t[0].control && t[0]._parent === e._control._parent && t[1].name === e.name
          }, t
        }(),
        fv = function () {
          function t(t, e, n, r) {
            this._renderer = t, this._elementRef = e, this._registry = n, this._injector = r, this.onChange = function () {}, this.onTouched = function () {}
          }
          return t.prototype.ngOnInit = function () {
            this._control = this._injector.get(hv), this._checkName(), this._registry.add(this._control, this)
          }, t.prototype.ngOnDestroy = function () {
            this._registry.remove(this)
          }, t.prototype.writeValue = function (t) {
            this._state = t === this.value, this._renderer.setProperty(this._elementRef.nativeElement, "checked", this._state)
          }, t.prototype.registerOnChange = function (t) {
            var e = this;
            this._fn = t, this.onChange = function () {
              t(e.value), e._registry.select(e)
            }
          }, t.prototype.fireUncheck = function (t) {
            this.writeValue(t)
          }, t.prototype.registerOnTouched = function (t) {
            this.onTouched = t
          }, t.prototype.setDisabledState = function (t) {
            this._renderer.setProperty(this._elementRef.nativeElement, "disabled", t)
          }, t.prototype._checkName = function () {
            this.name && this.formControlName && this.name !== this.formControlName && this._throwNameError(), !this.name && this.formControlName && (this.name = this.formControlName)
          }, t.prototype._throwNameError = function () {
            throw new Error('\n      If you define both a name and a formControlName attribute on your radio button, their values\n      must match. Ex: <input type="radio" formControlName="food" name="food">\n    ')
          }, t
        }(),
        dv = function () {
          function t(t, e) {
            this._renderer = t, this._elementRef = e, this.onChange = function (t) {}, this.onTouched = function () {}
          }
          return t.prototype.writeValue = function (t) {
            this._renderer.setProperty(this._elementRef.nativeElement, "value", parseFloat(t))
          }, t.prototype.registerOnChange = function (t) {
            this.onChange = function (e) {
              t("" == e ? null : parseFloat(e))
            }
          }, t.prototype.registerOnTouched = function (t) {
            this.onTouched = t
          }, t.prototype.setDisabledState = function (t) {
            this._renderer.setProperty(this._elementRef.nativeElement, "disabled", t)
          }, t
        }(),
        mv = '\n    <div [formGroup]="myGroup">\n      <input formControlName="firstName">\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       firstName: new FormControl()\n    });',
        yv = '\n    <div [formGroup]="myGroup">\n       <div formGroupName="person">\n          <input formControlName="firstName">\n       </div>\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       person: new FormGroup({ firstName: new FormControl() })\n    });',
        gv = '\n    <form>\n       <div ngModelGroup="person">\n          <input [(ngModel)]="person.name" name="firstName">\n       </div>\n    </form>',
        vv = function () {
          function t() {}
          return t.controlParentException = function () {
            throw new Error("formControlName must be used with a parent formGroup directive.  You'll want to add a formGroup\n       directive and pass it an existing FormGroup instance (you can create one in your class).\n\n      Example:\n\n      " + mv)
          }, t.ngModelGroupException = function () {
            throw new Error('formControlName cannot be used with an ngModelGroup parent. It is only compatible with parents\n       that also have a "form" prefix: formGroupName, formArrayName, or formGroup.\n\n       Option 1:  Update the parent to be formGroupName (reactive form strategy)\n\n        ' + yv + "\n\n        Option 2: Use ngModel instead of formControlName (template-driven strategy)\n\n        " + gv)
          }, t.missingFormException = function () {
            throw new Error("formGroup expects a FormGroup instance. Please pass one in.\n\n       Example:\n\n       " + mv)
          }, t.groupParentException = function () {
            throw new Error("formGroupName must be used with a parent formGroup directive.  You'll want to add a formGroup\n      directive and pass it an existing FormGroup instance (you can create one in your class).\n\n      Example:\n\n      " + yv)
          }, t.arrayParentException = function () {
            throw new Error('formArrayName must be used with a parent formGroup directive.  You\'ll want to add a formGroup\n       directive and pass it an existing FormGroup instance (you can create one in your class).\n\n        Example:\n\n        \n    <div [formGroup]="myGroup">\n      <div formArrayName="cities">\n        <div *ngFor="let city of cityArray.controls; index as i">\n          <input [formControlName]="i">\n        </div>\n      </div>\n    </div>\n\n    In your class:\n\n    this.cityArray = new FormArray([new FormControl(\'SF\')]);\n    this.myGroup = new FormGroup({\n      cities: this.cityArray\n    });')
          }, t.disabledAttrWarning = function () {
            console.warn("\n      It looks like you're using the disabled attribute with a reactive form directive. If you set disabled to true\n      when you set up this control in your component class, the disabled attribute will actually be set in the DOM for\n      you. We recommend using this approach to avoid 'changed after checked' errors.\n       \n      Example: \n      form = new FormGroup({\n        first: new FormControl({value: 'Nancy', disabled: true}, Validators.required),\n        last: new FormControl('Drew', Validators.required)\n      });\n    ")
          }, t.ngModelWarning = function (t) {
            console.warn("\n    It looks like you're using ngModel on the same form field as " + t + ". \n    Support for using the ngModel input property and ngModelChange event with \n    reactive form directives has been deprecated in Angular v6 and will be removed \n    in Angular v7.\n    \n    For more information on this, see our API docs here:\n    https://angular.io/api/forms/" + ("formControl" === t ? "FormControlDirective" : "FormControlName") + "#use-with-ngmodel\n    ")
          }, t
        }();

      function _v(t, e) {
        return h(e.path, [t])
      }

      function bv(t, e) {
        t || Sv(e, "Cannot find control with"), e.valueAccessor || Sv(e, "No value accessor for form control with"), t.validator = Jg.compose([t.validator, e.validator]), t.asyncValidator = Jg.composeAsync([t.asyncValidator, e.asyncValidator]), e.valueAccessor.writeValue(t.value),
          function (t, e) {
            e.valueAccessor.registerOnChange(function (n) {
              t._pendingValue = n, t._pendingChange = !0, t._pendingDirty = !0, "change" === t.updateOn && wv(t, e)
            })
          }(t, e),
          function (t, e) {
            t.registerOnChange(function (t, n) {
              e.valueAccessor.writeValue(t), n && e.viewToModelUpdate(t)
            })
          }(t, e),
          function (t, e) {
            e.valueAccessor.registerOnTouched(function () {
              t._pendingTouched = !0, "blur" === t.updateOn && t._pendingChange && wv(t, e), "submit" !== t.updateOn && t.markAsTouched()
            })
          }(t, e), e.valueAccessor.setDisabledState && t.registerOnDisabledChange(function (t) {
            e.valueAccessor.setDisabledState(t)
          }), e._rawValidators.forEach(function (e) {
            e.registerOnValidatorChange && e.registerOnValidatorChange(function () {
              return t.updateValueAndValidity()
            })
          }), e._rawAsyncValidators.forEach(function (e) {
            e.registerOnValidatorChange && e.registerOnValidatorChange(function () {
              return t.updateValueAndValidity()
            })
          })
      }

      function wv(t, e) {
        t._pendingDirty && t.markAsDirty(), t.setValue(t._pendingValue, {
          emitModelToViewChange: !1
        }), e.viewToModelUpdate(t._pendingValue), t._pendingChange = !1
      }

      function Cv(t, e) {
        null == t && Sv(e, "Cannot find control with"), t.validator = Jg.compose([t.validator, e.validator]), t.asyncValidator = Jg.composeAsync([t.asyncValidator, e.asyncValidator])
      }

      function Ev(t) {
        return Sv(t, "There is no FormControl instance attached to form control element with")
      }

      function Sv(t, e) {
        var n;
        throw n = t.path.length > 1 ? "path: '" + t.path.join(" -> ") + "'" : t.path[0] ? "name: '" + t.path + "'" : "unspecified name attribute", new Error(e + " " + n)
      }

      function xv(t) {
        return null != t ? Jg.compose(t.map(sv)) : null
      }

      function kv(t) {
        return null != t ? Jg.composeAsync(t.map(lv)) : null
      }
      var Pv = [ov, dv, uv, function () {
        function t(t, e) {
          this._renderer = t, this._elementRef = e, this._optionMap = new Map, this._idCounter = 0, this.onChange = function (t) {}, this.onTouched = function () {}, this._compareWith = Ft
        }
        return Object.defineProperty(t.prototype, "compareWith", {
          set: function (t) {
            if ("function" != typeof t) throw new Error("compareWith must be a function, but received " + JSON.stringify(t));
            this._compareWith = t
          },
          enumerable: !0,
          configurable: !0
        }), t.prototype.writeValue = function (t) {
          this.value = t;
          var e = this._getOptionId(t);
          null == e && this._renderer.setProperty(this._elementRef.nativeElement, "selectedIndex", -1);
          var n = function (t, e) {
            return null == t ? "" + e : (e && "object" == typeof e && (e = "Object"), (t + ": " + e).slice(0, 50))
          }(e, t);
          this._renderer.setProperty(this._elementRef.nativeElement, "value", n)
        }, t.prototype.registerOnChange = function (t) {
          var e = this;
          this.onChange = function (n) {
            e.value = e._getOptionValue(n), t(e.value)
          }
        }, t.prototype.registerOnTouched = function (t) {
          this.onTouched = t
        }, t.prototype.setDisabledState = function (t) {
          this._renderer.setProperty(this._elementRef.nativeElement, "disabled", t)
        }, t.prototype._registerOption = function () {
          return (this._idCounter++).toString()
        }, t.prototype._getOptionId = function (t) {
          var e, n;
          try {
            for (var r = u(Array.from(this._optionMap.keys())), o = r.next(); !o.done; o = r.next()) {
              var i = o.value;
              if (this._compareWith(this._optionMap.get(i), t)) return i
            }
          } catch (t) {
            e = {
              error: t
            }
          } finally {
            try {
              o && !o.done && (n = r.return) && n.call(r)
            } finally {
              if (e) throw e.error
            }
          }
          return null
        }, t.prototype._getOptionValue = function (t) {
          var e = function (t) {
            return t.split(":")[0]
          }(t);
          return this._optionMap.has(e) ? this._optionMap.get(e) : t
        }, t
      }(), function () {
        function t(t, e) {
          this._renderer = t, this._elementRef = e, this._optionMap = new Map, this._idCounter = 0, this.onChange = function (t) {}, this.onTouched = function () {}, this._compareWith = Ft
        }
        return Object.defineProperty(t.prototype, "compareWith", {
          set: function (t) {
            if ("function" != typeof t) throw new Error("compareWith must be a function, but received " + JSON.stringify(t));
            this._compareWith = t
          },
          enumerable: !0,
          configurable: !0
        }), t.prototype.writeValue = function (t) {
          var e, n = this;
          if (this.value = t, Array.isArray(t)) {
            var r = t.map(function (t) {
              return n._getOptionId(t)
            });
            e = function (t, e) {
              t._setSelected(r.indexOf(e.toString()) > -1)
            }
          } else e = function (t, e) {
            t._setSelected(!1)
          };
          this._optionMap.forEach(e)
        }, t.prototype.registerOnChange = function (t) {
          var e = this;
          this.onChange = function (n) {
            var r = [];
            if (n.hasOwnProperty("selectedOptions"))
              for (var o = n.selectedOptions, i = 0; i < o.length; i++) {
                var a = o.item(i),
                  s = e._getOptionValue(a.value);
                r.push(s)
              } else
                for (o = n.options, i = 0; i < o.length; i++)(a = o.item(i)).selected && (s = e._getOptionValue(a.value), r.push(s));
            e.value = r, t(r)
          }
        }, t.prototype.registerOnTouched = function (t) {
          this.onTouched = t
        }, t.prototype.setDisabledState = function (t) {
          this._renderer.setProperty(this._elementRef.nativeElement, "disabled", t)
        }, t.prototype._registerOption = function (t) {
          var e = (this._idCounter++).toString();
          return this._optionMap.set(e, t), e
        }, t.prototype._getOptionId = function (t) {
          var e, n;
          try {
            for (var r = u(Array.from(this._optionMap.keys())), o = r.next(); !o.done; o = r.next()) {
              var i = o.value;
              if (this._compareWith(this._optionMap.get(i)._value, t)) return i
            }
          } catch (t) {
            e = {
              error: t
            }
          } finally {
            try {
              o && !o.done && (n = r.return) && n.call(r)
            } finally {
              if (e) throw e.error
            }
          }
          return null
        }, t.prototype._getOptionValue = function (t) {
          var e = function (t) {
            return t.split(":")[0]
          }(t);
          return this._optionMap.has(e) ? this._optionMap.get(e)._value : t
        }, t
      }(), fv];

      function Tv(t, e) {
        t._syncPendingControls(), e.forEach(function (t) {
          var e = t.control;
          "submit" === e.updateOn && e._pendingChange && (t.viewToModelUpdate(e._pendingValue), e._pendingChange = !1)
        })
      }

      function Ov(t, e) {
        var n = t.indexOf(e);
        n > -1 && t.splice(n, 1)
      }
      var Av = function (t) {
          function e() {
            return null !== t && t.apply(this, arguments) || this
          }
          return o(e, t), e.prototype.ngOnInit = function () {
            this._checkParentType(), this.formDirective.addFormGroup(this)
          }, e.prototype.ngOnDestroy = function () {
            this.formDirective && this.formDirective.removeFormGroup(this)
          }, Object.defineProperty(e.prototype, "control", {
            get: function () {
              return this.formDirective.getFormGroup(this)
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(e.prototype, "path", {
            get: function () {
              return _v(this.name, this._parent)
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(e.prototype, "formDirective", {
            get: function () {
              return this._parent ? this._parent.formDirective : null
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(e.prototype, "validator", {
            get: function () {
              return xv(this._validators)
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(e.prototype, "asyncValidator", {
            get: function () {
              return kv(this._asyncValidators)
            },
            enumerable: !0,
            configurable: !0
          }), e.prototype._checkParentType = function () {}, e
        }(Zg),
        Iv = function () {
          function t(t) {
            this._cd = t
          }
          return Object.defineProperty(t.prototype, "ngClassUntouched", {
            get: function () {
              return !!this._cd.control && this._cd.control.untouched
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(t.prototype, "ngClassTouched", {
            get: function () {
              return !!this._cd.control && this._cd.control.touched
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(t.prototype, "ngClassPristine", {
            get: function () {
              return !!this._cd.control && this._cd.control.pristine
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(t.prototype, "ngClassDirty", {
            get: function () {
              return !!this._cd.control && this._cd.control.dirty
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(t.prototype, "ngClassValid", {
            get: function () {
              return !!this._cd.control && this._cd.control.valid
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(t.prototype, "ngClassInvalid", {
            get: function () {
              return !!this._cd.control && this._cd.control.invalid
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(t.prototype, "ngClassPending", {
            get: function () {
              return !!this._cd.control && this._cd.control.pending
            },
            enumerable: !0,
            configurable: !0
          }), t
        }(),
        Rv = function (t) {
          function e(e) {
            return t.call(this, e) || this
          }
          return o(e, t), a([s(0, Ut())], e)
        }(Iv),
        Dv = function (t) {
          function e(e) {
            return t.call(this, e) || this
          }
          return o(e, t), a([s(0, Ut())], e)
        }(Iv);

      function Nv(t) {
        var e = jv(t) ? t.validators : t;
        return Array.isArray(e) ? xv(e) : e || null
      }

      function Mv(t, e) {
        var n = jv(e) ? e.asyncValidators : t;
        return Array.isArray(n) ? kv(n) : n || null
      }

      function jv(t) {
        return null != t && !Array.isArray(t) && "object" == typeof t
      }
      var Fv = function () {
          function t(t, e) {
            this.validator = t, this.asyncValidator = e, this._onCollectionChange = function () {}, this.pristine = !0, this.touched = !1, this._onDisabledChange = []
          }
          return Object.defineProperty(t.prototype, "parent", {
            get: function () {
              return this._parent
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(t.prototype, "valid", {
            get: function () {
              return "VALID" === this.status
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(t.prototype, "invalid", {
            get: function () {
              return "INVALID" === this.status
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(t.prototype, "pending", {
            get: function () {
              return "PENDING" == this.status
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(t.prototype, "disabled", {
            get: function () {
              return "DISABLED" === this.status
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(t.prototype, "enabled", {
            get: function () {
              return "DISABLED" !== this.status
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(t.prototype, "dirty", {
            get: function () {
              return !this.pristine
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(t.prototype, "untouched", {
            get: function () {
              return !this.touched
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(t.prototype, "updateOn", {
            get: function () {
              return this._updateOn ? this._updateOn : this.parent ? this.parent.updateOn : "change"
            },
            enumerable: !0,
            configurable: !0
          }), t.prototype.setValidators = function (t) {
            this.validator = Nv(t)
          }, t.prototype.setAsyncValidators = function (t) {
            this.asyncValidator = Mv(t)
          }, t.prototype.clearValidators = function () {
            this.validator = null
          }, t.prototype.clearAsyncValidators = function () {
            this.asyncValidator = null
          }, t.prototype.markAsTouched = function (t) {
            void 0 === t && (t = {}), this.touched = !0, this._parent && !t.onlySelf && this._parent.markAsTouched(t)
          }, t.prototype.markAsUntouched = function (t) {
            void 0 === t && (t = {}), this.touched = !1, this._pendingTouched = !1, this._forEachChild(function (t) {
              t.markAsUntouched({
                onlySelf: !0
              })
            }), this._parent && !t.onlySelf && this._parent._updateTouched(t)
          }, t.prototype.markAsDirty = function (t) {
            void 0 === t && (t = {}), this.pristine = !1, this._parent && !t.onlySelf && this._parent.markAsDirty(t)
          }, t.prototype.markAsPristine = function (t) {
            void 0 === t && (t = {}), this.pristine = !0, this._pendingDirty = !1, this._forEachChild(function (t) {
              t.markAsPristine({
                onlySelf: !0
              })
            }), this._parent && !t.onlySelf && this._parent._updatePristine(t)
          }, t.prototype.markAsPending = function (t) {
            void 0 === t && (t = {}), this.status = "PENDING", !1 !== t.emitEvent && this.statusChanges.emit(this.status), this._parent && !t.onlySelf && this._parent.markAsPending(t)
          }, t.prototype.disable = function (t) {
            void 0 === t && (t = {}), this.status = "DISABLED", this.errors = null, this._forEachChild(function (e) {
              e.disable(i({}, t, {
                onlySelf: !0
              }))
            }), this._updateValue(), !1 !== t.emitEvent && (this.valueChanges.emit(this.value), this.statusChanges.emit(this.status)), this._updateAncestors(t), this._onDisabledChange.forEach(function (t) {
              return t(!0)
            })
          }, t.prototype.enable = function (t) {
            void 0 === t && (t = {}), this.status = "VALID", this._forEachChild(function (e) {
              e.enable(i({}, t, {
                onlySelf: !0
              }))
            }), this.updateValueAndValidity({
              onlySelf: !0,
              emitEvent: t.emitEvent
            }), this._updateAncestors(t), this._onDisabledChange.forEach(function (t) {
              return t(!1)
            })
          }, t.prototype._updateAncestors = function (t) {
            this._parent && !t.onlySelf && (this._parent.updateValueAndValidity(t), this._parent._updatePristine(), this._parent._updateTouched())
          }, t.prototype.setParent = function (t) {
            this._parent = t
          }, t.prototype.updateValueAndValidity = function (t) {
            void 0 === t && (t = {}), this._setInitialStatus(), this._updateValue(), this.enabled && (this._cancelExistingSubscription(), this.errors = this._runValidator(), this.status = this._calculateStatus(), "VALID" !== this.status && "PENDING" !== this.status || this._runAsyncValidator(t.emitEvent)), !1 !== t.emitEvent && (this.valueChanges.emit(this.value), this.statusChanges.emit(this.status)), this._parent && !t.onlySelf && this._parent.updateValueAndValidity(t)
          }, t.prototype._updateTreeValidity = function (t) {
            void 0 === t && (t = {
              emitEvent: !0
            }), this._forEachChild(function (e) {
              return e._updateTreeValidity(t)
            }), this.updateValueAndValidity({
              onlySelf: !0,
              emitEvent: t.emitEvent
            })
          }, t.prototype._setInitialStatus = function () {
            this.status = this._allControlsDisabled() ? "DISABLED" : "VALID"
          }, t.prototype._runValidator = function () {
            return this.validator ? this.validator(this) : null
          }, t.prototype._runAsyncValidator = function (t) {
            var e = this;
            if (this.asyncValidator) {
              this.status = "PENDING";
              var n = ev(this.asyncValidator(this));
              this._asyncValidationSubscription = n.subscribe(function (n) {
                return e.setErrors(n, {
                  emitEvent: t
                })
              })
            }
          }, t.prototype._cancelExistingSubscription = function () {
            this._asyncValidationSubscription && this._asyncValidationSubscription.unsubscribe()
          }, t.prototype.setErrors = function (t, e) {
            void 0 === e && (e = {}), this.errors = t, this._updateControlsErrors(!1 !== e.emitEvent)
          }, t.prototype.get = function (t) {
            return function (t, e, n) {
              return null == e ? null : (e instanceof Array || (e = e.split(".")), e instanceof Array && 0 === e.length ? null : e.reduce(function (t, e) {
                return t instanceof Lv ? t.controls.hasOwnProperty(e) ? t.controls[e] : null : t instanceof Hv && t.at(e) || null
              }, t))
            }(this, t)
          }, t.prototype.getError = function (t, e) {
            var n = e ? this.get(e) : this;
            return n && n.errors ? n.errors[t] : null
          }, t.prototype.hasError = function (t, e) {
            return !!this.getError(t, e)
          }, Object.defineProperty(t.prototype, "root", {
            get: function () {
              for (var t = this; t._parent;) t = t._parent;
              return t
            },
            enumerable: !0,
            configurable: !0
          }), t.prototype._updateControlsErrors = function (t) {
            this.status = this._calculateStatus(), t && this.statusChanges.emit(this.status), this._parent && this._parent._updateControlsErrors(t)
          }, t.prototype._initObservables = function () {
            this.valueChanges = new pn, this.statusChanges = new pn
          }, t.prototype._calculateStatus = function () {
            return this._allControlsDisabled() ? "DISABLED" : this.errors ? "INVALID" : this._anyControlsHaveStatus("PENDING") ? "PENDING" : this._anyControlsHaveStatus("INVALID") ? "INVALID" : "VALID"
          }, t.prototype._anyControlsHaveStatus = function (t) {
            return this._anyControls(function (e) {
              return e.status === t
            })
          }, t.prototype._anyControlsDirty = function () {
            return this._anyControls(function (t) {
              return t.dirty
            })
          }, t.prototype._anyControlsTouched = function () {
            return this._anyControls(function (t) {
              return t.touched
            })
          }, t.prototype._updatePristine = function (t) {
            void 0 === t && (t = {}), this.pristine = !this._anyControlsDirty(), this._parent && !t.onlySelf && this._parent._updatePristine(t)
          }, t.prototype._updateTouched = function (t) {
            void 0 === t && (t = {}), this.touched = this._anyControlsTouched(), this._parent && !t.onlySelf && this._parent._updateTouched(t)
          }, t.prototype._isBoxedValue = function (t) {
            return "object" == typeof t && null !== t && 2 === Object.keys(t).length && "value" in t && "disabled" in t
          }, t.prototype._registerOnCollectionChange = function (t) {
            this._onCollectionChange = t
          }, t.prototype._setUpdateStrategy = function (t) {
            jv(t) && null != t.updateOn && (this._updateOn = t.updateOn)
          }, t
        }(),
        Vv = function (t) {
          function e(e, n, r) {
            void 0 === e && (e = null);
            var o = t.call(this, Nv(n), Mv(r, n)) || this;
            return o._onChange = [], o._applyFormState(e), o._setUpdateStrategy(n), o.updateValueAndValidity({
              onlySelf: !0,
              emitEvent: !1
            }), o._initObservables(), o
          }
          return o(e, t), e.prototype.setValue = function (t, e) {
            var n = this;
            void 0 === e && (e = {}), this.value = this._pendingValue = t, this._onChange.length && !1 !== e.emitModelToViewChange && this._onChange.forEach(function (t) {
              return t(n.value, !1 !== e.emitViewToModelChange)
            }), this.updateValueAndValidity(e)
          }, e.prototype.patchValue = function (t, e) {
            void 0 === e && (e = {}), this.setValue(t, e)
          }, e.prototype.reset = function (t, e) {
            void 0 === t && (t = null), void 0 === e && (e = {}), this._applyFormState(t), this.markAsPristine(e), this.markAsUntouched(e), this.setValue(this.value, e), this._pendingChange = !1
          }, e.prototype._updateValue = function () {}, e.prototype._anyControls = function (t) {
            return !1
          }, e.prototype._allControlsDisabled = function () {
            return this.disabled
          }, e.prototype.registerOnChange = function (t) {
            this._onChange.push(t)
          }, e.prototype._clearChangeFns = function () {
            this._onChange = [], this._onDisabledChange = [], this._onCollectionChange = function () {}
          }, e.prototype.registerOnDisabledChange = function (t) {
            this._onDisabledChange.push(t)
          }, e.prototype._forEachChild = function (t) {}, e.prototype._syncPendingControls = function () {
            return !("submit" !== this.updateOn || (this._pendingDirty && this.markAsDirty(), this._pendingTouched && this.markAsTouched(), !this._pendingChange) || (this.setValue(this._pendingValue, {
              onlySelf: !0,
              emitModelToViewChange: !1
            }), 0))
          }, e.prototype._applyFormState = function (t) {
            this._isBoxedValue(t) ? (this.value = this._pendingValue = t.value, t.disabled ? this.disable({
              onlySelf: !0,
              emitEvent: !1
            }) : this.enable({
              onlySelf: !0,
              emitEvent: !1
            })) : this.value = this._pendingValue = t
          }, e
        }(Fv),
        Lv = function (t) {
          function e(e, n, r) {
            var o = t.call(this, Nv(n), Mv(r, n)) || this;
            return o.controls = e, o._initObservables(), o._setUpdateStrategy(n), o._setUpControls(), o.updateValueAndValidity({
              onlySelf: !0,
              emitEvent: !1
            }), o
          }
          return o(e, t), e.prototype.registerControl = function (t, e) {
            return this.controls[t] ? this.controls[t] : (this.controls[t] = e, e.setParent(this), e._registerOnCollectionChange(this._onCollectionChange), e)
          }, e.prototype.addControl = function (t, e) {
            this.registerControl(t, e), this.updateValueAndValidity(), this._onCollectionChange()
          }, e.prototype.removeControl = function (t) {
            this.controls[t] && this.controls[t]._registerOnCollectionChange(function () {}), delete this.controls[t], this.updateValueAndValidity(), this._onCollectionChange()
          }, e.prototype.setControl = function (t, e) {
            this.controls[t] && this.controls[t]._registerOnCollectionChange(function () {}), delete this.controls[t], e && this.registerControl(t, e), this.updateValueAndValidity(), this._onCollectionChange()
          }, e.prototype.contains = function (t) {
            return this.controls.hasOwnProperty(t) && this.controls[t].enabled
          }, e.prototype.setValue = function (t, e) {
            var n = this;
            void 0 === e && (e = {}), this._checkAllValuesPresent(t), Object.keys(t).forEach(function (r) {
              n._throwIfControlMissing(r), n.controls[r].setValue(t[r], {
                onlySelf: !0,
                emitEvent: e.emitEvent
              })
            }), this.updateValueAndValidity(e)
          }, e.prototype.patchValue = function (t, e) {
            var n = this;
            void 0 === e && (e = {}), Object.keys(t).forEach(function (r) {
              n.controls[r] && n.controls[r].patchValue(t[r], {
                onlySelf: !0,
                emitEvent: e.emitEvent
              })
            }), this.updateValueAndValidity(e)
          }, e.prototype.reset = function (t, e) {
            void 0 === t && (t = {}), void 0 === e && (e = {}), this._forEachChild(function (n, r) {
              n.reset(t[r], {
                onlySelf: !0,
                emitEvent: e.emitEvent
              })
            }), this.updateValueAndValidity(e), this._updatePristine(e), this._updateTouched(e)
          }, e.prototype.getRawValue = function () {
            return this._reduceChildren({}, function (t, e, n) {
              return t[n] = e instanceof Vv ? e.value : e.getRawValue(), t
            })
          }, e.prototype._syncPendingControls = function () {
            var t = this._reduceChildren(!1, function (t, e) {
              return !!e._syncPendingControls() || t
            });
            return t && this.updateValueAndValidity({
              onlySelf: !0
            }), t
          }, e.prototype._throwIfControlMissing = function (t) {
            if (!Object.keys(this.controls).length) throw new Error("\n        There are no form controls registered with this group yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");
            if (!this.controls[t]) throw new Error("Cannot find form control with name: " + t + ".")
          }, e.prototype._forEachChild = function (t) {
            var e = this;
            Object.keys(this.controls).forEach(function (n) {
              return t(e.controls[n], n)
            })
          }, e.prototype._setUpControls = function () {
            var t = this;
            this._forEachChild(function (e) {
              e.setParent(t), e._registerOnCollectionChange(t._onCollectionChange)
            })
          }, e.prototype._updateValue = function () {
            this.value = this._reduceValue()
          }, e.prototype._anyControls = function (t) {
            var e = this,
              n = !1;
            return this._forEachChild(function (r, o) {
              n = n || e.contains(o) && t(r)
            }), n
          }, e.prototype._reduceValue = function () {
            var t = this;
            return this._reduceChildren({}, function (e, n, r) {
              return (n.enabled || t.disabled) && (e[r] = n.value), e
            })
          }, e.prototype._reduceChildren = function (t, e) {
            var n = t;
            return this._forEachChild(function (t, r) {
              n = e(n, t, r)
            }), n
          }, e.prototype._allControlsDisabled = function () {
            var t, e;
            try {
              for (var n = u(Object.keys(this.controls)), r = n.next(); !r.done; r = n.next())
                if (this.controls[r.value].enabled) return !1
            } catch (e) {
              t = {
                error: e
              }
            } finally {
              try {
                r && !r.done && (e = n.return) && e.call(n)
              } finally {
                if (t) throw t.error
              }
            }
            return Object.keys(this.controls).length > 0 || this.disabled
          }, e.prototype._checkAllValuesPresent = function (t) {
            this._forEachChild(function (e, n) {
              if (void 0 === t[n]) throw new Error("Must supply a value for form control with name: '" + n + "'.")
            })
          }, e
        }(Fv),
        Hv = function (t) {
          function e(e, n, r) {
            var o = t.call(this, Nv(n), Mv(r, n)) || this;
            return o.controls = e, o._initObservables(), o._setUpdateStrategy(n), o._setUpControls(), o.updateValueAndValidity({
              onlySelf: !0,
              emitEvent: !1
            }), o
          }
          return o(e, t), e.prototype.at = function (t) {
            return this.controls[t]
          }, e.prototype.push = function (t) {
            this.controls.push(t), this._registerControl(t), this.updateValueAndValidity(), this._onCollectionChange()
          }, e.prototype.insert = function (t, e) {
            this.controls.splice(t, 0, e), this._registerControl(e), this.updateValueAndValidity()
          }, e.prototype.removeAt = function (t) {
            this.controls[t] && this.controls[t]._registerOnCollectionChange(function () {}), this.controls.splice(t, 1), this.updateValueAndValidity()
          }, e.prototype.setControl = function (t, e) {
            this.controls[t] && this.controls[t]._registerOnCollectionChange(function () {}), this.controls.splice(t, 1), e && (this.controls.splice(t, 0, e), this._registerControl(e)), this.updateValueAndValidity(), this._onCollectionChange()
          }, Object.defineProperty(e.prototype, "length", {
            get: function () {
              return this.controls.length
            },
            enumerable: !0,
            configurable: !0
          }), e.prototype.setValue = function (t, e) {
            var n = this;
            void 0 === e && (e = {}), this._checkAllValuesPresent(t), t.forEach(function (t, r) {
              n._throwIfControlMissing(r), n.at(r).setValue(t, {
                onlySelf: !0,
                emitEvent: e.emitEvent
              })
            }), this.updateValueAndValidity(e)
          }, e.prototype.patchValue = function (t, e) {
            var n = this;
            void 0 === e && (e = {}), t.forEach(function (t, r) {
              n.at(r) && n.at(r).patchValue(t, {
                onlySelf: !0,
                emitEvent: e.emitEvent
              })
            }), this.updateValueAndValidity(e)
          }, e.prototype.reset = function (t, e) {
            void 0 === t && (t = []), void 0 === e && (e = {}), this._forEachChild(function (n, r) {
              n.reset(t[r], {
                onlySelf: !0,
                emitEvent: e.emitEvent
              })
            }), this.updateValueAndValidity(e), this._updatePristine(e), this._updateTouched(e)
          }, e.prototype.getRawValue = function () {
            return this.controls.map(function (t) {
              return t instanceof Vv ? t.value : t.getRawValue()
            })
          }, e.prototype._syncPendingControls = function () {
            var t = this.controls.reduce(function (t, e) {
              return !!e._syncPendingControls() || t
            }, !1);
            return t && this.updateValueAndValidity({
              onlySelf: !0
            }), t
          }, e.prototype._throwIfControlMissing = function (t) {
            if (!this.controls.length) throw new Error("\n        There are no form controls registered with this array yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");
            if (!this.at(t)) throw new Error("Cannot find form control at index " + t)
          }, e.prototype._forEachChild = function (t) {
            this.controls.forEach(function (e, n) {
              t(e, n)
            })
          }, e.prototype._updateValue = function () {
            var t = this;
            this.value = this.controls.filter(function (e) {
              return e.enabled || t.disabled
            }).map(function (t) {
              return t.value
            })
          }, e.prototype._anyControls = function (t) {
            return this.controls.some(function (e) {
              return e.enabled && t(e)
            })
          }, e.prototype._setUpControls = function () {
            var t = this;
            this._forEachChild(function (e) {
              return t._registerControl(e)
            })
          }, e.prototype._checkAllValuesPresent = function (t) {
            this._forEachChild(function (e, n) {
              if (void 0 === t[n]) throw new Error("Must supply a value for form control at index: " + n + ".")
            })
          }, e.prototype._allControlsDisabled = function () {
            var t, e;
            try {
              for (var n = u(this.controls), r = n.next(); !r.done; r = n.next())
                if (r.value.enabled) return !1
            } catch (e) {
              t = {
                error: e
              }
            } finally {
              try {
                r && !r.done && (e = n.return) && e.call(n)
              } finally {
                if (t) throw t.error
              }
            }
            return this.controls.length > 0 || this.disabled
          }, e.prototype._registerControl = function (t) {
            t.setParent(this), t._registerOnCollectionChange(this._onCollectionChange)
          }, e
        }(Fv),
        Bv = Promise.resolve(null),
        zv = function (t) {
          function e(e, n) {
            var r = t.call(this) || this;
            return r.submitted = !1, r._directives = [], r.ngSubmit = new pn, r.form = new Lv({}, xv(e), kv(n)), r
          }
          return o(e, t), e.prototype.ngAfterViewInit = function () {
            this._setUpdateStrategy()
          }, Object.defineProperty(e.prototype, "formDirective", {
            get: function () {
              return this
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(e.prototype, "control", {
            get: function () {
              return this.form
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(e.prototype, "path", {
            get: function () {
              return []
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(e.prototype, "controls", {
            get: function () {
              return this.form.controls
            },
            enumerable: !0,
            configurable: !0
          }), e.prototype.addControl = function (t) {
            var e = this;
            Bv.then(function () {
              var n = e._findContainer(t.path);
              t.control = n.registerControl(t.name, t.control), bv(t.control, t), t.control.updateValueAndValidity({
                emitEvent: !1
              }), e._directives.push(t)
            })
          }, e.prototype.getControl = function (t) {
            return this.form.get(t.path)
          }, e.prototype.removeControl = function (t) {
            var e = this;
            Bv.then(function () {
              var n = e._findContainer(t.path);
              n && n.removeControl(t.name), Ov(e._directives, t)
            })
          }, e.prototype.addFormGroup = function (t) {
            var e = this;
            Bv.then(function () {
              var n = e._findContainer(t.path),
                r = new Lv({});
              Cv(r, t), n.registerControl(t.name, r), r.updateValueAndValidity({
                emitEvent: !1
              })
            })
          }, e.prototype.removeFormGroup = function (t) {
            var e = this;
            Bv.then(function () {
              var n = e._findContainer(t.path);
              n && n.removeControl(t.name)
            })
          }, e.prototype.getFormGroup = function (t) {
            return this.form.get(t.path)
          }, e.prototype.updateModel = function (t, e) {
            var n = this;
            Bv.then(function () {
              n.form.get(t.path).setValue(e)
            })
          }, e.prototype.setValue = function (t) {
            this.control.setValue(t)
          }, e.prototype.onSubmit = function (t) {
            return this.submitted = !0, Tv(this.form, this._directives), this.ngSubmit.emit(t), !1
          }, e.prototype.onReset = function () {
            this.resetForm()
          }, e.prototype.resetForm = function (t) {
            void 0 === t && (t = void 0), this.form.reset(t), this.submitted = !1
          }, e.prototype._setUpdateStrategy = function () {
            this.options && null != this.options.updateOn && (this.form._updateOn = this.options.updateOn)
          }, e.prototype._findContainer = function (t) {
            return t.pop(), t.length ? this.form.get(t) : this.form
          }, a([s(0, zt()), s(0, Ut()), s(0, Bt($g)), s(1, zt()), s(1, Ut()), s(1, Bt(Yg))], e)
        }(Zg),
        Uv = function () {
          function t() {}
          return t.modelParentException = function () {
            throw new Error('\n      ngModel cannot be used to register form controls with a parent formGroup directive.  Try using\n      formGroup\'s partner directive "formControlName" instead.  Example:\n\n      ' + mv + '\n\n      Or, if you\'d like to avoid registering this form control, indicate that it\'s standalone in ngModelOptions:\n\n      Example:\n\n      \n    <div [formGroup]="myGroup">\n       <input formControlName="firstName">\n       <input [(ngModel)]="showMoreControls" [ngModelOptions]="{standalone: true}">\n    </div>\n  ')
          }, t.formGroupNameException = function () {
            throw new Error("\n      ngModel cannot be used to register form controls with a parent formGroupName or formArrayName directive.\n\n      Option 1: Use formControlName instead of ngModel (reactive strategy):\n\n      " + yv + "\n\n      Option 2:  Update ngModel's parent be ngModelGroup (template-driven strategy):\n\n      " + gv)
          }, t.missingNameException = function () {
            throw new Error('If ngModel is used within a form tag, either the name attribute must be set or the form\n      control must be defined as \'standalone\' in ngModelOptions.\n\n      Example 1: <input [(ngModel)]="person.firstName" name="first">\n      Example 2: <input [(ngModel)]="person.firstName" [ngModelOptions]="{standalone: true}">')
          }, t.modelGroupParentException = function () {
            throw new Error("\n      ngModelGroup cannot be used with a parent formGroup directive.\n\n      Option 1: Use formGroupName instead of ngModelGroup (reactive strategy):\n\n      " + yv + "\n\n      Option 2:  Use a regular form tag instead of the formGroup directive (template-driven strategy):\n\n      " + gv)
          }, t
        }(),
        qv = function (t) {
          function e(e, n, r) {
            var o = t.call(this) || this;
            return o._parent = e, o._validators = n, o._asyncValidators = r, o
          }
          var n;
          return o(e, t), n = e, e.prototype._checkParentType = function () {
            this._parent instanceof n || this._parent instanceof zv || Uv.modelGroupParentException()
          }, n = a([s(0, Gt()), s(0, qt()), s(1, zt()), s(1, Ut()), s(1, Bt($g)), s(2, zt()), s(2, Ut()), s(2, Bt(Yg))], e)
        }(Av),
        Gv = Promise.resolve(null),
        Qv = function (t) {
          function e(e, n, r, o) {
            var i = t.call(this) || this;
            return i.control = new Vv, i._registered = !1, i.update = new pn, i._parent = e, i._rawValidators = n || [], i._rawAsyncValidators = r || [], i.valueAccessor = function (t, e) {
              if (!e) return null;
              Array.isArray(e) || Sv(t, "Value accessor was not provided as an array for form control with");
              var n = void 0,
                r = void 0,
                o = void 0;
              return e.forEach(function (e) {
                var i;
                e.constructor === av ? n = e : (i = e, Pv.some(function (t) {
                  return i.constructor === t
                }) ? (r && Sv(t, "More than one built-in value accessor matches form control with"), r = e) : (o && Sv(t, "More than one custom value accessor matches form control with"), o = e))
              }), o || r || n || (Sv(t, "No valid value accessor for form control with"), null)
            }(i, o), i
          }
          return o(e, t), e.prototype.ngOnChanges = function (t) {
            this._checkForErrors(), this._registered || this._setUpControl(), "isDisabled" in t && this._updateDisabled(t),
              function (t, e) {
                if (!t.hasOwnProperty("model")) return !1;
                var n = t.model;
                return !!n.isFirstChange() || !Ft(e, n.currentValue)
              }(t, this.viewModel) && (this._updateValue(this.model), this.viewModel = this.model)
          }, e.prototype.ngOnDestroy = function () {
            this.formDirective && this.formDirective.removeControl(this)
          }, Object.defineProperty(e.prototype, "path", {
            get: function () {
              return this._parent ? _v(this.name, this._parent) : [this.name]
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(e.prototype, "formDirective", {
            get: function () {
              return this._parent ? this._parent.formDirective : null
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(e.prototype, "validator", {
            get: function () {
              return xv(this._rawValidators)
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(e.prototype, "asyncValidator", {
            get: function () {
              return kv(this._rawAsyncValidators)
            },
            enumerable: !0,
            configurable: !0
          }), e.prototype.viewToModelUpdate = function (t) {
            this.viewModel = t, this.update.emit(t)
          }, e.prototype._setUpControl = function () {
            this._setUpdateStrategy(), this._isStandalone() ? this._setUpStandalone() : this.formDirective.addControl(this), this._registered = !0
          }, e.prototype._setUpdateStrategy = function () {
            this.options && null != this.options.updateOn && (this.control._updateOn = this.options.updateOn)
          }, e.prototype._isStandalone = function () {
            return !this._parent || !(!this.options || !this.options.standalone)
          }, e.prototype._setUpStandalone = function () {
            bv(this.control, this), this.control.updateValueAndValidity({
              emitEvent: !1
            })
          }, e.prototype._checkForErrors = function () {
            this._isStandalone() || this._checkParentType(), this._checkName()
          }, e.prototype._checkParentType = function () {
            !(this._parent instanceof qv) && this._parent instanceof Av ? Uv.formGroupNameException() : this._parent instanceof qv || this._parent instanceof zv || Uv.modelParentException()
          }, e.prototype._checkName = function () {
            this.options && this.options.name && (this.name = this.options.name), this._isStandalone() || this.name || Uv.missingNameException()
          }, e.prototype._updateValue = function (t) {
            var e = this;
            Gv.then(function () {
              e.control.setValue(t, {
                emitViewToModelChange: !1
              })
            })
          }, e.prototype._updateDisabled = function (t) {
            var e = this,
              n = t.isDisabled.currentValue,
              r = "" === n || n && "false" !== n;
            Gv.then(function () {
              r && !e.control.disabled ? e.control.disable() : !r && e.control.disabled && e.control.enable()
            })
          }, a([s(0, zt()), s(0, Gt()), s(1, zt()), s(1, Ut()), s(1, Bt($g)), s(2, zt()), s(2, Ut()), s(2, Bt(Yg)), s(3, zt()), s(3, Ut()), s(3, Bt(rv))], e)
        }(hv),
        Wv = function (t) {
          function e(e, n) {
            var r = t.call(this) || this;
            return r._validators = e, r._asyncValidators = n, r.submitted = !1, r.directives = [], r.form = null, r.ngSubmit = new pn, r
          }
          return o(e, t), e.prototype.ngOnChanges = function (t) {
            this._checkFormPresent(), t.hasOwnProperty("form") && (this._updateValidators(), this._updateDomValue(), this._updateRegistrations())
          }, Object.defineProperty(e.prototype, "formDirective", {
            get: function () {
              return this
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(e.prototype, "control", {
            get: function () {
              return this.form
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(e.prototype, "path", {
            get: function () {
              return []
            },
            enumerable: !0,
            configurable: !0
          }), e.prototype.addControl = function (t) {
            var e = this.form.get(t.path);
            return bv(e, t), e.updateValueAndValidity({
              emitEvent: !1
            }), this.directives.push(t), e
          }, e.prototype.getControl = function (t) {
            return this.form.get(t.path)
          }, e.prototype.removeControl = function (t) {
            Ov(this.directives, t)
          }, e.prototype.addFormGroup = function (t) {
            var e = this.form.get(t.path);
            Cv(e, t), e.updateValueAndValidity({
              emitEvent: !1
            })
          }, e.prototype.removeFormGroup = function (t) {}, e.prototype.getFormGroup = function (t) {
            return this.form.get(t.path)
          }, e.prototype.addFormArray = function (t) {
            var e = this.form.get(t.path);
            Cv(e, t), e.updateValueAndValidity({
              emitEvent: !1
            })
          }, e.prototype.removeFormArray = function (t) {}, e.prototype.getFormArray = function (t) {
            return this.form.get(t.path)
          }, e.prototype.updateModel = function (t, e) {
            this.form.get(t.path).setValue(e)
          }, e.prototype.onSubmit = function (t) {
            return this.submitted = !0, Tv(this.form, this.directives), this.ngSubmit.emit(t), !1
          }, e.prototype.onReset = function () {
            this.resetForm()
          }, e.prototype.resetForm = function (t) {
            void 0 === t && (t = void 0), this.form.reset(t), this.submitted = !1
          }, e.prototype._updateDomValue = function () {
            var t = this;
            this.directives.forEach(function (e) {
              var n = t.form.get(e.path);
              e.control !== n && (function (t, e) {
                e.valueAccessor.registerOnChange(function () {
                  return Ev(e)
                }), e.valueAccessor.registerOnTouched(function () {
                  return Ev(e)
                }), e._rawValidators.forEach(function (t) {
                  t.registerOnValidatorChange && t.registerOnValidatorChange(null)
                }), e._rawAsyncValidators.forEach(function (t) {
                  t.registerOnValidatorChange && t.registerOnValidatorChange(null)
                }), t && t._clearChangeFns()
              }(e.control, e), n && bv(n, e), e.control = n)
            }), this.form._updateTreeValidity({
              emitEvent: !1
            })
          }, e.prototype._updateRegistrations = function () {
            var t = this;
            this.form._registerOnCollectionChange(function () {
              return t._updateDomValue()
            }), this._oldForm && this._oldForm._registerOnCollectionChange(function () {}), this._oldForm = this.form
          }, e.prototype._updateValidators = function () {
            var t = xv(this._validators);
            this.form.validator = Jg.compose([this.form.validator, t]);
            var e = kv(this._asyncValidators);
            this.form.asyncValidator = Jg.composeAsync([this.form.asyncValidator, e])
          }, e.prototype._checkFormPresent = function () {
            this.form || vv.missingFormException()
          }, a([s(0, zt()), s(0, Ut()), s(0, Bt($g)), s(1, zt()), s(1, Ut()), s(1, Bt(Yg))], e)
        }(Zg),
        Zv = function () {
          function t() {}
          return Object.defineProperty(t.prototype, "required", {
            get: function () {
              return this._required
            },
            set: function (t) {
              this._required = null != t && !1 !== t && "" + t != "false", this._onChange && this._onChange()
            },
            enumerable: !0,
            configurable: !0
          }), t.prototype.validate = function (t) {
            return this.required ? Jg.required(t) : null
          }, t.prototype.registerOnValidatorChange = function (t) {
            this._onChange = t
          }, t
        }(),
        Kv = function () {},
        $v = function () {},
        Yv = function () {},
        Xv = po({
          encapsulation: 0,
          styles: [
            [".blankslate[_ngcontent-%COMP%]{background-color:#fafbfc;border:1px solid #e1e4e8;border-radius:3px;box-shadow:inset 0 0 10px rgba(27,31,35,.05);padding:32px;text-align:center;margin-top:3rem}.navrow[_ngcontent-%COMP%]{padding-top:.5rem;background-color:#272625c9;padding-bottom:.5rem;color:#fff}.mr[_ngcontent-%COMP%]{margin-top:4rem;margin-bottom:4rem}.searchbtn[_ngcontent-%COMP%]{display:inline-block;margin-top:1rem;text-align:center}.countrow[_ngcontent-%COMP%]{padding-top:.5rem;font-size:18px;font-weight:600;padding-left:17px}.rowdata[_ngcontent-%COMP%]{border-top:1px solid rgba(187,182,182,.993);padding-top:1rem;padding-bottom:1rem}a[_ngcontent-%COMP%]{font-size:17px;color:#1f80e4;cursor:pointer;font-weight:500}i[_ngcontent-%COMP%]{font-size:2.3rem;color:#a3aab1;margin-bottom:.3rem}.font-size[_ngcontent-%COMP%]{font-size:14px}.overflow-x[_ngcontent-%COMP%]{overflow-x:hidden}.bg-color[_ngcontent-%COMP%]{background-color:#080808c7}img[_ngcontent-%COMP%]{width:70px;cursor:pointer}@media (max-width :700px){.btn-p[_ngcontent-%COMP%]{padding-left:0}.contain-p[_ngcontent-%COMP%]{padding-right:0}}@media (max-width:575px){.render[_ngcontent-%COMP%]{margin-top:-66px;margin-left:50px}.btn-p[_ngcontent-%COMP%]{padding-left:15px}}"]
          ],
          data: {}
        });

      function Jv(t) {
        return la(0, [(t()(), Uo(0, 0, null, null, 3, "div", [
          ["class", "row countrow"]
        ], null, null, null, null, null)), (t()(), Uo(1, 0, null, null, 2, "p", [
          ["class", "mt-2"]
        ], null, null, null, null, null)), (t()(), ia(2, null, ["", " Users Found"])), ea(3, 1)], null, function (t, e) {
          var n = e.component;
          t(e, 2, 0, uo(e, 2, 0, t(e, 3, 0, vi(e.parent, 0), n.totalCount)))
        })
      }

      function t_(t) {
        return la(0, [(t()(), Uo(0, 0, null, null, 5, "div", [
          ["class", "row"]
        ], null, null, null, null, null)), (t()(), Uo(1, 0, null, null, 4, "div", [
          ["class", "px-2 mr-auto ml-auto"]
        ], null, null, null, null, null)), (t()(), Uo(2, 0, null, null, 3, "div", [
          ["class", "blankslate"]
        ], null, null, null, null, null)), (t()(), Uo(3, 0, null, null, 0, "i", [
          ["class", "fa fa-search"]
        ], null, null, null, null, null)), (t()(), Uo(4, 0, null, null, 1, "h3", [], null, null, null, null, null)), (t()(), ia(5, null, [" We couldn\u2019t find any users matching '", "' "]))], null, function (t, e) {
          t(e, 5, 0, e.component.notfound)
        })
      }

      function e_(t) {
        return la(0, [(t()(), Uo(0, 0, null, null, 2, "span", [], null, null, null, null, null)), (t()(), Uo(1, 0, null, null, 0, "i", [
          ["aria-hidden", "true"],
          ["class", "font-size fa fa-map-marker"]
        ], null, null, null, null, null)), (t()(), ia(2, null, ["", " | "]))], null, function (t, e) {
          t(e, 2, 0, e.parent.context.$implicit.location)
        })
      }

      function n_(t) {
        return la(0, [(t()(), Uo(0, 0, null, null, 2, "span", [], null, null, null, null, null)), (t()(), Uo(1, 0, null, null, 0, "i", [
          ["aria-hidden", "true"],
          ["class", "font-size fa fa-briefcase"]
        ], null, null, null, null, null)), (t()(), ia(2, null, [" ", " | "]))], null, function (t, e) {
          t(e, 2, 0, e.parent.context.$implicit.company)
        })
      }

      function r_(t) {
        return la(0, [(t()(), Uo(0, 0, null, null, 2, "span", [], null, null, null, null, null)), (t()(), Uo(1, 0, null, null, 0, "i", [
          ["aria-hidden", "true"],
          ["class", "font-size fa fa-rss-square"]
        ], null, null, null, null, null)), (t()(), ia(2, null, [" ", " "]))], null, function (t, e) {
          t(e, 2, 0, e.parent.context.$implicit.blog)
        })
      }

      function o_(t) {
        return la(0, [(t()(), Uo(0, 0, null, null, 30, "div", [
          ["class", "row justify-content-center rowdata"]
        ], null, null, null, null, null)), (t()(), Uo(1, 0, null, null, 3, "div", [
          ["class", "col-md-2 col-sm-2 col-xs-2"]
        ], null, null, null, null, null)), (t()(), Uo(2, 0, null, null, 2, "img", [
          ["alt", "user img"],
          ["class", "img-fluid rounded"]
        ], [
          [8, "src", 4]
        ], [
          [null, "click"]
        ], function (t, e, n) {
          var r = !0;
          return "click" === e && (r = !1 !== vi(t, 3).onClick() && r), r
        }, null, null)), Ii(3, 16384, null, 0, Yy, [Zy, ly, [8, null], Fn, Vn], {
          routerLink: [0, "routerLink"]
        }, null), na(4, 2), (t()(), Uo(5, 0, null, null, 25, "div", [
          ["class", "col-md-10 col-sm-10 col-xs-10  render my-auto"]
        ], null, null, null, null, null)), (t()(), Uo(6, 0, null, null, 24, "div", [
          ["class", "row"]
        ], null, null, null, null, null)), (t()(), Uo(7, 0, null, null, 17, "div", [
          ["class", "col-md-10 col-sm-10 col-xs-10 mb-1 contain-p render"]
        ], null, null, null, null, null)), (t()(), Uo(8, 0, null, null, 6, "div", [], null, null, null, null, null)), (t()(), Uo(9, 0, null, null, 3, "a", [], [
          [1, "target", 0],
          [8, "href", 4]
        ], [
          [null, "click"]
        ], function (t, e, n) {
          var r = !0;
          return "click" === e && (r = !1 !== vi(t, 10).onClick(n.button, n.ctrlKey, n.metaKey, n.shiftKey) && r), r
        }, null, null)), Ii(10, 671744, null, 0, Xy, [Zy, ly, Xl], {
          routerLink: [0, "routerLink"]
        }, null), na(11, 2), (t()(), ia(12, null, ["", ""])), (t()(), Uo(13, 0, null, null, 1, "span", [
          ["class", "ml-3"]
        ], null, null, null, null, null)), (t()(), ia(14, null, ["", ""])), (t()(), Uo(15, 0, null, null, 6, "div", [
          ["class", "font-size text-dark"]
        ], null, null, null, null, null)), (t()(), zo(16777216, null, null, 1, null, e_)), Ii(17, 16384, null, 0, Wu, [Qn, Gn], {
          ngIf: [0, "ngIf"]
        }, null), (t()(), zo(16777216, null, null, 1, null, n_)), Ii(19, 16384, null, 0, Wu, [Qn, Gn], {
          ngIf: [0, "ngIf"]
        }, null), (t()(), zo(16777216, null, null, 1, null, r_)), Ii(21, 16384, null, 0, Wu, [Qn, Gn], {
          ngIf: [0, "ngIf"]
        }, null), (t()(), Uo(22, 0, null, null, 2, "div", [
          ["class", "font-size"]
        ], null, null, null, null, null)), (t()(), Uo(23, 0, null, null, 1, "p", [
          ["class", "mb-0"]
        ], null, null, null, null, null)), (t()(), ia(24, null, ["", ""])), (t()(), Uo(25, 0, null, null, 5, "div", [
          ["class", "col-md-2 col-sm-2 col-xs-2 btn-p render my-auto"]
        ], null, null, null, null, null)), (t()(), Uo(26, 0, null, null, 4, "a", [], [
          [1, "target", 0],
          [8, "href", 4]
        ], [
          [null, "click"]
        ], function (t, e, n) {
          var r = !0;
          return "click" === e && (r = !1 !== vi(t, 27).onClick(n.button, n.ctrlKey, n.metaKey, n.shiftKey) && r), r
        }, null, null)), Ii(27, 671744, null, 0, Xy, [Zy, ly, Xl], {
          routerLink: [0, "routerLink"]
        }, null), na(28, 2), (t()(), Uo(29, 0, null, null, 1, "button", [
          ["class", "btn btn-success btn-sm"]
        ], null, null, null, null, null)), (t()(), ia(-1, null, ["More Info"]))], function (t, e) {
          t(e, 3, 0, t(e, 4, 0, "/userInfo/id=/", e.context.$implicit.login)), t(e, 10, 0, t(e, 11, 0, "/userInfo/id=/", e.context.$implicit.login)), t(e, 17, 0, null != e.context.$implicit.location), t(e, 19, 0, null != e.context.$implicit.company), t(e, 21, 0, null != e.context.$implicit.blog), t(e, 27, 0, t(e, 28, 0, "/userInfo/id=/", e.context.$implicit.login))
        }, function (t, e) {
          t(e, 2, 0, Ho(1, "", e.context.$implicit.avatar_url, "")), t(e, 9, 0, vi(e, 10).target, vi(e, 10).href), t(e, 12, 0, e.context.$implicit.login), t(e, 14, 0, e.context.$implicit.name), t(e, 24, 0, e.context.$implicit.bio), t(e, 26, 0, vi(e, 27).target, vi(e, 27).href)
        })
      }

      function i_(t) {
        return la(0, [(t()(), Uo(0, 0, null, null, 1, "pagination-controls", [
          ["class", "text-center"]
        ], null, [
          [null, "pageChange"]
        ], function (t, e, n) {
          var r = !0;
          return "pageChange" === e && (r = !1 !== (t.component.p = n) && r), r
        }, Gg, Ng)), Ii(1, 49152, null, 0, Ig, [], null, {
          pageChange: "pageChange"
        })], null, null)
      }

      function a_(t) {
        return la(0, [Ri(0, ic, [br]), (t()(), Uo(1, 0, null, null, 31, "div", [
          ["class", "container-fluid overflow-x"]
        ], null, null, null, null, null)), (t()(), Uo(2, 0, null, null, 18, "div", [
          ["class", "row justify-content-center d-flex bg-color"]
        ], null, null, null, null, null)), (t()(), Uo(3, 0, null, null, 17, "ul", [
          ["class", "col-md-8 col-sm-8 col-xs-8 mr"]
        ], null, null, null, null, null)), (t()(), Uo(4, 0, null, null, 16, "form", [
          ["novalidate", ""]
        ], [
          [2, "ng-untouched", null],
          [2, "ng-touched", null],
          [2, "ng-pristine", null],
          [2, "ng-dirty", null],
          [2, "ng-valid", null],
          [2, "ng-invalid", null],
          [2, "ng-pending", null]
        ], [
          [null, "submit"],
          [null, "reset"]
        ], function (t, e, n) {
          var r = !0;
          return "submit" === e && (r = !1 !== vi(t, 6).onSubmit(n) && r), "reset" === e && (r = !1 !== vi(t, 6).onReset() && r), r
        }, null, null)), Ii(5, 16384, null, 0, Kv, [], null, null), Ii(6, 4210688, [
          ["f", 4]
        ], 0, zv, [
          [8, null],
          [8, null]
        ], null, null), Di(2048, null, Zg, null, [zv]), Ii(8, 16384, null, 0, Dv, [
          [4, Zg]
        ], null, null), (t()(), Uo(9, 0, null, null, 8, "li", [
          ["class", "col-md-10 col-sm-10 col-xs-10 d-inline-block"]
        ], null, null, null, null, null)), (t()(), Uo(10, 0, null, null, 7, "input", [
          ["class", "form-control"],
          ["name", "search"],
          ["placeholder", "Search Here"],
          ["required", ""],
          ["type", "text"]
        ], [
          [1, "required", 0],
          [2, "ng-untouched", null],
          [2, "ng-touched", null],
          [2, "ng-pristine", null],
          [2, "ng-dirty", null],
          [2, "ng-valid", null],
          [2, "ng-invalid", null],
          [2, "ng-pending", null]
        ], [
          [null, "ngModelChange"],
          [null, "keyup"],
          [null, "input"],
          [null, "blur"],
          [null, "compositionstart"],
          [null, "compositionend"]
        ], function (t, e, n) {
          var r = !0,
            o = t.component;
          return "input" === e && (r = !1 !== vi(t, 11)._handleInput(n.target.value) && r), "blur" === e && (r = !1 !== vi(t, 11).onTouched() && r), "compositionstart" === e && (r = !1 !== vi(t, 11)._compositionStart() && r), "compositionend" === e && (r = !1 !== vi(t, 11)._compositionEnd(n.target.value) && r), "ngModelChange" === e && (r = !1 !== (o.search = n) && r), "keyup" === e && (r = !1 !== o.keyDownFunction(n, o.search) && r), r
        }, null, null)), Ii(11, 16384, null, 0, av, [Fn, Vn, [2, iv]], null, null), Ii(12, 16384, null, 0, Zv, [], {
          required: [0, "required"]
        }, null), Di(1024, null, $g, function (t) {
          return [t]
        }, [Zv]), Di(1024, null, rv, function (t) {
          return [t]
        }, [av]), Ii(15, 671744, null, 0, Qv, [
          [2, Zg],
          [6, $g],
          [8, null],
          [6, rv]
        ], {
          name: [0, "name"],
          model: [1, "model"]
        }, {
          update: "ngModelChange"
        }), Di(2048, null, hv, null, [Qv]), Ii(17, 16384, null, 0, Rv, [
          [4, hv]
        ], null, null), (t()(), Uo(18, 0, null, null, 2, "li", [
          ["class", "col-md-2 col-sm-2 col-xs-2 searchbtn"]
        ], null, null, null, null, null)), (t()(), Uo(19, 0, null, null, 1, "button", [
          ["class", "btn btn-primary btn-md"],
          ["type", "button"]
        ], [
          [8, "disabled", 0]
        ], [
          [null, "click"]
        ], function (t, e, n) {
          var r = !0;
          return "click" === e && (r = !1 !== t.component.searchUser() && r), r
        }, null, null)), (t()(), ia(-1, null, ["Search"])), (t()(), Uo(21, 0, null, null, 11, "div", [
          ["class", "row justify-content-center d-flex"]
        ], null, null, null, null, null)), (t()(), Uo(22, 0, null, null, 10, "div", [
          ["class", "col-lg-10"]
        ], null, null, null, null, null)), (t()(), zo(16777216, null, null, 1, null, Jv)), Ii(24, 16384, null, 0, Wu, [Qn, Gn], {
          ngIf: [0, "ngIf"]
        }, null), (t()(), zo(16777216, null, null, 1, null, t_)), Ii(26, 16384, null, 0, Wu, [Qn, Gn], {
          ngIf: [0, "ngIf"]
        }, null), (t()(), zo(16777216, null, null, 3, null, o_)), Ii(28, 278528, null, 0, Gu, [Qn, Gn, dr], {
          ngForOf: [0, "ngForOf"]
        }, null), ra(29, {
          itemsPerPage: 0,
          currentPage: 1
        }), Ri(0, Og, [Pg]), (t()(), zo(16777216, null, null, 1, null, i_)), Ii(32, 16384, null, 0, Wu, [Qn, Gn], {
          ngIf: [0, "ngIf"]
        }, null)], function (t, e) {
          var n = e.component;
          t(e, 12, 0, ""), t(e, 15, 0, "search", n.search), t(e, 24, 0, n.totalCount > 0 && n.isCount_Visible), t(e, 26, 0, 0 == n.totalCount), t(e, 28, 0, uo(e, 28, 0, vi(e, 30).transform(n.searchList, t(e, 29, 0, 5, n.p)))), t(e, 32, 0, n.totalCount > 0 && n.isCount_Visible)
        }, function (t, e) {
          t(e, 4, 0, vi(e, 8).ngClassUntouched, vi(e, 8).ngClassTouched, vi(e, 8).ngClassPristine, vi(e, 8).ngClassDirty, vi(e, 8).ngClassValid, vi(e, 8).ngClassInvalid, vi(e, 8).ngClassPending), t(e, 10, 0, vi(e, 12).required ? "" : null, vi(e, 17).ngClassUntouched, vi(e, 17).ngClassTouched, vi(e, 17).ngClassPristine, vi(e, 17).ngClassDirty, vi(e, 17).ngClassValid, vi(e, 17).ngClassInvalid, vi(e, 17).ngClassPending), t(e, 19, 0, !vi(e, 6).valid)
        })
      }
      var s_ = si("app-git-search", np, function (t) {
          return la(0, [(t()(), Uo(0, 0, null, null, 1, "app-git-search", [], null, null, null, a_, Xv)), Ii(1, 114688, null, 0, np, [ep], null, null)], function (t, e) {
            t(e, 1, 0)
          }, null)
        }, {}, {}, []),
        l_ = function () {};

      function u_(t) {
        return Error("A hint was already declared for 'align=\"" + t + "\"'.")
      }
      var c_ = 0,
        h_ = function (t, e) {
          return function (t) {
            function n() {
              for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
              var o = t.apply(this, n) || this;
              return o.color = e, o
            }
            return o(n, t), Object.defineProperty(n.prototype, "color", {
              get: function () {
                return this._color
              },
              set: function (t) {
                var n = t || e;
                n !== this._color && (this._color && this._elementRef.nativeElement.classList.remove("mat-" + this._color), n && this._elementRef.nativeElement.classList.add("mat-" + n), this._color = n)
              },
              enumerable: !0,
              configurable: !0
            }), n
          }(function (t) {
            this._elementRef = t
          })
        }(0, "primary"),
        p_ = new bt("MAT_FORM_FIELD_DEFAULT_OPTIONS"),
        f_ = function (t) {
          function e(e, n, r, o, i, a, s, l) {
            var u = t.call(this, e) || this;
            return u._elementRef = e, u._changeDetectorRef = n, u._dir = o, u._defaults = i, u._platform = a, u._ngZone = s, u._outlineGapCalculationNeeded = !1, u._showAlwaysAnimate = !1, u._subscriptAnimationState = "", u._hintLabel = "", u._hintLabelId = "mat-hint-" + c_++, u._labelId = "mat-form-field-label-" + c_++, u._labelOptions = r || {}, u.floatLabel = u._labelOptions.float || "auto", u._animationsEnabled = "NoopAnimations" !== l, u.appearance = i && i.appearance ? i.appearance : "legacy", u
          }
          return o(e, t), Object.defineProperty(e.prototype, "appearance", {
            get: function () {
              return this._appearance
            },
            set: function (t) {
              var e = this._appearance;
              this._appearance = t || this._defaults && this._defaults.appearance || "legacy", "outline" === this._appearance && e !== t && this._updateOutlineGapOnStable()
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(e.prototype, "hideRequiredMarker", {
            get: function () {
              return this._hideRequiredMarker
            },
            set: function (t) {
              this._hideRequiredMarker = dp(t)
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(e.prototype, "_shouldAlwaysFloat", {
            get: function () {
              return "always" === this.floatLabel && !this._showAlwaysAnimate
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(e.prototype, "_canLabelFloat", {
            get: function () {
              return "never" !== this.floatLabel
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(e.prototype, "hintLabel", {
            get: function () {
              return this._hintLabel
            },
            set: function (t) {
              this._hintLabel = t, this._processHints()
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(e.prototype, "floatLabel", {
            get: function () {
              return "legacy" !== this.appearance && "never" === this._floatLabel ? "auto" : this._floatLabel
            },
            set: function (t) {
              t !== this._floatLabel && (this._floatLabel = t || this._labelOptions.float || "auto", this._changeDetectorRef.markForCheck())
            },
            enumerable: !0,
            configurable: !0
          }), e.prototype.getConnectedOverlayOrigin = function () {
            return this._connectionContainerRef || this._elementRef
          }, e.prototype.ngAfterContentInit = function () {
            var t = this;
            this._validateControlChild();
            var e = this._control;
            e.controlType && this._elementRef.nativeElement.classList.add("mat-form-field-type-" + e.controlType), e.stateChanges.pipe(Lp(null)).subscribe(function () {
              t._validatePlaceholders(), t._syncDescribedByIds(), t._changeDetectorRef.markForCheck()
            }), e.ngControl && e.ngControl.valueChanges && e.ngControl.valueChanges.subscribe(function () {
              return t._changeDetectorRef.markForCheck()
            }), it(this._prefixChildren.changes, this._suffixChildren.changes).subscribe(function () {
              t._updateOutlineGapOnStable(), t._changeDetectorRef.markForCheck()
            }), this._hintChildren.changes.pipe(Lp(null)).subscribe(function () {
              t._processHints(), t._changeDetectorRef.markForCheck()
            }), this._errorChildren.changes.pipe(Lp(null)).subscribe(function () {
              t._syncDescribedByIds(), t._changeDetectorRef.markForCheck()
            })
          }, e.prototype.ngAfterContentChecked = function () {
            this._validateControlChild(), this._outlineGapCalculationNeeded && this.updateOutlineGap()
          }, e.prototype.ngAfterViewInit = function () {
            this._subscriptAnimationState = "enter", this._changeDetectorRef.detectChanges()
          }, e.prototype._shouldForward = function (t) {
            var e = this._control ? this._control.ngControl : null;
            return e && e[t]
          }, e.prototype._hasPlaceholder = function () {
            return !!(this._control && this._control.placeholder || this._placeholderChild)
          }, e.prototype._hasLabel = function () {
            return !!this._labelChild
          }, e.prototype._shouldLabelFloat = function () {
            return this._canLabelFloat && (this._control.shouldLabelFloat || this._shouldAlwaysFloat)
          }, e.prototype._hideControlPlaceholder = function () {
            return "legacy" === this.appearance && !this._hasLabel() || this._hasLabel() && !this._shouldLabelFloat()
          }, e.prototype._hasFloatingLabel = function () {
            return this._hasLabel() || "legacy" === this.appearance && this._hasPlaceholder()
          }, e.prototype._getDisplayedMessages = function () {
            return this._errorChildren && this._errorChildren.length > 0 && this._control.errorState ? "error" : "hint"
          }, e.prototype._animateAndLockLabel = function () {
            var t = this;
            this._hasFloatingLabel() && this._canLabelFloat && (this._animationsEnabled && (this._showAlwaysAnimate = !0, ef(this._label.nativeElement, "transitionend").pipe(yf(1)).subscribe(function () {
              t._showAlwaysAnimate = !1
            })), this.floatLabel = "always", this._changeDetectorRef.markForCheck())
          }, e.prototype._validatePlaceholders = function () {
            if (this._control.placeholder && this._placeholderChild) throw Error("Placeholder attribute and child element were both specified.")
          }, e.prototype._processHints = function () {
            this._validateHints(), this._syncDescribedByIds()
          }, e.prototype._validateHints = function () {
            var t, e, n = this;
            this._hintChildren && this._hintChildren.forEach(function (r) {
              if ("start" === r.align) {
                if (t || n.hintLabel) throw u_("start");
                t = r
              } else if ("end" === r.align) {
                if (e) throw u_("end");
                e = r
              }
            })
          }, e.prototype._syncDescribedByIds = function () {
            if (this._control) {
              var t = [];
              if ("hint" === this._getDisplayedMessages()) {
                var e = this._hintChildren ? this._hintChildren.find(function (t) {
                    return "start" === t.align
                  }) : null,
                  n = this._hintChildren ? this._hintChildren.find(function (t) {
                    return "end" === t.align
                  }) : null;
                e ? t.push(e.id) : this._hintLabel && t.push(this._hintLabelId), n && t.push(n.id)
              } else this._errorChildren && (t = this._errorChildren.map(function (t) {
                return t.id
              }));
              this._control.setDescribedByIds(t)
            }
          }, e.prototype._validateControlChild = function () {
            if (!this._control) throw Error("mat-form-field must contain a MatFormFieldControl.")
          }, e.prototype.updateOutlineGap = function () {
            var t = this._label ? this._label.nativeElement : null;
            if ("outline" === this.appearance && t && t.children.length && t.textContent.trim() && (!this._platform || this._platform.isBrowser))
              if (document.documentElement.contains(this._elementRef.nativeElement)) {
                var e = 0,
                  n = 0,
                  r = this._connectionContainerRef.nativeElement.querySelectorAll(".mat-form-field-outline-start"),
                  o = this._connectionContainerRef.nativeElement.querySelectorAll(".mat-form-field-outline-gap");
                if (this._label && this._label.nativeElement.children.length) {
                  for (var i = this._getStartEnd(this._connectionContainerRef.nativeElement.getBoundingClientRect()), a = this._getStartEnd(t.children[0].getBoundingClientRect()), s = 0, l = 0, u = t.children; l < u.length; l++) s += u[l].offsetWidth;
                  e = a - i - 5, n = s > 0 ? .75 * s + 10 : 0
                }
                for (var c = 0; c < r.length; c++) r.item(c).style.width = e + "px";
                for (c = 0; c < o.length; c++) o.item(c).style.width = n + "px";
                this._outlineGapCalculationNeeded = !1
              } else this._outlineGapCalculationNeeded = !0
          }, e.prototype._getStartEnd = function (t) {
            return this._dir && "rtl" === this._dir.value ? t.right : t.left
          }, e.prototype._updateOutlineGapOnStable = function () {
            var t = this;
            this._ngZone ? this._ngZone.onStable.pipe(yf(1)).subscribe(function () {
              return t.updateOutlineGap()
            }) : Promise.resolve().then(function () {
              return t.updateOutlineGap()
            })
          }, e
        }(h_),
        d_ = function () {};

      function m_() {
        return "undefined" != typeof process
      }

      function y_(t) {
        switch (t.length) {
          case 0:
            return new hp;
          case 1:
            return t[0];
          default:
            return new pp(t)
        }
      }

      function g_(t, e, n, r, o, i) {
        void 0 === o && (o = {}), void 0 === i && (i = {});
        var a = [],
          s = [],
          l = -1,
          u = null;
        if (r.forEach(function (t) {
            var n = t.offset,
              r = n == l,
              c = r && u || {};
            Object.keys(t).forEach(function (n) {
              var r = n,
                s = t[n];
              if ("offset" !== n) switch (r = e.normalizePropertyName(r, a), s) {
                case fp:
                  s = o[n];
                  break;
                case sp:
                  s = i[n];
                  break;
                default:
                  s = e.normalizeStyleValue(n, r, s, a)
              }
              c[r] = s
            }), r || s.push(c), u = c, l = n
          }), a.length) throw new Error("Unable to animate due to the following errors:\n - " + a.join("\n - "));
        return s
      }

      function v_(t, e, n, r) {
        switch (e) {
          case "start":
            t.onStart(function () {
              return r(n && __(n, "start", t))
            });
            break;
          case "done":
            t.onDone(function () {
              return r(n && __(n, "done", t))
            });
            break;
          case "destroy":
            t.onDestroy(function () {
              return r(n && __(n, "destroy", t))
            })
        }
      }

      function __(t, e, n) {
        var r = n.totalTime,
          o = b_(t.element, t.triggerName, t.fromState, t.toState, e || t.phaseName, void 0 == r ? t.totalTime : r, !!n.disabled),
          i = t._data;
        return null != i && (o._data = i), o
      }

      function b_(t, e, n, r, o, i, a) {
        return void 0 === o && (o = ""), void 0 === i && (i = 0), {
          element: t,
          triggerName: e,
          fromState: n,
          toState: r,
          phaseName: o,
          totalTime: i,
          disabled: !!a
        }
      }

      function w_(t, e, n) {
        var r;
        return t instanceof Map ? (r = t.get(e)) || t.set(e, r = n) : (r = t[e]) || (r = t[e] = n), r
      }

      function C_(t) {
        var e = t.indexOf(":");
        return [t.substring(1, e), t.substr(e + 1)]
      }
      var E_ = function (t, e) {
          return !1
        },
        S_ = function (t, e) {
          return !1
        },
        x_ = function (t, e, n) {
          return []
        },
        k_ = m_();
      if (k_ || "undefined" != typeof Element) {
        if (E_ = function (t, e) {
            return t.contains(e)
          }, k_ || Element.prototype.matches) S_ = function (t, e) {
          return t.matches(e)
        };
        else {
          var P_ = Element.prototype,
            T_ = P_.matchesSelector || P_.mozMatchesSelector || P_.msMatchesSelector || P_.oMatchesSelector || P_.webkitMatchesSelector;
          T_ && (S_ = function (t, e) {
            return T_.apply(t, [e])
          })
        }
        x_ = function (t, e, n) {
          var r = [];
          if (n) r.push.apply(r, h(t.querySelectorAll(e)));
          else {
            var o = t.querySelector(e);
            o && r.push(o)
          }
          return r
        }
      }
      var O_ = null,
        A_ = !1;

      function I_(t) {
        O_ || (O_ = ("undefined" != typeof document ? document.body : null) || {}, A_ = !!O_.style && "WebkitAppearance" in O_.style);
        var e = !0;
        return O_.style && ! function (t) {
          return "ebkit" == t.substring(1, 6)
        }(t) && !(e = t in O_.style) && A_ && (e = "Webkit" + t.charAt(0).toUpperCase() + t.substr(1) in O_.style), e
      }
      var R_ = S_,
        D_ = E_,
        N_ = x_;

      function M_(t) {
        var e = {};
        return Object.keys(t).forEach(function (n) {
          var r = n.replace(/([a-z])([A-Z])/g, "$1-$2");
          e[r] = t[n]
        }), e
      }
      var j_ = function () {
          function t() {}
          return t.prototype.validateStyleProperty = function (t) {
            return I_(t)
          }, t.prototype.matchesElement = function (t, e) {
            return R_(t, e)
          }, t.prototype.containsElement = function (t, e) {
            return D_(t, e)
          }, t.prototype.query = function (t, e, n) {
            return N_(t, e, n)
          }, t.prototype.computeStyle = function (t, e, n) {
            return n || ""
          }, t.prototype.animate = function (t, e, n, r, o, i, a) {
            return void 0 === i && (i = []), new hp(n, r)
          }, t
        }(),
        F_ = function () {
          function t() {}
          return t.NOOP = new j_, t
        }(),
        V_ = 1e3;

      function L_(t) {
        if ("number" == typeof t) return t;
        var e = t.match(/^(-?[\.\d]+)(m?s)/);
        return !e || e.length < 2 ? 0 : H_(parseFloat(e[1]), e[2])
      }

      function H_(t, e) {
        switch (e) {
          case "s":
            return t * V_;
          default:
            return t
        }
      }

      function B_(t, e, n) {
        return t.hasOwnProperty("duration") ? t : function (t, e, n) {
          var r, o = 0,
            i = "";
          if ("string" == typeof t) {
            var a = t.match(/^(-?[\.\d]+)(m?s)(?:\s+(-?[\.\d]+)(m?s))?(?:\s+([-a-z]+(?:\(.+?\))?))?$/i);
            if (null === a) return e.push('The provided timing value "' + t + '" is invalid.'), {
              duration: 0,
              delay: 0,
              easing: ""
            };
            r = H_(parseFloat(a[1]), a[2]);
            var s = a[3];
            null != s && (o = H_(Math.floor(parseFloat(s)), a[4]));
            var l = a[5];
            l && (i = l)
          } else r = t;
          if (!n) {
            var u = !1,
              c = e.length;
            r < 0 && (e.push("Duration values below 0 are not allowed for this animation step."), u = !0), o < 0 && (e.push("Delay values below 0 are not allowed for this animation step."), u = !0), u && e.splice(c, 0, 'The provided timing value "' + t + '" is invalid.')
          }
          return {
            duration: r,
            delay: o,
            easing: i
          }
        }(t, e, n)
      }

      function z_(t, e) {
        return void 0 === e && (e = {}), Object.keys(t).forEach(function (n) {
          e[n] = t[n]
        }), e
      }

      function U_(t, e, n) {
        if (void 0 === n && (n = {}), e)
          for (var r in t) n[r] = t[r];
        else z_(t, n);
        return n
      }

      function q_(t, e, n) {
        return n ? e + ":" + n + ";" : ""
      }

      function G_(t) {
        for (var e = "", n = 0; n < t.style.length; n++) e += q_(0, r = t.style.item(n), t.style.getPropertyValue(r));
        for (var r in t.style) t.style.hasOwnProperty(r) && !r.startsWith("_") && (e += q_(0, r.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(), t.style[r]));
        t.setAttribute("style", e)
      }

      function Q_(t, e) {
        t.style && (Object.keys(e).forEach(function (n) {
          var r = tb(n);
          t.style[r] = e[n]
        }), m_() && G_(t))
      }

      function W_(t, e) {
        t.style && (Object.keys(e).forEach(function (e) {
          var n = tb(e);
          t.style[n] = ""
        }), m_() && G_(t))
      }

      function Z_(t) {
        return Array.isArray(t) ? 1 == t.length ? t[0] : lp(t) : t
      }
      var K_ = new RegExp("{{\\s*(.+?)\\s*}}", "g");

      function $_(t) {
        var e = [];
        if ("string" == typeof t) {
          for (var n = t.toString(), r = void 0; r = K_.exec(n);) e.push(r[1]);
          K_.lastIndex = 0
        }
        return e
      }

      function Y_(t, e, n) {
        var r = t.toString(),
          o = r.replace(K_, function (t, r) {
            var o = e[r];
            return e.hasOwnProperty(r) || (n.push("Please provide a value for the animation param " + r), o = ""), o.toString()
          });
        return o == r ? t : o
      }

      function X_(t) {
        for (var e = [], n = t.next(); !n.done;) e.push(n.value), n = t.next();
        return e
      }
      var J_ = /-+([a-z0-9])/g;

      function tb(t) {
        return t.replace(J_, function () {
          for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
          return t[1].toUpperCase()
        })
      }

      function eb(t, e) {
        return 0 === t || 0 === e
      }

      function nb(t, e, n) {
        var r = Object.keys(n);
        if (r.length && e.length) {
          var o = e[0],
            i = [];
          if (r.forEach(function (t) {
              o.hasOwnProperty(t) || i.push(t), o[t] = n[t]
            }), i.length)
            for (var a = function () {
                var n = e[s];
                i.forEach(function (e) {
                  n[e] = ob(t, e)
                })
              }, s = 1; s < e.length; s++) a()
        }
        return e
      }

      function rb(t, e, n) {
        switch (e.type) {
          case 7:
            return t.visitTrigger(e, n);
          case 0:
            return t.visitState(e, n);
          case 1:
            return t.visitTransition(e, n);
          case 2:
            return t.visitSequence(e, n);
          case 3:
            return t.visitGroup(e, n);
          case 4:
            return t.visitAnimate(e, n);
          case 5:
            return t.visitKeyframes(e, n);
          case 6:
            return t.visitStyle(e, n);
          case 8:
            return t.visitReference(e, n);
          case 9:
            return t.visitAnimateChild(e, n);
          case 10:
            return t.visitAnimateRef(e, n);
          case 11:
            return t.visitQuery(e, n);
          case 12:
            return t.visitStagger(e, n);
          default:
            throw new Error("Unable to resolve animation metadata node #" + e.type)
        }
      }

      function ob(t, e) {
        return window.getComputedStyle(t)[e]
      }
      var ib = "*",
        ab = new Set(["true", "1"]),
        sb = new Set(["false", "0"]);

      function lb(t, e) {
        var n = ab.has(t) || sb.has(t),
          r = ab.has(e) || sb.has(e);
        return function (o, i) {
          var a = t == ib || t == o,
            s = e == ib || e == i;
          return !a && n && "boolean" == typeof o && (a = o ? ab.has(t) : sb.has(t)), !s && r && "boolean" == typeof i && (s = i ? ab.has(e) : sb.has(e)), a && s
        }
      }
      var ub = new RegExp("s*:selfs*,?", "g");

      function cb(t, e, n) {
        return new hb(t).build(e, n)
      }
      var hb = function () {
          function t(t) {
            this._driver = t
          }
          return t.prototype.build = function (t, e) {
            var n = new pb(e);
            return this._resetContextStyleTimingState(n), rb(this, Z_(t), n)
          }, t.prototype._resetContextStyleTimingState = function (t) {
            t.currentQuerySelector = "", t.collectedStyles = {}, t.collectedStyles[""] = {}, t.currentTime = 0
          }, t.prototype.visitTrigger = function (t, e) {
            var n = this,
              r = e.queryCount = 0,
              o = e.depCount = 0,
              i = [],
              a = [];
            return "@" == t.name.charAt(0) && e.errors.push("animation triggers cannot be prefixed with an `@` sign (e.g. trigger('@foo', [...]))"), t.definitions.forEach(function (t) {
              if (n._resetContextStyleTimingState(e), 0 == t.type) {
                var s = t,
                  l = s.name;
                l.toString().split(/\s*,\s*/).forEach(function (t) {
                  s.name = t, i.push(n.visitState(s, e))
                }), s.name = l
              } else if (1 == t.type) {
                var u = n.visitTransition(t, e);
                r += u.queryCount, o += u.depCount, a.push(u)
              } else e.errors.push("only state() and transition() definitions can sit inside of a trigger()")
            }), {
              type: 7,
              name: t.name,
              states: i,
              transitions: a,
              queryCount: r,
              depCount: o,
              options: null
            }
          }, t.prototype.visitState = function (t, e) {
            var n = this.visitStyle(t.styles, e),
              r = t.options && t.options.params || null;
            if (n.containsDynamicStyles) {
              var o = new Set,
                i = r || {};
              if (n.styles.forEach(function (t) {
                  if (fb(t)) {
                    var e = t;
                    Object.keys(e).forEach(function (t) {
                      $_(e[t]).forEach(function (t) {
                        i.hasOwnProperty(t) || o.add(t)
                      })
                    })
                  }
                }), o.size) {
                var a = X_(o.values());
                e.errors.push('state("' + t.name + '", ...) must define default values for all the following style substitutions: ' + a.join(", "))
              }
            }
            return {
              type: 0,
              name: t.name,
              style: n,
              options: r ? {
                params: r
              } : null
            }
          }, t.prototype.visitTransition = function (t, e) {
            e.queryCount = 0, e.depCount = 0;
            var n, r, o, i = rb(this, Z_(t.animation), e);
            return {
              type: 1,
              matchers: (n = t.expr, r = e.errors, o = [], "string" == typeof n ? n.split(/\s*,\s*/).forEach(function (t) {
                return function (t, e, n) {
                  if (":" == t[0]) {
                    var r = function (t, e) {
                      switch (t) {
                        case ":enter":
                          return "void => *";
                        case ":leave":
                          return "* => void";
                        case ":increment":
                          return function (t, e) {
                            return parseFloat(e) > parseFloat(t)
                          };
                        case ":decrement":
                          return function (t, e) {
                            return parseFloat(e) < parseFloat(t)
                          };
                        default:
                          return e.push('The transition alias value "' + t + '" is not supported'), "* => *"
                      }
                    }(t, n);
                    if ("function" == typeof r) return void e.push(r);
                    t = r
                  }
                  var o = t.match(/^(\*|[-\w]+)\s*(<?[=-]>)\s*(\*|[-\w]+)$/);
                  if (null == o || o.length < 4) return n.push('The provided transition expression "' + t + '" is not supported'), e;
                  var i = o[1],
                    a = o[2],
                    s = o[3];
                  e.push(lb(i, s)), "<" != a[0] || i == ib && s == ib || e.push(lb(s, i))
                }(t, o, r)
              }) : o.push(n), o),
              animation: i,
              queryCount: e.queryCount,
              depCount: e.depCount,
              options: db(t.options)
            }
          }, t.prototype.visitSequence = function (t, e) {
            var n = this;
            return {
              type: 2,
              steps: t.steps.map(function (t) {
                return rb(n, t, e)
              }),
              options: db(t.options)
            }
          }, t.prototype.visitGroup = function (t, e) {
            var n = this,
              r = e.currentTime,
              o = 0,
              i = t.steps.map(function (t) {
                e.currentTime = r;
                var i = rb(n, t, e);
                return o = Math.max(o, e.currentTime), i
              });
            return e.currentTime = o, {
              type: 3,
              steps: i,
              options: db(t.options)
            }
          }, t.prototype.visitAnimate = function (t, e) {
            var n, r = function (t, e) {
              var n = null;
              if (t.hasOwnProperty("duration")) n = t;
              else if ("number" == typeof t) return mb(B_(t, e).duration, 0, "");
              var r = t;
              if (r.split(/\s+/).some(function (t) {
                  return "{" == t.charAt(0) && "{" == t.charAt(1)
                })) {
                var o = mb(0, 0, "");
                return o.dynamic = !0, o.strValue = r, o
              }
              return mb((n = n || B_(r, e)).duration, n.delay, n.easing)
            }(t.timings, e.errors);
            e.currentAnimateTimings = r;
            var o = t.styles ? t.styles : up({});
            if (5 == o.type) n = this.visitKeyframes(o, e);
            else {
              var i = t.styles,
                a = !1;
              if (!i) {
                a = !0;
                var s = {};
                r.easing && (s.easing = r.easing), i = up(s)
              }
              e.currentTime += r.duration + r.delay;
              var l = this.visitStyle(i, e);
              l.isEmptyStep = a, n = l
            }
            return e.currentAnimateTimings = null, {
              type: 4,
              timings: r,
              style: n,
              options: null
            }
          }, t.prototype.visitStyle = function (t, e) {
            var n = this._makeStyleAst(t, e);
            return this._validateStyleAst(n, e), n
          }, t.prototype._makeStyleAst = function (t, e) {
            var n = [];
            Array.isArray(t.styles) ? t.styles.forEach(function (t) {
              "string" == typeof t ? t == sp ? n.push(t) : e.errors.push("The provided style string value " + t + " is not allowed.") : n.push(t)
            }) : n.push(t.styles);
            var r = !1,
              o = null;
            return n.forEach(function (t) {
              if (fb(t)) {
                var e = t,
                  n = e.easing;
                if (n && (o = n, delete e.easing), !r)
                  for (var i in e)
                    if (e[i].toString().indexOf("{{") >= 0) {
                      r = !0;
                      break
                    }
              }
            }), {
              type: 6,
              styles: n,
              easing: o,
              offset: t.offset,
              containsDynamicStyles: r,
              options: null
            }
          }, t.prototype._validateStyleAst = function (t, e) {
            var n = this,
              r = e.currentAnimateTimings,
              o = e.currentTime,
              i = e.currentTime;
            r && i > 0 && (i -= r.duration + r.delay), t.styles.forEach(function (t) {
              "string" != typeof t && Object.keys(t).forEach(function (r) {
                if (n._driver.validateStyleProperty(r)) {
                  var a, s, l, u = e.collectedStyles[e.currentQuerySelector],
                    c = u[r],
                    h = !0;
                  c && (i != o && i >= c.startTime && o <= c.endTime && (e.errors.push('The CSS property "' + r + '" that exists between the times of "' + c.startTime + 'ms" and "' + c.endTime + 'ms" is also being animated in a parallel animation between the times of "' + i + 'ms" and "' + o + 'ms"'), h = !1), i = c.startTime), h && (u[r] = {
                    startTime: i,
                    endTime: o
                  }), e.options && (a = e.errors, s = e.options.params || {}, (l = $_(t[r])).length && l.forEach(function (t) {
                    s.hasOwnProperty(t) || a.push("Unable to resolve the local animation param " + t + " in the given list of values")
                  }))
                } else e.errors.push('The provided animation property "' + r + '" is not a supported CSS property for animations')
              })
            })
          }, t.prototype.visitKeyframes = function (t, e) {
            var n = this,
              r = {
                type: 5,
                styles: [],
                options: null
              };
            if (!e.currentAnimateTimings) return e.errors.push("keyframes() must be placed inside of a call to animate()"), r;
            var o = 0,
              i = [],
              a = !1,
              s = !1,
              l = 0,
              u = t.steps.map(function (t) {
                var r = n._makeStyleAst(t, e),
                  u = null != r.offset ? r.offset : function (t) {
                    if ("string" == typeof t) return null;
                    var e = null;
                    if (Array.isArray(t)) t.forEach(function (t) {
                      if (fb(t) && t.hasOwnProperty("offset")) {
                        var n = t;
                        e = parseFloat(n.offset), delete n.offset
                      }
                    });
                    else if (fb(t) && t.hasOwnProperty("offset")) {
                      var n = t;
                      e = parseFloat(n.offset), delete n.offset
                    }
                    return e
                  }(r.styles),
                  c = 0;
                return null != u && (o++, c = r.offset = u), s = s || c < 0 || c > 1, a = a || c < l, l = c, i.push(c), r
              });
            s && e.errors.push("Please ensure that all keyframe offsets are between 0 and 1"), a && e.errors.push("Please ensure that all keyframe offsets are in order");
            var c = t.steps.length,
              h = 0;
            o > 0 && o < c ? e.errors.push("Not all style() steps within the declared keyframes() contain offsets") : 0 == o && (h = 1 / (c - 1));
            var p = c - 1,
              f = e.currentTime,
              d = e.currentAnimateTimings,
              m = d.duration;
            return u.forEach(function (t, o) {
              var a = h > 0 ? o == p ? 1 : h * o : i[o],
                s = a * m;
              e.currentTime = f + d.delay + s, d.duration = s, n._validateStyleAst(t, e), t.offset = a, r.styles.push(t)
            }), r
          }, t.prototype.visitReference = function (t, e) {
            return {
              type: 8,
              animation: rb(this, Z_(t.animation), e),
              options: db(t.options)
            }
          }, t.prototype.visitAnimateChild = function (t, e) {
            return e.depCount++, {
              type: 9,
              options: db(t.options)
            }
          }, t.prototype.visitAnimateRef = function (t, e) {
            return {
              type: 10,
              animation: this.visitReference(t.animation, e),
              options: db(t.options)
            }
          }, t.prototype.visitQuery = function (t, e) {
            var n = e.currentQuerySelector,
              r = t.options || {};
            e.queryCount++, e.currentQuery = t;
            var o = c(function (t) {
                var e = !!t.split(/\s*,\s*/).find(function (t) {
                  return ":self" == t
                });
                return e && (t = t.replace(ub, "")), [t = t.replace(/@\*/g, ".ng-trigger").replace(/@\w+/g, function (t) {
                  return ".ng-trigger-" + t.substr(1)
                }).replace(/:animating/g, ".ng-animating"), e]
              }(t.selector), 2),
              i = o[0],
              a = o[1];
            e.currentQuerySelector = n.length ? n + " " + i : i, w_(e.collectedStyles, e.currentQuerySelector, {});
            var s = rb(this, Z_(t.animation), e);
            return e.currentQuery = null, e.currentQuerySelector = n, {
              type: 11,
              selector: i,
              limit: r.limit || 0,
              optional: !!r.optional,
              includeSelf: a,
              animation: s,
              originalSelector: t.selector,
              options: db(t.options)
            }
          }, t.prototype.visitStagger = function (t, e) {
            e.currentQuery || e.errors.push("stagger() can only be used inside of query()");
            var n = "full" === t.timings ? {
              duration: 0,
              delay: 0,
              easing: "full"
            } : B_(t.timings, e.errors, !0);
            return {
              type: 12,
              animation: rb(this, Z_(t.animation), e),
              timings: n,
              options: null
            }
          }, t
        }(),
        pb = function (t) {
          this.errors = t, this.queryCount = 0, this.depCount = 0, this.currentTransition = null, this.currentQuery = null, this.currentQuerySelector = null, this.currentAnimateTimings = null, this.currentTime = 0, this.collectedStyles = {}, this.options = null
        };

      function fb(t) {
        return !Array.isArray(t) && "object" == typeof t
      }

      function db(t) {
        var e;
        return t ? (t = z_(t)).params && (t.params = (e = t.params) ? z_(e) : null) : t = {}, t
      }

      function mb(t, e, n) {
        return {
          duration: t,
          delay: e,
          easing: n
        }
      }

      function yb(t, e, n, r, o, i, a, s) {
        return void 0 === a && (a = null), void 0 === s && (s = !1), {
          type: 1,
          element: t,
          keyframes: e,
          preStyleProps: n,
          postStyleProps: r,
          duration: o,
          delay: i,
          totalTime: o + i,
          easing: a,
          subTimeline: s
        }
      }
      var gb = function () {
          function t() {
            this._map = new Map
          }
          return t.prototype.consume = function (t) {
            var e = this._map.get(t);
            return e ? this._map.delete(t) : e = [], e
          }, t.prototype.append = function (t, e) {
            var n = this._map.get(t);
            n || this._map.set(t, n = []), n.push.apply(n, h(e))
          }, t.prototype.has = function (t) {
            return this._map.has(t)
          }, t.prototype.clear = function () {
            this._map.clear()
          }, t
        }(),
        vb = new RegExp(":enter", "g"),
        _b = new RegExp(":leave", "g");

      function bb(t, e, n, r, o, i, a, s, l, u) {
        return void 0 === i && (i = {}), void 0 === a && (a = {}), void 0 === u && (u = []), (new wb).buildKeyframes(t, e, n, r, o, i, a, s, l, u)
      }
      var wb = function () {
          function t() {}
          return t.prototype.buildKeyframes = function (t, e, n, r, o, i, a, s, l, u) {
            void 0 === u && (u = []), l = l || new gb;
            var c = new Eb(t, e, l, r, o, u, []);
            c.options = s, c.currentTimeline.setStyles([i], null, c.errors, s), rb(this, n, c);
            var h = c.timelines.filter(function (t) {
              return t.containsAnimation()
            });
            if (h.length && Object.keys(a).length) {
              var p = h[h.length - 1];
              p.allowOnlyTimelineStyles() || p.setStyles([a], null, c.errors, s)
            }
            return h.length ? h.map(function (t) {
              return t.buildKeyframes()
            }) : [yb(e, [], [], [], 0, 0, "", !1)]
          }, t.prototype.visitTrigger = function (t, e) {}, t.prototype.visitState = function (t, e) {}, t.prototype.visitTransition = function (t, e) {}, t.prototype.visitAnimateChild = function (t, e) {
            var n = e.subInstructions.consume(e.element);
            if (n) {
              var r = e.createSubContext(t.options),
                o = e.currentTimeline.currentTime,
                i = this._visitSubInstructions(n, r, r.options);
              o != i && e.transformIntoNewTimeline(i)
            }
            e.previousNode = t
          }, t.prototype.visitAnimateRef = function (t, e) {
            var n = e.createSubContext(t.options);
            n.transformIntoNewTimeline(), this.visitReference(t.animation, n), e.transformIntoNewTimeline(n.currentTimeline.currentTime), e.previousNode = t
          }, t.prototype._visitSubInstructions = function (t, e, n) {
            var r = e.currentTimeline.currentTime,
              o = null != n.duration ? L_(n.duration) : null,
              i = null != n.delay ? L_(n.delay) : null;
            return 0 !== o && t.forEach(function (t) {
              var n = e.appendInstructionToTimeline(t, o, i);
              r = Math.max(r, n.duration + n.delay)
            }), r
          }, t.prototype.visitReference = function (t, e) {
            e.updateOptions(t.options, !0), rb(this, t.animation, e), e.previousNode = t
          }, t.prototype.visitSequence = function (t, e) {
            var n = this,
              r = e.subContextCount,
              o = e,
              i = t.options;
            if (i && (i.params || i.delay) && ((o = e.createSubContext(i)).transformIntoNewTimeline(), null != i.delay)) {
              6 == o.previousNode.type && (o.currentTimeline.snapshotCurrentStyles(), o.previousNode = Cb);
              var a = L_(i.delay);
              o.delayNextStep(a)
            }
            t.steps.length && (t.steps.forEach(function (t) {
              return rb(n, t, o)
            }), o.currentTimeline.applyStylesToKeyframe(), o.subContextCount > r && o.transformIntoNewTimeline()), e.previousNode = t
          }, t.prototype.visitGroup = function (t, e) {
            var n = this,
              r = [],
              o = e.currentTimeline.currentTime,
              i = t.options && t.options.delay ? L_(t.options.delay) : 0;
            t.steps.forEach(function (a) {
              var s = e.createSubContext(t.options);
              i && s.delayNextStep(i), rb(n, a, s), o = Math.max(o, s.currentTimeline.currentTime), r.push(s.currentTimeline)
            }), r.forEach(function (t) {
              return e.currentTimeline.mergeTimelineCollectedStyles(t)
            }), e.transformIntoNewTimeline(o), e.previousNode = t
          }, t.prototype._visitTiming = function (t, e) {
            if (t.dynamic) {
              var n = t.strValue;
              return B_(e.params ? Y_(n, e.params, e.errors) : n, e.errors)
            }
            return {
              duration: t.duration,
              delay: t.delay,
              easing: t.easing
            }
          }, t.prototype.visitAnimate = function (t, e) {
            var n = e.currentAnimateTimings = this._visitTiming(t.timings, e),
              r = e.currentTimeline;
            n.delay && (e.incrementTime(n.delay), r.snapshotCurrentStyles());
            var o = t.style;
            5 == o.type ? this.visitKeyframes(o, e) : (e.incrementTime(n.duration), this.visitStyle(o, e), r.applyStylesToKeyframe()), e.currentAnimateTimings = null, e.previousNode = t
          }, t.prototype.visitStyle = function (t, e) {
            var n = e.currentTimeline,
              r = e.currentAnimateTimings;
            !r && n.getCurrentStyleProperties().length && n.forwardFrame();
            var o = r && r.easing || t.easing;
            t.isEmptyStep ? n.applyEmptyStep(o) : n.setStyles(t.styles, o, e.errors, e.options), e.previousNode = t
          }, t.prototype.visitKeyframes = function (t, e) {
            var n = e.currentAnimateTimings,
              r = e.currentTimeline.duration,
              o = n.duration,
              i = e.createSubContext().currentTimeline;
            i.easing = n.easing, t.styles.forEach(function (t) {
              i.forwardTime((t.offset || 0) * o), i.setStyles(t.styles, t.easing, e.errors, e.options), i.applyStylesToKeyframe()
            }), e.currentTimeline.mergeTimelineCollectedStyles(i), e.transformIntoNewTimeline(r + o), e.previousNode = t
          }, t.prototype.visitQuery = function (t, e) {
            var n = this,
              r = e.currentTimeline.currentTime,
              o = t.options || {},
              i = o.delay ? L_(o.delay) : 0;
            i && (6 === e.previousNode.type || 0 == r && e.currentTimeline.getCurrentStyleProperties().length) && (e.currentTimeline.snapshotCurrentStyles(), e.previousNode = Cb);
            var a = r,
              s = e.invokeQuery(t.selector, t.originalSelector, t.limit, t.includeSelf, !!o.optional, e.errors);
            e.currentQueryTotal = s.length;
            var l = null;
            s.forEach(function (r, o) {
              e.currentQueryIndex = o;
              var s = e.createSubContext(t.options, r);
              i && s.delayNextStep(i), r === e.element && (l = s.currentTimeline), rb(n, t.animation, s), s.currentTimeline.applyStylesToKeyframe(), a = Math.max(a, s.currentTimeline.currentTime)
            }), e.currentQueryIndex = 0, e.currentQueryTotal = 0, e.transformIntoNewTimeline(a), l && (e.currentTimeline.mergeTimelineCollectedStyles(l), e.currentTimeline.snapshotCurrentStyles()), e.previousNode = t
          }, t.prototype.visitStagger = function (t, e) {
            var n = e.parentContext,
              r = e.currentTimeline,
              o = t.timings,
              i = Math.abs(o.duration),
              a = i * (e.currentQueryTotal - 1),
              s = i * e.currentQueryIndex;
            switch (o.duration < 0 ? "reverse" : o.easing) {
              case "reverse":
                s = a - s;
                break;
              case "full":
                s = n.currentStaggerTime
            }
            var l = e.currentTimeline;
            s && l.delayNextStep(s);
            var u = l.currentTime;
            rb(this, t.animation, e), e.previousNode = t, n.currentStaggerTime = r.currentTime - u + (r.startTime - n.currentTimeline.startTime)
          }, t
        }(),
        Cb = {},
        Eb = function () {
          function t(t, e, n, r, o, i, a, s) {
            this._driver = t, this.element = e, this.subInstructions = n, this._enterClassName = r, this._leaveClassName = o, this.errors = i, this.timelines = a, this.parentContext = null, this.currentAnimateTimings = null, this.previousNode = Cb, this.subContextCount = 0, this.options = {}, this.currentQueryIndex = 0, this.currentQueryTotal = 0, this.currentStaggerTime = 0, this.currentTimeline = s || new Sb(this._driver, e, 0), a.push(this.currentTimeline)
          }
          return Object.defineProperty(t.prototype, "params", {
            get: function () {
              return this.options.params
            },
            enumerable: !0,
            configurable: !0
          }), t.prototype.updateOptions = function (t, e) {
            var n = this;
            if (t) {
              var r = t,
                o = this.options;
              null != r.duration && (o.duration = L_(r.duration)), null != r.delay && (o.delay = L_(r.delay));
              var i = r.params;
              if (i) {
                var a = o.params;
                a || (a = this.options.params = {}), Object.keys(i).forEach(function (t) {
                  e && a.hasOwnProperty(t) || (a[t] = Y_(i[t], a, n.errors))
                })
              }
            }
          }, t.prototype._copyOptions = function () {
            var t = {};
            if (this.options) {
              var e = this.options.params;
              if (e) {
                var n = t.params = {};
                Object.keys(e).forEach(function (t) {
                  n[t] = e[t]
                })
              }
            }
            return t
          }, t.prototype.createSubContext = function (e, n, r) {
            void 0 === e && (e = null);
            var o = n || this.element,
              i = new t(this._driver, o, this.subInstructions, this._enterClassName, this._leaveClassName, this.errors, this.timelines, this.currentTimeline.fork(o, r || 0));
            return i.previousNode = this.previousNode, i.currentAnimateTimings = this.currentAnimateTimings, i.options = this._copyOptions(), i.updateOptions(e), i.currentQueryIndex = this.currentQueryIndex, i.currentQueryTotal = this.currentQueryTotal, i.parentContext = this, this.subContextCount++, i
          }, t.prototype.transformIntoNewTimeline = function (t) {
            return this.previousNode = Cb, this.currentTimeline = this.currentTimeline.fork(this.element, t), this.timelines.push(this.currentTimeline), this.currentTimeline
          }, t.prototype.appendInstructionToTimeline = function (t, e, n) {
            var r = {
                duration: null != e ? e : t.duration,
                delay: this.currentTimeline.currentTime + (null != n ? n : 0) + t.delay,
                easing: ""
              },
              o = new xb(this._driver, t.element, t.keyframes, t.preStyleProps, t.postStyleProps, r, t.stretchStartingKeyframe);
            return this.timelines.push(o), r
          }, t.prototype.incrementTime = function (t) {
            this.currentTimeline.forwardTime(this.currentTimeline.duration + t)
          }, t.prototype.delayNextStep = function (t) {
            t > 0 && this.currentTimeline.delayNextStep(t)
          }, t.prototype.invokeQuery = function (t, e, n, r, o, i) {
            var a = [];
            if (r && a.push(this.element), t.length > 0) {
              t = (t = t.replace(vb, "." + this._enterClassName)).replace(_b, "." + this._leaveClassName);
              var s = this._driver.query(this.element, t, 1 != n);
              0 !== n && (s = n < 0 ? s.slice(s.length + n, s.length) : s.slice(0, n)), a.push.apply(a, h(s))
            }
            return o || 0 != a.length || i.push('`query("' + e + '")` returned zero elements. (Use `query("' + e + '", { optional: true })` if you wish to allow this.)'), a
          }, t
        }(),
        Sb = function () {
          function t(t, e, n, r) {
            this._driver = t, this.element = e, this.startTime = n, this._elementTimelineStylesLookup = r, this.duration = 0, this._previousKeyframe = {}, this._currentKeyframe = {}, this._keyframes = new Map, this._styleSummary = {}, this._pendingStyles = {}, this._backFill = {}, this._currentEmptyStepKeyframe = null, this._elementTimelineStylesLookup || (this._elementTimelineStylesLookup = new Map), this._localTimelineStyles = Object.create(this._backFill, {}), this._globalTimelineStyles = this._elementTimelineStylesLookup.get(e), this._globalTimelineStyles || (this._globalTimelineStyles = this._localTimelineStyles, this._elementTimelineStylesLookup.set(e, this._localTimelineStyles)), this._loadKeyframe()
          }
          return t.prototype.containsAnimation = function () {
            switch (this._keyframes.size) {
              case 0:
                return !1;
              case 1:
                return this.getCurrentStyleProperties().length > 0;
              default:
                return !0
            }
          }, t.prototype.getCurrentStyleProperties = function () {
            return Object.keys(this._currentKeyframe)
          }, Object.defineProperty(t.prototype, "currentTime", {
            get: function () {
              return this.startTime + this.duration
            },
            enumerable: !0,
            configurable: !0
          }), t.prototype.delayNextStep = function (t) {
            var e = 1 == this._keyframes.size && Object.keys(this._pendingStyles).length;
            this.duration || e ? (this.forwardTime(this.currentTime + t), e && this.snapshotCurrentStyles()) : this.startTime += t
          }, t.prototype.fork = function (e, n) {
            return this.applyStylesToKeyframe(), new t(this._driver, e, n || this.currentTime, this._elementTimelineStylesLookup)
          }, t.prototype._loadKeyframe = function () {
            this._currentKeyframe && (this._previousKeyframe = this._currentKeyframe), this._currentKeyframe = this._keyframes.get(this.duration), this._currentKeyframe || (this._currentKeyframe = Object.create(this._backFill, {}), this._keyframes.set(this.duration, this._currentKeyframe))
          }, t.prototype.forwardFrame = function () {
            this.duration += 1, this._loadKeyframe()
          }, t.prototype.forwardTime = function (t) {
            this.applyStylesToKeyframe(), this.duration = t, this._loadKeyframe()
          }, t.prototype._updateStyle = function (t, e) {
            this._localTimelineStyles[t] = e, this._globalTimelineStyles[t] = e, this._styleSummary[t] = {
              time: this.currentTime,
              value: e
            }
          }, t.prototype.allowOnlyTimelineStyles = function () {
            return this._currentEmptyStepKeyframe !== this._currentKeyframe
          }, t.prototype.applyEmptyStep = function (t) {
            var e = this;
            t && (this._previousKeyframe.easing = t), Object.keys(this._globalTimelineStyles).forEach(function (t) {
              e._backFill[t] = e._globalTimelineStyles[t] || sp, e._currentKeyframe[t] = sp
            }), this._currentEmptyStepKeyframe = this._currentKeyframe
          }, t.prototype.setStyles = function (t, e, n, r) {
            var o = this;
            e && (this._previousKeyframe.easing = e);
            var i = r && r.params || {},
              a = function (t, e) {
                var n, r = {};
                return t.forEach(function (t) {
                  "*" === t ? (n = n || Object.keys(e)).forEach(function (t) {
                    r[t] = sp
                  }) : U_(t, !1, r)
                }), r
              }(t, this._globalTimelineStyles);
            Object.keys(a).forEach(function (t) {
              var e = Y_(a[t], i, n);
              o._pendingStyles[t] = e, o._localTimelineStyles.hasOwnProperty(t) || (o._backFill[t] = o._globalTimelineStyles.hasOwnProperty(t) ? o._globalTimelineStyles[t] : sp), o._updateStyle(t, e)
            })
          }, t.prototype.applyStylesToKeyframe = function () {
            var t = this,
              e = this._pendingStyles,
              n = Object.keys(e);
            0 != n.length && (this._pendingStyles = {}, n.forEach(function (n) {
              t._currentKeyframe[n] = e[n]
            }), Object.keys(this._localTimelineStyles).forEach(function (e) {
              t._currentKeyframe.hasOwnProperty(e) || (t._currentKeyframe[e] = t._localTimelineStyles[e])
            }))
          }, t.prototype.snapshotCurrentStyles = function () {
            var t = this;
            Object.keys(this._localTimelineStyles).forEach(function (e) {
              var n = t._localTimelineStyles[e];
              t._pendingStyles[e] = n, t._updateStyle(e, n)
            })
          }, t.prototype.getFinalKeyframe = function () {
            return this._keyframes.get(this.duration)
          }, Object.defineProperty(t.prototype, "properties", {
            get: function () {
              var t = [];
              for (var e in this._currentKeyframe) t.push(e);
              return t
            },
            enumerable: !0,
            configurable: !0
          }), t.prototype.mergeTimelineCollectedStyles = function (t) {
            var e = this;
            Object.keys(t._styleSummary).forEach(function (n) {
              var r = e._styleSummary[n],
                o = t._styleSummary[n];
              (!r || o.time > r.time) && e._updateStyle(n, o.value)
            })
          }, t.prototype.buildKeyframes = function () {
            var t = this;
            this.applyStylesToKeyframe();
            var e = new Set,
              n = new Set,
              r = 1 === this._keyframes.size && 0 === this.duration,
              o = [];
            this._keyframes.forEach(function (i, a) {
              var s = U_(i, !0);
              Object.keys(s).forEach(function (t) {
                var r = s[t];
                r == fp ? e.add(t) : r == sp && n.add(t)
              }), r || (s.offset = a / t.duration), o.push(s)
            });
            var i = e.size ? X_(e.values()) : [],
              a = n.size ? X_(n.values()) : [];
            if (r) {
              var s = o[0],
                l = z_(s);
              s.offset = 0, l.offset = 1, o = [s, l]
            }
            return yb(this.element, o, i, a, this.duration, this.startTime, this.easing, !1)
          }, t
        }(),
        xb = function (t) {
          function e(e, n, r, o, i, a, s) {
            void 0 === s && (s = !1);
            var l = t.call(this, e, n, a.delay) || this;
            return l.element = n, l.keyframes = r, l.preStyleProps = o, l.postStyleProps = i, l._stretchStartingKeyframe = s, l.timings = {
              duration: a.duration,
              delay: a.delay,
              easing: a.easing
            }, l
          }
          return o(e, t), e.prototype.containsAnimation = function () {
            return this.keyframes.length > 1
          }, e.prototype.buildKeyframes = function () {
            var t = this.keyframes,
              e = this.timings,
              n = e.delay,
              r = e.duration,
              o = e.easing;
            if (this._stretchStartingKeyframe && n) {
              var i = [],
                a = r + n,
                s = n / a,
                l = U_(t[0], !1);
              l.offset = 0, i.push(l);
              var u = U_(t[0], !1);
              u.offset = kb(s), i.push(u);
              for (var c = t.length - 1, h = 1; h <= c; h++) {
                var p = U_(t[h], !1);
                p.offset = kb((n + p.offset * r) / a), i.push(p)
              }
              r = a, n = 0, o = "", t = i
            }
            return yb(this.element, t, this.preStyleProps, this.postStyleProps, r, n, o, !0)
          }, e
        }(Sb);

      function kb(t, e) {
        void 0 === e && (e = 3);
        var n = Math.pow(10, e - 1);
        return Math.round(t * n) / n
      }
      var Pb = function () {},
        Tb = function (t) {
          function e() {
            return null !== t && t.apply(this, arguments) || this
          }
          return o(e, t), e.prototype.normalizePropertyName = function (t, e) {
            return tb(t)
          }, e.prototype.normalizeStyleValue = function (t, e, n, r) {
            var o = "",
              i = n.toString().trim();
            if (Ob[e] && 0 !== n && "0" !== n)
              if ("number" == typeof n) o = "px";
              else {
                var a = n.match(/^[+-]?[\d\.]+([a-z]*)$/);
                a && 0 == a[1].length && r.push("Please provide a CSS unit value for " + t + ":" + n)
              } return i + o
          }, e
        }(Pb),
        Ob = function (t) {
          var e = {};
          return "width,height,minWidth,minHeight,maxWidth,maxHeight,left,top,bottom,right,fontSize,outlineWidth,outlineOffset,paddingTop,paddingLeft,paddingBottom,paddingRight,marginTop,marginLeft,marginBottom,marginRight,borderRadius,borderWidth,borderTopWidth,borderLeftWidth,borderRightWidth,borderBottomWidth,textIndent,perspective".split(",").forEach(function (t) {
            return e[t] = !0
          }), e
        }();

      function Ab(t, e, n, r, o, i, a, s, l, u, c, h, p) {
        return {
          type: 0,
          element: t,
          triggerName: e,
          isRemovalTransition: o,
          fromState: n,
          fromStyles: i,
          toState: r,
          toStyles: a,
          timelines: s,
          queriedElements: l,
          preStyleProps: u,
          postStyleProps: c,
          totalTime: h,
          errors: p
        }
      }
      var Ib = {},
        Rb = function () {
          function t(t, e, n) {
            this._triggerName = t, this.ast = e, this._stateStyles = n
          }
          return t.prototype.match = function (t, e, n, r) {
            return function (t, e, n, r, o) {
              return t.some(function (t) {
                return t(e, n, r, o)
              })
            }(this.ast.matchers, t, e, n, r)
          }, t.prototype.buildStyles = function (t, e, n) {
            var r = this._stateStyles["*"],
              o = this._stateStyles[t],
              i = r ? r.buildStyles(e, n) : {};
            return o ? o.buildStyles(e, n) : i
          }, t.prototype.build = function (t, e, n, r, o, a, s, l, u, c) {
            var h = [],
              p = this.ast.options && this.ast.options.params || Ib,
              f = this.buildStyles(n, s && s.params || Ib, h),
              d = l && l.params || Ib,
              m = this.buildStyles(r, d, h),
              y = new Set,
              g = new Map,
              v = new Map,
              _ = "void" === r,
              b = {
                params: i({}, p, d)
              },
              w = c ? [] : bb(t, e, this.ast.animation, o, a, f, m, b, u, h),
              C = 0;
            if (w.forEach(function (t) {
                C = Math.max(t.duration + t.delay, C)
              }), h.length) return Ab(e, this._triggerName, n, r, _, f, m, [], [], g, v, C, h);
            w.forEach(function (t) {
              var n = t.element,
                r = w_(g, n, {});
              t.preStyleProps.forEach(function (t) {
                return r[t] = !0
              });
              var o = w_(v, n, {});
              t.postStyleProps.forEach(function (t) {
                return o[t] = !0
              }), n !== e && y.add(n)
            });
            var E = X_(y.values());
            return Ab(e, this._triggerName, n, r, _, f, m, w, E, g, v, C)
          }, t
        }(),
        Db = function () {
          function t(t, e) {
            this.styles = t, this.defaultParams = e
          }
          return t.prototype.buildStyles = function (t, e) {
            var n = {},
              r = z_(this.defaultParams);
            return Object.keys(t).forEach(function (e) {
              var n = t[e];
              null != n && (r[e] = n)
            }), this.styles.styles.forEach(function (t) {
              if ("string" != typeof t) {
                var o = t;
                Object.keys(o).forEach(function (t) {
                  var i = o[t];
                  i.length > 1 && (i = Y_(i, r, e)), n[t] = i
                })
              }
            }), n
          }, t
        }(),
        Nb = function () {
          function t(t, e) {
            var n = this;
            this.name = t, this.ast = e, this.transitionFactories = [], this.states = {}, e.states.forEach(function (t) {
              n.states[t.name] = new Db(t.style, t.options && t.options.params || {})
            }), Mb(this.states, "true", "1"), Mb(this.states, "false", "0"), e.transitions.forEach(function (e) {
              n.transitionFactories.push(new Rb(t, e, n.states))
            }), this.fallbackTransition = new Rb(t, {
              type: 1,
              animation: {
                type: 2,
                steps: [],
                options: null
              },
              matchers: [function (t, e) {
                return !0
              }],
              options: null,
              queryCount: 0,
              depCount: 0
            }, this.states)
          }
          return Object.defineProperty(t.prototype, "containsQueries", {
            get: function () {
              return this.ast.queryCount > 0
            },
            enumerable: !0,
            configurable: !0
          }), t.prototype.matchTransition = function (t, e, n, r) {
            return this.transitionFactories.find(function (o) {
              return o.match(t, e, n, r)
            }) || null
          }, t.prototype.matchStyles = function (t, e, n) {
            return this.fallbackTransition.buildStyles(t, e, n)
          }, t
        }();

      function Mb(t, e, n) {
        t.hasOwnProperty(e) ? t.hasOwnProperty(n) || (t[n] = t[e]) : t.hasOwnProperty(n) && (t[e] = t[n])
      }
      var jb = new gb,
        Fb = function () {
          function t(t, e, n) {
            this.bodyNode = t, this._driver = e, this._normalizer = n, this._animations = {}, this._playersById = {}, this.players = []
          }
          return t.prototype.register = function (t, e) {
            var n = [],
              r = cb(this._driver, e, n);
            if (n.length) throw new Error("Unable to build the animation due to the following errors: " + n.join("\n"));
            this._animations[t] = r
          }, t.prototype._buildPlayer = function (t, e, n) {
            var r = t.element,
              o = g_(0, this._normalizer, 0, t.keyframes, e, n);
            return this._driver.animate(r, o, t.duration, t.delay, t.easing, [], !0)
          }, t.prototype.create = function (t, e, n) {
            var r = this;
            void 0 === n && (n = {});
            var o, i = [],
              a = this._animations[t],
              s = new Map;
            if (a ? (o = bb(this._driver, e, a, "ng-enter", "ng-leave", {}, {}, n, jb, i)).forEach(function (t) {
                var e = w_(s, t.element, {});
                t.postStyleProps.forEach(function (t) {
                  return e[t] = null
                })
              }) : (i.push("The requested animation doesn't exist or has already been destroyed"), o = []), i.length) throw new Error("Unable to create the animation due to the following errors: " + i.join("\n"));
            s.forEach(function (t, e) {
              Object.keys(t).forEach(function (n) {
                t[n] = r._driver.computeStyle(e, n, sp)
              })
            });
            var l = y_(o.map(function (t) {
              var e = s.get(t.element);
              return r._buildPlayer(t, {}, e)
            }));
            return this._playersById[t] = l, l.onDestroy(function () {
              return r.destroy(t)
            }), this.players.push(l), l
          }, t.prototype.destroy = function (t) {
            var e = this._getPlayer(t);
            e.destroy(), delete this._playersById[t];
            var n = this.players.indexOf(e);
            n >= 0 && this.players.splice(n, 1)
          }, t.prototype._getPlayer = function (t) {
            var e = this._playersById[t];
            if (!e) throw new Error("Unable to find the timeline player referenced by " + t);
            return e
          }, t.prototype.listen = function (t, e, n, r) {
            var o = b_(e, "", "", "");
            return v_(this._getPlayer(t), n, o, r),
              function () {}
          }, t.prototype.command = function (t, e, n, r) {
            if ("register" != n)
              if ("create" != n) {
                var o = this._getPlayer(t);
                switch (n) {
                  case "play":
                    o.play();
                    break;
                  case "pause":
                    o.pause();
                    break;
                  case "reset":
                    o.reset();
                    break;
                  case "restart":
                    o.restart();
                    break;
                  case "finish":
                    o.finish();
                    break;
                  case "init":
                    o.init();
                    break;
                  case "setPosition":
                    o.setPosition(parseFloat(r[0]));
                    break;
                  case "destroy":
                    this.destroy(t)
                }
              } else this.create(t, e, r[0] || {});
            else this.register(t, r[0])
          }, t
        }(),
        Vb = [],
        Lb = {
          namespaceId: "",
          setForRemoval: !1,
          setForMove: !1,
          hasAnimation: !1,
          removedBeforeQueried: !1
        },
        Hb = {
          namespaceId: "",
          setForMove: !1,
          setForRemoval: !1,
          hasAnimation: !1,
          removedBeforeQueried: !0
        },
        Bb = "__ng_removed",
        zb = function () {
          function t(t, e) {
            void 0 === e && (e = ""), this.namespaceId = e;
            var n = t && t.hasOwnProperty("value");
            if (this.value = function (t) {
                return null != t ? t : null
              }(n ? t.value : t), n) {
              var r = z_(t);
              delete r.value, this.options = r
            } else this.options = {};
            this.options.params || (this.options.params = {})
          }
          return Object.defineProperty(t.prototype, "params", {
            get: function () {
              return this.options.params
            },
            enumerable: !0,
            configurable: !0
          }), t.prototype.absorbOptions = function (t) {
            var e = t.params;
            if (e) {
              var n = this.options.params;
              Object.keys(e).forEach(function (t) {
                null == n[t] && (n[t] = e[t])
              })
            }
          }, t
        }(),
        Ub = new zb("void"),
        qb = function () {
          function t(t, e, n) {
            this.id = t, this.hostElement = e, this._engine = n, this.players = [], this._triggers = {}, this._queue = [], this._elementListeners = new Map, this._hostClassName = "ng-tns-" + t, Xb(e, this._hostClassName)
          }
          return t.prototype.listen = function (t, e, n, r) {
            var o, i = this;
            if (!this._triggers.hasOwnProperty(e)) throw new Error('Unable to listen on the animation trigger event "' + n + '" because the animation trigger "' + e + "\" doesn't exist!");
            if (null == n || 0 == n.length) throw new Error('Unable to listen on the animation trigger "' + e + '" because the provided event is undefined!');
            if ("start" != (o = n) && "done" != o) throw new Error('The provided animation trigger event "' + n + '" for the animation trigger "' + e + '" is not supported!');
            var a = w_(this._elementListeners, t, []),
              s = {
                name: e,
                phase: n,
                callback: r
              };
            a.push(s);
            var l = w_(this._engine.statesByElement, t, {});
            return l.hasOwnProperty(e) || (Xb(t, "ng-trigger"), Xb(t, "ng-trigger-" + e), l[e] = Ub),
              function () {
                i._engine.afterFlush(function () {
                  var t = a.indexOf(s);
                  t >= 0 && a.splice(t, 1), i._triggers[e] || delete l[e]
                })
              }
          }, t.prototype.register = function (t, e) {
            return !this._triggers[t] && (this._triggers[t] = e, !0)
          }, t.prototype._getTrigger = function (t) {
            var e = this._triggers[t];
            if (!e) throw new Error('The provided animation trigger "' + t + '" has not been registered!');
            return e
          }, t.prototype.trigger = function (t, e, n, r) {
            var o = this;
            void 0 === r && (r = !0);
            var i = this._getTrigger(e),
              a = new Qb(this.id, e, t),
              s = this._engine.statesByElement.get(t);
            s || (Xb(t, "ng-trigger"), Xb(t, "ng-trigger-" + e), this._engine.statesByElement.set(t, s = {}));
            var l = s[e],
              u = new zb(n, this.id);
            if (!(n && n.hasOwnProperty("value")) && l && u.absorbOptions(l.options), s[e] = u, l || (l = Ub), "void" === u.value || l.value !== u.value) {
              var c = w_(this._engine.playersByElement, t, []);
              c.forEach(function (t) {
                t.namespaceId == o.id && t.triggerName == e && t.queued && t.destroy()
              });
              var h = i.matchTransition(l.value, u.value, t, u.params),
                p = !1;
              if (!h) {
                if (!r) return;
                h = i.fallbackTransition, p = !0
              }
              return this._engine.totalQueuedPlayers++, this._queue.push({
                element: t,
                triggerName: e,
                transition: h,
                fromState: l,
                toState: u,
                player: a,
                isFallbackTransition: p
              }), p || (Xb(t, "ng-animate-queued"), a.onStart(function () {
                Jb(t, "ng-animate-queued")
              })), a.onDone(function () {
                var e = o.players.indexOf(a);
                e >= 0 && o.players.splice(e, 1);
                var n = o._engine.playersByElement.get(t);
                if (n) {
                  var r = n.indexOf(a);
                  r >= 0 && n.splice(r, 1)
                }
              }), this.players.push(a), c.push(a), a
            }
            if (! function (t, e) {
                var n = Object.keys(t),
                  r = Object.keys(e);
                if (n.length != r.length) return !1;
                for (var o = 0; o < n.length; o++) {
                  var i = n[o];
                  if (!e.hasOwnProperty(i) || t[i] !== e[i]) return !1
                }
                return !0
              }(l.params, u.params)) {
              var f = [],
                d = i.matchStyles(l.value, l.params, f),
                m = i.matchStyles(u.value, u.params, f);
              f.length ? this._engine.reportError(f) : this._engine.afterFlush(function () {
                W_(t, d), Q_(t, m)
              })
            }
          }, t.prototype.deregister = function (t) {
            var e = this;
            delete this._triggers[t], this._engine.statesByElement.forEach(function (e, n) {
              delete e[t]
            }), this._elementListeners.forEach(function (n, r) {
              e._elementListeners.set(r, n.filter(function (e) {
                return e.name != t
              }))
            })
          }, t.prototype.clearElementCache = function (t) {
            this._engine.statesByElement.delete(t), this._elementListeners.delete(t);
            var e = this._engine.playersByElement.get(t);
            e && (e.forEach(function (t) {
              return t.destroy()
            }), this._engine.playersByElement.delete(t))
          }, t.prototype._signalRemovalForInnerTriggers = function (t, e, n) {
            var r = this;
            void 0 === n && (n = !1), this._engine.driver.query(t, ".ng-trigger", !0).forEach(function (t) {
              if (!t[Bb]) {
                var n = r._engine.fetchNamespacesByElement(t);
                n.size ? n.forEach(function (n) {
                  return n.triggerLeaveAnimation(t, e, !1, !0)
                }) : r.clearElementCache(t)
              }
            })
          }, t.prototype.triggerLeaveAnimation = function (t, e, n, r) {
            var o = this,
              i = this._engine.statesByElement.get(t);
            if (i) {
              var a = [];
              if (Object.keys(i).forEach(function (e) {
                  if (o._triggers[e]) {
                    var n = o.trigger(t, e, "void", r);
                    n && a.push(n)
                  }
                }), a.length) return this._engine.markElementAsRemoved(this.id, t, !0, e), n && y_(a).onDone(function () {
                return o._engine.processLeaveNode(t)
              }), !0
            }
            return !1
          }, t.prototype.prepareLeaveAnimationListeners = function (t) {
            var e = this,
              n = this._elementListeners.get(t);
            if (n) {
              var r = new Set;
              n.forEach(function (n) {
                var o = n.name;
                if (!r.has(o)) {
                  r.add(o);
                  var i = e._triggers[o].fallbackTransition,
                    a = e._engine.statesByElement.get(t)[o] || Ub,
                    s = new zb("void"),
                    l = new Qb(e.id, o, t);
                  e._engine.totalQueuedPlayers++, e._queue.push({
                    element: t,
                    triggerName: o,
                    transition: i,
                    fromState: a,
                    toState: s,
                    player: l,
                    isFallbackTransition: !0
                  })
                }
              })
            }
          }, t.prototype.removeNode = function (t, e) {
            var n = this,
              r = this._engine;
            if (t.childElementCount && this._signalRemovalForInnerTriggers(t, e, !0), !this.triggerLeaveAnimation(t, e, !0)) {
              var o = !1;
              if (r.totalAnimations) {
                var i = r.players.length ? r.playersByQueriedElement.get(t) : [];
                if (i && i.length) o = !0;
                else
                  for (var a = t; a = a.parentNode;)
                    if (r.statesByElement.get(a)) {
                      o = !0;
                      break
                    }
              }
              this.prepareLeaveAnimationListeners(t), o ? r.markElementAsRemoved(this.id, t, !1, e) : (r.afterFlush(function () {
                return n.clearElementCache(t)
              }), r.destroyInnerAnimations(t), r._onRemovalComplete(t, e))
            }
          }, t.prototype.insertNode = function (t, e) {
            Xb(t, this._hostClassName)
          }, t.prototype.drainQueuedTransitions = function (t) {
            var e = this,
              n = [];
            return this._queue.forEach(function (r) {
              var o = r.player;
              if (!o.destroyed) {
                var i = r.element,
                  a = e._elementListeners.get(i);
                a && a.forEach(function (e) {
                  if (e.name == r.triggerName) {
                    var n = b_(i, r.triggerName, r.fromState.value, r.toState.value);
                    n._data = t, v_(r.player, e.phase, n, e.callback)
                  }
                }), o.markedForDestroy ? e._engine.afterFlush(function () {
                  o.destroy()
                }) : n.push(r)
              }
            }), this._queue = [], n.sort(function (t, n) {
              var r = t.transition.ast.depCount,
                o = n.transition.ast.depCount;
              return 0 == r || 0 == o ? r - o : e._engine.driver.containsElement(t.element, n.element) ? 1 : -1
            })
          }, t.prototype.destroy = function (t) {
            this.players.forEach(function (t) {
              return t.destroy()
            }), this._signalRemovalForInnerTriggers(this.hostElement, t)
          }, t.prototype.elementContainsData = function (t) {
            var e = !1;
            return this._elementListeners.has(t) && (e = !0), !!this._queue.find(function (e) {
              return e.element === t
            }) || e
          }, t
        }(),
        Gb = function () {
          function t(t, e, n) {
            this.bodyNode = t, this.driver = e, this._normalizer = n, this.players = [], this.newHostElements = new Map, this.playersByElement = new Map, this.playersByQueriedElement = new Map, this.statesByElement = new Map, this.disabledNodes = new Set, this.totalAnimations = 0, this.totalQueuedPlayers = 0, this._namespaceLookup = {}, this._namespaceList = [], this._flushFns = [], this._whenQuietFns = [], this.namespacesByHostElement = new Map, this.collectedEnterElements = [], this.collectedLeaveElements = [], this.onRemovalComplete = function (t, e) {}
          }
          return t.prototype._onRemovalComplete = function (t, e) {
            this.onRemovalComplete(t, e)
          }, Object.defineProperty(t.prototype, "queuedPlayers", {
            get: function () {
              var t = [];
              return this._namespaceList.forEach(function (e) {
                e.players.forEach(function (e) {
                  e.queued && t.push(e)
                })
              }), t
            },
            enumerable: !0,
            configurable: !0
          }), t.prototype.createNamespace = function (t, e) {
            var n = new qb(t, e, this);
            return e.parentNode ? this._balanceNamespaceList(n, e) : (this.newHostElements.set(e, n), this.collectEnterElement(e)), this._namespaceLookup[t] = n
          }, t.prototype._balanceNamespaceList = function (t, e) {
            var n = this._namespaceList.length - 1;
            if (n >= 0) {
              for (var r = !1, o = n; o >= 0; o--)
                if (this.driver.containsElement(this._namespaceList[o].hostElement, e)) {
                  this._namespaceList.splice(o + 1, 0, t), r = !0;
                  break
                } r || this._namespaceList.splice(0, 0, t)
            } else this._namespaceList.push(t);
            return this.namespacesByHostElement.set(e, t), t
          }, t.prototype.register = function (t, e) {
            var n = this._namespaceLookup[t];
            return n || (n = this.createNamespace(t, e)), n
          }, t.prototype.registerTrigger = function (t, e, n) {
            var r = this._namespaceLookup[t];
            r && r.register(e, n) && this.totalAnimations++
          }, t.prototype.destroy = function (t, e) {
            var n = this;
            if (t) {
              var r = this._fetchNamespace(t);
              this.afterFlush(function () {
                n.namespacesByHostElement.delete(r.hostElement), delete n._namespaceLookup[t];
                var e = n._namespaceList.indexOf(r);
                e >= 0 && n._namespaceList.splice(e, 1)
              }), this.afterFlushAnimationsDone(function () {
                return r.destroy(e)
              })
            }
          }, t.prototype._fetchNamespace = function (t) {
            return this._namespaceLookup[t]
          }, t.prototype.fetchNamespacesByElement = function (t) {
            var e = new Set,
              n = this.statesByElement.get(t);
            if (n)
              for (var r = Object.keys(n), o = 0; o < r.length; o++) {
                var i = n[r[o]].namespaceId;
                if (i) {
                  var a = this._fetchNamespace(i);
                  a && e.add(a)
                }
              }
            return e
          }, t.prototype.trigger = function (t, e, n, r) {
            if (Wb(e)) {
              var o = this._fetchNamespace(t);
              if (o) return o.trigger(e, n, r), !0
            }
            return !1
          }, t.prototype.insertNode = function (t, e, n, r) {
            if (Wb(e)) {
              var o = e[Bb];
              if (o && o.setForRemoval) {
                o.setForRemoval = !1, o.setForMove = !0;
                var i = this.collectedLeaveElements.indexOf(e);
                i >= 0 && this.collectedLeaveElements.splice(i, 1)
              }
              if (t) {
                var a = this._fetchNamespace(t);
                a && a.insertNode(e, n)
              }
              r && this.collectEnterElement(e)
            }
          }, t.prototype.collectEnterElement = function (t) {
            this.collectedEnterElements.push(t)
          }, t.prototype.markElementAsDisabled = function (t, e) {
            e ? this.disabledNodes.has(t) || (this.disabledNodes.add(t), Xb(t, "ng-animate-disabled")) : this.disabledNodes.has(t) && (this.disabledNodes.delete(t), Jb(t, "ng-animate-disabled"))
          }, t.prototype.removeNode = function (t, e, n) {
            if (Wb(e)) {
              var r = t ? this._fetchNamespace(t) : null;
              r ? r.removeNode(e, n) : this.markElementAsRemoved(t, e, !1, n)
            } else this._onRemovalComplete(e, n)
          }, t.prototype.markElementAsRemoved = function (t, e, n, r) {
            this.collectedLeaveElements.push(e), e[Bb] = {
              namespaceId: t,
              setForRemoval: r,
              hasAnimation: n,
              removedBeforeQueried: !1
            }
          }, t.prototype.listen = function (t, e, n, r, o) {
            return Wb(e) ? this._fetchNamespace(t).listen(e, n, r, o) : function () {}
          }, t.prototype._buildInstruction = function (t, e, n, r, o) {
            return t.transition.build(this.driver, t.element, t.fromState.value, t.toState.value, n, r, t.fromState.options, t.toState.options, e, o)
          }, t.prototype.destroyInnerAnimations = function (t) {
            var e = this,
              n = this.driver.query(t, ".ng-trigger", !0);
            n.forEach(function (t) {
              return e.destroyActiveAnimationsForElement(t)
            }), 0 != this.playersByQueriedElement.size && (n = this.driver.query(t, ".ng-animating", !0)).forEach(function (t) {
              return e.finishActiveQueriedAnimationOnElement(t)
            })
          }, t.prototype.destroyActiveAnimationsForElement = function (t) {
            var e = this.playersByElement.get(t);
            e && e.forEach(function (t) {
              t.queued ? t.markedForDestroy = !0 : t.destroy()
            })
          }, t.prototype.finishActiveQueriedAnimationOnElement = function (t) {
            var e = this.playersByQueriedElement.get(t);
            e && e.forEach(function (t) {
              return t.finish()
            })
          }, t.prototype.whenRenderingDone = function () {
            var t = this;
            return new Promise(function (e) {
              if (t.players.length) return y_(t.players).onDone(function () {
                return e()
              });
              e()
            })
          }, t.prototype.processLeaveNode = function (t) {
            var e = this,
              n = t[Bb];
            if (n && n.setForRemoval) {
              if (t[Bb] = Lb, n.namespaceId) {
                this.destroyInnerAnimations(t);
                var r = this._fetchNamespace(n.namespaceId);
                r && r.clearElementCache(t)
              }
              this._onRemovalComplete(t, n.setForRemoval)
            }
            this.driver.matchesElement(t, ".ng-animate-disabled") && this.markElementAsDisabled(t, !1), this.driver.query(t, ".ng-animate-disabled", !0).forEach(function (n) {
              e.markElementAsDisabled(t, !1)
            })
          }, t.prototype.flush = function (t) {
            var e = this;
            void 0 === t && (t = -1);
            var n = [];
            if (this.newHostElements.size && (this.newHostElements.forEach(function (t, n) {
                return e._balanceNamespaceList(t, n)
              }), this.newHostElements.clear()), this.totalAnimations && this.collectedEnterElements.length)
              for (var r = 0; r < this.collectedEnterElements.length; r++) Xb(this.collectedEnterElements[r], "ng-star-inserted");
            if (this._namespaceList.length && (this.totalQueuedPlayers || this.collectedLeaveElements.length)) {
              var o = [];
              try {
                n = this._flushAnimations(o, t)
              } finally {
                for (r = 0; r < o.length; r++) o[r]()
              }
            } else
              for (r = 0; r < this.collectedLeaveElements.length; r++) this.processLeaveNode(this.collectedLeaveElements[r]);
            if (this.totalQueuedPlayers = 0, this.collectedEnterElements.length = 0, this.collectedLeaveElements.length = 0, this._flushFns.forEach(function (t) {
                return t()
              }), this._flushFns = [], this._whenQuietFns.length) {
              var i = this._whenQuietFns;
              this._whenQuietFns = [], n.length ? y_(n).onDone(function () {
                i.forEach(function (t) {
                  return t()
                })
              }) : i.forEach(function (t) {
                return t()
              })
            }
          }, t.prototype.reportError = function (t) {
            throw new Error("Unable to process animations due to the following failed trigger transitions\n " + t.join("\n"))
          }, t.prototype._flushAnimations = function (t, e) {
            var n = this,
              r = new gb,
              o = [],
              a = new Map,
              s = [],
              l = new Map,
              u = new Map,
              c = new Map,
              p = new Set;
            this.disabledNodes.forEach(function (t) {
              p.add(t);
              for (var e = n.driver.query(t, ".ng-animate-queued", !0), r = 0; r < e.length; r++) p.add(e[r])
            });
            var f = this.bodyNode,
              d = Array.from(this.statesByElement.keys()),
              m = $b(d, this.collectedEnterElements),
              y = new Map,
              g = 0;
            m.forEach(function (t, e) {
              var n = "ng-enter" + g++;
              y.set(e, n), t.forEach(function (t) {
                return Xb(t, n)
              })
            });
            for (var v = [], _ = new Set, b = new Set, w = 0; w < this.collectedLeaveElements.length; w++)(V = (F = this.collectedLeaveElements[w])[Bb]) && V.setForRemoval && (v.push(F), _.add(F), V.hasAnimation ? this.driver.query(F, ".ng-star-inserted", !0).forEach(function (t) {
              return _.add(t)
            }) : b.add(F));
            var C = new Map,
              E = $b(d, Array.from(_));
            E.forEach(function (t, e) {
              var n = "ng-leave" + g++;
              C.set(e, n), t.forEach(function (t) {
                return Xb(t, n)
              })
            }), t.push(function () {
              m.forEach(function (t, e) {
                var n = y.get(e);
                t.forEach(function (t) {
                  return Jb(t, n)
                })
              }), E.forEach(function (t, e) {
                var n = C.get(e);
                t.forEach(function (t) {
                  return Jb(t, n)
                })
              }), v.forEach(function (t) {
                n.processLeaveNode(t)
              })
            });
            for (var S = [], x = [], k = this._namespaceList.length - 1; k >= 0; k--) this._namespaceList[k].drainQueuedTransitions(e).forEach(function (t) {
              var e = t.player,
                i = t.element;
              if (S.push(e), n.collectedEnterElements.length) {
                var a = i[Bb];
                if (a && a.setForMove) return void e.destroy()
              }
              var h = !f || !n.driver.containsElement(f, i),
                p = C.get(i),
                d = y.get(i),
                m = n._buildInstruction(t, r, d, p, h);
              if (m.errors && m.errors.length) x.push(m);
              else {
                if (h) return e.onStart(function () {
                  return W_(i, m.fromStyles)
                }), e.onDestroy(function () {
                  return Q_(i, m.toStyles)
                }), void o.push(e);
                if (t.isFallbackTransition) return e.onStart(function () {
                  return W_(i, m.fromStyles)
                }), e.onDestroy(function () {
                  return Q_(i, m.toStyles)
                }), void o.push(e);
                m.timelines.forEach(function (t) {
                  return t.stretchStartingKeyframe = !0
                }), r.append(i, m.timelines), s.push({
                  instruction: m,
                  player: e,
                  element: i
                }), m.queriedElements.forEach(function (t) {
                  return w_(l, t, []).push(e)
                }), m.preStyleProps.forEach(function (t, e) {
                  var n = Object.keys(t);
                  if (n.length) {
                    var r = u.get(e);
                    r || u.set(e, r = new Set), n.forEach(function (t) {
                      return r.add(t)
                    })
                  }
                }), m.postStyleProps.forEach(function (t, e) {
                  var n = Object.keys(t),
                    r = c.get(e);
                  r || c.set(e, r = new Set), n.forEach(function (t) {
                    return r.add(t)
                  })
                })
              }
            });
            if (x.length) {
              var P = [];
              x.forEach(function (t) {
                P.push("@" + t.triggerName + " has failed due to:\n"), t.errors.forEach(function (t) {
                  return P.push("- " + t + "\n")
                })
              }), S.forEach(function (t) {
                return t.destroy()
              }), this.reportError(P)
            }
            var T = new Map,
              O = new Map;
            s.forEach(function (t) {
              var e = t.element;
              r.has(e) && (O.set(e, e), n._beforeAnimationBuild(t.player.namespaceId, t.instruction, T))
            }), o.forEach(function (t) {
              var e = t.element;
              n._getPreviousPlayers(e, !1, t.namespaceId, t.triggerName, null).forEach(function (t) {
                w_(T, e, []).push(t), t.destroy()
              })
            });
            var A = v.filter(function (t) {
                return ew(t, u, c)
              }),
              I = new Map;
            Kb(I, this.driver, b, c, sp).forEach(function (t) {
              ew(t, u, c) && A.push(t)
            });
            var R = new Map;
            m.forEach(function (t, e) {
              Kb(R, n.driver, new Set(t), u, fp)
            }), A.forEach(function (t) {
              var e = I.get(t),
                n = R.get(t);
              I.set(t, i({}, e, n))
            });
            var D = [],
              N = [],
              M = {};
            s.forEach(function (t) {
              var e = t.element,
                i = t.player,
                s = t.instruction;
              if (r.has(e)) {
                if (p.has(e)) return i.onDestroy(function () {
                  return Q_(e, s.toStyles)
                }), i.disabled = !0, i.overrideTotalTime(s.totalTime), void o.push(i);
                var l = M;
                if (O.size > 1) {
                  for (var u = e, c = []; u = u.parentNode;) {
                    var h = O.get(u);
                    if (h) {
                      l = h;
                      break
                    }
                    c.push(u)
                  }
                  c.forEach(function (t) {
                    return O.set(t, l)
                  })
                }
                var f = n._buildAnimation(i.namespaceId, s, T, a, R, I);
                if (i.setRealPlayer(f), l === M) D.push(i);
                else {
                  var d = n.playersByElement.get(l);
                  d && d.length && (i.parentPlayer = y_(d)), o.push(i)
                }
              } else W_(e, s.fromStyles), i.onDestroy(function () {
                return Q_(e, s.toStyles)
              }), N.push(i), p.has(e) && o.push(i)
            }), N.forEach(function (t) {
              var e = a.get(t.element);
              if (e && e.length) {
                var n = y_(e);
                t.setRealPlayer(n)
              }
            }), o.forEach(function (t) {
              t.parentPlayer ? t.syncPlayerEvents(t.parentPlayer) : t.destroy()
            });
            for (var j = 0; j < v.length; j++) {
              var F, V = (F = v[j])[Bb];
              if (Jb(F, "ng-leave"), !V || !V.hasAnimation) {
                var L = [];
                if (l.size) {
                  var H = l.get(F);
                  H && H.length && L.push.apply(L, h(H));
                  for (var B = this.driver.query(F, ".ng-animating", !0), z = 0; z < B.length; z++) {
                    var U = l.get(B[z]);
                    U && U.length && L.push.apply(L, h(U))
                  }
                }
                var q = L.filter(function (t) {
                  return !t.destroyed
                });
                q.length ? tw(this, F, q) : this.processLeaveNode(F)
              }
            }
            return v.length = 0, D.forEach(function (t) {
              n.players.push(t), t.onDone(function () {
                t.destroy();
                var e = n.players.indexOf(t);
                n.players.splice(e, 1)
              }), t.play()
            }), D
          }, t.prototype.elementContainsData = function (t, e) {
            var n = !1,
              r = e[Bb];
            return r && r.setForRemoval && (n = !0), this.playersByElement.has(e) && (n = !0), this.playersByQueriedElement.has(e) && (n = !0), this.statesByElement.has(e) && (n = !0), this._fetchNamespace(t).elementContainsData(e) || n
          }, t.prototype.afterFlush = function (t) {
            this._flushFns.push(t)
          }, t.prototype.afterFlushAnimationsDone = function (t) {
            this._whenQuietFns.push(t)
          }, t.prototype._getPreviousPlayers = function (t, e, n, r, o) {
            var i = [];
            if (e) {
              var a = this.playersByQueriedElement.get(t);
              a && (i = a)
            } else {
              var s = this.playersByElement.get(t);
              if (s) {
                var l = !o || "void" == o;
                s.forEach(function (t) {
                  t.queued || (l || t.triggerName == r) && i.push(t)
                })
              }
            }
            return (n || r) && (i = i.filter(function (t) {
              return !(n && n != t.namespaceId || r && r != t.triggerName)
            })), i
          }, t.prototype._beforeAnimationBuild = function (t, e, n) {
            var r, o, i = e.element,
              a = e.isRemovalTransition ? void 0 : t,
              s = e.isRemovalTransition ? void 0 : e.triggerName,
              l = function (t) {
                var r = t.element,
                  o = r !== i,
                  l = w_(n, r, []);
                c._getPreviousPlayers(r, o, a, s, e.toState).forEach(function (t) {
                  var e = t.getRealPlayer();
                  e.beforeDestroy && e.beforeDestroy(), t.destroy(), l.push(t)
                })
              },
              c = this;
            try {
              for (var h = u(e.timelines), p = h.next(); !p.done; p = h.next()) l(p.value)
            } catch (t) {
              r = {
                error: t
              }
            } finally {
              try {
                p && !p.done && (o = h.return) && o.call(h)
              } finally {
                if (r) throw r.error
              }
            }
            W_(i, e.fromStyles)
          }, t.prototype._buildAnimation = function (t, e, n, r, o, i) {
            var a = this,
              s = e.triggerName,
              l = e.element,
              u = [],
              c = new Set,
              h = new Set,
              p = e.timelines.map(function (e) {
                var p = e.element;
                c.add(p);
                var f = p[Bb];
                if (f && f.removedBeforeQueried) return new hp(e.duration, e.delay);
                var d, m, y = p !== l,
                  g = (d = (n.get(p) || Vb).map(function (t) {
                    return t.getRealPlayer()
                  }), m = [], function t(e, n) {
                    for (var r = 0; r < e.length; r++) {
                      var o = e[r];
                      o instanceof pp ? t(o.players, n) : n.push(o)
                    }
                  }(d, m), m).filter(function (t) {
                    return !!t.element && t.element === p
                  }),
                  v = o.get(p),
                  _ = i.get(p),
                  b = g_(0, a._normalizer, 0, e.keyframes, v, _),
                  w = a._buildPlayer(e, b, g);
                if (e.subTimeline && r && h.add(p), y) {
                  var C = new Qb(t, s, p);
                  C.setRealPlayer(w), u.push(C)
                }
                return w
              });
            u.forEach(function (t) {
              w_(a.playersByQueriedElement, t.element, []).push(t), t.onDone(function () {
                return function (t, e, n) {
                  var r;
                  if (t instanceof Map) {
                    if (r = t.get(e)) {
                      if (r.length) {
                        var o = r.indexOf(n);
                        r.splice(o, 1)
                      }
                      0 == r.length && t.delete(e)
                    }
                  } else(r = t[e]) && (r.length && (o = r.indexOf(n), r.splice(o, 1)), 0 == r.length && delete t[e]);
                  return r
                }(a.playersByQueriedElement, t.element, t)
              })
            }), c.forEach(function (t) {
              return Xb(t, "ng-animating")
            });
            var f = y_(p);
            return f.onDestroy(function () {
              c.forEach(function (t) {
                return Jb(t, "ng-animating")
              }), Q_(l, e.toStyles)
            }), h.forEach(function (t) {
              w_(r, t, []).push(f)
            }), f
          }, t.prototype._buildPlayer = function (t, e, n) {
            return e.length > 0 ? this.driver.animate(t.element, e, t.duration, t.delay, t.easing, n) : new hp(t.duration, t.delay)
          }, t
        }(),
        Qb = function () {
          function t(t, e, n) {
            this.namespaceId = t, this.triggerName = e, this.element = n, this._player = new hp, this._containsRealPlayer = !1, this._queuedCallbacks = {}, this.destroyed = !1, this.markedForDestroy = !1, this.disabled = !1, this.queued = !0, this.totalTime = 0
          }
          return t.prototype.setRealPlayer = function (t) {
            var e = this;
            this._containsRealPlayer || (this._player = t, Object.keys(this._queuedCallbacks).forEach(function (n) {
              e._queuedCallbacks[n].forEach(function (e) {
                return v_(t, n, void 0, e)
              })
            }), this._queuedCallbacks = {}, this._containsRealPlayer = !0, this.overrideTotalTime(t.totalTime), this.queued = !1)
          }, t.prototype.getRealPlayer = function () {
            return this._player
          }, t.prototype.overrideTotalTime = function (t) {
            this.totalTime = t
          }, t.prototype.syncPlayerEvents = function (t) {
            var e = this,
              n = this._player;
            n.triggerCallback && t.onStart(function () {
              return n.triggerCallback("start")
            }), t.onDone(function () {
              return e.finish()
            }), t.onDestroy(function () {
              return e.destroy()
            })
          }, t.prototype._queueEvent = function (t, e) {
            w_(this._queuedCallbacks, t, []).push(e)
          }, t.prototype.onDone = function (t) {
            this.queued && this._queueEvent("done", t), this._player.onDone(t)
          }, t.prototype.onStart = function (t) {
            this.queued && this._queueEvent("start", t), this._player.onStart(t)
          }, t.prototype.onDestroy = function (t) {
            this.queued && this._queueEvent("destroy", t), this._player.onDestroy(t)
          }, t.prototype.init = function () {
            this._player.init()
          }, t.prototype.hasStarted = function () {
            return !this.queued && this._player.hasStarted()
          }, t.prototype.play = function () {
            !this.queued && this._player.play()
          }, t.prototype.pause = function () {
            !this.queued && this._player.pause()
          }, t.prototype.restart = function () {
            !this.queued && this._player.restart()
          }, t.prototype.finish = function () {
            this._player.finish()
          }, t.prototype.destroy = function () {
            this.destroyed = !0, this._player.destroy()
          }, t.prototype.reset = function () {
            !this.queued && this._player.reset()
          }, t.prototype.setPosition = function (t) {
            this.queued || this._player.setPosition(t)
          }, t.prototype.getPosition = function () {
            return this.queued ? 0 : this._player.getPosition()
          }, t.prototype.triggerCallback = function (t) {
            var e = this._player;
            e.triggerCallback && e.triggerCallback(t)
          }, t
        }();

      function Wb(t) {
        return t && 1 === t.nodeType
      }

      function Zb(t, e) {
        var n = t.style.display;
        return t.style.display = null != e ? e : "none", n
      }

      function Kb(t, e, n, r, o) {
        var i = [];
        n.forEach(function (t) {
          return i.push(Zb(t))
        });
        var a = [];
        r.forEach(function (n, r) {
          var i = {};
          n.forEach(function (t) {
            var n = i[t] = e.computeStyle(r, t, o);
            n && 0 != n.length || (r[Bb] = Hb, a.push(r))
          }), t.set(r, i)
        });
        var s = 0;
        return n.forEach(function (t) {
          return Zb(t, i[s++])
        }), a
      }

      function $b(t, e) {
        var n = new Map;
        if (t.forEach(function (t) {
            return n.set(t, [])
          }), 0 == e.length) return n;
        var r = new Set(e),
          o = new Map;
        return e.forEach(function (t) {
          var e = function t(e) {
            if (!e) return 1;
            var i = o.get(e);
            if (i) return i;
            var a = e.parentNode;
            return i = n.has(a) ? a : r.has(a) ? 1 : t(a), o.set(e, i), i
          }(t);
          1 !== e && n.get(e).push(t)
        }), n
      }
      var Yb = "$$classes";

      function Xb(t, e) {
        if (t.classList) t.classList.add(e);
        else {
          var n = t[Yb];
          n || (n = t[Yb] = {}), n[e] = !0
        }
      }

      function Jb(t, e) {
        if (t.classList) t.classList.remove(e);
        else {
          var n = t[Yb];
          n && delete n[e]
        }
      }

      function tw(t, e, n) {
        y_(n).onDone(function () {
          return t.processLeaveNode(e)
        })
      }

      function ew(t, e, n) {
        var r = n.get(t);
        if (!r) return !1;
        var o = e.get(t);
        return o ? r.forEach(function (t) {
          return o.add(t)
        }) : e.set(t, r), n.delete(t), !0
      }
      var nw = function () {
          function t(t, e, n) {
            var r = this;
            this.bodyNode = t, this._driver = e, this._triggerCache = {}, this.onRemovalComplete = function (t, e) {}, this._transitionEngine = new Gb(t, e, n), this._timelineEngine = new Fb(t, e, n), this._transitionEngine.onRemovalComplete = function (t, e) {
              return r.onRemovalComplete(t, e)
            }
          }
          return t.prototype.registerTrigger = function (t, e, n, r, o) {
            var i = t + "-" + r,
              a = this._triggerCache[i];
            if (!a) {
              var s = [],
                l = cb(this._driver, o, s);
              if (s.length) throw new Error('The animation trigger "' + r + '" has failed to build due to the following errors:\n - ' + s.join("\n - "));
              a = function (t, e) {
                return new Nb(t, e)
              }(r, l), this._triggerCache[i] = a
            }
            this._transitionEngine.registerTrigger(e, r, a)
          }, t.prototype.register = function (t, e) {
            this._transitionEngine.register(t, e)
          }, t.prototype.destroy = function (t, e) {
            this._transitionEngine.destroy(t, e)
          }, t.prototype.onInsert = function (t, e, n, r) {
            this._transitionEngine.insertNode(t, e, n, r)
          }, t.prototype.onRemove = function (t, e, n) {
            this._transitionEngine.removeNode(t, e, n)
          }, t.prototype.disableAnimations = function (t, e) {
            this._transitionEngine.markElementAsDisabled(t, e)
          }, t.prototype.process = function (t, e, n, r) {
            if ("@" == n.charAt(0)) {
              var o = c(C_(n), 2);
              this._timelineEngine.command(o[0], e, o[1], r)
            } else this._transitionEngine.trigger(t, e, n, r)
          }, t.prototype.listen = function (t, e, n, r, o) {
            if ("@" == n.charAt(0)) {
              var i = c(C_(n), 2);
              return this._timelineEngine.listen(i[0], e, i[1], o)
            }
            return this._transitionEngine.listen(t, e, n, r, o)
          }, t.prototype.flush = function (t) {
            void 0 === t && (t = -1), this._transitionEngine.flush(t)
          }, Object.defineProperty(t.prototype, "players", {
            get: function () {
              return this._transitionEngine.players.concat(this._timelineEngine.players)
            },
            enumerable: !0,
            configurable: !0
          }), t.prototype.whenRenderingDone = function () {
            return this._transitionEngine.whenRenderingDone()
          }, t
        }(),
        rw = "animation",
        ow = "animationend",
        iw = function () {
          function t(t, e, n, r, o, i, a) {
            var s = this;
            this._element = t, this._name = e, this._duration = n, this._delay = r, this._easing = o, this._fillMode = i, this._onDoneFn = a, this._finished = !1, this._destroyed = !1, this._startTime = 0, this._position = 0, this._eventFn = function (t) {
              return s._handleCallback(t)
            }
          }
          return t.prototype.apply = function () {
            var t, e, n;
            e = this._duration + "ms " + this._easing + " " + this._delay + "ms 1 normal " + this._fillMode + " " + this._name, (n = hw(t = this._element, "").trim()).length && (function (t, e) {
              for (var n = 0; n < t.length; n++) "," === t.charAt(n) && 0
            }(n), e = n + ", " + e), cw(t, "", e), uw(this._element, this._eventFn, !1), this._startTime = Date.now()
          }, t.prototype.pause = function () {
            aw(this._element, this._name, "paused")
          }, t.prototype.resume = function () {
            aw(this._element, this._name, "running")
          }, t.prototype.setPosition = function (t) {
            var e = sw(this._element, this._name);
            this._position = t * this._duration, cw(this._element, "Delay", "-" + this._position + "ms", e)
          }, t.prototype.getPosition = function () {
            return this._position
          }, t.prototype._handleCallback = function (t) {
            var e = t._ngTestManualTimestamp || Date.now(),
              n = 1e3 * parseFloat(t.elapsedTime.toFixed(3));
            t.animationName == this._name && Math.max(e - this._startTime, 0) >= this._delay && n >= this._duration && this.finish()
          }, t.prototype.finish = function () {
            this._finished || (this._finished = !0, this._onDoneFn(), uw(this._element, this._eventFn, !0))
          }, t.prototype.destroy = function () {
            var t, e, n, r;
            this._destroyed || (this._destroyed = !0, this.finish(), e = this._name, (r = lw(n = hw(t = this._element, "").split(","), e)) >= 0 && (n.splice(r, 1), cw(t, "", n.join(","))))
          }, t
        }();

      function aw(t, e, n) {
        cw(t, "PlayState", n, sw(t, e))
      }

      function sw(t, e) {
        var n = hw(t, "");
        return n.indexOf(",") > 0 ? lw(n.split(","), e) : lw([n], e)
      }

      function lw(t, e) {
        for (var n = 0; n < t.length; n++)
          if (t[n].indexOf(e) >= 0) return n;
        return -1
      }

      function uw(t, e, n) {
        n ? t.removeEventListener(ow, e) : t.addEventListener(ow, e)
      }

      function cw(t, e, n, r) {
        var o = rw + e;
        if (null != r) {
          var i = t.style[o];
          if (i.length) {
            var a = i.split(",");
            a[r] = n, n = a.join(",")
          }
        }
        t.style[o] = n
      }

      function hw(t, e) {
        return t.style[rw + e]
      }
      var pw = "linear",
        fw = function () {
          function t(t, e, n, r, o, i, a) {
            this.element = t, this.keyframes = e, this.animationName = n, this._duration = r, this._delay = o, this._finalStyles = a, this._onDoneFns = [], this._onStartFns = [], this._onDestroyFns = [], this._started = !1, this.currentSnapshot = {}, this._state = 0, this.easing = i || pw, this.totalTime = r + o, this._buildStyler()
          }
          return t.prototype.onStart = function (t) {
            this._onStartFns.push(t)
          }, t.prototype.onDone = function (t) {
            this._onDoneFns.push(t)
          }, t.prototype.onDestroy = function (t) {
            this._onDestroyFns.push(t)
          }, t.prototype.destroy = function () {
            this.init(), this._state >= 4 || (this._state = 4, this._styler.destroy(), this._flushStartFns(), this._flushDoneFns(), this._onDestroyFns.forEach(function (t) {
              return t()
            }), this._onDestroyFns = [])
          }, t.prototype._flushDoneFns = function () {
            this._onDoneFns.forEach(function (t) {
              return t()
            }), this._onDoneFns = []
          }, t.prototype._flushStartFns = function () {
            this._onStartFns.forEach(function (t) {
              return t()
            }), this._onStartFns = []
          }, t.prototype.finish = function () {
            this.init(), this._state >= 3 || (this._state = 3, this._styler.finish(), this._flushStartFns(), this._flushDoneFns())
          }, t.prototype.setPosition = function (t) {
            this._styler.setPosition(t)
          }, t.prototype.getPosition = function () {
            return this._styler.getPosition()
          }, t.prototype.hasStarted = function () {
            return this._state >= 2
          }, t.prototype.init = function () {
            this._state >= 1 || (this._state = 1, this._styler.apply(), this._delay && this._styler.pause())
          }, t.prototype.play = function () {
            this.init(), this.hasStarted() || (this._flushStartFns(), this._state = 2), this._styler.resume()
          }, t.prototype.pause = function () {
            this.init(), this._styler.pause()
          }, t.prototype.restart = function () {
            this.reset(), this.play()
          }, t.prototype.reset = function () {
            this._styler.destroy(), this._buildStyler(), this._styler.apply()
          }, t.prototype._buildStyler = function () {
            var t = this;
            this._styler = new iw(this.element, this.animationName, this._duration, this._delay, this.easing, "forwards", function () {
              return t.finish()
            })
          }, t.prototype.triggerCallback = function (t) {
            var e = "start" == t ? this._onStartFns : this._onDoneFns;
            e.forEach(function (t) {
              return t()
            }), e.length = 0
          }, t.prototype.beforeDestroy = function () {
            var t = this;
            this.init();
            var e = {};
            if (this.hasStarted()) {
              var n = this._state >= 3;
              Object.keys(this._finalStyles).forEach(function (r) {
                "offset" != r && (e[r] = n ? t._finalStyles[r] : ob(t.element, r))
              })
            }
            this.currentSnapshot = e
          }, t
        }(),
        dw = function (t) {
          function e(e, n) {
            var r = t.call(this) || this;
            return r.element = e, r._startingStyles = {}, r.__initialized = !1, r._styles = M_(n), r
          }
          return o(e, t), e.prototype.init = function () {
            var e = this;
            !this.__initialized && this._startingStyles && (this.__initialized = !0, Object.keys(this._styles).forEach(function (t) {
              e._startingStyles[t] = e.element.style[t]
            }), t.prototype.init.call(this))
          }, e.prototype.play = function () {
            var e = this;
            this._startingStyles && (this.init(), Object.keys(this._styles).forEach(function (t) {
              return e.element.style.setProperty(t, e._styles[t])
            }), t.prototype.play.call(this))
          }, e.prototype.destroy = function () {
            var e = this;
            this._startingStyles && (Object.keys(this._startingStyles).forEach(function (t) {
              var n = e._startingStyles[t];
              n ? e.element.style.setProperty(t, n) : e.element.style.removeProperty(t)
            }), this._startingStyles = null, t.prototype.destroy.call(this))
          }, e
        }(hp),
        mw = function () {
          function t() {
            this._count = 0, this._head = document.querySelector("head"), this._warningIssued = !1
          }
          return t.prototype.validateStyleProperty = function (t) {
            return I_(t)
          }, t.prototype.matchesElement = function (t, e) {
            return R_(t, e)
          }, t.prototype.containsElement = function (t, e) {
            return D_(t, e)
          }, t.prototype.query = function (t, e, n) {
            return N_(t, e, n)
          }, t.prototype.computeStyle = function (t, e, n) {
            return window.getComputedStyle(t)[e]
          }, t.prototype.buildKeyframeElement = function (t, e, n) {
            var r = "@keyframes " + e + " {\n",
              o = "";
            (n = n.map(function (t) {
              return M_(t)
            })).forEach(function (t) {
              o = " ";
              var e = parseFloat(t.offset);
              r += "" + o + 100 * e + "% {\n", o += " ", Object.keys(t).forEach(function (e) {
                var n = t[e];
                switch (e) {
                  case "offset":
                    return;
                  case "easing":
                    return void(n && (r += o + "animation-timing-function: " + n + ";\n"));
                  default:
                    return void(r += "" + o + e + ": " + n + ";\n")
                }
              }), r += o + "}\n"
            }), r += "}\n";
            var i = document.createElement("style");
            return i.innerHTML = r, i
          }, t.prototype.animate = function (t, e, n, r, o, i, a) {
            void 0 === i && (i = []), a && this._notifyFaultyScrubber();
            var s = i.filter(function (t) {
                return t instanceof fw
              }),
              l = {};
            eb(n, r) && s.forEach(function (t) {
              var e = t.currentSnapshot;
              Object.keys(e).forEach(function (t) {
                return l[t] = e[t]
              })
            });
            var u = function (t) {
              var e = {};
              return t && (Array.isArray(t) ? t : [t]).forEach(function (t) {
                Object.keys(t).forEach(function (n) {
                  "offset" != n && "easing" != n && (e[n] = t[n])
                })
              }), e
            }(e = nb(t, e, l));
            if (0 == n) return new dw(t, u);
            var c = "gen_css_kf_" + this._count++,
              h = this.buildKeyframeElement(t, c, e);
            document.querySelector("head").appendChild(h);
            var p = new fw(t, e, c, n, r, o, u);
            return p.onDestroy(function () {
              var t;
              (t = h).parentNode.removeChild(t)
            }), p
          }, t.prototype._notifyFaultyScrubber = function () {
            this._warningIssued || (console.warn("@angular/animations: please load the web-animations.js polyfill to allow programmatic access...\n", "  visit http://bit.ly/IWukam to learn more about using the web-animation-js polyfill."), this._warningIssued = !0)
          }, t
        }(),
        yw = function () {
          function t(t, e, n) {
            this.element = t, this.keyframes = e, this.options = n, this._onDoneFns = [], this._onStartFns = [], this._onDestroyFns = [], this._initialized = !1, this._finished = !1, this._started = !1, this._destroyed = !1, this.time = 0, this.parentPlayer = null, this.currentSnapshot = {}, this._duration = n.duration, this._delay = n.delay || 0, this.time = this._duration + this._delay
          }
          return t.prototype._onFinish = function () {
            this._finished || (this._finished = !0, this._onDoneFns.forEach(function (t) {
              return t()
            }), this._onDoneFns = [])
          }, t.prototype.init = function () {
            this._buildPlayer(), this._preparePlayerBeforeStart()
          }, t.prototype._buildPlayer = function () {
            var t = this;
            if (!this._initialized) {
              this._initialized = !0;
              var e = this.keyframes;
              this.domPlayer = this._triggerWebAnimation(this.element, e, this.options), this._finalKeyframe = e.length ? e[e.length - 1] : {}, this.domPlayer.addEventListener("finish", function () {
                return t._onFinish()
              })
            }
          }, t.prototype._preparePlayerBeforeStart = function () {
            this._delay ? this._resetDomPlayerState() : this.domPlayer.pause()
          }, t.prototype._triggerWebAnimation = function (t, e, n) {
            return t.animate(e, n)
          }, t.prototype.onStart = function (t) {
            this._onStartFns.push(t)
          }, t.prototype.onDone = function (t) {
            this._onDoneFns.push(t)
          }, t.prototype.onDestroy = function (t) {
            this._onDestroyFns.push(t)
          }, t.prototype.play = function () {
            this._buildPlayer(), this.hasStarted() || (this._onStartFns.forEach(function (t) {
              return t()
            }), this._onStartFns = [], this._started = !0), this.domPlayer.play()
          }, t.prototype.pause = function () {
            this.init(), this.domPlayer.pause()
          }, t.prototype.finish = function () {
            this.init(), this._onFinish(), this.domPlayer.finish()
          }, t.prototype.reset = function () {
            this._resetDomPlayerState(), this._destroyed = !1, this._finished = !1, this._started = !1
          }, t.prototype._resetDomPlayerState = function () {
            this.domPlayer && this.domPlayer.cancel()
          }, t.prototype.restart = function () {
            this.reset(), this.play()
          }, t.prototype.hasStarted = function () {
            return this._started
          }, t.prototype.destroy = function () {
            this._destroyed || (this._destroyed = !0, this._resetDomPlayerState(), this._onFinish(), this._onDestroyFns.forEach(function (t) {
              return t()
            }), this._onDestroyFns = [])
          }, t.prototype.setPosition = function (t) {
            this.domPlayer.currentTime = t * this.time
          }, t.prototype.getPosition = function () {
            return this.domPlayer.currentTime / this.time
          }, Object.defineProperty(t.prototype, "totalTime", {
            get: function () {
              return this._delay + this._duration
            },
            enumerable: !0,
            configurable: !0
          }), t.prototype.beforeDestroy = function () {
            var t = this,
              e = {};
            this.hasStarted() && Object.keys(this._finalKeyframe).forEach(function (n) {
              "offset" != n && (e[n] = t._finished ? t._finalKeyframe[n] : ob(t.element, n))
            }), this.currentSnapshot = e
          }, t.prototype.triggerCallback = function (t) {
            var e = "start" == t ? this._onStartFns : this._onDoneFns;
            e.forEach(function (t) {
              return t()
            }), e.length = 0
          }, t
        }(),
        gw = function () {
          function t() {
            this._isNativeImpl = /\{\s*\[native\s+code\]\s*\}/.test(vw().toString()), this._cssKeyframesDriver = new mw
          }
          return t.prototype.validateStyleProperty = function (t) {
            return I_(t)
          }, t.prototype.matchesElement = function (t, e) {
            return R_(t, e)
          }, t.prototype.containsElement = function (t, e) {
            return D_(t, e)
          }, t.prototype.query = function (t, e, n) {
            return N_(t, e, n)
          }, t.prototype.computeStyle = function (t, e, n) {
            return window.getComputedStyle(t)[e]
          }, t.prototype.overrideWebAnimationsSupport = function (t) {
            this._isNativeImpl = t
          }, t.prototype.animate = function (t, e, n, r, o, i, a) {
            if (void 0 === i && (i = []), !a && !this._isNativeImpl) return this._cssKeyframesDriver.animate(t, e, n, r, o, i);
            var s = {
              duration: n,
              delay: r,
              fill: 0 == r ? "both" : "forwards"
            };
            o && (s.easing = o);
            var l = {},
              u = i.filter(function (t) {
                return t instanceof yw
              });
            return eb(n, r) && u.forEach(function (t) {
              var e = t.currentSnapshot;
              Object.keys(e).forEach(function (t) {
                return l[t] = e[t]
              })
            }), e = nb(t, e = e.map(function (t) {
              return U_(t, !1)
            }), l), new yw(t, e, s)
          }, t
        }();

      function vw() {
        return "undefined" != typeof window && void 0 !== window.document && Element.prototype.animate || {}
      }
      var _w = function (t) {
          function e(e, n) {
            var r = t.call(this) || this;
            return r._nextAnimationId = 0, r._renderer = e.createRenderer(n.body, {
              id: "0",
              encapsulation: me.None,
              styles: [],
              data: {
                animation: []
              }
            }), r
          }
          return o(e, t), e.prototype.build = function (t) {
            var e = this._nextAnimationId.toString();
            this._nextAnimationId++;
            var n = Array.isArray(t) ? lp(t) : t;
            return Cw(this._renderer, null, e, "register", [n]), new bw(e, this._renderer)
          }, a([s(1, Bt(wc))], e)
        }(ap),
        bw = function (t) {
          function e(e, n) {
            var r = t.call(this) || this;
            return r._id = e, r._renderer = n, r
          }
          return o(e, t), e.prototype.create = function (t, e) {
            return new ww(this._id, t, e || {}, this._renderer)
          }, e
        }(function () {}),
        ww = function () {
          function t(t, e, n, r) {
            this.id = t, this.element = e, this._renderer = r, this.parentPlayer = null, this._started = !1, this.totalTime = 0, this._command("create", n)
          }
          return t.prototype._listen = function (t, e) {
            return this._renderer.listen(this.element, "@@" + this.id + ":" + t, e)
          }, t.prototype._command = function (t) {
            for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
            return Cw(this._renderer, this.element, this.id, t, e)
          }, t.prototype.onDone = function (t) {
            this._listen("done", t)
          }, t.prototype.onStart = function (t) {
            this._listen("start", t)
          }, t.prototype.onDestroy = function (t) {
            this._listen("destroy", t)
          }, t.prototype.init = function () {
            this._command("init")
          }, t.prototype.hasStarted = function () {
            return this._started
          }, t.prototype.play = function () {
            this._command("play"), this._started = !0
          }, t.prototype.pause = function () {
            this._command("pause")
          }, t.prototype.restart = function () {
            this._command("restart")
          }, t.prototype.finish = function () {
            this._command("finish")
          }, t.prototype.destroy = function () {
            this._command("destroy")
          }, t.prototype.reset = function () {
            this._command("reset")
          }, t.prototype.setPosition = function (t) {
            this._command("setPosition", t)
          }, t.prototype.getPosition = function () {
            return 0
          }, t
        }();

      function Cw(t, e, n, r, o) {
        return t.setProperty(e, "@@" + n + ":" + r, o)
      }
      var Ew = function () {
          function t(t, e, n) {
            this.delegate = t, this.engine = e, this._zone = n, this._currentId = 0, this._microtaskId = 1, this._animationCallbacksBuffer = [], this._rendererCache = new Map, this._cdRecurDepth = 0, this.promise = Promise.resolve(0), e.onRemovalComplete = function (t, e) {
              e && e.parentNode(t) && e.removeChild(t.parentNode, t)
            }
          }
          return t.prototype.createRenderer = function (t, e) {
            var n = this,
              r = this.delegate.createRenderer(t, e);
            if (!(t && e && e.data && e.data.animation)) {
              var o = this._rendererCache.get(r);
              return o || (o = new Sw("", r, this.engine), this._rendererCache.set(r, o)), o
            }
            var i = e.id,
              a = e.id + "-" + this._currentId;
            return this._currentId++, this.engine.register(a, t), e.data.animation.forEach(function (e) {
              return n.engine.registerTrigger(i, a, t, e.name, e)
            }), new xw(this, a, r, this.engine)
          }, t.prototype.begin = function () {
            this._cdRecurDepth++, this.delegate.begin && this.delegate.begin()
          }, t.prototype._scheduleCountTask = function () {
            var t = this;
            this.promise.then(function () {
              t._microtaskId++
            })
          }, t.prototype.scheduleListenerCallback = function (t, e, n) {
            var r = this;
            t >= 0 && t < this._microtaskId ? this._zone.run(function () {
              return e(n)
            }) : (0 == this._animationCallbacksBuffer.length && Promise.resolve(null).then(function () {
              r._zone.run(function () {
                r._animationCallbacksBuffer.forEach(function (t) {
                  var e = c(t, 2);
                  (0, e[0])(e[1])
                }), r._animationCallbacksBuffer = []
              })
            }), this._animationCallbacksBuffer.push([e, n]))
          }, t.prototype.end = function () {
            var t = this;
            this._cdRecurDepth--, 0 == this._cdRecurDepth && this._zone.runOutsideAngular(function () {
              t._scheduleCountTask(), t.engine.flush(t._microtaskId)
            }), this.delegate.end && this.delegate.end()
          }, t.prototype.whenRenderingDone = function () {
            return this.engine.whenRenderingDone()
          }, t
        }(),
        Sw = function () {
          function t(t, e, n) {
            this.namespaceId = t, this.delegate = e, this.engine = n, this.destroyNode = this.delegate.destroyNode ? function (t) {
              return e.destroyNode(t)
            } : null
          }
          return Object.defineProperty(t.prototype, "data", {
            get: function () {
              return this.delegate.data
            },
            enumerable: !0,
            configurable: !0
          }), t.prototype.destroy = function () {
            this.engine.destroy(this.namespaceId, this.delegate), this.delegate.destroy()
          }, t.prototype.createElement = function (t, e) {
            return this.delegate.createElement(t, e)
          }, t.prototype.createComment = function (t) {
            return this.delegate.createComment(t)
          }, t.prototype.createText = function (t) {
            return this.delegate.createText(t)
          }, t.prototype.appendChild = function (t, e) {
            this.delegate.appendChild(t, e), this.engine.onInsert(this.namespaceId, e, t, !1)
          }, t.prototype.insertBefore = function (t, e, n) {
            this.delegate.insertBefore(t, e, n), this.engine.onInsert(this.namespaceId, e, t, !0)
          }, t.prototype.removeChild = function (t, e) {
            this.engine.onRemove(this.namespaceId, e, this.delegate)
          }, t.prototype.selectRootElement = function (t) {
            return this.delegate.selectRootElement(t)
          }, t.prototype.parentNode = function (t) {
            return this.delegate.parentNode(t)
          }, t.prototype.nextSibling = function (t) {
            return this.delegate.nextSibling(t)
          }, t.prototype.setAttribute = function (t, e, n, r) {
            this.delegate.setAttribute(t, e, n, r)
          }, t.prototype.removeAttribute = function (t, e, n) {
            this.delegate.removeAttribute(t, e, n)
          }, t.prototype.addClass = function (t, e) {
            this.delegate.addClass(t, e)
          }, t.prototype.removeClass = function (t, e) {
            this.delegate.removeClass(t, e)
          }, t.prototype.setStyle = function (t, e, n, r) {
            this.delegate.setStyle(t, e, n, r)
          }, t.prototype.removeStyle = function (t, e, n) {
            this.delegate.removeStyle(t, e, n)
          }, t.prototype.setProperty = function (t, e, n) {
            "@" == e.charAt(0) && "@.disabled" == e ? this.disableAnimations(t, !!n) : this.delegate.setProperty(t, e, n)
          }, t.prototype.setValue = function (t, e) {
            this.delegate.setValue(t, e)
          }, t.prototype.listen = function (t, e, n) {
            return this.delegate.listen(t, e, n)
          }, t.prototype.disableAnimations = function (t, e) {
            this.engine.disableAnimations(t, e)
          }, t
        }(),
        xw = function (t) {
          function e(e, n, r, o) {
            var i = t.call(this, n, r, o) || this;
            return i.factory = e, i.namespaceId = n, i
          }
          return o(e, t), e.prototype.setProperty = function (t, e, n) {
            "@" == e.charAt(0) ? "." == e.charAt(1) && "@.disabled" == e ? this.disableAnimations(t, n = void 0 === n || !!n) : this.engine.process(this.namespaceId, t, e.substr(1), n) : this.delegate.setProperty(t, e, n)
          }, e.prototype.listen = function (t, e, n) {
            var r, o, i, a = this;
            if ("@" == e.charAt(0)) {
              var s = function (t) {
                  switch (t) {
                    case "body":
                      return document.body;
                    case "document":
                      return document;
                    case "window":
                      return window;
                    default:
                      return t
                  }
                }(t),
                l = e.substr(1),
                u = "";
              return "@" != l.charAt(0) && (l = (r = c((o = l, i = o.indexOf("."), [o.substring(0, i), o.substr(i + 1)]), 2))[0], u = r[1]), this.engine.listen(this.namespaceId, s, l, u, function (t) {
                a.factory.scheduleListenerCallback(t._data || -1, n, t)
              })
            }
            return this.delegate.listen(t, e, n)
          }, e
        }(Sw),
        kw = function (t) {
          function e(e, n, r) {
            return t.call(this, e.body, n, r) || this
          }
          return o(e, t), a([s(0, Bt(sc))], e)
        }(nw);

      function Pw() {
        return "function" == typeof vw() ? new gw : new mw
      }

      function Tw() {
        return new Tb
      }

      function Ow(t, e, n) {
        return new Ew(t, e, n)
      }
      var Aw = new bt("AnimationModuleType"),
        Iw = function () {},
        Rw = po({
          encapsulation: 2,
          styles: [".mat-form-field{display:inline-block;position:relative;text-align:left}[dir=rtl] .mat-form-field{text-align:right}.mat-form-field-wrapper{position:relative}.mat-form-field-flex{display:inline-flex;align-items:baseline;box-sizing:border-box;width:100%}.mat-form-field-prefix,.mat-form-field-suffix{white-space:nowrap;flex:none;position:relative}.mat-form-field-infix{display:block;position:relative;flex:auto;min-width:0;width:180px}@media screen and (-ms-high-contrast:active){.mat-form-field-infix{border-image:linear-gradient(transparent,transparent)}}.mat-form-field-label-wrapper{position:absolute;left:0;box-sizing:content-box;width:100%;height:100%;overflow:hidden;pointer-events:none}.mat-form-field-label{position:absolute;left:0;font:inherit;pointer-events:none;width:100%;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;transform-origin:0 0;transition:transform .4s cubic-bezier(.25,.8,.25,1),color .4s cubic-bezier(.25,.8,.25,1),width .4s cubic-bezier(.25,.8,.25,1);display:none}[dir=rtl] .mat-form-field-label{transform-origin:100% 0;left:auto;right:0}.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label,.mat-form-field-empty.mat-form-field-label{display:block}.mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-label-wrapper .mat-form-field-label{display:none}.mat-form-field-can-float .mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-label-wrapper .mat-form-field-label{display:block;transition:none}.mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-input-server[placeholder]:not(:placeholder-shown)+.mat-form-field-label-wrapper .mat-form-field-label{display:none}.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-can-float .mat-input-server[placeholder]:not(:placeholder-shown)+.mat-form-field-label-wrapper .mat-form-field-label{display:block}.mat-form-field-label:not(.mat-form-field-empty){transition:none}.mat-form-field-underline{position:absolute;width:100%;pointer-events:none;transform:scaleY(1.0001)}.mat-form-field-ripple{position:absolute;left:0;width:100%;transform-origin:50%;transform:scaleX(.5);opacity:0;transition:background-color .3s cubic-bezier(.55,0,.55,.2)}.mat-form-field.mat-focused .mat-form-field-ripple,.mat-form-field.mat-form-field-invalid .mat-form-field-ripple{opacity:1;transform:scaleX(1);transition:transform .3s cubic-bezier(.25,.8,.25,1),opacity .1s cubic-bezier(.25,.8,.25,1),background-color .3s cubic-bezier(.25,.8,.25,1)}.mat-form-field-subscript-wrapper{position:absolute;box-sizing:border-box;width:100%;overflow:hidden}.mat-form-field-label-wrapper .mat-icon,.mat-form-field-subscript-wrapper .mat-icon{width:1em;height:1em;font-size:inherit;vertical-align:baseline}.mat-form-field-hint-wrapper{display:flex}.mat-form-field-hint-spacer{flex:1 0 1em}.mat-error{display:block}.mat-form-field-control-wrapper{position:relative}.mat-form-field._mat-animation-noopable .mat-form-field-label,.mat-form-field._mat-animation-noopable .mat-form-field-ripple{transition:none}", ".mat-form-field-appearance-fill .mat-form-field-flex{border-radius:4px 4px 0 0;padding:.75em .75em 0 .75em}@media screen and (-ms-high-contrast:active){.mat-form-field-appearance-fill .mat-form-field-flex{outline:solid 1px}}.mat-form-field-appearance-fill .mat-form-field-underline::before{content:'';display:block;position:absolute;bottom:0;height:1px;width:100%}.mat-form-field-appearance-fill .mat-form-field-ripple{bottom:0;height:2px}@media screen and (-ms-high-contrast:active){.mat-form-field-appearance-fill .mat-form-field-ripple{height:0;border-top:solid 2px}}.mat-form-field-appearance-fill:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{opacity:1;transform:none;transition:opacity .6s cubic-bezier(.25,.8,.25,1)}.mat-form-field-appearance-fill._mat-animation-noopable:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{transition:none}.mat-form-field-appearance-fill .mat-form-field-subscript-wrapper{padding:0 1em}", ".mat-input-element{font:inherit;background:0 0;color:currentColor;border:none;outline:0;padding:0;margin:0;width:100%;max-width:100%;vertical-align:bottom;text-align:inherit}.mat-input-element:-moz-ui-invalid{box-shadow:none}.mat-input-element::-ms-clear,.mat-input-element::-ms-reveal{display:none}.mat-input-element,.mat-input-element::-webkit-search-cancel-button,.mat-input-element::-webkit-search-decoration,.mat-input-element::-webkit-search-results-button,.mat-input-element::-webkit-search-results-decoration{-webkit-appearance:none}.mat-input-element::-webkit-caps-lock-indicator,.mat-input-element::-webkit-contacts-auto-fill-button,.mat-input-element::-webkit-credentials-auto-fill-button{visibility:hidden}.mat-input-element[type=date]::after,.mat-input-element[type=datetime-local]::after,.mat-input-element[type=datetime]::after,.mat-input-element[type=month]::after,.mat-input-element[type=time]::after,.mat-input-element[type=week]::after{content:' ';white-space:pre;width:1px}.mat-input-element::-webkit-calendar-picker-indicator,.mat-input-element::-webkit-clear-button,.mat-input-element::-webkit-inner-spin-button{font-size:.75em}.mat-input-element::placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color .4s .133s cubic-bezier(.25,.8,.25,1)}.mat-input-element::-moz-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color .4s .133s cubic-bezier(.25,.8,.25,1)}.mat-input-element::-webkit-input-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color .4s .133s cubic-bezier(.25,.8,.25,1)}.mat-input-element:-ms-input-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color .4s .133s cubic-bezier(.25,.8,.25,1)}.mat-form-field-hide-placeholder .mat-input-element::placeholder{color:transparent!important;-webkit-text-fill-color:transparent;transition:none}.mat-form-field-hide-placeholder .mat-input-element::-moz-placeholder{color:transparent!important;-webkit-text-fill-color:transparent;transition:none}.mat-form-field-hide-placeholder .mat-input-element::-webkit-input-placeholder{color:transparent!important;-webkit-text-fill-color:transparent;transition:none}.mat-form-field-hide-placeholder .mat-input-element:-ms-input-placeholder{color:transparent!important;-webkit-text-fill-color:transparent;transition:none}textarea.mat-input-element{resize:vertical;overflow:auto}textarea.mat-input-element.cdk-textarea-autosize{resize:none}textarea.mat-input-element{padding:2px 0;margin:-2px 0}select.mat-input-element{-moz-appearance:none;-webkit-appearance:none;position:relative;background-color:transparent;display:inline-flex;box-sizing:border-box;padding-top:1em;top:-1em;margin-bottom:-1em}select.mat-input-element::-ms-expand{display:none}select.mat-input-element::-moz-focus-inner{border:0}select.mat-input-element:not(:disabled){cursor:pointer}select.mat-input-element::-ms-value{color:inherit;background:0 0}.mat-form-field-type-mat-native-select .mat-form-field-infix::after{content:'';width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid;position:absolute;top:50%;right:0;margin-top:-2.5px}[dir=rtl] .mat-form-field-type-mat-native-select .mat-form-field-infix::after{right:auto;left:0}.mat-form-field-type-mat-native-select.mat-form-field-appearance-outline .mat-form-field-infix::after{margin-top:-5px}.mat-form-field-type-mat-native-select.mat-form-field-appearance-fill .mat-form-field-infix::after{margin-top:-10px}", ".mat-form-field-appearance-legacy .mat-form-field-label{transform:perspective(100px);-ms-transform:none}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon{width:1em}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon-button,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon-button{font:inherit;vertical-align:baseline}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon-button .mat-icon{font-size:inherit}.mat-form-field-appearance-legacy .mat-form-field-underline{height:1px}@media screen and (-ms-high-contrast:active){.mat-form-field-appearance-legacy .mat-form-field-underline{height:0;border-top:solid 1px}}.mat-form-field-appearance-legacy .mat-form-field-ripple{top:0;height:2px;overflow:hidden}@media screen and (-ms-high-contrast:active){.mat-form-field-appearance-legacy .mat-form-field-ripple{height:0;border-top:solid 2px}}.mat-form-field-appearance-legacy.mat-form-field-disabled .mat-form-field-underline{background-position:0;background-color:transparent}@media screen and (-ms-high-contrast:active){.mat-form-field-appearance-legacy.mat-form-field-disabled .mat-form-field-underline{border-top-style:dotted;border-top-width:2px}}.mat-form-field-appearance-legacy.mat-form-field-invalid:not(.mat-focused) .mat-form-field-ripple{height:1px}", ".mat-form-field-appearance-outline .mat-form-field-wrapper{margin:.25em 0}.mat-form-field-appearance-outline .mat-form-field-flex{padding:0 .75em 0 .75em;margin-top:-.25em;position:relative}.mat-form-field-appearance-outline .mat-form-field-prefix,.mat-form-field-appearance-outline .mat-form-field-suffix{top:.25em}.mat-form-field-appearance-outline .mat-form-field-outline{display:flex;position:absolute;top:.25em;left:0;right:0;bottom:0;pointer-events:none}.mat-form-field-appearance-outline .mat-form-field-outline-end,.mat-form-field-appearance-outline .mat-form-field-outline-start{border:1px solid currentColor;min-width:5px}.mat-form-field-appearance-outline .mat-form-field-outline-start{border-radius:5px 0 0 5px;border-right-style:none}[dir=rtl] .mat-form-field-appearance-outline .mat-form-field-outline-start{border-right-style:solid;border-left-style:none;border-radius:0 5px 5px 0}.mat-form-field-appearance-outline .mat-form-field-outline-end{border-radius:0 5px 5px 0;border-left-style:none;flex-grow:1}[dir=rtl] .mat-form-field-appearance-outline .mat-form-field-outline-end{border-left-style:solid;border-right-style:none;border-radius:5px 0 0 5px}.mat-form-field-appearance-outline .mat-form-field-outline-gap{border-radius:.000001px;border:1px solid currentColor;border-left-style:none;border-right-style:none}.mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-outline-gap{border-top-color:transparent}.mat-form-field-appearance-outline .mat-form-field-outline-thick{opacity:0}.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-end,.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-gap,.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-start{border-width:2px;transition:border-color .3s cubic-bezier(.25,.8,.25,1)}.mat-form-field-appearance-outline.mat-focused .mat-form-field-outline,.mat-form-field-appearance-outline.mat-form-field-invalid .mat-form-field-outline{opacity:0;transition:opacity .1s cubic-bezier(.25,.8,.25,1)}.mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick,.mat-form-field-appearance-outline.mat-form-field-invalid .mat-form-field-outline-thick{opacity:1}.mat-form-field-appearance-outline:not(.mat-form-field-disabled) .mat-form-field-flex:hover .mat-form-field-outline{opacity:0;transition:opacity .6s cubic-bezier(.25,.8,.25,1)}.mat-form-field-appearance-outline:not(.mat-form-field-disabled) .mat-form-field-flex:hover .mat-form-field-outline-thick{opacity:1}.mat-form-field-appearance-outline .mat-form-field-subscript-wrapper{padding:0 1em}.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline-end,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline-gap,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline-start,.mat-form-field-appearance-outline._mat-animation-noopable:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-outline{transition:none}", ".mat-form-field-appearance-standard .mat-form-field-flex{padding-top:.75em}.mat-form-field-appearance-standard .mat-form-field-underline{height:1px}@media screen and (-ms-high-contrast:active){.mat-form-field-appearance-standard .mat-form-field-underline{height:0;border-top:solid 1px}}.mat-form-field-appearance-standard .mat-form-field-ripple{bottom:0;height:2px}@media screen and (-ms-high-contrast:active){.mat-form-field-appearance-standard .mat-form-field-ripple{height:0;border-top:2px}}.mat-form-field-appearance-standard.mat-form-field-disabled .mat-form-field-underline{background-position:0;background-color:transparent}@media screen and (-ms-high-contrast:active){.mat-form-field-appearance-standard.mat-form-field-disabled .mat-form-field-underline{border-top-style:dotted;border-top-width:2px}}.mat-form-field-appearance-standard:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{opacity:1;transform:none;transition:opacity .6s cubic-bezier(.25,.8,.25,1)}.mat-form-field-appearance-standard._mat-animation-noopable:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{transition:none}"],
          data: {
            animation: [{
              type: 7,
              name: "transitionMessages",
              definitions: [{
                type: 0,
                name: "enter",
                styles: {
                  type: 6,
                  styles: {
                    opacity: 1,
                    transform: "translateY(0%)"
                  },
                  offset: null
                },
                options: void 0
              }, {
                type: 1,
                expr: "void => enter",
                animation: [{
                  type: 6,
                  styles: {
                    opacity: 0,
                    transform: "translateY(-100%)"
                  },
                  offset: null
                }, {
                  type: 4,
                  styles: null,
                  timings: "300ms cubic-bezier(0.55, 0, 0.55, 0.2)"
                }],
                options: null
              }],
              options: {}
            }]
          }
        });

      function Dw(t) {
        return la(0, [(t()(), Uo(0, 0, null, null, 8, null, null, null, null, null, null, null)), (t()(), Uo(1, 0, null, null, 3, "div", [
          ["class", "mat-form-field-outline"]
        ], null, null, null, null, null)), (t()(), Uo(2, 0, null, null, 0, "div", [
          ["class", "mat-form-field-outline-start"]
        ], null, null, null, null, null)), (t()(), Uo(3, 0, null, null, 0, "div", [
          ["class", "mat-form-field-outline-gap"]
        ], null, null, null, null, null)), (t()(), Uo(4, 0, null, null, 0, "div", [
          ["class", "mat-form-field-outline-end"]
        ], null, null, null, null, null)), (t()(), Uo(5, 0, null, null, 3, "div", [
          ["class", "mat-form-field-outline mat-form-field-outline-thick"]
        ], null, null, null, null, null)), (t()(), Uo(6, 0, null, null, 0, "div", [
          ["class", "mat-form-field-outline-start"]
        ], null, null, null, null, null)), (t()(), Uo(7, 0, null, null, 0, "div", [
          ["class", "mat-form-field-outline-gap"]
        ], null, null, null, null, null)), (t()(), Uo(8, 0, null, null, 0, "div", [
          ["class", "mat-form-field-outline-end"]
        ], null, null, null, null, null))], null, null)
      }

      function Nw(t) {
        return la(0, [(t()(), Uo(0, 0, null, null, 1, "div", [
          ["class", "mat-form-field-prefix"]
        ], null, null, null, null, null)), Ji(null, 0)], null, null)
      }

      function Mw(t) {
        return la(0, [(t()(), Uo(0, 0, null, null, 2, null, null, null, null, null, null, null)), Ji(null, 2), (t()(), ia(2, null, ["", ""]))], null, function (t, e) {
          t(e, 2, 0, e.component._control.placeholder)
        })
      }

      function jw(t) {
        return la(0, [Ji(null, 3), (t()(), zo(0, null, null, 0))], null, null)
      }

      function Fw(t) {
        return la(0, [(t()(), Uo(0, 0, null, null, 1, "span", [
          ["aria-hidden", "true"],
          ["class", "mat-placeholder-required mat-form-field-required-marker"]
        ], null, null, null, null, null)), (t()(), ia(-1, null, ["\xa0*"]))], null, null)
      }

      function Vw(t) {
        return la(0, [(t()(), Uo(0, 0, [
          [4, 0],
          ["label", 1]
        ], null, 8, "label", [
          ["class", "mat-form-field-label"]
        ], [
          [8, "id", 0],
          [1, "for", 0],
          [1, "aria-owns", 0],
          [2, "mat-empty", null],
          [2, "mat-form-field-empty", null],
          [2, "mat-accent", null],
          [2, "mat-warn", null]
        ], [
          [null, "cdkObserveContent"]
        ], function (t, e, n) {
          var r = !0;
          return "cdkObserveContent" === e && (r = !1 !== t.component.updateOutlineGap() && r), r
        }, null, null)), Ii(1, 16384, null, 0, Yu, [], {
          ngSwitch: [0, "ngSwitch"]
        }, null), Ii(2, 1196032, null, 0, nd, [ed, Vn, fn], {
          disabled: [0, "disabled"]
        }, {
          event: "cdkObserveContent"
        }), (t()(), zo(16777216, null, null, 1, null, Mw)), Ii(4, 278528, null, 0, Xu, [Qn, Gn, Yu], {
          ngSwitchCase: [0, "ngSwitchCase"]
        }, null), (t()(), zo(16777216, null, null, 1, null, jw)), Ii(6, 278528, null, 0, Xu, [Qn, Gn, Yu], {
          ngSwitchCase: [0, "ngSwitchCase"]
        }, null), (t()(), zo(16777216, null, null, 1, null, Fw)), Ii(8, 16384, null, 0, Wu, [Qn, Gn], {
          ngIf: [0, "ngIf"]
        }, null)], function (t, e) {
          var n = e.component;
          t(e, 1, 0, n._hasLabel()), t(e, 2, 0, "outline" != n.appearance), t(e, 4, 0, !1), t(e, 6, 0, !0), t(e, 8, 0, !n.hideRequiredMarker && n._control.required && !n._control.disabled)
        }, function (t, e) {
          var n = e.component;
          t(e, 0, 0, n._labelId, n._control.id, n._control.id, n._control.empty && !n._shouldAlwaysFloat, n._control.empty && !n._shouldAlwaysFloat, "accent" == n.color, "warn" == n.color)
        })
      }

      function Lw(t) {
        return la(0, [(t()(), Uo(0, 0, null, null, 1, "div", [
          ["class", "mat-form-field-suffix"]
        ], null, null, null, null, null)), Ji(null, 4)], null, null)
      }

      function Hw(t) {
        return la(0, [(t()(), Uo(0, 0, [
          [1, 0],
          ["underline", 1]
        ], null, 1, "div", [
          ["class", "mat-form-field-underline"]
        ], null, null, null, null, null)), (t()(), Uo(1, 0, null, null, 0, "span", [
          ["class", "mat-form-field-ripple"]
        ], [
          [2, "mat-accent", null],
          [2, "mat-warn", null]
        ], null, null, null, null))], null, function (t, e) {
          var n = e.component;
          t(e, 1, 0, "accent" == n.color, "warn" == n.color)
        })
      }

      function Bw(t) {
        return la(0, [(t()(), Uo(0, 0, null, null, 1, "div", [], [
          [24, "@transitionMessages", 0]
        ], null, null, null, null)), Ji(null, 5)], null, function (t, e) {
          t(e, 0, 0, e.component._subscriptAnimationState)
        })
      }

      function zw(t) {
        return la(0, [(t()(), Uo(0, 0, null, null, 1, "div", [
          ["class", "mat-hint"]
        ], [
          [8, "id", 0]
        ], null, null, null, null)), (t()(), ia(1, null, ["", ""]))], null, function (t, e) {
          var n = e.component;
          t(e, 0, 0, n._hintLabelId), t(e, 1, 0, n.hintLabel)
        })
      }

      function Uw(t) {
        return la(0, [(t()(), Uo(0, 0, null, null, 5, "div", [
          ["class", "mat-form-field-hint-wrapper"]
        ], [
          [24, "@transitionMessages", 0]
        ], null, null, null, null)), (t()(), zo(16777216, null, null, 1, null, zw)), Ii(2, 16384, null, 0, Wu, [Qn, Gn], {
          ngIf: [0, "ngIf"]
        }, null), Ji(null, 6), (t()(), Uo(4, 0, null, null, 0, "div", [
          ["class", "mat-form-field-hint-spacer"]
        ], null, null, null, null, null)), Ji(null, 7)], function (t, e) {
          t(e, 2, 0, e.component.hintLabel)
        }, function (t, e) {
          t(e, 0, 0, e.component._subscriptAnimationState)
        })
      }

      function qw(t) {
        return la(2, [Zi(671088640, 1, {
          underlineRef: 0
        }), Zi(402653184, 2, {
          _connectionContainerRef: 0
        }), Zi(402653184, 3, {
          _inputContainerRef: 0
        }), Zi(671088640, 4, {
          _label: 0
        }), (t()(), Uo(4, 0, null, null, 20, "div", [
          ["class", "mat-form-field-wrapper"]
        ], null, null, null, null, null)), (t()(), Uo(5, 0, [
          [2, 0],
          ["connectionContainer", 1]
        ], null, 11, "div", [
          ["class", "mat-form-field-flex"]
        ], null, [
          [null, "click"]
        ], function (t, e, n) {
          var r = !0,
            o = t.component;
          return "click" === e && (r = !1 !== (o._control.onContainerClick && o._control.onContainerClick(n)) && r), r
        }, null, null)), (t()(), zo(16777216, null, null, 1, null, Dw)), Ii(7, 16384, null, 0, Wu, [Qn, Gn], {
          ngIf: [0, "ngIf"]
        }, null), (t()(), zo(16777216, null, null, 1, null, Nw)), Ii(9, 16384, null, 0, Wu, [Qn, Gn], {
          ngIf: [0, "ngIf"]
        }, null), (t()(), Uo(10, 0, [
          [3, 0],
          ["inputContainer", 1]
        ], null, 4, "div", [
          ["class", "mat-form-field-infix"]
        ], null, null, null, null, null)), Ji(null, 1), (t()(), Uo(12, 0, null, null, 2, "span", [
          ["class", "mat-form-field-label-wrapper"]
        ], null, null, null, null, null)), (t()(), zo(16777216, null, null, 1, null, Vw)), Ii(14, 16384, null, 0, Wu, [Qn, Gn], {
          ngIf: [0, "ngIf"]
        }, null), (t()(), zo(16777216, null, null, 1, null, Lw)), Ii(16, 16384, null, 0, Wu, [Qn, Gn], {
          ngIf: [0, "ngIf"]
        }, null), (t()(), zo(16777216, null, null, 1, null, Hw)), Ii(18, 16384, null, 0, Wu, [Qn, Gn], {
          ngIf: [0, "ngIf"]
        }, null), (t()(), Uo(19, 0, null, null, 5, "div", [
          ["class", "mat-form-field-subscript-wrapper"]
        ], null, null, null, null, null)), Ii(20, 16384, null, 0, Yu, [], {
          ngSwitch: [0, "ngSwitch"]
        }, null), (t()(), zo(16777216, null, null, 1, null, Bw)), Ii(22, 278528, null, 0, Xu, [Qn, Gn, Yu], {
          ngSwitchCase: [0, "ngSwitchCase"]
        }, null), (t()(), zo(16777216, null, null, 1, null, Uw)), Ii(24, 278528, null, 0, Xu, [Qn, Gn, Yu], {
          ngSwitchCase: [0, "ngSwitchCase"]
        }, null)], function (t, e) {
          var n = e.component;
          t(e, 7, 0, "outline" == n.appearance), t(e, 9, 0, n._prefixChildren.length), t(e, 14, 0, n._hasFloatingLabel()), t(e, 16, 0, n._suffixChildren.length), t(e, 18, 0, "outline" != n.appearance), t(e, 20, 0, n._getDisplayedMessages()), t(e, 22, 0, "error"), t(e, 24, 0, "hint")
        }, null)
      }
      var Gw = function (t) {
          return function () {
            if (null == vp && "undefined" != typeof window) try {
              window.addEventListener("test", null, Object.defineProperty({}, "passive", {
                get: function () {
                  return vp = !0
                }
              }))
            } finally {
              vp = vp || !1
            }
            return vp
          }() ? t : !!t.capture
        }({
          passive: !0
        }),
        Qw = function () {
          function t(t, e) {
            this._platform = t, this._ngZone = e, this._monitoredElements = new Map
          }
          return t.prototype.monitor = function (t) {
            var e = this;
            if (!this._platform.isBrowser) return Mp;
            var n = t instanceof Vn ? t.nativeElement : t,
              r = this._monitoredElements.get(n);
            if (r) return r.subject.asObservable();
            var o = new ct,
              i = "cdk-text-field-autofilled",
              a = function (t) {
                "cdk-text-field-autofill-start" !== t.animationName || n.classList.contains(i) ? "cdk-text-field-autofill-end" === t.animationName && n.classList.contains(i) && (n.classList.remove(i), e._ngZone.run(function () {
                  return o.next({
                    target: t.target,
                    isAutofilled: !1
                  })
                })) : (n.classList.add(i), e._ngZone.run(function () {
                  return o.next({
                    target: t.target,
                    isAutofilled: !0
                  })
                }))
              };
            return this._ngZone.runOutsideAngular(function () {
              n.addEventListener("animationstart", a, Gw), n.classList.add("cdk-text-field-autofill-monitored")
            }), this._monitoredElements.set(n, {
              subject: o,
              unlisten: function () {
                n.removeEventListener("animationstart", a, Gw)
              }
            }), o.asObservable()
          }, t.prototype.stopMonitoring = function (t) {
            var e = t instanceof Vn ? t.nativeElement : t,
              n = this._monitoredElements.get(e);
            n && (n.unlisten(), n.subject.complete(), e.classList.remove("cdk-text-field-autofill-monitored"), e.classList.remove("cdk-text-field-autofilled"), this._monitoredElements.delete(e))
          }, t.prototype.ngOnDestroy = function () {
            var t = this;
            this._monitoredElements.forEach(function (e, n) {
              return t.stopMonitoring(n)
            })
          }, t.ngInjectableDef = _t({
            factory: function () {
              return new t(fe(bp), fe(fn))
            },
            token: t,
            providedIn: "root"
          }), t
        }(),
        Ww = function () {},
        Zw = ["button", "checkbox", "file", "hidden", "image", "radio", "range", "reset", "submit"],
        Kw = 0,
        $w = function (t) {
          function e(e, n, r, o, i, a, s, l, u) {
            var c = t.call(this, a, o, i, r) || this;
            c._elementRef = e, c._platform = n, c.ngControl = r, c._autofillMonitor = l, c._uid = "mat-input-" + Kw++, c._isServer = !1, c._isNativeSelect = !1, c.focused = !1, c.stateChanges = new ct, c.controlType = "mat-input", c.autofilled = !1, c._disabled = !1, c._required = !1, c._type = "text", c._readonly = !1, c._neverEmptyInputTypes = ["date", "datetime", "datetime-local", "month", "time", "week"].filter(function (t) {
              return Ep().has(t)
            });
            var h = c._elementRef.nativeElement;
            return c._inputValueAccessor = s || h, c._previousNativeValue = c.value, c.id = c.id, n.IOS && u.runOutsideAngular(function () {
              e.nativeElement.addEventListener("keyup", function (t) {
                var e = t.target;
                e.value || e.selectionStart || e.selectionEnd || (e.setSelectionRange(1, 1), e.setSelectionRange(0, 0))
              })
            }), c._isServer = !c._platform.isBrowser, c._isNativeSelect = "select" === h.nodeName.toLowerCase(), c._isNativeSelect && (c.controlType = h.multiple ? "mat-native-select-multiple" : "mat-native-select"), c
          }
          return o(e, t), Object.defineProperty(e.prototype, "disabled", {
            get: function () {
              return this.ngControl && null !== this.ngControl.disabled ? this.ngControl.disabled : this._disabled
            },
            set: function (t) {
              this._disabled = dp(t), this.focused && (this.focused = !1, this.stateChanges.next())
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(e.prototype, "id", {
            get: function () {
              return this._id
            },
            set: function (t) {
              this._id = t || this._uid
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(e.prototype, "required", {
            get: function () {
              return this._required
            },
            set: function (t) {
              this._required = dp(t)
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(e.prototype, "type", {
            get: function () {
              return this._type
            },
            set: function (t) {
              this._type = t || "text", this._validateType(), !this._isTextarea() && Ep().has(this._type) && (this._elementRef.nativeElement.type = this._type)
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(e.prototype, "value", {
            get: function () {
              return this._inputValueAccessor.value
            },
            set: function (t) {
              t !== this.value && (this._inputValueAccessor.value = t, this.stateChanges.next())
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(e.prototype, "readonly", {
            get: function () {
              return this._readonly
            },
            set: function (t) {
              this._readonly = dp(t)
            },
            enumerable: !0,
            configurable: !0
          }), e.prototype.ngOnInit = function () {
            var t = this;
            this._platform.isBrowser && this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(function (e) {
              t.autofilled = e.isAutofilled, t.stateChanges.next()
            })
          }, e.prototype.ngOnChanges = function () {
            this.stateChanges.next()
          }, e.prototype.ngOnDestroy = function () {
            this.stateChanges.complete(), this._platform.isBrowser && this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement)
          }, e.prototype.ngDoCheck = function () {
            this.ngControl && this.updateErrorState(), this._dirtyCheckNativeValue()
          }, e.prototype.focus = function () {
            this._elementRef.nativeElement.focus()
          }, e.prototype._focusChanged = function (t) {
            t === this.focused || this.readonly || (this.focused = t, this.stateChanges.next())
          }, e.prototype._onInput = function () {}, e.prototype._dirtyCheckNativeValue = function () {
            var t = this._elementRef.nativeElement.value;
            this._previousNativeValue !== t && (this._previousNativeValue = t, this.stateChanges.next())
          }, e.prototype._validateType = function () {
            if (Zw.indexOf(this._type) > -1) throw Error('Input type "' + this._type + "\" isn't supported by matInput.")
          }, e.prototype._isNeverEmpty = function () {
            return this._neverEmptyInputTypes.indexOf(this._type) > -1
          }, e.prototype._isBadInput = function () {
            var t = this._elementRef.nativeElement.validity;
            return t && t.badInput
          }, e.prototype._isTextarea = function () {
            return "textarea" === this._elementRef.nativeElement.nodeName.toLowerCase()
          }, Object.defineProperty(e.prototype, "empty", {
            get: function () {
              return !(this._isNeverEmpty() || this._elementRef.nativeElement.value || this._isBadInput() || this.autofilled)
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(e.prototype, "shouldLabelFloat", {
            get: function () {
              if (this._isNativeSelect) {
                var t = this._elementRef.nativeElement,
                  e = t.options[0];
                return t.multiple || !this.empty || this.focused || !(!e || !e.label)
              }
              return this.focused || !this.empty
            },
            enumerable: !0,
            configurable: !0
          }), e.prototype.setDescribedByIds = function (t) {
            this._ariaDescribedby = t.join(" ")
          }, e.prototype.onContainerClick = function () {
            this.focused || this.focus()
          }, e
        }(function (t) {
          return function (t) {
            function e() {
              for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
              var r = t.apply(this, e) || this;
              return r.errorState = !1, r.stateChanges = new ct, r
            }
            return o(e, t), e.prototype.updateErrorState = function () {
              var t = this.errorState,
                e = (this.errorStateMatcher || this._defaultErrorStateMatcher).isErrorState(this.ngControl ? this.ngControl.control : null, this._parentFormGroup || this._parentForm);
              e !== t && (this.errorState = e, this.stateChanges.next())
            }, e
          }(function (t, e, n, r) {
            this._defaultErrorStateMatcher = t, this._parentForm = e, this._parentFormGroup = n, this.ngControl = r
          })
        }()),
        Yw = function () {},
        Xw = po({
          encapsulation: 0,
          styles: [
            [".font-size[_ngcontent-%COMP%]{font-size:14px}.user-name[_ngcontent-%COMP%]{font-size:23px;color:#0d56da;margin-top:-12px}.m-s[_ngcontent-%COMP%]{margin:15px auto}.p-l-2[_ngcontent-%COMP%]{padding-left:2rem}.blankslate[_ngcontent-%COMP%]{background-color:#fafbfc;border:1px solid #e1e4e8;border-radius:3px;box-shadow:inset 0 0 10px rgba(27,31,35,.05);padding:25px 100px;text-align:center;margin-top:3rem}.user-icon[_ngcontent-%COMP%]{font-size:25px;color:#b5b5b5}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#6a6b6d}h5[_ngcontent-%COMP%]{color:#1d67f5}p[_ngcontent-%COMP%]{margin-bottom:.5rem}.overflow-x[_ngcontent-%COMP%]{overflow-x:hidden}.bg-color[_ngcontent-%COMP%]{background-color:#b5b0b026}.img-width[_ngcontent-%COMP%]{width:10rem}.bio-width[_ngcontent-%COMP%]{width:65%}.m-t[_ngcontent-%COMP%]{margin-top:-5px}.user-img[_ngcontent-%COMP%]{width:80px}.modal-width[_ngcontent-%COMP%]{max-width:500px}.user-info[_ngcontent-%COMP%]{margin-top:-12px}"]
          ],
          data: {}
        });

      function Jw(t) {
        return la(0, [(t()(), Uo(0, 0, null, null, 2, "span", [], null, null, null, null, null)), (t()(), ia(1, null, ["Member Since ", ""])), ea(2, 1)], null, function (t, e) {
          var n = e.component;
          t(e, 1, 0, uo(e, 1, 0, t(e, 2, 0, vi(e.parent, 0), n.joinDate)))
        })
      }

      function tC(t) {
        return la(0, [(t()(), Uo(0, 0, null, null, 2, "div", [
          ["class", "d-inline"]
        ], null, null, null, null, null)), (t()(), Uo(1, 0, null, null, 0, "i", [
          ["aria-hidden", "true"],
          ["class", "fa fa-map-marker"]
        ], null, null, null, null, null)), (t()(), ia(2, null, ["", " | "]))], null, function (t, e) {
          t(e, 2, 0, e.component.place)
        })
      }

      function eC(t) {
        return la(0, [(t()(), Uo(0, 0, null, null, 2, "div", [
          ["class", "d-inline"]
        ], null, null, null, null, null)), (t()(), Uo(1, 0, null, null, 0, "i", [
          ["aria-hidden", "true"],
          ["class", "fa fa-briefcase"]
        ], null, null, null, null, null)), (t()(), ia(2, null, [" ", " | "]))], null, function (t, e) {
          t(e, 2, 0, e.component.oragnization)
        })
      }

      function nC(t) {
        return la(0, [(t()(), Uo(0, 0, null, null, 2, "div", [
          ["class", "d-inline"]
        ], null, null, null, null, null)), (t()(), Uo(1, 0, null, null, 0, "i", [
          ["aria-hidden", "true"],
          ["class", "fa fa-rss-square"]
        ], null, null, null, null, null)), (t()(), ia(2, null, [" ", " "]))], null, function (t, e) {
          t(e, 2, 0, e.component.blog)
        })
      }

      function rC(t) {
        return la(0, [(t()(), Uo(0, 0, null, null, 6, "div", [
          ["class", "m-t text-center font-size text-dark"]
        ], null, null, null, null, null)), (t()(), zo(16777216, null, null, 1, null, tC)), Ii(2, 16384, null, 0, Wu, [Qn, Gn], {
          ngIf: [0, "ngIf"]
        }, null), (t()(), zo(16777216, null, null, 1, null, eC)), Ii(4, 16384, null, 0, Wu, [Qn, Gn], {
          ngIf: [0, "ngIf"]
        }, null), (t()(), zo(16777216, null, null, 1, null, nC)), Ii(6, 16384, null, 0, Wu, [Qn, Gn], {
          ngIf: [0, "ngIf"]
        }, null)], function (t, e) {
          var n = e.component;
          t(e, 2, 0, null != n.place), t(e, 4, 0, null != n.oragnization), t(e, 6, 0, null != n.blog)
        }, null)
      }

      function oC(t) {
        return la(0, [(t()(), Uo(0, 0, null, null, 2, "div", [
          ["class", "ml-auto mr-auto ml-2 mb-2 text-center font-size bio-width"]
        ], null, null, null, null, null)), (t()(), Uo(1, 0, null, null, 1, "p", [
          ["class", "mb-2"]
        ], null, null, null, null, null)), (t()(), ia(2, null, ["", ""]))], null, function (t, e) {
          t(e, 2, 0, e.component.bio)
        })
      }

      function iC(t) {
        return la(0, [(t()(), Uo(0, 0, null, null, 1, "h6", [
          ["class", "mt-2 mb-2 ml-3 mr-3"]
        ], null, null, null, null, null)), (t()(), ia(1, null, ["", " Repository"]))], null, function (t, e) {
          t(e, 1, 0, e.component.repo_length)
        })
      }

      function aC(t) {
        return la(0, [(t()(), Uo(0, 0, null, null, 4, "div", [
          ["class", "row"]
        ], null, null, null, null, null)), (t()(), Uo(1, 0, null, null, 3, "div", [
          ["class", "px-2 mr-auto ml-auto"]
        ], null, null, null, null, null)), (t()(), Uo(2, 0, null, null, 2, "div", [
          ["class", "blankslate"]
        ], null, null, null, null, null)), (t()(), Uo(3, 0, null, null, 1, "h4", [], null, null, null, null, null)), (t()(), ia(4, null, [" ", " doesn't have any public Repository Yet. "]))], null, function (t, e) {
          t(e, 4, 0, e.component.username)
        })
      }

      function sC(t) {
        return la(0, [(t()(), Uo(0, 0, null, null, 2, "span", [
          ["class", "mr-2"]
        ], null, null, null, null, null)), (t()(), Uo(1, 0, null, null, 0, "i", [
          ["class", "fa fa-edit"]
        ], null, null, null, null, null)), (t()(), ia(2, null, ["", ""]))], null, function (t, e) {
          t(e, 2, 0, e.parent.context.$implicit.language)
        })
      }

      function lC(t) {
        return la(0, [(t()(), Uo(0, 0, null, null, 2, "span", [
          ["class", "mr-2"]
        ], null, null, null, null, null)), (t()(), Uo(1, 0, null, null, 0, "i", [
          ["class", "fa fa-balance"]
        ], null, null, null, null, null)), (t()(), ia(2, null, ["", ""]))], null, function (t, e) {
          t(e, 2, 0, e.parent.context.$implicit.license.name)
        })
      }

      function uC(t) {
        return la(0, [(t()(), Uo(0, 0, null, null, 3, "span", [
          ["class", "mr-2"]
        ], null, null, null, null, null)), (t()(), Uo(1, 0, null, null, 0, "i", [
          ["class", "fa fa-calendar"]
        ], null, null, null, null, null)), (t()(), ia(2, null, ["Updated ", ""])), ea(3, 1)], null, function (t, e) {
          t(e, 2, 0, uo(e, 2, 0, t(e, 3, 0, vi(e.parent.parent, 0), e.parent.context.$implicit.updated_at)))
        })
      }

      function cC(t) {
        return la(0, [(t()(), Uo(0, 0, null, null, 18, "div", [
          ["class", "row pt-3 pb-3 border-top"]
        ], null, null, null, null, null)), (t()(), Uo(1, 0, null, null, 14, "div", [
          ["class", "col-9 p-l-2 pr-0 font-size"]
        ], null, null, null, null, null)), (t()(), Uo(2, 0, null, null, 3, "div", [
          ["class", ""]
        ], null, null, null, null, null)), (t()(), Uo(3, 0, null, null, 2, "h5", [], null, null, null, null, null)), (t()(), Uo(4, 0, null, null, 1, "a", [
          ["target", "_blank"]
        ], [
          [8, "href", 4]
        ], null, null, null, null)), (t()(), ia(5, null, ["", ""])), (t()(), Uo(6, 0, null, null, 2, "div", [], null, null, null, null, null)), (t()(), Uo(7, 0, null, null, 1, "p", [], null, null, null, null, null)), (t()(), ia(8, null, ["", ""])), (t()(), Uo(9, 0, null, null, 6, "div", [], null, null, null, null, null)), (t()(), zo(16777216, null, null, 1, null, sC)), Ii(11, 16384, null, 0, Wu, [Qn, Gn], {
          ngIf: [0, "ngIf"]
        }, null), (t()(), zo(16777216, null, null, 1, null, lC)), Ii(13, 16384, null, 0, Wu, [Qn, Gn], {
          ngIf: [0, "ngIf"]
        }, null), (t()(), zo(16777216, null, null, 1, null, uC)), Ii(15, 16384, null, 0, Wu, [Qn, Gn], {
          ngIf: [0, "ngIf"]
        }, null), (t()(), Uo(16, 0, null, null, 2, "div", [
          ["class", "col-3 my-auto pl-0 text-center"]
        ], null, null, null, null, null)), (t()(), Uo(17, 0, null, null, 1, "button", [
          ["class", "btn btn-success btn-sm"]
        ], null, [
          [null, "click"]
        ], function (t, e, n) {
          var r = !0;
          return "click" === e && (r = !1 !== t.component.openModal(t.context.$implicit.clone_url) && r), r
        }, null, null)), (t()(), ia(-1, null, ["Clone"]))], function (t, e) {
          t(e, 11, 0, null != e.context.$implicit.language), t(e, 13, 0, null != e.context.$implicit.license), t(e, 15, 0, null != e.context.$implicit.updated_at)
        }, function (t, e) {
          t(e, 4, 0, Ho(1, "", e.context.$implicit.html_url, "")), t(e, 5, 0, e.context.$implicit.name), t(e, 8, 0, e.context.$implicit.description)
        })
      }

      function hC(t) {
        return la(0, [(t()(), Uo(0, 0, null, null, 1, "h6", [
          ["class", "mt-2 mb-2 ml-3 mr-3"]
        ], null, null, null, null, null)), (t()(), ia(1, null, ["", " Followers"]))], null, function (t, e) {
          t(e, 1, 0, e.component.followers_count)
        })
      }

      function pC(t) {
        return la(0, [(t()(), Uo(0, 0, null, null, 5, "div", [
          ["class", "row"]
        ], null, null, null, null, null)), (t()(), Uo(1, 0, null, null, 4, "div", [
          ["class", "px-2 mr-auto ml-auto"]
        ], null, null, null, null, null)), (t()(), Uo(2, 0, null, null, 3, "div", [
          ["class", "blankslate"]
        ], null, null, null, null, null)), (t()(), Uo(3, 0, null, null, 0, "i", [
          ["class", "fa fa-users user-icon"]
        ], null, null, null, null, null)), (t()(), Uo(4, 0, null, null, 1, "h4", [], null, null, null, null, null)), (t()(), ia(5, null, [" ", " doesn't have any followers yet. "]))], null, function (t, e) {
          t(e, 5, 0, e.component.username)
        })
      }

      function fC(t) {
        return la(0, [(t()(), Uo(0, 0, null, null, 2, "div", [], null, null, null, null, null)), (t()(), Uo(1, 0, null, null, 1, "p", [], null, null, null, null, null)), (t()(), ia(2, null, ["", ""]))], null, function (t, e) {
          t(e, 2, 0, e.parent.context.$implicit.bio)
        })
      }

      function dC(t) {
        return la(0, [(t()(), Uo(0, 0, null, null, 2, "span", [
          ["class", "mr-2"]
        ], null, null, null, null, null)), (t()(), Uo(1, 0, null, null, 0, "i", [
          ["class", "fa fa-briefcase"]
        ], null, null, null, null, null)), (t()(), ia(2, null, ["", ""]))], null, function (t, e) {
          t(e, 2, 0, e.parent.context.$implicit.company)
        })
      }

      function mC(t) {
        return la(0, [(t()(), Uo(0, 0, null, null, 2, "span", [
          ["class", "mr-2"]
        ], null, null, null, null, null)), (t()(), Uo(1, 0, null, null, 0, "i", [
          ["class", "fa fa-map-marker"]
        ], null, null, null, null, null)), (t()(), ia(2, null, ["", ""]))], null, function (t, e) {
          t(e, 2, 0, e.parent.context.$implicit.location)
        })
      }

      function yC(t) {
        return la(0, [(t()(), Uo(0, 0, null, null, 2, "span", [
          ["class", "mr-2"]
        ], null, null, null, null, null)), (t()(), Uo(1, 0, null, null, 0, "i", [
          ["class", "fa fa-rss-square"]
        ], null, null, null, null, null)), (t()(), ia(2, null, ["", ""]))], null, function (t, e) {
          t(e, 2, 0, e.parent.context.$implicit.blog)
        })
      }

      function gC(t) {
        return la(0, [(t()(), Uo(0, 0, null, null, 18, "div", [
          ["class", "row pt-3 pb-3 border-top"]
        ], null, null, null, null, null)), (t()(), Uo(1, 0, null, null, 1, "div", [
          ["class", "col-3 text-center mt-1 pr-0"]
        ], null, null, null, null, null)), (t()(), Uo(2, 0, null, null, 0, "img", [
          ["alt", "user img"],
          ["class", "img-fluid user-img rounded"]
        ], [
          [8, "src", 4]
        ], null, null, null, null)), (t()(), Uo(3, 0, null, null, 15, "div", [
          ["class", "col-9"]
        ], null, null, null, null, null)), (t()(), Uo(4, 0, null, null, 4, "div", [
          ["class", "font-size"]
        ], null, null, null, null, null)), (t()(), Uo(5, 0, null, null, 1, "h5", [], null, null, null, null, null)), (t()(), ia(6, null, ["", ""])), (t()(), Uo(7, 0, null, null, 1, "span", [], null, null, null, null, null)), (t()(), ia(8, null, ["", ""])), (t()(), Uo(9, 0, null, null, 9, "div", [
          ["class", "font-size"]
        ], null, null, null, null, null)), (t()(), zo(16777216, null, null, 1, null, fC)), Ii(11, 16384, null, 0, Wu, [Qn, Gn], {
          ngIf: [0, "ngIf"]
        }, null), (t()(), Uo(12, 0, null, null, 6, "div", [], null, null, null, null, null)), (t()(), zo(16777216, null, null, 1, null, dC)), Ii(14, 16384, null, 0, Wu, [Qn, Gn], {
          ngIf: [0, "ngIf"]
        }, null), (t()(), zo(16777216, null, null, 1, null, mC)), Ii(16, 16384, null, 0, Wu, [Qn, Gn], {
          ngIf: [0, "ngIf"]
        }, null), (t()(), zo(16777216, null, null, 1, null, yC)), Ii(18, 16384, null, 0, Wu, [Qn, Gn], {
          ngIf: [0, "ngIf"]
        }, null)], function (t, e) {
          t(e, 11, 0, null != e.context.$implicit.bio), t(e, 14, 0, null != e.context.$implicit.company), t(e, 16, 0, null != e.context.$implicit.location), t(e, 18, 0, null != e.context.$implicit.blog)
        }, function (t, e) {
          t(e, 2, 0, Ho(1, "", e.context.$implicit.avatar_url, "")), t(e, 6, 0, e.context.$implicit.login), t(e, 8, 0, e.context.$implicit.name)
        })
      }

      function vC(t) {
        return la(0, [(t()(), Uo(0, 0, null, null, 1, "h6", [
          ["class", "mt-2 mb-2 mr-3 ml-3"]
        ], null, null, null, null, null)), (t()(), ia(1, null, ["", " Following "]))], null, function (t, e) {
          t(e, 1, 0, e.component.following_count)
        })
      }

      function _C(t) {
        return la(0, [(t()(), Uo(0, 0, null, null, 5, "div", [
          ["class", "row"]
        ], null, null, null, null, null)), (t()(), Uo(1, 0, null, null, 4, "div", [
          ["class", "px-2 mr-auto ml-auto"]
        ], null, null, null, null, null)), (t()(), Uo(2, 0, null, null, 3, "div", [
          ["class", "blankslate"]
        ], null, null, null, null, null)), (t()(), Uo(3, 0, null, null, 0, "i", [
          ["class", "fa fa-users user-icon"]
        ], null, null, null, null, null)), (t()(), Uo(4, 0, null, null, 1, "h4", [], null, null, null, null, null)), (t()(), ia(5, null, [" ", " isn't following anybody yet. "]))], null, function (t, e) {
          t(e, 5, 0, e.component.username)
        })
      }

      function bC(t) {
        return la(0, [(t()(), Uo(0, 0, null, null, 2, "div", [], null, null, null, null, null)), (t()(), Uo(1, 0, null, null, 1, "p", [], null, null, null, null, null)), (t()(), ia(2, null, ["", ""]))], null, function (t, e) {
          t(e, 2, 0, e.parent.context.$implicit.bio)
        })
      }

      function wC(t) {
        return la(0, [(t()(), Uo(0, 0, null, null, 21, "div", [
          ["class", "row pt-3 pb-3 border-top"]
        ], null, null, null, null, null)), (t()(), Uo(1, 0, null, null, 1, "div", [
          ["class", "col-3 text-center mt-1 pr-0"]
        ], null, null, null, null, null)), (t()(), Uo(2, 0, null, null, 0, "img", [
          ["alt", "user img"],
          ["class", "img-fluid user-img rounded"]
        ], [
          [8, "src", 4]
        ], null, null, null, null)), (t()(), Uo(3, 0, null, null, 18, "div", [
          ["class", "col-9"]
        ], null, null, null, null, null)), (t()(), Uo(4, 0, null, null, 4, "div", [
          ["class", "font-size mb-2"]
        ], null, null, null, null, null)), (t()(), Uo(5, 0, null, null, 1, "h5", [], null, null, null, null, null)), (t()(), ia(6, null, ["", ""])), (t()(), Uo(7, 0, null, null, 1, "span", [], null, null, null, null, null)), (t()(), ia(8, null, ["", ""])), (t()(), Uo(9, 0, null, null, 12, "div", [
          ["class", "font-size"]
        ], null, null, null, null, null)), (t()(), zo(16777216, null, null, 1, null, bC)), Ii(11, 16384, null, 0, Wu, [Qn, Gn], {
          ngIf: [0, "ngIf"]
        }, null), (t()(), Uo(12, 0, null, null, 9, "div", [], null, null, null, null, null)), (t()(), Uo(13, 0, null, null, 2, "span", [
          ["class", "mr-2"]
        ], null, null, null, null, null)), (t()(), Uo(14, 0, null, null, 0, "i", [
          ["class", "fa fa-briefcase mr-1"]
        ], null, null, null, null, null)), (t()(), ia(15, null, ["", ""])), (t()(), Uo(16, 0, null, null, 2, "span", [
          ["class", "mr-2"]
        ], null, null, null, null, null)), (t()(), Uo(17, 0, null, null, 0, "i", [
          ["class", "fa fa-map-marker mr-1"]
        ], null, null, null, null, null)), (t()(), ia(18, null, ["", ""])), (t()(), Uo(19, 0, null, null, 2, "span", [
          ["class", "mr-2"]
        ], null, null, null, null, null)), (t()(), Uo(20, 0, null, null, 0, "i", [
          ["class", "fa fa-rss-square mr-1"]
        ], null, null, null, null, null)), (t()(), ia(21, null, ["", ""]))], function (t, e) {
          t(e, 11, 0, null != e.context.$implicit.bio)
        }, function (t, e) {
          t(e, 2, 0, Ho(1, "", e.context.$implicit.avatar_url, "")), t(e, 6, 0, e.context.$implicit.login), t(e, 8, 0, e.context.$implicit.name), t(e, 15, 0, e.context.$implicit.company), t(e, 18, 0, e.context.$implicit.location), t(e, 21, 0, e.context.$implicit.blog)
        })
      }

      function CC(t) {
        return la(0, [(t()(), Uo(0, 0, null, null, 1, "pagination-controls", [
          ["class", "text-center"]
        ], null, [
          [null, "pageChange"]
        ], function (t, e, n) {
          var r = !0;
          return "pageChange" === e && (r = !1 !== (t.component.p = n) && r), r
        }, Gg, Ng)), Ii(1, 49152, null, 0, Ig, [], null, {
          pageChange: "pageChange"
        })], null, null)
      }

      function EC(t) {
        return la(0, [Ri(0, oc, [br]), (t()(), Uo(1, 0, null, null, 70, "div", [
          ["class", "container-fluid pl-0 pr-0 overflow-x"]
        ], null, null, null, null, null)), (t()(), Uo(2, 0, null, null, 34, "div", [
          ["class", "row mr-0 bg-color"]
        ], null, null, null, null, null)), (t()(), Uo(3, 0, null, null, 2, "div", [
          ["class", "m-s"]
        ], null, null, null, null, null)), (t()(), Uo(4, 0, null, null, 1, "a", [], null, null, null, null, null)), (t()(), Uo(5, 0, null, null, 0, "img", [
          ["class", "rounded img-width"]
        ], [
          [8, "src", 4]
        ], null, null, null, null)), (t()(), Uo(6, 0, null, null, 13, "div", [
          ["class", "col-12 mt-1"]
        ], null, null, null, null, null)), (t()(), Uo(7, 0, null, null, 1, "div", [
          ["class", "text-center user-name"]
        ], null, null, null, null, null)), (t()(), ia(8, null, ["", ""])), (t()(), Uo(9, 0, null, null, 6, "div", [], null, null, null, null, null)), (t()(), Uo(10, 0, null, null, 5, "p", [
          ["class", "mb-2 text-center text-dark font-size"]
        ], null, null, null, null, null)), (t()(), Uo(11, 0, null, null, 1, "span", [], null, null, null, null, null)), (t()(), ia(12, null, ["", ""])), (t()(), ia(-1, null, [" | "])), (t()(), zo(16777216, null, null, 1, null, Jw)), Ii(15, 16384, null, 0, Wu, [Qn, Gn], {
          ngIf: [0, "ngIf"]
        }, null), (t()(), zo(16777216, null, null, 1, null, rC)), Ii(17, 16384, null, 0, Wu, [Qn, Gn], {
          ngIf: [0, "ngIf"]
        }, null), (t()(), zo(16777216, null, null, 1, null, oC)), Ii(19, 16384, null, 0, Wu, [Qn, Gn], {
          ngIf: [0, "ngIf"]
        }, null), (t()(), Uo(20, 0, null, null, 16, "div", [
          ["class", "col-12 pl-0 pr-0 border-bottom"]
        ], null, null, null, null, null)), (t()(), Uo(21, 0, null, null, 15, "ul", [
          ["class", "nav nav-tabs justify-content-center"],
          ["id", "nav-tabs"],
          ["role", "tablist"]
        ], null, null, null, null, null)), (t()(), Uo(22, 0, null, null, 4, "li", [
          ["class", "nav-item"]
        ], null, null, null, null, null)), (t()(), Uo(23, 0, null, null, 3, "a", [
          ["aria-controls", "pills-home"],
          ["aria-selected", "true"],
          ["class", "nav-link active"],
          ["data-toggle", "tab"],
          ["href", "#1"],
          ["id", "pills-home-tab"],
          ["role", "tab"]
        ], null, null, null, null, null)), (t()(), ia(-1, null, ["Overview "])), (t()(), Uo(25, 0, null, null, 1, "span", [
          ["class", "badge badge-pill badge-danger"]
        ], null, null, null, null, null)), (t()(), ia(26, null, ["", ""])), (t()(), Uo(27, 0, null, null, 4, "li", [
          ["class", "nav-item"]
        ], null, null, null, null, null)), (t()(), Uo(28, 0, null, null, 3, "a", [
          ["aria-controls", "pills-contact"],
          ["aria-selected", "false"],
          ["class", "nav-link"],
          ["data-toggle", "tab"],
          ["href", "#2"],
          ["id", "pills-contact-tab"],
          ["role", "tab"]
        ], null, [
          [null, "click"]
        ], function (t, e, n) {
          var r = !0,
            o = t.component;
          return "click" === e && (r = !1 !== o.follower(o.follower_url) && r), r
        }, null, null)), (t()(), ia(-1, null, ["Followers "])), (t()(), Uo(30, 0, null, null, 1, "span", [
          ["class", "badge badge-pill badge-danger"]
        ], null, null, null, null, null)), (t()(), ia(31, null, ["", ""])), (t()(), Uo(32, 0, null, null, 4, "li", [
          ["class", "nav-item"]
        ], null, null, null, null, null)), (t()(), Uo(33, 0, null, null, 3, "a", [
          ["aria-controls", "pills-contact"],
          ["aria-selected", "false"],
          ["class", "nav-link"],
          ["data-toggle", "tab"],
          ["href", "#3"],
          ["id", "pills-contact-tab"],
          ["role", "tab"]
        ], null, null, null, null, null)), (t()(), ia(-1, null, ["Following "])), (t()(), Uo(35, 0, null, null, 1, "span", [
          ["class", "badge badge-pill badge-danger"]
        ], null, null, null, null, null)), (t()(), ia(36, null, ["", ""])), (t()(), Uo(37, 0, null, null, 34, "div", [
          ["class", "row justify-content-center mr-0 "]
        ], null, null, null, null, null)), (t()(), Uo(38, 0, null, null, 33, "div", [
          ["class", "col-lg-9 col-md-10 col-sm-12 tab-content pr-0 justify-content-center"],
          ["id", "pills-tabContent"]
        ], null, null, null, null, null)), (t()(), Uo(39, 0, null, null, 10, "div", [
          ["aria-labelledby", "pills-home-tab"],
          ["class", "tab-pane fade show active"],
          ["id", "1"],
          ["role", "tabpanel"]
        ], null, null, null, null, null)), (t()(), zo(16777216, null, null, 1, null, iC)), Ii(41, 16384, null, 0, Wu, [Qn, Gn], {
          ngIf: [0, "ngIf"]
        }, null), (t()(), zo(16777216, null, null, 1, null, aC)), Ii(43, 16384, null, 0, Wu, [Qn, Gn], {
          ngIf: [0, "ngIf"]
        }, null), (t()(), zo(16777216, null, null, 3, null, cC)), Ii(45, 278528, null, 0, Gu, [Qn, Gn, dr], {
          ngForOf: [0, "ngForOf"]
        }, null), ra(46, {
          itemsPerPage: 0,
          currentPage: 1
        }), Ri(0, Og, [Pg]), (t()(), Uo(48, 0, null, null, 1, "pagination-controls", [
          ["class", "text-center"]
        ], null, [
          [null, "pageChange"]
        ], function (t, e, n) {
          var r = !0;
          return "pageChange" === e && (r = !1 !== (t.component.p = n) && r), r
        }, Gg, Ng)), Ii(49, 49152, null, 0, Ig, [], null, {
          pageChange: "pageChange"
        }), (t()(), Uo(50, 0, null, null, 10, "div", [
          ["aria-labelledby", "pills-home-tab"],
          ["class", "tab-pane fade "],
          ["id", "2"],
          ["role", "tabpanel"]
        ], null, null, null, null, null)), (t()(), zo(16777216, null, null, 1, null, hC)), Ii(52, 16384, null, 0, Wu, [Qn, Gn], {
          ngIf: [0, "ngIf"]
        }, null), (t()(), zo(16777216, null, null, 1, null, pC)), Ii(54, 16384, null, 0, Wu, [Qn, Gn], {
          ngIf: [0, "ngIf"]
        }, null), (t()(), zo(16777216, null, null, 3, null, gC)), Ii(56, 278528, null, 0, Gu, [Qn, Gn, dr], {
          ngForOf: [0, "ngForOf"]
        }, null), ra(57, {
          itemsPerPage: 0,
          currentPage: 1
        }), Ri(0, Og, [Pg]), (t()(), Uo(59, 0, null, null, 1, "pagination-controls", [
          ["class", "text-center"]
        ], null, [
          [null, "pageChange"]
        ], function (t, e, n) {
          var r = !0;
          return "pageChange" === e && (r = !1 !== (t.component.p = n) && r), r
        }, Gg, Ng)), Ii(60, 49152, null, 0, Ig, [], null, {
          pageChange: "pageChange"
        }), (t()(), Uo(61, 0, null, null, 10, "div", [
          ["aria-labelledby", "pills-home-tab"],
          ["class", "tab-pane fade"],
          ["id", "3"],
          ["role", "tabpanel"]
        ], null, null, null, null, null)), (t()(), zo(16777216, null, null, 1, null, vC)), Ii(63, 16384, null, 0, Wu, [Qn, Gn], {
          ngIf: [0, "ngIf"]
        }, null), (t()(), zo(16777216, null, null, 1, null, _C)), Ii(65, 16384, null, 0, Wu, [Qn, Gn], {
          ngIf: [0, "ngIf"]
        }, null), (t()(), zo(16777216, null, null, 3, null, wC)), Ii(67, 278528, null, 0, Gu, [Qn, Gn, dr], {
          ngForOf: [0, "ngForOf"]
        }, null), ra(68, {
          itemsPerPage: 0,
          currentPage: 1
        }), Ri(0, Og, [Pg]), (t()(), zo(16777216, null, null, 1, null, CC)), Ii(71, 16384, null, 0, Wu, [Qn, Gn], {
          ngIf: [0, "ngIf"]
        }, null), (t()(), Uo(72, 0, null, null, 24, "div", [
          ["class", "remodal modal-width"],
          ["data-remodal-options", "hashTracking: false, closeOnOutsideClick: true"],
          ["id", "modal"]
        ], null, null, null, null, null)), (t()(), Uo(73, 0, null, null, 0, "button", [
          ["class", "remodal-close"],
          ["data-remodal-action", "close"]
        ], null, [
          [null, "click"]
        ], function (t, e, n) {
          var r = !0;
          return "click" === e && (r = !1 !== t.component.close() && r), r
        }, null, null)), (t()(), Uo(74, 0, null, null, 1, "h5", [], null, null, null, null, null)), (t()(), ia(-1, null, ["Clone with HTTPS "])), (t()(), Uo(76, 0, null, null, 20, "div", [
          ["class", "row"]
        ], null, null, null, null, null)), (t()(), Uo(77, 0, null, null, 19, "div", [
          ["class", "col-12"]
        ], null, null, null, null, null)), (t()(), Uo(78, 0, null, null, 16, "mat-form-field", [
          ["class", "col-11 mat-form-field"]
        ], [
          [2, "mat-form-field-appearance-standard", null],
          [2, "mat-form-field-appearance-fill", null],
          [2, "mat-form-field-appearance-outline", null],
          [2, "mat-form-field-appearance-legacy", null],
          [2, "mat-form-field-invalid", null],
          [2, "mat-form-field-can-float", null],
          [2, "mat-form-field-should-float", null],
          [2, "mat-form-field-hide-placeholder", null],
          [2, "mat-form-field-disabled", null],
          [2, "mat-form-field-autofilled", null],
          [2, "mat-focused", null],
          [2, "mat-accent", null],
          [2, "mat-warn", null],
          [2, "ng-untouched", null],
          [2, "ng-touched", null],
          [2, "ng-pristine", null],
          [2, "ng-dirty", null],
          [2, "ng-valid", null],
          [2, "ng-invalid", null],
          [2, "ng-pending", null],
          [2, "_mat-animation-noopable", null]
        ], null, null, qw, Rw)), Ii(79, 7389184, null, 7, f_, [Vn, Wn, [2, vd],
          [2, id],
          [2, p_], bp, fn, [2, Aw]
        ], null, null), Zi(335544320, 1, {
          _control: 0
        }), Zi(335544320, 2, {
          _placeholderChild: 0
        }), Zi(335544320, 3, {
          _labelChild: 0
        }), Zi(603979776, 4, {
          _errorChildren: 1
        }), Zi(603979776, 5, {
          _hintChildren: 1
        }), Zi(603979776, 6, {
          _prefixChildren: 1
        }), Zi(603979776, 7, {
          _suffixChildren: 1
        }), (t()(), Uo(87, 0, null, 1, 7, "input", [
          ["class", "mat-input-element mat-form-field-autofill-control"],
          ["matInput", ""],
          ["name", "clone_url"],
          ["placeholder", "Copy Url"],
          ["readonly", ""]
        ], [
          [2, "ng-untouched", null],
          [2, "ng-touched", null],
          [2, "ng-pristine", null],
          [2, "ng-dirty", null],
          [2, "ng-valid", null],
          [2, "ng-invalid", null],
          [2, "ng-pending", null],
          [2, "mat-input-server", null],
          [1, "id", 0],
          [1, "placeholder", 0],
          [8, "disabled", 0],
          [8, "required", 0],
          [1, "readonly", 0],
          [1, "aria-describedby", 0],
          [1, "aria-invalid", 0],
          [1, "aria-required", 0]
        ], [
          [null, "ngModelChange"],
          [null, "input"],
          [null, "blur"],
          [null, "compositionstart"],
          [null, "compositionend"],
          [null, "focus"]
        ], function (t, e, n) {
          var r = !0,
            o = t.component;
          return "input" === e && (r = !1 !== vi(t, 88)._handleInput(n.target.value) && r), "blur" === e && (r = !1 !== vi(t, 88).onTouched() && r), "compositionstart" === e && (r = !1 !== vi(t, 88)._compositionStart() && r), "compositionend" === e && (r = !1 !== vi(t, 88)._compositionEnd(n.target.value) && r), "blur" === e && (r = !1 !== vi(t, 93)._focusChanged(!1) && r), "focus" === e && (r = !1 !== vi(t, 93)._focusChanged(!0) && r), "input" === e && (r = !1 !== vi(t, 93)._onInput() && r), "ngModelChange" === e && (r = !1 !== (o.clone_url = n) && r), r
        }, null, null)), Ii(88, 16384, null, 0, av, [Fn, Vn, [2, iv]], null, null), Di(1024, null, rv, function (t) {
          return [t]
        }, [av]), Ii(90, 671744, null, 0, Qv, [
          [8, null],
          [8, null],
          [8, null],
          [6, rv]
        ], {
          name: [0, "name"],
          model: [1, "model"]
        }, {
          update: "ngModelChange"
        }), Di(2048, null, hv, null, [Qv]), Ii(92, 16384, null, 0, Rv, [
          [4, hv]
        ], null, null), Ii(93, 999424, null, 0, $w, [Vn, bp, [6, hv],
          [2, zv],
          [2, Wv], pd, [8, null], Qw, fn
        ], {
          placeholder: [0, "placeholder"],
          readonly: [1, "readonly"]
        }, null), Di(2048, [
          [1, 4]
        ], l_, null, [$w]), (t()(), Uo(95, 0, null, null, 1, "button", [], null, [
          [null, "click"]
        ], function (t, e, n) {
          var r = !0;
          return "click" === e && (r = !1 !== t.component.copyLink() && r), r
        }, null, null)), (t()(), Uo(96, 0, null, null, 0, "i", [
          ["aria-hidden", "true"],
          ["class", "fa fa-clone"]
        ], null, null, null, null, null))], function (t, e) {
          var n = e.component;
          t(e, 15, 0, null != n.joinDate), t(e, 17, 0, null != n.place && null != n.oragnization && null != n.blog), t(e, 19, 0, null != n.bio), t(e, 41, 0, n.repo_length > 0), t(e, 43, 0, 0 == n.repo_length), t(e, 45, 0, uo(e, 45, 0, vi(e, 47).transform(n.userrepo, t(e, 46, 0, 5, n.p)))), t(e, 52, 0, n.followers_count > 0), t(e, 54, 0, 0 == n.followers_count), t(e, 56, 0, uo(e, 56, 0, vi(e, 58).transform(n.listFollowers, t(e, 57, 0, 5, n.p)))), t(e, 63, 0, n.following_count > 0), t(e, 65, 0, 0 == n.following_count), t(e, 67, 0, uo(e, 67, 0, vi(e, 69).transform(n.listFollowing, t(e, 68, 0, 5, n.p)))), t(e, 71, 0, n.following_count > 0), t(e, 90, 0, "clone_url", n.clone_url), t(e, 93, 0, "Copy Url", "")
        }, function (t, e) {
          var n = e.component;
          t(e, 5, 0, Ho(1, "", n.image_url, "")), t(e, 8, 0, n.name), t(e, 12, 0, n.username), t(e, 26, 0, n.repo_length), t(e, 31, 0, n.followers_count), t(e, 36, 0, n.following_count), t(e, 78, 1, ["standard" == vi(e, 79).appearance, "fill" == vi(e, 79).appearance, "outline" == vi(e, 79).appearance, "legacy" == vi(e, 79).appearance, vi(e, 79)._control.errorState, vi(e, 79)._canLabelFloat, vi(e, 79)._shouldLabelFloat(), vi(e, 79)._hideControlPlaceholder(), vi(e, 79)._control.disabled, vi(e, 79)._control.autofilled, vi(e, 79)._control.focused, "accent" == vi(e, 79).color, "warn" == vi(e, 79).color, vi(e, 79)._shouldForward("untouched"), vi(e, 79)._shouldForward("touched"), vi(e, 79)._shouldForward("pristine"), vi(e, 79)._shouldForward("dirty"), vi(e, 79)._shouldForward("valid"), vi(e, 79)._shouldForward("invalid"), vi(e, 79)._shouldForward("pending"), !vi(e, 79)._animationsEnabled]), t(e, 87, 1, [vi(e, 92).ngClassUntouched, vi(e, 92).ngClassTouched, vi(e, 92).ngClassPristine, vi(e, 92).ngClassDirty, vi(e, 92).ngClassValid, vi(e, 92).ngClassInvalid, vi(e, 92).ngClassPending, vi(e, 93)._isServer, vi(e, 93).id, vi(e, 93).placeholder, vi(e, 93).disabled, vi(e, 93).required, vi(e, 93).readonly && !vi(e, 93)._isNativeSelect || null, vi(e, 93)._ariaDescribedby || null, vi(e, 93).errorState, vi(e, 93).required.toString()])
        })
      }
      var SC = si("app-git-user-info", rp, function (t) {
          return la(0, [(t()(), Uo(0, 0, null, null, 1, "app-git-user-info", [], null, null, null, EC, Xw)), Ii(1, 114688, null, 0, rp, [ly, ep, Yh], null, null)], function (t, e) {
            t(e, 1, 0)
          }, null)
        }, {}, {}, []),
        xC = function () {
          function t() {}
          return t.prototype.ngOnInit = function () {}, t
        }(),
        kC = po({
          encapsulation: 0,
          styles: [
            [".header[_ngcontent-%COMP%]{background-color:#2d2d2d;padding:.3rem 2rem}.nav[_ngcontent-%COMP%]{padding:.3rem .7rem;margin-right:0}.icon-color[_ngcontent-%COMP%]{color:orange;font-size:1.5rem}.h-5[_ngcontent-%COMP%]{color:#fff}@media (max-width :575px){.header[_ngcontent-%COMP%]{background-color:#2d2d2d;padding:.3rem .5rem}}"]
          ],
          data: {}
        });

      function PC(t) {
        return la(0, [(t()(), Uo(0, 0, null, null, 8, "header", [
          ["class", "navbar navbar-expand header"]
        ], null, null, null, null, null)), (t()(), Uo(1, 0, null, null, 4, "nav", [
          ["class", "sticky-top"]
        ], null, null, null, null, null)), (t()(), Uo(2, 0, null, null, 3, "a", [
          ["class", "navbar-brand h-5"],
          ["routerLink", "/gitSearch"]
        ], [
          [1, "target", 0],
          [8, "href", 4]
        ], [
          [null, "click"]
        ], function (t, e, n) {
          var r = !0;
          return "click" === e && (r = !1 !== vi(t, 3).onClick(n.button, n.ctrlKey, n.metaKey, n.shiftKey) && r), r
        }, null, null)), Ii(3, 671744, null, 0, Xy, [Zy, ly, Xl], {
          routerLink: [0, "routerLink"]
        }, null), (t()(), Uo(4, 0, null, null, 0, "i", [
          ["aria-hidden", "true"],
          ["class", "fa fa-gitlab icon-color"]
        ], null, null, null, null, null)), (t()(), ia(-1, null, [" GitProject "])), (t()(), Uo(6, 0, null, null, 2, "button", [
          ["class", "btn btn-sm btn-outline-primary ml-5"],
          ["routerLink", "/gitSearch"],
          ["type", "button"]
        ], null, [
          [null, "click"]
        ], function (t, e, n) {
          var r = !0;
          return "click" === e && (r = !1 !== vi(t, 7).onClick() && r), r
        }, null, null)), Ii(7, 16384, null, 0, Yy, [Zy, ly, [8, null], Fn, Vn], {
          routerLink: [0, "routerLink"]
        }, null), (t()(), ia(-1, null, ["Home"]))], function (t, e) {
          t(e, 3, 0, "/gitSearch"), t(e, 7, 0, "/gitSearch")
        }, function (t, e) {
          t(e, 2, 0, vi(e, 3).target, vi(e, 3).href)
        })
      }
      var TC = po({
        encapsulation: 0,
        styles: [
          [""]
        ],
        data: {}
      });

      function OC(t) {
        return la(0, [(t()(), Uo(0, 0, null, null, 1, "app-header", [], null, null, null, PC, kC)), Ii(1, 114688, null, 0, xC, [], null, null), (t()(), Uo(2, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), Ii(3, 212992, null, 0, ng, [eg, Qn, nn, [8, null], Wn], null, null)], function (t, e) {
          t(e, 1, 0), t(e, 3, 0)
        }, null)
      }
      var AC = si("app-root", ip, function (t) {
          return la(0, [(t()(), Uo(0, 0, null, null, 1, "app-root", [], null, null, null, OC, TC)), Ii(1, 49152, null, 0, ip, [], null, null)], null, null)
        }, {}, {}, []),
        IC = function () {},
        RC = function (t, e, n) {
          return new ms(op, [ip], function (t) {
            return function (t) {
              for (var e = {}, n = [], r = !1, o = 0; o < t.length; o++) {
                var i = t[o];
                i.token === Se && !0 === i.value && (r = !0), 1073741824 & i.flags && n.push(i.token), i.index = o, e[lo(i.token)] = i
              }
              return {
                factory: null,
                providersByKey: e,
                providers: t,
                modules: n,
                isRoot: r
              }
            }([Xo(512, nn, rn, [
              [8, [wd, kg, s_, SC, AC]],
              [3, nn], an
            ]), Xo(5120, br, Er, [
              [3, br]
            ]), Xo(4608, Bu, zu, [br, [2, Hu]]), Xo(5120, Le, He, []), Xo(5120, dr, wr, []), Xo(5120, mr, Cr, []), Xo(4608, ch, hh, [sc]), Xo(6144, Zr, null, [ch]), Xo(4608, rh, yd, [
              [2, fd],
              [2, hd]
            ]), Xo(5120, Ac, function (t, e, n, r, o, i, a, s) {
              return [new eh(t, e, n), new uh(r), new ah(o, i, a, s)]
            }, [sc, fn, Ue, sc, sc, rh, Ge, [2, oh]]), Xo(4608, Ic, Ic, [Ac, fn]), Xo(135680, Nc, Nc, [sc]), Xo(4608, Bc, Bc, [Ic, Nc]), Xo(5120, F_, Pw, []), Xo(5120, Pb, Tw, []), Xo(4608, nw, kw, [sc, F_, Pb]), Xo(5120, Mn, Ow, [Bc, nw, fn]), Xo(6144, Dc, null, [Nc]), Xo(4608, wn, wn, [fn]), Xo(4608, pv, pv, []), Xo(4608, wh, wh, []), Xo(4608, Ph, Th, []), Xo(5120, Oh, Xh, []), Xo(4608, Hh, Hh, [wh, Ph, Oh]), Xo(4608, Bh, zh, []), Xo(5120, Yh, Jh, [Hh, Bh]), Xo(4608, Pg, Pg, []), Xo(4608, td, td, []), Xo(4608, pd, pd, []), Xo(4608, ap, _w, [Mn, wc]), Xo(4608, Gf, Gf, [Rf, Ff, nn, Uf, jf, Yt, fn, sc, id, [2, tu]]), Xo(5120, Qf, Wf, [Gf]), Xo(5120, $f, Yf, [Gf]), Xo(5120, ly, _g, [Zy]), Xo(4608, ag, ag, []), Xo(6144, og, null, [ag]), Xo(135680, sg, sg, [Zy, Ln, We, Yt, og]), Xo(4608, ig, ig, []), Xo(5120, lg, dg, [Zy, cc, ug]), Xo(5120, Eg, Cg, [bg]), Xo(5120, qe, function (t) {
              return [t]
            }, [Eg]), Xo(4608, ep, ep, [Yh]), Xo(1073742336, ac, ac, []), Xo(1024, Ee, _h, []), Xo(1024, Tn, function () {
              return [pg()]
            }, []), Xo(512, bg, bg, [Yt]), Xo(1024, Fe, function (t, e) {
              return [(n = t, Pc("probe", Oc), Pc("coreTokens", i({}, Tc, (n || []).reduce(function (t, e) {
                return t[e.name] = e.token, t
              }, {}))), function () {
                return Oc
              }), wg(e)];
              var n
            }, [
              [2, Tn], bg
            ]), Xo(512, Ve, Ve, [
              [2, Fe]
            ]), Xo(131584, Dn, Dn, [fn, Ge, Yt, Ee, nn, Ve]), Xo(1073742336, Sr, Sr, [Dn]), Xo(1073742336, bh, bh, [
              [3, bh]
            ]), Xo(1073742336, $v, $v, []), Xo(1073742336, Yv, Yv, []), Xo(1073742336, tp, tp, []), Xo(1073742336, Dg, Dg, []), Xo(1073742336, wp, wp, []), Xo(1073742336, Ww, Ww, []), Xo(1073742336, rd, rd, []), Xo(1073742336, d_, d_, []), Xo(1073742336, Yw, Yw, []), Xo(1073742336, ad, ad, []), Xo(1073742336, hd, hd, [
              [2, cd],
              [2, oh]
            ]), Xo(1073742336, Sf, Sf, []), Xo(1073742336, gd, gd, []), Xo(1073742336, ud, ud, []), Xo(1073742336, IC, IC, []), Xo(1073742336, Iw, Iw, []), Xo(1073742336, pf, pf, []), Xo(1073742336, Zf, Zf, []), Xo(1073742336, Jf, Jf, []), Xo(1024, cg, yg, [
              [3, Zy]
            ]), Xo(512, Am, Im, []), Xo(512, eg, eg, []), Xo(256, ug, {
              useHash: !0
            }, []), Xo(1024, Xl, mg, [$l, [2, Jl], ug]), Xo(512, tu, tu, [Xl]), Xo(512, We, We, []), Xo(512, Ln, Un, [We, [2, Bn]]), Xo(1024, By, function () {
              return [
                [{
                  path: "",
                  redirectTo: "gitSearch",
                  pathMatch: "full"
                }, {
                  path: "gitSearch",
                  component: np
                }, {
                  path: "userInfo/id=/:login",
                  component: rp
                }]
              ]
            }, []), Xo(1024, Zy, vg, [Dn, Am, eg, tu, Yt, Ln, We, By, ug, [2, Uy],
              [2, Ly]
            ]), Xo(1073742336, fg, fg, [
              [2, cg],
              [2, Zy]
            ]), Xo(1073742336, op, op, []), Xo(256, Se, !0, []), Xo(256, Aw, "BrowserAnimations", [])])
          })
        }();
      (function () {
        if (xn) throw new Error("Cannot enable prod mode after platform setup.");
        Sn = !1
      })(), vh().bootstrapModuleFactory(RC).catch(function (t) {
        return console.log(t)
      })
    }
  },
  [
    [2, 0]
  ]
]);
