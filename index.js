import { _ as Np, a as Dp } from "./pdfjs.js";
(function () {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
    new MutationObserver((i) => {
        for (const l of i) if (l.type === "childList") for (const o of l.addedNodes) o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
    }).observe(document, { childList: !0, subtree: !0 });
    function n(i) {
        const l = {};
        return (
            i.integrity && (l.integrity = i.integrity),
            i.referrerPolicy && (l.referrerPolicy = i.referrerPolicy),
            i.crossOrigin === "use-credentials" ? (l.credentials = "include") : i.crossOrigin === "anonymous" ? (l.credentials = "omit") : (l.credentials = "same-origin"),
            l
        );
    }
    function r(i) {
        if (i.ep) return;
        i.ep = !0;
        const l = n(i);
        fetch(i.href, l);
    }
})();
function Xs(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Gs = { exports: {} },
    Oi = {},
    Zs = { exports: {} },
    L = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var yr = Symbol.for("react.element"),
    Tp = Symbol.for("react.portal"),
    Op = Symbol.for("react.fragment"),
    Fp = Symbol.for("react.strict_mode"),
    Lp = Symbol.for("react.profiler"),
    Rp = Symbol.for("react.provider"),
    Mp = Symbol.for("react.context"),
    Ip = Symbol.for("react.forward_ref"),
    Ap = Symbol.for("react.suspense"),
    $p = Symbol.for("react.memo"),
    Up = Symbol.for("react.lazy"),
    Na = Symbol.iterator;
function Wp(e) {
    return e === null || typeof e != "object" ? null : ((e = (Na && e[Na]) || e["@@iterator"]), typeof e == "function" ? e : null);
}
var Js = {
        isMounted: function () {
            return !1;
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {},
    },
    eu = Object.assign,
    tu = {};
function Pn(e, t, n) {
    (this.props = e), (this.context = t), (this.refs = tu), (this.updater = n || Js);
}
Pn.prototype.isReactComponent = {};
Pn.prototype.setState = function (e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState");
};
Pn.prototype.forceUpdate = function (e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function nu() {}
nu.prototype = Pn.prototype;
function Po(e, t, n) {
    (this.props = e), (this.context = t), (this.refs = tu), (this.updater = n || Js);
}
var No = (Po.prototype = new nu());
No.constructor = Po;
eu(No, Pn.prototype);
No.isPureReactComponent = !0;
var Da = Array.isArray,
    ru = Object.prototype.hasOwnProperty,
    Do = { current: null },
    iu = { key: !0, ref: !0, __self: !0, __source: !0 };
function lu(e, t, n) {
    var r,
        i = {},
        l = null,
        o = null;
    if (t != null) for (r in (t.ref !== void 0 && (o = t.ref), t.key !== void 0 && (l = "" + t.key), t)) ru.call(t, r) && !iu.hasOwnProperty(r) && (i[r] = t[r]);
    var a = arguments.length - 2;
    if (a === 1) i.children = n;
    else if (1 < a) {
        for (var s = Array(a), u = 0; u < a; u++) s[u] = arguments[u + 2];
        i.children = s;
    }
    if (e && e.defaultProps) for (r in ((a = e.defaultProps), a)) i[r] === void 0 && (i[r] = a[r]);
    return { $$typeof: yr, type: e, key: l, ref: o, props: i, _owner: Do.current };
}
function Bp(e, t) {
    return { $$typeof: yr, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function To(e) {
    return typeof e == "object" && e !== null && e.$$typeof === yr;
}
function Hp(e) {
    var t = { "=": "=0", ":": "=2" };
    return (
        "$" +
        e.replace(/[=:]/g, function (n) {
            return t[n];
        })
    );
}
var Ta = /\/+/g;
function nl(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? Hp("" + e.key) : t.toString(36);
}
function br(e, t, n, r, i) {
    var l = typeof e;
    (l === "undefined" || l === "boolean") && (e = null);
    var o = !1;
    if (e === null) o = !0;
    else
        switch (l) {
            case "string":
            case "number":
                o = !0;
                break;
            case "object":
                switch (e.$$typeof) {
                    case yr:
                    case Tp:
                        o = !0;
                }
        }
    if (o)
        return (
            (o = e),
            (i = i(o)),
            (e = r === "" ? "." + nl(o, 0) : r),
            Da(i)
                ? ((n = ""),
                  e != null && (n = e.replace(Ta, "$&/") + "/"),
                  br(i, t, n, "", function (u) {
                      return u;
                  }))
                : i != null && (To(i) && (i = Bp(i, n + (!i.key || (o && o.key === i.key) ? "" : ("" + i.key).replace(Ta, "$&/") + "/") + e)), t.push(i)),
            1
        );
    if (((o = 0), (r = r === "" ? "." : r + ":"), Da(e)))
        for (var a = 0; a < e.length; a++) {
            l = e[a];
            var s = r + nl(l, a);
            o += br(l, t, n, s, i);
        }
    else if (((s = Wp(e)), typeof s == "function")) for (e = s.call(e), a = 0; !(l = e.next()).done; ) (l = l.value), (s = r + nl(l, a++)), (o += br(l, t, n, s, i));
    else if (l === "object")
        throw (
            ((t = String(e)),
            Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead."))
        );
    return o;
}
function Nr(e, t, n) {
    if (e == null) return e;
    var r = [],
        i = 0;
    return (
        br(e, r, "", "", function (l) {
            return t.call(n, l, i++);
        }),
        r
    );
}
function Vp(e) {
    if (e._status === -1) {
        var t = e._result;
        (t = t()),
            t.then(
                function (n) {
                    (e._status === 0 || e._status === -1) && ((e._status = 1), (e._result = n));
                },
                function (n) {
                    (e._status === 0 || e._status === -1) && ((e._status = 2), (e._result = n));
                }
            ),
            e._status === -1 && ((e._status = 0), (e._result = t));
    }
    if (e._status === 1) return e._result.default;
    throw e._result;
}
var ge = { current: null },
    qr = { transition: null },
    Qp = { ReactCurrentDispatcher: ge, ReactCurrentBatchConfig: qr, ReactCurrentOwner: Do };
function ou() {
    throw Error("act(...) is not supported in production builds of React.");
}
L.Children = {
    map: Nr,
    forEach: function (e, t, n) {
        Nr(
            e,
            function () {
                t.apply(this, arguments);
            },
            n
        );
    },
    count: function (e) {
        var t = 0;
        return (
            Nr(e, function () {
                t++;
            }),
            t
        );
    },
    toArray: function (e) {
        return (
            Nr(e, function (t) {
                return t;
            }) || []
        );
    },
    only: function (e) {
        if (!To(e)) throw Error("React.Children.only expected to receive a single React element child.");
        return e;
    },
};
L.Component = Pn;
L.Fragment = Op;
L.Profiler = Lp;
L.PureComponent = Po;
L.StrictMode = Fp;
L.Suspense = Ap;
L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Qp;
L.act = ou;
L.cloneElement = function (e, t, n) {
    if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = eu({}, e.props),
        i = e.key,
        l = e.ref,
        o = e._owner;
    if (t != null) {
        if ((t.ref !== void 0 && ((l = t.ref), (o = Do.current)), t.key !== void 0 && (i = "" + t.key), e.type && e.type.defaultProps)) var a = e.type.defaultProps;
        for (s in t) ru.call(t, s) && !iu.hasOwnProperty(s) && (r[s] = t[s] === void 0 && a !== void 0 ? a[s] : t[s]);
    }
    var s = arguments.length - 2;
    if (s === 1) r.children = n;
    else if (1 < s) {
        a = Array(s);
        for (var u = 0; u < s; u++) a[u] = arguments[u + 2];
        r.children = a;
    }
    return { $$typeof: yr, type: e.type, key: i, ref: l, props: r, _owner: o };
};
L.createContext = function (e) {
    return (e = { $$typeof: Mp, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }), (e.Provider = { $$typeof: Rp, _context: e }), (e.Consumer = e);
};
L.createElement = lu;
L.createFactory = function (e) {
    var t = lu.bind(null, e);
    return (t.type = e), t;
};
L.createRef = function () {
    return { current: null };
};
L.forwardRef = function (e) {
    return { $$typeof: Ip, render: e };
};
L.isValidElement = To;
L.lazy = function (e) {
    return { $$typeof: Up, _payload: { _status: -1, _result: e }, _init: Vp };
};
L.memo = function (e, t) {
    return { $$typeof: $p, type: e, compare: t === void 0 ? null : t };
};
L.startTransition = function (e) {
    var t = qr.transition;
    qr.transition = {};
    try {
        e();
    } finally {
        qr.transition = t;
    }
};
L.unstable_act = ou;
L.useCallback = function (e, t) {
    return ge.current.useCallback(e, t);
};
L.useContext = function (e) {
    return ge.current.useContext(e);
};
L.useDebugValue = function () {};
L.useDeferredValue = function (e) {
    return ge.current.useDeferredValue(e);
};
L.useEffect = function (e, t) {
    return ge.current.useEffect(e, t);
};
L.useId = function () {
    return ge.current.useId();
};
L.useImperativeHandle = function (e, t, n) {
    return ge.current.useImperativeHandle(e, t, n);
};
L.useInsertionEffect = function (e, t) {
    return ge.current.useInsertionEffect(e, t);
};
L.useLayoutEffect = function (e, t) {
    return ge.current.useLayoutEffect(e, t);
};
L.useMemo = function (e, t) {
    return ge.current.useMemo(e, t);
};
L.useReducer = function (e, t, n) {
    return ge.current.useReducer(e, t, n);
};
L.useRef = function (e) {
    return ge.current.useRef(e);
};
L.useState = function (e) {
    return ge.current.useState(e);
};
L.useSyncExternalStore = function (e, t, n) {
    return ge.current.useSyncExternalStore(e, t, n);
};
L.useTransition = function () {
    return ge.current.useTransition();
};
L.version = "18.3.1";
Zs.exports = L;
var F = Zs.exports;
const Kp = Xs(F);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var bp = F,
    qp = Symbol.for("react.element"),
    Yp = Symbol.for("react.fragment"),
    Xp = Object.prototype.hasOwnProperty,
    Gp = bp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    Zp = { key: !0, ref: !0, __self: !0, __source: !0 };
function au(e, t, n) {
    var r,
        i = {},
        l = null,
        o = null;
    n !== void 0 && (l = "" + n), t.key !== void 0 && (l = "" + t.key), t.ref !== void 0 && (o = t.ref);
    for (r in t) Xp.call(t, r) && !Zp.hasOwnProperty(r) && (i[r] = t[r]);
    if (e && e.defaultProps) for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
    return { $$typeof: qp, type: e, key: l, ref: o, props: i, _owner: Gp.current };
}
Oi.Fragment = Yp;
Oi.jsx = au;
Oi.jsxs = au;
Gs.exports = Oi;
var x = Gs.exports,
    su = { exports: {} },
    Oe = {},
    uu = { exports: {} },
    cu = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
    function t(C, N) {
        var O = C.length;
        C.push(N);
        e: for (; 0 < O; ) {
            var H = (O - 1) >>> 1,
                Q = C[H];
            if (0 < i(Q, N)) (C[H] = N), (C[O] = Q), (O = H);
            else break e;
        }
    }
    function n(C) {
        return C.length === 0 ? null : C[0];
    }
    function r(C) {
        if (C.length === 0) return null;
        var N = C[0],
            O = C.pop();
        if (O !== N) {
            C[0] = O;
            e: for (var H = 0, Q = C.length, Tt = Q >>> 1; H < Tt; ) {
                var we = 2 * (H + 1) - 1,
                    Xt = C[we],
                    fe = we + 1,
                    Ot = C[fe];
                if (0 > i(Xt, O)) fe < Q && 0 > i(Ot, Xt) ? ((C[H] = Ot), (C[fe] = O), (H = fe)) : ((C[H] = Xt), (C[we] = O), (H = we));
                else if (fe < Q && 0 > i(Ot, O)) (C[H] = Ot), (C[fe] = O), (H = fe);
                else break e;
            }
        }
        return N;
    }
    function i(C, N) {
        var O = C.sortIndex - N.sortIndex;
        return O !== 0 ? O : C.id - N.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var l = performance;
        e.unstable_now = function () {
            return l.now();
        };
    } else {
        var o = Date,
            a = o.now();
        e.unstable_now = function () {
            return o.now() - a;
        };
    }
    var s = [],
        u = [],
        m = 1,
        v = null,
        f = 3,
        y = !1,
        w = !1,
        k = !1,
        I = typeof setTimeout == "function" ? setTimeout : null,
        p = typeof clearTimeout == "function" ? clearTimeout : null,
        c = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function d(C) {
        for (var N = n(u); N !== null; ) {
            if (N.callback === null) r(u);
            else if (N.startTime <= C) r(u), (N.sortIndex = N.expirationTime), t(s, N);
            else break;
            N = n(u);
        }
    }
    function g(C) {
        if (((k = !1), d(C), !w))
            if (n(s) !== null) (w = !0), Tn(E);
            else {
                var N = n(u);
                N !== null && Yt(g, N.startTime - C);
            }
    }
    function E(C, N) {
        (w = !1), k && ((k = !1), p(P), (P = -1)), (y = !0);
        var O = f;
        try {
            for (d(N), v = n(s); v !== null && (!(v.expirationTime > N) || (C && !xe())); ) {
                var H = v.callback;
                if (typeof H == "function") {
                    (v.callback = null), (f = v.priorityLevel);
                    var Q = H(v.expirationTime <= N);
                    (N = e.unstable_now()), typeof Q == "function" ? (v.callback = Q) : v === n(s) && r(s), d(N);
                } else r(s);
                v = n(s);
            }
            if (v !== null) var Tt = !0;
            else {
                var we = n(u);
                we !== null && Yt(g, we.startTime - N), (Tt = !1);
            }
            return Tt;
        } finally {
            (v = null), (f = O), (y = !1);
        }
    }
    var z = !1,
        _ = null,
        P = -1,
        A = 5,
        T = -1;
    function xe() {
        return !(e.unstable_now() - T < A);
    }
    function et() {
        if (_ !== null) {
            var C = e.unstable_now();
            T = C;
            var N = !0;
            try {
                N = _(!0, C);
            } finally {
                N ? be() : ((z = !1), (_ = null));
            }
        } else z = !1;
    }
    var be;
    if (typeof c == "function")
        be = function () {
            c(et);
        };
    else if (typeof MessageChannel < "u") {
        var ne = new MessageChannel(),
            ye = ne.port2;
        (ne.port1.onmessage = et),
            (be = function () {
                ye.postMessage(null);
            });
    } else
        be = function () {
            I(et, 0);
        };
    function Tn(C) {
        (_ = C), z || ((z = !0), be());
    }
    function Yt(C, N) {
        P = I(function () {
            C(e.unstable_now());
        }, N);
    }
    (e.unstable_IdlePriority = 5),
        (e.unstable_ImmediatePriority = 1),
        (e.unstable_LowPriority = 4),
        (e.unstable_NormalPriority = 3),
        (e.unstable_Profiling = null),
        (e.unstable_UserBlockingPriority = 2),
        (e.unstable_cancelCallback = function (C) {
            C.callback = null;
        }),
        (e.unstable_continueExecution = function () {
            w || y || ((w = !0), Tn(E));
        }),
        (e.unstable_forceFrameRate = function (C) {
            0 > C || 125 < C ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : (A = 0 < C ? Math.floor(1e3 / C) : 5);
        }),
        (e.unstable_getCurrentPriorityLevel = function () {
            return f;
        }),
        (e.unstable_getFirstCallbackNode = function () {
            return n(s);
        }),
        (e.unstable_next = function (C) {
            switch (f) {
                case 1:
                case 2:
                case 3:
                    var N = 3;
                    break;
                default:
                    N = f;
            }
            var O = f;
            f = N;
            try {
                return C();
            } finally {
                f = O;
            }
        }),
        (e.unstable_pauseExecution = function () {}),
        (e.unstable_requestPaint = function () {}),
        (e.unstable_runWithPriority = function (C, N) {
            switch (C) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                default:
                    C = 3;
            }
            var O = f;
            f = C;
            try {
                return N();
            } finally {
                f = O;
            }
        }),
        (e.unstable_scheduleCallback = function (C, N, O) {
            var H = e.unstable_now();
            switch ((typeof O == "object" && O !== null ? ((O = O.delay), (O = typeof O == "number" && 0 < O ? H + O : H)) : (O = H), C)) {
                case 1:
                    var Q = -1;
                    break;
                case 2:
                    Q = 250;
                    break;
                case 5:
                    Q = 1073741823;
                    break;
                case 4:
                    Q = 1e4;
                    break;
                default:
                    Q = 5e3;
            }
            return (
                (Q = O + Q),
                (C = { id: m++, callback: N, priorityLevel: C, startTime: O, expirationTime: Q, sortIndex: -1 }),
                O > H ? ((C.sortIndex = O), t(u, C), n(s) === null && C === n(u) && (k ? (p(P), (P = -1)) : (k = !0), Yt(g, O - H))) : ((C.sortIndex = Q), t(s, C), w || y || ((w = !0), Tn(E))),
                C
            );
        }),
        (e.unstable_shouldYield = xe),
        (e.unstable_wrapCallback = function (C) {
            var N = f;
            return function () {
                var O = f;
                f = N;
                try {
                    return C.apply(this, arguments);
                } finally {
                    f = O;
                }
            };
        });
})(cu);
uu.exports = cu;
var Jp = uu.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ed = F,
    Te = Jp;
function h(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var pu = new Set(),
    tr = {};
function Kt(e, t) {
    wn(e, t), wn(e + "Capture", t);
}
function wn(e, t) {
    for (tr[e] = t, e = 0; e < t.length; e++) pu.add(t[e]);
}
var ot = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
    Dl = Object.prototype.hasOwnProperty,
    td = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    Oa = {},
    Fa = {};
function nd(e) {
    return Dl.call(Fa, e) ? !0 : Dl.call(Oa, e) ? !1 : td.test(e) ? (Fa[e] = !0) : ((Oa[e] = !0), !1);
}
function rd(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
        case "function":
        case "symbol":
            return !0;
        case "boolean":
            return r ? !1 : n !== null ? !n.acceptsBooleans : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
        default:
            return !1;
    }
}
function id(e, t, n, r) {
    if (t === null || typeof t > "u" || rd(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null)
        switch (n.type) {
            case 3:
                return !t;
            case 4:
                return t === !1;
            case 5:
                return isNaN(t);
            case 6:
                return isNaN(t) || 1 > t;
        }
    return !1;
}
function he(e, t, n, r, i, l, o) {
    (this.acceptsBooleans = t === 2 || t === 3 || t === 4), (this.attributeName = r), (this.attributeNamespace = i), (this.mustUseProperty = n), (this.propertyName = e), (this.type = t), (this.sanitizeURL = l), (this.removeEmptyString = o);
}
var se = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function (e) {
    se[e] = new he(e, 0, !1, e, null, !1, !1);
});
[
    ["acceptCharset", "accept-charset"],
    ["className", "class"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
].forEach(function (e) {
    var t = e[0];
    se[t] = new he(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
    se[e] = new he(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (e) {
    se[e] = new he(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
    .split(" ")
    .forEach(function (e) {
        se[e] = new he(e, 3, !1, e.toLowerCase(), null, !1, !1);
    });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
    se[e] = new he(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
    se[e] = new he(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
    se[e] = new he(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
    se[e] = new he(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Oo = /[\-:]([a-z])/g;
function Fo(e) {
    return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
        var t = e.replace(Oo, Fo);
        se[t] = new he(t, 1, !1, e, null, !1, !1);
    });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (e) {
    var t = e.replace(Oo, Fo);
    se[t] = new he(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
    var t = e.replace(Oo, Fo);
    se[t] = new he(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
    se[e] = new he(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
se.xlinkHref = new he("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function (e) {
    se[e] = new he(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Lo(e, t, n, r) {
    var i = se.hasOwnProperty(t) ? se[t] : null;
    (i !== null ? i.type !== 0 : r || !(2 < t.length) || (t[0] !== "o" && t[0] !== "O") || (t[1] !== "n" && t[1] !== "N")) &&
        (id(t, n, i, r) && (n = null),
        r || i === null
            ? nd(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
            : i.mustUseProperty
            ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
            : ((t = i.attributeName), (r = i.attributeNamespace), n === null ? e.removeAttribute(t) : ((i = i.type), (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n), r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var ct = ed.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    Dr = Symbol.for("react.element"),
    tn = Symbol.for("react.portal"),
    nn = Symbol.for("react.fragment"),
    Ro = Symbol.for("react.strict_mode"),
    Tl = Symbol.for("react.profiler"),
    du = Symbol.for("react.provider"),
    fu = Symbol.for("react.context"),
    Mo = Symbol.for("react.forward_ref"),
    Ol = Symbol.for("react.suspense"),
    Fl = Symbol.for("react.suspense_list"),
    Io = Symbol.for("react.memo"),
    dt = Symbol.for("react.lazy"),
    mu = Symbol.for("react.offscreen"),
    La = Symbol.iterator;
function Fn(e) {
    return e === null || typeof e != "object" ? null : ((e = (La && e[La]) || e["@@iterator"]), typeof e == "function" ? e : null);
}
var Y = Object.assign,
    rl;
function Bn(e) {
    if (rl === void 0)
        try {
            throw Error();
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            rl = (t && t[1]) || "";
        }
    return (
        `
` +
        rl +
        e
    );
}
var il = !1;
function ll(e, t) {
    if (!e || il) return "";
    il = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (
                ((t = function () {
                    throw Error();
                }),
                Object.defineProperty(t.prototype, "props", {
                    set: function () {
                        throw Error();
                    },
                }),
                typeof Reflect == "object" && Reflect.construct)
            ) {
                try {
                    Reflect.construct(t, []);
                } catch (u) {
                    var r = u;
                }
                Reflect.construct(e, [], t);
            } else {
                try {
                    t.call();
                } catch (u) {
                    r = u;
                }
                e.call(t.prototype);
            }
        else {
            try {
                throw Error();
            } catch (u) {
                r = u;
            }
            e();
        }
    } catch (u) {
        if (u && r && typeof u.stack == "string") {
            for (
                var i = u.stack.split(`
`),
                    l = r.stack.split(`
`),
                    o = i.length - 1,
                    a = l.length - 1;
                1 <= o && 0 <= a && i[o] !== l[a];

            )
                a--;
            for (; 1 <= o && 0 <= a; o--, a--)
                if (i[o] !== l[a]) {
                    if (o !== 1 || a !== 1)
                        do
                            if ((o--, a--, 0 > a || i[o] !== l[a])) {
                                var s =
                                    `
` + i[o].replace(" at new ", " at ");
                                return e.displayName && s.includes("<anonymous>") && (s = s.replace("<anonymous>", e.displayName)), s;
                            }
                        while (1 <= o && 0 <= a);
                    break;
                }
        }
    } finally {
        (il = !1), (Error.prepareStackTrace = n);
    }
    return (e = e ? e.displayName || e.name : "") ? Bn(e) : "";
}
function ld(e) {
    switch (e.tag) {
        case 5:
            return Bn(e.type);
        case 16:
            return Bn("Lazy");
        case 13:
            return Bn("Suspense");
        case 19:
            return Bn("SuspenseList");
        case 0:
        case 2:
        case 15:
            return (e = ll(e.type, !1)), e;
        case 11:
            return (e = ll(e.type.render, !1)), e;
        case 1:
            return (e = ll(e.type, !0)), e;
        default:
            return "";
    }
}
function Ll(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
        case nn:
            return "Fragment";
        case tn:
            return "Portal";
        case Tl:
            return "Profiler";
        case Ro:
            return "StrictMode";
        case Ol:
            return "Suspense";
        case Fl:
            return "SuspenseList";
    }
    if (typeof e == "object")
        switch (e.$$typeof) {
            case fu:
                return (e.displayName || "Context") + ".Consumer";
            case du:
                return (e._context.displayName || "Context") + ".Provider";
            case Mo:
                var t = e.render;
                return (e = e.displayName), e || ((e = t.displayName || t.name || ""), (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")), e;
            case Io:
                return (t = e.displayName || null), t !== null ? t : Ll(e.type) || "Memo";
            case dt:
                (t = e._payload), (e = e._init);
                try {
                    return Ll(e(t));
                } catch {}
        }
    return null;
}
function od(e) {
    var t = e.type;
    switch (e.tag) {
        case 24:
            return "Cache";
        case 9:
            return (t.displayName || "Context") + ".Consumer";
        case 10:
            return (t._context.displayName || "Context") + ".Provider";
        case 18:
            return "DehydratedFragment";
        case 11:
            return (e = t.render), (e = e.displayName || e.name || ""), t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
        case 7:
            return "Fragment";
        case 5:
            return t;
        case 4:
            return "Portal";
        case 3:
            return "Root";
        case 6:
            return "Text";
        case 16:
            return Ll(t);
        case 8:
            return t === Ro ? "StrictMode" : "Mode";
        case 22:
            return "Offscreen";
        case 12:
            return "Profiler";
        case 21:
            return "Scope";
        case 13:
            return "Suspense";
        case 19:
            return "SuspenseList";
        case 25:
            return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
            if (typeof t == "function") return t.displayName || t.name || null;
            if (typeof t == "string") return t;
    }
    return null;
}
function _t(e) {
    switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return e;
        case "object":
            return e;
        default:
            return "";
    }
}
function vu(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function ad(e) {
    var t = vu(e) ? "checked" : "value",
        n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
        r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var i = n.get,
            l = n.set;
        return (
            Object.defineProperty(e, t, {
                configurable: !0,
                get: function () {
                    return i.call(this);
                },
                set: function (o) {
                    (r = "" + o), l.call(this, o);
                },
            }),
            Object.defineProperty(e, t, { enumerable: n.enumerable }),
            {
                getValue: function () {
                    return r;
                },
                setValue: function (o) {
                    r = "" + o;
                },
                stopTracking: function () {
                    (e._valueTracker = null), delete e[t];
                },
            }
        );
    }
}
function Tr(e) {
    e._valueTracker || (e._valueTracker = ad(e));
}
function gu(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
        r = "";
    return e && (r = vu(e) ? (e.checked ? "true" : "false") : e.value), (e = r), e !== n ? (t.setValue(e), !0) : !1;
}
function li(e) {
    if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")) return null;
    try {
        return e.activeElement || e.body;
    } catch {
        return e.body;
    }
}
function Rl(e, t) {
    var n = t.checked;
    return Y({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function Ra(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
        r = t.checked != null ? t.checked : t.defaultChecked;
    (n = _t(t.value != null ? t.value : n)), (e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null });
}
function hu(e, t) {
    (t = t.checked), t != null && Lo(e, "checked", t, !1);
}
function Ml(e, t) {
    hu(e, t);
    var n = _t(t.value),
        r = t.type;
    if (n != null) r === "number" ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return;
    }
    t.hasOwnProperty("value") ? Il(e, t.type, n) : t.hasOwnProperty("defaultValue") && Il(e, t.type, _t(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Ma(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!((r !== "submit" && r !== "reset") || (t.value !== void 0 && t.value !== null))) return;
        (t = "" + e._wrapperState.initialValue), n || t === e.value || (e.value = t), (e.defaultValue = t);
    }
    (n = e.name), n !== "" && (e.name = ""), (e.defaultChecked = !!e._wrapperState.initialChecked), n !== "" && (e.name = n);
}
function Il(e, t, n) {
    (t !== "number" || li(e.ownerDocument) !== e) && (n == null ? (e.defaultValue = "" + e._wrapperState.initialValue) : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Hn = Array.isArray;
function mn(e, t, n, r) {
    if (((e = e.options), t)) {
        t = {};
        for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
        for (n = 0; n < e.length; n++) (i = t.hasOwnProperty("$" + e[n].value)), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0);
    } else {
        for (n = "" + _t(n), t = null, i = 0; i < e.length; i++) {
            if (e[i].value === n) {
                (e[i].selected = !0), r && (e[i].defaultSelected = !0);
                return;
            }
            t !== null || e[i].disabled || (t = e[i]);
        }
        t !== null && (t.selected = !0);
    }
}
function Al(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(h(91));
    return Y({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Ia(e, t) {
    var n = t.value;
    if (n == null) {
        if (((n = t.children), (t = t.defaultValue), n != null)) {
            if (t != null) throw Error(h(92));
            if (Hn(n)) {
                if (1 < n.length) throw Error(h(93));
                n = n[0];
            }
            t = n;
        }
        t == null && (t = ""), (n = t);
    }
    e._wrapperState = { initialValue: _t(n) };
}
function xu(e, t) {
    var n = _t(t.value),
        r = _t(t.defaultValue);
    n != null && ((n = "" + n), n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function Aa(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function yu(e) {
    switch (e) {
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml";
    }
}
function $l(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? yu(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var Or,
    wu = (function (e) {
        return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
            ? function (t, n, r, i) {
                  MSApp.execUnsafeLocalFunction(function () {
                      return e(t, n, r, i);
                  });
              }
            : e;
    })(function (e, t) {
        if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
        else {
            for (Or = Or || document.createElement("div"), Or.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Or.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
            for (; t.firstChild; ) e.appendChild(t.firstChild);
        }
    });
function nr(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return;
        }
    }
    e.textContent = t;
}
var Kn = {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0,
    },
    sd = ["Webkit", "ms", "Moz", "O"];
Object.keys(Kn).forEach(function (e) {
    sd.forEach(function (t) {
        (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Kn[t] = Kn[e]);
    });
});
function ku(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || (Kn.hasOwnProperty(e) && Kn[e]) ? ("" + t).trim() : t + "px";
}
function Su(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0,
                i = ku(n, t[n], r);
            n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
        }
}
var ud = Y({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Ul(e, t) {
    if (t) {
        if (ud[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(h(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null) throw Error(h(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(h(61));
        }
        if (t.style != null && typeof t.style != "object") throw Error(h(62));
    }
}
function Wl(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return !1;
        default:
            return !0;
    }
}
var Bl = null;
function Ao(e) {
    return (e = e.target || e.srcElement || window), e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var Hl = null,
    vn = null,
    gn = null;
function $a(e) {
    if ((e = Sr(e))) {
        if (typeof Hl != "function") throw Error(h(280));
        var t = e.stateNode;
        t && ((t = Ii(t)), Hl(e.stateNode, e.type, t));
    }
}
function Eu(e) {
    vn ? (gn ? gn.push(e) : (gn = [e])) : (vn = e);
}
function Cu() {
    if (vn) {
        var e = vn,
            t = gn;
        if (((gn = vn = null), $a(e), t)) for (e = 0; e < t.length; e++) $a(t[e]);
    }
}
function ju(e, t) {
    return e(t);
}
function _u() {}
var ol = !1;
function zu(e, t, n) {
    if (ol) return e(t, n);
    ol = !0;
    try {
        return ju(e, t, n);
    } finally {
        (ol = !1), (vn !== null || gn !== null) && (_u(), Cu());
    }
}
function rr(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = Ii(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
            (r = !r.disabled) || ((e = e.type), (r = !(e === "button" || e === "input" || e === "select" || e === "textarea"))), (e = !r);
            break e;
        default:
            e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(h(231, t, typeof n));
    return n;
}
var Vl = !1;
if (ot)
    try {
        var Ln = {};
        Object.defineProperty(Ln, "passive", {
            get: function () {
                Vl = !0;
            },
        }),
            window.addEventListener("test", Ln, Ln),
            window.removeEventListener("test", Ln, Ln);
    } catch {
        Vl = !1;
    }
function cd(e, t, n, r, i, l, o, a, s) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, u);
    } catch (m) {
        this.onError(m);
    }
}
var bn = !1,
    oi = null,
    ai = !1,
    Ql = null,
    pd = {
        onError: function (e) {
            (bn = !0), (oi = e);
        },
    };
function dd(e, t, n, r, i, l, o, a, s) {
    (bn = !1), (oi = null), cd.apply(pd, arguments);
}
function fd(e, t, n, r, i, l, o, a, s) {
    if ((dd.apply(this, arguments), bn)) {
        if (bn) {
            var u = oi;
            (bn = !1), (oi = null);
        } else throw Error(h(198));
        ai || ((ai = !0), (Ql = u));
    }
}
function bt(e) {
    var t = e,
        n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
        e = t;
        do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
        while (e);
    }
    return t.tag === 3 ? n : null;
}
function Pu(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null)) return t.dehydrated;
    }
    return null;
}
function Ua(e) {
    if (bt(e) !== e) throw Error(h(188));
}
function md(e) {
    var t = e.alternate;
    if (!t) {
        if (((t = bt(e)), t === null)) throw Error(h(188));
        return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
        var i = n.return;
        if (i === null) break;
        var l = i.alternate;
        if (l === null) {
            if (((r = i.return), r !== null)) {
                n = r;
                continue;
            }
            break;
        }
        if (i.child === l.child) {
            for (l = i.child; l; ) {
                if (l === n) return Ua(i), e;
                if (l === r) return Ua(i), t;
                l = l.sibling;
            }
            throw Error(h(188));
        }
        if (n.return !== r.return) (n = i), (r = l);
        else {
            for (var o = !1, a = i.child; a; ) {
                if (a === n) {
                    (o = !0), (n = i), (r = l);
                    break;
                }
                if (a === r) {
                    (o = !0), (r = i), (n = l);
                    break;
                }
                a = a.sibling;
            }
            if (!o) {
                for (a = l.child; a; ) {
                    if (a === n) {
                        (o = !0), (n = l), (r = i);
                        break;
                    }
                    if (a === r) {
                        (o = !0), (r = l), (n = i);
                        break;
                    }
                    a = a.sibling;
                }
                if (!o) throw Error(h(189));
            }
        }
        if (n.alternate !== r) throw Error(h(190));
    }
    if (n.tag !== 3) throw Error(h(188));
    return n.stateNode.current === n ? e : t;
}
function Nu(e) {
    return (e = md(e)), e !== null ? Du(e) : null;
}
function Du(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
        var t = Du(e);
        if (t !== null) return t;
        e = e.sibling;
    }
    return null;
}
var Tu = Te.unstable_scheduleCallback,
    Wa = Te.unstable_cancelCallback,
    vd = Te.unstable_shouldYield,
    gd = Te.unstable_requestPaint,
    G = Te.unstable_now,
    hd = Te.unstable_getCurrentPriorityLevel,
    $o = Te.unstable_ImmediatePriority,
    Ou = Te.unstable_UserBlockingPriority,
    si = Te.unstable_NormalPriority,
    xd = Te.unstable_LowPriority,
    Fu = Te.unstable_IdlePriority,
    Fi = null,
    Ze = null;
function yd(e) {
    if (Ze && typeof Ze.onCommitFiberRoot == "function")
        try {
            Ze.onCommitFiberRoot(Fi, e, void 0, (e.current.flags & 128) === 128);
        } catch {}
}
var Ve = Math.clz32 ? Math.clz32 : Sd,
    wd = Math.log,
    kd = Math.LN2;
function Sd(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((wd(e) / kd) | 0)) | 0;
}
var Fr = 64,
    Lr = 4194304;
function Vn(e) {
    switch (e & -e) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return e & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return e & 130023424;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 1073741824;
        default:
            return e;
    }
}
function ui(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
        i = e.suspendedLanes,
        l = e.pingedLanes,
        o = n & 268435455;
    if (o !== 0) {
        var a = o & ~i;
        a !== 0 ? (r = Vn(a)) : ((l &= o), l !== 0 && (r = Vn(l)));
    } else (o = n & ~i), o !== 0 ? (r = Vn(o)) : l !== 0 && (r = Vn(l));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && !(t & i) && ((i = r & -r), (l = t & -t), i >= l || (i === 16 && (l & 4194240) !== 0))) return t;
    if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0)) for (e = e.entanglements, t &= r; 0 < t; ) (n = 31 - Ve(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
    return r;
}
function Ed(e, t) {
    switch (e) {
        case 1:
        case 2:
        case 4:
            return t + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1;
    }
}
function Cd(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, l = e.pendingLanes; 0 < l; ) {
        var o = 31 - Ve(l),
            a = 1 << o,
            s = i[o];
        s === -1 ? (!(a & n) || a & r) && (i[o] = Ed(a, t)) : s <= t && (e.expiredLanes |= a), (l &= ~a);
    }
}
function Kl(e) {
    return (e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Lu() {
    var e = Fr;
    return (Fr <<= 1), !(Fr & 4194240) && (Fr = 64), e;
}
function al(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
}
function wr(e, t, n) {
    (e.pendingLanes |= t), t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)), (e = e.eventTimes), (t = 31 - Ve(t)), (e[t] = n);
}
function jd(e, t) {
    var n = e.pendingLanes & ~t;
    (e.pendingLanes = t), (e.suspendedLanes = 0), (e.pingedLanes = 0), (e.expiredLanes &= t), (e.mutableReadLanes &= t), (e.entangledLanes &= t), (t = e.entanglements);
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
        var i = 31 - Ve(n),
            l = 1 << i;
        (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~l);
    }
}
function Uo(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
        var r = 31 - Ve(n),
            i = 1 << r;
        (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
    }
}
var M = 0;
function Ru(e) {
    return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Mu,
    Wo,
    Iu,
    Au,
    $u,
    bl = !1,
    Rr = [],
    xt = null,
    yt = null,
    wt = null,
    ir = new Map(),
    lr = new Map(),
    mt = [],
    _d = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " "
    );
function Ba(e, t) {
    switch (e) {
        case "focusin":
        case "focusout":
            xt = null;
            break;
        case "dragenter":
        case "dragleave":
            yt = null;
            break;
        case "mouseover":
        case "mouseout":
            wt = null;
            break;
        case "pointerover":
        case "pointerout":
            ir.delete(t.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            lr.delete(t.pointerId);
    }
}
function Rn(e, t, n, r, i, l) {
    return e === null || e.nativeEvent !== l
        ? ((e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: l, targetContainers: [i] }), t !== null && ((t = Sr(t)), t !== null && Wo(t)), e)
        : ((e.eventSystemFlags |= r), (t = e.targetContainers), i !== null && t.indexOf(i) === -1 && t.push(i), e);
}
function zd(e, t, n, r, i) {
    switch (t) {
        case "focusin":
            return (xt = Rn(xt, e, t, n, r, i)), !0;
        case "dragenter":
            return (yt = Rn(yt, e, t, n, r, i)), !0;
        case "mouseover":
            return (wt = Rn(wt, e, t, n, r, i)), !0;
        case "pointerover":
            var l = i.pointerId;
            return ir.set(l, Rn(ir.get(l) || null, e, t, n, r, i)), !0;
        case "gotpointercapture":
            return (l = i.pointerId), lr.set(l, Rn(lr.get(l) || null, e, t, n, r, i)), !0;
    }
    return !1;
}
function Uu(e) {
    var t = Mt(e.target);
    if (t !== null) {
        var n = bt(t);
        if (n !== null) {
            if (((t = n.tag), t === 13)) {
                if (((t = Pu(n)), t !== null)) {
                    (e.blockedOn = t),
                        $u(e.priority, function () {
                            Iu(n);
                        });
                    return;
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return;
            }
        }
    }
    e.blockedOn = null;
}
function Yr(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var n = ql(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type, n);
            (Bl = r), n.target.dispatchEvent(r), (Bl = null);
        } else return (t = Sr(n)), t !== null && Wo(t), (e.blockedOn = n), !1;
        t.shift();
    }
    return !0;
}
function Ha(e, t, n) {
    Yr(e) && n.delete(t);
}
function Pd() {
    (bl = !1), xt !== null && Yr(xt) && (xt = null), yt !== null && Yr(yt) && (yt = null), wt !== null && Yr(wt) && (wt = null), ir.forEach(Ha), lr.forEach(Ha);
}
function Mn(e, t) {
    e.blockedOn === t && ((e.blockedOn = null), bl || ((bl = !0), Te.unstable_scheduleCallback(Te.unstable_NormalPriority, Pd)));
}
function or(e) {
    function t(i) {
        return Mn(i, e);
    }
    if (0 < Rr.length) {
        Mn(Rr[0], e);
        for (var n = 1; n < Rr.length; n++) {
            var r = Rr[n];
            r.blockedOn === e && (r.blockedOn = null);
        }
    }
    for (xt !== null && Mn(xt, e), yt !== null && Mn(yt, e), wt !== null && Mn(wt, e), ir.forEach(t), lr.forEach(t), n = 0; n < mt.length; n++) (r = mt[n]), r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < mt.length && ((n = mt[0]), n.blockedOn === null); ) Uu(n), n.blockedOn === null && mt.shift();
}
var hn = ct.ReactCurrentBatchConfig,
    ci = !0;
function Nd(e, t, n, r) {
    var i = M,
        l = hn.transition;
    hn.transition = null;
    try {
        (M = 1), Bo(e, t, n, r);
    } finally {
        (M = i), (hn.transition = l);
    }
}
function Dd(e, t, n, r) {
    var i = M,
        l = hn.transition;
    hn.transition = null;
    try {
        (M = 4), Bo(e, t, n, r);
    } finally {
        (M = i), (hn.transition = l);
    }
}
function Bo(e, t, n, r) {
    if (ci) {
        var i = ql(e, t, n, r);
        if (i === null) hl(e, t, r, pi, n), Ba(e, r);
        else if (zd(i, e, t, n, r)) r.stopPropagation();
        else if ((Ba(e, r), t & 4 && -1 < _d.indexOf(e))) {
            for (; i !== null; ) {
                var l = Sr(i);
                if ((l !== null && Mu(l), (l = ql(e, t, n, r)), l === null && hl(e, t, r, pi, n), l === i)) break;
                i = l;
            }
            i !== null && r.stopPropagation();
        } else hl(e, t, r, null, n);
    }
}
var pi = null;
function ql(e, t, n, r) {
    if (((pi = null), (e = Ao(r)), (e = Mt(e)), e !== null))
        if (((t = bt(e)), t === null)) e = null;
        else if (((n = t.tag), n === 13)) {
            if (((e = Pu(t)), e !== null)) return e;
            e = null;
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null;
        } else t !== e && (e = null);
    return (pi = e), null;
}
function Wu(e) {
    switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
            return 1;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 4;
        case "message":
            switch (hd()) {
                case $o:
                    return 1;
                case Ou:
                    return 4;
                case si:
                case xd:
                    return 16;
                case Fu:
                    return 536870912;
                default:
                    return 16;
            }
        default:
            return 16;
    }
}
var gt = null,
    Ho = null,
    Xr = null;
function Bu() {
    if (Xr) return Xr;
    var e,
        t = Ho,
        n = t.length,
        r,
        i = "value" in gt ? gt.value : gt.textContent,
        l = i.length;
    for (e = 0; e < n && t[e] === i[e]; e++);
    var o = n - e;
    for (r = 1; r <= o && t[n - r] === i[l - r]; r++);
    return (Xr = i.slice(e, 1 < r ? 1 - r : void 0));
}
function Gr(e) {
    var t = e.keyCode;
    return "charCode" in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t), e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function Mr() {
    return !0;
}
function Va() {
    return !1;
}
function Fe(e) {
    function t(n, r, i, l, o) {
        (this._reactName = n), (this._targetInst = i), (this.type = r), (this.nativeEvent = l), (this.target = o), (this.currentTarget = null);
        for (var a in e) e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(l) : l[a]));
        return (this.isDefaultPrevented = (l.defaultPrevented != null ? l.defaultPrevented : l.returnValue === !1) ? Mr : Va), (this.isPropagationStopped = Va), this;
    }
    return (
        Y(t.prototype, {
            preventDefault: function () {
                this.defaultPrevented = !0;
                var n = this.nativeEvent;
                n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), (this.isDefaultPrevented = Mr));
            },
            stopPropagation: function () {
                var n = this.nativeEvent;
                n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), (this.isPropagationStopped = Mr));
            },
            persist: function () {},
            isPersistent: Mr,
        }),
        t
    );
}
var Nn = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function (e) {
            return e.timeStamp || Date.now();
        },
        defaultPrevented: 0,
        isTrusted: 0,
    },
    Vo = Fe(Nn),
    kr = Y({}, Nn, { view: 0, detail: 0 }),
    Td = Fe(kr),
    sl,
    ul,
    In,
    Li = Y({}, kr, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: Qo,
        button: 0,
        buttons: 0,
        relatedTarget: function (e) {
            return e.relatedTarget === void 0 ? (e.fromElement === e.srcElement ? e.toElement : e.fromElement) : e.relatedTarget;
        },
        movementX: function (e) {
            return "movementX" in e ? e.movementX : (e !== In && (In && e.type === "mousemove" ? ((sl = e.screenX - In.screenX), (ul = e.screenY - In.screenY)) : (ul = sl = 0), (In = e)), sl);
        },
        movementY: function (e) {
            return "movementY" in e ? e.movementY : ul;
        },
    }),
    Qa = Fe(Li),
    Od = Y({}, Li, { dataTransfer: 0 }),
    Fd = Fe(Od),
    Ld = Y({}, kr, { relatedTarget: 0 }),
    cl = Fe(Ld),
    Rd = Y({}, Nn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Md = Fe(Rd),
    Id = Y({}, Nn, {
        clipboardData: function (e) {
            return "clipboardData" in e ? e.clipboardData : window.clipboardData;
        },
    }),
    Ad = Fe(Id),
    $d = Y({}, Nn, { data: 0 }),
    Ka = Fe($d),
    Ud = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" },
    Wd = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta",
    },
    Bd = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Hd(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Bd[e]) ? !!t[e] : !1;
}
function Qo() {
    return Hd;
}
var Vd = Y({}, kr, {
        key: function (e) {
            if (e.key) {
                var t = Ud[e.key] || e.key;
                if (t !== "Unidentified") return t;
            }
            return e.type === "keypress" ? ((e = Gr(e)), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Wd[e.keyCode] || "Unidentified" : "";
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: Qo,
        charCode: function (e) {
            return e.type === "keypress" ? Gr(e) : 0;
        },
        keyCode: function (e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
        },
        which: function (e) {
            return e.type === "keypress" ? Gr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
        },
    }),
    Qd = Fe(Vd),
    Kd = Y({}, Li, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }),
    ba = Fe(Kd),
    bd = Y({}, kr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Qo }),
    qd = Fe(bd),
    Yd = Y({}, Nn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Xd = Fe(Yd),
    Gd = Y({}, Li, {
        deltaX: function (e) {
            return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
        },
        deltaY: function (e) {
            return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
        },
        deltaZ: 0,
        deltaMode: 0,
    }),
    Zd = Fe(Gd),
    Jd = [9, 13, 27, 32],
    Ko = ot && "CompositionEvent" in window,
    qn = null;
ot && "documentMode" in document && (qn = document.documentMode);
var ef = ot && "TextEvent" in window && !qn,
    Hu = ot && (!Ko || (qn && 8 < qn && 11 >= qn)),
    qa = " ",
    Ya = !1;
function Vu(e, t) {
    switch (e) {
        case "keyup":
            return Jd.indexOf(t.keyCode) !== -1;
        case "keydown":
            return t.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1;
    }
}
function Qu(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var rn = !1;
function tf(e, t) {
    switch (e) {
        case "compositionend":
            return Qu(t);
        case "keypress":
            return t.which !== 32 ? null : ((Ya = !0), qa);
        case "textInput":
            return (e = t.data), e === qa && Ya ? null : e;
        default:
            return null;
    }
}
function nf(e, t) {
    if (rn) return e === "compositionend" || (!Ko && Vu(e, t)) ? ((e = Bu()), (Xr = Ho = gt = null), (rn = !1), e) : null;
    switch (e) {
        case "paste":
            return null;
        case "keypress":
            if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
                if (t.char && 1 < t.char.length) return t.char;
                if (t.which) return String.fromCharCode(t.which);
            }
            return null;
        case "compositionend":
            return Hu && t.locale !== "ko" ? null : t.data;
        default:
            return null;
    }
}
var rf = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Xa(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!rf[e.type] : t === "textarea";
}
function Ku(e, t, n, r) {
    Eu(r), (t = di(t, "onChange")), 0 < t.length && ((n = new Vo("onChange", "change", null, n, r)), e.push({ event: n, listeners: t }));
}
var Yn = null,
    ar = null;
function lf(e) {
    rc(e, 0);
}
function Ri(e) {
    var t = an(e);
    if (gu(t)) return e;
}
function of(e, t) {
    if (e === "change") return t;
}
var bu = !1;
if (ot) {
    var pl;
    if (ot) {
        var dl = "oninput" in document;
        if (!dl) {
            var Ga = document.createElement("div");
            Ga.setAttribute("oninput", "return;"), (dl = typeof Ga.oninput == "function");
        }
        pl = dl;
    } else pl = !1;
    bu = pl && (!document.documentMode || 9 < document.documentMode);
}
function Za() {
    Yn && (Yn.detachEvent("onpropertychange", qu), (ar = Yn = null));
}
function qu(e) {
    if (e.propertyName === "value" && Ri(ar)) {
        var t = [];
        Ku(t, ar, e, Ao(e)), zu(lf, t);
    }
}
function af(e, t, n) {
    e === "focusin" ? (Za(), (Yn = t), (ar = n), Yn.attachEvent("onpropertychange", qu)) : e === "focusout" && Za();
}
function sf(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return Ri(ar);
}
function uf(e, t) {
    if (e === "click") return Ri(t);
}
function cf(e, t) {
    if (e === "input" || e === "change") return Ri(t);
}
function pf(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Ke = typeof Object.is == "function" ? Object.is : pf;
function sr(e, t) {
    if (Ke(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e),
        r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
        var i = n[r];
        if (!Dl.call(t, i) || !Ke(e[i], t[i])) return !1;
    }
    return !0;
}
function Ja(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
}
function es(e, t) {
    var n = Ja(e);
    e = 0;
    for (var r; n; ) {
        if (n.nodeType === 3) {
            if (((r = e + n.textContent.length), e <= t && r >= t)) return { node: n, offset: t - e };
            e = r;
        }
        e: {
            for (; n; ) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e;
                }
                n = n.parentNode;
            }
            n = void 0;
        }
        n = Ja(n);
    }
}
function Yu(e, t) {
    return e && t ? (e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Yu(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1) : !1;
}
function Xu() {
    for (var e = window, t = li(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var n = typeof t.contentWindow.location.href == "string";
        } catch {
            n = !1;
        }
        if (n) e = t.contentWindow;
        else break;
        t = li(e.document);
    }
    return t;
}
function bo(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && ((t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password")) || t === "textarea" || e.contentEditable === "true");
}
function df(e) {
    var t = Xu(),
        n = e.focusedElem,
        r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Yu(n.ownerDocument.documentElement, n)) {
        if (r !== null && bo(n)) {
            if (((t = r.start), (e = r.end), e === void 0 && (e = t), "selectionStart" in n)) (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
            else if (((e = ((t = n.ownerDocument || document) && t.defaultView) || window), e.getSelection)) {
                e = e.getSelection();
                var i = n.textContent.length,
                    l = Math.min(r.start, i);
                (r = r.end === void 0 ? l : Math.min(r.end, i)), !e.extend && l > r && ((i = r), (r = l), (l = i)), (i = es(n, l));
                var o = es(n, r);
                i &&
                    o &&
                    (e.rangeCount !== 1 || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== o.node || e.focusOffset !== o.offset) &&
                    ((t = t.createRange()), t.setStart(i.node, i.offset), e.removeAllRanges(), l > r ? (e.addRange(t), e.extend(o.node, o.offset)) : (t.setEnd(o.node, o.offset), e.addRange(t)));
            }
        }
        for (t = [], e = n; (e = e.parentNode); ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
        for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) (e = t[n]), (e.element.scrollLeft = e.left), (e.element.scrollTop = e.top);
    }
}
var ff = ot && "documentMode" in document && 11 >= document.documentMode,
    ln = null,
    Yl = null,
    Xn = null,
    Xl = !1;
function ts(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Xl ||
        ln == null ||
        ln !== li(r) ||
        ((r = ln),
        "selectionStart" in r && bo(r)
            ? (r = { start: r.selectionStart, end: r.selectionEnd })
            : ((r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection()), (r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset })),
        (Xn && sr(Xn, r)) || ((Xn = r), (r = di(Yl, "onSelect")), 0 < r.length && ((t = new Vo("onSelect", "select", null, t, n)), e.push({ event: t, listeners: r }), (t.target = ln))));
}
function Ir(e, t) {
    var n = {};
    return (n[e.toLowerCase()] = t.toLowerCase()), (n["Webkit" + e] = "webkit" + t), (n["Moz" + e] = "moz" + t), n;
}
var on = { animationend: Ir("Animation", "AnimationEnd"), animationiteration: Ir("Animation", "AnimationIteration"), animationstart: Ir("Animation", "AnimationStart"), transitionend: Ir("Transition", "TransitionEnd") },
    fl = {},
    Gu = {};
ot &&
    ((Gu = document.createElement("div").style),
    "AnimationEvent" in window || (delete on.animationend.animation, delete on.animationiteration.animation, delete on.animationstart.animation),
    "TransitionEvent" in window || delete on.transitionend.transition);
function Mi(e) {
    if (fl[e]) return fl[e];
    if (!on[e]) return e;
    var t = on[e],
        n;
    for (n in t) if (t.hasOwnProperty(n) && n in Gu) return (fl[e] = t[n]);
    return e;
}
var Zu = Mi("animationend"),
    Ju = Mi("animationiteration"),
    ec = Mi("animationstart"),
    tc = Mi("transitionend"),
    nc = new Map(),
    ns = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
    );
function Pt(e, t) {
    nc.set(e, t), Kt(t, [e]);
}
for (var ml = 0; ml < ns.length; ml++) {
    var vl = ns[ml],
        mf = vl.toLowerCase(),
        vf = vl[0].toUpperCase() + vl.slice(1);
    Pt(mf, "on" + vf);
}
Pt(Zu, "onAnimationEnd");
Pt(Ju, "onAnimationIteration");
Pt(ec, "onAnimationStart");
Pt("dblclick", "onDoubleClick");
Pt("focusin", "onFocus");
Pt("focusout", "onBlur");
Pt(tc, "onTransitionEnd");
wn("onMouseEnter", ["mouseout", "mouseover"]);
wn("onMouseLeave", ["mouseout", "mouseover"]);
wn("onPointerEnter", ["pointerout", "pointerover"]);
wn("onPointerLeave", ["pointerout", "pointerover"]);
Kt("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Kt("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Kt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Kt("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Kt("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Kt("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Qn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
    ),
    gf = new Set("cancel close invalid load scroll toggle".split(" ").concat(Qn));
function rs(e, t, n) {
    var r = e.type || "unknown-event";
    (e.currentTarget = n), fd(r, t, void 0, e), (e.currentTarget = null);
}
function rc(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n],
            i = r.event;
        r = r.listeners;
        e: {
            var l = void 0;
            if (t)
                for (var o = r.length - 1; 0 <= o; o--) {
                    var a = r[o],
                        s = a.instance,
                        u = a.currentTarget;
                    if (((a = a.listener), s !== l && i.isPropagationStopped())) break e;
                    rs(i, a, u), (l = s);
                }
            else
                for (o = 0; o < r.length; o++) {
                    if (((a = r[o]), (s = a.instance), (u = a.currentTarget), (a = a.listener), s !== l && i.isPropagationStopped())) break e;
                    rs(i, a, u), (l = s);
                }
        }
    }
    if (ai) throw ((e = Ql), (ai = !1), (Ql = null), e);
}
function W(e, t) {
    var n = t[to];
    n === void 0 && (n = t[to] = new Set());
    var r = e + "__bubble";
    n.has(r) || (ic(t, e, 2, !1), n.add(r));
}
function gl(e, t, n) {
    var r = 0;
    t && (r |= 4), ic(n, e, r, t);
}
var Ar = "_reactListening" + Math.random().toString(36).slice(2);
function ur(e) {
    if (!e[Ar]) {
        (e[Ar] = !0),
            pu.forEach(function (n) {
                n !== "selectionchange" && (gf.has(n) || gl(n, !1, e), gl(n, !0, e));
            });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[Ar] || ((t[Ar] = !0), gl("selectionchange", !1, t));
    }
}
function ic(e, t, n, r) {
    switch (Wu(t)) {
        case 1:
            var i = Nd;
            break;
        case 4:
            i = Dd;
            break;
        default:
            i = Bo;
    }
    (n = i.bind(null, t, n, e)),
        (i = void 0),
        !Vl || (t !== "touchstart" && t !== "touchmove" && t !== "wheel") || (i = !0),
        r ? (i !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: i }) : e.addEventListener(t, n, !0)) : i !== void 0 ? e.addEventListener(t, n, { passive: i }) : e.addEventListener(t, n, !1);
}
function hl(e, t, n, r, i) {
    var l = r;
    if (!(t & 1) && !(t & 2) && r !== null)
        e: for (;;) {
            if (r === null) return;
            var o = r.tag;
            if (o === 3 || o === 4) {
                var a = r.stateNode.containerInfo;
                if (a === i || (a.nodeType === 8 && a.parentNode === i)) break;
                if (o === 4)
                    for (o = r.return; o !== null; ) {
                        var s = o.tag;
                        if ((s === 3 || s === 4) && ((s = o.stateNode.containerInfo), s === i || (s.nodeType === 8 && s.parentNode === i))) return;
                        o = o.return;
                    }
                for (; a !== null; ) {
                    if (((o = Mt(a)), o === null)) return;
                    if (((s = o.tag), s === 5 || s === 6)) {
                        r = l = o;
                        continue e;
                    }
                    a = a.parentNode;
                }
            }
            r = r.return;
        }
    zu(function () {
        var u = l,
            m = Ao(n),
            v = [];
        e: {
            var f = nc.get(e);
            if (f !== void 0) {
                var y = Vo,
                    w = e;
                switch (e) {
                    case "keypress":
                        if (Gr(n) === 0) break e;
                    case "keydown":
                    case "keyup":
                        y = Qd;
                        break;
                    case "focusin":
                        (w = "focus"), (y = cl);
                        break;
                    case "focusout":
                        (w = "blur"), (y = cl);
                        break;
                    case "beforeblur":
                    case "afterblur":
                        y = cl;
                        break;
                    case "click":
                        if (n.button === 2) break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        y = Qa;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        y = Fd;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        y = qd;
                        break;
                    case Zu:
                    case Ju:
                    case ec:
                        y = Md;
                        break;
                    case tc:
                        y = Xd;
                        break;
                    case "scroll":
                        y = Td;
                        break;
                    case "wheel":
                        y = Zd;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        y = Ad;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        y = ba;
                }
                var k = (t & 4) !== 0,
                    I = !k && e === "scroll",
                    p = k ? (f !== null ? f + "Capture" : null) : f;
                k = [];
                for (var c = u, d; c !== null; ) {
                    d = c;
                    var g = d.stateNode;
                    if ((d.tag === 5 && g !== null && ((d = g), p !== null && ((g = rr(c, p)), g != null && k.push(cr(c, g, d)))), I)) break;
                    c = c.return;
                }
                0 < k.length && ((f = new y(f, w, null, n, m)), v.push({ event: f, listeners: k }));
            }
        }
        if (!(t & 7)) {
            e: {
                if (((f = e === "mouseover" || e === "pointerover"), (y = e === "mouseout" || e === "pointerout"), f && n !== Bl && (w = n.relatedTarget || n.fromElement) && (Mt(w) || w[at]))) break e;
                if (
                    (y || f) &&
                    ((f = m.window === m ? m : (f = m.ownerDocument) ? f.defaultView || f.parentWindow : window),
                    y ? ((w = n.relatedTarget || n.toElement), (y = u), (w = w ? Mt(w) : null), w !== null && ((I = bt(w)), w !== I || (w.tag !== 5 && w.tag !== 6)) && (w = null)) : ((y = null), (w = u)),
                    y !== w)
                ) {
                    if (
                        ((k = Qa),
                        (g = "onMouseLeave"),
                        (p = "onMouseEnter"),
                        (c = "mouse"),
                        (e === "pointerout" || e === "pointerover") && ((k = ba), (g = "onPointerLeave"), (p = "onPointerEnter"), (c = "pointer")),
                        (I = y == null ? f : an(y)),
                        (d = w == null ? f : an(w)),
                        (f = new k(g, c + "leave", y, n, m)),
                        (f.target = I),
                        (f.relatedTarget = d),
                        (g = null),
                        Mt(m) === u && ((k = new k(p, c + "enter", w, n, m)), (k.target = d), (k.relatedTarget = I), (g = k)),
                        (I = g),
                        y && w)
                    )
                        t: {
                            for (k = y, p = w, c = 0, d = k; d; d = en(d)) c++;
                            for (d = 0, g = p; g; g = en(g)) d++;
                            for (; 0 < c - d; ) (k = en(k)), c--;
                            for (; 0 < d - c; ) (p = en(p)), d--;
                            for (; c--; ) {
                                if (k === p || (p !== null && k === p.alternate)) break t;
                                (k = en(k)), (p = en(p));
                            }
                            k = null;
                        }
                    else k = null;
                    y !== null && is(v, f, y, k, !1), w !== null && I !== null && is(v, I, w, k, !0);
                }
            }
            e: {
                if (((f = u ? an(u) : window), (y = f.nodeName && f.nodeName.toLowerCase()), y === "select" || (y === "input" && f.type === "file"))) var E = of;
                else if (Xa(f))
                    if (bu) E = cf;
                    else {
                        E = sf;
                        var z = af;
                    }
                else (y = f.nodeName) && y.toLowerCase() === "input" && (f.type === "checkbox" || f.type === "radio") && (E = uf);
                if (E && (E = E(e, u))) {
                    Ku(v, E, n, m);
                    break e;
                }
                z && z(e, f, u), e === "focusout" && (z = f._wrapperState) && z.controlled && f.type === "number" && Il(f, "number", f.value);
            }
            switch (((z = u ? an(u) : window), e)) {
                case "focusin":
                    (Xa(z) || z.contentEditable === "true") && ((ln = z), (Yl = u), (Xn = null));
                    break;
                case "focusout":
                    Xn = Yl = ln = null;
                    break;
                case "mousedown":
                    Xl = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    (Xl = !1), ts(v, n, m);
                    break;
                case "selectionchange":
                    if (ff) break;
                case "keydown":
                case "keyup":
                    ts(v, n, m);
            }
            var _;
            if (Ko)
                e: {
                    switch (e) {
                        case "compositionstart":
                            var P = "onCompositionStart";
                            break e;
                        case "compositionend":
                            P = "onCompositionEnd";
                            break e;
                        case "compositionupdate":
                            P = "onCompositionUpdate";
                            break e;
                    }
                    P = void 0;
                }
            else rn ? Vu(e, n) && (P = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (P = "onCompositionStart");
            P &&
                (Hu && n.locale !== "ko" && (rn || P !== "onCompositionStart" ? P === "onCompositionEnd" && rn && (_ = Bu()) : ((gt = m), (Ho = "value" in gt ? gt.value : gt.textContent), (rn = !0))),
                (z = di(u, P)),
                0 < z.length && ((P = new Ka(P, e, null, n, m)), v.push({ event: P, listeners: z }), _ ? (P.data = _) : ((_ = Qu(n)), _ !== null && (P.data = _)))),
                (_ = ef ? tf(e, n) : nf(e, n)) && ((u = di(u, "onBeforeInput")), 0 < u.length && ((m = new Ka("onBeforeInput", "beforeinput", null, n, m)), v.push({ event: m, listeners: u }), (m.data = _)));
        }
        rc(v, t);
    });
}
function cr(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
}
function di(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
        var i = e,
            l = i.stateNode;
        i.tag === 5 && l !== null && ((i = l), (l = rr(e, n)), l != null && r.unshift(cr(e, l, i)), (l = rr(e, t)), l != null && r.push(cr(e, l, i))), (e = e.return);
    }
    return r;
}
function en(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
}
function is(e, t, n, r, i) {
    for (var l = t._reactName, o = []; n !== null && n !== r; ) {
        var a = n,
            s = a.alternate,
            u = a.stateNode;
        if (s !== null && s === r) break;
        a.tag === 5 && u !== null && ((a = u), i ? ((s = rr(n, l)), s != null && o.unshift(cr(n, s, a))) : i || ((s = rr(n, l)), s != null && o.push(cr(n, s, a)))), (n = n.return);
    }
    o.length !== 0 && e.push({ event: t, listeners: o });
}
var hf = /\r\n?/g,
    xf = /\u0000|\uFFFD/g;
function ls(e) {
    return (typeof e == "string" ? e : "" + e)
        .replace(
            hf,
            `
`
        )
        .replace(xf, "");
}
function $r(e, t, n) {
    if (((t = ls(t)), ls(e) !== t && n)) throw Error(h(425));
}
function fi() {}
var Gl = null,
    Zl = null;
function Jl(e, t) {
    return (
        e === "textarea" ||
        e === "noscript" ||
        typeof t.children == "string" ||
        typeof t.children == "number" ||
        (typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null)
    );
}
var eo = typeof setTimeout == "function" ? setTimeout : void 0,
    yf = typeof clearTimeout == "function" ? clearTimeout : void 0,
    os = typeof Promise == "function" ? Promise : void 0,
    wf =
        typeof queueMicrotask == "function"
            ? queueMicrotask
            : typeof os < "u"
            ? function (e) {
                  return os.resolve(null).then(e).catch(kf);
              }
            : eo;
function kf(e) {
    setTimeout(function () {
        throw e;
    });
}
function xl(e, t) {
    var n = t,
        r = 0;
    do {
        var i = n.nextSibling;
        if ((e.removeChild(n), i && i.nodeType === 8))
            if (((n = i.data), n === "/$")) {
                if (r === 0) {
                    e.removeChild(i), or(t);
                    return;
                }
                r--;
            } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
        n = i;
    } while (n);
    or(t);
}
function kt(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
            if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
            if (t === "/$") return null;
        }
    }
    return e;
}
function as(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0) return e;
                t--;
            } else n === "/$" && t++;
        }
        e = e.previousSibling;
    }
    return null;
}
var Dn = Math.random().toString(36).slice(2),
    Ge = "__reactFiber$" + Dn,
    pr = "__reactProps$" + Dn,
    at = "__reactContainer$" + Dn,
    to = "__reactEvents$" + Dn,
    Sf = "__reactListeners$" + Dn,
    Ef = "__reactHandles$" + Dn;
function Mt(e) {
    var t = e[Ge];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
        if ((t = n[at] || n[Ge])) {
            if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
                for (e = as(e); e !== null; ) {
                    if ((n = e[Ge])) return n;
                    e = as(e);
                }
            return t;
        }
        (e = n), (n = e.parentNode);
    }
    return null;
}
function Sr(e) {
    return (e = e[Ge] || e[at]), !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e;
}
function an(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(h(33));
}
function Ii(e) {
    return e[pr] || null;
}
var no = [],
    sn = -1;
function Nt(e) {
    return { current: e };
}
function B(e) {
    0 > sn || ((e.current = no[sn]), (no[sn] = null), sn--);
}
function U(e, t) {
    sn++, (no[sn] = e.current), (e.current = t);
}
var zt = {},
    de = Nt(zt),
    Ee = Nt(!1),
    Wt = zt;
function kn(e, t) {
    var n = e.type.contextTypes;
    if (!n) return zt;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var i = {},
        l;
    for (l in n) i[l] = t[l];
    return r && ((e = e.stateNode), (e.__reactInternalMemoizedUnmaskedChildContext = t), (e.__reactInternalMemoizedMaskedChildContext = i)), i;
}
function Ce(e) {
    return (e = e.childContextTypes), e != null;
}
function mi() {
    B(Ee), B(de);
}
function ss(e, t, n) {
    if (de.current !== zt) throw Error(h(168));
    U(de, t), U(Ee, n);
}
function lc(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), typeof r.getChildContext != "function")) return n;
    r = r.getChildContext();
    for (var i in r) if (!(i in t)) throw Error(h(108, od(e) || "Unknown", i));
    return Y({}, n, r);
}
function vi(e) {
    return (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || zt), (Wt = de.current), U(de, e), U(Ee, Ee.current), !0;
}
function us(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(h(169));
    n ? ((e = lc(e, t, Wt)), (r.__reactInternalMemoizedMergedChildContext = e), B(Ee), B(de), U(de, e)) : B(Ee), U(Ee, n);
}
var nt = null,
    Ai = !1,
    yl = !1;
function oc(e) {
    nt === null ? (nt = [e]) : nt.push(e);
}
function Cf(e) {
    (Ai = !0), oc(e);
}
function Dt() {
    if (!yl && nt !== null) {
        yl = !0;
        var e = 0,
            t = M;
        try {
            var n = nt;
            for (M = 1; e < n.length; e++) {
                var r = n[e];
                do r = r(!0);
                while (r !== null);
            }
            (nt = null), (Ai = !1);
        } catch (i) {
            throw (nt !== null && (nt = nt.slice(e + 1)), Tu($o, Dt), i);
        } finally {
            (M = t), (yl = !1);
        }
    }
    return null;
}
var un = [],
    cn = 0,
    gi = null,
    hi = 0,
    Le = [],
    Re = 0,
    Bt = null,
    rt = 1,
    it = "";
function Ft(e, t) {
    (un[cn++] = hi), (un[cn++] = gi), (gi = e), (hi = t);
}
function ac(e, t, n) {
    (Le[Re++] = rt), (Le[Re++] = it), (Le[Re++] = Bt), (Bt = e);
    var r = rt;
    e = it;
    var i = 32 - Ve(r) - 1;
    (r &= ~(1 << i)), (n += 1);
    var l = 32 - Ve(t) + i;
    if (30 < l) {
        var o = i - (i % 5);
        (l = (r & ((1 << o) - 1)).toString(32)), (r >>= o), (i -= o), (rt = (1 << (32 - Ve(t) + i)) | (n << i) | r), (it = l + e);
    } else (rt = (1 << l) | (n << i) | r), (it = e);
}
function qo(e) {
    e.return !== null && (Ft(e, 1), ac(e, 1, 0));
}
function Yo(e) {
    for (; e === gi; ) (gi = un[--cn]), (un[cn] = null), (hi = un[--cn]), (un[cn] = null);
    for (; e === Bt; ) (Bt = Le[--Re]), (Le[Re] = null), (it = Le[--Re]), (Le[Re] = null), (rt = Le[--Re]), (Le[Re] = null);
}
var De = null,
    Ne = null,
    V = !1,
    He = null;
function sc(e, t) {
    var n = Me(5, null, null, 0);
    (n.elementType = "DELETED"), (n.stateNode = t), (n.return = e), (t = e.deletions), t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function cs(e, t) {
    switch (e.tag) {
        case 5:
            var n = e.type;
            return (t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t), t !== null ? ((e.stateNode = t), (De = e), (Ne = kt(t.firstChild)), !0) : !1;
        case 6:
            return (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t), t !== null ? ((e.stateNode = t), (De = e), (Ne = null), !0) : !1;
        case 13:
            return (
                (t = t.nodeType !== 8 ? null : t),
                t !== null
                    ? ((n = Bt !== null ? { id: rt, overflow: it } : null),
                      (e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }),
                      (n = Me(18, null, null, 0)),
                      (n.stateNode = t),
                      (n.return = e),
                      (e.child = n),
                      (De = e),
                      (Ne = null),
                      !0)
                    : !1
            );
        default:
            return !1;
    }
}
function ro(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function io(e) {
    if (V) {
        var t = Ne;
        if (t) {
            var n = t;
            if (!cs(e, t)) {
                if (ro(e)) throw Error(h(418));
                t = kt(n.nextSibling);
                var r = De;
                t && cs(e, t) ? sc(r, n) : ((e.flags = (e.flags & -4097) | 2), (V = !1), (De = e));
            }
        } else {
            if (ro(e)) throw Error(h(418));
            (e.flags = (e.flags & -4097) | 2), (V = !1), (De = e);
        }
    }
}
function ps(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    De = e;
}
function Ur(e) {
    if (e !== De) return !1;
    if (!V) return ps(e), (V = !0), !1;
    var t;
    if (((t = e.tag !== 3) && !(t = e.tag !== 5) && ((t = e.type), (t = t !== "head" && t !== "body" && !Jl(e.type, e.memoizedProps))), t && (t = Ne))) {
        if (ro(e)) throw (uc(), Error(h(418)));
        for (; t; ) sc(e, t), (t = kt(t.nextSibling));
    }
    if ((ps(e), e.tag === 13)) {
        if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(h(317));
        e: {
            for (e = e.nextSibling, t = 0; e; ) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            Ne = kt(e.nextSibling);
                            break e;
                        }
                        t--;
                    } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
                }
                e = e.nextSibling;
            }
            Ne = null;
        }
    } else Ne = De ? kt(e.stateNode.nextSibling) : null;
    return !0;
}
function uc() {
    for (var e = Ne; e; ) e = kt(e.nextSibling);
}
function Sn() {
    (Ne = De = null), (V = !1);
}
function Xo(e) {
    He === null ? (He = [e]) : He.push(e);
}
var jf = ct.ReactCurrentBatchConfig;
function An(e, t, n) {
    if (((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")) {
        if (n._owner) {
            if (((n = n._owner), n)) {
                if (n.tag !== 1) throw Error(h(309));
                var r = n.stateNode;
            }
            if (!r) throw Error(h(147, e));
            var i = r,
                l = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === l
                ? t.ref
                : ((t = function (o) {
                      var a = i.refs;
                      o === null ? delete a[l] : (a[l] = o);
                  }),
                  (t._stringRef = l),
                  t);
        }
        if (typeof e != "string") throw Error(h(284));
        if (!n._owner) throw Error(h(290, e));
    }
    return e;
}
function Wr(e, t) {
    throw ((e = Object.prototype.toString.call(t)), Error(h(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)));
}
function ds(e) {
    var t = e._init;
    return t(e._payload);
}
function cc(e) {
    function t(p, c) {
        if (e) {
            var d = p.deletions;
            d === null ? ((p.deletions = [c]), (p.flags |= 16)) : d.push(c);
        }
    }
    function n(p, c) {
        if (!e) return null;
        for (; c !== null; ) t(p, c), (c = c.sibling);
        return null;
    }
    function r(p, c) {
        for (p = new Map(); c !== null; ) c.key !== null ? p.set(c.key, c) : p.set(c.index, c), (c = c.sibling);
        return p;
    }
    function i(p, c) {
        return (p = jt(p, c)), (p.index = 0), (p.sibling = null), p;
    }
    function l(p, c, d) {
        return (p.index = d), e ? ((d = p.alternate), d !== null ? ((d = d.index), d < c ? ((p.flags |= 2), c) : d) : ((p.flags |= 2), c)) : ((p.flags |= 1048576), c);
    }
    function o(p) {
        return e && p.alternate === null && (p.flags |= 2), p;
    }
    function a(p, c, d, g) {
        return c === null || c.tag !== 6 ? ((c = _l(d, p.mode, g)), (c.return = p), c) : ((c = i(c, d)), (c.return = p), c);
    }
    function s(p, c, d, g) {
        var E = d.type;
        return E === nn
            ? m(p, c, d.props.children, g, d.key)
            : c !== null && (c.elementType === E || (typeof E == "object" && E !== null && E.$$typeof === dt && ds(E) === c.type))
            ? ((g = i(c, d.props)), (g.ref = An(p, c, d)), (g.return = p), g)
            : ((g = ii(d.type, d.key, d.props, null, p.mode, g)), (g.ref = An(p, c, d)), (g.return = p), g);
    }
    function u(p, c, d, g) {
        return c === null || c.tag !== 4 || c.stateNode.containerInfo !== d.containerInfo || c.stateNode.implementation !== d.implementation ? ((c = zl(d, p.mode, g)), (c.return = p), c) : ((c = i(c, d.children || [])), (c.return = p), c);
    }
    function m(p, c, d, g, E) {
        return c === null || c.tag !== 7 ? ((c = Ut(d, p.mode, g, E)), (c.return = p), c) : ((c = i(c, d)), (c.return = p), c);
    }
    function v(p, c, d) {
        if ((typeof c == "string" && c !== "") || typeof c == "number") return (c = _l("" + c, p.mode, d)), (c.return = p), c;
        if (typeof c == "object" && c !== null) {
            switch (c.$$typeof) {
                case Dr:
                    return (d = ii(c.type, c.key, c.props, null, p.mode, d)), (d.ref = An(p, null, c)), (d.return = p), d;
                case tn:
                    return (c = zl(c, p.mode, d)), (c.return = p), c;
                case dt:
                    var g = c._init;
                    return v(p, g(c._payload), d);
            }
            if (Hn(c) || Fn(c)) return (c = Ut(c, p.mode, d, null)), (c.return = p), c;
            Wr(p, c);
        }
        return null;
    }
    function f(p, c, d, g) {
        var E = c !== null ? c.key : null;
        if ((typeof d == "string" && d !== "") || typeof d == "number") return E !== null ? null : a(p, c, "" + d, g);
        if (typeof d == "object" && d !== null) {
            switch (d.$$typeof) {
                case Dr:
                    return d.key === E ? s(p, c, d, g) : null;
                case tn:
                    return d.key === E ? u(p, c, d, g) : null;
                case dt:
                    return (E = d._init), f(p, c, E(d._payload), g);
            }
            if (Hn(d) || Fn(d)) return E !== null ? null : m(p, c, d, g, null);
            Wr(p, d);
        }
        return null;
    }
    function y(p, c, d, g, E) {
        if ((typeof g == "string" && g !== "") || typeof g == "number") return (p = p.get(d) || null), a(c, p, "" + g, E);
        if (typeof g == "object" && g !== null) {
            switch (g.$$typeof) {
                case Dr:
                    return (p = p.get(g.key === null ? d : g.key) || null), s(c, p, g, E);
                case tn:
                    return (p = p.get(g.key === null ? d : g.key) || null), u(c, p, g, E);
                case dt:
                    var z = g._init;
                    return y(p, c, d, z(g._payload), E);
            }
            if (Hn(g) || Fn(g)) return (p = p.get(d) || null), m(c, p, g, E, null);
            Wr(c, g);
        }
        return null;
    }
    function w(p, c, d, g) {
        for (var E = null, z = null, _ = c, P = (c = 0), A = null; _ !== null && P < d.length; P++) {
            _.index > P ? ((A = _), (_ = null)) : (A = _.sibling);
            var T = f(p, _, d[P], g);
            if (T === null) {
                _ === null && (_ = A);
                break;
            }
            e && _ && T.alternate === null && t(p, _), (c = l(T, c, P)), z === null ? (E = T) : (z.sibling = T), (z = T), (_ = A);
        }
        if (P === d.length) return n(p, _), V && Ft(p, P), E;
        if (_ === null) {
            for (; P < d.length; P++) (_ = v(p, d[P], g)), _ !== null && ((c = l(_, c, P)), z === null ? (E = _) : (z.sibling = _), (z = _));
            return V && Ft(p, P), E;
        }
        for (_ = r(p, _); P < d.length; P++) (A = y(_, p, P, d[P], g)), A !== null && (e && A.alternate !== null && _.delete(A.key === null ? P : A.key), (c = l(A, c, P)), z === null ? (E = A) : (z.sibling = A), (z = A));
        return (
            e &&
                _.forEach(function (xe) {
                    return t(p, xe);
                }),
            V && Ft(p, P),
            E
        );
    }
    function k(p, c, d, g) {
        var E = Fn(d);
        if (typeof E != "function") throw Error(h(150));
        if (((d = E.call(d)), d == null)) throw Error(h(151));
        for (var z = (E = null), _ = c, P = (c = 0), A = null, T = d.next(); _ !== null && !T.done; P++, T = d.next()) {
            _.index > P ? ((A = _), (_ = null)) : (A = _.sibling);
            var xe = f(p, _, T.value, g);
            if (xe === null) {
                _ === null && (_ = A);
                break;
            }
            e && _ && xe.alternate === null && t(p, _), (c = l(xe, c, P)), z === null ? (E = xe) : (z.sibling = xe), (z = xe), (_ = A);
        }
        if (T.done) return n(p, _), V && Ft(p, P), E;
        if (_ === null) {
            for (; !T.done; P++, T = d.next()) (T = v(p, T.value, g)), T !== null && ((c = l(T, c, P)), z === null ? (E = T) : (z.sibling = T), (z = T));
            return V && Ft(p, P), E;
        }
        for (_ = r(p, _); !T.done; P++, T = d.next()) (T = y(_, p, P, T.value, g)), T !== null && (e && T.alternate !== null && _.delete(T.key === null ? P : T.key), (c = l(T, c, P)), z === null ? (E = T) : (z.sibling = T), (z = T));
        return (
            e &&
                _.forEach(function (et) {
                    return t(p, et);
                }),
            V && Ft(p, P),
            E
        );
    }
    function I(p, c, d, g) {
        if ((typeof d == "object" && d !== null && d.type === nn && d.key === null && (d = d.props.children), typeof d == "object" && d !== null)) {
            switch (d.$$typeof) {
                case Dr:
                    e: {
                        for (var E = d.key, z = c; z !== null; ) {
                            if (z.key === E) {
                                if (((E = d.type), E === nn)) {
                                    if (z.tag === 7) {
                                        n(p, z.sibling), (c = i(z, d.props.children)), (c.return = p), (p = c);
                                        break e;
                                    }
                                } else if (z.elementType === E || (typeof E == "object" && E !== null && E.$$typeof === dt && ds(E) === z.type)) {
                                    n(p, z.sibling), (c = i(z, d.props)), (c.ref = An(p, z, d)), (c.return = p), (p = c);
                                    break e;
                                }
                                n(p, z);
                                break;
                            } else t(p, z);
                            z = z.sibling;
                        }
                        d.type === nn ? ((c = Ut(d.props.children, p.mode, g, d.key)), (c.return = p), (p = c)) : ((g = ii(d.type, d.key, d.props, null, p.mode, g)), (g.ref = An(p, c, d)), (g.return = p), (p = g));
                    }
                    return o(p);
                case tn:
                    e: {
                        for (z = d.key; c !== null; ) {
                            if (c.key === z)
                                if (c.tag === 4 && c.stateNode.containerInfo === d.containerInfo && c.stateNode.implementation === d.implementation) {
                                    n(p, c.sibling), (c = i(c, d.children || [])), (c.return = p), (p = c);
                                    break e;
                                } else {
                                    n(p, c);
                                    break;
                                }
                            else t(p, c);
                            c = c.sibling;
                        }
                        (c = zl(d, p.mode, g)), (c.return = p), (p = c);
                    }
                    return o(p);
                case dt:
                    return (z = d._init), I(p, c, z(d._payload), g);
            }
            if (Hn(d)) return w(p, c, d, g);
            if (Fn(d)) return k(p, c, d, g);
            Wr(p, d);
        }
        return (typeof d == "string" && d !== "") || typeof d == "number"
            ? ((d = "" + d), c !== null && c.tag === 6 ? (n(p, c.sibling), (c = i(c, d)), (c.return = p), (p = c)) : (n(p, c), (c = _l(d, p.mode, g)), (c.return = p), (p = c)), o(p))
            : n(p, c);
    }
    return I;
}
var En = cc(!0),
    pc = cc(!1),
    xi = Nt(null),
    yi = null,
    pn = null,
    Go = null;
function Zo() {
    Go = pn = yi = null;
}
function Jo(e) {
    var t = xi.current;
    B(xi), (e._currentValue = t);
}
function lo(e, t, n) {
    for (; e !== null; ) {
        var r = e.alternate;
        if (((e.childLanes & t) !== t ? ((e.childLanes |= t), r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n)) break;
        e = e.return;
    }
}
function xn(e, t) {
    (yi = e), (Go = pn = null), (e = e.dependencies), e !== null && e.firstContext !== null && (e.lanes & t && (Se = !0), (e.firstContext = null));
}
function Ae(e) {
    var t = e._currentValue;
    if (Go !== e)
        if (((e = { context: e, memoizedValue: t, next: null }), pn === null)) {
            if (yi === null) throw Error(h(308));
            (pn = e), (yi.dependencies = { lanes: 0, firstContext: e });
        } else pn = pn.next = e;
    return t;
}
var It = null;
function ea(e) {
    It === null ? (It = [e]) : It.push(e);
}
function dc(e, t, n, r) {
    var i = t.interleaved;
    return i === null ? ((n.next = n), ea(t)) : ((n.next = i.next), (i.next = n)), (t.interleaved = n), st(e, r);
}
function st(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) (e.childLanes |= t), (n = e.alternate), n !== null && (n.childLanes |= t), (n = e), (e = e.return);
    return n.tag === 3 ? n.stateNode : null;
}
var ft = !1;
function ta(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function fc(e, t) {
    (e = e.updateQueue), t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function lt(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function St(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (((r = r.shared), R & 2)) {
        var i = r.pending;
        return i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)), (r.pending = t), st(e, n);
    }
    return (i = r.interleaved), i === null ? ((t.next = t), ea(r)) : ((t.next = i.next), (i.next = t)), (r.interleaved = t), st(e, n);
}
function Zr(e, t, n) {
    if (((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))) {
        var r = t.lanes;
        (r &= e.pendingLanes), (n |= r), (t.lanes = n), Uo(e, n);
    }
}
function fs(e, t) {
    var n = e.updateQueue,
        r = e.alternate;
    if (r !== null && ((r = r.updateQueue), n === r)) {
        var i = null,
            l = null;
        if (((n = n.firstBaseUpdate), n !== null)) {
            do {
                var o = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
                l === null ? (i = l = o) : (l = l.next = o), (n = n.next);
            } while (n !== null);
            l === null ? (i = l = t) : (l = l.next = t);
        } else i = l = t;
        (n = { baseState: r.baseState, firstBaseUpdate: i, lastBaseUpdate: l, shared: r.shared, effects: r.effects }), (e.updateQueue = n);
        return;
    }
    (e = n.lastBaseUpdate), e === null ? (n.firstBaseUpdate = t) : (e.next = t), (n.lastBaseUpdate = t);
}
function wi(e, t, n, r) {
    var i = e.updateQueue;
    ft = !1;
    var l = i.firstBaseUpdate,
        o = i.lastBaseUpdate,
        a = i.shared.pending;
    if (a !== null) {
        i.shared.pending = null;
        var s = a,
            u = s.next;
        (s.next = null), o === null ? (l = u) : (o.next = u), (o = s);
        var m = e.alternate;
        m !== null && ((m = m.updateQueue), (a = m.lastBaseUpdate), a !== o && (a === null ? (m.firstBaseUpdate = u) : (a.next = u), (m.lastBaseUpdate = s)));
    }
    if (l !== null) {
        var v = i.baseState;
        (o = 0), (m = u = s = null), (a = l);
        do {
            var f = a.lane,
                y = a.eventTime;
            if ((r & f) === f) {
                m !== null && (m = m.next = { eventTime: y, lane: 0, tag: a.tag, payload: a.payload, callback: a.callback, next: null });
                e: {
                    var w = e,
                        k = a;
                    switch (((f = t), (y = n), k.tag)) {
                        case 1:
                            if (((w = k.payload), typeof w == "function")) {
                                v = w.call(y, v, f);
                                break e;
                            }
                            v = w;
                            break e;
                        case 3:
                            w.flags = (w.flags & -65537) | 128;
                        case 0:
                            if (((w = k.payload), (f = typeof w == "function" ? w.call(y, v, f) : w), f == null)) break e;
                            v = Y({}, v, f);
                            break e;
                        case 2:
                            ft = !0;
                    }
                }
                a.callback !== null && a.lane !== 0 && ((e.flags |= 64), (f = i.effects), f === null ? (i.effects = [a]) : f.push(a));
            } else (y = { eventTime: y, lane: f, tag: a.tag, payload: a.payload, callback: a.callback, next: null }), m === null ? ((u = m = y), (s = v)) : (m = m.next = y), (o |= f);
            if (((a = a.next), a === null)) {
                if (((a = i.shared.pending), a === null)) break;
                (f = a), (a = f.next), (f.next = null), (i.lastBaseUpdate = f), (i.shared.pending = null);
            }
        } while (!0);
        if ((m === null && (s = v), (i.baseState = s), (i.firstBaseUpdate = u), (i.lastBaseUpdate = m), (t = i.shared.interleaved), t !== null)) {
            i = t;
            do (o |= i.lane), (i = i.next);
            while (i !== t);
        } else l === null && (i.shared.lanes = 0);
        (Vt |= o), (e.lanes = o), (e.memoizedState = v);
    }
}
function ms(e, t, n) {
    if (((e = t.effects), (t.effects = null), e !== null))
        for (t = 0; t < e.length; t++) {
            var r = e[t],
                i = r.callback;
            if (i !== null) {
                if (((r.callback = null), (r = n), typeof i != "function")) throw Error(h(191, i));
                i.call(r);
            }
        }
}
var Er = {},
    Je = Nt(Er),
    dr = Nt(Er),
    fr = Nt(Er);
function At(e) {
    if (e === Er) throw Error(h(174));
    return e;
}
function na(e, t) {
    switch ((U(fr, t), U(dr, e), U(Je, Er), (e = t.nodeType), e)) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : $l(null, "");
            break;
        default:
            (e = e === 8 ? t.parentNode : t), (t = e.namespaceURI || null), (e = e.tagName), (t = $l(t, e));
    }
    B(Je), U(Je, t);
}
function Cn() {
    B(Je), B(dr), B(fr);
}
function mc(e) {
    At(fr.current);
    var t = At(Je.current),
        n = $l(t, e.type);
    t !== n && (U(dr, e), U(Je, n));
}
function ra(e) {
    dr.current === e && (B(Je), B(dr));
}
var b = Nt(0);
function ki(e) {
    for (var t = e; t !== null; ) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")) return t;
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128) return t;
        } else if (t.child !== null) {
            (t.child.return = t), (t = t.child);
            continue;
        }
        if (t === e) break;
        for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) return null;
            t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
}
var wl = [];
function ia() {
    for (var e = 0; e < wl.length; e++) wl[e]._workInProgressVersionPrimary = null;
    wl.length = 0;
}
var Jr = ct.ReactCurrentDispatcher,
    kl = ct.ReactCurrentBatchConfig,
    Ht = 0,
    q = null,
    ee = null,
    ie = null,
    Si = !1,
    Gn = !1,
    mr = 0,
    _f = 0;
