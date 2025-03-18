var Yf = Object.defineProperty;
var Rd = (d) => {
    throw TypeError(d);
};
var Kf = (d, t, e) => (t in d ? Yf(d, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : (d[t] = e));
var O = (d, t, e) => Kf(d, typeof t != "symbol" ? t + "" : t, e),
    Uh = (d, t, e) => t.has(d) || Rd("Cannot " + e);
var n = (d, t, e) => (Uh(d, t, "read from private field"), e ? e.call(d) : t.get(d)),
    m = (d, t, e) => (t.has(d) ? Rd("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(d) : t.set(d, e)),
    f = (d, t, e, s) => (Uh(d, t, "write to private field"), s ? s.call(d, e) : t.set(d, e), e),
    b = (d, t, e) => (Uh(d, t, "access private method"), e);
var Jt = (d, t, e, s) => ({
    set _(i) {
        f(d, t, i, e);
    },
    get _() {
        return n(d, t, s);
    },
});
var qa = {};
qa.d = (d, t) => {
    for (var e in t) qa.o(t, e) && !qa.o(d, e) && Object.defineProperty(d, e, { enumerable: !0, get: t[e] });
};
qa.o = (d, t) => Object.prototype.hasOwnProperty.call(d, t);
var G = (globalThis.pdfjsLib = {});
qa.d(G, {
    AbortException: () => Vi,
    AnnotationEditorLayer: () => rd,
    AnnotationEditorParamsType: () => Y,
    AnnotationEditorType: () => U,
    AnnotationEditorUIManager: () => rr,
    AnnotationLayer: () => jg,
    AnnotationMode: () => ui,
    ColorPicker: () => fh,
    DOMSVGFactory: () => yd,
    DrawLayer: () => ld,
    FeatureTest: () => ne,
    GlobalWorkerOptions: () => ai,
    ImageKind: () => Ll,
    InvalidPDFException: () => Jh,
    MissingPDFException: () => Ka,
    OPS: () => je,
    OutputScale: () => tc,
    PDFDataRangeTransport: () => Ku,
    PDFDateString: () => gd,
    PDFWorker: () => vr,
    PasswordResponses: () => tp,
    PermissionFlag: () => Zf,
    PixelsPerInch: () => ji,
    RenderingCancelledException: () => fd,
    TextLayer: () => Qa,
    TouchManager: () => dh,
    UnexpectedResponseException: () => lh,
    Util: () => F,
    VerbosityLevel: () => Fh,
    XfaLayer: () => Ju,
    build: () => xg,
    createValidAbsoluteUrl: () => np,
    fetchData: () => Bh,
    getDocument: () => mg,
    getFilenameFromUrl: () => fp,
    getPdfFilenameFromUrl: () => pp,
    getXfaPageViewport: () => gp,
    isDataScheme: () => $h,
    isPdfFile: () => pd,
    noContextMenu: () => rs,
    normalizeUnicode: () => cp,
    setLayerDimensions: () => nr,
    shadow: () => q,
    stopEvent: () => Me,
    version: () => Eg,
});
const Kt = typeof process == "object" && process + "" == "[object process]" && !process.versions.nw && !(process.versions.electron && process.type && process.type !== "browser"),
    Yd = [1, 0, 0, 1, 0, 0],
    Qh = [0.001, 0, 0, 0.001, 0, 0],
    Qf = 1e7,
    Vh = 1.35,
    Re = { ANY: 1, DISPLAY: 2, PRINT: 4, SAVE: 8, ANNOTATIONS_FORMS: 16, ANNOTATIONS_STORAGE: 32, ANNOTATIONS_DISABLE: 64, IS_EDITING: 128, OPLIST: 256 },
    ui = { DISABLE: 0, ENABLE: 1, ENABLE_FORMS: 2, ENABLE_STORAGE: 3 },
    Jf = "pdfjs_internal_editor_",
    U = { DISABLE: -1, NONE: 0, FREETEXT: 3, HIGHLIGHT: 9, STAMP: 13, INK: 15 },
    Y = {
        RESIZE: 1,
        CREATE: 2,
        FREETEXT_SIZE: 11,
        FREETEXT_COLOR: 12,
        FREETEXT_OPACITY: 13,
        INK_COLOR: 21,
        INK_THICKNESS: 22,
        INK_OPACITY: 23,
        HIGHLIGHT_COLOR: 31,
        HIGHLIGHT_DEFAULT_COLOR: 32,
        HIGHLIGHT_THICKNESS: 33,
        HIGHLIGHT_FREE: 34,
        HIGHLIGHT_SHOW_ALL: 35,
        DRAW_STEP: 41,
    },
    Zf = { PRINT: 4, MODIFY_CONTENTS: 8, COPY: 16, MODIFY_ANNOTATIONS: 32, FILL_INTERACTIVE_FORMS: 256, COPY_FOR_ACCESSIBILITY: 512, ASSEMBLE: 1024, PRINT_HIGH_QUALITY: 2048 },
    zt = { FILL: 0, STROKE: 1, FILL_STROKE: 2, INVISIBLE: 3, FILL_ADD_TO_PATH: 4, STROKE_ADD_TO_PATH: 5, FILL_STROKE_ADD_TO_PATH: 6, ADD_TO_PATH: 7, FILL_STROKE_MASK: 3, ADD_TO_PATH_FLAG: 4 },
    Ll = { GRAYSCALE_1BPP: 1, RGB_24BPP: 2, RGBA_32BPP: 3 },
    Et = {
        TEXT: 1,
        LINK: 2,
        FREETEXT: 3,
        LINE: 4,
        SQUARE: 5,
        CIRCLE: 6,
        POLYGON: 7,
        POLYLINE: 8,
        HIGHLIGHT: 9,
        UNDERLINE: 10,
        SQUIGGLY: 11,
        STRIKEOUT: 12,
        STAMP: 13,
        CARET: 14,
        INK: 15,
        POPUP: 16,
        FILEATTACHMENT: 17,
        SOUND: 18,
        MOVIE: 19,
        WIDGET: 20,
        SCREEN: 21,
        PRINTERMARK: 22,
        TRAPNET: 23,
        WATERMARK: 24,
        THREED: 25,
        REDACT: 26,
    },
    Ra = { SOLID: 1, DASHED: 2, BEVELED: 3, INSET: 4, UNDERLINE: 5 },
    Fh = { ERRORS: 0, WARNINGS: 1, INFOS: 5 },
    je = {
        dependency: 1,
        setLineWidth: 2,
        setLineCap: 3,
        setLineJoin: 4,
        setMiterLimit: 5,
        setDash: 6,
        setRenderingIntent: 7,
        setFlatness: 8,
        setGState: 9,
        save: 10,
        restore: 11,
        transform: 12,
        moveTo: 13,
        lineTo: 14,
        curveTo: 15,
        curveTo2: 16,
        curveTo3: 17,
        closePath: 18,
        rectangle: 19,
        stroke: 20,
        closeStroke: 21,
        fill: 22,
        eoFill: 23,
        fillStroke: 24,
        eoFillStroke: 25,
        closeFillStroke: 26,
        closeEOFillStroke: 27,
        endPath: 28,
        clip: 29,
        eoClip: 30,
        beginText: 31,
        endText: 32,
        setCharSpacing: 33,
        setWordSpacing: 34,
        setHScale: 35,
        setLeading: 36,
        setFont: 37,
        setTextRenderingMode: 38,
        setTextRise: 39,
        moveText: 40,
        setLeadingMoveText: 41,
        setTextMatrix: 42,
        nextLine: 43,
        showText: 44,
        showSpacedText: 45,
        nextLineShowText: 46,
        nextLineSetSpacingShowText: 47,
        setCharWidth: 48,
        setCharWidthAndBounds: 49,
        setStrokeColorSpace: 50,
        setFillColorSpace: 51,
        setStrokeColor: 52,
        setStrokeColorN: 53,
        setFillColor: 54,
        setFillColorN: 55,
        setStrokeGray: 56,
        setFillGray: 57,
        setStrokeRGBColor: 58,
        setFillRGBColor: 59,
        setStrokeCMYKColor: 60,
        setFillCMYKColor: 61,
        shadingFill: 62,
        beginInlineImage: 63,
        beginImageData: 64,
        endInlineImage: 65,
        paintXObject: 66,
        markPoint: 67,
        markPointProps: 68,
        beginMarkedContent: 69,
        beginMarkedContentProps: 70,
        endMarkedContent: 71,
        beginCompat: 72,
        endCompat: 73,
        paintFormXObjectBegin: 74,
        paintFormXObjectEnd: 75,
        beginGroup: 76,
        endGroup: 77,
        beginAnnotation: 80,
        endAnnotation: 81,
        paintImageMaskXObject: 83,
        paintImageMaskXObjectGroup: 84,
        paintImageXObject: 85,
        paintInlineImageXObject: 86,
        paintInlineImageXObjectGroup: 87,
        paintImageXObjectRepeat: 88,
        paintImageMaskXObjectRepeat: 89,
        paintSolidColorImageMask: 90,
        constructPath: 91,
        setStrokeTransparent: 92,
        setFillTransparent: 93,
    },
    tp = { NEED_PASSWORD: 1, INCORRECT_PASSWORD: 2 };
let Nh = Fh.WARNINGS;
function ep(d) {
    Number.isInteger(d) && (Nh = d);
}
function sp() {
    return Nh;
}
function Oh(d) {
    Nh >= Fh.INFOS && console.log(`Info: ${d}`);
}
function V(d) {
    Nh >= Fh.WARNINGS && console.log(`Warning: ${d}`);
}
function nt(d) {
    throw new Error(d);
}
function vt(d, t) {
    d || nt(t);
}
function ip(d) {
    switch (d == null ? void 0 : d.protocol) {
        case "http:":
        case "https:":
        case "ftp:":
        case "mailto:":
        case "tel:":
            return !0;
        default:
            return !1;
    }
}
function np(d, t = null, e = null) {
    if (!d) return null;
    try {
        if (e && typeof d == "string") {
            if (e.addDefaultProtocol && d.startsWith("www.")) {
                const i = d.match(/\./g);
                (i == null ? void 0 : i.length) >= 2 && (d = `http://${d}`);
            }
            if (e.tryConvertEncoding)
                try {
                    d = hp(d);
                } catch {}
        }
        const s = t ? new URL(d, t) : new URL(d);
        if (ip(s)) return s;
    } catch {}
    return null;
}
function q(d, t, e, s = !1) {
    return Object.defineProperty(d, t, { value: e, enumerable: !s, configurable: !0, writable: !1 }), e;
}
const Xi = (function () {
    function t(e, s) {
        (this.message = e), (this.name = s);
    }
    return (t.prototype = new Error()), (t.constructor = t), t;
})();
class Pd extends Xi {
    constructor(t, e) {
        super(t, "PasswordException"), (this.code = e);
    }
}
class jh extends Xi {
    constructor(t, e) {
        super(t, "UnknownErrorException"), (this.details = e);
    }
}
class Jh extends Xi {
    constructor(t) {
        super(t, "InvalidPDFException");
    }
}
class Ka extends Xi {
    constructor(t) {
        super(t, "MissingPDFException");
    }
}
class lh extends Xi {
    constructor(t, e) {
        super(t, "UnexpectedResponseException"), (this.status = e);
    }
}
class rp extends Xi {
    constructor(t) {
        super(t, "FormatError");
    }
}
class Vi extends Xi {
    constructor(t) {
        super(t, "AbortException");
    }
}
function Kd(d) {
    (typeof d != "object" || (d == null ? void 0 : d.length) === void 0) && nt("Invalid argument for bytesToString");
    const t = d.length,
        e = 8192;
    if (t < e) return String.fromCharCode.apply(null, d);
    const s = [];
    for (let i = 0; i < t; i += e) {
        const r = Math.min(i + e, t),
            a = d.subarray(i, r);
        s.push(String.fromCharCode.apply(null, a));
    }
    return s.join("");
}
function Hh(d) {
    typeof d != "string" && nt("Invalid argument for stringToBytes");
    const t = d.length,
        e = new Uint8Array(t);
    for (let s = 0; s < t; ++s) e[s] = d.charCodeAt(s) & 255;
    return e;
}
function ap(d) {
    return String.fromCharCode((d >> 24) & 255, (d >> 16) & 255, (d >> 8) & 255, d & 255);
}
function dd(d) {
    const t = Object.create(null);
    for (const [e, s] of d) t[e] = s;
    return t;
}
function op() {
    const d = new Uint8Array(4);
    return (d[0] = 1), new Uint32Array(d.buffer, 0, 1)[0] === 1;
}
function lp() {
    try {
        return new Function(""), !0;
    } catch {
        return !1;
    }
}
class ne {
    static get isLittleEndian() {
        return q(this, "isLittleEndian", op());
    }
    static get isEvalSupported() {
        return q(this, "isEvalSupported", lp());
    }
    static get isOffscreenCanvasSupported() {
        return q(this, "isOffscreenCanvasSupported", typeof OffscreenCanvas < "u");
    }
    static get isImageDecoderSupported() {
        return q(this, "isImageDecoderSupported", typeof ImageDecoder < "u");
    }
    static get platform() {
        return typeof navigator < "u" && typeof (navigator == null ? void 0 : navigator.platform) == "string"
            ? q(this, "platform", {
                  isMac: navigator.platform.includes("Mac"),
                  isWindows: navigator.platform.includes("Win"),
                  isFirefox: typeof (navigator == null ? void 0 : navigator.userAgent) == "string" && navigator.userAgent.includes("Firefox"),
              })
            : q(this, "platform", { isMac: !1, isWindows: !1, isFirefox: !1 });
    }
    static get isCSSRoundSupported() {
        var t, e;
        return q(this, "isCSSRoundSupported", (e = (t = globalThis.CSS) == null ? void 0 : t.supports) == null ? void 0 : e.call(t, "width: round(1.5px, 1px)"));
    }
}
const Wh = Array.from(Array(256).keys(), (d) => d.toString(16).padStart(2, "0"));
var oi, Il, Zh;
class F {
    static makeHexColor(t, e, s) {
        return `#${Wh[t]}${Wh[e]}${Wh[s]}`;
    }
    static scaleMinMax(t, e) {
        let s;
        t[0]
            ? (t[0] < 0 && ((s = e[0]), (e[0] = e[2]), (e[2] = s)), (e[0] *= t[0]), (e[2] *= t[0]), t[3] < 0 && ((s = e[1]), (e[1] = e[3]), (e[3] = s)), (e[1] *= t[3]), (e[3] *= t[3]))
            : ((s = e[0]),
              (e[0] = e[1]),
              (e[1] = s),
              (s = e[2]),
              (e[2] = e[3]),
              (e[3] = s),
              t[1] < 0 && ((s = e[1]), (e[1] = e[3]), (e[3] = s)),
              (e[1] *= t[1]),
              (e[3] *= t[1]),
              t[2] < 0 && ((s = e[0]), (e[0] = e[2]), (e[2] = s)),
              (e[0] *= t[2]),
              (e[2] *= t[2])),
            (e[0] += t[4]),
            (e[1] += t[5]),
            (e[2] += t[4]),
            (e[3] += t[5]);
    }
    static transform(t, e) {
        return [t[0] * e[0] + t[2] * e[1], t[1] * e[0] + t[3] * e[1], t[0] * e[2] + t[2] * e[3], t[1] * e[2] + t[3] * e[3], t[0] * e[4] + t[2] * e[5] + t[4], t[1] * e[4] + t[3] * e[5] + t[5]];
    }
    static applyTransform(t, e) {
        const s = t[0] * e[0] + t[1] * e[2] + e[4],
            i = t[0] * e[1] + t[1] * e[3] + e[5];
        return [s, i];
    }
    static applyInverseTransform(t, e) {
        const s = e[0] * e[3] - e[1] * e[2],
            i = (t[0] * e[3] - t[1] * e[2] + e[2] * e[5] - e[4] * e[3]) / s,
            r = (-t[0] * e[1] + t[1] * e[0] + e[4] * e[1] - e[5] * e[0]) / s;
        return [i, r];
    }
    static getAxialAlignedBoundingBox(t, e) {
        const s = this.applyTransform(t, e),
            i = this.applyTransform(t.slice(2, 4), e),
            r = this.applyTransform([t[0], t[3]], e),
            a = this.applyTransform([t[2], t[1]], e);
        return [Math.min(s[0], i[0], r[0], a[0]), Math.min(s[1], i[1], r[1], a[1]), Math.max(s[0], i[0], r[0], a[0]), Math.max(s[1], i[1], r[1], a[1])];
    }
    static inverseTransform(t) {
        const e = t[0] * t[3] - t[1] * t[2];
        return [t[3] / e, -t[1] / e, -t[2] / e, t[0] / e, (t[2] * t[5] - t[4] * t[3]) / e, (t[4] * t[1] - t[5] * t[0]) / e];
    }
    static singularValueDecompose2dScale(t) {
        const e = [t[0], t[2], t[1], t[3]],
            s = t[0] * e[0] + t[1] * e[2],
            i = t[0] * e[1] + t[1] * e[3],
            r = t[2] * e[0] + t[3] * e[2],
            a = t[2] * e[1] + t[3] * e[3],
            o = (s + a) / 2,
            l = Math.sqrt((s + a) ** 2 - 4 * (s * a - r * i)) / 2,
            h = o + l || 1,
            c = o - l || 1;
        return [Math.sqrt(h), Math.sqrt(c)];
    }
    static normalizeRect(t) {
        const e = t.slice(0);
        return t[0] > t[2] && ((e[0] = t[2]), (e[2] = t[0])), t[1] > t[3] && ((e[1] = t[3]), (e[3] = t[1])), e;
    }
    static intersect(t, e) {
        const s = Math.max(Math.min(t[0], t[2]), Math.min(e[0], e[2])),
            i = Math.min(Math.max(t[0], t[2]), Math.max(e[0], e[2]));
        if (s > i) return null;
        const r = Math.max(Math.min(t[1], t[3]), Math.min(e[1], e[3])),
            a = Math.min(Math.max(t[1], t[3]), Math.max(e[1], e[3]));
        return r > a ? null : [s, r, i, a];
    }
    static bezierBoundingBox(t, e, s, i, r, a, o, l, h) {
        return (
            h ? ((h[0] = Math.min(h[0], t, o)), (h[1] = Math.min(h[1], e, l)), (h[2] = Math.max(h[2], t, o)), (h[3] = Math.max(h[3], e, l))) : (h = [Math.min(t, o), Math.min(e, l), Math.max(t, o), Math.max(e, l)]),
            b(this, oi, Zh).call(this, t, s, r, o, e, i, a, l, 3 * (-t + 3 * (s - r) + o), 6 * (t - 2 * s + r), 3 * (s - t), h),
            b(this, oi, Zh).call(this, t, s, r, o, e, i, a, l, 3 * (-e + 3 * (i - a) + l), 6 * (e - 2 * i + a), 3 * (i - e), h),
            h
        );
    }
}
(oi = new WeakSet()),
    (Il = function (t, e, s, i, r, a, o, l, h, c) {
        if (h <= 0 || h >= 1) return;
        const u = 1 - h,
            p = h * h,
            g = p * h,
            A = u * (u * (u * t + 3 * h * e) + 3 * p * s) + g * i,
            y = u * (u * (u * r + 3 * h * a) + 3 * p * o) + g * l;
        (c[0] = Math.min(c[0], A)), (c[1] = Math.min(c[1], y)), (c[2] = Math.max(c[2], A)), (c[3] = Math.max(c[3], y));
    }),
    (Zh = function (t, e, s, i, r, a, o, l, h, c, u, p) {
        if (Math.abs(h) < 1e-12) {
            Math.abs(c) >= 1e-12 && b(this, oi, Il).call(this, t, e, s, i, r, a, o, l, -u / c, p);
            return;
        }
        const g = c ** 2 - 4 * u * h;
        if (g < 0) return;
        const A = Math.sqrt(g),
            y = 2 * h;
        b(this, oi, Il).call(this, t, e, s, i, r, a, o, l, (-c + A) / y, p), b(this, oi, Il).call(this, t, e, s, i, r, a, o, l, (-c - A) / y, p);
    }),
    m(F, oi);
function hp(d) {
    return decodeURIComponent(escape(d));
}
let Xh = null,
    Md = null;
function cp(d) {
    return (
        Xh ||
            ((Xh = /([\u00a0\u00b5\u037e\u0eb3\u2000-\u200a\u202f\u2126\ufb00-\ufb04\ufb06\ufb20-\ufb36\ufb38-\ufb3c\ufb3e\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufba1\ufba4-\ufba9\ufbae-\ufbb1\ufbd3-\ufbdc\ufbde-\ufbe7\ufbea-\ufbf8\ufbfc-\ufbfd\ufc00-\ufc5d\ufc64-\ufcf1\ufcf5-\ufd3d\ufd88\ufdf4\ufdfa-\ufdfb\ufe71\ufe77\ufe79\ufe7b\ufe7d]+)|(\ufb05+)/gu),
            (Md = new Map([["ﬅ", "ſt"]]))),
        d.replaceAll(Xh, (t, e, s) => (e ? e.normalize("NFKC") : Md.get(s)))
    );
}
function dp() {
    if (typeof crypto.randomUUID == "function") return crypto.randomUUID();
    const d = new Uint8Array(32);
    return crypto.getRandomValues(d), Kd(d);
}
const ud = "pdfjs_internal_id_";
function up(d) {
    return Uint8Array.prototype.toBase64 ? d.toBase64() : btoa(Kd(d));
}
typeof Promise.try != "function" &&
    (Promise.try = function (d, ...t) {
        return new Promise((e) => {
            e(d(...t));
        });
    });
const Ms = "http://www.w3.org/2000/svg",
    Qi = class Qi {};
O(Qi, "CSS", 96), O(Qi, "PDF", 72), O(Qi, "PDF_TO_CSS_UNITS", Qi.CSS / Qi.PDF);
let ji = Qi;
async function Bh(d, t = "text") {
    if (La(d, document.baseURI)) {
        const e = await fetch(d);
        if (!e.ok) throw new Error(e.statusText);
        switch (t) {
            case "arraybuffer":
                return e.arrayBuffer();
            case "blob":
                return e.blob();
            case "json":
                return e.json();
        }
        return e.text();
    }
    return new Promise((e, s) => {
        const i = new XMLHttpRequest();
        i.open("GET", d, !0),
            (i.responseType = t),
            (i.onreadystatechange = () => {
                if (i.readyState === XMLHttpRequest.DONE) {
                    if (i.status === 200 || i.status === 0) {
                        switch (t) {
                            case "arraybuffer":
                            case "blob":
                            case "json":
                                e(i.response);
                                return;
                        }
                        e(i.responseText);
                        return;
                    }
                    s(new Error(i.statusText));
                }
            }),
            i.send(null);
    });
}
class xl {
    constructor({ viewBox: t, userUnit: e, scale: s, rotation: i, offsetX: r = 0, offsetY: a = 0, dontFlip: o = !1 }) {
        (this.viewBox = t), (this.userUnit = e), (this.scale = s), (this.rotation = i), (this.offsetX = r), (this.offsetY = a), (s *= e);
        const l = (t[2] + t[0]) / 2,
            h = (t[3] + t[1]) / 2;
        let c, u, p, g;
        switch (((i %= 360), i < 0 && (i += 360), i)) {
            case 180:
                (c = -1), (u = 0), (p = 0), (g = 1);
                break;
            case 90:
                (c = 0), (u = 1), (p = 1), (g = 0);
                break;
            case 270:
                (c = 0), (u = -1), (p = -1), (g = 0);
                break;
            case 0:
                (c = 1), (u = 0), (p = 0), (g = -1);
                break;
            default:
                throw new Error("PageViewport: Invalid rotation, must be a multiple of 90 degrees.");
        }
        o && ((p = -p), (g = -g));
        let A, y, v, w;
        c === 0
            ? ((A = Math.abs(h - t[1]) * s + r), (y = Math.abs(l - t[0]) * s + a), (v = (t[3] - t[1]) * s), (w = (t[2] - t[0]) * s))
            : ((A = Math.abs(l - t[0]) * s + r), (y = Math.abs(h - t[1]) * s + a), (v = (t[2] - t[0]) * s), (w = (t[3] - t[1]) * s)),
            (this.transform = [c * s, u * s, p * s, g * s, A - c * s * l - p * s * h, y - u * s * l - g * s * h]),
            (this.width = v),
            (this.height = w);
    }
    get rawDims() {
        const { userUnit: t, viewBox: e } = this,
            s = e.map((i) => i * t);
        return q(this, "rawDims", { pageWidth: s[2] - s[0], pageHeight: s[3] - s[1], pageX: s[0], pageY: s[1] });
    }
    clone({ scale: t = this.scale, rotation: e = this.rotation, offsetX: s = this.offsetX, offsetY: i = this.offsetY, dontFlip: r = !1 } = {}) {
        return new xl({ viewBox: this.viewBox.slice(), userUnit: this.userUnit, scale: t, rotation: e, offsetX: s, offsetY: i, dontFlip: r });
    }
    convertToViewportPoint(t, e) {
        return F.applyTransform([t, e], this.transform);
    }
    convertToViewportRectangle(t) {
        const e = F.applyTransform([t[0], t[1]], this.transform),
            s = F.applyTransform([t[2], t[3]], this.transform);
        return [e[0], e[1], s[0], s[1]];
    }
    convertToPdfPoint(t, e) {
        return F.applyInverseTransform([t, e], this.transform);
    }
}
class fd extends Xi {
    constructor(t, e = 0) {
        super(t, "RenderingCancelledException"), (this.extraDelay = e);
    }
}
function $h(d) {
    const t = d.length;
    let e = 0;
    for (; e < t && d[e].trim() === ""; ) e++;
    return d.substring(e, e + 5).toLowerCase() === "data:";
}
function pd(d) {
    return typeof d == "string" && /\.pdf$/i.test(d);
}
function fp(d) {
    return ([d] = d.split(/[#?]/, 1)), d.substring(d.lastIndexOf("/") + 1);
}
function pp(d, t = "document.pdf") {
    if (typeof d != "string") return t;
    if ($h(d)) return V('getPdfFilenameFromUrl: ignore "data:"-URL for performance reasons.'), t;
    const e = /^(?:(?:[^:]+:)?\/\/[^/]+)?([^?#]*)(\?[^#]*)?(#.*)?$/,
        s = /[^/?#=]+\.pdf\b(?!.*\.pdf\b)/i,
        i = e.exec(d);
    let r = s.exec(i[1]) || s.exec(i[2]) || s.exec(i[3]);
    if (r && ((r = r[0]), r.includes("%")))
        try {
            r = s.exec(decodeURIComponent(r))[0];
        } catch {}
    return r || t;
}
class kd {
    constructor() {
        O(this, "started", Object.create(null));
        O(this, "times", []);
    }
    time(t) {
        t in this.started && V(`Timer is already running for ${t}`), (this.started[t] = Date.now());
    }
    timeEnd(t) {
        t in this.started || V(`Timer has not been started for ${t}`), this.times.push({ name: t, start: this.started[t], end: Date.now() }), delete this.started[t];
    }
    toString() {
        const t = [];
        let e = 0;
        for (const { name: s } of this.times) e = Math.max(s.length, e);
        for (const { name: s, start: i, end: r } of this.times)
            t.push(`${s.padEnd(e)} ${r - i}ms
`);
        return t.join("");
    }
}
function La(d, t) {
    try {
        const { protocol: e } = t ? new URL(d, t) : new URL(d);
        return e === "http:" || e === "https:";
    } catch {
        return !1;
    }
}
function rs(d) {
    d.preventDefault();
}
function Me(d) {
    d.preventDefault(), d.stopPropagation();
}
var Za;
class gd {
    static toDateObject(t) {
        if (!t || typeof t != "string") return null;
        n(this, Za) || f(this, Za, new RegExp("^D:(\\d{4})(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?([Z|+|-])?(\\d{2})?'?(\\d{2})?'?"));
        const e = n(this, Za).exec(t);
        if (!e) return null;
        const s = parseInt(e[1], 10);
        let i = parseInt(e[2], 10);
        i = i >= 1 && i <= 12 ? i - 1 : 0;
        let r = parseInt(e[3], 10);
        r = r >= 1 && r <= 31 ? r : 1;
        let a = parseInt(e[4], 10);
        a = a >= 0 && a <= 23 ? a : 0;
        let o = parseInt(e[5], 10);
        o = o >= 0 && o <= 59 ? o : 0;
        let l = parseInt(e[6], 10);
        l = l >= 0 && l <= 59 ? l : 0;
        const h = e[7] || "Z";
        let c = parseInt(e[8], 10);
        c = c >= 0 && c <= 23 ? c : 0;
        let u = parseInt(e[9], 10) || 0;
        return (u = u >= 0 && u <= 59 ? u : 0), h === "-" ? ((a += c), (o += u)) : h === "+" && ((a -= c), (o -= u)), new Date(Date.UTC(s, i, r, a, o, l));
    }
}
(Za = new WeakMap()), m(gd, Za);
function gp(d, { scale: t = 1, rotation: e = 0 }) {
    const { width: s, height: i } = d.attributes.style,
        r = [0, 0, parseInt(s), parseInt(i)];
    return new xl({ viewBox: r, userUnit: 1, scale: t, rotation: e });
}
function md(d) {
    if (d.startsWith("#")) {
        const t = parseInt(d.slice(1), 16);
        return [(t & 16711680) >> 16, (t & 65280) >> 8, t & 255];
    }
    return d.startsWith("rgb(")
        ? d
              .slice(4, -1)
              .split(",")
              .map((t) => parseInt(t))
        : d.startsWith("rgba(")
        ? d
              .slice(5, -1)
              .split(",")
              .map((t) => parseInt(t))
              .slice(0, 3)
        : (V(`Not a valid color format: "${d}"`), [0, 0, 0]);
}
function mp(d) {
    const t = document.createElement("span");
    (t.style.visibility = "hidden"), document.body.append(t);
    for (const e of d.keys()) {
        t.style.color = e;
        const s = window.getComputedStyle(t).color;
        d.set(e, md(s));
    }
    t.remove();
}
function ct(d) {
    const { a: t, b: e, c: s, d: i, e: r, f: a } = d.getTransform();
    return [t, e, s, i, r, a];
}
function ls(d) {
    const { a: t, b: e, c: s, d: i, e: r, f: a } = d.getTransform().invertSelf();
    return [t, e, s, i, r, a];
}
function nr(d, t, e = !1, s = !0) {
    if (t instanceof xl) {
        const { pageWidth: i, pageHeight: r } = t.rawDims,
            { style: a } = d,
            o = ne.isCSSRoundSupported,
            l = `var(--scale-factor) * ${i}px`,
            h = `var(--scale-factor) * ${r}px`,
            c = o ? `round(down, ${l}, var(--scale-round-x, 1px))` : `calc(${l})`,
            u = o ? `round(down, ${h}, var(--scale-round-y, 1px))` : `calc(${h})`;
        !e || t.rotation % 180 === 0 ? ((a.width = c), (a.height = u)) : ((a.width = u), (a.height = c));
    }
    s && d.setAttribute("data-main-rotation", t.rotation);
}
class tc {
    constructor() {
        const t = window.devicePixelRatio || 1;
        (this.sx = t), (this.sy = t);
    }
    get scaled() {
        return this.sx !== 1 || this.sy !== 1;
    }
    get symmetric() {
        return this.sx === this.sy;
    }
}
var fi, Zi, We, tn, to, eo, mh, Qd, re, Jd, Zd, Dl, tu, sc;
const Is = class Is {
    constructor(t) {
        m(this, re);
        m(this, fi, null);
        m(this, Zi, null);
        m(this, We);
        m(this, tn, null);
        m(this, to, null);
        f(this, We, t),
            n(Is, eo) || f(Is, eo, Object.freeze({ freetext: "pdfjs-editor-remove-freetext-button", highlight: "pdfjs-editor-remove-highlight-button", ink: "pdfjs-editor-remove-ink-button", stamp: "pdfjs-editor-remove-stamp-button" }));
    }
    render() {
        const t = f(this, fi, document.createElement("div"));
        t.classList.add("editToolbar", "hidden"), t.setAttribute("role", "toolbar");
        const e = n(this, We)._uiManager._signal;
        t.addEventListener("contextmenu", rs, { signal: e }), t.addEventListener("pointerdown", b(Is, mh, Qd), { signal: e });
        const s = f(this, tn, document.createElement("div"));
        (s.className = "buttons"), t.append(s);
        const i = n(this, We).toolbarPosition;
        if (i) {
            const { style: r } = t,
                a = n(this, We)._uiManager.direction === "ltr" ? 1 - i[0] : i[0];
            (r.insetInlineEnd = `${100 * a}%`), (r.top = `calc(${100 * i[1]}% + var(--editor-toolbar-vert-offset))`);
        }
        return b(this, re, tu).call(this), t;
    }
    get div() {
        return n(this, fi);
    }
    hide() {
        var t;
        n(this, fi).classList.add("hidden"), (t = n(this, Zi)) == null || t.hideDropdown();
    }
    show() {
        var t;
        n(this, fi).classList.remove("hidden"), (t = n(this, to)) == null || t.shown();
    }
    async addAltText(t) {
        const e = await t.render();
        b(this, re, Dl).call(this, e), n(this, tn).prepend(e, n(this, re, sc)), f(this, to, t);
    }
    addColorPicker(t) {
        f(this, Zi, t);
        const e = t.renderButton();
        b(this, re, Dl).call(this, e), n(this, tn).prepend(e, n(this, re, sc));
    }
    remove() {
        var t;
        n(this, fi).remove(), (t = n(this, Zi)) == null || t.destroy(), f(this, Zi, null);
    }
};
(fi = new WeakMap()),
    (Zi = new WeakMap()),
    (We = new WeakMap()),
    (tn = new WeakMap()),
    (to = new WeakMap()),
    (eo = new WeakMap()),
    (mh = new WeakSet()),
    (Qd = function (t) {
        t.stopPropagation();
    }),
    (re = new WeakSet()),
    (Jd = function (t) {
        (n(this, We)._focusEventsAllowed = !1), Me(t);
    }),
    (Zd = function (t) {
        (n(this, We)._focusEventsAllowed = !0), Me(t);
    }),
    (Dl = function (t) {
        const e = n(this, We)._uiManager._signal;
        t.addEventListener("focusin", b(this, re, Jd).bind(this), { capture: !0, signal: e }), t.addEventListener("focusout", b(this, re, Zd).bind(this), { capture: !0, signal: e }), t.addEventListener("contextmenu", rs, { signal: e });
    }),
    (tu = function () {
        const { editorType: t, _uiManager: e } = n(this, We),
            s = document.createElement("button");
        (s.className = "delete"),
            (s.tabIndex = 0),
            s.setAttribute("data-l10n-id", n(Is, eo)[t]),
            b(this, re, Dl).call(this, s),
            s.addEventListener(
                "click",
                (i) => {
                    e.delete();
                },
                { signal: e._signal }
            ),
            n(this, tn).append(s);
    }),
    (sc = function () {
        const t = document.createElement("div");
        return (t.className = "divider"), t;
    }),
    m(Is, mh),
    m(Is, eo, null);
let ec = Is;
var so, en, sn, Wi, eu, su, iu;
class bp {
    constructor(t) {
        m(this, Wi);
        m(this, so, null);
        m(this, en, null);
        m(this, sn);
        f(this, sn, t);
    }
    show(t, e, s) {
        const [i, r] = b(this, Wi, su).call(this, e, s),
            { style: a } = n(this, en) || f(this, en, b(this, Wi, eu).call(this));
        t.append(n(this, en)), (a.insetInlineEnd = `${100 * i}%`), (a.top = `calc(${100 * r}% + var(--editor-toolbar-vert-offset))`);
    }
    hide() {
        n(this, en).remove();
    }
}
(so = new WeakMap()),
    (en = new WeakMap()),
    (sn = new WeakMap()),
    (Wi = new WeakSet()),
    (eu = function () {
        const t = f(this, en, document.createElement("div"));
        (t.className = "editToolbar"), t.setAttribute("role", "toolbar"), t.addEventListener("contextmenu", rs, { signal: n(this, sn)._signal });
        const e = f(this, so, document.createElement("div"));
        return (e.className = "buttons"), t.append(e), b(this, Wi, iu).call(this), t;
    }),
    (su = function (t, e) {
        let s = 0,
            i = 0;
        for (const r of t) {
            const a = r.y + r.height;
            if (a < s) continue;
            const o = r.x + (e ? r.width : 0);
            if (a > s) {
                (i = o), (s = a);
                continue;
            }
            e ? o > i && (i = o) : o < i && (i = o);
        }
        return [e ? 1 - i : i, s];
    }),
    (iu = function () {
        const t = document.createElement("button");
        (t.className = "highlightButton"), (t.tabIndex = 0), t.setAttribute("data-l10n-id", "pdfjs-highlight-floating-button1");
        const e = document.createElement("span");
        t.append(e), (e.className = "visuallyHidden"), e.setAttribute("data-l10n-id", "pdfjs-highlight-floating-button-label");
        const s = n(this, sn)._signal;
        t.addEventListener("contextmenu", rs, { signal: s }),
            t.addEventListener(
                "click",
                () => {
                    n(this, sn).highlightSelection("floating_button");
                },
                { signal: s }
            ),
            n(this, so).append(t);
    });
function hh(d, t, e) {
    for (const s of e) t.addEventListener(s, d[s].bind(d));
}
var bh;
class Ap {
    constructor() {
        m(this, bh, 0);
    }
    get id() {
        return `${Jf}${Jt(this, bh)._++}`;
    }
}
bh = new WeakMap();
var _r, io, jt, Sr, Fl;
const vd = class vd {
    constructor() {
        m(this, Sr);
        m(this, _r, dp());
        m(this, io, 0);
        m(this, jt, null);
    }
    static get _isSVGFittingCanvas() {
        const t = 'data:image/svg+xml;charset=UTF-8,<svg viewBox="0 0 1 1" width="1" height="1" xmlns="http://www.w3.org/2000/svg"><rect width="1" height="1" style="fill:red;"/></svg>',
            s = new OffscreenCanvas(1, 3).getContext("2d", { willReadFrequently: !0 }),
            i = new Image();
        i.src = t;
        const r = i.decode().then(() => (s.drawImage(i, 0, 0, 1, 1, 0, 0, 1, 3), new Uint32Array(s.getImageData(0, 0, 1, 1).data.buffer)[0] === 0));
        return q(this, "_isSVGFittingCanvas", r);
    }
    async getFromFile(t) {
        const { lastModified: e, name: s, size: i, type: r } = t;
        return b(this, Sr, Fl).call(this, `${e}_${s}_${i}_${r}`, t);
    }
    async getFromUrl(t) {
        return b(this, Sr, Fl).call(this, t, t);
    }
    async getFromBlob(t, e) {
        const s = await e;
        return b(this, Sr, Fl).call(this, t, s);
    }
    async getFromId(t) {
        n(this, jt) || f(this, jt, new Map());
        const e = n(this, jt).get(t);
        if (!e) return null;
        if (e.bitmap) return (e.refCounter += 1), e;
        if (e.file) return this.getFromFile(e.file);
        if (e.blobPromise) {
            const { blobPromise: s } = e;
            return delete e.blobPromise, this.getFromBlob(e.id, s);
        }
        return this.getFromUrl(e.url);
    }
    getFromCanvas(t, e) {
        n(this, jt) || f(this, jt, new Map());
        let s = n(this, jt).get(t);
        if (s != null && s.bitmap) return (s.refCounter += 1), s;
        const i = new OffscreenCanvas(e.width, e.height);
        return i.getContext("2d").drawImage(e, 0, 0), (s = { bitmap: i.transferToImageBitmap(), id: `image_${n(this, _r)}_${Jt(this, io)._++}`, refCounter: 1, isSvg: !1 }), n(this, jt).set(t, s), n(this, jt).set(s.id, s), s;
    }
    getSvgUrl(t) {
        const e = n(this, jt).get(t);
        return e != null && e.isSvg ? e.svgUrl : null;
    }
    deleteId(t) {
        var i;
        n(this, jt) || f(this, jt, new Map());
        const e = n(this, jt).get(t);
        if (!e || ((e.refCounter -= 1), e.refCounter !== 0)) return;
        const { bitmap: s } = e;
        if (!e.url && !e.file) {
            const r = new OffscreenCanvas(s.width, s.height);
            r.getContext("bitmaprenderer").transferFromImageBitmap(s), (e.blobPromise = r.convertToBlob());
        }
        (i = s.close) == null || i.call(s), (e.bitmap = null);
    }
    isValidId(t) {
        return t.startsWith(`image_${n(this, _r)}_`);
    }
};
(_r = new WeakMap()),
    (io = new WeakMap()),
    (jt = new WeakMap()),
    (Sr = new WeakSet()),
    (Fl = async function (t, e) {
        n(this, jt) || f(this, jt, new Map());
        let s = n(this, jt).get(t);
        if (s === null) return null;
        if (s != null && s.bitmap) return (s.refCounter += 1), s;
        try {
            s || (s = { bitmap: null, id: `image_${n(this, _r)}_${Jt(this, io)._++}`, refCounter: 0, isSvg: !1 });
            let i;
            if ((typeof e == "string" ? ((s.url = e), (i = await Bh(e, "blob"))) : e instanceof File ? (i = s.file = e) : e instanceof Blob && (i = e), i.type === "image/svg+xml")) {
                const r = vd._isSVGFittingCanvas,
                    a = new FileReader(),
                    o = new Image(),
                    l = new Promise((h, c) => {
                        (o.onload = () => {
                            (s.bitmap = o), (s.isSvg = !0), h();
                        }),
                            (a.onload = async () => {
                                const u = (s.svgUrl = a.result);
                                o.src = (await r) ? `${u}#svgView(preserveAspectRatio(none))` : u;
                            }),
                            (o.onerror = a.onerror = c);
                    });
                a.readAsDataURL(i), await l;
            } else s.bitmap = await createImageBitmap(i);
            s.refCounter = 1;
        } catch (i) {
            V(i), (s = null);
        }
        return n(this, jt).set(t, s), s && n(this, jt).set(s.id, s), s;
    });
let ic = vd;
var bt, pi, no, ut;
class yp {
    constructor(t = 128) {
        m(this, bt, []);
        m(this, pi, !1);
        m(this, no);
        m(this, ut, -1);
        f(this, no, t);
    }
    add({ cmd: t, undo: e, post: s, mustExec: i, type: r = NaN, overwriteIfSameType: a = !1, keepUndo: o = !1 }) {
        if ((i && t(), n(this, pi))) return;
        const l = { cmd: t, undo: e, post: s, type: r };
        if (n(this, ut) === -1) {
            n(this, bt).length > 0 && (n(this, bt).length = 0), f(this, ut, 0), n(this, bt).push(l);
            return;
        }
        if (a && n(this, bt)[n(this, ut)].type === r) {
            o && (l.undo = n(this, bt)[n(this, ut)].undo), (n(this, bt)[n(this, ut)] = l);
            return;
        }
        const h = n(this, ut) + 1;
        h === n(this, no) ? n(this, bt).splice(0, 1) : (f(this, ut, h), h < n(this, bt).length && n(this, bt).splice(h)), n(this, bt).push(l);
    }
    undo() {
        if (n(this, ut) === -1) return;
        f(this, pi, !0);
        const { undo: t, post: e } = n(this, bt)[n(this, ut)];
        t(), e == null || e(), f(this, pi, !1), f(this, ut, n(this, ut) - 1);
    }
    redo() {
        if (n(this, ut) < n(this, bt).length - 1) {
            f(this, ut, n(this, ut) + 1), f(this, pi, !0);
            const { cmd: t, post: e } = n(this, bt)[n(this, ut)];
            t(), e == null || e(), f(this, pi, !1);
        }
    }
    hasSomethingToUndo() {
        return n(this, ut) !== -1;
    }
    hasSomethingToRedo() {
        return n(this, ut) < n(this, bt).length - 1;
    }
    cleanType(t) {
        if (n(this, ut) !== -1) {
            for (let e = n(this, ut); e >= 0; e--)
                if (n(this, bt)[e].type !== t) {
                    n(this, bt).splice(e + 1, n(this, ut) - e), f(this, ut, e);
                    return;
                }
            (n(this, bt).length = 0), f(this, ut, -1);
        }
    }
    destroy() {
        f(this, bt, null);
    }
}
(bt = new WeakMap()), (pi = new WeakMap()), (no = new WeakMap()), (ut = new WeakMap());
var Ah, nu;
class Cl {
    constructor(t) {
        m(this, Ah);
        (this.buffer = []), (this.callbacks = new Map()), (this.allKeys = new Set());
        const { isMac: e } = ne.platform;
        for (const [s, i, r = {}] of t)
            for (const a of s) {
                const o = a.startsWith("mac+");
                e && o ? (this.callbacks.set(a.slice(4), { callback: i, options: r }), this.allKeys.add(a.split("+").at(-1))) : !e && !o && (this.callbacks.set(a, { callback: i, options: r }), this.allKeys.add(a.split("+").at(-1)));
            }
    }
    exec(t, e) {
        if (!this.allKeys.has(e.key)) return;
        const s = this.callbacks.get(b(this, Ah, nu).call(this, e));
        if (!s) return;
        const {
            callback: i,
            options: { bubbles: r = !1, args: a = [], checker: o = null },
        } = s;
        (o && !o(t, e)) || (i.bind(t, ...a, e)(), r || Me(e));
    }
}
(Ah = new WeakSet()),
    (nu = function (t) {
        t.altKey && this.buffer.push("alt"), t.ctrlKey && this.buffer.push("ctrl"), t.metaKey && this.buffer.push("meta"), t.shiftKey && this.buffer.push("shift"), this.buffer.push(t.key);
        const e = this.buffer.join("+");
        return (this.buffer.length = 0), e;
    });
const yh = class yh {
    get _colors() {
        const t = new Map([
            ["CanvasText", null],
            ["Canvas", null],
        ]);
        return mp(t), q(this, "_colors", t);
    }
    convert(t) {
        const e = md(t);
        if (!window.matchMedia("(forced-colors: active)").matches) return e;
        for (const [s, i] of this._colors) if (i.every((r, a) => r === e[a])) return yh._colorsMapping.get(s);
        return e;
    }
    getHexCode(t) {
        const e = this._colors.get(t);
        return e ? F.makeHexColor(...e) : t;
    }
};
O(
    yh,
    "_colorsMapping",
    new Map([
        ["CanvasText", [0, 0, 0]],
        ["Canvas", [255, 255, 255]],
    ])
);
let nc = yh;
var Er,
    me,
    Ct,
    Ft,
    xr,
    Fs,
    Cr,
    De,
    gi,
    nn,
    Tr,
    rn,
    ds,
    Xe,
    an,
    ro,
    ao,
    Rr,
    oo,
    us,
    mi,
    Pr,
    bi,
    fs,
    wh,
    Ai,
    lo,
    yi,
    on,
    ho,
    co,
    Pt,
    tt,
    Ns,
    ln,
    uo,
    fo,
    wi,
    ps,
    Os,
    po,
    Fe,
    R,
    Nl,
    rc,
    ru,
    au,
    Ol,
    ou,
    lu,
    hu,
    ac,
    cu,
    oc,
    lc,
    du,
    Zt,
    ks,
    uu,
    fu,
    hc,
    pu,
    Ia,
    cc;
const Ar = class Ar {
    constructor(t, e, s, i, r, a, o, l, h, c, u, p, g) {
        m(this, R);
        m(this, Er, new AbortController());
        m(this, me, null);
        m(this, Ct, new Map());
        m(this, Ft, new Map());
        m(this, xr, null);
        m(this, Fs, null);
        m(this, Cr, null);
        m(this, De, new yp());
        m(this, gi, null);
        m(this, nn, null);
        m(this, Tr, 0);
        m(this, rn, new Set());
        m(this, ds, null);
        m(this, Xe, null);
        m(this, an, new Set());
        O(this, "_editorUndoBar", null);
        m(this, ro, !1);
        m(this, ao, !1);
        m(this, Rr, !1);
        m(this, oo, null);
        m(this, us, null);
        m(this, mi, null);
        m(this, Pr, null);
        m(this, bi, !1);
        m(this, fs, null);
        m(this, wh, new Ap());
        m(this, Ai, !1);
        m(this, lo, !1);
        m(this, yi, null);
        m(this, on, null);
        m(this, ho, null);
        m(this, co, null);
        m(this, Pt, U.NONE);
        m(this, tt, new Set());
        m(this, Ns, null);
        m(this, ln, null);
        m(this, uo, null);
        m(this, fo, { isEditing: !1, isEmpty: !0, hasSomethingToUndo: !1, hasSomethingToRedo: !1, hasSelectedEditor: !1, hasSelectedText: !1 });
        m(this, wi, [0, 0]);
        m(this, ps, null);
        m(this, Os, null);
        m(this, po, null);
        m(this, Fe, null);
        const A = (this._signal = n(this, Er).signal);
        f(this, Os, t),
            f(this, po, e),
            f(this, xr, s),
            (this._eventBus = i),
            i._on("editingaction", this.onEditingAction.bind(this), { signal: A }),
            i._on("pagechanging", this.onPageChanging.bind(this), { signal: A }),
            i._on("scalechanging", this.onScaleChanging.bind(this), { signal: A }),
            i._on("rotationchanging", this.onRotationChanging.bind(this), { signal: A }),
            i._on("setpreference", this.onSetPreference.bind(this), { signal: A }),
            i._on("switchannotationeditorparams", (y) => this.updateParams(y.type, y.value), { signal: A }),
            b(this, R, ou).call(this),
            b(this, R, du).call(this),
            b(this, R, ac).call(this),
            f(this, Fs, r.annotationStorage),
            f(this, oo, r.filterFactory),
            f(this, ln, a),
            f(this, Pr, o || null),
            f(this, ro, l),
            f(this, ao, h),
            f(this, Rr, c),
            f(this, co, u || null),
            (this.viewParameters = { realScale: ji.PDF_TO_CSS_UNITS, rotation: 0 }),
            (this.isShiftKeyDown = !1),
            (this._editorUndoBar = p || null),
            (this._supportsPinchToZoom = g !== !1);
    }
    static get _keyboardManager() {
        const t = Ar.prototype,
            e = (a) => n(a, Os).contains(document.activeElement) && document.activeElement.tagName !== "BUTTON" && a.hasSomethingToControl(),
            s = (a, { target: o }) => {
                if (o instanceof HTMLInputElement) {
                    const { type: l } = o;
                    return l !== "text" && l !== "number";
                }
                return !0;
            },
            i = this.TRANSLATE_SMALL,
            r = this.TRANSLATE_BIG;
        return q(
            this,
            "_keyboardManager",
            new Cl([
                [["ctrl+a", "mac+meta+a"], t.selectAll, { checker: s }],
                [["ctrl+z", "mac+meta+z"], t.undo, { checker: s }],
                [["ctrl+y", "ctrl+shift+z", "mac+meta+shift+z", "ctrl+shift+Z", "mac+meta+shift+Z"], t.redo, { checker: s }],
                [["Backspace", "alt+Backspace", "ctrl+Backspace", "shift+Backspace", "mac+Backspace", "mac+alt+Backspace", "mac+ctrl+Backspace", "Delete", "ctrl+Delete", "shift+Delete", "mac+Delete"], t.delete, { checker: s }],
                [["Enter", "mac+Enter"], t.addNewEditorFromKeyboard, { checker: (a, { target: o }) => !(o instanceof HTMLButtonElement) && n(a, Os).contains(o) && !a.isEnterHandled }],
                [[" ", "mac+ "], t.addNewEditorFromKeyboard, { checker: (a, { target: o }) => !(o instanceof HTMLButtonElement) && n(a, Os).contains(document.activeElement) }],
                [["Escape", "mac+Escape"], t.unselectAll],
                [["ArrowLeft", "mac+ArrowLeft"], t.translateSelectedEditors, { args: [-i, 0], checker: e }],
                [["ctrl+ArrowLeft", "mac+shift+ArrowLeft"], t.translateSelectedEditors, { args: [-r, 0], checker: e }],
                [["ArrowRight", "mac+ArrowRight"], t.translateSelectedEditors, { args: [i, 0], checker: e }],
                [["ctrl+ArrowRight", "mac+shift+ArrowRight"], t.translateSelectedEditors, { args: [r, 0], checker: e }],
                [["ArrowUp", "mac+ArrowUp"], t.translateSelectedEditors, { args: [0, -i], checker: e }],
                [["ctrl+ArrowUp", "mac+shift+ArrowUp"], t.translateSelectedEditors, { args: [0, -r], checker: e }],
                [["ArrowDown", "mac+ArrowDown"], t.translateSelectedEditors, { args: [0, i], checker: e }],
                [["ctrl+ArrowDown", "mac+shift+ArrowDown"], t.translateSelectedEditors, { args: [0, r], checker: e }],
            ])
        );
    }
    destroy() {
        var t, e, s, i, r;
        (t = n(this, Fe)) == null || t.resolve(), f(this, Fe, null), (e = n(this, Er)) == null || e.abort(), f(this, Er, null), (this._signal = null);
        for (const a of n(this, Ft).values()) a.destroy();
        n(this, Ft).clear(),
            n(this, Ct).clear(),
            n(this, an).clear(),
            f(this, me, null),
            n(this, tt).clear(),
            n(this, De).destroy(),
            (s = n(this, xr)) == null || s.destroy(),
            (i = n(this, fs)) == null || i.hide(),
            f(this, fs, null),
            n(this, us) && (clearTimeout(n(this, us)), f(this, us, null)),
            n(this, ps) && (clearTimeout(n(this, ps)), f(this, ps, null)),
            (r = this._editorUndoBar) == null || r.destroy();
    }
    combinedSignal(t) {
        return AbortSignal.any([this._signal, t.signal]);
    }
    get mlManager() {
        return n(this, co);
    }
    get useNewAltTextFlow() {
        return n(this, ao);
    }
    get useNewAltTextWhenAddingImage() {
        return n(this, Rr);
    }
    get hcmFilter() {
        return q(this, "hcmFilter", n(this, ln) ? n(this, oo).addHCMFilter(n(this, ln).foreground, n(this, ln).background) : "none");
    }
    get direction() {
        return q(this, "direction", getComputedStyle(n(this, Os)).direction);
    }
    get highlightColors() {
        return q(
            this,
            "highlightColors",
            n(this, Pr)
                ? new Map(
                      n(this, Pr)
                          .split(",")
                          .map((t) => t.split("=").map((e) => e.trim()))
                  )
                : null
        );
    }
    get highlightColorNames() {
        return q(this, "highlightColorNames", this.highlightColors ? new Map(Array.from(this.highlightColors, (t) => t.reverse())) : null);
    }
    setCurrentDrawingSession(t) {
        t ? (this.unselectAll(), this.disableUserSelect(!0)) : this.disableUserSelect(!1), f(this, nn, t);
    }
    setMainHighlightColorPicker(t) {
        f(this, ho, t);
    }
    editAltText(t, e = !1) {
        var s;
        (s = n(this, xr)) == null || s.editAltText(this, t, e);
    }
    switchToMode(t, e) {
        this._eventBus.on("annotationeditormodechanged", e, { once: !0, signal: this._signal }), this._eventBus.dispatch("showannotationeditorui", { source: this, mode: t });
    }
    setPreference(t, e) {
        this._eventBus.dispatch("setpreference", { source: this, name: t, value: e });
    }
    onSetPreference({ name: t, value: e }) {
        switch (t) {
            case "enableNewAltTextWhenAddingImage":
                f(this, Rr, e);
                break;
        }
    }
    onPageChanging({ pageNumber: t }) {
        f(this, Tr, t - 1);
    }
    focusMainContainer() {
        n(this, Os).focus();
    }
    findParent(t, e) {
        for (const s of n(this, Ft).values()) {
            const { x: i, y: r, width: a, height: o } = s.div.getBoundingClientRect();
            if (t >= i && t <= i + a && e >= r && e <= r + o) return s;
        }
        return null;
    }
    disableUserSelect(t = !1) {
        n(this, po).classList.toggle("noUserSelect", t);
    }
    addShouldRescale(t) {
        n(this, an).add(t);
    }
    removeShouldRescale(t) {
        n(this, an).delete(t);
    }
    onScaleChanging({ scale: t }) {
        var e;
        this.commitOrRemove(), (this.viewParameters.realScale = t * ji.PDF_TO_CSS_UNITS);
        for (const s of n(this, an)) s.onScaleChanging();
        (e = n(this, nn)) == null || e.onScaleChanging();
    }
    onRotationChanging({ pagesRotation: t }) {
        this.commitOrRemove(), (this.viewParameters.rotation = t);
    }
    highlightSelection(t = "") {
        const e = document.getSelection();
        if (!e || e.isCollapsed) return;
        const { anchorNode: s, anchorOffset: i, focusNode: r, focusOffset: a } = e,
            o = e.toString(),
            h = b(this, R, Nl).call(this, e).closest(".textLayer"),
            c = this.getSelectionBoxes(h);
        if (!c) return;
        e.empty();
        const u = b(this, R, rc).call(this, h),
            p = n(this, Pt) === U.NONE,
            g = () => {
                u == null || u.createAndAddNewEditor({ x: 0, y: 0 }, !1, { methodOfCreation: t, boxes: c, anchorNode: s, anchorOffset: i, focusNode: r, focusOffset: a, text: o }), p && this.showAllEditors("highlight", !0, !0);
            };
        if (p) {
            this.switchToMode(U.HIGHLIGHT, g);
            return;
        }
        g();
    }
    addToAnnotationStorage(t) {
        !t.isEmpty() && n(this, Fs) && !n(this, Fs).has(t.id) && n(this, Fs).setValue(t.id, t);
    }
    blur() {
        if (((this.isShiftKeyDown = !1), n(this, bi) && (f(this, bi, !1), b(this, R, Ol).call(this, "main_toolbar")), !this.hasSelection)) return;
        const { activeElement: t } = document;
        for (const e of n(this, tt))
            if (e.div.contains(t)) {
                f(this, on, [e, t]), (e._focusEventsAllowed = !1);
                break;
            }
    }
    focus() {
        if (!n(this, on)) return;
        const [t, e] = n(this, on);
        f(this, on, null),
            e.addEventListener(
                "focusin",
                () => {
                    t._focusEventsAllowed = !0;
                },
                { once: !0, signal: this._signal }
            ),
            e.focus();
    }
    addEditListeners() {
        b(this, R, ac).call(this), b(this, R, oc).call(this);
    }
    removeEditListeners() {
        b(this, R, cu).call(this), b(this, R, lc).call(this);
    }
    dragOver(t) {
        for (const { type: e } of t.dataTransfer.items)
            for (const s of n(this, Xe))
                if (s.isHandlingMimeForPasting(e)) {
                    (t.dataTransfer.dropEffect = "copy"), t.preventDefault();
                    return;
                }
    }
    drop(t) {
        for (const e of t.dataTransfer.items)
            for (const s of n(this, Xe))
                if (s.isHandlingMimeForPasting(e.type)) {
                    s.paste(e, this.currentLayer), t.preventDefault();
                    return;
                }
    }
    copy(t) {
        var s;
        if ((t.preventDefault(), (s = n(this, me)) == null || s.commitOrRemove(), !this.hasSelection)) return;
        const e = [];
        for (const i of n(this, tt)) {
            const r = i.serialize(!0);
            r && e.push(r);
        }
        e.length !== 0 && t.clipboardData.setData("application/pdfjs", JSON.stringify(e));
    }
    cut(t) {
        this.copy(t), this.delete();
    }
    async paste(t) {
        t.preventDefault();
        const { clipboardData: e } = t;
        for (const r of e.items)
            for (const a of n(this, Xe))
                if (a.isHandlingMimeForPasting(r.type)) {
                    a.paste(r, this.currentLayer);
                    return;
                }
        let s = e.getData("application/pdfjs");
        if (!s) return;
        try {
            s = JSON.parse(s);
        } catch (r) {
            V(`paste: "${r.message}".`);
            return;
        }
        if (!Array.isArray(s)) return;
        this.unselectAll();
        const i = this.currentLayer;
        try {
            const r = [];
            for (const l of s) {
                const h = await i.deserialize(l);
                if (!h) return;
                r.push(h);
            }
            const a = () => {
                    for (const l of r) b(this, R, hc).call(this, l);
                    b(this, R, cc).call(this, r);
                },
                o = () => {
                    for (const l of r) l.remove();
                };
            this.addCommands({ cmd: a, undo: o, mustExec: !0 });
        } catch (r) {
            V(`paste: "${r.message}".`);
        }
    }
    keydown(t) {
        !this.isShiftKeyDown && t.key === "Shift" && (this.isShiftKeyDown = !0), n(this, Pt) !== U.NONE && !this.isEditorHandlingKeyboard && Ar._keyboardManager.exec(this, t);
    }
    keyup(t) {
        this.isShiftKeyDown && t.key === "Shift" && ((this.isShiftKeyDown = !1), n(this, bi) && (f(this, bi, !1), b(this, R, Ol).call(this, "main_toolbar")));
    }
    onEditingAction({ name: t }) {
        switch (t) {
            case "undo":
            case "redo":
            case "delete":
            case "selectAll":
                this[t]();
                break;
            case "highlightSelection":
                this.highlightSelection("context_menu");
                break;
        }
    }
    setEditingState(t) {
        t
            ? (b(this, R, lu).call(this),
              b(this, R, oc).call(this),
              b(this, R, Zt).call(this, {
                  isEditing: n(this, Pt) !== U.NONE,
                  isEmpty: b(this, R, Ia).call(this),
                  hasSomethingToUndo: n(this, De).hasSomethingToUndo(),
                  hasSomethingToRedo: n(this, De).hasSomethingToRedo(),
                  hasSelectedEditor: !1,
              }))
            : (b(this, R, hu).call(this), b(this, R, lc).call(this), b(this, R, Zt).call(this, { isEditing: !1 }), this.disableUserSelect(!1));
    }
    registerEditorTypes(t) {
        if (!n(this, Xe)) {
            f(this, Xe, t);
            for (const e of n(this, Xe)) b(this, R, ks).call(this, e.defaultPropertiesToUpdate);
        }
    }
    getId() {
        return n(this, wh).id;
    }
    get currentLayer() {
        return n(this, Ft).get(n(this, Tr));
    }
    getLayer(t) {
        return n(this, Ft).get(t);
    }
    get currentPageIndex() {
        return n(this, Tr);
    }
    addLayer(t) {
        n(this, Ft).set(t.pageIndex, t), n(this, Ai) ? t.enable() : t.disable();
    }
    removeLayer(t) {
        n(this, Ft).delete(t.pageIndex);
    }
    async updateMode(t, e = null, s = !1) {
        var i;
        if (n(this, Pt) !== t && !(n(this, Fe) && (await n(this, Fe).promise, !n(this, Fe)))) {
            if ((f(this, Fe, Promise.withResolvers()), f(this, Pt, t), t === U.NONE)) {
                this.setEditingState(!1), b(this, R, fu).call(this), (i = this._editorUndoBar) == null || i.hide(), n(this, Fe).resolve();
                return;
            }
            this.setEditingState(!0), await b(this, R, uu).call(this), this.unselectAll();
            for (const r of n(this, Ft).values()) r.updateMode(t);
            if (!e) {
                s && this.addNewEditorFromKeyboard(), n(this, Fe).resolve();
                return;
            }
            for (const r of n(this, Ct).values()) r.annotationElementId === e ? (this.setSelected(r), r.enterInEditMode()) : r.unselect();
            n(this, Fe).resolve();
        }
    }
    addNewEditorFromKeyboard() {
        this.currentLayer.canCreateNewEmptyEditor() && this.currentLayer.addNewEditor();
    }
    updateToolbar(t) {
        t !== n(this, Pt) && this._eventBus.dispatch("switchannotationeditormode", { source: this, mode: t });
    }
    updateParams(t, e) {
        var s;
        if (n(this, Xe)) {
            switch (t) {
                case Y.CREATE:
                    this.currentLayer.addNewEditor();
                    return;
                case Y.HIGHLIGHT_DEFAULT_COLOR:
                    (s = n(this, ho)) == null || s.updateColor(e);
                    break;
                case Y.HIGHLIGHT_SHOW_ALL:
                    this._eventBus.dispatch("reporttelemetry", { source: this, details: { type: "editing", data: { type: "highlight", action: "toggle_visibility" } } }),
                        (n(this, uo) || f(this, uo, new Map())).set(t, e),
                        this.showAllEditors("highlight", e);
                    break;
            }
            for (const i of n(this, tt)) i.updateParams(t, e);
            for (const i of n(this, Xe)) i.updateDefaultParams(t, e);
        }
    }
    showAllEditors(t, e, s = !1) {
        var r;
        for (const a of n(this, Ct).values()) a.editorType === t && a.show(e);
        (((r = n(this, uo)) == null ? void 0 : r.get(Y.HIGHLIGHT_SHOW_ALL)) ?? !0) !== e && b(this, R, ks).call(this, [[Y.HIGHLIGHT_SHOW_ALL, e]]);
    }
    enableWaiting(t = !1) {
        if (n(this, lo) !== t) {
            f(this, lo, t);
            for (const e of n(this, Ft).values()) t ? e.disableClick() : e.enableClick(), e.div.classList.toggle("waiting", t);
        }
    }
    getEditors(t) {
        const e = [];
        for (const s of n(this, Ct).values()) s.pageIndex === t && e.push(s);
        return e;
    }
    getEditor(t) {
        return n(this, Ct).get(t);
    }
    addEditor(t) {
        n(this, Ct).set(t.id, t);
    }
    removeEditor(t) {
        var e;
        t.div.contains(document.activeElement) &&
            (n(this, us) && clearTimeout(n(this, us)),
            f(
                this,
                us,
                setTimeout(() => {
                    this.focusMainContainer(), f(this, us, null);
                }, 0)
            )),
            n(this, Ct).delete(t.id),
            this.unselect(t),
            (!t.annotationElementId || !n(this, rn).has(t.annotationElementId)) && ((e = n(this, Fs)) == null || e.remove(t.id));
    }
    addDeletedAnnotationElement(t) {
        n(this, rn).add(t.annotationElementId), this.addChangedExistingAnnotation(t), (t.deleted = !0);
    }
    isDeletedAnnotationElement(t) {
        return n(this, rn).has(t);
    }
    removeDeletedAnnotationElement(t) {
        n(this, rn).delete(t.annotationElementId), this.removeChangedExistingAnnotation(t), (t.deleted = !1);
    }
    setActiveEditor(t) {
        n(this, me) !== t && (f(this, me, t), t && b(this, R, ks).call(this, t.propertiesToUpdate));
    }
    updateUI(t) {
        n(this, R, pu) === t && b(this, R, ks).call(this, t.propertiesToUpdate);
    }
    updateUIForDefaultProperties(t) {
        b(this, R, ks).call(this, t.defaultPropertiesToUpdate);
    }
    toggleSelected(t) {
        if (n(this, tt).has(t)) {
            n(this, tt).delete(t), t.unselect(), b(this, R, Zt).call(this, { hasSelectedEditor: this.hasSelection });
            return;
        }
        n(this, tt).add(t), t.select(), b(this, R, ks).call(this, t.propertiesToUpdate), b(this, R, Zt).call(this, { hasSelectedEditor: !0 });
    }
    setSelected(t) {
        var e;
        (e = n(this, nn)) == null || e.commitOrRemove();
        for (const s of n(this, tt)) s !== t && s.unselect();
        n(this, tt).clear(), n(this, tt).add(t), t.select(), b(this, R, ks).call(this, t.propertiesToUpdate), b(this, R, Zt).call(this, { hasSelectedEditor: !0 });
    }
    isSelected(t) {
        return n(this, tt).has(t);
    }
    get firstSelectedEditor() {
        return n(this, tt).values().next().value;
    }
    unselect(t) {
        t.unselect(), n(this, tt).delete(t), b(this, R, Zt).call(this, { hasSelectedEditor: this.hasSelection });
    }
    get hasSelection() {
        return n(this, tt).size !== 0;
    }
    get isEnterHandled() {
        return n(this, tt).size === 1 && this.firstSelectedEditor.isEnterHandled;
    }
    undo() {
        var t;
        n(this, De).undo(), b(this, R, Zt).call(this, { hasSomethingToUndo: n(this, De).hasSomethingToUndo(), hasSomethingToRedo: !0, isEmpty: b(this, R, Ia).call(this) }), (t = this._editorUndoBar) == null || t.hide();
    }
    redo() {
        n(this, De).redo(), b(this, R, Zt).call(this, { hasSomethingToUndo: !0, hasSomethingToRedo: n(this, De).hasSomethingToRedo(), isEmpty: b(this, R, Ia).call(this) });
    }
    addCommands(t) {
        n(this, De).add(t), b(this, R, Zt).call(this, { hasSomethingToUndo: !0, hasSomethingToRedo: !1, isEmpty: b(this, R, Ia).call(this) });
    }
    cleanUndoStack(t) {
        n(this, De).cleanType(t);
    }
    delete() {
        var r;
        this.commitOrRemove();
        const t = (r = this.currentLayer) == null ? void 0 : r.endDrawingSession(!0);
        if (!this.hasSelection && !t) return;
        const e = t ? [t] : [...n(this, tt)],
            s = () => {
                var a;
                (a = this._editorUndoBar) == null || a.show(i, e.length === 1 ? e[0].editorType : e.length);
                for (const o of e) o.remove();
            },
            i = () => {
                for (const a of e) b(this, R, hc).call(this, a);
            };
        this.addCommands({ cmd: s, undo: i, mustExec: !0 });
    }
    commitOrRemove() {
        var t;
        (t = n(this, me)) == null || t.commitOrRemove();
    }
    hasSomethingToControl() {
        return n(this, me) || this.hasSelection;
    }
    selectAll() {
        for (const t of n(this, tt)) t.commit();
        b(this, R, cc).call(this, n(this, Ct).values());
    }
    unselectAll() {
        var t;
        if (!(n(this, me) && (n(this, me).commitOrRemove(), n(this, Pt) !== U.NONE)) && !((t = n(this, nn)) != null && t.commitOrRemove()) && this.hasSelection) {
            for (const e of n(this, tt)) e.unselect();
            n(this, tt).clear(), b(this, R, Zt).call(this, { hasSelectedEditor: !1 });
        }
    }
    translateSelectedEditors(t, e, s = !1) {
        if ((s || this.commitOrRemove(), !this.hasSelection)) return;
        (n(this, wi)[0] += t), (n(this, wi)[1] += e);
        const [i, r] = n(this, wi),
            a = [...n(this, tt)],
            o = 1e3;
        n(this, ps) && clearTimeout(n(this, ps)),
            f(
                this,
                ps,
                setTimeout(() => {
                    f(this, ps, null),
                        (n(this, wi)[0] = n(this, wi)[1] = 0),
                        this.addCommands({
                            cmd: () => {
                                for (const l of a) n(this, Ct).has(l.id) && l.translateInPage(i, r);
                            },
                            undo: () => {
                                for (const l of a) n(this, Ct).has(l.id) && l.translateInPage(-i, -r);
                            },
                            mustExec: !1,
                        });
                }, o)
            );
        for (const l of a) l.translateInPage(t, e);
    }
    setUpDragSession() {
        if (this.hasSelection) {
            this.disableUserSelect(!0), f(this, ds, new Map());
            for (const t of n(this, tt)) n(this, ds).set(t, { savedX: t.x, savedY: t.y, savedPageIndex: t.pageIndex, newX: 0, newY: 0, newPageIndex: -1 });
        }
    }
    endDragSession() {
        if (!n(this, ds)) return !1;
        this.disableUserSelect(!1);
        const t = n(this, ds);
        f(this, ds, null);
        let e = !1;
        for (const [{ x: i, y: r, pageIndex: a }, o] of t) (o.newX = i), (o.newY = r), (o.newPageIndex = a), e || (e = i !== o.savedX || r !== o.savedY || a !== o.savedPageIndex);
        if (!e) return !1;
        const s = (i, r, a, o) => {
            if (n(this, Ct).has(i.id)) {
                const l = n(this, Ft).get(o);
                l ? i._setParentAndPosition(l, r, a) : ((i.pageIndex = o), (i.x = r), (i.y = a));
            }
        };
        return (
            this.addCommands({
                cmd: () => {
                    for (const [i, { newX: r, newY: a, newPageIndex: o }] of t) s(i, r, a, o);
                },
                undo: () => {
                    for (const [i, { savedX: r, savedY: a, savedPageIndex: o }] of t) s(i, r, a, o);
                },
                mustExec: !0,
            }),
            !0
        );
    }
    dragSelectedEditors(t, e) {
        if (n(this, ds)) for (const s of n(this, ds).keys()) s.drag(t, e);
    }
    rebuild(t) {
        if (t.parent === null) {
            const e = this.getLayer(t.pageIndex);
            e ? (e.changeParent(t), e.addOrRebuild(t)) : (this.addEditor(t), this.addToAnnotationStorage(t), t.rebuild());
        } else t.parent.addOrRebuild(t);
    }
    get isEditorHandlingKeyboard() {
        var t;
        return ((t = this.getActive()) == null ? void 0 : t.shouldGetKeyboardEvents()) || (n(this, tt).size === 1 && this.firstSelectedEditor.shouldGetKeyboardEvents());
    }
    isActive(t) {
        return n(this, me) === t;
    }
    getActive() {
        return n(this, me);
    }
    getMode() {
        return n(this, Pt);
    }
    get imageManager() {
        return q(this, "imageManager", new ic());
    }
    getSelectionBoxes(t) {
        if (!t) return null;
        const e = document.getSelection();
        for (let h = 0, c = e.rangeCount; h < c; h++) if (!t.contains(e.getRangeAt(h).commonAncestorContainer)) return null;
        const { x: s, y: i, width: r, height: a } = t.getBoundingClientRect();
        let o;
        switch (t.getAttribute("data-main-rotation")) {
            case "90":
                o = (h, c, u, p) => ({ x: (c - i) / a, y: 1 - (h + u - s) / r, width: p / a, height: u / r });
                break;
            case "180":
                o = (h, c, u, p) => ({ x: 1 - (h + u - s) / r, y: 1 - (c + p - i) / a, width: u / r, height: p / a });
                break;
            case "270":
                o = (h, c, u, p) => ({ x: 1 - (c + p - i) / a, y: (h - s) / r, width: p / a, height: u / r });
                break;
            default:
                o = (h, c, u, p) => ({ x: (h - s) / r, y: (c - i) / a, width: u / r, height: p / a });
                break;
        }
        const l = [];
        for (let h = 0, c = e.rangeCount; h < c; h++) {
            const u = e.getRangeAt(h);
            if (!u.collapsed) for (const { x: p, y: g, width: A, height: y } of u.getClientRects()) A === 0 || y === 0 || l.push(o(p, g, A, y));
        }
        return l.length === 0 ? null : l;
    }
    addChangedExistingAnnotation({ annotationElementId: t, id: e }) {
        (n(this, Cr) || f(this, Cr, new Map())).set(t, e);
    }
    removeChangedExistingAnnotation({ annotationElementId: t }) {
        var e;
        (e = n(this, Cr)) == null || e.delete(t);
    }
    renderAnnotationElement(t) {
        var i;
        const e = (i = n(this, Cr)) == null ? void 0 : i.get(t.data.id);
        if (!e) return;
        const s = n(this, Fs).getRawValue(e);
        s && ((n(this, Pt) === U.NONE && !s.hasBeenModified) || s.renderAnnotationElement(t));
    }
};
(Er = new WeakMap()),
    (me = new WeakMap()),
    (Ct = new WeakMap()),
    (Ft = new WeakMap()),
    (xr = new WeakMap()),
    (Fs = new WeakMap()),
    (Cr = new WeakMap()),
    (De = new WeakMap()),
    (gi = new WeakMap()),
    (nn = new WeakMap()),
    (Tr = new WeakMap()),
    (rn = new WeakMap()),
    (ds = new WeakMap()),
    (Xe = new WeakMap()),
    (an = new WeakMap()),
    (ro = new WeakMap()),
    (ao = new WeakMap()),
    (Rr = new WeakMap()),
    (oo = new WeakMap()),
    (us = new WeakMap()),
    (mi = new WeakMap()),
    (Pr = new WeakMap()),
    (bi = new WeakMap()),
    (fs = new WeakMap()),
    (wh = new WeakMap()),
    (Ai = new WeakMap()),
    (lo = new WeakMap()),
    (yi = new WeakMap()),
    (on = new WeakMap()),
    (ho = new WeakMap()),
    (co = new WeakMap()),
    (Pt = new WeakMap()),
    (tt = new WeakMap()),
    (Ns = new WeakMap()),
    (ln = new WeakMap()),
    (uo = new WeakMap()),
    (fo = new WeakMap()),
    (wi = new WeakMap()),
    (ps = new WeakMap()),
    (Os = new WeakMap()),
    (po = new WeakMap()),
    (Fe = new WeakMap()),
    (R = new WeakSet()),
    (Nl = function ({ anchorNode: t }) {
        return t.nodeType === Node.TEXT_NODE ? t.parentElement : t;
    }),
    (rc = function (t) {
        const { currentLayer: e } = this;
        if (e.hasTextLayer(t)) return e;
        for (const s of n(this, Ft).values()) if (s.hasTextLayer(t)) return s;
        return null;
    }),
    (ru = function () {
        const t = document.getSelection();
        if (!t || t.isCollapsed) return;
        const s = b(this, R, Nl).call(this, t).closest(".textLayer"),
            i = this.getSelectionBoxes(s);
        i && (n(this, fs) || f(this, fs, new bp(this)), n(this, fs).show(s, i, this.direction === "ltr"));
    }),
    (au = function () {
        var r, a, o;
        const t = document.getSelection();
        if (!t || t.isCollapsed) {
            n(this, Ns) && ((r = n(this, fs)) == null || r.hide(), f(this, Ns, null), b(this, R, Zt).call(this, { hasSelectedText: !1 }));
            return;
        }
        const { anchorNode: e } = t;
        if (e === n(this, Ns)) return;
        const i = b(this, R, Nl).call(this, t).closest(".textLayer");
        if (!i) {
            n(this, Ns) && ((a = n(this, fs)) == null || a.hide(), f(this, Ns, null), b(this, R, Zt).call(this, { hasSelectedText: !1 }));
            return;
        }
        if (
            ((o = n(this, fs)) == null || o.hide(),
            f(this, Ns, e),
            b(this, R, Zt).call(this, { hasSelectedText: !0 }),
            !(n(this, Pt) !== U.HIGHLIGHT && n(this, Pt) !== U.NONE) && (n(this, Pt) === U.HIGHLIGHT && this.showAllEditors("highlight", !0, !0), f(this, bi, this.isShiftKeyDown), !this.isShiftKeyDown))
        ) {
            const l = n(this, Pt) === U.HIGHLIGHT ? b(this, R, rc).call(this, i) : null;
            l == null || l.toggleDrawing();
            const h = new AbortController(),
                c = this.combinedSignal(h),
                u = (p) => {
                    (p.type === "pointerup" && p.button !== 0) || (h.abort(), l == null || l.toggleDrawing(!0), p.type === "pointerup" && b(this, R, Ol).call(this, "main_toolbar"));
                };
            window.addEventListener("pointerup", u, { signal: c }), window.addEventListener("blur", u, { signal: c });
        }
    }),
    (Ol = function (t = "") {
        n(this, Pt) === U.HIGHLIGHT ? this.highlightSelection(t) : n(this, ro) && b(this, R, ru).call(this);
    }),
    (ou = function () {
        document.addEventListener("selectionchange", b(this, R, au).bind(this), { signal: this._signal });
    }),
    (lu = function () {
        if (n(this, mi)) return;
        f(this, mi, new AbortController());
        const t = this.combinedSignal(n(this, mi));
        window.addEventListener("focus", this.focus.bind(this), { signal: t }), window.addEventListener("blur", this.blur.bind(this), { signal: t });
    }),
    (hu = function () {
        var t;
        (t = n(this, mi)) == null || t.abort(), f(this, mi, null);
    }),
    (ac = function () {
        if (n(this, yi)) return;
        f(this, yi, new AbortController());
        const t = this.combinedSignal(n(this, yi));
        window.addEventListener("keydown", this.keydown.bind(this), { signal: t }), window.addEventListener("keyup", this.keyup.bind(this), { signal: t });
    }),
    (cu = function () {
        var t;
        (t = n(this, yi)) == null || t.abort(), f(this, yi, null);
    }),
    (oc = function () {
        if (n(this, gi)) return;
        f(this, gi, new AbortController());
        const t = this.combinedSignal(n(this, gi));
        document.addEventListener("copy", this.copy.bind(this), { signal: t }), document.addEventListener("cut", this.cut.bind(this), { signal: t }), document.addEventListener("paste", this.paste.bind(this), { signal: t });
    }),
    (lc = function () {
        var t;
        (t = n(this, gi)) == null || t.abort(), f(this, gi, null);
    }),
    (du = function () {
        const t = this._signal;
        document.addEventListener("dragover", this.dragOver.bind(this), { signal: t }), document.addEventListener("drop", this.drop.bind(this), { signal: t });
    }),
    (Zt = function (t) {
        Object.entries(t).some(([s, i]) => n(this, fo)[s] !== i) &&
            (this._eventBus.dispatch("annotationeditorstateschanged", { source: this, details: Object.assign(n(this, fo), t) }),
            n(this, Pt) === U.HIGHLIGHT && t.hasSelectedEditor === !1 && b(this, R, ks).call(this, [[Y.HIGHLIGHT_FREE, !0]]));
    }),
    (ks = function (t) {
        this._eventBus.dispatch("annotationeditorparamschanged", { source: this, details: t });
    }),
    (uu = async function () {
        if (!n(this, Ai)) {
            f(this, Ai, !0);
            const t = [];
            for (const e of n(this, Ft).values()) t.push(e.enable());
            await Promise.all(t);
            for (const e of n(this, Ct).values()) e.enable();
        }
    }),
    (fu = function () {
        if ((this.unselectAll(), n(this, Ai))) {
            f(this, Ai, !1);
            for (const t of n(this, Ft).values()) t.disable();
            for (const t of n(this, Ct).values()) t.disable();
        }
    }),
    (hc = function (t) {
        const e = n(this, Ft).get(t.pageIndex);
        e ? e.addOrRebuild(t) : (this.addEditor(t), this.addToAnnotationStorage(t));
    }),
    (pu = function () {
        let t = null;
        for (t of n(this, tt));
        return t;
    }),
    (Ia = function () {
        if (n(this, Ct).size === 0) return !0;
        if (n(this, Ct).size === 1) for (const t of n(this, Ct).values()) return t.isEmpty();
        return !1;
    }),
    (cc = function (t) {
        for (const e of n(this, tt)) e.unselect();
        n(this, tt).clear();
        for (const e of t) e.isEmpty() || (n(this, tt).add(e), e.select());
        b(this, R, Zt).call(this, { hasSelectedEditor: this.hasSelection });
    }),
    O(Ar, "TRANSLATE_SMALL", 1),
    O(Ar, "TRANSLATE_BIG", 10);
let rr = Ar;
var Mt, gs, qe, Mr, ms, be, kr, bs, de, Hs, hn, As, vi, ns, Da, Hl;
const te = class te {
    constructor(t) {
        m(this, ns);
        m(this, Mt, null);
        m(this, gs, !1);
        m(this, qe, null);
        m(this, Mr, null);
        m(this, ms, null);
        m(this, be, null);
        m(this, kr, !1);
        m(this, bs, null);
        m(this, de, null);
        m(this, Hs, null);
        m(this, hn, null);
        m(this, As, !1);
        f(this, de, t),
            f(this, As, t._uiManager.useNewAltTextFlow),
            n(te, vi) ||
                f(
                    te,
                    vi,
                    Object.freeze({
                        added: "pdfjs-editor-new-alt-text-added-button",
                        "added-label": "pdfjs-editor-new-alt-text-added-button-label",
                        missing: "pdfjs-editor-new-alt-text-missing-button",
                        "missing-label": "pdfjs-editor-new-alt-text-missing-button-label",
                        review: "pdfjs-editor-new-alt-text-to-review-button",
                        "review-label": "pdfjs-editor-new-alt-text-to-review-button-label",
                    })
                );
    }
    static initialize(t) {
        te._l10n ?? (te._l10n = t);
    }
    async render() {
        const t = f(this, qe, document.createElement("button"));
        (t.className = "altText"), (t.tabIndex = "0");
        const e = f(this, Mr, document.createElement("span"));
        t.append(e),
            n(this, As)
                ? (t.classList.add("new"), t.setAttribute("data-l10n-id", n(te, vi).missing), e.setAttribute("data-l10n-id", n(te, vi)["missing-label"]))
                : (t.setAttribute("data-l10n-id", "pdfjs-editor-alt-text-button"), e.setAttribute("data-l10n-id", "pdfjs-editor-alt-text-button-label"));
        const s = n(this, de)._uiManager._signal;
        t.addEventListener("contextmenu", rs, { signal: s }), t.addEventListener("pointerdown", (r) => r.stopPropagation(), { signal: s });
        const i = (r) => {
            r.preventDefault(), n(this, de)._uiManager.editAltText(n(this, de)), n(this, As) && n(this, de)._reportTelemetry({ action: "pdfjs.image.alt_text.image_status_label_clicked", data: { label: n(this, ns, Da) } });
        };
        return (
            t.addEventListener("click", i, { capture: !0, signal: s }),
            t.addEventListener(
                "keydown",
                (r) => {
                    r.target === t && r.key === "Enter" && (f(this, kr, !0), i(r));
                },
                { signal: s }
            ),
            await b(this, ns, Hl).call(this),
            t
        );
    }
    finish() {
        n(this, qe) && (n(this, qe).focus({ focusVisible: n(this, kr) }), f(this, kr, !1));
    }
    isEmpty() {
        return n(this, As) ? n(this, Mt) === null : !n(this, Mt) && !n(this, gs);
    }
    hasData() {
        return n(this, As) ? n(this, Mt) !== null || !!n(this, Hs) : this.isEmpty();
    }
    get guessedText() {
        return n(this, Hs);
    }
    async setGuessedText(t) {
        n(this, Mt) === null && (f(this, Hs, t), f(this, hn, await te._l10n.get("pdfjs-editor-new-alt-text-generated-alt-text-with-disclaimer", { generatedAltText: t })), b(this, ns, Hl).call(this));
    }
    toggleAltTextBadge(t = !1) {
        var e;
        if (!n(this, As) || n(this, Mt)) {
            (e = n(this, bs)) == null || e.remove(), f(this, bs, null);
            return;
        }
        if (!n(this, bs)) {
            const s = f(this, bs, document.createElement("div"));
            (s.className = "noAltTextBadge"), n(this, de).div.append(s);
        }
        n(this, bs).classList.toggle("hidden", !t);
    }
    serialize(t) {
        let e = n(this, Mt);
        return !t && n(this, Hs) === e && (e = n(this, hn)), { altText: e, decorative: n(this, gs), guessedText: n(this, Hs), textWithDisclaimer: n(this, hn) };
    }
    get data() {
        return { altText: n(this, Mt), decorative: n(this, gs) };
    }
    set data({ altText: t, decorative: e, guessedText: s, textWithDisclaimer: i, cancel: r = !1 }) {
        s && (f(this, Hs, s), f(this, hn, i)), !(n(this, Mt) === t && n(this, gs) === e) && (r || (f(this, Mt, t), f(this, gs, e)), b(this, ns, Hl).call(this));
    }
    toggle(t = !1) {
        n(this, qe) && (!t && n(this, be) && (clearTimeout(n(this, be)), f(this, be, null)), (n(this, qe).disabled = !t));
    }
    shown() {
        n(this, de)._reportTelemetry({ action: "pdfjs.image.alt_text.image_status_label_displayed", data: { label: n(this, ns, Da) } });
    }
    destroy() {
        var t, e;
        (t = n(this, qe)) == null || t.remove(), f(this, qe, null), f(this, Mr, null), f(this, ms, null), (e = n(this, bs)) == null || e.remove(), f(this, bs, null);
    }
};
(Mt = new WeakMap()),
    (gs = new WeakMap()),
    (qe = new WeakMap()),
    (Mr = new WeakMap()),
    (ms = new WeakMap()),
    (be = new WeakMap()),
    (kr = new WeakMap()),
    (bs = new WeakMap()),
    (de = new WeakMap()),
    (Hs = new WeakMap()),
    (hn = new WeakMap()),
    (As = new WeakMap()),
    (vi = new WeakMap()),
    (ns = new WeakSet()),
    (Da = function () {
        return (n(this, Mt) && "added") || (n(this, Mt) === null && this.guessedText && "review") || "missing";
    }),
    (Hl = async function () {
        var i, r, a;
        const t = n(this, qe);
        if (!t) return;
        if (n(this, As)) {
            if ((t.classList.toggle("done", !!n(this, Mt)), t.setAttribute("data-l10n-id", n(te, vi)[n(this, ns, Da)]), (i = n(this, Mr)) == null || i.setAttribute("data-l10n-id", n(te, vi)[`${n(this, ns, Da)}-label`]), !n(this, Mt))) {
                (r = n(this, ms)) == null || r.remove();
                return;
            }
        } else {
            if (!n(this, Mt) && !n(this, gs)) {
                t.classList.remove("done"), (a = n(this, ms)) == null || a.remove();
                return;
            }
            t.classList.add("done"), t.setAttribute("data-l10n-id", "pdfjs-editor-alt-text-edit-button");
        }
        let e = n(this, ms);
        if (!e) {
            f(this, ms, (e = document.createElement("span"))), (e.className = "tooltip"), e.setAttribute("role", "tooltip"), (e.id = `alt-text-tooltip-${n(this, de).id}`);
            const o = 100,
                l = n(this, de)._uiManager._signal;
            l.addEventListener(
                "abort",
                () => {
                    clearTimeout(n(this, be)), f(this, be, null);
                },
                { once: !0 }
            ),
                t.addEventListener(
                    "mouseenter",
                    () => {
                        f(
                            this,
                            be,
                            setTimeout(() => {
                                f(this, be, null), n(this, ms).classList.add("show"), n(this, de)._reportTelemetry({ action: "alt_text_tooltip" });
                            }, o)
                        );
                    },
                    { signal: l }
                ),
                t.addEventListener(
                    "mouseleave",
                    () => {
                        var h;
                        n(this, be) && (clearTimeout(n(this, be)), f(this, be, null)), (h = n(this, ms)) == null || h.classList.remove("show");
                    },
                    { signal: l }
                );
        }
        n(this, gs) ? e.setAttribute("data-l10n-id", "pdfjs-editor-alt-text-decorative-tooltip") : (e.removeAttribute("data-l10n-id"), (e.textContent = n(this, Mt))), e.parentNode || t.append(e);
        const s = n(this, de).getImageForAltText();
        s == null || s.setAttribute("aria-describedby", e.id);
    }),
    m(te, vi, null),
    O(te, "_l10n", null);
let ch = te;
var go, cn, mo, bo, Ao, yo, wo, Lr, Bs, dn, _i, hi, gu, mu, dc;
const _d = class _d {
    constructor({ container: t, isPinchingDisabled: e = null, isPinchingStopped: s = null, onPinchStart: i = null, onPinching: r = null, onPinchEnd: a = null, signal: o }) {
        m(this, hi);
        m(this, go);
        m(this, cn, !1);
        m(this, mo, null);
        m(this, bo);
        m(this, Ao);
        m(this, yo);
        m(this, wo);
        m(this, Lr);
        m(this, Bs, null);
        m(this, dn);
        m(this, _i, null);
        f(this, go, t),
            f(this, mo, s),
            f(this, bo, e),
            f(this, Ao, i),
            f(this, yo, r),
            f(this, wo, a),
            f(this, dn, new AbortController()),
            f(this, Lr, AbortSignal.any([o, n(this, dn).signal])),
            t.addEventListener("touchstart", b(this, hi, gu).bind(this), { passive: !1, signal: n(this, Lr) });
    }
    get MIN_TOUCH_DISTANCE_TO_PINCH() {
        return q(this, "MIN_TOUCH_DISTANCE_TO_PINCH", 35 / (window.devicePixelRatio || 1));
    }
    destroy() {
        var t;
        (t = n(this, dn)) == null || t.abort(), f(this, dn, null);
    }
};
(go = new WeakMap()),
    (cn = new WeakMap()),
    (mo = new WeakMap()),
    (bo = new WeakMap()),
    (Ao = new WeakMap()),
    (yo = new WeakMap()),
    (wo = new WeakMap()),
    (Lr = new WeakMap()),
    (Bs = new WeakMap()),
    (dn = new WeakMap()),
    (_i = new WeakMap()),
    (hi = new WeakSet()),
    (gu = function (t) {
        var i, r, a;
        if (((i = n(this, bo)) != null && i.call(this)) || t.touches.length < 2) return;
        if (!n(this, _i)) {
            f(this, _i, new AbortController());
            const o = AbortSignal.any([n(this, Lr), n(this, _i).signal]),
                l = n(this, go),
                h = { signal: o, passive: !1 };
            l.addEventListener("touchmove", b(this, hi, mu).bind(this), h),
                l.addEventListener("touchend", b(this, hi, dc).bind(this), h),
                l.addEventListener("touchcancel", b(this, hi, dc).bind(this), h),
                (r = n(this, Ao)) == null || r.call(this);
        }
        if ((Me(t), t.touches.length !== 2 || ((a = n(this, mo)) != null && a.call(this)))) {
            f(this, Bs, null);
            return;
        }
        let [e, s] = t.touches;
        e.identifier > s.identifier && ([e, s] = [s, e]), f(this, Bs, { touch0X: e.screenX, touch0Y: e.screenY, touch1X: s.screenX, touch1Y: s.screenY });
    }),
    (mu = function (t) {
        var S;
        if (!n(this, Bs) || t.touches.length !== 2) return;
        let [e, s] = t.touches;
        e.identifier > s.identifier && ([e, s] = [s, e]);
        const { screenX: i, screenY: r } = e,
            { screenX: a, screenY: o } = s,
            l = n(this, Bs),
            { touch0X: h, touch0Y: c, touch1X: u, touch1Y: p } = l,
            g = u - h,
            A = p - c,
            y = a - i,
            v = o - r,
            w = Math.hypot(y, v) || 1,
            _ = Math.hypot(g, A) || 1;
        if (!n(this, cn) && Math.abs(_ - w) <= _d.MIN_TOUCH_DISTANCE_TO_PINCH) return;
        if (((l.touch0X = i), (l.touch0Y = r), (l.touch1X = a), (l.touch1Y = o), t.preventDefault(), !n(this, cn))) {
            f(this, cn, !0);
            return;
        }
        const E = [(i + a) / 2, (r + o) / 2];
        (S = n(this, yo)) == null || S.call(this, E, _, w);
    }),
    (dc = function (t) {
        var e;
        n(this, _i).abort(), f(this, _i, null), (e = n(this, wo)) == null || e.call(this), n(this, Bs) && (t.preventDefault(), f(this, Bs, null), f(this, cn, !1));
    });
let dh = _d;
var un, Ye, at, Ir, Si, vo, fn, Nt, pn, $s, Ei, _o, gn, Ae, So, mn, Gs, ys, Dr, Fr, Ne, bn, Eo, vh, H, uc, xo, fc, Bl, bu, Au, pc, $l, gc, yu, wu, vu, mc, _u, bc, Su, Eu, xu, Ac, Fa;
const j = class j {
    constructor(t) {
        m(this, H);
        m(this, un, null);
        m(this, Ye, null);
        m(this, at, null);
        m(this, Ir, !1);
        m(this, Si, null);
        m(this, vo, "");
        m(this, fn, !1);
        m(this, Nt, null);
        m(this, pn, null);
        m(this, $s, null);
        m(this, Ei, null);
        m(this, _o, "");
        m(this, gn, !1);
        m(this, Ae, null);
        m(this, So, !1);
        m(this, mn, !1);
        m(this, Gs, !1);
        m(this, ys, null);
        m(this, Dr, 0);
        m(this, Fr, 0);
        m(this, Ne, null);
        m(this, bn, null);
        O(this, "_editToolbar", null);
        O(this, "_initialOptions", Object.create(null));
        O(this, "_initialData", null);
        O(this, "_isVisible", !0);
        O(this, "_uiManager", null);
        O(this, "_focusEventsAllowed", !0);
        m(this, Eo, !1);
        m(this, vh, j._zIndex++);
        (this.parent = t.parent),
            (this.id = t.id),
            (this.width = this.height = null),
            (this.pageIndex = t.parent.pageIndex),
            (this.name = t.name),
            (this.div = null),
            (this._uiManager = t.uiManager),
            (this.annotationElementId = null),
            (this._willKeepAspectRatio = !1),
            (this._initialOptions.isCentered = t.isCentered),
            (this._structTreeParentId = null);
        const {
            rotation: e,
            rawDims: { pageWidth: s, pageHeight: i, pageX: r, pageY: a },
        } = this.parent.viewport;
        (this.rotation = e), (this.pageRotation = (360 + e - this._uiManager.viewParameters.rotation) % 360), (this.pageDimensions = [s, i]), (this.pageTranslation = [r, a]);
        const [o, l] = this.parentDimensions;
        (this.x = t.x / o), (this.y = t.y / l), (this.isAttachedToDOM = !1), (this.deleted = !1);
    }
    static get _resizerKeyboardManager() {
        const t = j.prototype._resizeWithKeyboard,
            e = rr.TRANSLATE_SMALL,
            s = rr.TRANSLATE_BIG;
        return q(
            this,
            "_resizerKeyboardManager",
            new Cl([
                [["ArrowLeft", "mac+ArrowLeft"], t, { args: [-e, 0] }],
                [["ctrl+ArrowLeft", "mac+shift+ArrowLeft"], t, { args: [-s, 0] }],
                [["ArrowRight", "mac+ArrowRight"], t, { args: [e, 0] }],
                [["ctrl+ArrowRight", "mac+shift+ArrowRight"], t, { args: [s, 0] }],
                [["ArrowUp", "mac+ArrowUp"], t, { args: [0, -e] }],
                [["ctrl+ArrowUp", "mac+shift+ArrowUp"], t, { args: [0, -s] }],
                [["ArrowDown", "mac+ArrowDown"], t, { args: [0, e] }],
                [["ctrl+ArrowDown", "mac+shift+ArrowDown"], t, { args: [0, s] }],
                [["Escape", "mac+Escape"], j.prototype._stopResizingWithKeyboard],
            ])
        );
    }
    get editorType() {
        return Object.getPrototypeOf(this).constructor._type;
    }
    static get isDrawer() {
        return !1;
    }
    static get _defaultLineColor() {
        return q(this, "_defaultLineColor", this._colorManager.getHexCode("CanvasText"));
    }
    static deleteAnnotationElement(t) {
        const e = new wp({ id: t.parent.getNextId(), parent: t.parent, uiManager: t._uiManager });
        (e.annotationElementId = t.annotationElementId), (e.deleted = !0), e._uiManager.addToAnnotationStorage(e);
    }
    static initialize(t, e) {
        if (
            (j._l10n ?? (j._l10n = t),
            j._l10nResizer ||
                (j._l10nResizer = Object.freeze({
                    topLeft: "pdfjs-editor-resizer-top-left",
                    topMiddle: "pdfjs-editor-resizer-top-middle",
                    topRight: "pdfjs-editor-resizer-top-right",
                    middleRight: "pdfjs-editor-resizer-middle-right",
                    bottomRight: "pdfjs-editor-resizer-bottom-right",
                    bottomMiddle: "pdfjs-editor-resizer-bottom-middle",
                    bottomLeft: "pdfjs-editor-resizer-bottom-left",
                    middleLeft: "pdfjs-editor-resizer-middle-left",
                })),
            j._borderLineWidth !== -1)
        )
            return;
        const s = getComputedStyle(document.documentElement);
        j._borderLineWidth = parseFloat(s.getPropertyValue("--outline-width")) || 0;
    }
    static updateDefaultParams(t, e) {}
    static get defaultPropertiesToUpdate() {
        return [];
    }
    static isHandlingMimeForPasting(t) {
        return !1;
    }
    static paste(t, e) {
        nt("Not implemented");
    }
    get propertiesToUpdate() {
        return [];
    }
    get _isDraggable() {
        return n(this, Eo);
    }
    set _isDraggable(t) {
        var e;
        f(this, Eo, t), (e = this.div) == null || e.classList.toggle("draggable", t);
    }
    get isEnterHandled() {
        return !0;
    }
    center() {
        const [t, e] = this.pageDimensions;
        switch (this.parentRotation) {
            case 90:
                (this.x -= (this.height * e) / (t * 2)), (this.y += (this.width * t) / (e * 2));
                break;
            case 180:
                (this.x += this.width / 2), (this.y += this.height / 2);
                break;
            case 270:
                (this.x += (this.height * e) / (t * 2)), (this.y -= (this.width * t) / (e * 2));
                break;
            default:
                (this.x -= this.width / 2), (this.y -= this.height / 2);
                break;
        }
        this.fixAndSetPosition();
    }
    addCommands(t) {
        this._uiManager.addCommands(t);
    }
    get currentLayer() {
        return this._uiManager.currentLayer;
    }
    setInBackground() {
        this.div.style.zIndex = 0;
    }
    setInForeground() {
        this.div.style.zIndex = n(this, vh);
    }
    setParent(t) {
        t !== null ? ((this.pageIndex = t.pageIndex), (this.pageDimensions = t.pageDimensions)) : b(this, H, Fa).call(this), (this.parent = t);
    }
    focusin(t) {
        this._focusEventsAllowed && (n(this, gn) ? f(this, gn, !1) : this.parent.setSelected(this));
    }
    focusout(t) {
        var s;
        if (!this._focusEventsAllowed || !this.isAttachedToDOM) return;
        const e = t.relatedTarget;
        (e != null && e.closest(`#${this.id}`)) || (t.preventDefault(), ((s = this.parent) != null && s.isMultipleSelection) || this.commitOrRemove());
    }
    commitOrRemove() {
        this.isEmpty() ? this.remove() : this.commit();
    }
    commit() {
        this.addToAnnotationStorage();
    }
    addToAnnotationStorage() {
        this._uiManager.addToAnnotationStorage(this);
    }
    setAt(t, e, s, i) {
        const [r, a] = this.parentDimensions;
        ([s, i] = this.screenToPageTranslation(s, i)), (this.x = (t + s) / r), (this.y = (e + i) / a), this.fixAndSetPosition();
    }
    translate(t, e) {
        b(this, H, uc).call(this, this.parentDimensions, t, e);
    }
    translateInPage(t, e) {
        n(this, Ae) || f(this, Ae, [this.x, this.y, this.width, this.height]), b(this, H, uc).call(this, this.pageDimensions, t, e), this.div.scrollIntoView({ block: "nearest" });
    }
    drag(t, e) {
        n(this, Ae) || f(this, Ae, [this.x, this.y, this.width, this.height]);
        const {
            div: s,
            parentDimensions: [i, r],
        } = this;
        if (((this.x += t / i), (this.y += e / r), this.parent && (this.x < 0 || this.x > 1 || this.y < 0 || this.y > 1))) {
            const { x: u, y: p } = this.div.getBoundingClientRect();
            this.parent.findNewParent(this, u, p) && ((this.x -= Math.floor(this.x)), (this.y -= Math.floor(this.y)));
        }
        let { x: a, y: o } = this;
        const [l, h] = this.getBaseTranslation();
        (a += l), (o += h);
        const { style: c } = s;
        (c.left = `${(100 * a).toFixed(2)}%`), (c.top = `${(100 * o).toFixed(2)}%`), this._onTranslating(a, o), s.scrollIntoView({ block: "nearest" });
    }
    _onTranslating(t, e) {}
    _onTranslated(t, e) {}
    get _hasBeenMoved() {
        return !!n(this, Ae) && (n(this, Ae)[0] !== this.x || n(this, Ae)[1] !== this.y);
    }
    get _hasBeenResized() {
        return !!n(this, Ae) && (n(this, Ae)[2] !== this.width || n(this, Ae)[3] !== this.height);
    }
    getBaseTranslation() {
        const [t, e] = this.parentDimensions,
            { _borderLineWidth: s } = j,
            i = s / t,
            r = s / e;
        switch (this.rotation) {
            case 90:
                return [-i, r];
            case 180:
                return [i, r];
            case 270:
                return [i, -r];
            default:
                return [-i, -r];
        }
    }
    get _mustFixPosition() {
        return !0;
    }
    fixAndSetPosition(t = this.rotation) {
        const {
            div: { style: e },
            pageDimensions: [s, i],
        } = this;
        let { x: r, y: a, width: o, height: l } = this;
        if (((o *= s), (l *= i), (r *= s), (a *= i), this._mustFixPosition))
            switch (t) {
                case 0:
                    (r = Math.max(0, Math.min(s - o, r))), (a = Math.max(0, Math.min(i - l, a)));
                    break;
                case 90:
                    (r = Math.max(0, Math.min(s - l, r))), (a = Math.min(i, Math.max(o, a)));
                    break;
                case 180:
                    (r = Math.min(s, Math.max(o, r))), (a = Math.min(i, Math.max(l, a)));
                    break;
                case 270:
                    (r = Math.min(s, Math.max(l, r))), (a = Math.max(0, Math.min(i - o, a)));
                    break;
            }
        (this.x = r /= s), (this.y = a /= i);
        const [h, c] = this.getBaseTranslation();
        (r += h), (a += c), (e.left = `${(100 * r).toFixed(2)}%`), (e.top = `${(100 * a).toFixed(2)}%`), this.moveInDOM();
    }
    screenToPageTranslation(t, e) {
        var s;
        return b((s = j), xo, fc).call(s, t, e, this.parentRotation);
    }
    pageTranslationToScreen(t, e) {
        var s;
        return b((s = j), xo, fc).call(s, t, e, 360 - this.parentRotation);
    }
    get parentScale() {
        return this._uiManager.viewParameters.realScale;
    }
    get parentRotation() {
        return (this._uiManager.viewParameters.rotation + this.pageRotation) % 360;
    }
    get parentDimensions() {
        const {
            parentScale: t,
            pageDimensions: [e, s],
        } = this;
        return [e * t, s * t];
    }
    setDims(t, e) {
        const [s, i] = this.parentDimensions,
            { style: r } = this.div;
        (r.width = `${((100 * t) / s).toFixed(2)}%`), n(this, fn) || (r.height = `${((100 * e) / i).toFixed(2)}%`);
    }
    fixDims() {
        const { style: t } = this.div,
            { height: e, width: s } = t,
            i = s.endsWith("%"),
            r = !n(this, fn) && e.endsWith("%");
        if (i && r) return;
        const [a, o] = this.parentDimensions;
        i || (t.width = `${((100 * parseFloat(s)) / a).toFixed(2)}%`), !n(this, fn) && !r && (t.height = `${((100 * parseFloat(e)) / o).toFixed(2)}%`);
    }
    getInitialTranslation() {
        return [0, 0];
    }
    _onResized() {}
    static _round(t) {
        return Math.round(t * 1e4) / 1e4;
    }
    _onResizing() {}
    altTextFinish() {
        var t;
        (t = n(this, at)) == null || t.finish();
    }
    async addEditToolbar() {
        return this._editToolbar || n(this, mn) ? this._editToolbar : ((this._editToolbar = new ec(this)), this.div.append(this._editToolbar.render()), n(this, at) && (await this._editToolbar.addAltText(n(this, at))), this._editToolbar);
    }
    removeEditToolbar() {
        var t;
        this._editToolbar && (this._editToolbar.remove(), (this._editToolbar = null), (t = n(this, at)) == null || t.destroy());
    }
    addContainer(t) {
        var s;
        const e = (s = this._editToolbar) == null ? void 0 : s.div;
        e ? e.before(t) : this.div.append(t);
    }
    getClientDimensions() {
        return this.div.getBoundingClientRect();
    }
    async addAltTextButton() {
        n(this, at) || (ch.initialize(j._l10n), f(this, at, new ch(this)), n(this, un) && ((n(this, at).data = n(this, un)), f(this, un, null)), await this.addEditToolbar());
    }
    get altTextData() {
        var t;
        return (t = n(this, at)) == null ? void 0 : t.data;
    }
    set altTextData(t) {
        n(this, at) && (n(this, at).data = t);
    }
    get guessedAltText() {
        var t;
        return (t = n(this, at)) == null ? void 0 : t.guessedText;
    }
    async setGuessedAltText(t) {
        var e;
        await ((e = n(this, at)) == null ? void 0 : e.setGuessedText(t));
    }
    serializeAltText(t) {
        var e;
        return (e = n(this, at)) == null ? void 0 : e.serialize(t);
    }
    hasAltText() {
        return !!n(this, at) && !n(this, at).isEmpty();
    }
    hasAltTextData() {
        var t;
        return ((t = n(this, at)) == null ? void 0 : t.hasData()) ?? !1;
    }
    render() {
        var r;
        (this.div = document.createElement("div")),
            this.div.setAttribute("data-editor-rotation", (360 - this.rotation) % 360),
            (this.div.className = this.name),
            this.div.setAttribute("id", this.id),
            (this.div.tabIndex = n(this, Ir) ? -1 : 0),
            this._isVisible || this.div.classList.add("hidden"),
            this.setInForeground(),
            b(this, H, bc).call(this);
        const [t, e] = this.parentDimensions;
        this.parentRotation % 180 !== 0 && ((this.div.style.maxWidth = `${((100 * e) / t).toFixed(2)}%`), (this.div.style.maxHeight = `${((100 * t) / e).toFixed(2)}%`));
        const [s, i] = this.getInitialTranslation();
        return (
            this.translate(s, i),
            hh(this, this.div, ["pointerdown"]),
            this.isResizable &&
                this._uiManager._supportsPinchToZoom &&
                (n(this, bn) ||
                    f(
                        this,
                        bn,
                        new dh({
                            container: this.div,
                            isPinchingDisabled: () => !this.isSelected,
                            onPinchStart: b(this, H, yu).bind(this),
                            onPinching: b(this, H, wu).bind(this),
                            onPinchEnd: b(this, H, vu).bind(this),
                            signal: this._uiManager._signal,
                        })
                    )),
            (r = this._uiManager._editorUndoBar) == null || r.hide(),
            this.div
        );
    }
    pointerdown(t) {
        const { isMac: e } = ne.platform;
        if (t.button !== 0 || (t.ctrlKey && e)) {
            t.preventDefault();
            return;
        }
        if ((f(this, gn, !0), this._isDraggable)) {
            b(this, H, _u).call(this, t);
            return;
        }
        b(this, H, mc).call(this, t);
    }
    get isSelected() {
        return this._uiManager.isSelected(this);
    }
    _onStartDragging() {}
    _onStopDragging() {}
    moveInDOM() {
        n(this, ys) && clearTimeout(n(this, ys)),
            f(
                this,
                ys,
                setTimeout(() => {
                    var t;
                    f(this, ys, null), (t = this.parent) == null || t.moveEditorInDOM(this);
                }, 0)
            );
    }
    _setParentAndPosition(t, e, s) {
        t.changeParent(this), (this.x = e), (this.y = s), this.fixAndSetPosition(), this._onTranslated();
    }
    getRect(t, e, s = this.rotation) {
        const i = this.parentScale,
            [r, a] = this.pageDimensions,
            [o, l] = this.pageTranslation,
            h = t / i,
            c = e / i,
            u = this.x * r,
            p = this.y * a,
            g = this.width * r,
            A = this.height * a;
        switch (s) {
            case 0:
                return [u + h + o, a - p - c - A + l, u + h + g + o, a - p - c + l];
            case 90:
                return [u + c + o, a - p + h + l, u + c + A + o, a - p + h + g + l];
            case 180:
                return [u - h - g + o, a - p + c + l, u - h + o, a - p + c + A + l];
            case 270:
                return [u - c - A + o, a - p - h - g + l, u - c + o, a - p - h + l];
            default:
                throw new Error("Invalid rotation");
        }
    }
    getRectInCurrentCoords(t, e) {
        const [s, i, r, a] = t,
            o = r - s,
            l = a - i;
        switch (this.rotation) {
            case 0:
                return [s, e - a, o, l];
            case 90:
                return [s, e - i, l, o];
            case 180:
                return [r, e - i, o, l];
            case 270:
                return [r, e - a, l, o];
            default:
                throw new Error("Invalid rotation");
        }
    }
    onceAdded(t) {}
    isEmpty() {
        return !1;
    }
    enableEditMode() {
        f(this, mn, !0);
    }
    disableEditMode() {
        f(this, mn, !1);
    }
    isInEditMode() {
        return n(this, mn);
    }
    shouldGetKeyboardEvents() {
        return n(this, Gs);
    }
    needsToBeRebuilt() {
        return this.div && !this.isAttachedToDOM;
    }
    get isOnScreen() {
        const { top: t, left: e, bottom: s, right: i } = this.getClientDimensions(),
            { innerHeight: r, innerWidth: a } = window;
        return e < a && i > 0 && t < r && s > 0;
    }
    rebuild() {
        b(this, H, bc).call(this);
    }
    rotate(t) {}
    resize() {}
    serializeDeleted() {
        var t;
        return { id: this.annotationElementId, deleted: !0, pageIndex: this.pageIndex, popupRef: ((t = this._initialData) == null ? void 0 : t.popupRef) || "" };
    }
    serialize(t = !1, e = null) {
        nt("An editor must be serializable");
    }
    static async deserialize(t, e, s) {
        const i = new this.prototype.constructor({ parent: e, id: e.getNextId(), uiManager: s });
        (i.rotation = t.rotation), f(i, un, t.accessibilityData);
        const [r, a] = i.pageDimensions,
            [o, l, h, c] = i.getRectInCurrentCoords(t.rect, a);
        return (i.x = o / r), (i.y = l / a), (i.width = h / r), (i.height = c / a), i;
    }
    get hasBeenModified() {
        return !!this.annotationElementId && (this.deleted || this.serialize() !== null);
    }
    remove() {
        var t, e;
        if (
            ((t = n(this, Ei)) == null || t.abort(),
            f(this, Ei, null),
            this.isEmpty() || this.commit(),
            this.parent ? this.parent.remove(this) : this._uiManager.removeEditor(this),
            n(this, ys) && (clearTimeout(n(this, ys)), f(this, ys, null)),
            b(this, H, Fa).call(this),
            this.removeEditToolbar(),
            n(this, Ne))
        ) {
            for (const s of n(this, Ne).values()) clearTimeout(s);
            f(this, Ne, null);
        }
        (this.parent = null), (e = n(this, bn)) == null || e.destroy(), f(this, bn, null);
    }
    get isResizable() {
        return !1;
    }
    makeResizable() {
        this.isResizable && (b(this, H, bu).call(this), n(this, Nt).classList.remove("hidden"), hh(this, this.div, ["keydown"]));
    }
    get toolbarPosition() {
        return null;
    }
    keydown(t) {
        if (!this.isResizable || t.target !== this.div || t.key !== "Enter") return;
        this._uiManager.setSelected(this), f(this, $s, { savedX: this.x, savedY: this.y, savedWidth: this.width, savedHeight: this.height });
        const e = n(this, Nt).children;
        if (!n(this, Ye)) {
            f(this, Ye, Array.from(e));
            const a = b(this, H, Su).bind(this),
                o = b(this, H, Eu).bind(this),
                l = this._uiManager._signal;
            for (const h of n(this, Ye)) {
                const c = h.getAttribute("data-resizer-name");
                h.setAttribute("role", "spinbutton"),
                    h.addEventListener("keydown", a, { signal: l }),
                    h.addEventListener("blur", o, { signal: l }),
                    h.addEventListener("focus", b(this, H, xu).bind(this, c), { signal: l }),
                    h.setAttribute("data-l10n-id", j._l10nResizer[c]);
            }
        }
        const s = n(this, Ye)[0];
        let i = 0;
        for (const a of e) {
            if (a === s) break;
            i++;
        }
        const r = (((360 - this.rotation + this.parentRotation) % 360) / 90) * (n(this, Ye).length / 4);
        if (r !== i) {
            if (r < i) for (let o = 0; o < i - r; o++) n(this, Nt).append(n(this, Nt).firstChild);
            else if (r > i) for (let o = 0; o < r - i; o++) n(this, Nt).firstChild.before(n(this, Nt).lastChild);
            let a = 0;
            for (const o of e) {
                const h = n(this, Ye)[a++].getAttribute("data-resizer-name");
                o.setAttribute("data-l10n-id", j._l10nResizer[h]);
            }
        }
        b(this, H, Ac).call(this, 0), f(this, Gs, !0), n(this, Nt).firstChild.focus({ focusVisible: !0 }), t.preventDefault(), t.stopImmediatePropagation();
    }
    _resizeWithKeyboard(t, e) {
        n(this, Gs) && b(this, H, gc).call(this, n(this, _o), { deltaX: t, deltaY: e, fromKeyboard: !0 });
    }
    _stopResizingWithKeyboard() {
        b(this, H, Fa).call(this), this.div.focus();
    }
    select() {
        var t, e, s;
        if ((this.makeResizable(), (t = this.div) == null || t.classList.add("selectedEditor"), !this._editToolbar)) {
            this.addEditToolbar().then(() => {
                var i, r;
                (i = this.div) != null && i.classList.contains("selectedEditor") && ((r = this._editToolbar) == null || r.show());
            });
            return;
        }
        (e = this._editToolbar) == null || e.show(), (s = n(this, at)) == null || s.toggleAltTextBadge(!1);
    }
    unselect() {
        var t, e, s, i, r;
        (t = n(this, Nt)) == null || t.classList.add("hidden"),
            (e = this.div) == null || e.classList.remove("selectedEditor"),
            (s = this.div) != null && s.contains(document.activeElement) && this._uiManager.currentLayer.div.focus({ preventScroll: !0 }),
            (i = this._editToolbar) == null || i.hide(),
            (r = n(this, at)) == null || r.toggleAltTextBadge(!0);
    }
    updateParams(t, e) {}
    disableEditing() {}
    enableEditing() {}
    enterInEditMode() {}
    getImageForAltText() {
        return null;
    }
    get contentDiv() {
        return this.div;
    }
    get isEditing() {
        return n(this, So);
    }
    set isEditing(t) {
        f(this, So, t), this.parent && (t ? (this.parent.setSelected(this), this.parent.setActiveEditor(this)) : this.parent.setActiveEditor(null));
    }
    setAspectRatio(t, e) {
        f(this, fn, !0);
        const s = t / e,
            { style: i } = this.div;
        (i.aspectRatio = s), (i.height = "auto");
    }
    static get MIN_SIZE() {
        return 16;
    }
    static canCreateNewEmptyEditor() {
        return !0;
    }
    get telemetryInitialData() {
        return { action: "added" };
    }
    get telemetryFinalData() {
        return null;
    }
    _reportTelemetry(t, e = !1) {
        if (e) {
            n(this, Ne) || f(this, Ne, new Map());
            const { action: s } = t;
            let i = n(this, Ne).get(s);
            i && clearTimeout(i),
                (i = setTimeout(() => {
                    this._reportTelemetry(t), n(this, Ne).delete(s), n(this, Ne).size === 0 && f(this, Ne, null);
                }, j._telemetryTimeout)),
                n(this, Ne).set(s, i);
            return;
        }
        t.type || (t.type = this.editorType), this._uiManager._eventBus.dispatch("reporttelemetry", { source: this, details: { type: "editing", data: t } });
    }
    show(t = this._isVisible) {
        this.div.classList.toggle("hidden", !t), (this._isVisible = t);
    }
    enable() {
        this.div && (this.div.tabIndex = 0), f(this, Ir, !1);
    }
    disable() {
        this.div && (this.div.tabIndex = -1), f(this, Ir, !0);
    }
    renderAnnotationElement(t) {
        let e = t.container.querySelector(".annotationContent");
        if (!e) (e = document.createElement("div")), e.classList.add("annotationContent", this.editorType), t.container.prepend(e);
        else if (e.nodeName === "CANVAS") {
            const s = e;
            (e = document.createElement("div")), e.classList.add("annotationContent", this.editorType), s.before(e);
        }
        return e;
    }
    resetAnnotationElement(t) {
        const { firstChild: e } = t.container;
        (e == null ? void 0 : e.nodeName) === "DIV" && e.classList.contains("annotationContent") && e.remove();
    }
};
(un = new WeakMap()),
    (Ye = new WeakMap()),
    (at = new WeakMap()),
    (Ir = new WeakMap()),
    (Si = new WeakMap()),
    (vo = new WeakMap()),
    (fn = new WeakMap()),
    (Nt = new WeakMap()),
    (pn = new WeakMap()),
    ($s = new WeakMap()),
    (Ei = new WeakMap()),
    (_o = new WeakMap()),
    (gn = new WeakMap()),
    (Ae = new WeakMap()),
    (So = new WeakMap()),
    (mn = new WeakMap()),
    (Gs = new WeakMap()),
    (ys = new WeakMap()),
    (Dr = new WeakMap()),
    (Fr = new WeakMap()),
    (Ne = new WeakMap()),
    (bn = new WeakMap()),
    (Eo = new WeakMap()),
    (vh = new WeakMap()),
    (H = new WeakSet()),
    (uc = function ([t, e], s, i) {
        ([s, i] = this.screenToPageTranslation(s, i)), (this.x += s / t), (this.y += i / e), this._onTranslating(this.x, this.y), this.fixAndSetPosition();
    }),
    (xo = new WeakSet()),
    (fc = function (t, e, s) {
        switch (s) {
            case 90:
                return [e, -t];
            case 180:
                return [-t, -e];
            case 270:
                return [-e, t];
            default:
                return [t, e];
        }
    }),
    (Bl = function (t) {
        switch (t) {
            case 90: {
                const [e, s] = this.pageDimensions;
                return [0, -e / s, s / e, 0];
            }
            case 180:
                return [-1, 0, 0, -1];
            case 270: {
                const [e, s] = this.pageDimensions;
                return [0, e / s, -s / e, 0];
            }
            default:
                return [1, 0, 0, 1];
        }
    }),
    (bu = function () {
        if (n(this, Nt)) return;
        f(this, Nt, document.createElement("div")), n(this, Nt).classList.add("resizers");
        const t = this._willKeepAspectRatio ? ["topLeft", "topRight", "bottomRight", "bottomLeft"] : ["topLeft", "topMiddle", "topRight", "middleRight", "bottomRight", "bottomMiddle", "bottomLeft", "middleLeft"],
            e = this._uiManager._signal;
        for (const s of t) {
            const i = document.createElement("div");
            n(this, Nt).append(i),
                i.classList.add("resizer", s),
                i.setAttribute("data-resizer-name", s),
                i.addEventListener("pointerdown", b(this, H, Au).bind(this, s), { signal: e }),
                i.addEventListener("contextmenu", rs, { signal: e }),
                (i.tabIndex = -1);
        }
        this.div.prepend(n(this, Nt));
    }),
    (Au = function (t, e) {
        var c;
        e.preventDefault();
        const { isMac: s } = ne.platform;
        if (e.button !== 0 || (e.ctrlKey && s)) return;
        (c = n(this, at)) == null || c.toggle(!1);
        const i = this._isDraggable;
        (this._isDraggable = !1), f(this, pn, [e.screenX, e.screenY]);
        const r = new AbortController(),
            a = this._uiManager.combinedSignal(r);
        this.parent.togglePointerEvents(!1),
            window.addEventListener("pointermove", b(this, H, gc).bind(this, t), { passive: !0, capture: !0, signal: a }),
            window.addEventListener("touchmove", Me, { passive: !1, signal: a }),
            window.addEventListener("contextmenu", rs, { signal: a }),
            f(this, $s, { savedX: this.x, savedY: this.y, savedWidth: this.width, savedHeight: this.height });
        const o = this.parent.div.style.cursor,
            l = this.div.style.cursor;
        this.div.style.cursor = this.parent.div.style.cursor = window.getComputedStyle(e.target).cursor;
        const h = () => {
            var u;
            r.abort(), this.parent.togglePointerEvents(!0), (u = n(this, at)) == null || u.toggle(!0), (this._isDraggable = i), (this.parent.div.style.cursor = o), (this.div.style.cursor = l), b(this, H, $l).call(this);
        };
        window.addEventListener("pointerup", h, { signal: a }), window.addEventListener("blur", h, { signal: a });
    }),
    (pc = function (t, e, s, i) {
        (this.width = s), (this.height = i), (this.x = t), (this.y = e);
        const [r, a] = this.parentDimensions;
        this.setDims(r * s, a * i), this.fixAndSetPosition(), this._onResized();
    }),
    ($l = function () {
        if (!n(this, $s)) return;
        const { savedX: t, savedY: e, savedWidth: s, savedHeight: i } = n(this, $s);
        f(this, $s, null);
        const r = this.x,
            a = this.y,
            o = this.width,
            l = this.height;
        (r === t && a === e && o === s && l === i) || this.addCommands({ cmd: b(this, H, pc).bind(this, r, a, o, l), undo: b(this, H, pc).bind(this, t, e, s, i), mustExec: !0 });
    }),
    (gc = function (t, e) {
        const [s, i] = this.parentDimensions,
            r = this.x,
            a = this.y,
            o = this.width,
            l = this.height,
            h = j.MIN_SIZE / s,
            c = j.MIN_SIZE / i,
            u = b(this, H, Bl).call(this, this.rotation),
            p = (I, B) => [u[0] * I + u[2] * B, u[1] * I + u[3] * B],
            g = b(this, H, Bl).call(this, 360 - this.rotation),
            A = (I, B) => [g[0] * I + g[2] * B, g[1] * I + g[3] * B];
        let y,
            v,
            w = !1,
            _ = !1;
        switch (t) {
            case "topLeft":
                (w = !0), (y = (I, B) => [0, 0]), (v = (I, B) => [I, B]);
                break;
            case "topMiddle":
                (y = (I, B) => [I / 2, 0]), (v = (I, B) => [I / 2, B]);
                break;
            case "topRight":
                (w = !0), (y = (I, B) => [I, 0]), (v = (I, B) => [0, B]);
                break;
            case "middleRight":
                (_ = !0), (y = (I, B) => [I, B / 2]), (v = (I, B) => [0, B / 2]);
                break;
            case "bottomRight":
                (w = !0), (y = (I, B) => [I, B]), (v = (I, B) => [0, 0]);
                break;
            case "bottomMiddle":
                (y = (I, B) => [I / 2, B]), (v = (I, B) => [I / 2, 0]);
                break;
            case "bottomLeft":
                (w = !0), (y = (I, B) => [0, B]), (v = (I, B) => [I, 0]);
                break;
            case "middleLeft":
                (_ = !0), (y = (I, B) => [0, B / 2]), (v = (I, B) => [I, B / 2]);
                break;
        }
        const E = y(o, l),
            S = v(o, l);
        let x = p(...S);
        const T = j._round(r + x[0]),
            C = j._round(a + x[1]);
        let k = 1,
            N = 1,
            W,
            $;
        if (e.fromKeyboard) ({ deltaX: W, deltaY: $ } = e);
        else {
            const { screenX: I, screenY: B } = e,
                [ge, os] = n(this, pn);
            ([W, $] = this.screenToPageTranslation(I - ge, B - os)), (n(this, pn)[0] = I), (n(this, pn)[1] = B);
        }
        if ((([W, $] = A(W / s, $ / i)), w)) {
            const I = Math.hypot(o, l);
            k = N = Math.max(Math.min(Math.hypot(S[0] - E[0] - W, S[1] - E[1] - $) / I, 1 / o, 1 / l), h / o, c / l);
        } else _ ? (k = Math.max(h, Math.min(1, Math.abs(S[0] - E[0] - W))) / o) : (N = Math.max(c, Math.min(1, Math.abs(S[1] - E[1] - $))) / l);
        const ot = j._round(o * k),
            mt = j._round(l * N);
        x = p(...v(ot, mt));
        const Z = T - x[0],
            Qt = C - x[1];
        n(this, Ae) || f(this, Ae, [this.x, this.y, this.width, this.height]), (this.width = ot), (this.height = mt), (this.x = Z), (this.y = Qt), this.setDims(s * ot, i * mt), this.fixAndSetPosition(), this._onResizing();
    }),
    (yu = function () {
        var t;
        f(this, $s, { savedX: this.x, savedY: this.y, savedWidth: this.width, savedHeight: this.height }), (t = n(this, at)) == null || t.toggle(!1), this.parent.togglePointerEvents(!1);
    }),
    (wu = function (t, e, s) {
        let r = 0.7 * (s / e) + 1 - 0.7;
        if (r === 1) return;
        const a = b(this, H, Bl).call(this, this.rotation),
            o = (T, C) => [a[0] * T + a[2] * C, a[1] * T + a[3] * C],
            [l, h] = this.parentDimensions,
            c = this.x,
            u = this.y,
            p = this.width,
            g = this.height,
            A = j.MIN_SIZE / l,
            y = j.MIN_SIZE / h;
        r = Math.max(Math.min(r, 1 / p, 1 / g), A / p, y / g);
        const v = j._round(p * r),
            w = j._round(g * r);
        if (v === p && w === g) return;
        n(this, Ae) || f(this, Ae, [c, u, p, g]);
        const _ = o(p / 2, g / 2),
            E = j._round(c + _[0]),
            S = j._round(u + _[1]),
            x = o(v / 2, w / 2);
        (this.x = E - x[0]), (this.y = S - x[1]), (this.width = v), (this.height = w), this.setDims(l * v, h * w), this.fixAndSetPosition(), this._onResizing();
    }),
    (vu = function () {
        var t;
        (t = n(this, at)) == null || t.toggle(!0), this.parent.togglePointerEvents(!0), b(this, H, $l).call(this);
    }),
    (mc = function (t) {
        const { isMac: e } = ne.platform;
        (t.ctrlKey && !e) || t.shiftKey || (t.metaKey && e) ? this.parent.toggleSelected(this) : this.parent.setSelected(this);
    }),
    (_u = function (t) {
        const { isSelected: e } = this;
        this._uiManager.setUpDragSession();
        let s = !1;
        const i = new AbortController(),
            r = this._uiManager.combinedSignal(i),
            a = { capture: !0, passive: !1, signal: r },
            o = (h) => {
                i.abort(), f(this, Si, null), f(this, gn, !1), this._uiManager.endDragSession() || b(this, H, mc).call(this, h), s && this._onStopDragging();
            };
        e &&
            (f(this, Dr, t.clientX),
            f(this, Fr, t.clientY),
            f(this, Si, t.pointerId),
            f(this, vo, t.pointerType),
            window.addEventListener(
                "pointermove",
                (h) => {
                    s || ((s = !0), this._onStartDragging());
                    const { clientX: c, clientY: u, pointerId: p } = h;
                    if (p !== n(this, Si)) {
                        Me(h);
                        return;
                    }
                    const [g, A] = this.screenToPageTranslation(c - n(this, Dr), u - n(this, Fr));
                    f(this, Dr, c), f(this, Fr, u), this._uiManager.dragSelectedEditors(g, A);
                },
                a
            ),
            window.addEventListener("touchmove", Me, a),
            window.addEventListener(
                "pointerdown",
                (h) => {
                    h.pointerType === n(this, vo) && (n(this, bn) || h.isPrimary) && o(h), Me(h);
                },
                a
            ));
        const l = (h) => {
            if (!n(this, Si) || n(this, Si) === h.pointerId) {
                o(h);
                return;
            }
            Me(h);
        };
        window.addEventListener("pointerup", l, { signal: r }), window.addEventListener("blur", l, { signal: r });
    }),
    (bc = function () {
        if (n(this, Ei) || !this.div) return;
        f(this, Ei, new AbortController());
        const t = this._uiManager.combinedSignal(n(this, Ei));
        this.div.addEventListener("focusin", this.focusin.bind(this), { signal: t }), this.div.addEventListener("focusout", this.focusout.bind(this), { signal: t });
    }),
    (Su = function (t) {
        j._resizerKeyboardManager.exec(this, t);
    }),
    (Eu = function (t) {
        var e;
        n(this, Gs) && ((e = t.relatedTarget) == null ? void 0 : e.parentNode) !== n(this, Nt) && b(this, H, Fa).call(this);
    }),
    (xu = function (t) {
        f(this, _o, n(this, Gs) ? t : "");
    }),
    (Ac = function (t) {
        if (n(this, Ye)) for (const e of n(this, Ye)) e.tabIndex = t;
    }),
    (Fa = function () {
        f(this, Gs, !1), b(this, H, Ac).call(this, -1), b(this, H, $l).call(this);
    }),
    m(j, xo),
    O(j, "_l10n", null),
    O(j, "_l10nResizer", null),
    O(j, "_borderLineWidth", -1),
    O(j, "_colorManager", new nc()),
    O(j, "_zIndex", 1),
    O(j, "_telemetryTimeout", 1e3);
let pt = j;
class wp extends pt {
    constructor(t) {
        super(t), (this.annotationElementId = t.annotationElementId), (this.deleted = !0);
    }
    serialize() {
        return this.serializeDeleted();
    }
}
const Ld = 3285377520,
    Ie = 4294901760,
    hs = 65535;
class Cu {
    constructor(t) {
        (this.h1 = t ? t & 4294967295 : Ld), (this.h2 = t ? t & 4294967295 : Ld);
    }
    update(t) {
        let e, s;
        if (typeof t == "string") {
            (e = new Uint8Array(t.length * 2)), (s = 0);
            for (let y = 0, v = t.length; y < v; y++) {
                const w = t.charCodeAt(y);
                w <= 255 ? (e[s++] = w) : ((e[s++] = w >>> 8), (e[s++] = w & 255));
            }
        } else if (ArrayBuffer.isView(t)) (e = t.slice()), (s = e.byteLength);
        else throw new Error("Invalid data format, must be a string or TypedArray.");
        const i = s >> 2,
            r = s - i * 4,
            a = new Uint32Array(e.buffer, 0, i);
        let o = 0,
            l = 0,
            h = this.h1,
            c = this.h2;
        const u = 3432918353,
            p = 461845907,
            g = u & hs,
            A = p & hs;
        for (let y = 0; y < i; y++)
            y & 1
                ? ((o = a[y]), (o = ((o * u) & Ie) | ((o * g) & hs)), (o = (o << 15) | (o >>> 17)), (o = ((o * p) & Ie) | ((o * A) & hs)), (h ^= o), (h = (h << 13) | (h >>> 19)), (h = h * 5 + 3864292196))
                : ((l = a[y]), (l = ((l * u) & Ie) | ((l * g) & hs)), (l = (l << 15) | (l >>> 17)), (l = ((l * p) & Ie) | ((l * A) & hs)), (c ^= l), (c = (c << 13) | (c >>> 19)), (c = c * 5 + 3864292196));
        switch (((o = 0), r)) {
            case 3:
                o ^= e[i * 4 + 2] << 16;
            case 2:
                o ^= e[i * 4 + 1] << 8;
            case 1:
                (o ^= e[i * 4]), (o = ((o * u) & Ie) | ((o * g) & hs)), (o = (o << 15) | (o >>> 17)), (o = ((o * p) & Ie) | ((o * A) & hs)), i & 1 ? (h ^= o) : (c ^= o);
        }
        (this.h1 = h), (this.h2 = c);
    }
    hexdigest() {
        let t = this.h1,
            e = this.h2;
        return (
            (t ^= e >>> 1),
            (t = ((t * 3981806797) & Ie) | ((t * 36045) & hs)),
            (e = ((e * 4283543511) & Ie) | (((((e << 16) | (t >>> 16)) * 2950163797) & Ie) >>> 16)),
            (t ^= e >>> 1),
            (t = ((t * 444984403) & Ie) | ((t * 60499) & hs)),
            (e = ((e * 3301882366) & Ie) | (((((e << 16) | (t >>> 16)) * 3120437893) & Ie) >>> 16)),
            (t ^= e >>> 1),
            (t >>> 0).toString(16).padStart(8, "0") + (e >>> 0).toString(16).padStart(8, "0")
        );
    }
}
const yc = Object.freeze({ map: null, hash: "", transfer: void 0 });
var An, yn, kt, _h, Tu;
class bd {
    constructor() {
        m(this, _h);
        m(this, An, !1);
        m(this, yn, null);
        m(this, kt, new Map());
        (this.onSetModified = null), (this.onResetModified = null), (this.onAnnotationEditor = null);
    }
    getValue(t, e) {
        const s = n(this, kt).get(t);
        return s === void 0 ? e : Object.assign(e, s);
    }
    getRawValue(t) {
        return n(this, kt).get(t);
    }
    remove(t) {
        if ((n(this, kt).delete(t), n(this, kt).size === 0 && this.resetModified(), typeof this.onAnnotationEditor == "function")) {
            for (const e of n(this, kt).values()) if (e instanceof pt) return;
            this.onAnnotationEditor(null);
        }
    }
    setValue(t, e) {
        const s = n(this, kt).get(t);
        let i = !1;
        if (s !== void 0) for (const [r, a] of Object.entries(e)) s[r] !== a && ((i = !0), (s[r] = a));
        else (i = !0), n(this, kt).set(t, e);
        i && b(this, _h, Tu).call(this), e instanceof pt && typeof this.onAnnotationEditor == "function" && this.onAnnotationEditor(e.constructor._type);
    }
    has(t) {
        return n(this, kt).has(t);
    }
    getAll() {
        return n(this, kt).size > 0 ? dd(n(this, kt)) : null;
    }
    setAll(t) {
        for (const [e, s] of Object.entries(t)) this.setValue(e, s);
    }
    get size() {
        return n(this, kt).size;
    }
    resetModified() {
        n(this, An) && (f(this, An, !1), typeof this.onResetModified == "function" && this.onResetModified());
    }
    get print() {
        return new Ru(this);
    }
    get serializable() {
        if (n(this, kt).size === 0) return yc;
        const t = new Map(),
            e = new Cu(),
            s = [],
            i = Object.create(null);
        let r = !1;
        for (const [a, o] of n(this, kt)) {
            const l = o instanceof pt ? o.serialize(!1, i) : o;
            l && (t.set(a, l), e.update(`${a}:${JSON.stringify(l)}`), r || (r = !!l.bitmap));
        }
        if (r) for (const a of t.values()) a.bitmap && s.push(a.bitmap);
        return t.size > 0 ? { map: t, hash: e.hexdigest(), transfer: s } : yc;
    }
    get editorStats() {
        let t = null;
        const e = new Map();
        for (const s of n(this, kt).values()) {
            if (!(s instanceof pt)) continue;
            const i = s.telemetryFinalData;
            if (!i) continue;
            const { type: r } = i;
            e.has(r) || e.set(r, Object.getPrototypeOf(s).constructor), t || (t = Object.create(null));
            const a = t[r] || (t[r] = new Map());
            for (const [o, l] of Object.entries(i)) {
                if (o === "type") continue;
                let h = a.get(o);
                h || ((h = new Map()), a.set(o, h));
                const c = h.get(l) ?? 0;
                h.set(l, c + 1);
            }
        }
        for (const [s, i] of e) t[s] = i.computeTelemetryFinalData(t[s]);
        return t;
    }
    resetModifiedIds() {
        f(this, yn, null);
    }
    get modifiedIds() {
        if (n(this, yn)) return n(this, yn);
        const t = [];
        for (const e of n(this, kt).values()) !(e instanceof pt) || !e.annotationElementId || !e.serialize() || t.push(e.annotationElementId);
        return f(this, yn, { ids: new Set(t), hash: t.join(",") });
    }
}
(An = new WeakMap()),
    (yn = new WeakMap()),
    (kt = new WeakMap()),
    (_h = new WeakSet()),
    (Tu = function () {
        n(this, An) || (f(this, An, !0), typeof this.onSetModified == "function" && this.onSetModified());
    });
var Co;
class Ru extends bd {
    constructor(e) {
        super();
        m(this, Co);
        const { map: s, hash: i, transfer: r } = e.serializable,
            a = structuredClone(s, r ? { transfer: r } : null);
        f(this, Co, { map: a, hash: i, transfer: r });
    }
    get print() {
        nt("Should not call PrintAnnotationStorage.print");
    }
    get serializable() {
        return n(this, Co);
    }
    get modifiedIds() {
        return q(this, "modifiedIds", { ids: new Set(), hash: "" });
    }
}
Co = new WeakMap();
var Nr;
class vp {
    constructor({ ownerDocument: t = globalThis.document, styleElement: e = null }) {
        m(this, Nr, new Set());
        (this._document = t), (this.nativeFontFaces = new Set()), (this.styleElement = null), (this.loadingRequests = []), (this.loadTestFontId = 0);
    }
    addNativeFontFace(t) {
        this.nativeFontFaces.add(t), this._document.fonts.add(t);
    }
    removeNativeFontFace(t) {
        this.nativeFontFaces.delete(t), this._document.fonts.delete(t);
    }
    insertRule(t) {
        this.styleElement || ((this.styleElement = this._document.createElement("style")), this._document.documentElement.getElementsByTagName("head")[0].append(this.styleElement));
        const e = this.styleElement.sheet;
        e.insertRule(t, e.cssRules.length);
    }
    clear() {
        for (const t of this.nativeFontFaces) this._document.fonts.delete(t);
        this.nativeFontFaces.clear(), n(this, Nr).clear(), this.styleElement && (this.styleElement.remove(), (this.styleElement = null));
    }
    async loadSystemFont({ systemFontInfo: t, _inspectFont: e }) {
        if (!(!t || n(this, Nr).has(t.loadedName))) {
            if ((vt(!this.disableFontFace, "loadSystemFont shouldn't be called when `disableFontFace` is set."), this.isFontLoadingAPISupported)) {
                const { loadedName: s, src: i, style: r } = t,
                    a = new FontFace(s, i, r);
                this.addNativeFontFace(a);
                try {
                    await a.load(), n(this, Nr).add(s), e == null || e(t);
                } catch {
                    V(`Cannot load system font: ${t.baseFontName}, installing it could help to improve PDF rendering.`), this.removeNativeFontFace(a);
                }
                return;
            }
            nt("Not implemented: loadSystemFont without the Font Loading API.");
        }
    }
    async bind(t) {
        if (t.attached || (t.missingFile && !t.systemFontInfo)) return;
        if (((t.attached = !0), t.systemFontInfo)) {
            await this.loadSystemFont(t);
            return;
        }
        if (this.isFontLoadingAPISupported) {
            const s = t.createNativeFontFace();
            if (s) {
                this.addNativeFontFace(s);
                try {
                    await s.loaded;
                } catch (i) {
                    throw (V(`Failed to load font '${s.family}': '${i}'.`), (t.disableFontFace = !0), i);
                }
            }
            return;
        }
        const e = t.createFontFaceRule();
        if (e) {
            if ((this.insertRule(e), this.isSyncFontLoadingSupported)) return;
            await new Promise((s) => {
                const i = this._queueLoadingCallback(s);
                this._prepareFontLoadEvent(t, i);
            });
        }
    }
    get isFontLoadingAPISupported() {
        var e;
        const t = !!((e = this._document) != null && e.fonts);
        return q(this, "isFontLoadingAPISupported", t);
    }
    get isSyncFontLoadingSupported() {
        let t = !1;
        return (Kt || (typeof navigator < "u" && typeof (navigator == null ? void 0 : navigator.userAgent) == "string" && /Mozilla\/5.0.*?rv:\d+.*? Gecko/.test(navigator.userAgent))) && (t = !0), q(this, "isSyncFontLoadingSupported", t);
    }
    _queueLoadingCallback(t) {
        function e() {
            for (vt(!i.done, "completeRequest() cannot be called twice."), i.done = !0; s.length > 0 && s[0].done; ) {
                const r = s.shift();
                setTimeout(r.callback, 0);
            }
        }
        const { loadingRequests: s } = this,
            i = { done: !1, complete: e, callback: t };
        return s.push(i), i;
    }
    get _loadTestFont() {
        const t = atob(
            "T1RUTwALAIAAAwAwQ0ZGIDHtZg4AAAOYAAAAgUZGVE1lkzZwAAAEHAAAABxHREVGABQAFQAABDgAAAAeT1MvMlYNYwkAAAEgAAAAYGNtYXABDQLUAAACNAAAAUJoZWFk/xVFDQAAALwAAAA2aGhlYQdkA+oAAAD0AAAAJGhtdHgD6AAAAAAEWAAAAAZtYXhwAAJQAAAAARgAAAAGbmFtZVjmdH4AAAGAAAAAsXBvc3T/hgAzAAADeAAAACAAAQAAAAEAALZRFsRfDzz1AAsD6AAAAADOBOTLAAAAAM4KHDwAAAAAA+gDIQAAAAgAAgAAAAAAAAABAAADIQAAAFoD6AAAAAAD6AABAAAAAAAAAAAAAAAAAAAAAQAAUAAAAgAAAAQD6AH0AAUAAAKKArwAAACMAooCvAAAAeAAMQECAAACAAYJAAAAAAAAAAAAAQAAAAAAAAAAAAAAAFBmRWQAwAAuAC4DIP84AFoDIQAAAAAAAQAAAAAAAAAAACAAIAABAAAADgCuAAEAAAAAAAAAAQAAAAEAAAAAAAEAAQAAAAEAAAAAAAIAAQAAAAEAAAAAAAMAAQAAAAEAAAAAAAQAAQAAAAEAAAAAAAUAAQAAAAEAAAAAAAYAAQAAAAMAAQQJAAAAAgABAAMAAQQJAAEAAgABAAMAAQQJAAIAAgABAAMAAQQJAAMAAgABAAMAAQQJAAQAAgABAAMAAQQJAAUAAgABAAMAAQQJAAYAAgABWABYAAAAAAAAAwAAAAMAAAAcAAEAAAAAADwAAwABAAAAHAAEACAAAAAEAAQAAQAAAC7//wAAAC7////TAAEAAAAAAAABBgAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAD/gwAyAAAAAQAAAAAAAAAAAAAAAAAAAAABAAQEAAEBAQJYAAEBASH4DwD4GwHEAvgcA/gXBIwMAYuL+nz5tQXkD5j3CBLnEQACAQEBIVhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYAAABAQAADwACAQEEE/t3Dov6fAH6fAT+fPp8+nwHDosMCvm1Cvm1DAz6fBQAAAAAAAABAAAAAMmJbzEAAAAAzgTjFQAAAADOBOQpAAEAAAAAAAAADAAUAAQAAAABAAAAAgABAAAAAAAAAAAD6AAAAAAAAA=="
        );
        return q(this, "_loadTestFont", t);
    }
    _prepareFontLoadEvent(t, e) {
        function s(S, x) {
            return (S.charCodeAt(x) << 24) | (S.charCodeAt(x + 1) << 16) | (S.charCodeAt(x + 2) << 8) | (S.charCodeAt(x + 3) & 255);
        }
        function i(S, x, T, C) {
            const k = S.substring(0, x),
                N = S.substring(x + T);
            return k + C + N;
        }
        let r, a;
        const o = this._document.createElement("canvas");
        (o.width = 1), (o.height = 1);
        const l = o.getContext("2d");
        let h = 0;
        function c(S, x) {
            if (++h > 30) {
                V("Load test font never loaded."), x();
                return;
            }
            if (((l.font = "30px " + S), l.fillText(".", 0, 20), l.getImageData(0, 0, 1, 1).data[3] > 0)) {
                x();
                return;
            }
            setTimeout(c.bind(null, S, x));
        }
        const u = `lt${Date.now()}${this.loadTestFontId++}`;
        let p = this._loadTestFont;
        p = i(p, 976, u.length, u);
        const A = 16,
            y = 1482184792;
        let v = s(p, A);
        for (r = 0, a = u.length - 3; r < a; r += 4) v = (v - y + s(u, r)) | 0;
        r < u.length && (v = (v - y + s(u + "XXX", r)) | 0), (p = i(p, A, 4, ap(v)));
        const w = `url(data:font/opentype;base64,${btoa(p)});`,
            _ = `@font-face {font-family:"${u}";src:${w}}`;
        this.insertRule(_);
        const E = this._document.createElement("div");
        (E.style.visibility = "hidden"), (E.style.width = E.style.height = "10px"), (E.style.position = "absolute"), (E.style.top = E.style.left = "0px");
        for (const S of [t.loadedName, u]) {
            const x = this._document.createElement("span");
            (x.textContent = "Hi"), (x.style.fontFamily = S), E.append(x);
        }
        this._document.body.append(E),
            c(u, () => {
                E.remove(), e.complete();
            });
    }
}
Nr = new WeakMap();
class _p {
    constructor(t, { disableFontFace: e = !1, fontExtraProperties: s = !1, inspectFont: i = null }) {
        this.compiledGlyphs = Object.create(null);
        for (const r in t) this[r] = t[r];
        (this.disableFontFace = e === !0), (this.fontExtraProperties = s === !0), (this._inspectFont = i);
    }
    createNativeFontFace() {
        var e;
        if (!this.data || this.disableFontFace) return null;
        let t;
        if (!this.cssFontInfo) t = new FontFace(this.loadedName, this.data, {});
        else {
            const s = { weight: this.cssFontInfo.fontWeight };
            this.cssFontInfo.italicAngle && (s.style = `oblique ${this.cssFontInfo.italicAngle}deg`), (t = new FontFace(this.cssFontInfo.fontFamily, this.data, s));
        }
        return (e = this._inspectFont) == null || e.call(this, this), t;
    }
    createFontFaceRule() {
        var s;
        if (!this.data || this.disableFontFace) return null;
        const t = `url(data:${this.mimetype};base64,${up(this.data)});`;
        let e;
        if (!this.cssFontInfo) e = `@font-face {font-family:"${this.loadedName}";src:${t}}`;
        else {
            let i = `font-weight: ${this.cssFontInfo.fontWeight};`;
            this.cssFontInfo.italicAngle && (i += `font-style: oblique ${this.cssFontInfo.italicAngle}deg;`), (e = `@font-face {font-family:"${this.cssFontInfo.fontFamily}";${i}src:${t}}`);
        }
        return (s = this._inspectFont) == null || s.call(this, this, t), e;
    }
    getPathGenerator(t, e) {
        if (this.compiledGlyphs[e] !== void 0) return this.compiledGlyphs[e];
        const s = this.loadedName + "_path_" + e;
        let i;
        try {
            i = t.get(s);
        } catch (a) {
            V(`getPathGenerator - ignoring character: "${a}".`);
        }
        const r = new Path2D(i || "");
        return this.fontExtraProperties || t.delete(s), (this.compiledGlyphs[e] = r);
    }
}
const Rl = { DATA: 1, ERROR: 2 },
    wt = { CANCEL: 1, CANCEL_COMPLETE: 2, CLOSE: 3, ENQUEUE: 4, ERROR: 5, PULL: 6, PULL_COMPLETE: 7, START_COMPLETE: 8 };
function Id() {}
function he(d) {
    if (d instanceof Vi || d instanceof Jh || d instanceof Ka || d instanceof Pd || d instanceof lh || d instanceof jh) return d;
    switch ((d instanceof Error || (typeof d == "object" && d !== null) || nt('wrapReason: Expected "reason" to be a (possibly cloned) Error.'), d.name)) {
        case "AbortException":
            return new Vi(d.message);
        case "InvalidPDFException":
            return new Jh(d.message);
        case "MissingPDFException":
            return new Ka(d.message);
        case "PasswordException":
            return new Pd(d.message, d.code);
        case "UnexpectedResponseException":
            return new lh(d.message, d.status);
        case "UnknownErrorException":
            return new jh(d.message, d.details);
    }
    return new jh(d.message, d.toString());
}
var Or, Ue, Pu, Mu, ku, Gl;
class Na {
    constructor(t, e, s) {
        m(this, Ue);
        m(this, Or, new AbortController());
        (this.sourceName = t),
            (this.targetName = e),
            (this.comObj = s),
            (this.callbackId = 1),
            (this.streamId = 1),
            (this.streamSinks = Object.create(null)),
            (this.streamControllers = Object.create(null)),
            (this.callbackCapabilities = Object.create(null)),
            (this.actionHandler = Object.create(null)),
            s.addEventListener("message", b(this, Ue, Pu).bind(this), { signal: n(this, Or).signal });
    }
    on(t, e) {
        const s = this.actionHandler;
        if (s[t]) throw new Error(`There is already an actionName called "${t}"`);
        s[t] = e;
    }
    send(t, e, s) {
        this.comObj.postMessage({ sourceName: this.sourceName, targetName: this.targetName, action: t, data: e }, s);
    }
    sendWithPromise(t, e, s) {
        const i = this.callbackId++,
            r = Promise.withResolvers();
        this.callbackCapabilities[i] = r;
        try {
            this.comObj.postMessage({ sourceName: this.sourceName, targetName: this.targetName, action: t, callbackId: i, data: e }, s);
        } catch (a) {
            r.reject(a);
        }
        return r.promise;
    }
    sendWithStream(t, e, s, i) {
        const r = this.streamId++,
            a = this.sourceName,
            o = this.targetName,
            l = this.comObj;
        return new ReadableStream(
            {
                start: (h) => {
                    const c = Promise.withResolvers();
                    return (
                        (this.streamControllers[r] = { controller: h, startCall: c, pullCall: null, cancelCall: null, isClosed: !1 }),
                        l.postMessage({ sourceName: a, targetName: o, action: t, streamId: r, data: e, desiredSize: h.desiredSize }, i),
                        c.promise
                    );
                },
                pull: (h) => {
                    const c = Promise.withResolvers();
                    return (this.streamControllers[r].pullCall = c), l.postMessage({ sourceName: a, targetName: o, stream: wt.PULL, streamId: r, desiredSize: h.desiredSize }), c.promise;
                },
                cancel: (h) => {
                    vt(h instanceof Error, "cancel must have a valid reason");
                    const c = Promise.withResolvers();
                    return (this.streamControllers[r].cancelCall = c), (this.streamControllers[r].isClosed = !0), l.postMessage({ sourceName: a, targetName: o, stream: wt.CANCEL, streamId: r, reason: he(h) }), c.promise;
                },
            },
            s
        );
    }
    destroy() {
        var t;
        (t = n(this, Or)) == null || t.abort(), f(this, Or, null);
    }
}
(Or = new WeakMap()),
    (Ue = new WeakSet()),
    (Pu = function ({ data: t }) {
        if (t.targetName !== this.sourceName) return;
        if (t.stream) {
            b(this, Ue, ku).call(this, t);
            return;
        }
        if (t.callback) {
            const s = t.callbackId,
                i = this.callbackCapabilities[s];
            if (!i) throw new Error(`Cannot resolve callback ${s}`);
            if ((delete this.callbackCapabilities[s], t.callback === Rl.DATA)) i.resolve(t.data);
            else if (t.callback === Rl.ERROR) i.reject(he(t.reason));
            else throw new Error("Unexpected callback case");
            return;
        }
        const e = this.actionHandler[t.action];
        if (!e) throw new Error(`Unknown action from worker: ${t.action}`);
        if (t.callbackId) {
            const s = this.sourceName,
                i = t.sourceName,
                r = this.comObj;
            Promise.try(e, t.data).then(
                function (a) {
                    r.postMessage({ sourceName: s, targetName: i, callback: Rl.DATA, callbackId: t.callbackId, data: a });
                },
                function (a) {
                    r.postMessage({ sourceName: s, targetName: i, callback: Rl.ERROR, callbackId: t.callbackId, reason: he(a) });
                }
            );
            return;
        }
        if (t.streamId) {
            b(this, Ue, Mu).call(this, t);
            return;
        }
        e(t.data);
    }),
    (Mu = function (t) {
        const e = t.streamId,
            s = this.sourceName,
            i = t.sourceName,
            r = this.comObj,
            a = this,
            o = this.actionHandler[t.action],
            l = {
                enqueue(h, c = 1, u) {
                    if (this.isCancelled) return;
                    const p = this.desiredSize;
                    (this.desiredSize -= c),
                        p > 0 && this.desiredSize <= 0 && ((this.sinkCapability = Promise.withResolvers()), (this.ready = this.sinkCapability.promise)),
                        r.postMessage({ sourceName: s, targetName: i, stream: wt.ENQUEUE, streamId: e, chunk: h }, u);
                },
                close() {
                    this.isCancelled || ((this.isCancelled = !0), r.postMessage({ sourceName: s, targetName: i, stream: wt.CLOSE, streamId: e }), delete a.streamSinks[e]);
                },
                error(h) {
                    vt(h instanceof Error, "error must have a valid reason"), !this.isCancelled && ((this.isCancelled = !0), r.postMessage({ sourceName: s, targetName: i, stream: wt.ERROR, streamId: e, reason: he(h) }));
                },
                sinkCapability: Promise.withResolvers(),
                onPull: null,
                onCancel: null,
                isCancelled: !1,
                desiredSize: t.desiredSize,
                ready: null,
            };
        l.sinkCapability.resolve(),
            (l.ready = l.sinkCapability.promise),
            (this.streamSinks[e] = l),
            Promise.try(o, t.data, l).then(
                function () {
                    r.postMessage({ sourceName: s, targetName: i, stream: wt.START_COMPLETE, streamId: e, success: !0 });
                },
                function (h) {
                    r.postMessage({ sourceName: s, targetName: i, stream: wt.START_COMPLETE, streamId: e, reason: he(h) });
                }
            );
    }),
    (ku = function (t) {
        const e = t.streamId,
            s = this.sourceName,
            i = t.sourceName,
            r = this.comObj,
            a = this.streamControllers[e],
            o = this.streamSinks[e];
        switch (t.stream) {
            case wt.START_COMPLETE:
                t.success ? a.startCall.resolve() : a.startCall.reject(he(t.reason));
                break;
            case wt.PULL_COMPLETE:
                t.success ? a.pullCall.resolve() : a.pullCall.reject(he(t.reason));
                break;
            case wt.PULL:
                if (!o) {
                    r.postMessage({ sourceName: s, targetName: i, stream: wt.PULL_COMPLETE, streamId: e, success: !0 });
                    break;
                }
                o.desiredSize <= 0 && t.desiredSize > 0 && o.sinkCapability.resolve(),
                    (o.desiredSize = t.desiredSize),
                    Promise.try(o.onPull || Id).then(
                        function () {
                            r.postMessage({ sourceName: s, targetName: i, stream: wt.PULL_COMPLETE, streamId: e, success: !0 });
                        },
                        function (h) {
                            r.postMessage({ sourceName: s, targetName: i, stream: wt.PULL_COMPLETE, streamId: e, reason: he(h) });
                        }
                    );
                break;
            case wt.ENQUEUE:
                if ((vt(a, "enqueue should have stream controller"), a.isClosed)) break;
                a.controller.enqueue(t.chunk);
                break;
            case wt.CLOSE:
                if ((vt(a, "close should have stream controller"), a.isClosed)) break;
                (a.isClosed = !0), a.controller.close(), b(this, Ue, Gl).call(this, a, e);
                break;
            case wt.ERROR:
                vt(a, "error should have stream controller"), a.controller.error(he(t.reason)), b(this, Ue, Gl).call(this, a, e);
                break;
            case wt.CANCEL_COMPLETE:
                t.success ? a.cancelCall.resolve() : a.cancelCall.reject(he(t.reason)), b(this, Ue, Gl).call(this, a, e);
                break;
            case wt.CANCEL:
                if (!o) break;
                const l = he(t.reason);
                Promise.try(o.onCancel || Id, l).then(
                    function () {
                        r.postMessage({ sourceName: s, targetName: i, stream: wt.CANCEL_COMPLETE, streamId: e, success: !0 });
                    },
                    function (h) {
                        r.postMessage({ sourceName: s, targetName: i, stream: wt.CANCEL_COMPLETE, streamId: e, reason: he(h) });
                    }
                ),
                    o.sinkCapability.reject(l),
                    (o.isCancelled = !0),
                    delete this.streamSinks[e];
                break;
            default:
                throw new Error("Unexpected stream case");
        }
    }),
    (Gl = async function (t, e) {
        var s, i, r;
        await Promise.allSettled([(s = t.startCall) == null ? void 0 : s.promise, (i = t.pullCall) == null ? void 0 : i.promise, (r = t.cancelCall) == null ? void 0 : r.promise]), delete this.streamControllers[e];
    });
var To;
class Lu {
    constructor({ enableHWA: t = !1 }) {
        m(this, To, !1);
        f(this, To, t);
    }
    create(t, e) {
        if (t <= 0 || e <= 0) throw new Error("Invalid canvas size");
        const s = this._createCanvas(t, e);
        return { canvas: s, context: s.getContext("2d", { willReadFrequently: !n(this, To) }) };
    }
    reset(t, e, s) {
        if (!t.canvas) throw new Error("Canvas is not specified");
        if (e <= 0 || s <= 0) throw new Error("Invalid canvas size");
        (t.canvas.width = e), (t.canvas.height = s);
    }
    destroy(t) {
        if (!t.canvas) throw new Error("Canvas is not specified");
        (t.canvas.width = 0), (t.canvas.height = 0), (t.canvas = null), (t.context = null);
    }
    _createCanvas(t, e) {
        nt("Abstract method `_createCanvas` called.");
    }
}
To = new WeakMap();
class Sp extends Lu {
    constructor({ ownerDocument: t = globalThis.document, enableHWA: e = !1 }) {
        super({ enableHWA: e }), (this._document = t);
    }
    _createCanvas(t, e) {
        const s = this._document.createElement("canvas");
        return (s.width = t), (s.height = e), s;
    }
}
class Iu {
    constructor({ baseUrl: t = null, isCompressed: e = !0 }) {
        (this.baseUrl = t), (this.isCompressed = e);
    }
    async fetch({ name: t }) {
        if (!this.baseUrl) throw new Error("Ensure that the `cMapUrl` and `cMapPacked` API parameters are provided.");
        if (!t) throw new Error("CMap name must be specified.");
        const e = this.baseUrl + t + (this.isCompressed ? ".bcmap" : "");
        return this._fetch(e)
            .then((s) => ({ cMapData: s, isCompressed: this.isCompressed }))
            .catch((s) => {
                throw new Error(`Unable to load ${this.isCompressed ? "binary " : ""}CMap at: ${e}`);
            });
    }
    async _fetch(t) {
        nt("Abstract method `_fetch` called.");
    }
}
class Du extends Iu {
    async _fetch(t) {
        const e = await Bh(t, this.isCompressed ? "arraybuffer" : "text");
        return e instanceof ArrayBuffer ? new Uint8Array(e) : Hh(e);
    }
}
class Fu {
    addFilter(t) {
        return "none";
    }
    addHCMFilter(t, e) {
        return "none";
    }
    addAlphaFilter(t) {
        return "none";
    }
    addLuminosityFilter(t) {
        return "none";
    }
    addHighlightHCMFilter(t, e, s, i, r) {
        return "none";
    }
    destroy(t = !1) {}
}
var wn, Hr, zs, Us, Wt, vn, _n, P, Ut, Oa, dr, zl, ur, Nu, wc, fr, Ha, Ba, vc, $a;
class Ep extends Fu {
    constructor({ docId: e, ownerDocument: s = globalThis.document }) {
        super();
        m(this, P);
        m(this, wn);
        m(this, Hr);
        m(this, zs);
        m(this, Us);
        m(this, Wt);
        m(this, vn);
        m(this, _n, 0);
        f(this, Us, e), f(this, Wt, s);
    }
    addFilter(e) {
        if (!e) return "none";
        let s = n(this, P, Ut).get(e);
        if (s) return s;
        const [i, r, a] = b(this, P, zl).call(this, e),
            o = e.length === 1 ? i : `${i}${r}${a}`;
        if (((s = n(this, P, Ut).get(o)), s)) return n(this, P, Ut).set(e, s), s;
        const l = `g_${n(this, Us)}_transfer_map_${Jt(this, _n)._++}`,
            h = b(this, P, ur).call(this, l);
        n(this, P, Ut).set(e, h), n(this, P, Ut).set(o, h);
        const c = b(this, P, fr).call(this, l);
        return b(this, P, Ba).call(this, i, r, a, c), h;
    }
    addHCMFilter(e, s) {
        var A;
        const i = `${e}-${s}`,
            r = "base";
        let a = n(this, P, Oa).get(r);
        if ((a == null ? void 0 : a.key) === i || (a ? ((A = a.filter) == null || A.remove(), (a.key = i), (a.url = "none"), (a.filter = null)) : ((a = { key: i, url: "none", filter: null }), n(this, P, Oa).set(r, a)), !e || !s))
            return a.url;
        const o = b(this, P, $a).call(this, e);
        e = F.makeHexColor(...o);
        const l = b(this, P, $a).call(this, s);
        if (((s = F.makeHexColor(...l)), (n(this, P, dr).style.color = ""), (e === "#000000" && s === "#ffffff") || e === s)) return a.url;
        const h = new Array(256);
        for (let y = 0; y <= 255; y++) {
            const v = y / 255;
            h[y] = v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4;
        }
        const c = h.join(","),
            u = `g_${n(this, Us)}_hcm_filter`,
            p = (a.filter = b(this, P, fr).call(this, u));
        b(this, P, Ba).call(this, c, c, c, p), b(this, P, wc).call(this, p);
        const g = (y, v) => {
            const w = o[y] / 255,
                _ = l[y] / 255,
                E = new Array(v + 1);
            for (let S = 0; S <= v; S++) E[S] = w + (S / v) * (_ - w);
            return E.join(",");
        };
        return b(this, P, Ba).call(this, g(0, 5), g(1, 5), g(2, 5), p), (a.url = b(this, P, ur).call(this, u)), a.url;
    }
    addAlphaFilter(e) {
        let s = n(this, P, Ut).get(e);
        if (s) return s;
        const [i] = b(this, P, zl).call(this, [e]),
            r = `alpha_${i}`;
        if (((s = n(this, P, Ut).get(r)), s)) return n(this, P, Ut).set(e, s), s;
        const a = `g_${n(this, Us)}_alpha_map_${Jt(this, _n)._++}`,
            o = b(this, P, ur).call(this, a);
        n(this, P, Ut).set(e, o), n(this, P, Ut).set(r, o);
        const l = b(this, P, fr).call(this, a);
        return b(this, P, vc).call(this, i, l), o;
    }
    addLuminosityFilter(e) {
        let s = n(this, P, Ut).get(e || "luminosity");
        if (s) return s;
        let i, r;
        if ((e ? (([i] = b(this, P, zl).call(this, [e])), (r = `luminosity_${i}`)) : (r = "luminosity"), (s = n(this, P, Ut).get(r)), s)) return n(this, P, Ut).set(e, s), s;
        const a = `g_${n(this, Us)}_luminosity_map_${Jt(this, _n)._++}`,
            o = b(this, P, ur).call(this, a);
        n(this, P, Ut).set(e, o), n(this, P, Ut).set(r, o);
        const l = b(this, P, fr).call(this, a);
        return b(this, P, Nu).call(this, l), e && b(this, P, vc).call(this, i, l), o;
    }
    addHighlightHCMFilter(e, s, i, r, a) {
        var _;
        const o = `${s}-${i}-${r}-${a}`;
        let l = n(this, P, Oa).get(e);
        if ((l == null ? void 0 : l.key) === o || (l ? ((_ = l.filter) == null || _.remove(), (l.key = o), (l.url = "none"), (l.filter = null)) : ((l = { key: o, url: "none", filter: null }), n(this, P, Oa).set(e, l)), !s || !i))
            return l.url;
        const [h, c] = [s, i].map(b(this, P, $a).bind(this));
        let u = Math.round(0.2126 * h[0] + 0.7152 * h[1] + 0.0722 * h[2]),
            p = Math.round(0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2]),
            [g, A] = [r, a].map(b(this, P, $a).bind(this));
        p < u && ([u, p, g, A] = [p, u, A, g]), (n(this, P, dr).style.color = "");
        const y = (E, S, x) => {
                const T = new Array(256),
                    C = (p - u) / x,
                    k = E / 255,
                    N = (S - E) / (255 * x);
                let W = 0;
                for (let $ = 0; $ <= x; $++) {
                    const ot = Math.round(u + $ * C),
                        mt = k + $ * N;
                    for (let Z = W; Z <= ot; Z++) T[Z] = mt;
                    W = ot + 1;
                }
                for (let $ = W; $ < 256; $++) T[$] = T[W - 1];
                return T.join(",");
            },
            v = `g_${n(this, Us)}_hcm_${e}_filter`,
            w = (l.filter = b(this, P, fr).call(this, v));
        return b(this, P, wc).call(this, w), b(this, P, Ba).call(this, y(g[0], A[0], 5), y(g[1], A[1], 5), y(g[2], A[2], 5), w), (l.url = b(this, P, ur).call(this, v)), l.url;
    }
    destroy(e = !1) {
        var s, i, r, a;
        (e && (s = n(this, vn)) != null && s.size) ||
            ((i = n(this, zs)) == null || i.parentNode.parentNode.remove(), f(this, zs, null), (r = n(this, Hr)) == null || r.clear(), f(this, Hr, null), (a = n(this, vn)) == null || a.clear(), f(this, vn, null), f(this, _n, 0));
    }
}
(wn = new WeakMap()),
    (Hr = new WeakMap()),
    (zs = new WeakMap()),
    (Us = new WeakMap()),
    (Wt = new WeakMap()),
    (vn = new WeakMap()),
    (_n = new WeakMap()),
    (P = new WeakSet()),
    (Ut = function () {
        return n(this, Hr) || f(this, Hr, new Map());
    }),
    (Oa = function () {
        return n(this, vn) || f(this, vn, new Map());
    }),
    (dr = function () {
        if (!n(this, zs)) {
            const e = n(this, Wt).createElement("div"),
                { style: s } = e;
            (s.visibility = "hidden"), (s.contain = "strict"), (s.width = s.height = 0), (s.position = "absolute"), (s.top = s.left = 0), (s.zIndex = -1);
            const i = n(this, Wt).createElementNS(Ms, "svg");
            i.setAttribute("width", 0), i.setAttribute("height", 0), f(this, zs, n(this, Wt).createElementNS(Ms, "defs")), e.append(i), i.append(n(this, zs)), n(this, Wt).body.append(e);
        }
        return n(this, zs);
    }),
    (zl = function (e) {
        if (e.length === 1) {
            const h = e[0],
                c = new Array(256);
            for (let p = 0; p < 256; p++) c[p] = h[p] / 255;
            const u = c.join(",");
            return [u, u, u];
        }
        const [s, i, r] = e,
            a = new Array(256),
            o = new Array(256),
            l = new Array(256);
        for (let h = 0; h < 256; h++) (a[h] = s[h] / 255), (o[h] = i[h] / 255), (l[h] = r[h] / 255);
        return [a.join(","), o.join(","), l.join(",")];
    }),
    (ur = function (e) {
        if (n(this, wn) === void 0) {
            f(this, wn, "");
            const s = n(this, Wt).URL;
            s !== n(this, Wt).baseURI && ($h(s) ? V('#createUrl: ignore "data:"-URL for performance reasons.') : f(this, wn, s.split("#", 1)[0]));
        }
        return `url(${n(this, wn)}#${e})`;
    }),
    (Nu = function (e) {
        const s = n(this, Wt).createElementNS(Ms, "feColorMatrix");
        s.setAttribute("type", "matrix"), s.setAttribute("values", "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0.59 0.11 0 0"), e.append(s);
    }),
    (wc = function (e) {
        const s = n(this, Wt).createElementNS(Ms, "feColorMatrix");
        s.setAttribute("type", "matrix"), s.setAttribute("values", "0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0 0 0 1 0"), e.append(s);
    }),
    (fr = function (e) {
        const s = n(this, Wt).createElementNS(Ms, "filter");
        return s.setAttribute("color-interpolation-filters", "sRGB"), s.setAttribute("id", e), n(this, P, dr).append(s), s;
    }),
    (Ha = function (e, s, i) {
        const r = n(this, Wt).createElementNS(Ms, s);
        r.setAttribute("type", "discrete"), r.setAttribute("tableValues", i), e.append(r);
    }),
    (Ba = function (e, s, i, r) {
        const a = n(this, Wt).createElementNS(Ms, "feComponentTransfer");
        r.append(a), b(this, P, Ha).call(this, a, "feFuncR", e), b(this, P, Ha).call(this, a, "feFuncG", s), b(this, P, Ha).call(this, a, "feFuncB", i);
    }),
    (vc = function (e, s) {
        const i = n(this, Wt).createElementNS(Ms, "feComponentTransfer");
        s.append(i), b(this, P, Ha).call(this, i, "feFuncA", e);
    }),
    ($a = function (e) {
        return (n(this, P, dr).style.color = e), md(getComputedStyle(n(this, P, dr)).getPropertyValue("color"));
    });
class Ou {
    constructor({ baseUrl: t = null }) {
        this.baseUrl = t;
    }
    async fetch({ filename: t }) {
        if (!this.baseUrl) throw new Error("Ensure that the `standardFontDataUrl` API parameter is provided.");
        if (!t) throw new Error("Font filename must be specified.");
        const e = `${this.baseUrl}${t}`;
        return this._fetch(e).catch((s) => {
            throw new Error(`Unable to load font data at: ${e}`);
        });
    }
    async _fetch(t) {
        nt("Abstract method `_fetch` called.");
    }
}
class Hu extends Ou {
    async _fetch(t) {
        const e = await Bh(t, "arraybuffer");
        return new Uint8Array(e);
    }
}
Kt && V("Please use the `legacy` build in Node.js environments.");
async function Bu(d) {
    const e = await process.getBuiltinModule("fs").promises.readFile(d);
    return new Uint8Array(e);
}
class xp extends Fu {}
class Cp extends Lu {
    _createCanvas(t, e) {
        return process
            .getBuiltinModule("module")
            .createRequire(import.meta.url)("@napi-rs/canvas")
            .createCanvas(t, e);
    }
}
class Tp extends Iu {
    async _fetch(t) {
        return Bu(t);
    }
}
class Rp extends Ou {
    async _fetch(t) {
        return Bu(t);
    }
}
const Yt = { FILL: "Fill", STROKE: "Stroke", SHADING: "Shading" };
function _c(d, t) {
    if (!t) return;
    const e = t[2] - t[0],
        s = t[3] - t[1],
        i = new Path2D();
    i.rect(t[0], t[1], e, s), d.clip(i);
}
class Ad {
    getPattern() {
        nt("Abstract method `getPattern` called.");
    }
}
class Pp extends Ad {
    constructor(t) {
        super(), (this._type = t[1]), (this._bbox = t[2]), (this._colorStops = t[3]), (this._p0 = t[4]), (this._p1 = t[5]), (this._r0 = t[6]), (this._r1 = t[7]), (this.matrix = null);
    }
    _createGradient(t) {
        let e;
        this._type === "axial"
            ? (e = t.createLinearGradient(this._p0[0], this._p0[1], this._p1[0], this._p1[1]))
            : this._type === "radial" && (e = t.createRadialGradient(this._p0[0], this._p0[1], this._r0, this._p1[0], this._p1[1], this._r1));
        for (const s of this._colorStops) e.addColorStop(s[0], s[1]);
        return e;
    }
    getPattern(t, e, s, i) {
        let r;
        if (i === Yt.STROKE || i === Yt.FILL) {
            const a = e.current.getClippedPathBoundingBox(i, ct(t)) || [0, 0, 0, 0],
                o = Math.ceil(a[2] - a[0]) || 1,
                l = Math.ceil(a[3] - a[1]) || 1,
                h = e.cachedCanvases.getCanvas("pattern", o, l),
                c = h.context;
            c.clearRect(0, 0, c.canvas.width, c.canvas.height),
                c.beginPath(),
                c.rect(0, 0, c.canvas.width, c.canvas.height),
                c.translate(-a[0], -a[1]),
                (s = F.transform(s, [1, 0, 0, 1, a[0], a[1]])),
                c.transform(...e.baseTransform),
                this.matrix && c.transform(...this.matrix),
                _c(c, this._bbox),
                (c.fillStyle = this._createGradient(c)),
                c.fill(),
                (r = t.createPattern(h.canvas, "no-repeat"));
            const u = new DOMMatrix(s);
            r.setTransform(u);
        } else _c(t, this._bbox), (r = this._createGradient(t));
        return r;
    }
}
function qh(d, t, e, s, i, r, a, o) {
    const l = t.coords,
        h = t.colors,
        c = d.data,
        u = d.width * 4;
    let p;
    l[e + 1] > l[s + 1] && ((p = e), (e = s), (s = p), (p = r), (r = a), (a = p)), l[s + 1] > l[i + 1] && ((p = s), (s = i), (i = p), (p = a), (a = o), (o = p)), l[e + 1] > l[s + 1] && ((p = e), (e = s), (s = p), (p = r), (r = a), (a = p));
    const g = (l[e] + t.offsetX) * t.scaleX,
        A = (l[e + 1] + t.offsetY) * t.scaleY,
        y = (l[s] + t.offsetX) * t.scaleX,
        v = (l[s + 1] + t.offsetY) * t.scaleY,
        w = (l[i] + t.offsetX) * t.scaleX,
        _ = (l[i + 1] + t.offsetY) * t.scaleY;
    if (A >= _) return;
    const E = h[r],
        S = h[r + 1],
        x = h[r + 2],
        T = h[a],
        C = h[a + 1],
        k = h[a + 2],
        N = h[o],
        W = h[o + 1],
        $ = h[o + 2],
        ot = Math.round(A),
        mt = Math.round(_);
    let Z, Qt, I, B, ge, os, Ps, Le;
    for (let Gt = ot; Gt <= mt; Gt++) {
        if (Gt < v) {
            const lt = Gt < A ? 0 : (A - Gt) / (A - v);
            (Z = g - (g - y) * lt), (Qt = E - (E - T) * lt), (I = S - (S - C) * lt), (B = x - (x - k) * lt);
        } else {
            let lt;
            Gt > _ ? (lt = 1) : v === _ ? (lt = 0) : (lt = (v - Gt) / (v - _)), (Z = y - (y - w) * lt), (Qt = T - (T - N) * lt), (I = C - (C - W) * lt), (B = k - (k - $) * lt);
        }
        let St;
        Gt < A ? (St = 0) : Gt > _ ? (St = 1) : (St = (A - Gt) / (A - _)), (ge = g - (g - w) * St), (os = E - (E - N) * St), (Ps = S - (S - W) * St), (Le = x - (x - $) * St);
        const hr = Math.round(Math.min(Z, ge)),
            Ta = Math.round(Math.max(Z, ge));
        let oe = u * Gt + hr * 4;
        for (let lt = hr; lt <= Ta; lt++) (St = (Z - lt) / (Z - ge)), St < 0 ? (St = 0) : St > 1 && (St = 1), (c[oe++] = (Qt - (Qt - os) * St) | 0), (c[oe++] = (I - (I - Ps) * St) | 0), (c[oe++] = (B - (B - Le) * St) | 0), (c[oe++] = 255);
    }
}
function Mp(d, t, e) {
    const s = t.coords,
        i = t.colors;
    let r, a;
    switch (t.type) {
        case "lattice":
            const o = t.verticesPerRow,
                l = Math.floor(s.length / o) - 1,
                h = o - 1;
            for (r = 0; r < l; r++) {
                let c = r * o;
                for (let u = 0; u < h; u++, c++) qh(d, e, s[c], s[c + 1], s[c + o], i[c], i[c + 1], i[c + o]), qh(d, e, s[c + o + 1], s[c + 1], s[c + o], i[c + o + 1], i[c + 1], i[c + o]);
            }
            break;
        case "triangles":
            for (r = 0, a = s.length; r < a; r += 3) qh(d, e, s[r], s[r + 1], s[r + 2], i[r], i[r + 1], i[r + 2]);
            break;
        default:
            throw new Error("illegal figure");
    }
}
class kp extends Ad {
    constructor(t) {
        super(), (this._coords = t[2]), (this._colors = t[3]), (this._figures = t[4]), (this._bounds = t[5]), (this._bbox = t[7]), (this._background = t[8]), (this.matrix = null);
    }
    _createMeshCanvas(t, e, s) {
        const o = Math.floor(this._bounds[0]),
            l = Math.floor(this._bounds[1]),
            h = Math.ceil(this._bounds[2]) - o,
            c = Math.ceil(this._bounds[3]) - l,
            u = Math.min(Math.ceil(Math.abs(h * t[0] * 1.1)), 3e3),
            p = Math.min(Math.ceil(Math.abs(c * t[1] * 1.1)), 3e3),
            g = h / u,
            A = c / p,
            y = { coords: this._coords, colors: this._colors, offsetX: -o, offsetY: -l, scaleX: 1 / g, scaleY: 1 / A },
            v = u + 2 * 2,
            w = p + 2 * 2,
            _ = s.getCanvas("mesh", v, w),
            E = _.context,
            S = E.createImageData(u, p);
        if (e) {
            const T = S.data;
            for (let C = 0, k = T.length; C < k; C += 4) (T[C] = e[0]), (T[C + 1] = e[1]), (T[C + 2] = e[2]), (T[C + 3] = 255);
        }
        for (const T of this._figures) Mp(S, T, y);
        return E.putImageData(S, 2, 2), { canvas: _.canvas, offsetX: o - 2 * g, offsetY: l - 2 * A, scaleX: g, scaleY: A };
    }
    getPattern(t, e, s, i) {
        _c(t, this._bbox);
        let r;
        if (i === Yt.SHADING) r = F.singularValueDecompose2dScale(ct(t));
        else if (((r = F.singularValueDecompose2dScale(e.baseTransform)), this.matrix)) {
            const o = F.singularValueDecompose2dScale(this.matrix);
            r = [r[0] * o[0], r[1] * o[1]];
        }
        const a = this._createMeshCanvas(r, i === Yt.SHADING ? null : this._background, e.cachedCanvases);
        return i !== Yt.SHADING && (t.setTransform(...e.baseTransform), this.matrix && t.transform(...this.matrix)), t.translate(a.offsetX, a.offsetY), t.scale(a.scaleX, a.scaleY), t.createPattern(a.canvas, "no-repeat");
    }
}
class Lp extends Ad {
    getPattern() {
        return "hotpink";
    }
}
function Ip(d) {
    switch (d[0]) {
        case "RadialAxial":
            return new Pp(d);
        case "Mesh":
            return new kp(d);
        case "Dummy":
            return new Lp();
    }
    throw new Error(`Unknown IR type: ${d[0]}`);
}
const Dd = { COLORED: 1, UNCOLORED: 2 },
    Sh = class Sh {
        constructor(t, e, s, i, r) {
            (this.operatorList = t[2]),
                (this.matrix = t[3]),
                (this.bbox = t[4]),
                (this.xstep = t[5]),
                (this.ystep = t[6]),
                (this.paintType = t[7]),
                (this.tilingType = t[8]),
                (this.color = e),
                (this.ctx = s),
                (this.canvasGraphicsFactory = i),
                (this.baseTransform = r);
        }
        createPatternCanvas(t) {
            const { bbox: e, operatorList: s, paintType: i, tilingType: r, color: a, canvasGraphicsFactory: o } = this;
            let { xstep: l, ystep: h } = this;
            (l = Math.abs(l)), (h = Math.abs(h)), Oh("TilingType: " + r);
            const c = e[0],
                u = e[1],
                p = e[2],
                g = e[3],
                A = p - c,
                y = g - u,
                v = F.singularValueDecompose2dScale(this.matrix),
                w = F.singularValueDecompose2dScale(this.baseTransform),
                _ = v[0] * w[0],
                E = v[1] * w[1];
            let S = A,
                x = y,
                T = !1,
                C = !1;
            const k = Math.ceil(l * _),
                N = Math.ceil(h * E),
                W = Math.ceil(A * _),
                $ = Math.ceil(y * E);
            k >= W ? (S = l) : (T = !0), N >= $ ? (x = h) : (C = !0);
            const ot = this.getSizeAndScale(S, this.ctx.canvas.width, _),
                mt = this.getSizeAndScale(x, this.ctx.canvas.height, E),
                Z = t.cachedCanvases.getCanvas("pattern", ot.size, mt.size),
                Qt = Z.context,
                I = o.createCanvasGraphics(Qt);
            if (
                ((I.groupLevel = t.groupLevel),
                this.setFillAndStrokeStyleToContext(I, i, a),
                Qt.translate(-ot.scale * c, -mt.scale * u),
                I.transform(ot.scale, 0, 0, mt.scale, 0, 0),
                Qt.save(),
                this.clipBbox(I, c, u, p, g),
                (I.baseTransform = ct(I.ctx)),
                I.executeOperatorList(s),
                I.endDrawing(),
                Qt.restore(),
                T || C)
            ) {
                const B = Z.canvas;
                T && (S = l), C && (x = h);
                const ge = this.getSizeAndScale(S, this.ctx.canvas.width, _),
                    os = this.getSizeAndScale(x, this.ctx.canvas.height, E),
                    Ps = ge.size,
                    Le = os.size,
                    Gt = t.cachedCanvases.getCanvas("pattern-workaround", Ps, Le),
                    St = Gt.context,
                    hr = T ? Math.floor(A / l) : 0,
                    Ta = C ? Math.floor(y / h) : 0;
                for (let oe = 0; oe <= hr; oe++) for (let lt = 0; lt <= Ta; lt++) St.drawImage(B, Ps * oe, Le * lt, Ps, Le, 0, 0, Ps, Le);
                return { canvas: Gt.canvas, scaleX: ge.scale, scaleY: os.scale, offsetX: c, offsetY: u };
            }
            return { canvas: Z.canvas, scaleX: ot.scale, scaleY: mt.scale, offsetX: c, offsetY: u };
        }
        getSizeAndScale(t, e, s) {
            const i = Math.max(Sh.MAX_PATTERN_SIZE, e);
            let r = Math.ceil(t * s);
            return r >= i ? (r = i) : (s = r / t), { scale: s, size: r };
        }
        clipBbox(t, e, s, i, r) {
            const a = i - e,
                o = r - s;
            t.ctx.rect(e, s, a, o), t.current.updateRectMinMax(ct(t.ctx), [e, s, i, r]), t.clip(), t.endPath();
        }
        setFillAndStrokeStyleToContext(t, e, s) {
            const i = t.ctx,
                r = t.current;
            switch (e) {
                case Dd.COLORED:
                    const a = this.ctx;
                    (i.fillStyle = a.fillStyle), (i.strokeStyle = a.strokeStyle), (r.fillColor = a.fillStyle), (r.strokeColor = a.strokeStyle);
                    break;
                case Dd.UNCOLORED:
                    const o = F.makeHexColor(s[0], s[1], s[2]);
                    (i.fillStyle = o), (i.strokeStyle = o), (r.fillColor = o), (r.strokeColor = o);
                    break;
                default:
                    throw new rp(`Unsupported paint type: ${e}`);
            }
        }
        getPattern(t, e, s, i) {
            let r = s;
            i !== Yt.SHADING && ((r = F.transform(r, e.baseTransform)), this.matrix && (r = F.transform(r, this.matrix)));
            const a = this.createPatternCanvas(e);
            let o = new DOMMatrix(r);
            (o = o.translate(a.offsetX, a.offsetY)), (o = o.scale(1 / a.scaleX, 1 / a.scaleY));
            const l = t.createPattern(a.canvas, "repeat");
            return l.setTransform(o), l;
        }
    };
O(Sh, "MAX_PATTERN_SIZE", 3e3);
let Sc = Sh;
function Dp({ src: d, srcPos: t = 0, dest: e, width: s, height: i, nonBlackColor: r = 4294967295, inverseDecode: a = !1 }) {
    const o = ne.isLittleEndian ? 4278190080 : 255,
        [l, h] = a ? [r, o] : [o, r],
        c = s >> 3,
        u = s & 7,
        p = d.length;
    e = new Uint32Array(e.buffer);
    let g = 0;
    for (let A = 0; A < i; A++) {
        for (const v = t + c; t < v; t++) {
            const w = t < p ? d[t] : 255;
            (e[g++] = w & 128 ? h : l), (e[g++] = w & 64 ? h : l), (e[g++] = w & 32 ? h : l), (e[g++] = w & 16 ? h : l), (e[g++] = w & 8 ? h : l), (e[g++] = w & 4 ? h : l), (e[g++] = w & 2 ? h : l), (e[g++] = w & 1 ? h : l);
        }
        if (u === 0) continue;
        const y = t < p ? d[t++] : 255;
        for (let v = 0; v < u; v++) e[g++] = y & (1 << (7 - v)) ? h : l;
    }
    return { srcPos: t, destPos: g };
}
const Fd = 16,
    Nd = 100,
    Fp = 15,
    Od = 10,
    Hd = 1e3,
    pe = 16;
function Np(d, t) {
    if (d._removeMirroring) throw new Error("Context is already forwarding operations.");
    (d.__originalSave = d.save),
        (d.__originalRestore = d.restore),
        (d.__originalRotate = d.rotate),
        (d.__originalScale = d.scale),
        (d.__originalTranslate = d.translate),
        (d.__originalTransform = d.transform),
        (d.__originalSetTransform = d.setTransform),
        (d.__originalResetTransform = d.resetTransform),
        (d.__originalClip = d.clip),
        (d.__originalMoveTo = d.moveTo),
        (d.__originalLineTo = d.lineTo),
        (d.__originalBezierCurveTo = d.bezierCurveTo),
        (d.__originalRect = d.rect),
        (d.__originalClosePath = d.closePath),
        (d.__originalBeginPath = d.beginPath),
        (d._removeMirroring = () => {
            (d.save = d.__originalSave),
                (d.restore = d.__originalRestore),
                (d.rotate = d.__originalRotate),
                (d.scale = d.__originalScale),
                (d.translate = d.__originalTranslate),
                (d.transform = d.__originalTransform),
                (d.setTransform = d.__originalSetTransform),
                (d.resetTransform = d.__originalResetTransform),
                (d.clip = d.__originalClip),
                (d.moveTo = d.__originalMoveTo),
                (d.lineTo = d.__originalLineTo),
                (d.bezierCurveTo = d.__originalBezierCurveTo),
                (d.rect = d.__originalRect),
                (d.closePath = d.__originalClosePath),
                (d.beginPath = d.__originalBeginPath),
                delete d._removeMirroring;
        }),
        (d.save = function () {
            t.save(), this.__originalSave();
        }),
        (d.restore = function () {
            t.restore(), this.__originalRestore();
        }),
        (d.translate = function (s, i) {
            t.translate(s, i), this.__originalTranslate(s, i);
        }),
        (d.scale = function (s, i) {
            t.scale(s, i), this.__originalScale(s, i);
        }),
        (d.transform = function (s, i, r, a, o, l) {
            t.transform(s, i, r, a, o, l), this.__originalTransform(s, i, r, a, o, l);
        }),
        (d.setTransform = function (s, i, r, a, o, l) {
            t.setTransform(s, i, r, a, o, l), this.__originalSetTransform(s, i, r, a, o, l);
        }),
        (d.resetTransform = function () {
            t.resetTransform(), this.__originalResetTransform();
        }),
        (d.rotate = function (s) {
            t.rotate(s), this.__originalRotate(s);
        }),
        (d.clip = function (s) {
            t.clip(s), this.__originalClip(s);
        }),
        (d.moveTo = function (e, s) {
            t.moveTo(e, s), this.__originalMoveTo(e, s);
        }),
        (d.lineTo = function (e, s) {
            t.lineTo(e, s), this.__originalLineTo(e, s);
        }),
        (d.bezierCurveTo = function (e, s, i, r, a, o) {
            t.bezierCurveTo(e, s, i, r, a, o), this.__originalBezierCurveTo(e, s, i, r, a, o);
        }),
        (d.rect = function (e, s, i, r) {
            t.rect(e, s, i, r), this.__originalRect(e, s, i, r);
        }),
        (d.closePath = function () {
            t.closePath(), this.__originalClosePath();
        }),
        (d.beginPath = function () {
            t.beginPath(), this.__originalBeginPath();
        });
}
class Op {
    constructor(t) {
        (this.canvasFactory = t), (this.cache = Object.create(null));
    }
    getCanvas(t, e, s) {
        let i;
        return this.cache[t] !== void 0 ? ((i = this.cache[t]), this.canvasFactory.reset(i, e, s)) : ((i = this.canvasFactory.create(e, s)), (this.cache[t] = i)), i;
    }
    delete(t) {
        delete this.cache[t];
    }
    clear() {
        for (const t in this.cache) {
            const e = this.cache[t];
            this.canvasFactory.destroy(e), delete this.cache[t];
        }
    }
}
function Pl(d, t, e, s, i, r, a, o, l, h) {
    const [c, u, p, g, A, y] = ct(d);
    if (u === 0 && p === 0) {
        const _ = a * c + A,
            E = Math.round(_),
            S = o * g + y,
            x = Math.round(S),
            T = (a + l) * c + A,
            C = Math.abs(Math.round(T) - E) || 1,
            k = (o + h) * g + y,
            N = Math.abs(Math.round(k) - x) || 1;
        return d.setTransform(Math.sign(c), 0, 0, Math.sign(g), E, x), d.drawImage(t, e, s, i, r, 0, 0, C, N), d.setTransform(c, u, p, g, A, y), [C, N];
    }
    if (c === 0 && g === 0) {
        const _ = o * p + A,
            E = Math.round(_),
            S = a * u + y,
            x = Math.round(S),
            T = (o + h) * p + A,
            C = Math.abs(Math.round(T) - E) || 1,
            k = (a + l) * u + y,
            N = Math.abs(Math.round(k) - x) || 1;
        return d.setTransform(0, Math.sign(u), Math.sign(p), 0, E, x), d.drawImage(t, e, s, i, r, 0, 0, N, C), d.setTransform(c, u, p, g, A, y), [N, C];
    }
    d.drawImage(t, e, s, i, r, a, o, l, h);
    const v = Math.hypot(c, u),
        w = Math.hypot(p, g);
    return [v * l, w * h];
}
function Hp(d) {
    const { width: t, height: e } = d;
    if (t > Hd || e > Hd) return null;
    const s = 1e3,
        i = new Uint8Array([0, 2, 4, 0, 1, 0, 5, 4, 8, 10, 0, 8, 0, 2, 1, 0]),
        r = t + 1;
    let a = new Uint8Array(r * (e + 1)),
        o,
        l,
        h;
    const c = (t + 7) & -8;
    let u = new Uint8Array(c * e),
        p = 0;
    for (const w of d.data) {
        let _ = 128;
        for (; _ > 0; ) (u[p++] = w & _ ? 0 : 255), (_ >>= 1);
    }
    let g = 0;
    for (p = 0, u[p] !== 0 && ((a[0] = 1), ++g), l = 1; l < t; l++) u[p] !== u[p + 1] && ((a[l] = u[p] ? 2 : 1), ++g), p++;
    for (u[p] !== 0 && ((a[l] = 2), ++g), o = 1; o < e; o++) {
        (p = o * c), (h = o * r), u[p - c] !== u[p] && ((a[h] = u[p] ? 1 : 8), ++g);
        let w = (u[p] ? 4 : 0) + (u[p - c] ? 8 : 0);
        for (l = 1; l < t; l++) (w = (w >> 2) + (u[p + 1] ? 4 : 0) + (u[p - c + 1] ? 8 : 0)), i[w] && ((a[h + l] = i[w]), ++g), p++;
        if ((u[p - c] !== u[p] && ((a[h + l] = u[p] ? 2 : 4), ++g), g > s)) return null;
    }
    for (p = c * (e - 1), h = o * r, u[p] !== 0 && ((a[h] = 8), ++g), l = 1; l < t; l++) u[p] !== u[p + 1] && ((a[h + l] = u[p] ? 4 : 8), ++g), p++;
    if ((u[p] !== 0 && ((a[h + l] = 4), ++g), g > s)) return null;
    const A = new Int32Array([0, r, -1, 0, -r, 0, 0, 0, 1]),
        y = new Path2D();
    for (o = 0; g && o <= e; o++) {
        let w = o * r;
        const _ = w + t;
        for (; w < _ && !a[w]; ) w++;
        if (w === _) continue;
        y.moveTo(w % r, o);
        const E = w;
        let S = a[w];
        do {
            const x = A[S];
            do w += x;
            while (!a[w]);
            const T = a[w];
            T !== 5 && T !== 10 ? ((S = T), (a[w] = 0)) : ((S = T & ((51 * S) >> 4)), (a[w] &= (S >> 2) | (S << 2))), y.lineTo(w % r, (w / r) | 0), a[w] || --g;
        } while (E !== w);
        --o;
    }
    return (
        (u = null),
        (a = null),
        function (w) {
            w.save(), w.scale(1 / t, -1 / e), w.translate(0, -e), w.fill(y), w.beginPath(), w.restore();
        }
    );
}
class Bd {
    constructor(t, e) {
        (this.alphaIsShape = !1),
            (this.fontSize = 0),
            (this.fontSizeScale = 1),
            (this.textMatrix = Yd),
            (this.textMatrixScale = 1),
            (this.fontMatrix = Qh),
            (this.leading = 0),
            (this.x = 0),
            (this.y = 0),
            (this.lineX = 0),
            (this.lineY = 0),
            (this.charSpacing = 0),
            (this.wordSpacing = 0),
            (this.textHScale = 1),
            (this.textRenderingMode = zt.FILL),
            (this.textRise = 0),
            (this.fillColor = "#000000"),
            (this.strokeColor = "#000000"),
            (this.patternFill = !1),
            (this.patternStroke = !1),
            (this.fillAlpha = 1),
            (this.strokeAlpha = 1),
            (this.lineWidth = 1),
            (this.activeSMask = null),
            (this.transferMaps = "none"),
            this.startNewPathAndClipBox([0, 0, t, e]);
    }
    clone() {
        const t = Object.create(this);
        return (t.clipBox = this.clipBox.slice()), t;
    }
    setCurrentPoint(t, e) {
        (this.x = t), (this.y = e);
    }
    updatePathMinMax(t, e, s) {
        ([e, s] = F.applyTransform([e, s], t)), (this.minX = Math.min(this.minX, e)), (this.minY = Math.min(this.minY, s)), (this.maxX = Math.max(this.maxX, e)), (this.maxY = Math.max(this.maxY, s));
    }
    updateRectMinMax(t, e) {
        const s = F.applyTransform(e, t),
            i = F.applyTransform(e.slice(2), t),
            r = F.applyTransform([e[0], e[3]], t),
            a = F.applyTransform([e[2], e[1]], t);
        (this.minX = Math.min(this.minX, s[0], i[0], r[0], a[0])),
            (this.minY = Math.min(this.minY, s[1], i[1], r[1], a[1])),
            (this.maxX = Math.max(this.maxX, s[0], i[0], r[0], a[0])),
            (this.maxY = Math.max(this.maxY, s[1], i[1], r[1], a[1]));
    }
    updateScalingPathMinMax(t, e) {
        F.scaleMinMax(t, e), (this.minX = Math.min(this.minX, e[0])), (this.minY = Math.min(this.minY, e[1])), (this.maxX = Math.max(this.maxX, e[2])), (this.maxY = Math.max(this.maxY, e[3]));
    }
    updateCurvePathMinMax(t, e, s, i, r, a, o, l, h, c) {
        const u = F.bezierBoundingBox(e, s, i, r, a, o, l, h, c);
        c || this.updateRectMinMax(t, u);
    }
    getPathBoundingBox(t = Yt.FILL, e = null) {
        const s = [this.minX, this.minY, this.maxX, this.maxY];
        if (t === Yt.STROKE) {
            e || nt("Stroke bounding box must include transform.");
            const i = F.singularValueDecompose2dScale(e),
                r = (i[0] * this.lineWidth) / 2,
                a = (i[1] * this.lineWidth) / 2;
            (s[0] -= r), (s[1] -= a), (s[2] += r), (s[3] += a);
        }
        return s;
    }
    updateClipFromPath() {
        const t = F.intersect(this.clipBox, this.getPathBoundingBox());
        this.startNewPathAndClipBox(t || [0, 0, 0, 0]);
    }
    isEmptyClip() {
        return this.minX === 1 / 0;
    }
    startNewPathAndClipBox(t) {
        (this.clipBox = t), (this.minX = 1 / 0), (this.minY = 1 / 0), (this.maxX = 0), (this.maxY = 0);
    }
    getClippedPathBoundingBox(t = Yt.FILL, e = null) {
        return F.intersect(this.clipBox, this.getPathBoundingBox(t, e));
    }
}
function $d(d, t) {
    if (t instanceof ImageData) {
        d.putImageData(t, 0, 0);
        return;
    }
    const e = t.height,
        s = t.width,
        i = e % pe,
        r = (e - i) / pe,
        a = i === 0 ? r : r + 1,
        o = d.createImageData(s, pe);
    let l = 0,
        h;
    const c = t.data,
        u = o.data;
    let p, g, A, y;
    if (t.kind === Ll.GRAYSCALE_1BPP) {
        const v = c.byteLength,
            w = new Uint32Array(u.buffer, 0, u.byteLength >> 2),
            _ = w.length,
            E = (s + 7) >> 3,
            S = 4294967295,
            x = ne.isLittleEndian ? 4278190080 : 255;
        for (p = 0; p < a; p++) {
            for (A = p < r ? pe : i, h = 0, g = 0; g < A; g++) {
                const T = v - l;
                let C = 0;
                const k = T > E ? s : T * 8 - 7,
                    N = k & -8;
                let W = 0,
                    $ = 0;
                for (; C < N; C += 8)
                    ($ = c[l++]),
                        (w[h++] = $ & 128 ? S : x),
                        (w[h++] = $ & 64 ? S : x),
                        (w[h++] = $ & 32 ? S : x),
                        (w[h++] = $ & 16 ? S : x),
                        (w[h++] = $ & 8 ? S : x),
                        (w[h++] = $ & 4 ? S : x),
                        (w[h++] = $ & 2 ? S : x),
                        (w[h++] = $ & 1 ? S : x);
                for (; C < k; C++) W === 0 && (($ = c[l++]), (W = 128)), (w[h++] = $ & W ? S : x), (W >>= 1);
            }
            for (; h < _; ) w[h++] = 0;
            d.putImageData(o, 0, p * pe);
        }
    } else if (t.kind === Ll.RGBA_32BPP) {
        for (g = 0, y = s * pe * 4, p = 0; p < r; p++) u.set(c.subarray(l, l + y)), (l += y), d.putImageData(o, 0, g), (g += pe);
        p < a && ((y = s * i * 4), u.set(c.subarray(l, l + y)), d.putImageData(o, 0, g));
    } else if (t.kind === Ll.RGB_24BPP)
        for (A = pe, y = s * A, p = 0; p < a; p++) {
            for (p >= r && ((A = i), (y = s * A)), h = 0, g = y; g--; ) (u[h++] = c[l++]), (u[h++] = c[l++]), (u[h++] = c[l++]), (u[h++] = 255);
            d.putImageData(o, 0, p * pe);
        }
    else throw new Error(`bad image kind: ${t.kind}`);
}
function Gd(d, t) {
    if (t.bitmap) {
        d.drawImage(t.bitmap, 0, 0);
        return;
    }
    const e = t.height,
        s = t.width,
        i = e % pe,
        r = (e - i) / pe,
        a = i === 0 ? r : r + 1,
        o = d.createImageData(s, pe);
    let l = 0;
    const h = t.data,
        c = o.data;
    for (let u = 0; u < a; u++) {
        const p = u < r ? pe : i;
        ({ srcPos: l } = Dp({ src: h, srcPos: l, dest: c, width: s, height: p, nonBlackColor: 0 })), d.putImageData(o, 0, u * pe);
    }
}
function Pa(d, t) {
    const e = ["strokeStyle", "fillStyle", "fillRule", "globalAlpha", "lineWidth", "lineCap", "lineJoin", "miterLimit", "globalCompositeOperation", "font", "filter"];
    for (const s of e) d[s] !== void 0 && (t[s] = d[s]);
    d.setLineDash !== void 0 && (t.setLineDash(d.getLineDash()), (t.lineDashOffset = d.lineDashOffset));
}
function Ml(d) {
    if (
        ((d.strokeStyle = d.fillStyle = "#000000"),
        (d.fillRule = "nonzero"),
        (d.globalAlpha = 1),
        (d.lineWidth = 1),
        (d.lineCap = "butt"),
        (d.lineJoin = "miter"),
        (d.miterLimit = 10),
        (d.globalCompositeOperation = "source-over"),
        (d.font = "10px sans-serif"),
        d.setLineDash !== void 0 && (d.setLineDash([]), (d.lineDashOffset = 0)),
        !Kt)
    ) {
        const { filter: t } = d;
        t !== "none" && t !== "" && (d.filter = "none");
    }
}
function zd(d, t) {
    if (t) return !0;
    const e = F.singularValueDecompose2dScale(d);
    (e[0] = Math.fround(e[0])), (e[1] = Math.fround(e[1]));
    const s = Math.fround((globalThis.devicePixelRatio || 1) * ji.PDF_TO_CSS_UNITS);
    return e[0] <= s && e[1] <= s;
}
const Bp = ["butt", "round", "square"],
    $p = ["miter", "round", "bevel"],
    Gp = {},
    Ud = {};
var as, Ec, xc, Cc;
const Sd = class Sd {
    constructor(t, e, s, i, r, { optionalContentConfig: a, markedContentStack: o = null }, l, h) {
        m(this, as);
        (this.ctx = t),
            (this.current = new Bd(this.ctx.canvas.width, this.ctx.canvas.height)),
            (this.stateStack = []),
            (this.pendingClip = null),
            (this.pendingEOFill = !1),
            (this.res = null),
            (this.xobjs = null),
            (this.commonObjs = e),
            (this.objs = s),
            (this.canvasFactory = i),
            (this.filterFactory = r),
            (this.groupStack = []),
            (this.processingType3 = null),
            (this.baseTransform = null),
            (this.baseTransformStack = []),
            (this.groupLevel = 0),
            (this.smaskStack = []),
            (this.smaskCounter = 0),
            (this.tempSMask = null),
            (this.suspendedCtx = null),
            (this.contentVisible = !0),
            (this.markedContentStack = o || []),
            (this.optionalContentConfig = a),
            (this.cachedCanvases = new Op(this.canvasFactory)),
            (this.cachedPatterns = new Map()),
            (this.annotationCanvasMap = l),
            (this.viewportScale = 1),
            (this.outputScaleX = 1),
            (this.outputScaleY = 1),
            (this.pageColors = h),
            (this._cachedScaleForStroking = [-1, 0]),
            (this._cachedGetSinglePixelWidth = null),
            (this._cachedBitmapsMap = new Map());
    }
    getObject(t, e = null) {
        return typeof t == "string" ? (t.startsWith("g_") ? this.commonObjs.get(t) : this.objs.get(t)) : e;
    }
    beginDrawing({ transform: t, viewport: e, transparency: s = !1, background: i = null }) {
        const r = this.ctx.canvas.width,
            a = this.ctx.canvas.height,
            o = this.ctx.fillStyle;
        if (((this.ctx.fillStyle = i || "#ffffff"), this.ctx.fillRect(0, 0, r, a), (this.ctx.fillStyle = o), s)) {
            const l = this.cachedCanvases.getCanvas("transparent", r, a);
            (this.compositeCtx = this.ctx), (this.transparentCanvas = l.canvas), (this.ctx = l.context), this.ctx.save(), this.ctx.transform(...ct(this.compositeCtx));
        }
        this.ctx.save(), Ml(this.ctx), t && (this.ctx.transform(...t), (this.outputScaleX = t[0]), (this.outputScaleY = t[0])), this.ctx.transform(...e.transform), (this.viewportScale = e.scale), (this.baseTransform = ct(this.ctx));
    }
    executeOperatorList(t, e, s, i) {
        const r = t.argsArray,
            a = t.fnArray;
        let o = e || 0;
        const l = r.length;
        if (l === o) return o;
        const h = l - o > Od && typeof s == "function",
            c = h ? Date.now() + Fp : 0;
        let u = 0;
        const p = this.commonObjs,
            g = this.objs;
        let A;
        for (;;) {
            if (i !== void 0 && o === i.nextBreakPoint) return i.breakIt(o, s), o;
            if (((A = a[o]), A !== je.dependency)) this[A].apply(this, r[o]);
            else
                for (const y of r[o]) {
                    const v = y.startsWith("g_") ? p : g;
                    if (!v.has(y)) return v.get(y, s), o;
                }
            if ((o++, o === l)) return o;
            if (h && ++u > Od) {
                if (Date.now() > c) return s(), o;
                u = 0;
            }
        }
    }
    endDrawing() {
        b(this, as, Ec).call(this), this.cachedCanvases.clear(), this.cachedPatterns.clear();
        for (const t of this._cachedBitmapsMap.values()) {
            for (const e of t.values()) typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement && (e.width = e.height = 0);
            t.clear();
        }
        this._cachedBitmapsMap.clear(), b(this, as, xc).call(this);
    }
    _scaleImage(t, e) {
        const s = t.width ?? t.displayWidth,
            i = t.height ?? t.displayHeight;
        let r = Math.max(Math.hypot(e[0], e[1]), 1),
            a = Math.max(Math.hypot(e[2], e[3]), 1),
            o = s,
            l = i,
            h = "prescale1",
            c,
            u;
        for (; (r > 2 && o > 1) || (a > 2 && l > 1); ) {
            let p = o,
                g = l;
            r > 2 && o > 1 && ((p = o >= 16384 ? Math.floor(o / 2) - 1 || 1 : Math.ceil(o / 2)), (r /= o / p)),
                a > 2 && l > 1 && ((g = l >= 16384 ? Math.floor(l / 2) - 1 || 1 : Math.ceil(l) / 2), (a /= l / g)),
                (c = this.cachedCanvases.getCanvas(h, p, g)),
                (u = c.context),
                u.clearRect(0, 0, p, g),
                u.drawImage(t, 0, 0, o, l, 0, 0, p, g),
                (t = c.canvas),
                (o = p),
                (l = g),
                (h = h === "prescale1" ? "prescale2" : "prescale1");
        }
        return { img: t, paintWidth: o, paintHeight: l };
    }
    _createMaskCanvas(t) {
        const e = this.ctx,
            { width: s, height: i } = t,
            r = this.current.fillColor,
            a = this.current.patternFill,
            o = ct(e);
        let l, h, c, u;
        if ((t.bitmap || t.data) && t.count > 1) {
            const k = t.bitmap || t.data.buffer;
            (h = JSON.stringify(a ? o : [o.slice(0, 4), r])), (l = this._cachedBitmapsMap.get(k)), l || ((l = new Map()), this._cachedBitmapsMap.set(k, l));
            const N = l.get(h);
            if (N && !a) {
                const W = Math.round(Math.min(o[0], o[2]) + o[4]),
                    $ = Math.round(Math.min(o[1], o[3]) + o[5]);
                return { canvas: N, offsetX: W, offsetY: $ };
            }
            c = N;
        }
        c || ((u = this.cachedCanvases.getCanvas("maskCanvas", s, i)), Gd(u.context, t));
        let p = F.transform(o, [1 / s, 0, 0, -1 / i, 0, 0]);
        p = F.transform(p, [1, 0, 0, 1, 0, -i]);
        const [g, A, y, v] = F.getAxialAlignedBoundingBox([0, 0, s, i], p),
            w = Math.round(y - g) || 1,
            _ = Math.round(v - A) || 1,
            E = this.cachedCanvases.getCanvas("fillCanvas", w, _),
            S = E.context,
            x = g,
            T = A;
        S.translate(-x, -T),
            S.transform(...p),
            c || ((c = this._scaleImage(u.canvas, ls(S))), (c = c.img), l && a && l.set(h, c)),
            (S.imageSmoothingEnabled = zd(ct(S), t.interpolate)),
            Pl(S, c, 0, 0, c.width, c.height, 0, 0, s, i),
            (S.globalCompositeOperation = "source-in");
        const C = F.transform(ls(S), [1, 0, 0, 1, -x, -T]);
        return (
            (S.fillStyle = a ? r.getPattern(e, this, C, Yt.FILL) : r), S.fillRect(0, 0, s, i), l && !a && (this.cachedCanvases.delete("fillCanvas"), l.set(h, E.canvas)), { canvas: E.canvas, offsetX: Math.round(x), offsetY: Math.round(T) }
        );
    }
    setLineWidth(t) {
        t !== this.current.lineWidth && (this._cachedScaleForStroking[0] = -1), (this.current.lineWidth = t), (this.ctx.lineWidth = t);
    }
    setLineCap(t) {
        this.ctx.lineCap = Bp[t];
    }
    setLineJoin(t) {
        this.ctx.lineJoin = $p[t];
    }
    setMiterLimit(t) {
        this.ctx.miterLimit = t;
    }
    setDash(t, e) {
        const s = this.ctx;
        s.setLineDash !== void 0 && (s.setLineDash(t), (s.lineDashOffset = e));
    }
    setRenderingIntent(t) {}
    setFlatness(t) {}
    setGState(t) {
        for (const [e, s] of t)
            switch (e) {
                case "LW":
                    this.setLineWidth(s);
                    break;
                case "LC":
                    this.setLineCap(s);
                    break;
                case "LJ":
                    this.setLineJoin(s);
                    break;
                case "ML":
                    this.setMiterLimit(s);
                    break;
                case "D":
                    this.setDash(s[0], s[1]);
                    break;
                case "RI":
                    this.setRenderingIntent(s);
                    break;
                case "FL":
                    this.setFlatness(s);
                    break;
                case "Font":
                    this.setFont(s[0], s[1]);
                    break;
                case "CA":
                    this.current.strokeAlpha = s;
                    break;
                case "ca":
                    (this.current.fillAlpha = s), (this.ctx.globalAlpha = s);
                    break;
                case "BM":
                    this.ctx.globalCompositeOperation = s;
                    break;
                case "SMask":
                    (this.current.activeSMask = s ? this.tempSMask : null), (this.tempSMask = null), this.checkSMaskState();
                    break;
                case "TR":
                    this.ctx.filter = this.current.transferMaps = this.filterFactory.addFilter(s);
                    break;
            }
    }
    get inSMaskMode() {
        return !!this.suspendedCtx;
    }
    checkSMaskState() {
        const t = this.inSMaskMode;
        this.current.activeSMask && !t ? this.beginSMaskMode() : !this.current.activeSMask && t && this.endSMaskMode();
    }
    beginSMaskMode() {
        if (this.inSMaskMode) throw new Error("beginSMaskMode called while already in smask mode");
        const t = this.ctx.canvas.width,
            e = this.ctx.canvas.height,
            s = "smaskGroupAt" + this.groupLevel,
            i = this.cachedCanvases.getCanvas(s, t, e);
        (this.suspendedCtx = this.ctx), (this.ctx = i.context);
        const r = this.ctx;
        r.setTransform(...ct(this.suspendedCtx)),
            Pa(this.suspendedCtx, r),
            Np(r, this.suspendedCtx),
            this.setGState([
                ["BM", "source-over"],
                ["ca", 1],
                ["CA", 1],
            ]);
    }
    endSMaskMode() {
        if (!this.inSMaskMode) throw new Error("endSMaskMode called while not in smask mode");
        this.ctx._removeMirroring(), Pa(this.ctx, this.suspendedCtx), (this.ctx = this.suspendedCtx), (this.suspendedCtx = null);
    }
    compose(t) {
        if (!this.current.activeSMask) return;
        t ? ((t[0] = Math.floor(t[0])), (t[1] = Math.floor(t[1])), (t[2] = Math.ceil(t[2])), (t[3] = Math.ceil(t[3]))) : (t = [0, 0, this.ctx.canvas.width, this.ctx.canvas.height]);
        const e = this.current.activeSMask,
            s = this.suspendedCtx;
        this.composeSMask(s, e, this.ctx, t), this.ctx.save(), this.ctx.setTransform(1, 0, 0, 1, 0, 0), this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height), this.ctx.restore();
    }
    composeSMask(t, e, s, i) {
        const r = i[0],
            a = i[1],
            o = i[2] - r,
            l = i[3] - a;
        o === 0 ||
            l === 0 ||
            (this.genericComposeSMask(e.context, s, o, l, e.subtype, e.backdrop, e.transferMap, r, a, e.offsetX, e.offsetY),
            t.save(),
            (t.globalAlpha = 1),
            (t.globalCompositeOperation = "source-over"),
            t.setTransform(1, 0, 0, 1, 0, 0),
            t.drawImage(s.canvas, 0, 0),
            t.restore());
    }
    genericComposeSMask(t, e, s, i, r, a, o, l, h, c, u) {
        let p = t.canvas,
            g = l - c,
            A = h - u;
        if (a) {
            const v = F.makeHexColor(...a);
            if (g < 0 || A < 0 || g + s > p.width || A + i > p.height) {
                const w = this.cachedCanvases.getCanvas("maskExtension", s, i),
                    _ = w.context;
                _.drawImage(p, -g, -A), (_.globalCompositeOperation = "destination-atop"), (_.fillStyle = v), _.fillRect(0, 0, s, i), (_.globalCompositeOperation = "source-over"), (p = w.canvas), (g = A = 0);
            } else {
                t.save(), (t.globalAlpha = 1), t.setTransform(1, 0, 0, 1, 0, 0);
                const w = new Path2D();
                w.rect(g, A, s, i), t.clip(w), (t.globalCompositeOperation = "destination-atop"), (t.fillStyle = v), t.fillRect(g, A, s, i), t.restore();
            }
        }
        e.save(), (e.globalAlpha = 1), e.setTransform(1, 0, 0, 1, 0, 0), r === "Alpha" && o ? (e.filter = this.filterFactory.addAlphaFilter(o)) : r === "Luminosity" && (e.filter = this.filterFactory.addLuminosityFilter(o));
        const y = new Path2D();
        y.rect(l, h, s, i), e.clip(y), (e.globalCompositeOperation = "destination-in"), e.drawImage(p, g, A, s, i, l, h, s, i), e.restore();
    }
    save() {
        this.inSMaskMode ? (Pa(this.ctx, this.suspendedCtx), this.suspendedCtx.save()) : this.ctx.save();
        const t = this.current;
        this.stateStack.push(t), (this.current = t.clone());
    }
    restore() {
        this.stateStack.length === 0 && this.inSMaskMode && this.endSMaskMode(),
            this.stateStack.length !== 0 &&
                ((this.current = this.stateStack.pop()),
                this.inSMaskMode ? (this.suspendedCtx.restore(), Pa(this.suspendedCtx, this.ctx)) : this.ctx.restore(),
                this.checkSMaskState(),
                (this.pendingClip = null),
                (this._cachedScaleForStroking[0] = -1),
                (this._cachedGetSinglePixelWidth = null));
    }
    transform(t, e, s, i, r, a) {
        this.ctx.transform(t, e, s, i, r, a), (this._cachedScaleForStroking[0] = -1), (this._cachedGetSinglePixelWidth = null);
    }
    constructPath(t, e, s) {
        const i = this.ctx,
            r = this.current;
        let a = r.x,
            o = r.y,
            l,
            h;
        const c = ct(i),
            u = (c[0] === 0 && c[3] === 0) || (c[1] === 0 && c[2] === 0),
            p = u ? s.slice(0) : null;
        for (let g = 0, A = 0, y = t.length; g < y; g++)
            switch (t[g] | 0) {
                case je.rectangle:
                    (a = e[A++]), (o = e[A++]);
                    const v = e[A++],
                        w = e[A++],
                        _ = a + v,
                        E = o + w;
                    i.moveTo(a, o), v === 0 || w === 0 ? i.lineTo(_, E) : (i.lineTo(_, o), i.lineTo(_, E), i.lineTo(a, E)), u || r.updateRectMinMax(c, [a, o, _, E]), i.closePath();
                    break;
                case je.moveTo:
                    (a = e[A++]), (o = e[A++]), i.moveTo(a, o), u || r.updatePathMinMax(c, a, o);
                    break;
                case je.lineTo:
                    (a = e[A++]), (o = e[A++]), i.lineTo(a, o), u || r.updatePathMinMax(c, a, o);
                    break;
                case je.curveTo:
                    (l = a), (h = o), (a = e[A + 4]), (o = e[A + 5]), i.bezierCurveTo(e[A], e[A + 1], e[A + 2], e[A + 3], a, o), r.updateCurvePathMinMax(c, l, h, e[A], e[A + 1], e[A + 2], e[A + 3], a, o, p), (A += 6);
                    break;
                case je.curveTo2:
                    (l = a), (h = o), i.bezierCurveTo(a, o, e[A], e[A + 1], e[A + 2], e[A + 3]), r.updateCurvePathMinMax(c, l, h, a, o, e[A], e[A + 1], e[A + 2], e[A + 3], p), (a = e[A + 2]), (o = e[A + 3]), (A += 4);
                    break;
                case je.curveTo3:
                    (l = a), (h = o), (a = e[A + 2]), (o = e[A + 3]), i.bezierCurveTo(e[A], e[A + 1], a, o, a, o), r.updateCurvePathMinMax(c, l, h, e[A], e[A + 1], a, o, a, o, p), (A += 4);
                    break;
                case je.closePath:
                    i.closePath();
                    break;
            }
        u && r.updateScalingPathMinMax(c, p), r.setCurrentPoint(a, o);
    }
    closePath() {
        this.ctx.closePath();
    }
    stroke(t = !0) {
        const e = this.ctx,
            s = this.current.strokeColor;
        (e.globalAlpha = this.current.strokeAlpha),
            this.contentVisible && (typeof s == "object" && s != null && s.getPattern ? (e.save(), (e.strokeStyle = s.getPattern(e, this, ls(e), Yt.STROKE)), this.rescaleAndStroke(!1), e.restore()) : this.rescaleAndStroke(!0)),
            t && this.consumePath(this.current.getClippedPathBoundingBox()),
            (e.globalAlpha = this.current.fillAlpha);
    }
    closeStroke() {
        this.closePath(), this.stroke();
    }
    fill(t = !0) {
        const e = this.ctx,
            s = this.current.fillColor,
            i = this.current.patternFill;
        let r = !1;
        i && (e.save(), (e.fillStyle = s.getPattern(e, this, ls(e), Yt.FILL)), (r = !0));
        const a = this.current.getClippedPathBoundingBox();
        this.contentVisible && a !== null && (this.pendingEOFill ? (e.fill("evenodd"), (this.pendingEOFill = !1)) : e.fill()), r && e.restore(), t && this.consumePath(a);
    }
    eoFill() {
        (this.pendingEOFill = !0), this.fill();
    }
    fillStroke() {
        this.fill(!1), this.stroke(!1), this.consumePath();
    }
    eoFillStroke() {
        (this.pendingEOFill = !0), this.fillStroke();
    }
    closeFillStroke() {
        this.closePath(), this.fillStroke();
    }
    closeEOFillStroke() {
        (this.pendingEOFill = !0), this.closePath(), this.fillStroke();
    }
    endPath() {
        this.consumePath();
    }
    clip() {
        this.pendingClip = Gp;
    }
    eoClip() {
        this.pendingClip = Ud;
    }
    beginText() {
        (this.current.textMatrix = Yd), (this.current.textMatrixScale = 1), (this.current.x = this.current.lineX = 0), (this.current.y = this.current.lineY = 0);
    }
    endText() {
        const t = this.pendingTextPaths,
            e = this.ctx;
        if (t === void 0) {
            e.beginPath();
            return;
        }
        const s = new Path2D(),
            i = e.getTransform().invertSelf();
        for (const { transform: r, x: a, y: o, fontSize: l, path: h } of t) s.addPath(h, new DOMMatrix(r).preMultiplySelf(i).translate(a, o).scale(l, -l));
        e.clip(s), e.beginPath(), delete this.pendingTextPaths;
    }
    setCharSpacing(t) {
        this.current.charSpacing = t;
    }
    setWordSpacing(t) {
        this.current.wordSpacing = t;
    }
    setHScale(t) {
        this.current.textHScale = t / 100;
    }
    setLeading(t) {
        this.current.leading = -t;
    }
    setFont(t, e) {
        var c;
        const s = this.commonObjs.get(t),
            i = this.current;
        if (!s) throw new Error(`Can't find font for ${t}`);
        if (
            ((i.fontMatrix = s.fontMatrix || Qh),
            (i.fontMatrix[0] === 0 || i.fontMatrix[3] === 0) && V("Invalid font matrix for font " + t),
            e < 0 ? ((e = -e), (i.fontDirection = -1)) : (i.fontDirection = 1),
            (this.current.font = s),
            (this.current.fontSize = e),
            s.isType3Font)
        )
            return;
        const r = s.loadedName || "sans-serif",
            a = ((c = s.systemFontInfo) == null ? void 0 : c.css) || `"${r}", ${s.fallbackName}`;
        let o = "normal";
        s.black ? (o = "900") : s.bold && (o = "bold");
        const l = s.italic ? "italic" : "normal";
        let h = e;
        e < Fd ? (h = Fd) : e > Nd && (h = Nd), (this.current.fontSizeScale = e / h), (this.ctx.font = `${l} ${o} ${h}px ${a}`);
    }
    setTextRenderingMode(t) {
        this.current.textRenderingMode = t;
    }
    setTextRise(t) {
        this.current.textRise = t;
    }
    moveText(t, e) {
        (this.current.x = this.current.lineX += t), (this.current.y = this.current.lineY += e);
    }
    setLeadingMoveText(t, e) {
        this.setLeading(-e), this.moveText(t, e);
    }
    setTextMatrix(t, e, s, i, r, a) {
        (this.current.textMatrix = [t, e, s, i, r, a]), (this.current.textMatrixScale = Math.hypot(t, e)), (this.current.x = this.current.lineX = 0), (this.current.y = this.current.lineY = 0);
    }
    nextLine() {
        this.moveText(0, this.current.leading);
    }
    paintChar(t, e, s, i, r) {
        const a = this.ctx,
            o = this.current,
            l = o.font,
            h = o.textRenderingMode,
            c = o.fontSize / o.fontSizeScale,
            u = h & zt.FILL_STROKE_MASK,
            p = !!(h & zt.ADD_TO_PATH_FLAG),
            g = o.patternFill && !l.missingFile,
            A = o.patternStroke && !l.missingFile;
        let y;
        if (((l.disableFontFace || p || g || A) && (y = l.getPathGenerator(this.commonObjs, t)), l.disableFontFace || g || A)) {
            if ((a.save(), a.translate(e, s), a.scale(c, -c), u === zt.FILL || u === zt.FILL_STROKE))
                if (i) {
                    const v = a.getTransform();
                    a.setTransform(...i), a.fill(b(this, as, Cc).call(this, y, v, i));
                } else a.fill(y);
            if (u === zt.STROKE || u === zt.FILL_STROKE)
                if (r) {
                    const v = a.getTransform();
                    a.setTransform(...r), a.stroke(b(this, as, Cc).call(this, y, v, r));
                } else (a.lineWidth /= c), a.stroke(y);
            a.restore();
        } else (u === zt.FILL || u === zt.FILL_STROKE) && a.fillText(t, e, s), (u === zt.STROKE || u === zt.FILL_STROKE) && a.strokeText(t, e, s);
        p && (this.pendingTextPaths || (this.pendingTextPaths = [])).push({ transform: ct(a), x: e, y: s, fontSize: c, path: y });
    }
    get isFontSubpixelAAEnabled() {
        const { context: t } = this.cachedCanvases.getCanvas("isFontSubpixelAAEnabled", 10, 10);
        t.scale(1.5, 1), t.fillText("I", 0, 10);
        const e = t.getImageData(0, 0, 10, 10).data;
        let s = !1;
        for (let i = 3; i < e.length; i += 4)
            if (e[i] > 0 && e[i] < 255) {
                s = !0;
                break;
            }
        return q(this, "isFontSubpixelAAEnabled", s);
    }
    showText(t) {
        const e = this.current,
            s = e.font;
        if (s.isType3Font) return this.showType3Text(t);
        const i = e.fontSize;
        if (i === 0) return;
        const r = this.ctx,
            a = e.fontSizeScale,
            o = e.charSpacing,
            l = e.wordSpacing,
            h = e.fontDirection,
            c = e.textHScale * h,
            u = t.length,
            p = s.vertical,
            g = p ? 1 : -1,
            A = s.defaultVMetrics,
            y = i * e.fontMatrix[0],
            v = e.textRenderingMode === zt.FILL && !s.disableFontFace && !e.patternFill;
        r.save(), r.transform(...e.textMatrix), r.translate(e.x, e.y + e.textRise), h > 0 ? r.scale(c, -1) : r.scale(c, 1);
        let w, _;
        if (e.patternFill) {
            r.save();
            const C = e.fillColor.getPattern(r, this, ls(r), Yt.FILL);
            (w = ct(r)), r.restore(), (r.fillStyle = C);
        }
        if (e.patternStroke) {
            r.save();
            const C = e.strokeColor.getPattern(r, this, ls(r), Yt.STROKE);
            (_ = ct(r)), r.restore(), (r.strokeStyle = C);
        }
        let E = e.lineWidth;
        const S = e.textMatrixScale;
        if (S === 0 || E === 0) {
            const C = e.textRenderingMode & zt.FILL_STROKE_MASK;
            (C === zt.STROKE || C === zt.FILL_STROKE) && (E = this.getSinglePixelWidth());
        } else E /= S;
        if ((a !== 1 && (r.scale(a, a), (E /= a)), (r.lineWidth = E), s.isInvalidPDFjsFont)) {
            const C = [];
            let k = 0;
            for (const N of t) C.push(N.unicode), (k += N.width);
            r.fillText(C.join(""), 0, 0), (e.x += k * y * c), r.restore(), this.compose();
            return;
        }
        let x = 0,
            T;
        for (T = 0; T < u; ++T) {
            const C = t[T];
            if (typeof C == "number") {
                x += (g * C * i) / 1e3;
                continue;
            }
            let k = !1;
            const N = (C.isSpace ? l : 0) + o,
                W = C.fontChar,
                $ = C.accent;
            let ot,
                mt,
                Z = C.width;
            if (p) {
                const I = C.vmetric || A,
                    B = -(C.vmetric ? I[1] : Z * 0.5) * y,
                    ge = I[2] * y;
                (Z = I ? -I[0] : Z), (ot = B / a), (mt = (x + ge) / a);
            } else (ot = x / a), (mt = 0);
            if (s.remeasure && Z > 0) {
                const I = ((r.measureText(W).width * 1e3) / i) * a;
                if (Z < I && this.isFontSubpixelAAEnabled) {
                    const B = Z / I;
                    (k = !0), r.save(), r.scale(B, 1), (ot /= B);
                } else Z !== I && (ot += (((Z - I) / 2e3) * i) / a);
            }
            if (this.contentVisible && (C.isInFont || s.missingFile)) {
                if (v && !$) r.fillText(W, ot, mt);
                else if ((this.paintChar(W, ot, mt, w, _), $)) {
                    const I = ot + (i * $.offset.x) / a,
                        B = mt - (i * $.offset.y) / a;
                    this.paintChar($.fontChar, I, B, w, _);
                }
            }
            const Qt = p ? Z * y - N * h : Z * y + N * h;
            (x += Qt), k && r.restore();
        }
        p ? (e.y -= x) : (e.x += x * c), r.restore(), this.compose();
    }
    showType3Text(t) {
        const e = this.ctx,
            s = this.current,
            i = s.font,
            r = s.fontSize,
            a = s.fontDirection,
            o = i.vertical ? 1 : -1,
            l = s.charSpacing,
            h = s.wordSpacing,
            c = s.textHScale * a,
            u = s.fontMatrix || Qh,
            p = t.length,
            g = s.textRenderingMode === zt.INVISIBLE;
        let A, y, v, w;
        if (!(g || r === 0)) {
            for (this._cachedScaleForStroking[0] = -1, this._cachedGetSinglePixelWidth = null, e.save(), e.transform(...s.textMatrix), e.translate(s.x, s.y), e.scale(c, a), A = 0; A < p; ++A) {
                if (((y = t[A]), typeof y == "number")) {
                    (w = (o * y * r) / 1e3), this.ctx.translate(w, 0), (s.x += w * c);
                    continue;
                }
                const _ = (y.isSpace ? h : 0) + l,
                    E = i.charProcOperatorList[y.operatorListId];
                if (!E) {
                    V(`Type3 character "${y.operatorListId}" is not available.`);
                    continue;
                }
                this.contentVisible && ((this.processingType3 = y), this.save(), e.scale(r, r), e.transform(...u), this.executeOperatorList(E), this.restore()),
                    (v = F.applyTransform([y.width, 0], u)[0] * r + _),
                    e.translate(v, 0),
                    (s.x += v * c);
            }
            e.restore(), (this.processingType3 = null);
        }
    }
    setCharWidth(t, e) {}
    setCharWidthAndBounds(t, e, s, i, r, a) {
        this.ctx.rect(s, i, r - s, a - i), this.ctx.clip(), this.endPath();
    }
    getColorN_Pattern(t) {
        let e;
        if (t[0] === "TilingPattern") {
            const s = t[1],
                i = this.baseTransform || ct(this.ctx),
                r = { createCanvasGraphics: (a) => new Sd(a, this.commonObjs, this.objs, this.canvasFactory, this.filterFactory, { optionalContentConfig: this.optionalContentConfig, markedContentStack: this.markedContentStack }) };
            e = new Sc(t, s, this.ctx, r, i);
        } else e = this._getPattern(t[1], t[2]);
        return e;
    }
    setStrokeColorN() {
        (this.current.strokeColor = this.getColorN_Pattern(arguments)), (this.current.patternStroke = !0);
    }
    setFillColorN() {
        (this.current.fillColor = this.getColorN_Pattern(arguments)), (this.current.patternFill = !0);
    }
    setStrokeRGBColor(t, e, s) {
        (this.ctx.strokeStyle = this.current.strokeColor = F.makeHexColor(t, e, s)), (this.current.patternStroke = !1);
    }
    setStrokeTransparent() {
        (this.ctx.strokeStyle = this.current.strokeColor = "transparent"), (this.current.patternStroke = !1);
    }
    setFillRGBColor(t, e, s) {
        (this.ctx.fillStyle = this.current.fillColor = F.makeHexColor(t, e, s)), (this.current.patternFill = !1);
    }
    setFillTransparent() {
        (this.ctx.fillStyle = this.current.fillColor = "transparent"), (this.current.patternFill = !1);
    }
    _getPattern(t, e = null) {
        let s;
        return this.cachedPatterns.has(t) ? (s = this.cachedPatterns.get(t)) : ((s = Ip(this.getObject(t))), this.cachedPatterns.set(t, s)), e && (s.matrix = e), s;
    }
    shadingFill(t) {
        if (!this.contentVisible) return;
        const e = this.ctx;
        this.save();
        const s = this._getPattern(t);
        e.fillStyle = s.getPattern(e, this, ls(e), Yt.SHADING);
        const i = ls(e);
        if (i) {
            const { width: r, height: a } = e.canvas,
                [o, l, h, c] = F.getAxialAlignedBoundingBox([0, 0, r, a], i);
            this.ctx.fillRect(o, l, h - o, c - l);
        } else this.ctx.fillRect(-1e10, -1e10, 2e10, 2e10);
        this.compose(this.current.getClippedPathBoundingBox()), this.restore();
    }
    beginInlineImage() {
        nt("Should not call beginInlineImage");
    }
    beginImageData() {
        nt("Should not call beginImageData");
    }
    paintFormXObjectBegin(t, e) {
        if (this.contentVisible && (this.save(), this.baseTransformStack.push(this.baseTransform), t && this.transform(...t), (this.baseTransform = ct(this.ctx)), e)) {
            const s = e[2] - e[0],
                i = e[3] - e[1];
            this.ctx.rect(e[0], e[1], s, i), this.current.updateRectMinMax(ct(this.ctx), e), this.clip(), this.endPath();
        }
    }
    paintFormXObjectEnd() {
        this.contentVisible && (this.restore(), (this.baseTransform = this.baseTransformStack.pop()));
    }
    beginGroup(t) {
        if (!this.contentVisible) return;
        this.save(), this.inSMaskMode && (this.endSMaskMode(), (this.current.activeSMask = null));
        const e = this.ctx;
        t.isolated || Oh("TODO: Support non-isolated groups."), t.knockout && V("Knockout groups not supported.");
        const s = ct(e);
        if ((t.matrix && e.transform(...t.matrix), !t.bbox)) throw new Error("Bounding box is required.");
        let i = F.getAxialAlignedBoundingBox(t.bbox, ct(e));
        const r = [0, 0, e.canvas.width, e.canvas.height];
        i = F.intersect(i, r) || [0, 0, 0, 0];
        const a = Math.floor(i[0]),
            o = Math.floor(i[1]),
            l = Math.max(Math.ceil(i[2]) - a, 1),
            h = Math.max(Math.ceil(i[3]) - o, 1);
        this.current.startNewPathAndClipBox([0, 0, l, h]);
        let c = "groupAt" + this.groupLevel;
        t.smask && (c += "_smask_" + (this.smaskCounter++ % 2));
        const u = this.cachedCanvases.getCanvas(c, l, h),
            p = u.context;
        p.translate(-a, -o),
            p.transform(...s),
            t.smask
                ? this.smaskStack.push({ canvas: u.canvas, context: p, offsetX: a, offsetY: o, subtype: t.smask.subtype, backdrop: t.smask.backdrop, transferMap: t.smask.transferMap || null, startTransformInverse: null })
                : (e.setTransform(1, 0, 0, 1, 0, 0), e.translate(a, o), e.save()),
            Pa(e, p),
            (this.ctx = p),
            this.setGState([
                ["BM", "source-over"],
                ["ca", 1],
                ["CA", 1],
            ]),
            this.groupStack.push(e),
            this.groupLevel++;
    }
    endGroup(t) {
        if (!this.contentVisible) return;
        this.groupLevel--;
        const e = this.ctx,
            s = this.groupStack.pop();
        if (((this.ctx = s), (this.ctx.imageSmoothingEnabled = !1), t.smask)) (this.tempSMask = this.smaskStack.pop()), this.restore();
        else {
            this.ctx.restore();
            const i = ct(this.ctx);
            this.restore(), this.ctx.save(), this.ctx.setTransform(...i);
            const r = F.getAxialAlignedBoundingBox([0, 0, e.canvas.width, e.canvas.height], i);
            this.ctx.drawImage(e.canvas, 0, 0), this.ctx.restore(), this.compose(r);
        }
    }
    beginAnnotation(t, e, s, i, r) {
        if ((b(this, as, Ec).call(this), Ml(this.ctx), this.ctx.save(), this.save(), this.baseTransform && this.ctx.setTransform(...this.baseTransform), e)) {
            const a = e[2] - e[0],
                o = e[3] - e[1];
            if (r && this.annotationCanvasMap) {
                (s = s.slice()), (s[4] -= e[0]), (s[5] -= e[1]), (e = e.slice()), (e[0] = e[1] = 0), (e[2] = a), (e[3] = o);
                const [l, h] = F.singularValueDecompose2dScale(ct(this.ctx)),
                    { viewportScale: c } = this,
                    u = Math.ceil(a * this.outputScaleX * c),
                    p = Math.ceil(o * this.outputScaleY * c);
                this.annotationCanvas = this.canvasFactory.create(u, p);
                const { canvas: g, context: A } = this.annotationCanvas;
                this.annotationCanvasMap.set(t, g), (this.annotationCanvas.savedCtx = this.ctx), (this.ctx = A), this.ctx.save(), this.ctx.setTransform(l, 0, 0, -h, 0, o * h), Ml(this.ctx);
            } else Ml(this.ctx), this.endPath(), this.ctx.rect(e[0], e[1], a, o), this.ctx.clip(), this.ctx.beginPath();
        }
        (this.current = new Bd(this.ctx.canvas.width, this.ctx.canvas.height)), this.transform(...s), this.transform(...i);
    }
    endAnnotation() {
        this.annotationCanvas && (this.ctx.restore(), b(this, as, xc).call(this), (this.ctx = this.annotationCanvas.savedCtx), delete this.annotationCanvas.savedCtx, delete this.annotationCanvas);
    }
    paintImageMaskXObject(t) {
        if (!this.contentVisible) return;
        const e = t.count;
        (t = this.getObject(t.data, t)), (t.count = e);
        const s = this.ctx,
            i = this.processingType3;
        if (i && (i.compiled === void 0 && (i.compiled = Hp(t)), i.compiled)) {
            i.compiled(s);
            return;
        }
        const r = this._createMaskCanvas(t),
            a = r.canvas;
        s.save(), s.setTransform(1, 0, 0, 1, 0, 0), s.drawImage(a, r.offsetX, r.offsetY), s.restore(), this.compose();
    }
    paintImageMaskXObjectRepeat(t, e, s = 0, i = 0, r, a) {
        if (!this.contentVisible) return;
        t = this.getObject(t.data, t);
        const o = this.ctx;
        o.save();
        const l = ct(o);
        o.transform(e, s, i, r, 0, 0);
        const h = this._createMaskCanvas(t);
        o.setTransform(1, 0, 0, 1, h.offsetX - l[4], h.offsetY - l[5]);
        for (let c = 0, u = a.length; c < u; c += 2) {
            const p = F.transform(l, [e, s, i, r, a[c], a[c + 1]]),
                [g, A] = F.applyTransform([0, 0], p);
            o.drawImage(h.canvas, g, A);
        }
        o.restore(), this.compose();
    }
    paintImageMaskXObjectGroup(t) {
        if (!this.contentVisible) return;
        const e = this.ctx,
            s = this.current.fillColor,
            i = this.current.patternFill;
        for (const r of t) {
            const { data: a, width: o, height: l, transform: h } = r,
                c = this.cachedCanvases.getCanvas("maskCanvas", o, l),
                u = c.context;
            u.save();
            const p = this.getObject(a, r);
            Gd(u, p),
                (u.globalCompositeOperation = "source-in"),
                (u.fillStyle = i ? s.getPattern(u, this, ls(e), Yt.FILL) : s),
                u.fillRect(0, 0, o, l),
                u.restore(),
                e.save(),
                e.transform(...h),
                e.scale(1, -1),
                Pl(e, c.canvas, 0, 0, o, l, 0, -1, 1, 1),
                e.restore();
        }
        this.compose();
    }
    paintImageXObject(t) {
        if (!this.contentVisible) return;
        const e = this.getObject(t);
        if (!e) {
            V("Dependent image isn't ready yet");
            return;
        }
        this.paintInlineImageXObject(e);
    }
    paintImageXObjectRepeat(t, e, s, i) {
        if (!this.contentVisible) return;
        const r = this.getObject(t);
        if (!r) {
            V("Dependent image isn't ready yet");
            return;
        }
        const a = r.width,
            o = r.height,
            l = [];
        for (let h = 0, c = i.length; h < c; h += 2) l.push({ transform: [e, 0, 0, s, i[h], i[h + 1]], x: 0, y: 0, w: a, h: o });
        this.paintInlineImageXObjectGroup(r, l);
    }
    applyTransferMapsToCanvas(t) {
        return this.current.transferMaps !== "none" && ((t.filter = this.current.transferMaps), t.drawImage(t.canvas, 0, 0), (t.filter = "none")), t.canvas;
    }
    applyTransferMapsToBitmap(t) {
        if (this.current.transferMaps === "none") return t.bitmap;
        const { bitmap: e, width: s, height: i } = t,
            r = this.cachedCanvases.getCanvas("inlineImage", s, i),
            a = r.context;
        return (a.filter = this.current.transferMaps), a.drawImage(e, 0, 0), (a.filter = "none"), r.canvas;
    }
    paintInlineImageXObject(t) {
        if (!this.contentVisible) return;
        const e = t.width,
            s = t.height,
            i = this.ctx;
        if ((this.save(), !Kt)) {
            const { filter: o } = i;
            o !== "none" && o !== "" && (i.filter = "none");
        }
        i.scale(1 / e, -1 / s);
        let r;
        if (t.bitmap) r = this.applyTransferMapsToBitmap(t);
        else if ((typeof HTMLElement == "function" && t instanceof HTMLElement) || !t.data) r = t;
        else {
            const l = this.cachedCanvases.getCanvas("inlineImage", e, s).context;
            $d(l, t), (r = this.applyTransferMapsToCanvas(l));
        }
        const a = this._scaleImage(r, ls(i));
        (i.imageSmoothingEnabled = zd(ct(i), t.interpolate)), Pl(i, a.img, 0, 0, a.paintWidth, a.paintHeight, 0, -s, e, s), this.compose(), this.restore();
    }
    paintInlineImageXObjectGroup(t, e) {
        if (!this.contentVisible) return;
        const s = this.ctx;
        let i;
        if (t.bitmap) i = t.bitmap;
        else {
            const r = t.width,
                a = t.height,
                l = this.cachedCanvases.getCanvas("inlineImage", r, a).context;
            $d(l, t), (i = this.applyTransferMapsToCanvas(l));
        }
        for (const r of e) s.save(), s.transform(...r.transform), s.scale(1, -1), Pl(s, i, r.x, r.y, r.w, r.h, 0, -1, 1, 1), s.restore();
        this.compose();
    }
    paintSolidColorImageMask() {
        this.contentVisible && (this.ctx.fillRect(0, 0, 1, 1), this.compose());
    }
    markPoint(t) {}
    markPointProps(t, e) {}
    beginMarkedContent(t) {
        this.markedContentStack.push({ visible: !0 });
    }
    beginMarkedContentProps(t, e) {
        t === "OC" ? this.markedContentStack.push({ visible: this.optionalContentConfig.isVisible(e) }) : this.markedContentStack.push({ visible: !0 }), (this.contentVisible = this.isContentVisible());
    }
    endMarkedContent() {
        this.markedContentStack.pop(), (this.contentVisible = this.isContentVisible());
    }
    beginCompat() {}
    endCompat() {}
    consumePath(t) {
        const e = this.current.isEmptyClip();
        this.pendingClip && this.current.updateClipFromPath(), this.pendingClip || this.compose(t);
        const s = this.ctx;
        this.pendingClip && (e || (this.pendingClip === Ud ? s.clip("evenodd") : s.clip()), (this.pendingClip = null)), this.current.startNewPathAndClipBox(this.current.clipBox), s.beginPath();
    }
    getSinglePixelWidth() {
        if (!this._cachedGetSinglePixelWidth) {
            const t = ct(this.ctx);
            if (t[1] === 0 && t[2] === 0) this._cachedGetSinglePixelWidth = 1 / Math.min(Math.abs(t[0]), Math.abs(t[3]));
            else {
                const e = Math.abs(t[0] * t[3] - t[2] * t[1]),
                    s = Math.hypot(t[0], t[2]),
                    i = Math.hypot(t[1], t[3]);
                this._cachedGetSinglePixelWidth = Math.max(s, i) / e;
            }
        }
        return this._cachedGetSinglePixelWidth;
    }
    getScaleForStroking() {
        if (this._cachedScaleForStroking[0] === -1) {
            const { lineWidth: t } = this.current,
                { a: e, b: s, c: i, d: r } = this.ctx.getTransform();
            let a, o;
            if (s === 0 && i === 0) {
                const l = Math.abs(e),
                    h = Math.abs(r);
                if (l === h)
                    if (t === 0) a = o = 1 / l;
                    else {
                        const c = l * t;
                        a = o = c < 1 ? 1 / c : 1;
                    }
                else if (t === 0) (a = 1 / l), (o = 1 / h);
                else {
                    const c = l * t,
                        u = h * t;
                    (a = c < 1 ? 1 / c : 1), (o = u < 1 ? 1 / u : 1);
                }
            } else {
                const l = Math.abs(e * r - s * i),
                    h = Math.hypot(e, s),
                    c = Math.hypot(i, r);
                if (t === 0) (a = c / l), (o = h / l);
                else {
                    const u = t * l;
                    (a = c > u ? c / u : 1), (o = h > u ? h / u : 1);
                }
            }
            (this._cachedScaleForStroking[0] = a), (this._cachedScaleForStroking[1] = o);
        }
        return this._cachedScaleForStroking;
    }
    rescaleAndStroke(t) {
        const { ctx: e } = this,
            { lineWidth: s } = this.current,
            [i, r] = this.getScaleForStroking();
        if (((e.lineWidth = s || 1), i === 1 && r === 1)) {
            e.stroke();
            return;
        }
        const a = e.getLineDash();
        if ((t && e.save(), e.scale(i, r), a.length > 0)) {
            const o = Math.max(i, r);
            e.setLineDash(a.map((l) => l / o)), (e.lineDashOffset /= o);
        }
        e.stroke(), t && e.restore();
    }
    isContentVisible() {
        for (let t = this.markedContentStack.length - 1; t >= 0; t--) if (!this.markedContentStack[t].visible) return !1;
        return !0;
    }
};
(as = new WeakSet()),
    (Ec = function () {
        for (; this.stateStack.length || this.inSMaskMode; ) this.restore();
        (this.current.activeSMask = null),
            this.ctx.restore(),
            this.transparentCanvas && ((this.ctx = this.compositeCtx), this.ctx.save(), this.ctx.setTransform(1, 0, 0, 1, 0, 0), this.ctx.drawImage(this.transparentCanvas, 0, 0), this.ctx.restore(), (this.transparentCanvas = null));
    }),
    (xc = function () {
        if (this.pageColors) {
            const t = this.filterFactory.addHCMFilter(this.pageColors.foreground, this.pageColors.background);
            if (t !== "none") {
                const e = this.ctx.filter;
                (this.ctx.filter = t), this.ctx.drawImage(this.ctx.canvas, 0, 0), (this.ctx.filter = e);
            }
        }
    }),
    (Cc = function (t, e, s) {
        const i = new Path2D();
        return i.addPath(t, new DOMMatrix(s).invertSelf().multiplySelf(e)), i;
    });
let wr = Sd;
for (const d in je) wr.prototype[d] !== void 0 && (wr.prototype[je[d]] = wr.prototype[d]);
var Ro, Po;
class ai {
    static get workerPort() {
        return n(this, Ro);
    }
    static set workerPort(t) {
        if (!(typeof Worker < "u" && t instanceof Worker) && t !== null) throw new Error("Invalid `workerPort` type.");
        f(this, Ro, t);
    }
    static get workerSrc() {
        return n(this, Po);
    }
    static set workerSrc(t) {
        if (typeof t != "string") throw new Error("Invalid `workerSrc` type.");
        f(this, Po, t);
    }
}
(Ro = new WeakMap()), (Po = new WeakMap()), m(ai, Ro, null), m(ai, Po, "");
var Sn, Mo;
class zp {
    constructor({ parsedData: t, rawData: e }) {
        m(this, Sn);
        m(this, Mo);
        f(this, Sn, t), f(this, Mo, e);
    }
    getRaw() {
        return n(this, Mo);
    }
    get(t) {
        return n(this, Sn).get(t) ?? null;
    }
    getAll() {
        return dd(n(this, Sn));
    }
    has(t) {
        return n(this, Sn).has(t);
    }
}
(Sn = new WeakMap()), (Mo = new WeakMap());
const pr = Symbol("INTERNAL");
var ko, Lo, Io, Br;
class Up {
    constructor(t, { name: e, intent: s, usage: i, rbGroups: r }) {
        m(this, ko, !1);
        m(this, Lo, !1);
        m(this, Io, !1);
        m(this, Br, !0);
        f(this, ko, !!(t & Re.DISPLAY)), f(this, Lo, !!(t & Re.PRINT)), (this.name = e), (this.intent = s), (this.usage = i), (this.rbGroups = r);
    }
    get visible() {
        if (n(this, Io)) return n(this, Br);
        if (!n(this, Br)) return !1;
        const { print: t, view: e } = this.usage;
        return n(this, ko) ? (e == null ? void 0 : e.viewState) !== "OFF" : n(this, Lo) ? (t == null ? void 0 : t.printState) !== "OFF" : !0;
    }
    _setVisible(t, e, s = !1) {
        t !== pr && nt("Internal method `_setVisible` called."), f(this, Io, s), f(this, Br, e);
    }
}
(ko = new WeakMap()), (Lo = new WeakMap()), (Io = new WeakMap()), (Br = new WeakMap());
var xi, et, $r, Gr, Do, Tc;
class Vp {
    constructor(t, e = Re.DISPLAY) {
        m(this, Do);
        m(this, xi, null);
        m(this, et, new Map());
        m(this, $r, null);
        m(this, Gr, null);
        if (((this.renderingIntent = e), (this.name = null), (this.creator = null), t !== null)) {
            (this.name = t.name), (this.creator = t.creator), f(this, Gr, t.order);
            for (const s of t.groups) n(this, et).set(s.id, new Up(e, s));
            if (t.baseState === "OFF") for (const s of n(this, et).values()) s._setVisible(pr, !1);
            for (const s of t.on) n(this, et).get(s)._setVisible(pr, !0);
            for (const s of t.off) n(this, et).get(s)._setVisible(pr, !1);
            f(this, $r, this.getHash());
        }
    }
    isVisible(t) {
        if (n(this, et).size === 0) return !0;
        if (!t) return Oh("Optional content group not defined."), !0;
        if (t.type === "OCG") return n(this, et).has(t.id) ? n(this, et).get(t.id).visible : (V(`Optional content group not found: ${t.id}`), !0);
        if (t.type === "OCMD") {
            if (t.expression) return b(this, Do, Tc).call(this, t.expression);
            if (!t.policy || t.policy === "AnyOn") {
                for (const e of t.ids) {
                    if (!n(this, et).has(e)) return V(`Optional content group not found: ${e}`), !0;
                    if (n(this, et).get(e).visible) return !0;
                }
                return !1;
            } else if (t.policy === "AllOn") {
                for (const e of t.ids) {
                    if (!n(this, et).has(e)) return V(`Optional content group not found: ${e}`), !0;
                    if (!n(this, et).get(e).visible) return !1;
                }
                return !0;
            } else if (t.policy === "AnyOff") {
                for (const e of t.ids) {
                    if (!n(this, et).has(e)) return V(`Optional content group not found: ${e}`), !0;
                    if (!n(this, et).get(e).visible) return !0;
                }
                return !1;
            } else if (t.policy === "AllOff") {
                for (const e of t.ids) {
                    if (!n(this, et).has(e)) return V(`Optional content group not found: ${e}`), !0;
                    if (n(this, et).get(e).visible) return !1;
                }
                return !0;
            }
            return V(`Unknown optional content policy ${t.policy}.`), !0;
        }
        return V(`Unknown group type ${t.type}.`), !0;
    }
    setVisibility(t, e = !0, s = !0) {
        var r;
        const i = n(this, et).get(t);
        if (!i) {
            V(`Optional content group not found: ${t}`);
            return;
        }
        if (s && e && i.rbGroups.length) for (const a of i.rbGroups) for (const o of a) o !== t && ((r = n(this, et).get(o)) == null || r._setVisible(pr, !1, !0));
        i._setVisible(pr, !!e, !0), f(this, xi, null);
    }
    setOCGState({ state: t, preserveRB: e }) {
        let s;
        for (const i of t) {
            switch (i) {
                case "ON":
                case "OFF":
                case "Toggle":
                    s = i;
                    continue;
            }
            const r = n(this, et).get(i);
            if (r)
                switch (s) {
                    case "ON":
                        this.setVisibility(i, !0, e);
                        break;
                    case "OFF":
                        this.setVisibility(i, !1, e);
                        break;
                    case "Toggle":
                        this.setVisibility(i, !r.visible, e);
                        break;
                }
        }
        f(this, xi, null);
    }
    get hasInitialVisibility() {
        return n(this, $r) === null || this.getHash() === n(this, $r);
    }
    getOrder() {
        return n(this, et).size ? (n(this, Gr) ? n(this, Gr).slice() : [...n(this, et).keys()]) : null;
    }
    getGroups() {
        return n(this, et).size > 0 ? dd(n(this, et)) : null;
    }
    getGroup(t) {
        return n(this, et).get(t) || null;
    }
    getHash() {
        if (n(this, xi) !== null) return n(this, xi);
        const t = new Cu();
        for (const [e, s] of n(this, et)) t.update(`${e}:${s.visible}`);
        return f(this, xi, t.hexdigest());
    }
}
(xi = new WeakMap()),
    (et = new WeakMap()),
    ($r = new WeakMap()),
    (Gr = new WeakMap()),
    (Do = new WeakSet()),
    (Tc = function (t) {
        const e = t.length;
        if (e < 2) return !0;
        const s = t[0];
        for (let i = 1; i < e; i++) {
            const r = t[i];
            let a;
            if (Array.isArray(r)) a = b(this, Do, Tc).call(this, r);
            else if (n(this, et).has(r)) a = n(this, et).get(r).visible;
            else return V(`Optional content group not found: ${r}`), !0;
            switch (s) {
                case "And":
                    if (!a) return !1;
                    break;
                case "Or":
                    if (a) return !0;
                    break;
                case "Not":
                    return !a;
                default:
                    return !0;
            }
        }
        return s === "And";
    });
class jp {
    constructor(t, { disableRange: e = !1, disableStream: s = !1 }) {
        vt(t, 'PDFDataTransportStream - missing required "pdfDataRangeTransport" argument.');
        const { length: i, initialData: r, progressiveDone: a, contentDispositionFilename: o } = t;
        if (((this._queuedChunks = []), (this._progressiveDone = a), (this._contentDispositionFilename = o), (r == null ? void 0 : r.length) > 0)) {
            const l = r instanceof Uint8Array && r.byteLength === r.buffer.byteLength ? r.buffer : new Uint8Array(r).buffer;
            this._queuedChunks.push(l);
        }
        (this._pdfDataRangeTransport = t),
            (this._isStreamingSupported = !s),
            (this._isRangeSupported = !e),
            (this._contentLength = i),
            (this._fullRequestReader = null),
            (this._rangeReaders = []),
            t.addRangeListener((l, h) => {
                this._onReceiveData({ begin: l, chunk: h });
            }),
            t.addProgressListener((l, h) => {
                this._onProgress({ loaded: l, total: h });
            }),
            t.addProgressiveReadListener((l) => {
                this._onReceiveData({ chunk: l });
            }),
            t.addProgressiveDoneListener(() => {
                this._onProgressiveDone();
            }),
            t.transportReady();
    }
    _onReceiveData({ begin: t, chunk: e }) {
        const s = e instanceof Uint8Array && e.byteLength === e.buffer.byteLength ? e.buffer : new Uint8Array(e).buffer;
        if (t === void 0) this._fullRequestReader ? this._fullRequestReader._enqueue(s) : this._queuedChunks.push(s);
        else {
            const i = this._rangeReaders.some(function (r) {
                return r._begin !== t ? !1 : (r._enqueue(s), !0);
            });
            vt(i, "_onReceiveData - no `PDFDataTransportStreamRangeReader` instance found.");
        }
    }
    get _progressiveDataLength() {
        var t;
        return ((t = this._fullRequestReader) == null ? void 0 : t._loaded) ?? 0;
    }
    _onProgress(t) {
        var e, s, i, r;
        t.total === void 0
            ? (s = (e = this._rangeReaders[0]) == null ? void 0 : e.onProgress) == null || s.call(e, { loaded: t.loaded })
            : (r = (i = this._fullRequestReader) == null ? void 0 : i.onProgress) == null || r.call(i, { loaded: t.loaded, total: t.total });
    }
    _onProgressiveDone() {
        var t;
        (t = this._fullRequestReader) == null || t.progressiveDone(), (this._progressiveDone = !0);
    }
    _removeRangeReader(t) {
        const e = this._rangeReaders.indexOf(t);
        e >= 0 && this._rangeReaders.splice(e, 1);
    }
    getFullReader() {
        vt(!this._fullRequestReader, "PDFDataTransportStream.getFullReader can only be called once.");
        const t = this._queuedChunks;
        return (this._queuedChunks = null), new Wp(this, t, this._progressiveDone, this._contentDispositionFilename);
    }
    getRangeReader(t, e) {
        if (e <= this._progressiveDataLength) return null;
        const s = new Xp(this, t, e);
        return this._pdfDataRangeTransport.requestDataRange(t, e), this._rangeReaders.push(s), s;
    }
    cancelAllRequests(t) {
        var e;
        (e = this._fullRequestReader) == null || e.cancel(t);
        for (const s of this._rangeReaders.slice(0)) s.cancel(t);
        this._pdfDataRangeTransport.abort();
    }
}
class Wp {
    constructor(t, e, s = !1, i = null) {
        (this._stream = t), (this._done = s || !1), (this._filename = pd(i) ? i : null), (this._queuedChunks = e || []), (this._loaded = 0);
        for (const r of this._queuedChunks) this._loaded += r.byteLength;
        (this._requests = []), (this._headersReady = Promise.resolve()), (t._fullRequestReader = this), (this.onProgress = null);
    }
    _enqueue(t) {
        this._done || (this._requests.length > 0 ? this._requests.shift().resolve({ value: t, done: !1 }) : this._queuedChunks.push(t), (this._loaded += t.byteLength));
    }
    get headersReady() {
        return this._headersReady;
    }
    get filename() {
        return this._filename;
    }
    get isRangeSupported() {
        return this._stream._isRangeSupported;
    }
    get isStreamingSupported() {
        return this._stream._isStreamingSupported;
    }
    get contentLength() {
        return this._stream._contentLength;
    }
    async read() {
        if (this._queuedChunks.length > 0) return { value: this._queuedChunks.shift(), done: !1 };
        if (this._done) return { value: void 0, done: !0 };
        const t = Promise.withResolvers();
        return this._requests.push(t), t.promise;
    }
    cancel(t) {
        this._done = !0;
        for (const e of this._requests) e.resolve({ value: void 0, done: !0 });
        this._requests.length = 0;
    }
    progressiveDone() {
        this._done || (this._done = !0);
    }
}
class Xp {
    constructor(t, e, s) {
        (this._stream = t), (this._begin = e), (this._end = s), (this._queuedChunk = null), (this._requests = []), (this._done = !1), (this.onProgress = null);
    }
    _enqueue(t) {
        if (!this._done) {
            if (this._requests.length === 0) this._queuedChunk = t;
            else {
                this._requests.shift().resolve({ value: t, done: !1 });
                for (const s of this._requests) s.resolve({ value: void 0, done: !0 });
                this._requests.length = 0;
            }
            (this._done = !0), this._stream._removeRangeReader(this);
        }
    }
    get isStreamingSupported() {
        return !1;
    }
    async read() {
        if (this._queuedChunk) {
            const e = this._queuedChunk;
            return (this._queuedChunk = null), { value: e, done: !1 };
        }
        if (this._done) return { value: void 0, done: !0 };
        const t = Promise.withResolvers();
        return this._requests.push(t), t.promise;
    }
    cancel(t) {
        this._done = !0;
        for (const e of this._requests) e.resolve({ value: void 0, done: !0 });
        (this._requests.length = 0), this._stream._removeRangeReader(this);
    }
}
function qp(d) {
    let t = !0,
        e = s("filename\\*", "i").exec(d);
    if (e) {
        e = e[1];
        let c = o(e);
        return (c = unescape(c)), (c = l(c)), (c = h(c)), r(c);
    }
    if (((e = a(d)), e)) {
        const c = h(e);
        return r(c);
    }
    if (((e = s("filename", "i").exec(d)), e)) {
        e = e[1];
        let c = o(e);
        return (c = h(c)), r(c);
    }
    function s(c, u) {
        return new RegExp("(?:^|;)\\s*" + c + '\\s*=\\s*([^";\\s][^;\\s]*|"(?:[^"\\\\]|\\\\"?)+"?)', u);
    }
    function i(c, u) {
        if (c) {
            if (!/^[\x00-\xFF]+$/.test(u)) return u;
            try {
                const p = new TextDecoder(c, { fatal: !0 }),
                    g = Hh(u);
                (u = p.decode(g)), (t = !1);
            } catch {}
        }
        return u;
    }
    function r(c) {
        return t && /[\x80-\xff]/.test(c) && ((c = i("utf-8", c)), t && (c = i("iso-8859-1", c))), c;
    }
    function a(c) {
        const u = [];
        let p;
        const g = s("filename\\*((?!0\\d)\\d+)(\\*?)", "ig");
        for (; (p = g.exec(c)) !== null; ) {
            let [, y, v, w] = p;
            if (((y = parseInt(y, 10)), y in u)) {
                if (y === 0) break;
                continue;
            }
            u[y] = [v, w];
        }
        const A = [];
        for (let y = 0; y < u.length && y in u; ++y) {
            let [v, w] = u[y];
            (w = o(w)), v && ((w = unescape(w)), y === 0 && (w = l(w))), A.push(w);
        }
        return A.join("");
    }
    function o(c) {
        if (c.startsWith('"')) {
            const u = c.slice(1).split('\\"');
            for (let p = 0; p < u.length; ++p) {
                const g = u[p].indexOf('"');
                g !== -1 && ((u[p] = u[p].slice(0, g)), (u.length = p + 1)), (u[p] = u[p].replaceAll(/\\(.)/g, "$1"));
            }
            c = u.join('"');
        }
        return c;
    }
    function l(c) {
        const u = c.indexOf("'");
        if (u === -1) return c;
        const p = c.slice(0, u),
            A = c.slice(u + 1).replace(/^[^']*'/, "");
        return i(p, A);
    }
    function h(c) {
        return !c.startsWith("=?") || /[\x00-\x19\x80-\xff]/.test(c)
            ? c
            : c.replaceAll(/=\?([\w-]*)\?([QqBb])\?((?:[^?]|\?(?!=))*)\?=/g, function (u, p, g, A) {
                  if (g === "q" || g === "Q")
                      return (
                          (A = A.replaceAll("_", " ")),
                          (A = A.replaceAll(/=([0-9a-fA-F]{2})/g, function (y, v) {
                              return String.fromCharCode(parseInt(v, 16));
                          })),
                          i(p, A)
                      );
                  try {
                      A = atob(A);
                  } catch {}
                  return i(p, A);
              });
    }
    return "";
}
function $u(d, t) {
    const e = new Headers();
    if (!d || !t || typeof t != "object") return e;
    for (const s in t) {
        const i = t[s];
        i !== void 0 && e.append(s, i);
    }
    return e;
}
function Gh(d) {
    try {
        return new URL(d).origin;
    } catch {}
    return null;
}
function Gu({ responseHeaders: d, isHttp: t, rangeChunkSize: e, disableRange: s }) {
    const i = { allowRangeRequests: !1, suggestedLength: void 0 },
        r = parseInt(d.get("Content-Length"), 10);
    return !Number.isInteger(r) || ((i.suggestedLength = r), r <= 2 * e) || s || !t || d.get("Accept-Ranges") !== "bytes" || (d.get("Content-Encoding") || "identity") !== "identity" || (i.allowRangeRequests = !0), i;
}
function zu(d) {
    const t = d.get("Content-Disposition");
    if (t) {
        let e = qp(t);
        if (e.includes("%"))
            try {
                e = decodeURIComponent(e);
            } catch {}
        if (pd(e)) return e;
    }
    return null;
}
function zh(d, t) {
    return d === 404 || (d === 0 && t.startsWith("file:")) ? new Ka('Missing PDF "' + t + '".') : new lh(`Unexpected server response (${d}) while retrieving PDF "${t}".`, d);
}
function Uu(d) {
    return d === 200 || d === 206;
}
function Vu(d, t, e) {
    return { method: "GET", headers: d, signal: e.signal, mode: "cors", credentials: t ? "include" : "same-origin", redirect: "follow" };
}
function ju(d) {
    return d instanceof Uint8Array ? d.buffer : d instanceof ArrayBuffer ? d : (V(`getArrayBuffer - unexpected data format: ${d}`), new Uint8Array(d).buffer);
}
class Vd {
    constructor(t) {
        O(this, "_responseOrigin", null);
        (this.source = t), (this.isHttp = /^https?:/i.test(t.url)), (this.headers = $u(this.isHttp, t.httpHeaders)), (this._fullRequestReader = null), (this._rangeRequestReaders = []);
    }
    get _progressiveDataLength() {
        var t;
        return ((t = this._fullRequestReader) == null ? void 0 : t._loaded) ?? 0;
    }
    getFullReader() {
        return vt(!this._fullRequestReader, "PDFFetchStream.getFullReader can only be called once."), (this._fullRequestReader = new Yp(this)), this._fullRequestReader;
    }
    getRangeReader(t, e) {
        if (e <= this._progressiveDataLength) return null;
        const s = new Kp(this, t, e);
        return this._rangeRequestReaders.push(s), s;
    }
    cancelAllRequests(t) {
        var e;
        (e = this._fullRequestReader) == null || e.cancel(t);
        for (const s of this._rangeRequestReaders.slice(0)) s.cancel(t);
    }
}
class Yp {
    constructor(t) {
        (this._stream = t), (this._reader = null), (this._loaded = 0), (this._filename = null);
        const e = t.source;
        (this._withCredentials = e.withCredentials || !1),
            (this._contentLength = e.length),
            (this._headersCapability = Promise.withResolvers()),
            (this._disableRange = e.disableRange || !1),
            (this._rangeChunkSize = e.rangeChunkSize),
            !this._rangeChunkSize && !this._disableRange && (this._disableRange = !0),
            (this._abortController = new AbortController()),
            (this._isStreamingSupported = !e.disableStream),
            (this._isRangeSupported = !e.disableRange);
        const s = new Headers(t.headers),
            i = e.url;
        fetch(i, Vu(s, this._withCredentials, this._abortController))
            .then((r) => {
                if (((t._responseOrigin = Gh(r.url)), !Uu(r.status))) throw zh(r.status, i);
                (this._reader = r.body.getReader()), this._headersCapability.resolve();
                const a = r.headers,
                    { allowRangeRequests: o, suggestedLength: l } = Gu({ responseHeaders: a, isHttp: t.isHttp, rangeChunkSize: this._rangeChunkSize, disableRange: this._disableRange });
                (this._isRangeSupported = o), (this._contentLength = l || this._contentLength), (this._filename = zu(a)), !this._isStreamingSupported && this._isRangeSupported && this.cancel(new Vi("Streaming is disabled."));
            })
            .catch(this._headersCapability.reject),
            (this.onProgress = null);
    }
    get headersReady() {
        return this._headersCapability.promise;
    }
    get filename() {
        return this._filename;
    }
    get contentLength() {
        return this._contentLength;
    }
    get isRangeSupported() {
        return this._isRangeSupported;
    }
    get isStreamingSupported() {
        return this._isStreamingSupported;
    }
    async read() {
        var s;
        await this._headersCapability.promise;
        const { value: t, done: e } = await this._reader.read();
        return e ? { value: t, done: e } : ((this._loaded += t.byteLength), (s = this.onProgress) == null || s.call(this, { loaded: this._loaded, total: this._contentLength }), { value: ju(t), done: !1 });
    }
    cancel(t) {
        var e;
        (e = this._reader) == null || e.cancel(t), this._abortController.abort();
    }
}
class Kp {
    constructor(t, e, s) {
        (this._stream = t), (this._reader = null), (this._loaded = 0);
        const i = t.source;
        (this._withCredentials = i.withCredentials || !1), (this._readCapability = Promise.withResolvers()), (this._isStreamingSupported = !i.disableStream), (this._abortController = new AbortController());
        const r = new Headers(t.headers);
        r.append("Range", `bytes=${e}-${s - 1}`);
        const a = i.url;
        fetch(a, Vu(r, this._withCredentials, this._abortController))
            .then((o) => {
                const l = Gh(o.url);
                if (l !== t._responseOrigin) throw new Error(`Expected range response-origin "${l}" to match "${t._responseOrigin}".`);
                if (!Uu(o.status)) throw zh(o.status, a);
                this._readCapability.resolve(), (this._reader = o.body.getReader());
            })
            .catch(this._readCapability.reject),
            (this.onProgress = null);
    }
    get isStreamingSupported() {
        return this._isStreamingSupported;
    }
    async read() {
        var s;
        await this._readCapability.promise;
        const { value: t, done: e } = await this._reader.read();
        return e ? { value: t, done: e } : ((this._loaded += t.byteLength), (s = this.onProgress) == null || s.call(this, { loaded: this._loaded }), { value: ju(t), done: !1 });
    }
    cancel(t) {
        var e;
        (e = this._reader) == null || e.cancel(t), this._abortController.abort();
    }
}
const Yh = 200,
    Kh = 206;
function Qp(d) {
    const t = d.response;
    return typeof t != "string" ? t : Hh(t).buffer;
}
class Jp {
    constructor({ url: t, httpHeaders: e, withCredentials: s }) {
        O(this, "_responseOrigin", null);
        (this.url = t), (this.isHttp = /^https?:/i.test(t)), (this.headers = $u(this.isHttp, e)), (this.withCredentials = s || !1), (this.currXhrId = 0), (this.pendingRequests = Object.create(null));
    }
    request(t) {
        const e = new XMLHttpRequest(),
            s = this.currXhrId++,
            i = (this.pendingRequests[s] = { xhr: e });
        e.open("GET", this.url), (e.withCredentials = this.withCredentials);
        for (const [r, a] of this.headers) e.setRequestHeader(r, a);
        return (
            this.isHttp && "begin" in t && "end" in t ? (e.setRequestHeader("Range", `bytes=${t.begin}-${t.end - 1}`), (i.expectedStatus = Kh)) : (i.expectedStatus = Yh),
            (e.responseType = "arraybuffer"),
            vt(t.onError, "Expected `onError` callback to be provided."),
            (e.onerror = () => {
                t.onError(e.status);
            }),
            (e.onreadystatechange = this.onStateChange.bind(this, s)),
            (e.onprogress = this.onProgress.bind(this, s)),
            (i.onHeadersReceived = t.onHeadersReceived),
            (i.onDone = t.onDone),
            (i.onError = t.onError),
            (i.onProgress = t.onProgress),
            e.send(null),
            s
        );
    }
    onProgress(t, e) {
        var i;
        const s = this.pendingRequests[t];
        s && ((i = s.onProgress) == null || i.call(s, e));
    }
    onStateChange(t, e) {
        const s = this.pendingRequests[t];
        if (!s) return;
        const i = s.xhr;
        if ((i.readyState >= 2 && s.onHeadersReceived && (s.onHeadersReceived(), delete s.onHeadersReceived), i.readyState !== 4 || !(t in this.pendingRequests))) return;
        if ((delete this.pendingRequests[t], i.status === 0 && this.isHttp)) {
            s.onError(i.status);
            return;
        }
        const r = i.status || Yh;
        if (!(r === Yh && s.expectedStatus === Kh) && r !== s.expectedStatus) {
            s.onError(i.status);
            return;
        }
        const o = Qp(i);
        if (r === Kh) {
            const l = i.getResponseHeader("Content-Range"),
                h = /bytes (\d+)-(\d+)\/(\d+)/.exec(l);
            h ? s.onDone({ begin: parseInt(h[1], 10), chunk: o }) : (V('Missing or invalid "Content-Range" header.'), s.onError(0));
        } else o ? s.onDone({ begin: 0, chunk: o }) : s.onError(i.status);
    }
    getRequestXhr(t) {
        return this.pendingRequests[t].xhr;
    }
    isPendingRequest(t) {
        return t in this.pendingRequests;
    }
    abortRequest(t) {
        const e = this.pendingRequests[t].xhr;
        delete this.pendingRequests[t], e.abort();
    }
}
class Zp {
    constructor(t) {
        (this._source = t), (this._manager = new Jp(t)), (this._rangeChunkSize = t.rangeChunkSize), (this._fullRequestReader = null), (this._rangeRequestReaders = []);
    }
    _onRangeRequestReaderClosed(t) {
        const e = this._rangeRequestReaders.indexOf(t);
        e >= 0 && this._rangeRequestReaders.splice(e, 1);
    }
    getFullReader() {
        return vt(!this._fullRequestReader, "PDFNetworkStream.getFullReader can only be called once."), (this._fullRequestReader = new tg(this._manager, this._source)), this._fullRequestReader;
    }
    getRangeReader(t, e) {
        const s = new eg(this._manager, t, e);
        return (s.onClosed = this._onRangeRequestReaderClosed.bind(this)), this._rangeRequestReaders.push(s), s;
    }
    cancelAllRequests(t) {
        var e;
        (e = this._fullRequestReader) == null || e.cancel(t);
        for (const s of this._rangeRequestReaders.slice(0)) s.cancel(t);
    }
}
class tg {
    constructor(t, e) {
        (this._manager = t),
            (this._url = e.url),
            (this._fullRequestId = t.request({ onHeadersReceived: this._onHeadersReceived.bind(this), onDone: this._onDone.bind(this), onError: this._onError.bind(this), onProgress: this._onProgress.bind(this) })),
            (this._headersCapability = Promise.withResolvers()),
            (this._disableRange = e.disableRange || !1),
            (this._contentLength = e.length),
            (this._rangeChunkSize = e.rangeChunkSize),
            !this._rangeChunkSize && !this._disableRange && (this._disableRange = !0),
            (this._isStreamingSupported = !1),
            (this._isRangeSupported = !1),
            (this._cachedChunks = []),
            (this._requests = []),
            (this._done = !1),
            (this._storedError = void 0),
            (this._filename = null),
            (this.onProgress = null);
    }
    _onHeadersReceived() {
        const t = this._fullRequestId,
            e = this._manager.getRequestXhr(t);
        this._manager._responseOrigin = Gh(e.responseURL);
        const s = e.getAllResponseHeaders(),
            i = new Headers(
                s
                    ? s
                          .trimStart()
                          .replace(/[^\S ]+$/, "")
                          .split(/[\r\n]+/)
                          .map((o) => {
                              const [l, ...h] = o.split(": ");
                              return [l, h.join(": ")];
                          })
                    : []
            ),
            { allowRangeRequests: r, suggestedLength: a } = Gu({ responseHeaders: i, isHttp: this._manager.isHttp, rangeChunkSize: this._rangeChunkSize, disableRange: this._disableRange });
        r && (this._isRangeSupported = !0), (this._contentLength = a || this._contentLength), (this._filename = zu(i)), this._isRangeSupported && this._manager.abortRequest(t), this._headersCapability.resolve();
    }
    _onDone(t) {
        if ((t && (this._requests.length > 0 ? this._requests.shift().resolve({ value: t.chunk, done: !1 }) : this._cachedChunks.push(t.chunk)), (this._done = !0), !(this._cachedChunks.length > 0))) {
            for (const e of this._requests) e.resolve({ value: void 0, done: !0 });
            this._requests.length = 0;
        }
    }
    _onError(t) {
        (this._storedError = zh(t, this._url)), this._headersCapability.reject(this._storedError);
        for (const e of this._requests) e.reject(this._storedError);
        (this._requests.length = 0), (this._cachedChunks.length = 0);
    }
    _onProgress(t) {
        var e;
        (e = this.onProgress) == null || e.call(this, { loaded: t.loaded, total: t.lengthComputable ? t.total : this._contentLength });
    }
    get filename() {
        return this._filename;
    }
    get isRangeSupported() {
        return this._isRangeSupported;
    }
    get isStreamingSupported() {
        return this._isStreamingSupported;
    }
    get contentLength() {
        return this._contentLength;
    }
    get headersReady() {
        return this._headersCapability.promise;
    }
    async read() {
        if ((await this._headersCapability.promise, this._storedError)) throw this._storedError;
        if (this._cachedChunks.length > 0) return { value: this._cachedChunks.shift(), done: !1 };
        if (this._done) return { value: void 0, done: !0 };
        const t = Promise.withResolvers();
        return this._requests.push(t), t.promise;
    }
    cancel(t) {
        (this._done = !0), this._headersCapability.reject(t);
        for (const e of this._requests) e.resolve({ value: void 0, done: !0 });
        (this._requests.length = 0), this._manager.isPendingRequest(this._fullRequestId) && this._manager.abortRequest(this._fullRequestId), (this._fullRequestReader = null);
    }
}
class eg {
    constructor(t, e, s) {
        (this._manager = t),
            (this._url = t.url),
            (this._requestId = t.request({ begin: e, end: s, onHeadersReceived: this._onHeadersReceived.bind(this), onDone: this._onDone.bind(this), onError: this._onError.bind(this), onProgress: this._onProgress.bind(this) })),
            (this._requests = []),
            (this._queuedChunk = null),
            (this._done = !1),
            (this._storedError = void 0),
            (this.onProgress = null),
            (this.onClosed = null);
    }
    _onHeadersReceived() {
        var e;
        const t = Gh((e = this._manager.getRequestXhr(this._requestId)) == null ? void 0 : e.responseURL);
        t !== this._manager._responseOrigin && ((this._storedError = new Error(`Expected range response-origin "${t}" to match "${this._manager._responseOrigin}".`)), this._onError(0));
    }
    _close() {
        var t;
        (t = this.onClosed) == null || t.call(this, this);
    }
    _onDone(t) {
        const e = t.chunk;
        this._requests.length > 0 ? this._requests.shift().resolve({ value: e, done: !1 }) : (this._queuedChunk = e), (this._done = !0);
        for (const s of this._requests) s.resolve({ value: void 0, done: !0 });
        (this._requests.length = 0), this._close();
    }
    _onError(t) {
        this._storedError ?? (this._storedError = zh(t, this._url));
        for (const e of this._requests) e.reject(this._storedError);
        (this._requests.length = 0), (this._queuedChunk = null);
    }
    _onProgress(t) {
        var e;
        this.isStreamingSupported || (e = this.onProgress) == null || e.call(this, { loaded: t.loaded });
    }
    get isStreamingSupported() {
        return !1;
    }
    async read() {
        if (this._storedError) throw this._storedError;
        if (this._queuedChunk !== null) {
            const e = this._queuedChunk;
            return (this._queuedChunk = null), { value: e, done: !1 };
        }
        if (this._done) return { value: void 0, done: !0 };
        const t = Promise.withResolvers();
        return this._requests.push(t), t.promise;
    }
    cancel(t) {
        this._done = !0;
        for (const e of this._requests) e.resolve({ value: void 0, done: !0 });
        (this._requests.length = 0), this._manager.isPendingRequest(this._requestId) && this._manager.abortRequest(this._requestId), this._close();
    }
}
const sg = /^[a-z][a-z0-9\-+.]+:/i;
function ig(d) {
    if (sg.test(d)) return new URL(d);
    const t = process.getBuiltinModule("url");
    return new URL(t.pathToFileURL(d));
}
class ng {
    constructor(t) {
        (this.source = t), (this.url = ig(t.url)), vt(this.url.protocol === "file:", "PDFNodeStream only supports file:// URLs."), (this._fullRequestReader = null), (this._rangeRequestReaders = []);
    }
    get _progressiveDataLength() {
        var t;
        return ((t = this._fullRequestReader) == null ? void 0 : t._loaded) ?? 0;
    }
    getFullReader() {
        return vt(!this._fullRequestReader, "PDFNodeStream.getFullReader can only be called once."), (this._fullRequestReader = new rg(this)), this._fullRequestReader;
    }
    getRangeReader(t, e) {
        if (e <= this._progressiveDataLength) return null;
        const s = new ag(this, t, e);
        return this._rangeRequestReaders.push(s), s;
    }
    cancelAllRequests(t) {
        var e;
        (e = this._fullRequestReader) == null || e.cancel(t);
        for (const s of this._rangeRequestReaders.slice(0)) s.cancel(t);
    }
}
class rg {
    constructor(t) {
        (this._url = t.url), (this._done = !1), (this._storedError = null), (this.onProgress = null);
        const e = t.source;
        (this._contentLength = e.length),
            (this._loaded = 0),
            (this._filename = null),
            (this._disableRange = e.disableRange || !1),
            (this._rangeChunkSize = e.rangeChunkSize),
            !this._rangeChunkSize && !this._disableRange && (this._disableRange = !0),
            (this._isStreamingSupported = !e.disableStream),
            (this._isRangeSupported = !e.disableRange),
            (this._readableStream = null),
            (this._readCapability = Promise.withResolvers()),
            (this._headersCapability = Promise.withResolvers());
        const s = process.getBuiltinModule("fs");
        s.promises.lstat(this._url).then(
            (i) => {
                (this._contentLength = i.size), this._setReadableStream(s.createReadStream(this._url)), this._headersCapability.resolve();
            },
            (i) => {
                i.code === "ENOENT" && (i = new Ka(`Missing PDF "${this._url}".`)), (this._storedError = i), this._headersCapability.reject(i);
            }
        );
    }
    get headersReady() {
        return this._headersCapability.promise;
    }
    get filename() {
        return this._filename;
    }
    get contentLength() {
        return this._contentLength;
    }
    get isRangeSupported() {
        return this._isRangeSupported;
    }
    get isStreamingSupported() {
        return this._isStreamingSupported;
    }
    async read() {
        var s;
        if ((await this._readCapability.promise, this._done)) return { value: void 0, done: !0 };
        if (this._storedError) throw this._storedError;
        const t = this._readableStream.read();
        return t === null
            ? ((this._readCapability = Promise.withResolvers()), this.read())
            : ((this._loaded += t.length), (s = this.onProgress) == null || s.call(this, { loaded: this._loaded, total: this._contentLength }), { value: new Uint8Array(t).buffer, done: !1 });
    }
    cancel(t) {
        if (!this._readableStream) {
            this._error(t);
            return;
        }
        this._readableStream.destroy(t);
    }
    _error(t) {
        (this._storedError = t), this._readCapability.resolve();
    }
    _setReadableStream(t) {
        (this._readableStream = t),
            t.on("readable", () => {
                this._readCapability.resolve();
            }),
            t.on("end", () => {
                t.destroy(), (this._done = !0), this._readCapability.resolve();
            }),
            t.on("error", (e) => {
                this._error(e);
            }),
            !this._isStreamingSupported && this._isRangeSupported && this._error(new Vi("streaming is disabled")),
            this._storedError && this._readableStream.destroy(this._storedError);
    }
}
class ag {
    constructor(t, e, s) {
        (this._url = t.url), (this._done = !1), (this._storedError = null), (this.onProgress = null), (this._loaded = 0), (this._readableStream = null), (this._readCapability = Promise.withResolvers());
        const i = t.source;
        this._isStreamingSupported = !i.disableStream;
        const r = process.getBuiltinModule("fs");
        this._setReadableStream(r.createReadStream(this._url, { start: e, end: s - 1 }));
    }
    get isStreamingSupported() {
        return this._isStreamingSupported;
    }
    async read() {
        var s;
        if ((await this._readCapability.promise, this._done)) return { value: void 0, done: !0 };
        if (this._storedError) throw this._storedError;
        const t = this._readableStream.read();
        return t === null
            ? ((this._readCapability = Promise.withResolvers()), this.read())
            : ((this._loaded += t.length), (s = this.onProgress) == null || s.call(this, { loaded: this._loaded }), { value: new Uint8Array(t).buffer, done: !1 });
    }
    cancel(t) {
        if (!this._readableStream) {
            this._error(t);
            return;
        }
        this._readableStream.destroy(t);
    }
    _error(t) {
        (this._storedError = t), this._readCapability.resolve();
    }
    _setReadableStream(t) {
        (this._readableStream = t),
            t.on("readable", () => {
                this._readCapability.resolve();
            }),
            t.on("end", () => {
                t.destroy(), (this._done = !0), this._readCapability.resolve();
            }),
            t.on("error", (e) => {
                this._error(e);
            }),
            this._storedError && this._readableStream.destroy(this._storedError);
    }
}
const og = 1e5,
    le = 30,
    lg = 0.8;
var qd, Ci, ue, Fo, No, En, Vs, Oo, Ho, xn, zr, Ur, Ti, Vr, Bo, jr, Cn, $o, Go, Tn, Rn, zo, Ri, Wr, ci, Wu, Xu, Rc, ke, Ul, Pc, qu, Yu;
const xt = class xt {
    constructor({ textContentSource: t, container: e, viewport: s }) {
        m(this, ci);
        m(this, Ci, Promise.withResolvers());
        m(this, ue, null);
        m(this, Fo, !1);
        m(this, No, !!((qd = globalThis.FontInspector) != null && qd.enabled));
        m(this, En, null);
        m(this, Vs, null);
        m(this, Oo, 0);
        m(this, Ho, 0);
        m(this, xn, null);
        m(this, zr, null);
        m(this, Ur, 0);
        m(this, Ti, 0);
        m(this, Vr, Object.create(null));
        m(this, Bo, []);
        m(this, jr, null);
        m(this, Cn, []);
        m(this, $o, new WeakMap());
        m(this, Go, null);
        var l;
        if (t instanceof ReadableStream) f(this, jr, t);
        else if (typeof t == "object")
            f(
                this,
                jr,
                new ReadableStream({
                    start(h) {
                        h.enqueue(t), h.close();
                    },
                })
            );
        else throw new Error('No "textContentSource" parameter specified.');
        f(this, ue, f(this, zr, e)), f(this, Ti, s.scale * (globalThis.devicePixelRatio || 1)), f(this, Ur, s.rotation), f(this, Vs, { div: null, properties: null, ctx: null });
        const { pageWidth: i, pageHeight: r, pageX: a, pageY: o } = s.rawDims;
        f(this, Go, [1, 0, 0, -1, -a, o + r]),
            f(this, Ho, i),
            f(this, Oo, r),
            b((l = xt), ke, qu).call(l),
            nr(e, s),
            n(this, Ci)
                .promise.finally(() => {
                    n(xt, Wr).delete(this), f(this, Vs, null), f(this, Vr, null);
                })
                .catch(() => {});
    }
    static get fontFamilyMap() {
        const { isWindows: t, isFirefox: e } = ne.platform;
        return q(
            this,
            "fontFamilyMap",
            new Map([
                ["sans-serif", `${t && e ? "Calibri, " : ""}sans-serif`],
                ["monospace", `${t && e ? "Lucida Console, " : ""}monospace`],
            ])
        );
    }
    render() {
        const t = () => {
            n(this, xn)
                .read()
                .then(({ value: e, done: s }) => {
                    if (s) {
                        n(this, Ci).resolve();
                        return;
                    }
                    n(this, En) ?? f(this, En, e.lang), Object.assign(n(this, Vr), e.styles), b(this, ci, Wu).call(this, e.items), t();
                }, n(this, Ci).reject);
        };
        return f(this, xn, n(this, jr).getReader()), n(xt, Wr).add(this), t(), n(this, Ci).promise;
    }
    update({ viewport: t, onBefore: e = null }) {
        var r;
        const s = t.scale * (globalThis.devicePixelRatio || 1),
            i = t.rotation;
        if ((i !== n(this, Ur) && (e == null || e(), f(this, Ur, i), nr(n(this, zr), { rotation: i })), s !== n(this, Ti))) {
            e == null || e(), f(this, Ti, s);
            const a = { div: null, properties: null, ctx: b((r = xt), ke, Ul).call(r, n(this, En)) };
            for (const o of n(this, Cn)) (a.properties = n(this, $o).get(o)), (a.div = o), b(this, ci, Rc).call(this, a);
        }
    }
    cancel() {
        var e;
        const t = new Vi("TextLayer task cancelled.");
        (e = n(this, xn)) == null || e.cancel(t).catch(() => {}), f(this, xn, null), n(this, Ci).reject(t);
    }
    get textDivs() {
        return n(this, Cn);
    }
    get textContentItemsStr() {
        return n(this, Bo);
    }
    static cleanup() {
        if (!(n(this, Wr).size > 0)) {
            n(this, Tn).clear();
            for (const { canvas: t } of n(this, Rn).values()) t.remove();
            n(this, Rn).clear();
        }
    }
};
(Ci = new WeakMap()),
    (ue = new WeakMap()),
    (Fo = new WeakMap()),
    (No = new WeakMap()),
    (En = new WeakMap()),
    (Vs = new WeakMap()),
    (Oo = new WeakMap()),
    (Ho = new WeakMap()),
    (xn = new WeakMap()),
    (zr = new WeakMap()),
    (Ur = new WeakMap()),
    (Ti = new WeakMap()),
    (Vr = new WeakMap()),
    (Bo = new WeakMap()),
    (jr = new WeakMap()),
    (Cn = new WeakMap()),
    ($o = new WeakMap()),
    (Go = new WeakMap()),
    (Tn = new WeakMap()),
    (Rn = new WeakMap()),
    (zo = new WeakMap()),
    (Ri = new WeakMap()),
    (Wr = new WeakMap()),
    (ci = new WeakSet()),
    (Wu = function (t) {
        var i, r;
        if (n(this, Fo)) return;
        (r = n(this, Vs)).ctx ?? (r.ctx = b((i = xt), ke, Ul).call(i, n(this, En)));
        const e = n(this, Cn),
            s = n(this, Bo);
        for (const a of t) {
            if (e.length > og) {
                V("Ignoring additional textDivs for performance reasons."), f(this, Fo, !0);
                return;
            }
            if (a.str === void 0) {
                if (a.type === "beginMarkedContentProps" || a.type === "beginMarkedContent") {
                    const o = n(this, ue);
                    f(this, ue, document.createElement("span")), n(this, ue).classList.add("markedContent"), a.id !== null && n(this, ue).setAttribute("id", `${a.id}`), o.append(n(this, ue));
                } else a.type === "endMarkedContent" && f(this, ue, n(this, ue).parentNode);
                continue;
            }
            s.push(a.str), b(this, ci, Xu).call(this, a);
        }
    }),
    (Xu = function (t) {
        var y;
        const e = document.createElement("span"),
            s = { angle: 0, canvasWidth: 0, hasText: t.str !== "", hasEOL: t.hasEOL, fontSize: 0 };
        n(this, Cn).push(e);
        const i = F.transform(n(this, Go), t.transform);
        let r = Math.atan2(i[1], i[0]);
        const a = n(this, Vr)[t.fontName];
        a.vertical && (r += Math.PI / 2);
        let o = (n(this, No) && a.fontSubstitution) || a.fontFamily;
        o = xt.fontFamilyMap.get(o) || o;
        const l = Math.hypot(i[2], i[3]),
            h = l * b((y = xt), ke, Yu).call(y, o, n(this, En));
        let c, u;
        r === 0 ? ((c = i[4]), (u = i[5] - h)) : ((c = i[4] + h * Math.sin(r)), (u = i[5] - h * Math.cos(r)));
        const p = "calc(var(--scale-factor)*",
            g = e.style;
        n(this, ue) === n(this, zr) ? ((g.left = `${((100 * c) / n(this, Ho)).toFixed(2)}%`), (g.top = `${((100 * u) / n(this, Oo)).toFixed(2)}%`)) : ((g.left = `${p}${c.toFixed(2)}px)`), (g.top = `${p}${u.toFixed(2)}px)`)),
            (g.fontSize = `${p}${(n(xt, Ri) * l).toFixed(2)}px)`),
            (g.fontFamily = o),
            (s.fontSize = l),
            e.setAttribute("role", "presentation"),
            (e.textContent = t.str),
            (e.dir = t.dir),
            n(this, No) && (e.dataset.fontName = a.fontSubstitutionLoadedName || t.fontName),
            r !== 0 && (s.angle = r * (180 / Math.PI));
        let A = !1;
        if (t.str.length > 1) A = !0;
        else if (t.str !== " " && t.transform[0] !== t.transform[3]) {
            const v = Math.abs(t.transform[0]),
                w = Math.abs(t.transform[3]);
            v !== w && Math.max(v, w) / Math.min(v, w) > 1.5 && (A = !0);
        }
        if ((A && (s.canvasWidth = a.vertical ? t.height : t.width), n(this, $o).set(e, s), (n(this, Vs).div = e), (n(this, Vs).properties = s), b(this, ci, Rc).call(this, n(this, Vs)), s.hasText && n(this, ue).append(e), s.hasEOL)) {
            const v = document.createElement("br");
            v.setAttribute("role", "presentation"), n(this, ue).append(v);
        }
    }),
    (Rc = function (t) {
        var o;
        const { div: e, properties: s, ctx: i } = t,
            { style: r } = e;
        let a = "";
        if ((n(xt, Ri) > 1 && (a = `scale(${1 / n(xt, Ri)})`), s.canvasWidth !== 0 && s.hasText)) {
            const { fontFamily: l } = r,
                { canvasWidth: h, fontSize: c } = s;
            b((o = xt), ke, Pc).call(o, i, c * n(this, Ti), l);
            const { width: u } = i.measureText(e.textContent);
            u > 0 && (a = `scaleX(${(h * n(this, Ti)) / u}) ${a}`);
        }
        s.angle !== 0 && (a = `rotate(${s.angle}deg) ${a}`), a.length > 0 && (r.transform = a);
    }),
    (ke = new WeakSet()),
    (Ul = function (t = null) {
        let e = n(this, Rn).get(t || (t = ""));
        if (!e) {
            const s = document.createElement("canvas");
            (s.className = "hiddenCanvasElement"), (s.lang = t), document.body.append(s), (e = s.getContext("2d", { alpha: !1, willReadFrequently: !0 })), n(this, Rn).set(t, e), n(this, zo).set(e, { size: 0, family: "" });
        }
        return e;
    }),
    (Pc = function (t, e, s) {
        const i = n(this, zo).get(t);
        (e === i.size && s === i.family) || ((t.font = `${e}px ${s}`), (i.size = e), (i.family = s));
    }),
    (qu = function () {
        if (n(this, Ri) !== null) return;
        const t = document.createElement("div");
        (t.style.opacity = 0), (t.style.lineHeight = 1), (t.style.fontSize = "1px"), (t.style.position = "absolute"), (t.textContent = "X"), document.body.append(t), f(this, Ri, t.getBoundingClientRect().height), t.remove();
    }),
    (Yu = function (t, e) {
        const s = n(this, Tn).get(t);
        if (s) return s;
        const i = b(this, ke, Ul).call(this, e);
        (i.canvas.width = i.canvas.height = le), b(this, ke, Pc).call(this, i, le, t);
        const r = i.measureText("");
        let a = r.fontBoundingBoxAscent,
            o = Math.abs(r.fontBoundingBoxDescent);
        if (a) {
            const c = a / (a + o);
            return n(this, Tn).set(t, c), (i.canvas.width = i.canvas.height = 0), c;
        }
        (i.strokeStyle = "red"), i.clearRect(0, 0, le, le), i.strokeText("g", 0, 0);
        let l = i.getImageData(0, 0, le, le).data;
        o = 0;
        for (let c = l.length - 1 - 3; c >= 0; c -= 4)
            if (l[c] > 0) {
                o = Math.ceil(c / 4 / le);
                break;
            }
        i.clearRect(0, 0, le, le), i.strokeText("A", 0, le), (l = i.getImageData(0, 0, le, le).data), (a = 0);
        for (let c = 0, u = l.length; c < u; c += 4)
            if (l[c] > 0) {
                a = le - Math.floor(c / 4 / le);
                break;
            }
        i.canvas.width = i.canvas.height = 0;
        const h = a ? a / (a + o) : lg;
        return n(this, Tn).set(t, h), h;
    }),
    m(xt, ke),
    m(xt, Tn, new Map()),
    m(xt, Rn, new Map()),
    m(xt, zo, new WeakMap()),
    m(xt, Ri, null),
    m(xt, Wr, new Set());
let Qa = xt;
class Ja {
    static textContent(t) {
        const e = [],
            s = { items: e, styles: Object.create(null) };
        function i(r) {
            var l;
            if (!r) return;
            let a = null;
            const o = r.name;
            if (o === "#text") a = r.value;
            else if (Ja.shouldBuildText(o)) (l = r == null ? void 0 : r.attributes) != null && l.textContent ? (a = r.attributes.textContent) : r.value && (a = r.value);
            else return;
            if ((a !== null && e.push({ str: a }), !!r.children)) for (const h of r.children) i(h);
        }
        return i(t), s;
    }
    static shouldBuildText(t) {
        return !(t === "textarea" || t === "input" || t === "option" || t === "select");
    }
}
const hg = 65536,
    cg = 100,
    dg = 5e3,
    ug = Kt ? Cp : Sp,
    fg = Kt ? Tp : Du,
    pg = Kt ? xp : Ep,
    gg = Kt ? Rp : Hu;
function mg(d = {}) {
    typeof d == "string" || d instanceof URL ? (d = { url: d }) : (d instanceof ArrayBuffer || ArrayBuffer.isView(d)) && (d = { data: d });
    const t = new Mc(),
        { docId: e } = t,
        s = d.url ? bg(d.url) : null,
        i = d.data ? Ag(d.data) : null,
        r = d.httpHeaders || null,
        a = d.withCredentials === !0,
        o = d.password ?? null,
        l = d.range instanceof Ku ? d.range : null,
        h = Number.isInteger(d.rangeChunkSize) && d.rangeChunkSize > 0 ? d.rangeChunkSize : hg;
    let c = d.worker instanceof vr ? d.worker : null;
    const u = d.verbosity,
        p = typeof d.docBaseUrl == "string" && !$h(d.docBaseUrl) ? d.docBaseUrl : null,
        g = typeof d.cMapUrl == "string" ? d.cMapUrl : null,
        A = d.cMapPacked !== !1,
        y = d.CMapReaderFactory || fg,
        v = typeof d.standardFontDataUrl == "string" ? d.standardFontDataUrl : null,
        w = d.StandardFontDataFactory || gg,
        _ = d.stopAtErrors !== !0,
        E = Number.isInteger(d.maxImageSize) && d.maxImageSize > -1 ? d.maxImageSize : -1,
        S = d.isEvalSupported !== !1,
        x = typeof d.isOffscreenCanvasSupported == "boolean" ? d.isOffscreenCanvasSupported : !Kt,
        T = typeof d.isImageDecoderSupported == "boolean" ? d.isImageDecoderSupported : !Kt && (ne.platform.isFirefox || !globalThis.chrome),
        C = Number.isInteger(d.canvasMaxAreaInBytes) ? d.canvasMaxAreaInBytes : -1,
        k = typeof d.disableFontFace == "boolean" ? d.disableFontFace : Kt,
        N = d.fontExtraProperties === !0,
        W = d.enableXfa === !0,
        $ = d.ownerDocument || globalThis.document,
        ot = d.disableRange === !0,
        mt = d.disableStream === !0,
        Z = d.disableAutoFetch === !0,
        Qt = d.pdfBug === !0,
        I = d.CanvasFactory || ug,
        B = d.FilterFactory || pg,
        ge = d.enableHWA === !0,
        os = l ? l.length : d.length ?? NaN,
        Ps = typeof d.useSystemFonts == "boolean" ? d.useSystemFonts : !Kt && !k,
        Le = typeof d.useWorkerFetch == "boolean" ? d.useWorkerFetch : y === Du && w === Hu && g && v && La(g, document.baseURI) && La(v, document.baseURI),
        Gt = null;
    ep(u);
    const St = {
        canvasFactory: new I({ ownerDocument: $, enableHWA: ge }),
        filterFactory: new B({ docId: e, ownerDocument: $ }),
        cMapReaderFactory: Le ? null : new y({ baseUrl: g, isCompressed: A }),
        standardFontDataFactory: Le ? null : new w({ baseUrl: v }),
    };
    if (!c) {
        const oe = { verbosity: u, port: ai.workerPort };
        (c = oe.port ? vr.fromPort(oe) : new vr(oe)), (t._worker = c);
    }
    const hr = {
            docId: e,
            apiVersion: "4.10.38",
            data: i,
            password: o,
            disableAutoFetch: Z,
            rangeChunkSize: h,
            length: os,
            docBaseUrl: p,
            enableXfa: W,
            evaluatorOptions: {
                maxImageSize: E,
                disableFontFace: k,
                ignoreErrors: _,
                isEvalSupported: S,
                isOffscreenCanvasSupported: x,
                isImageDecoderSupported: T,
                canvasMaxAreaInBytes: C,
                fontExtraProperties: N,
                useSystemFonts: Ps,
                cMapUrl: Le ? g : null,
                standardFontDataUrl: Le ? v : null,
            },
        },
        Ta = { disableFontFace: k, fontExtraProperties: N, ownerDocument: $, pdfBug: Qt, styleElement: Gt, loadingParams: { disableAutoFetch: Z, enableXfa: W } };
    return (
        c.promise
            .then(function () {
                if (t.destroyed) throw new Error("Loading aborted");
                if (c.destroyed) throw new Error("Worker was destroyed");
                const oe = c.messageHandler.sendWithPromise("GetDocRequest", hr, i ? [i.buffer] : null);
                let lt;
                if (l) lt = new jp(l, { disableRange: ot, disableStream: mt });
                else if (!i) {
                    if (!s) throw new Error("getDocument - no `url` parameter provided.");
                    let cr;
                    if (Kt)
                        if (La(s)) {
                            if (typeof fetch > "u" || typeof Response > "u" || !("body" in Response.prototype)) throw new Error("getDocument - the Fetch API was disabled in Node.js, see `--no-experimental-fetch`.");
                            cr = Vd;
                        } else cr = ng;
                    else cr = La(s) ? Vd : Zp;
                    lt = new cr({ url: s, length: os, httpHeaders: r, withCredentials: a, rangeChunkSize: h, disableRange: ot, disableStream: mt });
                }
                return oe.then((cr) => {
                    if (t.destroyed) throw new Error("Loading aborted");
                    if (c.destroyed) throw new Error("Worker was destroyed");
                    const Td = new Na(e, cr, c.port),
                        qf = new _g(Td, t, lt, Ta, St);
                    (t._transport = qf), Td.send("Ready", null);
                });
            })
            .catch(t._capability.reject),
        t
    );
}
function bg(d) {
    if (d instanceof URL) return d.href;
    try {
        return new URL(d, window.location).href;
    } catch {
        if (Kt && typeof d == "string") return d;
    }
    throw new Error("Invalid PDF url data: either string or URL-object is expected in the url property.");
}
function Ag(d) {
    if (Kt && typeof Buffer < "u" && d instanceof Buffer) throw new Error("Please provide binary data as `Uint8Array`, rather than `Buffer`.");
    if (d instanceof Uint8Array && d.byteLength === d.buffer.byteLength) return d;
    if (typeof d == "string") return Hh(d);
    if (d instanceof ArrayBuffer || ArrayBuffer.isView(d) || (typeof d == "object" && !isNaN(d == null ? void 0 : d.length))) return new Uint8Array(d);
    throw new Error("Invalid PDF binary data: either TypedArray, string, or array-like object is expected in the data property.");
}
function jd(d) {
    return typeof d == "object" && Number.isInteger(d == null ? void 0 : d.num) && d.num >= 0 && Number.isInteger(d == null ? void 0 : d.gen) && d.gen >= 0;
}
var Eh;
const xh = class xh {
    constructor() {
        (this._capability = Promise.withResolvers()), (this._transport = null), (this._worker = null), (this.docId = `d${Jt(xh, Eh)._++}`), (this.destroyed = !1), (this.onPassword = null), (this.onProgress = null);
    }
    get promise() {
        return this._capability.promise;
    }
    async destroy() {
        var t, e, s, i;
        this.destroyed = !0;
        try {
            (t = this._worker) != null && t.port && (this._worker._pendingDestroy = !0), await ((e = this._transport) == null ? void 0 : e.destroy());
        } catch (r) {
            throw ((s = this._worker) != null && s.port && delete this._worker._pendingDestroy, r);
        }
        (this._transport = null), (i = this._worker) == null || i.destroy(), (this._worker = null);
    }
};
(Eh = new WeakMap()), m(xh, Eh, 0);
let Mc = xh;
class Ku {
    constructor(t, e, s = !1, i = null) {
        (this.length = t),
            (this.initialData = e),
            (this.progressiveDone = s),
            (this.contentDispositionFilename = i),
            (this._rangeListeners = []),
            (this._progressListeners = []),
            (this._progressiveReadListeners = []),
            (this._progressiveDoneListeners = []),
            (this._readyCapability = Promise.withResolvers());
    }
    addRangeListener(t) {
        this._rangeListeners.push(t);
    }
    addProgressListener(t) {
        this._progressListeners.push(t);
    }
    addProgressiveReadListener(t) {
        this._progressiveReadListeners.push(t);
    }
    addProgressiveDoneListener(t) {
        this._progressiveDoneListeners.push(t);
    }
    onDataRange(t, e) {
        for (const s of this._rangeListeners) s(t, e);
    }
    onDataProgress(t, e) {
        this._readyCapability.promise.then(() => {
            for (const s of this._progressListeners) s(t, e);
        });
    }
    onDataProgressiveRead(t) {
        this._readyCapability.promise.then(() => {
            for (const e of this._progressiveReadListeners) e(t);
        });
    }
    onDataProgressiveDone() {
        this._readyCapability.promise.then(() => {
            for (const t of this._progressiveDoneListeners) t();
        });
    }
    transportReady() {
        this._readyCapability.resolve();
    }
    requestDataRange(t, e) {
        nt("Abstract method PDFDataRangeTransport.requestDataRange");
    }
    abort() {}
}
class yg {
    constructor(t, e) {
        (this._pdfInfo = t), (this._transport = e);
    }
    get annotationStorage() {
        return this._transport.annotationStorage;
    }
    get canvasFactory() {
        return this._transport.canvasFactory;
    }
    get filterFactory() {
        return this._transport.filterFactory;
    }
    get numPages() {
        return this._pdfInfo.numPages;
    }
    get fingerprints() {
        return this._pdfInfo.fingerprints;
    }
    get isPureXfa() {
        return q(this, "isPureXfa", !!this._transport._htmlForXfa);
    }
    get allXfaHtml() {
        return this._transport._htmlForXfa;
    }
    getPage(t) {
        return this._transport.getPage(t);
    }
    getPageIndex(t) {
        return this._transport.getPageIndex(t);
    }
    getDestinations() {
        return this._transport.getDestinations();
    }
    getDestination(t) {
        return this._transport.getDestination(t);
    }
    getPageLabels() {
        return this._transport.getPageLabels();
    }
    getPageLayout() {
        return this._transport.getPageLayout();
    }
    getPageMode() {
        return this._transport.getPageMode();
    }
    getViewerPreferences() {
        return this._transport.getViewerPreferences();
    }
    getOpenAction() {
        return this._transport.getOpenAction();
    }
    getAttachments() {
        return this._transport.getAttachments();
    }
    getJSActions() {
        return this._transport.getDocJSActions();
    }
    getOutline() {
        return this._transport.getOutline();
    }
    getOptionalContentConfig({ intent: t = "display" } = {}) {
        const { renderingIntent: e } = this._transport.getRenderingIntent(t);
        return this._transport.getOptionalContentConfig(e);
    }
    getPermissions() {
        return this._transport.getPermissions();
    }
    getMetadata() {
        return this._transport.getMetadata();
    }
    getMarkInfo() {
        return this._transport.getMarkInfo();
    }
    getData() {
        return this._transport.getData();
    }
    saveDocument() {
        return this._transport.saveDocument();
    }
    getDownloadInfo() {
        return this._transport.downloadInfoCapability.promise;
    }
    cleanup(t = !1) {
        return this._transport.startCleanup(t || this.isPureXfa);
    }
    destroy() {
        return this.loadingTask.destroy();
    }
    cachedPageNumber(t) {
        return this._transport.cachedPageNumber(t);
    }
    get loadingParams() {
        return this._transport.loadingParams;
    }
    get loadingTask() {
        return this._transport.loadingTask;
    }
    getFieldObjects() {
        return this._transport.getFieldObjects();
    }
    hasJSActions() {
        return this._transport.hasJSActions();
    }
    getCalculationOrderIds() {
        return this._transport.getCalculationOrderIds();
    }
}
var Pi, js, Ge, gr, Vl;
class wg {
    constructor(t, e, s, i = !1) {
        m(this, Ge);
        m(this, Pi, null);
        m(this, js, !1);
        (this._pageIndex = t),
            (this._pageInfo = e),
            (this._transport = s),
            (this._stats = i ? new kd() : null),
            (this._pdfBug = i),
            (this.commonObjs = s.commonObjs),
            (this.objs = new Qu()),
            (this._maybeCleanupAfterRender = !1),
            (this._intentStates = new Map()),
            (this.destroyed = !1);
    }
    get pageNumber() {
        return this._pageIndex + 1;
    }
    get rotate() {
        return this._pageInfo.rotate;
    }
    get ref() {
        return this._pageInfo.ref;
    }
    get userUnit() {
        return this._pageInfo.userUnit;
    }
    get view() {
        return this._pageInfo.view;
    }
    getViewport({ scale: t, rotation: e = this.rotate, offsetX: s = 0, offsetY: i = 0, dontFlip: r = !1 } = {}) {
        return new xl({ viewBox: this.view, userUnit: this.userUnit, scale: t, rotation: e, offsetX: s, offsetY: i, dontFlip: r });
    }
    getAnnotations({ intent: t = "display" } = {}) {
        const { renderingIntent: e } = this._transport.getRenderingIntent(t);
        return this._transport.getAnnotations(this._pageIndex, e);
    }
    getJSActions() {
        return this._transport.getPageJSActions(this._pageIndex);
    }
    get filterFactory() {
        return this._transport.filterFactory;
    }
    get isPureXfa() {
        return q(this, "isPureXfa", !!this._transport._htmlForXfa);
    }
    async getXfa() {
        var t;
        return ((t = this._transport._htmlForXfa) == null ? void 0 : t.children[this._pageIndex]) || null;
    }
    render({
        canvasContext: t,
        viewport: e,
        intent: s = "display",
        annotationMode: i = ui.ENABLE,
        transform: r = null,
        background: a = null,
        optionalContentConfigPromise: o = null,
        annotationCanvasMap: l = null,
        pageColors: h = null,
        printAnnotationStorage: c = null,
        isEditing: u = !1,
    }) {
        var S, x;
        (S = this._stats) == null || S.time("Overall");
        const p = this._transport.getRenderingIntent(s, i, c, u),
            { renderingIntent: g, cacheKey: A } = p;
        f(this, js, !1), b(this, Ge, Vl).call(this), o || (o = this._transport.getOptionalContentConfig(g));
        let y = this._intentStates.get(A);
        y || ((y = Object.create(null)), this._intentStates.set(A, y)), y.streamReaderCancelTimeout && (clearTimeout(y.streamReaderCancelTimeout), (y.streamReaderCancelTimeout = null));
        const v = !!(g & Re.PRINT);
        y.displayReadyCapability ||
            ((y.displayReadyCapability = Promise.withResolvers()), (y.operatorList = { fnArray: [], argsArray: [], lastChunk: !1, separateAnnots: null }), (x = this._stats) == null || x.time("Page Request"), this._pumpOperatorList(p));
        const w = (T) => {
                var C;
                y.renderTasks.delete(_),
                    (this._maybeCleanupAfterRender || v) && f(this, js, !0),
                    b(this, Ge, gr).call(this, !v),
                    T ? (_.capability.reject(T), this._abortOperatorList({ intentState: y, reason: T instanceof Error ? T : new Error(T) })) : _.capability.resolve(),
                    this._stats && (this._stats.timeEnd("Rendering"), this._stats.timeEnd("Overall"), (C = globalThis.Stats) != null && C.enabled && globalThis.Stats.add(this.pageNumber, this._stats));
            },
            _ = new Lc({
                callback: w,
                params: { canvasContext: t, viewport: e, transform: r, background: a },
                objs: this.objs,
                commonObjs: this.commonObjs,
                annotationCanvasMap: l,
                operatorList: y.operatorList,
                pageIndex: this._pageIndex,
                canvasFactory: this._transport.canvasFactory,
                filterFactory: this._transport.filterFactory,
                useRequestAnimationFrame: !v,
                pdfBug: this._pdfBug,
                pageColors: h,
            });
        (y.renderTasks || (y.renderTasks = new Set())).add(_);
        const E = _.task;
        return (
            Promise.all([y.displayReadyCapability.promise, o])
                .then(([T, C]) => {
                    var k;
                    if (this.destroyed) {
                        w();
                        return;
                    }
                    if (((k = this._stats) == null || k.time("Rendering"), !(C.renderingIntent & g)))
                        throw new Error("Must use the same `intent`-argument when calling the `PDFPageProxy.render` and `PDFDocumentProxy.getOptionalContentConfig` methods.");
                    _.initializeGraphics({ transparency: T, optionalContentConfig: C }), _.operatorListChanged();
                })
                .catch(w),
            E
        );
    }
    getOperatorList({ intent: t = "display", annotationMode: e = ui.ENABLE, printAnnotationStorage: s = null, isEditing: i = !1 } = {}) {
        var h;
        function r() {
            o.operatorList.lastChunk && (o.opListReadCapability.resolve(o.operatorList), o.renderTasks.delete(l));
        }
        const a = this._transport.getRenderingIntent(t, e, s, i, !0);
        let o = this._intentStates.get(a.cacheKey);
        o || ((o = Object.create(null)), this._intentStates.set(a.cacheKey, o));
        let l;
        return (
            o.opListReadCapability ||
                ((l = Object.create(null)),
                (l.operatorListChanged = r),
                (o.opListReadCapability = Promise.withResolvers()),
                (o.renderTasks || (o.renderTasks = new Set())).add(l),
                (o.operatorList = { fnArray: [], argsArray: [], lastChunk: !1, separateAnnots: null }),
                (h = this._stats) == null || h.time("Page Request"),
                this._pumpOperatorList(a)),
            o.opListReadCapability.promise
        );
    }
    streamTextContent({ includeMarkedContent: t = !1, disableNormalization: e = !1 } = {}) {
        return this._transport.messageHandler.sendWithStream(
            "GetTextContent",
            { pageIndex: this._pageIndex, includeMarkedContent: t === !0, disableNormalization: e === !0 },
            {
                highWaterMark: 100,
                size(i) {
                    return i.items.length;
                },
            }
        );
    }
    getTextContent(t = {}) {
        if (this._transport._htmlForXfa) return this.getXfa().then((s) => Ja.textContent(s));
        const e = this.streamTextContent(t);
        return new Promise(function (s, i) {
            function r() {
                a.read().then(function ({ value: l, done: h }) {
                    if (h) {
                        s(o);
                        return;
                    }
                    o.lang ?? (o.lang = l.lang), Object.assign(o.styles, l.styles), o.items.push(...l.items), r();
                }, i);
            }
            const a = e.getReader(),
                o = { items: [], styles: Object.create(null), lang: null };
            r();
        });
    }
    getStructTree() {
        return this._transport.getStructTree(this._pageIndex);
    }
    _destroy() {
        this.destroyed = !0;
        const t = [];
        for (const e of this._intentStates.values())
            if ((this._abortOperatorList({ intentState: e, reason: new Error("Page was destroyed."), force: !0 }), !e.opListReadCapability)) for (const s of e.renderTasks) t.push(s.completed), s.cancel();
        return this.objs.clear(), f(this, js, !1), b(this, Ge, Vl).call(this), Promise.all(t);
    }
    cleanup(t = !1) {
        f(this, js, !0);
        const e = b(this, Ge, gr).call(this, !1);
        return t && e && this._stats && (this._stats = new kd()), e;
    }
    _startRenderPage(t, e) {
        var i, r;
        const s = this._intentStates.get(e);
        s && ((i = this._stats) == null || i.timeEnd("Page Request"), (r = s.displayReadyCapability) == null || r.resolve(t));
    }
    _renderPageChunk(t, e) {
        for (let s = 0, i = t.length; s < i; s++) e.operatorList.fnArray.push(t.fnArray[s]), e.operatorList.argsArray.push(t.argsArray[s]);
        (e.operatorList.lastChunk = t.lastChunk), (e.operatorList.separateAnnots = t.separateAnnots);
        for (const s of e.renderTasks) s.operatorListChanged();
        t.lastChunk && b(this, Ge, gr).call(this, !0);
    }
    _pumpOperatorList({ renderingIntent: t, cacheKey: e, annotationStorageSerializable: s, modifiedIds: i }) {
        const { map: r, transfer: a } = s,
            l = this._transport.messageHandler.sendWithStream("GetOperatorList", { pageIndex: this._pageIndex, intent: t, cacheKey: e, annotationStorage: r, modifiedIds: i }, a).getReader(),
            h = this._intentStates.get(e);
        h.streamReader = l;
        const c = () => {
            l.read().then(
                ({ value: u, done: p }) => {
                    if (p) {
                        h.streamReader = null;
                        return;
                    }
                    this._transport.destroyed || (this._renderPageChunk(u, h), c());
                },
                (u) => {
                    if (((h.streamReader = null), !this._transport.destroyed)) {
                        if (h.operatorList) {
                            h.operatorList.lastChunk = !0;
                            for (const p of h.renderTasks) p.operatorListChanged();
                            b(this, Ge, gr).call(this, !0);
                        }
                        if (h.displayReadyCapability) h.displayReadyCapability.reject(u);
                        else if (h.opListReadCapability) h.opListReadCapability.reject(u);
                        else throw u;
                    }
                }
            );
        };
        c();
    }
    _abortOperatorList({ intentState: t, reason: e, force: s = !1 }) {
        if (t.streamReader) {
            if ((t.streamReaderCancelTimeout && (clearTimeout(t.streamReaderCancelTimeout), (t.streamReaderCancelTimeout = null)), !s)) {
                if (t.renderTasks.size > 0) return;
                if (e instanceof fd) {
                    let i = cg;
                    e.extraDelay > 0 && e.extraDelay < 1e3 && (i += e.extraDelay),
                        (t.streamReaderCancelTimeout = setTimeout(() => {
                            (t.streamReaderCancelTimeout = null), this._abortOperatorList({ intentState: t, reason: e, force: !0 });
                        }, i));
                    return;
                }
            }
            if ((t.streamReader.cancel(new Vi(e.message)).catch(() => {}), (t.streamReader = null), !this._transport.destroyed)) {
                for (const [i, r] of this._intentStates)
                    if (r === t) {
                        this._intentStates.delete(i);
                        break;
                    }
                this.cleanup();
            }
        }
    }
    get stats() {
        return this._stats;
    }
}
(Pi = new WeakMap()),
    (js = new WeakMap()),
    (Ge = new WeakSet()),
    (gr = function (t = !1) {
        if ((b(this, Ge, Vl).call(this), !n(this, js) || this.destroyed)) return !1;
        if (t)
            return (
                f(
                    this,
                    Pi,
                    setTimeout(() => {
                        f(this, Pi, null), b(this, Ge, gr).call(this, !1);
                    }, dg)
                ),
                !1
            );
        for (const { renderTasks: e, operatorList: s } of this._intentStates.values()) if (e.size > 0 || !s.lastChunk) return !1;
        return this._intentStates.clear(), this.objs.clear(), f(this, js, !1), !0;
    }),
    (Vl = function () {
        n(this, Pi) && (clearTimeout(n(this, Pi)), f(this, Pi, null));
    });
var Ws, Ch;
class vg {
    constructor() {
        m(this, Ws, new Map());
        m(this, Ch, Promise.resolve());
    }
    postMessage(t, e) {
        const s = { data: structuredClone(t, e ? { transfer: e } : null) };
        n(this, Ch).then(() => {
            for (const [i] of n(this, Ws)) i.call(this, s);
        });
    }
    addEventListener(t, e, s = null) {
        let i = null;
        if ((s == null ? void 0 : s.signal) instanceof AbortSignal) {
            const { signal: r } = s;
            if (r.aborted) {
                V("LoopbackPort - cannot use an `aborted` signal.");
                return;
            }
            const a = () => this.removeEventListener(t, e);
            (i = () => r.removeEventListener("abort", a)), r.addEventListener("abort", a);
        }
        n(this, Ws).set(e, i);
    }
    removeEventListener(t, e) {
        const s = n(this, Ws).get(e);
        s == null || s(), n(this, Ws).delete(e);
    }
    terminate() {
        for (const [, t] of n(this, Ws)) t == null || t();
        n(this, Ws).clear();
    }
}
(Ws = new WeakMap()), (Ch = new WeakMap());
var Th, Pn, Mn, Xr, jl, qr, Wl;
const ht = class ht {
    constructor({ name: t = null, port: e = null, verbosity: s = sp() } = {}) {
        m(this, Xr);
        var i;
        if (((this.name = t), (this.destroyed = !1), (this.verbosity = s), (this._readyCapability = Promise.withResolvers()), (this._port = null), (this._webWorker = null), (this._messageHandler = null), e)) {
            if ((i = n(ht, Mn)) != null && i.has(e)) throw new Error("Cannot use more than one PDFWorker per port.");
            (n(ht, Mn) || f(ht, Mn, new WeakMap())).set(e, this), this._initializeFromPort(e);
            return;
        }
        this._initialize();
    }
    get promise() {
        return this._readyCapability.promise;
    }
    get port() {
        return this._port;
    }
    get messageHandler() {
        return this._messageHandler;
    }
    _initializeFromPort(t) {
        (this._port = t), (this._messageHandler = new Na("main", "worker", t)), this._messageHandler.on("ready", function () {}), b(this, Xr, jl).call(this);
    }
    _initialize() {
        if (n(ht, Pn) || n(ht, qr, Wl)) {
            this._setupFakeWorker();
            return;
        }
        let { workerSrc: t } = ht;
        try {
            ht._isSameOrigin(window.location.href, t) || (t = ht._createCDNWrapper(new URL(t, window.location).href));
            const e = new Worker(t, { type: "module" }),
                s = new Na("main", "worker", e),
                i = () => {
                    r.abort(), s.destroy(), e.terminate(), this.destroyed ? this._readyCapability.reject(new Error("Worker was destroyed")) : this._setupFakeWorker();
                },
                r = new AbortController();
            e.addEventListener(
                "error",
                () => {
                    this._webWorker || i();
                },
                { signal: r.signal }
            ),
                s.on("test", (o) => {
                    if ((r.abort(), this.destroyed || !o)) {
                        i();
                        return;
                    }
                    (this._messageHandler = s), (this._port = e), (this._webWorker = e), b(this, Xr, jl).call(this);
                }),
                s.on("ready", (o) => {
                    if ((r.abort(), this.destroyed)) {
                        i();
                        return;
                    }
                    try {
                        a();
                    } catch {
                        this._setupFakeWorker();
                    }
                });
            const a = () => {
                const o = new Uint8Array();
                s.send("test", o, [o.buffer]);
            };
            a();
            return;
        } catch {
            Oh("The worker has been disabled.");
        }
        this._setupFakeWorker();
    }
    _setupFakeWorker() {
        n(ht, Pn) || (V("Setting up fake worker."), f(ht, Pn, !0)),
            ht._setupFakeWorkerGlobal
                .then((t) => {
                    if (this.destroyed) {
                        this._readyCapability.reject(new Error("Worker was destroyed"));
                        return;
                    }
                    const e = new vg();
                    this._port = e;
                    const s = `fake${Jt(ht, Th)._++}`,
                        i = new Na(s + "_worker", s, e);
                    t.setup(i, e), (this._messageHandler = new Na(s, s + "_worker", e)), b(this, Xr, jl).call(this);
                })
                .catch((t) => {
                    this._readyCapability.reject(new Error(`Setting up fake worker failed: "${t.message}".`));
                });
    }
    destroy() {
        var t, e, s;
        (this.destroyed = !0),
            (t = this._webWorker) == null || t.terminate(),
            (this._webWorker = null),
            (e = n(ht, Mn)) == null || e.delete(this._port),
            (this._port = null),
            (s = this._messageHandler) == null || s.destroy(),
            (this._messageHandler = null);
    }
    static fromPort(t) {
        var s;
        if (!(t != null && t.port)) throw new Error("PDFWorker.fromPort - invalid method signature.");
        const e = (s = n(this, Mn)) == null ? void 0 : s.get(t.port);
        if (e) {
            if (e._pendingDestroy) throw new Error("PDFWorker.fromPort - the worker is being destroyed.\nPlease remember to await `PDFDocumentLoadingTask.destroy()`-calls.");
            return e;
        }
        return new ht(t);
    }
    static get workerSrc() {
        if (ai.workerSrc) return ai.workerSrc;
        throw new Error('No "GlobalWorkerOptions.workerSrc" specified.');
    }
    static get _setupFakeWorkerGlobal() {
        return q(this, "_setupFakeWorkerGlobal", (async () => (n(this, qr, Wl) ? n(this, qr, Wl) : (await import(this.workerSrc)).WorkerMessageHandler))());
    }
};
(Th = new WeakMap()),
    (Pn = new WeakMap()),
    (Mn = new WeakMap()),
    (Xr = new WeakSet()),
    (jl = function () {
        this._readyCapability.resolve(), this._messageHandler.send("configure", { verbosity: this.verbosity });
    }),
    (qr = new WeakSet()),
    (Wl = function () {
        var t;
        try {
            return ((t = globalThis.pdfjsWorker) == null ? void 0 : t.WorkerMessageHandler) || null;
        } catch {
            return null;
        }
    }),
    m(ht, qr),
    m(ht, Th, 0),
    m(ht, Pn, !1),
    m(ht, Mn),
    Kt && (f(ht, Pn, !0), ai.workerSrc || (ai.workerSrc = "./pdf.worker.mjs")),
    (ht._isSameOrigin = (t, e) => {
        let s;
        try {
            if (((s = new URL(t)), !s.origin || s.origin === "null")) return !1;
        } catch {
            return !1;
        }
        const i = new URL(e, s);
        return s.origin === i.origin;
    }),
    (ht._createCDNWrapper = (t) => {
        const e = `await import("${t}");`;
        return URL.createObjectURL(new Blob([e], { type: "text/javascript" }));
    });
let vr = ht;
var Xs, ws, Yr, Kr, qs, kn, Ga;
class _g {
    constructor(t, e, s, i, r) {
        m(this, kn);
        m(this, Xs, new Map());
        m(this, ws, new Map());
        m(this, Yr, new Map());
        m(this, Kr, new Map());
        m(this, qs, null);
        (this.messageHandler = t),
            (this.loadingTask = e),
            (this.commonObjs = new Qu()),
            (this.fontLoader = new vp({ ownerDocument: i.ownerDocument, styleElement: i.styleElement })),
            (this.loadingParams = i.loadingParams),
            (this._params = i),
            (this.canvasFactory = r.canvasFactory),
            (this.filterFactory = r.filterFactory),
            (this.cMapReaderFactory = r.cMapReaderFactory),
            (this.standardFontDataFactory = r.standardFontDataFactory),
            (this.destroyed = !1),
            (this.destroyCapability = null),
            (this._networkStream = s),
            (this._fullReader = null),
            (this._lastProgress = null),
            (this.downloadInfoCapability = Promise.withResolvers()),
            this.setupMessageHandler();
    }
    get annotationStorage() {
        return q(this, "annotationStorage", new bd());
    }
    getRenderingIntent(t, e = ui.ENABLE, s = null, i = !1, r = !1) {
        let a = Re.DISPLAY,
            o = yc;
        switch (t) {
            case "any":
                a = Re.ANY;
                break;
            case "display":
                break;
            case "print":
                a = Re.PRINT;
                break;
            default:
                V(`getRenderingIntent - invalid intent: ${t}`);
        }
        const l = a & Re.PRINT && s instanceof Ru ? s : this.annotationStorage;
        switch (e) {
            case ui.DISABLE:
                a += Re.ANNOTATIONS_DISABLE;
                break;
            case ui.ENABLE:
                break;
            case ui.ENABLE_FORMS:
                a += Re.ANNOTATIONS_FORMS;
                break;
            case ui.ENABLE_STORAGE:
                (a += Re.ANNOTATIONS_STORAGE), (o = l.serializable);
                break;
            default:
                V(`getRenderingIntent - invalid annotationMode: ${e}`);
        }
        i && (a += Re.IS_EDITING), r && (a += Re.OPLIST);
        const { ids: h, hash: c } = l.modifiedIds,
            u = [a, o.hash, c];
        return { renderingIntent: a, cacheKey: u.join("_"), annotationStorageSerializable: o, modifiedIds: h };
    }
    destroy() {
        var s;
        if (this.destroyCapability) return this.destroyCapability.promise;
        (this.destroyed = !0), (this.destroyCapability = Promise.withResolvers()), (s = n(this, qs)) == null || s.reject(new Error("Worker was destroyed during onPassword callback"));
        const t = [];
        for (const i of n(this, ws).values()) t.push(i._destroy());
        n(this, ws).clear(), n(this, Yr).clear(), n(this, Kr).clear(), this.hasOwnProperty("annotationStorage") && this.annotationStorage.resetModified();
        const e = this.messageHandler.sendWithPromise("Terminate", null);
        return (
            t.push(e),
            Promise.all(t).then(() => {
                var i, r;
                this.commonObjs.clear(),
                    this.fontLoader.clear(),
                    n(this, Xs).clear(),
                    this.filterFactory.destroy(),
                    Qa.cleanup(),
                    (i = this._networkStream) == null || i.cancelAllRequests(new Vi("Worker was terminated.")),
                    (r = this.messageHandler) == null || r.destroy(),
                    (this.messageHandler = null),
                    this.destroyCapability.resolve();
            }, this.destroyCapability.reject),
            this.destroyCapability.promise
        );
    }
    setupMessageHandler() {
        const { messageHandler: t, loadingTask: e } = this;
        t.on("GetReader", (s, i) => {
            vt(this._networkStream, "GetReader - no `IPDFStream` instance available."),
                (this._fullReader = this._networkStream.getFullReader()),
                (this._fullReader.onProgress = (r) => {
                    this._lastProgress = { loaded: r.loaded, total: r.total };
                }),
                (i.onPull = () => {
                    this._fullReader
                        .read()
                        .then(function ({ value: r, done: a }) {
                            if (a) {
                                i.close();
                                return;
                            }
                            vt(r instanceof ArrayBuffer, "GetReader - expected an ArrayBuffer."), i.enqueue(new Uint8Array(r), 1, [r]);
                        })
                        .catch((r) => {
                            i.error(r);
                        });
                }),
                (i.onCancel = (r) => {
                    this._fullReader.cancel(r),
                        i.ready.catch((a) => {
                            if (!this.destroyed) throw a;
                        });
                });
        }),
            t.on("ReaderHeadersReady", async (s) => {
                var o;
                await this._fullReader.headersReady;
                const { isStreamingSupported: i, isRangeSupported: r, contentLength: a } = this._fullReader;
                return (
                    (!i || !r) &&
                        (this._lastProgress && ((o = e.onProgress) == null || o.call(e, this._lastProgress)),
                        (this._fullReader.onProgress = (l) => {
                            var h;
                            (h = e.onProgress) == null || h.call(e, { loaded: l.loaded, total: l.total });
                        })),
                    { isStreamingSupported: i, isRangeSupported: r, contentLength: a }
                );
            }),
            t.on("GetRangeReader", (s, i) => {
                vt(this._networkStream, "GetRangeReader - no `IPDFStream` instance available.");
                const r = this._networkStream.getRangeReader(s.begin, s.end);
                if (!r) {
                    i.close();
                    return;
                }
                (i.onPull = () => {
                    r.read()
                        .then(function ({ value: a, done: o }) {
                            if (o) {
                                i.close();
                                return;
                            }
                            vt(a instanceof ArrayBuffer, "GetRangeReader - expected an ArrayBuffer."), i.enqueue(new Uint8Array(a), 1, [a]);
                        })
                        .catch((a) => {
                            i.error(a);
                        });
                }),
                    (i.onCancel = (a) => {
                        r.cancel(a),
                            i.ready.catch((o) => {
                                if (!this.destroyed) throw o;
                            });
                    });
            }),
            t.on("GetDoc", ({ pdfInfo: s }) => {
                (this._numPages = s.numPages), (this._htmlForXfa = s.htmlForXfa), delete s.htmlForXfa, e._capability.resolve(new yg(s, this));
            }),
            t.on("DocException", (s) => {
                e._capability.reject(he(s));
            }),
            t.on("PasswordRequest", (s) => {
                f(this, qs, Promise.withResolvers());
                try {
                    if (!e.onPassword) throw he(s);
                    const i = (r) => {
                        r instanceof Error ? n(this, qs).reject(r) : n(this, qs).resolve({ password: r });
                    };
                    e.onPassword(i, s.code);
                } catch (i) {
                    n(this, qs).reject(i);
                }
                return n(this, qs).promise;
            }),
            t.on("DataLoaded", (s) => {
                var i;
                (i = e.onProgress) == null || i.call(e, { loaded: s.length, total: s.length }), this.downloadInfoCapability.resolve(s);
            }),
            t.on("StartRenderPage", (s) => {
                if (this.destroyed) return;
                n(this, ws).get(s.pageIndex)._startRenderPage(s.transparency, s.cacheKey);
            }),
            t.on("commonobj", ([s, i, r]) => {
                var a;
                if (this.destroyed || this.commonObjs.has(s)) return null;
                switch (i) {
                    case "Font":
                        const { disableFontFace: o, fontExtraProperties: l, pdfBug: h } = this._params;
                        if ("error" in r) {
                            const g = r.error;
                            V(`Error during font loading: ${g}`), this.commonObjs.resolve(s, g);
                            break;
                        }
                        const c = h && (a = globalThis.FontInspector) != null && a.enabled ? (g, A) => globalThis.FontInspector.fontAdded(g, A) : null,
                            u = new _p(r, { disableFontFace: o, fontExtraProperties: l, inspectFont: c });
                        this.fontLoader
                            .bind(u)
                            .catch(() => t.sendWithPromise("FontFallback", { id: s }))
                            .finally(() => {
                                !l && u.data && (u.data = null), this.commonObjs.resolve(s, u);
                            });
                        break;
                    case "CopyLocalImage":
                        const { imageRef: p } = r;
                        vt(p, "The imageRef must be defined.");
                        for (const g of n(this, ws).values()) for (const [, A] of g.objs) if ((A == null ? void 0 : A.ref) === p) return A.dataLen ? (this.commonObjs.resolve(s, structuredClone(A)), A.dataLen) : null;
                        break;
                    case "FontPath":
                    case "Image":
                    case "Pattern":
                        this.commonObjs.resolve(s, r);
                        break;
                    default:
                        throw new Error(`Got unknown common object type ${i}`);
                }
                return null;
            }),
            t.on("obj", ([s, i, r, a]) => {
                var l;
                if (this.destroyed) return;
                const o = n(this, ws).get(i);
                if (!o.objs.has(s)) {
                    if (o._intentStates.size === 0) {
                        (l = a == null ? void 0 : a.bitmap) == null || l.close();
                        return;
                    }
                    switch (r) {
                        case "Image":
                            o.objs.resolve(s, a), (a == null ? void 0 : a.dataLen) > Qf && (o._maybeCleanupAfterRender = !0);
                            break;
                        case "Pattern":
                            o.objs.resolve(s, a);
                            break;
                        default:
                            throw new Error(`Got unknown object type ${r}`);
                    }
                }
            }),
            t.on("DocProgress", (s) => {
                var i;
                this.destroyed || (i = e.onProgress) == null || i.call(e, { loaded: s.loaded, total: s.total });
            }),
            t.on("FetchBuiltInCMap", async (s) => {
                if (this.destroyed) throw new Error("Worker was destroyed.");
                if (!this.cMapReaderFactory) throw new Error("CMapReaderFactory not initialized, see the `useWorkerFetch` parameter.");
                return this.cMapReaderFactory.fetch(s);
            }),
            t.on("FetchStandardFontData", async (s) => {
                if (this.destroyed) throw new Error("Worker was destroyed.");
                if (!this.standardFontDataFactory) throw new Error("StandardFontDataFactory not initialized, see the `useWorkerFetch` parameter.");
                return this.standardFontDataFactory.fetch(s);
            });
    }
    getData() {
        return this.messageHandler.sendWithPromise("GetData", null);
    }
    saveDocument() {
        var s;
        this.annotationStorage.size <= 0 && V("saveDocument called while `annotationStorage` is empty, please use the getData-method instead.");
        const { map: t, transfer: e } = this.annotationStorage.serializable;
        return this.messageHandler
            .sendWithPromise("SaveDocument", { isPureXfa: !!this._htmlForXfa, numPages: this._numPages, annotationStorage: t, filename: ((s = this._fullReader) == null ? void 0 : s.filename) ?? null }, e)
            .finally(() => {
                this.annotationStorage.resetModified();
            });
    }
    getPage(t) {
        if (!Number.isInteger(t) || t <= 0 || t > this._numPages) return Promise.reject(new Error("Invalid page request."));
        const e = t - 1,
            s = n(this, Yr).get(e);
        if (s) return s;
        const i = this.messageHandler.sendWithPromise("GetPage", { pageIndex: e }).then((r) => {
            if (this.destroyed) throw new Error("Transport destroyed");
            r.refStr && n(this, Kr).set(r.refStr, t);
            const a = new wg(e, r, this, this._params.pdfBug);
            return n(this, ws).set(e, a), a;
        });
        return n(this, Yr).set(e, i), i;
    }
    getPageIndex(t) {
        return jd(t) ? this.messageHandler.sendWithPromise("GetPageIndex", { num: t.num, gen: t.gen }) : Promise.reject(new Error("Invalid pageIndex request."));
    }
    getAnnotations(t, e) {
        return this.messageHandler.sendWithPromise("GetAnnotations", { pageIndex: t, intent: e });
    }
    getFieldObjects() {
        return b(this, kn, Ga).call(this, "GetFieldObjects");
    }
    hasJSActions() {
        return b(this, kn, Ga).call(this, "HasJSActions");
    }
    getCalculationOrderIds() {
        return this.messageHandler.sendWithPromise("GetCalculationOrderIds", null);
    }
    getDestinations() {
        return this.messageHandler.sendWithPromise("GetDestinations", null);
    }
    getDestination(t) {
        return typeof t != "string" ? Promise.reject(new Error("Invalid destination request.")) : this.messageHandler.sendWithPromise("GetDestination", { id: t });
    }
    getPageLabels() {
        return this.messageHandler.sendWithPromise("GetPageLabels", null);
    }
    getPageLayout() {
        return this.messageHandler.sendWithPromise("GetPageLayout", null);
    }
    getPageMode() {
        return this.messageHandler.sendWithPromise("GetPageMode", null);
    }
    getViewerPreferences() {
        return this.messageHandler.sendWithPromise("GetViewerPreferences", null);
    }
    getOpenAction() {
        return this.messageHandler.sendWithPromise("GetOpenAction", null);
    }
    getAttachments() {
        return this.messageHandler.sendWithPromise("GetAttachments", null);
    }
    getDocJSActions() {
        return b(this, kn, Ga).call(this, "GetDocJSActions");
    }
    getPageJSActions(t) {
        return this.messageHandler.sendWithPromise("GetPageJSActions", { pageIndex: t });
    }
    getStructTree(t) {
        return this.messageHandler.sendWithPromise("GetStructTree", { pageIndex: t });
    }
    getOutline() {
        return this.messageHandler.sendWithPromise("GetOutline", null);
    }
    getOptionalContentConfig(t) {
        return b(this, kn, Ga)
            .call(this, "GetOptionalContentConfig")
            .then((e) => new Vp(e, t));
    }
    getPermissions() {
        return this.messageHandler.sendWithPromise("GetPermissions", null);
    }
    getMetadata() {
        const t = "GetMetadata",
            e = n(this, Xs).get(t);
        if (e) return e;
        const s = this.messageHandler.sendWithPromise(t, null).then((i) => {
            var r, a;
            return {
                info: i[0],
                metadata: i[1] ? new zp(i[1]) : null,
                contentDispositionFilename: ((r = this._fullReader) == null ? void 0 : r.filename) ?? null,
                contentLength: ((a = this._fullReader) == null ? void 0 : a.contentLength) ?? null,
            };
        });
        return n(this, Xs).set(t, s), s;
    }
    getMarkInfo() {
        return this.messageHandler.sendWithPromise("GetMarkInfo", null);
    }
    async startCleanup(t = !1) {
        if (!this.destroyed) {
            await this.messageHandler.sendWithPromise("Cleanup", null);
            for (const e of n(this, ws).values()) if (!e.cleanup()) throw new Error(`startCleanup: Page ${e.pageNumber} is currently rendering.`);
            this.commonObjs.clear(), t || this.fontLoader.clear(), n(this, Xs).clear(), this.filterFactory.destroy(!0), Qa.cleanup();
        }
    }
    cachedPageNumber(t) {
        if (!jd(t)) return null;
        const e = t.gen === 0 ? `${t.num}R` : `${t.num}R${t.gen}`;
        return n(this, Kr).get(e) ?? null;
    }
}
(Xs = new WeakMap()),
    (ws = new WeakMap()),
    (Yr = new WeakMap()),
    (Kr = new WeakMap()),
    (qs = new WeakMap()),
    (kn = new WeakSet()),
    (Ga = function (t, e = null) {
        const s = n(this, Xs).get(t);
        if (s) return s;
        const i = this.messageHandler.sendWithPromise(t, e);
        return n(this, Xs).set(t, i), i;
    });
const Ma = Symbol("INITIAL_DATA");
var ye, Uo, kc;
class Qu {
    constructor() {
        m(this, Uo);
        m(this, ye, Object.create(null));
    }
    get(t, e = null) {
        if (e) {
            const i = b(this, Uo, kc).call(this, t);
            return i.promise.then(() => e(i.data)), null;
        }
        const s = n(this, ye)[t];
        if (!s || s.data === Ma) throw new Error(`Requesting object that isn't resolved yet ${t}.`);
        return s.data;
    }
    has(t) {
        const e = n(this, ye)[t];
        return !!e && e.data !== Ma;
    }
    delete(t) {
        const e = n(this, ye)[t];
        return !e || e.data === Ma ? !1 : (delete n(this, ye)[t], !0);
    }
    resolve(t, e = null) {
        const s = b(this, Uo, kc).call(this, t);
        (s.data = e), s.resolve();
    }
    clear() {
        var t;
        for (const e in n(this, ye)) {
            const { data: s } = n(this, ye)[e];
            (t = s == null ? void 0 : s.bitmap) == null || t.close();
        }
        f(this, ye, Object.create(null));
    }
    *[Symbol.iterator]() {
        for (const t in n(this, ye)) {
            const { data: e } = n(this, ye)[t];
            e !== Ma && (yield [t, e]);
        }
    }
}
(ye = new WeakMap()),
    (Uo = new WeakSet()),
    (kc = function (t) {
        var e;
        return (e = n(this, ye))[t] || (e[t] = { ...Promise.withResolvers(), data: Ma });
    });
var Mi;
class Sg {
    constructor(t) {
        m(this, Mi, null);
        f(this, Mi, t), (this.onContinue = null);
    }
    get promise() {
        return n(this, Mi).capability.promise;
    }
    cancel(t = 0) {
        n(this, Mi).cancel(null, t);
    }
    get separateAnnots() {
        const { separateAnnots: t } = n(this, Mi).operatorList;
        if (!t) return !1;
        const { annotationCanvasMap: e } = n(this, Mi);
        return t.form || (t.canvas && (e == null ? void 0 : e.size) > 0);
    }
}
Mi = new WeakMap();
var ki, Ln;
const Ji = class Ji {
    constructor({ callback: t, params: e, objs: s, commonObjs: i, annotationCanvasMap: r, operatorList: a, pageIndex: o, canvasFactory: l, filterFactory: h, useRequestAnimationFrame: c = !1, pdfBug: u = !1, pageColors: p = null }) {
        m(this, ki, null);
        (this.callback = t),
            (this.params = e),
            (this.objs = s),
            (this.commonObjs = i),
            (this.annotationCanvasMap = r),
            (this.operatorListIdx = null),
            (this.operatorList = a),
            (this._pageIndex = o),
            (this.canvasFactory = l),
            (this.filterFactory = h),
            (this._pdfBug = u),
            (this.pageColors = p),
            (this.running = !1),
            (this.graphicsReadyCallback = null),
            (this.graphicsReady = !1),
            (this._useRequestAnimationFrame = c === !0 && typeof window < "u"),
            (this.cancelled = !1),
            (this.capability = Promise.withResolvers()),
            (this.task = new Sg(this)),
            (this._cancelBound = this.cancel.bind(this)),
            (this._continueBound = this._continue.bind(this)),
            (this._scheduleNextBound = this._scheduleNext.bind(this)),
            (this._nextBound = this._next.bind(this)),
            (this._canvas = e.canvasContext.canvas);
    }
    get completed() {
        return this.capability.promise.catch(function () {});
    }
    initializeGraphics({ transparency: t = !1, optionalContentConfig: e }) {
        var o, l;
        if (this.cancelled) return;
        if (this._canvas) {
            if (n(Ji, Ln).has(this._canvas)) throw new Error("Cannot use the same canvas during multiple render() operations. Use different canvas or ensure previous operations were cancelled or completed.");
            n(Ji, Ln).add(this._canvas);
        }
        this._pdfBug &&
            (o = globalThis.StepperManager) != null &&
            o.enabled &&
            ((this.stepper = globalThis.StepperManager.create(this._pageIndex)), this.stepper.init(this.operatorList), (this.stepper.nextBreakPoint = this.stepper.getNextBreakPoint()));
        const { canvasContext: s, viewport: i, transform: r, background: a } = this.params;
        (this.gfx = new wr(s, this.commonObjs, this.objs, this.canvasFactory, this.filterFactory, { optionalContentConfig: e }, this.annotationCanvasMap, this.pageColors)),
            this.gfx.beginDrawing({ transform: r, viewport: i, transparency: t, background: a }),
            (this.operatorListIdx = 0),
            (this.graphicsReady = !0),
            (l = this.graphicsReadyCallback) == null || l.call(this);
    }
    cancel(t = null, e = 0) {
        var s;
        (this.running = !1),
            (this.cancelled = !0),
            (s = this.gfx) == null || s.endDrawing(),
            n(this, ki) && (window.cancelAnimationFrame(n(this, ki)), f(this, ki, null)),
            n(Ji, Ln).delete(this._canvas),
            this.callback(t || new fd(`Rendering cancelled, page ${this._pageIndex + 1}`, e));
    }
    operatorListChanged() {
        var t;
        if (!this.graphicsReady) {
            this.graphicsReadyCallback || (this.graphicsReadyCallback = this._continueBound);
            return;
        }
        (t = this.stepper) == null || t.updateOperatorList(this.operatorList), !this.running && this._continue();
    }
    _continue() {
        (this.running = !0), !this.cancelled && (this.task.onContinue ? this.task.onContinue(this._scheduleNextBound) : this._scheduleNext());
    }
    _scheduleNext() {
        this._useRequestAnimationFrame
            ? f(
                  this,
                  ki,
                  window.requestAnimationFrame(() => {
                      f(this, ki, null), this._nextBound().catch(this._cancelBound);
                  })
              )
            : Promise.resolve().then(this._nextBound).catch(this._cancelBound);
    }
    async _next() {
        this.cancelled ||
            ((this.operatorListIdx = this.gfx.executeOperatorList(this.operatorList, this.operatorListIdx, this._continueBound, this.stepper)),
            this.operatorListIdx === this.operatorList.argsArray.length && ((this.running = !1), this.operatorList.lastChunk && (this.gfx.endDrawing(), n(Ji, Ln).delete(this._canvas), this.callback())));
    }
};
(ki = new WeakMap()), (Ln = new WeakMap()), m(Ji, Ln, new WeakSet());
let Lc = Ji;
const Eg = "4.10.38",
    xg = "f9bea397f";
function Wd(d) {
    return Math.floor(Math.max(0, Math.min(1, d)) * 255)
        .toString(16)
        .padStart(2, "0");
}
function ka(d) {
    return Math.max(0, Math.min(255, 255 * d));
}
class Xd {
    static CMYK_G([t, e, s, i]) {
        return ["G", 1 - Math.min(1, 0.3 * t + 0.59 * s + 0.11 * e + i)];
    }
    static G_CMYK([t]) {
        return ["CMYK", 0, 0, 0, 1 - t];
    }
    static G_RGB([t]) {
        return ["RGB", t, t, t];
    }
    static G_rgb([t]) {
        return (t = ka(t)), [t, t, t];
    }
    static G_HTML([t]) {
        const e = Wd(t);
        return `#${e}${e}${e}`;
    }
    static RGB_G([t, e, s]) {
        return ["G", 0.3 * t + 0.59 * e + 0.11 * s];
    }
    static RGB_rgb(t) {
        return t.map(ka);
    }
    static RGB_HTML(t) {
        return `#${t.map(Wd).join("")}`;
    }
    static T_HTML() {
        return "#00000000";
    }
    static T_rgb() {
        return [null];
    }
    static CMYK_RGB([t, e, s, i]) {
        return ["RGB", 1 - Math.min(1, t + i), 1 - Math.min(1, s + i), 1 - Math.min(1, e + i)];
    }
    static CMYK_rgb([t, e, s, i]) {
        return [ka(1 - Math.min(1, t + i)), ka(1 - Math.min(1, s + i)), ka(1 - Math.min(1, e + i))];
    }
    static CMYK_HTML(t) {
        const e = this.CMYK_RGB(t).slice(1);
        return this.RGB_HTML(e);
    }
    static RGB_CMYK([t, e, s]) {
        const i = 1 - t,
            r = 1 - e,
            a = 1 - s,
            o = Math.min(i, r, a);
        return ["CMYK", i, r, a, o];
    }
}
class Cg {
    create(t, e, s = !1) {
        if (t <= 0 || e <= 0) throw new Error("Invalid SVG dimensions");
        const i = this._createSVG("svg:svg");
        return i.setAttribute("version", "1.1"), s || (i.setAttribute("width", `${t}px`), i.setAttribute("height", `${e}px`)), i.setAttribute("preserveAspectRatio", "none"), i.setAttribute("viewBox", `0 0 ${t} ${e}`), i;
    }
    createElement(t) {
        if (typeof t != "string") throw new Error("Invalid SVG element type");
        return this._createSVG(t);
    }
    _createSVG(t) {
        nt("Abstract method `_createSVG` called.");
    }
}
class yd extends Cg {
    _createSVG(t) {
        return document.createElementNS(Ms, t);
    }
}
class Ju {
    static setupStorage(t, e, s, i, r) {
        const a = i.getValue(e, { value: null });
        switch (s.name) {
            case "textarea":
                if ((a.value !== null && (t.textContent = a.value), r === "print")) break;
                t.addEventListener("input", (o) => {
                    i.setValue(e, { value: o.target.value });
                });
                break;
            case "input":
                if (s.attributes.type === "radio" || s.attributes.type === "checkbox") {
                    if ((a.value === s.attributes.xfaOn ? t.setAttribute("checked", !0) : a.value === s.attributes.xfaOff && t.removeAttribute("checked"), r === "print")) break;
                    t.addEventListener("change", (o) => {
                        i.setValue(e, { value: o.target.checked ? o.target.getAttribute("xfaOn") : o.target.getAttribute("xfaOff") });
                    });
                } else {
                    if ((a.value !== null && t.setAttribute("value", a.value), r === "print")) break;
                    t.addEventListener("input", (o) => {
                        i.setValue(e, { value: o.target.value });
                    });
                }
                break;
            case "select":
                if (a.value !== null) {
                    t.setAttribute("value", a.value);
                    for (const o of s.children) o.attributes.value === a.value ? (o.attributes.selected = !0) : o.attributes.hasOwnProperty("selected") && delete o.attributes.selected;
                }
                t.addEventListener("input", (o) => {
                    const l = o.target.options,
                        h = l.selectedIndex === -1 ? "" : l[l.selectedIndex].value;
                    i.setValue(e, { value: h });
                });
                break;
        }
    }
    static setAttributes({ html: t, element: e, storage: s = null, intent: i, linkService: r }) {
        const { attributes: a } = e,
            o = t instanceof HTMLAnchorElement;
        a.type === "radio" && (a.name = `${a.name}-${i}`);
        for (const [l, h] of Object.entries(a))
            if (h != null)
                switch (l) {
                    case "class":
                        h.length && t.setAttribute(l, h.join(" "));
                        break;
                    case "dataId":
                        break;
                    case "id":
                        t.setAttribute("data-element-id", h);
                        break;
                    case "style":
                        Object.assign(t.style, h);
                        break;
                    case "textContent":
                        t.textContent = h;
                        break;
                    default:
                        (!o || (l !== "href" && l !== "newWindow")) && t.setAttribute(l, h);
                }
        o && r.addLinkAttributes(t, a.href, a.newWindow), s && a.dataId && this.setupStorage(t, a.dataId, e, s);
    }
    static render(t) {
        var u, p;
        const e = t.annotationStorage,
            s = t.linkService,
            i = t.xfaHtml,
            r = t.intent || "display",
            a = document.createElement(i.name);
        i.attributes && this.setAttributes({ html: a, element: i, intent: r, linkService: s });
        const o = r !== "richText",
            l = t.div;
        if ((l.append(a), t.viewport)) {
            const g = `matrix(${t.viewport.transform.join(",")})`;
            l.style.transform = g;
        }
        o && l.setAttribute("class", "xfaLayer xfaFont");
        const h = [];
        if (i.children.length === 0) {
            if (i.value) {
                const g = document.createTextNode(i.value);
                a.append(g), o && Ja.shouldBuildText(i.name) && h.push(g);
            }
            return { textDivs: h };
        }
        const c = [[i, -1, a]];
        for (; c.length > 0; ) {
            const [g, A, y] = c.at(-1);
            if (A + 1 === g.children.length) {
                c.pop();
                continue;
            }
            const v = g.children[++c.at(-1)[1]];
            if (v === null) continue;
            const { name: w } = v;
            if (w === "#text") {
                const E = document.createTextNode(v.value);
                h.push(E), y.append(E);
                continue;
            }
            const _ = (u = v == null ? void 0 : v.attributes) != null && u.xmlns ? document.createElementNS(v.attributes.xmlns, w) : document.createElement(w);
            if ((y.append(_), v.attributes && this.setAttributes({ html: _, element: v, storage: e, intent: r, linkService: s }), ((p = v.children) == null ? void 0 : p.length) > 0)) c.push([v, -1, _]);
            else if (v.value) {
                const E = document.createTextNode(v.value);
                o && Ja.shouldBuildText(w) && h.push(E), _.append(E);
            }
        }
        for (const g of l.querySelectorAll(".xfaNonInteractive input, .xfaNonInteractive textarea")) g.setAttribute("readOnly", !0);
        return { textDivs: h };
    }
    static update(t) {
        const e = `matrix(${t.viewport.transform.join(",")})`;
        (t.div.style.transform = e), (t.div.hidden = !1);
    }
}
const Tl = 1e3,
    Tg = 9,
    ar = new WeakSet();
function Ui(d) {
    return { width: d[2] - d[0], height: d[3] - d[1] };
}
class Rg {
    static create(t) {
        switch (t.data.annotationType) {
            case Et.LINK:
                return new Zu(t);
            case Et.TEXT:
                return new Pg(t);
            case Et.WIDGET:
                switch (t.data.fieldType) {
                    case "Tx":
                        return new Mg(t);
                    case "Btn":
                        return t.data.radioButton ? new sf(t) : t.data.checkBox ? new Lg(t) : new Ig(t);
                    case "Ch":
                        return new Dg(t);
                    case "Sig":
                        return new kg(t);
                }
                return new lr(t);
            case Et.POPUP:
                return new Dc(t);
            case Et.FREETEXT:
                return new lf(t);
            case Et.LINE:
                return new Ng(t);
            case Et.SQUARE:
                return new Og(t);
            case Et.CIRCLE:
                return new Hg(t);
            case Et.POLYLINE:
                return new hf(t);
            case Et.CARET:
                return new $g(t);
            case Et.INK:
                return new wd(t);
            case Et.POLYGON:
                return new Bg(t);
            case Et.HIGHLIGHT:
                return new cf(t);
            case Et.UNDERLINE:
                return new Gg(t);
            case Et.SQUIGGLY:
                return new zg(t);
            case Et.STRIKEOUT:
                return new Ug(t);
            case Et.STAMP:
                return new df(t);
            case Et.FILEATTACHMENT:
                return new Vg(t);
            default:
                return new yt(t);
        }
    }
}
var In, Qr, Jr, Vo, Ic;
const Ed = class Ed {
    constructor(t, { isRenderable: e = !1, ignoreBorder: s = !1, createQuadrilaterals: i = !1 } = {}) {
        m(this, Vo);
        m(this, In, null);
        m(this, Qr, !1);
        m(this, Jr, null);
        (this.isRenderable = e),
            (this.data = t.data),
            (this.layer = t.layer),
            (this.linkService = t.linkService),
            (this.downloadManager = t.downloadManager),
            (this.imageResourcesPath = t.imageResourcesPath),
            (this.renderForms = t.renderForms),
            (this.svgFactory = t.svgFactory),
            (this.annotationStorage = t.annotationStorage),
            (this.enableScripting = t.enableScripting),
            (this.hasJSActions = t.hasJSActions),
            (this._fieldObjects = t.fieldObjects),
            (this.parent = t.parent),
            e && (this.container = this._createContainer(s)),
            i && this._createQuadrilaterals();
    }
    static _hasPopupData({ titleObj: t, contentsObj: e, richText: s }) {
        return !!((t != null && t.str) || (e != null && e.str) || (s != null && s.str));
    }
    get _isEditable() {
        return this.data.isEditable;
    }
    get hasPopupData() {
        return Ed._hasPopupData(this.data);
    }
    updateEdited(t) {
        var s;
        if (!this.container) return;
        n(this, In) || f(this, In, { rect: this.data.rect.slice(0) });
        const { rect: e } = t;
        e && b(this, Vo, Ic).call(this, e), (s = n(this, Jr)) == null || s.popup.updateEdited(t);
    }
    resetEdited() {
        var t;
        n(this, In) && (b(this, Vo, Ic).call(this, n(this, In).rect), (t = n(this, Jr)) == null || t.popup.resetEdited(), f(this, In, null));
    }
    _createContainer(t) {
        const {
                data: e,
                parent: { page: s, viewport: i },
            } = this,
            r = document.createElement("section");
        r.setAttribute("data-annotation-id", e.id), this instanceof lr || (r.tabIndex = Tl);
        const { style: a } = r;
        if (((a.zIndex = this.parent.zIndex++), e.alternativeText && (r.title = e.alternativeText), e.noRotate && r.classList.add("norotate"), !e.rect || this instanceof Dc)) {
            const { rotation: y } = e;
            return !e.hasOwnCanvas && y !== 0 && this.setRotation(y, r), r;
        }
        const { width: o, height: l } = Ui(e.rect);
        if (!t && e.borderStyle.width > 0) {
            a.borderWidth = `${e.borderStyle.width}px`;
            const y = e.borderStyle.horizontalCornerRadius,
                v = e.borderStyle.verticalCornerRadius;
            if (y > 0 || v > 0) {
                const _ = `calc(${y}px * var(--scale-factor)) / calc(${v}px * var(--scale-factor))`;
                a.borderRadius = _;
            } else if (this instanceof sf) {
                const _ = `calc(${o}px * var(--scale-factor)) / calc(${l}px * var(--scale-factor))`;
                a.borderRadius = _;
            }
            switch (e.borderStyle.style) {
                case Ra.SOLID:
                    a.borderStyle = "solid";
                    break;
                case Ra.DASHED:
                    a.borderStyle = "dashed";
                    break;
                case Ra.BEVELED:
                    V("Unimplemented border style: beveled");
                    break;
                case Ra.INSET:
                    V("Unimplemented border style: inset");
                    break;
                case Ra.UNDERLINE:
                    a.borderBottomStyle = "solid";
                    break;
            }
            const w = e.borderColor || null;
            w ? (f(this, Qr, !0), (a.borderColor = F.makeHexColor(w[0] | 0, w[1] | 0, w[2] | 0))) : (a.borderWidth = 0);
        }
        const h = F.normalizeRect([e.rect[0], s.view[3] - e.rect[1] + s.view[1], e.rect[2], s.view[3] - e.rect[3] + s.view[1]]),
            { pageWidth: c, pageHeight: u, pageX: p, pageY: g } = i.rawDims;
        (a.left = `${(100 * (h[0] - p)) / c}%`), (a.top = `${(100 * (h[1] - g)) / u}%`);
        const { rotation: A } = e;
        return e.hasOwnCanvas || A === 0 ? ((a.width = `${(100 * o) / c}%`), (a.height = `${(100 * l) / u}%`)) : this.setRotation(A, r), r;
    }
    setRotation(t, e = this.container) {
        if (!this.data.rect) return;
        const { pageWidth: s, pageHeight: i } = this.parent.viewport.rawDims,
            { width: r, height: a } = Ui(this.data.rect);
        let o, l;
        t % 180 === 0 ? ((o = (100 * r) / s), (l = (100 * a) / i)) : ((o = (100 * a) / s), (l = (100 * r) / i)), (e.style.width = `${o}%`), (e.style.height = `${l}%`), e.setAttribute("data-main-rotation", (360 - t) % 360);
    }
    get _commonActions() {
        const t = (e, s, i) => {
            const r = i.detail[e],
                a = r[0],
                o = r.slice(1);
            (i.target.style[s] = Xd[`${a}_HTML`](o)), this.annotationStorage.setValue(this.data.id, { [s]: Xd[`${a}_rgb`](o) });
        };
        return q(this, "_commonActions", {
            display: (e) => {
                const { display: s } = e.detail,
                    i = s % 2 === 1;
                (this.container.style.visibility = i ? "hidden" : "visible"), this.annotationStorage.setValue(this.data.id, { noView: i, noPrint: s === 1 || s === 2 });
            },
            print: (e) => {
                this.annotationStorage.setValue(this.data.id, { noPrint: !e.detail.print });
            },
            hidden: (e) => {
                const { hidden: s } = e.detail;
                (this.container.style.visibility = s ? "hidden" : "visible"), this.annotationStorage.setValue(this.data.id, { noPrint: s, noView: s });
            },
            focus: (e) => {
                setTimeout(() => e.target.focus({ preventScroll: !1 }), 0);
            },
            userName: (e) => {
                e.target.title = e.detail.userName;
            },
            readonly: (e) => {
                e.target.disabled = e.detail.readonly;
            },
            required: (e) => {
                this._setRequired(e.target, e.detail.required);
            },
            bgColor: (e) => {
                t("bgColor", "backgroundColor", e);
            },
            fillColor: (e) => {
                t("fillColor", "backgroundColor", e);
            },
            fgColor: (e) => {
                t("fgColor", "color", e);
            },
            textColor: (e) => {
                t("textColor", "color", e);
            },
            borderColor: (e) => {
                t("borderColor", "borderColor", e);
            },
            strokeColor: (e) => {
                t("strokeColor", "borderColor", e);
            },
            rotation: (e) => {
                const s = e.detail.rotation;
                this.setRotation(s), this.annotationStorage.setValue(this.data.id, { rotation: s });
            },
        });
    }
    _dispatchEventFromSandbox(t, e) {
        const s = this._commonActions;
        for (const i of Object.keys(e.detail)) {
            const r = t[i] || s[i];
            r == null || r(e);
        }
    }
    _setDefaultPropertiesFromJS(t) {
        if (!this.enableScripting) return;
        const e = this.annotationStorage.getRawValue(this.data.id);
        if (!e) return;
        const s = this._commonActions;
        for (const [i, r] of Object.entries(e)) {
            const a = s[i];
            if (a) {
                const o = { detail: { [i]: r }, target: t };
                a(o), delete e[i];
            }
        }
    }
    _createQuadrilaterals() {
        if (!this.container) return;
        const { quadPoints: t } = this.data;
        if (!t) return;
        const [e, s, i, r] = this.data.rect.map((y) => Math.fround(y));
        if (t.length === 8) {
            const [y, v, w, _] = t.subarray(2, 6);
            if (i === y && r === v && e === w && s === _) return;
        }
        const { style: a } = this.container;
        let o;
        if (n(this, Qr)) {
            const { borderColor: y, borderWidth: v } = a;
            (a.borderWidth = 0),
                (o = ["url('data:image/svg+xml;utf8,", '<svg xmlns="http://www.w3.org/2000/svg"', ' preserveAspectRatio="none" viewBox="0 0 1 1">', `<g fill="transparent" stroke="${y}" stroke-width="${v}">`]),
                this.container.classList.add("hasBorder");
        }
        const l = i - e,
            h = r - s,
            { svgFactory: c } = this,
            u = c.createElement("svg");
        u.classList.add("quadrilateralsContainer"), u.setAttribute("width", 0), u.setAttribute("height", 0);
        const p = c.createElement("defs");
        u.append(p);
        const g = c.createElement("clipPath"),
            A = `clippath_${this.data.id}`;
        g.setAttribute("id", A), g.setAttribute("clipPathUnits", "objectBoundingBox"), p.append(g);
        for (let y = 2, v = t.length; y < v; y += 8) {
            const w = t[y],
                _ = t[y + 1],
                E = t[y + 2],
                S = t[y + 3],
                x = c.createElement("rect"),
                T = (E - e) / l,
                C = (r - _) / h,
                k = (w - E) / l,
                N = (_ - S) / h;
            x.setAttribute("x", T),
                x.setAttribute("y", C),
                x.setAttribute("width", k),
                x.setAttribute("height", N),
                g.append(x),
                o == null || o.push(`<rect vector-effect="non-scaling-stroke" x="${T}" y="${C}" width="${k}" height="${N}"/>`);
        }
        n(this, Qr) && (o.push("</g></svg>')"), (a.backgroundImage = o.join(""))), this.container.append(u), (this.container.style.clipPath = `url(#${A})`);
    }
    _createPopup() {
        const { data: t } = this,
            e = f(
                this,
                Jr,
                new Dc({
                    data: { color: t.color, titleObj: t.titleObj, modificationDate: t.modificationDate, contentsObj: t.contentsObj, richText: t.richText, parentRect: t.rect, borderStyle: 0, id: `popup_${t.id}`, rotation: t.rotation },
                    parent: this.parent,
                    elements: [this],
                })
            );
        this.parent.div.append(e.render());
    }
    render() {
        nt("Abstract method `AnnotationElement.render` called");
    }
    _getElementsByName(t, e = null) {
        const s = [];
        if (this._fieldObjects) {
            const i = this._fieldObjects[t];
            if (i)
                for (const { page: r, id: a, exportValues: o } of i) {
                    if (r === -1 || a === e) continue;
                    const l = typeof o == "string" ? o : null,
                        h = document.querySelector(`[data-element-id="${a}"]`);
                    if (h && !ar.has(h)) {
                        V(`_getElementsByName - element not allowed: ${a}`);
                        continue;
                    }
                    s.push({ id: a, exportValue: l, domElement: h });
                }
            return s;
        }
        for (const i of document.getElementsByName(t)) {
            const { exportValue: r } = i,
                a = i.getAttribute("data-element-id");
            a !== e && ar.has(i) && s.push({ id: a, exportValue: r, domElement: i });
        }
        return s;
    }
    show() {
        var t;
        this.container && (this.container.hidden = !1), (t = this.popup) == null || t.maybeShow();
    }
    hide() {
        var t;
        this.container && (this.container.hidden = !0), (t = this.popup) == null || t.forceHide();
    }
    getElementsToTriggerPopup() {
        return this.container;
    }
    addHighlightArea() {
        const t = this.getElementsToTriggerPopup();
        if (Array.isArray(t)) for (const e of t) e.classList.add("highlightArea");
        else t.classList.add("highlightArea");
    }
    _editOnDoubleClick() {
        if (!this._isEditable) return;
        const {
            annotationEditorType: t,
            data: { id: e },
        } = this;
        this.container.addEventListener("dblclick", () => {
            var s;
            (s = this.linkService.eventBus) == null || s.dispatch("switchannotationeditormode", { source: this, mode: t, editId: e });
        });
    }
};
(In = new WeakMap()),
    (Qr = new WeakMap()),
    (Jr = new WeakMap()),
    (Vo = new WeakSet()),
    (Ic = function (t) {
        const {
            container: { style: e },
            data: { rect: s, rotation: i },
            parent: {
                viewport: {
                    rawDims: { pageWidth: r, pageHeight: a, pageX: o, pageY: l },
                },
            },
        } = this;
        s == null || s.splice(0, 4, ...t);
        const { width: h, height: c } = Ui(t);
        (e.left = `${(100 * (t[0] - o)) / r}%`), (e.top = `${(100 * (a - t[3] + l)) / a}%`), i === 0 ? ((e.width = `${(100 * h) / r}%`), (e.height = `${(100 * c) / a}%`)) : this.setRotation(i);
    });
let yt = Ed;
var Pe, qi, tf, ef;
class Zu extends yt {
    constructor(e, s = null) {
        super(e, { isRenderable: !0, ignoreBorder: !!(s != null && s.ignoreBorder), createQuadrilaterals: !0 });
        m(this, Pe);
        this.isTooltipOnly = e.data.isTooltipOnly;
    }
    render() {
        const { data: e, linkService: s } = this,
            i = document.createElement("a");
        i.setAttribute("data-element-id", e.id);
        let r = !1;
        return (
            e.url
                ? (s.addLinkAttributes(i, e.url, e.newWindow), (r = !0))
                : e.action
                ? (this._bindNamedAction(i, e.action), (r = !0))
                : e.attachment
                ? (b(this, Pe, tf).call(this, i, e.attachment, e.attachmentDest), (r = !0))
                : e.setOCGState
                ? (b(this, Pe, ef).call(this, i, e.setOCGState), (r = !0))
                : e.dest
                ? (this._bindLink(i, e.dest), (r = !0))
                : (e.actions && (e.actions.Action || e.actions["Mouse Up"] || e.actions["Mouse Down"]) && this.enableScripting && this.hasJSActions && (this._bindJSAction(i, e), (r = !0)),
                  e.resetForm ? (this._bindResetFormAction(i, e.resetForm), (r = !0)) : this.isTooltipOnly && !r && (this._bindLink(i, ""), (r = !0))),
            this.container.classList.add("linkAnnotation"),
            r && this.container.append(i),
            this.container
        );
    }
    _bindLink(e, s) {
        (e.href = this.linkService.getDestinationHash(s)), (e.onclick = () => (s && this.linkService.goToDestination(s), !1)), (s || s === "") && b(this, Pe, qi).call(this);
    }
    _bindNamedAction(e, s) {
        (e.href = this.linkService.getAnchorUrl("")), (e.onclick = () => (this.linkService.executeNamedAction(s), !1)), b(this, Pe, qi).call(this);
    }
    _bindJSAction(e, s) {
        e.href = this.linkService.getAnchorUrl("");
        const i = new Map([
            ["Action", "onclick"],
            ["Mouse Up", "onmouseup"],
            ["Mouse Down", "onmousedown"],
        ]);
        for (const r of Object.keys(s.actions)) {
            const a = i.get(r);
            a &&
                (e[a] = () => {
                    var o;
                    return (o = this.linkService.eventBus) == null || o.dispatch("dispatcheventinsandbox", { source: this, detail: { id: s.id, name: r } }), !1;
                });
        }
        e.onclick || (e.onclick = () => !1), b(this, Pe, qi).call(this);
    }
    _bindResetFormAction(e, s) {
        const i = e.onclick;
        if ((i || (e.href = this.linkService.getAnchorUrl("")), b(this, Pe, qi).call(this), !this._fieldObjects)) {
            V('_bindResetFormAction - "resetForm" action not supported, ensure that the `fieldObjects` parameter is provided.'), i || (e.onclick = () => !1);
            return;
        }
        e.onclick = () => {
            var u;
            i == null || i();
            const { fields: r, refs: a, include: o } = s,
                l = [];
            if (r.length !== 0 || a.length !== 0) {
                const p = new Set(a);
                for (const g of r) {
                    const A = this._fieldObjects[g] || [];
                    for (const { id: y } of A) p.add(y);
                }
                for (const g of Object.values(this._fieldObjects)) for (const A of g) p.has(A.id) === o && l.push(A);
            } else for (const p of Object.values(this._fieldObjects)) l.push(...p);
            const h = this.annotationStorage,
                c = [];
            for (const p of l) {
                const { id: g } = p;
                switch ((c.push(g), p.type)) {
                    case "text": {
                        const y = p.defaultValue || "";
                        h.setValue(g, { value: y });
                        break;
                    }
                    case "checkbox":
                    case "radiobutton": {
                        const y = p.defaultValue === p.exportValues;
                        h.setValue(g, { value: y });
                        break;
                    }
                    case "combobox":
                    case "listbox": {
                        const y = p.defaultValue || "";
                        h.setValue(g, { value: y });
                        break;
                    }
                    default:
                        continue;
                }
                const A = document.querySelector(`[data-element-id="${g}"]`);
                if (A) {
                    if (!ar.has(A)) {
                        V(`_bindResetFormAction - element not allowed: ${g}`);
                        continue;
                    }
                } else continue;
                A.dispatchEvent(new Event("resetform"));
            }
            return this.enableScripting && ((u = this.linkService.eventBus) == null || u.dispatch("dispatcheventinsandbox", { source: this, detail: { id: "app", ids: c, name: "ResetForm" } })), !1;
        };
    }
}
(Pe = new WeakSet()),
    (qi = function () {
        this.container.setAttribute("data-internal-link", "");
    }),
    (tf = function (e, s, i = null) {
        (e.href = this.linkService.getAnchorUrl("")),
            s.description && (e.title = s.description),
            (e.onclick = () => {
                var r;
                return (r = this.downloadManager) == null || r.openOrDownloadData(s.content, s.filename, i), !1;
            }),
            b(this, Pe, qi).call(this);
    }),
    (ef = function (e, s) {
        (e.href = this.linkService.getAnchorUrl("")), (e.onclick = () => (this.linkService.executeSetOCGState(s), !1)), b(this, Pe, qi).call(this);
    });
class Pg extends yt {
    constructor(t) {
        super(t, { isRenderable: !0 });
    }
    render() {
        this.container.classList.add("textAnnotation");
        const t = document.createElement("img");
        return (
            (t.src = this.imageResourcesPath + "annotation-" + this.data.name.toLowerCase() + ".svg"),
            t.setAttribute("data-l10n-id", "pdfjs-text-annotation-type"),
            t.setAttribute("data-l10n-args", JSON.stringify({ type: this.data.name })),
            !this.data.popupRef && this.hasPopupData && this._createPopup(),
            this.container.append(t),
            this.container
        );
    }
}
class lr extends yt {
    render() {
        return this.container;
    }
    showElementAndHideCanvas(t) {
        var e;
        this.data.hasOwnCanvas && (((e = t.previousSibling) == null ? void 0 : e.nodeName) === "CANVAS" && (t.previousSibling.hidden = !0), (t.hidden = !1));
    }
    _getKeyModifier(t) {
        return ne.platform.isMac ? t.metaKey : t.ctrlKey;
    }
    _setEventListener(t, e, s, i, r) {
        s.includes("mouse")
            ? t.addEventListener(s, (a) => {
                  var o;
                  (o = this.linkService.eventBus) == null || o.dispatch("dispatcheventinsandbox", { source: this, detail: { id: this.data.id, name: i, value: r(a), shift: a.shiftKey, modifier: this._getKeyModifier(a) } });
              })
            : t.addEventListener(s, (a) => {
                  var o;
                  if (s === "blur") {
                      if (!e.focused || !a.relatedTarget) return;
                      e.focused = !1;
                  } else if (s === "focus") {
                      if (e.focused) return;
                      e.focused = !0;
                  }
                  r && ((o = this.linkService.eventBus) == null || o.dispatch("dispatcheventinsandbox", { source: this, detail: { id: this.data.id, name: i, value: r(a) } }));
              });
    }
    _setEventListeners(t, e, s, i) {
        var r, a, o;
        for (const [l, h] of s)
            (h === "Action" || ((r = this.data.actions) != null && r[h])) &&
                ((h === "Focus" || h === "Blur") && (e || (e = { focused: !1 })),
                this._setEventListener(t, e, l, h, i),
                h === "Focus" && !((a = this.data.actions) != null && a.Blur)
                    ? this._setEventListener(t, e, "blur", "Blur", null)
                    : h === "Blur" && !((o = this.data.actions) != null && o.Focus) && this._setEventListener(t, e, "focus", "Focus", null));
    }
    _setBackgroundColor(t) {
        const e = this.data.backgroundColor || null;
        t.style.backgroundColor = e === null ? "transparent" : F.makeHexColor(e[0], e[1], e[2]);
    }
    _setTextStyle(t) {
        const e = ["left", "center", "right"],
            { fontColor: s } = this.data.defaultAppearanceData,
            i = this.data.defaultAppearanceData.fontSize || Tg,
            r = t.style;
        let a;
        const o = 2,
            l = (h) => Math.round(10 * h) / 10;
        if (this.data.multiLine) {
            const h = Math.abs(this.data.rect[3] - this.data.rect[1] - o),
                c = Math.round(h / (Vh * i)) || 1,
                u = h / c;
            a = Math.min(i, l(u / Vh));
        } else {
            const h = Math.abs(this.data.rect[3] - this.data.rect[1] - o);
            a = Math.min(i, l(h / Vh));
        }
        (r.fontSize = `calc(${a}px * var(--scale-factor))`), (r.color = F.makeHexColor(s[0], s[1], s[2])), this.data.textAlignment !== null && (r.textAlign = e[this.data.textAlignment]);
    }
    _setRequired(t, e) {
        e ? t.setAttribute("required", !0) : t.removeAttribute("required"), t.setAttribute("aria-required", e);
    }
}
class Mg extends lr {
    constructor(t) {
        const e = t.renderForms || t.data.hasOwnCanvas || (!t.data.hasAppearance && !!t.data.fieldValue);
        super(t, { isRenderable: e });
    }
    setPropertyOnSiblings(t, e, s, i) {
        const r = this.annotationStorage;
        for (const a of this._getElementsByName(t.name, t.id)) a.domElement && (a.domElement[e] = s), r.setValue(a.id, { [i]: s });
    }
    render() {
        var i, r;
        const t = this.annotationStorage,
            e = this.data.id;
        this.container.classList.add("textWidgetAnnotation");
        let s = null;
        if (this.renderForms) {
            const a = t.getValue(e, { value: this.data.fieldValue });
            let o = a.value || "";
            const l = t.getValue(e, { charLimit: this.data.maxLen }).charLimit;
            l && o.length > l && (o = o.slice(0, l));
            let h =
                a.formattedValue ||
                ((i = this.data.textContent) == null
                    ? void 0
                    : i.join(`
`)) ||
                null;
            h && this.data.comb && (h = h.replaceAll(/\s+/g, ""));
            const c = { userValue: o, formattedValue: h, lastCommittedValue: null, commitKey: 1, focused: !1 };
            this.data.multiLine
                ? ((s = document.createElement("textarea")), (s.textContent = h ?? o), this.data.doNotScroll && (s.style.overflowY = "hidden"))
                : ((s = document.createElement("input")), (s.type = "text"), s.setAttribute("value", h ?? o), this.data.doNotScroll && (s.style.overflowX = "hidden")),
                this.data.hasOwnCanvas && (s.hidden = !0),
                ar.add(s),
                s.setAttribute("data-element-id", e),
                (s.disabled = this.data.readOnly),
                (s.name = this.data.fieldName),
                (s.tabIndex = Tl),
                this._setRequired(s, this.data.required),
                l && (s.maxLength = l),
                s.addEventListener("input", (p) => {
                    t.setValue(e, { value: p.target.value }), this.setPropertyOnSiblings(s, "value", p.target.value, "value"), (c.formattedValue = null);
                }),
                s.addEventListener("resetform", (p) => {
                    const g = this.data.defaultFieldValue ?? "";
                    (s.value = c.userValue = g), (c.formattedValue = null);
                });
            let u = (p) => {
                const { formattedValue: g } = c;
                g != null && (p.target.value = g), (p.target.scrollLeft = 0);
            };
            if (this.enableScripting && this.hasJSActions) {
                s.addEventListener("focus", (g) => {
                    var y;
                    if (c.focused) return;
                    const { target: A } = g;
                    c.userValue && (A.value = c.userValue), (c.lastCommittedValue = A.value), (c.commitKey = 1), ((y = this.data.actions) != null && y.Focus) || (c.focused = !0);
                }),
                    s.addEventListener("updatefromsandbox", (g) => {
                        this.showElementAndHideCanvas(g.target);
                        const A = {
                            value(y) {
                                (c.userValue = y.detail.value ?? ""), t.setValue(e, { value: c.userValue.toString() }), (y.target.value = c.userValue);
                            },
                            formattedValue(y) {
                                const { formattedValue: v } = y.detail;
                                (c.formattedValue = v), v != null && y.target !== document.activeElement && (y.target.value = v), t.setValue(e, { formattedValue: v });
                            },
                            selRange(y) {
                                y.target.setSelectionRange(...y.detail.selRange);
                            },
                            charLimit: (y) => {
                                var E;
                                const { charLimit: v } = y.detail,
                                    { target: w } = y;
                                if (v === 0) {
                                    w.removeAttribute("maxLength");
                                    return;
                                }
                                w.setAttribute("maxLength", v);
                                let _ = c.userValue;
                                !_ ||
                                    _.length <= v ||
                                    ((_ = _.slice(0, v)),
                                    (w.value = c.userValue = _),
                                    t.setValue(e, { value: _ }),
                                    (E = this.linkService.eventBus) == null ||
                                        E.dispatch("dispatcheventinsandbox", { source: this, detail: { id: e, name: "Keystroke", value: _, willCommit: !0, commitKey: 1, selStart: w.selectionStart, selEnd: w.selectionEnd } }));
                            },
                        };
                        this._dispatchEventFromSandbox(A, g);
                    }),
                    s.addEventListener("keydown", (g) => {
                        var v;
                        c.commitKey = 1;
                        let A = -1;
                        if ((g.key === "Escape" ? (A = 0) : g.key === "Enter" && !this.data.multiLine ? (A = 2) : g.key === "Tab" && (c.commitKey = 3), A === -1)) return;
                        const { value: y } = g.target;
                        c.lastCommittedValue !== y &&
                            ((c.lastCommittedValue = y),
                            (c.userValue = y),
                            (v = this.linkService.eventBus) == null ||
                                v.dispatch("dispatcheventinsandbox", { source: this, detail: { id: e, name: "Keystroke", value: y, willCommit: !0, commitKey: A, selStart: g.target.selectionStart, selEnd: g.target.selectionEnd } }));
                    });
                const p = u;
                (u = null),
                    s.addEventListener("blur", (g) => {
                        var y, v;
                        if (!c.focused || !g.relatedTarget) return;
                        ((y = this.data.actions) != null && y.Blur) || (c.focused = !1);
                        const { value: A } = g.target;
                        (c.userValue = A),
                            c.lastCommittedValue !== A &&
                                ((v = this.linkService.eventBus) == null ||
                                    v.dispatch("dispatcheventinsandbox", {
                                        source: this,
                                        detail: { id: e, name: "Keystroke", value: A, willCommit: !0, commitKey: c.commitKey, selStart: g.target.selectionStart, selEnd: g.target.selectionEnd },
                                    })),
                            p(g);
                    }),
                    (r = this.data.actions) != null &&
                        r.Keystroke &&
                        s.addEventListener("beforeinput", (g) => {
                            var x;
                            c.lastCommittedValue = null;
                            const { data: A, target: y } = g,
                                { value: v, selectionStart: w, selectionEnd: _ } = y;
                            let E = w,
                                S = _;
                            switch (g.inputType) {
                                case "deleteWordBackward": {
                                    const T = v.substring(0, w).match(/\w*[^\w]*$/);
                                    T && (E -= T[0].length);
                                    break;
                                }
                                case "deleteWordForward": {
                                    const T = v.substring(w).match(/^[^\w]*\w*/);
                                    T && (S += T[0].length);
                                    break;
                                }
                                case "deleteContentBackward":
                                    w === _ && (E -= 1);
                                    break;
                                case "deleteContentForward":
                                    w === _ && (S += 1);
                                    break;
                            }
                            g.preventDefault(),
                                (x = this.linkService.eventBus) == null || x.dispatch("dispatcheventinsandbox", { source: this, detail: { id: e, name: "Keystroke", value: v, change: A || "", willCommit: !1, selStart: E, selEnd: S } });
                        }),
                    this._setEventListeners(
                        s,
                        c,
                        [
                            ["focus", "Focus"],
                            ["blur", "Blur"],
                            ["mousedown", "Mouse Down"],
                            ["mouseenter", "Mouse Enter"],
                            ["mouseleave", "Mouse Exit"],
                            ["mouseup", "Mouse Up"],
                        ],
                        (g) => g.target.value
                    );
            }
            if ((u && s.addEventListener("blur", u), this.data.comb)) {
                const g = (this.data.rect[2] - this.data.rect[0]) / l;
                s.classList.add("comb"), (s.style.letterSpacing = `calc(${g}px * var(--scale-factor) - 1ch)`);
            }
        } else (s = document.createElement("div")), (s.textContent = this.data.fieldValue), (s.style.verticalAlign = "middle"), (s.style.display = "table-cell"), this.data.hasOwnCanvas && (s.hidden = !0);
        return this._setTextStyle(s), this._setBackgroundColor(s), this._setDefaultPropertiesFromJS(s), this.container.append(s), this.container;
    }
}
class kg extends lr {
    constructor(t) {
        super(t, { isRenderable: !!t.data.hasOwnCanvas });
    }
}
class Lg extends lr {
    constructor(t) {
        super(t, { isRenderable: t.renderForms });
    }
    render() {
        const t = this.annotationStorage,
            e = this.data,
            s = e.id;
        let i = t.getValue(s, { value: e.exportValue === e.fieldValue }).value;
        typeof i == "string" && ((i = i !== "Off"), t.setValue(s, { value: i })), this.container.classList.add("buttonWidgetAnnotation", "checkBox");
        const r = document.createElement("input");
        return (
            ar.add(r),
            r.setAttribute("data-element-id", s),
            (r.disabled = e.readOnly),
            this._setRequired(r, this.data.required),
            (r.type = "checkbox"),
            (r.name = e.fieldName),
            i && r.setAttribute("checked", !0),
            r.setAttribute("exportValue", e.exportValue),
            (r.tabIndex = Tl),
            r.addEventListener("change", (a) => {
                const { name: o, checked: l } = a.target;
                for (const h of this._getElementsByName(o, s)) {
                    const c = l && h.exportValue === e.exportValue;
                    h.domElement && (h.domElement.checked = c), t.setValue(h.id, { value: c });
                }
                t.setValue(s, { value: l });
            }),
            r.addEventListener("resetform", (a) => {
                const o = e.defaultFieldValue || "Off";
                a.target.checked = o === e.exportValue;
            }),
            this.enableScripting &&
                this.hasJSActions &&
                (r.addEventListener("updatefromsandbox", (a) => {
                    const o = {
                        value(l) {
                            (l.target.checked = l.detail.value !== "Off"), t.setValue(s, { value: l.target.checked });
                        },
                    };
                    this._dispatchEventFromSandbox(o, a);
                }),
                this._setEventListeners(
                    r,
                    null,
                    [
                        ["change", "Validate"],
                        ["change", "Action"],
                        ["focus", "Focus"],
                        ["blur", "Blur"],
                        ["mousedown", "Mouse Down"],
                        ["mouseenter", "Mouse Enter"],
                        ["mouseleave", "Mouse Exit"],
                        ["mouseup", "Mouse Up"],
                    ],
                    (a) => a.target.checked
                )),
            this._setBackgroundColor(r),
            this._setDefaultPropertiesFromJS(r),
            this.container.append(r),
            this.container
        );
    }
}
class sf extends lr {
    constructor(t) {
        super(t, { isRenderable: t.renderForms });
    }
    render() {
        this.container.classList.add("buttonWidgetAnnotation", "radioButton");
        const t = this.annotationStorage,
            e = this.data,
            s = e.id;
        let i = t.getValue(s, { value: e.fieldValue === e.buttonValue }).value;
        if ((typeof i == "string" && ((i = i !== e.buttonValue), t.setValue(s, { value: i })), i)) for (const a of this._getElementsByName(e.fieldName, s)) t.setValue(a.id, { value: !1 });
        const r = document.createElement("input");
        if (
            (ar.add(r),
            r.setAttribute("data-element-id", s),
            (r.disabled = e.readOnly),
            this._setRequired(r, this.data.required),
            (r.type = "radio"),
            (r.name = e.fieldName),
            i && r.setAttribute("checked", !0),
            (r.tabIndex = Tl),
            r.addEventListener("change", (a) => {
                const { name: o, checked: l } = a.target;
                for (const h of this._getElementsByName(o, s)) t.setValue(h.id, { value: !1 });
                t.setValue(s, { value: l });
            }),
            r.addEventListener("resetform", (a) => {
                const o = e.defaultFieldValue;
                a.target.checked = o != null && o === e.buttonValue;
            }),
            this.enableScripting && this.hasJSActions)
        ) {
            const a = e.buttonValue;
            r.addEventListener("updatefromsandbox", (o) => {
                const l = {
                    value: (h) => {
                        const c = a === h.detail.value;
                        for (const u of this._getElementsByName(h.target.name)) {
                            const p = c && u.id === s;
                            u.domElement && (u.domElement.checked = p), t.setValue(u.id, { value: p });
                        }
                    },
                };
                this._dispatchEventFromSandbox(l, o);
            }),
                this._setEventListeners(
                    r,
                    null,
                    [
                        ["change", "Validate"],
                        ["change", "Action"],
                        ["focus", "Focus"],
                        ["blur", "Blur"],
                        ["mousedown", "Mouse Down"],
                        ["mouseenter", "Mouse Enter"],
                        ["mouseleave", "Mouse Exit"],
                        ["mouseup", "Mouse Up"],
                    ],
                    (o) => o.target.checked
                );
        }
        return this._setBackgroundColor(r), this._setDefaultPropertiesFromJS(r), this.container.append(r), this.container;
    }
}
class Ig extends Zu {
    constructor(t) {
        super(t, { ignoreBorder: t.data.hasAppearance });
    }
    render() {
        const t = super.render();
        t.classList.add("buttonWidgetAnnotation", "pushButton");
        const e = t.lastChild;
        return (
            this.enableScripting &&
                this.hasJSActions &&
                e &&
                (this._setDefaultPropertiesFromJS(e),
                e.addEventListener("updatefromsandbox", (s) => {
                    this._dispatchEventFromSandbox({}, s);
                })),
            t
        );
    }
}
class Dg extends lr {
    constructor(t) {
        super(t, { isRenderable: t.renderForms });
    }
    render() {
        this.container.classList.add("choiceWidgetAnnotation");
        const t = this.annotationStorage,
            e = this.data.id,
            s = t.getValue(e, { value: this.data.fieldValue }),
            i = document.createElement("select");
        ar.add(i), i.setAttribute("data-element-id", e), (i.disabled = this.data.readOnly), this._setRequired(i, this.data.required), (i.name = this.data.fieldName), (i.tabIndex = Tl);
        let r = this.data.combo && this.data.options.length > 0;
        this.data.combo || ((i.size = this.data.options.length), this.data.multiSelect && (i.multiple = !0)),
            i.addEventListener("resetform", (c) => {
                const u = this.data.defaultFieldValue;
                for (const p of i.options) p.selected = p.value === u;
            });
        for (const c of this.data.options) {
            const u = document.createElement("option");
            (u.textContent = c.displayValue), (u.value = c.exportValue), s.value.includes(c.exportValue) && (u.setAttribute("selected", !0), (r = !1)), i.append(u);
        }
        let a = null;
        if (r) {
            const c = document.createElement("option");
            (c.value = " "),
                c.setAttribute("hidden", !0),
                c.setAttribute("selected", !0),
                i.prepend(c),
                (a = () => {
                    c.remove(), i.removeEventListener("input", a), (a = null);
                }),
                i.addEventListener("input", a);
        }
        const o = (c) => {
            const u = c ? "value" : "textContent",
                { options: p, multiple: g } = i;
            return g ? Array.prototype.filter.call(p, (A) => A.selected).map((A) => A[u]) : p.selectedIndex === -1 ? null : p[p.selectedIndex][u];
        };
        let l = o(!1);
        const h = (c) => {
            const u = c.target.options;
            return Array.prototype.map.call(u, (p) => ({ displayValue: p.textContent, exportValue: p.value }));
        };
        return (
            this.enableScripting && this.hasJSActions
                ? (i.addEventListener("updatefromsandbox", (c) => {
                      const u = {
                          value(p) {
                              a == null || a();
                              const g = p.detail.value,
                                  A = new Set(Array.isArray(g) ? g : [g]);
                              for (const y of i.options) y.selected = A.has(y.value);
                              t.setValue(e, { value: o(!0) }), (l = o(!1));
                          },
                          multipleSelection(p) {
                              i.multiple = !0;
                          },
                          remove(p) {
                              const g = i.options,
                                  A = p.detail.remove;
                              (g[A].selected = !1), i.remove(A), g.length > 0 && Array.prototype.findIndex.call(g, (v) => v.selected) === -1 && (g[0].selected = !0), t.setValue(e, { value: o(!0), items: h(p) }), (l = o(!1));
                          },
                          clear(p) {
                              for (; i.length !== 0; ) i.remove(0);
                              t.setValue(e, { value: null, items: [] }), (l = o(!1));
                          },
                          insert(p) {
                              const { index: g, displayValue: A, exportValue: y } = p.detail.insert,
                                  v = i.children[g],
                                  w = document.createElement("option");
                              (w.textContent = A), (w.value = y), v ? v.before(w) : i.append(w), t.setValue(e, { value: o(!0), items: h(p) }), (l = o(!1));
                          },
                          items(p) {
                              const { items: g } = p.detail;
                              for (; i.length !== 0; ) i.remove(0);
                              for (const A of g) {
                                  const { displayValue: y, exportValue: v } = A,
                                      w = document.createElement("option");
                                  (w.textContent = y), (w.value = v), i.append(w);
                              }
                              i.options.length > 0 && (i.options[0].selected = !0), t.setValue(e, { value: o(!0), items: h(p) }), (l = o(!1));
                          },
                          indices(p) {
                              const g = new Set(p.detail.indices);
                              for (const A of p.target.options) A.selected = g.has(A.index);
                              t.setValue(e, { value: o(!0) }), (l = o(!1));
                          },
                          editable(p) {
                              p.target.disabled = !p.detail.editable;
                          },
                      };
                      this._dispatchEventFromSandbox(u, c);
                  }),
                  i.addEventListener("input", (c) => {
                      var g;
                      const u = o(!0),
                          p = o(!1);
                      t.setValue(e, { value: u }),
                          c.preventDefault(),
                          (g = this.linkService.eventBus) == null || g.dispatch("dispatcheventinsandbox", { source: this, detail: { id: e, name: "Keystroke", value: l, change: p, changeEx: u, willCommit: !1, commitKey: 1, keyDown: !1 } });
                  }),
                  this._setEventListeners(
                      i,
                      null,
                      [
                          ["focus", "Focus"],
                          ["blur", "Blur"],
                          ["mousedown", "Mouse Down"],
                          ["mouseenter", "Mouse Enter"],
                          ["mouseleave", "Mouse Exit"],
                          ["mouseup", "Mouse Up"],
                          ["input", "Action"],
                          ["input", "Validate"],
                      ],
                      (c) => c.target.value
                  ))
                : i.addEventListener("input", function (c) {
                      t.setValue(e, { value: o(!0) });
                  }),
            this.data.combo && this._setTextStyle(i),
            this._setBackgroundColor(i),
            this._setDefaultPropertiesFromJS(i),
            this.container.append(i),
            this.container
        );
    }
}
class Dc extends yt {
    constructor(t) {
        const { data: e, elements: s } = t;
        super(t, { isRenderable: yt._hasPopupData(e) }), (this.elements = s), (this.popup = null);
    }
    render() {
        this.container.classList.add("popupAnnotation");
        const t = (this.popup = new Fg({
                container: this.container,
                color: this.data.color,
                titleObj: this.data.titleObj,
                modificationDate: this.data.modificationDate,
                contentsObj: this.data.contentsObj,
                richText: this.data.richText,
                rect: this.data.rect,
                parentRect: this.data.parentRect || null,
                parent: this.parent,
                elements: this.elements,
                open: this.data.open,
            })),
            e = [];
        for (const s of this.elements) (s.popup = t), (s.container.ariaHasPopup = "dialog"), e.push(s.data.id), s.addHighlightArea();
        return this.container.setAttribute("aria-controls", e.map((s) => `${ud}${s}`).join(",")), this.container;
    }
}
var Zr, Rh, Ph, ta, Dn, gt, Ys, ea, jo, Wo, sa, Ks, Ke, Qs, Xo, Js, qo, Fn, Nn, it, Xl, Fc, nf, rf, af, of, ql, Yl, Nc;
class Fg {
    constructor({ container: t, color: e, elements: s, titleObj: i, modificationDate: r, contentsObj: a, richText: o, parent: l, rect: h, parentRect: c, open: u }) {
        m(this, it);
        m(this, Zr, b(this, it, af).bind(this));
        m(this, Rh, b(this, it, Nc).bind(this));
        m(this, Ph, b(this, it, Yl).bind(this));
        m(this, ta, b(this, it, ql).bind(this));
        m(this, Dn, null);
        m(this, gt, null);
        m(this, Ys, null);
        m(this, ea, null);
        m(this, jo, null);
        m(this, Wo, null);
        m(this, sa, null);
        m(this, Ks, !1);
        m(this, Ke, null);
        m(this, Qs, null);
        m(this, Xo, null);
        m(this, Js, null);
        m(this, qo, null);
        m(this, Fn, null);
        m(this, Nn, !1);
        var p;
        f(this, gt, t),
            f(this, qo, i),
            f(this, Ys, a),
            f(this, Js, o),
            f(this, Wo, l),
            f(this, Dn, e),
            f(this, Xo, h),
            f(this, sa, c),
            f(this, jo, s),
            f(this, ea, gd.toDateObject(r)),
            (this.trigger = s.flatMap((g) => g.getElementsToTriggerPopup()));
        for (const g of this.trigger) g.addEventListener("click", n(this, ta)), g.addEventListener("mouseenter", n(this, Ph)), g.addEventListener("mouseleave", n(this, Rh)), g.classList.add("popupTriggerArea");
        for (const g of s) (p = g.container) == null || p.addEventListener("keydown", n(this, Zr));
        (n(this, gt).hidden = !0), u && b(this, it, ql).call(this);
    }
    render() {
        if (n(this, Ke)) return;
        const t = f(this, Ke, document.createElement("div"));
        if (((t.className = "popup"), n(this, Dn))) {
            const r = (t.style.outlineColor = F.makeHexColor(...n(this, Dn)));
            CSS.supports("background-color", "color-mix(in srgb, red 30%, white)")
                ? (t.style.backgroundColor = `color-mix(in srgb, ${r} 30%, white)`)
                : (t.style.backgroundColor = F.makeHexColor(...n(this, Dn).map((o) => Math.floor(0.7 * (255 - o) + o))));
        }
        const e = document.createElement("span");
        e.className = "header";
        const s = document.createElement("h1");
        if ((e.append(s), ({ dir: s.dir, str: s.textContent } = n(this, qo)), t.append(e), n(this, ea))) {
            const r = document.createElement("span");
            r.classList.add("popupDate"), r.setAttribute("data-l10n-id", "pdfjs-annotation-date-time-string"), r.setAttribute("data-l10n-args", JSON.stringify({ dateObj: n(this, ea).valueOf() })), e.append(r);
        }
        const i = n(this, it, Xl);
        if (i) Ju.render({ xfaHtml: i, intent: "richText", div: t }), t.lastChild.classList.add("richText", "popupContent");
        else {
            const r = this._formatContents(n(this, Ys));
            t.append(r);
        }
        n(this, gt).append(t);
    }
    _formatContents({ str: t, dir: e }) {
        const s = document.createElement("p");
        s.classList.add("popupContent"), (s.dir = e);
        const i = t.split(/(?:\r\n?|\n)/);
        for (let r = 0, a = i.length; r < a; ++r) {
            const o = i[r];
            s.append(document.createTextNode(o)), r < a - 1 && s.append(document.createElement("br"));
        }
        return s;
    }
    updateEdited({ rect: t, popupContent: e }) {
        var s;
        n(this, Fn) || f(this, Fn, { contentsObj: n(this, Ys), richText: n(this, Js) }),
            t && f(this, Qs, null),
            e && (f(this, Js, b(this, it, rf).call(this, e)), f(this, Ys, null)),
            (s = n(this, Ke)) == null || s.remove(),
            f(this, Ke, null);
    }
    resetEdited() {
        var t;
        n(this, Fn) && (({ contentsObj: Jt(this, Ys)._, richText: Jt(this, Js)._ } = n(this, Fn)), f(this, Fn, null), (t = n(this, Ke)) == null || t.remove(), f(this, Ke, null), f(this, Qs, null));
    }
    forceHide() {
        f(this, Nn, this.isVisible), n(this, Nn) && (n(this, gt).hidden = !0);
    }
    maybeShow() {
        n(this, Nn) && (n(this, Ke) || b(this, it, Yl).call(this), f(this, Nn, !1), (n(this, gt).hidden = !1));
    }
    get isVisible() {
        return n(this, gt).hidden === !1;
    }
}
(Zr = new WeakMap()),
    (Rh = new WeakMap()),
    (Ph = new WeakMap()),
    (ta = new WeakMap()),
    (Dn = new WeakMap()),
    (gt = new WeakMap()),
    (Ys = new WeakMap()),
    (ea = new WeakMap()),
    (jo = new WeakMap()),
    (Wo = new WeakMap()),
    (sa = new WeakMap()),
    (Ks = new WeakMap()),
    (Ke = new WeakMap()),
    (Qs = new WeakMap()),
    (Xo = new WeakMap()),
    (Js = new WeakMap()),
    (qo = new WeakMap()),
    (Fn = new WeakMap()),
    (Nn = new WeakMap()),
    (it = new WeakSet()),
    (Xl = function () {
        const t = n(this, Js),
            e = n(this, Ys);
        return (t != null && t.str && (!(e != null && e.str) || e.str === t.str) && n(this, Js).html) || null;
    }),
    (Fc = function () {
        var t, e, s;
        return ((s = (e = (t = n(this, it, Xl)) == null ? void 0 : t.attributes) == null ? void 0 : e.style) == null ? void 0 : s.fontSize) || 0;
    }),
    (nf = function () {
        var t, e, s;
        return ((s = (e = (t = n(this, it, Xl)) == null ? void 0 : t.attributes) == null ? void 0 : e.style) == null ? void 0 : s.color) || null;
    }),
    (rf = function (t) {
        const e = [],
            s = { str: t, html: { name: "div", attributes: { dir: "auto" }, children: [{ name: "p", children: e }] } },
            i = { style: { color: n(this, it, nf), fontSize: n(this, it, Fc) ? `calc(${n(this, it, Fc)}px * var(--scale-factor))` : "" } };
        for (const r of t.split(`
`))
            e.push({ name: "span", value: r, attributes: i });
        return s;
    }),
    (af = function (t) {
        t.altKey || t.shiftKey || t.ctrlKey || t.metaKey || ((t.key === "Enter" || (t.key === "Escape" && n(this, Ks))) && b(this, it, ql).call(this));
    }),
    (of = function () {
        if (n(this, Qs) !== null) return;
        const {
            page: { view: t },
            viewport: {
                rawDims: { pageWidth: e, pageHeight: s, pageX: i, pageY: r },
            },
        } = n(this, Wo);
        let a = !!n(this, sa),
            o = a ? n(this, sa) : n(this, Xo);
        for (const A of n(this, jo))
            if (!o || F.intersect(A.data.rect, o) !== null) {
                (o = A.data.rect), (a = !0);
                break;
            }
        const l = F.normalizeRect([o[0], t[3] - o[1] + t[1], o[2], t[3] - o[3] + t[1]]),
            c = a ? o[2] - o[0] + 5 : 0,
            u = l[0] + c,
            p = l[1];
        f(this, Qs, [(100 * (u - i)) / e, (100 * (p - r)) / s]);
        const { style: g } = n(this, gt);
        (g.left = `${n(this, Qs)[0]}%`), (g.top = `${n(this, Qs)[1]}%`);
    }),
    (ql = function () {
        f(this, Ks, !n(this, Ks)),
            n(this, Ks)
                ? (b(this, it, Yl).call(this), n(this, gt).addEventListener("click", n(this, ta)), n(this, gt).addEventListener("keydown", n(this, Zr)))
                : (b(this, it, Nc).call(this), n(this, gt).removeEventListener("click", n(this, ta)), n(this, gt).removeEventListener("keydown", n(this, Zr)));
    }),
    (Yl = function () {
        n(this, Ke) || this.render(), this.isVisible ? n(this, Ks) && n(this, gt).classList.add("focused") : (b(this, it, of).call(this), (n(this, gt).hidden = !1), (n(this, gt).style.zIndex = parseInt(n(this, gt).style.zIndex) + 1e3));
    }),
    (Nc = function () {
        n(this, gt).classList.remove("focused"), !(n(this, Ks) || !this.isVisible) && ((n(this, gt).hidden = !0), (n(this, gt).style.zIndex = parseInt(n(this, gt).style.zIndex) - 1e3));
    });
class lf extends yt {
    constructor(t) {
        super(t, { isRenderable: !0, ignoreBorder: !0 }), (this.textContent = t.data.textContent), (this.textPosition = t.data.textPosition), (this.annotationEditorType = U.FREETEXT);
    }
    render() {
        if ((this.container.classList.add("freeTextAnnotation"), this.textContent)) {
            const t = document.createElement("div");
            t.classList.add("annotationTextContent"), t.setAttribute("role", "comment");
            for (const e of this.textContent) {
                const s = document.createElement("span");
                (s.textContent = e), t.append(s);
            }
            this.container.append(t);
        }
        return !this.data.popupRef && this.hasPopupData && this._createPopup(), this._editOnDoubleClick(), this.container;
    }
}
var Yo;
class Ng extends yt {
    constructor(e) {
        super(e, { isRenderable: !0, ignoreBorder: !0 });
        m(this, Yo, null);
    }
    render() {
        this.container.classList.add("lineAnnotation");
        const e = this.data,
            { width: s, height: i } = Ui(e.rect),
            r = this.svgFactory.create(s, i, !0),
            a = f(this, Yo, this.svgFactory.createElement("svg:line"));
        return (
            a.setAttribute("x1", e.rect[2] - e.lineCoordinates[0]),
            a.setAttribute("y1", e.rect[3] - e.lineCoordinates[1]),
            a.setAttribute("x2", e.rect[2] - e.lineCoordinates[2]),
            a.setAttribute("y2", e.rect[3] - e.lineCoordinates[3]),
            a.setAttribute("stroke-width", e.borderStyle.width || 1),
            a.setAttribute("stroke", "transparent"),
            a.setAttribute("fill", "transparent"),
            r.append(a),
            this.container.append(r),
            !e.popupRef && this.hasPopupData && this._createPopup(),
            this.container
        );
    }
    getElementsToTriggerPopup() {
        return n(this, Yo);
    }
    addHighlightArea() {
        this.container.classList.add("highlightArea");
    }
}
Yo = new WeakMap();
var Ko;
class Og extends yt {
    constructor(e) {
        super(e, { isRenderable: !0, ignoreBorder: !0 });
        m(this, Ko, null);
    }
    render() {
        this.container.classList.add("squareAnnotation");
        const e = this.data,
            { width: s, height: i } = Ui(e.rect),
            r = this.svgFactory.create(s, i, !0),
            a = e.borderStyle.width,
            o = f(this, Ko, this.svgFactory.createElement("svg:rect"));
        return (
            o.setAttribute("x", a / 2),
            o.setAttribute("y", a / 2),
            o.setAttribute("width", s - a),
            o.setAttribute("height", i - a),
            o.setAttribute("stroke-width", a || 1),
            o.setAttribute("stroke", "transparent"),
            o.setAttribute("fill", "transparent"),
            r.append(o),
            this.container.append(r),
            !e.popupRef && this.hasPopupData && this._createPopup(),
            this.container
        );
    }
    getElementsToTriggerPopup() {
        return n(this, Ko);
    }
    addHighlightArea() {
        this.container.classList.add("highlightArea");
    }
}
Ko = new WeakMap();
var Qo;
class Hg extends yt {
    constructor(e) {
        super(e, { isRenderable: !0, ignoreBorder: !0 });
        m(this, Qo, null);
    }
    render() {
        this.container.classList.add("circleAnnotation");
        const e = this.data,
            { width: s, height: i } = Ui(e.rect),
            r = this.svgFactory.create(s, i, !0),
            a = e.borderStyle.width,
            o = f(this, Qo, this.svgFactory.createElement("svg:ellipse"));
        return (
            o.setAttribute("cx", s / 2),
            o.setAttribute("cy", i / 2),
            o.setAttribute("rx", s / 2 - a / 2),
            o.setAttribute("ry", i / 2 - a / 2),
            o.setAttribute("stroke-width", a || 1),
            o.setAttribute("stroke", "transparent"),
            o.setAttribute("fill", "transparent"),
            r.append(o),
            this.container.append(r),
            !e.popupRef && this.hasPopupData && this._createPopup(),
            this.container
        );
    }
    getElementsToTriggerPopup() {
        return n(this, Qo);
    }
    addHighlightArea() {
        this.container.classList.add("highlightArea");
    }
}
Qo = new WeakMap();
var Jo;
class hf extends yt {
    constructor(e) {
        super(e, { isRenderable: !0, ignoreBorder: !0 });
        m(this, Jo, null);
        (this.containerClassName = "polylineAnnotation"), (this.svgElementName = "svg:polyline");
    }
    render() {
        this.container.classList.add(this.containerClassName);
        const {
            data: { rect: e, vertices: s, borderStyle: i, popupRef: r },
        } = this;
        if (!s) return this.container;
        const { width: a, height: o } = Ui(e),
            l = this.svgFactory.create(a, o, !0);
        let h = [];
        for (let u = 0, p = s.length; u < p; u += 2) {
            const g = s[u] - e[0],
                A = e[3] - s[u + 1];
            h.push(`${g},${A}`);
        }
        h = h.join(" ");
        const c = f(this, Jo, this.svgFactory.createElement(this.svgElementName));
        return (
            c.setAttribute("points", h),
            c.setAttribute("stroke-width", i.width || 1),
            c.setAttribute("stroke", "transparent"),
            c.setAttribute("fill", "transparent"),
            l.append(c),
            this.container.append(l),
            !r && this.hasPopupData && this._createPopup(),
            this.container
        );
    }
    getElementsToTriggerPopup() {
        return n(this, Jo);
    }
    addHighlightArea() {
        this.container.classList.add("highlightArea");
    }
}
Jo = new WeakMap();
class Bg extends hf {
    constructor(t) {
        super(t), (this.containerClassName = "polygonAnnotation"), (this.svgElementName = "svg:polygon");
    }
}
class $g extends yt {
    constructor(t) {
        super(t, { isRenderable: !0, ignoreBorder: !0 });
    }
    render() {
        return this.container.classList.add("caretAnnotation"), !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container;
    }
}
var Zo, On, tl, Oc;
class wd extends yt {
    constructor(e) {
        super(e, { isRenderable: !0, ignoreBorder: !0 });
        m(this, tl);
        m(this, Zo, null);
        m(this, On, []);
        (this.containerClassName = "inkAnnotation"), (this.svgElementName = "svg:polyline"), (this.annotationEditorType = this.data.it === "InkHighlight" ? U.HIGHLIGHT : U.INK);
    }
    render() {
        this.container.classList.add(this.containerClassName);
        const {
                data: { rect: e, rotation: s, inkLists: i, borderStyle: r, popupRef: a },
            } = this,
            { transform: o, width: l, height: h } = b(this, tl, Oc).call(this, s, e),
            c = this.svgFactory.create(l, h, !0),
            u = f(this, Zo, this.svgFactory.createElement("svg:g"));
        c.append(u),
            u.setAttribute("stroke-width", r.width || 1),
            u.setAttribute("stroke-linecap", "round"),
            u.setAttribute("stroke-linejoin", "round"),
            u.setAttribute("stroke-miterlimit", 10),
            u.setAttribute("stroke", "transparent"),
            u.setAttribute("fill", "transparent"),
            u.setAttribute("transform", o);
        for (let p = 0, g = i.length; p < g; p++) {
            const A = this.svgFactory.createElement(this.svgElementName);
            n(this, On).push(A), A.setAttribute("points", i[p].join(",")), u.append(A);
        }
        return !a && this.hasPopupData && this._createPopup(), this.container.append(c), this._editOnDoubleClick(), this.container;
    }
    updateEdited(e) {
        super.updateEdited(e);
        const { thickness: s, points: i, rect: r } = e,
            a = n(this, Zo);
        if ((s >= 0 && a.setAttribute("stroke-width", s || 1), i)) for (let o = 0, l = n(this, On).length; o < l; o++) n(this, On)[o].setAttribute("points", i[o].join(","));
        if (r) {
            const { transform: o, width: l, height: h } = b(this, tl, Oc).call(this, this.data.rotation, r);
            a.parentElement.setAttribute("viewBox", `0 0 ${l} ${h}`), a.setAttribute("transform", o);
        }
    }
    getElementsToTriggerPopup() {
        return n(this, On);
    }
    addHighlightArea() {
        this.container.classList.add("highlightArea");
    }
}
(Zo = new WeakMap()),
    (On = new WeakMap()),
    (tl = new WeakSet()),
    (Oc = function (e, s) {
        switch (e) {
            case 90:
                return { transform: `rotate(90) translate(${-s[0]},${s[1]}) scale(1,-1)`, width: s[3] - s[1], height: s[2] - s[0] };
            case 180:
                return { transform: `rotate(180) translate(${-s[2]},${s[1]}) scale(1,-1)`, width: s[2] - s[0], height: s[3] - s[1] };
            case 270:
                return { transform: `rotate(270) translate(${-s[2]},${s[3]}) scale(1,-1)`, width: s[3] - s[1], height: s[2] - s[0] };
            default:
                return { transform: `translate(${-s[0]},${s[3]}) scale(1,-1)`, width: s[2] - s[0], height: s[3] - s[1] };
        }
    });
class cf extends yt {
    constructor(t) {
        super(t, { isRenderable: !0, ignoreBorder: !0, createQuadrilaterals: !0 }), (this.annotationEditorType = U.HIGHLIGHT);
    }
    render() {
        return !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container.classList.add("highlightAnnotation"), this._editOnDoubleClick(), this.container;
    }
}
class Gg extends yt {
    constructor(t) {
        super(t, { isRenderable: !0, ignoreBorder: !0, createQuadrilaterals: !0 });
    }
    render() {
        return !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container.classList.add("underlineAnnotation"), this.container;
    }
}
class zg extends yt {
    constructor(t) {
        super(t, { isRenderable: !0, ignoreBorder: !0, createQuadrilaterals: !0 });
    }
    render() {
        return !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container.classList.add("squigglyAnnotation"), this.container;
    }
}
class Ug extends yt {
    constructor(t) {
        super(t, { isRenderable: !0, ignoreBorder: !0, createQuadrilaterals: !0 });
    }
    render() {
        return !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container.classList.add("strikeoutAnnotation"), this.container;
    }
}
class df extends yt {
    constructor(t) {
        super(t, { isRenderable: !0, ignoreBorder: !0 }), (this.annotationEditorType = U.STAMP);
    }
    render() {
        return this.container.classList.add("stampAnnotation"), this.container.setAttribute("role", "img"), !this.data.popupRef && this.hasPopupData && this._createPopup(), this._editOnDoubleClick(), this.container;
    }
}
var el, sl, Hc;
class Vg extends yt {
    constructor(e) {
        var i;
        super(e, { isRenderable: !0 });
        m(this, sl);
        m(this, el, null);
        const { file: s } = this.data;
        (this.filename = s.filename), (this.content = s.content), (i = this.linkService.eventBus) == null || i.dispatch("fileattachmentannotation", { source: this, ...s });
    }
    render() {
        this.container.classList.add("fileAttachmentAnnotation");
        const { container: e, data: s } = this;
        let i;
        s.hasAppearance || s.fillAlpha === 0
            ? (i = document.createElement("div"))
            : ((i = document.createElement("img")),
              (i.src = `${this.imageResourcesPath}annotation-${/paperclip/i.test(s.name) ? "paperclip" : "pushpin"}.svg`),
              s.fillAlpha && s.fillAlpha < 1 && (i.style = `filter: opacity(${Math.round(s.fillAlpha * 100)}%);`)),
            i.addEventListener("dblclick", b(this, sl, Hc).bind(this)),
            f(this, el, i);
        const { isMac: r } = ne.platform;
        return (
            e.addEventListener("keydown", (a) => {
                a.key === "Enter" && (r ? a.metaKey : a.ctrlKey) && b(this, sl, Hc).call(this);
            }),
            !s.popupRef && this.hasPopupData ? this._createPopup() : i.classList.add("popupTriggerArea"),
            e.append(i),
            e
        );
    }
    getElementsToTriggerPopup() {
        return n(this, el);
    }
    addHighlightArea() {
        this.container.classList.add("highlightArea");
    }
}
(el = new WeakMap()),
    (sl = new WeakSet()),
    (Hc = function () {
        var e;
        (e = this.downloadManager) == null || e.openOrDownloadData(this.content, this.filename);
    });
var il, Hn, Bn, nl, or, uf, Bc;
class jg {
    constructor({ div: t, accessibilityManager: e, annotationCanvasMap: s, annotationEditorUIManager: i, page: r, viewport: a, structTreeLayer: o }) {
        m(this, or);
        m(this, il, null);
        m(this, Hn, null);
        m(this, Bn, new Map());
        m(this, nl, null);
        (this.div = t), f(this, il, e), f(this, Hn, s), f(this, nl, o || null), (this.page = r), (this.viewport = a), (this.zIndex = 0), (this._annotationEditorUIManager = i);
    }
    hasEditableAnnotations() {
        return n(this, Bn).size > 0;
    }
    async render(t) {
        var a;
        const { annotations: e } = t,
            s = this.div;
        nr(s, this.viewport);
        const i = new Map(),
            r = {
                data: null,
                layer: s,
                linkService: t.linkService,
                downloadManager: t.downloadManager,
                imageResourcesPath: t.imageResourcesPath || "",
                renderForms: t.renderForms !== !1,
                svgFactory: new yd(),
                annotationStorage: t.annotationStorage || new bd(),
                enableScripting: t.enableScripting === !0,
                hasJSActions: t.hasJSActions,
                fieldObjects: t.fieldObjects,
                parent: this,
                elements: null,
            };
        for (const o of e) {
            if (o.noHTML) continue;
            const l = o.annotationType === Et.POPUP;
            if (l) {
                const u = i.get(o.id);
                if (!u) continue;
                r.elements = u;
            } else {
                const { width: u, height: p } = Ui(o.rect);
                if (u <= 0 || p <= 0) continue;
            }
            r.data = o;
            const h = Rg.create(r);
            if (!h.isRenderable) continue;
            if (!l && o.popupRef) {
                const u = i.get(o.popupRef);
                u ? u.push(h) : i.set(o.popupRef, [h]);
            }
            const c = h.render();
            o.hidden && (c.style.visibility = "hidden"), await b(this, or, uf).call(this, c, o.id), h._isEditable && (n(this, Bn).set(h.data.id, h), (a = this._annotationEditorUIManager) == null || a.renderAnnotationElement(h));
        }
        b(this, or, Bc).call(this);
    }
    update({ viewport: t }) {
        const e = this.div;
        (this.viewport = t), nr(e, { rotation: t.rotation }), b(this, or, Bc).call(this), (e.hidden = !1);
    }
    getEditableAnnotations() {
        return Array.from(n(this, Bn).values());
    }
    getEditableAnnotation(t) {
        return n(this, Bn).get(t);
    }
}
(il = new WeakMap()),
    (Hn = new WeakMap()),
    (Bn = new WeakMap()),
    (nl = new WeakMap()),
    (or = new WeakSet()),
    (uf = async function (t, e) {
        var a, o;
        const s = t.firstChild || t,
            i = (s.id = `${ud}${e}`),
            r = await ((a = n(this, nl)) == null ? void 0 : a.getAriaAttributes(i));
        if (r) for (const [l, h] of r) s.setAttribute(l, h);
        this.div.append(t), (o = n(this, il)) == null || o.moveElementInDOM(this.div, t, s, !1);
    }),
    (Bc = function () {
        if (!n(this, Hn)) return;
        const t = this.div;
        for (const [e, s] of n(this, Hn)) {
            const i = t.querySelector(`[data-annotation-id="${e}"]`);
            if (!i) continue;
            s.className = "annotationContent";
            const { firstChild: r } = i;
            r ? (r.nodeName === "CANVAS" ? r.replaceWith(s) : r.classList.contains("annotationContent") ? r.after(s) : r.before(s)) : i.append(s);
        }
        n(this, Hn).clear();
    });
const kl = /\r\n?|\n/g;
var Qe, we, rl, $n, ve, _t, ff, pf, gf, Kl, li, Ql, Jl, mf, Gc, bf;
const rt = class rt extends pt {
    constructor(e) {
        super({ ...e, name: "freeTextEditor" });
        m(this, _t);
        m(this, Qe);
        m(this, we, "");
        m(this, rl, `${this.id}-editor`);
        m(this, $n, null);
        m(this, ve);
        f(this, Qe, e.color || rt._defaultColor || pt._defaultLineColor), f(this, ve, e.fontSize || rt._defaultFontSize);
    }
    static get _keyboardManager() {
        const e = rt.prototype,
            s = (a) => a.isEmpty(),
            i = rr.TRANSLATE_SMALL,
            r = rr.TRANSLATE_BIG;
        return q(
            this,
            "_keyboardManager",
            new Cl([
                [["ctrl+s", "mac+meta+s", "ctrl+p", "mac+meta+p"], e.commitOrRemove, { bubbles: !0 }],
                [["ctrl+Enter", "mac+meta+Enter", "Escape", "mac+Escape"], e.commitOrRemove],
                [["ArrowLeft", "mac+ArrowLeft"], e._translateEmpty, { args: [-i, 0], checker: s }],
                [["ctrl+ArrowLeft", "mac+shift+ArrowLeft"], e._translateEmpty, { args: [-r, 0], checker: s }],
                [["ArrowRight", "mac+ArrowRight"], e._translateEmpty, { args: [i, 0], checker: s }],
                [["ctrl+ArrowRight", "mac+shift+ArrowRight"], e._translateEmpty, { args: [r, 0], checker: s }],
                [["ArrowUp", "mac+ArrowUp"], e._translateEmpty, { args: [0, -i], checker: s }],
                [["ctrl+ArrowUp", "mac+shift+ArrowUp"], e._translateEmpty, { args: [0, -r], checker: s }],
                [["ArrowDown", "mac+ArrowDown"], e._translateEmpty, { args: [0, i], checker: s }],
                [["ctrl+ArrowDown", "mac+shift+ArrowDown"], e._translateEmpty, { args: [0, r], checker: s }],
            ])
        );
    }
    static initialize(e, s) {
        pt.initialize(e, s);
        const i = getComputedStyle(document.documentElement);
        this._internalPadding = parseFloat(i.getPropertyValue("--freetext-padding"));
    }
    static updateDefaultParams(e, s) {
        switch (e) {
            case Y.FREETEXT_SIZE:
                rt._defaultFontSize = s;
                break;
            case Y.FREETEXT_COLOR:
                rt._defaultColor = s;
                break;
        }
    }
    updateParams(e, s) {
        switch (e) {
            case Y.FREETEXT_SIZE:
                b(this, _t, ff).call(this, s);
                break;
            case Y.FREETEXT_COLOR:
                b(this, _t, pf).call(this, s);
                break;
        }
    }
    static get defaultPropertiesToUpdate() {
        return [
            [Y.FREETEXT_SIZE, rt._defaultFontSize],
            [Y.FREETEXT_COLOR, rt._defaultColor || pt._defaultLineColor],
        ];
    }
    get propertiesToUpdate() {
        return [
            [Y.FREETEXT_SIZE, n(this, ve)],
            [Y.FREETEXT_COLOR, n(this, Qe)],
        ];
    }
    _translateEmpty(e, s) {
        this._uiManager.translateSelectedEditors(e, s, !0);
    }
    getInitialTranslation() {
        const e = this.parentScale;
        return [-rt._internalPadding * e, -(rt._internalPadding + n(this, ve)) * e];
    }
    rebuild() {
        this.parent && (super.rebuild(), this.div !== null && (this.isAttachedToDOM || this.parent.add(this)));
    }
    enableEditMode() {
        if (this.isInEditMode()) return;
        this.parent.setEditingState(!1),
            this.parent.updateToolbar(U.FREETEXT),
            super.enableEditMode(),
            this.overlayDiv.classList.remove("enabled"),
            (this.editorDiv.contentEditable = !0),
            (this._isDraggable = !1),
            this.div.removeAttribute("aria-activedescendant"),
            f(this, $n, new AbortController());
        const e = this._uiManager.combinedSignal(n(this, $n));
        this.editorDiv.addEventListener("keydown", this.editorDivKeydown.bind(this), { signal: e }),
            this.editorDiv.addEventListener("focus", this.editorDivFocus.bind(this), { signal: e }),
            this.editorDiv.addEventListener("blur", this.editorDivBlur.bind(this), { signal: e }),
            this.editorDiv.addEventListener("input", this.editorDivInput.bind(this), { signal: e }),
            this.editorDiv.addEventListener("paste", this.editorDivPaste.bind(this), { signal: e });
    }
    disableEditMode() {
        var e;
        this.isInEditMode() &&
            (this.parent.setEditingState(!0),
            super.disableEditMode(),
            this.overlayDiv.classList.add("enabled"),
            (this.editorDiv.contentEditable = !1),
            this.div.setAttribute("aria-activedescendant", n(this, rl)),
            (this._isDraggable = !0),
            (e = n(this, $n)) == null || e.abort(),
            f(this, $n, null),
            this.div.focus({ preventScroll: !0 }),
            (this.isEditing = !1),
            this.parent.div.classList.add("freetextEditing"));
    }
    focusin(e) {
        this._focusEventsAllowed && (super.focusin(e), e.target !== this.editorDiv && this.editorDiv.focus());
    }
    onceAdded(e) {
        var s;
        this.width || (this.enableEditMode(), e && this.editorDiv.focus(), (s = this._initialOptions) != null && s.isCentered && this.center(), (this._initialOptions = null));
    }
    isEmpty() {
        return !this.editorDiv || this.editorDiv.innerText.trim() === "";
    }
    remove() {
        (this.isEditing = !1), this.parent && (this.parent.setEditingState(!0), this.parent.div.classList.add("freetextEditing")), super.remove();
    }
    commit() {
        if (!this.isInEditMode()) return;
        super.commit(), this.disableEditMode();
        const e = n(this, we),
            s = f(this, we, b(this, _t, gf).call(this).trimEnd());
        if (e === s) return;
        const i = (r) => {
            if ((f(this, we, r), !r)) {
                this.remove();
                return;
            }
            b(this, _t, Jl).call(this), this._uiManager.rebuild(this), b(this, _t, Kl).call(this);
        };
        this.addCommands({
            cmd: () => {
                i(s);
            },
            undo: () => {
                i(e);
            },
            mustExec: !1,
        }),
            b(this, _t, Kl).call(this);
    }
    shouldGetKeyboardEvents() {
        return this.isInEditMode();
    }
    enterInEditMode() {
        this.enableEditMode(), this.editorDiv.focus();
    }
    dblclick(e) {
        this.enterInEditMode();
    }
    keydown(e) {
        e.target === this.div && e.key === "Enter" && (this.enterInEditMode(), e.preventDefault());
    }
    editorDivKeydown(e) {
        rt._keyboardManager.exec(this, e);
    }
    editorDivFocus(e) {
        this.isEditing = !0;
    }
    editorDivBlur(e) {
        this.isEditing = !1;
    }
    editorDivInput(e) {
        this.parent.div.classList.toggle("freetextEditing", this.isEmpty());
    }
    disableEditing() {
        this.editorDiv.setAttribute("role", "comment"), this.editorDiv.removeAttribute("aria-multiline");
    }
    enableEditing() {
        this.editorDiv.setAttribute("role", "textbox"), this.editorDiv.setAttribute("aria-multiline", !0);
    }
    render() {
        if (this.div) return this.div;
        let e, s;
        this.width && ((e = this.x), (s = this.y)),
            super.render(),
            (this.editorDiv = document.createElement("div")),
            (this.editorDiv.className = "internal"),
            this.editorDiv.setAttribute("id", n(this, rl)),
            this.editorDiv.setAttribute("data-l10n-id", "pdfjs-free-text2"),
            this.editorDiv.setAttribute("data-l10n-attrs", "default-content"),
            this.enableEditing(),
            (this.editorDiv.contentEditable = !0);
        const { style: i } = this.editorDiv;
        if (
            ((i.fontSize = `calc(${n(this, ve)}px * var(--scale-factor))`),
            (i.color = n(this, Qe)),
            this.div.append(this.editorDiv),
            (this.overlayDiv = document.createElement("div")),
            this.overlayDiv.classList.add("overlay", "enabled"),
            this.div.append(this.overlayDiv),
            hh(this, this.div, ["dblclick", "keydown"]),
            this.width)
        ) {
            const [r, a] = this.parentDimensions;
            if (this.annotationElementId) {
                const { position: o } = this._initialData;
                let [l, h] = this.getInitialTranslation();
                [l, h] = this.pageTranslationToScreen(l, h);
                const [c, u] = this.pageDimensions,
                    [p, g] = this.pageTranslation;
                let A, y;
                switch (this.rotation) {
                    case 0:
                        (A = e + (o[0] - p) / c), (y = s + this.height - (o[1] - g) / u);
                        break;
                    case 90:
                        (A = e + (o[0] - p) / c), (y = s - (o[1] - g) / u), ([l, h] = [h, -l]);
                        break;
                    case 180:
                        (A = e - this.width + (o[0] - p) / c), (y = s - (o[1] - g) / u), ([l, h] = [-l, -h]);
                        break;
                    case 270:
                        (A = e + (o[0] - p - this.height * u) / c), (y = s + (o[1] - g - this.width * c) / u), ([l, h] = [-h, l]);
                        break;
                }
                this.setAt(A * r, y * a, l, h);
            } else this.setAt(e * r, s * a, this.width * r, this.height * a);
            b(this, _t, Jl).call(this), (this._isDraggable = !0), (this.editorDiv.contentEditable = !1);
        } else (this._isDraggable = !1), (this.editorDiv.contentEditable = !0);
        return this.div;
    }
    editorDivPaste(e) {
        var A, y, v;
        const s = e.clipboardData || window.clipboardData,
            { types: i } = s;
        if (i.length === 1 && i[0] === "text/plain") return;
        e.preventDefault();
        const r = b((A = rt), li, Gc)
            .call(A, s.getData("text") || "")
            .replaceAll(
                kl,
                `
`
            );
        if (!r) return;
        const a = window.getSelection();
        if (!a.rangeCount) return;
        this.editorDiv.normalize(), a.deleteFromDocument();
        const o = a.getRangeAt(0);
        if (
            !r.includes(`
`)
        ) {
            o.insertNode(document.createTextNode(r)), this.editorDiv.normalize(), a.collapseToStart();
            return;
        }
        const { startContainer: l, startOffset: h } = o,
            c = [],
            u = [];
        if (l.nodeType === Node.TEXT_NODE) {
            const w = l.parentElement;
            if ((u.push(l.nodeValue.slice(h).replaceAll(kl, "")), w !== this.editorDiv)) {
                let _ = c;
                for (const E of this.editorDiv.childNodes) {
                    if (E === w) {
                        _ = u;
                        continue;
                    }
                    _.push(b((y = rt), li, Ql).call(y, E));
                }
            }
            c.push(l.nodeValue.slice(0, h).replaceAll(kl, ""));
        } else if (l === this.editorDiv) {
            let w = c,
                _ = 0;
            for (const E of this.editorDiv.childNodes) _++ === h && (w = u), w.push(b((v = rt), li, Ql).call(v, E));
        }
        f(
            this,
            we,
            `${c.join(`
`)}${r}${u.join(`
`)}`
        ),
            b(this, _t, Jl).call(this);
        const p = new Range();
        let g = c.reduce((w, _) => w + _.length, 0);
        for (const { firstChild: w } of this.editorDiv.childNodes)
            if (w.nodeType === Node.TEXT_NODE) {
                const _ = w.nodeValue.length;
                if (g <= _) {
                    p.setStart(w, g), p.setEnd(w, g);
                    break;
                }
                g -= _;
            }
        a.removeAllRanges(), a.addRange(p);
    }
    get contentDiv() {
        return this.editorDiv;
    }
    static async deserialize(e, s, i) {
        var o;
        let r = null;
        if (e instanceof lf) {
            const {
                data: {
                    defaultAppearanceData: { fontSize: l, fontColor: h },
                    rect: c,
                    rotation: u,
                    id: p,
                    popupRef: g,
                },
                textContent: A,
                textPosition: y,
                parent: {
                    page: { pageNumber: v },
                },
            } = e;
            if (!A || A.length === 0) return null;
            r = e = {
                annotationType: U.FREETEXT,
                color: Array.from(h),
                fontSize: l,
                value: A.join(`
`),
                position: y,
                pageIndex: v - 1,
                rect: c.slice(0),
                rotation: u,
                id: p,
                deleted: !1,
                popupRef: g,
            };
        }
        const a = await super.deserialize(e, s, i);
        return f(a, ve, e.fontSize), f(a, Qe, F.makeHexColor(...e.color)), f(a, we, b((o = rt), li, Gc).call(o, e.value)), (a.annotationElementId = e.id || null), (a._initialData = r), a;
    }
    serialize(e = !1) {
        if (this.isEmpty()) return null;
        if (this.deleted) return this.serializeDeleted();
        const s = rt._internalPadding * this.parentScale,
            i = this.getRect(s, s),
            r = pt._colorManager.convert(this.isAttachedToDOM ? getComputedStyle(this.editorDiv).color : n(this, Qe)),
            a = { annotationType: U.FREETEXT, color: r, fontSize: n(this, ve), value: b(this, _t, mf).call(this), pageIndex: this.pageIndex, rect: i, rotation: this.rotation, structTreeParentId: this._structTreeParentId };
        return e ? a : this.annotationElementId && !b(this, _t, bf).call(this, a) ? null : ((a.id = this.annotationElementId), a);
    }
    renderAnnotationElement(e) {
        const s = super.renderAnnotationElement(e);
        if (this.deleted) return s;
        const { style: i } = s;
        (i.fontSize = `calc(${n(this, ve)}px * var(--scale-factor))`), (i.color = n(this, Qe)), s.replaceChildren();
        for (const a of n(this, we).split(`
`)) {
            const o = document.createElement("div");
            o.append(a ? document.createTextNode(a) : document.createElement("br")), s.append(o);
        }
        const r = rt._internalPadding * this.parentScale;
        return e.updateEdited({ rect: this.getRect(r, r), popupContent: n(this, we) }), s;
    }
    resetAnnotationElement(e) {
        super.resetAnnotationElement(e), e.resetEdited();
    }
};
(Qe = new WeakMap()),
    (we = new WeakMap()),
    (rl = new WeakMap()),
    ($n = new WeakMap()),
    (ve = new WeakMap()),
    (_t = new WeakSet()),
    (ff = function (e) {
        const s = (r) => {
                (this.editorDiv.style.fontSize = `calc(${r}px * var(--scale-factor))`), this.translate(0, -(r - n(this, ve)) * this.parentScale), f(this, ve, r), b(this, _t, Kl).call(this);
            },
            i = n(this, ve);
        this.addCommands({ cmd: s.bind(this, e), undo: s.bind(this, i), post: this._uiManager.updateUI.bind(this._uiManager, this), mustExec: !0, type: Y.FREETEXT_SIZE, overwriteIfSameType: !0, keepUndo: !0 });
    }),
    (pf = function (e) {
        const s = (r) => {
                f(this, Qe, (this.editorDiv.style.color = r));
            },
            i = n(this, Qe);
        this.addCommands({ cmd: s.bind(this, e), undo: s.bind(this, i), post: this._uiManager.updateUI.bind(this._uiManager, this), mustExec: !0, type: Y.FREETEXT_COLOR, overwriteIfSameType: !0, keepUndo: !0 });
    }),
    (gf = function () {
        var i;
        const e = [];
        this.editorDiv.normalize();
        let s = null;
        for (const r of this.editorDiv.childNodes) ((s == null ? void 0 : s.nodeType) === Node.TEXT_NODE && r.nodeName === "BR") || (e.push(b((i = rt), li, Ql).call(i, r)), (s = r));
        return e.join(`
`);
    }),
    (Kl = function () {
        const [e, s] = this.parentDimensions;
        let i;
        if (this.isAttachedToDOM) i = this.div.getBoundingClientRect();
        else {
            const { currentLayer: r, div: a } = this,
                o = a.style.display,
                l = a.classList.contains("hidden");
            a.classList.remove("hidden"), (a.style.display = "hidden"), r.div.append(this.div), (i = a.getBoundingClientRect()), a.remove(), (a.style.display = o), a.classList.toggle("hidden", l);
        }
        this.rotation % 180 === this.parentRotation % 180 ? ((this.width = i.width / e), (this.height = i.height / s)) : ((this.width = i.height / e), (this.height = i.width / s)), this.fixAndSetPosition();
    }),
    (li = new WeakSet()),
    (Ql = function (e) {
        return (e.nodeType === Node.TEXT_NODE ? e.nodeValue : e.innerText).replaceAll(kl, "");
    }),
    (Jl = function () {
        if ((this.editorDiv.replaceChildren(), !!n(this, we)))
            for (const e of n(this, we).split(`
`)) {
                const s = document.createElement("div");
                s.append(e ? document.createTextNode(e) : document.createElement("br")), this.editorDiv.append(s);
            }
    }),
    (mf = function () {
        return n(this, we).replaceAll(" ", " ");
    }),
    (Gc = function (e) {
        return e.replaceAll(" ", " ");
    }),
    (bf = function (e) {
        const { value: s, fontSize: i, color: r, pageIndex: a } = this._initialData;
        return this._hasBeenMoved || e.value !== s || e.fontSize !== i || e.color.some((o, l) => o !== r[l]) || e.pageIndex !== a;
    }),
    m(rt, li),
    O(rt, "_freeTextDefaultContent", ""),
    O(rt, "_internalPadding", 0),
    O(rt, "_defaultColor", null),
    O(rt, "_defaultFontSize", 10),
    O(rt, "_type", "freetext"),
    O(rt, "_editorType", U.FREETEXT);
let $c = rt;
class M {
    toSVGPath() {
        nt("Abstract method `toSVGPath` must be implemented.");
    }
    get box() {
        nt("Abstract getter `box` must be implemented.");
    }
    serialize(t, e) {
        nt("Abstract method `serialize` must be implemented.");
    }
    static _rescale(t, e, s, i, r, a) {
        a || (a = new Float32Array(t.length));
        for (let o = 0, l = t.length; o < l; o += 2) (a[o] = e + t[o] * i), (a[o + 1] = s + t[o + 1] * r);
        return a;
    }
    static _rescaleAndSwap(t, e, s, i, r, a) {
        a || (a = new Float32Array(t.length));
        for (let o = 0, l = t.length; o < l; o += 2) (a[o] = e + t[o + 1] * i), (a[o + 1] = s + t[o] * r);
        return a;
    }
    static _translate(t, e, s, i) {
        i || (i = new Float32Array(t.length));
        for (let r = 0, a = t.length; r < a; r += 2) (i[r] = e + t[r]), (i[r + 1] = s + t[r + 1]);
        return i;
    }
    static svgRound(t) {
        return Math.round(t * 1e4);
    }
    static _normalizePoint(t, e, s, i, r) {
        switch (r) {
            case 90:
                return [1 - e / s, t / i];
            case 180:
                return [1 - t / s, 1 - e / i];
            case 270:
                return [e / s, 1 - t / i];
            default:
                return [t / s, e / i];
        }
    }
    static _normalizePagePoint(t, e, s) {
        switch (s) {
            case 90:
                return [1 - e, t];
            case 180:
                return [1 - t, 1 - e];
            case 270:
                return [e, 1 - t];
            default:
                return [t, e];
        }
    }
    static createBezierPoints(t, e, s, i, r, a) {
        return [(t + 5 * s) / 6, (e + 5 * i) / 6, (5 * s + r) / 6, (5 * i + a) / 6, (s + r) / 2, (i + a) / 2];
    }
}
O(M, "PRECISION", 1e-4);
var _e, Je, ia, na, vs, X, Gn, zn, al, ol, ra, aa, Li, ll, Mh, kh, Rt, za, Af, yf, wf, vf, _f, Sf;
const Ds = class Ds {
    constructor({ x: t, y: e }, s, i, r, a, o = 0) {
        m(this, Rt);
        m(this, _e);
        m(this, Je, []);
        m(this, ia);
        m(this, na);
        m(this, vs, []);
        m(this, X, new Float32Array(18));
        m(this, Gn);
        m(this, zn);
        m(this, al);
        m(this, ol);
        m(this, ra);
        m(this, aa);
        m(this, Li, []);
        f(this, _e, s), f(this, aa, r * i), f(this, na, a), n(this, X).set([NaN, NaN, NaN, NaN, t, e], 6), f(this, ia, o), f(this, ol, n(Ds, ll) * i), f(this, al, n(Ds, kh) * i), f(this, ra, i), n(this, Li).push(t, e);
    }
    isEmpty() {
        return isNaN(n(this, X)[8]);
    }
    add({ x: t, y: e }) {
        var N;
        f(this, Gn, t), f(this, zn, e);
        const [s, i, r, a] = n(this, _e);
        let [o, l, h, c] = n(this, X).subarray(8, 12);
        const u = t - h,
            p = e - c,
            g = Math.hypot(u, p);
        if (g < n(this, al)) return !1;
        const A = g - n(this, ol),
            y = A / g,
            v = y * u,
            w = y * p;
        let _ = o,
            E = l;
        (o = h), (l = c), (h += v), (c += w), (N = n(this, Li)) == null || N.push(t, e);
        const S = -w / A,
            x = v / A,
            T = S * n(this, aa),
            C = x * n(this, aa);
        return (
            n(this, X).set(n(this, X).subarray(2, 8), 0),
            n(this, X).set([h + T, c + C], 4),
            n(this, X).set(n(this, X).subarray(14, 18), 12),
            n(this, X).set([h - T, c - C], 16),
            isNaN(n(this, X)[6])
                ? (n(this, vs).length === 0 &&
                      (n(this, X).set([o + T, l + C], 2), n(this, vs).push(NaN, NaN, NaN, NaN, (o + T - s) / r, (l + C - i) / a), n(this, X).set([o - T, l - C], 14), n(this, Je).push(NaN, NaN, NaN, NaN, (o - T - s) / r, (l - C - i) / a)),
                  n(this, X).set([_, E, o, l, h, c], 6),
                  !this.isEmpty())
                : (n(this, X).set([_, E, o, l, h, c], 6),
                  Math.abs(Math.atan2(E - l, _ - o) - Math.atan2(w, v)) < Math.PI / 2
                      ? (([o, l, h, c] = n(this, X).subarray(2, 6)),
                        n(this, vs).push(NaN, NaN, NaN, NaN, ((o + h) / 2 - s) / r, ((l + c) / 2 - i) / a),
                        ([o, l, _, E] = n(this, X).subarray(14, 18)),
                        n(this, Je).push(NaN, NaN, NaN, NaN, ((_ + o) / 2 - s) / r, ((E + l) / 2 - i) / a),
                        !0)
                      : (([_, E, o, l, h, c] = n(this, X).subarray(0, 6)),
                        n(this, vs).push(((_ + 5 * o) / 6 - s) / r, ((E + 5 * l) / 6 - i) / a, ((5 * o + h) / 6 - s) / r, ((5 * l + c) / 6 - i) / a, ((o + h) / 2 - s) / r, ((l + c) / 2 - i) / a),
                        ([h, c, o, l, _, E] = n(this, X).subarray(12, 18)),
                        n(this, Je).push(((_ + 5 * o) / 6 - s) / r, ((E + 5 * l) / 6 - i) / a, ((5 * o + h) / 6 - s) / r, ((5 * l + c) / 6 - i) / a, ((o + h) / 2 - s) / r, ((l + c) / 2 - i) / a),
                        !0))
        );
    }
    toSVGPath() {
        if (this.isEmpty()) return "";
        const t = n(this, vs),
            e = n(this, Je);
        if (isNaN(n(this, X)[6]) && !this.isEmpty()) return b(this, Rt, Af).call(this);
        const s = [];
        s.push(`M${t[4]} ${t[5]}`);
        for (let i = 6; i < t.length; i += 6) isNaN(t[i]) ? s.push(`L${t[i + 4]} ${t[i + 5]}`) : s.push(`C${t[i]} ${t[i + 1]} ${t[i + 2]} ${t[i + 3]} ${t[i + 4]} ${t[i + 5]}`);
        b(this, Rt, wf).call(this, s);
        for (let i = e.length - 6; i >= 6; i -= 6) isNaN(e[i]) ? s.push(`L${e[i + 4]} ${e[i + 5]}`) : s.push(`C${e[i]} ${e[i + 1]} ${e[i + 2]} ${e[i + 3]} ${e[i + 4]} ${e[i + 5]}`);
        return b(this, Rt, yf).call(this, s), s.join(" ");
    }
    newFreeDrawOutline(t, e, s, i, r, a) {
        return new Ef(t, e, s, i, r, a);
    }
    getOutlines() {
        var u;
        const t = n(this, vs),
            e = n(this, Je),
            s = n(this, X),
            [i, r, a, o] = n(this, _e),
            l = new Float32Array((((u = n(this, Li)) == null ? void 0 : u.length) ?? 0) + 2);
        for (let p = 0, g = l.length - 2; p < g; p += 2) (l[p] = (n(this, Li)[p] - i) / a), (l[p + 1] = (n(this, Li)[p + 1] - r) / o);
        if (((l[l.length - 2] = (n(this, Gn) - i) / a), (l[l.length - 1] = (n(this, zn) - r) / o), isNaN(s[6]) && !this.isEmpty())) return b(this, Rt, vf).call(this, l);
        const h = new Float32Array(n(this, vs).length + 24 + n(this, Je).length);
        let c = t.length;
        for (let p = 0; p < c; p += 2) {
            if (isNaN(t[p])) {
                h[p] = h[p + 1] = NaN;
                continue;
            }
            (h[p] = t[p]), (h[p + 1] = t[p + 1]);
        }
        c = b(this, Rt, Sf).call(this, h, c);
        for (let p = e.length - 6; p >= 6; p -= 6)
            for (let g = 0; g < 6; g += 2) {
                if (isNaN(e[p + g])) {
                    (h[c] = h[c + 1] = NaN), (c += 2);
                    continue;
                }
                (h[c] = e[p + g]), (h[c + 1] = e[p + g + 1]), (c += 2);
            }
        return b(this, Rt, _f).call(this, h, c), this.newFreeDrawOutline(h, l, n(this, _e), n(this, ra), n(this, ia), n(this, na));
    }
};
(_e = new WeakMap()),
    (Je = new WeakMap()),
    (ia = new WeakMap()),
    (na = new WeakMap()),
    (vs = new WeakMap()),
    (X = new WeakMap()),
    (Gn = new WeakMap()),
    (zn = new WeakMap()),
    (al = new WeakMap()),
    (ol = new WeakMap()),
    (ra = new WeakMap()),
    (aa = new WeakMap()),
    (Li = new WeakMap()),
    (ll = new WeakMap()),
    (Mh = new WeakMap()),
    (kh = new WeakMap()),
    (Rt = new WeakSet()),
    (za = function () {
        const t = n(this, X).subarray(4, 6),
            e = n(this, X).subarray(16, 18),
            [s, i, r, a] = n(this, _e);
        return [(n(this, Gn) + (t[0] - e[0]) / 2 - s) / r, (n(this, zn) + (t[1] - e[1]) / 2 - i) / a, (n(this, Gn) + (e[0] - t[0]) / 2 - s) / r, (n(this, zn) + (e[1] - t[1]) / 2 - i) / a];
    }),
    (Af = function () {
        const [t, e, s, i] = n(this, _e),
            [r, a, o, l] = b(this, Rt, za).call(this);
        return `M${(n(this, X)[2] - t) / s} ${(n(this, X)[3] - e) / i} L${(n(this, X)[4] - t) / s} ${(n(this, X)[5] - e) / i} L${r} ${a} L${o} ${l} L${(n(this, X)[16] - t) / s} ${(n(this, X)[17] - e) / i} L${(n(this, X)[14] - t) / s} ${
            (n(this, X)[15] - e) / i
        } Z`;
    }),
    (yf = function (t) {
        const e = n(this, Je);
        t.push(`L${e[4]} ${e[5]} Z`);
    }),
    (wf = function (t) {
        const [e, s, i, r] = n(this, _e),
            a = n(this, X).subarray(4, 6),
            o = n(this, X).subarray(16, 18),
            [l, h, c, u] = b(this, Rt, za).call(this);
        t.push(`L${(a[0] - e) / i} ${(a[1] - s) / r} L${l} ${h} L${c} ${u} L${(o[0] - e) / i} ${(o[1] - s) / r}`);
    }),
    (vf = function (t) {
        const e = n(this, X),
            [s, i, r, a] = n(this, _e),
            [o, l, h, c] = b(this, Rt, za).call(this),
            u = new Float32Array(36);
        return (
            u.set(
                [
                    NaN,
                    NaN,
                    NaN,
                    NaN,
                    (e[2] - s) / r,
                    (e[3] - i) / a,
                    NaN,
                    NaN,
                    NaN,
                    NaN,
                    (e[4] - s) / r,
                    (e[5] - i) / a,
                    NaN,
                    NaN,
                    NaN,
                    NaN,
                    o,
                    l,
                    NaN,
                    NaN,
                    NaN,
                    NaN,
                    h,
                    c,
                    NaN,
                    NaN,
                    NaN,
                    NaN,
                    (e[16] - s) / r,
                    (e[17] - i) / a,
                    NaN,
                    NaN,
                    NaN,
                    NaN,
                    (e[14] - s) / r,
                    (e[15] - i) / a,
                ],
                0
            ),
            this.newFreeDrawOutline(u, t, n(this, _e), n(this, ra), n(this, ia), n(this, na))
        );
    }),
    (_f = function (t, e) {
        const s = n(this, Je);
        return t.set([NaN, NaN, NaN, NaN, s[4], s[5]], e), (e += 6);
    }),
    (Sf = function (t, e) {
        const s = n(this, X).subarray(4, 6),
            i = n(this, X).subarray(16, 18),
            [r, a, o, l] = n(this, _e),
            [h, c, u, p] = b(this, Rt, za).call(this);
        return t.set([NaN, NaN, NaN, NaN, (s[0] - r) / o, (s[1] - a) / l, NaN, NaN, NaN, NaN, h, c, NaN, NaN, NaN, NaN, u, p, NaN, NaN, NaN, NaN, (i[0] - r) / o, (i[1] - a) / l], e), (e += 24);
    }),
    m(Ds, ll, 8),
    m(Ds, Mh, 2),
    m(Ds, kh, n(Ds, ll) + n(Ds, Mh));
let uh = Ds;
var oa, Un, Zs, hl, Se, cl, At, Lh, xf;
class Ef extends M {
    constructor(e, s, i, r, a, o) {
        super();
        m(this, Lh);
        m(this, oa);
        m(this, Un, new Float32Array(4));
        m(this, Zs);
        m(this, hl);
        m(this, Se);
        m(this, cl);
        m(this, At);
        f(this, At, e), f(this, Se, s), f(this, oa, i), f(this, cl, r), f(this, Zs, a), f(this, hl, o), (this.lastPoint = [NaN, NaN]), b(this, Lh, xf).call(this, o);
        const [l, h, c, u] = n(this, Un);
        for (let p = 0, g = e.length; p < g; p += 2) (e[p] = (e[p] - l) / c), (e[p + 1] = (e[p + 1] - h) / u);
        for (let p = 0, g = s.length; p < g; p += 2) (s[p] = (s[p] - l) / c), (s[p + 1] = (s[p + 1] - h) / u);
    }
    toSVGPath() {
        const e = [`M${n(this, At)[4]} ${n(this, At)[5]}`];
        for (let s = 6, i = n(this, At).length; s < i; s += 6) {
            if (isNaN(n(this, At)[s])) {
                e.push(`L${n(this, At)[s + 4]} ${n(this, At)[s + 5]}`);
                continue;
            }
            e.push(`C${n(this, At)[s]} ${n(this, At)[s + 1]} ${n(this, At)[s + 2]} ${n(this, At)[s + 3]} ${n(this, At)[s + 4]} ${n(this, At)[s + 5]}`);
        }
        return e.push("Z"), e.join(" ");
    }
    serialize([e, s, i, r], a) {
        const o = i - e,
            l = r - s;
        let h, c;
        switch (a) {
            case 0:
                (h = M._rescale(n(this, At), e, r, o, -l)), (c = M._rescale(n(this, Se), e, r, o, -l));
                break;
            case 90:
                (h = M._rescaleAndSwap(n(this, At), e, s, o, l)), (c = M._rescaleAndSwap(n(this, Se), e, s, o, l));
                break;
            case 180:
                (h = M._rescale(n(this, At), i, s, -o, l)), (c = M._rescale(n(this, Se), i, s, -o, l));
                break;
            case 270:
                (h = M._rescaleAndSwap(n(this, At), i, r, -o, -l)), (c = M._rescaleAndSwap(n(this, Se), i, r, -o, -l));
                break;
        }
        return { outline: Array.from(h), points: [Array.from(c)] };
    }
    get box() {
        return n(this, Un);
    }
    newOutliner(e, s, i, r, a, o = 0) {
        return new uh(e, s, i, r, a, o);
    }
    getNewOutline(e, s) {
        const [i, r, a, o] = n(this, Un),
            [l, h, c, u] = n(this, oa),
            p = a * c,
            g = o * u,
            A = i * c + l,
            y = r * u + h,
            v = this.newOutliner({ x: n(this, Se)[0] * p + A, y: n(this, Se)[1] * g + y }, n(this, oa), n(this, cl), e, n(this, hl), s ?? n(this, Zs));
        for (let w = 2; w < n(this, Se).length; w += 2) v.add({ x: n(this, Se)[w] * p + A, y: n(this, Se)[w + 1] * g + y });
        return v.getOutlines();
    }
}
(oa = new WeakMap()),
    (Un = new WeakMap()),
    (Zs = new WeakMap()),
    (hl = new WeakMap()),
    (Se = new WeakMap()),
    (cl = new WeakMap()),
    (At = new WeakMap()),
    (Lh = new WeakSet()),
    (xf = function (e) {
        const s = n(this, At);
        let i = s[4],
            r = s[5],
            a = i,
            o = r,
            l = i,
            h = r,
            c = i,
            u = r;
        const p = e ? Math.max : Math.min;
        for (let A = 6, y = s.length; A < y; A += 6) {
            if (isNaN(s[A])) (a = Math.min(a, s[A + 4])), (o = Math.min(o, s[A + 5])), (l = Math.max(l, s[A + 4])), (h = Math.max(h, s[A + 5])), u < s[A + 5] ? ((c = s[A + 4]), (u = s[A + 5])) : u === s[A + 5] && (c = p(c, s[A + 4]));
            else {
                const v = F.bezierBoundingBox(i, r, ...s.slice(A, A + 6));
                (a = Math.min(a, v[0])), (o = Math.min(o, v[1])), (l = Math.max(l, v[2])), (h = Math.max(h, v[3])), u < v[3] ? ((c = v[2]), (u = v[3])) : u === v[3] && (c = p(c, v[2]));
            }
            (i = s[A + 4]), (r = s[A + 5]);
        }
        const g = n(this, Un);
        (g[0] = a - n(this, Zs)), (g[1] = o - n(this, Zs)), (g[2] = l - a + 2 * n(this, Zs)), (g[3] = h - o + 2 * n(this, Zs)), (this.lastPoint = [c, u]);
    });
var dl, ul, Ii, Ze, ae, Cf, Zl, Tf, Rf, Uc;
class zc {
    constructor(t, e = 0, s = 0, i = !0) {
        m(this, ae);
        m(this, dl);
        m(this, ul);
        m(this, Ii, []);
        m(this, Ze, []);
        let r = 1 / 0,
            a = -1 / 0,
            o = 1 / 0,
            l = -1 / 0;
        const c = 10 ** -4;
        for (const { x: w, y: _, width: E, height: S } of t) {
            const x = Math.floor((w - e) / c) * c,
                T = Math.ceil((w + E + e) / c) * c,
                C = Math.floor((_ - e) / c) * c,
                k = Math.ceil((_ + S + e) / c) * c,
                N = [x, C, k, !0],
                W = [T, C, k, !1];
            n(this, Ii).push(N, W), (r = Math.min(r, x)), (a = Math.max(a, T)), (o = Math.min(o, C)), (l = Math.max(l, k));
        }
        const u = a - r + 2 * s,
            p = l - o + 2 * s,
            g = r - s,
            A = o - s,
            y = n(this, Ii).at(i ? -1 : -2),
            v = [y[0], y[2]];
        for (const w of n(this, Ii)) {
            const [_, E, S] = w;
            (w[0] = (_ - g) / u), (w[1] = (E - A) / p), (w[2] = (S - A) / p);
        }
        f(this, dl, new Float32Array([g, A, u, p])), f(this, ul, v);
    }
    getOutlines() {
        n(this, Ii).sort((e, s) => e[0] - s[0] || e[1] - s[1] || e[2] - s[2]);
        const t = [];
        for (const e of n(this, Ii)) e[3] ? (t.push(...b(this, ae, Uc).call(this, e)), b(this, ae, Tf).call(this, e)) : (b(this, ae, Rf).call(this, e), t.push(...b(this, ae, Uc).call(this, e)));
        return b(this, ae, Cf).call(this, t);
    }
}
(dl = new WeakMap()),
    (ul = new WeakMap()),
    (Ii = new WeakMap()),
    (Ze = new WeakMap()),
    (ae = new WeakSet()),
    (Cf = function (t) {
        const e = [],
            s = new Set();
        for (const a of t) {
            const [o, l, h] = a;
            e.push([o, l, a], [o, h, a]);
        }
        e.sort((a, o) => a[1] - o[1] || a[0] - o[0]);
        for (let a = 0, o = e.length; a < o; a += 2) {
            const l = e[a][2],
                h = e[a + 1][2];
            l.push(h), h.push(l), s.add(l), s.add(h);
        }
        const i = [];
        let r;
        for (; s.size > 0; ) {
            const a = s.values().next().value;
            let [o, l, h, c, u] = a;
            s.delete(a);
            let p = o,
                g = l;
            for (r = [o, h], i.push(r); ; ) {
                let A;
                if (s.has(c)) A = c;
                else if (s.has(u)) A = u;
                else break;
                s.delete(A), ([o, l, h, c, u] = A), p !== o && (r.push(p, g, o, g === l ? l : h), (p = o)), (g = g === l ? h : l);
            }
            r.push(p, g);
        }
        return new Wg(i, n(this, dl), n(this, ul));
    }),
    (Zl = function (t) {
        const e = n(this, Ze);
        let s = 0,
            i = e.length - 1;
        for (; s <= i; ) {
            const r = (s + i) >> 1,
                a = e[r][0];
            if (a === t) return r;
            a < t ? (s = r + 1) : (i = r - 1);
        }
        return i + 1;
    }),
    (Tf = function ([, t, e]) {
        const s = b(this, ae, Zl).call(this, t);
        n(this, Ze).splice(s, 0, [t, e]);
    }),
    (Rf = function ([, t, e]) {
        const s = b(this, ae, Zl).call(this, t);
        for (let i = s; i < n(this, Ze).length; i++) {
            const [r, a] = n(this, Ze)[i];
            if (r !== t) break;
            if (r === t && a === e) {
                n(this, Ze).splice(i, 1);
                return;
            }
        }
        for (let i = s - 1; i >= 0; i--) {
            const [r, a] = n(this, Ze)[i];
            if (r !== t) break;
            if (r === t && a === e) {
                n(this, Ze).splice(i, 1);
                return;
            }
        }
    }),
    (Uc = function (t) {
        const [e, s, i] = t,
            r = [[e, s, i]],
            a = b(this, ae, Zl).call(this, i);
        for (let o = 0; o < a; o++) {
            const [l, h] = n(this, Ze)[o];
            for (let c = 0, u = r.length; c < u; c++) {
                const [, p, g] = r[c];
                if (!(h <= p || g <= l)) {
                    if (p >= l) {
                        if (g > h) r[c][1] = h;
                        else {
                            if (u === 1) return [];
                            r.splice(c, 1), c--, u--;
                        }
                        continue;
                    }
                    (r[c][2] = l), g > h && r.push([e, h, g]);
                }
            }
        }
        return r;
    });
var fl, la;
class Wg extends M {
    constructor(e, s, i) {
        super();
        m(this, fl);
        m(this, la);
        f(this, la, e), f(this, fl, s), (this.lastPoint = i);
    }
    toSVGPath() {
        const e = [];
        for (const s of n(this, la)) {
            let [i, r] = s;
            e.push(`M${i} ${r}`);
            for (let a = 2; a < s.length; a += 2) {
                const o = s[a],
                    l = s[a + 1];
                o === i ? (e.push(`V${l}`), (r = l)) : l === r && (e.push(`H${o}`), (i = o));
            }
            e.push("Z");
        }
        return e.join(" ");
    }
    serialize([e, s, i, r], a) {
        const o = [],
            l = i - e,
            h = r - s;
        for (const c of n(this, la)) {
            const u = new Array(c.length);
            for (let p = 0; p < c.length; p += 2) (u[p] = e + c[p] * l), (u[p + 1] = r - c[p + 1] * h);
            o.push(u);
        }
        return o;
    }
    get box() {
        return n(this, fl);
    }
    get classNamesForOutlining() {
        return ["highlightOutline"];
    }
}
(fl = new WeakMap()), (la = new WeakMap());
class Vc extends uh {
    newFreeDrawOutline(t, e, s, i, r, a) {
        return new Xg(t, e, s, i, r, a);
    }
}
class Xg extends Ef {
    newOutliner(t, e, s, i, r, a = 0) {
        return new Vc(t, e, s, i, r, a);
    }
}
var ts, Vn, ha, Tt, pl, ca, gl, ml, Di, es, da, bl, st, jc, Wc, Xc, Yi, Pf, di;
const ce = class ce {
    constructor({ editor: t = null, uiManager: e = null }) {
        m(this, st);
        m(this, ts, null);
        m(this, Vn, null);
        m(this, ha);
        m(this, Tt, null);
        m(this, pl, !1);
        m(this, ca, !1);
        m(this, gl, null);
        m(this, ml);
        m(this, Di, null);
        m(this, es, null);
        m(this, da);
        var s;
        t ? (f(this, ca, !1), f(this, da, Y.HIGHLIGHT_COLOR), f(this, gl, t)) : (f(this, ca, !0), f(this, da, Y.HIGHLIGHT_DEFAULT_COLOR)),
            f(this, es, (t == null ? void 0 : t._uiManager) || e),
            f(this, ml, n(this, es)._eventBus),
            f(this, ha, (t == null ? void 0 : t.color) || ((s = n(this, es)) == null ? void 0 : s.highlightColors.values().next().value) || "#FFFF98"),
            n(ce, bl) ||
                f(
                    ce,
                    bl,
                    Object.freeze({ blue: "pdfjs-editor-colorpicker-blue", green: "pdfjs-editor-colorpicker-green", pink: "pdfjs-editor-colorpicker-pink", red: "pdfjs-editor-colorpicker-red", yellow: "pdfjs-editor-colorpicker-yellow" })
                );
    }
    static get _keyboardManager() {
        return q(
            this,
            "_keyboardManager",
            new Cl([
                [["Escape", "mac+Escape"], ce.prototype._hideDropdownFromKeyboard],
                [[" ", "mac+ "], ce.prototype._colorSelectFromKeyboard],
                [["ArrowDown", "ArrowRight", "mac+ArrowDown", "mac+ArrowRight"], ce.prototype._moveToNext],
                [["ArrowUp", "ArrowLeft", "mac+ArrowUp", "mac+ArrowLeft"], ce.prototype._moveToPrevious],
                [["Home", "mac+Home"], ce.prototype._moveToBeginning],
                [["End", "mac+End"], ce.prototype._moveToEnd],
            ])
        );
    }
    renderButton() {
        const t = f(this, ts, document.createElement("button"));
        (t.className = "colorPicker"), (t.tabIndex = "0"), t.setAttribute("data-l10n-id", "pdfjs-editor-colorpicker-button"), t.setAttribute("aria-haspopup", !0);
        const e = n(this, es)._signal;
        t.addEventListener("click", b(this, st, Yi).bind(this), { signal: e }), t.addEventListener("keydown", b(this, st, Xc).bind(this), { signal: e });
        const s = f(this, Vn, document.createElement("span"));
        return (s.className = "swatch"), s.setAttribute("aria-hidden", !0), (s.style.backgroundColor = n(this, ha)), t.append(s), t;
    }
    renderMainDropdown() {
        const t = f(this, Tt, b(this, st, jc).call(this));
        return t.setAttribute("aria-orientation", "horizontal"), t.setAttribute("aria-labelledby", "highlightColorPickerLabel"), t;
    }
    _colorSelectFromKeyboard(t) {
        if (t.target === n(this, ts)) {
            b(this, st, Yi).call(this, t);
            return;
        }
        const e = t.target.getAttribute("data-color");
        e && b(this, st, Wc).call(this, e, t);
    }
    _moveToNext(t) {
        var e, s;
        if (!n(this, st, di)) {
            b(this, st, Yi).call(this, t);
            return;
        }
        if (t.target === n(this, ts)) {
            (e = n(this, Tt).firstChild) == null || e.focus();
            return;
        }
        (s = t.target.nextSibling) == null || s.focus();
    }
    _moveToPrevious(t) {
        var e, s;
        if (t.target === ((e = n(this, Tt)) == null ? void 0 : e.firstChild) || t.target === n(this, ts)) {
            n(this, st, di) && this._hideDropdownFromKeyboard();
            return;
        }
        n(this, st, di) || b(this, st, Yi).call(this, t), (s = t.target.previousSibling) == null || s.focus();
    }
    _moveToBeginning(t) {
        var e;
        if (!n(this, st, di)) {
            b(this, st, Yi).call(this, t);
            return;
        }
        (e = n(this, Tt).firstChild) == null || e.focus();
    }
    _moveToEnd(t) {
        var e;
        if (!n(this, st, di)) {
            b(this, st, Yi).call(this, t);
            return;
        }
        (e = n(this, Tt).lastChild) == null || e.focus();
    }
    hideDropdown() {
        var t, e;
        (t = n(this, Tt)) == null || t.classList.add("hidden"), (e = n(this, Di)) == null || e.abort(), f(this, Di, null);
    }
    _hideDropdownFromKeyboard() {
        var t;
        if (!n(this, ca)) {
            if (!n(this, st, di)) {
                (t = n(this, gl)) == null || t.unselect();
                return;
            }
            this.hideDropdown(), n(this, ts).focus({ preventScroll: !0, focusVisible: n(this, pl) });
        }
    }
    updateColor(t) {
        if ((n(this, Vn) && (n(this, Vn).style.backgroundColor = t), !n(this, Tt))) return;
        const e = n(this, es).highlightColors.values();
        for (const s of n(this, Tt).children) s.setAttribute("aria-selected", e.next().value === t);
    }
    destroy() {
        var t, e;
        (t = n(this, ts)) == null || t.remove(), f(this, ts, null), f(this, Vn, null), (e = n(this, Tt)) == null || e.remove(), f(this, Tt, null);
    }
};
(ts = new WeakMap()),
    (Vn = new WeakMap()),
    (ha = new WeakMap()),
    (Tt = new WeakMap()),
    (pl = new WeakMap()),
    (ca = new WeakMap()),
    (gl = new WeakMap()),
    (ml = new WeakMap()),
    (Di = new WeakMap()),
    (es = new WeakMap()),
    (da = new WeakMap()),
    (bl = new WeakMap()),
    (st = new WeakSet()),
    (jc = function () {
        const t = document.createElement("div"),
            e = n(this, es)._signal;
        t.addEventListener("contextmenu", rs, { signal: e }),
            (t.className = "dropdown"),
            (t.role = "listbox"),
            t.setAttribute("aria-multiselectable", !1),
            t.setAttribute("aria-orientation", "vertical"),
            t.setAttribute("data-l10n-id", "pdfjs-editor-colorpicker-dropdown");
        for (const [s, i] of n(this, es).highlightColors) {
            const r = document.createElement("button");
            (r.tabIndex = "0"), (r.role = "option"), r.setAttribute("data-color", i), (r.title = s), r.setAttribute("data-l10n-id", n(ce, bl)[s]);
            const a = document.createElement("span");
            r.append(a), (a.className = "swatch"), (a.style.backgroundColor = i), r.setAttribute("aria-selected", i === n(this, ha)), r.addEventListener("click", b(this, st, Wc).bind(this, i), { signal: e }), t.append(r);
        }
        return t.addEventListener("keydown", b(this, st, Xc).bind(this), { signal: e }), t;
    }),
    (Wc = function (t, e) {
        e.stopPropagation(), n(this, ml).dispatch("switchannotationeditorparams", { source: this, type: n(this, da), value: t });
    }),
    (Xc = function (t) {
        ce._keyboardManager.exec(this, t);
    }),
    (Yi = function (t) {
        if (n(this, st, di)) {
            this.hideDropdown();
            return;
        }
        if ((f(this, pl, t.detail === 0), n(this, Di) || (f(this, Di, new AbortController()), window.addEventListener("pointerdown", b(this, st, Pf).bind(this), { signal: n(this, es).combinedSignal(n(this, Di)) })), n(this, Tt))) {
            n(this, Tt).classList.remove("hidden");
            return;
        }
        const e = f(this, Tt, b(this, st, jc).call(this));
        n(this, ts).append(e);
    }),
    (Pf = function (t) {
        var e;
        ((e = n(this, Tt)) != null && e.contains(t.target)) || this.hideDropdown();
    }),
    (di = function () {
        return n(this, Tt) && !n(this, Tt).classList.contains("hidden");
    }),
    m(ce, bl, null);
let fh = ce;
var ua, Al, ti, jn, fa, fe, yl, wl, Wn, Oe, Ee, Ot, pa, ei, Xt, ga, He, vl, z, qc, th, Mf, kf, Lf, Yc, Ki, ze, mr, If, eh, Ua, Df, Ff, Nf, Of, Hf;
const J = class J extends pt {
    constructor(e) {
        super({ ...e, name: "highlightEditor" });
        m(this, z);
        m(this, ua, null);
        m(this, Al, 0);
        m(this, ti);
        m(this, jn, null);
        m(this, fa, null);
        m(this, fe, null);
        m(this, yl, null);
        m(this, wl, 0);
        m(this, Wn, null);
        m(this, Oe, null);
        m(this, Ee, null);
        m(this, Ot, !1);
        m(this, pa, null);
        m(this, ei);
        m(this, Xt, null);
        m(this, ga, "");
        m(this, He);
        m(this, vl, "");
        (this.color = e.color || J._defaultColor),
            f(this, He, e.thickness || J._defaultThickness),
            f(this, ei, e.opacity || J._defaultOpacity),
            f(this, ti, e.boxes || null),
            f(this, vl, e.methodOfCreation || ""),
            f(this, ga, e.text || ""),
            (this._isDraggable = !1),
            e.highlightId > -1
                ? (f(this, Ot, !0), b(this, z, th).call(this, e), b(this, z, Ki).call(this))
                : n(this, ti) && (f(this, ua, e.anchorNode), f(this, Al, e.anchorOffset), f(this, yl, e.focusNode), f(this, wl, e.focusOffset), b(this, z, qc).call(this), b(this, z, Ki).call(this), this.rotate(this.rotation));
    }
    static get _keyboardManager() {
        const e = J.prototype;
        return q(
            this,
            "_keyboardManager",
            new Cl([
                [["ArrowLeft", "mac+ArrowLeft"], e._moveCaret, { args: [0] }],
                [["ArrowRight", "mac+ArrowRight"], e._moveCaret, { args: [1] }],
                [["ArrowUp", "mac+ArrowUp"], e._moveCaret, { args: [2] }],
                [["ArrowDown", "mac+ArrowDown"], e._moveCaret, { args: [3] }],
            ])
        );
    }
    get telemetryInitialData() {
        return { action: "added", type: n(this, Ot) ? "free_highlight" : "highlight", color: this._uiManager.highlightColorNames.get(this.color), thickness: n(this, He), methodOfCreation: n(this, vl) };
    }
    get telemetryFinalData() {
        return { type: "highlight", color: this._uiManager.highlightColorNames.get(this.color) };
    }
    static computeTelemetryFinalData(e) {
        return { numberOfColors: e.get("color").size };
    }
    static initialize(e, s) {
        var i;
        pt.initialize(e, s), J._defaultColor || (J._defaultColor = ((i = s.highlightColors) == null ? void 0 : i.values().next().value) || "#fff066");
    }
    static updateDefaultParams(e, s) {
        switch (e) {
            case Y.HIGHLIGHT_DEFAULT_COLOR:
                J._defaultColor = s;
                break;
            case Y.HIGHLIGHT_THICKNESS:
                J._defaultThickness = s;
                break;
        }
    }
    translateInPage(e, s) {}
    get toolbarPosition() {
        return n(this, pa);
    }
    updateParams(e, s) {
        switch (e) {
            case Y.HIGHLIGHT_COLOR:
                b(this, z, Mf).call(this, s);
                break;
            case Y.HIGHLIGHT_THICKNESS:
                b(this, z, kf).call(this, s);
                break;
        }
    }
    static get defaultPropertiesToUpdate() {
        return [
            [Y.HIGHLIGHT_DEFAULT_COLOR, J._defaultColor],
            [Y.HIGHLIGHT_THICKNESS, J._defaultThickness],
        ];
    }
    get propertiesToUpdate() {
        return [
            [Y.HIGHLIGHT_COLOR, this.color || J._defaultColor],
            [Y.HIGHLIGHT_THICKNESS, n(this, He) || J._defaultThickness],
            [Y.HIGHLIGHT_FREE, n(this, Ot)],
        ];
    }
    async addEditToolbar() {
        const e = await super.addEditToolbar();
        return e ? (this._uiManager.highlightColors && (f(this, fa, new fh({ editor: this })), e.addColorPicker(n(this, fa))), e) : null;
    }
    disableEditing() {
        super.disableEditing(), this.div.classList.toggle("disabled", !0);
    }
    enableEditing() {
        super.enableEditing(), this.div.classList.toggle("disabled", !1);
    }
    fixAndSetPosition() {
        return super.fixAndSetPosition(b(this, z, Ua).call(this));
    }
    getBaseTranslation() {
        return [0, 0];
    }
    getRect(e, s) {
        return super.getRect(e, s, b(this, z, Ua).call(this));
    }
    onceAdded(e) {
        this.annotationElementId || this.parent.addUndoableEditor(this), e && this.div.focus();
    }
    remove() {
        b(this, z, Yc).call(this), this._reportTelemetry({ action: "deleted" }), super.remove();
    }
    rebuild() {
        this.parent && (super.rebuild(), this.div !== null && (b(this, z, Ki).call(this), this.isAttachedToDOM || this.parent.add(this)));
    }
    setParent(e) {
        var i;
        let s = !1;
        this.parent && !e ? b(this, z, Yc).call(this) : e && (b(this, z, Ki).call(this, e), (s = !this.parent && ((i = this.div) == null ? void 0 : i.classList.contains("selectedEditor")))),
            super.setParent(e),
            this.show(this._isVisible),
            s && this.select();
    }
    rotate(e) {
        var r, a, o;
        const { drawLayer: s } = this.parent;
        let i;
        n(this, Ot) ? ((e = (e - this.rotation + 360) % 360), (i = b((r = J), ze, mr).call(r, n(this, Oe).box, e))) : (i = b((a = J), ze, mr).call(a, [this.x, this.y, this.width, this.height], e)),
            s.updateProperties(n(this, Ee), { bbox: i, root: { "data-main-rotation": e } }),
            s.updateProperties(n(this, Xt), { bbox: b((o = J), ze, mr).call(o, n(this, fe).box, e), root: { "data-main-rotation": e } });
    }
    render() {
        if (this.div) return this.div;
        const e = super.render();
        n(this, ga) && (e.setAttribute("aria-label", n(this, ga)), e.setAttribute("role", "mark")),
            n(this, Ot) ? e.classList.add("free") : this.div.addEventListener("keydown", b(this, z, If).bind(this), { signal: this._uiManager._signal });
        const s = f(this, Wn, document.createElement("div"));
        e.append(s), s.setAttribute("aria-hidden", "true"), (s.className = "internal"), (s.style.clipPath = n(this, jn));
        const [i, r] = this.parentDimensions;
        return this.setDims(this.width * i, this.height * r), hh(this, n(this, Wn), ["pointerover", "pointerleave"]), this.enableEditing(), e;
    }
    pointerover() {
        var e;
        this.isSelected || (e = this.parent) == null || e.drawLayer.updateProperties(n(this, Xt), { rootClass: { hovered: !0 } });
    }
    pointerleave() {
        var e;
        this.isSelected || (e = this.parent) == null || e.drawLayer.updateProperties(n(this, Xt), { rootClass: { hovered: !1 } });
    }
    _moveCaret(e) {
        switch ((this.parent.unselect(this), e)) {
            case 0:
            case 2:
                b(this, z, eh).call(this, !0);
                break;
            case 1:
            case 3:
                b(this, z, eh).call(this, !1);
                break;
        }
    }
    select() {
        var e;
        super.select(), n(this, Xt) && ((e = this.parent) == null || e.drawLayer.updateProperties(n(this, Xt), { rootClass: { hovered: !1, selected: !0 } }));
    }
    unselect() {
        var e;
        super.unselect(), n(this, Xt) && ((e = this.parent) == null || e.drawLayer.updateProperties(n(this, Xt), { rootClass: { selected: !1 } }), n(this, Ot) || b(this, z, eh).call(this, !1));
    }
    get _mustFixPosition() {
        return !n(this, Ot);
    }
    show(e = this._isVisible) {
        super.show(e), this.parent && (this.parent.drawLayer.updateProperties(n(this, Ee), { rootClass: { hidden: !e } }), this.parent.drawLayer.updateProperties(n(this, Xt), { rootClass: { hidden: !e } }));
    }
    static startHighlighting(e, s, { target: i, x: r, y: a }) {
        const { x: o, y: l, width: h, height: c } = i.getBoundingClientRect(),
            u = new AbortController(),
            p = e.combinedSignal(u),
            g = (A) => {
                u.abort(), b(this, ze, Of).call(this, e, A);
            };
        window.addEventListener("blur", g, { signal: p }),
            window.addEventListener("pointerup", g, { signal: p }),
            window.addEventListener("pointerdown", Me, { capture: !0, passive: !1, signal: p }),
            window.addEventListener("contextmenu", rs, { signal: p }),
            i.addEventListener("pointermove", b(this, ze, Nf).bind(this, e), { signal: p }),
            (this._freeHighlight = new Vc({ x: r, y: a }, [o, l, h, c], e.scale, this._defaultThickness / 2, s, 0.001)),
            ({ id: this._freeHighlightId, clipPathId: this._freeHighlightClipId } = e.drawLayer.draw(
                { bbox: [0, 0, 1, 1], root: { viewBox: "0 0 1 1", fill: this._defaultColor, "fill-opacity": this._defaultOpacity }, rootClass: { highlight: !0, free: !0 }, path: { d: this._freeHighlight.toSVGPath() } },
                !0,
                !0
            ));
    }
    static async deserialize(e, s, i) {
        var y, v, w, _;
        let r = null;
        if (e instanceof cf) {
            const {
                data: { quadPoints: E, rect: S, rotation: x, id: T, color: C, opacity: k, popupRef: N },
                parent: {
                    page: { pageNumber: W },
                },
            } = e;
            r = e = { annotationType: U.HIGHLIGHT, color: Array.from(C), opacity: k, quadPoints: E, boxes: null, pageIndex: W - 1, rect: S.slice(0), rotation: x, id: T, deleted: !1, popupRef: N };
        } else if (e instanceof wd) {
            const {
                data: {
                    inkLists: E,
                    rect: S,
                    rotation: x,
                    id: T,
                    color: C,
                    borderStyle: { rawWidth: k },
                    popupRef: N,
                },
                parent: {
                    page: { pageNumber: W },
                },
            } = e;
            r = e = { annotationType: U.HIGHLIGHT, color: Array.from(C), thickness: k, inkLists: E, boxes: null, pageIndex: W - 1, rect: S.slice(0), rotation: x, id: T, deleted: !1, popupRef: N };
        }
        const { color: a, quadPoints: o, inkLists: l, opacity: h } = e,
            c = await super.deserialize(e, s, i);
        (c.color = F.makeHexColor(...a)), f(c, ei, h || 1), l && f(c, He, e.thickness), (c.annotationElementId = e.id || null), (c._initialData = r);
        const [u, p] = c.pageDimensions,
            [g, A] = c.pageTranslation;
        if (o) {
            const E = f(c, ti, []);
            for (let S = 0; S < o.length; S += 8) E.push({ x: (o[S] - g) / u, y: 1 - (o[S + 1] - A) / p, width: (o[S + 2] - o[S]) / u, height: (o[S + 1] - o[S + 5]) / p });
            b((y = c), z, qc).call(y), b((v = c), z, Ki).call(v), c.rotate(c.rotation);
        } else if (l) {
            f(c, Ot, !0);
            const E = l[0],
                S = { x: E[0] - g, y: p - (E[1] - A) },
                x = new Vc(S, [0, 0, u, p], 1, n(c, He) / 2, !0, 0.001);
            for (let k = 0, N = E.length; k < N; k += 2) (S.x = E[k] - g), (S.y = p - (E[k + 1] - A)), x.add(S);
            const { id: T, clipPathId: C } = s.drawLayer.draw(
                { bbox: [0, 0, 1, 1], root: { viewBox: "0 0 1 1", fill: c.color, "fill-opacity": c._defaultOpacity }, rootClass: { highlight: !0, free: !0 }, path: { d: x.toSVGPath() } },
                !0,
                !0
            );
            b((w = c), z, th).call(w, { highlightOutlines: x.getOutlines(), highlightId: T, clipPathId: C }), b((_ = c), z, Ki).call(_);
        }
        return c;
    }
    serialize(e = !1) {
        if (this.isEmpty() || e) return null;
        if (this.deleted) return this.serializeDeleted();
        const s = this.getRect(0, 0),
            i = pt._colorManager.convert(this.color),
            r = {
                annotationType: U.HIGHLIGHT,
                color: i,
                opacity: n(this, ei),
                thickness: n(this, He),
                quadPoints: b(this, z, Df).call(this),
                outlines: b(this, z, Ff).call(this, s),
                pageIndex: this.pageIndex,
                rect: s,
                rotation: b(this, z, Ua).call(this),
                structTreeParentId: this._structTreeParentId,
            };
        return this.annotationElementId && !b(this, z, Hf).call(this, r) ? null : ((r.id = this.annotationElementId), r);
    }
    renderAnnotationElement(e) {
        return e.updateEdited({ rect: this.getRect(0, 0) }), null;
    }
    static canCreateNewEmptyEditor() {
        return !1;
    }
};
(ua = new WeakMap()),
    (Al = new WeakMap()),
    (ti = new WeakMap()),
    (jn = new WeakMap()),
    (fa = new WeakMap()),
    (fe = new WeakMap()),
    (yl = new WeakMap()),
    (wl = new WeakMap()),
    (Wn = new WeakMap()),
    (Oe = new WeakMap()),
    (Ee = new WeakMap()),
    (Ot = new WeakMap()),
    (pa = new WeakMap()),
    (ei = new WeakMap()),
    (Xt = new WeakMap()),
    (ga = new WeakMap()),
    (He = new WeakMap()),
    (vl = new WeakMap()),
    (z = new WeakSet()),
    (qc = function () {
        const e = new zc(n(this, ti), 0.001);
        f(this, Oe, e.getOutlines()), ([this.x, this.y, this.width, this.height] = n(this, Oe).box);
        const s = new zc(n(this, ti), 0.0025, 0.001, this._uiManager.direction === "ltr");
        f(this, fe, s.getOutlines());
        const { lastPoint: i } = n(this, fe);
        f(this, pa, [(i[0] - this.x) / this.width, (i[1] - this.y) / this.height]);
    }),
    (th = function ({ highlightOutlines: e, highlightId: s, clipPathId: i }) {
        var u, p;
        if ((f(this, Oe, e), f(this, fe, e.getNewOutline(n(this, He) / 2 + 1.5, 0.0025)), s >= 0))
            f(this, Ee, s),
                f(this, jn, i),
                this.parent.drawLayer.finalizeDraw(s, { bbox: e.box, path: { d: e.toSVGPath() } }),
                f(this, Xt, this.parent.drawLayer.drawOutline({ rootClass: { highlightOutline: !0, free: !0 }, bbox: n(this, fe).box, path: { d: n(this, fe).toSVGPath() } }, !0));
        else if (this.parent) {
            const g = this.parent.viewport.rotation;
            this.parent.drawLayer.updateProperties(n(this, Ee), { bbox: b((u = J), ze, mr).call(u, n(this, Oe).box, (g - this.rotation + 360) % 360), path: { d: e.toSVGPath() } }),
                this.parent.drawLayer.updateProperties(n(this, Xt), { bbox: b((p = J), ze, mr).call(p, n(this, fe).box, g), path: { d: n(this, fe).toSVGPath() } });
        }
        const [a, o, l, h] = e.box;
        switch (this.rotation) {
            case 0:
                (this.x = a), (this.y = o), (this.width = l), (this.height = h);
                break;
            case 90: {
                const [g, A] = this.parentDimensions;
                (this.x = o), (this.y = 1 - a), (this.width = (l * A) / g), (this.height = (h * g) / A);
                break;
            }
            case 180:
                (this.x = 1 - a), (this.y = 1 - o), (this.width = l), (this.height = h);
                break;
            case 270: {
                const [g, A] = this.parentDimensions;
                (this.x = 1 - o), (this.y = a), (this.width = (l * A) / g), (this.height = (h * g) / A);
                break;
            }
        }
        const { lastPoint: c } = n(this, fe);
        f(this, pa, [(c[0] - a) / l, (c[1] - o) / h]);
    }),
    (Mf = function (e) {
        const s = (a, o) => {
                var l, h;
                (this.color = a), f(this, ei, o), (l = this.parent) == null || l.drawLayer.updateProperties(n(this, Ee), { root: { fill: a, "fill-opacity": o } }), (h = n(this, fa)) == null || h.updateColor(a);
            },
            i = this.color,
            r = n(this, ei);
        this.addCommands({ cmd: s.bind(this, e, J._defaultOpacity), undo: s.bind(this, i, r), post: this._uiManager.updateUI.bind(this._uiManager, this), mustExec: !0, type: Y.HIGHLIGHT_COLOR, overwriteIfSameType: !0, keepUndo: !0 }),
            this._reportTelemetry({ action: "color_changed", color: this._uiManager.highlightColorNames.get(e) }, !0);
    }),
    (kf = function (e) {
        const s = n(this, He),
            i = (r) => {
                f(this, He, r), b(this, z, Lf).call(this, r);
            };
        this.addCommands({ cmd: i.bind(this, e), undo: i.bind(this, s), post: this._uiManager.updateUI.bind(this._uiManager, this), mustExec: !0, type: Y.INK_THICKNESS, overwriteIfSameType: !0, keepUndo: !0 }),
            this._reportTelemetry({ action: "thickness_changed", thickness: e }, !0);
    }),
    (Lf = function (e) {
        if (!n(this, Ot)) return;
        b(this, z, th).call(this, { highlightOutlines: n(this, Oe).getNewOutline(e / 2) }), this.fixAndSetPosition();
        const [s, i] = this.parentDimensions;
        this.setDims(this.width * s, this.height * i);
    }),
    (Yc = function () {
        n(this, Ee) === null || !this.parent || (this.parent.drawLayer.remove(n(this, Ee)), f(this, Ee, null), this.parent.drawLayer.remove(n(this, Xt)), f(this, Xt, null));
    }),
    (Ki = function (e = this.parent) {
        n(this, Ee) === null &&
            (({ id: Jt(this, Ee)._, clipPathId: Jt(this, jn)._ } = e.drawLayer.draw(
                { bbox: n(this, Oe).box, root: { viewBox: "0 0 1 1", fill: this.color, "fill-opacity": n(this, ei) }, rootClass: { highlight: !0, free: n(this, Ot) }, path: { d: n(this, Oe).toSVGPath() } },
                !1,
                !0
            )),
            f(this, Xt, e.drawLayer.drawOutline({ rootClass: { highlightOutline: !0, free: n(this, Ot) }, bbox: n(this, fe).box, path: { d: n(this, fe).toSVGPath() } }, n(this, Ot))),
            n(this, Wn) && (n(this, Wn).style.clipPath = n(this, jn)));
    }),
    (ze = new WeakSet()),
    (mr = function ([e, s, i, r], a) {
        switch (a) {
            case 90:
                return [1 - s - r, e, r, i];
            case 180:
                return [1 - e - i, 1 - s - r, i, r];
            case 270:
                return [s, 1 - e - i, r, i];
        }
        return [e, s, i, r];
    }),
    (If = function (e) {
        J._keyboardManager.exec(this, e);
    }),
    (eh = function (e) {
        if (!n(this, ua)) return;
        const s = window.getSelection();
        e ? s.setPosition(n(this, ua), n(this, Al)) : s.setPosition(n(this, yl), n(this, wl));
    }),
    (Ua = function () {
        return n(this, Ot) ? this.rotation : 0;
    }),
    (Df = function () {
        if (n(this, Ot)) return null;
        const [e, s] = this.pageDimensions,
            [i, r] = this.pageTranslation,
            a = n(this, ti),
            o = new Float32Array(a.length * 8);
        let l = 0;
        for (const { x: h, y: c, width: u, height: p } of a) {
            const g = h * e + i,
                A = (1 - c) * s + r;
            (o[l] = o[l + 4] = g), (o[l + 1] = o[l + 3] = A), (o[l + 2] = o[l + 6] = g + u * e), (o[l + 5] = o[l + 7] = A - p * s), (l += 8);
        }
        return o;
    }),
    (Ff = function (e) {
        return n(this, Oe).serialize(e, b(this, z, Ua).call(this));
    }),
    (Nf = function (e, s) {
        this._freeHighlight.add(s) && e.drawLayer.updateProperties(this._freeHighlightId, { path: { d: this._freeHighlight.toSVGPath() } });
    }),
    (Of = function (e, s) {
        this._freeHighlight.isEmpty()
            ? e.drawLayer.remove(this._freeHighlightId)
            : e.createAndAddNewEditor(s, !1, { highlightId: this._freeHighlightId, highlightOutlines: this._freeHighlight.getOutlines(), clipPathId: this._freeHighlightClipId, methodOfCreation: "main_toolbar" }),
            (this._freeHighlightId = -1),
            (this._freeHighlight = null),
            (this._freeHighlightClipId = "");
    }),
    (Hf = function (e) {
        const { color: s } = this._initialData;
        return e.color.some((i, r) => i !== s[r]);
    }),
    m(J, ze),
    O(J, "_defaultColor", null),
    O(J, "_defaultOpacity", 1),
    O(J, "_defaultThickness", 12),
    O(J, "_type", "highlight"),
    O(J, "_editorType", U.HIGHLIGHT),
    O(J, "_freeHighlightId", -1),
    O(J, "_freeHighlight", null),
    O(J, "_freeHighlightClipId", "");
let ph = J;
var Xn;
class qg {
    constructor() {
        m(this, Xn, Object.create(null));
    }
    updateProperty(t, e) {
        (this[t] = e), this.updateSVGProperty(t, e);
    }
    updateProperties(t) {
        if (t) for (const [e, s] of Object.entries(t)) this.updateProperty(e, s);
    }
    updateSVGProperty(t, e) {
        n(this, Xn)[t] = e;
    }
    toSVGProperties() {
        const t = n(this, Xn);
        return f(this, Xn, Object.create(null)), { root: t };
    }
    reset() {
        f(this, Xn, Object.create(null));
    }
    updateAll(t = this) {
        this.updateProperties(t);
    }
    clone() {
        nt("Not implemented");
    }
}
Xn = new WeakMap();
var xe, ma, Lt, qn, Yn, Fi, Ni, Oi, Kn, K, Qc, Jc, Zc, Va, Bf, sh, ja, br;
const L = class L extends pt {
    constructor(e) {
        super(e);
        m(this, K);
        m(this, xe, null);
        m(this, ma);
        O(this, "_drawId", null);
        f(this, ma, e.mustBeCommitted || !1), e.drawOutlines && (b(this, K, Qc).call(this, e), b(this, K, Va).call(this));
    }
    static _mergeSVGProperties(e, s) {
        const i = new Set(Object.keys(e));
        for (const [r, a] of Object.entries(s)) i.has(r) ? Object.assign(e[r], a) : (e[r] = a);
        return e;
    }
    static getDefaultDrawingOptions(e) {
        nt("Not implemented");
    }
    static get typesMap() {
        nt("Not implemented");
    }
    static get isDrawer() {
        return !0;
    }
    static get supportMultipleDrawings() {
        return !1;
    }
    static updateDefaultParams(e, s) {
        const i = this.typesMap.get(e);
        i && this._defaultDrawingOptions.updateProperty(i, s), this._currentParent && (n(L, Lt).updateProperty(i, s), this._currentParent.drawLayer.updateProperties(this._currentDrawId, this._defaultDrawingOptions.toSVGProperties()));
    }
    updateParams(e, s) {
        const i = this.constructor.typesMap.get(e);
        i && this._updateProperty(e, i, s);
    }
    static get defaultPropertiesToUpdate() {
        const e = [],
            s = this._defaultDrawingOptions;
        for (const [i, r] of this.typesMap) e.push([i, s[r]]);
        return e;
    }
    get propertiesToUpdate() {
        const e = [],
            { _drawingOptions: s } = this;
        for (const [i, r] of this.constructor.typesMap) e.push([i, s[r]]);
        return e;
    }
    _updateProperty(e, s, i) {
        const r = this._drawingOptions,
            a = r[s],
            o = (l) => {
                var c;
                r.updateProperty(s, l);
                const h = n(this, xe).updateProperty(s, l);
                h && b(this, K, ja).call(this, h), (c = this.parent) == null || c.drawLayer.updateProperties(this._drawId, r.toSVGProperties());
            };
        this.addCommands({ cmd: o.bind(this, i), undo: o.bind(this, a), post: this._uiManager.updateUI.bind(this._uiManager, this), mustExec: !0, type: e, overwriteIfSameType: !0, keepUndo: !0 });
    }
    _onResizing() {
        var e;
        (e = this.parent) == null || e.drawLayer.updateProperties(this._drawId, L._mergeSVGProperties(n(this, xe).getPathResizingSVGProperties(b(this, K, sh).call(this)), { bbox: b(this, K, br).call(this) }));
    }
    _onResized() {
        var e;
        (e = this.parent) == null || e.drawLayer.updateProperties(this._drawId, L._mergeSVGProperties(n(this, xe).getPathResizedSVGProperties(b(this, K, sh).call(this)), { bbox: b(this, K, br).call(this) }));
    }
    _onTranslating(e, s) {
        var i;
        (i = this.parent) == null || i.drawLayer.updateProperties(this._drawId, { bbox: b(this, K, br).call(this, e, s) });
    }
    _onTranslated() {
        var e;
        (e = this.parent) == null || e.drawLayer.updateProperties(this._drawId, L._mergeSVGProperties(n(this, xe).getPathTranslatedSVGProperties(b(this, K, sh).call(this), this.parentDimensions), { bbox: b(this, K, br).call(this) }));
    }
    _onStartDragging() {
        var e;
        (e = this.parent) == null || e.drawLayer.updateProperties(this._drawId, { rootClass: { moving: !0 } });
    }
    _onStopDragging() {
        var e;
        (e = this.parent) == null || e.drawLayer.updateProperties(this._drawId, { rootClass: { moving: !1 } });
    }
    commit() {
        super.commit(), this.disableEditMode(), this.disableEditing();
    }
    disableEditing() {
        super.disableEditing(), this.div.classList.toggle("disabled", !0);
    }
    enableEditing() {
        super.enableEditing(), this.div.classList.toggle("disabled", !1);
    }
    getBaseTranslation() {
        return [0, 0];
    }
    get isResizable() {
        return !0;
    }
    onceAdded(e) {
        this.annotationElementId || this.parent.addUndoableEditor(this), (this._isDraggable = !0), n(this, ma) && (f(this, ma, !1), this.commit(), this.parent.setSelected(this), e && this.isOnScreen && this.div.focus());
    }
    remove() {
        b(this, K, Zc).call(this), super.remove();
    }
    rebuild() {
        this.parent && (super.rebuild(), this.div !== null && (b(this, K, Va).call(this), b(this, K, ja).call(this, n(this, xe).box), this.isAttachedToDOM || this.parent.add(this)));
    }
    setParent(e) {
        var i;
        let s = !1;
        this.parent && !e
            ? (this._uiManager.removeShouldRescale(this), b(this, K, Zc).call(this))
            : e && (this._uiManager.addShouldRescale(this), b(this, K, Va).call(this, e), (s = !this.parent && ((i = this.div) == null ? void 0 : i.classList.contains("selectedEditor")))),
            super.setParent(e),
            s && this.select();
    }
    rotate() {
        this.parent && this.parent.drawLayer.updateProperties(this._drawId, L._mergeSVGProperties({ bbox: b(this, K, br).call(this) }, n(this, xe).updateRotation((this.parentRotation - this.rotation + 360) % 360)));
    }
    onScaleChanging() {
        this.parent && b(this, K, ja).call(this, n(this, xe).updateParentDimensions(this.parentDimensions, this.parent.scale));
    }
    static onScaleChangingWhenDrawing() {}
    render() {
        if (this.div) return this.div;
        const e = super.render();
        e.classList.add("draw");
        const s = document.createElement("div");
        e.append(s), s.setAttribute("aria-hidden", "true"), (s.className = "internal");
        const [i, r] = this.parentDimensions;
        return this.setDims(this.width * i, this.height * r), this._uiManager.addShouldRescale(this), this.disableEditing(), e;
    }
    static createDrawerInstance(e, s, i, r, a) {
        nt("Not implemented");
    }
    static startDrawing(e, s, i, r) {
        var v;
        const { target: a, offsetX: o, offsetY: l, pointerId: h, pointerType: c } = r;
        if (n(L, Ni) && n(L, Ni) !== c) return;
        const {
                viewport: { rotation: u },
            } = e,
            { width: p, height: g } = a.getBoundingClientRect(),
            A = f(L, qn, new AbortController()),
            y = e.combinedSignal(A);
        if (
            (n(L, Fi) || f(L, Fi, h),
            n(L, Ni) ?? f(L, Ni, c),
            window.addEventListener(
                "pointerup",
                (w) => {
                    var _;
                    n(L, Fi) === w.pointerId ? this._endDraw(w) : (_ = n(L, Oi)) == null || _.delete(w.pointerId);
                },
                { signal: y }
            ),
            window.addEventListener(
                "pointercancel",
                (w) => {
                    var _;
                    n(L, Fi) === w.pointerId ? this._currentParent.endDrawingSession() : (_ = n(L, Oi)) == null || _.delete(w.pointerId);
                },
                { signal: y }
            ),
            window.addEventListener(
                "pointerdown",
                (w) => {
                    n(L, Ni) === w.pointerType &&
                        ((n(L, Oi) || f(L, Oi, new Set())).add(w.pointerId), n(L, Lt).isCancellable() && (n(L, Lt).removeLastElement(), n(L, Lt).isEmpty() ? this._currentParent.endDrawingSession(!0) : this._endDraw(null)));
                },
                { capture: !0, passive: !1, signal: y }
            ),
            window.addEventListener("contextmenu", rs, { signal: y }),
            a.addEventListener("pointermove", this._drawMove.bind(this), { signal: y }),
            a.addEventListener(
                "touchmove",
                (w) => {
                    w.timeStamp === n(L, Kn) && Me(w);
                },
                { signal: y }
            ),
            e.toggleDrawing(),
            (v = s._editorUndoBar) == null || v.hide(),
            n(L, Lt))
        ) {
            e.drawLayer.updateProperties(this._currentDrawId, n(L, Lt).startNew(o, l, p, g, u));
            return;
        }
        s.updateUIForDefaultProperties(this),
            f(L, Lt, this.createDrawerInstance(o, l, p, g, u)),
            f(L, Yn, this.getDefaultDrawingOptions()),
            (this._currentParent = e),
            ({ id: this._currentDrawId } = e.drawLayer.draw(this._mergeSVGProperties(n(L, Yn).toSVGProperties(), n(L, Lt).defaultSVGProperties), !0, !1));
    }
    static _drawMove(e) {
        var a;
        if ((f(L, Kn, -1), !n(L, Lt))) return;
        const { offsetX: s, offsetY: i, pointerId: r } = e;
        if (n(L, Fi) === r) {
            if (((a = n(L, Oi)) == null ? void 0 : a.size) >= 1) {
                this._endDraw(e);
                return;
            }
            this._currentParent.drawLayer.updateProperties(this._currentDrawId, n(L, Lt).add(s, i)), f(L, Kn, e.timeStamp), Me(e);
        }
    }
    static _cleanup(e) {
        e && ((this._currentDrawId = -1), (this._currentParent = null), f(L, Lt, null), f(L, Yn, null), f(L, Ni, null), f(L, Kn, NaN)), n(L, qn) && (n(L, qn).abort(), f(L, qn, null), f(L, Fi, NaN), f(L, Oi, null));
    }
    static _endDraw(e) {
        const s = this._currentParent;
        if (s) {
            if ((s.toggleDrawing(!0), this._cleanup(!1), e && s.drawLayer.updateProperties(this._currentDrawId, n(L, Lt).end(e.offsetX, e.offsetY)), this.supportMultipleDrawings)) {
                const i = n(L, Lt),
                    r = this._currentDrawId,
                    a = i.getLastElement();
                s.addCommands({
                    cmd: () => {
                        s.drawLayer.updateProperties(r, i.setLastElement(a));
                    },
                    undo: () => {
                        s.drawLayer.updateProperties(r, i.removeLastElement());
                    },
                    mustExec: !1,
                    type: Y.DRAW_STEP,
                });
                return;
            }
            this.endDrawing(!1);
        }
    }
    static endDrawing(e) {
        const s = this._currentParent;
        if (!s) return null;
        if ((s.toggleDrawing(!0), s.cleanUndoStack(Y.DRAW_STEP), !n(L, Lt).isEmpty())) {
            const {
                    pageDimensions: [i, r],
                    scale: a,
                } = s,
                o = s.createAndAddNewEditor({ offsetX: 0, offsetY: 0 }, !1, { drawId: this._currentDrawId, drawOutlines: n(L, Lt).getOutlines(i * a, r * a, a, this._INNER_MARGIN), drawingOptions: n(L, Yn), mustBeCommitted: !e });
            return this._cleanup(!0), o;
        }
        return s.drawLayer.remove(this._currentDrawId), this._cleanup(!0), null;
    }
    createDrawingOptions(e) {}
    static deserializeDraw(e, s, i, r, a, o) {
        nt("Not implemented");
    }
    static async deserialize(e, s, i) {
        var u, p;
        const {
                rawDims: { pageWidth: r, pageHeight: a, pageX: o, pageY: l },
            } = s.viewport,
            h = this.deserializeDraw(o, l, r, a, this._INNER_MARGIN, e),
            c = await super.deserialize(e, s, i);
        return c.createDrawingOptions(e), b((u = c), K, Qc).call(u, { drawOutlines: h }), b((p = c), K, Va).call(p), c.onScaleChanging(), c.rotate(), c;
    }
    serializeDraw(e) {
        const [s, i] = this.pageTranslation,
            [r, a] = this.pageDimensions;
        return n(this, xe).serialize([s, i, r, a], e);
    }
    renderAnnotationElement(e) {
        return e.updateEdited({ rect: this.getRect(0, 0) }), null;
    }
    static canCreateNewEmptyEditor() {
        return !1;
    }
};
(xe = new WeakMap()),
    (ma = new WeakMap()),
    (Lt = new WeakMap()),
    (qn = new WeakMap()),
    (Yn = new WeakMap()),
    (Fi = new WeakMap()),
    (Ni = new WeakMap()),
    (Oi = new WeakMap()),
    (Kn = new WeakMap()),
    (K = new WeakSet()),
    (Qc = function ({ drawOutlines: e, drawId: s, drawingOptions: i }) {
        f(this, xe, e),
            this._drawingOptions || (this._drawingOptions = i),
            s >= 0 ? ((this._drawId = s), this.parent.drawLayer.finalizeDraw(s, e.defaultProperties)) : (this._drawId = b(this, K, Jc).call(this, e, this.parent)),
            b(this, K, ja).call(this, e.box);
    }),
    (Jc = function (e, s) {
        const { id: i } = s.drawLayer.draw(L._mergeSVGProperties(this._drawingOptions.toSVGProperties(), e.defaultSVGProperties), !1, !1);
        return i;
    }),
    (Zc = function () {
        this._drawId === null || !this.parent || (this.parent.drawLayer.remove(this._drawId), (this._drawId = null), this._drawingOptions.reset());
    }),
    (Va = function (e = this.parent) {
        if (!(this._drawId !== null && this.parent === e)) {
            if (this._drawId !== null) {
                this.parent.drawLayer.updateParent(this._drawId, e.drawLayer);
                return;
            }
            this._drawingOptions.updateAll(), (this._drawId = b(this, K, Jc).call(this, n(this, xe), e));
        }
    }),
    (Bf = function ([e, s, i, r]) {
        const {
            parentDimensions: [a, o],
            rotation: l,
        } = this;
        switch (l) {
            case 90:
                return [s, 1 - e, i * (o / a), r * (a / o)];
            case 180:
                return [1 - e, 1 - s, i, r];
            case 270:
                return [1 - s, e, i * (o / a), r * (a / o)];
            default:
                return [e, s, i, r];
        }
    }),
    (sh = function () {
        const {
            x: e,
            y: s,
            width: i,
            height: r,
            parentDimensions: [a, o],
            rotation: l,
        } = this;
        switch (l) {
            case 90:
                return [1 - s, e, i * (a / o), r * (o / a)];
            case 180:
                return [1 - e, 1 - s, i, r];
            case 270:
                return [s, 1 - e, i * (a / o), r * (o / a)];
            default:
                return [e, s, i, r];
        }
    }),
    (ja = function (e) {
        if ((([this.x, this.y, this.width, this.height] = b(this, K, Bf).call(this, e)), this.div)) {
            this.fixAndSetPosition();
            const [s, i] = this.parentDimensions;
            this.setDims(this.width * s, this.height * i);
        }
        this._onResized();
    }),
    (br = function () {
        const {
            x: e,
            y: s,
            width: i,
            height: r,
            rotation: a,
            parentRotation: o,
            parentDimensions: [l, h],
        } = this;
        switch ((a * 4 + o) / 90) {
            case 1:
                return [1 - s - r, e, r, i];
            case 2:
                return [1 - e - i, 1 - s - r, i, r];
            case 3:
                return [s, 1 - e - i, r, i];
            case 4:
                return [e, s - i * (l / h), r * (h / l), i * (l / h)];
            case 5:
                return [1 - s, e, i * (l / h), r * (h / l)];
            case 6:
                return [1 - e - r * (h / l), 1 - s, r * (h / l), i * (l / h)];
            case 7:
                return [s - i * (l / h), 1 - e - r * (h / l), i * (l / h), r * (h / l)];
            case 8:
                return [e - i, s - r, i, r];
            case 9:
                return [1 - s, e - i, r, i];
            case 10:
                return [1 - e, 1 - s, i, r];
            case 11:
                return [s - r, 1 - e, r, i];
            case 12:
                return [e - r * (h / l), s, r * (h / l), i * (l / h)];
            case 13:
                return [1 - s - i * (l / h), e - r * (h / l), i * (l / h), r * (h / l)];
            case 14:
                return [1 - e, 1 - s - i * (l / h), r * (h / l), i * (l / h)];
            case 15:
                return [s, 1 - e, i * (l / h), r * (h / l)];
            default:
                return [e, s, i, r];
        }
    }),
    O(L, "_currentDrawId", -1),
    O(L, "_currentParent", null),
    m(L, Lt, null),
    m(L, qn, null),
    m(L, Yn, null),
    m(L, Fi, NaN),
    m(L, Ni, null),
    m(L, Oi, null),
    m(L, Kn, NaN),
    O(L, "_INNER_MARGIN", 3);
let Kc = L;
var _s, It, Dt, Qn, ba, ee, Ht, Be, Jn, Zn, tr, Aa, ih;
class Yg {
    constructor(t, e, s, i, r, a) {
        m(this, Aa);
        m(this, _s, new Float64Array(6));
        m(this, It);
        m(this, Dt);
        m(this, Qn);
        m(this, ba);
        m(this, ee);
        m(this, Ht, "");
        m(this, Be, 0);
        m(this, Jn, new gh());
        m(this, Zn);
        m(this, tr);
        f(this, Zn, s), f(this, tr, i), f(this, Qn, r), f(this, ba, a), ([t, e] = b(this, Aa, ih).call(this, t, e));
        const o = f(this, It, [NaN, NaN, NaN, NaN, t, e]);
        f(this, ee, [t, e]), f(this, Dt, [{ line: o, points: n(this, ee) }]), n(this, _s).set(o, 0);
    }
    updateProperty(t, e) {
        t === "stroke-width" && f(this, ba, e);
    }
    isEmpty() {
        return !n(this, Dt) || n(this, Dt).length === 0;
    }
    isCancellable() {
        return n(this, ee).length <= 10;
    }
    add(t, e) {
        [t, e] = b(this, Aa, ih).call(this, t, e);
        const [s, i, r, a] = n(this, _s).subarray(2, 6),
            o = t - r,
            l = e - a;
        return Math.hypot(n(this, Zn) * o, n(this, tr) * l) <= 2
            ? null
            : (n(this, ee).push(t, e),
              isNaN(s)
                  ? (n(this, _s).set([r, a, t, e], 2), n(this, It).push(NaN, NaN, NaN, NaN, t, e), { path: { d: this.toSVGPath() } })
                  : (isNaN(n(this, _s)[0]) && n(this, It).splice(6, 6), n(this, _s).set([s, i, r, a, t, e], 0), n(this, It).push(...M.createBezierPoints(s, i, r, a, t, e)), { path: { d: this.toSVGPath() } }));
    }
    end(t, e) {
        const s = this.add(t, e);
        return s || (n(this, ee).length === 2 ? { path: { d: this.toSVGPath() } } : null);
    }
    startNew(t, e, s, i, r) {
        f(this, Zn, s), f(this, tr, i), f(this, Qn, r), ([t, e] = b(this, Aa, ih).call(this, t, e));
        const a = f(this, It, [NaN, NaN, NaN, NaN, t, e]);
        f(this, ee, [t, e]);
        const o = n(this, Dt).at(-1);
        return o && ((o.line = new Float32Array(o.line)), (o.points = new Float32Array(o.points))), n(this, Dt).push({ line: a, points: n(this, ee) }), n(this, _s).set(a, 0), f(this, Be, 0), this.toSVGPath(), null;
    }
    getLastElement() {
        return n(this, Dt).at(-1);
    }
    setLastElement(t) {
        return n(this, Dt) ? (n(this, Dt).push(t), f(this, It, t.line), f(this, ee, t.points), f(this, Be, 0), { path: { d: this.toSVGPath() } }) : n(this, Jn).setLastElement(t);
    }
    removeLastElement() {
        if (!n(this, Dt)) return n(this, Jn).removeLastElement();
        n(this, Dt).pop(), f(this, Ht, "");
        for (let t = 0, e = n(this, Dt).length; t < e; t++) {
            const { line: s, points: i } = n(this, Dt)[t];
            f(this, It, s), f(this, ee, i), f(this, Be, 0), this.toSVGPath();
        }
        return { path: { d: n(this, Ht) } };
    }
    toSVGPath() {
        const t = M.svgRound(n(this, It)[4]),
            e = M.svgRound(n(this, It)[5]);
        if (n(this, ee).length === 2) return f(this, Ht, `${n(this, Ht)} M ${t} ${e} Z`), n(this, Ht);
        if (n(this, ee).length <= 6) {
            const i = n(this, Ht).lastIndexOf("M");
            f(this, Ht, `${n(this, Ht).slice(0, i)} M ${t} ${e}`), f(this, Be, 6);
        }
        if (n(this, ee).length === 4) {
            const i = M.svgRound(n(this, It)[10]),
                r = M.svgRound(n(this, It)[11]);
            return f(this, Ht, `${n(this, Ht)} L ${i} ${r}`), f(this, Be, 12), n(this, Ht);
        }
        const s = [];
        n(this, Be) === 0 && (s.push(`M ${t} ${e}`), f(this, Be, 6));
        for (let i = n(this, Be), r = n(this, It).length; i < r; i += 6) {
            const [a, o, l, h, c, u] = n(this, It)
                .slice(i, i + 6)
                .map(M.svgRound);
            s.push(`C${a} ${o} ${l} ${h} ${c} ${u}`);
        }
        return f(this, Ht, n(this, Ht) + s.join(" ")), f(this, Be, n(this, It).length), n(this, Ht);
    }
    getOutlines(t, e, s, i) {
        const r = n(this, Dt).at(-1);
        return (
            (r.line = new Float32Array(r.line)),
            (r.points = new Float32Array(r.points)),
            n(this, Jn).build(n(this, Dt), t, e, s, n(this, Qn), n(this, ba), i),
            f(this, _s, null),
            f(this, It, null),
            f(this, Dt, null),
            f(this, Ht, null),
            n(this, Jn)
        );
    }
    get defaultSVGProperties() {
        return { root: { viewBox: "0 0 10000 10000" }, rootClass: { draw: !0 }, bbox: [0, 0, 1, 1] };
    }
}
(_s = new WeakMap()),
    (It = new WeakMap()),
    (Dt = new WeakMap()),
    (Qn = new WeakMap()),
    (ba = new WeakMap()),
    (ee = new WeakMap()),
    (Ht = new WeakMap()),
    (Be = new WeakMap()),
    (Jn = new WeakMap()),
    (Zn = new WeakMap()),
    (tr = new WeakMap()),
    (Aa = new WeakSet()),
    (ih = function (t, e) {
        return M._normalizePoint(t, e, n(this, Zn), n(this, tr), n(this, Qn));
    });
var se, _l, Sl, Ce, Ss, Es, ya, wa, va, $t, Ls, $f, Gf, zf;
const xd = class xd extends M {
    constructor() {
        super(...arguments);
        m(this, $t);
        m(this, se);
        m(this, _l, 0);
        m(this, Sl);
        m(this, Ce);
        m(this, Ss);
        m(this, Es);
        m(this, ya);
        m(this, wa);
        m(this, va);
    }
    build(e, s, i, r, a, o, l) {
        f(this, Ss, s), f(this, Es, i), f(this, ya, r), f(this, wa, a), f(this, va, o), f(this, Sl, l ?? 0), f(this, Ce, e), b(this, $t, Gf).call(this);
    }
    setLastElement(e) {
        return n(this, Ce).push(e), { path: { d: this.toSVGPath() } };
    }
    removeLastElement() {
        return n(this, Ce).pop(), { path: { d: this.toSVGPath() } };
    }
    toSVGPath() {
        const e = [];
        for (const { line: s } of n(this, Ce)) {
            if ((e.push(`M${M.svgRound(s[4])} ${M.svgRound(s[5])}`), s.length === 6)) {
                e.push("Z");
                continue;
            }
            if (s.length === 12) {
                e.push(`L${M.svgRound(s[10])} ${M.svgRound(s[11])}`);
                continue;
            }
            for (let i = 6, r = s.length; i < r; i += 6) {
                const [a, o, l, h, c, u] = s.subarray(i, i + 6).map(M.svgRound);
                e.push(`C${a} ${o} ${l} ${h} ${c} ${u}`);
            }
        }
        return e.join("");
    }
    serialize([e, s, i, r], a) {
        const o = [],
            l = [],
            [h, c, u, p] = b(this, $t, $f).call(this);
        let g, A, y, v, w, _, E, S, x;
        switch (n(this, wa)) {
            case 0:
                (x = M._rescale), (g = e), (A = s + r), (y = i), (v = -r), (w = e + h * i), (_ = s + (1 - c - p) * r), (E = e + (h + u) * i), (S = s + (1 - c) * r);
                break;
            case 90:
                (x = M._rescaleAndSwap), (g = e), (A = s), (y = i), (v = r), (w = e + c * i), (_ = s + h * r), (E = e + (c + p) * i), (S = s + (h + u) * r);
                break;
            case 180:
                (x = M._rescale), (g = e + i), (A = s), (y = -i), (v = r), (w = e + (1 - h - u) * i), (_ = s + c * r), (E = e + (1 - h) * i), (S = s + (c + p) * r);
                break;
            case 270:
                (x = M._rescaleAndSwap), (g = e + i), (A = s + r), (y = -i), (v = -r), (w = e + (1 - c - p) * i), (_ = s + (1 - h - u) * r), (E = e + (1 - c) * i), (S = s + (1 - h) * r);
                break;
        }
        for (const { line: T, points: C } of n(this, Ce)) o.push(x(T, g, A, y, v, a ? new Array(T.length) : null)), l.push(x(C, g, A, y, v, a ? new Array(C.length) : null));
        return { lines: o, points: l, rect: [w, _, E, S] };
    }
    static deserialize(e, s, i, r, a, { paths: { lines: o, points: l }, rotation: h, thickness: c }) {
        const u = [];
        let p, g, A, y, v;
        switch (h) {
            case 0:
                (v = M._rescale), (p = -e / i), (g = s / r + 1), (A = 1 / i), (y = -1 / r);
                break;
            case 90:
                (v = M._rescaleAndSwap), (p = -s / r), (g = -e / i), (A = 1 / r), (y = 1 / i);
                break;
            case 180:
                (v = M._rescale), (p = e / i + 1), (g = -s / r), (A = -1 / i), (y = 1 / r);
                break;
            case 270:
                (v = M._rescaleAndSwap), (p = s / r + 1), (g = e / i + 1), (A = -1 / r), (y = -1 / i);
                break;
        }
        if (!o) {
            o = [];
            for (const _ of l) {
                const E = _.length;
                if (E === 2) {
                    o.push(new Float32Array([NaN, NaN, NaN, NaN, _[0], _[1]]));
                    continue;
                }
                if (E === 4) {
                    o.push(new Float32Array([NaN, NaN, NaN, NaN, _[0], _[1], NaN, NaN, NaN, NaN, _[2], _[3]]));
                    continue;
                }
                const S = new Float32Array(3 * (E - 2));
                o.push(S);
                let [x, T, C, k] = _.subarray(0, 4);
                S.set([NaN, NaN, NaN, NaN, x, T], 0);
                for (let N = 4; N < E; N += 2) {
                    const W = _[N],
                        $ = _[N + 1];
                    S.set(M.createBezierPoints(x, T, C, k, W, $), (N - 2) * 3), ([x, T, C, k] = [C, k, W, $]);
                }
            }
        }
        for (let _ = 0, E = o.length; _ < E; _++)
            u.push({
                line: v(
                    o[_].map((S) => S ?? NaN),
                    p,
                    g,
                    A,
                    y
                ),
                points: v(
                    l[_].map((S) => S ?? NaN),
                    p,
                    g,
                    A,
                    y
                ),
            });
        const w = new xd();
        return w.build(u, i, r, 1, h, c, a), w;
    }
    get box() {
        return n(this, se);
    }
    updateProperty(e, s) {
        return e === "stroke-width" ? b(this, $t, zf).call(this, s) : null;
    }
    updateParentDimensions([e, s], i) {
        const [r, a] = b(this, $t, Ls).call(this);
        f(this, Ss, e), f(this, Es, s), f(this, ya, i);
        const [o, l] = b(this, $t, Ls).call(this),
            h = o - r,
            c = l - a,
            u = n(this, se);
        return (u[0] -= h), (u[1] -= c), (u[2] += 2 * h), (u[3] += 2 * c), u;
    }
    updateRotation(e) {
        return f(this, _l, e), { path: { transform: this.rotationTransform } };
    }
    get viewBox() {
        return n(this, se).map(M.svgRound).join(" ");
    }
    get defaultProperties() {
        const [e, s] = n(this, se);
        return { root: { viewBox: this.viewBox }, path: { "transform-origin": `${M.svgRound(e)} ${M.svgRound(s)}` } };
    }
    get rotationTransform() {
        const [, , e, s] = n(this, se);
        let i = 0,
            r = 0,
            a = 0,
            o = 0,
            l = 0,
            h = 0;
        switch (n(this, _l)) {
            case 90:
                (r = s / e), (a = -e / s), (l = e);
                break;
            case 180:
                (i = -1), (o = -1), (l = e), (h = s);
                break;
            case 270:
                (r = -s / e), (a = e / s), (h = s);
                break;
            default:
                return "";
        }
        return `matrix(${i} ${r} ${a} ${o} ${M.svgRound(l)} ${M.svgRound(h)})`;
    }
    getPathResizingSVGProperties([e, s, i, r]) {
        const [a, o] = b(this, $t, Ls).call(this),
            [l, h, c, u] = n(this, se);
        if (Math.abs(c - a) <= M.PRECISION || Math.abs(u - o) <= M.PRECISION) {
            const v = e + i / 2 - (l + c / 2),
                w = s + r / 2 - (h + u / 2);
            return { path: { "transform-origin": `${M.svgRound(e)} ${M.svgRound(s)}`, transform: `${this.rotationTransform} translate(${v} ${w})` } };
        }
        const p = (i - 2 * a) / (c - 2 * a),
            g = (r - 2 * o) / (u - 2 * o),
            A = c / i,
            y = u / r;
        return {
            path: {
                "transform-origin": `${M.svgRound(l)} ${M.svgRound(h)}`,
                transform: `${this.rotationTransform} scale(${A} ${y}) translate(${M.svgRound(a)} ${M.svgRound(o)}) scale(${p} ${g}) translate(${M.svgRound(-a)} ${M.svgRound(-o)})`,
            },
        };
    }
    getPathResizedSVGProperties([e, s, i, r]) {
        const [a, o] = b(this, $t, Ls).call(this),
            l = n(this, se),
            [h, c, u, p] = l;
        if (((l[0] = e), (l[1] = s), (l[2] = i), (l[3] = r), Math.abs(u - a) <= M.PRECISION || Math.abs(p - o) <= M.PRECISION)) {
            const w = e + i / 2 - (h + u / 2),
                _ = s + r / 2 - (c + p / 2);
            for (const { line: E, points: S } of n(this, Ce)) M._translate(E, w, _, E), M._translate(S, w, _, S);
            return { root: { viewBox: this.viewBox }, path: { "transform-origin": `${M.svgRound(e)} ${M.svgRound(s)}`, transform: this.rotationTransform || null, d: this.toSVGPath() } };
        }
        const g = (i - 2 * a) / (u - 2 * a),
            A = (r - 2 * o) / (p - 2 * o),
            y = -g * (h + a) + e + a,
            v = -A * (c + o) + s + o;
        if (g !== 1 || A !== 1 || y !== 0 || v !== 0) for (const { line: w, points: _ } of n(this, Ce)) M._rescale(w, y, v, g, A, w), M._rescale(_, y, v, g, A, _);
        return { root: { viewBox: this.viewBox }, path: { "transform-origin": `${M.svgRound(e)} ${M.svgRound(s)}`, transform: this.rotationTransform || null, d: this.toSVGPath() } };
    }
    getPathTranslatedSVGProperties([e, s], i) {
        const [r, a] = i,
            o = n(this, se),
            l = e - o[0],
            h = s - o[1];
        if (n(this, Ss) === r && n(this, Es) === a) for (const { line: c, points: u } of n(this, Ce)) M._translate(c, l, h, c), M._translate(u, l, h, u);
        else {
            const c = n(this, Ss) / r,
                u = n(this, Es) / a;
            f(this, Ss, r), f(this, Es, a);
            for (const { line: p, points: g } of n(this, Ce)) M._rescale(p, l, h, c, u, p), M._rescale(g, l, h, c, u, g);
            (o[2] *= c), (o[3] *= u);
        }
        return (o[0] = e), (o[1] = s), { root: { viewBox: this.viewBox }, path: { d: this.toSVGPath(), "transform-origin": `${M.svgRound(e)} ${M.svgRound(s)}` } };
    }
    get defaultSVGProperties() {
        const e = n(this, se);
        return { root: { viewBox: this.viewBox }, rootClass: { draw: !0 }, path: { d: this.toSVGPath(), "transform-origin": `${M.svgRound(e[0])} ${M.svgRound(e[1])}`, transform: this.rotationTransform || null }, bbox: e };
    }
};
(se = new WeakMap()),
    (_l = new WeakMap()),
    (Sl = new WeakMap()),
    (Ce = new WeakMap()),
    (Ss = new WeakMap()),
    (Es = new WeakMap()),
    (ya = new WeakMap()),
    (wa = new WeakMap()),
    (va = new WeakMap()),
    ($t = new WeakSet()),
    (Ls = function (e = n(this, va)) {
        const s = n(this, Sl) + (e / 2) * n(this, ya);
        return n(this, wa) % 180 === 0 ? [s / n(this, Ss), s / n(this, Es)] : [s / n(this, Es), s / n(this, Ss)];
    }),
    ($f = function () {
        const [e, s, i, r] = n(this, se),
            [a, o] = b(this, $t, Ls).call(this, 0);
        return [e + a, s + o, i - 2 * a, r - 2 * o];
    }),
    (Gf = function () {
        const e = f(this, se, new Float32Array([1 / 0, 1 / 0, -1 / 0, -1 / 0]));
        for (const { line: r } of n(this, Ce)) {
            if (r.length <= 12) {
                for (let l = 4, h = r.length; l < h; l += 6) {
                    const [c, u] = r.subarray(l, l + 2);
                    (e[0] = Math.min(e[0], c)), (e[1] = Math.min(e[1], u)), (e[2] = Math.max(e[2], c)), (e[3] = Math.max(e[3], u));
                }
                continue;
            }
            let a = r[4],
                o = r[5];
            for (let l = 6, h = r.length; l < h; l += 6) {
                const [c, u, p, g, A, y] = r.subarray(l, l + 6);
                F.bezierBoundingBox(a, o, c, u, p, g, A, y, e), (a = A), (o = y);
            }
        }
        const [s, i] = b(this, $t, Ls).call(this);
        (e[0] = Math.min(1, Math.max(0, e[0] - s))), (e[1] = Math.min(1, Math.max(0, e[1] - i))), (e[2] = Math.min(1, Math.max(0, e[2] + s))), (e[3] = Math.min(1, Math.max(0, e[3] + i))), (e[2] -= e[0]), (e[3] -= e[1]);
    }),
    (zf = function (e) {
        const [s, i] = b(this, $t, Ls).call(this);
        f(this, va, e);
        const [r, a] = b(this, $t, Ls).call(this),
            [o, l] = [r - s, a - i],
            h = n(this, se);
        return (h[0] -= o), (h[1] -= l), (h[2] += 2 * o), (h[3] += 2 * l), h;
    });
let gh = xd;
var _a;
const Cd = class Cd extends qg {
    constructor(e) {
        super();
        m(this, _a);
        f(this, _a, e), super.updateProperties({ fill: "none", stroke: pt._defaultLineColor, "stroke-opacity": 1, "stroke-width": 1, "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-miterlimit": 10 });
    }
    updateSVGProperty(e, s) {
        e === "stroke-width" && (s ?? (s = this["stroke-width"]), (s *= n(this, _a).realScale)), super.updateSVGProperty(e, s);
    }
    clone() {
        const e = new Cd(n(this, _a));
        return e.updateAll(this), e;
    }
};
_a = new WeakMap();
let td = Cd;
var Ih, Uf;
const yr = class yr extends Kc {
    constructor(e) {
        super({ ...e, name: "inkEditor" });
        m(this, Ih);
        this._willKeepAspectRatio = !0;
    }
    static initialize(e, s) {
        pt.initialize(e, s), (this._defaultDrawingOptions = new td(s.viewParameters));
    }
    static getDefaultDrawingOptions(e) {
        const s = this._defaultDrawingOptions.clone();
        return s.updateProperties(e), s;
    }
    static get supportMultipleDrawings() {
        return !0;
    }
    static get typesMap() {
        return q(
            this,
            "typesMap",
            new Map([
                [Y.INK_THICKNESS, "stroke-width"],
                [Y.INK_COLOR, "stroke"],
                [Y.INK_OPACITY, "stroke-opacity"],
            ])
        );
    }
    static createDrawerInstance(e, s, i, r, a) {
        return new Yg(e, s, i, r, a, this._defaultDrawingOptions["stroke-width"]);
    }
    static deserializeDraw(e, s, i, r, a, o) {
        return gh.deserialize(e, s, i, r, a, o);
    }
    static async deserialize(e, s, i) {
        let r = null;
        if (e instanceof wd) {
            const {
                data: {
                    inkLists: o,
                    rect: l,
                    rotation: h,
                    id: c,
                    color: u,
                    opacity: p,
                    borderStyle: { rawWidth: g },
                    popupRef: A,
                },
                parent: {
                    page: { pageNumber: y },
                },
            } = e;
            r = e = { annotationType: U.INK, color: Array.from(u), thickness: g, opacity: p, paths: { points: o }, boxes: null, pageIndex: y - 1, rect: l.slice(0), rotation: h, id: c, deleted: !1, popupRef: A };
        }
        const a = await super.deserialize(e, s, i);
        return (a.annotationElementId = e.id || null), (a._initialData = r), a;
    }
    onScaleChanging() {
        if (!this.parent) return;
        super.onScaleChanging();
        const { _drawId: e, _drawingOptions: s, parent: i } = this;
        s.updateSVGProperty("stroke-width"), i.drawLayer.updateProperties(e, s.toSVGProperties());
    }
    static onScaleChangingWhenDrawing() {
        const e = this._currentParent;
        e && (super.onScaleChangingWhenDrawing(), this._defaultDrawingOptions.updateSVGProperty("stroke-width"), e.drawLayer.updateProperties(this._currentDrawId, this._defaultDrawingOptions.toSVGProperties()));
    }
    createDrawingOptions({ color: e, thickness: s, opacity: i }) {
        this._drawingOptions = yr.getDefaultDrawingOptions({ stroke: F.makeHexColor(...e), "stroke-width": s, "stroke-opacity": i });
    }
    serialize(e = !1) {
        if (this.isEmpty()) return null;
        if (this.deleted) return this.serializeDeleted();
        const { lines: s, points: i, rect: r } = this.serializeDraw(e),
            {
                _drawingOptions: { stroke: a, "stroke-opacity": o, "stroke-width": l },
            } = this,
            h = {
                annotationType: U.INK,
                color: pt._colorManager.convert(a),
                opacity: o,
                thickness: l,
                paths: { lines: s, points: i },
                pageIndex: this.pageIndex,
                rect: r,
                rotation: this.rotation,
                structTreeParentId: this._structTreeParentId,
            };
        return e ? h : this.annotationElementId && !b(this, Ih, Uf).call(this, h) ? null : ((h.id = this.annotationElementId), h);
    }
    renderAnnotationElement(e) {
        const { points: s, rect: i } = this.serializeDraw(!1);
        return e.updateEdited({ rect: i, thickness: this._drawingOptions["stroke-width"], points: s }), null;
    }
};
(Ih = new WeakSet()),
    (Uf = function (e) {
        const { color: s, thickness: i, opacity: r, pageIndex: a } = this._initialData;
        return this._hasBeenMoved || this._hasBeenResized || e.color.some((o, l) => o !== s[l]) || e.thickness !== i || e.opacity !== r || e.pageIndex !== a;
    }),
    O(yr, "_type", "ink"),
    O(yr, "_editorType", U.INK),
    O(yr, "_defaultDrawingOptions", null);
let ed = yr;
var ft, Bt, Hi, si, Bi, Sa, xs, Cs, Te, Ea, Q, Wa, Xa, nh, id, rh, nd, ah, Vf;
const Ya = class Ya extends pt {
    constructor(e) {
        super({ ...e, name: "stampEditor" });
        m(this, Q);
        m(this, ft, null);
        m(this, Bt, null);
        m(this, Hi, null);
        m(this, si, null);
        m(this, Bi, null);
        m(this, Sa, "");
        m(this, xs, null);
        m(this, Cs, null);
        m(this, Te, !1);
        m(this, Ea, !1);
        f(this, si, e.bitmapUrl), f(this, Bi, e.bitmapFile);
    }
    static initialize(e, s) {
        pt.initialize(e, s);
    }
    static get supportedTypes() {
        return q(
            this,
            "supportedTypes",
            ["apng", "avif", "bmp", "gif", "jpeg", "png", "svg+xml", "webp", "x-icon"].map((s) => `image/${s}`)
        );
    }
    static get supportedTypesStr() {
        return q(this, "supportedTypesStr", this.supportedTypes.join(","));
    }
    static isHandlingMimeForPasting(e) {
        return this.supportedTypes.includes(e);
    }
    static paste(e, s) {
        s.pasteEditor(U.STAMP, { bitmapFile: e.getAsFile() });
    }
    altTextFinish() {
        this._uiManager.useNewAltTextFlow && (this.div.hidden = !1), super.altTextFinish();
    }
    get telemetryFinalData() {
        var e;
        return { type: "stamp", hasAltText: !!((e = this.altTextData) != null && e.altText) };
    }
    static computeTelemetryFinalData(e) {
        const s = e.get("hasAltText");
        return { hasAltText: s.get(!0) ?? 0, hasNoAltText: s.get(!1) ?? 0 };
    }
    async mlGuessAltText(e = null, s = !0) {
        if (this.hasAltTextData()) return null;
        const { mlManager: i } = this._uiManager;
        if (!i) throw new Error("No ML.");
        if (!(await i.isEnabledFor("altText"))) throw new Error("ML isn't enabled for alt text.");
        const { data: r, width: a, height: o } = e || this.copyCanvas(null, null, !0).imageData,
            l = await i.guess({ name: "altText", request: { data: r, width: a, height: o, channels: r.length / (a * o) } });
        if (!l) throw new Error("No response from the AI service.");
        if (l.error) throw new Error("Error from the AI service.");
        if (l.cancel) return null;
        if (!l.output) throw new Error("No valid response from the AI service.");
        const h = l.output;
        return await this.setGuessedAltText(h), s && !this.hasAltTextData() && (this.altTextData = { alt: h, decorative: !1 }), h;
    }
    remove() {
        var e;
        n(this, Bt) && (f(this, ft, null), this._uiManager.imageManager.deleteId(n(this, Bt)), (e = n(this, xs)) == null || e.remove(), f(this, xs, null), n(this, Cs) && (clearTimeout(n(this, Cs)), f(this, Cs, null))), super.remove();
    }
    rebuild() {
        if (!this.parent) {
            n(this, Bt) && b(this, Q, nh).call(this);
            return;
        }
        super.rebuild(), this.div !== null && (n(this, Bt) && n(this, xs) === null && b(this, Q, nh).call(this), this.isAttachedToDOM || this.parent.add(this));
    }
    onceAdded(e) {
        (this._isDraggable = !0), e && this.div.focus();
    }
    isEmpty() {
        return !(n(this, Hi) || n(this, ft) || n(this, si) || n(this, Bi) || n(this, Bt));
    }
    get isResizable() {
        return !0;
    }
    render() {
        if (this.div) return this.div;
        let e, s;
        if (
            (this.width && ((e = this.x), (s = this.y)),
            super.render(),
            (this.div.hidden = !0),
            this.div.setAttribute("role", "figure"),
            this.addAltTextButton(),
            n(this, ft) ? b(this, Q, id).call(this) : b(this, Q, nh).call(this),
            this.width && !this.annotationElementId)
        ) {
            const [i, r] = this.parentDimensions;
            this.setAt(e * i, s * r, this.width * i, this.height * r);
        }
        return this._uiManager.addShouldRescale(this), this.div;
    }
    _onResized() {
        this.onScaleChanging();
    }
    onScaleChanging() {
        if (!this.parent) return;
        n(this, Cs) !== null && clearTimeout(n(this, Cs)),
            f(
                this,
                Cs,
                setTimeout(() => {
                    f(this, Cs, null), b(this, Q, nd).call(this);
                }, 200)
            );
    }
    copyCanvas(e, s, i = !1) {
        var g;
        e || (e = 224);
        const { width: r, height: a } = n(this, ft),
            o = new tc();
        let l = n(this, ft),
            h = r,
            c = a,
            u = null;
        if (s) {
            if (r > s || a > s) {
                const k = Math.min(s / r, s / a);
                (h = Math.floor(r * k)), (c = Math.floor(a * k));
            }
            u = document.createElement("canvas");
            const A = (u.width = Math.ceil(h * o.sx)),
                y = (u.height = Math.ceil(c * o.sy));
            n(this, Te) || (l = b(this, Q, rh).call(this, A, y));
            const v = u.getContext("2d");
            v.filter = this._uiManager.hcmFilter;
            let w = "white",
                _ = "#cfcfd8";
            this._uiManager.hcmFilter !== "none" ? (_ = "black") : (g = window.matchMedia) != null && g.call(window, "(prefers-color-scheme: dark)").matches && ((w = "#8f8f9d"), (_ = "#42414d"));
            const E = 15,
                S = E * o.sx,
                x = E * o.sy,
                T = new OffscreenCanvas(S * 2, x * 2),
                C = T.getContext("2d");
            (C.fillStyle = w),
                C.fillRect(0, 0, S * 2, x * 2),
                (C.fillStyle = _),
                C.fillRect(0, 0, S, x),
                C.fillRect(S, x, S, x),
                (v.fillStyle = v.createPattern(T, "repeat")),
                v.fillRect(0, 0, A, y),
                v.drawImage(l, 0, 0, l.width, l.height, 0, 0, A, y);
        }
        let p = null;
        if (i) {
            let A, y;
            if (o.symmetric && l.width < e && l.height < e) (A = l.width), (y = l.height);
            else if (((l = n(this, ft)), r > e || a > e)) {
                const _ = Math.min(e / r, e / a);
                (A = Math.floor(r * _)), (y = Math.floor(a * _)), n(this, Te) || (l = b(this, Q, rh).call(this, A, y));
            }
            const w = new OffscreenCanvas(A, y).getContext("2d", { willReadFrequently: !0 });
            w.drawImage(l, 0, 0, l.width, l.height, 0, 0, A, y), (p = { width: A, height: y, data: w.getImageData(0, 0, A, y).data });
        }
        return { canvas: u, width: h, height: c, imageData: p };
    }
    getImageForAltText() {
        return n(this, xs);
    }
    static async deserialize(e, s, i) {
        var y;
        let r = null;
        if (e instanceof df) {
            const {
                    data: { rect: v, rotation: w, id: _, structParent: E, popupRef: S },
                    container: x,
                    parent: {
                        page: { pageNumber: T },
                    },
                } = e,
                C = x.querySelector("canvas"),
                k = i.imageManager.getFromCanvas(x.id, C);
            C.remove();
            const N = ((y = await s._structTree.getAriaAttributes(`${ud}${_}`)) == null ? void 0 : y.get("aria-label")) || "";
            r = e = {
                annotationType: U.STAMP,
                bitmapId: k.id,
                bitmap: k.bitmap,
                pageIndex: T - 1,
                rect: v.slice(0),
                rotation: w,
                id: _,
                deleted: !1,
                accessibilityData: { decorative: !1, altText: N },
                isSvg: !1,
                structParent: E,
                popupRef: S,
            };
        }
        const a = await super.deserialize(e, s, i),
            { rect: o, bitmap: l, bitmapUrl: h, bitmapId: c, isSvg: u, accessibilityData: p } = e;
        c && i.imageManager.isValidId(c) ? (f(a, Bt, c), l && f(a, ft, l)) : f(a, si, h), f(a, Te, u);
        const [g, A] = a.pageDimensions;
        return (a.width = (o[2] - o[0]) / g), (a.height = (o[3] - o[1]) / A), (a.annotationElementId = e.id || null), p && (a.altTextData = p), (a._initialData = r), f(a, Ea, !!r), a;
    }
    serialize(e = !1, s = null) {
        if (this.isEmpty()) return null;
        if (this.deleted) return this.serializeDeleted();
        const i = { annotationType: U.STAMP, bitmapId: n(this, Bt), pageIndex: this.pageIndex, rect: this.getRect(0, 0), rotation: this.rotation, isSvg: n(this, Te), structTreeParentId: this._structTreeParentId };
        if (e) return (i.bitmapUrl = b(this, Q, ah).call(this, !0)), (i.accessibilityData = this.serializeAltText(!0)), i;
        const { decorative: r, altText: a } = this.serializeAltText(!1);
        if ((!r && a && (i.accessibilityData = { type: "Figure", alt: a }), this.annotationElementId)) {
            const l = b(this, Q, Vf).call(this, i);
            if (l.isSame) return null;
            l.isSameAltText ? delete i.accessibilityData : (i.accessibilityData.structParent = this._initialData.structParent ?? -1);
        }
        if (((i.id = this.annotationElementId), s === null)) return i;
        s.stamps || (s.stamps = new Map());
        const o = n(this, Te) ? (i.rect[2] - i.rect[0]) * (i.rect[3] - i.rect[1]) : null;
        if (!s.stamps.has(n(this, Bt))) s.stamps.set(n(this, Bt), { area: o, serialized: i }), (i.bitmap = b(this, Q, ah).call(this, !1));
        else if (n(this, Te)) {
            const l = s.stamps.get(n(this, Bt));
            o > l.area && ((l.area = o), l.serialized.bitmap.close(), (l.serialized.bitmap = b(this, Q, ah).call(this, !1)));
        }
        return i;
    }
    renderAnnotationElement(e) {
        return e.updateEdited({ rect: this.getRect(0, 0) }), null;
    }
};
(ft = new WeakMap()),
    (Bt = new WeakMap()),
    (Hi = new WeakMap()),
    (si = new WeakMap()),
    (Bi = new WeakMap()),
    (Sa = new WeakMap()),
    (xs = new WeakMap()),
    (Cs = new WeakMap()),
    (Te = new WeakMap()),
    (Ea = new WeakMap()),
    (Q = new WeakSet()),
    (Wa = function (e, s = !1) {
        if (!e) {
            this.remove();
            return;
        }
        f(this, ft, e.bitmap), s || (f(this, Bt, e.id), f(this, Te, e.isSvg)), e.file && f(this, Sa, e.file.name), b(this, Q, id).call(this);
    }),
    (Xa = function () {
        if ((f(this, Hi, null), this._uiManager.enableWaiting(!1), !!n(this, xs))) {
            if (this._uiManager.useNewAltTextWhenAddingImage && this._uiManager.useNewAltTextFlow && n(this, ft)) {
                this._editToolbar.hide(), this._uiManager.editAltText(this, !0);
                return;
            }
            if (!this._uiManager.useNewAltTextWhenAddingImage && this._uiManager.useNewAltTextFlow && n(this, ft)) {
                this._reportTelemetry({ action: "pdfjs.image.image_added", data: { alt_text_modal: !1, alt_text_type: "empty" } });
                try {
                    this.mlGuessAltText();
                } catch {}
            }
            this.div.focus();
        }
    }),
    (nh = function () {
        if (n(this, Bt)) {
            this._uiManager.enableWaiting(!0),
                this._uiManager.imageManager
                    .getFromId(n(this, Bt))
                    .then((i) => b(this, Q, Wa).call(this, i, !0))
                    .finally(() => b(this, Q, Xa).call(this));
            return;
        }
        if (n(this, si)) {
            const i = n(this, si);
            f(this, si, null),
                this._uiManager.enableWaiting(!0),
                f(
                    this,
                    Hi,
                    this._uiManager.imageManager
                        .getFromUrl(i)
                        .then((r) => b(this, Q, Wa).call(this, r))
                        .finally(() => b(this, Q, Xa).call(this))
                );
            return;
        }
        if (n(this, Bi)) {
            const i = n(this, Bi);
            f(this, Bi, null),
                this._uiManager.enableWaiting(!0),
                f(
                    this,
                    Hi,
                    this._uiManager.imageManager
                        .getFromFile(i)
                        .then((r) => b(this, Q, Wa).call(this, r))
                        .finally(() => b(this, Q, Xa).call(this))
                );
            return;
        }
        const e = document.createElement("input");
        (e.type = "file"), (e.accept = Ya.supportedTypesStr);
        const s = this._uiManager._signal;
        f(
            this,
            Hi,
            new Promise((i) => {
                e.addEventListener(
                    "change",
                    async () => {
                        if (!e.files || e.files.length === 0) this.remove();
                        else {
                            this._uiManager.enableWaiting(!0);
                            const r = await this._uiManager.imageManager.getFromFile(e.files[0]);
                            this._reportTelemetry({ action: "pdfjs.image.image_selected", data: { alt_text_modal: this._uiManager.useNewAltTextFlow } }), b(this, Q, Wa).call(this, r);
                        }
                        i();
                    },
                    { signal: s }
                ),
                    e.addEventListener(
                        "cancel",
                        () => {
                            this.remove(), i();
                        },
                        { signal: s }
                    );
            }).finally(() => b(this, Q, Xa).call(this))
        ),
            e.click();
    }),
    (id = function () {
        var u;
        const { div: e } = this;
        let { width: s, height: i } = n(this, ft);
        const [r, a] = this.pageDimensions,
            o = 0.75;
        if (this.width) (s = this.width * r), (i = this.height * a);
        else if (s > o * r || i > o * a) {
            const p = Math.min((o * r) / s, (o * a) / i);
            (s *= p), (i *= p);
        }
        const [l, h] = this.parentDimensions;
        this.setDims((s * l) / r, (i * h) / a), this._uiManager.enableWaiting(!1);
        const c = f(this, xs, document.createElement("canvas"));
        c.setAttribute("role", "img"),
            this.addContainer(c),
            (this.width = s / r),
            (this.height = i / a),
            (u = this._initialOptions) != null && u.isCentered ? this.center() : this.fixAndSetPosition(),
            (this._initialOptions = null),
            (!this._uiManager.useNewAltTextWhenAddingImage || !this._uiManager.useNewAltTextFlow || this.annotationElementId) && (e.hidden = !1),
            b(this, Q, nd).call(this),
            n(this, Ea) || (this.parent.addUndoableEditor(this), f(this, Ea, !0)),
            this._reportTelemetry({ action: "inserted_image" }),
            n(this, Sa) && c.setAttribute("aria-label", n(this, Sa));
    }),
    (rh = function (e, s) {
        const { width: i, height: r } = n(this, ft);
        let a = i,
            o = r,
            l = n(this, ft);
        for (; a > 2 * e || o > 2 * s; ) {
            const h = a,
                c = o;
            a > 2 * e && (a = a >= 16384 ? Math.floor(a / 2) - 1 : Math.ceil(a / 2)), o > 2 * s && (o = o >= 16384 ? Math.floor(o / 2) - 1 : Math.ceil(o / 2));
            const u = new OffscreenCanvas(a, o);
            u.getContext("2d").drawImage(l, 0, 0, h, c, 0, 0, a, o), (l = u.transferToImageBitmap());
        }
        return l;
    }),
    (nd = function () {
        const [e, s] = this.parentDimensions,
            { width: i, height: r } = this,
            a = new tc(),
            o = Math.ceil(i * e * a.sx),
            l = Math.ceil(r * s * a.sy),
            h = n(this, xs);
        if (!h || (h.width === o && h.height === l)) return;
        (h.width = o), (h.height = l);
        const c = n(this, Te) ? n(this, ft) : b(this, Q, rh).call(this, o, l),
            u = h.getContext("2d");
        (u.filter = this._uiManager.hcmFilter), u.drawImage(c, 0, 0, c.width, c.height, 0, 0, o, l);
    }),
    (ah = function (e) {
        if (e) {
            if (n(this, Te)) {
                const r = this._uiManager.imageManager.getSvgUrl(n(this, Bt));
                if (r) return r;
            }
            const s = document.createElement("canvas");
            return ({ width: s.width, height: s.height } = n(this, ft)), s.getContext("2d").drawImage(n(this, ft), 0, 0), s.toDataURL();
        }
        if (n(this, Te)) {
            const [s, i] = this.pageDimensions,
                r = Math.round(this.width * s * ji.PDF_TO_CSS_UNITS),
                a = Math.round(this.height * i * ji.PDF_TO_CSS_UNITS),
                o = new OffscreenCanvas(r, a);
            return o.getContext("2d").drawImage(n(this, ft), 0, 0, n(this, ft).width, n(this, ft).height, 0, 0, r, a), o.transferToImageBitmap();
        }
        return structuredClone(n(this, ft));
    }),
    (Vf = function (e) {
        var o;
        const {
                pageIndex: s,
                accessibilityData: { altText: i },
            } = this._initialData,
            r = e.pageIndex === s,
            a = (((o = e.accessibilityData) == null ? void 0 : o.alt) || "") === i;
        return { isSame: !this._hasBeenMoved && !this._hasBeenResized && r && a, isSameAltText: a };
    }),
    O(Ya, "_type", "stamp"),
    O(Ya, "_editorType", U.STAMP);
let sd = Ya;
var er, xa, Ts, $i, ii, $e, Gi, Ca, sr, ss, ni, qt, ri, D, zi, dt, jf, cs, ad, od, oh;
const Ve = class Ve {
    constructor({ uiManager: t, pageIndex: e, div: s, structTreeLayer: i, accessibilityManager: r, annotationLayer: a, drawLayer: o, textLayer: l, viewport: h, l10n: c }) {
        m(this, dt);
        m(this, er);
        m(this, xa, !1);
        m(this, Ts, null);
        m(this, $i, null);
        m(this, ii, null);
        m(this, $e, new Map());
        m(this, Gi, !1);
        m(this, Ca, !1);
        m(this, sr, !1);
        m(this, ss, null);
        m(this, ni, null);
        m(this, qt, null);
        m(this, ri, null);
        m(this, D);
        const u = [...n(Ve, zi).values()];
        if (!Ve._initialized) {
            Ve._initialized = !0;
            for (const p of u) p.initialize(c, t);
        }
        t.registerEditorTypes(u), f(this, D, t), (this.pageIndex = e), (this.div = s), f(this, er, r), f(this, Ts, a), (this.viewport = h), f(this, qt, l), (this.drawLayer = o), (this._structTree = i), n(this, D).addLayer(this);
    }
    get isEmpty() {
        return n(this, $e).size === 0;
    }
    get isInvisible() {
        return this.isEmpty && n(this, D).getMode() === U.NONE;
    }
    updateToolbar(t) {
        n(this, D).updateToolbar(t);
    }
    updateMode(t = n(this, D).getMode()) {
        switch ((b(this, dt, oh).call(this), t)) {
            case U.NONE:
                this.disableTextSelection(), this.togglePointerEvents(!1), this.toggleAnnotationLayerPointerEvents(!0), this.disableClick();
                return;
            case U.INK:
                this.disableTextSelection(), this.togglePointerEvents(!0), this.enableClick();
                break;
            case U.HIGHLIGHT:
                this.enableTextSelection(), this.togglePointerEvents(!1), this.disableClick();
                break;
            default:
                this.disableTextSelection(), this.togglePointerEvents(!0), this.enableClick();
        }
        this.toggleAnnotationLayerPointerEvents(!1);
        const { classList: e } = this.div;
        for (const s of n(Ve, zi).values()) e.toggle(`${s._type}Editing`, t === s._editorType);
        this.div.hidden = !1;
    }
    hasTextLayer(t) {
        var e;
        return t === ((e = n(this, qt)) == null ? void 0 : e.div);
    }
    setEditingState(t) {
        n(this, D).setEditingState(t);
    }
    addCommands(t) {
        n(this, D).addCommands(t);
    }
    cleanUndoStack(t) {
        n(this, D).cleanUndoStack(t);
    }
    toggleDrawing(t = !1) {
        this.div.classList.toggle("drawing", !t);
    }
    togglePointerEvents(t = !1) {
        this.div.classList.toggle("disabled", !t);
    }
    toggleAnnotationLayerPointerEvents(t = !1) {
        var e;
        (e = n(this, Ts)) == null || e.div.classList.toggle("disabled", !t);
    }
    async enable() {
        f(this, sr, !0), (this.div.tabIndex = 0), this.togglePointerEvents(!0);
        const t = new Set();
        for (const s of n(this, $e).values()) s.enableEditing(), s.show(!0), s.annotationElementId && (n(this, D).removeChangedExistingAnnotation(s), t.add(s.annotationElementId));
        if (!n(this, Ts)) {
            f(this, sr, !1);
            return;
        }
        const e = n(this, Ts).getEditableAnnotations();
        for (const s of e) {
            if ((s.hide(), n(this, D).isDeletedAnnotationElement(s.data.id) || t.has(s.data.id))) continue;
            const i = await this.deserialize(s);
            i && (this.addOrRebuild(i), i.enableEditing());
        }
        f(this, sr, !1);
    }
    disable() {
        var i;
        f(this, Ca, !0), (this.div.tabIndex = -1), this.togglePointerEvents(!1);
        const t = new Map(),
            e = new Map();
        for (const r of n(this, $e).values())
            if ((r.disableEditing(), !!r.annotationElementId)) {
                if (r.serialize() !== null) {
                    t.set(r.annotationElementId, r);
                    continue;
                } else e.set(r.annotationElementId, r);
                (i = this.getEditableAnnotation(r.annotationElementId)) == null || i.show(), r.remove();
            }
        if (n(this, Ts)) {
            const r = n(this, Ts).getEditableAnnotations();
            for (const a of r) {
                const { id: o } = a.data;
                if (n(this, D).isDeletedAnnotationElement(o)) continue;
                let l = e.get(o);
                if (l) {
                    l.resetAnnotationElement(a), l.show(!1), a.show();
                    continue;
                }
                (l = t.get(o)), l && (n(this, D).addChangedExistingAnnotation(l), l.renderAnnotationElement(a) && l.show(!1)), a.show();
            }
        }
        b(this, dt, oh).call(this), this.isEmpty && (this.div.hidden = !0);
        const { classList: s } = this.div;
        for (const r of n(Ve, zi).values()) s.remove(`${r._type}Editing`);
        this.disableTextSelection(), this.toggleAnnotationLayerPointerEvents(!0), f(this, Ca, !1);
    }
    getEditableAnnotation(t) {
        var e;
        return ((e = n(this, Ts)) == null ? void 0 : e.getEditableAnnotation(t)) || null;
    }
    setActiveEditor(t) {
        n(this, D).getActive() !== t && n(this, D).setActiveEditor(t);
    }
    enableTextSelection() {
        var t;
        if (((this.div.tabIndex = -1), (t = n(this, qt)) != null && t.div && !n(this, ri))) {
            f(this, ri, new AbortController());
            const e = n(this, D).combinedSignal(n(this, ri));
            n(this, qt).div.addEventListener("pointerdown", b(this, dt, jf).bind(this), { signal: e }), n(this, qt).div.classList.add("highlighting");
        }
    }
    disableTextSelection() {
        var t;
        (this.div.tabIndex = 0), (t = n(this, qt)) != null && t.div && n(this, ri) && (n(this, ri).abort(), f(this, ri, null), n(this, qt).div.classList.remove("highlighting"));
    }
    enableClick() {
        if (n(this, $i)) return;
        f(this, $i, new AbortController());
        const t = n(this, D).combinedSignal(n(this, $i));
        this.div.addEventListener("pointerdown", this.pointerdown.bind(this), { signal: t });
        const e = this.pointerup.bind(this);
        this.div.addEventListener("pointerup", e, { signal: t }), this.div.addEventListener("pointercancel", e, { signal: t });
    }
    disableClick() {
        var t;
        (t = n(this, $i)) == null || t.abort(), f(this, $i, null);
    }
    attach(t) {
        n(this, $e).set(t.id, t);
        const { annotationElementId: e } = t;
        e && n(this, D).isDeletedAnnotationElement(e) && n(this, D).removeDeletedAnnotationElement(t);
    }
    detach(t) {
        var e;
        n(this, $e).delete(t.id), (e = n(this, er)) == null || e.removePointerInTextLayer(t.contentDiv), !n(this, Ca) && t.annotationElementId && n(this, D).addDeletedAnnotationElement(t);
    }
    remove(t) {
        this.detach(t), n(this, D).removeEditor(t), t.div.remove(), (t.isAttachedToDOM = !1);
    }
    changeParent(t) {
        var e;
        t.parent !== this &&
            (t.parent && t.annotationElementId && (n(this, D).addDeletedAnnotationElement(t.annotationElementId), pt.deleteAnnotationElement(t), (t.annotationElementId = null)),
            this.attach(t),
            (e = t.parent) == null || e.detach(t),
            t.setParent(this),
            t.div && t.isAttachedToDOM && (t.div.remove(), this.div.append(t.div)));
    }
    add(t) {
        if (!(t.parent === this && t.isAttachedToDOM)) {
            if ((this.changeParent(t), n(this, D).addEditor(t), this.attach(t), !t.isAttachedToDOM)) {
                const e = t.render();
                this.div.append(e), (t.isAttachedToDOM = !0);
            }
            t.fixAndSetPosition(), t.onceAdded(!n(this, sr)), n(this, D).addToAnnotationStorage(t), t._reportTelemetry(t.telemetryInitialData);
        }
    }
    moveEditorInDOM(t) {
        var s;
        if (!t.isAttachedToDOM) return;
        const { activeElement: e } = document;
        t.div.contains(e) &&
            !n(this, ii) &&
            ((t._focusEventsAllowed = !1),
            f(
                this,
                ii,
                setTimeout(() => {
                    f(this, ii, null),
                        t.div.contains(document.activeElement)
                            ? (t._focusEventsAllowed = !0)
                            : (t.div.addEventListener(
                                  "focusin",
                                  () => {
                                      t._focusEventsAllowed = !0;
                                  },
                                  { once: !0, signal: n(this, D)._signal }
                              ),
                              e.focus());
                }, 0)
            )),
            (t._structTreeParentId = (s = n(this, er)) == null ? void 0 : s.moveElementInDOM(this.div, t.div, t.contentDiv, !0));
    }
    addOrRebuild(t) {
        t.needsToBeRebuilt() ? (t.parent || (t.parent = this), t.rebuild(), t.show()) : this.add(t);
    }
    addUndoableEditor(t) {
        const e = () => t._uiManager.rebuild(t),
            s = () => {
                t.remove();
            };
        this.addCommands({ cmd: e, undo: s, mustExec: !1 });
    }
    getNextId() {
        return n(this, D).getId();
    }
    combinedSignal(t) {
        return n(this, D).combinedSignal(t);
    }
    canCreateNewEmptyEditor() {
        var t;
        return (t = n(this, dt, cs)) == null ? void 0 : t.canCreateNewEmptyEditor();
    }
    pasteEditor(t, e) {
        n(this, D).updateToolbar(t), n(this, D).updateMode(t);
        const { offsetX: s, offsetY: i } = b(this, dt, od).call(this),
            r = this.getNextId(),
            a = b(this, dt, ad).call(this, { parent: this, id: r, x: s, y: i, uiManager: n(this, D), isCentered: !0, ...e });
        a && this.add(a);
    }
    async deserialize(t) {
        var e;
        return (await ((e = n(Ve, zi).get(t.annotationType ?? t.annotationEditorType)) == null ? void 0 : e.deserialize(t, this, n(this, D)))) || null;
    }
    createAndAddNewEditor(t, e, s = {}) {
        const i = this.getNextId(),
            r = b(this, dt, ad).call(this, { parent: this, id: i, x: t.offsetX, y: t.offsetY, uiManager: n(this, D), isCentered: e, ...s });
        return r && this.add(r), r;
    }
    addNewEditor() {
        this.createAndAddNewEditor(b(this, dt, od).call(this), !0);
    }
    setSelected(t) {
        n(this, D).setSelected(t);
    }
    toggleSelected(t) {
        n(this, D).toggleSelected(t);
    }
    unselect(t) {
        n(this, D).unselect(t);
    }
    pointerup(t) {
        var s;
        const { isMac: e } = ne.platform;
        if (!(t.button !== 0 || (t.ctrlKey && e)) && t.target === this.div && n(this, Gi) && (f(this, Gi, !1), !((s = n(this, dt, cs)) != null && s.isDrawer && n(this, dt, cs).supportMultipleDrawings))) {
            if (!n(this, xa)) {
                f(this, xa, !0);
                return;
            }
            if (n(this, D).getMode() === U.STAMP) {
                n(this, D).unselectAll();
                return;
            }
            this.createAndAddNewEditor(t, !1);
        }
    }
    pointerdown(t) {
        var i;
        if ((n(this, D).getMode() === U.HIGHLIGHT && this.enableTextSelection(), n(this, Gi))) {
            f(this, Gi, !1);
            return;
        }
        const { isMac: e } = ne.platform;
        if (t.button !== 0 || (t.ctrlKey && e) || t.target !== this.div) return;
        if ((f(this, Gi, !0), (i = n(this, dt, cs)) != null && i.isDrawer)) {
            this.startDrawingSession(t);
            return;
        }
        const s = n(this, D).getActive();
        f(this, xa, !s || s.isEmpty());
    }
    startDrawingSession(t) {
        if ((this.div.focus(), n(this, ss))) {
            n(this, dt, cs).startDrawing(this, n(this, D), !1, t);
            return;
        }
        n(this, D).setCurrentDrawingSession(this), f(this, ss, new AbortController());
        const e = n(this, D).combinedSignal(n(this, ss));
        this.div.addEventListener(
            "blur",
            ({ relatedTarget: s }) => {
                s && !this.div.contains(s) && (f(this, ni, null), this.commitOrRemove());
            },
            { signal: e }
        ),
            n(this, dt, cs).startDrawing(this, n(this, D), !1, t);
    }
    pause(t) {
        if (t) {
            const { activeElement: e } = document;
            this.div.contains(e) && f(this, ni, e);
            return;
        }
        n(this, ni) &&
            setTimeout(() => {
                var e;
                (e = n(this, ni)) == null || e.focus(), f(this, ni, null);
            }, 0);
    }
    endDrawingSession(t = !1) {
        return n(this, ss) ? (n(this, D).setCurrentDrawingSession(null), n(this, ss).abort(), f(this, ss, null), f(this, ni, null), n(this, dt, cs).endDrawing(t)) : null;
    }
    findNewParent(t, e, s) {
        const i = n(this, D).findParent(e, s);
        return i === null || i === this ? !1 : (i.changeParent(t), !0);
    }
    commitOrRemove() {
        return n(this, ss) ? (this.endDrawingSession(), !0) : !1;
    }
    onScaleChanging() {
        n(this, ss) && n(this, dt, cs).onScaleChangingWhenDrawing(this);
    }
    destroy() {
        var t, e;
        this.commitOrRemove(), ((t = n(this, D).getActive()) == null ? void 0 : t.parent) === this && (n(this, D).commitOrRemove(), n(this, D).setActiveEditor(null)), n(this, ii) && (clearTimeout(n(this, ii)), f(this, ii, null));
        for (const s of n(this, $e).values()) (e = n(this, er)) == null || e.removePointerInTextLayer(s.contentDiv), s.setParent(null), (s.isAttachedToDOM = !1), s.div.remove();
        (this.div = null), n(this, $e).clear(), n(this, D).removeLayer(this);
    }
    render({ viewport: t }) {
        (this.viewport = t), nr(this.div, t);
        for (const e of n(this, D).getEditors(this.pageIndex)) this.add(e), e.rebuild();
        this.updateMode();
    }
    update({ viewport: t }) {
        n(this, D).commitOrRemove(), b(this, dt, oh).call(this);
        const e = this.viewport.rotation,
            s = t.rotation;
        if (((this.viewport = t), nr(this.div, { rotation: s }), e !== s)) for (const i of n(this, $e).values()) i.rotate(s);
    }
    get pageDimensions() {
        const { pageWidth: t, pageHeight: e } = this.viewport.rawDims;
        return [t, e];
    }
    get scale() {
        return n(this, D).viewParameters.realScale;
    }
};
(er = new WeakMap()),
    (xa = new WeakMap()),
    (Ts = new WeakMap()),
    ($i = new WeakMap()),
    (ii = new WeakMap()),
    ($e = new WeakMap()),
    (Gi = new WeakMap()),
    (Ca = new WeakMap()),
    (sr = new WeakMap()),
    (ss = new WeakMap()),
    (ni = new WeakMap()),
    (qt = new WeakMap()),
    (ri = new WeakMap()),
    (D = new WeakMap()),
    (zi = new WeakMap()),
    (dt = new WeakSet()),
    (jf = function (t) {
        n(this, D).unselectAll();
        const { target: e } = t;
        if (e === n(this, qt).div || ((e.getAttribute("role") === "img" || e.classList.contains("endOfContent")) && n(this, qt).div.contains(e))) {
            const { isMac: s } = ne.platform;
            if (t.button !== 0 || (t.ctrlKey && s)) return;
            n(this, D).showAllEditors("highlight", !0, !0),
                n(this, qt).div.classList.add("free"),
                this.toggleDrawing(),
                ph.startHighlighting(this, n(this, D).direction === "ltr", { target: n(this, qt).div, x: t.x, y: t.y }),
                n(this, qt).div.addEventListener(
                    "pointerup",
                    () => {
                        n(this, qt).div.classList.remove("free"), this.toggleDrawing(!0);
                    },
                    { once: !0, signal: n(this, D)._signal }
                ),
                t.preventDefault();
        }
    }),
    (cs = function () {
        return n(Ve, zi).get(n(this, D).getMode());
    }),
    (ad = function (t) {
        const e = n(this, dt, cs);
        return e ? new e.prototype.constructor(t) : null;
    }),
    (od = function () {
        const { x: t, y: e, width: s, height: i } = this.div.getBoundingClientRect(),
            r = Math.max(0, t),
            a = Math.max(0, e),
            o = Math.min(window.innerWidth, t + s),
            l = Math.min(window.innerHeight, e + i),
            h = (r + o) / 2 - t,
            c = (a + l) / 2 - e,
            [u, p] = this.viewport.rotation % 180 === 0 ? [h, c] : [c, h];
        return { offsetX: u, offsetY: p };
    }),
    (oh = function () {
        for (const t of n(this, $e).values()) t.isEmpty() && t.remove();
    }),
    O(Ve, "_initialized", !1),
    m(Ve, zi, new Map([$c, ed, sd, ph].map((t) => [t._editorType, t])));
let rd = Ve;
var is, El, ie, ir, Dh, Wf, Rs, hd, Xf, cd;
const Vt = class Vt {
    constructor({ pageIndex: t }) {
        m(this, Rs);
        m(this, is, null);
        m(this, El, 0);
        m(this, ie, new Map());
        m(this, ir, new Map());
        this.pageIndex = t;
    }
    setParent(t) {
        if (!n(this, is)) {
            f(this, is, t);
            return;
        }
        if (n(this, is) !== t) {
            if (n(this, ie).size > 0) for (const e of n(this, ie).values()) e.remove(), t.append(e);
            f(this, is, t);
        }
    }
    static get _svgFactory() {
        return q(this, "_svgFactory", new yd());
    }
    draw(t, e = !1, s = !1) {
        const i = Jt(this, El)._++,
            r = b(this, Rs, hd).call(this),
            a = Vt._svgFactory.createElement("defs");
        r.append(a);
        const o = Vt._svgFactory.createElement("path");
        a.append(o);
        const l = `path_p${this.pageIndex}_${i}`;
        o.setAttribute("id", l), o.setAttribute("vector-effect", "non-scaling-stroke"), e && n(this, ir).set(i, o);
        const h = s ? b(this, Rs, Xf).call(this, a, l) : null,
            c = Vt._svgFactory.createElement("use");
        return r.append(c), c.setAttribute("href", `#${l}`), this.updateProperties(r, t), n(this, ie).set(i, r), { id: i, clipPathId: `url(#${h})` };
    }
    drawOutline(t, e) {
        const s = Jt(this, El)._++,
            i = b(this, Rs, hd).call(this),
            r = Vt._svgFactory.createElement("defs");
        i.append(r);
        const a = Vt._svgFactory.createElement("path");
        r.append(a);
        const o = `path_p${this.pageIndex}_${s}`;
        a.setAttribute("id", o), a.setAttribute("vector-effect", "non-scaling-stroke");
        let l;
        if (e) {
            const u = Vt._svgFactory.createElement("mask");
            r.append(u), (l = `mask_p${this.pageIndex}_${s}`), u.setAttribute("id", l), u.setAttribute("maskUnits", "objectBoundingBox");
            const p = Vt._svgFactory.createElement("rect");
            u.append(p), p.setAttribute("width", "1"), p.setAttribute("height", "1"), p.setAttribute("fill", "white");
            const g = Vt._svgFactory.createElement("use");
            u.append(g), g.setAttribute("href", `#${o}`), g.setAttribute("stroke", "none"), g.setAttribute("fill", "black"), g.setAttribute("fill-rule", "nonzero"), g.classList.add("mask");
        }
        const h = Vt._svgFactory.createElement("use");
        i.append(h), h.setAttribute("href", `#${o}`), l && h.setAttribute("mask", `url(#${l})`);
        const c = h.cloneNode();
        return i.append(c), h.classList.add("mainOutline"), c.classList.add("secondaryOutline"), this.updateProperties(i, t), n(this, ie).set(s, i), s;
    }
    finalizeDraw(t, e) {
        n(this, ir).delete(t), this.updateProperties(t, e);
    }
    updateProperties(t, e) {
        var l;
        if (!e) return;
        const { root: s, bbox: i, rootClass: r, path: a } = e,
            o = typeof t == "number" ? n(this, ie).get(t) : t;
        if (o) {
            if ((s && b(this, Rs, cd).call(this, o, s), i && b((l = Vt), Dh, Wf).call(l, o, i), r)) {
                const { classList: h } = o;
                for (const [c, u] of Object.entries(r)) h.toggle(c, u);
            }
            if (a) {
                const c = o.firstChild.firstChild;
                b(this, Rs, cd).call(this, c, a);
            }
        }
    }
    updateParent(t, e) {
        if (e === this) return;
        const s = n(this, ie).get(t);
        s && (n(e, is).append(s), n(this, ie).delete(t), n(e, ie).set(t, s));
    }
    remove(t) {
        n(this, ir).delete(t), n(this, is) !== null && (n(this, ie).get(t).remove(), n(this, ie).delete(t));
    }
    destroy() {
        f(this, is, null);
        for (const t of n(this, ie).values()) t.remove();
        n(this, ie).clear(), n(this, ir).clear();
    }
};
(is = new WeakMap()),
    (El = new WeakMap()),
    (ie = new WeakMap()),
    (ir = new WeakMap()),
    (Dh = new WeakSet()),
    (Wf = function (t, [e, s, i, r]) {
        const { style: a } = t;
        (a.top = `${100 * s}%`), (a.left = `${100 * e}%`), (a.width = `${100 * i}%`), (a.height = `${100 * r}%`);
    }),
    (Rs = new WeakSet()),
    (hd = function () {
        const t = Vt._svgFactory.create(1, 1, !0);
        return n(this, is).append(t), t.setAttribute("aria-hidden", !0), t;
    }),
    (Xf = function (t, e) {
        const s = Vt._svgFactory.createElement("clipPath");
        t.append(s);
        const i = `clip_${e}`;
        s.setAttribute("id", i), s.setAttribute("clipPathUnits", "objectBoundingBox");
        const r = Vt._svgFactory.createElement("use");
        return s.append(r), r.setAttribute("href", `#${e}`), r.classList.add("clip"), i;
    }),
    (cd = function (t, e) {
        for (const [s, i] of Object.entries(e)) i === null ? t.removeAttribute(s) : t.setAttribute(s, i);
    }),
    m(Vt, Dh);
let ld = Vt;
globalThis.pdfjsTestingUtils = { HighlightOutliner: zc };
G.AbortException;
G.AnnotationEditorLayer;
G.AnnotationEditorParamsType;
G.AnnotationEditorType;
G.AnnotationEditorUIManager;
G.AnnotationLayer;
G.AnnotationMode;
G.ColorPicker;
G.DOMSVGFactory;
G.DrawLayer;
G.FeatureTest;
var Qg = G.GlobalWorkerOptions;
G.ImageKind;
G.InvalidPDFException;
G.MissingPDFException;
G.OPS;
G.OutputScale;
G.PDFDataRangeTransport;
G.PDFDateString;
G.PDFWorker;
G.PasswordResponses;
G.PermissionFlag;
G.PixelsPerInch;
G.RenderingCancelledException;
G.TextLayer;
G.TouchManager;
G.UnexpectedResponseException;
G.Util;
G.VerbosityLevel;
G.XfaLayer;
G.build;
G.createValidAbsoluteUrl;
G.fetchData;
var Jg = G.getDocument;
G.getFilenameFromUrl;
G.getPdfFilenameFromUrl;
G.getXfaPageViewport;
G.isDataScheme;
G.isPdfFile;
G.noContextMenu;
G.normalizeUnicode;
G.setLayerDimensions;
G.shadow;
G.stopEvent;
G.version;
export { Qg as _, Jg as a };
