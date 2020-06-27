(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('rxjs/operators'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('ngc-progressbar', ['exports', '@angular/core', 'rxjs', 'rxjs/operators', '@angular/common'], factory) :
    (global = global || self, factory(global['ngc-progressbar'] = {}, global.ng.core, global.rxjs, global.rxjs.operators, global.ng.common));
}(this, (function (exports, core, rxjs, operators, common) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    var NgcProgressbarService = /** @class */ (function () {
        function NgcProgressbarService() {
        }
        NgcProgressbarService.ɵprov = core.ɵɵdefineInjectable({ factory: function NgcProgressbarService_Factory() { return new NgcProgressbarService(); }, token: NgcProgressbarService, providedIn: "root" });
        NgcProgressbarService = __decorate([
            core.Injectable({
                providedIn: 'root',
            })
        ], NgcProgressbarService);
        return NgcProgressbarService;
    }());

    var CircleProgressbarComponent = /** @class */ (function () {
        function CircleProgressbarComponent() {
        }
        CircleProgressbarComponent.prototype.ngOnInit = function () { };
        CircleProgressbarComponent.prototype.ngAfterViewInit = function () {
            this.canvas = (document.querySelector(".progressbar--circle#" + this.progressbar.progressBarId));
            // drawig canvas initially
            this.drawCircle(this.canvas, this.progressbar.parentElemnent.width);
        };
        CircleProgressbarComponent.prototype.drawCircle = function (canvas, parentWidth) {
            // set context
            var ctx = canvas.getContext('2d');
            // canvas height width
            canvas.width = parentWidth;
            var circleRadious = this.progressbar.progressBarRadius * 2 +
                this.progressbar.baseStyles.lineWidth * 2 >
                canvas.width
                ? canvas.width / 2 - this.progressbar.baseStyles.lineWidth
                : this.progressbar.progressBarRadius;
            canvas.height = circleRadious * 2 + this.progressbar.baseStyles.lineWidth;
            // render base bar
            ctx.beginPath();
            ctx.arc(canvas.width / 2, canvas.height / 2, circleRadious, 0, 2 * Math.PI, true);
            ctx.strokeStyle = this.progressbar.baseStyles.color;
            ctx.lineWidth = this.progressbar.baseStyles.lineWidth;
            ctx.lineCap = this.progressbar.baseStyles.style;
            ctx.stroke();
            // parcentage bar
            var parcentageValue = this.progressbar.progressBarValue;
            var renderdCircleValue = (2 / 100) * parcentageValue + 1.5;
            ctx.beginPath();
            ctx.arc(canvas.width / 2, canvas.height / 2, circleRadious, 1.5 * Math.PI, renderdCircleValue * Math.PI);
            ctx.strokeStyle = this.progressbar.barStyles.color;
            ctx.lineWidth = this.progressbar.barStyles.lineWidth;
            ctx.lineCap = this.progressbar.barStyles.style;
            ctx.stroke();
            // render text
            ctx.font = this.progressbar.textStyles.fontSize + "px " + this.progressbar.textStyles.fontFamily;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillStyle = this.progressbar.textStyles.color;
            ctx.fillText(parcentageValue + "%", canvas.width / 2, canvas.height / 2 + 5);
            console.log(this.progressbar.textStyles.color);
        };
        CircleProgressbarComponent.prototype.drawCircleOnResize = function (parentWidth) {
            this.drawCircle(this.canvas, parentWidth);
        };
        __decorate([
            core.Input()
        ], CircleProgressbarComponent.prototype, "progressbar", void 0);
        CircleProgressbarComponent = __decorate([
            core.Component({
                selector: 'ngc-circle-progressbar',
                template: "<canvas\r\n  class=\"progressbar--circle\"\r\n  id=\"{{ progressbar.progressBarId }}\"\r\n></canvas>\r\n",
                styles: ["canvas{max-width:100%;vertical-align:middle}"]
            })
        ], CircleProgressbarComponent);
        return CircleProgressbarComponent;
    }());

    var NgcProgressbarComponent = /** @class */ (function () {
        function NgcProgressbarComponent(elRef) {
            var _this = this;
            this.elRef = elRef;
            this.defaultBaseStyle = {
                color: '#f1f1f1',
                lineWidth: 100,
                style: 'butt',
            };
            this.defaultBarStyle = {
                color: '#333',
                lineWidth: 100,
                style: 'butt',
            };
            this.defaultTextStyle = {
                fontSize: 20,
                fontFamily: 'Arial',
                color: 'red',
                position: 'center',
                html: '<span></span>',
            };
            this.resizeSubject = new rxjs.Subject();
            this.resizeSubject.pipe(operators.debounceTime(100)).subscribe(function (parentWidth) {
                _this.circleProgressbarComponent.drawCircleOnResize(parentWidth);
            });
        }
        NgcProgressbarComponent.prototype.ngOnInit = function () { };
        NgcProgressbarComponent.prototype.ngOnChanges = function () {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21;
            this.capturedInputs = {
                parentElemnent: {
                    width: this.elRef.nativeElement.parentElement.clientWidth,
                    height: this.elRef.nativeElement.parentElement.clientHeight,
                },
                progressBarType: this.type,
                progressBarValue: this.value,
                progressBarId: this.id,
                progressBarRadius: ((_a = this.styles) === null || _a === void 0 ? void 0 : _a.progressBarRadius) ? (_b = this.styles) === null || _b === void 0 ? void 0 : _b.progressBarRadius : '100',
                barStyles: {
                    color: ((_d = (_c = this.styles) === null || _c === void 0 ? void 0 : _c.barStyles) === null || _d === void 0 ? void 0 : _d.color) ? (_f = (_e = this.styles) === null || _e === void 0 ? void 0 : _e.barStyles) === null || _f === void 0 ? void 0 : _f.color : this.defaultBarStyle.color,
                    style: ((_h = (_g = this.styles) === null || _g === void 0 ? void 0 : _g.barStyles) === null || _h === void 0 ? void 0 : _h.style) ? (_k = (_j = this.styles) === null || _j === void 0 ? void 0 : _j.barStyles) === null || _k === void 0 ? void 0 : _k.style : this.defaultBarStyle.style,
                    lineWidth: ((_m = (_l = this.styles) === null || _l === void 0 ? void 0 : _l.barStyles) === null || _m === void 0 ? void 0 : _m.lineWidth) ? (_p = (_o = this.styles) === null || _o === void 0 ? void 0 : _o.barStyles) === null || _p === void 0 ? void 0 : _p.lineWidth : this.defaultBarStyle.lineWidth,
                },
                baseStyles: {
                    color: ((_r = (_q = this.styles) === null || _q === void 0 ? void 0 : _q.baseStyles) === null || _r === void 0 ? void 0 : _r.color) ? (_t = (_s = this.styles) === null || _s === void 0 ? void 0 : _s.baseStyles) === null || _t === void 0 ? void 0 : _t.color : this.defaultBaseStyle.color,
                    style: ((_v = (_u = this.styles) === null || _u === void 0 ? void 0 : _u.baseStyles) === null || _v === void 0 ? void 0 : _v.style) ? (_x = (_w = this.styles) === null || _w === void 0 ? void 0 : _w.baseStyles) === null || _x === void 0 ? void 0 : _x.style : this.defaultBaseStyle.style,
                    lineWidth: ((_z = (_y = this.styles) === null || _y === void 0 ? void 0 : _y.baseStyles) === null || _z === void 0 ? void 0 : _z.lineWidth) ? (_1 = (_0 = this.styles) === null || _0 === void 0 ? void 0 : _0.baseStyles) === null || _1 === void 0 ? void 0 : _1.lineWidth : this.defaultBaseStyle.lineWidth,
                },
                textStyles: {
                    color: ((_3 = (_2 = this.styles) === null || _2 === void 0 ? void 0 : _2.textStyles) === null || _3 === void 0 ? void 0 : _3.color) ? (_5 = (_4 = this.styles) === null || _4 === void 0 ? void 0 : _4.textStyles) === null || _5 === void 0 ? void 0 : _5.color : this.defaultTextStyle.color,
                    fontSize: ((_7 = (_6 = this.styles) === null || _6 === void 0 ? void 0 : _6.textStyles) === null || _7 === void 0 ? void 0 : _7.fontSize) ? (_9 = (_8 = this.styles) === null || _8 === void 0 ? void 0 : _8.textStyles) === null || _9 === void 0 ? void 0 : _9.fontSize : this.defaultTextStyle.fontSize,
                    fontFamily: ((_11 = (_10 = this.styles) === null || _10 === void 0 ? void 0 : _10.textStyles) === null || _11 === void 0 ? void 0 : _11.fontFamily) ? (_13 = (_12 = this.styles) === null || _12 === void 0 ? void 0 : _12.textStyles) === null || _13 === void 0 ? void 0 : _13.fontFamily : this.defaultTextStyle.fontFamily,
                    position: ((_15 = (_14 = this.styles) === null || _14 === void 0 ? void 0 : _14.textStyles) === null || _15 === void 0 ? void 0 : _15.position) ? (_17 = (_16 = this.styles) === null || _16 === void 0 ? void 0 : _16.textStyles) === null || _17 === void 0 ? void 0 : _17.position : this.defaultTextStyle.position,
                    html: ((_19 = (_18 = this.styles) === null || _18 === void 0 ? void 0 : _18.textStyles) === null || _19 === void 0 ? void 0 : _19.html) ? (_21 = (_20 = this.styles) === null || _20 === void 0 ? void 0 : _20.textStyles) === null || _21 === void 0 ? void 0 : _21.html : this.defaultTextStyle.html,
                },
            };
        };
        NgcProgressbarComponent.prototype.onResize = function () {
            this.capturedInputs.parentElemnent.width = this.elRef.nativeElement.parentElement.clientWidth;
            this.resizeSubject.next(this.capturedInputs.parentElemnent.width);
        };
        NgcProgressbarComponent.ctorParameters = function () { return [
            { type: core.ElementRef }
        ]; };
        __decorate([
            core.Input()
        ], NgcProgressbarComponent.prototype, "type", void 0);
        __decorate([
            core.Input()
        ], NgcProgressbarComponent.prototype, "value", void 0);
        __decorate([
            core.Input()
        ], NgcProgressbarComponent.prototype, "id", void 0);
        __decorate([
            core.Input()
        ], NgcProgressbarComponent.prototype, "styles", void 0);
        __decorate([
            core.ViewChild(CircleProgressbarComponent)
        ], NgcProgressbarComponent.prototype, "circleProgressbarComponent", void 0);
        __decorate([
            core.HostListener('window:resize', [])
        ], NgcProgressbarComponent.prototype, "onResize", null);
        NgcProgressbarComponent = __decorate([
            core.Component({
                selector: 'ngc-progressbar',
                template: "\n    <ngc-circle-progressbar\n      [progressbar]=\"capturedInputs\"\n      *ngIf=\"type.toLowerCase() === 'circle'\"\n    ></ngc-circle-progressbar>\n    <ngc-line-progressbar\n      [progressbar]=\"capturedInputs\"\n      *ngIf=\"type.toLowerCase() === 'bar'\"\n    ></ngc-line-progressbar>\n  "
            })
        ], NgcProgressbarComponent);
        return NgcProgressbarComponent;
    }());

    var LineProgressbarComponent = /** @class */ (function () {
        function LineProgressbarComponent() {
        }
        LineProgressbarComponent.prototype.ngOnInit = function () { };
        LineProgressbarComponent.prototype.ngAfterViewInit = function () {
            this.canvas = (document.querySelector(".progressbar--bar#" + this.progressbar.progressBarId));
            // drawig canvas initially
            this.drawBar(this.canvas, this.progressbar.parentElemnent.width);
        };
        LineProgressbarComponent.prototype.drawBar = function (canvas, parentWidth) {
            console.log(this.progressbar);
            // set context
            var ctx = canvas.getContext('2d');
            // canvas height width
            canvas.width = parentWidth;
            canvas.height = this.progressbar.baseStyles.lineWidth;
            // draw base bar
            ctx.beginPath();
            ctx.rect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = this.progressbar.baseStyles.color;
            ctx.fill();
            // draw bar
            var parcentageValue = this.progressbar.progressBarValue;
            var parcentageWidth = (canvas.width / 100) * this.progressbar.progressBarValue;
            ctx.beginPath();
            ctx.rect(0, (this.progressbar.baseStyles.lineWidth -
                this.progressbar.barStyles.lineWidth) /
                2, parcentageWidth, this.progressbar.barStyles.lineWidth);
            ctx.fillStyle = this.progressbar.barStyles.color;
            ctx.fill();
            // render text
            ctx.font = this.progressbar.textStyles.fontSize + "px " + this.progressbar.textStyles.fontFamily;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillStyle = this.progressbar.textStyles.color;
            ctx.fillText(parcentageValue + "%", canvas.width / 2, canvas.height / 2 + 5);
        };
        __decorate([
            core.Input()
        ], LineProgressbarComponent.prototype, "progressbar", void 0);
        LineProgressbarComponent = __decorate([
            core.Component({
                selector: 'ngc-line-progressbar',
                template: "<canvas class=\"progressbar--bar\" id=\"{{ progressbar.progressBarId }}\"></canvas>\r\n",
                styles: ["canvas{max-width:100%;vertical-align:middle}"]
            })
        ], LineProgressbarComponent);
        return LineProgressbarComponent;
    }());

    var NgcProgressbarModule = /** @class */ (function () {
        function NgcProgressbarModule() {
        }
        NgcProgressbarModule = __decorate([
            core.NgModule({
                declarations: [NgcProgressbarComponent, CircleProgressbarComponent, LineProgressbarComponent],
                imports: [common.CommonModule],
                exports: [NgcProgressbarComponent],
            })
        ], NgcProgressbarModule);
        return NgcProgressbarModule;
    }());

    exports.NgcProgressbarComponent = NgcProgressbarComponent;
    exports.NgcProgressbarModule = NgcProgressbarModule;
    exports.NgcProgressbarService = NgcProgressbarService;
    exports.ɵa = CircleProgressbarComponent;
    exports.ɵb = LineProgressbarComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ngc-progressbar.umd.js.map