function ue() {
    throw Error(h(321));
}
function la(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!Ke(e[n], t[n])) return !1;
    return !0;
}
function oa(e, t, n, r, i, l) {
    if (((Ht = l), (q = t), (t.memoizedState = null), (t.updateQueue = null), (t.lanes = 0), (Jr.current = e === null || e.memoizedState === null ? Df : Tf), (e = n(r, i)), Gn)) {
        l = 0;
        do {
            if (((Gn = !1), (mr = 0), 25 <= l)) throw Error(h(301));
            (l += 1), (ie = ee = null), (t.updateQueue = null), (Jr.current = Of), (e = n(r, i));
        } while (Gn);
    }
    if (((Jr.current = Ei), (t = ee !== null && ee.next !== null), (Ht = 0), (ie = ee = q = null), (Si = !1), t)) throw Error(h(300));
    return e;
}
function aa() {
    var e = mr !== 0;
    return (mr = 0), e;
}
function Xe() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return ie === null ? (q.memoizedState = ie = e) : (ie = ie.next = e), ie;
}
function $e() {
    if (ee === null) {
        var e = q.alternate;
        e = e !== null ? e.memoizedState : null;
    } else e = ee.next;
    var t = ie === null ? q.memoizedState : ie.next;
    if (t !== null) (ie = t), (ee = e);
    else {
        if (e === null) throw Error(h(310));
        (ee = e), (e = { memoizedState: ee.memoizedState, baseState: ee.baseState, baseQueue: ee.baseQueue, queue: ee.queue, next: null }), ie === null ? (q.memoizedState = ie = e) : (ie = ie.next = e);
    }
    return ie;
}
function vr(e, t) {
    return typeof t == "function" ? t(e) : t;
}
function Sl(e) {
    var t = $e(),
        n = t.queue;
    if (n === null) throw Error(h(311));
    n.lastRenderedReducer = e;
    var r = ee,
        i = r.baseQueue,
        l = n.pending;
    if (l !== null) {
        if (i !== null) {
            var o = i.next;
            (i.next = l.next), (l.next = o);
        }
        (r.baseQueue = i = l), (n.pending = null);
    }
    if (i !== null) {
        (l = i.next), (r = r.baseState);
        var a = (o = null),
            s = null,
            u = l;
        do {
            var m = u.lane;
            if ((Ht & m) === m) s !== null && (s = s.next = { lane: 0, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }), (r = u.hasEagerState ? u.eagerState : e(r, u.action));
            else {
                var v = { lane: m, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null };
                s === null ? ((a = s = v), (o = r)) : (s = s.next = v), (q.lanes |= m), (Vt |= m);
            }
            u = u.next;
        } while (u !== null && u !== l);
        s === null ? (o = r) : (s.next = a), Ke(r, t.memoizedState) || (Se = !0), (t.memoizedState = r), (t.baseState = o), (t.baseQueue = s), (n.lastRenderedState = r);
    }
    if (((e = n.interleaved), e !== null)) {
        i = e;
        do (l = i.lane), (q.lanes |= l), (Vt |= l), (i = i.next);
        while (i !== e);
    } else i === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
}
function El(e) {
    var t = $e(),
        n = t.queue;
    if (n === null) throw Error(h(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
        i = n.pending,
        l = t.memoizedState;
    if (i !== null) {
        n.pending = null;
        var o = (i = i.next);
        do (l = e(l, o.action)), (o = o.next);
        while (o !== i);
        Ke(l, t.memoizedState) || (Se = !0), (t.memoizedState = l), t.baseQueue === null && (t.baseState = l), (n.lastRenderedState = l);
    }
    return [l, r];
}
function vc() {}
function gc(e, t) {
    var n = q,
        r = $e(),
        i = t(),
        l = !Ke(r.memoizedState, i);
    if ((l && ((r.memoizedState = i), (Se = !0)), (r = r.queue), sa(yc.bind(null, n, r, e), [e]), r.getSnapshot !== t || l || (ie !== null && ie.memoizedState.tag & 1))) {
        if (((n.flags |= 2048), gr(9, xc.bind(null, n, r, i, t), void 0, null), le === null)) throw Error(h(349));
        Ht & 30 || hc(n, t, i);
    }
    return i;
}
function hc(e, t, n) {
    (e.flags |= 16384), (e = { getSnapshot: t, value: n }), (t = q.updateQueue), t === null ? ((t = { lastEffect: null, stores: null }), (q.updateQueue = t), (t.stores = [e])) : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function xc(e, t, n, r) {
    (t.value = n), (t.getSnapshot = r), wc(t) && kc(e);
}
function yc(e, t, n) {
    return n(function () {
        wc(t) && kc(e);
    });
}
function wc(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !Ke(e, n);
    } catch {
        return !0;
    }
}
function kc(e) {
    var t = st(e, 1);
    t !== null && Qe(t, e, 1, -1);
}
function vs(e) {
    var t = Xe();
    return (
        typeof e == "function" && (e = e()),
        (t.memoizedState = t.baseState = e),
        (e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: vr, lastRenderedState: e }),
        (t.queue = e),
        (e = e.dispatch = Nf.bind(null, q, e)),
        [t.memoizedState, e]
    );
}
function gr(e, t, n, r) {
    return (
        (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
        (t = q.updateQueue),
        t === null
            ? ((t = { lastEffect: null, stores: null }), (q.updateQueue = t), (t.lastEffect = e.next = e))
            : ((n = t.lastEffect), n === null ? (t.lastEffect = e.next = e) : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
        e
    );
}
function Sc() {
    return $e().memoizedState;
}
function ei(e, t, n, r) {
    var i = Xe();
    (q.flags |= e), (i.memoizedState = gr(1 | t, n, void 0, r === void 0 ? null : r));
}
function $i(e, t, n, r) {
    var i = $e();
    r = r === void 0 ? null : r;
    var l = void 0;
    if (ee !== null) {
        var o = ee.memoizedState;
        if (((l = o.destroy), r !== null && la(r, o.deps))) {
            i.memoizedState = gr(t, n, l, r);
            return;
        }
    }
    (q.flags |= e), (i.memoizedState = gr(1 | t, n, l, r));
}
function gs(e, t) {
    return ei(8390656, 8, e, t);
}
function sa(e, t) {
    return $i(2048, 8, e, t);
}
function Ec(e, t) {
    return $i(4, 2, e, t);
}
function Cc(e, t) {
    return $i(4, 4, e, t);
}
function jc(e, t) {
    if (typeof t == "function")
        return (
            (e = e()),
            t(e),
            function () {
                t(null);
            }
        );
    if (t != null)
        return (
            (e = e()),
            (t.current = e),
            function () {
                t.current = null;
            }
        );
}
function _c(e, t, n) {
    return (n = n != null ? n.concat([e]) : null), $i(4, 4, jc.bind(null, t, e), n);
}
function ua() {}
function zc(e, t) {
    var n = $e();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && la(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
}
function Pc(e, t) {
    var n = $e();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && la(t, r[1]) ? r[0] : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Nc(e, t, n) {
    return Ht & 21 ? (Ke(n, t) || ((n = Lu()), (q.lanes |= n), (Vt |= n), (e.baseState = !0)), t) : (e.baseState && ((e.baseState = !1), (Se = !0)), (e.memoizedState = n));
}
function zf(e, t) {
    var n = M;
    (M = n !== 0 && 4 > n ? n : 4), e(!0);
    var r = kl.transition;
    kl.transition = {};
    try {
        e(!1), t();
    } finally {
        (M = n), (kl.transition = r);
    }
}
function Dc() {
    return $e().memoizedState;
}
function Pf(e, t, n) {
    var r = Ct(e);
    if (((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), Tc(e))) Oc(t, n);
    else if (((n = dc(e, t, n, r)), n !== null)) {
        var i = ve();
        Qe(n, e, r, i), Fc(n, t, r);
    }
}
function Nf(e, t, n) {
    var r = Ct(e),
        i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (Tc(e)) Oc(t, i);
    else {
        var l = e.alternate;
        if (e.lanes === 0 && (l === null || l.lanes === 0) && ((l = t.lastRenderedReducer), l !== null))
            try {
                var o = t.lastRenderedState,
                    a = l(o, n);
                if (((i.hasEagerState = !0), (i.eagerState = a), Ke(a, o))) {
                    var s = t.interleaved;
                    s === null ? ((i.next = i), ea(t)) : ((i.next = s.next), (s.next = i)), (t.interleaved = i);
                    return;
                }
            } catch {
            } finally {
            }
        (n = dc(e, t, i, r)), n !== null && ((i = ve()), Qe(n, e, r, i), Fc(n, t, r));
    }
}
function Tc(e) {
    var t = e.alternate;
    return e === q || (t !== null && t === q);
}
function Oc(e, t) {
    Gn = Si = !0;
    var n = e.pending;
    n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t);
}
function Fc(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        (r &= e.pendingLanes), (n |= r), (t.lanes = n), Uo(e, n);
    }
}
var Ei = {
        readContext: Ae,
        useCallback: ue,
        useContext: ue,
        useEffect: ue,
        useImperativeHandle: ue,
        useInsertionEffect: ue,
        useLayoutEffect: ue,
        useMemo: ue,
        useReducer: ue,
        useRef: ue,
        useState: ue,
        useDebugValue: ue,
        useDeferredValue: ue,
        useTransition: ue,
        useMutableSource: ue,
        useSyncExternalStore: ue,
        useId: ue,
        unstable_isNewReconciler: !1,
    },
    Df = {
        readContext: Ae,
        useCallback: function (e, t) {
            return (Xe().memoizedState = [e, t === void 0 ? null : t]), e;
        },
        useContext: Ae,
        useEffect: gs,
        useImperativeHandle: function (e, t, n) {
            return (n = n != null ? n.concat([e]) : null), ei(4194308, 4, jc.bind(null, t, e), n);
        },
        useLayoutEffect: function (e, t) {
            return ei(4194308, 4, e, t);
        },
        useInsertionEffect: function (e, t) {
            return ei(4, 2, e, t);
        },
        useMemo: function (e, t) {
            var n = Xe();
            return (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e;
        },
        useReducer: function (e, t, n) {
            var r = Xe();
            return (
                (t = n !== void 0 ? n(t) : t),
                (r.memoizedState = r.baseState = t),
                (e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }),
                (r.queue = e),
                (e = e.dispatch = Pf.bind(null, q, e)),
                [r.memoizedState, e]
            );
        },
        useRef: function (e) {
            var t = Xe();
            return (e = { current: e }), (t.memoizedState = e);
        },
        useState: vs,
        useDebugValue: ua,
        useDeferredValue: function (e) {
            return (Xe().memoizedState = e);
        },
        useTransition: function () {
            var e = vs(!1),
                t = e[0];
            return (e = zf.bind(null, e[1])), (Xe().memoizedState = e), [t, e];
        },
        useMutableSource: function () {},
        useSyncExternalStore: function (e, t, n) {
            var r = q,
                i = Xe();
            if (V) {
                if (n === void 0) throw Error(h(407));
                n = n();
            } else {
                if (((n = t()), le === null)) throw Error(h(349));
                Ht & 30 || hc(r, t, n);
            }
            i.memoizedState = n;
            var l = { value: n, getSnapshot: t };
            return (i.queue = l), gs(yc.bind(null, r, l, e), [e]), (r.flags |= 2048), gr(9, xc.bind(null, r, l, n, t), void 0, null), n;
        },
        useId: function () {
            var e = Xe(),
                t = le.identifierPrefix;
            if (V) {
                var n = it,
                    r = rt;
                (n = (r & ~(1 << (32 - Ve(r) - 1))).toString(32) + n), (t = ":" + t + "R" + n), (n = mr++), 0 < n && (t += "H" + n.toString(32)), (t += ":");
            } else (n = _f++), (t = ":" + t + "r" + n.toString(32) + ":");
            return (e.memoizedState = t);
        },
        unstable_isNewReconciler: !1,
    },
    Tf = {
        readContext: Ae,
        useCallback: zc,
        useContext: Ae,
        useEffect: sa,
        useImperativeHandle: _c,
        useInsertionEffect: Ec,
        useLayoutEffect: Cc,
        useMemo: Pc,
        useReducer: Sl,
        useRef: Sc,
        useState: function () {
            return Sl(vr);
        },
        useDebugValue: ua,
        useDeferredValue: function (e) {
            var t = $e();
            return Nc(t, ee.memoizedState, e);
        },
        useTransition: function () {
            var e = Sl(vr)[0],
                t = $e().memoizedState;
            return [e, t];
        },
        useMutableSource: vc,
        useSyncExternalStore: gc,
        useId: Dc,
        unstable_isNewReconciler: !1,
    },
    Of = {
        readContext: Ae,
        useCallback: zc,
        useContext: Ae,
        useEffect: sa,
        useImperativeHandle: _c,
        useInsertionEffect: Ec,
        useLayoutEffect: Cc,
        useMemo: Pc,
        useReducer: El,
        useRef: Sc,
        useState: function () {
            return El(vr);
        },
        useDebugValue: ua,
        useDeferredValue: function (e) {
            var t = $e();
            return ee === null ? (t.memoizedState = e) : Nc(t, ee.memoizedState, e);
        },
        useTransition: function () {
            var e = El(vr)[0],
                t = $e().memoizedState;
            return [e, t];
        },
        useMutableSource: vc,
        useSyncExternalStore: gc,
        useId: Dc,
        unstable_isNewReconciler: !1,
    };
function We(e, t) {
    if (e && e.defaultProps) {
        (t = Y({}, t)), (e = e.defaultProps);
        for (var n in e) t[n] === void 0 && (t[n] = e[n]);
        return t;
    }
    return t;
}
function oo(e, t, n, r) {
    (t = e.memoizedState), (n = n(r, t)), (n = n == null ? t : Y({}, t, n)), (e.memoizedState = n), e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Ui = {
    isMounted: function (e) {
        return (e = e._reactInternals) ? bt(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
        e = e._reactInternals;
        var r = ve(),
            i = Ct(e),
            l = lt(r, i);
        (l.payload = t), n != null && (l.callback = n), (t = St(e, l, i)), t !== null && (Qe(t, e, i, r), Zr(t, e, i));
    },
    enqueueReplaceState: function (e, t, n) {
        e = e._reactInternals;
        var r = ve(),
            i = Ct(e),
            l = lt(r, i);
        (l.tag = 1), (l.payload = t), n != null && (l.callback = n), (t = St(e, l, i)), t !== null && (Qe(t, e, i, r), Zr(t, e, i));
    },
    enqueueForceUpdate: function (e, t) {
        e = e._reactInternals;
        var n = ve(),
            r = Ct(e),
            i = lt(n, r);
        (i.tag = 2), t != null && (i.callback = t), (t = St(e, i, r)), t !== null && (Qe(t, e, r, n), Zr(t, e, r));
    },
};
function hs(e, t, n, r, i, l, o) {
    return (e = e.stateNode), typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, l, o) : t.prototype && t.prototype.isPureReactComponent ? !sr(n, r) || !sr(i, l) : !0;
}
function Lc(e, t, n) {
    var r = !1,
        i = zt,
        l = t.contextType;
    return (
        typeof l == "object" && l !== null ? (l = Ae(l)) : ((i = Ce(t) ? Wt : de.current), (r = t.contextTypes), (l = (r = r != null) ? kn(e, i) : zt)),
        (t = new t(n, l)),
        (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
        (t.updater = Ui),
        (e.stateNode = t),
        (t._reactInternals = e),
        r && ((e = e.stateNode), (e.__reactInternalMemoizedUnmaskedChildContext = i), (e.__reactInternalMemoizedMaskedChildContext = l)),
        t
    );
}
function xs(e, t, n, r) {
    (e = t.state),
        typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
        typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r),
        t.state !== e && Ui.enqueueReplaceState(t, t.state, null);
}
function ao(e, t, n, r) {
    var i = e.stateNode;
    (i.props = n), (i.state = e.memoizedState), (i.refs = {}), ta(e);
    var l = t.contextType;
    typeof l == "object" && l !== null ? (i.context = Ae(l)) : ((l = Ce(t) ? Wt : de.current), (i.context = kn(e, l))),
        (i.state = e.memoizedState),
        (l = t.getDerivedStateFromProps),
        typeof l == "function" && (oo(e, t, l, n), (i.state = e.memoizedState)),
        typeof t.getDerivedStateFromProps == "function" ||
            typeof i.getSnapshotBeforeUpdate == "function" ||
            (typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function") ||
            ((t = i.state),
            typeof i.componentWillMount == "function" && i.componentWillMount(),
            typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(),
            t !== i.state && Ui.enqueueReplaceState(i, i.state, null),
            wi(e, n, i, r),
            (i.state = e.memoizedState)),
        typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function jn(e, t) {
    try {
        var n = "",
            r = t;
        do (n += ld(r)), (r = r.return);
        while (r);
        var i = n;
    } catch (l) {
        i =
            `
Error generating stack: ` +
            l.message +
            `
` +
            l.stack;
    }
    return { value: e, source: t, stack: i, digest: null };
}
function Cl(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function so(e, t) {
    try {
        console.error(t.value);
    } catch (n) {
        setTimeout(function () {
            throw n;
        });
    }
}
var Ff = typeof WeakMap == "function" ? WeakMap : Map;
function Rc(e, t, n) {
    (n = lt(-1, n)), (n.tag = 3), (n.payload = { element: null });
    var r = t.value;
    return (
        (n.callback = function () {
            ji || ((ji = !0), (yo = r)), so(e, t);
        }),
        n
    );
}
function Mc(e, t, n) {
    (n = lt(-1, n)), (n.tag = 3);
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var i = t.value;
        (n.payload = function () {
            return r(i);
        }),
            (n.callback = function () {
                so(e, t);
            });
    }
    var l = e.stateNode;
    return (
        l !== null &&
            typeof l.componentDidCatch == "function" &&
            (n.callback = function () {
                so(e, t), typeof r != "function" && (Et === null ? (Et = new Set([this])) : Et.add(this));
                var o = t.stack;
                this.componentDidCatch(t.value, { componentStack: o !== null ? o : "" });
            }),
        n
    );
}
function ys(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new Ff();
        var i = new Set();
        r.set(t, i);
    } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
    i.has(n) || (i.add(n), (e = bf.bind(null, e, t, n)), t.then(e, e));
}
function ws(e) {
    do {
        var t;
        if (((t = e.tag === 13) && ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)), t)) return e;
        e = e.return;
    } while (e !== null);
    return null;
}
function ks(e, t, n, r, i) {
    return e.mode & 1
        ? ((e.flags |= 65536), (e.lanes = i), e)
        : (e === t ? (e.flags |= 65536) : ((e.flags |= 128), (n.flags |= 131072), (n.flags &= -52805), n.tag === 1 && (n.alternate === null ? (n.tag = 17) : ((t = lt(-1, 1)), (t.tag = 2), St(n, t, 1))), (n.lanes |= 1)), e);
}
var Lf = ct.ReactCurrentOwner,
    Se = !1;
function me(e, t, n, r) {
    t.child = e === null ? pc(t, null, n, r) : En(t, e.child, n, r);
}
function Ss(e, t, n, r, i) {
    n = n.render;
    var l = t.ref;
    return xn(t, i), (r = oa(e, t, n, r, l, i)), (n = aa()), e !== null && !Se ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~i), ut(e, t, i)) : (V && n && qo(t), (t.flags |= 1), me(e, t, r, i), t.child);
}
function Es(e, t, n, r, i) {
    if (e === null) {
        var l = n.type;
        return typeof l == "function" && !ha(l) && l.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0
            ? ((t.tag = 15), (t.type = l), Ic(e, t, l, r, i))
            : ((e = ii(n.type, null, r, t, t.mode, i)), (e.ref = t.ref), (e.return = t), (t.child = e));
    }
    if (((l = e.child), !(e.lanes & i))) {
        var o = l.memoizedProps;
        if (((n = n.compare), (n = n !== null ? n : sr), n(o, r) && e.ref === t.ref)) return ut(e, t, i);
    }
    return (t.flags |= 1), (e = jt(l, r)), (e.ref = t.ref), (e.return = t), (t.child = e);
}
function Ic(e, t, n, r, i) {
    if (e !== null) {
        var l = e.memoizedProps;
        if (sr(l, r) && e.ref === t.ref)
            if (((Se = !1), (t.pendingProps = r = l), (e.lanes & i) !== 0)) e.flags & 131072 && (Se = !0);
            else return (t.lanes = e.lanes), ut(e, t, i);
    }
    return uo(e, t, n, r, i);
}
function Ac(e, t, n) {
    var r = t.pendingProps,
        i = r.children,
        l = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1)) (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }), U(fn, Pe), (Pe |= n);
        else {
            if (!(n & 1073741824))
                return (e = l !== null ? l.baseLanes | n : n), (t.lanes = t.childLanes = 1073741824), (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }), (t.updateQueue = null), U(fn, Pe), (Pe |= e), null;
            (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }), (r = l !== null ? l.baseLanes : n), U(fn, Pe), (Pe |= r);
        }
    else l !== null ? ((r = l.baseLanes | n), (t.memoizedState = null)) : (r = n), U(fn, Pe), (Pe |= r);
    return me(e, t, i, n), t.child;
}
function $c(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) && ((t.flags |= 512), (t.flags |= 2097152));
}
function uo(e, t, n, r, i) {
    var l = Ce(n) ? Wt : de.current;
    return (
        (l = kn(t, l)), xn(t, i), (n = oa(e, t, n, r, l, i)), (r = aa()), e !== null && !Se ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~i), ut(e, t, i)) : (V && r && qo(t), (t.flags |= 1), me(e, t, n, i), t.child)
    );
}
function Cs(e, t, n, r, i) {
    if (Ce(n)) {
        var l = !0;
        vi(t);
    } else l = !1;
    if ((xn(t, i), t.stateNode === null)) ti(e, t), Lc(t, n, r), ao(t, n, r, i), (r = !0);
    else if (e === null) {
        var o = t.stateNode,
            a = t.memoizedProps;
        o.props = a;
        var s = o.context,
            u = n.contextType;
        typeof u == "object" && u !== null ? (u = Ae(u)) : ((u = Ce(n) ? Wt : de.current), (u = kn(t, u)));
        var m = n.getDerivedStateFromProps,
            v = typeof m == "function" || typeof o.getSnapshotBeforeUpdate == "function";
        v || (typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function") || ((a !== r || s !== u) && xs(t, o, r, u)), (ft = !1);
        var f = t.memoizedState;
        (o.state = f),
            wi(t, r, o, i),
            (s = t.memoizedState),
            a !== r || f !== s || Ee.current || ft
                ? (typeof m == "function" && (oo(t, n, m, r), (s = t.memoizedState)),
                  (a = ft || hs(t, n, a, r, f, s, u))
                      ? (v ||
                            (typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function") ||
                            (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()),
                        typeof o.componentDidMount == "function" && (t.flags |= 4194308))
                      : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), (t.memoizedProps = r), (t.memoizedState = s)),
                  (o.props = r),
                  (o.state = s),
                  (o.context = u),
                  (r = a))
                : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), (r = !1));
    } else {
        (o = t.stateNode),
            fc(e, t),
            (a = t.memoizedProps),
            (u = t.type === t.elementType ? a : We(t.type, a)),
            (o.props = u),
            (v = t.pendingProps),
            (f = o.context),
            (s = n.contextType),
            typeof s == "object" && s !== null ? (s = Ae(s)) : ((s = Ce(n) ? Wt : de.current), (s = kn(t, s)));
        var y = n.getDerivedStateFromProps;
        (m = typeof y == "function" || typeof o.getSnapshotBeforeUpdate == "function") ||
            (typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function") ||
            ((a !== v || f !== s) && xs(t, o, r, s)),
            (ft = !1),
            (f = t.memoizedState),
            (o.state = f),
            wi(t, r, o, i);
        var w = t.memoizedState;
        a !== v || f !== w || Ee.current || ft
            ? (typeof y == "function" && (oo(t, n, y, r), (w = t.memoizedState)),
              (u = ft || hs(t, n, u, r, f, w, s) || !1)
                  ? (m ||
                        (typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function") ||
                        (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, w, s), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, w, s)),
                    typeof o.componentDidUpdate == "function" && (t.flags |= 4),
                    typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
                  : (typeof o.componentDidUpdate != "function" || (a === e.memoizedProps && f === e.memoizedState) || (t.flags |= 4),
                    typeof o.getSnapshotBeforeUpdate != "function" || (a === e.memoizedProps && f === e.memoizedState) || (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = w)),
              (o.props = r),
              (o.state = w),
              (o.context = s),
              (r = u))
            : (typeof o.componentDidUpdate != "function" || (a === e.memoizedProps && f === e.memoizedState) || (t.flags |= 4),
              typeof o.getSnapshotBeforeUpdate != "function" || (a === e.memoizedProps && f === e.memoizedState) || (t.flags |= 1024),
              (r = !1));
    }
    return co(e, t, n, r, l, i);
}
function co(e, t, n, r, i, l) {
    $c(e, t);
    var o = (t.flags & 128) !== 0;
    if (!r && !o) return i && us(t, n, !1), ut(e, t, l);
    (r = t.stateNode), (Lf.current = t);
    var a = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return (t.flags |= 1), e !== null && o ? ((t.child = En(t, e.child, null, l)), (t.child = En(t, null, a, l))) : me(e, t, a, l), (t.memoizedState = r.state), i && us(t, n, !0), t.child;
}
function Uc(e) {
    var t = e.stateNode;
    t.pendingContext ? ss(e, t.pendingContext, t.pendingContext !== t.context) : t.context && ss(e, t.context, !1), na(e, t.containerInfo);
}
function js(e, t, n, r, i) {
    return Sn(), Xo(i), (t.flags |= 256), me(e, t, n, r), t.child;
}
var po = { dehydrated: null, treeContext: null, retryLane: 0 };
function fo(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
}
function Wc(e, t, n) {
    var r = t.pendingProps,
        i = b.current,
        l = !1,
        o = (t.flags & 128) !== 0,
        a;
    if (((a = o) || (a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0), a ? ((l = !0), (t.flags &= -129)) : (e === null || e.memoizedState !== null) && (i |= 1), U(b, i & 1), e === null))
        return (
            io(t),
            (e = t.memoizedState),
            e !== null && ((e = e.dehydrated), e !== null)
                ? (t.mode & 1 ? (e.data === "$!" ? (t.lanes = 8) : (t.lanes = 1073741824)) : (t.lanes = 1), null)
                : ((o = r.children),
                  (e = r.fallback),
                  l
                      ? ((r = t.mode),
                        (l = t.child),
                        (o = { mode: "hidden", children: o }),
                        !(r & 1) && l !== null ? ((l.childLanes = 0), (l.pendingProps = o)) : (l = Hi(o, r, 0, null)),
                        (e = Ut(e, r, n, null)),
                        (l.return = t),
                        (e.return = t),
                        (l.sibling = e),
                        (t.child = l),
                        (t.child.memoizedState = fo(n)),
                        (t.memoizedState = po),
                        e)
                      : ca(t, o))
        );
    if (((i = e.memoizedState), i !== null && ((a = i.dehydrated), a !== null))) return Rf(e, t, o, r, a, i, n);
    if (l) {
        (l = r.fallback), (o = t.mode), (i = e.child), (a = i.sibling);
        var s = { mode: "hidden", children: r.children };
        return (
            !(o & 1) && t.child !== i ? ((r = t.child), (r.childLanes = 0), (r.pendingProps = s), (t.deletions = null)) : ((r = jt(i, s)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
            a !== null ? (l = jt(a, l)) : ((l = Ut(l, o, n, null)), (l.flags |= 2)),
            (l.return = t),
            (r.return = t),
            (r.sibling = l),
            (t.child = r),
            (r = l),
            (l = t.child),
            (o = e.child.memoizedState),
            (o = o === null ? fo(n) : { baseLanes: o.baseLanes | n, cachePool: null, transitions: o.transitions }),
            (l.memoizedState = o),
            (l.childLanes = e.childLanes & ~n),
            (t.memoizedState = po),
            r
        );
    }
    return (
        (l = e.child),
        (e = l.sibling),
        (r = jt(l, { mode: "visible", children: r.children })),
        !(t.mode & 1) && (r.lanes = n),
        (r.return = t),
        (r.sibling = null),
        e !== null && ((n = t.deletions), n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
        (t.child = r),
        (t.memoizedState = null),
        r
    );
}
function ca(e, t) {
    return (t = Hi({ mode: "visible", children: t }, e.mode, 0, null)), (t.return = e), (e.child = t);
}
function Br(e, t, n, r) {
    return r !== null && Xo(r), En(t, e.child, null, n), (e = ca(t, t.pendingProps.children)), (e.flags |= 2), (t.memoizedState = null), e;
}
function Rf(e, t, n, r, i, l, o) {
    if (n)
        return t.flags & 256
            ? ((t.flags &= -257), (r = Cl(Error(h(422)))), Br(e, t, o, r))
            : t.memoizedState !== null
            ? ((t.child = e.child), (t.flags |= 128), null)
            : ((l = r.fallback),
              (i = t.mode),
              (r = Hi({ mode: "visible", children: r.children }, i, 0, null)),
              (l = Ut(l, i, o, null)),
              (l.flags |= 2),
              (r.return = t),
              (l.return = t),
              (r.sibling = l),
              (t.child = r),
              t.mode & 1 && En(t, e.child, null, o),
              (t.child.memoizedState = fo(o)),
              (t.memoizedState = po),
              l);
    if (!(t.mode & 1)) return Br(e, t, o, null);
    if (i.data === "$!") {
        if (((r = i.nextSibling && i.nextSibling.dataset), r)) var a = r.dgst;
        return (r = a), (l = Error(h(419))), (r = Cl(l, r, void 0)), Br(e, t, o, r);
    }
    if (((a = (o & e.childLanes) !== 0), Se || a)) {
        if (((r = le), r !== null)) {
            switch (o & -o) {
                case 4:
                    i = 2;
                    break;
                case 16:
                    i = 8;
                    break;
                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                    i = 32;
                    break;
                case 536870912:
                    i = 268435456;
                    break;
                default:
                    i = 0;
            }
            (i = i & (r.suspendedLanes | o) ? 0 : i), i !== 0 && i !== l.retryLane && ((l.retryLane = i), st(e, i), Qe(r, e, i, -1));
        }
        return ga(), (r = Cl(Error(h(421)))), Br(e, t, o, r);
    }
    return i.data === "$?"
        ? ((t.flags |= 128), (t.child = e.child), (t = qf.bind(null, e)), (i._reactRetry = t), null)
        : ((e = l.treeContext),
          (Ne = kt(i.nextSibling)),
          (De = t),
          (V = !0),
          (He = null),
          e !== null && ((Le[Re++] = rt), (Le[Re++] = it), (Le[Re++] = Bt), (rt = e.id), (it = e.overflow), (Bt = t)),
          (t = ca(t, r.children)),
          (t.flags |= 4096),
          t);
}
function _s(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), lo(e.return, t, n);
}
function jl(e, t, n, r, i) {
    var l = e.memoizedState;
    l === null
        ? (e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: i })
        : ((l.isBackwards = t), (l.rendering = null), (l.renderingStartTime = 0), (l.last = r), (l.tail = n), (l.tailMode = i));
}
function Bc(e, t, n) {
    var r = t.pendingProps,
        i = r.revealOrder,
        l = r.tail;
    if ((me(e, t, r.children, n), (r = b.current), r & 2)) (r = (r & 1) | 2), (t.flags |= 128);
    else {
        if (e !== null && e.flags & 128)
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13) e.memoizedState !== null && _s(e, n, t);
                else if (e.tag === 19) _s(e, n, t);
                else if (e.child !== null) {
                    (e.child.return = e), (e = e.child);
                    continue;
                }
                if (e === t) break e;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t) break e;
                    e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
            }
        r &= 1;
    }
    if ((U(b, r), !(t.mode & 1))) t.memoizedState = null;
    else
        switch (i) {
            case "forwards":
                for (n = t.child, i = null; n !== null; ) (e = n.alternate), e !== null && ki(e) === null && (i = n), (n = n.sibling);
                (n = i), n === null ? ((i = t.child), (t.child = null)) : ((i = n.sibling), (n.sibling = null)), jl(t, !1, i, n, l);
                break;
            case "backwards":
                for (n = null, i = t.child, t.child = null; i !== null; ) {
                    if (((e = i.alternate), e !== null && ki(e) === null)) {
                        t.child = i;
                        break;
                    }
                    (e = i.sibling), (i.sibling = n), (n = i), (i = e);
                }
                jl(t, !0, n, null, l);
                break;
            case "together":
                jl(t, !1, null, null, void 0);
                break;
            default:
                t.memoizedState = null;
        }
    return t.child;
}
function ti(e, t) {
    !(t.mode & 1) && e !== null && ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function ut(e, t, n) {
    if ((e !== null && (t.dependencies = e.dependencies), (Vt |= t.lanes), !(n & t.childLanes))) return null;
    if (e !== null && t.child !== e.child) throw Error(h(153));
    if (t.child !== null) {
        for (e = t.child, n = jt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) (e = e.sibling), (n = n.sibling = jt(e, e.pendingProps)), (n.return = t);
        n.sibling = null;
    }
    return t.child;
}
function Mf(e, t, n) {
    switch (t.tag) {
        case 3:
            Uc(t), Sn();
            break;
        case 5:
            mc(t);
            break;
        case 1:
            Ce(t.type) && vi(t);
            break;
        case 4:
            na(t, t.stateNode.containerInfo);
            break;
        case 10:
            var r = t.type._context,
                i = t.memoizedProps.value;
            U(xi, r._currentValue), (r._currentValue = i);
            break;
        case 13:
            if (((r = t.memoizedState), r !== null))
                return r.dehydrated !== null ? (U(b, b.current & 1), (t.flags |= 128), null) : n & t.child.childLanes ? Wc(e, t, n) : (U(b, b.current & 1), (e = ut(e, t, n)), e !== null ? e.sibling : null);
            U(b, b.current & 1);
            break;
        case 19:
            if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
                if (r) return Bc(e, t, n);
                t.flags |= 128;
            }
            if (((i = t.memoizedState), i !== null && ((i.rendering = null), (i.tail = null), (i.lastEffect = null)), U(b, b.current), r)) break;
            return null;
        case 22:
        case 23:
            return (t.lanes = 0), Ac(e, t, n);
    }
    return ut(e, t, n);
}
var Hc, mo, Vc, Qc;
Hc = function (e, t) {
    for (var n = t.child; n !== null; ) {
        if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            (n.child.return = n), (n = n.child);
            continue;
        }
        if (n === t) break;
        for (; n.sibling === null; ) {
            if (n.return === null || n.return === t) return;
            n = n.return;
        }
        (n.sibling.return = n.return), (n = n.sibling);
    }
};
mo = function () {};
Vc = function (e, t, n, r) {
    var i = e.memoizedProps;
    if (i !== r) {
        (e = t.stateNode), At(Je.current);
        var l = null;
        switch (n) {
            case "input":
                (i = Rl(e, i)), (r = Rl(e, r)), (l = []);
                break;
            case "select":
                (i = Y({}, i, { value: void 0 })), (r = Y({}, r, { value: void 0 })), (l = []);
                break;
            case "textarea":
                (i = Al(e, i)), (r = Al(e, r)), (l = []);
                break;
            default:
                typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = fi);
        }
        Ul(n, r);
        var o;
        n = null;
        for (u in i)
            if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
                if (u === "style") {
                    var a = i[u];
                    for (o in a) a.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
                } else
                    u !== "dangerouslySetInnerHTML" &&
                        u !== "children" &&
                        u !== "suppressContentEditableWarning" &&
                        u !== "suppressHydrationWarning" &&
                        u !== "autoFocus" &&
                        (tr.hasOwnProperty(u) ? l || (l = []) : (l = l || []).push(u, null));
        for (u in r) {
            var s = r[u];
            if (((a = i != null ? i[u] : void 0), r.hasOwnProperty(u) && s !== a && (s != null || a != null)))
                if (u === "style")
                    if (a) {
                        for (o in a) !a.hasOwnProperty(o) || (s && s.hasOwnProperty(o)) || (n || (n = {}), (n[o] = ""));
                        for (o in s) s.hasOwnProperty(o) && a[o] !== s[o] && (n || (n = {}), (n[o] = s[o]));
                    } else n || (l || (l = []), l.push(u, n)), (n = s);
                else
                    u === "dangerouslySetInnerHTML"
                        ? ((s = s ? s.__html : void 0), (a = a ? a.__html : void 0), s != null && a !== s && (l = l || []).push(u, s))
                        : u === "children"
                        ? (typeof s != "string" && typeof s != "number") || (l = l || []).push(u, "" + s)
                        : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (tr.hasOwnProperty(u) ? (s != null && u === "onScroll" && W("scroll", e), l || a === s || (l = [])) : (l = l || []).push(u, s));
        }
        n && (l = l || []).push("style", n);
        var u = l;
        (t.updateQueue = u) && (t.flags |= 4);
    }
};
Qc = function (e, t, n, r) {
    n !== r && (t.flags |= 4);
};
function $n(e, t) {
    if (!V)
        switch (e.tailMode) {
            case "hidden":
                t = e.tail;
                for (var n = null; t !== null; ) t.alternate !== null && (n = t), (t = t.sibling);
                n === null ? (e.tail = null) : (n.sibling = null);
                break;
            case "collapsed":
                n = e.tail;
                for (var r = null; n !== null; ) n.alternate !== null && (r = n), (n = n.sibling);
                r === null ? (t || e.tail === null ? (e.tail = null) : (e.tail.sibling = null)) : (r.sibling = null);
        }
}
function ce(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
        n = 0,
        r = 0;
    if (t) for (var i = e.child; i !== null; ) (n |= i.lanes | i.childLanes), (r |= i.subtreeFlags & 14680064), (r |= i.flags & 14680064), (i.return = e), (i = i.sibling);
    else for (i = e.child; i !== null; ) (n |= i.lanes | i.childLanes), (r |= i.subtreeFlags), (r |= i.flags), (i.return = e), (i = i.sibling);
    return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function If(e, t, n) {
    var r = t.pendingProps;
    switch ((Yo(t), t.tag)) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return ce(t), null;
        case 1:
            return Ce(t.type) && mi(), ce(t), null;
        case 3:
            return (
                (r = t.stateNode),
                Cn(),
                B(Ee),
                B(de),
                ia(),
                r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
                (e === null || e.child === null) && (Ur(t) ? (t.flags |= 4) : e === null || (e.memoizedState.isDehydrated && !(t.flags & 256)) || ((t.flags |= 1024), He !== null && (So(He), (He = null)))),
                mo(e, t),
                ce(t),
                null
            );
        case 5:
            ra(t);
            var i = At(fr.current);
            if (((n = t.type), e !== null && t.stateNode != null)) Vc(e, t, n, r, i), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
            else {
                if (!r) {
                    if (t.stateNode === null) throw Error(h(166));
                    return ce(t), null;
                }
                if (((e = At(Je.current)), Ur(t))) {
                    (r = t.stateNode), (n = t.type);
                    var l = t.memoizedProps;
                    switch (((r[Ge] = t), (r[pr] = l), (e = (t.mode & 1) !== 0), n)) {
                        case "dialog":
                            W("cancel", r), W("close", r);
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            W("load", r);
                            break;
                        case "video":
                        case "audio":
                            for (i = 0; i < Qn.length; i++) W(Qn[i], r);
                            break;
                        case "source":
                            W("error", r);
                            break;
                        case "img":
                        case "image":
                        case "link":
                            W("error", r), W("load", r);
                            break;
                        case "details":
                            W("toggle", r);
                            break;
                        case "input":
                            Ra(r, l), W("invalid", r);
                            break;
                        case "select":
                            (r._wrapperState = { wasMultiple: !!l.multiple }), W("invalid", r);
                            break;
                        case "textarea":
                            Ia(r, l), W("invalid", r);
                    }
                    Ul(n, l), (i = null);
                    for (var o in l)
                        if (l.hasOwnProperty(o)) {
                            var a = l[o];
                            o === "children"
                                ? typeof a == "string"
                                    ? r.textContent !== a && (l.suppressHydrationWarning !== !0 && $r(r.textContent, a, e), (i = ["children", a]))
                                    : typeof a == "number" && r.textContent !== "" + a && (l.suppressHydrationWarning !== !0 && $r(r.textContent, a, e), (i = ["children", "" + a]))
                                : tr.hasOwnProperty(o) && a != null && o === "onScroll" && W("scroll", r);
                        }
                    switch (n) {
                        case "input":
                            Tr(r), Ma(r, l, !0);
                            break;
                        case "textarea":
                            Tr(r), Aa(r);
                            break;
                        case "select":
                        case "option":
                            break;
                        default:
                            typeof l.onClick == "function" && (r.onclick = fi);
                    }
                    (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
                } else {
                    (o = i.nodeType === 9 ? i : i.ownerDocument),
                        e === "http://www.w3.org/1999/xhtml" && (e = yu(n)),
                        e === "http://www.w3.org/1999/xhtml"
                            ? n === "script"
                                ? ((e = o.createElement("div")), (e.innerHTML = "<script></script>"), (e = e.removeChild(e.firstChild)))
                                : typeof r.is == "string"
                                ? (e = o.createElement(n, { is: r.is }))
                                : ((e = o.createElement(n)), n === "select" && ((o = e), r.multiple ? (o.multiple = !0) : r.size && (o.size = r.size)))
                            : (e = o.createElementNS(e, n)),
                        (e[Ge] = t),
                        (e[pr] = r),
                        Hc(e, t, !1, !1),
                        (t.stateNode = e);
                    e: {
                        switch (((o = Wl(n, r)), n)) {
                            case "dialog":
                                W("cancel", e), W("close", e), (i = r);
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                W("load", e), (i = r);
                                break;
                            case "video":
                            case "audio":
                                for (i = 0; i < Qn.length; i++) W(Qn[i], e);
                                i = r;
                                break;
                            case "source":
                                W("error", e), (i = r);
                                break;
                            case "img":
                            case "image":
                            case "link":
                                W("error", e), W("load", e), (i = r);
                                break;
                            case "details":
                                W("toggle", e), (i = r);
                                break;
                            case "input":
                                Ra(e, r), (i = Rl(e, r)), W("invalid", e);
                                break;
                            case "option":
                                i = r;
                                break;
                            case "select":
                                (e._wrapperState = { wasMultiple: !!r.multiple }), (i = Y({}, r, { value: void 0 })), W("invalid", e);
                                break;
                            case "textarea":
                                Ia(e, r), (i = Al(e, r)), W("invalid", e);
                                break;
                            default:
                                i = r;
                        }
                        Ul(n, i), (a = i);
                        for (l in a)
                            if (a.hasOwnProperty(l)) {
                                var s = a[l];
                                l === "style"
                                    ? Su(e, s)
                                    : l === "dangerouslySetInnerHTML"
                                    ? ((s = s ? s.__html : void 0), s != null && wu(e, s))
                                    : l === "children"
                                    ? typeof s == "string"
                                        ? (n !== "textarea" || s !== "") && nr(e, s)
                                        : typeof s == "number" && nr(e, "" + s)
                                    : l !== "suppressContentEditableWarning" && l !== "suppressHydrationWarning" && l !== "autoFocus" && (tr.hasOwnProperty(l) ? s != null && l === "onScroll" && W("scroll", e) : s != null && Lo(e, l, s, o));
                            }
                        switch (n) {
                            case "input":
                                Tr(e), Ma(e, r, !1);
                                break;
                            case "textarea":
                                Tr(e), Aa(e);
                                break;
                            case "option":
                                r.value != null && e.setAttribute("value", "" + _t(r.value));
                                break;
                            case "select":
                                (e.multiple = !!r.multiple), (l = r.value), l != null ? mn(e, !!r.multiple, l, !1) : r.defaultValue != null && mn(e, !!r.multiple, r.defaultValue, !0);
                                break;
                            default:
                                typeof i.onClick == "function" && (e.onclick = fi);
                        }
                        switch (n) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                r = !!r.autoFocus;
                                break e;
                            case "img":
                                r = !0;
                                break e;
                            default:
                                r = !1;
                        }
                    }
                    r && (t.flags |= 4);
                }
                t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
            }
            return ce(t), null;
        case 6:
            if (e && t.stateNode != null) Qc(e, t, e.memoizedProps, r);
            else {
                if (typeof r != "string" && t.stateNode === null) throw Error(h(166));
                if (((n = At(fr.current)), At(Je.current), Ur(t))) {
                    if (((r = t.stateNode), (n = t.memoizedProps), (r[Ge] = t), (l = r.nodeValue !== n) && ((e = De), e !== null)))
                        switch (e.tag) {
                            case 3:
                                $r(r.nodeValue, n, (e.mode & 1) !== 0);
                                break;
                            case 5:
                                e.memoizedProps.suppressHydrationWarning !== !0 && $r(r.nodeValue, n, (e.mode & 1) !== 0);
                        }
                    l && (t.flags |= 4);
                } else (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)), (r[Ge] = t), (t.stateNode = r);
            }
            return ce(t), null;
        case 13:
            if ((B(b), (r = t.memoizedState), e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))) {
                if (V && Ne !== null && t.mode & 1 && !(t.flags & 128)) uc(), Sn(), (t.flags |= 98560), (l = !1);
                else if (((l = Ur(t)), r !== null && r.dehydrated !== null)) {
                    if (e === null) {
                        if (!l) throw Error(h(318));
                        if (((l = t.memoizedState), (l = l !== null ? l.dehydrated : null), !l)) throw Error(h(317));
                        l[Ge] = t;
                    } else Sn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
                    ce(t), (l = !1);
                } else He !== null && (So(He), (He = null)), (l = !0);
                if (!l) return t.flags & 65536 ? t : null;
            }
            return t.flags & 128
                ? ((t.lanes = n), t)
                : ((r = r !== null),
                  r !== (e !== null && e.memoizedState !== null) && r && ((t.child.flags |= 8192), t.mode & 1 && (e === null || b.current & 1 ? te === 0 && (te = 3) : ga())),
                  t.updateQueue !== null && (t.flags |= 4),
                  ce(t),
                  null);
        case 4:
            return Cn(), mo(e, t), e === null && ur(t.stateNode.containerInfo), ce(t), null;
        case 10:
            return Jo(t.type._context), ce(t), null;
        case 17:
            return Ce(t.type) && mi(), ce(t), null;
        case 19:
            if ((B(b), (l = t.memoizedState), l === null)) return ce(t), null;
            if (((r = (t.flags & 128) !== 0), (o = l.rendering), o === null))
                if (r) $n(l, !1);
                else {
                    if (te !== 0 || (e !== null && e.flags & 128))
                        for (e = t.child; e !== null; ) {
                            if (((o = ki(e)), o !== null)) {
                                for (t.flags |= 128, $n(l, !1), r = o.updateQueue, r !== null && ((t.updateQueue = r), (t.flags |= 4)), t.subtreeFlags = 0, r = n, n = t.child; n !== null; )
                                    (l = n),
                                        (e = r),
                                        (l.flags &= 14680066),
                                        (o = l.alternate),
                                        o === null
                                            ? ((l.childLanes = 0),
                                              (l.lanes = e),
                                              (l.child = null),
                                              (l.subtreeFlags = 0),
                                              (l.memoizedProps = null),
                                              (l.memoizedState = null),
                                              (l.updateQueue = null),
                                              (l.dependencies = null),
                                              (l.stateNode = null))
                                            : ((l.childLanes = o.childLanes),
                                              (l.lanes = o.lanes),
                                              (l.child = o.child),
                                              (l.subtreeFlags = 0),
                                              (l.deletions = null),
                                              (l.memoizedProps = o.memoizedProps),
                                              (l.memoizedState = o.memoizedState),
                                              (l.updateQueue = o.updateQueue),
                                              (l.type = o.type),
                                              (e = o.dependencies),
                                              (l.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext })),
                                        (n = n.sibling);
                                return U(b, (b.current & 1) | 2), t.child;
                            }
                            e = e.sibling;
                        }
                    l.tail !== null && G() > _n && ((t.flags |= 128), (r = !0), $n(l, !1), (t.lanes = 4194304));
                }
            else {
                if (!r)
                    if (((e = ki(o)), e !== null)) {
                        if (((t.flags |= 128), (r = !0), (n = e.updateQueue), n !== null && ((t.updateQueue = n), (t.flags |= 4)), $n(l, !0), l.tail === null && l.tailMode === "hidden" && !o.alternate && !V)) return ce(t), null;
                    } else 2 * G() - l.renderingStartTime > _n && n !== 1073741824 && ((t.flags |= 128), (r = !0), $n(l, !1), (t.lanes = 4194304));
                l.isBackwards ? ((o.sibling = t.child), (t.child = o)) : ((n = l.last), n !== null ? (n.sibling = o) : (t.child = o), (l.last = o));
            }
            return l.tail !== null ? ((t = l.tail), (l.rendering = t), (l.tail = t.sibling), (l.renderingStartTime = G()), (t.sibling = null), (n = b.current), U(b, r ? (n & 1) | 2 : n & 1), t) : (ce(t), null);
        case 22:
        case 23:
            return va(), (r = t.memoizedState !== null), e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192), r && t.mode & 1 ? Pe & 1073741824 && (ce(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : ce(t), null;
        case 24:
            return null;
        case 25:
            return null;
    }
    throw Error(h(156, t.tag));
}
function Af(e, t) {
    switch ((Yo(t), t.tag)) {
        case 1:
            return Ce(t.type) && mi(), (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
        case 3:
            return Cn(), B(Ee), B(de), ia(), (e = t.flags), e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null;
        case 5:
            return ra(t), null;
        case 13:
            if ((B(b), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
                if (t.alternate === null) throw Error(h(340));
                Sn();
            }
            return (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
        case 19:
            return B(b), null;
        case 4:
            return Cn(), null;
        case 10:
            return Jo(t.type._context), null;
        case 22:
        case 23:
            return va(), null;
        case 24:
            return null;
        default:
            return null;
    }
}
var Hr = !1,
    pe = !1,
    $f = typeof WeakSet == "function" ? WeakSet : Set,
    j = null;
function dn(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function")
            try {
                n(null);
            } catch (r) {
                X(e, t, r);
            }
        else n.current = null;
}
function vo(e, t, n) {
    try {
        n();
    } catch (r) {
        X(e, t, r);
    }
}
var zs = !1;
function Uf(e, t) {
    if (((Gl = ci), (e = Xu()), bo(e))) {
        if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
        else
            e: {
                n = ((n = e.ownerDocument) && n.defaultView) || window;
                var r = n.getSelection && n.getSelection();
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode;
                    var i = r.anchorOffset,
                        l = r.focusNode;
                    r = r.focusOffset;
                    try {
                        n.nodeType, l.nodeType;
                    } catch {
                        n = null;
                        break e;
                    }
                    var o = 0,
                        a = -1,
                        s = -1,
                        u = 0,
                        m = 0,
                        v = e,
                        f = null;
                    t: for (;;) {
                        for (var y; v !== n || (i !== 0 && v.nodeType !== 3) || (a = o + i), v !== l || (r !== 0 && v.nodeType !== 3) || (s = o + r), v.nodeType === 3 && (o += v.nodeValue.length), (y = v.firstChild) !== null; )
                            (f = v), (v = y);
                        for (;;) {
                            if (v === e) break t;
                            if ((f === n && ++u === i && (a = o), f === l && ++m === r && (s = o), (y = v.nextSibling) !== null)) break;
                            (v = f), (f = v.parentNode);
                        }
                        v = y;
                    }
                    n = a === -1 || s === -1 ? null : { start: a, end: s };
                } else n = null;
            }
        n = n || { start: 0, end: 0 };
    } else n = null;
    for (Zl = { focusedElem: e, selectionRange: n }, ci = !1, j = t; j !== null; )
        if (((t = j), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null)) (e.return = t), (j = e);
        else
            for (; j !== null; ) {
                t = j;
                try {
                    var w = t.alternate;
                    if (t.flags & 1024)
                        switch (t.tag) {
                            case 0:
                            case 11:
                            case 15:
                                break;
                            case 1:
                                if (w !== null) {
                                    var k = w.memoizedProps,
                                        I = w.memoizedState,
                                        p = t.stateNode,
                                        c = p.getSnapshotBeforeUpdate(t.elementType === t.type ? k : We(t.type, k), I);
                                    p.__reactInternalSnapshotBeforeUpdate = c;
                                }
                                break;
                            case 3:
                                var d = t.stateNode.containerInfo;
                                d.nodeType === 1 ? (d.textContent = "") : d.nodeType === 9 && d.documentElement && d.removeChild(d.documentElement);
                                break;
                            case 5:
                            case 6:
                            case 4:
                            case 17:
                                break;
                            default:
                                throw Error(h(163));
                        }
                } catch (g) {
                    X(t, t.return, g);
                }
                if (((e = t.sibling), e !== null)) {
                    (e.return = t.return), (j = e);
                    break;
                }
                j = t.return;
            }
    return (w = zs), (zs = !1), w;
}
function Zn(e, t, n) {
    var r = t.updateQueue;
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
        var i = (r = r.next);
        do {
            if ((i.tag & e) === e) {
                var l = i.destroy;
                (i.destroy = void 0), l !== void 0 && vo(t, n, l);
            }
            i = i.next;
        } while (i !== r);
    }
}
function Wi(e, t) {
    if (((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)) {
        var n = (t = t.next);
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r();
            }
            n = n.next;
        } while (n !== t);
    }
}
function go(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
            case 5:
                e = n;
                break;
            default:
                e = n;
        }
        typeof t == "function" ? t(e) : (t.current = e);
    }
}
function Kc(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), Kc(t)),
        (e.child = null),
        (e.deletions = null),
        (e.sibling = null),
        e.tag === 5 && ((t = e.stateNode), t !== null && (delete t[Ge], delete t[pr], delete t[to], delete t[Sf], delete t[Ef])),
        (e.stateNode = null),
        (e.return = null),
        (e.dependencies = null),
        (e.memoizedProps = null),
        (e.memoizedState = null),
        (e.pendingProps = null),
        (e.stateNode = null),
        (e.updateQueue = null);
}
function bc(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Ps(e) {
    e: for (;;) {
        for (; e.sibling === null; ) {
            if (e.return === null || bc(e.return)) return null;
            e = e.return;
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
            if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
            (e.child.return = e), (e = e.child);
        }
        if (!(e.flags & 2)) return e.stateNode;
    }
}
function ho(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        (e = e.stateNode),
            t
                ? n.nodeType === 8
                    ? n.parentNode.insertBefore(e, t)
                    : n.insertBefore(e, t)
                : (n.nodeType === 8 ? ((t = n.parentNode), t.insertBefore(e, n)) : ((t = n), t.appendChild(e)), (n = n._reactRootContainer), n != null || t.onclick !== null || (t.onclick = fi));
    else if (r !== 4 && ((e = e.child), e !== null)) for (ho(e, t, n), e = e.sibling; e !== null; ) ho(e, t, n), (e = e.sibling);
}
function xo(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && ((e = e.child), e !== null)) for (xo(e, t, n), e = e.sibling; e !== null; ) xo(e, t, n), (e = e.sibling);
}
var oe = null,
    Be = !1;
