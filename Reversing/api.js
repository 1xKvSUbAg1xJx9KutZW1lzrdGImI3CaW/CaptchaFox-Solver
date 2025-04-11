!(function () {
  'use strict'
  var a0,
    a1,
    a2 =
      'undefined' != typeof globalThis
        ? globalThis
        : 'undefined' != typeof window
        ? window
        : 'undefined' != typeof global
        ? global
        : 'undefined' != typeof self
        ? self
        : {},
    a3 = {}
  function a4() {
    if (a1) {
      return a0
    }
    a1 = 1
    var qP = function (qQ) {
      return qQ && qQ.Math === Math && qQ
    }
    return (a0 =
      qP('object' == typeof globalThis && globalThis) ||
      qP('object' == typeof window && window) ||
      qP('object' == typeof self && self) ||
      qP('object' == typeof a2 && a2) ||
      qP('object' == typeof a0 && a0) ||
      (function () {
        return this
      })() ||
      globalThis)
  }
  var a5,
    a6,
    a7,
    a8,
    a9,
    ab,
    ag,
    aj,
    ak = {}
  function am() {
    return a6
      ? a5
      : ((a6 = 1),
        (a5 = function (qP) {
          try {
            return !!qP()
          } catch (qQ) {
            return true
          }
        }))
  }
  function ap() {
    if (a8) {
      return a7
    }
    a8 = 1
    var qP = am()
    return (a7 = !qP(function () {
      return (
        7 !==
        Object.defineProperty({}, 1, {
          get: function () {
            return 7
          },
        })[1]
      )
    }))
  }
  function aq() {
    if (ab) {
      return a9
    }
    ab = 1
    var qP = am()
    return (a9 = !qP(function () {
      var qQ = function () {}.bind()
      return 'function' != typeof qQ || qQ.hasOwnProperty('prototype')
    }))
  }
  function av() {
    if (aj) {
      return ag
    }
    aj = 1
    var qP = aq(),
      qQ = Function.prototype.call
    return (
      (ag = qP
        ? qQ.bind(qQ)
        : function () {
            return qQ.apply(qQ, arguments)
          }),
      ag
    )
  }
  var aw,
    ax,
    ay,
    az,
    aA,
    aB,
    aC,
    aD,
    aE,
    aF,
    aG,
    aH,
    aI,
    aJ,
    aK,
    aL,
    aM,
    aN,
    aO,
    aP,
    aQ,
    aR,
    aS,
    aT,
    aU,
    aV,
    aW,
    aX,
    aY,
    aZ,
    b0,
    b1,
    b2,
    b3,
    b4,
    b5,
    b6,
    b7,
    b8,
    b9,
    bb,
    bg = {}
  function bj() {
    if (aw) {
      return bg
    }
    aw = 1
    var qP = {}.propertyIsEnumerable,
      qQ = Object.getOwnPropertyDescriptor,
      qR = qQ && !qP.call({ 1: 2 }, 1)
    return (
      (bg.f = qR
        ? function (qS) {
            var qT = qQ(this, qS)
            return !!qT && qT.enumerable
          }
        : qP),
      bg
    )
  }
  function bk() {
    return ay
      ? ax
      : ((ay = 1),
        (ax = function (qP, qQ) {
          return {
            enumerable: !(1 & qP),
            configurable: !(2 & qP),
            writable: !(4 & qP),
            value: qQ,
          }
        }))
  }
  function bm() {
    if (aA) {
      return az
    }
    aA = 1
    var qP = aq(),
      qQ = Function.prototype,
      qR = qQ.call,
      qS = qP && qQ.bind.bind(qR, qR)
    return (
      (az = qP
        ? qS
        : function (qT) {
            return function () {
              return qR.apply(qT, arguments)
            }
          }),
      az
    )
  }
  function bp() {
    if (aC) {
      return aB
    }
    aC = 1
    var qP = bm(),
      qQ = qP({}.toString),
      qR = qP(''.slice)
    return (aB = function (qS) {
      return qR(qQ(qS), 8, -1)
    })
  }
  function bq() {
    if (aE) {
      return aD
    }
    aE = 1
    var qP = bm(),
      qQ = am(),
      qR = bp(),
      qS = Object,
      qT = qP(''.split)
    return (aD = qQ(function () {
      return !qS('z').propertyIsEnumerable(0)
    })
      ? function (qU) {
          return 'String' === qR(qU) ? qT(qU, '') : qS(qU)
        }
      : qS)
  }
  function bv() {
    return aG
      ? aF
      : ((aG = 1),
        (aF = function (qP) {
          return null == qP
        }))
  }
  function bw() {
    if (aI) {
      return aH
    }
    aI = 1
    var qP = bv(),
      qQ = TypeError
    return (aH = function (qR) {
      if (qP(qR)) {
        throw new qQ("Can't call method on " + qR)
      }
      return qR
    })
  }
  function bx() {
    if (aK) {
      return aJ
    }
    aK = 1
    var qP = bq(),
      qQ = bw()
    return (aJ = function (qR) {
      return qP(qQ(qR))
    })
  }
  function by() {
    if (aM) {
      return aL
    }
    aM = 1
    var qP = 'object' == typeof document && document.all
    return (aL =
      void 0 === qP && void 0 !== qP
        ? function (qQ) {
            return 'function' == typeof qQ || qQ === qP
          }
        : function (qQ) {
            return 'function' == typeof qQ
          })
  }
  function bz() {
    if (aO) {
      return aN
    }
    aO = 1
    var qP = by()
    return (aN = function (qQ) {
      return 'object' == typeof qQ ? null !== qQ : qP(qQ)
    })
  }
  function bA() {
    if (aQ) {
      return aP
    }
    aQ = 1
    var qP = a4(),
      qQ = by()
    return (
      (aP = function (qR, qS) {
        return arguments.length < 2
          ? ((qT = qP[qR]), qQ(qT) ? qT : void 0)
          : qP[qR] && qP[qR][qS]
        var qT
      }),
      aP
    )
  }
  function bB() {
    if (aS) {
      return aR
    }
    aS = 1
    var qP = bm()
    return (aR = qP({}.isPrototypeOf))
  }
  function bC() {
    return aU
      ? aT
      : ((aU = 1),
        (aT =
          ('undefined' != typeof navigator && String(navigator.userAgent)) ||
          ''))
  }
  function bD() {
    if (aW) {
      return aV
    }
    aW = 1
    var qP,
      qQ,
      qR = a4(),
      qS = bC(),
      qT = qR.process,
      qU = qR.Deno,
      qV = (qT && qT.versions) || (qU && qU.version),
      qW = qV && qV.v8
    return (
      qW &&
        (qQ = (qP = qW.split('.'))[0] > 0 && qP[0] < 4 ? 1 : +(qP[0] + qP[1])),
      !qQ &&
        qS &&
        (!(qP = qS.match(/Edge\/(\d+)/)) || qP[1] >= 74) &&
        (qP = qS.match(/Chrome\/(\d+)/)) &&
        (qQ = +qP[1]),
      (aV = qQ)
    )
  }
  function bE() {
    if (aY) {
      return aX
    }
    aY = 1
    var qP = bD(),
      qQ = am(),
      qR = a4().String
    return (aX =
      !!Object.getOwnPropertySymbols &&
      !qQ(function () {
        var qS = Symbol('symbol detection')
        return (
          !qR(qS) ||
          !(Object(qS) instanceof Symbol) ||
          (!Symbol.sham && qP && qP < 41)
        )
      }))
  }
  function bF() {
    if (b0) {
      return aZ
    }
    b0 = 1
    var qP = bE()
    return (aZ = qP && !Symbol.sham && 'symbol' == typeof Symbol.iterator)
  }
  function bG() {
    if (b2) {
      return b1
    }
    b2 = 1
    var qP = bA(),
      qQ = by(),
      qR = bB(),
      qS = bF(),
      qT = Object
    return (b1 = qS
      ? function (qU) {
          return 'symbol' == typeof qU
        }
      : function (qU) {
          var qV = qP('Symbol')
          return qQ(qV) && qR(qV.prototype, qT(qU))
        })
  }
  function bH() {
    if (b4) {
      return b3
    }
    b4 = 1
    var qP = String
    return (b3 = function (qQ) {
      try {
        return qP(qQ)
      } catch (qR) {
        return 'Object'
      }
    })
  }
  function bI() {
    if (b6) {
      return b5
    }
    b6 = 1
    var qP = by(),
      qQ = bH(),
      qR = TypeError
    return (b5 = function (qS) {
      if (qP(qS)) {
        return qS
      }
      throw new qR(qQ(qS) + ' is not a function')
    })
  }
  function bJ() {
    if (b8) {
      return b7
    }
    b8 = 1
    var qP = bI(),
      qQ = bv()
    return (b7 = function (qR, qS) {
      var qT = qR[qS]
      return qQ(qT) ? void 0 : qP(qT)
    })
  }
  function bK() {
    if (bb) {
      return b9
    }
    bb = 1
    var qP = av(),
      qQ = by(),
      qR = bz(),
      qS = TypeError
    return (b9 = function (qT, qU) {
      var qV, qW
      if ('string' === qU && qQ((qV = qT.toString)) && !qR((qW = qP(qV, qT)))) {
        return qW
      }
      if (qQ((qV = qT.valueOf)) && !qR((qW = qP(qV, qT)))) {
        return qW
      }
      if ('string' !== qU && qQ((qV = qT.toString)) && !qR((qW = qP(qV, qT)))) {
        return qW
      }
      throw new qS("Can't convert object to primitive value")
    })
  }
  var bL,
    bM,
    bN,
    bO,
    bP,
    bQ,
    bR,
    bS,
    bT,
    bU,
    bV,
    bW,
    bX,
    bY,
    bZ,
    c0,
    c1,
    c2,
    c3,
    c4,
    c5,
    c6,
    c7,
    c8,
    c9 = { exports: {} }
  function cb() {
    return bM ? bL : ((bM = 1), (bL = false))
  }
  function cg() {
    if (bO) {
      return bN
    }
    bO = 1
    var qP = a4(),
      qQ = Object.defineProperty
    return (bN = function (qR, qS) {
      try {
        qQ(qP, qR, {
          value: qS,
          configurable: true,
          writable: true,
        })
      } catch (qT) {
        qP[qR] = qS
      }
      return qS
    })
  }
  function cj() {
    if (bQ) {
      return bP
    }
    bQ = 1
    var qP = a4(),
      qQ = cg(),
      qS = qP['__core-js_shared__'] || qQ('__core-js_shared__', {})
    return (bP = qS)
  }
  function ck() {
    if (bR) {
      return c9.exports
    }
    bR = 1
    var qP = cb(),
      qQ = cj()
    return (
      (c9.exports = function (qR, qS) {
        return qQ[qR] || (qQ[qR] = void 0 !== qS ? qS : {})
      })('versions', []).push({
        version: '3.35.1',
        mode: qP ? 'pure' : 'global',
        copyright: '\xA9 2014-2024 Denis Pushkarev (zloirock.ru)',
        license: 'https://github.com/zloirock/core-js/blob/v3.35.1/LICENSE',
        source: 'https://github.com/zloirock/core-js',
      }),
      c9.exports
    )
  }
  function cm() {
    if (bT) {
      return bS
    }
    bT = 1
    var qP = bw(),
      qQ = Object
    return (bS = function (qR) {
      return qQ(qP(qR))
    })
  }
  function cp() {
    if (bV) {
      return bU
    }
    bV = 1
    var qP = bm(),
      qQ = cm(),
      qR = qP({}.hasOwnProperty)
    return (bU =
      Object.hasOwn ||
      function (qS, qT) {
        return qR(qQ(qS), qT)
      })
  }
  function cq() {
    if (bX) {
      return bW
    }
    bX = 1
    var qP = bm(),
      qQ = 0,
      qR = Math.random(),
      qS = qP((1).toString)
    return (bW = function (qT) {
      return 'Symbol(' + (void 0 === qT ? '' : qT) + ')_' + qS(++qQ + qR, 36)
    })
  }
  function cv() {
    if (bZ) {
      return bY
    }
    bZ = 1
    var qP = a4(),
      qQ = ck(),
      qR = cp(),
      qS = cq(),
      qT = bE(),
      qU = bF(),
      qV = qP.Symbol,
      qW = qQ('wks'),
      qX = qU ? qV.for || qV : (qV && qV.withoutSetter) || qS
    return (bY = function (qY) {
      return (
        qR(qW, qY) || (qW[qY] = qT && qR(qV, qY) ? qV[qY] : qX('Symbol.' + qY)),
        qW[qY]
      )
    })
  }
  function cw() {
    if (c1) {
      return c0
    }
    c1 = 1
    var qP = av(),
      qQ = bz(),
      qR = bG(),
      qS = bJ(),
      qT = bK(),
      qU = cv(),
      qV = TypeError,
      qW = qU('toPrimitive')
    return (c0 = function (qX, qY) {
      if (!qQ(qX) || qR(qX)) {
        return qX
      }
      var qZ,
        r0 = qS(qX, qW)
      if (r0) {
        if (
          (void 0 === qY && (qY = 'default'),
          (qZ = qP(r0, qX, qY)),
          !qQ(qZ) || qR(qZ))
        ) {
          return qZ
        }
        throw new qV("Can't convert object to primitive value")
      }
      return void 0 === qY && (qY = 'number'), qT(qX, qY)
    })
  }
  function cx() {
    if (c3) {
      return c2
    }
    c3 = 1
    var qP = cw(),
      qQ = bG()
    return (c2 = function (qR) {
      var qS = qP(qR, 'string')
      return qQ(qS) ? qS : qS + ''
    })
  }
  function cy() {
    if (c5) {
      return c4
    }
    c5 = 1
    var qP = a4(),
      qQ = bz(),
      qR = qP.document,
      qS = qQ(qR) && qQ(qR.createElement)
    return (c4 = function (qT) {
      return qS ? qR.createElement(qT) : {}
    })
  }
  function cz() {
    if (c7) {
      return c6
    }
    c7 = 1
    var qP = ap(),
      qQ = am(),
      qR = cy()
    return (c6 =
      !qP &&
      !qQ(function () {
        return (
          7 !==
          Object.defineProperty(qR('div'), 'a', {
            get: function () {
              return 7
            },
          }).a
        )
      }))
  }
  function cA() {
    if (c8) {
      return ak
    }
    c8 = 1
    var qP = ap(),
      qQ = av(),
      qR = bj(),
      qS = bk(),
      qT = bx(),
      qU = cx(),
      qV = cp(),
      qW = cz(),
      qX = Object.getOwnPropertyDescriptor
    return (
      (ak.f = qP
        ? qX
        : function (qY, qZ) {
            if (((qY = qT(qY)), (qZ = qU(qZ)), qW)) {
              try {
                return qX(qY, qZ)
              } catch (r0) {}
            }
            if (qV(qY, qZ)) {
              return qS(!qQ(qR.f, qY, qZ), qY[qZ])
            }
          }),
      ak
    )
  }
  var cB,
    cC,
    cD,
    cE,
    cF,
    cG,
    cH,
    cI = {}
  function cJ() {
    if (cC) {
      return cB
    }
    cC = 1
    var qP = ap(),
      qQ = am()
    return (cB =
      qP &&
      qQ(function () {
        return (
          42 !==
          Object.defineProperty(function () {}, 'prototype', {
            value: 42,
            writable: false,
          }).prototype
        )
      }))
  }
  function cK() {
    if (cE) {
      return cD
    }
    cE = 1
    var qP = bz(),
      qQ = String,
      qR = TypeError
    return (cD = function (qS) {
      if (qP(qS)) {
        return qS
      }
      throw new qR(qQ(qS) + ' is not an object')
    })
  }
  function cL() {
    if (cF) {
      return cI
    }
    cF = 1
    var qP = ap(),
      qQ = cz(),
      qR = cJ(),
      qS = cK(),
      qT = cx(),
      qU = TypeError,
      qV = Object.defineProperty,
      qW = Object.getOwnPropertyDescriptor
    return (
      (cI.f = qP
        ? qR
          ? function (r0, r1, r2) {
              if (
                (qS(r0),
                (r1 = qT(r1)),
                qS(r2),
                'function' == typeof r0 &&
                  'prototype' === r1 &&
                  'value' in r2 &&
                  'writable' in r2 &&
                  !r2.writable)
              ) {
                var r3 = qW(r0, r1)
                r3 &&
                  r3.writable &&
                  ((r0[r1] = r2.value),
                  (r2 = {
                    configurable:
                      'configurable' in r2 ? r2.configurable : r3.configurable,
                    enumerable:
                      'enumerable' in r2 ? r2.enumerable : r3.enumerable,
                    writable: false,
                  }))
              }
              return qV(r0, r1, r2)
            }
          : qV
        : function (r0, r1, r2) {
            if ((qS(r0), (r1 = qT(r1)), qS(r2), qQ)) {
              try {
                return qV(r0, r1, r2)
              } catch (r3) {}
            }
            if ('get' in r2 || 'set' in r2) {
              throw new qU('Accessors not supported')
            }
            return 'value' in r2 && (r0[r1] = r2.value), r0
          }),
      cI
    )
  }
  function cM() {
    if (cH) {
      return cG
    }
    cH = 1
    var qP = ap(),
      qQ = cL(),
      qR = bk()
    return (cG = qP
      ? function (qS, qT, qU) {
          return qQ.f(qS, qT, qR(1, qU))
        }
      : function (qS, qT, qU) {
          return (qS[qT] = qU), qS
        })
  }
  var cN,
    cO,
    cP,
    cQ,
    cR,
    cS,
    cT,
    cU,
    cV,
    cW,
    cX,
    cY,
    cZ,
    d0,
    d1,
    d2 = { exports: {} }
  function d3() {
    if (cO) {
      return cN
    }
    cO = 1
    var qP = ap(),
      qQ = cp(),
      qR = Function.prototype,
      qS = qP && Object.getOwnPropertyDescriptor,
      qT = qQ(qR, 'name'),
      qU = qT && 'something' === function () {}.name,
      qV = qT && (!qP || (qP && qS(qR, 'name').configurable))
    return (cN = {
      EXISTS: qT,
      PROPER: qU,
      CONFIGURABLE: qV,
    })
  }
  function d4() {
    if (cQ) {
      return cP
    }
    cQ = 1
    var qP = bm(),
      qQ = by(),
      qR = cj(),
      qS = qP(Function.toString)
    return (
      qQ(qR.inspectSource) ||
        (qR.inspectSource = function (qT) {
          return qS(qT)
        }),
      (cP = qR.inspectSource)
    )
  }
  function d5() {
    if (cS) {
      return cR
    }
    cS = 1
    var qP = a4(),
      qQ = by(),
      qR = qP.WeakMap
    return (cR = qQ(qR) && /native code/.test(String(qR)))
  }
  function d6() {
    if (cU) {
      return cT
    }
    cU = 1
    var qP = ck(),
      qQ = cq(),
      qR = qP('keys')
    return (cT = function (qS) {
      return qR[qS] || (qR[qS] = qQ(qS))
    })
  }
  function d7() {
    return cW ? cV : ((cW = 1), (cV = {}))
  }
  function d8() {
    if (cY) {
      return cX
    }
    cY = 1
    var qP,
      qQ,
      qR,
      qS = d5(),
      qT = a4(),
      qU = bz(),
      qV = cM(),
      qW = cp(),
      qX = cj(),
      qY = d6(),
      qZ = d7(),
      r1 = qT.TypeError,
      r2 = qT.WeakMap
    if (qS || qX.state) {
      var r3 = qX.state || (qX.state = new r2())
      r3.get = r3.get
      r3.has = r3.has
      r3.set = r3.set
      qP = function (r5, r6) {
        if (r3.has(r5)) {
          throw new r1('Object already initialized')
        }
        return (r6.facade = r5), r3.set(r5, r6), r6
      }
      qQ = function (r5) {
        return r3.get(r5) || {}
      }
      qR = function (r5) {
        return r3.has(r5)
      }
    } else {
      var r4 = qY('state')
      qZ[r4] = true
      qP = function (r5, r6) {
        if (qW(r5, r4)) {
          throw new r1('Object already initialized')
        }
        return (r6.facade = r5), qV(r5, r4, r6), r6
      }
      qQ = function (r5) {
        return qW(r5, r4) ? r5[r4] : {}
      }
      qR = function (r5) {
        return qW(r5, r4)
      }
    }
    return (
      (cX = {
        set: qP,
        get: qQ,
        has: qR,
        enforce: function (r5) {
          return qR(r5) ? qQ(r5) : qP(r5, {})
        },
        getterFor: function (r5) {
          return function (r6) {
            var r7
            if (!qU(r6) || (r7 = qQ(r6)).type !== r5) {
              throw new r1('Incompatible receiver, ' + r5 + ' required')
            }
            return r7
          }
        },
      }),
      cX
    )
  }
  function d9() {
    if (cZ) {
      return d2.exports
    }
    cZ = 1
    var qP = bm(),
      qQ = am(),
      qR = by(),
      qS = cp(),
      qT = ap(),
      qU = d3().CONFIGURABLE,
      qV = d4(),
      qW = d8(),
      qX = qW.enforce,
      qY = qW.get,
      qZ = String,
      r0 = Object.defineProperty,
      r1 = qP(''.slice),
      r2 = qP(''.replace),
      r3 = qP([].join),
      r4 =
        qT &&
        !qQ(function () {
          return 8 !== r0(function () {}, 'length', { value: 8 }).length
        }),
      r5 = String(String).split('String'),
      r6 = (d2.exports = function (r7, r8, r9) {
        'Symbol(' === r1(qZ(r8), 0, 7) &&
          (r8 = '[' + r2(qZ(r8), /^Symbol\(([^)]*)\).*$/, '$1') + ']')
        r9 && r9.getter && (r8 = 'get ' + r8)
        r9 && r9.setter && (r8 = 'set ' + r8)
        ;(!qS(r7, 'name') || (qU && r7.name !== r8)) &&
          (qT
            ? r0(r7, 'name', {
                value: r8,
                configurable: true,
              })
            : (r7.name = r8))
        r4 &&
          r9 &&
          qS(r9, 'arity') &&
          r7.length !== r9.arity &&
          r0(r7, 'length', { value: r9.arity })
        try {
          r9 && qS(r9, 'constructor') && r9.constructor
            ? qT && r0(r7, 'prototype', { writable: false })
            : r7.prototype && (r7.prototype = void 0)
        } catch (rg) {}
        var rb = qX(r7)
        return (
          qS(rb, 'source') ||
            (rb.source = r3(r5, 'string' == typeof r8 ? r8 : '')),
          r7
        )
      })
    return (
      (Function.prototype.toString = r6(function () {
        return (qR(this) && qY(this).source) || qV(this)
      }, 'toString')),
      d2.exports
    )
  }
  function db() {
    if (d1) {
      return d0
    }
    d1 = 1
    var qP = by(),
      qQ = cL(),
      qR = d9(),
      qS = cg()
    return (d0 = function (qT, qU, qV, qW) {
      qW || (qW = {})
      var qX = qW.enumerable,
        qY = void 0 !== qW.name ? qW.name : qU
      if ((qP(qV) && qR(qV, qY, qW), qW.global)) {
        qX ? (qT[qU] = qV) : qS(qU, qV)
      } else {
        try {
          qW.unsafe ? qT[qU] && (qX = true) : delete qT[qU]
        } catch (qZ) {}
        qX
          ? (qT[qU] = qV)
          : qQ.f(qT, qU, {
              value: qV,
              enumerable: false,
              configurable: !qW.nonConfigurable,
              writable: !qW.nonWritable,
            })
      }
      return qT
    })
  }
  var dg,
    dj,
    dk,
    dm,
    dp,
    dq,
    dv,
    dw,
    dx,
    dy,
    dz,
    dA,
    dB,
    dC,
    dD,
    dE,
    dF,
    dG = {}
  function dH() {
    if (dm) {
      return dk
    }
    dm = 1
    var qP = (function () {
      if (dj) {
        return dg
      }
      dj = 1
      var qQ = Math.ceil,
        qR = Math.floor
      return (
        (dg =
          Math.trunc ||
          function (qS) {
            var qT = +qS
            return (qT > 0 ? qR : qQ)(qT)
          }),
        dg
      )
    })()
    return (dk = function (qQ) {
      var qR = +qQ
      return qR != qR || 0 === qR ? 0 : qP(qR)
    })
  }
  function dI() {
    if (dq) {
      return dp
    }
    dq = 1
    var qP = dH(),
      qQ = Math.max,
      qR = Math.min
    return (dp = function (qS, qT) {
      var qU = qP(qS)
      return qU < 0 ? qQ(qU + qT, 0) : qR(qU, qT)
    })
  }
  function dJ() {
    if (dw) {
      return dv
    }
    dw = 1
    var qP = dH(),
      qQ = Math.min
    return (dv = function (qR) {
      var qS = qP(qR)
      return qS > 0 ? qQ(qS, 9007199254740991) : 0
    })
  }
  function dK() {
    if (dy) {
      return dx
    }
    dy = 1
    var qP = dJ()
    return (dx = function (qQ) {
      return qP(qQ.length)
    })
  }
  function dL() {
    if (dC) {
      return dB
    }
    dC = 1
    var qP = bm(),
      qQ = cp(),
      qR = bx(),
      qS = (function () {
        if (dA) {
          return dz
        }
        dA = 1
        var qV = bx(),
          qW = dI(),
          qX = dK(),
          qY = function (qZ) {
            return function (r0, r1, r2) {
              var r3,
                r4 = qV(r0),
                r5 = qX(r4),
                r6 = qW(r2, r5)
              if (qZ && r1 != r1) {
                for (; r5 > r6; ) {
                  if ((r3 = r4[r6++]) != r3) {
                    return true
                  }
                }
              } else {
                for (; r5 > r6; r6++) {
                  if ((qZ || r6 in r4) && r4[r6] === r1) {
                    return qZ || r6 || 0
                  }
                }
              }
              return !qZ && -1
            }
          }
        return (dz = {
          includes: qY(true),
          indexOf: qY(false),
        })
      })().indexOf,
      qT = d7(),
      qU = qP([].push)
    return (
      (dB = function (qV, qW) {
        var qX,
          qY = qR(qV),
          qZ = 0,
          r0 = []
        for (qX in qY) !qQ(qT, qX) && qQ(qY, qX) && qU(r0, qX)
        for (; qW.length > qZ; ) {
          qQ(qY, (qX = qW[qZ++])) && (~qS(r0, qX) || qU(r0, qX))
        }
        return r0
      }),
      dB
    )
  }
  function dM() {
    return dE
      ? dD
      : ((dE = 1),
        (dD = [
          'constructor',
          'hasOwnProperty',
          'isPrototypeOf',
          'propertyIsEnumerable',
          'toLocaleString',
          'toString',
          'valueOf',
        ]))
  }
  function dN() {
    if (dF) {
      return dG
    }
    dF = 1
    var qP = dL(),
      qQ = dM().concat('length', 'prototype')
    return (
      (dG.f =
        Object.getOwnPropertyNames ||
        function (qR) {
          return qP(qR, qQ)
        }),
      dG
    )
  }
  var dO,
    dP,
    dQ,
    dR,
    dS,
    dT,
    dU,
    dV,
    dW,
    dX,
    dY,
    dZ,
    e0,
    e1,
    e2 = {}
  function e3() {
    return dO || ((dO = 1), (e2.f = Object.getOwnPropertySymbols)), e2
  }
  function e4() {
    if (dQ) {
      return dP
    }
    dQ = 1
    var qP = bA(),
      qQ = bm(),
      qR = dN(),
      qS = e3(),
      qT = cK(),
      qU = qQ([].concat)
    return (dP =
      qP('Reflect', 'ownKeys') ||
      function (qV) {
        var qW = qR.f(qT(qV)),
          qX = qS.f
        return qX ? qU(qW, qX(qV)) : qW
      })
  }
  function e5() {
    if (dS) {
      return dR
    }
    dS = 1
    var qP = cp(),
      qQ = e4(),
      qR = cA(),
      qS = cL()
    return (
      (dR = function (qT, qU, qV) {
        for (
          var qW = qQ(qU), qX = qS.f, qY = qR.f, qZ = 0;
          qZ < qW.length;
          qZ++
        ) {
          var r0 = qW[qZ]
          qP(qT, r0) || (qV && qP(qV, r0)) || qX(qT, r0, qY(qU, r0))
        }
      }),
      dR
    )
  }
  function e6() {
    if (dU) {
      return dT
    }
    dU = 1
    var qP = am(),
      qQ = by(),
      qS = function (qX, qY) {
        var qZ = qU[qT(qX)]
        return qZ === qW || (qZ !== qV && (qQ(qY) ? qP(qY) : !!qY))
      },
      qT = (qS.normalize = function (qX) {
        return String(qX)
          .replace(/#|\.prototype\./, '.')
          .toLowerCase()
      }),
      qU = (qS.data = {}),
      qV = (qS.NATIVE = 'N'),
      qW = (qS.POLYFILL = 'P')
    return (dT = qS)
  }
  function e7() {
    if (dW) {
      return dV
    }
    dW = 1
    var qP = a4(),
      qQ = cA().f,
      qR = cM(),
      qS = db(),
      qT = cg(),
      qU = e5(),
      qV = e6()
    return (dV = function (qW, qX) {
      var qY,
        qZ,
        r0,
        r1,
        r2,
        r3 = qW.target,
        r4 = qW.global,
        r5 = qW.stat
      if (
        (qY = r4 ? qP : r5 ? qP[r3] || qT(r3, {}) : qP[r3] && qP[r3].prototype)
      ) {
        for (qZ in qX) {
          if (
            ((r1 = qX[qZ]),
            (r0 = qW.dontCallGetSet ? (r2 = qQ(qY, qZ)) && r2.value : qY[qZ]),
            !qV(r4 ? qZ : r3 + (r5 ? '.' : '#') + qZ, qW.forced) &&
              void 0 !== r0)
          ) {
            if (typeof r1 == typeof r0) {
              continue
            }
            qU(r1, r0)
          }
          ;(qW.sham || (r0 && r0.sham)) && qR(r1, 'sham', true)
          qS(qY, qZ, r1, qW)
        }
      }
    })
  }
  function e8() {
    if (dY) {
      return dX
    }
    dY = 1
    var qP = dL(),
      qQ = dM()
    return (dX =
      Object.keys ||
      function (qR) {
        return qP(qR, qQ)
      })
  }
  function e9() {
    if (e0) {
      return dZ
    }
    e0 = 1
    var qP = ap(),
      qQ = bm(),
      qR = av(),
      qS = am(),
      qT = e8(),
      qU = e3(),
      qV = bj(),
      qW = cm(),
      qX = bq(),
      qY = Object.assign,
      qZ = Object.defineProperty,
      r0 = qQ([].concat)
    return (
      (dZ =
        !qY ||
        qS(function () {
          if (
            qP &&
            1 !==
              qY(
                { b: 1 },
                qY(
                  qZ({}, 'a', {
                    enumerable: true,
                    get: function () {
                      qZ(this, 'b', {
                        value: 3,
                        enumerable: false,
                      })
                    },
                  }),
                  { b: 2 }
                )
              ).b
          ) {
            return true
          }
          var r1 = { i: r2 },
            r2 = { r5: r5 },
            r3 = Symbol('assign detection')
          return (
            (r1[r3] = 7),
            'abcdefghijklmnopqrst'.split('').forEach(function (r5) {}),
            7 !== qY({}, r1)[r3] ||
              qT(qY({}, r2)).join('') !== 'abcdefghijklmnopqrst'
          )
        })
          ? function (r1, r2) {
              for (
                var r3 = qW(r1),
                  r4 = arguments.length,
                  r5 = 1,
                  r6 = qU.f,
                  r7 = qV.f;
                r4 > r5;

              ) {
                for (
                  var r8,
                    r9 = qX(arguments[r5++]),
                    rb = r6 ? r0(qT(r9), r6(r9)) : qT(r9),
                    rg = rb.length,
                    rj = 0;
                  rg > rj;

                ) {
                  r8 = rb[rj++]
                  ;(qP && !qR(r7, r9, r8)) || (r3[r8] = r9[r8])
                }
              }
              return r3
            }
          : qY),
      dZ
    )
  }
  !(function () {
    if (e1) {
      return a3
    }
    e1 = 1
    var qP = e7(),
      qQ = e9()
    qP(
      {
        target: 'Object',
        stat: true,
        arity: 2,
        forced: Object.assign !== qQ,
      },
      { assign: qQ }
    )
  })()
  var eb,
    eg,
    ej,
    ek,
    em = {},
    ep,
    eq,
    ev,
    ew,
    ex,
    ey,
    ez,
    eA,
    eB,
    eC,
    eD,
    eE,
    eF,
    eG,
    eH,
    eI,
    eJ,
    eK,
    eL,
    eM,
    eN,
    eO,
    eP,
    eQ,
    eR,
    eS,
    eT,
    eU,
    eV,
    eW,
    eX,
    eY,
    eZ,
    f0,
    f1 = {}
  function f2() {
    if (ev) {
      return eq
    }
    ev = 1
    var qP = bA()
    return (eq = qP('document', 'documentElement'))
  }
  function f3() {
    if (ex) {
      return ew
    }
    ex = 1
    var qP,
      qQ = cK(),
      qR = (function () {
        if (ep) {
          return f1
        }
        ep = 1
        var r4 = ap(),
          r5 = cJ(),
          r6 = cL(),
          r7 = cK(),
          r8 = bx(),
          r9 = e8()
        return (
          (f1.f =
            r4 && !r5
              ? Object.defineProperties
              : function (rb, rg) {
                  r7(rb)
                  for (
                    var rj, rk = r8(rg), rm = r9(rg), rp = rm.length, rq = 0;
                    rp > rq;

                  ) {
                    r6.f(rb, (rj = rm[rq++]), rk[rj])
                  }
                  return rb
                }),
          f1
        )
      })(),
      qS = dM(),
      qT = d7(),
      qU = f2(),
      qV = cy(),
      qW = d6(),
      qZ = qW('IE_PROTO'),
      r0 = function () {},
      r1 = function (r4) {
        return '<script>' + r4 + '</' + 'script' + '>'
      },
      r2 = function (r4) {
        r4.write(r1(''))
        r4.close()
        var r5 = r4.parentWindow.Object
        return (r4 = null), r5
      },
      r3 = function () {
        try {
          qP = new ActiveXObject('htmlfile')
        } catch (r8) {}
        var r4, r5, r6
        r3 =
          'undefined' != typeof document
            ? document.domain && qP
              ? r2(qP)
              : ((r5 = qV('iframe')),
                (r6 = 'javascript:'),
                (r5.style.display = 'none'),
                qU.appendChild(r5),
                (r5.src = String(r6)),
                (r4 = r5.contentWindow.document).open(),
                r4.write(r1('document.F=Object')),
                r4.close(),
                r4.F)
            : r2(qP)
        for (var r7 = qS.length; r7--; ) {
          delete r3.prototype[qS[r7]]
        }
        return r3()
      }
    return (
      (qT[qZ] = true),
      (ew =
        Object.create ||
        function (r4, r5) {
          var r6
          return (
            null !== r4
              ? ((r0.prototype = qQ(r4)),
                (r6 = new r0()),
                (r0.prototype = null),
                (r6[qZ] = r4))
              : (r6 = r3()),
            void 0 === r5 ? r6 : qR.f(r6, r5)
          )
        })
    )
  }
  function f4() {
    if (ez) {
      return ey
    }
    ez = 1
    var qP = cv(),
      qQ = f3(),
      qR = cL().f,
      qS = qP('unscopables'),
      qT = Array.prototype
    return (
      void 0 === qT[qS] &&
        qR(qT, qS, {
          configurable: true,
          value: qQ(null),
        }),
      (ey = function (qU) {
        qT[qS][qU] = true
      })
    )
  }
  function f5() {
    return eB ? eA : ((eB = 1), (eA = {}))
  }
  function f6() {
    if (eF) {
      return eE
    }
    eF = 1
    var qP = cp(),
      qQ = by(),
      qR = cm(),
      qS = d6(),
      qT = (function () {
        if (eD) {
          return eC
        }
        eD = 1
        var qX = am()
        return (eC = !qX(function () {
          function qY() {}
          return (
            (qY.prototype.constructor = null),
            Object.getPrototypeOf(new qY()) !== qY.prototype
          )
        }))
      })(),
      qU = qS('IE_PROTO'),
      qV = Object,
      qW = qV.prototype
    return (eE = qT
      ? qV.getPrototypeOf
      : function (qX) {
          var qY = qR(qX)
          if (qP(qY, qU)) {
            return qY[qU]
          }
          var qZ = qY.constructor
          return qQ(qZ) && qY instanceof qZ
            ? qZ.prototype
            : qY instanceof qV
            ? qW
            : null
        })
  }
  function f7() {
    if (eH) {
      return eG
    }
    eH = 1
    var qP,
      qQ,
      qR,
      qS = am(),
      qT = by(),
      qU = bz(),
      qV = f3(),
      qW = f6(),
      qX = db(),
      qY = cv(),
      qZ = cb(),
      r0 = qY('iterator'),
      r1 = false
    return (
      [].keys &&
        ('next' in (qR = [].keys())
          ? (qQ = qW(qW(qR))) !== Object.prototype && (qP = qQ)
          : (r1 = true)),
      !qU(qP) ||
      qS(function () {
        var r2 = {
          prototype: r0,
          r7: qQ,
          config: Object.assign(Object.assign({}, r6), { theme: r7 }),
          networkError:
            'site-not-allowed' === (null == r4 ? void 0 : r4.message)
              ? r4.message
              : 'network-error',
        }
        return qP[r0].call(r2) !== r2
      })
        ? (qP = {})
        : qZ && (qP = qV(qP)),
      qT(qP[r0]) ||
        qX(qP, r0, function () {
          return this
        }),
      (eG = {
        IteratorPrototype: qP,
        BUGGY_SAFARI_ITERATORS: r1,
      })
    )
  }
  function f8() {
    if (eJ) {
      return eI
    }
    eJ = 1
    var qP = cL().f,
      qQ = cp(),
      qR = cv()('toStringTag')
    return (eI = function (qS, qT, qU) {
      qS && !qU && (qS = qS.prototype)
      qS &&
        !qQ(qS, qR) &&
        qP(qS, qR, {
          configurable: true,
          value: qT,
        })
    })
  }
  function f9() {
    if (eL) {
      return eK
    }
    eL = 1
    var qP = f7().IteratorPrototype,
      qQ = f3(),
      qR = bk(),
      qS = f8(),
      qT = f5(),
      qU = function () {
        return this
      }
    return (eK = function (qV, qW, qX, qY) {
      var qZ = qW + ' Iterator'
      return (
        (qV.prototype = qQ(qP, { next: qR(+!qY, qX) })),
        qS(qV, qZ, false, true),
        (qT[qZ] = qU),
        qV
      )
    })
  }
  function fb() {
    if (eP) {
      return eO
    }
    eP = 1
    var qP = bz()
    return (eO = function (qQ) {
      return qP(qQ) || null === qQ
    })
  }
  function fg() {
    if (eR) {
      return eQ
    }
    eR = 1
    var qP = fb(),
      qQ = String,
      qR = TypeError
    return (eQ = function (qS) {
      if (qP(qS)) {
        return qS
      }
      throw new qR("Can't set " + qQ(qS) + ' as a prototype')
    })
  }
  function fj() {
    if (eT) {
      return eS
    }
    eT = 1
    var qP = (function () {
        if (eN) {
          return eM
        }
        eN = 1
        var qS = bm(),
          qT = bI()
        return (eM = function (qU, qV, qW) {
          try {
            return qS(qT(Object.getOwnPropertyDescriptor(qU, qV)[qW]))
          } catch (qX) {}
        })
      })(),
      qQ = cK(),
      qR = fg()
    return (eS =
      Object.setPrototypeOf ||
      ('__proto__' in {}
        ? (function () {
            var qS,
              qT = false,
              qU = {
                qW: qQ.dirty[qW] | qT[qW],
                type: 'text/javascript',
                src: qQ,
                id: qQ,
                async: true,
                defer: false,
                crossOrigin: 'anonymous',
                onerror: qT,
                onload: function () {
                  qS()
                },
                href: qQ,
                rel: 'stylesheet',
                type: 'text/css',
                id: qQ,
                onload: () => qS(),
                onerror: () => qT(new Error('Style load error for ' + qQ)),
              }
            try {
              ;(qS = qP(Object.prototype, '__proto__', 'set'))(qU, [])
              qT = qU instanceof Array
            } catch (qV) {}
            return function (qW, qX) {
              return (
                qQ(qW), qR(qX), qT ? qS(qW, qX) : (qW['__proto__'] = qX), qW
              )
            }
          })()
        : void 0))
  }
  function fk() {
    if (eV) {
      return eU
    }
    eV = 1
    var qP = e7(),
      qQ = av(),
      qR = cb(),
      qS = d3(),
      qT = by(),
      qU = f9(),
      qV = f6(),
      qW = fj(),
      qX = f8(),
      qY = cM(),
      qZ = db(),
      r0 = cv(),
      r1 = f5(),
      r2 = f7(),
      r3 = qS.PROPER,
      r4 = qS.CONFIGURABLE,
      r5 = r2.IteratorPrototype,
      r6 = r2.BUGGY_SAFARI_ITERATORS,
      r7 = r0('iterator'),
      rg = function () {
        return this
      }
    return (eU = function (rj, rk, rm, rp, rq, rv, rw) {
      qU(rm, rk, rp)
      var rx,
        ry,
        rz,
        rA = function (rH) {
          if (rH === rq && rF) {
            return rF
          }
          if (!r6 && rH && rH in rD) {
            return rD[rH]
          }
          switch (rH) {
            case 'keys':
            case 'values':
            case 'entries':
              return function () {
                return new rm(this, rH)
              }
          }
          return function () {
            return new rm(this)
          }
        },
        rB = rk + ' Iterator',
        rC = false,
        rD = rj.prototype,
        rE = rD[r7] || rD['@@iterator'] || (rq && rD[rq]),
        rF = (!r6 && rE) || rA(rq),
        rG = ('Array' === rk && rD.entries) || rE
      if (
        (rG &&
          (rx = qV(rG.call(new rj()))) !== Object.prototype &&
          rx.next &&
          (qR ||
            qV(rx) === r5 ||
            (qW ? qW(rx, r5) : qT(rx[r7]) || qZ(rx, r7, rg)),
          qX(rx, rB, true, true),
          qR && (r1[rB] = rg)),
        r3 &&
          rq === 'values' &&
          rE &&
          rE.name !== 'values' &&
          (!qR && r4
            ? qY(rD, 'name', 'values')
            : ((rC = true),
              (rF = function () {
                return qQ(rE, this)
              }))),
        rq)
      ) {
        if (
          ((ry = {
            values: rA('values'),
            keys: rv ? rF : rA('keys'),
            entries: rA('entries'),
          }),
          rw)
        ) {
          for (rz in ry) (r6 || rC || !(rz in rD)) && qZ(rD, rz, ry[rz])
        } else {
          qP(
            {
              target: rk,
              proto: true,
              forced: r6 || rC,
            },
            ry
          )
        }
      }
      return (
        (qR && !rw) || rD[r7] === rF || qZ(rD, r7, rF, { name: rq }),
        (r1[rk] = rF),
        ry
      )
    })
  }
  function fm() {
    return eX
      ? eW
      : ((eX = 1),
        (eW = function (qP, qQ) {
          return {
            value: qP,
            done: qQ,
          }
        }))
  }
  function fp() {
    if (eZ) {
      return eY
    }
    eZ = 1
    var qP = bx(),
      qQ = f4(),
      qR = f5(),
      qS = d8(),
      qT = cL().f,
      qU = fk(),
      qV = fm(),
      qW = cb(),
      qX = ap(),
      qZ = qS.set,
      r0 = qS.getterFor('Array Iterator')
    eY = qU(
      Array,
      'Array',
      function (r2, r3) {
        qZ(this, {
          type: 'Array Iterator',
          target: qP(r2),
          index: 0,
          kind: r3,
        })
      },
      function () {
        var r2 = r0(this),
          r3 = r2.target,
          r4 = r2.index++
        if (!r3 || r4 >= r3.length) {
          return (r2.target = void 0), qV(void 0, true)
        }
        switch (r2.kind) {
          case 'keys':
            return qV(r4, false)
          case 'values':
            return qV(r3[r4], false)
        }
        return qV([r4, r3[r4]], false)
      },
      'values'
    )
    var r1 = (qR.Arguments = qR.Array)
    if (
      (qQ('keys'),
      qQ('values'),
      qQ('entries'),
      !qW && qX && 'values' !== r1.name)
    ) {
      try {
        qT(r1, 'name', { value: 'values' })
      } catch (r2) {}
    }
    return eY
  }
  !(function () {
    if (f0) {
      return em
    }
    f0 = 1
    var qP = a4(),
      qQ = eg
        ? eb
        : ((eg = 1),
          (eb = {
            CSSRuleList: 0,
            CSSStyleDeclaration: 0,
            CSSValueList: 0,
            ClientRectList: 0,
            DOMRectList: 0,
            DOMStringList: 0,
            DOMTokenList: 1,
            DataTransferItemList: 0,
            FileList: 0,
            HTMLAllCollection: 0,
            HTMLCollection: 0,
            HTMLFormElement: 0,
            HTMLSelectElement: 0,
            MediaList: 0,
            MimeTypeArray: 0,
            NamedNodeMap: 0,
            NodeList: 1,
            PaintRequestList: 0,
            Plugin: 0,
            PluginArray: 0,
            SVGLengthList: 0,
            SVGNumberList: 0,
            SVGPathSegList: 0,
            SVGPointList: 0,
            SVGStringList: 0,
            SVGTransformList: 0,
            SourceBufferList: 0,
            StyleSheetList: 0,
            TextTrackCueList: 0,
            TextTrackList: 0,
            TouchList: 0,
          })),
      qR = (function () {
        if (ek) {
          return ej
        }
        ek = 1
        var qZ = cy()('span').classList,
          r0 = qZ && qZ.constructor && qZ.constructor.prototype
        return (ej = r0 === Object.prototype ? void 0 : r0)
      })(),
      qS = fp(),
      qT = cM(),
      qU = f8(),
      qV = cv()('iterator'),
      qW = qS.values,
      qX = function (qZ, r0) {
        if (qZ) {
          if (qZ[qV] !== qW) {
            try {
              qT(qZ, qV, qW)
            } catch (r2) {
              qZ[qV] = qW
            }
          }
          if ((qU(qZ, r0, true), qQ[r0])) {
            for (var r1 in qS)
              if (qZ[r1] !== qS[r1]) {
                try {
                  qT(qZ, r1, qS[r1])
                } catch (r3) {
                  qZ[r1] = qS[r1]
                }
              }
          }
        }
      }
    for (var qY in qQ) qX(qP[qY] && qP[qY].prototype, qY)
    qX(qR, 'DOMTokenList')
  })()
  const fC = {
    button: {
      background: '#222',
      backgroundHover: '#333',
      text: '#fff',
      checkbox: '#eee',
    },
    panel: {
      background: '#222',
      border: '#4b4b4b',
      text: '#ddd',
    },
    slider: {
      background: '#444',
      knob: '#666',
    },
  }
  var fD,
    fE,
    fF,
    fG,
    fH,
    fI,
    fJ,
    fK = {}
  function fL() {
    if (fG) {
      return fF
    }
    fG = 1
    var qP = am()
    return (fF = function (qQ, qR) {
      var qS = [][qQ]
      return (
        !!qS &&
        qP(function () {
          qS.call(
            null,
            qR ||
              function () {
                return 1
              },
            1
          )
        })
      )
    })
  }
  function fM() {
    if (fI) {
      return fH
    }
    fI = 1
    var qP = a4(),
      qQ = bp()
    return (fH = 'process' === qQ(qP.process))
  }
  !(function () {
    if (fJ) {
      return fK
    }
    fJ = 1
    var qP = e7(),
      qQ = (function () {
        if (fE) {
          return fD
        }
        fE = 1
        var qT = bI(),
          qU = cm(),
          qV = bq(),
          qW = dK(),
          qX = TypeError,
          qY = function (qZ) {
            return function (r0, r1, r2, r3) {
              var r4 = qU(r0),
                r5 = qV(r4),
                r6 = qW(r4)
              qT(r1)
              var r7 = qZ ? r6 - 1 : 0,
                r8 = qZ ? -1 : 1
              if (r2 < 2) {
                for (;;) {
                  if (r7 in r5) {
                    r3 = r5[r7]
                    r7 += r8
                    break
                  }
                  if (((r7 += r8), qZ ? r7 < 0 : r6 <= r7)) {
                    throw new qX('Reduce of empty array with no initial value')
                  }
                }
              }
              for (; qZ ? r7 >= 0 : r6 > r7; r7 += r8) {
                r7 in r5 && (r3 = r1(r3, r5[r7], r7, r4))
              }
              return r3
            }
          }
        return (fD = {
          left: qY(false),
          right: qY(true),
        })
      })().left,
      qR = fL(),
      qS = bD()
    qP(
      {
        target: 'Array',
        proto: true,
        forced: (!fM() && qS > 79 && qS < 83) || !qR('reduce'),
      },
      {
        reduce: function (qT) {
          var qU = arguments.length
          return qQ(this, qT, qU, qU > 1 ? arguments[1] : void 0)
        },
      }
    )
  })()
  var fN,
    fO,
    fP,
    fQ,
    fR,
    fS,
    fT,
    fU,
    fV,
    fW,
    fX,
    fY,
    fZ,
    g0,
    g1,
    g2,
    g3,
    g4 = {}
  function g5() {
    if (fQ) {
      return fP
    }
    fQ = 1
    var qP = (function () {
        if (fO) {
          return fN
        }
        fO = 1
        var qV = {
          qT: qR[qT++],
          qW: arguments[qW],
        }
        return (
          (qV[cv()('toStringTag')] = 'z'), (fN = '[object z]' === String(qV))
        )
      })(),
      qQ = by(),
      qR = bp(),
      qS = cv()('toStringTag'),
      qT = Object,
      qU =
        'Arguments' ===
        qR(
          (function () {
            return arguments
          })()
        )
    return (fP = qP
      ? qR
      : function (qV) {
          var qW, qX, qY
          return void 0 === qV
            ? 'Undefined'
            : null === qV
            ? 'Null'
            : 'string' ==
              typeof (qX = (function (qZ, r0) {
                try {
                  return qZ[r0]
                } catch (r1) {}
              })((qW = qT(qV)), qS))
            ? qX
            : qU
            ? qR(qW)
            : 'Object' === (qY = qR(qW)) && qQ(qW.callee)
            ? 'Arguments'
            : qY
        })
  }
  function g6() {
    if (fS) {
      return fR
    }
    fS = 1
    var qP = g5(),
      qQ = String
    return (fR = function (qR) {
      if ('Symbol' === qP(qR)) {
        throw new TypeError('Cannot convert a Symbol value to a string')
      }
      return qQ(qR)
    })
  }
  function g7() {
    if (fU) {
      return fT
    }
    fU = 1
    var qP = cK()
    return (fT = function () {
      var qQ = qP(this),
        qR = ''
      return (
        qQ.hasIndices && (qR += 'd'),
        qQ.global && (qR += 'g'),
        qQ.ignoreCase && (qR += 'i'),
        qQ.multiline && (qR += 'm'),
        qQ.dotAll && (qR += 's'),
        qQ.unicode && (qR += 'u'),
        qQ.unicodeSets && (qR += 'v'),
        qQ.sticky && (qR += 'y'),
        qR
      )
    })
  }
  function g8() {
    if (g2) {
      return g1
    }
    g2 = 1
    var qP,
      qQ,
      qR = av(),
      qS = bm(),
      qT = g6(),
      qU = g7(),
      qV = (function () {
        if (fW) {
          return fV
        }
        fW = 1
        var rg = am(),
          rj = a4().RegExp,
          rk = rg(function () {
            var rq = rj('a', 'y')
            return (rq.lastIndex = 2), null !== rq.exec('abcd')
          }),
          rm =
            rk ||
            rg(function () {
              return !rj('a', 'y').sticky
            }),
          rp =
            rk ||
            rg(function () {
              var rq = rj('^r', 'gy')
              return (rq.lastIndex = 2), null !== rq.exec('str')
            })
        return (fV = {
          BROKEN_CARET: rp,
          MISSED_STICKY: rm,
          UNSUPPORTED_Y: rk,
        })
      })(),
      qW = ck(),
      qX = f3(),
      qY = d8().get,
      qZ = (function () {
        if (fY) {
          return fX
        }
        fY = 1
        var rg = am(),
          rj = a4().RegExp
        return (fX = rg(function () {
          var rk = rj('.', 's')
          return !(rk.dotAll && rk.test('\n') && 's' === rk.flags)
        }))
      })(),
      r0 = (function () {
        if (g0) {
          return fZ
        }
        g0 = 1
        var rg = am(),
          rj = a4().RegExp
        return (fZ = rg(function () {
          var rk = rj('(?<a>b)', 'g')
          return (
            'b' !== rk.exec('b').groups.a || 'bc' !== 'b'.replace(rk, '$<a>c')
          )
        }))
      })(),
      r1 = qW('native-string-replace', String.prototype.replace),
      r2 = RegExp.prototype.exec,
      r3 = r2,
      r4 = qS(''.charAt),
      r5 = qS(''.indexOf),
      r6 = qS(''.replace),
      r7 = qS(''.slice),
      r8 =
        ((qQ = /b*/g),
        qR(r2, (qP = /a/), 'a'),
        qR(r2, qQ, 'a'),
        0 !== qP.lastIndex || 0 !== qQ.lastIndex),
      r9 = qV.BROKEN_CARET,
      rb = void 0 !== /()??/.exec('')[1]
    return (
      (r8 || rb || r9 || qZ || r0) &&
        (r3 = function (rg) {
          var rj,
            rk,
            rm,
            rp,
            rq,
            rv,
            rw,
            rx = this,
            ry = qY(rx),
            rz = qT(rg),
            rA = ry.raw
          if (rA) {
            return (
              (rA.lastIndex = rx.lastIndex),
              (rj = qR(r3, rA, rz)),
              (rx.lastIndex = rA.lastIndex),
              rj
            )
          }
          var rB = ry.groups,
            rC = r9 && rx.sticky,
            rD = qR(qU, rx),
            rE = rx.source,
            rF = 0,
            rG = rz
          if (
            (rC &&
              ((rD = r6(rD, 'y', '')),
              -1 === r5(rD, 'g') && (rD += 'g'),
              (rG = r7(rz, rx.lastIndex)),
              rx.lastIndex > 0 &&
                (!rx.multiline ||
                  (rx.multiline && '\n' !== r4(rz, rx.lastIndex - 1))) &&
                ((rE = '(?: ' + rE + ')'), (rG = ' ' + rG), rF++),
              (rk = new RegExp('^(?:' + rE + ')', rD))),
            rb && (rk = new RegExp('^' + rE + '$(?!\\s)', rD)),
            r8 && (rm = rx.lastIndex),
            (rp = qR(r2, rC ? rk : rx, rG)),
            rC
              ? rp
                ? ((rp.input = r7(rp.input, rF)),
                  (rp[0] = r7(rp[0], rF)),
                  (rp.index = rx.lastIndex),
                  (rx.lastIndex += rp[0].length))
                : (rx.lastIndex = 0)
              : r8 &&
                rp &&
                (rx.lastIndex = rx.global ? rp.index + rp[0].length : rm),
            rb &&
              rp &&
              rp.length > 1 &&
              qR(r1, rp[0], rk, function () {
                for (rq = 1; rq < arguments.length - 2; rq++) {
                  void 0 === arguments[rq] && (rp[rq] = void 0)
                }
              }),
            rp && rB)
          ) {
            for (rp.groups = rv = qX(null), rq = 0; rq < rB.length; rq++) {
              rv[(rw = rB[rq])[0]] = rp[rw[1]]
            }
          }
          return rp
        }),
      (g1 = r3)
    )
  }
  function g9() {
    if (g3) {
      return g4
    }
    g3 = 1
    var qP = e7(),
      qQ = g8()
    return (
      qP(
        {
          target: 'RegExp',
          proto: true,
          forced: /./.exec !== qQ,
        },
        { exec: qQ }
      ),
      g4
    )
  }
  g9()
  var gb,
    gg,
    gj,
    gk,
    gm,
    gp,
    gq,
    gv,
    gw,
    gx,
    gy,
    gz,
    gA,
    gB = {}
  function gC() {
    if (gg) {
      return gb
    }
    gg = 1
    var qP = aq(),
      qQ = Function.prototype,
      qR = qQ.apply,
      qS = qQ.call
    return (
      (gb =
        ('object' == typeof Reflect && Reflect.apply) ||
        (qP
          ? qS.bind(qR)
          : function () {
              return qS.apply(qR, arguments)
            })),
      gb
    )
  }
  function gD() {
    if (gk) {
      return gj
    }
    gk = 1
    g9()
    var qP = av(),
      qQ = db(),
      qR = g8(),
      qS = am(),
      qT = cv(),
      qU = cM(),
      qV = qT('species'),
      qW = RegExp.prototype
    return (gj = function (qX, qY, qZ, r0) {
      var r1 = qT(qX),
        r2 = !qS(function () {
          var r6 = {}
          return (
            (r6[r1] = function () {
              return 7
            }),
            7 !== ''[qX](r6)
          )
        }),
        r3 =
          r2 &&
          !qS(function () {
            var r6 = false,
              r7 = /a/
            return (
              'split' === qX &&
                (((r7 = {}).constructor = {}),
                (r7.constructor[qV] = function () {
                  return r7
                }),
                (r7.flags = ''),
                (r7[r1] = /./[r1])),
              (r7.exec = function () {
                return (r6 = true), null
              }),
              r7[r1](''),
              !r6
            )
          })
      if (!r2 || !r3 || qZ) {
        var r4 = /./[r1],
          r5 = qY(r1, ''[qX], function (r6, r7, r8, r9, rb) {
            var rg = r7.exec
            return rg === qR || rg === qW.exec
              ? r2 && !rb
                ? {
                    done: true,
                    value: qP(r4, r7, r8, r9),
                  }
                : {
                    done: true,
                    value: qP(r6, r8, r7, r9),
                  }
              : { done: false }
          })
        qQ(String.prototype, qX, r5[0])
        qQ(qW, r1, r5[1])
      }
      r0 && qU(qW[r1], 'sham', true)
    })
  }
  function gE() {
    if (gp) {
      return gm
    }
    gp = 1
    var qP = bm(),
      qQ = dH(),
      qR = g6(),
      qS = bw(),
      qT = qP(''.charAt),
      qU = qP(''.charCodeAt),
      qV = qP(''.slice),
      qW = function (qX) {
        return function (qY, qZ) {
          var r0,
            r1,
            r2 = qR(qS(qY)),
            r3 = qQ(qZ),
            r4 = r2.length
          return r3 < 0 || r3 >= r4
            ? qX
              ? ''
              : void 0
            : (r0 = qU(r2, r3)) < 55296 ||
              r0 > 56319 ||
              r3 + 1 === r4 ||
              (r1 = qU(r2, r3 + 1)) < 56320 ||
              r1 > 57343
            ? qX
              ? qT(r2, r3)
              : r0
            : qX
            ? qV(r2, r3, r3 + 2)
            : r1 - 56320 + ((r0 - 55296) << 10) + 65536
        }
      }
    return (gm = {
      codeAt: qW(false),
      charAt: qW(true),
    })
  }
  function gF() {
    if (gv) {
      return gq
    }
    gv = 1
    var qP = gE().charAt
    return (gq = function (qQ, qR, qS) {
      return qR + (qS ? qP(qQ, qR).length : 1)
    })
  }
  function gG() {
    if (gx) {
      return gw
    }
    gx = 1
    var qP = bm(),
      qQ = cm(),
      qR = Math.floor,
      qS = qP(''.charAt),
      qT = qP(''.replace),
      qU = qP(''.slice)
    return (gw = function (qX, qY, qZ, r0, r1, r2) {
      var r3 = qZ + qX.length,
        r4 = r0.length,
        r5 = /\$([$&'`]|\d{1,2})/g
      return (
        void 0 !== r1 && ((r1 = qQ(r1)), (r5 = /\$([$&'`]|\d{1,2}|<[^>]*>)/g)),
        qT(r2, r5, function (r6, r7) {
          var r8
          switch (qS(r7, 0)) {
            case '$':
              return '$'
            case '&':
              return qX
            case '`':
              return qU(qY, 0, qZ)
            case "'":
              return qU(qY, r3)
            case '<':
              r8 = r1[qU(r7, 1, -1)]
              break
            default:
              var r9 = +r7
              if (0 === r9) {
                return r6
              }
              if (r9 > r4) {
                var rb = qR(r9 / 10)
                return 0 === rb
                  ? r6
                  : rb <= r4
                  ? void 0 === r0[rb - 1]
                    ? qS(r7, 1)
                    : r0[rb - 1] + qS(r7, 1)
                  : r6
              }
              r8 = r0[r9 - 1]
          }
          return void 0 === r8 ? '' : r8
        })
      )
    })
  }
  function gH() {
    if (gz) {
      return gy
    }
    gz = 1
    var qP = av(),
      qQ = cK(),
      qR = by(),
      qS = bp(),
      qT = g8(),
      qU = TypeError
    return (gy = function (qV, qW) {
      var qX = qV.exec
      if (qR(qX)) {
        var qY = qP(qX, qV, qW)
        return null !== qY && qQ(qY), qY
      }
      if ('RegExp' === qS(qV)) {
        return qP(qT, qV, qW)
      }
      throw new qU('RegExp#exec called on incompatible receiver')
    })
  }
  !(function () {
    if (gA) {
      return gB
    }
    gA = 1
    var qP = gC(),
      qQ = av(),
      qR = bm(),
      qS = gD(),
      qT = am(),
      qU = cK(),
      qV = by(),
      qW = bv(),
      qX = dH(),
      qY = dJ(),
      qZ = g6(),
      r0 = bw(),
      r1 = gF(),
      r2 = bJ(),
      r3 = gG(),
      r4 = gH(),
      r5 = cv()('replace'),
      r6 = Math.max,
      r7 = Math.min,
      r8 = qR([].concat),
      r9 = qR([].push),
      rb = qR(''.indexOf),
      rg = qR(''.slice),
      rj = '$0' === 'a'.replace(/./, '$0'),
      rk = !!/./[r5] && '' === /./[r5]('a', '$0')
    qS(
      'replace',
      function (rm, rp, rq) {
        var rv = rk ? '$' : '$0'
        return [
          function (rw, rx) {
            var ry = r0(this),
              rz = qW(rw) ? void 0 : r2(rw, r5)
            return rz ? qQ(rz, rw, ry, rx) : qQ(rp, qZ(ry), rw, rx)
          },
          function (rw, rx) {
            var ry = qU(this),
              rz = qZ(rw)
            if (
              'string' == typeof rx &&
              -1 === rb(rx, rv) &&
              -1 === rb(rx, '$<')
            ) {
              var rA = rq(rp, ry, rz, rx)
              if (rA.done) {
                return rA.value
              }
            }
            var rB = qV(rx)
            rB || (rx = qZ(rx))
            var rC,
              rD = ry.global
            rD && ((rC = ry.unicode), (ry.lastIndex = 0))
            for (
              var rE, rF = [];
              null !== (rE = r4(ry, rz)) && (r9(rF, rE), rD);

            ) {
              '' === qZ(rE[0]) && (ry.lastIndex = r1(rz, qY(ry.lastIndex), rC))
            }
            for (var rG, rH = '', rI = 0, rJ = 0; rJ < rF.length; rJ++) {
              for (
                var rK,
                  rL = qZ((rE = rF[rJ])[0]),
                  rM = r6(r7(qX(rE.index), rz.length), 0),
                  rN = [],
                  rO = 1;
                rO < rE.length;
                rO++
              ) {
                r9(rN, void 0 === (rG = rE[rO]) ? rG : String(rG))
              }
              var rP = rE.groups
              if (rB) {
                var rQ = r8([rL], rN, rM, rz)
                void 0 !== rP && r9(rQ, rP)
                rK = qZ(qP(rx, void 0, rQ))
              } else {
                rK = r3(rL, rz, rM, rN, rP, rx)
              }
              rM >= rI && ((rH += rg(rz, rI, rM) + rK), (rI = rM + rL.length))
            }
            return rH + rg(rz, rI)
          },
        ]
      },
      !!qT(function () {
        return (
          (/./.exec = function () {
            var rp = []
            return (rp.groups = { a: '7' }), rp
          }),
          '7' !== ''.replace(/./, '$<a>')
        )
      }) ||
        !rj ||
        rk
    )
  })()
  const gI = () => {
    const qP = [...document.getElementsByTagName('script')].filter((qV) =>
      /cdn(?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])captchafox(?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])com\/api(?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])js/.test(
        qV.src
      )
    )
    if (0 === qP.length) {
      return console.warn('[CaptchaFox] No matching api script found.'), null
    }
    const qQ = qP[0],
      qR = qQ.nonce,
      qS = qQ.src.split('?'),
      qT = qS.length > 0 ? qS[1] : null
    if (qT) {
      const qV = (qU = qT)
          ? qU.split('&').reduce((qX, qY) => {
              let [qZ, r0] = qY.split('=')
              return (
                (qX[qZ] = r0 ? decodeURIComponent(r0.replace(/\+/g, ' ')) : ''),
                qX
              )
            }, {})
          : {},
        qW =
          qV.render === 'onload' || 'explicit' === qV.render
            ? qV.render
            : 'onload'
      return {
        onload: qV.onload,
        lang: qV.lang,
        render: qW,
        nonce: qR,
      }
    }
    var qU
    return { render: 'onload' }
  }
  var gJ,
    gK,
    gL,
    gM,
    gN,
    gO,
    gP,
    gQ,
    gR,
    gS,
    gT,
    gU,
    gV,
    gW,
    gX,
    gY,
    gZ,
    h0,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    h7,
    h8,
    h9,
    hb,
    hg,
    hj,
    hk,
    hm,
    hp,
    hq,
    hv,
    hw,
    hx,
    hy,
    hz,
    hA,
    hB,
    hC,
    hD,
    hE,
    hF,
    hG,
    hH = {}
  function hI() {
    if (gK) {
      return gJ
    }
    gK = 1
    var qP = d9(),
      qQ = cL()
    return (gJ = function (qR, qS, qT) {
      return (
        qT.get && qP(qT.get, qS, { getter: true }),
        qT.set && qP(qT.set, qS, { setter: true }),
        qQ.f(qR, qS, qT)
      )
    })
  }
  function hJ() {
    if (gM) {
      return gL
    }
    gM = 1
    var qP = bA(),
      qQ = hI(),
      qR = cv(),
      qS = ap(),
      qT = qR('species')
    return (gL = function (qU) {
      var qV = qP(qU)
      qS &&
        qV &&
        !qV[qT] &&
        qQ(qV, qT, {
          configurable: true,
          get: function () {
            return this
          },
        })
    })
  }
  function hK() {
    if (gO) {
      return gN
    }
    gO = 1
    var qP = bB(),
      qQ = TypeError
    return (gN = function (qR, qS) {
      if (qP(qS, qR)) {
        return qR
      }
      throw new qQ('Incorrect invocation')
    })
  }
  function hL() {
    if (gQ) {
      return gP
    }
    gQ = 1
    var qP = bm(),
      qQ = am(),
      qR = by(),
      qS = g5(),
      qT = bA(),
      qU = d4(),
      qV = function () {},
      qW = qT('Reflect', 'construct'),
      qY = qP(/^\s*(?:class|function)\b/.exec),
      qZ = !/^\s*(?:class|function)\b/.test(qV),
      r0 = function (r2) {
        if (!qR(r2)) {
          return false
        }
        try {
          return qW(qV, [], r2), true
        } catch (r3) {
          return false
        }
      },
      r1 = function (r2) {
        if (!qR(r2)) {
          return false
        }
        switch (qS(r2)) {
          case 'AsyncFunction':
          case 'GeneratorFunction':
          case 'AsyncGeneratorFunction':
            return false
        }
        try {
          return qZ || !!qY(/^\s*(?:class|function)\b/, qU(r2))
        } catch (r3) {
          return true
        }
      }
    return (
      (r1.sham = true),
      (gP =
        !qW ||
        qQ(function () {
          var r2
          return (
            r0(r0.call) ||
            !r0(Object) ||
            !r0(function () {
              r2 = true
            }) ||
            r2
          )
        })
          ? r1
          : r0)
    )
  }
  function hM() {
    if (gS) {
      return gR
    }
    gS = 1
    var qP = hL(),
      qQ = bH(),
      qR = TypeError
    return (gR = function (qS) {
      if (qP(qS)) {
        return qS
      }
      throw new qR(qQ(qS) + ' is not a constructor')
    })
  }
  function hN() {
    if (gU) {
      return gT
    }
    gU = 1
    var qP = cK(),
      qQ = hM(),
      qR = bv(),
      qS = cv()('species')
    return (gT = function (qT, qU) {
      var qV,
        qW = qP(qT).constructor
      return void 0 === qW || qR((qV = qP(qW)[qS])) ? qU : qQ(qV)
    })
  }
  function hO() {
    if (gW) {
      return gV
    }
    gW = 1
    var qP = bp(),
      qQ = bm()
    return (gV = function (qR) {
      if ('Function' === qP(qR)) {
        return qQ(qR)
      }
    })
  }
  function hP() {
    if (gY) {
      return gX
    }
    gY = 1
    var qP = hO(),
      qQ = bI(),
      qR = aq(),
      qS = qP(qP.bind)
    return (
      (gX = function (qT, qU) {
        return (
          qQ(qT),
          void 0 === qU
            ? qT
            : qR
            ? qS(qT, qU)
            : function () {
                return qT.apply(qU, arguments)
              }
        )
      }),
      gX
    )
  }
  function hQ() {
    if (h0) {
      return gZ
    }
    h0 = 1
    var qP = bm()
    return (gZ = qP([].slice))
  }
  function hR() {
    if (h2) {
      return h1
    }
    h2 = 1
    var qP = TypeError
    return (h1 = function (qQ, qR) {
      if (qQ < qR) {
        throw new qP('Not enough arguments')
      }
      return qQ
    })
  }
  function hS() {
    if (h4) {
      return h3
    }
    h4 = 1
    var qP = bC()
    return (h3 = /(?:ipad|iphone|ipod).*applewebkit/i.test(qP))
  }
  function hT() {
    if (h6) {
      return h5
    }
    h6 = 1
    var qP,
      qQ,
      qR,
      qS,
      qT = a4(),
      qU = gC(),
      qV = hP(),
      qW = by(),
      qX = cp(),
      qY = am(),
      qZ = f2(),
      r0 = hQ(),
      r1 = cy(),
      r2 = hR(),
      r3 = hS(),
      r4 = fM(),
      r5 = qT.setImmediate,
      r6 = qT.clearImmediate,
      r7 = qT.process,
      r8 = qT.Dispatch,
      r9 = qT.Function,
      rb = qT.MessageChannel,
      rg = qT.String,
      rj = 0,
      rk = {}
    qY(function () {
      qP = qT.location
    })
    var rp = function (rx) {
        if (qX(rk, rx)) {
          var ry = rk[rx]
          delete rk[rx]
          ry()
        }
      },
      rq = function (rx) {
        return function () {
          rp(rx)
        }
      },
      rv = function (rx) {
        rp(rx.data)
      },
      rw = function (rx) {
        qT.postMessage(rg(rx), qP.protocol + '//' + qP.host)
      }
    return (
      (r5 && r6) ||
        ((r5 = function (rx) {
          r2(arguments.length, 1)
          var ry = qW(rx) ? rx : r9(rx),
            rz = r0(arguments, 1)
          return (
            (rk[++rj] = function () {
              qU(ry, void 0, rz)
            }),
            qQ(rj),
            rj
          )
        }),
        (r6 = function (rx) {
          delete rk[rx]
        }),
        r4
          ? (qQ = function (rx) {
              r7.nextTick(rq(rx))
            })
          : r8 && r8.now
          ? (qQ = function (rx) {
              r8.now(rq(rx))
            })
          : rb && !r3
          ? ((qS = (qR = new rb()).port2),
            (qR.port1.onmessage = rv),
            (qQ = qV(qS.postMessage, qS)))
          : qT.addEventListener &&
            qW(qT.postMessage) &&
            !qT.importScripts &&
            qP &&
            'file:' !== qP.protocol &&
            !qY(rw)
          ? ((qQ = rw), qT.addEventListener('message', rv, false))
          : (qQ =
              'onreadystatechange' in r1('script')
                ? function (rx) {
                    qZ.appendChild(r1('script')).onreadystatechange =
                      function () {
                        qZ.removeChild(this)
                        rp(rx)
                      }
                  }
                : function (rx) {
                    setTimeout(rq(rx), 0)
                  })),
      (h5 = {
        set: r5,
        clear: r6,
      })
    )
  }
  function hU() {
    if (h8) {
      return h7
    }
    h8 = 1
    var qP = a4(),
      qQ = ap(),
      qR = Object.getOwnPropertyDescriptor
    return (h7 = function (qS) {
      if (!qQ) {
        return qP[qS]
      }
      var qT = qR(qP, qS)
      return qT && qT.value
    })
  }
  function hV() {
    if (hb) {
      return h9
    }
    hb = 1
    var qP = function () {
      this.head = null
      this.tail = null
    }
    return (
      (qP.prototype = {
        add: function (qQ) {
          var qR = {
              item: qQ,
              next: null,
            },
            qS = this.tail
          qS ? (qS.next = qR) : (this.head = qR)
          this.tail = qR
        },
        get: function () {
          var qQ = this.head
          if (qQ) {
            return null === (this.head = qQ.next) && (this.tail = null), qQ.item
          }
        },
      }),
      (h9 = qP)
    )
  }
  function hW() {
    if (hq) {
      return hp
    }
    hq = 1
    var qP,
      qQ,
      qR,
      qS,
      qT,
      qU = a4(),
      qV = hU(),
      qW = hP(),
      qX = hT().set,
      qY = hV(),
      qZ = hS(),
      r0 = (function () {
        if (hj) {
          return hg
        }
        hj = 1
        var rb = bC()
        return (hg =
          /ipad|iphone|ipod/i.test(rb) && 'undefined' != typeof Pebble)
      })(),
      r1 = (function () {
        if (hm) {
          return hk
        }
        hm = 1
        var rb = bC()
        return (hk = /web0s(?!.*chrome)/i.test(rb))
      })(),
      r2 = fM(),
      r3 = qU.MutationObserver || qU.WebKitMutationObserver,
      r4 = qU.document,
      r5 = qU.process,
      r6 = qU.Promise,
      r7 = qV('queueMicrotask')
    if (!r7) {
      var r8 = new qY(),
        r9 = function () {
          var rb, rg
          for (r2 && (rb = r5.domain) && rb.exit(); (rg = r8.get()); ) {
            try {
              rg()
            } catch (rj) {
              throw (r8.head && qP(), rj)
            }
          }
          rb && rb.enter()
        }
      qZ || r2 || r1 || !r3 || !r4
        ? !r0 && r6 && r6.resolve
          ? (((qS = r6.resolve(void 0)).constructor = r6),
            (qT = qW(qS.then, qS)),
            (qP = function () {
              qT(r9)
            }))
          : r2
          ? (qP = function () {
              r5.nextTick(r9)
            })
          : ((qX = qW(qX, qU)),
            (qP = function () {
              qX(r9)
            }))
        : ((qQ = true),
          (qR = r4.createTextNode('')),
          new r3(r9).observe(qR, { characterData: true }),
          (qP = function () {
            qR.data = qQ = !qQ
          }))
      r7 = function (rb) {
        r8.head || qP()
        r8.add(rb)
      }
    }
    return (hp = r7)
  }
  function hX() {
    return (
      hw ||
        ((hw = 1),
        (hv = function (qP, qQ) {
          try {
            1 === arguments.length ? console.error(qP) : console.error(qP, qQ)
          } catch (qR) {}
        })),
      hv
    )
  }
  function hY() {
    return hy
      ? hx
      : ((hy = 1),
        (hx = function (qP) {
          try {
            return {
              error: false,
              value: qP(),
            }
          } catch (qQ) {
            return {
              error: true,
              value: qQ,
            }
          }
        }))
  }
  function hZ() {
    if (hA) {
      return hz
    }
    hA = 1
    var qP = a4()
    return (hz = qP.Promise)
  }
  function i0() {
    return hC
      ? hB
      : ((hC = 1),
        (hB =
          'object' == typeof Deno && Deno && 'object' == typeof Deno.version))
  }
  function i1() {
    if (hG) {
      return hF
    }
    hG = 1
    var qP = a4(),
      qQ = hZ(),
      qR = by(),
      qS = e6(),
      qT = d4(),
      qU = cv(),
      qV = (function () {
        if (hE) {
          return hD
        }
        hE = 1
        var r4 = i0(),
          r5 = fM()
        return (hD =
          !r4 &&
          !r5 &&
          'object' == typeof window &&
          'object' == typeof document)
      })(),
      qW = i0(),
      qX = cb(),
      qY = bD(),
      qZ = qQ && qQ.prototype,
      r0 = qU('species'),
      r1 = false,
      r2 = qR(qP.PromiseRejectionEvent),
      r3 = qS('Promise', function () {
        var r4 = qT(qQ),
          r5 = r4 !== String(qQ)
        if (!r5 && 66 === qY) {
          return true
        }
        if (qX && (!qZ.catch || !qZ.finally)) {
          return true
        }
        if (!qY || qY < 51 || !/native code/.test(r4)) {
          var r6 = new qQ(function (r8) {
              r8(1)
            }),
            r7 = function (r8) {
              r8(
                function () {},
                function () {}
              )
            }
          if (
            (((r6.constructor = {})[r0] = r7),
            !(r1 = r6.then(function () {}) instanceof r7))
          ) {
            return true
          }
        }
        return !r5 && (qV || qW) && !r2
      })
    return (hF = {
      CONSTRUCTOR: r3,
      REJECTION_EVENT: r2,
      SUBCLASSING: r1,
    })
  }
  var i2,
    i3,
    i4 = {}
  function i5() {
    if (i2) {
      return i4
    }
    i2 = 1
    var qP = bI(),
      qQ = TypeError,
      qR = function (qS) {
        var qT, qU
        this.promise = new qS(function (qV, qW) {
          if (void 0 !== qT || void 0 !== qU) {
            throw new qQ('Bad Promise constructor')
          }
          qT = qV
          qU = qW
        })
        this.resolve = qP(qT)
        this.reject = qP(qU)
      }
    return (
      (i4.f = function (qS) {
        return new qR(qS)
      }),
      i4
    )
  }
  var i6,
    i7,
    i8,
    i9,
    ib,
    ig,
    ij,
    ik,
    im,
    ip,
    iq,
    iv,
    iw,
    ix,
    iy,
    iz = {}
  function iA() {
    if (i7) {
      return i6
    }
    i7 = 1
    var qP = cv(),
      qQ = f5(),
      qR = qP('iterator'),
      qS = Array.prototype
    return (i6 = function (qT) {
      return void 0 !== qT && (qQ.Array === qT || qS[qR] === qT)
    })
  }
  function iB() {
    if (i9) {
      return i8
    }
    i9 = 1
    var qP = g5(),
      qQ = bJ(),
      qR = bv(),
      qS = f5(),
      qT = cv()('iterator')
    return (i8 = function (qU) {
      if (!qR(qU)) {
        return qQ(qU, qT) || qQ(qU, '@@iterator') || qS[qP(qU)]
      }
    })
  }
  function iC() {
    if (ig) {
      return ib
    }
    ig = 1
    var qP = av(),
      qQ = bI(),
      qR = cK(),
      qS = bH(),
      qT = iB(),
      qU = TypeError
    return (
      (ib = function (qV, qW) {
        var qX = arguments.length < 2 ? qT(qV) : qW
        if (qQ(qX)) {
          return qR(qP(qX, qV))
        }
        throw new qU(qS(qV) + ' is not iterable')
      }),
      ib
    )
  }
  function iD() {
    if (ik) {
      return ij
    }
    ik = 1
    var qP = av(),
      qQ = cK(),
      qR = bJ()
    return (ij = function (qS, qT, qU) {
      var qV, qW
      qQ(qS)
      try {
        if (!(qV = qR(qS, 'return'))) {
          if ('throw' === qT) {
            throw qU
          }
          return qU
        }
        qV = qP(qV, qS)
      } catch (qX) {
        qW = true
        qV = qX
      }
      if ('throw' === qT) {
        throw qU
      }
      if (qW) {
        throw qV
      }
      return qQ(qV), qU
    })
  }
  function iE() {
    if (ip) {
      return im
    }
    ip = 1
    var qP = hP(),
      qQ = av(),
      qR = cK(),
      qS = bH(),
      qT = iA(),
      qU = dK(),
      qV = bB(),
      qW = iC(),
      qX = iB(),
      qY = iD(),
      qZ = TypeError,
      r0 = function (r2, r3) {
        this.stopped = r2
        this.result = r3
      },
      r1 = r0.prototype
    return (im = function (r2, r3, r4) {
      var r5,
        r6,
        r7,
        r8,
        r9,
        rb,
        rg,
        rj = r4 && r4.that,
        rk = !(!r4 || !r4.AS_ENTRIES),
        rm = !(!r4 || !r4.IS_RECORD),
        rp = !(!r4 || !r4.IS_ITERATOR),
        rq = !(!r4 || !r4.INTERRUPTED),
        rv = qP(r3, rj),
        rw = function (ry) {
          return r5 && qY(r5, 'normal', ry), new r0(true, ry)
        },
        rx = function (ry) {
          return rk
            ? (qR(ry), rq ? rv(ry[0], ry[1], rw) : rv(ry[0], ry[1]))
            : rq
            ? rv(ry, rw)
            : rv(ry)
        }
      if (rm) {
        r5 = r2.iterator
      } else {
        if (rp) {
          r5 = r2
        } else {
          if (!(r6 = qX(r2))) {
            throw new qZ(qS(r2) + ' is not iterable')
          }
          if (qT(r6)) {
            for (r7 = 0, r8 = qU(r2); r8 > r7; r7++) {
              if ((r9 = rx(r2[r7])) && qV(r1, r9)) {
                return r9
              }
            }
            return new r0(false)
          }
          r5 = qW(r2, r6)
        }
      }
      for (rb = rm ? r2.next : r5.next; !(rg = qQ(rb, r5)).done; ) {
        try {
          r9 = rx(rg.value)
        } catch (ry) {
          qY(r5, 'throw', ry)
        }
        if ('object' == typeof r9 && r9 && qV(r1, r9)) {
          return r9
        }
      }
      return new r0(false)
    })
  }
  function iF() {
    if (iv) {
      return iq
    }
    iv = 1
    var qP = cv()('iterator'),
      qQ = false
    try {
      var qR = 0,
        qS = {
          next: function () {
            return { done: !!qR++ }
          },
          return: function () {
            qQ = true
          },
        }
      qS[qP] = function () {
        return this
      }
      Array.from(qS, function () {
        throw 2
      })
    } catch (qT) {}
    return (iq = function (qU, qV) {
      try {
        if (!qV && !qQ) {
          return false
        }
      } catch (qY) {
        return false
      }
      var qW = false
      try {
        var qX = {
          qP: function () {
            return {
              next: function () {
                return { done: (qW = true) }
              },
            }
          },
        }
        qU(qX)
      } catch (qZ) {}
      return qW
    })
  }
  function iG() {
    if (ix) {
      return iw
    }
    ix = 1
    var qP = hZ(),
      qQ = iF(),
      qR = i1().CONSTRUCTOR
    return (iw =
      qR ||
      !qQ(function (qS) {
        qP.all(qS).then(void 0, function () {})
      }))
  }
  var iH,
    iI = {},
    iJ,
    iK = {},
    iL,
    iM = {},
    iN,
    iO,
    iP,
    iQ,
    iR = {}
  function iS() {
    if (iO) {
      return iN
    }
    iO = 1
    var qP = cK(),
      qQ = bz(),
      qR = i5()
    return (
      (iN = function (qS, qT) {
        if ((qP(qS), qQ(qT) && qT.constructor === qS)) {
          return qT
        }
        var qU = qR.f(qS)
        return (0, qU.resolve)(qT), qU.promise
      }),
      iN
    )
  }
  iQ ||
    ((iQ = 1),
    (function () {
      if (i3) {
        return hH
      }
      i3 = 1
      var qP,
        qQ,
        qR,
        qS = e7(),
        qT = cb(),
        qU = fM(),
        qV = a4(),
        qW = av(),
        qX = db(),
        qY = fj(),
        qZ = f8(),
        r0 = hJ(),
        r1 = bI(),
        r2 = by(),
        r3 = bz(),
        r4 = hK(),
        r5 = hN(),
        r6 = hT().set,
        r7 = hW(),
        r8 = hX(),
        r9 = hY(),
        rb = hV(),
        rg = d8(),
        rj = hZ(),
        rk = i1(),
        rm = i5(),
        rq = rk.CONSTRUCTOR,
        rv = rk.REJECTION_EVENT,
        rw = rk.SUBCLASSING,
        rx = rg.getterFor('Promise'),
        ry = rg.set,
        rz = rj && rj.prototype,
        rA = rj,
        rB = rz,
        rC = qV.TypeError,
        rD = qV.document,
        rE = qV.process,
        rF = rm.f,
        rG = rF,
        rH = !!(rD && rD.createEvent && qV.dispatchEvent),
        rJ = function (rT) {
          var rU
          return !(!r3(rT) || !r2((rU = rT.then))) && rU
        },
        rK = function (rT, rU) {
          var rV,
            rW,
            rX,
            rY = rU.value,
            rZ = 1 === rU.state,
            s0 = rZ ? rT.ok : rT.fail,
            s1 = rT.resolve,
            s2 = rT.reject,
            s3 = rT.domain
          try {
            s0
              ? (rZ || (2 === rU.rejection && rP(rU), (rU.rejection = 1)),
                true === s0
                  ? (rV = rY)
                  : (s3 && s3.enter(),
                    (rV = s0(rY)),
                    s3 && (s3.exit(), (rX = true))),
                rV === rT.promise
                  ? s2(new rC('Promise-chain cycle'))
                  : (rW = rJ(rV))
                  ? qW(rW, rV, s1, s2)
                  : s1(rV))
              : s2(rY)
          } catch (s4) {
            s3 && !rX && s3.exit()
            s2(s4)
          }
        },
        rL = function (rT, rU) {
          rT.notified ||
            ((rT.notified = true),
            r7(function () {
              for (var rV, rW = rT.reactions; (rV = rW.get()); ) {
                rK(rV, rT)
              }
              rT.notified = false
              rU && !rT.rejection && rN(rT)
            }))
        },
        rM = function (rT, rU, rV) {
          var rW, rX
          rH
            ? (((rW = rD.createEvent('Event')).promise = rU),
              (rW.reason = rV),
              rW.initEvent(rT, false, true),
              qV.dispatchEvent(rW))
            : (rW = {
                promise: rU,
                reason: rV,
              })
          !rv && (rX = qV['on' + rT])
            ? rX(rW)
            : rT === 'unhandledrejection' &&
              r8('Unhandled promise rejection', rV)
        },
        rN = function (rT) {
          qW(r6, qV, function () {
            var rU,
              rV = rT.facade,
              rW = rT.value
            if (
              rO(rT) &&
              ((rU = r9(function () {
                qU
                  ? rE.emit('unhandledRejection', rW, rV)
                  : rM('unhandledrejection', rV, rW)
              })),
              (rT.rejection = qU || rO(rT) ? 2 : 1),
              rU.error)
            ) {
              throw rU.value
            }
          })
        },
        rO = function (rT) {
          return 1 !== rT.rejection && !rT.parent
        },
        rP = function (rT) {
          qW(r6, qV, function () {
            var rU = rT.facade
            qU
              ? rE.emit('rejectionHandled', rU)
              : rM('rejectionhandled', rU, rT.value)
          })
        },
        rQ = function (rT, rU, rV) {
          return function (rW) {
            rT(rU, rW, rV)
          }
        },
        rR = function (rT, rU, rV) {
          rT.done ||
            ((rT.done = true),
            rV && (rT = rV),
            (rT.value = rU),
            (rT.state = 2),
            rL(rT, true))
        },
        rS = function (rT, rU, rV) {
          if (!rT.done) {
            rT.done = true
            rV && (rT = rV)
            try {
              if (rT.facade === rU) {
                throw new rC("Promise can't be resolved itself")
              }
              var rW = rJ(rU)
              rW
                ? r7(function () {
                    try {
                      qW(rW, rU, rQ(rS, rX, rT), rQ(rR, rX, rT))
                    } catch (rY) {
                      rR(rX, rY, rT)
                    }
                  })
                : ((rT.value = rU), (rT.state = 1), rL(rT, false))
            } catch (rX) {
              rR({ done: false }, rX, rT)
            }
          }
        }
      if (
        rq &&
        ((rB = (rA = function (rT) {
          r4(this, rB)
          r1(rT)
          qW(qP, this)
          var rU = rx(this)
          try {
            rT(rQ(rS, rU), rQ(rR, rU))
          } catch (rV) {
            rR(rU, rV)
          }
        }).prototype),
        ((qP = function (rT) {
          ry(this, {
            type: 'Promise',
            done: false,
            notified: false,
            parent: false,
            reactions: new rb(),
            rejection: false,
            state: 0,
            value: void 0,
          })
        }).prototype = qX(rB, 'then', function (rT, rU) {
          var rV = rx(this),
            rW = rF(r5(this, rA))
          return (
            (rV.parent = true),
            (rW.ok = !r2(rT) || rT),
            (rW.fail = r2(rU) && rU),
            (rW.domain = qU ? rE.domain : void 0),
            0 === rV.state
              ? rV.reactions.add(rW)
              : r7(function () {
                  rK(rW, rV)
                }),
            rW.promise
          )
        })),
        (qQ = function () {
          var rT = new qP(),
            rU = rx(rT)
          this.promise = rT
          this.resolve = rQ(rS, rU)
          this.reject = rQ(rR, rU)
        }),
        (rm.f = rF =
          function (rT) {
            return rT === rA || void 0 === rT ? new qQ(rT) : rG(rT)
          }),
        !qT && r2(rj) && rz !== Object.prototype)
      ) {
        qR = rz.then
        rw ||
          qX(
            rz,
            'then',
            function (rT, rU) {
              var rV = this
              return new rA(function (rW, rX) {
                qW(qR, rV, rW, rX)
              }).then(rT, rU)
            },
            { unsafe: true }
          )
        try {
          delete rz.constructor
        } catch (rT) {}
        qY && qY(rz, rB)
      }
      qS(
        {
          global: true,
          constructor: true,
          wrap: true,
          forced: rq,
        },
        { Promise: rA }
      )
      qZ(rA, 'Promise', false, true)
      r0('Promise')
    })(),
    (function () {
      if (iy) {
        return iz
      }
      iy = 1
      var qP = e7(),
        qQ = av(),
        qR = bI(),
        qS = i5(),
        qT = hY(),
        qU = iE()
      qP(
        {
          target: 'Promise',
          stat: true,
          forced: iG(),
        },
        {
          all: function (qV) {
            var qW = this,
              qX = qS.f(qW),
              qY = qX.resolve,
              qZ = qX.reject,
              r0 = qT(function () {
                var r1 = qR(qW.resolve),
                  r2 = [],
                  r3 = 0,
                  r4 = 1
                qU(qV, function (r5) {
                  var r6 = r3++,
                    r7 = false
                  r4++
                  qQ(r1, qW, r5).then(function (r8) {
                    r7 || ((r7 = true), (r2[r6] = r8), --r4 || qY(r2))
                  }, qZ)
                })
                --r4 || qY(r2)
              })
            return r0.error && qZ(r0.value), qX.promise
          },
        }
      )
    })(),
    (function () {
      if (iH) {
        return iI
      }
      iH = 1
      var qP = e7(),
        qQ = cb(),
        qR = i1().CONSTRUCTOR,
        qS = hZ(),
        qT = bA(),
        qU = by(),
        qV = db(),
        qW = qS && qS.prototype
      if (
        (qP(
          {
            target: 'Promise',
            proto: true,
            forced: qR,
            real: true,
          },
          {
            catch: function (qY) {
              return this.then(void 0, qY)
            },
          }
        ),
        !qQ && qU(qS))
      ) {
        var qX = qT('Promise').prototype.catch
        qW.catch !== qX && qV(qW, 'catch', qX, { unsafe: true })
      }
    })(),
    (function () {
      if (iJ) {
        return iK
      }
      iJ = 1
      var qP = e7(),
        qQ = av(),
        qR = bI(),
        qS = i5(),
        qT = hY(),
        qU = iE()
      qP(
        {
          target: 'Promise',
          stat: true,
          forced: iG(),
        },
        {
          race: function (qV) {
            var qW = this,
              qX = qS.f(qW),
              qY = qX.reject,
              qZ = qT(function () {
                var r0 = qR(qW.resolve)
                qU(qV, function (r1) {
                  qQ(r0, qW, r1).then(qX.resolve, qY)
                })
              })
            return qZ.error && qY(qZ.value), qX.promise
          },
        }
      )
    })(),
    (function () {
      if (iL) {
        return iM
      }
      iL = 1
      var qP = e7(),
        qQ = i5()
      qP(
        {
          target: 'Promise',
          stat: true,
          forced: i1().CONSTRUCTOR,
        },
        {
          reject: function (qR) {
            var qS = qQ.f(this)
            return (0, qS.reject)(qR), qS.promise
          },
        }
      )
    })(),
    (function () {
      if (iP) {
        return iR
      }
      iP = 1
      var qP = e7(),
        qQ = bA(),
        qR = cb(),
        qS = hZ(),
        qT = i1().CONSTRUCTOR,
        qU = iS(),
        qV = qQ('Promise'),
        qW = qR && !qT
      qP(
        {
          target: 'Promise',
          stat: true,
          forced: qR || qT,
        },
        {
          resolve: function (qX) {
            return qU(qW && this === qV ? qS : this, qX)
          },
        }
      )
    })())
  var iT,
    iU,
    iV,
    iW,
    iX,
    iY,
    iZ,
    j0 = {}
  function j1() {
    if (iW) {
      return iV
    }
    iW = 1
    var qP = (function () {
        if (iU) {
          return iT
        }
        iU = 1
        var qR = bz(),
          qS = bp(),
          qT = cv()('match')
        return (iT = function (qU) {
          var qV
          return (
            qR(qU) && (void 0 !== (qV = qU[qT]) ? !!qV : 'RegExp' === qS(qU))
          )
        })
      })(),
      qQ = TypeError
    return (iV = function (qR) {
      if (qP(qR)) {
        throw new qQ("The method doesn't accept regular expressions")
      }
      return qR
    })
  }
  !(function () {
    if (iZ) {
      return j0
    }
    iZ = 1
    var qP,
      qQ = e7(),
      qR = hO(),
      qS = cA().f,
      qT = dJ(),
      qU = g6(),
      qV = j1(),
      qW = bw(),
      qX = (function () {
        if (iY) {
          return iX
        }
        iY = 1
        var r2 = cv()('match')
        return (iX = function (r3) {
          try {
            '/./'[r3](/./)
          } catch (r5) {
            try {
              return (/./[r2] = false), '/./'[r3](/./)
            } catch (r6) {}
          }
          return false
        })
      })(),
      qY = cb(),
      qZ = qR(''.slice),
      r0 = Math.min,
      r1 = qX('startsWith')
    qQ(
      {
        target: 'String',
        proto: true,
        forced:
          !!(
            qY ||
            r1 ||
            ((qP = qS(String.prototype, 'startsWith')), !qP || qP.writable)
          ) && !r1,
      },
      {
        startsWith: function (r2) {
          var r3 = qU(qW(this))
          qV(r2)
          var r4 = qT(
              r0(arguments.length > 1 ? arguments[1] : void 0, r3.length)
            ),
            r5 = qU(r2)
          return qZ(r3, r4, r4 + r5.length) === r5
        },
      }
    )
  })()
  var j2,
    j3 = {}
  !(function () {
    if (j2) {
      return j3
    }
    j2 = 1
    var qP = e7(),
      qQ = ap(),
      qR = a4(),
      qS = bm(),
      qT = cp(),
      qU = by(),
      qV = bB(),
      qW = g6(),
      qX = hI(),
      qY = e5(),
      qZ = qR.Symbol,
      r0 = qZ && qZ.prototype
    if (
      qQ &&
      qU(qZ) &&
      (!('description' in r0) || void 0 !== qZ().description)
    ) {
      var r1 = {},
        r2 = function () {
          var r9 =
              arguments.length < 1 || void 0 === arguments[0]
                ? void 0
                : qW(arguments[0]),
            rb = qV(r0, this) ? new qZ(r9) : void 0 === r9 ? qZ() : qZ(r9)
          return '' === r9 && (r1[rb] = true), rb
        }
      qY(r2, qZ)
      r0.constructor = r2
      var r3 =
          'Symbol(description detection)' ===
          String(qZ('description detection')),
        r4 = qS(r0.valueOf),
        r5 = qS(r0.toString),
        r7 = qS(''.replace),
        r8 = qS(''.slice)
      qX(r0, 'description', {
        configurable: true,
        get: function () {
          var r9 = r4(this)
          if (qT(r1, r9)) {
            return ''
          }
          var rb = r5(r9),
            rg = r3 ? r8(rb, 7, -1) : r7(rb, /^Symbol\((.*)\)[^)]+$/, '$1')
          return '' === rg ? void 0 : rg
        },
      })
      qP(
        {
          global: true,
          constructor: true,
          forced: true,
        },
        { Symbol: r2 }
      )
    }
  })()
  var j4, j5
  function j6() {
    if (j5) {
      return j4
    }
    j5 = 1
    var qP = a4()
    return (j4 = qP)
  }
  var j7,
    j8,
    j9,
    jb,
    jg = {}
  function jj() {
    if (j9) {
      return j8
    }
    j9 = 1
    var qP = j6(),
      qQ = cp(),
      qR = (function () {
        if (j7) {
          return jg
        }
        j7 = 1
        var qT = cv()
        return (jg.f = qT), jg
      })(),
      qS = cL().f
    return (j8 = function (qT) {
      var qU = qP.Symbol || (qP.Symbol = {})
      qQ(qU, qT) || qS(qU, qT, { value: qR.f(qT) })
    })
  }
  jb || ((jb = 1), jj()('asyncIterator'))
  var jk,
    jm,
    jp,
    jq = {}
  !(function () {
    if (jp) {
      return jq
    }
    jp = 1
    var qP = d3().PROPER,
      qQ = db(),
      qR = cK(),
      qS = g6(),
      qT = am(),
      qU = (function () {
        if (jm) {
          return jk
        }
        jm = 1
        var r0 = av(),
          r1 = cp(),
          r2 = bB(),
          r3 = g7(),
          r4 = RegExp.prototype
        return (jk = function (r5) {
          var r6 = r5.flags
          return void 0 !== r6 ||
            'flags' in r4 ||
            r1(r5, 'flags') ||
            !r2(r4, r5)
            ? r6
            : r0(r3, r5)
        })
      })(),
      qW = RegExp.prototype,
      qX = qW.toString,
      qY = qT(function () {
        return (
          '/a/b' !==
          qX.call({
            source: 'a',
            flags: 'b',
          })
        )
      }),
      qZ = qP && qX.name !== 'toString'
    ;(qY || qZ) &&
      qQ(
        qW,
        'toString',
        function () {
          var r0 = qR(this)
          return '/' + qS(r0.source) + '/' + qS(qU(r0))
        },
        { unsafe: true }
      )
  })()
  var jv,
    jw,
    jx,
    jy,
    jz,
    jA,
    jB,
    jC,
    jD,
    jE,
    jF,
    jG,
    jH,
    jI,
    jJ,
    jK,
    jL,
    jM,
    jN,
    jO = {},
    jP = {}
  function jQ() {
    if (jx) {
      return jw
    }
    jx = 1
    var qP = am(),
      qQ = cv(),
      qR = ap(),
      qS = cb(),
      qT = qQ('iterator')
    return (jw = !qP(function () {
      var qU = new URL('b?a=1&b=2&c=3', 'http://a'),
        qV = qU.searchParams,
        qW = new URLSearchParams('a=1&a=2&b=3'),
        qX = ''
      return (
        (qU.pathname = 'c%20d'),
        qV.forEach(function (qY, qZ) {
          qV.delete('b')
          qX += qZ + qY
        }),
        qW.delete('a', 2),
        qW.delete('b', void 0),
        (qS &&
          (!qU.toJSON ||
            !qW.has('a', 1) ||
            qW.has('a', 2) ||
            !qW.has('a', void 0) ||
            qW.has('b'))) ||
          (!qV.size && (qS || !qR)) ||
          !qV.sort ||
          'http://a/c%20d?a=1&c=3' !== qU.href ||
          '3' !== qV.get('c') ||
          'a=1' !== String(new URLSearchParams('?a=1')) ||
          !qV[qT] ||
          'a' !== new URL('https://a@b').username ||
          'b' !== new URLSearchParams(new URLSearchParams('a=b')).get('a') ||
          'xn--e1aybc' !== new URL('http://тест').host ||
          '#%D0%B1' !== new URL('http://a#б').hash ||
          'a1c3' !== qX ||
          'x' !== new URL('http://x', void 0).host
      )
    }))
  }
  function jR() {
    if (jz) {
      return jy
    }
    jz = 1
    var qP = cK(),
      qQ = iD()
    return (jy = function (qR, qS, qT, qU) {
      try {
        return qU ? qS(qP(qT)[0], qT[1]) : qS(qT)
      } catch (qV) {
        qQ(qR, 'throw', qV)
      }
    })
  }
  function jS() {
    if (jB) {
      return jA
    }
    jB = 1
    var qP = cx(),
      qQ = cL(),
      qR = bk()
    return (jA = function (qS, qT, qU) {
      var qV = qP(qT)
      qV in qS ? qQ.f(qS, qV, qR(0, qU)) : (qS[qV] = qU)
    })
  }
  function jT() {
    if (jD) {
      return jC
    }
    jD = 1
    var qP = hP(),
      qQ = av(),
      qR = cm(),
      qS = jR(),
      qT = iA(),
      qU = hL(),
      qV = dK(),
      qW = jS(),
      qX = iC(),
      qY = iB(),
      qZ = Array
    return (
      (jC = function (r0) {
        var r1 = qR(r0),
          r2 = qU(this),
          r3 = arguments.length,
          r4 = r3 > 1 ? arguments[1] : void 0,
          r5 = void 0 !== r4
        r5 && (r4 = qP(r4, r3 > 2 ? arguments[2] : void 0))
        var r6,
          r7,
          r8,
          r9,
          rb,
          rg,
          rj = qY(r1),
          rk = 0
        if (!rj || (this === qZ && qT(rj))) {
          for (r6 = qV(r1), r7 = r2 ? new this(r6) : qZ(r6); r6 > rk; rk++) {
            rg = r5 ? r4(r1[rk], rk) : r1[rk]
            qW(r7, rk, rg)
          }
        } else {
          for (
            rb = (r9 = qX(r1, rj)).next, r7 = r2 ? new this() : [];
            !(r8 = qQ(rb, r9)).done;
            rk++
          ) {
            rg = r5 ? qS(r9, r4, [r8.value, rk], true) : r8.value
            qW(r7, rk, rg)
          }
        }
        return (r7.length = rk), r7
      }),
      jC
    )
  }
  function jU() {
    if (jF) {
      return jE
    }
    jF = 1
    var qP = bm(),
      qU = RangeError,
      qV = qP(/[.\u3002\uFF0E\uFF61]/g.exec),
      qW = Math.floor,
      qX = String.fromCharCode,
      qY = qP(''.charCodeAt),
      qZ = qP([].join),
      r0 = qP([].push),
      r1 = qP(''.replace),
      r2 = qP(''.split),
      r3 = qP(''.toLowerCase),
      r4 = function (r7) {
        return r7 + 22 + 75 * (r7 < 26)
      },
      r5 = function (r7, r8, r9) {
        var rb = 0
        for (r7 = r9 ? qW(r7 / 700) : r7 >> 1, r7 += qW(r7 / r8); r7 > 455; ) {
          r7 = qW(r7 / 35)
          rb += 36
        }
        return qW(rb + (36 * r7) / (r7 + 38))
      },
      r6 = function (r7) {
        var r8 = []
        r7 = (function (rC) {
          for (var rD = [], rE = 0, rF = rC.length; rE < rF; ) {
            var rG = qY(rC, rE++)
            if (rG >= 55296 && rG <= 56319 && rE < rF) {
              var rH = qY(rC, rE++)
              56320 == (64512 & rH)
                ? r0(rD, ((1023 & rG) << 10) + (1023 & rH) + 65536)
                : (r0(rD, rG), rE--)
            } else {
              r0(rD, rG)
            }
          }
          return rD
        })(r7)
        var r9,
          rb,
          rg = r7.length,
          rj = 128,
          rk = 0,
          rm = 72
        for (r9 = 0; r9 < r7.length; r9++) {
          ;(rb = r7[r9]) < 128 && r0(r8, qX(rb))
        }
        var rp = r8.length,
          rq = rp
        for (rp && r0(r8, '-'); rq < rg; ) {
          var rv = 2147483647
          for (r9 = 0; r9 < r7.length; r9++) {
            ;(rb = r7[r9]) >= rj && rb < rv && (rv = rb)
          }
          var rw = rq + 1
          if (rv - rj > qW((2147483647 - rk) / rw)) {
            throw new qU('Overflow: input needs wider integers to process')
          }
          for (rk += (rv - rj) * rw, rj = rv, r9 = 0; r9 < r7.length; r9++) {
            if ((rb = r7[r9]) < rj && ++rk > 2147483647) {
              throw new qU('Overflow: input needs wider integers to process')
            }
            if (rb === rj) {
              for (var rx = rk, ry = 36; ; ) {
                var rz = ry <= rm ? 1 : ry >= rm + 26 ? 26 : ry - rm
                if (rx < rz) {
                  break
                }
                var rA = rx - rz,
                  rB = 36 - rz
                r0(r8, qX(r4(rz + (rA % rB))))
                rx = qW(rA / rB)
                ry += 36
              }
              r0(r8, qX(r4(rx)))
              rm = r5(rk, rw, rq === rp)
              rk = 0
              rq++
            }
          }
          rk++
          rj++
        }
        return qZ(r8, '')
      }
    return (
      (jE = function (r7) {
        var r8,
          r9,
          rb = [],
          rg = r2(r1(r3(r7), /[.\u3002\uFF0E\uFF61]/g, '.'), '.')
        for (r8 = 0; r8 < rg.length; r8++) {
          r9 = rg[r8]
          r0(rb, qV(/[^\0-\u007E]/, r9) ? 'xn--' + r6(r9) : r9)
        }
        return qZ(rb, '.')
      }),
      jE
    )
  }
  function jV() {
    if (jH) {
      return jG
    }
    jH = 1
    var qP = db()
    return (jG = function (qQ, qR, qS) {
      for (var qT in qR) qP(qQ, qT, qR[qT], qS)
      return qQ
    })
  }
  function jW() {
    if (jJ) {
      return jI
    }
    jJ = 1
    var qP = hQ(),
      qQ = Math.floor,
      qR = function (qS, qT) {
        var qU = qS.length
        if (qU < 8) {
          for (var qV, qW, qX = 1; qX < qU; ) {
            for (qW = qX, qV = qS[qX]; qW && qT(qS[qW - 1], qV) > 0; ) {
              qS[qW] = qS[--qW]
            }
            qW !== qX++ && (qS[qW] = qV)
          }
        } else {
          for (
            var qY = qQ(qU / 2),
              qZ = qR(qP(qS, 0, qY), qT),
              r0 = qR(qP(qS, qY), qT),
              r1 = qZ.length,
              r2 = r0.length,
              r3 = 0,
              r4 = 0;
            r3 < r1 || r4 < r2;

          ) {
            qS[r3 + r4] =
              r3 < r1 && r4 < r2
                ? qT(qZ[r3], r0[r4]) <= 0
                  ? qZ[r3++]
                  : r0[r4++]
                : r3 < r1
                ? qZ[r3++]
                : r0[r4++]
          }
        }
        return qS
      }
    return (jI = qR)
  }
  function jX() {
    if (jL) {
      return jK
    }
    jL = 1
    fp()
    var qP = e7(),
      qQ = a4(),
      qR = hU(),
      qS = av(),
      qT = bm(),
      qU = ap(),
      qV = jQ(),
      qW = db(),
      qX = hI(),
      qY = jV(),
      qZ = f8(),
      r0 = f9(),
      r1 = d8(),
      r2 = hK(),
      r3 = by(),
      r4 = cp(),
      r5 = hP(),
      r6 = g5(),
      r7 = cK(),
      r8 = bz(),
      r9 = g6(),
      rb = f3(),
      rg = bk(),
      rj = iC(),
      rk = iB(),
      rm = fm(),
      rp = hR(),
      rq = cv(),
      rv = jW(),
      rw = rq('iterator'),
      ry = 'URLSearchParamsIterator',
      rz = r1.set,
      rA = r1.getterFor('URLSearchParams'),
      rB = r1.getterFor(ry),
      rC = qR('fetch'),
      rD = qR('Request'),
      rE = qR('Headers'),
      rF = rD && rD.prototype,
      rG = rE && rE.prototype,
      rH = qQ.RegExp,
      rI = qQ.TypeError,
      rJ = qQ.decodeURIComponent,
      rK = qQ.encodeURIComponent,
      rL = qT(''.charAt),
      rM = qT([].join),
      rN = qT([].push),
      rO = qT(''.replace),
      rP = qT([].shift),
      rQ = qT([].splice),
      rR = qT(''.split),
      rS = qT(''.slice),
      rU = Array(4),
      rV = function (sb) {
        return (
          rU[sb - 1] ||
          (rU[sb - 1] = rH('((?:%[\\da-f]{2}){' + sb + '})', 'gi'))
        )
      },
      rW = function (sb) {
        try {
          return rJ(sb)
        } catch (sg) {
          return sb
        }
      },
      rX = function (sb) {
        var sg = rO(sb, /\+/g, ' '),
          sj = 4
        try {
          return rJ(sg)
        } catch (sk) {
          for (; sj; ) {
            sg = rO(sg, rV(sj--), rW)
          }
          return sg
        }
      },
      s0 = function (sb) {
        return rZ[sb]
      },
      s1 = function (sb) {
        return rO(rK(sb), /[!'()~]|%20/g, s0)
      },
      s2 = r0(
        function (sb, sg) {
          rz(this, {
            type: ry,
            target: rA(sb).entries,
            index: 0,
            kind: sg,
          })
        },
        'URLSearchParams',
        function () {
          var sb = rB(this),
            sg = sb.target,
            sj = sb.index++
          if (!sg || sj >= sg.length) {
            return (sb.target = void 0), rm(void 0, true)
          }
          var sk = sg[sj]
          switch (sb.kind) {
            case 'keys':
              return rm(sk.key, false)
            case 'values':
              return rm(sk.value, false)
          }
          return rm([sk.key, sk.value], false)
        },
        true
      ),
      s3 = function (sb) {
        this.entries = []
        this.url = null
        void 0 !== sb &&
          (r8(sb)
            ? this.parseObject(sb)
            : this.parseQuery(
                'string' == typeof sb
                  ? '?' === rL(sb, 0)
                    ? rS(sb, 1)
                    : sb
                  : r9(sb)
              ))
      }
    s3.prototype = {
      type: 'URLSearchParams',
      bindURL: function (sb) {
        this.url = sb
        this.update()
      },
      parseObject: function (sb) {
        var sg,
          sj,
          sk,
          sm,
          sp,
          sq,
          sv,
          sw = this.entries,
          sx = rk(sb)
        if (sx) {
          for (sj = (sg = rj(sb, sx)).next; !(sk = qS(sj, sg)).done; ) {
            if (
              ((sp = (sm = rj(r7(sk.value))).next),
              (sq = qS(sp, sm)).done ||
                (sv = qS(sp, sm)).done ||
                !qS(sp, sm).done)
            ) {
              throw new rI('Expected sequence with length 2')
            }
            rN(sw, {
              key: r9(sq.value),
              value: r9(sv.value),
            })
          }
        } else {
          for (var sy in sb)
            r4(sb, sy) &&
              rN(sw, {
                key: sy,
                value: r9(sb[sy]),
              })
        }
      },
      parseQuery: function (sb) {
        if (sb) {
          for (
            var sg, sj, sk = this.entries, sm = rR(sb, '&'), sp = 0;
            sp < sm.length;

          ) {
            ;(sg = sm[sp++]).length &&
              ((sj = rR(sg, '=')),
              rN(sk, {
                key: rX(rP(sj)),
                value: rX(rM(sj, '=')),
              }))
          }
        }
      },
      serialize: function () {
        for (var sb, sg = this.entries, sj = [], sk = 0; sk < sg.length; ) {
          sb = sg[sk++]
          rN(sj, s1(sb.key) + '=' + s1(sb.value))
        }
        return rM(sj, '&')
      },
      update: function () {
        this.entries.length = 0
        this.parseQuery(this.url.query)
      },
      updateURL: function () {
        this.url && this.url.update()
      },
    }
    var s4 = function () {
        r2(this, s5)
        var sb = rz(this, new s3(arguments.length > 0 ? arguments[0] : void 0))
        qU || (this.size = sb.entries.length)
      },
      s5 = s4.prototype
    if (
      (qY(
        s5,
        {
          append: function (sb, sg) {
            var sj = rA(this)
            rp(arguments.length, 2)
            rN(sj.entries, {
              key: r9(sb),
              value: r9(sg),
            })
            qU || this.length++
            sj.updateURL()
          },
          delete: function (sb) {
            for (
              var sg = rA(this),
                sj = rp(arguments.length, 1),
                sk = sg.entries,
                sm = r9(sb),
                sp = sj < 2 ? void 0 : arguments[1],
                sq = void 0 === sp ? sp : r9(sp),
                sv = 0;
              sv < sk.length;

            ) {
              var sw = sk[sv]
              if (sw.key !== sm || (void 0 !== sq && sw.value !== sq)) {
                sv++
              } else {
                if ((rQ(sk, sv, 1), void 0 !== sq)) {
                  break
                }
              }
            }
            qU || (this.size = sk.length)
            sg.updateURL()
          },
          get: function (sb) {
            var sg = rA(this).entries
            rp(arguments.length, 1)
            for (var sj = r9(sb), sk = 0; sk < sg.length; sk++) {
              if (sg[sk].key === sj) {
                return sg[sk].value
              }
            }
            return null
          },
          getAll: function (sb) {
            var sg = rA(this).entries
            rp(arguments.length, 1)
            for (var sj = r9(sb), sk = [], sm = 0; sm < sg.length; sm++) {
              sg[sm].key === sj && rN(sk, sg[sm].value)
            }
            return sk
          },
          has: function (sb) {
            for (
              var sg = rA(this).entries,
                sj = rp(arguments.length, 1),
                sk = r9(sb),
                sm = sj < 2 ? void 0 : arguments[1],
                sp = void 0 === sm ? sm : r9(sm),
                sq = 0;
              sq < sg.length;

            ) {
              var sv = sg[sq++]
              if (sv.key === sk && (void 0 === sp || sv.value === sp)) {
                return true
              }
            }
            return false
          },
          set: function (sb, sg) {
            var sj = rA(this)
            rp(arguments.length, 1)
            for (
              var sk,
                sm = sj.entries,
                sp = false,
                sq = r9(sb),
                sv = r9(sg),
                sw = 0;
              sw < sm.length;
              sw++
            ) {
              ;(sk = sm[sw]).key === sq &&
                (sp ? rQ(sm, sw--, 1) : ((sp = true), (sk.value = sv)))
            }
            sp ||
              rN(sm, {
                key: sq,
                value: sv,
              })
            qU || (this.size = sm.length)
            sj.updateURL()
          },
          sort: function () {
            var sb = rA(this)
            rv(sb.entries, function (sg, sj) {
              return sg.key > sj.key ? 1 : -1
            })
            sb.updateURL()
          },
          forEach: function (sb) {
            for (
              var sg,
                sj = rA(this).entries,
                sk = r5(sb, arguments.length > 1 ? arguments[1] : void 0),
                sm = 0;
              sm < sj.length;

            ) {
              sk((sg = sj[sm++]).value, sg.key, this)
            }
          },
          keys: function () {
            return new s2(this, 'keys')
          },
          values: function () {
            return new s2(this, 'values')
          },
          entries: function () {
            return new s2(this, 'entries')
          },
        },
        { enumerable: true }
      ),
      qW(s5, rw, s5.entries, { name: 'entries' }),
      qW(
        s5,
        'toString',
        function () {
          return rA(this).serialize()
        },
        { enumerable: true }
      ),
      qU &&
        qX(s5, 'size', {
          get: function () {
            return rA(this).entries.length
          },
          configurable: true,
          enumerable: true,
        }),
      qZ(s4, 'URLSearchParams'),
      qP(
        {
          global: true,
          constructor: true,
          forced: !qV,
        },
        { URLSearchParams: s4 }
      ),
      !qV && r3(rE))
    ) {
      var s6 = qT(rG.has),
        s7 = qT(rG.set),
        s8 = function (sb) {
          if (r8(sb)) {
            var sg,
              sj = sb.body
            if (r6(sj) === 'URLSearchParams') {
              return (
                (sg = sb.headers ? new rE(sb.headers) : new rE()),
                s6(sg, 'content-type') ||
                  s7(
                    sg,
                    'content-type',
                    'application/x-www-form-urlencoded;charset=UTF-8'
                  ),
                rb(sb, {
                  body: rg(0, r9(sj)),
                  headers: rg(0, sg),
                })
              )
            }
          }
          return sb
        }
      if (
        (r3(rC) &&
          qP(
            {
              global: true,
              enumerable: true,
              dontCallGetSet: true,
              forced: true,
            },
            {
              fetch: function (sb) {
                return rC(sb, arguments.length > 1 ? s8(arguments[1]) : {})
              },
            }
          ),
        r3(rD))
      ) {
        var s9 = function (sb) {
          return (
            r2(this, rF),
            new rD(sb, arguments.length > 1 ? s8(arguments[1]) : {})
          )
        }
        rF.constructor = s9
        qP(
          {
            global: true,
            constructor: true,
            dontCallGetSet: true,
            forced: true,
          },
          { Request: s9 }
        )
      }
    }
    return (jK = {
      URLSearchParams: s4,
      getState: rA,
    })
  }
  function jY() {
    if (jM) {
      return jO
    }
    jM = 1
    ;(function () {
      if (jv) {
        return jP
      }
      jv = 1
      var sN = gE().charAt,
        sO = g6(),
        sP = d8(),
        sQ = fk(),
        sR = fm(),
        sT = sP.set,
        sU = sP.getterFor('String Iterator')
      sQ(
        String,
        'String',
        function (sV) {
          sT(this, {
            type: 'String Iterator',
            string: sO(sV),
            index: 0,
          })
        },
        function () {
          var sV,
            sW = sU(this),
            sX = sW.string,
            sY = sW.index
          return sY >= sX.length
            ? sR(void 0, true)
            : ((sV = sN(sX, sY)), (sW.index += sV.length), sR(sV, false))
        }
      )
    })()
    var qP,
      qQ = e7(),
      qR = ap(),
      qS = jQ(),
      qT = a4(),
      qU = hP(),
      qV = bm(),
      qW = db(),
      qX = hI(),
      qY = hK(),
      qZ = cp(),
      r0 = e9(),
      r1 = jT(),
      r2 = hQ(),
      r3 = gE().codeAt,
      r4 = jU(),
      r5 = g6(),
      r6 = f8(),
      r7 = hR(),
      r8 = jX(),
      r9 = d8(),
      rb = r9.set,
      rg = r9.getterFor('URL'),
      rj = r8.URLSearchParams,
      rk = r8.getState,
      rm = qT.URL,
      rp = qT.TypeError,
      rq = qT.parseInt,
      rv = Math.floor,
      rw = Math.pow,
      rx = qV(''.charAt),
      ry = qV(/./.exec),
      rz = qV([].join),
      rA = qV((1).toString),
      rB = qV([].pop),
      rC = qV([].push),
      rD = qV(''.replace),
      rE = qV([].shift),
      rF = qV(''.split),
      rG = qV(''.slice),
      rH = qV(''.toLowerCase),
      rI = qV([].unshift),
      rY = function (sN) {
        var sO, sP, sQ, sR
        if ('number' == typeof sN) {
          for (sO = [], sP = 0; sP < 4; sP++) {
            rI(sO, sN % 256)
            sN = rv(sN / 256)
          }
          return rz(sO, '.')
        }
        if ('object' == typeof sN) {
          for (
            sO = '',
              sQ = (function (sS) {
                for (
                  var sT = null, sU = 1, sV = null, sW = 0, sX = 0;
                  sX < 8;
                  sX++
                ) {
                  0 !== sS[sX]
                    ? (sW > sU && ((sT = sV), (sU = sW)), (sV = null), (sW = 0))
                    : (null === sV && (sV = sX), ++sW)
                }
                return sW > sU && ((sT = sV), (sU = sW)), sT
              })(sN),
              sP = 0;
            sP < 8;
            sP++
          ) {
            ;(sR && 0 === sN[sP]) ||
              (sR && (sR = false),
              sQ === sP
                ? ((sO += sP ? ':' : '::'), (sR = true))
                : ((sO += rA(sN[sP], 16)), sP < 7 && (sO += ':')))
          }
          return '[' + sO + ']'
        }
        return sN
      },
      rZ = {},
      s0 = r0({}, rZ, {
        ' ': 1,
        '"': 1,
        '<': 1,
        '>': 1,
        '`': 1,
      }),
      s1 = r0({}, s0, {
        '#': 1,
        '?': 1,
        '{': 1,
        '}': 1,
      }),
      s2 = r0({}, s1, {
        '/': 1,
        ':': 1,
        ';': 1,
        '=': 1,
        '@': 1,
        '[': 1,
        '\\': 1,
        ']': 1,
        '^': 1,
        '|': 1,
      }),
      s3 = function (sN, sO) {
        var sP = r3(sN, 0)
        return sP > 32 && sP < 127 && !qZ(sO, sN) ? sN : encodeURIComponent(sN)
      },
      s5 = function (sN, sO) {
        var sP
        return (
          2 === sN.length &&
          ry(/[a-z]/i, rx(sN, 0)) &&
          (':' === (sP = rx(sN, 1)) || (!sO && '|' === sP))
        )
      },
      s6 = function (sN) {
        var sO
        return (
          sN.length > 1 &&
          s5(rG(sN, 0, 2)) &&
          (2 === sN.length ||
            '/' === (sO = rx(sN, 2)) ||
            '\\' === sO ||
            '?' === sO ||
            '#' === sO)
        )
      },
      s7 = function (sN) {
        return '.' === sN || '%2e' === rH(sN)
      },
      s8 = {},
      s9 = { prototype: rF },
      sb = {},
      sg = {},
      sj = {},
      sk = {},
      sm = {},
      sp = {},
      sq = {},
      sv = {},
      sw = {},
      sx = {},
      sy = {},
      sz = {},
      sA = {},
      sB = {},
      sC = {},
      sD = {},
      sE = {},
      sF = {},
      sG = {},
      sH = function (sN, sO, sP) {
        var sQ,
          sR,
          sS,
          sT = r5(sN)
        if (sO) {
          if ((sR = this.parse(sT))) {
            throw new rp(sR)
          }
          this.searchParams = null
        } else {
          if (
            (void 0 !== sP && (sQ = new sH(sP, true)),
            (sR = this.parse(sT, null, sQ)))
          ) {
            throw new rp(sR)
          }
          ;(sS = rk(new rj())).bindURL(this)
          this.searchParams = sS
        }
      }
    sH.prototype = {
      type: 'URL',
      parse: function (sN, sO, sP) {
        var sQ,
          sR,
          sS,
          sT,
          sU,
          sV = this,
          sW = sO || s8,
          sX = 0,
          sY = '',
          sZ = false,
          t0 = false,
          t1 = false
        for (
          sN = r5(sN),
            sO ||
              ((sV.scheme = ''),
              (sV.username = ''),
              (sV.password = ''),
              (sV.host = null),
              (sV.port = null),
              (sV.path = []),
              (sV.query = null),
              (sV.fragment = null),
              (sV.cannotBeABaseURL = false),
              (sN = rD(sN, /^[\u0000-\u0020]+/, '')),
              (sN = rD(sN, /(^|[^\u0000-\u0020])[\u0000-\u0020]+$/, '$1'))),
            sN = rD(sN, /[\t\n\r]/g, ''),
            sQ = r1(sN);
          sX <= sQ.length;

        ) {
          switch (((sR = sQ[sX]), sW)) {
            case s8:
              if (!sR || !ry(/[a-z]/i, sR)) {
                if (sO) {
                  return 'Invalid scheme'
                }
                sW = sb
                continue
              }
              ;(sY += rH(sR)), (sW = s9)
              break
            case s9:
              if (
                sR &&
                (ry(/[\d+-.a-z]/i, sR) ||
                  '+' === sR ||
                  '-' === sR ||
                  '.' === sR)
              ) {
                sY += rH(sR)
              } else {
                if (':' !== sR) {
                  if (sO) {
                    return 'Invalid scheme'
                  }
                  sY = ''
                  sW = sb
                  sX = 0
                  continue
                }
                if (
                  sO &&
                  (sV.isSpecial() !== qZ(s4, sY) ||
                    ('file' === sY &&
                      (sV.includesCredentials() || null !== sV.port)) ||
                    ('file' === sV.scheme && !sV.host))
                ) {
                  return
                }
                if (((sV.scheme = sY), sO)) {
                  return void (
                    sV.isSpecial() &&
                    s4[sV.scheme] === sV.port &&
                    (sV.port = null)
                  )
                }
                sY = ''
                'file' === sV.scheme
                  ? (sW = sz)
                  : sV.isSpecial() && sP && sP.scheme === sV.scheme
                  ? (sW = sg)
                  : sV.isSpecial()
                  ? (sW = sp)
                  : '/' === sQ[sX + 1]
                  ? ((sW = sj), sX++)
                  : ((sV.cannotBeABaseURL = true), rC(sV.path, ''), (sW = sE))
              }
              break
            case sb:
              if (!sP || (sP.cannotBeABaseURL && '#' !== sR)) {
                return 'Invalid scheme'
              }
              if (sP.cannotBeABaseURL && '#' === sR) {
                sV.scheme = sP.scheme
                sV.path = r2(sP.path)
                sV.query = sP.query
                sV.fragment = ''
                sV.cannotBeABaseURL = true
                sW = sG
                break
              }
              sW = 'file' === sP.scheme ? sz : sk
              continue
            case sg:
              if ('/' !== sR || '/' !== sQ[sX + 1]) {
                sW = sk
                continue
              }
              ;(sW = sq), sX++
              break
            case sj:
              if ('/' === sR) {
                sW = sv
                break
              }
              sW = sD
              continue
            case sk:
              if (((sV.scheme = sP.scheme), sR === qP)) {
                sV.username = sP.username
                sV.password = sP.password
                sV.host = sP.host
                sV.port = sP.port
                sV.path = r2(sP.path)
                sV.query = sP.query
              } else {
                if ('/' === sR || ('\\' === sR && sV.isSpecial())) {
                  sW = sm
                } else {
                  if ('?' === sR) {
                    sV.username = sP.username
                    sV.password = sP.password
                    sV.host = sP.host
                    sV.port = sP.port
                    sV.path = r2(sP.path)
                    sV.query = ''
                    sW = sF
                  } else {
                    if ('#' !== sR) {
                      sV.username = sP.username
                      sV.password = sP.password
                      sV.host = sP.host
                      sV.port = sP.port
                      sV.path = r2(sP.path)
                      sV.path.length--
                      sW = sD
                      continue
                    }
                    sV.username = sP.username
                    sV.password = sP.password
                    sV.host = sP.host
                    sV.port = sP.port
                    sV.path = r2(sP.path)
                    sV.query = sP.query
                    sV.fragment = ''
                    sW = sG
                  }
                }
              }
              break
            case sm:
              if (!sV.isSpecial() || ('/' !== sR && '\\' !== sR)) {
                if ('/' !== sR) {
                  sV.username = sP.username
                  sV.password = sP.password
                  sV.host = sP.host
                  sV.port = sP.port
                  sW = sD
                  continue
                }
                sW = sv
              } else {
                sW = sq
              }
              break
            case sp:
              if (((sW = sq), '/' !== sR || '/' !== rx(sY, sX + 1))) {
                continue
              }
              sX++
              break
            case sq:
              if ('/' !== sR && '\\' !== sR) {
                sW = sv
                continue
              }
              break
            case sv:
              if ('@' === sR) {
                sZ && (sY = '%40' + sY)
                sZ = true
                sS = r1(sY)
                for (var t2 = 0; t2 < sS.length; t2++) {
                  var t3 = sS[t2]
                  if (':' !== t3 || t1) {
                    var t4 = s3(t3, s2)
                    t1 ? (sV.password += t4) : (sV.username += t4)
                  } else {
                    t1 = true
                  }
                }
                sY = ''
              } else {
                if (
                  sR === qP ||
                  '/' === sR ||
                  '?' === sR ||
                  '#' === sR ||
                  ('\\' === sR && sV.isSpecial())
                ) {
                  if (sZ && '' === sY) {
                    return 'Invalid authority'
                  }
                  sX -= r1(sY).length + 1
                  sY = ''
                  sW = sw
                } else {
                  sY += sR
                }
              }
              break
            case sw:
            case sx:
              if (sO && 'file' === sV.scheme) {
                sW = sB
                continue
              }
              if (':' !== sR || t0) {
                if (
                  sR === qP ||
                  '/' === sR ||
                  '?' === sR ||
                  '#' === sR ||
                  ('\\' === sR && sV.isSpecial())
                ) {
                  if (sV.isSpecial() && '' === sY) {
                    return 'Invalid host'
                  }
                  if (
                    sO &&
                    '' === sY &&
                    (sV.includesCredentials() || null !== sV.port)
                  ) {
                    return
                  }
                  if ((sT = sV.parseHost(sY))) {
                    return sT
                  }
                  if (((sY = ''), (sW = sC), sO)) {
                    return
                  }
                  continue
                }
                '[' === sR ? (t0 = true) : ']' === sR && (t0 = false)
                sY += sR
              } else {
                if ('' === sY) {
                  return 'Invalid host'
                }
                if ((sT = sV.parseHost(sY))) {
                  return sT
                }
                if (((sY = ''), (sW = sy), sO === sx)) {
                  return
                }
              }
              break
            case sy:
              if (!ry(/\d/, sR)) {
                if (
                  sR === qP ||
                  '/' === sR ||
                  '?' === sR ||
                  '#' === sR ||
                  ('\\' === sR && sV.isSpecial()) ||
                  sO
                ) {
                  if ('' !== sY) {
                    var t5 = rq(sY, 10)
                    if (t5 > 65535) {
                      return 'Invalid port'
                    }
                    sV.port = sV.isSpecial() && t5 === s4[sV.scheme] ? null : t5
                    sY = ''
                  }
                  if (sO) {
                    return
                  }
                  sW = sC
                  continue
                }
                return 'Invalid port'
              }
              sY += sR
              break
            case sz:
              if (((sV.scheme = 'file'), '/' === sR || '\\' === sR)) {
                sW = sA
              } else {
                if (!sP || 'file' !== sP.scheme) {
                  sW = sD
                  continue
                }
                switch (sR) {
                  case qP:
                    ;(sV.host = sP.host),
                      (sV.path = r2(sP.path)),
                      (sV.query = sP.query)
                    break
                  case '?':
                    ;(sV.host = sP.host),
                      (sV.path = r2(sP.path)),
                      (sV.query = ''),
                      (sW = sF)
                    break
                  case '#':
                    ;(sV.host = sP.host),
                      (sV.path = r2(sP.path)),
                      (sV.query = sP.query),
                      (sV.fragment = ''),
                      (sW = sG)
                    break
                  default:
                    s6(rz(r2(sQ, sX), '')) ||
                      ((sV.host = sP.host),
                      (sV.path = r2(sP.path)),
                      sV.shortenPath()),
                      (sW = sD)
                    continue
                }
              }
              break
            case sA:
              if ('/' === sR || '\\' === sR) {
                sW = sB
                break
              }
              sP &&
                'file' === sP.scheme &&
                !s6(rz(r2(sQ, sX), '')) &&
                (s5(sP.path[0], true)
                  ? rC(sV.path, sP.path[0])
                  : (sV.host = sP.host)),
                (sW = sD)
              continue
            case sB:
              if (
                sR === qP ||
                '/' === sR ||
                '\\' === sR ||
                '?' === sR ||
                '#' === sR
              ) {
                if (!sO && s5(sY)) {
                  sW = sD
                } else {
                  if ('' === sY) {
                    if (((sV.host = ''), sO)) {
                      return
                    }
                    sW = sC
                  } else {
                    if ((sT = sV.parseHost(sY))) {
                      return sT
                    }
                    if (('localhost' === sV.host && (sV.host = ''), sO)) {
                      return
                    }
                    sY = ''
                    sW = sC
                  }
                }
                continue
              }
              sY += sR
              break
            case sC:
              if (sV.isSpecial()) {
                if (((sW = sD), '/' !== sR && '\\' !== sR)) {
                  continue
                }
              } else {
                if (sO || '?' !== sR) {
                  if (sO || '#' !== sR) {
                    if (sR !== qP && ((sW = sD), '/' !== sR)) {
                      continue
                    }
                  } else {
                    sV.fragment = ''
                    sW = sG
                  }
                } else {
                  sV.query = ''
                  sW = sF
                }
              }
              break
            case sD:
              if (
                sR === qP ||
                '/' === sR ||
                ('\\' === sR && sV.isSpecial()) ||
                (!sO && ('?' === sR || '#' === sR))
              ) {
                if (
                  ('..' === (sU = rH((sU = sY))) ||
                  '%2e.' === sU ||
                  '.%2e' === sU ||
                  '%2e%2e' === sU
                    ? (sV.shortenPath(),
                      '/' === sR ||
                        ('\\' === sR && sV.isSpecial()) ||
                        rC(sV.path, ''))
                    : s7(sY)
                    ? '/' === sR ||
                      ('\\' === sR && sV.isSpecial()) ||
                      rC(sV.path, '')
                    : ('file' === sV.scheme &&
                        !sV.path.length &&
                        s5(sY) &&
                        (sV.host && (sV.host = ''), (sY = rx(sY, 0) + ':')),
                      rC(sV.path, sY)),
                  (sY = ''),
                  'file' === sV.scheme &&
                    (sR === qP || '?' === sR || '#' === sR))
                ) {
                  for (; sV.path.length > 1 && '' === sV.path[0]; ) {
                    rE(sV.path)
                  }
                }
                '?' === sR
                  ? ((sV.query = ''), (sW = sF))
                  : '#' === sR && ((sV.fragment = ''), (sW = sG))
              } else {
                sY += s3(sR, s1)
              }
              break
            case sE:
              '?' === sR
                ? ((sV.query = ''), (sW = sF))
                : '#' === sR
                ? ((sV.fragment = ''), (sW = sG))
                : sR !== qP && (sV.path[0] += s3(sR, rZ))
              break
            case sF:
              sO || '#' !== sR
                ? sR !== qP &&
                  ("'" === sR && sV.isSpecial()
                    ? (sV.query += '%27')
                    : (sV.query += '#' === sR ? '%23' : s3(sR, rZ)))
                : ((sV.fragment = ''), (sW = sG))
              break
            case sG:
              sR !== qP && (sV.fragment += s3(sR, s0))
          }
          sX++
        }
      },
      parseHost: function (sN) {
        var sO, sP, sQ
        if ('[' === rx(sN, 0)) {
          if (']' !== rx(sN, sN.length - 1)) {
            return 'Invalid host'
          }
          if (
            ((sO = (function (sR) {
              var sS,
                sT,
                sU,
                sV,
                sW,
                sX,
                sY,
                sZ = [0, 0, 0, 0, 0, 0, 0, 0],
                t0 = 0,
                t1 = null,
                t2 = 0,
                t3 = function () {
                  return rx(sR, t2)
                }
              if (':' === t3()) {
                if (':' !== rx(sR, 1)) {
                  return
                }
                t2 += 2
                t1 = ++t0
              }
              for (; t3(); ) {
                if (8 === t0) {
                  return
                }
                if (':' !== t3()) {
                  for (sS = sT = 0; sT < 4 && ry(/^[\da-f]+$/i, t3()); ) {
                    sS = 16 * sS + rq(t3(), 16)
                    t2++
                    sT++
                  }
                  if ('.' === t3()) {
                    if (0 === sT) {
                      return
                    }
                    if (((t2 -= sT), t0 > 6)) {
                      return
                    }
                    for (sU = 0; t3(); ) {
                      if (((sV = null), sU > 0)) {
                        if (!('.' === t3() && sU < 4)) {
                          return
                        }
                        t2++
                      }
                      if (!ry(/\d/, t3())) {
                        return
                      }
                      for (; ry(/\d/, t3()); ) {
                        if (((sW = rq(t3(), 10)), null === sV)) {
                          sV = sW
                        } else {
                          if (0 === sV) {
                            return
                          }
                          sV = 10 * sV + sW
                        }
                        if (sV > 255) {
                          return
                        }
                        t2++
                      }
                      sZ[t0] = 256 * sZ[t0] + sV
                      ;(2 != ++sU && 4 !== sU) || t0++
                    }
                    if (4 !== sU) {
                      return
                    }
                    break
                  }
                  if (':' === t3()) {
                    if ((t2++, !t3())) {
                      return
                    }
                  } else {
                    if (t3()) {
                      return
                    }
                  }
                  sZ[t0++] = sS
                } else {
                  if (null !== t1) {
                    return
                  }
                  t2++
                  t1 = ++t0
                }
              }
              if (null !== t1) {
                for (sX = t0 - t1, t0 = 7; 0 !== t0 && sX > 0; ) {
                  sY = sZ[t0]
                  sZ[t0--] = sZ[t1 + sX - 1]
                  sZ[t1 + --sX] = sY
                }
              } else {
                if (8 !== t0) {
                  return
                }
              }
              return sZ
            })(rG(sN, 1, -1))),
            !sO)
          ) {
            return 'Invalid host'
          }
          this.host = sO
        } else {
          if (this.isSpecial()) {
            if (((sN = r4(sN)), ry(/[\0\t\n\r #%/:<>?@[\\\]^|]/, sN))) {
              return 'Invalid host'
            }
            if (
              ((sO = (function (sR) {
                var sS,
                  sT,
                  sU,
                  sV,
                  sW,
                  sX,
                  sY,
                  sZ = rF(sR, '.')
                if (
                  (sZ.length && '' === sZ[sZ.length - 1] && sZ.length--,
                  (sS = sZ.length) > 4)
                ) {
                  return sR
                }
                for (sT = [], sU = 0; sU < sS; sU++) {
                  if ('' === (sV = sZ[sU])) {
                    return sR
                  }
                  if (
                    ((sW = 10),
                    sV.length > 1 &&
                      '0' === rx(sV, 0) &&
                      ((sW = ry(/^0x/i, sV) ? 16 : 8),
                      (sV = rG(sV, 8 === sW ? 1 : 2))),
                    '' === sV)
                  ) {
                    sX = 0
                  } else {
                    if (
                      !ry(
                        10 === sW
                          ? /^\d+$/
                          : 8 === sW
                          ? /^[0-7]+$/
                          : /^[\da-f]+$/i,
                        sV
                      )
                    ) {
                      return sR
                    }
                    sX = rq(sV, sW)
                  }
                  rC(sT, sX)
                }
                for (sU = 0; sU < sS; sU++) {
                  if (((sX = sT[sU]), sU === sS - 1)) {
                    if (sX >= rw(256, 5 - sS)) {
                      return null
                    }
                  } else {
                    if (sX > 255) {
                      return null
                    }
                  }
                }
                for (sY = rB(sT), sU = 0; sU < sT.length; sU++) {
                  sY += sT[sU] * rw(256, 3 - sU)
                }
                return sY
              })(sN)),
              null === sO)
            ) {
              return 'Invalid host'
            }
            this.host = sO
          } else {
            if (ry(/[\0\t\n\r #/:<>?@[\\\]^|]/, sN)) {
              return 'Invalid host'
            }
            for (sO = '', sP = r1(sN), sQ = 0; sQ < sP.length; sQ++) {
              sO += s3(sP[sQ], rZ)
            }
            this.host = sO
          }
        }
      },
      cannotHaveUsernamePasswordPort: function () {
        return !this.host || this.cannotBeABaseURL || 'file' === this.scheme
      },
      includesCredentials: function () {
        return '' !== this.username || '' !== this.password
      },
      isSpecial: function () {
        return qZ(s4, this.scheme)
      },
      shortenPath: function () {
        var sN = this.path,
          sO = sN.length
        !sO ||
          ('file' === this.scheme && 1 === sO && s5(sN[0], true)) ||
          sN.length--
      },
      serialize: function () {
        var sN = this,
          sO = sN.scheme,
          sP = sN.username,
          sQ = sN.password,
          sR = sN.host,
          sS = sN.port,
          sT = sN.path,
          sU = sN.query,
          sV = sN.fragment,
          sW = sO + ':'
        return (
          null !== sR
            ? ((sW += '//'),
              sN.includesCredentials() &&
                (sW += sP + (sQ ? ':' + sQ : '') + '@'),
              (sW += rY(sR)),
              null !== sS && (sW += ':' + sS))
            : 'file' === sO && (sW += '//'),
          (sW += sN.cannotBeABaseURL
            ? sT[0]
            : sT.length
            ? '/' + rz(sT, '/')
            : ''),
          null !== sU && (sW += '?' + sU),
          null !== sV && (sW += '#' + sV),
          sW
        )
      },
      setHref: function (sN) {
        var sO = this.parse(sN)
        if (sO) {
          throw new rp(sO)
        }
        this.searchParams.update()
      },
      getOrigin: function () {
        var sN = this.scheme,
          sO = this.port
        if ('blob' === sN) {
          try {
            return new sI(sN.path[0]).origin
          } catch (sP) {
            return 'null'
          }
        }
        return 'file' !== sN && this.isSpecial()
          ? sN + '://' + rY(this.host) + (null !== sO ? ':' + sO : '')
          : 'null'
      },
      getProtocol: function () {
        return this.scheme + ':'
      },
      setProtocol: function (sN) {
        this.parse(r5(sN) + ':', s8)
      },
      getUsername: function () {
        return this.username
      },
      setUsername: function (sN) {
        var sO = r1(r5(sN))
        if (!this.cannotHaveUsernamePasswordPort()) {
          this.username = ''
          for (var sP = 0; sP < sO.length; sP++) {
            this.username += s3(sO[sP], s2)
          }
        }
      },
      getPassword: function () {
        return this.password
      },
      setPassword: function (sN) {
        var sO = r1(r5(sN))
        if (!this.cannotHaveUsernamePasswordPort()) {
          this.password = ''
          for (var sP = 0; sP < sO.length; sP++) {
            this.password += s3(sO[sP], s2)
          }
        }
      },
      getHost: function () {
        var sN = this.host,
          sO = this.port
        return null === sN ? '' : null === sO ? rY(sN) : rY(sN) + ':' + sO
      },
      setHost: function (sN) {
        this.cannotBeABaseURL || this.parse(sN, sw)
      },
      getHostname: function () {
        var sN = this.host
        return null === sN ? '' : rY(sN)
      },
      setHostname: function (sN) {
        this.cannotBeABaseURL || this.parse(sN, sx)
      },
      getPort: function () {
        var sN = this.port
        return null === sN ? '' : r5(sN)
      },
      setPort: function (sN) {
        this.cannotHaveUsernamePasswordPort() ||
          ('' === (sN = r5(sN)) ? (this.port = null) : this.parse(sN, sy))
      },
      getPathname: function () {
        var sN = this.path
        return this.cannotBeABaseURL
          ? sN[0]
          : sN.length
          ? '/' + rz(sN, '/')
          : ''
      },
      setPathname: function (sN) {
        this.cannotBeABaseURL || ((this.path = []), this.parse(sN, sC))
      },
      getSearch: function () {
        var sN = this.query
        return sN ? '?' + sN : ''
      },
      setSearch: function (sN) {
        '' === (sN = r5(sN))
          ? (this.query = null)
          : ('?' === rx(sN, 0) && (sN = rG(sN, 1)),
            (this.query = ''),
            this.parse(sN, sF))
        this.searchParams.update()
      },
      getSearchParams: function () {
        return this.searchParams.facade
      },
      getHash: function () {
        var sN = this.fragment
        return sN ? '#' + sN : ''
      },
      setHash: function (sN) {
        '' !== (sN = r5(sN))
          ? ('#' === rx(sN, 0) && (sN = rG(sN, 1)),
            (this.fragment = ''),
            this.parse(sN, sG))
          : (this.fragment = null)
      },
      update: function () {
        this.query = this.searchParams.serialize() || null
      },
    }
    var sI = function (sN) {
        var sO = qY(this, sJ),
          sP = r7(arguments.length, 1) > 1 ? arguments[1] : void 0,
          sQ = rb(sO, new sH(sN, false, sP))
        qR ||
          ((sO.href = sQ.serialize()),
          (sO.origin = sQ.getOrigin()),
          (sO.protocol = sQ.getProtocol()),
          (sO.username = sQ.getUsername()),
          (sO.password = sQ.getPassword()),
          (sO.host = sQ.getHost()),
          (sO.hostname = sQ.getHostname()),
          (sO.port = sQ.getPort()),
          (sO.pathname = sQ.getPathname()),
          (sO.search = sQ.getSearch()),
          (sO.searchParams = sQ.getSearchParams()),
          (sO.hash = sQ.getHash()))
      },
      sJ = sI.prototype,
      sK = function (sN, sO) {
        return {
          get: function () {
            return rg(this)[sN]()
          },
          set:
            sO &&
            function (sP) {
              return rg(this)[sO](sP)
            },
          configurable: true,
          enumerable: true,
        }
      }
    if (
      (qR &&
        (qX(sJ, 'href', sK('serialize', 'setHref')),
        qX(sJ, 'origin', sK('getOrigin')),
        qX(sJ, 'protocol', sK('getProtocol', 'setProtocol')),
        qX(sJ, 'username', sK('getUsername', 'setUsername')),
        qX(sJ, 'password', sK('getPassword', 'setPassword')),
        qX(sJ, 'host', sK('getHost', 'setHost')),
        qX(sJ, 'hostname', sK('getHostname', 'setHostname')),
        qX(sJ, 'port', sK('getPort', 'setPort')),
        qX(sJ, 'pathname', sK('getPathname', 'setPathname')),
        qX(sJ, 'search', sK('getSearch', 'setSearch')),
        qX(sJ, 'searchParams', sK('getSearchParams')),
        qX(sJ, 'hash', sK('getHash', 'setHash'))),
      qW(
        sJ,
        'toJSON',
        function () {
          return rg(this).serialize()
        },
        { enumerable: true }
      ),
      qW(
        sJ,
        'toString',
        function () {
          return rg(this).serialize()
        },
        { enumerable: true }
      ),
      rm)
    ) {
      var sL = rm.createObjectURL,
        sM = rm.revokeObjectURL
      sL && qW(sI, 'createObjectURL', qU(sL, rm))
      sM && qW(sI, 'revokeObjectURL', qU(sM, rm))
    }
    return (
      r6(sI, 'URL'),
      qQ(
        {
          global: true,
          constructor: true,
          forced: !qS,
          sham: !qR,
        },
        { URL: sI }
      ),
      jO
    )
  }
  jN || ((jN = 1), jY())
  var jZ
  jZ || ((jZ = 1), jX())
  var k0,
    k1,
    k2,
    k3,
    k4,
    k5,
    k6,
    k7 = {}
  function k8() {
    return k1
      ? k0
      : ((k1 = 1),
        (k0 =
          '\t\n\x0B\f\r \xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF'))
  }
  function k9() {
    if (k3) {
      return k2
    }
    k3 = 1
    var qP = bm(),
      qQ = bw(),
      qR = g6(),
      qS = k8(),
      qT = qP(''.replace),
      qU = RegExp('^[' + qS + ']+'),
      qV = RegExp('(^|[^' + qS + '])[' + qS + ']+$'),
      qW = function (qX) {
        return function (qY) {
          var qZ = qR(qQ(qY))
          return (
            1 & qX && (qZ = qT(qZ, qU, '')),
            2 & qX && (qZ = qT(qZ, qV, '$1')),
            qZ
          )
        }
      }
    return (k2 = {
      start: qW(1),
      end: qW(2),
      trim: qW(3),
    })
  }
  !(function () {
    if (k6) {
      return k7
    }
    k6 = 1
    var qP = e7(),
      qQ = (function () {
        if (k5) {
          return k4
        }
        k5 = 1
        var qR = a4(),
          qS = am(),
          qT = bm(),
          qU = g6(),
          qV = k9().trim,
          qW = k8(),
          qX = qT(''.charAt),
          qY = qR.parseFloat,
          qZ = qR.Symbol,
          r0 = qZ && qZ.iterator,
          r1 =
            1 / qY(qW + '-0') != -1e400 ||
            (r0 &&
              !qS(function () {
                qY(Object(r0))
              }))
        return (k4 = r1
          ? function (r2) {
              var r3 = qV(qU(r2)),
                r4 = qY(r3)
              return 0 === r4 && '-' === qX(r3, 0) ? -0 : r4
            }
          : qY)
      })()
    qP(
      {
        global: true,
        forced: parseFloat !== qQ,
      },
      { parseFloat: qQ }
    )
  })()
  var kb,
    kg = {}
  !(function () {
    if (kb) {
      return kg
    }
    kb = 1
    var qP = av(),
      qQ = gD(),
      qR = cK(),
      qS = bv(),
      qT = dJ(),
      qU = g6(),
      qV = bw(),
      qW = bJ(),
      qX = gF(),
      qY = gH()
    qQ('match', function (qZ, r0, r1) {
      return [
        function (r2) {
          var r3 = qV(this),
            r4 = qS(r2) ? void 0 : qW(r2, qZ)
          return r4 ? qP(r4, r2, r3) : new RegExp(r2)[qZ](qU(r3))
        },
        function (r2) {
          var r3 = qR(this),
            r4 = qU(r2),
            r5 = r1(r0, r3, r4)
          if (r5.done) {
            return r5.value
          }
          if (!r3.global) {
            return qY(r3, r4)
          }
          var r6 = r3.unicode
          r3.lastIndex = 0
          for (var r7, r8 = [], r9 = 0; null !== (r7 = qY(r3, r4)); ) {
            var rb = qU(r7[0])
            r8[r9] = rb
            '' === rb && (r3.lastIndex = qX(r4, qT(r3.lastIndex), r6))
            r9++
          }
          return 0 === r9 ? null : r8
        },
      ]
    })
  })()
  var kj,
    kk,
    km,
    kp = {}
  function kq() {}
  function kv(qP) {
    return qP()
  }
  function kw() {
    return Object.create(null)
  }
  function kx(qP) {
    qP.forEach(kv)
  }
  function ky(qP) {
    return 'function' == typeof qP
  }
  function kz(qP, qQ) {
    return qP != qP
      ? qQ == qQ
      : qP !== qQ || (qP && 'object' == typeof qP) || 'function' == typeof qP
  }
  function kA(qP, qQ, qR, qS) {
    if (qP) {
      const qT = kB(qP, qQ, qR, qS)
      return qP[0](qT)
    }
  }
  function kB(qP, qQ, qR, qS) {
    return qP[1] && qS
      ? (function (qT, qU) {
          for (const qV in qU) qT[qV] = qU[qV]
          return qT
        })(qR.ctx.slice(), qP[1](qS(qQ)))
      : qR.ctx
  }
  function kC(qP, qQ, qR, qS) {
    if (qP[2] && qS) {
      const qT = qP[2](qS(qR))
      if (void 0 === qQ.dirty) {
        return qT
      }
      if ('object' == typeof qT) {
        const qU = [],
          qV = Math.max(qQ.dirty.length, qT.length)
        for (let qW = 0; qW < qV; qW += 1) {}
        return qU
      }
      return qQ.dirty | qT
    }
    return qQ.dirty
  }
  function kD(qP, qQ, qR, qS, qT, qU) {
    if (qT) {
      const qV = kB(qQ, qR, qS, qU)
      qP.p(qV, qT)
    }
  }
  function kE(qP) {
    if (qP.ctx.length > 32) {
      const qQ = [],
        qR = qP.ctx.length / 32
      for (let qS = 0; qS < qR; qS++) {
        qQ[qS] = -1
      }
      return qQ
    }
    return -1
  }
  function kF(qP) {
    return null == qP ? '' : qP
  }
  function kG(qP) {
    var qQ = (function (qR, qS) {
      if ('object' != typeof qR || !qR) {
        return qR
      }
      var qT = qR[Symbol.toPrimitive]
      if (void 0 !== qT) {
        var qU = qT.call(qR, qS || 'default')
        if ('object' != typeof qU) {
          return qU
        }
        throw new TypeError('@@toPrimitive must return a primitive value.')
      }
      return ('string' === qS ? String : Number)(qR)
    })(qP, 'string')
    return 'symbol' == typeof qQ ? qQ : String(qQ)
  }
  function kH(qP, qQ, qR) {
    return (
      (qQ = kG(qQ)) in qP
        ? Object.defineProperty(qP, qQ, {
            value: qR,
            enumerable: true,
            configurable: true,
            writable: true,
          })
        : (qP[qQ] = qR),
      qP
    )
  }
  !(function () {
    if (km) {
      return kp
    }
    km = 1
    var qP = e7(),
      qQ = k9().trim,
      qR = (function () {
        if (kk) {
          return kj
        }
        kk = 1
        var qS = d3().PROPER,
          qT = am(),
          qU = k8()
        return (kj = function (qV) {
          return qT(function () {
            return (
              !!qU[qV]() ||
              '\u200B\x85\u180E' !== '\u200B\x85\u180E'[qV]() ||
              (qS && qU[qV].name !== qV)
            )
          })
        })
      })()
    qP(
      {
        target: 'String',
        proto: true,
        forced: qR('trim'),
      },
      {
        trim: function () {
          return qQ(this)
        },
      }
    )
  })()
  var kI,
    kJ,
    kK,
    kL = {}
  function kM() {
    if (kJ) {
      return kI
    }
    kJ = 1
    var qP = bp()
    return (kI =
      Array.isArray ||
      function (qQ) {
        return 'Array' === qP(qQ)
      })
  }
  !(function () {
    if (kK) {
      return kL
    }
    kK = 1
    var qP = e7(),
      qQ = bm(),
      qR = kM(),
      qS = qQ([].reverse),
      qT = [1, 2]
    qP(
      {
        target: 'Array',
        proto: true,
        forced: String(qT) === String(qT.reverse()),
      },
      {
        reverse: function () {
          return qR(this) && (this.length = this.length), qS(this)
        },
      }
    )
  })()
  var kN,
    kO,
    kP,
    kQ,
    kR,
    kS,
    kT,
    kU,
    kV,
    kW = {}
  function kX() {
    if (kO) {
      return kN
    }
    kO = 1
    var qP = bH(),
      qQ = TypeError
    return (kN = function (qR, qS) {
      if (!delete qR[qS]) {
        throw new qQ('Cannot delete property ' + qP(qS) + ' of ' + qP(qR))
      }
    })
  }
  function kY() {
    if (kQ) {
      return kP
    }
    kQ = 1
    var qP = bC().match(/firefox\/(\d+)/i)
    return (kP = !!qP && +qP[1])
  }
  function kZ() {
    if (kS) {
      return kR
    }
    kS = 1
    var qP = bC()
    return (kR = /MSIE|Trident/.test(qP))
  }
  function l0() {
    if (kU) {
      return kT
    }
    kU = 1
    var qP = bC().match(/AppleWebKit\/(\d+)\./)
    return (kT = !!qP && +qP[1])
  }
  !(function () {
    if (kV) {
      return kW
    }
    kV = 1
    var qP = e7(),
      qQ = bm(),
      qR = bI(),
      qS = cm(),
      qT = dK(),
      qU = kX(),
      qV = g6(),
      qW = am(),
      qX = jW(),
      qY = fL(),
      qZ = kY(),
      r0 = kZ(),
      r1 = bD(),
      r2 = l0(),
      r3 = [],
      r4 = qQ(r3.sort),
      r5 = qQ(r3.push),
      r6 = qW(function () {
        r3.sort(void 0)
      }),
      r7 = qW(function () {
        r3.sort(null)
      }),
      r8 = qY('sort'),
      r9 = !qW(function () {
        if (r1) {
          return r1 < 70
        }
        if (!(qZ && qZ > 3)) {
          if (r0) {
            return true
          }
          if (r2) {
            return r2 < 603
          }
          var rb,
            rg,
            rj,
            rk,
            rm = ''
          for (rb = 65; rb < 76; rb++) {
            switch (((rg = String.fromCharCode(rb)), rb)) {
              case 66:
              case 69:
              case 70:
              case 72:
                rj = 3
                break
              case 68:
              case 71:
                rj = 4
                break
              default:
                rj = 2
            }
            for (rk = 0; rk < 47; rk++) {
              r3.push({
                k: rg + rk,
                v: rj,
              })
            }
          }
          for (
            r3.sort(function (rp, rq) {
              return rq.v - rp.v
            }),
              rk = 0;
            rk < r3.length;
            rk++
          ) {
            rg = r3[rk].k.charAt(0)
            rm.charAt(rm.length - 1) !== rg && (rm += rg)
          }
          return 'DGBEFHACIJK' !== rm
        }
      })
    qP(
      {
        target: 'Array',
        proto: true,
        forced: r6 || !r7 || !r8 || !r9,
      },
      {
        sort: function (rb) {
          void 0 !== rb && qR(rb)
          var rg = qS(this)
          if (r9) {
            return void 0 === rb ? r4(rg) : r4(rg, rb)
          }
          var rj,
            rk,
            rm = [],
            rp = qT(rg)
          for (rk = 0; rk < rp; rk++) {
            rk in rg && r5(rm, rg[rk])
          }
          for (
            qX(
              rm,
              (function (rq) {
                return function (rv, rw) {
                  return void 0 === rw
                    ? -1
                    : void 0 === rv
                    ? 1
                    : void 0 !== rq
                    ? +rq(rv, rw) || 0
                    : qV(rv) > qV(rw)
                    ? 1
                    : -1
                }
              })(rb)
            ),
              rj = qT(rm),
              rk = 0;
            rk < rj;

          ) {
            rg[rk] = rm[rk++]
          }
          for (; rk < rp; ) {
            qU(rg, rk++)
          }
          return rg
        },
      }
    )
  })()
  var l1,
    l2,
    l3,
    l4,
    l5,
    l6,
    l7,
    l8,
    l9,
    lb,
    lg,
    lj,
    lk,
    lm,
    lp,
    lq,
    lv,
    lw,
    lx,
    ly = {}
  function lz() {
    return l2
      ? l1
      : ((l2 = 1),
        (l1 =
          'undefined' != typeof ArrayBuffer && 'undefined' != typeof DataView))
  }
  function lA() {
    if (l4) {
      return l3
    }
    l4 = 1
    var qP = dH(),
      qQ = dJ(),
      qR = RangeError
    return (l3 = function (qS) {
      if (void 0 === qS) {
        return 0
      }
      var qT = qP(qS),
        qU = qQ(qT)
      if (qT !== qU) {
        throw new qR('Wrong length or index')
      }
      return qU
    })
  }
  function lB() {
    if (l8) {
      return l7
    }
    l8 = 1
    var qP =
        (l6 ||
          ((l6 = 1),
          (l5 =
            Math.sign ||
            function (qT) {
              var qU = +qT
              return 0 === qU || qU != qU ? qU : qU < 0 ? -1 : 1
            })),
        l5),
      qQ = Math.abs,
      qS = 4503599627370496
    return (
      (l7 = function (qT, qU, qV, qW) {
        var qX = +qT,
          qY = qQ(qX),
          qZ = qP(qX)
        if (qY < qW) {
          return (
            qZ *
            (function (r2) {
              return r2 + qS - qS
            })(qY / qW / qU) *
            qW *
            qU
          )
        }
        var r0 = (1 + qU / 2.220446049250313e-16) * qY,
          r1 = r0 - (r0 - qY)
        return r1 > qV || r1 != r1 ? qZ * 1e400 : qZ * r1
      }),
      l7
    )
  }
  function lC() {
    if (lj) {
      return lg
    }
    lj = 1
    var qP = Array,
      qQ = Math.abs,
      qR = Math.pow,
      qS = Math.floor,
      qT = Math.log,
      qU = Math.LN2
    return (lg = {
      pack: function (qV, qW, qX) {
        var qY,
          qZ,
          r0,
          r1 = qP(qX),
          r2 = 8 * qX - qW - 1,
          r3 = (1 << r2) - 1,
          r4 = r3 >> 1,
          r5 = 23 === qW ? qR(2, -24) - qR(2, -77) : 0,
          r6 = qV < 0 || (0 === qV && 1 / qV < 0) ? 1 : 0,
          r7 = 0
        for (
          (qV = qQ(qV)) != qV || qV === 1e400
            ? ((qZ = qV != qV ? 1 : 0), (qY = r3))
            : ((qY = qS(qT(qV) / qU)),
              qV * (r0 = qR(2, -qY)) < 1 && (qY--, (r0 *= 2)),
              (qV += qY + r4 >= 1 ? r5 / r0 : r5 * qR(2, 1 - r4)) * r0 >= 2 &&
                (qY++, (r0 /= 2)),
              qY + r4 >= r3
                ? ((qZ = 0), (qY = r3))
                : qY + r4 >= 1
                ? ((qZ = (qV * r0 - 1) * qR(2, qW)), (qY += r4))
                : ((qZ = qV * qR(2, r4 - 1) * qR(2, qW)), (qY = 0)));
          qW >= 8;

        ) {
          r1[r7++] = 255 & qZ
          qZ /= 256
          qW -= 8
        }
        for (qY = (qY << qW) | qZ, r2 += qW; r2 > 0; ) {
          r1[r7++] = 255 & qY
          qY /= 256
          r2 -= 8
        }
        return (r1[--r7] |= 128 * r6), r1
      },
      unpack: function (qV, qW) {
        var qX,
          qY = qV.length,
          qZ = 8 * qY - qW - 1,
          r0 = (1 << qZ) - 1,
          r1 = r0 >> 1,
          r2 = qZ - 7,
          r3 = qY - 1,
          r4 = qV[r3--],
          r5 = 127 & r4
        for (r4 >>= 7; r2 > 0; ) {
          r5 = 256 * r5 + qV[r3--]
          r2 -= 8
        }
        for (qX = r5 & ((1 << -r2) - 1), r5 >>= -r2, r2 += qW; r2 > 0; ) {
          qX = 256 * qX + qV[r3--]
          r2 -= 8
        }
        if (0 === r5) {
          r5 = 1 - r1
        } else {
          if (r5 === r0) {
            return qX ? NaN : r4 ? null : null
          }
          qX += qR(2, qW)
          r5 -= r1
        }
        return (r4 ? -1 : 1) * qX * qR(2, r5 - qW)
      },
    })
  }
  function lD() {
    if (lm) {
      return lk
    }
    lm = 1
    var qP = cm(),
      qQ = dI(),
      qR = dK()
    return (
      (lk = function (qS) {
        for (
          var qT = qP(this),
            qU = qR(qT),
            qV = arguments.length,
            qW = qQ(qV > 1 ? arguments[1] : void 0, qU),
            qX = qV > 2 ? arguments[2] : void 0,
            qY = void 0 === qX ? qU : qQ(qX, qU);
          qY > qW;

        ) {
          qT[qW++] = qS
        }
        return qT
      }),
      lk
    )
  }
  function lE() {
    if (lq) {
      return lp
    }
    lq = 1
    var qP = by(),
      qQ = bz(),
      qR = fj()
    return (lp = function (qS, qT, qU) {
      var qV, qW
      return (
        qR &&
          qP((qV = qT.constructor)) &&
          qV !== qU &&
          qQ((qW = qV.prototype)) &&
          qW !== qU.prototype &&
          qR(qS, qW),
        qS
      )
    })
  }
  function lF() {
    if (lw) {
      return lv
    }
    lw = 1
    var qP = a4(),
      qQ = bm(),
      qR = ap(),
      qS = lz(),
      qT = d3(),
      qU = cM(),
      qV = hI(),
      qW = jV(),
      qX = am(),
      qY = hK(),
      qZ = dH(),
      r0 = dJ(),
      r1 = lA(),
      r2 = (function () {
        if (lb) {
          return l9
        }
        lb = 1
        var rX = lB()
        return (
          (l9 =
            Math.fround ||
            function (rY) {
              return rX(
                rY,
                1.1920928955078125e-7,
                3.4028234663852886e38,
                1.1754943508222875e-38
              )
            }),
          l9
        )
      })(),
      r3 = lC(),
      r4 = f6(),
      r5 = fj(),
      r6 = lD(),
      r7 = hQ(),
      r8 = lE(),
      r9 = e5(),
      rb = f8(),
      rg = d8(),
      rj = qT.PROPER,
      rk = qT.CONFIGURABLE,
      rw = rg.getterFor('ArrayBuffer'),
      rx = rg.getterFor('DataView'),
      ry = rg.set,
      rz = qP.ArrayBuffer,
      rA = rz,
      rB = rA && rA.prototype,
      rC = qP.DataView,
      rD = rC && rC.prototype,
      rE = Object.prototype,
      rF = qP.Array,
      rG = qP.RangeError,
      rH = qQ(r6),
      rI = qQ([].reverse),
      rJ = r3.pack,
      rK = r3.unpack,
      rL = function (rX) {
        return [255 & rX]
      },
      rM = function (rX) {
        return [255 & rX, (rX >> 8) & 255]
      },
      rN = function (rX) {
        return [255 & rX, (rX >> 8) & 255, (rX >> 16) & 255, (rX >> 24) & 255]
      },
      rO = function (rX) {
        return (rX[3] << 24) | (rX[2] << 16) | (rX[1] << 8) | rX[0]
      },
      rP = function (rX) {
        return rJ(r2(rX), 23, 4)
      },
      rQ = function (rX) {
        return rJ(rX, 52, 8)
      },
      rR = function (rX, rY, rZ) {
        qV(rX.prototype, rY, {
          configurable: true,
          get: function () {
            return rZ(this)[rY]
          },
        })
      },
      rS = function (rX, rY, rZ, s0) {
        var s1 = rx(rX),
          s2 = r1(rZ),
          s3 = !!s0
        if (s2 + rY > s1.byteLength) {
          throw new rG('Wrong index')
        }
        var s4 = s1.bytes,
          s5 = s2 + s1.byteOffset,
          s6 = r7(s4, s5, s5 + rY)
        return s3 ? s6 : rI(s6)
      },
      rT = function (rX, rY, rZ, s0, s1, s2) {
        var s3 = rx(rX),
          s4 = r1(rZ),
          s5 = s0(+s1),
          s6 = !!s2
        if (s4 + rY > s3.byteLength) {
          throw new rG('Wrong index')
        }
        for (
          var s7 = s3.bytes, s8 = s4 + s3.byteOffset, s9 = 0;
          s9 < rY;
          s9++
        ) {
          s7[s8 + s9] = s5[s6 ? s9 : rY - s9 - 1]
        }
      }
    if (qS) {
      var rU = rj && rz.name !== 'ArrayBuffer'
      qX(function () {
        rz(1)
      }) &&
      qX(function () {
        new rz(-1)
      }) &&
      !qX(function () {
        return (
          new rz(), new rz(1.5), new rz(NaN), 1 !== rz.length || (rU && !rk)
        )
      })
        ? rU && rk && qU(rz, 'name', 'ArrayBuffer')
        : (((rA = function (rX) {
            return qY(this, rB), r8(new rz(r1(rX)), this, rA)
          }).prototype = rB),
          (rB.constructor = rA),
          r9(rA, rz))
      r5 && r4(rD) !== rE && r5(rD, rE)
      var rV = new rC(new rA(2)),
        rW = qQ(rD.setInt8)
      rV.setInt8(0, 2147483648)
      rV.setInt8(1, 2147483649)
      ;(!rV.getInt8(0) && rV.getInt8(1)) ||
        qW(
          rD,
          {
            setInt8: function (rX, rY) {
              rW(this, rX, (rY << 24) >> 24)
            },
            setUint8: function (rX, rY) {
              rW(this, rX, (rY << 24) >> 24)
            },
          },
          { unsafe: true }
        )
    } else {
      rB = (rA = function (rX) {
        qY(this, rB)
        var rY = r1(rX)
        ry(this, {
          type: 'ArrayBuffer',
          bytes: rH(rF(rY), 0),
          byteLength: rY,
        })
        qR || ((this.byteLength = rY), (this.detached = false))
      }).prototype
      rD = (rC = function (rX, rY, rZ) {
        qY(this, rD)
        qY(rX, rB)
        var s0 = rw(rX),
          s1 = s0.byteLength,
          s2 = qZ(rY)
        if (s2 < 0 || s2 > s1) {
          throw new rG('Wrong offset')
        }
        if (s2 + (rZ = void 0 === rZ ? s1 - s2 : r0(rZ)) > s1) {
          throw new rG('Wrong length')
        }
        ry(this, {
          type: 'DataView',
          buffer: rX,
          byteLength: rZ,
          byteOffset: s2,
          bytes: s0.bytes,
        })
        qR ||
          ((this.buffer = rX), (this.byteLength = rZ), (this.byteOffset = s2))
      }).prototype
      qR &&
        (rR(rA, 'byteLength', rw),
        rR(rC, 'buffer', rx),
        rR(rC, 'byteLength', rx),
        rR(rC, 'byteOffset', rx))
      qW(rD, {
        getInt8: function (rX) {
          return (rS(this, 1, rX)[0] << 24) >> 24
        },
        getUint8: function (rX) {
          return rS(this, 1, rX)[0]
        },
        getInt16: function (rX) {
          var rY = rS(this, 2, rX, arguments.length > 1 && arguments[1])
          return (((rY[1] << 8) | rY[0]) << 16) >> 16
        },
        getUint16: function (rX) {
          var rY = rS(this, 2, rX, arguments.length > 1 && arguments[1])
          return (rY[1] << 8) | rY[0]
        },
        getInt32: function (rX) {
          return rO(rS(this, 4, rX, arguments.length > 1 && arguments[1]))
        },
        getUint32: function (rX) {
          return rO(rS(this, 4, rX, arguments.length > 1 && arguments[1])) >>> 0
        },
        getFloat32: function (rX) {
          return rK(rS(this, 4, rX, arguments.length > 1 && arguments[1]), 23)
        },
        getFloat64: function (rX) {
          return rK(rS(this, 8, rX, arguments.length > 1 && arguments[1]), 52)
        },
        setInt8: function (rX, rY) {
          rT(this, 1, rX, rL, rY)
        },
        setUint8: function (rX, rY) {
          rT(this, 1, rX, rL, rY)
        },
        setInt16: function (rX, rY) {
          rT(this, 2, rX, rM, rY, arguments.length > 2 && arguments[2])
        },
        setUint16: function (rX, rY) {
          rT(this, 2, rX, rM, rY, arguments.length > 2 && arguments[2])
        },
        setInt32: function (rX, rY) {
          rT(this, 4, rX, rN, rY, arguments.length > 2 && arguments[2])
        },
        setUint32: function (rX, rY) {
          rT(this, 4, rX, rN, rY, arguments.length > 2 && arguments[2])
        },
        setFloat32: function (rX, rY) {
          rT(this, 4, rX, rP, rY, arguments.length > 2 && arguments[2])
        },
        setFloat64: function (rX, rY) {
          rT(this, 8, rX, rQ, rY, arguments.length > 2 && arguments[2])
        },
      })
    }
    return (
      rb(rA, 'ArrayBuffer'),
      rb(rC, 'DataView'),
      (lv = {
        ArrayBuffer: rA,
        DataView: rC,
      })
    )
  }
  !(function () {
    if (lx) {
      return ly
    }
    lx = 1
    var qP = e7(),
      qQ = hO(),
      qR = am(),
      qS = lF(),
      qT = cK(),
      qU = dI(),
      qV = dJ(),
      qW = hN(),
      qX = qS.ArrayBuffer,
      qY = qS.DataView,
      qZ = qY.prototype,
      r0 = qQ(qX.prototype.slice),
      r1 = qQ(qZ.getUint8),
      r2 = qQ(qZ.setUint8)
    qP(
      {
        target: 'ArrayBuffer',
        proto: true,
        unsafe: true,
        forced: qR(function () {
          return !new qX(2).slice(1, void 0).byteLength
        }),
      },
      {
        slice: function (r3, r4) {
          if (r0 && void 0 === r4) {
            return r0(qT(this), r3)
          }
          for (
            var r5 = qT(this).byteLength,
              r6 = qU(r3, r5),
              r7 = qU(void 0 === r4 ? r5 : r4, r5),
              r8 = new (qW(this, qX))(qV(r7 - r6)),
              r9 = new qY(this),
              rb = new qY(r8),
              rg = 0;
            r6 < r7;

          ) {
            r2(rb, rg++, r1(r9, r6++))
          }
          return r8
        },
      }
    )
  })()
  var lG,
    lH,
    lI,
    lJ,
    lK,
    lL,
    lM,
    lN,
    lO,
    lP,
    lQ,
    lR,
    lS,
    lT,
    lU,
    lV,
    lW,
    lX,
    lY,
    lZ,
    m0,
    m1,
    m2,
    m3,
    m4,
    m5,
    m6,
    m7,
    m8 = { exports: {} }
  function m9() {
    if (lH) {
      return lG
    }
    lH = 1
    var qP,
      qQ,
      qR,
      qS = lz(),
      qT = ap(),
      qU = a4(),
      qV = by(),
      qW = bz(),
      qX = cp(),
      qY = g5(),
      qZ = bH(),
      r0 = cM(),
      r1 = db(),
      r2 = hI(),
      r3 = bB(),
      r4 = f6(),
      r5 = fj(),
      r6 = cv(),
      r7 = cq(),
      r8 = d8(),
      r9 = r8.enforce,
      rb = r8.get,
      rg = qU.Int8Array,
      rj = rg && rg.prototype,
      rk = qU.Uint8ClampedArray,
      rm = rk && rk.prototype,
      rp = rg && r4(rg),
      rq = rj && r4(rj),
      rv = Object.prototype,
      rw = qU.TypeError,
      rx = r6('toStringTag'),
      ry = r7('TYPED_ARRAY_TAG'),
      rA = qS && !!r5 && 'Opera' !== qY(qU.opera),
      rB = false,
      rE = function (rG) {
        var rH = r4(rG)
        if (qW(rH)) {
          var rI = rb(rH)
          return rI && qX(rI, 'TypedArrayConstructor')
            ? rI.TypedArrayConstructor
            : rE(rH)
        }
      },
      rF = function (rG) {
        if (!qW(rG)) {
          return false
        }
        var rH = qY(rG)
        return qX(rC, rH) || qX(rD, rH)
      }
    for (qP in rC)
      (qR = (qQ = qU[qP]) && qQ.prototype)
        ? (r9(qR).TypedArrayConstructor = qQ)
        : (rA = false)
    for (qP in rD)
      (qR = (qQ = qU[qP]) && qQ.prototype) &&
        (r9(qR).TypedArrayConstructor = qQ)
    if (
      (!rA || !qV(rp) || rp === Function.prototype) &&
      ((rp = function () {
        throw new rw('Incorrect invocation')
      }),
      rA)
    ) {
      for (qP in rC) qU[qP] && r5(qU[qP], rp)
    }
    if ((!rA || !rq || rq === rv) && ((rq = rp.prototype), rA)) {
      for (qP in rC) qU[qP] && r5(qU[qP].prototype, rq)
    }
    if ((rA && r4(rm) !== rq && r5(rm, rq), qT && !qX(rq, rx))) {
      for (qP in ((rB = true),
      r2(rq, rx, {
        configurable: true,
        get: function () {
          return qW(this) ? this[ry] : void 0
        },
      }),
      rC))
        qU[qP] && r0(qU[qP], ry, qP)
    }
    return (lG = {
      NATIVE_ARRAY_BUFFER_VIEWS: rA,
      TYPED_ARRAY_TAG: rB && ry,
      aTypedArray: function (rG) {
        if (rF(rG)) {
          return rG
        }
        throw new rw('Target is not a typed array')
      },
      aTypedArrayConstructor: function (rG) {
        if (qV(rG) && (!r5 || r3(rp, rG))) {
          return rG
        }
        throw new rw(qZ(rG) + ' is not a typed array constructor')
      },
      exportTypedArrayMethod: function (rG, rH, rI, rJ) {
        if (qT) {
          if (rI) {
            for (var rK in rC) {
              var rL = qU[rK]
              if (rL && qX(rL.prototype, rG)) {
                try {
                  delete rL.prototype[rG]
                } catch (rM) {
                  try {
                    rL.prototype[rG] = rH
                  } catch (rN) {}
                }
              }
            }
          }
          ;(rq[rG] && !rI) || r1(rq, rG, rI ? rH : (rA && rj[rG]) || rH, rJ)
        }
      },
      exportTypedArrayStaticMethod: function (rG, rH, rI) {
        var rJ, rK
        if (qT) {
          if (r5) {
            if (rI) {
              for (rJ in rC)
                if ((rK = qU[rJ]) && qX(rK, rG)) {
                  try {
                    delete rK[rG]
                  } catch (rL) {}
                }
            }
            if (rp[rG] && !rI) {
              return
            }
            try {
              return r1(rp, rG, rI ? rH : (rA && rp[rG]) || rH)
            } catch (rM) {}
          }
          for (rJ in rC) !(rK = qU[rJ]) || (rK[rG] && !rI) || r1(rK, rG, rH)
        }
      },
      getTypedArrayConstructor: rE,
      isView: function (rG) {
        if (!qW(rG)) {
          return false
        }
        var rH = qY(rG)
        return 'DataView' === rH || qX(rC, rH) || qX(rD, rH)
      },
      isTypedArray: rF,
      TypedArray: rp,
      TypedArrayPrototype: rq,
    })
  }
  function mb() {
    if (lL) {
      return lK
    }
    lL = 1
    var qP = bz(),
      qQ = Math.floor
    return (lK =
      Number.isInteger ||
      function (qR) {
        return !qP(qR) && isFinite(qR) && qQ(qR) === qR
      })
  }
  function mg() {
    if (lN) {
      return lM
    }
    lN = 1
    var qP = dH(),
      qQ = RangeError
    return (lM = function (qR) {
      var qS = qP(qR)
      if (qS < 0) {
        throw new qQ("The argument can't be less than 0")
      }
      return qS
    })
  }
  function mj() {
    if (lP) {
      return lO
    }
    lP = 1
    var qP = mg(),
      qQ = RangeError
    return (lO = function (qR, qS) {
      var qT = qP(qR)
      if (qT % qS) {
        throw new qQ('Wrong offset')
      }
      return qT
    })
  }
  function mk() {
    if (lR) {
      return lQ
    }
    lR = 1
    var qP = Math.round
    return (lQ = function (qQ) {
      var qR = qP(qQ)
      return qR < 0 ? 0 : qR > 255 ? 255 : 255 & qR
    })
  }
  function mm() {
    if (lT) {
      return lS
    }
    lT = 1
    var qP = g5()
    return (lS = function (qQ) {
      var qR = qP(qQ)
      return 'BigInt64Array' === qR || 'BigUint64Array' === qR
    })
  }
  function mp() {
    if (lV) {
      return lU
    }
    lV = 1
    var qP = cw(),
      qQ = TypeError
    return (lU = function (qR) {
      var qS = qP(qR, 'number')
      if ('number' == typeof qS) {
        throw new qQ("Can't convert number to bigint")
      }
      return BigInt(qS)
    })
  }
  function mq() {
    if (lX) {
      return lW
    }
    lX = 1
    var qP = hP(),
      qQ = av(),
      qR = hM(),
      qS = cm(),
      qT = dK(),
      qU = iC(),
      qV = iB(),
      qW = iA(),
      qX = mm(),
      qY = m9().aTypedArrayConstructor,
      qZ = mp()
    return (
      (lW = function (r0) {
        var r1,
          r2,
          r3,
          r4,
          r5,
          r6,
          r7,
          r8,
          r9 = qR(this),
          rb = qS(r0),
          rg = arguments.length,
          rj = rg > 1 ? arguments[1] : void 0,
          rk = void 0 !== rj,
          rm = qV(rb)
        if (rm && !qW(rm)) {
          for (
            r8 = (r7 = qU(rb, rm)).next, rb = [];
            !(r6 = qQ(r8, r7)).done;

          ) {
            rb.push(r6.value)
          }
        }
        for (
          rk && rg > 2 && (rj = qP(rj, arguments[2])),
            r2 = qT(rb),
            r3 = new (qY(r9))(r2),
            r4 = qX(r3),
            r1 = 0;
          r2 > r1;
          r1++
        ) {
          r5 = rk ? rj(rb[r1], r1) : rb[r1]
          r3[r1] = r4 ? qZ(r5) : +r5
        }
        return r3
      }),
      lW
    )
  }
  function mv() {
    if (lZ) {
      return lY
    }
    lZ = 1
    var qP = kM(),
      qQ = hL(),
      qR = bz(),
      qS = cv()('species'),
      qT = Array
    return (lY = function (qU) {
      var qV
      return (
        qP(qU) &&
          ((qV = qU.constructor),
          ((qQ(qV) && (qV === qT || qP(qV.prototype))) ||
            (qR(qV) && null === (qV = qV[qS]))) &&
            (qV = void 0)),
        void 0 === qV ? qT : qV
      )
    })
  }
  function mw() {
    if (m1) {
      return m0
    }
    m1 = 1
    var qP = mv()
    return (m0 = function (qQ, qR) {
      return new (qP(qQ))(0 === qR ? 0 : qR)
    })
  }
  function mx() {
    if (m3) {
      return m2
    }
    m3 = 1
    var qP = hP(),
      qQ = bm(),
      qR = bq(),
      qS = cm(),
      qT = dK(),
      qU = mw(),
      qV = qQ([].push),
      qW = function (qX) {
        var qY = 1 === qX,
          qZ = 2 === qX,
          r0 = 3 === qX,
          r1 = 4 === qX,
          r2 = 6 === qX,
          r3 = 7 === qX,
          r4 = 5 === qX || r2
        return function (r5, r6, r7, r8) {
          for (
            var r9,
              rb,
              rg = qS(r5),
              rj = qR(rg),
              rk = qT(rj),
              rm = qP(r6, r7),
              rp = 0,
              rq = r8 || qU,
              rv = qY ? rq(r5, rk) : qZ || r3 ? rq(r5, 0) : void 0;
            rk > rp;
            rp++
          ) {
            if ((r4 || rp in rj) && ((rb = rm((r9 = rj[rp]), rp, rg)), qX)) {
              if (qY) {
                rv[rp] = rb
              } else {
                if (rb) {
                  switch (qX) {
                    case 3:
                      return true
                    case 5:
                      return r9
                    case 6:
                      return rp
                    case 2:
                      qV(rv, r9)
                  }
                } else {
                  switch (qX) {
                    case 4:
                      return false
                    case 7:
                      qV(rv, r9)
                  }
                }
              }
            }
          }
          return r2 ? -1 : r0 || r1 ? r1 : rv
        }
      }
    return (m2 = {
      forEach: qW(0),
      map: qW(1),
      filter: qW(2),
      some: qW(3),
      every: qW(4),
      find: qW(5),
      findIndex: qW(6),
      filterReject: qW(7),
    })
  }
  function my() {
    if (m5) {
      return m4
    }
    m5 = 1
    var qP = dK()
    return (
      (m4 = function (qQ, qR, qS) {
        for (
          var qT = 0, qU = arguments.length > 2 ? qS : qP(qR), qV = new qQ(qU);
          qU > qT;

        ) {}
        return qV
      }),
      m4
    )
  }
  function mz() {
    if (m6) {
      return m8.exports
    }
    m6 = 1
    var qP = e7(),
      qQ = a4(),
      qR = av(),
      qS = ap(),
      qT = (function () {
        if (lJ) {
          return lI
        }
        lJ = 1
        var rV = a4(),
          rW = am(),
          rX = iF(),
          rY = m9().NATIVE_ARRAY_BUFFER_VIEWS,
          rZ = rV.ArrayBuffer,
          s0 = rV.Int8Array
        return (lI =
          !rY ||
          !rW(function () {
            s0(1)
          }) ||
          !rW(function () {
            new s0(-1)
          }) ||
          !rX(function (s1) {
            new s0()
            new s0(null)
            new s0(1.5)
            new s0(s1)
          }, true) ||
          rW(function () {
            return 1 !== new s0(new rZ(2), 1, void 0).length
          }))
      })(),
      qU = m9(),
      qV = lF(),
      qW = hK(),
      qX = bk(),
      qY = cM(),
      qZ = mb(),
      r0 = dJ(),
      r1 = lA(),
      r2 = mj(),
      r3 = mk(),
      r4 = cx(),
      r5 = cp(),
      r6 = g5(),
      r7 = bz(),
      r8 = bG(),
      r9 = f3(),
      rb = bB(),
      rg = fj(),
      rj = dN().f,
      rk = mq(),
      rm = mx().forEach,
      rp = hJ(),
      rq = hI(),
      rv = cL(),
      rw = cA(),
      rx = my(),
      ry = d8(),
      rz = lE(),
      rA = ry.get,
      rB = ry.set,
      rC = ry.enforce,
      rD = rv.f,
      rE = rw.f,
      rF = qQ.RangeError,
      rG = qV.ArrayBuffer,
      rH = rG.prototype,
      rI = qV.DataView,
      rJ = qU.NATIVE_ARRAY_BUFFER_VIEWS,
      rK = qU.TYPED_ARRAY_TAG,
      rL = qU.TypedArray,
      rM = qU.TypedArrayPrototype,
      rN = qU.isTypedArray,
      rQ = function (rV, rW) {
        rq(rV, rW, {
          configurable: true,
          get: function () {
            return rA(this)[rW]
          },
        })
      },
      rR = function (rV) {
        var rW
        return (
          rb(rH, rV) ||
          'ArrayBuffer' === (rW = r6(rV)) ||
          'SharedArrayBuffer' === rW
        )
      },
      rS = function (rV, rW) {
        return rN(rV) && !r8(rW) && rW in rV && qZ(+rW) && rW >= 0
      },
      rT = function (rV, rW) {
        return (rW = r4(rW)), rS(rV, rW) ? qX(2, rV[rW]) : rE(rV, rW)
      },
      rU = function (rV, rW, rX) {
        return (
          (rW = r4(rW)),
          !(rS(rV, rW) && r7(rX) && r5(rX, 'value')) ||
          r5(rX, 'get') ||
          r5(rX, 'set') ||
          rX.configurable ||
          (r5(rX, 'writable') && !rX.writable) ||
          (r5(rX, 'enumerable') && !rX.enumerable)
            ? rD(rV, rW, rX)
            : ((rV[rW] = rX.value), rV)
        )
      }
    return (
      qS
        ? (rJ ||
            ((rw.f = rT),
            (rv.f = rU),
            rQ(rM, 'buffer'),
            rQ(rM, 'byteOffset'),
            rQ(rM, 'byteLength'),
            rQ(rM, 'length')),
          qP(
            {
              target: 'Object',
              stat: true,
              forced: !rJ,
            },
            {
              getOwnPropertyDescriptor: rT,
              defineProperty: rU,
            }
          ),
          (m8.exports = function (rV, rW, rX) {
            var rY = rV.match(/\d+/)[0] / 8,
              rZ = rV + (rX ? 'Clamped' : '') + 'Array',
              s0 = 'get' + rV,
              s1 = 'set' + rV,
              s2 = qQ[rZ],
              s3 = s2,
              s4 = s3 && s3.prototype,
              s5 = { rZ: s3 },
              s6 = function (s8, s9) {
                rD(s8, s9, {
                  get: function () {
                    return (function (sb, sg) {
                      var sj = rA(sb)
                      return sj.view[s0](sg * rY + sj.byteOffset, true)
                    })(this, s9)
                  },
                  set: function (sb) {
                    return (function (sg, sj, sk) {
                      var sm = rA(sg)
                      sm.view[s1](
                        sj * rY + sm.byteOffset,
                        rX ? r3(sk) : sk,
                        true
                      )
                    })(this, s9, sb)
                  },
                  enumerable: true,
                })
              }
            rJ
              ? qT &&
                ((s3 = rW(function (s8, s9, sb, sg) {
                  return (
                    qW(s8, s4),
                    rz(
                      r7(s9)
                        ? rR(s9)
                          ? void 0 !== sg
                            ? new s2(s9, r2(sb, rY), sg)
                            : void 0 !== sb
                            ? new s2(s9, r2(sb, rY))
                            : new s2(s9)
                          : rN(s9)
                          ? rx(s3, s9)
                          : qR(rk, s3, s9)
                        : new s2(r1(s9)),
                      s8,
                      s3
                    )
                  )
                })),
                rg && rg(s3, rL),
                rm(rj(s2), function (s8) {
                  s8 in s3 || qY(s3, s8, s2[s8])
                }),
                (s3.prototype = s4))
              : ((s3 = rW(function (s8, s9, sb, sg) {
                  qW(s8, s4)
                  var sj,
                    sk,
                    sm,
                    sp = 0,
                    sq = 0
                  if (r7(s9)) {
                    if (!rR(s9)) {
                      return rN(s9) ? rx(s3, s9) : qR(rk, s3, s9)
                    }
                    sj = s9
                    sq = r2(sb, rY)
                    var sv = s9.byteLength
                    if (void 0 === sg) {
                      if (sv % rY) {
                        throw new rF('Wrong length')
                      }
                      if ((sk = sv - sq) < 0) {
                        throw new rF('Wrong length')
                      }
                    } else {
                      if ((sk = r0(sg) * rY) + sq > sv) {
                        throw new rF('Wrong length')
                      }
                    }
                    sm = sk / rY
                  } else {
                    sm = r1(s9)
                    sj = new rG((sk = sm * rY))
                  }
                  for (
                    rB(s8, {
                      buffer: sj,
                      byteOffset: sq,
                      byteLength: sk,
                      length: sm,
                      view: new rI(sj),
                    });
                    sp < sm;

                  ) {
                    s6(s8, sp++)
                  }
                })),
                rg && rg(s3, rL),
                (s4 = s3.prototype = r9(rM)))
            s4.constructor !== s3 && qY(s4, 'constructor', s3)
            rC(s4).TypedArrayConstructor = s3
            rK && qY(s4, rK, rZ)
            var s7 = s3 !== s2
            qP(
              {
                global: true,
                constructor: true,
                forced: s7,
                sham: !rJ,
              },
              s5
            )
            'BYTES_PER_ELEMENT' in s3 || qY(s3, 'BYTES_PER_ELEMENT', rY)
            'BYTES_PER_ELEMENT' in s4 || qY(s4, 'BYTES_PER_ELEMENT', rY)
            rp(rZ)
          }))
        : (m8.exports = function () {}),
      m8.exports
    )
  }
  m7 ||
    ((m7 = 1),
    mz()('Int32', function (qP) {
      return function (qQ, qR, qS) {
        return qP(this, qQ, qR, qS)
      }
    }))
  var mA,
    mB = {}
  !(function () {
    if (mA) {
      return mB
    }
    mA = 1
    var qP = m9(),
      qQ = lD(),
      qR = mp(),
      qS = g5(),
      qT = av(),
      qU = bm(),
      qV = am(),
      qW = qP.aTypedArray,
      qX = qP.exportTypedArrayMethod,
      qY = qU(''.slice)
    qX(
      'fill',
      function (qZ) {
        var r0 = arguments.length
        qW(this)
        var r1 = 'Big' === qY(qS(this), 0, 3) ? qR(qZ) : +qZ
        return qT(
          qQ,
          this,
          r1,
          r0 > 1 ? arguments[1] : void 0,
          r0 > 2 ? arguments[2] : void 0
        )
      },
      qV(function () {
        var qZ = 0
        return (
          new Int8Array(2).fill({
            valueOf: function () {
              return qZ++
            },
          }),
          1 !== qZ
        )
      })
    )
  })()
  var mC,
    mD = {}
  !(function () {
    if (mC) {
      return mD
    }
    mC = 1
    var qP = a4(),
      qQ = av(),
      qR = m9(),
      qS = dK(),
      qT = mj(),
      qU = cm(),
      qV = am(),
      qW = qP.RangeError,
      qX = qP.Int8Array,
      qY = qX && qX.prototype,
      qZ = qY && qY.set,
      r0 = qR.aTypedArray,
      r1 = qR.exportTypedArrayMethod,
      r2 = !qV(function () {
        var r4 = new Uint8ClampedArray(2)
        return (
          qQ(
            qZ,
            r4,
            {
              length: 1,
              0: 3,
            },
            1
          ),
          3 !== r4[1]
        )
      }),
      r3 =
        r2 &&
        qR.NATIVE_ARRAY_BUFFER_VIEWS &&
        qV(function () {
          var r4 = new qX(2)
          return r4.set(1), r4.set('2', 1), 0 !== r4[0] || 2 !== r4[1]
        })
    r1(
      'set',
      function (r4) {
        r0(this)
        var r5 = qT(arguments.length > 1 ? arguments[1] : void 0, 1),
          r6 = qU(r4)
        if (r2) {
          return qQ(qZ, this, r6, r5)
        }
        var r7 = this.length,
          r8 = qS(r6),
          r9 = 0
        if (r8 + r5 > r7) {
          throw new qW('Wrong length')
        }
        for (; r9 < r8; ) {
          this[r5 + r9] = r6[r9++]
        }
      },
      !r2 || r3
    )
  })()
  var mE,
    mF = {}
  !(function () {
    if (mE) {
      return mF
    }
    mE = 1
    var qP = a4(),
      qQ = hO(),
      qR = am(),
      qS = bI(),
      qT = jW(),
      qU = m9(),
      qV = kY(),
      qW = kZ(),
      qX = bD(),
      qY = l0(),
      qZ = qU.aTypedArray,
      r0 = qU.exportTypedArrayMethod,
      r1 = qP.Uint16Array,
      r2 = r1 && qQ(r1.prototype.sort),
      r3 = !(
        !r2 ||
        (qR(function () {
          r2(new r1(2), null)
        }) &&
          qR(function () {
            r2(new r1(2), {})
          }))
      ),
      r4 =
        !!r2 &&
        !qR(function () {
          if (qX) {
            return qX < 74
          }
          if (qV) {
            return qV < 67
          }
          if (qW) {
            return true
          }
          if (qY) {
            return qY < 602
          }
          var r5,
            r6,
            r7 = new r1(516),
            r8 = Array(516)
          for (r5 = 0; r5 < 516; r5++) {
            r6 = r5 % 4
            r7[r5] = 515 - r5
            r8[r5] = r5 - 2 * r6 + 3
          }
          for (
            r2(r7, function (r9, rb) {
              return ((r9 / 4) | 0) - ((rb / 4) | 0)
            }),
              r5 = 0;
            r5 < 516;
            r5++
          ) {
            if (r7[r5] !== r8[r5]) {
              return true
            }
          }
        })
    r0(
      'sort',
      function (r5) {
        return (
          void 0 !== r5 && qS(r5),
          r4
            ? r2(this, r5)
            : qT(
                qZ(this),
                (function (r6) {
                  return function (r7, r8) {
                    return void 0 !== r6
                      ? +r6(r7, r8) || 0
                      : r8 != r8
                      ? -1
                      : r7 != r7
                      ? 1
                      : 0 === r7 && 0 === r8
                      ? 1 / r7 > 0 && 1 / r8 < 0
                        ? 1
                        : -1
                      : r7 > r8
                  }
                })(r5)
              )
        )
      },
      !r4 || r3
    )
  })()
  var mG,
    mH = {}
  !(function () {
    if (mG) {
      return mH
    }
    mG = 1
    var qP = a4(),
      qQ = gC(),
      qR = m9(),
      qS = am(),
      qT = hQ(),
      qU = qP.Int8Array,
      qV = qR.aTypedArray,
      qW = qR.exportTypedArrayMethod,
      qX = [].toLocaleString,
      qY =
        !!qU &&
        qS(function () {
          qX.call(new qU(1))
        })
    qW(
      'toLocaleString',
      function () {
        return qQ(qX, qY ? qT(qV(this)) : qV(this), qT(arguments))
      },
      qS(function () {
        return [1, 2].toLocaleString() !== new qU([1, 2]).toLocaleString()
      }) ||
        !qS(function () {
          qU.prototype.toLocaleString.call([1, 2])
        })
    )
  })()
  var mI,
    mJ,
    mK = {}
  function mL() {
    if (mJ) {
      return mI
    }
    mJ = 1
    var qP = am()
    return (mI = !qP(function () {
      return Object.isExtensible(Object.preventExtensions({}))
    }))
  }
  var mM,
    mN,
    mO,
    mP,
    mQ,
    mR,
    mS,
    mT,
    mU,
    mV,
    mW,
    mX,
    mY = { exports: {} },
    mZ = {}
  function n0() {
    if (mM) {
      return mZ
    }
    mM = 1
    var qP = bp(),
      qQ = bx(),
      qR = dN().f,
      qS = hQ(),
      qT =
        'object' == typeof window && window && Object.getOwnPropertyNames
          ? Object.getOwnPropertyNames(window)
          : []
    return (
      (mZ.f = function (qU) {
        return qT && 'Window' === qP(qU)
          ? (function (qV) {
              try {
                return qR(qV)
              } catch (qW) {
                return qS(qT)
              }
            })(qU)
          : qR(qQ(qU))
      }),
      mZ
    )
  }
  function n1() {
    if (mQ) {
      return mP
    }
    mQ = 1
    var qP = am(),
      qQ = bz(),
      qR = bp(),
      qS = (function () {
        if (mO) {
          return mN
        }
        mO = 1
        var qV = am()
        return (mN = qV(function () {
          if ('function' == typeof ArrayBuffer) {
            var qW = new ArrayBuffer(8)
            Object.isExtensible(qW) &&
              Object.defineProperty(qW, 'a', { value: 8 })
          }
        }))
      })(),
      qT = Object.isExtensible,
      qU = qP(function () {})
    return (mP =
      qU || qS
        ? function (qV) {
            return (
              !!qQ(qV) && (!qS || 'ArrayBuffer' !== qR(qV)) && (!qT || qT(qV))
            )
          }
        : qT)
  }
  function n2() {
    if (mR) {
      return mY.exports
    }
    mR = 1
    var qP = e7(),
      qQ = bm(),
      qR = d7(),
      qS = bz(),
      qT = cp(),
      qU = cL().f,
      qV = dN(),
      qW = n0(),
      qX = n1(),
      qY = cq(),
      qZ = mL(),
      r0 = false,
      r1 = qY('meta'),
      r2 = 0,
      r3 = function (r5) {
        qU(r5, r1, {
          value: {
            objectID: 'O' + r2++,
            weakData: {},
          },
        })
      },
      r4 = (mY.exports = {
        enable: function () {
          r0 = true
          var r5 = qV.f,
            r6 = qQ([].splice),
            r7 = { r1: 1 }
          r5(r7).length &&
            ((qV.f = function (r8) {
              for (var r9 = r5(r8), rb = 0, rg = r9.length; rb < rg; rb++) {
                if (r9[rb] === r1) {
                  r6(r9, rb, 1)
                  break
                }
              }
              return r9
            }),
            qP(
              {
                target: 'Object',
                stat: true,
                forced: true,
              },
              { getOwnPropertyNames: qW.f }
            ))
        },
        fastKey: function (r5, r6) {
          if (!qS(r5)) {
            return 'symbol' == typeof r5
              ? r5
              : ('string' == typeof r5 ? 'S' : 'P') + r5
          }
          if (!qT(r5, r1)) {
            if (!qX(r5)) {
              return 'F'
            }
            if (!r6) {
              return 'E'
            }
            r3(r5)
          }
          return r5[r1].objectID
        },
        getWeakData: function (r5, r6) {
          if (!qT(r5, r1)) {
            if (!qX(r5)) {
              return true
            }
            if (!r6) {
              return false
            }
            r3(r5)
          }
          return r5[r1].weakData
        },
        onFreeze: function (r5) {
          return qZ && r0 && qX(r5) && !qT(r5, r1) && r3(r5), r5
        },
      })
    return (qR[r1] = true), mY.exports
  }
  function n3() {
    if (mT) {
      return mS
    }
    mT = 1
    var qP = e7(),
      qQ = a4(),
      qR = bm(),
      qS = e6(),
      qT = db(),
      qU = n2(),
      qV = iE(),
      qW = hK(),
      qX = by(),
      qY = bv(),
      qZ = bz(),
      r0 = am(),
      r1 = iF(),
      r2 = f8(),
      r3 = lE()
    return (
      (mS = function (r4, r5, r6) {
        var r7 = -1 !== r4.indexOf('Map'),
          r8 = -1 !== r4.indexOf('Weak'),
          r9 = r7 ? 'set' : 'add',
          rb = qQ[r4],
          rg = rb && rb.prototype,
          rj = rb,
          rk = {},
          rm = function (ry) {
            var rz = qR(rg[ry])
            qT(
              rg,
              ry,
              'add' === ry
                ? function (rA) {
                    return rz(this, 0 === rA ? 0 : rA), this
                  }
                : 'delete' === ry
                ? function (rA) {
                    return !(r8 && !qZ(rA)) && rz(this, 0 === rA ? 0 : rA)
                  }
                : 'get' === ry
                ? function (rA) {
                    return r8 && !qZ(rA) ? void 0 : rz(this, 0 === rA ? 0 : rA)
                  }
                : 'has' === ry
                ? function (rA) {
                    return !(r8 && !qZ(rA)) && rz(this, 0 === rA ? 0 : rA)
                  }
                : function (rA, rB) {
                    return rz(this, 0 === rA ? 0 : rA, rB), this
                  }
            )
          }
        if (
          qS(
            r4,
            !qX(rb) ||
              !(
                r8 ||
                (rg.forEach &&
                  !r0(function () {
                    new rb().entries().next()
                  }))
              )
          )
        ) {
          rj = r6.getConstructor(r5, r4, r7, r9)
          qU.enable()
        } else {
          if (qS(r4, true)) {
            var rp = new rj(),
              rq = rp[r9](r8 ? {} : -0, 1) !== rp,
              rv = r0(function () {
                rp.has(1)
              }),
              rw = r1(function (ry) {
                new rb(ry)
              }),
              rx =
                !r8 &&
                r0(function () {
                  for (var ry = new rb(), rz = 5; rz--; ) {
                    ry[r9](rz, rz)
                  }
                  return !ry.has(-0)
                })
            rw ||
              (((rj = r5(function (ry, rz) {
                qW(ry, rg)
                var rA = r3(new rb(), ry, rj)
                return (
                  qY(rz) ||
                    qV(rz, rA[r9], {
                      that: rA,
                      AS_ENTRIES: r7,
                    }),
                  rA
                )
              })).prototype = rg),
              (rg.constructor = rj))
            ;(rv || rx) && (rm('delete'), rm('has'), r7 && rm('get'))
            ;(rx || rq) && rm(r9)
            r8 && rg.clear && delete rg.clear
          }
        }
        return (
          (rk[r4] = rj),
          qP(
            {
              global: true,
              constructor: true,
              forced: rj !== rb,
            },
            rk
          ),
          r2(rj, r4),
          r8 || r6.setStrong(rj, r4, r7),
          rj
        )
      }),
      mS
    )
  }
  function n4() {
    if (mV) {
      return mU
    }
    mV = 1
    var qP = bm(),
      qQ = jV(),
      qR = n2().getWeakData,
      qS = hK(),
      qT = cK(),
      qU = bv(),
      qV = bz(),
      qW = iE(),
      qX = mx(),
      qY = cp(),
      qZ = d8(),
      r0 = qZ.set,
      r1 = qZ.getterFor,
      r2 = qX.find,
      r3 = qX.findIndex,
      r4 = qP([].splice),
      r5 = 0,
      r6 = function (r9) {
        return r9.frozen || (r9.frozen = new r7())
      },
      r7 = function () {
        this.entries = []
      },
      r8 = function (r9, rb) {
        return r2(r9.entries, function (rg) {
          return rg[0] === rb
        })
      }
    return (
      (r7.prototype = {
        get: function (r9) {
          var rb = r8(this, r9)
          if (rb) {
            return rb[1]
          }
        },
        has: function (r9) {
          return !!r8(this, r9)
        },
        set: function (r9, rb) {
          var rg = r8(this, r9)
          rg ? (rg[1] = rb) : this.entries.push([r9, rb])
        },
        delete: function (r9) {
          var rb = r3(this.entries, function (rg) {
            return rg[0] === r9
          })
          return ~rb && r4(this.entries, rb, 1), !!~rb
        },
      }),
      (mU = {
        getConstructor: function (r9, rb, rg, rj) {
          var rk = r9(function (rv, rw) {
              qS(rv, rm)
              r0(rv, {
                type: rb,
                id: r5++,
                frozen: void 0,
              })
              qU(rw) ||
                qW(rw, rv[rj], {
                  that: rv,
                  AS_ENTRIES: rg,
                })
            }),
            rm = rk.prototype,
            rp = r1(rb),
            rq = function (rv, rw, rx) {
              var ry = rp(rv),
                rz = qR(qT(rw), true)
              return true === rz ? r6(ry).set(rw, rx) : (rz[ry.id] = rx), rv
            }
          return (
            qQ(rm, {
              delete: function (rv) {
                var rw = rp(this)
                if (!qV(rv)) {
                  return false
                }
                var rx = qR(rv)
                return true === rx
                  ? r6(rw).delete(rv)
                  : rx && qY(rx, rw.id) && delete rx[rw.id]
              },
              has: function (rv) {
                var rw = rp(this)
                if (!qV(rv)) {
                  return false
                }
                var rx = qR(rv)
                return true === rx ? r6(rw).has(rv) : rx && qY(rx, rw.id)
              },
            }),
            qQ(
              rm,
              rg
                ? {
                    get: function (rv) {
                      var rw = rp(this)
                      if (qV(rv)) {
                        var rx = qR(rv)
                        return true === rx
                          ? r6(rw).get(rv)
                          : rx
                          ? rx[rw.id]
                          : void 0
                      }
                    },
                    set: function (rv, rw) {
                      return rq(this, rv, rw)
                    },
                  }
                : {
                    add: function (rv) {
                      return rq(this, rv, true)
                    },
                  }
            ),
            rk
          )
        },
      })
    )
  }
  mX ||
    ((mX = 1),
    (function () {
      if (mW) {
        return mK
      }
      mW = 1
      var qP,
        qQ = mL(),
        qR = a4(),
        qS = bm(),
        qT = jV(),
        qU = n2(),
        qV = n3(),
        qW = n4(),
        qX = bz(),
        qY = d8().enforce,
        qZ = am(),
        r0 = d5(),
        r1 = Object,
        r2 = Array.isArray,
        r3 = r1.isExtensible,
        r4 = r1.isFrozen,
        r5 = r1.isSealed,
        r6 = r1.freeze,
        r7 = r1.seal,
        r8 = !qR.ActiveXObject && 'ActiveXObject' in qR,
        r9 = function (rq) {
          return function () {
            return rq(this, arguments.length ? arguments[0] : void 0)
          }
        },
        rb = qV('WeakMap', r9, qW),
        rg = rb.prototype,
        rj = qS(rg.set)
      if (r0) {
        if (r8) {
          qP = qW.getConstructor(r9, 'WeakMap', true)
          qU.enable()
          var rk = qS(rg.delete),
            rm = qS(rg.has),
            rp = qS(rg.get)
          qT(rg, {
            delete: function (rq) {
              if (qX(rq) && !r3(rq)) {
                var rv = qY(this)
                return (
                  rv.frozen || (rv.frozen = new qP()),
                  rk(this, rq) || rv.frozen.delete(rq)
                )
              }
              return rk(this, rq)
            },
            has: function (rq) {
              if (qX(rq) && !r3(rq)) {
                var rv = qY(this)
                return (
                  rv.frozen || (rv.frozen = new qP()),
                  rm(this, rq) || rv.frozen.has(rq)
                )
              }
              return rm(this, rq)
            },
            get: function (rq) {
              if (qX(rq) && !r3(rq)) {
                var rv = qY(this)
                return (
                  rv.frozen || (rv.frozen = new qP()),
                  rm(this, rq) ? rp(this, rq) : rv.frozen.get(rq)
                )
              }
              return rp(this, rq)
            },
            set: function (rq, rv) {
              if (qX(rq) && !r3(rq)) {
                var rw = qY(this)
                rw.frozen || (rw.frozen = new qP())
                rm(this, rq) ? rj(this, rq, rv) : rw.frozen.set(rq, rv)
              } else {
                rj(this, rq, rv)
              }
              return this
            },
          })
        } else {
          qQ &&
            qZ(function () {
              var rq = r6([])
              return rj(new rb(), rq, 1), !r4(rq)
            }) &&
            qT(rg, {
              set: function (rq, rv) {
                var rw
                return (
                  r2(rq) && (r4(rq) ? (rw = r6) : r5(rq) && (rw = r7)),
                  rj(this, rq, rv),
                  rw && rw(rq),
                  this
                )
              },
            })
        }
      }
    })())
  var n5,
    n6,
    n7 = {}
  n6 ||
    ((n6 = 1),
    (function () {
      if (n5) {
        return n7
      }
      n5 = 1
      var qP = e7(),
        qQ = a4()
      qP(
        {
          global: true,
          forced: qQ.globalThis !== qQ,
        },
        { globalThis: qQ }
      )
    })())
  const n8 =
    'undefined' != typeof window
      ? window
      : 'undefined' != typeof globalThis
      ? globalThis
      : global
  function n9(qP, qQ) {
    qP.appendChild(qQ)
  }
  function nb(qP, qQ, qR) {
    qP.insertBefore(qQ, qR || null)
  }
  function ng(qP) {
    qP.parentNode && qP.parentNode.removeChild(qP)
  }
  function nj(qP) {
    return document.createElement(qP)
  }
  function nk(qP) {
    return document.createElementNS('http://www.w3.org/2000/svg', qP)
  }
  function nm(qP) {
    return document.createTextNode(qP)
  }
  function np() {
    return nm(' ')
  }
  function nq(qP, qQ, qR, qS) {
    return (
      qP.addEventListener(qQ, qR, qS), () => qP.removeEventListener(qQ, qR, qS)
    )
  }
  function nv(qP, qQ, qR) {
    null == qR
      ? qP.removeAttribute(qQ)
      : qP.getAttribute(qQ) !== qR && qP.setAttribute(qQ, qR)
  }
  function nw(qP, qQ) {
    qQ = '' + qQ
    qP.data !== qQ && (qP.data = qQ)
  }
  function nx(qP, qQ, qR, qS) {
    null == qR ? qP.style.removeProperty(qQ) : qP.style.setProperty(qQ, qR, '')
  }
  let ny, nz
  function nA() {
    if (void 0 === ny) {
      ny = false
      try {
        'undefined' != typeof window && window.parent && window.parent.document
      } catch (qP) {
        ny = true
      }
    }
    return ny
  }
  function nB(qP, qQ, qR) {
    qP.classList.toggle(qQ, !!qR)
  }
  function nC(qP) {
    nz = qP
  }
  function nD() {
    if (!nz) {
      throw new Error('Function called outside component initialization')
    }
    return nz
  }
  function nE(qP) {
    nD()['$$'].on_mount.push(qP)
  }
  function nF() {
    const qP = nD()
    return (qQ, qR, { cancelable: qS = false } = {}) => {
      const qT = qP['$$'].callbacks[qQ]
      if (qT) {
        const qU = (function (
          qV,
          qW,
          { bubbles: qX = false, cancelable: qY = false } = {}
        ) {
          return new CustomEvent(qV, {
            detail: qW,
            bubbles: qX,
            cancelable: qY,
          })
        })(qQ, qR, { cancelable: qS })
        return (
          qT.slice().forEach((qV) => {
            qV.call(qP, qU)
          }),
          !qU.defaultPrevented
        )
      }
      return true
    }
  }
  const nG = [],
    nH = []
  let nI = []
  const nJ = [],
    nK = Promise.resolve()
  let nL = false
  function nM() {
    nL || ((nL = true), nK.then(nR))
  }
  function nN() {
    return nM(), nK
  }
  function nO(qP) {
    nI.push(qP)
  }
  const nP = new Set()
  let nQ = 0
  function nR() {
    if (0 !== nQ) {
      return
    }
    const qP = nz
    do {
      try {
        for (; nQ < nG.length; ) {
          const qQ = nG[nQ]
          nQ++
          nC(qQ)
          nS(qQ['$$'])
        }
      } catch (qR) {
        throw ((nG.length = 0), (nQ = 0), qR)
      }
      for (nC(null), nG.length = 0, nQ = 0; nH.length; ) {
        nH.pop()()
      }
      for (let qS = 0; qS < nI.length; qS += 1) {
        const qT = nI[qS]
        nP.has(qT) || (nP.add(qT), qT())
      }
      nI.length = 0
    } while (nG.length)
    for (; nJ.length; ) {
      nJ.pop()()
    }
    nL = false
    nP.clear()
    nC(qP)
  }
  function nS(qP) {
    if (null !== qP.fragment) {
      qP.update()
      kx(qP.before_update)
      const qQ = qP.dirty
      qP.dirty = [-1]
      qP.fragment && qP.fragment.p(qP.ctx, qQ)
      qP.after_update.forEach(nO)
    }
  }
  const nT = new Set()
  let nU
  function nV() {
    nU = {
      r: 0,
      c: [],
      p: nU,
    }
  }
  function nW() {
    nU.r || kx(nU.c)
    nU = nU.p
  }
  function nX(qP, qQ) {
    qP && qP.i && (nT.delete(qP), qP.i(qQ))
  }
  function nY(qP, qQ, qR, qS) {
    if (qP && qP.o) {
      if (nT.has(qP)) {
        return
      }
      nT.add(qP)
      nU.c.push(() => {
        nT.delete(qP)
        qS && (qR && qP.d(1), qS())
      })
      qP.o(qQ)
    } else {
      qS && qS()
    }
  }
  function nZ(qP) {
    qP && qP.c()
  }
  function o0(qP, qQ, qR) {
    const { fragment: qS, after_update: qT } = qP['$$']
    qS && qS.m(qQ, qR)
    nO(() => {
      const qU = qP['$$'].on_mount.map(kv).filter(ky)
      qP['$$'].on_destroy ? qP['$$'].on_destroy.push(...qU) : kx(qU)
      qP['$$'].on_mount = []
    })
    qT.forEach(nO)
  }
  function o1(qP, qQ) {
    const qR = qP['$$']
    null !== qR.fragment &&
      (!(function (qS) {
        const qT = [],
          qU = []
        nI.forEach((qV) => (-1 === qS.indexOf(qV) ? qT.push(qV) : qU.push(qV)))
        qU.forEach((qV) => qV())
        nI = qT
      })(qR.after_update),
      kx(qR.on_destroy),
      qR.fragment && qR.fragment.d(qQ),
      (qR.on_destroy = qR.fragment = null),
      (qR.ctx = []))
  }
  function o2(qP, qQ, qR, qS, qT, qU, qV = null, qW = [-1]) {
    const qX = nz
    nC(qP)
    const qY = (qP['$$'] = {
      fragment: null,
      ctx: [],
      props: qU,
      update: kq,
      not_equal: qT,
      bound: kw(),
      on_mount: [],
      on_destroy: [],
      on_disconnect: [],
      before_update: [],
      after_update: [],
      context: new Map(qQ.context || (qX ? qX['$$'].context : [])),
      callbacks: kw(),
      dirty: qW,
      skip_bound: false,
      root: qQ.target || qX['$$'].root,
    })
    qV && qV(qY.root)
    let qZ = false
    if (
      ((qY.ctx = qR
        ? qR(qP, qQ.props || {}, (r0, r1, ...r2) => {
            const r3 = r2.length ? r2[0] : r1
            return (
              qY.ctx &&
                qT(qY.ctx[r0], (qY.ctx[r0] = r3)) &&
                (!qY.skip_bound && qY.bound[r0] && qY.bound[r0](r3),
                qZ &&
                  (function (r4, r5) {
                    ;-1 === r4['$$'].dirty[0] &&
                      (nG.push(r4), nM(), r4['$$'].dirty.fill(0))
                    r4['$$'].dirty[(r5 / 31) | 0] |= 1 << r5 % 31
                  })(qP, r0)),
              r1
            )
          })
        : []),
      qY.update(),
      (qZ = true),
      kx(qY.before_update),
      (qY.fragment = !!qS && qS(qY.ctx)),
      qQ.target)
    ) {
      if (qQ.hydrate) {
        const r0 = (function (r1) {
          return Array.from(r1.childNodes)
        })(qQ.target)
        qY.fragment && qY.fragment.l(r0)
        r0.forEach(ng)
      } else {
        qY.fragment && qY.fragment.c()
      }
      qQ.intro && nX(qP['$$'].fragment)
      o0(qP, qQ.target, qQ.anchor)
      nR()
    }
    nC(qX)
  }
  class o3 {
    constructor() {
      kH(this, '$$', void 0)
      kH(this, '$$set', void 0)
    }
    ['$destroy']() {
      o1(this, 1)
      this['$destroy'] = kq
    }
    ['$on'](qP, qQ) {
      if (!ky(qQ)) {
        return kq
      }
      const qR = this['$$'].callbacks[qP] || (this['$$'].callbacks[qP] = [])
      return (
        qR.push(qQ),
        () => {
          const qS = qR.indexOf(qQ)
          ;-1 !== qS && qR.splice(qS, 1)
        }
      )
    }
    ['$set'](qP) {
      var qQ
      this['$$set'] &&
        ((qQ = qP), 0 !== Object.keys(qQ).length) &&
        ((this['$$'].skip_bound = true),
        this['$$set'](qP),
        (this['$$'].skip_bound = false))
    }
  }
  var o4, o5
  'undefined' != typeof window &&
    (window['__svelte'] || (window['__svelte'] = { v: new Set() })).v.add('4')
  ;(function (qP) {
    qP.Slide = 'slide'
    qP.Audio = 'audio'
    qP.PASSIVE = 'passive'
  })(o4 || (o4 = {}))
  ;(function (qP) {
    qP.INLINE = 'inline'
    qP.HIDDEN = 'hidden'
    qP.POPUP = 'popup'
  })(o5 || (o5 = {}))
  const o6 = (qP) => new Promise((qQ) => setTimeout(qQ, 1000 * qP))
  var o7,
    o8 = {}
  !(function () {
    if (o7) {
      return o8
    }
    o7 = 1
    var qP = e7(),
      qQ = a4(),
      qR = lF(),
      qS = hJ(),
      qU = qR.ArrayBuffer
    qP(
      {
        global: true,
        constructor: true,
        forced: qQ.ArrayBuffer !== qU,
      },
      { ArrayBuffer: qU }
    )
    qS('ArrayBuffer')
  })()
  var o9
  o9 ||
    ((o9 = 1),
    mz()('Uint8', function (qP) {
      return function (qQ, qR, qS) {
        return qP(this, qQ, qR, qS)
      }
    }))
  var ob = Uint8Array,
    og = Uint16Array,
    oj = Int32Array,
    ok = new ob([
      0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5,
      5, 5, 5, 0, 0, 0, 0,
    ]),
    om = new ob([
      0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10,
      11, 11, 12, 12, 13, 13, 0, 0,
    ]),
    op = new ob([
      16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15,
    ]),
    oq = function (qP, qQ) {
      for (var qR = new og(31), qS = 0; qS < 31; ++qS) {
        qR[qS] = qQ += 1 << qP[qS - 1]
      }
      var qT = new oj(qR[30])
      for (qS = 1; qS < 30; ++qS) {
        for (var qU = qR[qS]; qU < qR[qS + 1]; ++qU) {
          qT[qU] = ((qU - qR[qS]) << 5) | qS
        }
      }
      return {
        b: qR,
        r: qT,
      }
    },
    ov = oq(ok, 2),
    ow = ov.b,
    ox = ov.r
  ow[28] = 258
  ox[258] = 28
  for (var oy = oq(om, 0).r, oz = new og(32768), oA = 0; oA < 32768; ++oA) {
    var oB = ((43690 & oA) >> 1) | ((21845 & oA) << 1)
    oB =
      ((61680 & (oB = ((52428 & oB) >> 2) | ((13107 & oB) << 2))) >> 4) |
      ((3855 & oB) << 4)
    oz[oA] = (((65280 & oB) >> 8) | ((255 & oB) << 8)) >> 1
  }
  var oC = function (qP, qQ, qR) {
      for (var qS = qP.length, qT = 0, qU = new og(qQ); qT < qS; ++qT) {
        qP[qT] && ++qU[qP[qT] - 1]
      }
      var qV,
        qW = new og(qQ)
      for (qT = 1; qT < qQ; ++qT) {
        qW[qT] = (qW[qT - 1] + qU[qT - 1]) << 1
      }
      if (qR) {
        qV = new og(1 << qQ)
        var qX = 15 - qQ
        for (qT = 0; qT < qS; ++qT) {
          if (qP[qT]) {
            for (
              var qY = (qT << 4) | qP[qT],
                qZ = qQ - qP[qT],
                r0 = qW[qP[qT] - 1]++ << qZ,
                r1 = r0 | ((1 << qZ) - 1);
              r0 <= r1;
              ++r0
            ) {
              qV[oz[r0] >> qX] = qY
            }
          }
        }
      } else {
        for (qV = new og(qS), qT = 0; qT < qS; ++qT) {
          qP[qT] && (qV[qT] = oz[qW[qP[qT] - 1]++] >> (15 - qP[qT]))
        }
      }
      return qV
    },
    oD = new ob(288)
  for (oA = 0; oA < 144; ++oA) {
    oD[oA] = 8
  }
  for (oA = 144; oA < 256; ++oA) {
    oD[oA] = 9
  }
  for (oA = 256; oA < 280; ++oA) {
    oD[oA] = 7
  }
  for (oA = 280; oA < 288; ++oA) {
    oD[oA] = 8
  }
  var oE = new ob(32)
  for (oA = 0; oA < 32; ++oA) {
    oE[oA] = 5
  }
  var oF = oC(oD, 9, 0),
    oG = oC(oE, 5, 0),
    oH = function (qP) {
      return ((qP + 7) / 8) | 0
    },
    oI = function (qP, qQ, qR) {
      return (
        (null == qR || qR > qP.length) && (qR = qP.length),
        new ob(qP.subarray(qQ, qR))
      )
    },
    oJ = function (qP, qQ, qR) {
      qR <<= 7 & qQ
      var qS = (qQ / 8) | 0
      qP[qS] |= qR
      qP[qS + 1] |= qR >> 8
    },
    oK = function (qP, qQ, qR) {
      qR <<= 7 & qQ
      var qS = (qQ / 8) | 0
      qP[qS] |= qR
      qP[qS + 1] |= qR >> 8
      qP[qS + 2] |= qR >> 16
    },
    oL = function (qP, qQ) {
      for (var qR = [], qS = 0; qS < qP.length; ++qS) {
        qP[qS] &&
          qR.push({
            s: qS,
            f: qP[qS],
          })
      }
      var qT = qR.length,
        qU = qR.slice()
      if (!qT) {
        return {
          t: oS,
          l: 0,
        }
      }
      if (1 == qT) {
        var qV = new ob(qR[0].s + 1)
        return (
          (qV[qR[0].s] = 1),
          {
            t: qV,
            l: 1,
          }
        )
      }
      qR.sort(function (rb, rg) {
        return rb.f - rg.f
      })
      qR.push({
        s: -1,
        f: 25001,
      })
      var qW = qR[0],
        qX = qR[1],
        qY = 0,
        qZ = 1,
        r0 = 2
      for (
        qR[0] = {
          s: -1,
          f: qW.f + qX.f,
          l: qW,
          r: qX,
        };
        qZ != qT - 1;

      ) {
        qW = qR[qR[qY].f < qR[r0].f ? qY++ : r0++]
        qX = qR[qY != qZ && qR[qY].f < qR[r0].f ? qY++ : r0++]
        qR[qZ++] = {
          s: -1,
          f: qW.f + qX.f,
          l: qW,
          r: qX,
        }
      }
      var r1 = qU[0].s
      for (qS = 1; qS < qT; ++qS) {
        qU[qS].s > r1 && (r1 = qU[qS].s)
      }
      var r2 = new og(r1 + 1),
        r3 = oM(qR[qZ - 1], r2, 0)
      if (r3 > qQ) {
        qS = 0
        var r4 = 0,
          r5 = r3 - qQ,
          r6 = 1 << r5
        for (
          qU.sort(function (rb, rg) {
            return r2[rg.s] - r2[rb.s] || rb.f - rg.f
          });
          qS < qT;
          ++qS
        ) {
          var r7 = qU[qS].s
          if (!(r2[r7] > qQ)) {
            break
          }
          r4 += r6 - (1 << (r3 - r2[r7]))
        }
        for (r4 >>= r5; r4 > 0; ) {
          var r8 = qU[qS].s
          r2[r8] < qQ ? (r4 -= 1 << (qQ - r2[r8]++ - 1)) : ++qS
        }
        for (; qS >= 0 && r4; --qS) {
          var r9 = qU[qS].s
          r2[r9] == qQ && (--r2[r9], ++r4)
        }
        r3 = qQ
      }
      return {
        t: new ob(r2),
        l: r3,
      }
    },
    oM = function (qP, qQ, qR) {
      return -1 == qP.s
        ? Math.max(oM(qP.l, qQ, qR + 1), oM(qP.r, qQ, qR + 1))
        : (qQ[qP.s] = qR)
    },
    oN = function (qP) {
      for (var qQ = qP.length; qQ && !qP[--qQ]; ) {}
      for (
        var qR = new og(++qQ),
          qS = 0,
          qT = qP[0],
          qU = 1,
          qV = function (qX) {
            qR[qS++] = qX
          },
          qW = 1;
        qW <= qQ;
        ++qW
      ) {
        if (qP[qW] == qT && qW != qQ) {
          ++qU
        } else {
          if (!qT && qU > 2) {
            for (; qU > 138; qU -= 138) {
              qV(32754)
            }
            qU > 2 &&
              (qV(qU > 10 ? ((qU - 11) << 5) | 28690 : ((qU - 3) << 5) | 12305),
              (qU = 0))
          } else {
            if (qU > 3) {
              for (qV(qT), --qU; qU > 6; qU -= 6) {
                qV(8304)
              }
              qU > 2 && (qV(((qU - 3) << 5) | 8208), (qU = 0))
            }
          }
          for (; qU--; ) {
            qV(qT)
          }
          qU = 1
          qT = qP[qW]
        }
      }
      return {
        c: qR.subarray(0, qS),
        n: qQ,
      }
    },
    oO = function (qP, qQ) {
      for (var qR = 0, qS = 0; qS < qQ.length; ++qS) {
        qR += qP[qS] * qQ[qS]
      }
      return qR
    },
    oP = function (qP, qQ, qR) {
      var qS = qR.length,
        qT = oH(qQ + 2)
      qP[qT] = 255 & qS
      qP[qT + 1] = qS >> 8
      qP[qT + 2] = 255 ^ qP[qT]
      qP[qT + 3] = 255 ^ qP[qT + 1]
      for (var qU = 0; qU < qS; ++qU) {
        qP[qT + qU + 4] = qR[qU]
      }
      return 8 * (qT + 4 + qS)
    },
    oQ = function (qP, qQ, qR, qS, qT, qU, qV, qW, qX, qY, qZ) {
      oJ(qQ, qZ++, qR)
      ++qT[256]
      for (
        var r0 = oL(qT, 15),
          r1 = r0.t,
          r2 = r0.l,
          r3 = oL(qU, 15),
          r4 = r3.t,
          r5 = r3.l,
          r6 = oN(r1),
          r7 = r6.c,
          r8 = r6.n,
          r9 = oN(r4),
          rb = r9.c,
          rg = r9.n,
          rj = new og(19),
          rk = 0;
        rk < r7.length;
        ++rk
      ) {
        ++rj[31 & r7[rk]]
      }
      for (rk = 0; rk < rb.length; ++rk) {
        ++rj[31 & rb[rk]]
      }
      for (
        var rm = oL(rj, 7), rp = rm.t, rq = rm.l, rv = 19;
        rv > 4 && !rp[op[rv - 1]];
        --rv
      ) {}
      var rw,
        rx,
        ry,
        rz,
        rA = (qY + 5) << 3,
        rB = oO(qT, oD) + oO(qU, oE) + qV,
        rC =
          oO(qT, r1) +
          oO(qU, r4) +
          qV +
          14 +
          3 * rv +
          oO(rj, rp) +
          2 * rj[16] +
          3 * rj[17] +
          7 * rj[18]
      if (qX >= 0 && rA <= rB && rA <= rC) {
        return oP(qQ, qZ, qP.subarray(qX, qX + qY))
      }
      if ((oJ(qQ, qZ, 1 + (rC < rB)), (qZ += 2), rC < rB)) {
        rw = oC(r1, r2, 0)
        rx = r1
        ry = oC(r4, r5, 0)
        rz = r4
        var rD = oC(rp, rq, 0)
        oJ(qQ, qZ, r8 - 257)
        oJ(qQ, qZ + 5, rg - 1)
        oJ(qQ, qZ + 10, rv - 4)
        qZ += 14
        for (rk = 0; rk < rv; ++rk) {
          oJ(qQ, qZ + 3 * rk, rp[op[rk]])
        }
        qZ += 3 * rv
        for (var rE = [r7, rb], rF = 0; rF < 2; ++rF) {
          var rG = rE[rF]
          for (rk = 0; rk < rG.length; ++rk) {
            var rH = 31 & rG[rk]
            oJ(qQ, qZ, rD[rH])
            qZ += rp[rH]
            rH > 15 && (oJ(qQ, qZ, (rG[rk] >> 5) & 127), (qZ += rG[rk] >> 12))
          }
        }
      } else {
        rw = oF
        rx = oD
        ry = oG
        rz = oE
      }
      for (rk = 0; rk < qW; ++rk) {
        var rI = qS[rk]
        if (rI > 255) {
          oK(qQ, qZ, rw[(rH = (rI >> 18) & 31) + 257])
          qZ += rx[rH + 257]
          rH > 7 && (oJ(qQ, qZ, (rI >> 23) & 31), (qZ += ok[rH]))
          var rJ = 31 & rI
          oK(qQ, qZ, ry[rJ])
          qZ += rz[rJ]
          rJ > 3 && (oK(qQ, qZ, (rI >> 5) & 8191), (qZ += om[rJ]))
        } else {
          oK(qQ, qZ, rw[rI])
          qZ += rx[rI]
        }
      }
      return oK(qQ, qZ, rw[256]), qZ + rx[256]
    },
    oR = new oj([
      65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632,
    ]),
    oS = new ob(0),
    oT = (function () {
      for (var qP = new Int32Array(256), qQ = 0; qQ < 256; ++qQ) {
        for (var qR = qQ, qS = 9; --qS; ) {
          qR = (1 & qR && -306674912) ^ (qR >>> 1)
        }
        qP[qQ] = qR
      }
      return qP
    })(),
    oU = function (qP, qQ, qR, qS, qT) {
      if (!qT && ((qT = { l: 1 }), qQ.dictionary)) {
        var qU = qQ.dictionary.subarray(-32768),
          qV = new ob(qU.length + qP.length)
        qV.set(qU)
        qV.set(qP, qU.length)
        qP = qV
        qT.w = qU.length
      }
      return (function (qW, qX, qY, qZ, r0, r1) {
        var r2 = r1.z || qW.length,
          r3 = new ob(qZ + r2 + 5 * (1 + Math.ceil(r2 / 7000)) + r0),
          r4 = r3.subarray(qZ, r3.length - r0),
          r5 = r1.l,
          r6 = 7 & (r1.r || 0)
        if (qX) {
          r6 && (r4[0] = r1.r >> 3)
          for (
            var r7 = oR[qX - 1],
              r8 = r7 >> 13,
              r9 = 8191 & r7,
              rb = (1 << qY) - 1,
              rg = r1.p || new og(32768),
              rj = r1.h || new og(rb + 1),
              rk = Math.ceil(qY / 3),
              rm = 2 * rk,
              rp = function (rX) {
                return (qW[rX] ^ (qW[rX + 1] << rk) ^ (qW[rX + 2] << rm)) & rb
              },
              rq = new oj(25000),
              rv = new og(288),
              rw = new og(32),
              rx = 0,
              ry = 0,
              rz = r1.i || 0,
              rA = 0,
              rB = r1.w || 0,
              rC = 0;
            rz + 2 < r2;
            ++rz
          ) {
            var rD = rp(rz),
              rE = 32767 & rz,
              rF = rj[rD]
            if (((rg[rE] = rF), (rj[rD] = rE), rB <= rz)) {
              var rG = r2 - rz
              if ((rx > 7000 || rA > 24576) && (rG > 423 || !r5)) {
                r6 = oQ(qW, r4, 0, rq, rv, rw, ry, rA, rC, rz - rC, r6)
                rA = rx = ry = 0
                rC = rz
                for (var rH = 0; rH < 286; ++rH) {
                  rv[rH] = 0
                }
                for (rH = 0; rH < 30; ++rH) {
                  rw[rH] = 0
                }
              }
              var rI = 2,
                rJ = 0,
                rK = r9,
                rL = (rE - rF) & 32767
              if (rG > 2 && rD == rp(rz - rL)) {
                for (
                  var rM = Math.min(r8, rG) - 1,
                    rN = Math.min(32767, rz),
                    rO = Math.min(258, rG);
                  rL <= rN && --rK && rE != rF;

                ) {
                  if (qW[rz + rI] == qW[rz + rI - rL]) {
                    for (
                      var rP = 0;
                      rP < rO && qW[rz + rP] == qW[rz + rP - rL];
                      ++rP
                    ) {}
                    if (rP > rI) {
                      if (((rI = rP), (rJ = rL), rP > rM)) {
                        break
                      }
                      var rQ = Math.min(rL, rP - 2),
                        rR = 0
                      for (rH = 0; rH < rQ; ++rH) {
                        var rS = (rz - rL + rH) & 32767,
                          rT = (rS - rg[rS]) & 32767
                        rT > rR && ((rR = rT), (rF = rS))
                      }
                    }
                  }
                  rL += ((rE = rF) - (rF = rg[rE])) & 32767
                }
              }
              if (rJ) {
                rq[rA++] = 268435456 | (ox[rI] << 18) | oy[rJ]
                var rU = 31 & ox[rI],
                  rV = 31 & oy[rJ]
                ry += ok[rU] + om[rV]
                ++rv[257 + rU]
                ++rw[rV]
                rB = rz + rI
                ++rx
              } else {
                rq[rA++] = qW[rz]
                ++rv[qW[rz]]
              }
            }
          }
          for (rz = Math.max(rz, rB); rz < r2; ++rz) {
            rq[rA++] = qW[rz]
            ++rv[qW[rz]]
          }
          r6 = oQ(qW, r4, r5, rq, rv, rw, ry, rA, rC, rz - rC, r6)
          r5 ||
            ((r1.r = (7 & r6) | (r4[(r6 / 8) | 0] << 3)),
            (r6 -= 7),
            (r1.h = rj),
            (r1.p = rg),
            (r1.i = rz),
            (r1.w = rB))
        } else {
          for (rz = r1.w || 0; rz < r2 + r5; rz += 65535) {
            var rW = rz + 65535
            rW >= r2 && ((r4[(r6 / 8) | 0] = r5), (rW = r2))
            r6 = oP(r4, r6 + 1, qW.subarray(rz, rW))
          }
        }
        return oI(r3, 0, qZ + oH(r6) + r0)
      })(
        qP,
        null == qQ.level ? 6 : qQ.level,
        null == qQ.mem
          ? Math.ceil(1.5 * Math.max(8, Math.min(13, Math.log(qP.length))))
          : 12 + qQ.mem,
        qR,
        qS,
        qT
      )
    },
    oV = function (qP, qQ, qR) {
      for (; qR; ++qQ) {
        qP[qQ] = qR
        qR >>>= 8
      }
    }
  function oW(qP, qQ) {
    qQ || (qQ = {})
    var qR = (function () {
        var qW = -1
        return {
          p: function (qX) {
            for (var qY = qW, qZ = 0; qZ < qX.length; ++qZ) {
              qY = oT[(255 & qY) ^ qX[qZ]] ^ (qY >>> 8)
            }
            qW = qY
          },
          d: function () {
            return ~qW
          },
        }
      })(),
      qS = qP.length
    qR.p(qP)
    var qT,
      qU = oU(
        qP,
        qQ,
        10 + ((qT = qQ).filename ? qT.filename.length + 1 : 0),
        8
      ),
      qV = qU.length
    return (
      (function (qW, qX) {
        var qY = qX.filename
        if (
          ((qW[0] = 31),
          (qW[1] = 139),
          (qW[2] = 8),
          (qW[8] = qX.level < 2 ? 4 : 9 == qX.level ? 2 : 0),
          (qW[9] = 3),
          0 != qX.mtime &&
            oV(qW, 4, Math.floor(new Date(qX.mtime || Date.now()) / 1000)),
          qY)
        ) {
          qW[3] = 8
          for (var qZ = 0; qZ <= qY.length; ++qZ) {
            qW[qZ + 10] = qY.charCodeAt(qZ)
          }
        }
      })(qU, qQ),
      oV(qU, qV - 8, qR.d()),
      oV(qU, qV - 4, qS),
      qU
    )
  }
  var oX = 'undefined' != typeof TextEncoder && new TextEncoder(),
    oY = 'undefined' != typeof TextDecoder && new TextDecoder()
  try {
    oY.decode(oS, { stream: true })
    1
  } catch (qP) {}
  const oZ = (qQ) => {
      const qR = (function (qX, qY) {
          if (oX) {
            return oX.encode(qX)
          }
          for (
            var qZ = qX.length,
              r0 = new ob(qX.length + (qX.length >> 1)),
              r1 = 0,
              r2 = function (r6) {
                r0[r1++] = r6
              },
              r3 = 0;
            r3 < qZ;
            ++r3
          ) {
            if (r1 + 5 > r0.length) {
              var r4 = new ob(r1 + 8 + ((qZ - r3) << 1))
              r4.set(r0)
              r0 = r4
            }
            var r5 = qX.charCodeAt(r3)
            r5 < 128 || qY
              ? r2(r5)
              : r5 < 2048
              ? (r2(192 | (r5 >> 6)), r2(128 | (63 & r5)))
              : r5 > 55295 && r5 < 57344
              ? (r2(
                  240 |
                    ((r5 =
                      (65536 + (1047552 & r5)) |
                      (1023 & qX.charCodeAt(++r3))) >>
                      18)
                ),
                r2(128 | ((r5 >> 12) & 63)),
                r2(128 | ((r5 >> 6) & 63)),
                r2(128 | (63 & r5)))
              : (r2(224 | (r5 >> 12)),
                r2(128 | ((r5 >> 6) & 63)),
                r2(128 | (63 & r5)))
          }
          return oI(r0, 0, r1)
        })(JSON.stringify(qQ)),
        qS = oW(qR),
        qT = 2 + qS.length,
        qU = new ArrayBuffer(qT),
        qV = new Uint8Array(qU)
      let qW = 0
      qV[qW++] = 1
      qV[qW++] = 4
      for (let qX = 0; qX < qS.length; ++qX) {
        qV[qW++] = qS[qX] ^ (qX + 4)
      }
      return qV
    },
    p0 = (qQ) =>
      qQ
        .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
        .replace(/([A-Z])([A-Z])(?=[a-z])/g, '$1-$2')
        .replace('background', 'bg')
        .toLowerCase(),
    p1 = (qQ, qR, qS) => {
      'string' == typeof qS
        ? qQ.style.setProperty('--cf-' + p0(qR), qS)
        : 'number' == typeof qS &&
          qQ.style.setProperty('--cf-' + p0(qR), qS + 'px')
    },
    p2 = (qQ, qR = ':root') => {
      const qS = document.querySelector(qR)
      qS &&
        Object.keys(qQ).forEach((qT) => {
          if ('object' == typeof qQ[qT]) {
            Object.keys(qQ[qT]).forEach((qU) => {
              const qV = qQ[qT][qU]
              p1(qS, 'general' === qT ? qU : qT + '-' + qU, qV)
            })
          } else {
            const qU = qQ[qT]
            p1(qS, qT, qU)
          }
        })
    },
    p3 = (qQ, qR) => {
      var qS
      const qT =
        null === (qS = null == qQ ? void 0 : qQ.detail) || void 0 === qS
          ? void 0
          : qS.widgetId
      return !(!qT || qT === qR)
    }
  function p4(qQ, qR = '') {
    return new Promise((qS, qT) => {
      let qU = document.getElementById(qQ)
      if (qU) {
        return qS()
      }
      qU = document.createElement('script')
      qR && (qU.nonce = qR)
      document.body.appendChild(qU)
    })
  }
  const p5 = (qQ, qR) =>
      new Promise(function (qS, qT) {
        if (document.getElementById(qQ)) {
          return void qS()
        }
        const qU = document.createElement('link')
        qR && (qU.nonce = qR)
        document.head.append(qU)
      }),
    p6 = {
      en: {
        initial: 'Click to verify',
        progress: 'Verification...',
        success: 'I am human',
        error: 'Verification failed',
        retry: 'Try again',
        ally: {
          initial:
            'CaptchaFox checkbox with text "I am human". Select to start verification.',
          success: 'CaptchaFox checkbox is checked. You are a human.',
          link: 'Visit captchafox.com for more information.',
          visual: 'Switch to the visual challenge',
          audio: 'Switch to the audio challenge',
          refresh: 'Refresh the challenge',
          close: 'Close the challenge',
        },
      },
      de: {
        initial: 'Verifizierung starten',
        progress: 'Verifizierung...',
        success: 'Ich bin ein Mensch',
        error: 'Verifizierung fehlgeschlagen',
        retry: 'Wiederholen',
        ally: {
          initial:
            'CaptchaFox-Kontrollkästchen. Wählen Sie es aus, um die Verifizierung zu starten.',
          success:
            'CaptchaFox-Kontrollkästchen ist aktiviert. Sie sind ein Mensch.',
          link: 'Besuche captchafox.com für mehr Informationen.',
          visual: 'Zur visuellen Herausforderung wechseln',
          audio: 'Zur Audio-Herausforderung wechseln',
          refresh: 'Herausforderung aktualisieren',
          close: 'Herausforderung schließen',
        },
      },
      fr: {
        initial: 'Cliquez pour vérifier',
        progress: 'Vérification...',
        success: 'Je suis humain',
        error: 'Échec de la vérification',
        retry: 'Réessayer',
        ally: {
          initial:
            'Case à cocher CaptchaFox. Cochez cette case pour lancer le processus de vérification.',
          success: 'La case CaptchaFox est cochée. Vous êtes un être humain.',
          link: "Visitez le site captchafox.com pour plus d'informations.",
          visual: 'Passer au défi visuel',
          audio: 'Passer au défi audio',
          refresh: 'Actualiser le défi',
          close: 'Fermer le défi',
        },
      },
      it: {
        initial: 'Fare clic per verificare',
        progress: 'Verifica...',
        success: 'Sono umano',
        error: 'Verifica fallita',
        retry: 'Riprova',
        ally: {
          initial:
            'Casella di controllo CaptchaFox. Selezionare per avviare la verifica.',
          success:
            'La casella di controllo CaptchaFox è selezionata. Sei un essere umano.',
          link: 'Per ulteriori informazioni, visitate il sito captchafox.com.',
          visual: 'Passa alla sfida visiva',
          audio: 'Passare alla sfida audio',
          refresh: 'Aggiorna la sfida',
          close: 'Chiudere la sfida',
        },
      },
      es: {
        initial: 'Haga clic para verificar',
        progress: 'Verificación...',
        success: 'Soy humano',
        error: 'Fallo en la verificación',
        retry: 'Rever',
        ally: {
          initial:
            'Casilla CaptchaFox. Seleccione para iniciar la verificación.',
          success:
            'La casilla CaptchaFox está marcada. Usted es un ser humano.',
          link: 'Visite captchafox.com para más información.',
          visual: 'Cambiar al desafío visual',
          audio: 'Pasar al desafío sonoro',
          refresh: 'Actualizar el desafío',
          close: 'Cerrar el desafío',
        },
      },
      nl: {
        initial: 'Klik om te verifiëren',
        progress: 'Verificatie...',
        success: 'Ik ben een mens',
        error: 'Verificatie mislukt',
        retry: 'Herhalen',
        ally: {
          initial:
            'CaptchaFox selectievakje met tekst "Ik ben een mens". Selecteer om de verificatie te starten.',
          success:
            'Het selectievakje CaptchaFox is ingeschakeld. Je bent een mens.',
          link: 'Bezoek captchafox.com voor meer informatie.',
          visual: 'Schakel over naar de visuele uitdaging',
          audio: 'Schakel over naar de audio-uitdaging',
          refresh: 'De uitdaging verversen',
          close: 'Sluit de uitdaging',
        },
      },
      tr: {
        initial: 'Doğrulamak için tıklayın',
        progress: 'Doğrulama...',
        success: 'Ben insanım.',
        error: 'Doğrulama başarısız oldu',
        retry: 'Tekrar deneyin',
        ally: {
          initial: 'CaptchaFox onay kutusu. Doğrulamayı başlatmak için seçin.',
          success: 'CaptchaFox onay kutusu işaretlendi. Siz bir insansınız.',
          link: 'Daha fazla bilgi için captchafox.com adresini ziyaret edin.',
          visual: 'Görsel mücadeleye geçin',
          audio: 'Ses mücadelesine geçin',
          refresh: 'Mücadeleyi yenileyin',
          close: 'Mücadeleyi kapatın',
        },
      },
      fi: {
        initial: 'Klikkaa tarkistaaksesi',
        progress: 'Todennus...',
        success: 'Olen ihminen',
        error: 'Varmennus epäonnistui',
        retry: 'Yritä uudelleen',
        ally: {
          initial: 'CaptchaFox-valintaruutu. Valitse, jotta vahvistus alkaa.',
          success: 'CaptchaFox-valintaruutu on valittuna. Olet ihminen.',
          link: 'Lisätietoja on osoitteessa captchafox.com.',
          visual: 'Siirry visuaaliseen haasteeseen',
          audio: 'Vaihda äänihaasteeseen',
          refresh: 'Päivitä haaste',
          close: 'Sulje haaste',
        },
      },
      'zh-tw': {
        initial: '點擊驗證',
        progress: '驗證...',
        success: '我是人',
        error: '驗證失\x95\x97',
        retry: 'å\x86\x8Dè\xA9\xA6ä\xB8\x80æ\xAC\xA1',
        ally: {
          initial:
            'CaptchaFox æ\xA0\xB8å\x8F\x96æ\x96\xB9å\xA1\x8Aã\x80\x82é\x81\xB8æ\x93\x87é\x96\x8Bå\xA7\x8Bé\xA9\x97è\xAD\x89ã\x80\x82',
          success:
            'CaptchaFox æ\xA0\xB8å\x8F\x96æ\x96\xB9å\xA1\x8Aå\xB7\xB2é\x81\xB8å\x8F\x96ã\x80\x82æ\x82\xA8æ\x98\xAFäººé\xA1\x9Eã\x80\x82',
          link: 'å\xA6\x82é\x9C\x80æ\x9B\xB4å\xA4\x9Aè\xB3\x87è\xA8\x8Aï\xBC\x8Cè\xAB\x8Bé\x80\xA0è\xA8ª captchafox.comã\x80\x82',
          visual:
            'å\x88\x87æ\x8F\x9Bå\x88\xB0è\xA6\x96è\xA6ºæ\x8C\x91æ\x88\xB0',
          audio: 'å\x88\x87æ\x8F\x9Bå\x88\xB0èª\x9Eé\x9F\xB3æ\x8C\x91æ\x88\xB0',
          refresh: 'å\x88\xB7æ\x96\xB0æ\x8C\x91æ\x88\xB0',
          close: 'é\x97\x9Cé\x96\x89æ\x8C\x91æ\x88\xB0',
        },
      },
      'zh-cn': {
        initial: 'ç\x82\xB9å\x87\xBBéª\x8Cè\xAF\x81',
        progress: 'éª\x8Cè\xAF\x81...',
        success: 'æ\x88\x91æ\x98\xAFäºº',
        error: 'éª\x8Cè\xAF\x81å\xA4\xB1è\xB4\xA5',
        retry: 'å\x86\x8Dè\xAF\x95ä\xB8\x80æ\xAC\xA1',
        ally: {
          initial:
            'CaptchaFox å\xA4\x8Dé\x80\x89æ\xA1\x86ã\x80\x82é\x80\x89æ\x8B\xA9ä\xBB\xA5å\xBC\x80å\xA7\x8Béª\x8Cè\xAF\x81ã\x80\x82',
          success:
            'CaptchaFox å\xA4\x8Dé\x80\x89æ\xA1\x86å\xB7\xB2é\x80\x89ä\xB8\xADã\x80\x82æ\x82\xA8æ\x98\xAFäººç\xB1\xBBã\x80\x82',
          link: 'æ\xAC\xB2äº\x86è\xA7\xA3æ\x9B\xB4å\xA4\x9Aä\xBF\xA1æ\x81\xAFï\xBC\x8Cè\xAF\xB7è\xAE\xBFé\x97\xAE captchafox.comã\x80\x82',
          visual:
            'å\x88\x87æ\x8D\xA2å\x88\xB0è\xA7\x86è\xA7\x89æ\x8C\x91æ\x88\x98',
          audio:
            'å\x88\x87æ\x8D\xA2å\x88\xB0è\xAF\xADé\x9F\xB3æ\x8C\x91æ\x88\x98',
          refresh: 'å\x88\xB7æ\x96\xB0æ\x8C\x91æ\x88\x98',
          close: 'å\x85\xB3é\x97\xADæ\x8C\x91æ\x88\x98',
        },
      },
      ja: {
        initial:
          'ã\x82\xAFã\x83ªã\x83\x83ã\x82\xAFã\x81\x97ã\x81\xA6ç\xA2ºèª\x8D',
        progress: 'æ\xA4\x9Cè\xA8\xBC...',
        success: 'ç\xA7\x81ã\x81\xAFäººé\x96\x93ã\x81\xA7ã\x81\x99',
        error:
          'æ\xA4\x9Cè\xA8\xBCã\x81\xABå\xA4\xB1æ\x95\x97ã\x81\x97ã\x81\xBEã\x81\x97ã\x81\x9F',
        retry: 'å\x86\x8Dè\xA9\xA6è\xA1\x8C',
        ally: {
          initial:
            'CaptchaFoxã\x83\x81ã\x82\xA7ã\x83\x83ã\x82\xAFã\x83\x9Cã\x83\x83ã\x82\xAFã\x82\xB9ã\x80\x82ã\x83\x90ã\x83ªã\x83\x87ã\x83\xBCã\x82\xB7ã\x83\xA7ã\x83\xB3ã\x81\xAEé\x96\x8Bå\xA7\x8Bã\x82\x92é\x81\xB8æ\x8A\x9Eã\x81\x97ã\x81\xBEã\x81\x99ã\x80\x82',
          success:
            'CaptchaFoxã\x83\x81ã\x82\xA7ã\x83\x83ã\x82\xAFã\x83\x9Cã\x83\x83ã\x82\xAFã\x82\xB9ã\x81\x8Cé\x81\xB8æ\x8A\x9Eã\x81\x95ã\x82\x8Cã\x81\xA6ã\x81\x84ã\x81\xBEã\x81\x99ã\x80\x82ã\x81\x82ã\x81ªã\x81\x9Fã\x81\xAFäººé\x96\x93ã\x81\xA7ã\x81\x99ã\x80\x82',
          link: 'è\xA9\xB3ç\xB4\xB0ã\x81\xABã\x81\xA4ã\x81\x84ã\x81\xA6ã\x81\xAFã\x80\x81captchafox.comã\x82\x92ã\x81\x94è\xA6\xA7ã\x81\x8Fã\x81\xA0ã\x81\x95ã\x81\x84ã\x80\x82',
          visual:
            'ã\x83\x93ã\x82\xB8ã\x83\xA5ã\x82\xA2ã\x83\xABã\x83\xBBã\x83\x81ã\x83\xA3ã\x83\xACã\x83\xB3ã\x82\xB8ã\x81\xABå\x88\x87ã\x82\x8Aæ\x9B\xBFã\x81\x88ã\x82\x8B',
          audio:
            'ã\x82ªã\x83\xBCã\x83\x87ã\x82\xA3ã\x82ªã\x83\x81ã\x83\xA3ã\x83\xACã\x83\xB3ã\x82\xB8ã\x81\xABå\x88\x87ã\x82\x8Aæ\x9B\xBFã\x81\x88ã\x82\x8B',
          refresh:
            'èª\xB2é\xA1\x8Cã\x82\x92æ\x9B\xB4æ\x96\xB0ã\x81\x99ã\x82\x8B',
          close: 'èª\xB2é\xA1\x8Cã\x82\x92é\x96\x89ã\x81\x98ã\x82\x8B',
        },
      },
      pt: {
        initial: 'Clique para verificar',
        progress: 'VerificaÃ\xA7Ã\xA3o...',
        success: 'Eu sou humano',
        error: 'A verificaÃ\xA7Ã\xA3o falhou',
        retry: 'Tente de novo',
        ally: {
          initial:
            'Caixa de verificaÃ\xA7Ã\xA3o CaptchaFox. Selecione para iniciar a validaÃ\xA7Ã\xA3o.',
          success:
            'A caixa de seleÃ\xA7Ã\xA3o CaptchaFox estÃ\xA1 selecionada. VocÃª Ã\xA9 humano.',
          link: 'Para obter mais informaÃ\xA7Ãµes, visite captchafox.com.',
          visual: 'Mudar para o desafio visual',
          audio: 'Mudar para o desafio Ã\xA1udio',
          refresh: 'Atualizar o desafio',
          close: 'Fechar o desafio',
        },
      },
      no: {
        initial: 'Klikk for Ã\xA5 bekrefte',
        progress: 'Verifisering...',
        success: 'Jeg er et menneske',
        error: 'Verifisering mislyktes',
        retry: 'PrÃ\xB8v igjen',
        ally: {
          initial:
            'CaptchaFox-avmerkingsboksen. Velg for Ã\xA5 starte valideringen.',
          success: 'CaptchaFox-avmerkingsboksen er valgt. Du er et menneske.',
          link: 'For mer informasjon, besÃ\xB8k captchafox.com',
          visual: 'Bytt til den visuelle utfordringen',
          audio: 'Bytt til lydutfordringen',
          refresh: 'Oppdater utfordringen',
          close: 'Lukk utfordringen',
        },
      },
      uk: {
        initial:
          'Ð\x9DÐ\xB0Ñ\x82Ð\xB8Ñ\x81Ð\xBDÑ\x96Ñ\x82Ñ\x8C, Ñ\x89Ð\xBEÐ\xB1 Ð\xBFÑ\x96Ð\xB4Ñ\x82Ð\xB2ÐµÑ\x80Ð\xB4Ð\xB8Ñ\x82Ð\xB8',
        progress: 'Ð\x9FÐµÑ\x80ÐµÐ\xB2Ñ\x96Ñ\x80ÐºÐ\xB0...',
        success: 'Ð\xAF Ð\xBBÑ\x8EÐ\xB4Ð\xB8Ð\xBDÐ\xB0',
        error:
          'Ð\x9FÐµÑ\x80ÐµÐ\xB2Ñ\x96Ñ\x80ÐºÐ\xB0 Ð\xBDÐµ Ð\xB2Ð\xB4Ð\xB0Ð\xBBÐ\xB0Ñ\x81Ñ\x8F',
        retry:
          'Ð\xA1Ð\xBFÑ\x80Ð\xBEÐ\xB1Ñ\x83Ð\xB9Ñ\x82Ðµ Ñ\x89Ðµ Ñ\x80Ð\xB0Ð\xB7',
        ally: {
          initial:
            'Ð\x9FÑ\x80Ð\xB0Ð\xBFÐ\xBEÑ\x80ÐµÑ\x86Ñ\x8C CaptchaFox. Ð\x92Ñ\x81Ñ\x82Ð\xB0Ð\xBDÐ\xBEÐ\xB2Ñ\x96Ñ\x82Ñ\x8C, Ñ\x89Ð\xBEÐ\xB1 Ð\xBFÐ\xBEÑ\x87Ð\xB0Ñ\x82Ð\xB8 Ð\xB2Ð\xB0Ð\xBBÑ\x96Ð\xB4Ð\xB0Ñ\x86Ñ\x96Ñ\x8E.',
          success:
            'Ð\x9FÑ\x80Ð\xB0Ð\xBFÐ\xBEÑ\x80ÐµÑ\x86Ñ\x8C CaptchaFox Ð\xB2Ñ\x81Ñ\x82Ð\xB0Ð\xBDÐ\xBEÐ\xB2Ð\xBBÐµÐ\xBDÐ\xBE. Ð\x92Ð\xB8 Ð\xBBÑ\x8EÐ\xB4Ð\xB8Ð\xBDÐ\xB0.',
          link: 'Ð\x94Ð\xBBÑ\x8F Ð\xBEÑ\x82Ñ\x80Ð\xB8Ð\xBCÐ\xB0Ð\xBDÐ\xBDÑ\x8F Ð\xB4Ð\xBEÐ\xB4Ð\xB0Ñ\x82ÐºÐ\xBEÐ\xB2Ð\xBEÑ\x97 Ñ\x96Ð\xBDÑ\x84Ð\xBEÑ\x80Ð\xBCÐ\xB0Ñ\x86Ñ\x96Ñ\x97 Ð\xB2Ñ\x96Ð\xB4Ð\xB2Ñ\x96Ð\xB4Ð\xB0Ð\xB9Ñ\x82Ðµ captchafox.com',
          visual:
            'Ð\x9FÐµÑ\x80ÐµÐ\xB9Ð\xB4Ñ\x96Ñ\x82Ñ\x8C Ð\xB4Ð\xBE Ð\xB2Ñ\x96Ð\xB7Ñ\x83Ð\xB0Ð\xBBÑ\x8CÐ\xBDÐ\xBEÐ\xB3Ð\xBE Ð\xB7Ð\xB0Ð\xB2Ð\xB4Ð\xB0Ð\xBDÐ\xBDÑ\x8F',
          audio:
            'Ð\x9FÐµÑ\x80ÐµÐºÐ\xBBÑ\x8EÑ\x87Ð\xB8Ñ\x82Ð\xB8Ñ\x81Ñ\x8F Ð\xBDÐ\xB0 Ð\xB7Ð\xB2Ñ\x83ÐºÐ\xBEÐ\xB2Ð\xB8Ð\xB9 Ð\xB2Ð\xB8ÐºÐ\xBBÐ\xB8Ðº',
          refresh:
            'Ð\x9EÐ\xBDÐ\xBEÐ\xB2Ð\xB8Ñ\x82Ð\xB8 Ð\xB7Ð\xB0Ð\xB2Ð\xB4Ð\xB0Ð\xBDÐ\xBDÑ\x8F',
          close: 'Ð\x97Ð\xB0ÐºÑ\x80Ð\xB8Ñ\x82Ð\xB8 Ð\xB2Ð\xB8ÐºÐ\xBBÐ\xB8Ðº',
        },
      },
      ru: {
        initial:
          'Ð\x9DÐ\xB0Ð\xB6Ð\xBCÐ\xB8Ñ\x82Ðµ, Ñ\x87Ñ\x82Ð\xBEÐ\xB1Ñ\x8B Ð\xBFÑ\x80Ð\xBEÐ\xB2ÐµÑ\x80Ð\xB8Ñ\x82Ñ\x8C',
        progress: 'Ð\x9FÑ\x80Ð\xBEÐ\xB2ÐµÑ\x80ÐºÐ\xB0...',
        success: 'Ð\xAF Ñ\x87ÐµÐ\xBBÐ\xBEÐ\xB2ÐµÐº',
        error: 'Verification failed',
        retry:
          'Ð\x9FÐ\xBEÐ\xB2Ñ\x82Ð\xBEÑ\x80Ð\xB8Ñ\x82Ðµ Ð\xBFÐ\xBEÐ\xBFÑ\x8BÑ\x82ÐºÑ\x83',
        ally: {
          initial:
            'Ð\xA4Ð\xBBÐ\xB0Ð\xB6Ð\xBEÐº CaptchaFox. Ð\x92Ñ\x8BÐ\xB1ÐµÑ\x80Ð\xB8Ñ\x82Ðµ, Ñ\x87Ñ\x82Ð\xBEÐ\xB1Ñ\x8B Ð\xBDÐ\xB0Ñ\x87Ð\xB0Ñ\x82Ñ\x8C Ð\xBFÑ\x80Ð\xBEÐ\xB2ÐµÑ\x80ÐºÑ\x83.',
          success:
            'Ð\xA4Ð\xBBÐ\xB0Ð\xB6Ð\xBEÐº CaptchaFox Ñ\x83Ñ\x81Ñ\x82Ð\xB0Ð\xBDÐ\xBEÐ\xB2Ð\xBBÐµÐ\xBD. Ð\x92Ñ\x8B - Ñ\x87ÐµÐ\xBBÐ\xBEÐ\xB2ÐµÐº.',
          link: 'Ð\x94Ð\xBBÑ\x8F Ð\xBFÐ\xBEÐ\xBBÑ\x83Ñ\x87ÐµÐ\xBDÐ\xB8Ñ\x8F Ð\xB4Ð\xBEÐ\xBFÐ\xBEÐ\xBBÐ\xBDÐ\xB8Ñ\x82ÐµÐ\xBBÑ\x8CÐ\xBDÐ\xBEÐ\xB9 Ð\xB8Ð\xBDÑ\x84Ð\xBEÑ\x80Ð\xBCÐ\xB0Ñ\x86Ð\xB8Ð\xB8 Ð\xBFÐ\xBEÑ\x81ÐµÑ\x82Ð\xB8Ñ\x82Ðµ Ñ\x81Ð\xB0Ð\xB9Ñ\x82 captchafox.com.',
          visual:
            'Ð\x9FÐµÑ\x80ÐµÐºÐ\xBBÑ\x8EÑ\x87Ð\xB8Ñ\x82ÐµÑ\x81Ñ\x8C Ð\xBDÐ\xB0 Ð\xB2Ð\xB8Ð\xB7Ñ\x83Ð\xB0Ð\xBBÑ\x8CÐ\xBDÑ\x83Ñ\x8E Ð\xB7Ð\xB0Ð\xB4Ð\xB0Ñ\x87Ñ\x83',
          audio:
            'Ð\x9FÐµÑ\x80ÐµÐºÐ\xBBÑ\x8EÑ\x87Ð\xB8Ñ\x82ÐµÑ\x81Ñ\x8C Ð\xBDÐ\xB0 Ð\xB0Ñ\x83Ð\xB4Ð\xB8Ð\xBEÐ\xB7Ð\xB0Ð\xB4Ð\xB0Ð\xBDÐ\xB8Ðµ',
          refresh:
            'Ð\x9EÐ\xB1Ð\xBDÐ\xBEÐ\xB2Ð\xB8Ñ\x82Ñ\x8C Ð\xB7Ð\xB0Ð\xB4Ð\xB0Ñ\x87Ñ\x83',
          close:
            'Ð\x97Ð\xB0ÐºÑ\x80Ñ\x8BÑ\x82Ñ\x8C Ð\xB7Ð\xB0Ð\xB4Ð\xB0Ñ\x87Ñ\x83',
        },
      },
      sv: {
        initial: 'Klicka fÃ\xB6r att kontrollera',
        progress: 'Verifiering...',
        success: 'Jag Ã\xA4r mÃ\xA4nniska',
        error: 'Verifiering misslyckades',
        retry: 'FÃ\xB6rsÃ\xB6k igen',
        ally: {
          initial:
            'Kryssruta fÃ\xB6r CaptchaFox. VÃ\xA4lj fÃ\xB6r att starta valideringen.',
          success:
            'Kryssrutan CaptchaFox Ã\xA4r markerad. Du Ã\xA4r en mÃ\xA4nniska.',
          link: 'FÃ\xB6r mer information, besÃ\xB6k captchafox.com.',
          visual: 'Byt till den visuella utmaningen',
          audio: 'Byt till ljudutmaningen',
          refresh: 'Uppdatera utmaningen',
          close: 'StÃ\xA4ng utmaningen',
        },
      },
      da: {
        initial: 'Klik for at bekrÃ\xA6fte',
        progress: 'Verifikation...',
        success: 'Jeg er menneske',
        error: 'BekrÃ\xA6ftelse mislykkedes',
        retry: 'PrÃ\xB8v igen',
        ally: {
          initial:
            'CaptchaFox afkrydsningsfelt. VÃ\xA6lg for at starte valideringen.',
          success:
            'Afkrydsningsfeltet CaptchaFox er markeret. Du er et menneske.',
          link: 'For mere information, besÃ\xB8g captchafox.com.',
          visual: 'Skift til den visuelle udfordring',
          audio: 'Skift til lydudfordringen',
          refresh: 'Opdater udfordringen',
          close: 'Luk udfordringen',
        },
      },
      pl: {
        initial: 'Kliknij, aby zweryfikowaÄ\x87',
        progress: 'Weryfikacja...',
        success: 'Jestem czÅ\x82owiekiem',
        error: 'Weryfikacja nie powiodÅ\x82a siÄ\x99',
        retry: 'SprÃ\xB3buj ponownie',
        ally: {
          initial:
            'Pole wyboru CaptchaFox. Wybierz, aby rozpoczÄ\x85Ä\x87 weryfikacjÄ\x99.',
          success:
            'Pole wyboru CaptchaFox jest zaznaczone. JesteÅ\x9B czÅ\x82owiekiem.',
          link: 'WiÄ\x99cej informacji moÅ\xBCna znaleÅºÄ\x87 na stronie captchafox.com.',
          visual: 'PrzejdÅº do wyzwania wizualnego',
          audio: 'PrzeÅ\x82Ä\x85cz na wyzwanie dÅºwiÄ\x99kowe',
          refresh: 'OdÅ\x9BwieÅ\xBC wyzwanie',
          close: 'Zamknij wyzwanie',
        },
      },
      ko: {
        initial:
          'í\x99\x95ì\x9D\xB8í\x95\x98ë\xA0\xA4ë\xA9\xB4 í\x81\xB4ë\xA6\xAD',
        progress: 'í\x99\x95ì\x9D\xB8 ì\xA4\x91...',
        success:
          'ë\x82\x98ë\x8A\x94 ì\x9D\xB8ê\xB0\x84ì\x9E\x85ë\x8B\x88ë\x8B\xA4',
        error: 'í\x99\x95ì\x9D\xB8 ì\x8B\xA4í\x8C\xA8',
        retry: 'ë\x8B\xA4ì\x8B\x9C ì\x8B\x9Cë\x8F\x84',
        ally: {
          initial:
            'CaptchaFox í\x99\x95ì\x9D\xB8ë\x9E\x80ì\x9D\x84 ì\x84\xA0í\x83\x9Dí\x95\xA9ë\x8B\x88ë\x8B\xA4. ì\x9C\xA0í\x9A\xA8ì\x84\xB1 ê\xB2\x80ì\x82\xACë\xA5\xBC ì\x8B\x9Cì\x9E\x91í\x95\x98ë\xA0\xA4ë\xA9\xB4 ì\x84\xA0í\x83\x9Dí\x95\xA9ë\x8B\x88ë\x8B\xA4.',
          success:
            'CaptchaFox í\x99\x95ì\x9D\xB8ë\x9E\x80ì\x9D\xB4 ì\x84\xA0í\x83\x9Dë\x90\x98ì\x96\xB4 ì\x9E\x88ì\x8Aµë\x8B\x88ë\x8B\xA4. ì\x9D\xB8ê\xB0\x84ì\x9E\x85ë\x8B\x88ë\x8B\xA4.',
          link: 'ì\x9E\x90ì\x84\xB8í\x95\x9C ë\x82\xB4ì\x9A\xA9ì\x9D\x80 captchafox.comì\x9D\x84 ì\xB0\xB8ì\xA1\xB0í\x95\x98ì\x84\xB8ì\x9A\x94.',
          visual:
            'ì\x8B\x9Cê\xB0\x81ì\xA0\x81 ì\xB1\x8Cë\xA6\xB0ì\xA7\x80ë\xA1\x9C ì\xA0\x84í\x99\x98',
          audio:
            'ì\x98\xA4ë\x94\x94ì\x98\xA4 ì\xB1\x8Cë\xA6\xB0ì\xA7\x80ë\xA1\x9C ì\xA0\x84í\x99\x98',
          refresh:
            'ì\xB1\x8Cë\xA6\xB0ì\xA7\x80 ì\x83\x88ë\xA1\x9C ê\xB3\xA0ì\xB9\xA8',
          close: 'ì\xB1\x8Cë\xA6\xB0ì\xA7\x80 ë\x8B\xABê\xB8\xB0',
        },
      },
      cs: {
        initial: 'KliknÄ\x9Bte pro ovÄ\x9BÅ\x99enÃ\xAD',
        progress: 'OvÄ\x9BÅ\x99enÃ\xAD...',
        success: 'Jsem Ä\x8DlovÄ\x9Bk',
        error: 'OvÄ\x9BÅ\x99enÃ\xAD se nezdaÅ\x99ilo',
        retry: 'Zkuste to znovu',
        ally: {
          initial:
            'ZaÅ\xA1krtÃ\xA1vacÃ\xAD polÃ\xADÄ\x8Dko CaptchaFox. ZaÅ\xA1krtnutÃ\xADm spustÃ\xADte ovÄ\x9BÅ\x99ovÃ\xA1nÃ\xAD.',
          success:
            'ZaÅ\xA1krtÃ\xA1vacÃ\xAD polÃ\xADÄ\x8Dko CaptchaFox je zaÅ\xA1krtnutÃ\xA9. Jste Ä\x8DlovÄ\x9Bk.',
          link: 'DalÅ\xA1Ã\xAD informace naleznete na webu captchafox.com.',
          visual: 'PÅ\x99epnutÃ\xAD na vizuÃ\xA1lnÃ\xAD vÃ\xBDzvu',
          audio: 'PÅ\x99epnÄ\x9Bte na zvukovou vÃ\xBDzvu',
          refresh: 'ObnovenÃ\xAD vÃ\xBDzvy',
          close: 'ZavÅ\x99Ã\xADt vÃ\xBDzvu',
        },
      },
      id: {
        initial: 'Klik untuk memverifikasi',
        progress: 'Verifikasi...',
        success: 'Saya manusia',
        error: 'Verifikasi gagal',
        retry: 'Coba lagi',
        ally: {
          initial: 'Kotak centang CaptchaFox. Pilih untuk memulai validasi.',
          success: 'Kotak centang CaptchaFox dipilih. Anda adalah manusia.',
          link: 'Untuk informasi lebih lanjut, kunjungi captchafox.com.',
          visual: 'Beralih ke tantangan visual',
          audio: 'Beralih ke tantangan audio',
          refresh: 'Menyegarkan tantangan',
          close: 'Menutup tantangan',
        },
      },
      ga: {
        initial: 'CliceÃ\xA1il chun a fhÃ\xADorÃº',
        progress: 'FÃ\xADorÃº...',
        success: 'Is duine mÃ\xA9',
        error: 'Theip ar an bhfÃ\xADorÃº',
        retry: 'DÃ\xA9an iarracht arÃ\xADs',
        ally: {
          initial:
            'Ticbhosca CaptchaFox. Roghnaigh chun tÃºs a chur le bailÃ\xADochtÃº.',
          success: 'RoghnaÃ\xADtear ticbhosca CaptchaFox. TÃ\xA1 tÃº daonna.',
          link: 'Le haghaidh tuilleadh eolais, tabhair cuairt ar captchafox.com.',
          visual: 'TÃ\xA9igh go dtÃ\xAD an dÃºshlÃ\xA1n amhairc',
          audio: 'TÃ\xA9igh go dtÃ\xAD an dÃºshlÃ\xA1n fuaime',
          refresh: 'Athnuaigh an dÃºshlÃ\xA1n',
          close: 'DÃºn an dÃºshlÃ\xA1n',
        },
      },
    }
  function p7(qQ, qR, qS) {
    return (qQ && qQ.then) || (qQ = Promise.resolve(qQ)), qR ? qQ.then(qR) : qQ
  }
  function p8() {}
  function p9(qQ, qR) {
    try {
      var qS = qQ()
    } catch (qT) {
      return qR(qT)
    }
    return qS && qS.then ? qS.then(void 0, qR) : qS
  }
  function pb(qQ, qR) {
    return qQ && qQ.then ? qQ.then(qR) : qR(qQ)
  }
  function pg(qQ) {
    return function () {
      for (var qR = [], qS = 0; qS < arguments.length; qS++) {
        qR[qS] = arguments[qS]
      }
      try {
        return Promise.resolve(qQ.apply(this, qR))
      } catch (qT) {
        return Promise.reject(qT)
      }
    }
  }
  function pj(qQ, qR, qS) {
    if (!qQ.s) {
      if (qS instanceof pk) {
        if (!qS.s) {
          return void (qS.o = pj.bind(null, qQ, qR))
        }
        1 & qR && (qR = qS.s)
        qS = qS.v
      }
      if (qS && qS.then) {
        return void qS.then(pj.bind(null, qQ, qR), pj.bind(null, qQ, 2))
      }
      qQ.s = qR
      qQ.v = qS
      const qT = qQ.o
      qT && qT(qQ)
    }
  }
  const pk = (function () {
    function qQ() {}
    return (
      (qQ.prototype.then = function (qR, qS) {
        const qT = new qQ(),
          qU = this.s
        if (qU) {
          const qV = 1 & qU ? qR : qS
          if (qV) {
            try {
              pj(qT, 1, qV(this.v))
            } catch (qW) {
              pj(qT, 2, qW)
            }
            return qT
          }
          return this
        }
        return (
          (this.o = function (qX) {
            try {
              const qY = qX.v
              1 & qX.s
                ? pj(qT, 1, qR ? qR(qY) : qY)
                : qS
                ? pj(qT, 1, qS(qY))
                : pj(qT, 2, qY)
            } catch (qZ) {
              pj(qT, 2, qZ)
            }
          }),
          qT
        )
      }),
      qQ
    )
  })()
  function pm(qQ) {
    return qQ instanceof pk && 1 & qQ.s
  }
  const pp = pg(function (qQ) {
      return (
        (qR = function (qT) {
          return qQ
        }),
        (qS = (function () {
          if (!qQ.ok || 200 !== qQ.status) {
            let qT = qQ.statusText
            return pb(
              p9(function () {
                return p7(qQ.json(), function (qU) {
                  qT = null == qU ? void 0 : qU.error
                })
              }, p8),
              function () {
                throw Error(qT)
              }
            )
          }
        })()) && qS.then
          ? qS.then(qR)
          : qR(qS)
      )
      var qR, qS
    }),
    pq = pg(function (qQ, qR) {
      let qS = false
      const qT = 'https://api.captchafox.com' + qQ
      let qU = null,
        qV = null,
        qW = 0
      return pb(
        (function (qX, qY, qZ) {
          for (var r0; ; ) {
            var r1 = qX()
            if ((pm(r1) && (r1 = r1.v), !r1)) {
              return r2
            }
            if (r1.then) {
              r0 = 0
              break
            }
            var r2 = qZ()
            if (r2 && r2.then) {
              if (!pm(r2)) {
                r0 = 1
                break
              }
              r2 = r2.s
            }
            if (qY) {
              var r3 = qY()
              if (r3 && r3.then && !pm(r3)) {
                r0 = 2
                break
              }
            }
          }
          var r4 = new pk(),
            r5 = pj.bind(null, r4, 2)
          return (
            (0 === r0
              ? r1.then(r7)
              : 1 === r0
              ? r2.then(r6)
              : r3.then(r8)
            ).then(void 0, r5),
            r4
          )
          function r6(r9) {
            r2 = r9
            do {
              if (qY && (r3 = qY()) && r3.then && !pm(r3)) {
                return void r3.then(r8).then(void 0, r5)
              }
              if (!(r1 = qX()) || (pm(r1) && !r1.v)) {
                return void pj(r4, 1, r2)
              }
              if (r1.then) {
                return void r1.then(r7).then(void 0, r5)
              }
              pm((r2 = qZ())) && (r2 = r2.v)
            } while (!r2 || !r2.then)
            r2.then(r6).then(void 0, r5)
          }
          function r7(r9) {
            r9
              ? (r2 = qZ()) && r2.then
                ? r2.then(r6).then(void 0, r5)
                : r6(r2)
              : pj(r4, 1, r2)
          }
          function r8() {
            ;(r1 = qX())
              ? r1.then
                ? r1.then(r7).then(void 0, r5)
                : r7(r1)
              : pj(r4, 1, r2)
          }
        })(
          function () {
            return !qS && qW <= 3
          },
          function () {
            return qW++
          },
          function () {
            return (function (qX) {
              if (qX && qX.then) {
                return qX.then(p8)
              }
            })(
              p9(
                function () {
                  return p7(pv(qT, qR), function (qX) {
                    qU = qX
                    qS = true
                  })
                },
                function (qX) {
                  return (
                    (qV = qX),
                    (qY = new Promise((qZ) => {
                      return setTimeout(qZ, ((r0 = qW), 100 * Math.exp(r0)))
                      var r0
                    })) && qY.then
                      ? qY.then(p8)
                      : Promise.resolve()
                  )
                  var qY
                }
              )
            )
          }
        ),
        function () {
          if (!qU) {
            throw null != qV ? qV : new Error('Exhausted all retries')
          }
          return pp(qU)
        }
      )
    }),
    pv = pg(function (qQ, qR) {
      const { timeout: qS = 5000 } = qR,
        qT = new AbortController(),
        qU = setTimeout(() => qT.abort(), qS)
      return p7(
        fetch(qQ, Object.assign(Object.assign({}, qR), { signal: qT.signal })),
        function (qV) {
          return clearTimeout(qU), qV
        }
      )
    }),
    pw = (qQ) => {
      const qR = 'Enter' === qQ.key && 13 === qQ.keyCode,
        qS = ' ' === qQ.key && 32 === qQ.keyCode
      return qR || qS
    }
  function px(qQ) {
    let qR
    return {
      c() {
        qR = nj('div')
        qR.innerHTML =
          '<div class="l1 cf-1q6ejgs"></div> <div class="l2 cf-1q6ejgs"></div> <div class="l3 cf-1q6ejgs"></div>'
        nv(qR, 'class', 'cf-loader cf-1q6ejgs')
      },
      m(qS, qT) {
        nb(qS, qR, qT)
      },
      p: kq,
      i: kq,
      o: kq,
      d(qS) {
        qS && ng(qR)
      },
    }
  }
  class py extends o3 {
    constructor(qQ) {
      super()
      o2(this, qQ, null, px, kz, {})
    }
  }
  function pz(qQ) {
    let qR,
      qS,
      qT = qQ[5] ? 'Test key active' : 'Error: ' + qQ[4]
    return {
      c() {
        qR = nj('div')
        qS = nm(qT)
        nv(qR, 'class', 'cf-button__error-code cf-1v4tsok')
      },
      m(qU, qV) {
        nb(qU, qR, qV)
        n9(qR, qS)
      },
      p(qU, qV) {
        48 & qV &&
          qT !== (qT = qU[5] ? 'Test key active' : 'Error: ' + qU[4]) &&
          nw(qS, qT)
      },
      d(qU) {
        qU && ng(qR)
      },
    }
  }
  function pA(qQ) {
    let qR,
      qS,
      qT,
      qU,
      qV,
      qW,
      qX,
      qY,
      qZ,
      r0,
      r1,
      r2,
      r3,
      r4,
      r5 = qQ[10]() + '',
      r6 = qQ[11]() + ''
    function r7(rj, rk) {
      return rj[3] ? pD : rj[6] ? pC : void 0
    }
    let r8 = r7(qQ),
      r9 = r8 && r8(qQ),
      rb = qQ[6] && pE(qQ),
      rg = qQ[7] && pF(qQ)
    return {
      c() {
        qR = nj('div')
        qS = nj('div')
        r9 && r9.c()
        qV = np()
        qW = nj('div')
        qX = nm(r5)
        qY = np()
        qZ = nj('div')
        r0 = nj('div')
        r1 = nm(r6)
        r2 = np()
        rb && rb.c()
        r3 = np()
        r4 = nj('div')
        rg && rg.c()
        nv(
          qS,
          'class',
          (qT =
            kF(
              'cf-checkbox ' +
                (qQ[3] || qQ[6] ? 'cf-checkbox-icon' : 'cf-checkbox-circle') +
                ' ' +
                (qQ[2] && 'cf-checkbox-pulse')
            ) + ' cf-1v4tsok')
        )
        nv(qS, 'tabindex', (qU = qQ[2] ? -1 : 0))
        nv(qS, 'role', 'checkbox')
        nv(qS, 'aria-checked', qQ[3])
        nv(qS, 'aria-live', 'assertive')
        nv(qS, 'aria-labelledby', 'cf-a11y-prompt')
        nv(qW, 'id', 'cf-a11y-prompt')
        nv(qW, 'aria-hidden', 'true')
        nx(qW, 'display', 'none')
        nv(qR, 'class', 'cf-checkbox-wrapper cf-1v4tsok')
        nv(qR, 'id', 'cf-pulse')
        nv(r0, 'class', 'cf-button__label cf-1v4tsok')
        nv(qZ, 'class', 'cf-button__prompts cf-1v4tsok')
        nv(r4, 'class', 'cf-1v4tsok')
        nx(r4, 'z-index', 1)
      },
      m(rj, rk) {
        nb(rj, qR, rk)
        n9(qR, qS)
        r9 && r9.m(qS, null)
        n9(qR, qV)
        n9(qR, qW)
        n9(qW, qX)
        nb(rj, qY, rk)
        nb(rj, qZ, rk)
        n9(qZ, r0)
        n9(r0, r1)
        n9(qZ, r2)
        rb && rb.m(qZ, null)
        nb(rj, r3, rk)
        nb(rj, r4, rk)
        rg && rg.m(r4, null)
      },
      p(rj, rk) {
        r8 !== (r8 = r7(rj)) &&
          (r9 && r9.d(1), (r9 = r8 && r8(rj)), r9 && (r9.c(), r9.m(qS, null)))
        76 & rk &&
          qT !==
            (qT =
              kF(
                'cf-checkbox ' +
                  (rj[3] || rj[6] ? 'cf-checkbox-icon' : 'cf-checkbox-circle') +
                  ' ' +
                  (rj[2] && 'cf-checkbox-pulse')
              ) + ' cf-1v4tsok') &&
          nv(qS, 'class', qT)
        4 & rk && qU !== (qU = rj[2] ? -1 : 0) && nv(qS, 'tabindex', qU)
        8 & rk && nv(qS, 'aria-checked', rj[3])
        1024 & rk && r5 !== (r5 = rj[10]() + '') && nw(qX, r5)
        2048 & rk && r6 !== (r6 = rj[11]() + '') && nw(r1, r6)
        rj[6]
          ? rb
            ? rb.p(rj, rk)
            : ((rb = pE(rj)), rb.c(), rb.m(qZ, null))
          : rb && (rb.d(1), (rb = null))
        rj[7]
          ? rg
            ? rg.p(rj, rk)
            : ((rg = pF(rj)), rg.c(), rg.m(r4, null))
          : rg && (rg.d(1), (rg = null))
      },
      i: kq,
      o: kq,
      d(rj) {
        rj && (ng(qR), ng(qY), ng(qZ), ng(r3), ng(r4))
        r9 && r9.d()
        rb && rb.d()
        rg && rg.d()
      },
    }
  }
  function pB(qQ) {
    let qR, qS, qT
    return (
      (qS = new py({})),
      {
        c() {
          qR = nj('div')
          nZ(qS['$$'].fragment)
          nv(qR, 'class', 'cf-button__loader cf-1v4tsok')
        },
        m(qU, qV) {
          nb(qU, qR, qV)
          o0(qS, qR, null)
          qT = true
        },
        p: kq,
        i(qU) {
          qT || (nX(qS['$$'].fragment, qU), (qT = true))
        },
        o(qU) {
          nY(qS['$$'].fragment, qU)
          qT = false
        },
        d(qU) {
          qU && ng(qR)
          o1(qS)
        },
      }
    )
  }
  function pC(qQ) {
    let qR, qS
    return {
      c() {
        qR = nk('svg')
        qS = nk('path')
        nv(
          qS,
          'd',
          'M0.877075 7.49988C0.877075 3.84219 3.84222 0.877045 7.49991 0.877045C11.1576 0.877045 14.1227 3.84219 14.1227 7.49988C14.1227 11.1575 11.1576 14.1227 7.49991 14.1227C3.84222 14.1227 0.877075 11.1575 0.877075 7.49988ZM7.49991 1.82704C4.36689 1.82704 1.82708 4.36686 1.82708 7.49988C1.82708 10.6329 4.36689 13.1727 7.49991 13.1727C10.6329 13.1727 13.1727 10.6329 13.1727 7.49988C13.1727 4.36686 10.6329 1.82704 7.49991 1.82704ZM9.85358 5.14644C10.0488 5.3417 10.0488 5.65829 9.85358 5.85355L8.20713 7.49999L9.85358 9.14644C10.0488 9.3417 10.0488 9.65829 9.85358 9.85355C9.65832 10.0488 9.34173 10.0488 9.14647 9.85355L7.50002 8.2071L5.85358 9.85355C5.65832 10.0488 5.34173 10.0488 5.14647 9.85355C4.95121 9.65829 4.95121 9.3417 5.14647 9.14644L6.79292 7.49999L5.14647 5.85355C4.95121 5.65829 4.95121 5.3417 5.14647 5.14644C5.34173 4.95118 5.65832 4.95118 5.85358 5.14644L7.50002 6.79289L9.14647 5.14644C9.34173 4.95118 9.65832 4.95118 9.85358 5.14644Z'
        )
        nv(qS, 'fill', 'currentColor')
        nv(qS, 'fill-rule', 'evenodd')
        nv(qS, 'clip-rule', 'evenodd')
        nv(qR, 'width', '30')
        nv(qR, 'height', '30')
        nv(qR, 'viewBox', '0 0 15 15')
        nv(qR, 'fill', 'none')
        nv(qR, 'xmlns', 'http://www.w3.org/2000/svg')
        nx(qR, 'display', 'block')
        nx(qR, 'color', 'var(--cf-error, #ec4a4a)')
        nv(qR, 'aria-hidden', 'true')
        nv(qR, 'class', 'cf-1v4tsok')
      },
      m(qT, qU) {
        nb(qT, qR, qU)
        n9(qR, qS)
      },
      d(qT) {
        qT && ng(qR)
      },
    }
  }
  function pD(qQ) {
    let qR, qS
    return {
      c() {
        qR = nk('svg')
        qS = nk('path')
        nv(qS, 'class', 'cf-checkbox-wrapper__check cf-1v4tsok')
        nv(qS, 'stroke-linecap', 'round')
        nv(qS, 'stroke-linejoin', 'round')
        nv(qS, 'stroke-width', '2')
        nv(qS, 'd', 'M6 14l4 4L19 8')
        nv(qS, 'style', 'stroke-width: 2; d: path("M6 14l4 4L19 8")')
        nv(qR, 'xmlns', 'http://www.w3.org/2000/svg')
        nv(qR, 'fill', 'none')
        nv(qR, 'width', '30')
        nv(qR, 'height', '30')
        nv(qR, 'viewBox', '0 0 26 26')
        nv(qR, 'stroke', 'currentColor')
        nv(qR, 'style', 'stroke: currentColor; fill: none;')
        nv(qR, 'aria-hidden', 'true')
        nv(qR, 'class', 'cf-1v4tsok')
      },
      m(qT, qU) {
        nb(qT, qR, qU)
        n9(qR, qS)
      },
      d(qT) {
        qT && ng(qR)
      },
    }
  }
  function pE(qQ) {
    let qR,
      qS,
      qT,
      qU,
      qV = qQ[9].retry + ''
    return {
      c() {
        qR = nj('div')
        qS = nm(qV)
        nv(qR, 'tabindex', '0')
        nv(qR, 'role', 'button')
        nv(qR, 'class', 'cf-button__retry cf-1v4tsok')
      },
      m(qW, qX) {
        nb(qW, qR, qX)
        n9(qR, qS)
        qT ||
          ((qU = [nq(qR, 'click', qQ[14]), nq(qR, 'keydown', qQ[15])]),
          (qT = true))
      },
      p(qW, qX) {
        512 & qX && qV !== (qV = qW[9].retry + '') && nw(qS, qV)
      },
      d(qW) {
        qW && ng(qR)
        qT = false
        kx(qU)
      },
    }
  }
  function pF(qQ) {
    let qR, qS, qT, qU, qV, qW
    return {
      c() {
        var qX
        qR = nj('a')
        qS = nk('svg')
        qT = nk('g')
        qU = nk('ellipse')
        qV = nk('path')
        nv(
          qU,
          'style',
          'cx: 256; cy:256.294; fill: currentColor; rx: 239; ry: 236.294;'
        )
        nv(qU, 'cx', '256')
        nv(qU, 'cy', '256.294')
        nv(qU, 'fill', 'currentColor')
        nv(qU, 'rx', '239')
        nv(qU, 'ry', '236.294')
        nv(qV, 'fill', 'rgb(255,255,255)')
        nv(qV, 'fill-rule', 'evenodd')
        nv(
          qV,
          'd',
          'M92.47368842 282.41344089l45.94954585 15.9178263 121.63115076 111.42478413L360.06222011 308.9431514l59.46411815-29.18268155-27.02914461-39.79456576 16.21748676-119.38369729-86.49326276 95.50695783h-130.0365555l-78.08785803-95.50695783 6.29581295 116.4727985-27.91912865 45.3584356z'
        )
        nv(
          qV,
          'style',
          'fill: rgb(255,255,255); fill-rule: evenodd; d: path("M 92.4737 282.413 l 45.9495 15.9178 l 121.631 111.425 L 360.062 308.943 l 59.4641 -29.1827 l -27.0291 -39.7946 l 16.2175 -119.384 l -86.4933 95.507 h -130.037 l -78.0879 -95.507 l 6.29581 116.473 l -27.9191 45.3584 Z");'
        )
        nv(qS, 'xmlns', 'http://www.w3.org/2000/svg')
        nv(qS, 'width', '30')
        nv(qS, 'height', '30')
        nv(qS, 'viewBox', '0 0 512 512')
        nv(qS, 'class', 'cf-button__logo cf-1v4tsok')
        nv(qS, 'aria-hidden', 'true')
        nv(qS, 'role', 'img')
        nv(qR, 'href', 'https://captchafox.com')
        nv(
          qR,
          'aria-label',
          (qW = null === (qX = qQ[8]) || void 0 === qX ? void 0 : qX.link)
        )
        nv(qR, 'target', '_blank')
        nv(qR, 'class', 'cf-button__logo cf-1v4tsok')
      },
      m(qX, qY) {
        nb(qX, qR, qY)
        n9(qR, qS)
        n9(qS, qT)
        n9(qT, qU)
        n9(qT, qV)
      },
      p(qX, qY) {
        var qZ
        256 & qY &&
          qW !==
            (qW = null === (qZ = qX[8]) || void 0 === qZ ? void 0 : qZ.link) &&
          nv(qR, 'aria-label', qW)
      },
      d(qX) {
        qX && ng(qR)
      },
    }
  }
  function pG(qQ) {
    let qR,
      qS,
      qT,
      qU,
      qV,
      qW,
      qX,
      qY = (qQ[4] || qQ[5]) && pz(qQ)
    const qZ = [pB, pA],
      r0 = []
    function r1(r2, r3) {
      return r2[1] ? 0 : 1
    }
    return (
      (qT = r1(qQ)),
      (qU = r0[qT] = qZ[qT](qQ)),
      {
        c() {
          qR = nj('div')
          qY && qY.c()
          qS = np()
          qU.c()
          nv(qR, 'class', 'cf-button cf-1v4tsok')
          nB(qR, 'loading', qQ[1])
          nB(qR, 'cf-success', qQ[3])
          nB(qR, 'cf-error', qQ[6])
        },
        m(r2, r3) {
          nb(r2, qR, r3)
          qY && qY.m(qR, null)
          n9(qR, qS)
          r0[qT].m(qR, null)
          qQ[17](qR)
          qV = true
          qW ||
            ((qX = [nq(qR, 'click', qQ[12]), nq(qR, 'keydown', qQ[13])]),
            (qW = true))
        },
        p(r2, [r3]) {
          r2[4] || r2[5]
            ? qY
              ? qY.p(r2, r3)
              : ((qY = pz(r2)), qY.c(), qY.m(qR, qS))
            : qY && (qY.d(1), (qY = null))
          let r4 = qT
          qT = r1(r2)
          qT === r4
            ? r0[qT].p(r2, r3)
            : (nV(),
              nY(r0[r4], 1, 1, () => {
                r0[r4] = null
              }),
              nW(),
              (qU = r0[qT]),
              qU ? qU.p(r2, r3) : ((qU = r0[qT] = qZ[qT](r2)), qU.c()),
              nX(qU, 1),
              qU.m(qR, null))
          ;(!qV || 2 & r3) && nB(qR, 'loading', r2[1])
          ;(!qV || 8 & r3) && nB(qR, 'cf-success', r2[3])
          ;(!qV || 64 & r3) && nB(qR, 'cf-error', r2[6])
        },
        i(r2) {
          qV || (nX(qU), (qV = true))
        },
        o(r2) {
          nY(qU)
          qV = false
        },
        d(r2) {
          r2 && ng(qR)
          qY && qY.d()
          r0[qT].d()
          qQ[17](null)
          qW = false
          kx(qX)
        },
      }
    )
  }
  function pH(qQ, qR, qS) {
    let qT,
      qU,
      qV,
      qW,
      { loading: qX = false } = qR,
      { progress: qY = false } = qR,
      { success: qZ = false } = qR,
      { networkError: r0 = null } = qR,
      { isTestMode: r1 = false } = qR,
      { error: r2 = !!r0 } = qR,
      { brand: r3 = true } = qR,
      { ref: r4 = null } = qR,
      { labels: r5 } = qR
    const r6 = nF(),
      r7 = p6.en,
      r8 = (r9) => {
        r9.stopPropagation()
        r6('retry')
      }
    return (
      (qQ['$$set'] = (r9) => {
        'loading' in r9 && qS(1, (qX = r9.loading))
        'progress' in r9 && qS(2, (qY = r9.progress))
        'success' in r9 && qS(3, (qZ = r9.success))
        'networkError' in r9 && qS(4, (r0 = r9.networkError))
        'isTestMode' in r9 && qS(5, (r1 = r9.isTestMode))
        'error' in r9 && qS(6, (r2 = r9.error))
        'brand' in r9 && qS(7, (r3 = r9.brand))
        'ref' in r9 && qS(0, (r4 = r9.ref))
        'labels' in r9 && qS(16, (r5 = r9.labels))
      }),
      (qQ['$$'].update = () => {
        65536 & qQ['$$'].dirty &&
          qS(9, (qT = Object.assign(Object.assign({}, r7), r5)))
        512 & qQ['$$'].dirty && qS(8, (qU = qT.ally || r7.ally))
        588 & qQ['$$'].dirty &&
          qS(
            11,
            (qV = () =>
              qY ? qT.progress : qZ ? qT.success : r2 ? qT.error : qT.initial)
          )
        264 & qQ['$$'].dirty &&
          qS(10, (qW = () => (qZ ? qU.success : qU.initial)))
      }),
      [
        r4,
        qX,
        qY,
        qZ,
        r0,
        r1,
        r2,
        r3,
        qU,
        qT,
        qW,
        qV,
        () => {
          r2 || r6('click', { ally: false })
        },
        (r9) => {
          pw(r9) && !r2 && r6('click', { ally: true })
        },
        r8,
        (r9) => {
          pw(r9) && r8(r9)
        },
        r5,
        function (r9) {
          nH[r9 ? 'unshift' : 'push'](() => {
            r4 = r9
            qS(0, r4)
          })
        },
      ]
    )
  }
  class pI extends o3 {
    constructor(qQ) {
      super()
      o2(this, qQ, pH, pG, kz, {
        loading: 1,
        progress: 2,
        success: 3,
        networkError: 4,
        isTestMode: 5,
        error: 6,
        brand: 7,
        ref: 0,
        labels: 16,
      })
    }
  }
  function pJ(qQ) {
    let qR, qS, qT, qU
    return {
      c() {
        qR = nk('svg')
        qS = nk('g')
        qT = nk('ellipse')
        qU = nk('path')
        nv(qT, 'cx', '256')
        nv(qT, 'cy', '256.294')
        nv(qT, 'fill', 'currentColor')
        nv(qT, 'rx', '239')
        nv(qT, 'ry', '236.294')
        nv(qU, 'fill', 'rgb(255,255,255)')
        nv(qU, 'fill-rule', 'evenodd')
        nv(
          qU,
          'd',
          'M92.47368842 282.41344089l45.94954585 15.9178263 121.63115076 111.42478413L360.06222011 308.9431514l59.46411815-29.18268155-27.02914461-39.79456576 16.21748676-119.38369729-86.49326276 95.50695783h-130.0365555l-78.08785803-95.50695783 6.29581295 116.4727985-27.91912865 45.3584356z'
        )
        nv(qR, 'class', 'cf-challenge__header-logo cf-uhjbp1')
        nv(qR, 'xmlns', 'http://www.w3.org/2000/svg')
        nv(qR, 'width', '25')
        nv(qR, 'height', '25')
        nv(qR, 'viewBox', '0 0 512 512')
        nv(qR, 'aria-hidden', 'true')
        nv(qR, 'role', 'img')
      },
      m(qV, qW) {
        nb(qV, qR, qW)
        n9(qR, qS)
        n9(qS, qT)
        n9(qS, qU)
      },
      d(qV) {
        qV && ng(qR)
      },
    }
  }
  function pK(qQ) {
    let qR, qS, qT, qU, qV, qW
    return {
      c() {
        var qX
        qR = nj('button')
        qS = nk('svg')
        qT = nk('path')
        nv(qT, 'stroke-linecap', 'round')
        nv(qT, 'stroke-linejoin', 'round')
        nv(
          qT,
          'd',
          'M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z'
        )
        nv(qS, 'width', '24')
        nv(qS, 'height', '24')
        nv(qS, 'xmlns', 'http://www.w3.org/2000/svg')
        nv(qS, 'fill', 'none')
        nv(qS, 'viewBox', '0 0 24 24')
        nv(qS, 'stroke-width', '1.5')
        nv(qS, 'stroke', 'currentColor')
        nv(qS, 'aria-hidden', 'true')
        nv(qS, 'class', 'cf-uhjbp1')
        nv(qR, 'class', 'cf-challenge__button cf-uhjbp1')
        nv(
          qR,
          'aria-label',
          (qU = null === (qX = qQ[6].ally) || void 0 === qX ? void 0 : qX.audio)
        )
      },
      m(qX, qY) {
        nb(qX, qR, qY)
        n9(qR, qS)
        n9(qS, qT)
        qV || ((qW = nq(qR, 'click', qQ[10])), (qV = true))
      },
      p(qX, qY) {
        var qZ
        64 & qY &&
          qU !==
            (qU =
              null === (qZ = qX[6].ally) || void 0 === qZ
                ? void 0
                : qZ.audio) &&
          nv(qR, 'aria-label', qU)
      },
      d(qX) {
        qX && ng(qR)
        qV = false
        qW()
      },
    }
  }
  function pL(qQ) {
    let qR, qS, qT, qU, qV, qW, qX
    return {
      c() {
        var qY
        qR = nj('button')
        qS = nk('svg')
        qT = nk('path')
        qU = nk('path')
        nv(qT, 'stroke-linecap', 'round')
        nv(qT, 'stroke-linejoin', 'round')
        nv(
          qT,
          'd',
          'M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z'
        )
        nv(qU, 'stroke-linecap', 'round')
        nv(qU, 'stroke-linejoin', 'round')
        nv(qU, 'd', 'M15 12a3 3 0 11-6 0 3 3 0 016 0z')
        nv(qS, 'width', '24')
        nv(qS, 'height', '24')
        nv(qS, 'xmlns', 'http://www.w3.org/2000/svg')
        nv(qS, 'fill', 'none')
        nv(qS, 'viewBox', '0 0 24 24')
        nv(qS, 'stroke-width', '1.5')
        nv(qS, 'stroke', 'currentColor')
        nv(qS, 'class', 'w-6 h-6 cf-uhjbp1')
        nv(qS, 'aria-hidden', 'true')
        nv(qR, 'class', 'cf-challenge__button cf-uhjbp1')
        nv(
          qR,
          'aria-label',
          (qV =
            null === (qY = qQ[6].ally) || void 0 === qY ? void 0 : qY.visual)
        )
      },
      m(qY, qZ) {
        nb(qY, qR, qZ)
        n9(qR, qS)
        n9(qS, qT)
        n9(qS, qU)
        qW || ((qX = nq(qR, 'click', qQ[11])), (qW = true))
      },
      p(qY, qZ) {
        var r0
        64 & qZ &&
          qV !==
            (qV =
              null === (r0 = qY[6].ally) || void 0 === r0
                ? void 0
                : r0.visual) &&
          nv(qR, 'aria-label', qV)
      },
      d(qY) {
        qY && ng(qR)
        qW = false
        qX()
      },
    }
  }
  function pM(qQ) {
    let qR, qS, qT
    return (
      (qS = new py({})),
      {
        c() {
          qR = nj('div')
          nZ(qS['$$'].fragment)
          nv(qR, 'class', 'cf-challenge__loader cf-uhjbp1')
        },
        m(qU, qV) {
          nb(qU, qR, qV)
          o0(qS, qR, null)
          qT = true
        },
        i(qU) {
          qT || (nX(qS['$$'].fragment, qU), (qT = true))
        },
        o(qU) {
          nY(qS['$$'].fragment, qU)
          qT = false
        },
        d(qU) {
          qU && ng(qR)
          o1(qS)
        },
      }
    )
  }
  function pN(qQ) {
    let qR,
      qS,
      qT,
      qU,
      qV,
      qW,
      qX,
      qY,
      qZ,
      r0,
      r1,
      r2,
      r3,
      r4,
      r5,
      r6,
      r7,
      r8,
      r9,
      rb,
      rg,
      rj,
      rk,
      rm = qQ[5] && pJ()
    function rp(rz, rA) {
      return rz[0] ? pL : pK
    }
    let rq = rp(qQ),
      rv = rq(qQ)
    const rw = qQ[18].default,
      rx = kA(rw, qQ, qQ[17], null)
    let ry = qQ[7] && pM()
    return {
      c() {
        var rz, rA
        qR = nj('div')
        qS = nj('div')
        rm && rm.c()
        qT = np()
        qU = nj('div')
        rv.c()
        qV = np()
        qW = nj('button')
        qX = nk('svg')
        qY = nk('path')
        r0 = np()
        r1 = nj('button')
        r2 = nk('svg')
        r3 = nk('path')
        r5 = np()
        r6 = nj('div')
        r7 = np()
        r8 = nj('div')
        r9 = nj('div')
        rx && rx.c()
        rb = np()
        ry && ry.c()
        nv(
          qY,
          'd',
          'M1.84998 7.49998C1.84998 4.66458 4.05979 1.84998 7.49998 1.84998C10.2783 1.84998 11.6515 3.9064 12.2367 5H10.5C10.2239 5 10 5.22386 10 5.5C10 5.77614 10.2239 6 10.5 6H13.5C13.7761 6 14 5.77614 14 5.5V2.5C14 2.22386 13.7761 2 13.5 2C13.2239 2 13 2.22386 13 2.5V4.31318C12.2955 3.07126 10.6659 0.849976 7.49998 0.849976C3.43716 0.849976 0.849976 4.18537 0.849976 7.49998C0.849976 10.8146 3.43716 14.15 7.49998 14.15C9.44382 14.15 11.0622 13.3808 12.2145 12.2084C12.8315 11.5806 13.3133 10.839 13.6418 10.0407C13.7469 9.78536 13.6251 9.49315 13.3698 9.38806C13.1144 9.28296 12.8222 9.40478 12.7171 9.66014C12.4363 10.3425 12.0251 10.9745 11.5013 11.5074C10.5295 12.4963 9.16504 13.15 7.49998 13.15C4.05979 13.15 1.84998 10.3354 1.84998 7.49998Z'
        )
        nv(qY, 'fill', 'currentColor')
        nv(qY, 'fill-rule', 'evenodd')
        nv(qY, 'clip-rule', 'evenodd')
        nv(qX, 'width', '22')
        nv(qX, 'height', '22')
        nv(qX, 'viewBox', '0 0 15 15')
        nv(qX, 'fill', 'none')
        nv(qX, 'xmlns', 'http://www.w3.org/2000/svg')
        nv(qX, 'aria-hidden', 'true')
        nv(qX, 'class', 'cf-uhjbp1')
        nv(qW, 'class', 'cf-challenge__button cf-uhjbp1')
        nv(qW, 'id', 'challenge-refresh')
        nv(
          qW,
          'aria-label',
          (qZ =
            null === (rz = qQ[6].ally) || void 0 === rz ? void 0 : rz.refresh)
        )
        nv(
          r3,
          'd',
          'M0.877075 7.49988C0.877075 3.84219 3.84222 0.877045 7.49991 0.877045C11.1576 0.877045 14.1227 3.84219 14.1227 7.49988C14.1227 11.1575 11.1576 14.1227 7.49991 14.1227C3.84222 14.1227 0.877075 11.1575 0.877075 7.49988ZM7.49991 1.82704C4.36689 1.82704 1.82708 4.36686 1.82708 7.49988C1.82708 10.6329 4.36689 13.1727 7.49991 13.1727C10.6329 13.1727 13.1727 10.6329 13.1727 7.49988C13.1727 4.36686 10.6329 1.82704 7.49991 1.82704ZM9.85358 5.14644C10.0488 5.3417 10.0488 5.65829 9.85358 5.85355L8.20713 7.49999L9.85358 9.14644C10.0488 9.3417 10.0488 9.65829 9.85358 9.85355C9.65832 10.0488 9.34173 10.0488 9.14647 9.85355L7.50002 8.2071L5.85358 9.85355C5.65832 10.0488 5.34173 10.0488 5.14647 9.85355C4.95121 9.65829 4.95121 9.3417 5.14647 9.14644L6.79292 7.49999L5.14647 5.85355C4.95121 5.65829 4.95121 5.3417 5.14647 5.14644C5.34173 4.95118 5.65832 4.95118 5.85358 5.14644L7.50002 6.79289L9.14647 5.14644C9.34173 4.95118 9.65832 4.95118 9.85358 5.14644Z'
        )
        nv(r3, 'fill', 'currentColor')
        nv(r3, 'fill-rule', 'evenodd')
        nv(r3, 'clip-rule', 'evenodd')
        nv(r2, 'width', '24')
        nv(r2, 'height', '24')
        nv(r2, 'viewBox', '0 0 15 15')
        nv(r2, 'fill', 'none')
        nv(r2, 'xmlns', 'http://www.w3.org/2000/svg')
        nv(r2, 'aria-hidden', 'true')
        nv(r2, 'class', 'cf-uhjbp1')
        nv(r1, 'class', 'cf-challenge__button cf-uhjbp1')
        nv(r1, 'id', 'challenge-close')
        nv(
          r1,
          'aria-label',
          (r4 = null === (rA = qQ[6].ally) || void 0 === rA ? void 0 : rA.close)
        )
        nx(qU, 'display', 'inline-flex')
        nv(qS, 'class', 'cf-challenge__header cf-uhjbp1')
        nv(r6, 'class', 'cf-challenge__status cf-uhjbp1')
        nB(r6, 'error', qQ[3])
        nB(r6, 'success', qQ[4])
        nB(r6, 'loading', qQ[7] || (!qQ[4] && qQ[2]))
        nv(r9, 'class', 'cf-uhjbp1')
        nB(r9, 'visible', qQ[9])
        nv(r8, 'class', 'cf-challenge__content cf-uhjbp1')
        nv(qR, 'class', 'cf-challenge cf-uhjbp1')
        nv(qR, 'style', qQ[1])
        nv(qR, 'tabindex', '-1')
      },
      m(rz, rA) {
        nb(rz, qR, rA)
        n9(qR, qS)
        rm && rm.m(qS, null)
        n9(qS, qT)
        n9(qS, qU)
        rv.m(qU, null)
        n9(qU, qV)
        n9(qU, qW)
        n9(qW, qX)
        n9(qX, qY)
        n9(qU, r0)
        n9(qU, r1)
        n9(r1, r2)
        n9(r2, r3)
        n9(qR, r5)
        n9(qR, r6)
        n9(qR, r7)
        n9(qR, r8)
        n9(r8, r9)
        rx && rx.m(r9, null)
        n9(r8, rb)
        ry && ry.m(r8, null)
        qQ[19](qR)
        rg = true
        rj ||
          ((rk = [nq(qW, 'click', qQ[12]), nq(r1, 'click', qQ[13])]),
          (rj = true))
      },
      p(rz, [rA]) {
        var rB, rC
        rz[5]
          ? rm || ((rm = pJ()), rm.c(), rm.m(qS, qT))
          : rm && (rm.d(1), (rm = null))
        rq === (rq = rp(rz)) && rv
          ? rv.p(rz, rA)
          : (rv.d(1), (rv = rq(rz)), rv && (rv.c(), rv.m(qU, qV)))
        ;(!rg ||
          (64 & rA &&
            qZ !==
              (qZ =
                null === (rB = rz[6].ally) || void 0 === rB
                  ? void 0
                  : rB.refresh))) &&
          nv(qW, 'aria-label', qZ)
        ;(!rg ||
          (64 & rA &&
            r4 !==
              (r4 =
                null === (rC = rz[6].ally) || void 0 === rC
                  ? void 0
                  : rC.close))) &&
          nv(r1, 'aria-label', r4)
        ;(!rg || 8 & rA) && nB(r6, 'error', rz[3])
        ;(!rg || 16 & rA) && nB(r6, 'success', rz[4])
        ;(!rg || 148 & rA) && nB(r6, 'loading', rz[7] || (!rz[4] && rz[2]))
        rx &&
          rx.p &&
          (!rg || 131072 & rA) &&
          kD(
            rx,
            rw,
            rz,
            rz[17],
            rg ? kC(rw, rz[17], rA, null) : kE(rz[17]),
            null
          )
        ;(!rg || 512 & rA) && nB(r9, 'visible', rz[9])
        rz[7]
          ? ry
            ? 128 & rA && nX(ry, 1)
            : ((ry = pM()), ry.c(), nX(ry, 1), ry.m(r8, null))
          : ry &&
            (nV(),
            nY(ry, 1, 1, () => {
              ry = null
            }),
            nW())
        ;(!rg || 2 & rA) && nv(qR, 'style', rz[1])
      },
      i(rz) {
        rg || (nX(rx, rz), nX(ry), (rg = true))
      },
      o(rz) {
        nY(rx, rz)
        nY(ry)
        rg = false
      },
      d(rz) {
        rz && ng(qR)
        rm && rm.d()
        rv.d()
        rx && rx.d(rz)
        ry && ry.d()
        qQ[19](null)
        rj = false
        kx(rk)
      },
    }
  }
  function pO(qQ, qR, qS) {
    let qT,
      qU,
      { $$slots: qV = {}, $$scope: qW } = qR,
      { style: qX } = qR,
      { isContentHidden: qY = true } = qR,
      { isAudio: qZ = false } = qR,
      { loading: r0 = false } = qR,
      { error: r1 = false } = qR,
      { success: r2 = false } = qR,
      { brand: r3 = true } = qR,
      { focus: r4 = false } = qR,
      { labels: r5 } = qR,
      r6 = true,
      r7 = false
    nE(() => {
      r4 && qU.focus()
    })
    const r8 = nF(),
      r9 = (rj = false) => {
        qS(7, (r7 = !(!qY || !rj)))
      },
      rb =
        ((rg = function () {
          return (
            r9(),
            (rj = o6(0.4)),
            (rk = function () {
              r9(true)
            }),
            (rj && rj.then) || (rj = Promise.resolve(rj)),
            rk ? rj.then(rk) : rj
          )
          var rj, rk
        }),
        function () {
          for (var rj = [], rk = 0; rk < arguments.length; rk++) {
            rj[rk] = arguments[rk]
          }
          try {
            return Promise.resolve(rg.apply(this, rj))
          } catch (rm) {
            return Promise.reject(rm)
          }
        })
    var rg
    return (
      nE(() => {
        setTimeout(() => qS(16, (r6 = false)), 200)
      }),
      ((qQ['$$set'] = (rj) => {
        'style' in rj && qS(1, (qX = rj.style))
        'isContentHidden' in rj && qS(14, (qY = rj.isContentHidden))
        'isAudio' in rj && qS(0, (qZ = rj.isAudio))
        'loading' in rj && qS(2, (r0 = rj.loading))
        'error' in rj && qS(3, (r1 = rj.error))
        'success' in rj && qS(4, (r2 = rj.success))
        'brand' in rj && qS(5, (r3 = rj.brand))
        'focus' in rj && qS(15, (r4 = rj.focus))
        'labels' in rj && qS(6, (r5 = rj.labels))
        '$$scope' in rj && qS(17, (qW = rj['$$scope']))
      }),
      (qQ['$$'].update = () => {
        81920 & qQ['$$'].dirty && qS(9, (qT = !r6 && !qY))
        16384 & qQ['$$'].dirty && rb()
      }),
      [
        qZ,
        qX,
        r0,
        r1,
        r2,
        r3,
        r5,
        r7,
        qU,
        qT,
        () => {
          qS(0, (qZ = true))
          r8('audio')
        },
        () => {
          qS(0, (qZ = false))
          r8('visual')
        },
        () => {
          r8('refresh')
        },
        () => {
          r8('close')
        },
        qY,
        r4,
        r6,
        qW,
        qV,
        function (rj) {
          nH[rj ? 'unshift' : 'push'](() => {
            qU = rj
            qS(8, qU)
          })
        },
      ])
    )
  }
  class pP extends o3 {
    constructor(qQ) {
      super()
      o2(this, qQ, pO, pN, kz, {
        style: 1,
        isContentHidden: 14,
        isAudio: 0,
        loading: 2,
        error: 3,
        success: 4,
        brand: 5,
        focus: 15,
        labels: 6,
      })
    }
  }
  function pQ(qQ, qR) {
    var qS = qQ()
    return qS && qS.then ? qS.then(qR) : qR(qS)
  }
  function pR(qQ, qR = 'body') {
    const qS =
      ((qT = function (qV) {
        return (
          (qR = qV),
          pQ(
            function () {
              if ('string' == typeof qR) {
                return (
                  (qU = document.querySelector(qR)),
                  pQ(
                    function () {
                      if (null === qU) {
                        return (function (qW, qX, qY) {
                          try {
                            var qZ = Promise.resolve(qW())
                            return qX ? qZ.then(qX) : qZ
                          } catch (r0) {
                            return Promise.reject(r0)
                          }
                        })(nN, function () {
                          qU = document.querySelector(qR)
                        })
                      }
                    },
                    function () {
                      if (null === qU) {
                        throw new Error(
                          'No element found matching css selector: "' + qR + '"'
                        )
                      }
                    }
                  )
                )
              }
              if (!(qR instanceof HTMLElement)) {
                throw new TypeError(
                  'Unknown portal target type: ' +
                    (null === qR ? 'null' : typeof qR) +
                    '. Allowed types: string (CSS selector) or HTMLElement.'
                )
              }
              qU = qR
            },
            function (qW) {
              qU.appendChild(qQ)
              qQ.hidden = false
            }
          )
        )
      }),
      function () {
        for (var qV = [], qW = 0; qW < arguments.length; qW++) {}
        try {
          return Promise.resolve(qT.apply(this, qV))
        } catch (qX) {
          return Promise.reject(qX)
        }
      })
    var qT
    let qU
    return (
      qS(qR),
      {
        update: qS,
        destroy: function () {
          qQ.parentNode && qQ.parentNode.removeChild(qQ)
        },
      }
    )
  }
  function pS(qQ) {
    let qR,
      qS,
      qT,
      qU,
      qV,
      qW,
      qX,
      qY,
      qZ,
      r0 = !qQ[3] && pT()
    const r1 = qQ[10].default,
      r2 = kA(r1, qQ, qQ[9], null)
    return {
      c() {
        qR = nj('div')
        qS = np()
        qT = nj('div')
        r0 && r0.c()
        qU = np()
        qV = nj('div')
        r2 && r2.c()
        nv(qR, 'class', 'cf-modal__backdrop')
        nv(qR, 'role', 'presentation')
        nx(qR, 'opacity', qQ[3] ? 0.3 : 0)
        nv(qV, 'class', 'cf-modal__challenge')
        nO(() => qQ[11].call(qV))
        nB(qV, 'animated', qQ[7])
        nx(qV, 'top', qQ[8])
        nv(qT, 'class', 'cf-modal__wrap')
        nB(qT, 'center', qQ[3])
      },
      m(r3, r4) {
        nb(r3, qR, r4)
        nb(r3, qS, r4)
        nb(r3, qT, r4)
        r0 && r0.m(qT, null)
        n9(qT, qU)
        n9(qT, qV)
        r2 && r2.m(qV, null)
        qW = (function (r5, r6) {
          'static' === getComputedStyle(r5).position &&
            (r5.style.position = 'relative')
          const r7 = nj('iframe')
          r7.setAttribute(
            'style',
            'display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;'
          )
          r7.setAttribute('aria-hidden', 'true')
          r7.tabIndex = -1
          const r8 = nA()
          let r9
          return (
            r8
              ? ((r7.src =
                  "data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}</script>"),
                (r9 = nq(window, 'message', (rb) => {
                  rb.source === r7.contentWindow && r6()
                })))
              : ((r7.src = 'about:blank'),
                (r7.onload = () => {
                  r9 = nq(r7.contentWindow, 'resize', r6)
                  r6()
                })),
            n9(r5, r7),
            () => {
              ;(r8 || (r9 && r7.contentWindow)) && r9()
              ng(r7)
            }
          )
        })(qV, qQ[11].bind(qV))
        qX = true
        qY ||
          ((qZ = nq(qR, 'click', function () {
            ky(qQ[2]) && qQ[2].apply(this, arguments)
          })),
          (qY = true))
      },
      p(r3, r4) {
        qQ = r3
        8 & r4 && nx(qR, 'opacity', qQ[3] ? 0.3 : 0)
        qQ[3]
          ? r0 && (r0.d(1), (r0 = null))
          : r0 || ((r0 = pT()), r0.c(), r0.m(qT, qU))
        r2 &&
          r2.p &&
          (!qX || 512 & r4) &&
          kD(r2, r1, qQ, qQ[9], qX ? kC(r1, qQ[9], r4, null) : kE(qQ[9]), null)
        ;(!qX || 128 & r4) && nB(qV, 'animated', qQ[7])
        256 & r4 && nx(qV, 'top', qQ[8])
        ;(!qX || 8 & r4) && nB(qT, 'center', qQ[3])
      },
      i(r3) {
        qX || (nX(r2, r3), (qX = true))
      },
      o(r3) {
        nY(r2, r3)
        qX = false
      },
      d(r3) {
        r3 && (ng(qR), ng(qS), ng(qT))
        r0 && r0.d()
        r2 && r2.d(r3)
        qW()
        qY = false
        qZ()
      },
    }
  }
  function pT(qQ) {
    let qR
    return {
      c() {
        qR = nj('div')
        qR.innerHTML =
          '<div class="cf-modal__arrow-out"></div> <div class="cf-modal__arrow-in"></div>'
        nv(qR, 'class', 'cf-modal__arrow')
      },
      m(qS, qT) {
        nb(qS, qR, qT)
      },
      d(qS) {
        qS && ng(qR)
      },
    }
  }
  function pU(qQ) {
    let qR,
      qS,
      qT,
      qU,
      qV,
      qW,
      qX = qQ[1] && pS(qQ)
    return {
      c() {
        var qY, qZ
        qR = nj('div')
        qX && qX.c()
        nv(qR, 'id', qQ[0])
        nv(qR, 'class', 'cf-modal')
        nv(qR, 'aria-modal', 'true')
        nv(qR, 'aria-hidden', (qS = !qQ[1]))
        nv(qR, 'role', 'dialog')
        nv(qR, 'tabindex', '-1')
        nx(qR, 'position', qQ[3] ? 'relative' : 'absolute')
        nx(qR, 'opacity', 1)
        nx(qR, 'z-index', qQ[1] ? 2147483647 : -2147483647)
        nx(qR, 'display', qQ[1] ? 'block' : 'none')
        nx(
          qR,
          'top',
          !qQ[3] &&
            (null === (qY = qQ[4]) || void 0 === qY ? void 0 : qY.top) + 'px'
        )
        nx(
          qR,
          'left',
          !qQ[3] &&
            (null === (qZ = qQ[4]) || void 0 === qZ ? void 0 : qZ.left) + 'px'
        )
      },
      m(qY, qZ) {
        var r0
        nb(qY, qR, qZ)
        qX && qX.m(qR, null)
        qU = true
        qV ||
          ((r0 = qT = pR.call(null, qR, qQ[5])),
          (qW = r0 && ky(r0.destroy) ? r0.destroy : kq),
          (qV = true))
      },
      p(qY, [qZ]) {
        var r0, r1
        ;(qY[1]
          ? qX
            ? (qX.p(qY, qZ), 2 & qZ && nX(qX, 1))
            : ((qX = pS(qY)), qX.c(), nX(qX, 1), qX.m(qR, null))
          : qX &&
            (nV(),
            nY(qX, 1, 1, () => {
              qX = null
            }),
            nW()),
        (!qU || 1 & qZ) && nv(qR, 'id', qY[0]),
        (!qU || (2 & qZ && qS !== (qS = !qY[1]))) && nv(qR, 'aria-hidden', qS),
        qT && ky(qT.update) && 32 & qZ && qT.update.call(null, qY[5]),
        8 & qZ && nx(qR, 'position', qY[3] ? 'relative' : 'absolute'),
        2 & qZ && nx(qR, 'z-index', qY[1] ? 2147483647 : -2147483647),
        2 & qZ && nx(qR, 'display', qY[1] ? 'block' : 'none'),
        24 & qZ) &&
          nx(
            qR,
            'top',
            !qY[3] &&
              (null === (r0 = qY[4]) || void 0 === r0 ? void 0 : r0.top) + 'px'
          )
        24 & qZ &&
          nx(
            qR,
            'left',
            !qY[3] &&
              (null === (r1 = qY[4]) || void 0 === r1 ? void 0 : r1.left) + 'px'
          )
      },
      i(qY) {
        qU || (nX(qX), (qU = true))
      },
      o(qY) {
        nY(qX)
        qU = false
      },
      d(qY) {
        qY && ng(qR)
        qX && qX.d()
        qV = false
        qW()
      },
    }
  }
  function pW(qQ, qR, qS) {
    let qT,
      qU,
      { $$slots: qV = {}, $$scope: qW } = qR,
      { id: qX } = qR,
      { visible: qY } = qR,
      { handleGhostClick: qZ } = qR,
      { center: r0 } = qR,
      { position: r1 } = qR,
      { portal: r2 } = qR,
      r3 = 262
    return (
      (qQ['$$set'] = (r4) => {
        'id' in r4 && qS(0, (qX = r4.id))
        'visible' in r4 && qS(1, (qY = r4.visible))
        'handleGhostClick' in r4 && qS(2, (qZ = r4.handleGhostClick))
        'center' in r4 && qS(3, (r0 = r4.center))
        'position' in r4 && qS(4, (r1 = r4.position))
        'portal' in r4 && qS(5, (r2 = r4.portal))
        '$$scope' in r4 && qS(9, (qW = r4['$$scope']))
      }),
      (qQ['$$'].update = () => {
        72 & qQ['$$'].dirty && qS(8, (qT = r0 ? '0' : -(r3 / 2 - 15) + 'px'))
        2 & qQ['$$'].dirty && setTimeout(() => qS(7, (qU = qY)), 100)
      }),
      [
        qX,
        qY,
        qZ,
        r0,
        r1,
        r2,
        r3,
        qU,
        qT,
        qW,
        qV,
        function () {
          r3 = this.clientHeight
          qS(6, r3)
        },
      ]
    )
  }
  class pX extends o3 {
    constructor(qQ) {
      super()
      o2(this, qQ, pW, pU, kz, {
        id: 0,
        visible: 1,
        handleGhostClick: 2,
        center: 3,
        position: 4,
        portal: 5,
      })
    }
  }
  function q4() {}
  const { window: q5 } = n8
  function q6(qQ, qR) {
    return qQ && qQ.then ? qQ.then(q4) : Promise.resolve()
  }
  function q7(qQ, qR) {
    try {
      var qS = qQ()
    } catch (qT) {
      return qR(qT)
    }
    return qS && qS.then ? qS.then(void 0, qR) : qS
  }
  function q8(qQ, qR, qS) {
    return (qQ && qQ.then) || (qQ = Promise.resolve(qQ)), qR ? qQ.then(qR) : qQ
  }
  function q9(qQ, qR) {
    return qQ && qQ.then ? qQ.then(qR) : qR(qQ)
  }
  function qb(qQ) {
    return function () {
      for (var qR = [], qS = 0; qS < arguments.length; qS++) {
        qR[qS] = arguments[qS]
      }
      try {
        return Promise.resolve(qQ.apply(this, qR))
      } catch (qT) {
        return Promise.reject(qT)
      }
    }
  }
  function qg(qQ, qR) {
    var qS = qQ()
    return qS && qS.then ? qS.then(qR) : qR(qS)
  }
  function qj(qQ, qR, qS) {
    try {
      var qT = Promise.resolve(qQ())
      return qR ? qT.then(qR) : qT
    } catch (qU) {
      return Promise.reject(qU)
    }
  }
  function qk(qQ) {
    var qR = qQ()
    if (qR && qR.then) {
      return qR.then(q4)
    }
  }
  function qm(qQ) {
    if (qQ && qQ.then) {
      return qQ.then(q4)
    }
  }
  function qp(qQ, qR, qS) {
    if (!qQ.s) {
      if (qS instanceof qq) {
        if (!qS.s) {
          return void (qS.o = qp.bind(null, qQ, qR))
        }
        1 & qR && (qR = qS.s)
        qS = qS.v
      }
      if (qS && qS.then) {
        return void qS.then(qp.bind(null, qQ, qR), qp.bind(null, qQ, 2))
      }
      qQ.s = qR
      qQ.v = qS
      const qT = qQ.o
      qT && qT(qQ)
    }
  }
  const qq = (function () {
    function qQ() {}
    return (
      (qQ.prototype.then = function (qR, qS) {
        const qT = new qQ(),
          qU = this.s
        if (qU) {
          const qV = 1 & qU ? qR : qS
          if (qV) {
            try {
              qp(qT, 1, qV(this.v))
            } catch (qW) {
              qp(qT, 2, qW)
            }
            return qT
          }
          return this
        }
        return (
          (this.o = function (qX) {
            try {
              const qY = qX.v
              1 & qX.s
                ? qp(qT, 1, qR ? qR(qY) : qY)
                : qS
                ? qp(qT, 1, qS(qY))
                : qp(qT, 2, qY)
            } catch (qZ) {
              qp(qT, 2, qZ)
            }
          }),
          qT
        )
      }),
      qQ
    )
  })()
  function qv(qQ, qR) {
    return qj(qQ, q4)
  }
  function qw(qQ) {
    let qR, qS, qT
    function qU(qW) {
      qQ[46](qW)
    }
    let qV = {
      networkError: qQ[0],
      isTestMode: qQ[4],
      loading: !qQ[3].h && !qQ[0],
      error: qQ[6] === 3 || qQ[6] === 5,
      success: qQ[6] === 2,
      progress: qQ[18],
      brand: qQ[3].theme.branding,
      labels: qQ[17],
    }
    return (
      void 0 !== qQ[5] && (qV.ref = qQ[5]),
      (qR = new pI({ props: qV })),
      nH.push(() =>
        (function (qW, qX, qY) {
          const qZ = qW['$$'].props[qX]
          void 0 !== qZ && ((qW['$$'].bound[qZ] = qY), qY(qW['$$'].ctx[qZ]))
        })(qR, 'ref', qU)
      ),
      qR['$on']('click', qQ[24]),
      qR['$on']('retry', qQ[22]),
      {
        c() {
          nZ(qR['$$'].fragment)
        },
        m(qW, qX) {
          o0(qR, qW, qX)
          qT = true
        },
        p(qW, qX) {
          const qY = {}
          var qZ
          1 & qX[0] && (qY.networkError = qW[0])
          16 & qX[0] && (qY.isTestMode = qW[4])
          9 & qX[0] && (qY.loading = !qW[3].h && !qW[0])
          64 & qX[0] && (qY.error = qW[6] === 3 || qW[6] === 5)
          64 & qX[0] && (qY.success = qW[6] === 2)
          262144 & qX[0] && (qY.progress = qW[18])
          8 & qX[0] && (qY.brand = qW[3].theme.branding)
          131072 & qX[0] && (qY.labels = qW[17])
          !qS &&
            32 & qX[0] &&
            ((qS = true),
            (qY.ref = qW[5]),
            (qZ = () => (qS = false)),
            nJ.push(qZ))
          qR['$set'](qY)
        },
        i(qW) {
          qT || (nX(qR['$$'].fragment, qW), (qT = true))
        },
        o(qW) {
          nY(qR['$$'].fragment, qW)
          qT = false
        },
        d(qW) {
          o1(qR, qW)
        },
      }
    )
  }
  function qx(qQ) {
    let qR, qS
    return (
      (qR = new pX({
        props: {
          id: qQ[19],
          position: qQ[12],
          center: qQ[16],
          visible: qQ[18],
          handleGhostClick: qQ[26],
          portal: qQ[13],
          $$slots: { default: [qz] },
          $$scope: { ctx: qQ },
        },
      })),
      {
        c() {
          nZ(qR['$$'].fragment)
        },
        m(qT, qU) {
          o0(qR, qT, qU)
          qS = true
        },
        p(qT, qU) {
          const qV = {}
          4096 & qU[0] && (qV.position = qT[12])
          65536 & qU[0] && (qV.center = qT[16])
          262144 & qU[0] && (qV.visible = qT[18])
          8192 & qU[0] && (qV.portal = qT[13])
          ;(166600 & qU[0]) | (64 & qU[2]) &&
            (qV['$$scope'] = {
              dirty: qU,
              ctx: qT,
            })
          qR['$set'](qV)
        },
        i(qT) {
          qS || (nX(qR['$$'].fragment, qT), (qS = true))
        },
        o(qT) {
          nY(qR['$$'].fragment, qT)
          qS = false
        },
        d(qT) {
          o1(qR, qT)
        },
      }
    )
  }
  function qy(qQ) {
    let qR, qS, qT
    return {
      c() {
        qR = nj('div')
      },
      m(qU, qV) {
        nb(qU, qR, qV)
        qQ[48](qR)
        qS ||
          ((qT = [
            nq(qR, 'done', qQ[29]),
            nq(qR, 'error', qQ[28]),
            nq(qR, 'loaded', qQ[49]),
          ]),
          (qS = true))
      },
      p: kq,
      d(qU) {
        qU && ng(qR)
        qQ[48](null)
        qS = false
        kx(qT)
      },
    }
  }
  function qz(qQ) {
    let qR, qS
    return (
      (qR = new pP({
        props: {
          isContentHidden: qQ[7] === 6,
          isAudio: 'audio' === qQ[15],
          loading: qQ[6] === 1 || qQ[7] === 6,
          success: qQ[7] === 7,
          error: qQ[7] === 5,
          brand: qQ[3].theme.branding,
          focus: qQ[11],
          labels: qQ[17],
          $$slots: { default: [qy] },
          $$scope: { ctx: qQ },
        },
      })),
      qR['$on']('refresh', qQ[23]),
      qR['$on']('close', qQ[26]),
      qR['$on']('audio', qQ[50]),
      qR['$on']('visual', qQ[51]),
      {
        c() {
          nZ(qR['$$'].fragment)
        },
        m(qT, qU) {
          o0(qR, qT, qU)
          qS = true
        },
        p(qT, qU) {
          const qV = {}
          128 & qU[0] && (qV.isContentHidden = qT[7] === 6)
          32768 & qU[0] && (qV.isAudio = 'audio' === qT[15])
          192 & qU[0] && (qV.loading = qT[6] === 1 || qT[7] === 6)
          128 & qU[0] && (qV.success = qT[7] === 7)
          128 & qU[0] && (qV.error = qT[7] === 5)
          8 & qU[0] && (qV.brand = qT[3].theme.branding)
          2048 & qU[0] && (qV.focus = qT[11])
          131072 & qU[0] && (qV.labels = qT[17])
          ;(640 & qU[0]) | (64 & qU[2]) &&
            (qV['$$scope'] = {
              dirty: qU,
              ctx: qT,
            })
          qR['$set'](qV)
        },
        i(qT) {
          qS || (nX(qR['$$'].fragment, qT), (qS = true))
        },
        o(qT) {
          nY(qR['$$'].fragment, qT)
          qS = false
        },
        d(qT) {
          o1(qR, qT)
        },
      }
    )
  }
  function qA(qQ) {
    let qR,
      qS,
      qT,
      qU,
      qV,
      qW,
      qX,
      qY,
      qZ = qQ[2] !== o5.HIDDEN && qw(qQ),
      r0 = qQ[8] && qx(qQ)
    return {
      c() {
        qR = nj('div')
        qZ && qZ.c()
        qS = np()
        qT = nj('textarea')
        qU = np()
        r0 && r0.c()
        qV = nm('')
        nv(qT, 'aria-hidden', 'true')
        qT.value = qQ[14]
        nv(qT, 'name', 'cf-captcha-response')
        nv(qT, 'id', 'cf-response-' + qQ[1])
        nx(qT, 'display', 'none')
        nv(qR, 'id', 'cf-widget-' + qQ[1])
      },
      m(r1, r2) {
        nb(r1, qR, r2)
        qZ && qZ.m(qR, null)
        n9(qR, qS)
        n9(qR, qT)
        qQ[47](qR)
        nb(r1, qU, r2)
        r0 && r0.m(r1, r2)
        nb(r1, qV, r2)
        qW = true
        qX ||
          ((qY = [
            nq(q5, 'resize', qQ[25]),
            nq(q5, 'keydown', qQ[27]),
            nq(q5, 'cf-reset', qQ[21]),
          ]),
          (qX = true))
      },
      p(r1, r2) {
        r1[2] !== o5.HIDDEN
          ? qZ
            ? (qZ.p(r1, r2), 4 & r2[0] && nX(qZ, 1))
            : ((qZ = qw(r1)), qZ.c(), nX(qZ, 1), qZ.m(qR, qS))
          : qZ &&
            (nV(),
            nY(qZ, 1, 1, () => {
              qZ = null
            }),
            nW())
        ;(!qW || 16384 & r2[0]) && (qT.value = r1[14])
        r1[8]
          ? r0
            ? (r0.p(r1, r2), 256 & r2[0] && nX(r0, 1))
            : ((r0 = qx(r1)), r0.c(), nX(r0, 1), r0.m(qV.parentNode, qV))
          : r0 &&
            (nV(),
            nY(r0, 1, 1, () => {
              r0 = null
            }),
            nW())
      },
      i(r1) {
        qW || (nX(qZ), nX(r0), (qW = true))
      },
      o(r1) {
        nY(qZ)
        nY(r0)
        qW = false
      },
      d(r1) {
        r1 && (ng(qR), ng(qU), ng(qV))
        qZ && qZ.d()
        qQ[47](null)
        r0 && r0.d(r1)
        qX = false
        kx(qY)
      },
    }
  }
  function qB(qQ, qR, qS) {
    let qT, qU, qV
    const qW = Math.random().toString(16).slice(2)
    let { sitekey: qX } = qR,
      { lang: qY } = qR,
      { i18n: qZ } = qR,
      { mode: r0 = o5.INLINE } = qR,
      { onVerify: r1 } = qR,
      { onError: r2 } = qR,
      { onFail: r3 } = qR,
      { onClose: r4 } = qR,
      { onExpire: r5 } = qR,
      { onChallengeOpen: r6 } = qR,
      { onChallengeChange: r7 } = qR,
      { config: r8 } = qR,
      { networkError: r9 = null } = qR,
      { isTestMode: rb = false } = qR,
      { nonce: rg } = qR
    const rj = 'cf-modal-' + qW
    let rk,
      rm,
      rp,
      rq,
      rv,
      rw,
      rx,
      ry,
      rz = false,
      rA = false,
      rB = false,
      rC = false,
      rE = 'body',
      rF = 0,
      rG = 6,
      rH = '',
      rI = null,
      rJ = null,
      rK = 'slide'
    nE(
      qb(function () {
        let s4 = false
        return q9(
          q7(
            function () {
              return (
                qS(
                  43,
                  (rp = ((s5) => {
                    var s6
                    const s7 =
                      null != s5
                        ? s5
                        : (
                            window.navigator.userLanguage ||
                            window.navigator.language
                          ).toLowerCase()
                    return s7
                      ? s7.startsWith('zh')
                        ? 'zh-hans' === s7
                          ? 'zh-cn'
                          : 'zh-hant' === s7 || 'zh-hk' === s7
                          ? 'zh-tw'
                          : s7
                        : null === (s6 = s7.split('-')) || void 0 === s6
                        ? void 0
                        : s6[0]
                      : 'en'
                  })(qY))
                ),
                q6(
                  p4(
                    'https://cdn.captchafox.com/8f747197fbbfae15/paint.BdJ288-J.js',
                    rg
                  )
                )
              )
            },
            function () {
              rY('internal-error')
              s4 = true
            }
          ),
          function (s5) {
            if (s4) {
              return s5
            }
            const s6 = (function (s7) {
              try {
                for (; s7 && 'body' !== s7.nodeName.toLowerCase(); ) {
                  if (
                    'fixed' ===
                    window
                      .getComputedStyle(s7)
                      .getPropertyValue('position')
                      .toLowerCase()
                  ) {
                    return s7
                  }
                  s7 = s7.parentNode
                }
                return false
              } catch (s8) {
                return false
              }
            })(rk)
            return (
              s6 && qS(13, (rE = s6)),
              q9(
                q7(
                  function () {
                    return q8(
                      fetch(
                        'https://cdn.captchafox.com/8f747197fbbfae15/w.CbV3njQa.js'
                      ),
                      function (s7) {
                        return q8(s7.blob(), function (s8) {
                          const s9 = URL.createObjectURL(s8)
                          rx = new Worker(s9)
                        })
                      }
                    )
                  },
                  function (s7) {
                    console.log(s7)
                  }
                ),
                function () {
                  rC = true
                  const s7 = new CustomEvent('cf-mounted')
                  rm.dispatchEvent(s7)
                }
              )
            )
          }
        )
      })
    )
    const rL = qb(function () {
        return new Promise(
          qb(function (s4, s5) {
            if ((rU(), r9)) {
              return void s5('network-error')
            }
            if (0 !== rF) {
              return void s5()
            }
            const s6 = rm.addEventListener('cf-error', (s8) => {
                s5(s8.detail || 'challenge-error')
              }),
              s7 = rm.addEventListener('cf-close', (s8) => {
                s5('challenge-aborted')
              })
            return qg(
              function () {
                if (!rC) {
                  return q8(
                    new Promise((s8) => {
                      rm.addEventListener('cf-mounted', () => {
                        s8()
                      })
                    }),
                    function () {}
                  )
                }
              },
              function () {
                return qg(
                  function () {
                    if (!r8) {
                      return q8(
                        new Promise((s8) => {
                          window.addEventListener('cf-init', (s9) => {
                            p3(s9, qW) || s8()
                          })
                        }),
                        function () {}
                      )
                    }
                  },
                  function () {
                    const s8 = rm.addEventListener('cf-verified', (s9) => {
                      rm.removeEventListener('cf-verified', s8)
                      rm.removeEventListener('cf-error', s6)
                      rm.removeEventListener('cf-close', s7)
                      s4(s9.detail.token)
                    })
                    return q6(rP(rK))
                  }
                )
              }
            )
          })
        )
      }),
      rM = () => {
        qS(6, (rF = 0))
        qS(0, (r9 = null))
        qS(14, (rH = ''))
        null == r5 || r5()
      },
      rN = qb(function (s4 = 'slide') {
        var s5
        return q7(
          function () {
            return qj(rS, function (s6) {
              const s7 = oZ(
                Object.assign(
                  {
                    lng: rp,
                    h:
                      null !== (s5 = null == r8 ? void 0 : r8.h) &&
                      void 0 !== s5
                        ? s5
                        : null == rv
                        ? void 0
                        : rv.h,
                    cs: s6[1],
                    host: window.location.hostname,
                    k: s6[0],
                  },
                  s4 && { type: s4 }
                )
              )
              return q8(
                pq('/captcha/' + qX + '/challenge', {
                  method: 'POST',
                  headers: { 'Content-Type': 'text/plain' },
                  body: s7,
                }),
                function (s8) {
                  return q8(s8.json(), function (s9) {
                    const sb = s9.solved,
                      sg = s9.failed
                    return (
                      (rv = s9),
                      ry
                        ? clearTimeout(ry)
                        : (ry = setTimeout(() => {
                            ;(!sb && rH) || rM()
                          }, 1000 * s9.ttl)),
                      sb
                        ? (qS(6, (rF = 2)),
                          qS(14, (rH = s9.token)),
                          void rX(rH))
                        : sg
                        ? void rZ()
                        : { showChallenge: true }
                    )
                  })
                }
              )
            })
          },
          function (s6) {
            console.error(s6.message)
            rY('load-challenge-error')
          }
        )
      }),
      rO = qb(function (s4) {
        return qm(
          q7(
            function () {
              return q8(
                pq('/captcha/verify', {
                  method: 'POST',
                  headers: { 'Content-Type': 'text/plain' },
                  body: s4,
                }),
                function (s5) {
                  return q8(s5.json(), function (s6) {
                    return qk(function () {
                      if (s6.solved) {
                        return (
                          qS(7, (rG = 7)),
                          qS(14, (rH = null == s6 ? void 0 : s6.token)),
                          rX(rH),
                          setTimeout(rM, 1000 * s6.ttl),
                          q8(o6(1), function () {
                            qS(6, (rF = 2))
                          })
                        )
                      }
                      s6.failed ? rZ() : (qS(6, (rF = 4)), rR())
                    })
                  })
                }
              )
            },
            function (s5) {
              console.error(s5.message)
              rY('verify-challenge-error')
            }
          )
        )
      }),
      rP = qb(function (s4 = 'slide') {
        var s5, s6, s7
        const s8 = rT(r0 !== o5.INLINE)
        return (
          qS(7, (rG = 6)),
          qS(6, (rF = 4)),
          rK === s4 && qS(8, (rJ = null)),
          rq && qS(45, (rq.config = null), rq),
          q7(
            function () {
              return q8(rN(s4), function (s9) {
                return q8(o6(0.12), function () {
                  let sb = false
                  if ((null == s9 ? void 0 : s9.showChallenge) && rv && s8) {
                    return (
                      rK === s4 ? null == r6 || r6() : null == r7 || r7(),
                      qS(15, (rK = s4)),
                      qS(12, (rD = s8)),
                      qm(
                        (function (sg, sj) {
                          var sk,
                            sm = -1
                          sD: {
                            for (var sp = 0; sp < sj.length; sp++) {
                              var sq = sj[sp][0]
                              if (sq) {
                                var sv = sq()
                                if (sv && sv.then) {
                                  break sD
                                }
                                if (sv === sg) {
                                  sm = sp
                                  break
                                }
                              } else {
                                sm = sp
                              }
                            }
                            if (-1 !== sm) {
                              do {
                                for (var sw = sj[sm][1]; !sw; ) {
                                  sm++
                                  sw = sj[sm][1]
                                }
                                var sx = sw()
                                if (sx && sx.then) {
                                  sk = true
                                  break sD
                                }
                                var sy = sj[sm][2]
                                sm++
                              } while (sy && !sy())
                              return sx
                            }
                          }
                          const sz = new qq(),
                            sA = qp.bind(null, sz, 2)
                          return (
                            (sk
                              ? sx.then(sB)
                              : sv.then(function sC(sD) {
                                  for (;;) {
                                    if (sD === sg) {
                                      sm = sp
                                      break
                                    }
                                    if (++sp === sj.length) {
                                      if (-1 !== sm) {
                                        break
                                      }
                                      return void qp(sz, 1, sF)
                                    }
                                    if ((sq = sj[sp][0])) {
                                      if ((sD = sq()) && sD.then) {
                                        return void sD.then(sC).then(void 0, sA)
                                      }
                                    } else {
                                      sm = sp
                                    }
                                  }
                                  do {
                                    for (var sE = sj[sm][1]; !sE; ) {
                                      sm++
                                      sE = sj[sm][1]
                                    }
                                    var sF = sE()
                                    if (sF && sF.then) {
                                      return void sF.then(sB).then(void 0, sA)
                                    }
                                    var sG = sj[sm][2]
                                    sm++
                                  } while (sG && !sG())
                                  qp(sz, 1, sF)
                                })
                            ).then(void 0, sA),
                            sz
                          )
                          function sB(sD) {
                            for (;;) {
                              var sE = sj[sm][2]
                              if (!sE || sE()) {
                                break
                              }
                              sm++
                              for (var sF = sj[sm][1]; !sF; ) {
                                sm++
                                sF = sj[sm][1]
                              }
                              if ((sD = sF()) && sD.then) {
                                return void sD.then(sB).then(void 0, sA)
                              }
                            }
                            qp(sz, 1, sD)
                          }
                        })(rv.type, [
                          [
                            function () {
                              return o4.Slide
                            },
                            function () {
                              return q8(
                                Promise.all([
                                  p5(
                                    'https://cdn.captchafox.com/8f747197fbbfae15/slide.css'
                                  ),
                                  p4(
                                    'https://cdn.captchafox.com/8f747197fbbfae15/slide.xOizPjqa.js',
                                    rg
                                  ),
                                ]),
                                function () {
                                  rJ !== window['__cf_slide'] &&
                                    qS(8, (rJ = window['__cf_slide']))
                                  qS(
                                    45,
                                    (rq = Object.assign(Object.assign({}, rq), {
                                      config: rv.challenge,
                                      widgetId: qW,
                                      labels:
                                        null ===
                                          (s5 =
                                            null == rv ? void 0 : rv.i18n) ||
                                        void 0 === s5
                                          ? void 0
                                          : s5.slide,
                                      theme: r8.theme,
                                    }))
                                  )
                                  sb = true
                                }
                              )
                            },
                          ],
                          [
                            function () {
                              return o4.Audio
                            },
                            function () {
                              return q8(
                                Promise.all([
                                  p5(
                                    'https://cdn.captchafox.com/8f747197fbbfae15/audio.css'
                                  ),
                                  p4(
                                    'https://cdn.captchafox.com/8f747197fbbfae15/audio.B1BY4V3f.js',
                                    rg
                                  ),
                                ]),
                                function () {
                                  rJ !== window['__cf_audio'] &&
                                    qS(8, (rJ = window['__cf_audio']))
                                  qS(
                                    45,
                                    (rq = Object.assign(Object.assign({}, rq), {
                                      config: rv.challenge,
                                      widgetId: qW,
                                      labels:
                                        null ===
                                          (s6 =
                                            null == rv ? void 0 : rv.i18n) ||
                                        void 0 === s6
                                          ? void 0
                                          : s6.audio,
                                      theme: r8.theme,
                                    }))
                                  )
                                  sb = true
                                }
                              )
                            },
                          ],
                          [
                            function () {
                              return o4.PASSIVE
                            },
                            function () {
                              return (
                                qS(
                                  45,
                                  (rq = {
                                    focusOnStart: true,
                                    config: rv.challenge,
                                    widgetId: qW,
                                    labels:
                                      null ===
                                        (s7 = null == rv ? void 0 : rv.i18n) ||
                                      void 0 === s7
                                        ? void 0
                                        : s7.slide,
                                    theme: r8.theme,
                                  })
                                ),
                                qS(6, (rF = 0)),
                                void (sb = true)
                              )
                            },
                          ],
                        ])
                      )
                    )
                  }
                })
              })
            },
            function (s9) {
              console.error(s9)
              rY('load-challenge-error')
            }
          )
        )
      }),
      rQ = qb(function () {
        var s4
        return (
          qS(7, (rG = 6)),
          q8(rN(rK), function () {
            return q8(o6(0.3), function () {
              qS(45, (rq.config = rv.challenge), rq)
              qS(
                45,
                (rq.labels =
                  null === (s4 = rv.i18n) || void 0 === s4 ? void 0 : s4[rK]),
                rq
              )
              null == rI || rI['$$set'](rq)
              'passive' === rv.type && qS(6, (rF = 0))
            })
          })
        )
      }),
      rR = qb(function () {
        qS(7, (rG = 5))
        const s4 = '#' + rj + ' .cf-modal__' + (qT ? 'challenge' : 'wrap'),
          s5 = document.querySelector(s4)
        return (
          null == s5 || s5.classList.add('cf-shake'),
          q8(o6(0.3), function () {
            return (
              null == s5 || s5.classList.remove('cf-shake'),
              q8(o6(0.8), function () {
                return qv(rQ)
              })
            )
          })
        )
      }),
      rS = qb(function () {
        return q8(window['__cf_wapi'](), function ([s4]) {
          const s5 = (null == rv ? void 0 : rv.j) || r8.m
          return s5 && rx
            ? q8(
                new Promise((s6) => {
                  rx.onmessage = function (s7) {
                    'number' == typeof s7.data && s6(s7.data)
                  }
                  rx.postMessage(s5)
                }),
                function (s6) {
                  return [s6, s4]
                }
              )
            : [0, s4]
        })
      }),
      rT = (s4 = false) => {
        const { width: s5 } = {
          width:
            window.innerWidth ||
            document.documentElement.clientWidth ||
            document.body.clientWidth,
          height:
            window.innerHeight ||
            document.documentElement.clientHeight ||
            document.body.clientHeight,
        }
        qS(42, (rz = s5 <= 650))
        if (!!s4 || rz) {
          return {
            left: 0,
            top: 0,
          }
        }
        const s6 = null == rk ? void 0 : rk.querySelector('#cf-pulse')
        if (s6) {
          return ((
            s7,
            s8 = {
              top: 0,
              left: 0,
            }
          ) => {
            const s9 = s7.getBoundingClientRect()
            return {
              top: s9.top + window.scrollY + s8.top,
              left: s9.left + window.scrollX + s8.left,
            }
          })(s6, {
            top: s6.clientHeight / 2 - 7,
            left: s6.clientWidth + 7,
          })
        }
        return null
      },
      rU = qb(function (s4) {
        if (!s4 || !p3(s4, qW)) {
          return (
            (rB = true),
            qS(0, (r9 = null)),
            qS(14, (rH = '')),
            qS(6, (rF = 0)),
            q8()
          )
        }
      }),
      rV = qb(function () {
        return qk(function () {
          if (4 === rG) {
            return qv(rQ)
          }
        })
      }),
      rW = qb(function (s4) {
        let s5 = false
        return (
          qS(11, (rA = s4.detail.ally)),
          qg(
            function () {
              if ('passive' === (null == rv ? void 0 : rv.type) && !rB) {
                return qj(s1, function () {
                  s5 = true
                })
              }
            },
            function (s6) {
              return s5
                ? s6
                : qk(function () {
                    if (0 === rF && !r9) {
                      return q6(rP(rK))
                    }
                  })
            }
          )
        )
      }),
      rX = (s4) => {
        null == r1 || r1(rH)
        const s5 = new CustomEvent('cf-verified', { detail: { token: s4 } })
        rm.dispatchEvent(s5)
      },
      rY = (s4) => {
        qS(0, (r9 = s4))
        qS(6, (rF = 3))
        null == r2 || r2(s4)
        const s5 = new CustomEvent('cf-error', { detail: s4 })
        rm.dispatchEvent(s5)
      },
      rZ = () => {
        qS(6, (rF = 5))
        null == r3 || r3()
        rY('challenge-failed')
      },
      s0 = qb(function (s4) {
        return rY(s4.detail || 'challenge-error'), q8()
      }),
      s1 = qb(function (s4) {
        var s5, s6, s7
        return (
          qS(6, (rF = 1)),
          qj(rS, function (s8) {
            const s9 = null == s4 ? void 0 : s4.detail,
              sb = {
                sk: qX,
                mv:
                  null !== (s5 = null == s9 ? void 0 : s9.trail) &&
                  void 0 !== s5
                    ? s5
                    : [],
                t:
                  null !== (s6 = null == s9 ? void 0 : s9.time) && void 0 !== s6
                    ? s6
                    : 1,
                p:
                  null !== (s7 = null == s9 ? void 0 : s9.solution) &&
                  void 0 !== s7
                    ? s7
                    : 0,
                h: null == rv ? void 0 : rv.h,
                cs: s8[1],
                k: s8[0],
                type: rv.type,
                host: window.location.hostname,
              },
              sg = oZ(sb)
            return q6(rO(sg))
          })
        )
      }),
      s2 = qb(function () {
        return q6(rP('audio'))
      }),
      s3 = qb(function () {
        return q6(rP('slide'))
      })
    return (
      (qQ['$$set'] = (s4) => {
        'sitekey' in s4 && qS(30, (qX = s4.sitekey))
        'lang' in s4 && qS(31, (qY = s4.lang))
        'i18n' in s4 && qS(32, (qZ = s4.i18n))
        'mode' in s4 && qS(2, (r0 = s4.mode))
        'onVerify' in s4 && qS(33, (r1 = s4.onVerify))
        'onError' in s4 && qS(34, (r2 = s4.onError))
        'onFail' in s4 && qS(35, (r3 = s4.onFail))
        'onClose' in s4 && qS(36, (r4 = s4.onClose))
        'onExpire' in s4 && qS(37, (r5 = s4.onExpire))
        'onChallengeOpen' in s4 && qS(38, (r6 = s4.onChallengeOpen))
        'onChallengeChange' in s4 && qS(39, (r7 = s4.onChallengeChange))
        'config' in s4 && qS(3, (r8 = s4.config))
        'networkError' in s4 && qS(0, (r9 = s4.networkError))
        'isTestMode' in s4 && qS(4, (rb = s4.isTestMode))
        'nonce' in s4 && qS(40, (rg = s4.nonce))
      }),
      (qQ['$$'].update = () => {
        ;(4 & qQ['$$'].dirty[0]) | (2048 & qQ['$$'].dirty[1]) &&
          qS(16, (qT = rz || r0 !== o5.INLINE))
        64 & qQ['$$'].dirty[0] && qS(18, (qU = 4 === rF || rF === 1))
        4098 & qQ['$$'].dirty[1] &&
          qS(
            17,
            (qV = ((s4 = {}, s5) => {
              var s6
              const s7 = null !== (s6 = p6[s5]) && void 0 !== s6 ? s6 : p6.en,
                s8 = s4[s5]
              return Object.assign(
                Object.assign(
                  Object.assign(Object.assign({}, s7), {
                    initial: null == s7 ? void 0 : s7.success,
                  }),
                  s8
                ),
                {
                  ally: Object.assign(
                    Object.assign({}, null == s7 ? void 0 : s7.ally),
                    null == s8 ? void 0 : s8.ally
                  ),
                }
              )
            })(qZ, rp))
          )
        ;(192 & qQ['$$'].dirty[0]) | (12288 & qQ['$$'].dirty[1]) &&
          (null == rI ||
            rI['$$set']({
              block: 4 !== rF || 4 !== rG,
              success: rG === 7,
              fail: rG === 5,
              lang: rp,
            }))
        40 & qQ['$$'].dirty[0] &&
          (null == r8 ? void 0 : r8.theme) &&
          rk &&
          p2(r8.theme, '#cf-widget-' + qW)
        ;(776 & qQ['$$'].dirty[0]) | (16384 & qQ['$$'].dirty[1]) &&
          rw &&
          rJ &&
          rq.config &&
          (p2(null == r8 ? void 0 : r8.theme, '#' + rj),
          (() => {
            try {
              rw.firstChild && rw.removeChild(rw.firstChild)
              qS(
                44,
                (rI = new rJ({
                  target: rw,
                  props: rq,
                }))
              )
            } catch (s4) {
              qS(8, (rJ = null))
              rY('load-challenge-error')
            }
          })())
      }),
      [
        r9,
        qW,
        r0,
        r8,
        rb,
        rk,
        rF,
        rG,
        rJ,
        rw,
        rm,
        rA,
        rD,
        rE,
        rH,
        rK,
        qT,
        qV,
        qU,
        rj,
        rP,
        rU,
        function () {
          return (rF !== 3 && rF !== 5) || rU(), q8()
        },
        rV,
        rW,
        () => {
          qS(12, (rD = rT()))
        },
        () => {
          rF !== 1 &&
            (qS(6, (rF = 0)),
            null == r4 || r4(),
            rm.dispatchEvent(new CustomEvent('cf-close')))
        },
        (s4) => {
          'Escape' === s4.key &&
            27 === s4.keyCode &&
            rF !== 1 &&
            (qS(6, (rF = 0)),
            null == r4 || r4(),
            rm.dispatchEvent(new CustomEvent('cf-close')))
        },
        s0,
        s1,
        qX,
        qY,
        qZ,
        r1,
        r2,
        r3,
        r4,
        r5,
        r6,
        r7,
        rg,
        rL,
        rz,
        rp,
        rI,
        rq,
        function (s4) {
          rk = s4
          qS(5, rk)
        },
        function (s4) {
          nH[s4 ? 'unshift' : 'push'](() => {
            rm = s4
            qS(10, rm)
          })
        },
        function (s4) {
          nH[s4 ? 'unshift' : 'push'](() => {
            rw = s4
            qS(9, rw)
          })
        },
        () => qS(7, (rG = 4)),
        s2,
        s3,
      ]
    )
  }
  class qC extends o3 {
    constructor(qQ) {
      super()
      o2(
        this,
        qQ,
        qB,
        qA,
        kz,
        {
          widgetId: 1,
          sitekey: 30,
          lang: 31,
          i18n: 32,
          mode: 2,
          onVerify: 33,
          onError: 34,
          onFail: 35,
          onClose: 36,
          onExpire: 37,
          onChallengeOpen: 38,
          onChallengeChange: 39,
          config: 3,
          networkError: 0,
          isTestMode: 4,
          nonce: 40,
          execute: 41,
        },
        null,
        [-1, -1, -1]
      )
    }
    get ['widgetId']() {
      return this['$$'].ctx[1]
    }
    get ['sitekey']() {
      return this['$$'].ctx[30]
    }
    set ['sitekey'](qQ) {
      this['$$set']({ sitekey: qQ })
      nR()
    }
    get ['lang']() {
      return this['$$'].ctx[31]
    }
    set ['lang'](qQ) {
      this['$$set']({ lang: qQ })
      nR()
    }
    get ['i18n']() {
      return this['$$'].ctx[32]
    }
    set ['i18n'](qQ) {
      this['$$set']({ i18n: qQ })
      nR()
    }
    get ['mode']() {
      return this['$$'].ctx[2]
    }
    set ['mode'](qQ) {
      this['$$set']({ mode: qQ })
      nR()
    }
    get ['onVerify']() {
      return this['$$'].ctx[33]
    }
    set ['onVerify'](qQ) {
      this['$$set']({ onVerify: qQ })
      nR()
    }
    get ['onError']() {
      return this['$$'].ctx[34]
    }
    set ['onError'](qQ) {
      this['$$set']({ onError: qQ })
      nR()
    }
    get ['onFail']() {
      return this['$$'].ctx[35]
    }
    set ['onFail'](qQ) {
      this['$$set']({ onFail: qQ })
      nR()
    }
    get ['onClose']() {
      return this['$$'].ctx[36]
    }
    set ['onClose'](qQ) {
      this['$$set']({ onClose: qQ })
      nR()
    }
    get ['onExpire']() {
      return this['$$'].ctx[37]
    }
    set ['onExpire'](qQ) {
      this['$$set']({ onExpire: qQ })
      nR()
    }
    get ['onChallengeOpen']() {
      return this['$$'].ctx[38]
    }
    set ['onChallengeOpen'](qQ) {
      this['$$set']({ onChallengeOpen: qQ })
      nR()
    }
    get ['onChallengeChange']() {
      return this['$$'].ctx[39]
    }
    set ['onChallengeChange'](qQ) {
      this['$$set']({ onChallengeChange: qQ })
      nR()
    }
    get ['config']() {
      return this['$$'].ctx[3]
    }
    set ['config'](qQ) {
      this['$$set']({ config: qQ })
      nR()
    }
    get ['networkError']() {
      return this['$$'].ctx[0]
    }
    set ['networkError'](qQ) {
      this['$$set']({ networkError: qQ })
      nR()
    }
    get ['isTestMode']() {
      return this['$$'].ctx[4]
    }
    set ['isTestMode'](qQ) {
      this['$$set']({ isTestMode: qQ })
      nR()
    }
    get ['nonce']() {
      return this['$$'].ctx[40]
    }
    set ['nonce'](qQ) {
      this['$$set']({ nonce: qQ })
      nR()
    }
    get ['execute']() {
      return this['$$'].ctx[41]
    }
  }
  function qD(qQ, qR, qS) {
    return (qQ && qQ.then) || (qQ = Promise.resolve(qQ)), qR ? qQ.then(qR) : qQ
  }
  const qE =
    ((qF = function (qQ) {
      const qR = window.location.origin + window.location.pathname
      return qD(
        pq('/captcha/' + qQ + '/config?site=' + qR, { method: 'GET' }),
        function (qS) {
          return qD(qS.json())
        }
      )
    }),
    function () {
      for (var qQ = [], qR = 0; qR < arguments.length; qR++) {
        qQ[qR] = arguments[qR]
      }
      try {
        return Promise.resolve(qF.apply(this, qQ))
      } catch (qS) {
        return Promise.reject(qS)
      }
    })
  var qF
  const qG = (qQ) => !!qQ && window[qQ]
  function qH() {}
  function qI(qQ, qR) {
    return qQ && qQ.then ? qQ.then(qH) : Promise.resolve()
  }
  function qJ(qQ, qR) {
    try {
      var qS = qQ()
    } catch (qT) {
      return qR(qT)
    }
    return qS && qS.then ? qS.then(void 0, qR) : qS
  }
  function qK(qQ, qR) {
    return qQ && qQ.then ? qQ.then(qR) : qR(qQ)
  }
  function qL(qQ) {
    return function () {
      for (var qR = [], qS = 0; qS < arguments.length; qS++) {
        qR[qS] = arguments[qS]
      }
      try {
        return Promise.resolve(qQ.apply(this, qR))
      } catch (qT) {
        return Promise.reject(qT)
      }
    }
  }
  const qM = new Map(),
    qN = qL(function (qQ, qR) {
      var qS, qT, qU
      let qV
      if (!(null == qR ? void 0 : qR.sitekey)) {
        return console.error('[CaptchaFox] Site key is missing'), null
      }
      if (
        ((qV = 'string' == typeof qQ ? document.querySelector(qQ) : qQ), !qV)
      ) {
        return console.error('[CaptchaFox] Could not find target element'), null
      }
      for (const r0 of qV.children)
        if (
          'DIV' === r0.tagName &&
          (null === (qS = r0.id) || void 0 === qS
            ? void 0
            : qS.startsWith('cf-widget'))
        ) {
          const r1 = r0.id.split('-')[2]
          if (r1) {
            return (
              console.warn(
                '[CaptchaFox] Parent element can only render one widget'
              ),
              r1
            )
          }
        }
      const { theme: qW } = qR,
        qX = (function (r2, r3) {
          var r4 = {
            enable: function () {},
          }
          for (var r5 in r2)
            Object.prototype.hasOwnProperty.call(r2, r5) &&
              r3.indexOf(r5) < 0 &&
              (r4[r5] = r2[r5])
          if (null != r2 && 'function' == typeof Object.getOwnPropertySymbols) {
            var r6 = 0
            for (r5 = Object.getOwnPropertySymbols(r2); r6 < r5.length; r6++) {
              r3.indexOf(r5[r6]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(r2, r5[r6]) &&
                (r4[r5[r6]] = r2[r5[r6]])
            }
          }
          return r4
        })(qR, ['theme']),
        qY = 'object' == typeof qW,
        qZ = 'dark' === qW ? fC : qY ? qW : {}
      return qK(
        qJ(
          function () {
            return qI(p5('https://cdn.captchafox.com/widget.css', qX.nonce))
          },
          function () {
            null === (qT = null == qR ? void 0 : qR.onError) ||
              void 0 === qT ||
              qT.call(qR, 'style-error')
          }
        ),
        function () {
          const r2 = new qC({
              target: qV,
              props: Object.assign(Object.assign({}, qX), {
                config: { theme: qZ },
                isTestMode:
                  'sk_11111111000000001111111100000000' === qR.sitekey,
              }),
            }),
            r3 = r2.widgetId
          return (
            qM.set(r3, r2),
            qK(
              qJ(
                function () {
                  return (
                    (r4 = qE(qR.sitekey)),
                    (r5 = function (r6) {
                      const r7 = qY
                        ? Object.assign(Object.assign({}, qZ), {
                            branding: r6.theme.branding,
                          })
                        : Object.assign(Object.assign({}, r6.theme), qZ)
                      const r8 = new CustomEvent('cf-init', {
                        detail: { widgetId: r3 },
                      })
                      window.dispatchEvent(r8)
                    }),
                    (r4 && r4.then) || (r4 = Promise.resolve(r4)),
                    r5 ? r4.then(r5) : r4
                  )
                  var r4, r5
                },
                function (r4) {
                  null === (qU = null == qR ? void 0 : qR.onError) ||
                    void 0 === qU ||
                    qU.call(qR, 'network-error')
                }
              ),
              function () {
                return r3
              }
            )
          )
        }
      )
    }),
    qO = (qQ) => {
      document.querySelectorAll('.captchafox[data-sitekey]').forEach(
        qL(function (qR) {
          const qS = ((qT, qU) => {
            var qV
            if (!qT) {
              return null
            }
            const qW =
                null !== (qV = qT.dataset.sitekey) && void 0 !== qV ? qV : '',
              qX = qT.dataset.lang,
              qY = qT.dataset.theme,
              qZ = qT.dataset.mode,
              r0 = qT.dataset.callback,
              r1 = qT.dataset.errorCallback,
              r2 = qT.dataset.expiredCallback,
              r3 = qT.dataset.failCallback,
              r4 = qT.dataset.closeCallback,
              r5 = qG(r0),
              r6 = qG(r1),
              r7 = qG(r2),
              r8 = qG(r3),
              r9 = qG(r4)
            return Object.assign(
              Object.assign(
                Object.assign(
                  Object.assign(
                    Object.assign(
                      Object.assign(
                        Object.assign(
                          {
                            sitekey: qW,
                            lang: qX,
                            theme: qY,
                          },
                          qU
                        ),
                        r5 && { onVerify: r5 }
                      ),
                      r6 && { onError: r6 }
                    ),
                    r7 && { onExpire: r7 }
                  ),
                  r8 && { onFail: r8 }
                ),
                r9 && { onClose: r9 }
              ),
              qZ && { mode: qZ }
            )
          })(
            qR,
            Object.assign(
              Object.assign(
                {},
                (null == qQ ? void 0 : qQ.lang) && {
                  lang: null == qQ ? void 0 : qQ.lang,
                }
              ),
              { nonce: null == qQ ? void 0 : qQ.nonce }
            )
          )
          if (qS) {
            return qI(qN(qR, qS))
          }
        })
      )
    }
  ;(() => {
    var qQ
    const qR = gI()
    window.captchafox = {
      render: (qS, qT) =>
        qN(
          qS,
          Object.assign(Object.assign({}, qT), {
            nonce: null == qR ? void 0 : qR.nonce,
          })
        ),
      getResponse: (qS) => {
        var qT, qU
        const qV =
            null != qS
              ? qS
              : null === (qT = qM.entries().next().value) || void 0 === qT
              ? void 0
              : qT[0],
          qW = document.getElementById('cf-response-' + qV)
        return null !== (qU = null == qW ? void 0 : qW.value) && void 0 !== qU
          ? qU
          : ''
      },
      remove: (qS) => {
        var qT
        const qU =
          null != qS
            ? qS
            : null === (qT = qM.entries().next().value) || void 0 === qT
            ? void 0
            : qT[0]
        if (!qU) {
          return
        }
        const qV = document.getElementById('cf-modal-' + qU),
          qW = document.getElementById('cf-widget-' + qU)
        null == qV || qV.remove()
        null == qW || qW.remove()
        qM.delete(qU)
      },
      reset: (qS) => {
        const qT = new CustomEvent('cf-reset', { detail: { widgetId: qS } })
        window.dispatchEvent(qT)
      },
      execute: (qS) => {
        var qT, qU
        return (
          null !== (qT = qM.get(qS)) && void 0 !== qT
            ? qT
            : null === (qU = qM.entries().next().value) || void 0 === qU
            ? void 0
            : qU[1]
        ).execute()
      },
    }
    ;(null == qR ? void 0 : qR.onload) &&
      (null === (qQ = window[qR.onload]) || void 0 === qQ || qQ.call(window))
    ;(null == qR ? void 0 : qR.render) === 'onload' &&
      ('loading' === document.readyState
        ? document.addEventListener('DOMContentLoaded', () => qO(qR))
        : qO(qR))
  })()
})()