function pt(e, t, n) {
    for (n = n.child; n !== null; ) qc(e, t, n), (n = n.sibling);
}
function qc(e, t, n) {
    if (Ze && typeof Ze.onCommitFiberUnmount == "function")
        try {
            Ze.onCommitFiberUnmount(Fi, n);
        } catch {}
    switch (n.tag) {
        case 5:
            pe || dn(n, t);
        case 6:
            var r = oe,
                i = Be;
            (oe = null), pt(e, t, n), (oe = r), (Be = i), oe !== null && (Be ? ((e = oe), (n = n.stateNode), e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : oe.removeChild(n.stateNode));
            break;
        case 18:
            oe !== null && (Be ? ((e = oe), (n = n.stateNode), e.nodeType === 8 ? xl(e.parentNode, n) : e.nodeType === 1 && xl(e, n), or(e)) : xl(oe, n.stateNode));
            break;
        case 4:
            (r = oe), (i = Be), (oe = n.stateNode.containerInfo), (Be = !0), pt(e, t, n), (oe = r), (Be = i);
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!pe && ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))) {
                i = r = r.next;
                do {
                    var l = i,
                        o = l.destroy;
                    (l = l.tag), o !== void 0 && (l & 2 || l & 4) && vo(n, t, o), (i = i.next);
                } while (i !== r);
            }
            pt(e, t, n);
            break;
        case 1:
            if (!pe && (dn(n, t), (r = n.stateNode), typeof r.componentWillUnmount == "function"))
                try {
                    (r.props = n.memoizedProps), (r.state = n.memoizedState), r.componentWillUnmount();
                } catch (a) {
                    X(n, t, a);
                }
            pt(e, t, n);
            break;
        case 21:
            pt(e, t, n);
            break;
        case 22:
            n.mode & 1 ? ((pe = (r = pe) || n.memoizedState !== null), pt(e, t, n), (pe = r)) : pt(e, t, n);
            break;
        default:
            pt(e, t, n);
    }
}
function Ns(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new $f()),
            t.forEach(function (r) {
                var i = Yf.bind(null, e, r);
                n.has(r) || (n.add(r), r.then(i, i));
            });
    }
}
function Ue(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var i = n[r];
            try {
                var l = e,
                    o = t,
                    a = o;
                e: for (; a !== null; ) {
                    switch (a.tag) {
                        case 5:
                            (oe = a.stateNode), (Be = !1);
                            break e;
                        case 3:
                            (oe = a.stateNode.containerInfo), (Be = !0);
                            break e;
                        case 4:
                            (oe = a.stateNode.containerInfo), (Be = !0);
                            break e;
                    }
                    a = a.return;
                }
                if (oe === null) throw Error(h(160));
                qc(l, o, i), (oe = null), (Be = !1);
                var s = i.alternate;
                s !== null && (s.return = null), (i.return = null);
            } catch (u) {
                X(i, t, u);
            }
        }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Yc(t, e), (t = t.sibling);
}
function Yc(e, t) {
    var n = e.alternate,
        r = e.flags;
    switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if ((Ue(t, e), qe(e), r & 4)) {
                try {
                    Zn(3, e, e.return), Wi(3, e);
                } catch (k) {
                    X(e, e.return, k);
                }
                try {
                    Zn(5, e, e.return);
                } catch (k) {
                    X(e, e.return, k);
                }
            }
            break;
        case 1:
            Ue(t, e), qe(e), r & 512 && n !== null && dn(n, n.return);
            break;
        case 5:
            if ((Ue(t, e), qe(e), r & 512 && n !== null && dn(n, n.return), e.flags & 32)) {
                var i = e.stateNode;
                try {
                    nr(i, "");
                } catch (k) {
                    X(e, e.return, k);
                }
            }
            if (r & 4 && ((i = e.stateNode), i != null)) {
                var l = e.memoizedProps,
                    o = n !== null ? n.memoizedProps : l,
                    a = e.type,
                    s = e.updateQueue;
                if (((e.updateQueue = null), s !== null))
                    try {
                        a === "input" && l.type === "radio" && l.name != null && hu(i, l), Wl(a, o);
                        var u = Wl(a, l);
                        for (o = 0; o < s.length; o += 2) {
                            var m = s[o],
                                v = s[o + 1];
                            m === "style" ? Su(i, v) : m === "dangerouslySetInnerHTML" ? wu(i, v) : m === "children" ? nr(i, v) : Lo(i, m, v, u);
                        }
                        switch (a) {
                            case "input":
                                Ml(i, l);
                                break;
                            case "textarea":
                                xu(i, l);
                                break;
                            case "select":
                                var f = i._wrapperState.wasMultiple;
                                i._wrapperState.wasMultiple = !!l.multiple;
                                var y = l.value;
                                y != null ? mn(i, !!l.multiple, y, !1) : f !== !!l.multiple && (l.defaultValue != null ? mn(i, !!l.multiple, l.defaultValue, !0) : mn(i, !!l.multiple, l.multiple ? [] : "", !1));
                        }
                        i[pr] = l;
                    } catch (k) {
                        X(e, e.return, k);
                    }
            }
            break;
        case 6:
            if ((Ue(t, e), qe(e), r & 4)) {
                if (e.stateNode === null) throw Error(h(162));
                (i = e.stateNode), (l = e.memoizedProps);
                try {
                    i.nodeValue = l;
                } catch (k) {
                    X(e, e.return, k);
                }
            }
            break;
        case 3:
            if ((Ue(t, e), qe(e), r & 4 && n !== null && n.memoizedState.isDehydrated))
                try {
                    or(t.containerInfo);
                } catch (k) {
                    X(e, e.return, k);
                }
            break;
        case 4:
            Ue(t, e), qe(e);
            break;
        case 13:
            Ue(t, e), qe(e), (i = e.child), i.flags & 8192 && ((l = i.memoizedState !== null), (i.stateNode.isHidden = l), !l || (i.alternate !== null && i.alternate.memoizedState !== null) || (fa = G())), r & 4 && Ns(e);
            break;
        case 22:
            if (((m = n !== null && n.memoizedState !== null), e.mode & 1 ? ((pe = (u = pe) || m), Ue(t, e), (pe = u)) : Ue(t, e), qe(e), r & 8192)) {
                if (((u = e.memoizedState !== null), (e.stateNode.isHidden = u) && !m && e.mode & 1))
                    for (j = e, m = e.child; m !== null; ) {
                        for (v = j = m; j !== null; ) {
                            switch (((f = j), (y = f.child), f.tag)) {
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    Zn(4, f, f.return);
                                    break;
                                case 1:
                                    dn(f, f.return);
                                    var w = f.stateNode;
                                    if (typeof w.componentWillUnmount == "function") {
                                        (r = f), (n = f.return);
                                        try {
                                            (t = r), (w.props = t.memoizedProps), (w.state = t.memoizedState), w.componentWillUnmount();
                                        } catch (k) {
                                            X(r, n, k);
                                        }
                                    }
                                    break;
                                case 5:
                                    dn(f, f.return);
                                    break;
                                case 22:
                                    if (f.memoizedState !== null) {
                                        Ts(v);
                                        continue;
                                    }
                            }
                            y !== null ? ((y.return = f), (j = y)) : Ts(v);
                        }
                        m = m.sibling;
                    }
                e: for (m = null, v = e; ; ) {
                    if (v.tag === 5) {
                        if (m === null) {
                            m = v;
                            try {
                                (i = v.stateNode),
                                    u
                                        ? ((l = i.style), typeof l.setProperty == "function" ? l.setProperty("display", "none", "important") : (l.display = "none"))
                                        : ((a = v.stateNode), (s = v.memoizedProps.style), (o = s != null && s.hasOwnProperty("display") ? s.display : null), (a.style.display = ku("display", o)));
                            } catch (k) {
                                X(e, e.return, k);
                            }
                        }
                    } else if (v.tag === 6) {
                        if (m === null)
                            try {
                                v.stateNode.nodeValue = u ? "" : v.memoizedProps;
                            } catch (k) {
                                X(e, e.return, k);
                            }
                    } else if (((v.tag !== 22 && v.tag !== 23) || v.memoizedState === null || v === e) && v.child !== null) {
                        (v.child.return = v), (v = v.child);
                        continue;
                    }
                    if (v === e) break e;
                    for (; v.sibling === null; ) {
                        if (v.return === null || v.return === e) break e;
                        m === v && (m = null), (v = v.return);
                    }
                    m === v && (m = null), (v.sibling.return = v.return), (v = v.sibling);
                }
            }
            break;
        case 19:
            Ue(t, e), qe(e), r & 4 && Ns(e);
            break;
        case 21:
            break;
        default:
            Ue(t, e), qe(e);
    }
}
function qe(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null; ) {
                    if (bc(n)) {
                        var r = n;
                        break e;
                    }
                    n = n.return;
                }
                throw Error(h(160));
            }
            switch (r.tag) {
                case 5:
                    var i = r.stateNode;
                    r.flags & 32 && (nr(i, ""), (r.flags &= -33));
                    var l = Ps(e);
                    xo(e, l, i);
                    break;
                case 3:
                case 4:
                    var o = r.stateNode.containerInfo,
                        a = Ps(e);
                    ho(e, a, o);
                    break;
                default:
                    throw Error(h(161));
            }
        } catch (s) {
            X(e, e.return, s);
        }
        e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
}
function Wf(e, t, n) {
    (j = e), Xc(e);
}
function Xc(e, t, n) {
    for (var r = (e.mode & 1) !== 0; j !== null; ) {
        var i = j,
            l = i.child;
        if (i.tag === 22 && r) {
            var o = i.memoizedState !== null || Hr;
            if (!o) {
                var a = i.alternate,
                    s = (a !== null && a.memoizedState !== null) || pe;
                a = Hr;
                var u = pe;
                if (((Hr = o), (pe = s) && !u)) for (j = i; j !== null; ) (o = j), (s = o.child), o.tag === 22 && o.memoizedState !== null ? Os(i) : s !== null ? ((s.return = o), (j = s)) : Os(i);
                for (; l !== null; ) (j = l), Xc(l), (l = l.sibling);
                (j = i), (Hr = a), (pe = u);
            }
            Ds(e);
        } else i.subtreeFlags & 8772 && l !== null ? ((l.return = i), (j = l)) : Ds(e);
    }
}
function Ds(e) {
    for (; j !== null; ) {
        var t = j;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772)
                    switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            pe || Wi(5, t);
                            break;
                        case 1:
                            var r = t.stateNode;
                            if (t.flags & 4 && !pe)
                                if (n === null) r.componentDidMount();
                                else {
                                    var i = t.elementType === t.type ? n.memoizedProps : We(t.type, n.memoizedProps);
                                    r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                                }
                            var l = t.updateQueue;
                            l !== null && ms(t, l, r);
                            break;
                        case 3:
                            var o = t.updateQueue;
                            if (o !== null) {
                                if (((n = null), t.child !== null))
                                    switch (t.child.tag) {
                                        case 5:
                                            n = t.child.stateNode;
                                            break;
                                        case 1:
                                            n = t.child.stateNode;
                                    }
                                ms(t, o, n);
                            }
                            break;
                        case 5:
                            var a = t.stateNode;
                            if (n === null && t.flags & 4) {
                                n = a;
                                var s = t.memoizedProps;
                                switch (t.type) {
                                    case "button":
                                    case "input":
                                    case "select":
                                    case "textarea":
                                        s.autoFocus && n.focus();
                                        break;
                                    case "img":
                                        s.src && (n.src = s.src);
                                }
                            }
                            break;
                        case 6:
                            break;
                        case 4:
                            break;
                        case 12:
                            break;
                        case 13:
                            if (t.memoizedState === null) {
                                var u = t.alternate;
                                if (u !== null) {
                                    var m = u.memoizedState;
                                    if (m !== null) {
                                        var v = m.dehydrated;
                                        v !== null && or(v);
                                    }
                                }
                            }
                            break;
                        case 19:
                        case 17:
                        case 21:
                        case 22:
                        case 23:
                        case 25:
                            break;
                        default:
                            throw Error(h(163));
                    }
                pe || (t.flags & 512 && go(t));
            } catch (f) {
                X(t, t.return, f);
            }
        }
        if (t === e) {
            j = null;
            break;
        }
        if (((n = t.sibling), n !== null)) {
            (n.return = t.return), (j = n);
            break;
        }
        j = t.return;
    }
}
function Ts(e) {
    for (; j !== null; ) {
        var t = j;
        if (t === e) {
            j = null;
            break;
        }
        var n = t.sibling;
        if (n !== null) {
            (n.return = t.return), (j = n);
            break;
        }
        j = t.return;
    }
}
function Os(e) {
    for (; j !== null; ) {
        var t = j;
        try {
            switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    var n = t.return;
                    try {
                        Wi(4, t);
                    } catch (s) {
                        X(t, n, s);
                    }
                    break;
                case 1:
                    var r = t.stateNode;
                    if (typeof r.componentDidMount == "function") {
                        var i = t.return;
                        try {
                            r.componentDidMount();
                        } catch (s) {
                            X(t, i, s);
                        }
                    }
                    var l = t.return;
                    try {
                        go(t);
                    } catch (s) {
                        X(t, l, s);
                    }
                    break;
                case 5:
                    var o = t.return;
                    try {
                        go(t);
                    } catch (s) {
                        X(t, o, s);
                    }
            }
        } catch (s) {
            X(t, t.return, s);
        }
        if (t === e) {
            j = null;
            break;
        }
        var a = t.sibling;
        if (a !== null) {
            (a.return = t.return), (j = a);
            break;
        }
        j = t.return;
    }
}
var Bf = Math.ceil,
    Ci = ct.ReactCurrentDispatcher,
    pa = ct.ReactCurrentOwner,
    Ie = ct.ReactCurrentBatchConfig,
    R = 0,
    le = null,
    J = null,
    ae = 0,
    Pe = 0,
    fn = Nt(0),
    te = 0,
    hr = null,
    Vt = 0,
    Bi = 0,
    da = 0,
    Jn = null,
    ke = null,
    fa = 0,
    _n = 1 / 0,
    tt = null,
    ji = !1,
    yo = null,
    Et = null,
    Vr = !1,
    ht = null,
    _i = 0,
    er = 0,
    wo = null,
    ni = -1,
    ri = 0;
function ve() {
    return R & 6 ? G() : ni !== -1 ? ni : (ni = G());
}
function Ct(e) {
    return e.mode & 1 ? (R & 2 && ae !== 0 ? ae & -ae : jf.transition !== null ? (ri === 0 && (ri = Lu()), ri) : ((e = M), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Wu(e.type))), e)) : 1;
}
function Qe(e, t, n, r) {
    if (50 < er) throw ((er = 0), (wo = null), Error(h(185)));
    wr(e, n, r), (!(R & 2) || e !== le) && (e === le && (!(R & 2) && (Bi |= n), te === 4 && vt(e, ae)), je(e, r), n === 1 && R === 0 && !(t.mode & 1) && ((_n = G() + 500), Ai && Dt()));
}
function je(e, t) {
    var n = e.callbackNode;
    Cd(e, t);
    var r = ui(e, e === le ? ae : 0);
    if (r === 0) n !== null && Wa(n), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((t = r & -r), e.callbackPriority !== t)) {
        if ((n != null && Wa(n), t === 1))
            e.tag === 0 ? Cf(Fs.bind(null, e)) : oc(Fs.bind(null, e)),
                wf(function () {
                    !(R & 6) && Dt();
                }),
                (n = null);
        else {
            switch (Ru(r)) {
                case 1:
                    n = $o;
                    break;
                case 4:
                    n = Ou;
                    break;
                case 16:
                    n = si;
                    break;
                case 536870912:
                    n = Fu;
                    break;
                default:
                    n = si;
            }
            n = ip(n, Gc.bind(null, e));
        }
        (e.callbackPriority = t), (e.callbackNode = n);
    }
}
function Gc(e, t) {
    if (((ni = -1), (ri = 0), R & 6)) throw Error(h(327));
    var n = e.callbackNode;
    if (yn() && e.callbackNode !== n) return null;
    var r = ui(e, e === le ? ae : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = zi(e, r);
    else {
        t = r;
        var i = R;
        R |= 2;
        var l = Jc();
        (le !== e || ae !== t) && ((tt = null), (_n = G() + 500), $t(e, t));
        do
            try {
                Qf();
                break;
            } catch (a) {
                Zc(e, a);
            }
        while (!0);
        Zo(), (Ci.current = l), (R = i), J !== null ? (t = 0) : ((le = null), (ae = 0), (t = te));
    }
    if (t !== 0) {
        if ((t === 2 && ((i = Kl(e)), i !== 0 && ((r = i), (t = ko(e, i)))), t === 1)) throw ((n = hr), $t(e, 0), vt(e, r), je(e, G()), n);
        if (t === 6) vt(e, r);
        else {
            if (((i = e.current.alternate), !(r & 30) && !Hf(i) && ((t = zi(e, r)), t === 2 && ((l = Kl(e)), l !== 0 && ((r = l), (t = ko(e, l)))), t === 1))) throw ((n = hr), $t(e, 0), vt(e, r), je(e, G()), n);
            switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
                case 0:
                case 1:
                    throw Error(h(345));
                case 2:
                    Lt(e, ke, tt);
                    break;
                case 3:
                    if ((vt(e, r), (r & 130023424) === r && ((t = fa + 500 - G()), 10 < t))) {
                        if (ui(e, 0) !== 0) break;
                        if (((i = e.suspendedLanes), (i & r) !== r)) {
                            ve(), (e.pingedLanes |= e.suspendedLanes & i);
                            break;
                        }
                        e.timeoutHandle = eo(Lt.bind(null, e, ke, tt), t);
                        break;
                    }
                    Lt(e, ke, tt);
                    break;
                case 4:
                    if ((vt(e, r), (r & 4194240) === r)) break;
                    for (t = e.eventTimes, i = -1; 0 < r; ) {
                        var o = 31 - Ve(r);
                        (l = 1 << o), (o = t[o]), o > i && (i = o), (r &= ~l);
                    }
                    if (((r = i), (r = G() - r), (r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Bf(r / 1960)) - r), 10 < r)) {
                        e.timeoutHandle = eo(Lt.bind(null, e, ke, tt), r);
                        break;
                    }
                    Lt(e, ke, tt);
                    break;
                case 5:
                    Lt(e, ke, tt);
                    break;
                default:
                    throw Error(h(329));
            }
        }
    }
    return je(e, G()), e.callbackNode === n ? Gc.bind(null, e) : null;
}
function ko(e, t) {
    var n = Jn;
    return e.current.memoizedState.isDehydrated && ($t(e, t).flags |= 256), (e = zi(e, t)), e !== 2 && ((t = ke), (ke = n), t !== null && So(t)), e;
}
function So(e) {
    ke === null ? (ke = e) : ke.push.apply(ke, e);
}
function Hf(e) {
    for (var t = e; ; ) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && ((n = n.stores), n !== null))
                for (var r = 0; r < n.length; r++) {
                    var i = n[r],
                        l = i.getSnapshot;
                    i = i.value;
                    try {
                        if (!Ke(l(), i)) return !1;
                    } catch {
                        return !1;
                    }
                }
        }
        if (((n = t.child), t.subtreeFlags & 16384 && n !== null)) (n.return = t), (t = n);
        else {
            if (t === e) break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e) return !0;
                t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
        }
    }
    return !0;
}
function vt(e, t) {
    for (t &= ~da, t &= ~Bi, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
        var n = 31 - Ve(t),
            r = 1 << n;
        (e[n] = -1), (t &= ~r);
    }
}
function Fs(e) {
    if (R & 6) throw Error(h(327));
    yn();
    var t = ui(e, 0);
    if (!(t & 1)) return je(e, G()), null;
    var n = zi(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = Kl(e);
        r !== 0 && ((t = r), (n = ko(e, r)));
    }
    if (n === 1) throw ((n = hr), $t(e, 0), vt(e, t), je(e, G()), n);
    if (n === 6) throw Error(h(345));
    return (e.finishedWork = e.current.alternate), (e.finishedLanes = t), Lt(e, ke, tt), je(e, G()), null;
}
function ma(e, t) {
    var n = R;
    R |= 1;
    try {
        return e(t);
    } finally {
        (R = n), R === 0 && ((_n = G() + 500), Ai && Dt());
    }
}
function Qt(e) {
    ht !== null && ht.tag === 0 && !(R & 6) && yn();
    var t = R;
    R |= 1;
    var n = Ie.transition,
        r = M;
    try {
        if (((Ie.transition = null), (M = 1), e)) return e();
    } finally {
        (M = r), (Ie.transition = n), (R = t), !(R & 6) && Dt();
    }
}
function va() {
    (Pe = fn.current), B(fn);
}
function $t(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), yf(n)), J !== null))
        for (n = J.return; n !== null; ) {
            var r = n;
            switch ((Yo(r), r.tag)) {
                case 1:
                    (r = r.type.childContextTypes), r != null && mi();
                    break;
                case 3:
                    Cn(), B(Ee), B(de), ia();
                    break;
                case 5:
                    ra(r);
                    break;
                case 4:
                    Cn();
                    break;
                case 13:
                    B(b);
                    break;
                case 19:
                    B(b);
                    break;
                case 10:
                    Jo(r.type._context);
                    break;
                case 22:
                case 23:
                    va();
            }
            n = n.return;
        }
    if (((le = e), (J = e = jt(e.current, null)), (ae = Pe = t), (te = 0), (hr = null), (da = Bi = Vt = 0), (ke = Jn = null), It !== null)) {
        for (t = 0; t < It.length; t++)
            if (((n = It[t]), (r = n.interleaved), r !== null)) {
                n.interleaved = null;
                var i = r.next,
                    l = n.pending;
                if (l !== null) {
                    var o = l.next;
                    (l.next = i), (r.next = o);
                }
                n.pending = r;
            }
        It = null;
    }
    return e;
}
function Zc(e, t) {
    do {
        var n = J;
        try {
            if ((Zo(), (Jr.current = Ei), Si)) {
                for (var r = q.memoizedState; r !== null; ) {
                    var i = r.queue;
                    i !== null && (i.pending = null), (r = r.next);
                }
                Si = !1;
            }
            if (((Ht = 0), (ie = ee = q = null), (Gn = !1), (mr = 0), (pa.current = null), n === null || n.return === null)) {
                (te = 1), (hr = t), (J = null);
                break;
            }
            e: {
                var l = e,
                    o = n.return,
                    a = n,
                    s = t;
                if (((t = ae), (a.flags |= 32768), s !== null && typeof s == "object" && typeof s.then == "function")) {
                    var u = s,
                        m = a,
                        v = m.tag;
                    if (!(m.mode & 1) && (v === 0 || v === 11 || v === 15)) {
                        var f = m.alternate;
                        f ? ((m.updateQueue = f.updateQueue), (m.memoizedState = f.memoizedState), (m.lanes = f.lanes)) : ((m.updateQueue = null), (m.memoizedState = null));
                    }
                    var y = ws(o);
                    if (y !== null) {
                        (y.flags &= -257), ks(y, o, a, l, t), y.mode & 1 && ys(l, u, t), (t = y), (s = u);
                        var w = t.updateQueue;
                        if (w === null) {
                            var k = new Set();
                            k.add(s), (t.updateQueue = k);
                        } else w.add(s);
                        break e;
                    } else {
                        if (!(t & 1)) {
                            ys(l, u, t), ga();
                            break e;
                        }
                        s = Error(h(426));
                    }
                } else if (V && a.mode & 1) {
                    var I = ws(o);
                    if (I !== null) {
                        !(I.flags & 65536) && (I.flags |= 256), ks(I, o, a, l, t), Xo(jn(s, a));
                        break e;
                    }
                }
                (l = s = jn(s, a)), te !== 4 && (te = 2), Jn === null ? (Jn = [l]) : Jn.push(l), (l = o);
                do {
                    switch (l.tag) {
                        case 3:
                            (l.flags |= 65536), (t &= -t), (l.lanes |= t);
                            var p = Rc(l, s, t);
                            fs(l, p);
                            break e;
                        case 1:
                            a = s;
                            var c = l.type,
                                d = l.stateNode;
                            if (!(l.flags & 128) && (typeof c.getDerivedStateFromError == "function" || (d !== null && typeof d.componentDidCatch == "function" && (Et === null || !Et.has(d))))) {
                                (l.flags |= 65536), (t &= -t), (l.lanes |= t);
                                var g = Mc(l, a, t);
                                fs(l, g);
                                break e;
                            }
                    }
                    l = l.return;
                } while (l !== null);
            }
            tp(n);
        } catch (E) {
            (t = E), J === n && n !== null && (J = n = n.return);
            continue;
        }
        break;
    } while (!0);
}
function Jc() {
    var e = Ci.current;
    return (Ci.current = Ei), e === null ? Ei : e;
}
function ga() {
    (te === 0 || te === 3 || te === 2) && (te = 4), le === null || (!(Vt & 268435455) && !(Bi & 268435455)) || vt(le, ae);
}
function zi(e, t) {
    var n = R;
    R |= 2;
    var r = Jc();
    (le !== e || ae !== t) && ((tt = null), $t(e, t));
    do
        try {
            Vf();
            break;
        } catch (i) {
            Zc(e, i);
        }
    while (!0);
    if ((Zo(), (R = n), (Ci.current = r), J !== null)) throw Error(h(261));
    return (le = null), (ae = 0), te;
}
function Vf() {
    for (; J !== null; ) ep(J);
}
function Qf() {
    for (; J !== null && !vd(); ) ep(J);
}
function ep(e) {
    var t = rp(e.alternate, e, Pe);
    (e.memoizedProps = e.pendingProps), t === null ? tp(e) : (J = t), (pa.current = null);
}
function tp(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (((e = t.return), t.flags & 32768)) {
            if (((n = Af(n, t)), n !== null)) {
                (n.flags &= 32767), (J = n);
                return;
            }
            if (e !== null) (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
            else {
                (te = 6), (J = null);
                return;
            }
        } else if (((n = If(n, t, Pe)), n !== null)) {
            J = n;
            return;
        }
        if (((t = t.sibling), t !== null)) {
            J = t;
            return;
        }
        J = t = e;
    } while (t !== null);
    te === 0 && (te = 5);
}
function Lt(e, t, n) {
    var r = M,
        i = Ie.transition;
    try {
        (Ie.transition = null), (M = 1), Kf(e, t, n, r);
    } finally {
        (Ie.transition = i), (M = r);
    }
    return null;
}
function Kf(e, t, n, r) {
    do yn();
    while (ht !== null);
    if (R & 6) throw Error(h(327));
    n = e.finishedWork;
    var i = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error(h(177));
    (e.callbackNode = null), (e.callbackPriority = 0);
    var l = n.lanes | n.childLanes;
    if (
        (jd(e, l),
        e === le && ((J = le = null), (ae = 0)),
        (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
            Vr ||
            ((Vr = !0),
            ip(si, function () {
                return yn(), null;
            })),
        (l = (n.flags & 15990) !== 0),
        n.subtreeFlags & 15990 || l)
    ) {
        (l = Ie.transition), (Ie.transition = null);
        var o = M;
        M = 1;
        var a = R;
        (R |= 4), (pa.current = null), Uf(e, n), Yc(n, e), df(Zl), (ci = !!Gl), (Zl = Gl = null), (e.current = n), Wf(n), gd(), (R = a), (M = o), (Ie.transition = l);
    } else e.current = n;
    if ((Vr && ((Vr = !1), (ht = e), (_i = i)), (l = e.pendingLanes), l === 0 && (Et = null), yd(n.stateNode), je(e, G()), t !== null))
        for (r = e.onRecoverableError, n = 0; n < t.length; n++) (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
    if (ji) throw ((ji = !1), (e = yo), (yo = null), e);
    return _i & 1 && e.tag !== 0 && yn(), (l = e.pendingLanes), l & 1 ? (e === wo ? er++ : ((er = 0), (wo = e))) : (er = 0), Dt(), null;
}
function yn() {
    if (ht !== null) {
        var e = Ru(_i),
            t = Ie.transition,
            n = M;
        try {
            if (((Ie.transition = null), (M = 16 > e ? 16 : e), ht === null)) var r = !1;
            else {
                if (((e = ht), (ht = null), (_i = 0), R & 6)) throw Error(h(331));
                var i = R;
                for (R |= 4, j = e.current; j !== null; ) {
                    var l = j,
                        o = l.child;
                    if (j.flags & 16) {
                        var a = l.deletions;
                        if (a !== null) {
                            for (var s = 0; s < a.length; s++) {
                                var u = a[s];
                                for (j = u; j !== null; ) {
                                    var m = j;
                                    switch (m.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Zn(8, m, l);
                                    }
                                    var v = m.child;
                                    if (v !== null) (v.return = m), (j = v);
                                    else
                                        for (; j !== null; ) {
                                            m = j;
                                            var f = m.sibling,
                                                y = m.return;
                                            if ((Kc(m), m === u)) {
                                                j = null;
                                                break;
                                            }
                                            if (f !== null) {
                                                (f.return = y), (j = f);
                                                break;
                                            }
                                            j = y;
                                        }
                                }
                            }
                            var w = l.alternate;
                            if (w !== null) {
                                var k = w.child;
                                if (k !== null) {
                                    w.child = null;
                                    do {
                                        var I = k.sibling;
                                        (k.sibling = null), (k = I);
                                    } while (k !== null);
                                }
                            }
                            j = l;
                        }
                    }
                    if (l.subtreeFlags & 2064 && o !== null) (o.return = l), (j = o);
                    else
                        e: for (; j !== null; ) {
                            if (((l = j), l.flags & 2048))
                                switch (l.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Zn(9, l, l.return);
                                }
                            var p = l.sibling;
                            if (p !== null) {
                                (p.return = l.return), (j = p);
                                break e;
                            }
                            j = l.return;
                        }
                }
                var c = e.current;
                for (j = c; j !== null; ) {
                    o = j;
                    var d = o.child;
                    if (o.subtreeFlags & 2064 && d !== null) (d.return = o), (j = d);
                    else
                        e: for (o = c; j !== null; ) {
                            if (((a = j), a.flags & 2048))
                                try {
                                    switch (a.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Wi(9, a);
                                    }
                                } catch (E) {
                                    X(a, a.return, E);
                                }
                            if (a === o) {
                                j = null;
                                break e;
                            }
                            var g = a.sibling;
                            if (g !== null) {
                                (g.return = a.return), (j = g);
                                break e;
                            }
                            j = a.return;
                        }
                }
                if (((R = i), Dt(), Ze && typeof Ze.onPostCommitFiberRoot == "function"))
                    try {
                        Ze.onPostCommitFiberRoot(Fi, e);
                    } catch {}
                r = !0;
            }
            return r;
        } finally {
            (M = n), (Ie.transition = t);
        }
    }
    return !1;
}
function Ls(e, t, n) {
    (t = jn(n, t)), (t = Rc(e, t, 1)), (e = St(e, t, 1)), (t = ve()), e !== null && (wr(e, 1, t), je(e, t));
}
function X(e, t, n) {
    if (e.tag === 3) Ls(e, e, n);
    else
        for (; t !== null; ) {
            if (t.tag === 3) {
                Ls(t, e, n);
                break;
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || (typeof r.componentDidCatch == "function" && (Et === null || !Et.has(r)))) {
                    (e = jn(n, e)), (e = Mc(t, e, 1)), (t = St(t, e, 1)), (e = ve()), t !== null && (wr(t, 1, e), je(t, e));
                    break;
                }
            }
            t = t.return;
        }
}
function bf(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), (t = ve()), (e.pingedLanes |= e.suspendedLanes & n), le === e && (ae & n) === n && (te === 4 || (te === 3 && (ae & 130023424) === ae && 500 > G() - fa) ? $t(e, 0) : (da |= n)), je(e, t);
}
function np(e, t) {
    t === 0 && (e.mode & 1 ? ((t = Lr), (Lr <<= 1), !(Lr & 130023424) && (Lr = 4194304)) : (t = 1));
    var n = ve();
    (e = st(e, t)), e !== null && (wr(e, t, n), je(e, n));
}
function qf(e) {
    var t = e.memoizedState,
        n = 0;
    t !== null && (n = t.retryLane), np(e, n);
}
function Yf(e, t) {
    var n = 0;
    switch (e.tag) {
        case 13:
            var r = e.stateNode,
                i = e.memoizedState;
            i !== null && (n = i.retryLane);
            break;
        case 19:
            r = e.stateNode;
            break;
        default:
            throw Error(h(314));
    }
    r !== null && r.delete(t), np(e, n);
}
var rp;
rp = function (e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || Ee.current) Se = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128)) return (Se = !1), Mf(e, t, n);
            Se = !!(e.flags & 131072);
        }
    else (Se = !1), V && t.flags & 1048576 && ac(t, hi, t.index);
    switch (((t.lanes = 0), t.tag)) {
        case 2:
            var r = t.type;
            ti(e, t), (e = t.pendingProps);
            var i = kn(t, de.current);
            xn(t, n), (i = oa(null, t, r, e, i, n));
            var l = aa();
            return (
                (t.flags |= 1),
                typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0
                    ? ((t.tag = 1),
                      (t.memoizedState = null),
                      (t.updateQueue = null),
                      Ce(r) ? ((l = !0), vi(t)) : (l = !1),
                      (t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null),
                      ta(t),
                      (i.updater = Ui),
                      (t.stateNode = i),
                      (i._reactInternals = t),
                      ao(t, r, e, n),
                      (t = co(null, t, r, !0, l, n)))
                    : ((t.tag = 0), V && l && qo(t), me(null, t, i, n), (t = t.child)),
                t
            );
        case 16:
            r = t.elementType;
            e: {
                switch ((ti(e, t), (e = t.pendingProps), (i = r._init), (r = i(r._payload)), (t.type = r), (i = t.tag = Gf(r)), (e = We(r, e)), i)) {
                    case 0:
                        t = uo(null, t, r, e, n);
                        break e;
                    case 1:
                        t = Cs(null, t, r, e, n);
                        break e;
                    case 11:
                        t = Ss(null, t, r, e, n);
                        break e;
                    case 14:
                        t = Es(null, t, r, We(r.type, e), n);
                        break e;
                }
                throw Error(h(306, r, ""));
            }
            return t;
        case 0:
            return (r = t.type), (i = t.pendingProps), (i = t.elementType === r ? i : We(r, i)), uo(e, t, r, i, n);
        case 1:
            return (r = t.type), (i = t.pendingProps), (i = t.elementType === r ? i : We(r, i)), Cs(e, t, r, i, n);
        case 3:
            e: {
                if ((Uc(t), e === null)) throw Error(h(387));
                (r = t.pendingProps), (l = t.memoizedState), (i = l.element), fc(e, t), wi(t, r, null, n);
                var o = t.memoizedState;
                if (((r = o.element), l.isDehydrated))
                    if (((l = { element: r, isDehydrated: !1, cache: o.cache, pendingSuspenseBoundaries: o.pendingSuspenseBoundaries, transitions: o.transitions }), (t.updateQueue.baseState = l), (t.memoizedState = l), t.flags & 256)) {
                        (i = jn(Error(h(423)), t)), (t = js(e, t, r, n, i));
                        break e;
                    } else if (r !== i) {
                        (i = jn(Error(h(424)), t)), (t = js(e, t, r, n, i));
                        break e;
                    } else for (Ne = kt(t.stateNode.containerInfo.firstChild), De = t, V = !0, He = null, n = pc(t, null, r, n), t.child = n; n; ) (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
                else {
                    if ((Sn(), r === i)) {
                        t = ut(e, t, n);
                        break e;
                    }
                    me(e, t, r, n);
                }
                t = t.child;
            }
            return t;
        case 5:
            return (
                mc(t),
                e === null && io(t),
                (r = t.type),
                (i = t.pendingProps),
                (l = e !== null ? e.memoizedProps : null),
                (o = i.children),
                Jl(r, i) ? (o = null) : l !== null && Jl(r, l) && (t.flags |= 32),
                $c(e, t),
                me(e, t, o, n),
                t.child
            );
        case 6:
            return e === null && io(t), null;
        case 13:
            return Wc(e, t, n);
        case 4:
            return na(t, t.stateNode.containerInfo), (r = t.pendingProps), e === null ? (t.child = En(t, null, r, n)) : me(e, t, r, n), t.child;
        case 11:
            return (r = t.type), (i = t.pendingProps), (i = t.elementType === r ? i : We(r, i)), Ss(e, t, r, i, n);
        case 7:
            return me(e, t, t.pendingProps, n), t.child;
        case 8:
            return me(e, t, t.pendingProps.children, n), t.child;
        case 12:
            return me(e, t, t.pendingProps.children, n), t.child;
        case 10:
            e: {
                if (((r = t.type._context), (i = t.pendingProps), (l = t.memoizedProps), (o = i.value), U(xi, r._currentValue), (r._currentValue = o), l !== null))
                    if (Ke(l.value, o)) {
                        if (l.children === i.children && !Ee.current) {
                            t = ut(e, t, n);
                            break e;
                        }
                    } else
                        for (l = t.child, l !== null && (l.return = t); l !== null; ) {
                            var a = l.dependencies;
                            if (a !== null) {
                                o = l.child;
                                for (var s = a.firstContext; s !== null; ) {
                                    if (s.context === r) {
                                        if (l.tag === 1) {
                                            (s = lt(-1, n & -n)), (s.tag = 2);
                                            var u = l.updateQueue;
                                            if (u !== null) {
                                                u = u.shared;
                                                var m = u.pending;
                                                m === null ? (s.next = s) : ((s.next = m.next), (m.next = s)), (u.pending = s);
                                            }
                                        }
                                        (l.lanes |= n), (s = l.alternate), s !== null && (s.lanes |= n), lo(l.return, n, t), (a.lanes |= n);
                                        break;
                                    }
                                    s = s.next;
                                }
                            } else if (l.tag === 10) o = l.type === t.type ? null : l.child;
                            else if (l.tag === 18) {
                                if (((o = l.return), o === null)) throw Error(h(341));
                                (o.lanes |= n), (a = o.alternate), a !== null && (a.lanes |= n), lo(o, n, t), (o = l.sibling);
                            } else o = l.child;
                            if (o !== null) o.return = l;
                            else
                                for (o = l; o !== null; ) {
                                    if (o === t) {
                                        o = null;
                                        break;
                                    }
                                    if (((l = o.sibling), l !== null)) {
                                        (l.return = o.return), (o = l);
                                        break;
                                    }
                                    o = o.return;
                                }
                            l = o;
                        }
                me(e, t, i.children, n), (t = t.child);
            }
            return t;
        case 9:
            return (i = t.type), (r = t.pendingProps.children), xn(t, n), (i = Ae(i)), (r = r(i)), (t.flags |= 1), me(e, t, r, n), t.child;
        case 14:
            return (r = t.type), (i = We(r, t.pendingProps)), (i = We(r.type, i)), Es(e, t, r, i, n);
        case 15:
            return Ic(e, t, t.type, t.pendingProps, n);
        case 17:
            return (r = t.type), (i = t.pendingProps), (i = t.elementType === r ? i : We(r, i)), ti(e, t), (t.tag = 1), Ce(r) ? ((e = !0), vi(t)) : (e = !1), xn(t, n), Lc(t, r, i), ao(t, r, i, n), co(null, t, r, !0, e, n);
        case 19:
            return Bc(e, t, n);
        case 22:
            return Ac(e, t, n);
    }
    throw Error(h(156, t.tag));
};
function ip(e, t) {
    return Tu(e, t);
}
function Xf(e, t, n, r) {
    (this.tag = e),
        (this.key = n),
        (this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null),
        (this.index = 0),
        (this.ref = null),
        (this.pendingProps = t),
        (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
        (this.mode = r),
        (this.subtreeFlags = this.flags = 0),
        (this.deletions = null),
        (this.childLanes = this.lanes = 0),
        (this.alternate = null);
}
function Me(e, t, n, r) {
    return new Xf(e, t, n, r);
}
function ha(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Gf(e) {
    if (typeof e == "function") return ha(e) ? 1 : 0;
    if (e != null) {
        if (((e = e.$$typeof), e === Mo)) return 11;
        if (e === Io) return 14;
    }
    return 2;
}
function jt(e, t) {
    var n = e.alternate;
    return (
        n === null
            ? ((n = Me(e.tag, t, e.key, e.mode)), (n.elementType = e.elementType), (n.type = e.type), (n.stateNode = e.stateNode), (n.alternate = e), (e.alternate = n))
            : ((n.pendingProps = t), (n.type = e.type), (n.flags = 0), (n.subtreeFlags = 0), (n.deletions = null)),
        (n.flags = e.flags & 14680064),
        (n.childLanes = e.childLanes),
        (n.lanes = e.lanes),
        (n.child = e.child),
        (n.memoizedProps = e.memoizedProps),
        (n.memoizedState = e.memoizedState),
        (n.updateQueue = e.updateQueue),
        (t = e.dependencies),
        (n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
        (n.sibling = e.sibling),
        (n.index = e.index),
        (n.ref = e.ref),
        n
    );
}
function ii(e, t, n, r, i, l) {
    var o = 2;
    if (((r = e), typeof e == "function")) ha(e) && (o = 1);
    else if (typeof e == "string") o = 5;
    else
        e: switch (e) {
            case nn:
                return Ut(n.children, i, l, t);
            case Ro:
                (o = 8), (i |= 8);
                break;
            case Tl:
                return (e = Me(12, n, t, i | 2)), (e.elementType = Tl), (e.lanes = l), e;
            case Ol:
                return (e = Me(13, n, t, i)), (e.elementType = Ol), (e.lanes = l), e;
            case Fl:
                return (e = Me(19, n, t, i)), (e.elementType = Fl), (e.lanes = l), e;
            case mu:
                return Hi(n, i, l, t);
            default:
                if (typeof e == "object" && e !== null)
                    switch (e.$$typeof) {
                        case du:
                            o = 10;
                            break e;
                        case fu:
                            o = 9;
                            break e;
                        case Mo:
                            o = 11;
                            break e;
                        case Io:
                            o = 14;
                            break e;
                        case dt:
                            (o = 16), (r = null);
                            break e;
                    }
                throw Error(h(130, e == null ? e : typeof e, ""));
        }
    return (t = Me(o, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = l), t;
}
function Ut(e, t, n, r) {
    return (e = Me(7, e, r, t)), (e.lanes = n), e;
}
function Hi(e, t, n, r) {
    return (e = Me(22, e, r, t)), (e.elementType = mu), (e.lanes = n), (e.stateNode = { isHidden: !1 }), e;
}
function _l(e, t, n) {
    return (e = Me(6, e, null, t)), (e.lanes = n), e;
}
function zl(e, t, n) {
    return (t = Me(4, e.children !== null ? e.children : [], e.key, t)), (t.lanes = n), (t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }), t;
}
function Zf(e, t, n, r, i) {
    (this.tag = t),
        (this.containerInfo = e),
        (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
        (this.timeoutHandle = -1),
        (this.callbackNode = this.pendingContext = this.context = null),
        (this.callbackPriority = 0),
        (this.eventTimes = al(0)),
        (this.expirationTimes = al(-1)),
        (this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0),
        (this.entanglements = al(0)),
        (this.identifierPrefix = r),
        (this.onRecoverableError = i),
        (this.mutableSourceEagerHydrationData = null);
}
function xa(e, t, n, r, i, l, o, a, s) {
    return (
        (e = new Zf(e, t, n, a, s)),
        t === 1 ? ((t = 1), l === !0 && (t |= 8)) : (t = 0),
        (l = Me(3, null, null, t)),
        (e.current = l),
        (l.stateNode = e),
        (l.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }),
        ta(l),
        e
    );
}
function Jf(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: tn, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function lp(e) {
    if (!e) return zt;
    e = e._reactInternals;
    e: {
        if (bt(e) !== e || e.tag !== 1) throw Error(h(170));
        var t = e;
        do {
            switch (t.tag) {
                case 3:
                    t = t.stateNode.context;
                    break e;
                case 1:
                    if (Ce(t.type)) {
                        t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                        break e;
                    }
            }
            t = t.return;
        } while (t !== null);
        throw Error(h(171));
    }
    if (e.tag === 1) {
        var n = e.type;
        if (Ce(n)) return lc(e, n, t);
    }
    return t;
}
function op(e, t, n, r, i, l, o, a, s) {
    return (e = xa(n, r, !0, e, i, l, o, a, s)), (e.context = lp(null)), (n = e.current), (r = ve()), (i = Ct(n)), (l = lt(r, i)), (l.callback = t ?? null), St(n, l, i), (e.current.lanes = i), wr(e, i, r), je(e, r), e;
}
function Vi(e, t, n, r) {
    var i = t.current,
        l = ve(),
        o = Ct(i);
    return (
        (n = lp(n)),
        t.context === null ? (t.context = n) : (t.pendingContext = n),
        (t = lt(l, o)),
        (t.payload = { element: e }),
        (r = r === void 0 ? null : r),
        r !== null && (t.callback = r),
        (e = St(i, t, o)),
        e !== null && (Qe(e, i, o, l), Zr(e, i, o)),
        o
    );
}
function Pi(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
        case 5:
            return e.child.stateNode;
        default:
            return e.child.stateNode;
    }
}
function Rs(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t;
    }
}
function ya(e, t) {
    Rs(e, t), (e = e.alternate) && Rs(e, t);
}
function em() {
    return null;
}
var ap =
    typeof reportError == "function"
        ? reportError
        : function (e) {
              console.error(e);
          };
function wa(e) {
    this._internalRoot = e;
}
Qi.prototype.render = wa.prototype.render = function (e) {
    var t = this._internalRoot;
    if (t === null) throw Error(h(409));
    Vi(e, t, null, null);
};
Qi.prototype.unmount = wa.prototype.unmount = function () {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        Qt(function () {
            Vi(null, e, null, null);
        }),
            (t[at] = null);
    }
};
function Qi(e) {
    this._internalRoot = e;
}
Qi.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
        var t = Au();
        e = { blockedOn: null, target: e, priority: t };
        for (var n = 0; n < mt.length && t !== 0 && t < mt[n].priority; n++);
        mt.splice(n, 0, e), n === 0 && Uu(e);
    }
};
function ka(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Ki(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable ")));
}
function Ms() {}
function tm(e, t, n, r, i) {
    if (i) {
        if (typeof r == "function") {
            var l = r;
            r = function () {
                var u = Pi(o);
                l.call(u);
            };
        }
        var o = op(t, r, e, 0, null, !1, !1, "", Ms);
        return (e._reactRootContainer = o), (e[at] = o.current), ur(e.nodeType === 8 ? e.parentNode : e), Qt(), o;
    }
    for (; (i = e.lastChild); ) e.removeChild(i);
    if (typeof r == "function") {
        var a = r;
        r = function () {
            var u = Pi(s);
            a.call(u);
        };
    }
    var s = xa(e, 0, !1, null, null, !1, !1, "", Ms);
    return (
        (e._reactRootContainer = s),
        (e[at] = s.current),
        ur(e.nodeType === 8 ? e.parentNode : e),
        Qt(function () {
            Vi(t, s, n, r);
        }),
        s
    );
}
function bi(e, t, n, r, i) {
    var l = n._reactRootContainer;
    if (l) {
        var o = l;
        if (typeof i == "function") {
            var a = i;
            i = function () {
                var s = Pi(o);
                a.call(s);
            };
        }
        Vi(t, o, e, i);
    } else o = tm(n, t, e, i, r);
    return Pi(o);
}
Mu = function (e) {
    switch (e.tag) {
        case 3:
            var t = e.stateNode;
            if (t.current.memoizedState.isDehydrated) {
                var n = Vn(t.pendingLanes);
                n !== 0 && (Uo(t, n | 1), je(t, G()), !(R & 6) && ((_n = G() + 500), Dt()));
            }
            break;
        case 13:
            Qt(function () {
                var r = st(e, 1);
                if (r !== null) {
                    var i = ve();
                    Qe(r, e, 1, i);
                }
            }),
                ya(e, 1);
    }
};
Wo = function (e) {
    if (e.tag === 13) {
        var t = st(e, 134217728);
        if (t !== null) {
            var n = ve();
            Qe(t, e, 134217728, n);
        }
        ya(e, 134217728);
    }
};
Iu = function (e) {
    if (e.tag === 13) {
        var t = Ct(e),
            n = st(e, t);
        if (n !== null) {
            var r = ve();
            Qe(n, e, t, r);
        }
        ya(e, t);
    }
};
Au = function () {
    return M;
};
$u = function (e, t) {
    var n = M;
    try {
        return (M = e), t();
    } finally {
        M = n;
    }
};
Hl = function (e, t, n) {
    switch (t) {
        case "input":
            if ((Ml(e, n), (t = n.name), n.type === "radio" && t != null)) {
                for (n = e; n.parentNode; ) n = n.parentNode;
                for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                        var i = Ii(r);
                        if (!i) throw Error(h(90));
                        gu(r), Ml(r, i);
                    }
                }
            }
            break;
        case "textarea":
            xu(e, n);
            break;
        case "select":
            (t = n.value), t != null && mn(e, !!n.multiple, t, !1);
    }
};
ju = ma;
_u = Qt;
var nm = { usingClientEntryPoint: !1, Events: [Sr, an, Ii, Eu, Cu, ma] },
    Un = { findFiberByHostInstance: Mt, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" },
    rm = {
        bundleType: Un.bundleType,
        version: Un.version,
        rendererPackageName: Un.rendererPackageName,
        rendererConfig: Un.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: ct.ReactCurrentDispatcher,
        findHostInstanceByFiber: function (e) {
            return (e = Nu(e)), e === null ? null : e.stateNode;
        },
        findFiberByHostInstance: Un.findFiberByHostInstance || em,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Qr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Qr.isDisabled && Qr.supportsFiber)
        try {
            (Fi = Qr.inject(rm)), (Ze = Qr);
        } catch {}
}
Oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = nm;
Oe.createPortal = function (e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!ka(t)) throw Error(h(200));
    return Jf(e, t, null, n);
};
Oe.createRoot = function (e, t) {
    if (!ka(e)) throw Error(h(299));
    var n = !1,
        r = "",
        i = ap;
    return (
        t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
        (t = xa(e, 1, !1, null, null, n, !1, r, i)),
        (e[at] = t.current),
        ur(e.nodeType === 8 ? e.parentNode : e),
        new wa(t)
    );
};
Oe.findDOMNode = function (e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0) throw typeof e.render == "function" ? Error(h(188)) : ((e = Object.keys(e).join(",")), Error(h(268, e)));
    return (e = Nu(t)), (e = e === null ? null : e.stateNode), e;
};
Oe.flushSync = function (e) {
    return Qt(e);
};
Oe.hydrate = function (e, t, n) {
    if (!Ki(t)) throw Error(h(200));
    return bi(null, e, t, !0, n);
};
Oe.hydrateRoot = function (e, t, n) {
    if (!ka(e)) throw Error(h(405));
    var r = (n != null && n.hydratedSources) || null,
        i = !1,
        l = "",
        o = ap;
    if (
        (n != null && (n.unstable_strictMode === !0 && (i = !0), n.identifierPrefix !== void 0 && (l = n.identifierPrefix), n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
        (t = op(t, null, e, 1, n ?? null, i, !1, l, o)),
        (e[at] = t.current),
        ur(e),
        r)
    )
        for (e = 0; e < r.length; e++) (n = r[e]), (i = n._getVersion), (i = i(n._source)), t.mutableSourceEagerHydrationData == null ? (t.mutableSourceEagerHydrationData = [n, i]) : t.mutableSourceEagerHydrationData.push(n, i);
    return new Qi(t);
};
Oe.render = function (e, t, n) {
    if (!Ki(t)) throw Error(h(200));
    return bi(null, e, t, !1, n);
};
Oe.unmountComponentAtNode = function (e) {
    if (!Ki(e)) throw Error(h(40));
    return e._reactRootContainer
        ? (Qt(function () {
              bi(null, null, e, !1, function () {
                  (e._reactRootContainer = null), (e[at] = null);
              });
          }),
          !0)
        : !1;
};
Oe.unstable_batchedUpdates = ma;
Oe.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
    if (!Ki(n)) throw Error(h(200));
    if (e == null || e._reactInternals === void 0) throw Error(h(38));
    return bi(e, t, n, !1, r);
};
Oe.version = "18.3.1-next-f1338f8080-20240426";
function sp() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(sp);
        } catch (e) {
            console.error(e);
        }
}
sp(), (su.exports = Oe);
var im = su.exports,
    up,
    Is = im;
(up = Is.createRoot), Is.hydrateRoot;
var cp = { exports: {} },
    lm = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
    om = lm,
    am = om;
function pp() {}
function dp() {}
dp.resetWarningCache = pp;
var sm = function () {
    function e(r, i, l, o, a, s) {
        if (s !== am) {
            var u = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
            throw ((u.name = "Invariant Violation"), u);
        }
    }
    e.isRequired = e;
    function t() {
        return e;
    }
    var n = {
        array: e,
        bigint: e,
        bool: e,
        func: e,
        number: e,
        object: e,
        string: e,
        symbol: e,
        any: e,
        arrayOf: t,
        element: e,
        elementType: e,
        instanceOf: t,
        node: e,
        objectOf: t,
        oneOf: t,
        oneOfType: t,
        shape: t,
        exact: t,
        checkPropTypes: dp,
        resetWarningCache: pp,
    };
    return (n.PropTypes = n), n;
};
cp.exports = sm();
var um = cp.exports;
const $ = Xs(um);
function qt(e, t, n, r) {
    function i(l) {
        return l instanceof n
            ? l
            : new n(function (o) {
                  o(l);
              });
    }
    return new (n || (n = Promise))(function (l, o) {
        function a(m) {
            try {
                u(r.next(m));
            } catch (v) {
                o(v);
            }
        }
        function s(m) {
            try {
                u(r.throw(m));
            } catch (v) {
                o(v);
            }
        }
        function u(m) {
            m.done ? l(m.value) : i(m.value).then(a, s);
        }
        u((r = r.apply(e, t || [])).next());
    });
}
const cm = new Map([
    ["1km", "application/vnd.1000minds.decision-model+xml"],
    ["3dml", "text/vnd.in3d.3dml"],
    ["3ds", "image/x-3ds"],
    ["3g2", "video/3gpp2"],
    ["3gp", "video/3gp"],
    ["3gpp", "video/3gpp"],
    ["3mf", "model/3mf"],
    ["7z", "application/x-7z-compressed"],
    ["7zip", "application/x-7z-compressed"],
    ["123", "application/vnd.lotus-1-2-3"],
    ["aab", "application/x-authorware-bin"],
    ["aac", "audio/x-acc"],
    ["aam", "application/x-authorware-map"],
    ["aas", "application/x-authorware-seg"],
    ["abw", "application/x-abiword"],
    ["ac", "application/vnd.nokia.n-gage.ac+xml"],
    ["ac3", "audio/ac3"],
    ["acc", "application/vnd.americandynamics.acc"],
    ["ace", "application/x-ace-compressed"],
    ["acu", "application/vnd.acucobol"],
    ["acutc", "application/vnd.acucorp"],
    ["adp", "audio/adpcm"],
    ["aep", "application/vnd.audiograph"],
    ["afm", "application/x-font-type1"],
    ["afp", "application/vnd.ibm.modcap"],
    ["ahead", "application/vnd.ahead.space"],
    ["ai", "application/pdf"],
    ["aif", "audio/x-aiff"],
    ["aifc", "audio/x-aiff"],
    ["aiff", "audio/x-aiff"],
    ["air", "application/vnd.adobe.air-application-installer-package+zip"],
    ["ait", "application/vnd.dvb.ait"],
    ["ami", "application/vnd.amiga.ami"],
    ["amr", "audio/amr"],
    ["apk", "application/vnd.android.package-archive"],
    ["apng", "image/apng"],
    ["appcache", "text/cache-manifest"],
    ["application", "application/x-ms-application"],
    ["apr", "application/vnd.lotus-approach"],
    ["arc", "application/x-freearc"],
    ["arj", "application/x-arj"],
    ["asc", "application/pgp-signature"],
    ["asf", "video/x-ms-asf"],
    ["asm", "text/x-asm"],
    ["aso", "application/vnd.accpac.simply.aso"],
    ["asx", "video/x-ms-asf"],
    ["atc", "application/vnd.acucorp"],
    ["atom", "application/atom+xml"],
    ["atomcat", "application/atomcat+xml"],
    ["atomdeleted", "application/atomdeleted+xml"],
    ["atomsvc", "application/atomsvc+xml"],
    ["atx", "application/vnd.antix.game-component"],
    ["au", "audio/x-au"],
    ["avi", "video/x-msvideo"],
    ["avif", "image/avif"],
    ["aw", "application/applixware"],
    ["azf", "application/vnd.airzip.filesecure.azf"],
    ["azs", "application/vnd.airzip.filesecure.azs"],
    ["azv", "image/vnd.airzip.accelerator.azv"],
    ["azw", "application/vnd.amazon.ebook"],
    ["b16", "image/vnd.pco.b16"],
    ["bat", "application/x-msdownload"],
    ["bcpio", "application/x-bcpio"],
    ["bdf", "application/x-font-bdf"],
    ["bdm", "application/vnd.syncml.dm+wbxml"],
    ["bdoc", "application/x-bdoc"],
    ["bed", "application/vnd.realvnc.bed"],
    ["bh2", "application/vnd.fujitsu.oasysprs"],
    ["bin", "application/octet-stream"],
    ["blb", "application/x-blorb"],
    ["blorb", "application/x-blorb"],
    ["bmi", "application/vnd.bmi"],
    ["bmml", "application/vnd.balsamiq.bmml+xml"],
    ["bmp", "image/bmp"],
    ["book", "application/vnd.framemaker"],
    ["box", "application/vnd.previewsystems.box"],
    ["boz", "application/x-bzip2"],
    ["bpk", "application/octet-stream"],
    ["bpmn", "application/octet-stream"],
    ["bsp", "model/vnd.valve.source.compiled-map"],
    ["btif", "image/prs.btif"],
    ["buffer", "application/octet-stream"],
    ["bz", "application/x-bzip"],
    ["bz2", "application/x-bzip2"],
    ["c", "text/x-c"],
    ["c4d", "application/vnd.clonk.c4group"],
    ["c4f", "application/vnd.clonk.c4group"],
    ["c4g", "application/vnd.clonk.c4group"],
    ["c4p", "application/vnd.clonk.c4group"],
    ["c4u", "application/vnd.clonk.c4group"],
    ["c11amc", "application/vnd.cluetrust.cartomobile-config"],
    ["c11amz", "application/vnd.cluetrust.cartomobile-config-pkg"],
    ["cab", "application/vnd.ms-cab-compressed"],
    ["caf", "audio/x-caf"],
    ["cap", "application/vnd.tcpdump.pcap"],
    ["car", "application/vnd.curl.car"],
    ["cat", "application/vnd.ms-pki.seccat"],
    ["cb7", "application/x-cbr"],
    ["cba", "application/x-cbr"],
    ["cbr", "application/x-cbr"],
    ["cbt", "application/x-cbr"],
    ["cbz", "application/x-cbr"],
    ["cc", "text/x-c"],
    ["cco", "application/x-cocoa"],
    ["cct", "application/x-director"],
    ["ccxml", "application/ccxml+xml"],
    ["cdbcmsg", "application/vnd.contact.cmsg"],
    ["cda", "application/x-cdf"],
    ["cdf", "application/x-netcdf"],
    ["cdfx", "application/cdfx+xml"],
    ["cdkey", "application/vnd.mediastation.cdkey"],
    ["cdmia", "application/cdmi-capability"],
    ["cdmic", "application/cdmi-container"],
    ["cdmid", "application/cdmi-domain"],
    ["cdmio", "application/cdmi-object"],
    ["cdmiq", "application/cdmi-queue"],
    ["cdr", "application/cdr"],
    ["cdx", "chemical/x-cdx"],
    ["cdxml", "application/vnd.chemdraw+xml"],
    ["cdy", "application/vnd.cinderella"],
    ["cer", "application/pkix-cert"],
    ["cfs", "application/x-cfs-compressed"],
    ["cgm", "image/cgm"],
    ["chat", "application/x-chat"],
    ["chm", "application/vnd.ms-htmlhelp"],
    ["chrt", "application/vnd.kde.kchart"],
    ["cif", "chemical/x-cif"],
    ["cii", "application/vnd.anser-web-certificate-issue-initiation"],
    ["cil", "application/vnd.ms-artgalry"],
    ["cjs", "application/node"],
    ["cla", "application/vnd.claymore"],
    ["class", "application/octet-stream"],
    ["clkk", "application/vnd.crick.clicker.keyboard"],
    ["clkp", "application/vnd.crick.clicker.palette"],
    ["clkt", "application/vnd.crick.clicker.template"],
    ["clkw", "application/vnd.crick.clicker.wordbank"],
    ["clkx", "application/vnd.crick.clicker"],
    ["clp", "application/x-msclip"],
    ["cmc", "application/vnd.cosmocaller"],
    ["cmdf", "chemical/x-cmdf"],
    ["cml", "chemical/x-cml"],
    ["cmp", "application/vnd.yellowriver-custom-menu"],
    ["cmx", "image/x-cmx"],
    ["cod", "application/vnd.rim.cod"],
    ["coffee", "text/coffeescript"],
    ["com", "application/x-msdownload"],
    ["conf", "text/plain"],
    ["cpio", "application/x-cpio"],
    ["cpp", "text/x-c"],
    ["cpt", "application/mac-compactpro"],
    ["crd", "application/x-mscardfile"],
    ["crl", "application/pkix-crl"],
    ["crt", "application/x-x509-ca-cert"],
    ["crx", "application/x-chrome-extension"],
    ["cryptonote", "application/vnd.rig.cryptonote"],
    ["csh", "application/x-csh"],
    ["csl", "application/vnd.citationstyles.style+xml"],
    ["csml", "chemical/x-csml"],
    ["csp", "application/vnd.commonspace"],
    ["csr", "application/octet-stream"],
    ["css", "text/css"],
    ["cst", "application/x-director"],
    ["csv", "text/csv"],
    ["cu", "application/cu-seeme"],
    ["curl", "text/vnd.curl"],
    ["cww", "application/prs.cww"],
    ["cxt", "application/x-director"],
    ["cxx", "text/x-c"],
    ["dae", "model/vnd.collada+xml"],
    ["daf", "application/vnd.mobius.daf"],
    ["dart", "application/vnd.dart"],
    ["dataless", "application/vnd.fdsn.seed"],
    ["davmount", "application/davmount+xml"],
    ["dbf", "application/vnd.dbf"],
    ["dbk", "application/docbook+xml"],
    ["dcr", "application/x-director"],
    ["dcurl", "text/vnd.curl.dcurl"],
    ["dd2", "application/vnd.oma.dd2+xml"],
    ["ddd", "application/vnd.fujixerox.ddd"],
    ["ddf", "application/vnd.syncml.dmddf+xml"],
    ["dds", "image/vnd.ms-dds"],
    ["deb", "application/x-debian-package"],
    ["def", "text/plain"],
    ["deploy", "application/octet-stream"],
    ["der", "application/x-x509-ca-cert"],
    ["dfac", "application/vnd.dreamfactory"],
    ["dgc", "application/x-dgc-compressed"],
    ["dic", "text/x-c"],
    ["dir", "application/x-director"],
    ["dis", "application/vnd.mobius.dis"],
    ["disposition-notification", "message/disposition-notification"],
    ["dist", "application/octet-stream"],
    ["distz", "application/octet-stream"],
    ["djv", "image/vnd.djvu"],
    ["djvu", "image/vnd.djvu"],
    ["dll", "application/octet-stream"],
    ["dmg", "application/x-apple-diskimage"],
    ["dmn", "application/octet-stream"],
    ["dmp", "application/vnd.tcpdump.pcap"],
    ["dms", "application/octet-stream"],
    ["dna", "application/vnd.dna"],
    ["doc", "application/msword"],
    ["docm", "application/vnd.ms-word.template.macroEnabled.12"],
    ["docx", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"],
    ["dot", "application/msword"],
    ["dotm", "application/vnd.ms-word.template.macroEnabled.12"],
    ["dotx", "application/vnd.openxmlformats-officedocument.wordprocessingml.template"],
    ["dp", "application/vnd.osgi.dp"],
    ["dpg", "application/vnd.dpgraph"],
    ["dra", "audio/vnd.dra"],
    ["drle", "image/dicom-rle"],
    ["dsc", "text/prs.lines.tag"],
    ["dssc", "application/dssc+der"],
    ["dtb", "application/x-dtbook+xml"],
    ["dtd", "application/xml-dtd"],
    ["dts", "audio/vnd.dts"],
    ["dtshd", "audio/vnd.dts.hd"],
    ["dump", "application/octet-stream"],
    ["dvb", "video/vnd.dvb.file"],
    ["dvi", "application/x-dvi"],
    ["dwd", "application/atsc-dwd+xml"],
    ["dwf", "model/vnd.dwf"],
    ["dwg", "image/vnd.dwg"],
    ["dxf", "image/vnd.dxf"],
    ["dxp", "application/vnd.spotfire.dxp"],
    ["dxr", "application/x-director"],
    ["ear", "application/java-archive"],
    ["ecelp4800", "audio/vnd.nuera.ecelp4800"],
    ["ecelp7470", "audio/vnd.nuera.ecelp7470"],
    ["ecelp9600", "audio/vnd.nuera.ecelp9600"],
    ["ecma", "application/ecmascript"],
    ["edm", "application/vnd.novadigm.edm"],
    ["edx", "application/vnd.novadigm.edx"],
    ["efif", "application/vnd.picsel"],
    ["ei6", "application/vnd.pg.osasli"],
    ["elc", "application/octet-stream"],
    ["emf", "image/emf"],
    ["eml", "message/rfc822"],
    ["emma", "application/emma+xml"],
    ["emotionml", "application/emotionml+xml"],
    ["emz", "application/x-msmetafile"],
    ["eol", "audio/vnd.digital-winds"],
    ["eot", "application/vnd.ms-fontobject"],
    ["eps", "application/postscript"],
    ["epub", "application/epub+zip"],
    ["es", "application/ecmascript"],
    ["es3", "application/vnd.eszigno3+xml"],
    ["esa", "application/vnd.osgi.subsystem"],
    ["esf", "application/vnd.epson.esf"],
    ["et3", "application/vnd.eszigno3+xml"],
    ["etx", "text/x-setext"],
    ["eva", "application/x-eva"],
    ["evy", "application/x-envoy"],
    ["exe", "application/octet-stream"],
    ["exi", "application/exi"],
    ["exp", "application/express"],
    ["exr", "image/aces"],
    ["ext", "application/vnd.novadigm.ext"],
    ["ez", "application/andrew-inset"],
    ["ez2", "application/vnd.ezpix-album"],
    ["ez3", "application/vnd.ezpix-package"],
    ["f", "text/x-fortran"],
    ["f4v", "video/mp4"],
    ["f77", "text/x-fortran"],
    ["f90", "text/x-fortran"],
    ["fbs", "image/vnd.fastbidsheet"],
    ["fcdt", "application/vnd.adobe.formscentral.fcdt"],
    ["fcs", "application/vnd.isac.fcs"],
    ["fdf", "application/vnd.fdf"],
    ["fdt", "application/fdt+xml"],
    ["fe_launch", "application/vnd.denovo.fcselayout-link"],
    ["fg5", "application/vnd.fujitsu.oasysgp"],
    ["fgd", "application/x-director"],
    ["fh", "image/x-freehand"],
    ["fh4", "image/x-freehand"],
    ["fh5", "image/x-freehand"],
    ["fh7", "image/x-freehand"],
    ["fhc", "image/x-freehand"],
    ["fig", "application/x-xfig"],
    ["fits", "image/fits"],
    ["flac", "audio/x-flac"],
    ["fli", "video/x-fli"],
    ["flo", "application/vnd.micrografx.flo"],
    ["flv", "video/x-flv"],
    ["flw", "application/vnd.kde.kivio"],
    ["flx", "text/vnd.fmi.flexstor"],
    ["fly", "text/vnd.fly"],
    ["fm", "application/vnd.framemaker"],
    ["fnc", "application/vnd.frogans.fnc"],
    ["fo", "application/vnd.software602.filler.form+xml"],
    ["for", "text/x-fortran"],
    ["fpx", "image/vnd.fpx"],
    ["frame", "application/vnd.framemaker"],
    ["fsc", "application/vnd.fsc.weblaunch"],
    ["fst", "image/vnd.fst"],
    ["ftc", "application/vnd.fluxtime.clip"],
    ["fti", "application/vnd.anser-web-funds-transfer-initiation"],
    ["fvt", "video/vnd.fvt"],
    ["fxp", "application/vnd.adobe.fxp"],
    ["fxpl", "application/vnd.adobe.fxp"],
    ["fzs", "application/vnd.fuzzysheet"],
    ["g2w", "application/vnd.geoplan"],
    ["g3", "image/g3fax"],
    ["g3w", "application/vnd.geospace"],
    ["gac", "application/vnd.groove-account"],
    ["gam", "application/x-tads"],
    ["gbr", "application/rpki-ghostbusters"],
    ["gca", "application/x-gca-compressed"],
    ["gdl", "model/vnd.gdl"],
    ["gdoc", "application/vnd.google-apps.document"],
    ["geo", "application/vnd.dynageo"],
    ["geojson", "application/geo+json"],
    ["gex", "application/vnd.geometry-explorer"],
    ["ggb", "application/vnd.geogebra.file"],
    ["ggt", "application/vnd.geogebra.tool"],
    ["ghf", "application/vnd.groove-help"],
    ["gif", "image/gif"],
    ["gim", "application/vnd.groove-identity-message"],
    ["glb", "model/gltf-binary"],
    ["gltf", "model/gltf+json"],
    ["gml", "application/gml+xml"],
    ["gmx", "application/vnd.gmx"],
    ["gnumeric", "application/x-gnumeric"],
    ["gpg", "application/gpg-keys"],
    ["gph", "application/vnd.flographit"],
    ["gpx", "application/gpx+xml"],
    ["gqf", "application/vnd.grafeq"],
    ["gqs", "application/vnd.grafeq"],
    ["gram", "application/srgs"],
    ["gramps", "application/x-gramps-xml"],
    ["gre", "application/vnd.geometry-explorer"],
    ["grv", "application/vnd.groove-injector"],
    ["grxml", "application/srgs+xml"],
    ["gsf", "application/x-font-ghostscript"],
    ["gsheet", "application/vnd.google-apps.spreadsheet"],
    ["gslides", "application/vnd.google-apps.presentation"],
    ["gtar", "application/x-gtar"],
    ["gtm", "application/vnd.groove-tool-message"],
    ["gtw", "model/vnd.gtw"],
    ["gv", "text/vnd.graphviz"],
    ["gxf", "application/gxf"],
    ["gxt", "application/vnd.geonext"],
    ["gz", "application/gzip"],
    ["gzip", "application/gzip"],
    ["h", "text/x-c"],
    ["h261", "video/h261"],
    ["h263", "video/h263"],
    ["h264", "video/h264"],
    ["hal", "application/vnd.hal+xml"],
    ["hbci", "application/vnd.hbci"],
    ["hbs", "text/x-handlebars-template"],
    ["hdd", "application/x-virtualbox-hdd"],
    ["hdf", "application/x-hdf"],
    ["heic", "image/heic"],
    ["heics", "image/heic-sequence"],
    ["heif", "image/heif"],
    ["heifs", "image/heif-sequence"],
    ["hej2", "image/hej2k"],
    ["held", "application/atsc-held+xml"],
    ["hh", "text/x-c"],
    ["hjson", "application/hjson"],
    ["hlp", "application/winhlp"],
    ["hpgl", "application/vnd.hp-hpgl"],
    ["hpid", "application/vnd.hp-hpid"],
    ["hps", "application/vnd.hp-hps"],
    ["hqx", "application/mac-binhex40"],
    ["hsj2", "image/hsj2"],
    ["htc", "text/x-component"],
    ["htke", "application/vnd.kenameaapp"],
    ["htm", "text/html"],
    ["html", "text/html"],
    ["hvd", "application/vnd.yamaha.hv-dic"],
    ["hvp", "application/vnd.yamaha.hv-voice"],
    ["hvs", "application/vnd.yamaha.hv-script"],
    ["i2g", "application/vnd.intergeo"],
    ["icc", "application/vnd.iccprofile"],
    ["ice", "x-conference/x-cooltalk"],
    ["icm", "application/vnd.iccprofile"],
    ["ico", "image/x-icon"],
    ["ics", "text/calendar"],
    ["ief", "image/ief"],
    ["ifb", "text/calendar"],
    ["ifm", "application/vnd.shana.informed.formdata"],
    ["iges", "model/iges"],
    ["igl", "application/vnd.igloader"],
    ["igm", "application/vnd.insors.igm"],
    ["igs", "model/iges"],
    ["igx", "application/vnd.micrografx.igx"],
    ["iif", "application/vnd.shana.informed.interchange"],
    ["img", "application/octet-stream"],
    ["imp", "application/vnd.accpac.simply.imp"],
    ["ims", "application/vnd.ms-ims"],
    ["in", "text/plain"],
    ["ini", "text/plain"],
    ["ink", "application/inkml+xml"],
    ["inkml", "application/inkml+xml"],
    ["install", "application/x-install-instructions"],
    ["iota", "application/vnd.astraea-software.iota"],
    ["ipfix", "application/ipfix"],
    ["ipk", "application/vnd.shana.informed.package"],
    ["irm", "application/vnd.ibm.rights-management"],
    ["irp", "application/vnd.irepository.package+xml"],
    ["iso", "application/x-iso9660-image"],
    ["itp", "application/vnd.shana.informed.formtemplate"],
    ["its", "application/its+xml"],
    ["ivp", "application/vnd.immervision-ivp"],
    ["ivu", "application/vnd.immervision-ivu"],
    ["jad", "text/vnd.sun.j2me.app-descriptor"],
    ["jade", "text/jade"],
    ["jam", "application/vnd.jam"],
    ["jar", "application/java-archive"],
    ["jardiff", "application/x-java-archive-diff"],
    ["java", "text/x-java-source"],
    ["jhc", "image/jphc"],
    ["jisp", "application/vnd.jisp"],
    ["jls", "image/jls"],
    ["jlt", "application/vnd.hp-jlyt"],
    ["jng", "image/x-jng"],
    ["jnlp", "application/x-java-jnlp-file"],
    ["joda", "application/vnd.joost.joda-archive"],
    ["jp2", "image/jp2"],
    ["jpe", "image/jpeg"],
    ["jpeg", "image/jpeg"],
    ["jpf", "image/jpx"],
    ["jpg", "image/jpeg"],
    ["jpg2", "image/jp2"],
    ["jpgm", "video/jpm"],
    ["jpgv", "video/jpeg"],
    ["jph", "image/jph"],
    ["jpm", "video/jpm"],
    ["jpx", "image/jpx"],
    ["js", "application/javascript"],
    ["json", "application/json"],
    ["json5", "application/json5"],
    ["jsonld", "application/ld+json"],
    ["jsonl", "application/jsonl"],
    ["jsonml", "application/jsonml+json"],
    ["jsx", "text/jsx"],
    ["jxr", "image/jxr"],
    ["jxra", "image/jxra"],
    ["jxrs", "image/jxrs"],
    ["jxs", "image/jxs"],
    ["jxsc", "image/jxsc"],
    ["jxsi", "image/jxsi"],
    ["jxss", "image/jxss"],
    ["kar", "audio/midi"],
    ["karbon", "application/vnd.kde.karbon"],
    ["kdb", "application/octet-stream"],
    ["kdbx", "application/x-keepass2"],
    ["key", "application/x-iwork-keynote-sffkey"],
    ["kfo", "application/vnd.kde.kformula"],
    ["kia", "application/vnd.kidspiration"],
    ["kml", "application/vnd.google-earth.kml+xml"],
    ["kmz", "application/vnd.google-earth.kmz"],
    ["kne", "application/vnd.kinar"],
    ["knp", "application/vnd.kinar"],
    ["kon", "application/vnd.kde.kontour"],
    ["kpr", "application/vnd.kde.kpresenter"],
    ["kpt", "application/vnd.kde.kpresenter"],
    ["kpxx", "application/vnd.ds-keypoint"],
    ["ksp", "application/vnd.kde.kspread"],
    ["ktr", "application/vnd.kahootz"],
    ["ktx", "image/ktx"],
    ["ktx2", "image/ktx2"],
    ["ktz", "application/vnd.kahootz"],
    ["kwd", "application/vnd.kde.kword"],
    ["kwt", "application/vnd.kde.kword"],
    ["lasxml", "application/vnd.las.las+xml"],
    ["latex", "application/x-latex"],
    ["lbd", "application/vnd.llamagraphics.life-balance.desktop"],
    ["lbe", "application/vnd.llamagraphics.life-balance.exchange+xml"],
    ["les", "application/vnd.hhe.lesson-player"],
    ["less", "text/less"],
    ["lgr", "application/lgr+xml"],
    ["lha", "application/octet-stream"],
    ["link66", "application/vnd.route66.link66+xml"],
    ["list", "text/plain"],
    ["list3820", "application/vnd.ibm.modcap"],
    ["listafp", "application/vnd.ibm.modcap"],
    ["litcoffee", "text/coffeescript"],
    ["lnk", "application/x-ms-shortcut"],
    ["log", "text/plain"],
    ["lostxml", "application/lost+xml"],
    ["lrf", "application/octet-stream"],
    ["lrm", "application/vnd.ms-lrm"],
    ["ltf", "application/vnd.frogans.ltf"],
    ["lua", "text/x-lua"],
    ["luac", "application/x-lua-bytecode"],
    ["lvp", "audio/vnd.lucent.voice"],
    ["lwp", "application/vnd.lotus-wordpro"],
    ["lzh", "application/octet-stream"],
    ["m1v", "video/mpeg"],
    ["m2a", "audio/mpeg"],
    ["m2v", "video/mpeg"],
    ["m3a", "audio/mpeg"],
    ["m3u", "text/plain"],
    ["m3u8", "application/vnd.apple.mpegurl"],
    ["m4a", "audio/x-m4a"],
    ["m4p", "application/mp4"],
    ["m4s", "video/iso.segment"],
    ["m4u", "application/vnd.mpegurl"],
    ["m4v", "video/x-m4v"],
    ["m13", "application/x-msmediaview"],
    ["m14", "application/x-msmediaview"],
    ["m21", "application/mp21"],
    ["ma", "application/mathematica"],
    ["mads", "application/mads+xml"],
    ["maei", "application/mmt-aei+xml"],
    ["mag", "application/vnd.ecowin.chart"],
    ["maker", "application/vnd.framemaker"],
    ["man", "text/troff"],
    ["manifest", "text/cache-manifest"],
    ["map", "application/json"],
    ["mar", "application/octet-stream"],
    ["markdown", "text/markdown"],
    ["mathml", "application/mathml+xml"],
    ["mb", "application/mathematica"],
    ["mbk", "application/vnd.mobius.mbk"],
    ["mbox", "application/mbox"],
    ["mc1", "application/vnd.medcalcdata"],
    ["mcd", "application/vnd.mcd"],
    ["mcurl", "text/vnd.curl.mcurl"],
    ["md", "text/markdown"],
    ["mdb", "application/x-msaccess"],
    ["mdi", "image/vnd.ms-modi"],
    ["mdx", "text/mdx"],
    ["me", "text/troff"],
    ["mesh", "model/mesh"],
    ["meta4", "application/metalink4+xml"],
    ["metalink", "application/metalink+xml"],
    ["mets", "application/mets+xml"],
    ["mfm", "application/vnd.mfmp"],
    ["mft", "application/rpki-manifest"],
    ["mgp", "application/vnd.osgeo.mapguide.package"],
    ["mgz", "application/vnd.proteus.magazine"],
    ["mid", "audio/midi"],
    ["midi", "audio/midi"],
    ["mie", "application/x-mie"],
    ["mif", "application/vnd.mif"],
    ["mime", "message/rfc822"],
    ["mj2", "video/mj2"],
    ["mjp2", "video/mj2"],
    ["mjs", "application/javascript"],
    ["mk3d", "video/x-matroska"],
    ["mka", "audio/x-matroska"],
    ["mkd", "text/x-markdown"],
    ["mks", "video/x-matroska"],
    ["mkv", "video/x-matroska"],
    ["mlp", "application/vnd.dolby.mlp"],
    ["mmd", "application/vnd.chipnuts.karaoke-mmd"],
    ["mmf", "application/vnd.smaf"],
    ["mml", "text/mathml"],
    ["mmr", "image/vnd.fujixerox.edmics-mmr"],
    ["mng", "video/x-mng"],
    ["mny", "application/x-msmoney"],
    ["mobi", "application/x-mobipocket-ebook"],
    ["mods", "application/mods+xml"],
    ["mov", "video/quicktime"],
    ["movie", "video/x-sgi-movie"],
    ["mp2", "audio/mpeg"],
    ["mp2a", "audio/mpeg"],
    ["mp3", "audio/mpeg"],
    ["mp4", "video/mp4"],
    ["mp4a", "audio/mp4"],
    ["mp4s", "application/mp4"],
    ["mp4v", "video/mp4"],
    ["mp21", "application/mp21"],
    ["mpc", "application/vnd.mophun.certificate"],
    ["mpd", "application/dash+xml"],
    ["mpe", "video/mpeg"],
    ["mpeg", "video/mpeg"],
    ["mpg", "video/mpeg"],
    ["mpg4", "video/mp4"],
    ["mpga", "audio/mpeg"],
    ["mpkg", "application/vnd.apple.installer+xml"],
    ["mpm", "application/vnd.blueice.multipass"],
    ["mpn", "application/vnd.mophun.application"],
    ["mpp", "application/vnd.ms-project"],
    ["mpt", "application/vnd.ms-project"],
    ["mpy", "application/vnd.ibm.minipay"],
    ["mqy", "application/vnd.mobius.mqy"],
    ["mrc", "application/marc"],
    ["mrcx", "application/marcxml+xml"],
    ["ms", "text/troff"],
    ["mscml", "application/mediaservercontrol+xml"],
    ["mseed", "application/vnd.fdsn.mseed"],
    ["mseq", "application/vnd.mseq"],
    ["msf", "application/vnd.epson.msf"],
    ["msg", "application/vnd.ms-outlook"],
    ["msh", "model/mesh"],
    ["msi", "application/x-msdownload"],
    ["msl", "application/vnd.mobius.msl"],
    ["msm", "application/octet-stream"],
    ["msp", "application/octet-stream"],
    ["msty", "application/vnd.muvee.style"],
    ["mtl", "model/mtl"],
    ["mts", "model/vnd.mts"],
    ["mus", "application/vnd.musician"],
    ["musd", "application/mmt-usd+xml"],
    ["musicxml", "application/vnd.recordare.musicxml+xml"],
    ["mvb", "application/x-msmediaview"],
    ["mvt", "application/vnd.mapbox-vector-tile"],
    ["mwf", "application/vnd.mfer"],
    ["mxf", "application/mxf"],
    ["mxl", "application/vnd.recordare.musicxml"],
    ["mxmf", "audio/mobile-xmf"],
    ["mxml", "application/xv+xml"],
    ["mxs", "application/vnd.triscape.mxs"],
    ["mxu", "video/vnd.mpegurl"],
    ["n-gage", "application/vnd.nokia.n-gage.symbian.install"],
    ["n3", "text/n3"],
    ["nb", "application/mathematica"],
    ["nbp", "application/vnd.wolfram.player"],
    ["nc", "application/x-netcdf"],
    ["ncx", "application/x-dtbncx+xml"],
    ["nfo", "text/x-nfo"],
    ["ngdat", "application/vnd.nokia.n-gage.data"],
    ["nitf", "application/vnd.nitf"],
    ["nlu", "application/vnd.neurolanguage.nlu"],
    ["nml", "application/vnd.enliven"],
    ["nnd", "application/vnd.noblenet-directory"],
    ["nns", "application/vnd.noblenet-sealer"],
    ["nnw", "application/vnd.noblenet-web"],
    ["npx", "image/vnd.net-fpx"],
    ["nq", "application/n-quads"],
    ["nsc", "application/x-conference"],
    ["nsf", "application/vnd.lotus-notes"],
    ["nt", "application/n-triples"],
    ["ntf", "application/vnd.nitf"],
    ["numbers", "application/x-iwork-numbers-sffnumbers"],
    ["nzb", "application/x-nzb"],
    ["oa2", "application/vnd.fujitsu.oasys2"],
    ["oa3", "application/vnd.fujitsu.oasys3"],
    ["oas", "application/vnd.fujitsu.oasys"],
    ["obd", "application/x-msbinder"],
    ["obgx", "application/vnd.openblox.game+xml"],
    ["obj", "model/obj"],
    ["oda", "application/oda"],
    ["odb", "application/vnd.oasis.opendocument.database"],
    ["odc", "application/vnd.oasis.opendocument.chart"],
    ["odf", "application/vnd.oasis.opendocument.formula"],
    ["odft", "application/vnd.oasis.opendocument.formula-template"],
    ["odg", "application/vnd.oasis.opendocument.graphics"],
    ["odi", "application/vnd.oasis.opendocument.image"],
    ["odm", "application/vnd.oasis.opendocument.text-master"],
    ["odp", "application/vnd.oasis.opendocument.presentation"],
    ["ods", "application/vnd.oasis.opendocument.spreadsheet"],
    ["odt", "application/vnd.oasis.opendocument.text"],
    ["oga", "audio/ogg"],
    ["ogex", "model/vnd.opengex"],
    ["ogg", "audio/ogg"],
    ["ogv", "video/ogg"],
    ["ogx", "application/ogg"],
    ["omdoc", "application/omdoc+xml"],
    ["onepkg", "application/onenote"],
    ["onetmp", "application/onenote"],
    ["onetoc", "application/onenote"],
    ["onetoc2", "application/onenote"],
    ["opf", "application/oebps-package+xml"],
    ["opml", "text/x-opml"],
    ["oprc", "application/vnd.palm"],
    ["opus", "audio/ogg"],
    ["org", "text/x-org"],
    ["osf", "application/vnd.yamaha.openscoreformat"],
    ["osfpvg", "application/vnd.yamaha.openscoreformat.osfpvg+xml"],
    ["osm", "application/vnd.openstreetmap.data+xml"],
    ["otc", "application/vnd.oasis.opendocument.chart-template"],
    ["otf", "font/otf"],
    ["otg", "application/vnd.oasis.opendocument.graphics-template"],
    ["oth", "application/vnd.oasis.opendocument.text-web"],
    ["oti", "application/vnd.oasis.opendocument.image-template"],
    ["otp", "application/vnd.oasis.opendocument.presentation-template"],
    ["ots", "application/vnd.oasis.opendocument.spreadsheet-template"],
    ["ott", "application/vnd.oasis.opendocument.text-template"],
    ["ova", "application/x-virtualbox-ova"],
    ["ovf", "application/x-virtualbox-ovf"],
    ["owl", "application/rdf+xml"],
    ["oxps", "application/oxps"],
    ["oxt", "application/vnd.openofficeorg.extension"],
    ["p", "text/x-pascal"],
    ["p7a", "application/x-pkcs7-signature"],
    ["p7b", "application/x-pkcs7-certificates"],
    ["p7c", "application/pkcs7-mime"],
    ["p7m", "application/pkcs7-mime"],
    ["p7r", "application/x-pkcs7-certreqresp"],
    ["p7s", "application/pkcs7-signature"],
    ["p8", "application/pkcs8"],
    ["p10", "application/x-pkcs10"],
    ["p12", "application/x-pkcs12"],
    ["pac", "application/x-ns-proxy-autoconfig"],
    ["pages", "application/x-iwork-pages-sffpages"],
    ["pas", "text/x-pascal"],
    ["paw", "application/vnd.pawaafile"],
    ["pbd", "application/vnd.powerbuilder6"],
    ["pbm", "image/x-portable-bitmap"],
    ["pcap", "application/vnd.tcpdump.pcap"],
    ["pcf", "application/x-font-pcf"],
    ["pcl", "application/vnd.hp-pcl"],
    ["pclxl", "application/vnd.hp-pclxl"],
    ["pct", "image/x-pict"],
    ["pcurl", "application/vnd.curl.pcurl"],
    ["pcx", "image/x-pcx"],
    ["pdb", "application/x-pilot"],
    ["pde", "text/x-processing"],
    ["pdf", "application/pdf"],
    ["pem", "application/x-x509-user-cert"],
    ["pfa", "application/x-font-type1"],
    ["pfb", "application/x-font-type1"],
    ["pfm", "application/x-font-type1"],
    ["pfr", "application/font-tdpfr"],
    ["pfx", "application/x-pkcs12"],
    ["pgm", "image/x-portable-graymap"],
    ["pgn", "application/x-chess-pgn"],
    ["pgp", "application/pgp"],
    ["php", "application/x-httpd-php"],
    ["php3", "application/x-httpd-php"],
    ["php4", "application/x-httpd-php"],
    ["phps", "application/x-httpd-php-source"],
    ["phtml", "application/x-httpd-php"],
    ["pic", "image/x-pict"],
    ["pkg", "application/octet-stream"],
    ["pki", "application/pkixcmp"],
    ["pkipath", "application/pkix-pkipath"],
    ["pkpass", "application/vnd.apple.pkpass"],
    ["pl", "application/x-perl"],
    ["plb", "application/vnd.3gpp.pic-bw-large"],
    ["plc", "application/vnd.mobius.plc"],
    ["plf", "application/vnd.pocketlearn"],
    ["pls", "application/pls+xml"],
    ["pm", "application/x-perl"],
    ["pml", "application/vnd.ctc-posml"],
    ["png", "image/png"],
    ["pnm", "image/x-portable-anymap"],
    ["portpkg", "application/vnd.macports.portpkg"],
    ["pot", "application/vnd.ms-powerpoint"],
    ["potm", "application/vnd.ms-powerpoint.presentation.macroEnabled.12"],
    ["potx", "application/vnd.openxmlformats-officedocument.presentationml.template"],
    ["ppa", "application/vnd.ms-powerpoint"],
    ["ppam", "application/vnd.ms-powerpoint.addin.macroEnabled.12"],
    ["ppd", "application/vnd.cups-ppd"],
    ["ppm", "image/x-portable-pixmap"],
    ["pps", "application/vnd.ms-powerpoint"],
    ["ppsm", "application/vnd.ms-powerpoint.slideshow.macroEnabled.12"],
    ["ppsx", "application/vnd.openxmlformats-officedocument.presentationml.slideshow"],
    ["ppt", "application/powerpoint"],
    ["pptm", "application/vnd.ms-powerpoint.presentation.macroEnabled.12"],
    ["pptx", "application/vnd.openxmlformats-officedocument.presentationml.presentation"],
    ["pqa", "application/vnd.palm"],
    ["prc", "application/x-pilot"],
    ["pre", "application/vnd.lotus-freelance"],
    ["prf", "application/pics-rules"],
    ["provx", "application/provenance+xml"],
    ["ps", "application/postscript"],
    ["psb", "application/vnd.3gpp.pic-bw-small"],
    ["psd", "application/x-photoshop"],
    ["psf", "application/x-font-linux-psf"],
    ["pskcxml", "application/pskc+xml"],
    ["pti", "image/prs.pti"],
    ["ptid", "application/vnd.pvi.ptid1"],
    ["pub", "application/x-mspublisher"],
    ["pvb", "application/vnd.3gpp.pic-bw-var"],
    ["pwn", "application/vnd.3m.post-it-notes"],
    ["pya", "audio/vnd.ms-playready.media.pya"],
    ["pyv", "video/vnd.ms-playready.media.pyv"],
    ["qam", "application/vnd.epson.quickanime"],
    ["qbo", "application/vnd.intu.qbo"],
    ["qfx", "application/vnd.intu.qfx"],
    ["qps", "application/vnd.publishare-delta-tree"],
    ["qt", "video/quicktime"],
    ["qwd", "application/vnd.quark.quarkxpress"],
    ["qwt", "application/vnd.quark.quarkxpress"],
    ["qxb", "application/vnd.quark.quarkxpress"],
    ["qxd", "application/vnd.quark.quarkxpress"],
    ["qxl", "application/vnd.quark.quarkxpress"],
    ["qxt", "application/vnd.quark.quarkxpress"],
    ["ra", "audio/x-realaudio"],
    ["ram", "audio/x-pn-realaudio"],
    ["raml", "application/raml+yaml"],
    ["rapd", "application/route-apd+xml"],
    ["rar", "application/x-rar"],
    ["ras", "image/x-cmu-raster"],
    ["rcprofile", "application/vnd.ipunplugged.rcprofile"],
    ["rdf", "application/rdf+xml"],
    ["rdz", "application/vnd.data-vision.rdz"],
    ["relo", "application/p2p-overlay+xml"],
    ["rep", "application/vnd.businessobjects"],
    ["res", "application/x-dtbresource+xml"],
    ["rgb", "image/x-rgb"],
    ["rif", "application/reginfo+xml"],
    ["rip", "audio/vnd.rip"],
    ["ris", "application/x-research-info-systems"],
    ["rl", "application/resource-lists+xml"],
    ["rlc", "image/vnd.fujixerox.edmics-rlc"],
    ["rld", "application/resource-lists-diff+xml"],
    ["rm", "audio/x-pn-realaudio"],
    ["rmi", "audio/midi"],
    ["rmp", "audio/x-pn-realaudio-plugin"],
    ["rms", "application/vnd.jcp.javame.midlet-rms"],
    ["rmvb", "application/vnd.rn-realmedia-vbr"],
    ["rnc", "application/relax-ng-compact-syntax"],
    ["rng", "application/xml"],
    ["roa", "application/rpki-roa"],
    ["roff", "text/troff"],
    ["rp9", "application/vnd.cloanto.rp9"],
    ["rpm", "audio/x-pn-realaudio-plugin"],
    ["rpss", "application/vnd.nokia.radio-presets"],
    ["rpst", "application/vnd.nokia.radio-preset"],
    ["rq", "application/sparql-query"],
    ["rs", "application/rls-services+xml"],
    ["rsa", "application/x-pkcs7"],
    ["rsat", "application/atsc-rsat+xml"],
    ["rsd", "application/rsd+xml"],
    ["rsheet", "application/urc-ressheet+xml"],
    ["rss", "application/rss+xml"],
    ["rtf", "text/rtf"],
    ["rtx", "text/richtext"],
    ["run", "application/x-makeself"],
    ["rusd", "application/route-usd+xml"],
    ["rv", "video/vnd.rn-realvideo"],
    ["s", "text/x-asm"],
    ["s3m", "audio/s3m"],
    ["saf", "application/vnd.yamaha.smaf-audio"],
    ["sass", "text/x-sass"],
    ["sbml", "application/sbml+xml"],
    ["sc", "application/vnd.ibm.secure-container"],
    ["scd", "application/x-msschedule"],
    ["scm", "application/vnd.lotus-screencam"],
    ["scq", "application/scvp-cv-request"],
    ["scs", "application/scvp-cv-response"],
    ["scss", "text/x-scss"],
    ["scurl", "text/vnd.curl.scurl"],
    ["sda", "application/vnd.stardivision.draw"],
    ["sdc", "application/vnd.stardivision.calc"],
    ["sdd", "application/vnd.stardivision.impress"],
    ["sdkd", "application/vnd.solent.sdkm+xml"],
    ["sdkm", "application/vnd.solent.sdkm+xml"],
    ["sdp", "application/sdp"],
    ["sdw", "application/vnd.stardivision.writer"],
    ["sea", "application/octet-stream"],
    ["see", "application/vnd.seemail"],
    ["seed", "application/vnd.fdsn.seed"],
    ["sema", "application/vnd.sema"],
    ["semd", "application/vnd.semd"],
    ["semf", "application/vnd.semf"],
    ["senmlx", "application/senml+xml"],
    ["sensmlx", "application/sensml+xml"],
    ["ser", "application/java-serialized-object"],
    ["setpay", "application/set-payment-initiation"],
    ["setreg", "application/set-registration-initiation"],
    ["sfd-hdstx", "application/vnd.hydrostatix.sof-data"],
    ["sfs", "application/vnd.spotfire.sfs"],
    ["sfv", "text/x-sfv"],
    ["sgi", "image/sgi"],
    ["sgl", "application/vnd.stardivision.writer-global"],
    ["sgm", "text/sgml"],
    ["sgml", "text/sgml"],
    ["sh", "application/x-sh"],
    ["shar", "application/x-shar"],
    ["shex", "text/shex"],
    ["shf", "application/shf+xml"],
    ["shtml", "text/html"],
    ["sid", "image/x-mrsid-image"],
    ["sieve", "application/sieve"],
    ["sig", "application/pgp-signature"],
    ["sil", "audio/silk"],
    ["silo", "model/mesh"],
    ["sis", "application/vnd.symbian.install"],
    ["sisx", "application/vnd.symbian.install"],
    ["sit", "application/x-stuffit"],
    ["sitx", "application/x-stuffitx"],
    ["siv", "application/sieve"],
    ["skd", "application/vnd.koan"],
    ["skm", "application/vnd.koan"],
    ["skp", "application/vnd.koan"],
    ["skt", "application/vnd.koan"],
    ["sldm", "application/vnd.ms-powerpoint.slide.macroenabled.12"],
    ["sldx", "application/vnd.openxmlformats-officedocument.presentationml.slide"],
    ["slim", "text/slim"],
    ["slm", "text/slim"],
    ["sls", "application/route-s-tsid+xml"],
    ["slt", "application/vnd.epson.salt"],
    ["sm", "application/vnd.stepmania.stepchart"],
    ["smf", "application/vnd.stardivision.math"],
    ["smi", "application/smil"],
    ["smil", "application/smil"],
    ["smv", "video/x-smv"],
    ["smzip", "application/vnd.stepmania.package"],
    ["snd", "audio/basic"],
    ["snf", "application/x-font-snf"],
    ["so", "application/octet-stream"],
    ["spc", "application/x-pkcs7-certificates"],
    ["spdx", "text/spdx"],
    ["spf", "application/vnd.yamaha.smaf-phrase"],
    ["spl", "application/x-futuresplash"],
    ["spot", "text/vnd.in3d.spot"],
    ["spp", "application/scvp-vp-response"],
    ["spq", "application/scvp-vp-request"],
    ["spx", "audio/ogg"],
    ["sql", "application/x-sql"],
    ["src", "application/x-wais-source"],
    ["srt", "application/x-subrip"],
    ["sru", "application/sru+xml"],
    ["srx", "application/sparql-results+xml"],
    ["ssdl", "application/ssdl+xml"],
    ["sse", "application/vnd.kodak-descriptor"],
    ["ssf", "application/vnd.epson.ssf"],
    ["ssml", "application/ssml+xml"],
    ["sst", "application/octet-stream"],
    ["st", "application/vnd.sailingtracker.track"],
    ["stc", "application/vnd.sun.xml.calc.template"],
    ["std", "application/vnd.sun.xml.draw.template"],
    ["stf", "application/vnd.wt.stf"],
    ["sti", "application/vnd.sun.xml.impress.template"],
    ["stk", "application/hyperstudio"],
    ["stl", "model/stl"],
    ["stpx", "model/step+xml"],
    ["stpxz", "model/step-xml+zip"],
    ["stpz", "model/step+zip"],
    ["str", "application/vnd.pg.format"],
    ["stw", "application/vnd.sun.xml.writer.template"],
    ["styl", "text/stylus"],
    ["stylus", "text/stylus"],
    ["sub", "text/vnd.dvb.subtitle"],
    ["sus", "application/vnd.sus-calendar"],
    ["susp", "application/vnd.sus-calendar"],
    ["sv4cpio", "application/x-sv4cpio"],
    ["sv4crc", "application/x-sv4crc"],
    ["svc", "application/vnd.dvb.service"],
    ["svd", "application/vnd.svd"],
    ["svg", "image/svg+xml"],
    ["svgz", "image/svg+xml"],
    ["swa", "application/x-director"],
    ["swf", "application/x-shockwave-flash"],
    ["swi", "application/vnd.aristanetworks.swi"],
    ["swidtag", "application/swid+xml"],
    ["sxc", "application/vnd.sun.xml.calc"],
    ["sxd", "application/vnd.sun.xml.draw"],
    ["sxg", "application/vnd.sun.xml.writer.global"],
    ["sxi", "application/vnd.sun.xml.impress"],
    ["sxm", "application/vnd.sun.xml.math"],
    ["sxw", "application/vnd.sun.xml.writer"],
    ["t", "text/troff"],
    ["t3", "application/x-t3vm-image"],
    ["t38", "image/t38"],
    ["taglet", "application/vnd.mynfc"],
    ["tao", "application/vnd.tao.intent-module-archive"],
    ["tap", "image/vnd.tencent.tap"],
    ["tar", "application/x-tar"],
    ["tcap", "application/vnd.3gpp2.tcap"],
    ["tcl", "application/x-tcl"],
    ["td", "application/urc-targetdesc+xml"],
    ["teacher", "application/vnd.smart.teacher"],
    ["tei", "application/tei+xml"],
    ["teicorpus", "application/tei+xml"],
    ["tex", "application/x-tex"],
    ["texi", "application/x-texinfo"],
    ["texinfo", "application/x-texinfo"],
    ["text", "text/plain"],
    ["tfi", "application/thraud+xml"],
    ["tfm", "application/x-tex-tfm"],
    ["tfx", "image/tiff-fx"],
    ["tga", "image/x-tga"],
    ["tgz", "application/x-tar"],
    ["thmx", "application/vnd.ms-officetheme"],
    ["tif", "image/tiff"],
    ["tiff", "image/tiff"],
    ["tk", "application/x-tcl"],
    ["tmo", "application/vnd.tmobile-livetv"],
    ["toml", "application/toml"],
    ["torrent", "application/x-bittorrent"],
    ["tpl", "application/vnd.groove-tool-template"],
    ["tpt", "application/vnd.trid.tpt"],
    ["tr", "text/troff"],
    ["tra", "application/vnd.trueapp"],
    ["trig", "application/trig"],
    ["trm", "application/x-msterminal"],
    ["ts", "video/mp2t"],
    ["tsd", "application/timestamped-data"],
    ["tsv", "text/tab-separated-values"],
    ["ttc", "font/collection"],
    ["ttf", "font/ttf"],
    ["ttl", "text/turtle"],
    ["ttml", "application/ttml+xml"],
    ["twd", "application/vnd.simtech-mindmapper"],
    ["twds", "application/vnd.simtech-mindmapper"],
    ["txd", "application/vnd.genomatix.tuxedo"],
    ["txf", "application/vnd.mobius.txf"],
    ["txt", "text/plain"],
    ["u8dsn", "message/global-delivery-status"],
    ["u8hdr", "message/global-headers"],
    ["u8mdn", "message/global-disposition-notification"],
    ["u8msg", "message/global"],
    ["u32", "application/x-authorware-bin"],
    ["ubj", "application/ubjson"],
    ["udeb", "application/x-debian-package"],
    ["ufd", "application/vnd.ufdl"],
    ["ufdl", "application/vnd.ufdl"],
    ["ulx", "application/x-glulx"],
    ["umj", "application/vnd.umajin"],
    ["unityweb", "application/vnd.unity"],
    ["uoml", "application/vnd.uoml+xml"],
    ["uri", "text/uri-list"],
    ["uris", "text/uri-list"],
    ["urls", "text/uri-list"],
    ["usdz", "model/vnd.usdz+zip"],
    ["ustar", "application/x-ustar"],
    ["utz", "application/vnd.uiq.theme"],
    ["uu", "text/x-uuencode"],
    ["uva", "audio/vnd.dece.audio"],
    ["uvd", "application/vnd.dece.data"],
    ["uvf", "application/vnd.dece.data"],
    ["uvg", "image/vnd.dece.graphic"],
    ["uvh", "video/vnd.dece.hd"],
    ["uvi", "image/vnd.dece.graphic"],
    ["uvm", "video/vnd.dece.mobile"],
    ["uvp", "video/vnd.dece.pd"],
    ["uvs", "video/vnd.dece.sd"],
    ["uvt", "application/vnd.dece.ttml+xml"],
    ["uvu", "video/vnd.uvvu.mp4"],
    ["uvv", "video/vnd.dece.video"],
    ["uvva", "audio/vnd.dece.audio"],
    ["uvvd", "application/vnd.dece.data"],
    ["uvvf", "application/vnd.dece.data"],
    ["uvvg", "image/vnd.dece.graphic"],
    ["uvvh", "video/vnd.dece.hd"],
    ["uvvi", "image/vnd.dece.graphic"],
    ["uvvm", "video/vnd.dece.mobile"],
    ["uvvp", "video/vnd.dece.pd"],
    ["uvvs", "video/vnd.dece.sd"],
    ["uvvt", "application/vnd.dece.ttml+xml"],
    ["uvvu", "video/vnd.uvvu.mp4"],
    ["uvvv", "video/vnd.dece.video"],
    ["uvvx", "application/vnd.dece.unspecified"],
    ["uvvz", "application/vnd.dece.zip"],
    ["uvx", "application/vnd.dece.unspecified"],
    ["uvz", "application/vnd.dece.zip"],
    ["vbox", "application/x-virtualbox-vbox"],
    ["vbox-extpack", "application/x-virtualbox-vbox-extpack"],
    ["vcard", "text/vcard"],
    ["vcd", "application/x-cdlink"],
    ["vcf", "text/x-vcard"],
    ["vcg", "application/vnd.groove-vcard"],
    ["vcs", "text/x-vcalendar"],
    ["vcx", "application/vnd.vcx"],
    ["vdi", "application/x-virtualbox-vdi"],
    ["vds", "model/vnd.sap.vds"],
    ["vhd", "application/x-virtualbox-vhd"],
    ["vis", "application/vnd.visionary"],
    ["viv", "video/vnd.vivo"],
    ["vlc", "application/videolan"],
    ["vmdk", "application/x-virtualbox-vmdk"],
    ["vob", "video/x-ms-vob"],
    ["vor", "application/vnd.stardivision.writer"],
    ["vox", "application/x-authorware-bin"],
    ["vrml", "model/vrml"],
    ["vsd", "application/vnd.visio"],
    ["vsf", "application/vnd.vsf"],
    ["vss", "application/vnd.visio"],
    ["vst", "application/vnd.visio"],
    ["vsw", "application/vnd.visio"],
    ["vtf", "image/vnd.valve.source.texture"],
    ["vtt", "text/vtt"],
    ["vtu", "model/vnd.vtu"],
    ["vxml", "application/voicexml+xml"],
    ["w3d", "application/x-director"],
    ["wad", "application/x-doom"],
    ["wadl", "application/vnd.sun.wadl+xml"],
    ["war", "application/java-archive"],
    ["wasm", "application/wasm"],
    ["wav", "audio/x-wav"],
    ["wax", "audio/x-ms-wax"],
    ["wbmp", "image/vnd.wap.wbmp"],
    ["wbs", "application/vnd.criticaltools.wbs+xml"],
    ["wbxml", "application/wbxml"],
    ["wcm", "application/vnd.ms-works"],
    ["wdb", "application/vnd.ms-works"],
    ["wdp", "image/vnd.ms-photo"],
    ["weba", "audio/webm"],
    ["webapp", "application/x-web-app-manifest+json"],
    ["webm", "video/webm"],
    ["webmanifest", "application/manifest+json"],
    ["webp", "image/webp"],
    ["wg", "application/vnd.pmi.widget"],
    ["wgt", "application/widget"],
    ["wks", "application/vnd.ms-works"],
    ["wm", "video/x-ms-wm"],
    ["wma", "audio/x-ms-wma"],
    ["wmd", "application/x-ms-wmd"],
    ["wmf", "image/wmf"],
    ["wml", "text/vnd.wap.wml"],
    ["wmlc", "application/wmlc"],
    ["wmls", "text/vnd.wap.wmlscript"],
    ["wmlsc", "application/vnd.wap.wmlscriptc"],
    ["wmv", "video/x-ms-wmv"],
    ["wmx", "video/x-ms-wmx"],
    ["wmz", "application/x-msmetafile"],
    ["woff", "font/woff"],
    ["woff2", "font/woff2"],
    ["word", "application/msword"],
    ["wpd", "application/vnd.wordperfect"],
    ["wpl", "application/vnd.ms-wpl"],
    ["wps", "application/vnd.ms-works"],
    ["wqd", "application/vnd.wqd"],
    ["wri", "application/x-mswrite"],
    ["wrl", "model/vrml"],
    ["wsc", "message/vnd.wfa.wsc"],
    ["wsdl", "application/wsdl+xml"],
    ["wspolicy", "application/wspolicy+xml"],
    ["wtb", "application/vnd.webturbo"],
    ["wvx", "video/x-ms-wvx"],
    ["x3d", "model/x3d+xml"],
    ["x3db", "model/x3d+fastinfoset"],
    ["x3dbz", "model/x3d+binary"],
    ["x3dv", "model/x3d-vrml"],
    ["x3dvz", "model/x3d+vrml"],
    ["x3dz", "model/x3d+xml"],
    ["x32", "application/x-authorware-bin"],
    ["x_b", "model/vnd.parasolid.transmit.binary"],
    ["x_t", "model/vnd.parasolid.transmit.text"],
    ["xaml", "application/xaml+xml"],
    ["xap", "application/x-silverlight-app"],
    ["xar", "application/vnd.xara"],
    ["xav", "application/xcap-att+xml"],
    ["xbap", "application/x-ms-xbap"],
    ["xbd", "application/vnd.fujixerox.docuworks.binder"],
    ["xbm", "image/x-xbitmap"],
    ["xca", "application/xcap-caps+xml"],
    ["xcs", "application/calendar+xml"],
    ["xdf", "application/xcap-diff+xml"],
    ["xdm", "application/vnd.syncml.dm+xml"],
    ["xdp", "application/vnd.adobe.xdp+xml"],
    ["xdssc", "application/dssc+xml"],
    ["xdw", "application/vnd.fujixerox.docuworks"],
    ["xel", "application/xcap-el+xml"],
    ["xenc", "application/xenc+xml"],
    ["xer", "application/patch-ops-error+xml"],
    ["xfdf", "application/vnd.adobe.xfdf"],
    ["xfdl", "application/vnd.xfdl"],
    ["xht", "application/xhtml+xml"],
    ["xhtml", "application/xhtml+xml"],
    ["xhvml", "application/xv+xml"],
    ["xif", "image/vnd.xiff"],
    ["xl", "application/excel"],
    ["xla", "application/vnd.ms-excel"],
    ["xlam", "application/vnd.ms-excel.addin.macroEnabled.12"],
    ["xlc", "application/vnd.ms-excel"],
    ["xlf", "application/xliff+xml"],
    ["xlm", "application/vnd.ms-excel"],
    ["xls", "application/vnd.ms-excel"],
    ["xlsb", "application/vnd.ms-excel.sheet.binary.macroEnabled.12"],
    ["xlsm", "application/vnd.ms-excel.sheet.macroEnabled.12"],
    ["xlsx", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],
    ["xlt", "application/vnd.ms-excel"],
    ["xltm", "application/vnd.ms-excel.template.macroEnabled.12"],
    ["xltx", "application/vnd.openxmlformats-officedocument.spreadsheetml.template"],
    ["xlw", "application/vnd.ms-excel"],
    ["xm", "audio/xm"],
    ["xml", "application/xml"],
    ["xns", "application/xcap-ns+xml"],
    ["xo", "application/vnd.olpc-sugar"],
    ["xop", "application/xop+xml"],
    ["xpi", "application/x-xpinstall"],
    ["xpl", "application/xproc+xml"],
    ["xpm", "image/x-xpixmap"],
    ["xpr", "application/vnd.is-xpr"],
    ["xps", "application/vnd.ms-xpsdocument"],
    ["xpw", "application/vnd.intercon.formnet"],
    ["xpx", "application/vnd.intercon.formnet"],
    ["xsd", "application/xml"],
    ["xsl", "application/xml"],
    ["xslt", "application/xslt+xml"],
    ["xsm", "application/vnd.syncml+xml"],
    ["xspf", "application/xspf+xml"],
    ["xul", "application/vnd.mozilla.xul+xml"],
    ["xvm", "application/xv+xml"],
    ["xvml", "application/xv+xml"],
    ["xwd", "image/x-xwindowdump"],
    ["xyz", "chemical/x-xyz"],
    ["xz", "application/x-xz"],
    ["yaml", "text/yaml"],
    ["yang", "application/yang"],
    ["yin", "application/yin+xml"],
    ["yml", "text/yaml"],
    ["ymp", "text/x-suse-ymp"],
    ["z", "application/x-compress"],
    ["z1", "application/x-zmachine"],
    ["z2", "application/x-zmachine"],
    ["z3", "application/x-zmachine"],
    ["z4", "application/x-zmachine"],
    ["z5", "application/x-zmachine"],
    ["z6", "application/x-zmachine"],
    ["z7", "application/x-zmachine"],
    ["z8", "application/x-zmachine"],
    ["zaz", "application/vnd.zzazz.deck+xml"],
    ["zip", "application/zip"],
    ["zir", "application/vnd.zul"],
    ["zirz", "application/vnd.zul"],
    ["zmm", "application/vnd.handheld-entertainment+xml"],
    ["zsh", "text/x-scriptzsh"],
]);
function zn(e, t, n) {
    const r = pm(e),
        { webkitRelativePath: i } = e,
        l = typeof t == "string" ? t : typeof i == "string" && i.length > 0 ? i : `./${e.name}`;
    return typeof r.path != "string" && As(r, "path", l), As(r, "relativePath", l), r;
}
function pm(e) {
    const { name: t } = e;
    if (t && t.lastIndexOf(".") !== -1 && !e.type) {
        const r = t.split(".").pop().toLowerCase(),
            i = cm.get(r);
        i && Object.defineProperty(e, "type", { value: i, writable: !1, configurable: !1, enumerable: !0 });
    }
    return e;
}
function As(e, t, n) {
    Object.defineProperty(e, t, { value: n, writable: !1, configurable: !1, enumerable: !0 });
}
const dm = [".DS_Store", "Thumbs.db"];
function fm(e) {
    return qt(this, void 0, void 0, function* () {
        return Ni(e) && mm(e.dataTransfer) ? xm(e.dataTransfer, e.type) : vm(e) ? gm(e) : Array.isArray(e) && e.every((t) => "getFile" in t && typeof t.getFile == "function") ? hm(e) : [];
    });
}
function mm(e) {
    return Ni(e);
}
function vm(e) {
    return Ni(e) && Ni(e.target);
}
function Ni(e) {
    return typeof e == "object" && e !== null;
}
function gm(e) {
    return Eo(e.target.files).map((t) => zn(t));
}
function hm(e) {
    return qt(this, void 0, void 0, function* () {
        return (yield Promise.all(e.map((n) => n.getFile()))).map((n) => zn(n));
    });
}
function xm(e, t) {
    return qt(this, void 0, void 0, function* () {
        if (e.items) {
            const n = Eo(e.items).filter((i) => i.kind === "file");
            if (t !== "drop") return n;
            const r = yield Promise.all(n.map(ym));
            return $s(fp(r));
        }
        return $s(Eo(e.files).map((n) => zn(n)));
    });
}
function $s(e) {
    return e.filter((t) => dm.indexOf(t.name) === -1);
}
function Eo(e) {
    if (e === null) return [];
    const t = [];
    for (let n = 0; n < e.length; n++) {
        const r = e[n];
        t.push(r);
    }
    return t;
}
function ym(e) {
    if (typeof e.webkitGetAsEntry != "function") return Us(e);
    const t = e.webkitGetAsEntry();
    return t && t.isDirectory ? mp(t) : Us(e, t);
}
function fp(e) {
    return e.reduce((t, n) => [...t, ...(Array.isArray(n) ? fp(n) : [n])], []);
}
function Us(e, t) {
    return qt(this, void 0, void 0, function* () {
        var n;
        if (globalThis.isSecureContext && typeof e.getAsFileSystemHandle == "function") {
            const l = yield e.getAsFileSystemHandle();
            if (l === null) throw new Error(`${e} is not a File`);
            if (l !== void 0) {
                const o = yield l.getFile();
                return (o.handle = l), zn(o);
            }
        }
        const r = e.getAsFile();
        if (!r) throw new Error(`${e} is not a File`);
        return zn(r, (n = t == null ? void 0 : t.fullPath) !== null && n !== void 0 ? n : void 0);
    });
}
function wm(e) {
    return qt(this, void 0, void 0, function* () {
        return e.isDirectory ? mp(e) : km(e);
    });
}
function mp(e) {
    const t = e.createReader();
    return new Promise((n, r) => {
        const i = [];
        function l() {
            t.readEntries(
                (o) =>
                    qt(this, void 0, void 0, function* () {
                        if (o.length) {
                            const a = Promise.all(o.map(wm));
                            i.push(a), l();
                        } else
                            try {
                                const a = yield Promise.all(i);
                                n(a);
                            } catch (a) {
                                r(a);
                            }
                    }),
                (o) => {
                    r(o);
                }
            );
        }
        l();
    });
}
function km(e) {
    return qt(this, void 0, void 0, function* () {
        return new Promise((t, n) => {
            e.file(
                (r) => {
                    const i = zn(r, e.fullPath);
                    t(i);
                },
                (r) => {
                    n(r);
                }
            );
        });
    });
}
var Pl = function (e, t) {
    if (e && t) {
        var n = Array.isArray(t) ? t : t.split(",");
        if (n.length === 0) return !0;
        var r = e.name || "",
            i = (e.type || "").toLowerCase(),
            l = i.replace(/\/.*$/, "");
        return n.some(function (o) {
            var a = o.trim().toLowerCase();
            return a.charAt(0) === "." ? r.toLowerCase().endsWith(a) : a.endsWith("/*") ? l === a.replace(/\/.*$/, "") : i === a;
        });
    }
    return !0;
};
function Ws(e) {
    return Cm(e) || Em(e) || gp(e) || Sm();
}
function Sm() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Em(e) {
    if ((typeof Symbol < "u" && e[Symbol.iterator] != null) || e["@@iterator"] != null) return Array.from(e);
}
function Cm(e) {
    if (Array.isArray(e)) return Co(e);
}
function Bs(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (i) {
                return Object.getOwnPropertyDescriptor(e, i).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function Hs(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t] != null ? arguments[t] : {};
        t % 2
            ? Bs(Object(n), !0).forEach(function (r) {
                  vp(e, r, n[r]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Bs(Object(n)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
              });
    }
    return e;
}
function vp(e, t, n) {
    return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
}
function xr(e, t) {
    return zm(e) || _m(e, t) || gp(e, t) || jm();
}
function jm() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function gp(e, t) {
    if (e) {
        if (typeof e == "string") return Co(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        if ((n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")) return Array.from(e);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Co(e, t);
    }
}
function Co(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
    return r;
}
function _m(e, t) {
    var n = e == null ? null : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
    if (n != null) {
        var r = [],
            i = !0,
            l = !1,
            o,
            a;
        try {
            for (n = n.call(e); !(i = (o = n.next()).done) && (r.push(o.value), !(t && r.length === t)); i = !0);
        } catch (s) {
            (l = !0), (a = s);
        } finally {
            try {
                !i && n.return != null && n.return();
            } finally {
                if (l) throw a;
            }
        }
        return r;
    }
}
function zm(e) {
    if (Array.isArray(e)) return e;
}
var Pm = typeof Pl == "function" ? Pl : Pl.default,
    Nm = "file-invalid-type",
    Dm = "file-too-large",
    Tm = "file-too-small",
    Om = "too-many-files",
    Fm = function () {
        var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "",
            n = t.split(","),
            r = n.length > 1 ? "one of ".concat(n.join(", ")) : n[0];
        return { code: Nm, message: "File type must be ".concat(r) };
    },
    Vs = function (t) {
        return { code: Dm, message: "File is larger than ".concat(t, " ").concat(t === 1 ? "byte" : "bytes") };
    },
    Qs = function (t) {
        return { code: Tm, message: "File is smaller than ".concat(t, " ").concat(t === 1 ? "byte" : "bytes") };
    },
    Lm = { code: Om, message: "Too many files" };
function hp(e, t) {
    var n = e.type === "application/x-moz-file" || Pm(e, t);
    return [n, n ? null : Fm(t)];
}
function xp(e, t, n) {
    if (Rt(e.size))
        if (Rt(t) && Rt(n)) {
            if (e.size > n) return [!1, Vs(n)];
            if (e.size < t) return [!1, Qs(t)];
        } else {
            if (Rt(t) && e.size < t) return [!1, Qs(t)];
            if (Rt(n) && e.size > n) return [!1, Vs(n)];
        }
    return [!0, null];
}
function Rt(e) {
    return e != null;
}
function Rm(e) {
    var t = e.files,
        n = e.accept,
        r = e.minSize,
        i = e.maxSize,
        l = e.multiple,
        o = e.maxFiles,
        a = e.validator;
    return (!l && t.length > 1) || (l && o >= 1 && t.length > o)
        ? !1
        : t.every(function (s) {
              var u = hp(s, n),
                  m = xr(u, 1),
                  v = m[0],
                  f = xp(s, r, i),
                  y = xr(f, 1),
                  w = y[0],
                  k = a ? a(s) : null;
              return v && w && !k;
          });
}
function Di(e) {
    return typeof e.isPropagationStopped == "function" ? e.isPropagationStopped() : typeof e.cancelBubble < "u" ? e.cancelBubble : !1;
}
function Kr(e) {
    return e.dataTransfer
        ? Array.prototype.some.call(e.dataTransfer.types, function (t) {
              return t === "Files" || t === "application/x-moz-file";
          })
        : !!e.target && !!e.target.files;
}
function Ks(e) {
    e.preventDefault();
}
function Mm(e) {
    return e.indexOf("MSIE") !== -1 || e.indexOf("Trident/") !== -1;
}
function Im(e) {
    return e.indexOf("Edge/") !== -1;
}
function Am() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : window.navigator.userAgent;
    return Mm(e) || Im(e);
}
function Ye() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return function (r) {
        for (var i = arguments.length, l = new Array(i > 1 ? i - 1 : 0), o = 1; o < i; o++) l[o - 1] = arguments[o];
        return t.some(function (a) {
            return !Di(r) && a && a.apply(void 0, [r].concat(l)), Di(r);
        });
    };
}
function $m() {
    return "showOpenFilePicker" in window;
}
function Um(e) {
    if (Rt(e)) {
        var t = Object.entries(e)
            .filter(function (n) {
                var r = xr(n, 2),
                    i = r[0],
                    l = r[1],
                    o = !0;
                return (
                    yp(i) ||
                        (console.warn('Skipped "'.concat(i, '" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')),
                        (o = !1)),
                    (!Array.isArray(l) || !l.every(wp)) && (console.warn('Skipped "'.concat(i, '" because an invalid file extension was provided.')), (o = !1)),
                    o
                );
            })
            .reduce(function (n, r) {
                var i = xr(r, 2),
                    l = i[0],
                    o = i[1];
                return Hs(Hs({}, n), {}, vp({}, l, o));
            }, {});
        return [{ description: "Files", accept: t }];
    }
    return e;
}
function Wm(e) {
    if (Rt(e))
        return Object.entries(e)
            .reduce(function (t, n) {
                var r = xr(n, 2),
                    i = r[0],
                    l = r[1];
                return [].concat(Ws(t), [i], Ws(l));
            }, [])
            .filter(function (t) {
                return yp(t) || wp(t);
            })
            .join(",");
}
function Bm(e) {
    return e instanceof DOMException && (e.name === "AbortError" || e.code === e.ABORT_ERR);
}
function Hm(e) {
    return e instanceof DOMException && (e.name === "SecurityError" || e.code === e.SECURITY_ERR);
}
function yp(e) {
    return e === "audio/*" || e === "video/*" || e === "image/*" || e === "text/*" || e === "application/*" || /\w+\/[-+.\w]+/g.test(e);
}
function wp(e) {
    return /^.*\.[\w]+$/.test(e);
}
var Vm = ["children"],
    Qm = ["open"],
    Km = ["refKey", "role", "onKeyDown", "onFocus", "onBlur", "onClick", "onDragEnter", "onDragOver", "onDragLeave", "onDrop"],
    bm = ["refKey", "onChange", "onClick"];
function qm(e) {
    return Gm(e) || Xm(e) || kp(e) || Ym();
}
function Ym() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Xm(e) {
    if ((typeof Symbol < "u" && e[Symbol.iterator] != null) || e["@@iterator"] != null) return Array.from(e);
}
function Gm(e) {
    if (Array.isArray(e)) return jo(e);
}
function Nl(e, t) {
    return ev(e) || Jm(e, t) || kp(e, t) || Zm();
}
function Zm() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function kp(e, t) {
    if (e) {
        if (typeof e == "string") return jo(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        if ((n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")) return Array.from(e);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return jo(e, t);
    }
}
function jo(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
    return r;
}
function Jm(e, t) {
    var n = e == null ? null : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
    if (n != null) {
        var r = [],
            i = !0,
            l = !1,
            o,
            a;
        try {
            for (n = n.call(e); !(i = (o = n.next()).done) && (r.push(o.value), !(t && r.length === t)); i = !0);
        } catch (s) {
            (l = !0), (a = s);
        } finally {
            try {
                !i && n.return != null && n.return();
            } finally {
                if (l) throw a;
            }
        }
        return r;
    }
}
function ev(e) {
    if (Array.isArray(e)) return e;
}
function bs(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (i) {
                return Object.getOwnPropertyDescriptor(e, i).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function K(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t] != null ? arguments[t] : {};
        t % 2
            ? bs(Object(n), !0).forEach(function (r) {
                  _o(e, r, n[r]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : bs(Object(n)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
              });
    }
    return e;
}
function _o(e, t, n) {
    return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
}
function Ti(e, t) {
    if (e == null) return {};
    var n = tv(e, t),
        r,
        i;
    if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(e);
        for (i = 0; i < l.length; i++) (r = l[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
    }
    return n;
}
function tv(e, t) {
    if (e == null) return {};
    var n = {},
        r = Object.keys(e),
        i,
        l;
    for (l = 0; l < r.length; l++) (i = r[l]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
    return n;
}
var Sa = F.forwardRef(function (e, t) {
    var n = e.children,
        r = Ti(e, Vm),
        i = Ep(r),
        l = i.open,
        o = Ti(i, Qm);
    return (
        F.useImperativeHandle(
            t,
            function () {
                return { open: l };
            },
            [l]
        ),
        Kp.createElement(F.Fragment, null, n(K(K({}, o), {}, { open: l })))
    );
});
Sa.displayName = "Dropzone";
var Sp = {
    disabled: !1,
    getFilesFromEvent: fm,
    maxSize: 1 / 0,
    minSize: 0,
    multiple: !0,
    maxFiles: 0,
    preventDropOnDocument: !0,
    noClick: !1,
    noKeyboard: !1,
    noDrag: !1,
    noDragEventsBubbling: !1,
    validator: null,
    useFsAccessApi: !1,
    autoFocus: !1,
};
Sa.defaultProps = Sp;
Sa.propTypes = {
    children: $.func,
    accept: $.objectOf($.arrayOf($.string)),
    multiple: $.bool,
    preventDropOnDocument: $.bool,
    noClick: $.bool,
    noKeyboard: $.bool,
    noDrag: $.bool,
    noDragEventsBubbling: $.bool,
    minSize: $.number,
    maxSize: $.number,
    maxFiles: $.number,
    disabled: $.bool,
    getFilesFromEvent: $.func,
    onFileDialogCancel: $.func,
    onFileDialogOpen: $.func,
    useFsAccessApi: $.bool,
    autoFocus: $.bool,
    onDragEnter: $.func,
    onDragLeave: $.func,
    onDragOver: $.func,
    onDrop: $.func,
    onDropAccepted: $.func,
    onDropRejected: $.func,
    onError: $.func,
    validator: $.func,
};
var zo = { isFocused: !1, isFileDialogActive: !1, isDragActive: !1, isDragAccept: !1, isDragReject: !1, acceptedFiles: [], fileRejections: [] };
function Ep() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
        t = K(K({}, Sp), e),
        n = t.accept,
        r = t.disabled,
        i = t.getFilesFromEvent,
        l = t.maxSize,
        o = t.minSize,
        a = t.multiple,
        s = t.maxFiles,
        u = t.onDragEnter,
        m = t.onDragLeave,
        v = t.onDragOver,
        f = t.onDrop,
        y = t.onDropAccepted,
        w = t.onDropRejected,
        k = t.onFileDialogCancel,
        I = t.onFileDialogOpen,
        p = t.useFsAccessApi,
        c = t.autoFocus,
        d = t.preventDropOnDocument,
        g = t.noClick,
        E = t.noKeyboard,
        z = t.noDrag,
        _ = t.noDragEventsBubbling,
        P = t.onError,
        A = t.validator,
        T = F.useMemo(
            function () {
                return Wm(n);
            },
            [n]
        ),
        xe = F.useMemo(
            function () {
                return Um(n);
            },
            [n]
        ),
        et = F.useMemo(
            function () {
                return typeof I == "function" ? I : qs;
            },
            [I]
        ),
        be = F.useMemo(
            function () {
                return typeof k == "function" ? k : qs;
            },
            [k]
        ),
        ne = F.useRef(null),
        ye = F.useRef(null),
        Tn = F.useReducer(nv, zo),
        Yt = Nl(Tn, 2),
        C = Yt[0],
        N = Yt[1],
        O = C.isFocused,
        H = C.isFileDialogActive,
        Q = F.useRef(typeof window < "u" && window.isSecureContext && p && $m()),
        Tt = function () {
            !Q.current &&
                H &&
                setTimeout(function () {
                    if (ye.current) {
                        var D = ye.current.files;
                        D.length || (N({ type: "closeDialog" }), be());
                    }
                }, 300);
        };
    F.useEffect(
        function () {
            return (
                window.addEventListener("focus", Tt, !1),
                function () {
                    window.removeEventListener("focus", Tt, !1);
                }
            );
        },
        [ye, H, be, Q]
    );
    var we = F.useRef([]),
        Xt = function (D) {
            (ne.current && ne.current.contains(D.target)) || (D.preventDefault(), (we.current = []));
        };
    F.useEffect(
        function () {
            return (
                d && (document.addEventListener("dragover", Ks, !1), document.addEventListener("drop", Xt, !1)),
                function () {
                    d && (document.removeEventListener("dragover", Ks), document.removeEventListener("drop", Xt));
                }
            );
        },
        [ne, d]
    ),
        F.useEffect(
            function () {
                return !r && c && ne.current && ne.current.focus(), function () {};
            },
            [ne, c, r]
        );
    var fe = F.useCallback(
            function (S) {
                P ? P(S) : console.error(S);
            },
            [P]
        ),
        Ot = F.useCallback(
            function (S) {
                S.preventDefault(),
                    S.persist(),
                    zr(S),
                    (we.current = [].concat(qm(we.current), [S.target])),
                    Kr(S) &&
                        Promise.resolve(i(S))
                            .then(function (D) {
                                if (!(Di(S) && !_)) {
                                    var Z = D.length,
                                        re = Z > 0 && Rm({ files: D, accept: T, minSize: o, maxSize: l, multiple: a, maxFiles: s, validator: A }),
                                        ze = Z > 0 && !re;
                                    N({ isDragAccept: re, isDragReject: ze, isDragActive: !0, type: "setDraggedFiles" }), u && u(S);
                                }
                            })
                            .catch(function (D) {
                                return fe(D);
                            });
            },
            [i, u, fe, _, T, o, l, a, s, A]
        ),
        Ea = F.useCallback(
            function (S) {
                S.preventDefault(), S.persist(), zr(S);
                var D = Kr(S);
                if (D && S.dataTransfer)
                    try {
                        S.dataTransfer.dropEffect = "copy";
                    } catch {}
                return D && v && v(S), !1;
            },
            [v, _]
        ),
        Ca = F.useCallback(
            function (S) {
                S.preventDefault(), S.persist(), zr(S);
                var D = we.current.filter(function (re) {
                        return ne.current && ne.current.contains(re);
                    }),
                    Z = D.indexOf(S.target);
                Z !== -1 && D.splice(Z, 1), (we.current = D), !(D.length > 0) && (N({ type: "setDraggedFiles", isDragActive: !1, isDragAccept: !1, isDragReject: !1 }), Kr(S) && m && m(S));
            },
            [ne, m, _]
        ),
        Cr = F.useCallback(
            function (S, D) {
                var Z = [],
                    re = [];
                S.forEach(function (ze) {
                    var On = hp(ze, T),
                        Jt = Nl(On, 2),
                        Yi = Jt[0],
                        Xi = Jt[1],
                        Gi = xp(ze, o, l),
                        Pr = Nl(Gi, 2),
                        Zi = Pr[0],
                        Ji = Pr[1],
                        el = A ? A(ze) : null;
                    if (Yi && Zi && !el) Z.push(ze);
                    else {
                        var tl = [Xi, Ji];
                        el && (tl = tl.concat(el)),
                            re.push({
                                file: ze,
                                errors: tl.filter(function (Pp) {
                                    return Pp;
                                }),
                            });
                    }
                }),
                    ((!a && Z.length > 1) || (a && s >= 1 && Z.length > s)) &&
                        (Z.forEach(function (ze) {
                            re.push({ file: ze, errors: [Lm] });
                        }),
                        Z.splice(0)),
                    N({ acceptedFiles: Z, fileRejections: re, isDragReject: re.length > 0, type: "setFiles" }),
                    f && f(Z, re, D),
                    re.length > 0 && w && w(re, D),
                    Z.length > 0 && y && y(Z, D);
            },
            [N, a, T, o, l, s, f, y, w, A]
        ),
        jr = F.useCallback(
            function (S) {
                S.preventDefault(),
                    S.persist(),
                    zr(S),
                    (we.current = []),
                    Kr(S) &&
                        Promise.resolve(i(S))
                            .then(function (D) {
                                (Di(S) && !_) || Cr(D, S);
                            })
                            .catch(function (D) {
                                return fe(D);
                            }),
                    N({ type: "reset" });
            },
            [i, Cr, fe, _]
        ),
        Gt = F.useCallback(
            function () {
                if (Q.current) {
                    N({ type: "openDialog" }), et();
                    var S = { multiple: a, types: xe };
                    window
                        .showOpenFilePicker(S)
                        .then(function (D) {
                            return i(D);
                        })
                        .then(function (D) {
                            Cr(D, null), N({ type: "closeDialog" });
                        })
                        .catch(function (D) {
                            Bm(D)
                                ? (be(D), N({ type: "closeDialog" }))
                                : Hm(D)
                                ? ((Q.current = !1),
                                  ye.current
                                      ? ((ye.current.value = null), ye.current.click())
                                      : fe(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided.")))
                                : fe(D);
                        });
                    return;
                }
                ye.current && (N({ type: "openDialog" }), et(), (ye.current.value = null), ye.current.click());
            },
            [N, et, be, p, Cr, fe, xe, a]
        ),
        ja = F.useCallback(
            function (S) {
                !ne.current || !ne.current.isEqualNode(S.target) || ((S.key === " " || S.key === "Enter" || S.keyCode === 32 || S.keyCode === 13) && (S.preventDefault(), Gt()));
            },
            [ne, Gt]
        ),
        _a = F.useCallback(function () {
            N({ type: "focus" });
        }, []),
        za = F.useCallback(function () {
            N({ type: "blur" });
        }, []),
        Pa = F.useCallback(
            function () {
                g || (Am() ? setTimeout(Gt, 0) : Gt());
            },
            [g, Gt]
        ),
        Zt = function (D) {
            return r ? null : D;
        },
        qi = function (D) {
            return E ? null : Zt(D);
        },
        _r = function (D) {
            return z ? null : Zt(D);
        },
        zr = function (D) {
            _ && D.stopPropagation();
        },
        jp = F.useMemo(
            function () {
                return function () {
                    var S = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
                        D = S.refKey,
                        Z = D === void 0 ? "ref" : D,
                        re = S.role,
                        ze = S.onKeyDown,
                        On = S.onFocus,
                        Jt = S.onBlur,
                        Yi = S.onClick,
                        Xi = S.onDragEnter,
                        Gi = S.onDragOver,
                        Pr = S.onDragLeave,
                        Zi = S.onDrop,
                        Ji = Ti(S, Km);
                    return K(
                        K(
                            _o(
                                {
                                    onKeyDown: qi(Ye(ze, ja)),
                                    onFocus: qi(Ye(On, _a)),
                                    onBlur: qi(Ye(Jt, za)),
                                    onClick: Zt(Ye(Yi, Pa)),
                                    onDragEnter: _r(Ye(Xi, Ot)),
                                    onDragOver: _r(Ye(Gi, Ea)),
                                    onDragLeave: _r(Ye(Pr, Ca)),
                                    onDrop: _r(Ye(Zi, jr)),
                                    role: typeof re == "string" && re !== "" ? re : "presentation",
                                },
                                Z,
                                ne
                            ),
                            !r && !E ? { tabIndex: 0 } : {}
                        ),
                        Ji
                    );
                };
            },
            [ne, ja, _a, za, Pa, Ot, Ea, Ca, jr, E, z, r]
        ),
        _p = F.useCallback(function (S) {
            S.stopPropagation();
        }, []),
        zp = F.useMemo(
            function () {
                return function () {
                    var S = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
                        D = S.refKey,
                        Z = D === void 0 ? "ref" : D,
                        re = S.onChange,
                        ze = S.onClick,
                        On = Ti(S, bm),
                        Jt = _o(
                            {
                                accept: T,
                                multiple: a,
                                type: "file",
                                style: { border: 0, clip: "rect(0, 0, 0, 0)", clipPath: "inset(50%)", height: "1px", margin: "0 -1px -1px 0", overflow: "hidden", padding: 0, position: "absolute", width: "1px", whiteSpace: "nowrap" },
                                onChange: Zt(Ye(re, jr)),
                                onClick: Zt(Ye(ze, _p)),
                                tabIndex: -1,
                            },
                            Z,
                            ye
                        );
                    return K(K({}, Jt), On);
                };
            },
            [ye, n, a, jr, r]
        );
    return K(K({}, C), {}, { isFocused: O && !r, getRootProps: jp, getInputProps: zp, rootRef: ne, inputRef: ye, open: Zt(Gt) });
}
function nv(e, t) {
    switch (t.type) {
        case "focus":
            return K(K({}, e), {}, { isFocused: !0 });
        case "blur":
            return K(K({}, e), {}, { isFocused: !1 });
        case "openDialog":
            return K(K({}, zo), {}, { isFileDialogActive: !0 });
        case "closeDialog":
            return K(K({}, e), {}, { isFileDialogActive: !1 });
        case "setDraggedFiles":
            return K(K({}, e), {}, { isDragActive: t.isDragActive, isDragAccept: t.isDragAccept, isDragReject: t.isDragReject });
        case "setFiles":
            return K(K({}, e), {}, { acceptedFiles: t.acceptedFiles, fileRejections: t.fileRejections, isDragReject: t.isDragReject });
        case "reset":
            return K({}, zo);
        default:
            return e;
    }
}
function qs() {}
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var rv = { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" };
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const iv = (e) =>
        e
            .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
            .toLowerCase()
            .trim(),
    _e = (e, t) => {
        const n = F.forwardRef(({ color: r = "currentColor", size: i = 24, strokeWidth: l = 2, absoluteStrokeWidth: o, className: a = "", children: s, ...u }, m) =>
            F.createElement("svg", { ref: m, ...rv, width: i, height: i, stroke: r, strokeWidth: o ? (Number(l) * 24) / Number(i) : l, className: ["lucide", `lucide-${iv(e)}`, a].join(" "), ...u }, [
                ...t.map(([v, f]) => F.createElement(v, f)),
                ...(Array.isArray(s) ? s : [s]),
            ])
        );
        return (n.displayName = `${e}`), n;
    };
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const lv = _e("AlertCircle", [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
    ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ov = _e("Clock", [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const av = _e("Copy", [
    ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
    ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const sv = _e("CreditCard", [
    ["rect", { width: "20", height: "14", x: "2", y: "5", rx: "2", key: "ynyp8z" }],
    ["line", { x1: "2", x2: "22", y1: "10", y2: "10", key: "1b3vmo" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const uv = _e("Download", [
    ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
    ["polyline", { points: "7 10 12 15 17 10", key: "2ggqvy" }],
    ["line", { x1: "12", x2: "12", y1: "15", y2: "3", key: "1vk2je" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const cv = _e("FileText", [
    ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
    ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
    ["path", { d: "M10 9H8", key: "b1mrlr" }],
    ["path", { d: "M16 13H8", key: "t4e002" }],
    ["path", { d: "M16 17H8", key: "z1uh3a" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const pv = _e("Layers", [
    ["path", { d: "m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z", key: "8b97xw" }],
    ["path", { d: "m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65", key: "dd6zsq" }],
    ["path", { d: "m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65", key: "ep9fru" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const dv = _e("LayoutTemplate", [
    ["rect", { width: "18", height: "7", x: "3", y: "3", rx: "1", key: "f1a2em" }],
    ["rect", { width: "9", height: "7", x: "3", y: "14", rx: "1", key: "jqznyg" }],
    ["rect", { width: "5", height: "7", x: "16", y: "14", rx: "1", key: "q5h2i8" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const fv = _e("Palette", [
    ["circle", { cx: "13.5", cy: "6.5", r: ".5", fill: "currentColor", key: "1okk4w" }],
    ["circle", { cx: "17.5", cy: "10.5", r: ".5", fill: "currentColor", key: "f64h9f" }],
    ["circle", { cx: "8.5", cy: "7.5", r: ".5", fill: "currentColor", key: "fotxhn" }],
    ["circle", { cx: "6.5", cy: "12.5", r: ".5", fill: "currentColor", key: "qy21gx" }],
    [
        "path",
        {
            d: "M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",
            key: "12rzf8",
        },
    ],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const mv = _e("Printer", [
    ["polyline", { points: "6 9 6 2 18 2 18 9", key: "1306q4" }],
    ["path", { d: "M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2", key: "143wyd" }],
    ["rect", { width: "12", height: "8", x: "6", y: "14", key: "5ipwut" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const vv = _e("Shield", [["path", { d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z", key: "oel41y" }]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const gv = _e("ShoppingCart", [
    ["circle", { cx: "8", cy: "21", r: "1", key: "jimo8o" }],
    ["circle", { cx: "19", cy: "21", r: "1", key: "13723u" }],
    ["path", { d: "M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12", key: "9zh506" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const hv = _e("Trash2", [
    ["path", { d: "M3 6h18", key: "d0wm0j" }],
    ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
    ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
    ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }],
    ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ys = _e("Upload", [
        ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
        ["polyline", { points: "17 8 12 3 7 8", key: "t8dd8p" }],
        ["line", { x1: "12", x2: "12", y1: "3", y2: "15", key: "widbto" }],
    ]),
    xv = ({ onFilesAdded: e }) => {
        const t = F.useCallback(
                (o) => {
                    e(o);
                },
                [e]
            ),
            { getRootProps: n, getInputProps: r, isDragActive: i, fileRejections: l } = Ep({ onDrop: t, accept: { "application/pdf": [".pdf"] } });
        return x.jsxs("div", {
            className: "bg-white p-6 rounded-lg shadow-md",
            children: [
                x.jsxs("div", {
                    className: "mb-4",
                    children: [
                        x.jsxs("h2", { className: "text-xl font-semibold flex items-center gap-2", children: [x.jsx(Ys, { className: "w-5 h-5" }), "Upload your PDFs"] }),
                        x.jsx("p", { className: "text-sm text-gray-500", children: "Drag and drop your PDF files here or click to browse" }),
                    ],
                }),
                x.jsxs("div", {
                    ...n(),
                    className: `border-2 border-dashed rounded-lg p-8 text-center transition-colors ${i ? "border-green-400 bg-green-50" : "border-gray-300 hover:border-gray-400"}`,
                    children: [
                        x.jsx("input", { ...r() }),
                        x.jsxs("div", {
                            className: "flex flex-col items-center gap-2",
                            children: [
                                x.jsx(Ys, { className: "w-12 h-12 text-gray-400" }),
                                x.jsx("p", { className: "text-gray-600", children: i ? "Drop your files here" : "Drag & drop files here or click to select" }),
                                x.jsx("button", { className: "bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors mt-4", children: "Browse Files" }),
                            ],
                        }),
                    ],
                }),
                l.length > 0 &&
                    x.jsxs("div", {
                        className: "mt-4 p-4 bg-red-50 rounded-lg",
                        children: [
                            x.jsxs("div", { className: "flex items-center gap-2 text-red-600 mb-2", children: [x.jsx(lv, { className: "w-5 h-5" }), x.jsx("span", { className: "font-semibold", children: "Upload Error" })] }),
                            x.jsx("ul", { className: "text-sm text-red-600 space-y-1", children: l.map(({ file: o, errors: a }) => x.jsxs("li", { children: [o.name, ": ", a.map((s) => s.message).join(", ")] }, o.name)) }),
                        ],
                    }),
            ],
        });
    },
    Wn = {
        singleBW: 2,
        doubleBW: 4,
        singleColor: 10,
        doubleColor: 20,
        volumeDiscounts: [
            { threshold: 100, discount: 0.05 },
            { threshold: 500, discount: 0.1 },
            { threshold: 1e3, discount: 0.15 },
        ],
    },
    Cp = (e) => {
        const { pageCount: t, settings: n } = e,
            { copies: r, color: i, doubleSided: l } = n;
        let o;
        i === "color" ? (o = l ? Wn.doubleColor : Wn.singleColor) : (o = l ? Wn.doubleBW : Wn.singleBW);
        const a = t * r,
            s = Wn.volumeDiscounts.filter(({ threshold: m }) => a >= m).reduce((m, v) => (v.discount > m ? v.discount : m), 0),
            u = a * o * (1 - s);
        return Math.round(u * 100) / 100;
    },
    yv = ({ file: e, onRemove: t, onSettingsChange: n }) => {
        const r = Cp(e);
        return x.jsx("div", {
            className: "bg-white rounded-lg shadow-md p-6 transition-all hover:shadow-lg",
            children: x.jsxs("div", {
                className: "flex gap-4",
                children: [
                    x.jsx("div", {
                        className: "w-32 h-40 bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center",
                        children: e.preview ? x.jsx("img", { src: e.preview, alt: "PDF preview", className: "w-full h-full object-contain" }) : x.jsx(cv, { className: "w-12 h-12 text-gray-400" }),
                    }),
                    x.jsxs("div", {
                        className: "flex-1",
                        children: [
                            x.jsxs("div", {
                                className: "flex justify-between items-start",
                                children: [
                                    x.jsx("h3", { className: "font-semibold text-lg mb-2 truncate", children: e.name }),
                                    x.jsx("button", { onClick: () => t(e.id), className: "text-gray-400 hover:text-red-500 transition-colors", children: x.jsx(hv, { className: "w-5 h-5" }) }),
                                ],
                            }),
                            x.jsxs("div", { className: "text-sm text-gray-600 mb-4", children: [x.jsxs("p", { children: ["Pages: ", e.pageCount] }), x.jsxs("p", { children: ["Price: ₹", r] })] }),
                            x.jsxs("div", {
                                className: "space-y-4",
                                children: [
                                    x.jsxs("div", {
                                        className: "flex items-center gap-4",
                                        children: [
                                            x.jsx(av, { className: "w-5 h-5 text-gray-500" }),
                                            x.jsxs("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    x.jsx("button", { onClick: () => n(e.id, { copies: Math.max(1, e.settings.copies - 1) }), className: "p-1 border rounded hover:bg-gray-50", children: "-" }),
                                                    x.jsx("span", { className: "w-8 text-center", children: e.settings.copies }),
                                                    x.jsx("button", { onClick: () => n(e.id, { copies: e.settings.copies + 1 }), className: "p-1 border rounded hover:bg-gray-50", children: "+" }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    x.jsxs("div", {
                                        className: "flex items-center gap-4",
                                        children: [
                                            x.jsx(fv, { className: "w-5 h-5 text-gray-500" }),
                                            x.jsxs("div", {
                                                className: "flex gap-2",
                                                children: [
                                                    x.jsx("button", {
                                                        onClick: () => n(e.id, { color: "bw" }),
                                                        className: `px-3 py-1 rounded ${e.settings.color === "bw" ? "bg-gray-900 text-white" : "border border-gray-300 text-gray-700"}`,
                                                        children: "B&W",
                                                    }),
                                                    x.jsx("button", {
                                                        onClick: () => n(e.id, { color: "color" }),
                                                        className: `px-3 py-1 rounded ${e.settings.color === "color" ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white" : "border border-gray-300 text-gray-700"}`,
                                                        children: "Color",
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    x.jsxs("div", {
                                        className: "flex items-center gap-4",
                                        children: [
                                            x.jsx(pv, { className: "w-5 h-5 text-gray-500" }),
                                            x.jsxs("div", {
                                                className: "flex gap-2",
                                                children: [
                                                    x.jsx("button", {
                                                        onClick: () => n(e.id, { doubleSided: !1 }),
                                                        className: `px-3 py-1 rounded ${e.settings.doubleSided ? "border border-gray-300 text-gray-700" : "bg-green-600 text-white"}`,
                                                        children: "Single-sided",
                                                    }),
                                                    x.jsx("button", {
                                                        onClick: () => n(e.id, { doubleSided: !0 }),
                                                        className: `px-3 py-1 rounded ${e.settings.doubleSided ? "bg-green-600 text-white" : "border border-gray-300 text-gray-700"}`,
                                                        children: "Double-sided",
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    x.jsxs("div", {
                                        className: "flex items-center gap-4",
                                        children: [
                                            x.jsx(dv, { className: "w-5 h-5 text-gray-500" }),
                                            x.jsxs("div", {
                                                className: "flex gap-2",
                                                children: [
                                                    x.jsxs("button", {
                                                        onClick: () => n(e.id, { orientation: "portrait" }),
                                                        className: `px-3 py-1 rounded flex items-center gap-1 ${e.settings.orientation === "portrait" ? "bg-blue-600 text-white" : "border border-gray-300 text-gray-700"}`,
                                                        children: [x.jsx("div", { className: "w-3 h-4 border-2 border-current rounded" }), "Portrait"],
                                                    }),
                                                    x.jsxs("button", {
                                                        onClick: () => n(e.id, { orientation: "landscape" }),
                                                        className: `px-3 py-1 rounded flex items-center gap-1 ${e.settings.orientation === "landscape" ? "bg-blue-600 text-white" : "border border-gray-300 text-gray-700"}`,
                                                        children: [x.jsx("div", { className: "w-4 h-3 border-2 border-current rounded" }), "Landscape"],
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        });
    },
    wv = ({ files: e, onCheckout: t }) => {
        const n = e.reduce((i, l) => i + Cp(l), 0),
            r = e.reduce((i, l) => i + l.pageCount * l.settings.copies, 0);
        return x.jsx("div", {
            className: "fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg",
            children: x.jsx("div", {
                className: "max-w-7xl mx-auto px-4 py-4",
                children: x.jsxs("div", {
                    className: "flex items-center justify-between",
                    children: [
                        x.jsxs("div", {
                            className: "flex items-center gap-4",
                            children: [
                                x.jsx(gv, { className: "text-green-600 w-6 h-6" }),
                                x.jsxs("div", {
                                    children: [
                                        x.jsxs("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                x.jsxs("p", { className: "text-sm text-gray-600", children: [e.length, " ", e.length === 1 ? "file" : "files"] }),
                                                x.jsx("span", { className: "text-gray-300", children: "•" }),
                                                x.jsxs("p", { className: "text-sm text-gray-600", children: [r, " ", r === 1 ? "page" : "pages"] }),
                                            ],
                                        }),
                                        x.jsxs("p", { className: "text-2xl font-bold", children: ["₹", n.toFixed(2)] }),
                                    ],
                                }),
                            ],
                        }),
                        x.jsxs("button", {
                            onClick: t,
                            className: "flex items-center gap-2 bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors",
                            children: [x.jsx(sv, { className: "w-5 h-5" }), "Proceed to Checkout"],
                        }),
                    ],
                }),
            }),
        });
    },
    kv = [
        { icon: ov, title: "Delivery in minutes", description: "Instant deliveries under 30 minutes" },
        { icon: vv, title: "Safe and secure", description: "We delete your files once delivered" },
        {
            icon: uv,
            title: "Affordable Printing",
            description: `B&W: ₹2 single / ₹4 double
Color: ₹10 single / ₹20 double`,
        },
        { icon: mv, title: "No minimum order", description: "Order as many pages as few as you want" },
    ],
    Sv = () =>
        x.jsxs("div", {
            className: "py-12",
            children: [
                x.jsx("h2", { className: "text-3xl font-bold text-center mb-12", children: "Why try print store?" }),
                x.jsx("div", {
                    className: "grid md:grid-cols-4 gap-8",
                    children: kv.map((e, t) =>
                        x.jsxs(
                            "div",
                            {
                                className: "bg-white p-6 rounded-lg shadow-md text-center",
                                children: [
                                    x.jsx("div", { className: "flex justify-center mb-4", children: x.jsx(e.icon, { className: "w-12 h-12 text-green-600" }) }),
                                    x.jsx("h3", { className: "font-semibold mb-2", children: e.title }),
                                    x.jsx("p", { className: "text-sm text-gray-600 whitespace-pre-line", children: e.description }),
                                ],
                            },
                            t
                        )
                    ),
                }),
            ],
        });
Np.workerSrc = new URL("/assets/pdf.worker-BgryrOlp.mjs", import.meta.url).toString();
const Ev = { copies: 1, color: "bw", orientation: "portrait", doubleSided: !1, paperType: "standard" };
function Cv() {
    const [e, t] = F.useState([]),
        n = async (a) => {
            if (!a.type.includes("pdf")) return { pageCount: 1, thumbnail: "" };
            try {
                const s = await a.arrayBuffer(),
                    u = await Dp({ data: s }).promise,
                    m = u.numPages,
                    v = await u.getPage(1),
                    f = v.getViewport({ scale: 1 }),
                    y = document.createElement("canvas"),
                    w = y.getContext("2d");
                if (!w) throw new Error("Could not get canvas context");
                (y.width = f.width), (y.height = f.height), await v.render({ canvasContext: w, viewport: f }).promise;
                const k = y.toDataURL("image/png");
                return { pageCount: m, thumbnail: k };
            } catch (s) {
                console.error("Error reading PDF:", s);
                let u = "Could not read PDF file. ";
                return s instanceof Error ? (u += s.message) : (u += "It might be corrupted or password protected."), { pageCount: 1, thumbnail: "", error: u };
            }
        },
        r = async (a) => {
            const s = await Promise.all(
                a.map(async (u) => {
                    const { pageCount: m, thumbnail: v, error: f } = await n(u);
                    return { ...u, id: `${u.name}-${Date.now()}-${Math.random()}`, pageCount: m, error: f, settings: { ...Ev }, preview: v, lastModified: u.lastModified };
                })
            );
            t((u) => [...u, ...s]);
        },
        i = (a) => {
            t((s) => s.filter((u) => u.id !== a));
        },
        l = (a, s) => {
            t((u) => u.map((m) => (m.id === a ? { ...m, settings: { ...m.settings, ...s } } : m)));
        },
        o = () => {
            const a = { totalFiles: e.length, totalPages: e.reduce((s, u) => s + u.pageCount * u.settings.copies, 0), files: e.map((s) => ({ name: s.name, pageCount: s.pageCount, settings: s.settings, preview: s.preview })) };
            console.log("Order Summary:", a), console.log("Complete Files Data:", e);
        };
    return x.jsxs("div", {
        className: "min-h-screen bg-gray-50 pb-32",
        children: [
            x.jsxs("div", {
                className: "max-w-7xl mx-auto px-4 py-8",
                children: [
                    x.jsxs("div", {
                        className: "text-center mb-8",
                        children: [x.jsx("h1", { className: "text-4xl font-bold mb-2", children: "Print Store" }), x.jsx("p", { className: "text-gray-600", children: "Professional PDF Printing Service" })],
                    }),
                    x.jsxs("div", {
                        className: "grid md:grid-cols-2 gap-8 mb-12",
                        children: [
                            x.jsx(xv, { onFilesAdded: r }),
                            x.jsx("div", {
                                className: "flex items-center justify-center",
                                children: x.jsx("img", {
                                    src: "https://images.unsplash.com/photo-1562564055-71e051d33c19?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3",
                                    alt: "Professional Printing Service",
                                    className: "max-w-full h-auto rounded-lg shadow-lg",
                                }),
                            }),
                        ],
                    }),
                    e.length > 0 &&
                        x.jsxs("div", {
                            className: "space-y-6 mb-12",
                            children: [
                                x.jsx("h2", { className: "text-2xl font-semibold", children: "Your Files" }),
                                x.jsx("div", { className: "grid gap-6", children: e.map((a) => x.jsx(yv, { file: a, onRemove: i, onSettingsChange: l }, a.id)) }),
                            ],
                        }),
                    x.jsx(Sv, {}),
                ],
            }),
            e.length > 0 && x.jsx(wv, { files: e, onCheckout: o }),
        ],
    });
}
up(document.getElementById("root")).render(x.jsx(F.StrictMode, { children: x.jsx(Cv, {}) }));
