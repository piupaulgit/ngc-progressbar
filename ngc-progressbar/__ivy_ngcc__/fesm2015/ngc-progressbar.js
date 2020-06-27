import { __decorate } from 'tslib';
import { ɵɵdefineInjectable, Injectable, Input, Component, ElementRef, ViewChild, HostListener, NgModule } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';

function NgcProgressbarComponent_ngc_circle_progressbar_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "ngc-circle-progressbar", 1);
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("progressbar", ctx_r0.capturedInputs);
} }
function NgcProgressbarComponent_ngc_line_progressbar_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "ngc-line-progressbar", 1);
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("progressbar", ctx_r1.capturedInputs);
} }
let NgcProgressbarService = class NgcProgressbarService {
    constructor() { }
};
NgcProgressbarService.ɵfac = function NgcProgressbarService_Factory(t) { return new (t || NgcProgressbarService)(); };
NgcProgressbarService.ɵprov = ɵɵdefineInjectable({ factory: function NgcProgressbarService_Factory() { return new NgcProgressbarService(); }, token: NgcProgressbarService, providedIn: "root" });

let CircleProgressbarComponent = class CircleProgressbarComponent {
    constructor() { }
    ngOnInit() { }
    ngAfterViewInit() {
        this.canvas = (document.querySelector(`.progressbar--circle#${this.progressbar.progressBarId}`));
        // drawig canvas initially
        this.drawCircle(this.canvas, this.progressbar.parentElemnent.width);
    }
    drawCircle(canvas, parentWidth) {
        // set context
        const ctx = canvas.getContext('2d');
        // canvas height width
        canvas.width = parentWidth;
        const circleRadious = this.progressbar.progressBarRadius * 2 +
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
        const parcentageValue = this.progressbar.progressBarValue;
        const renderdCircleValue = (2 / 100) * parcentageValue + 1.5;
        ctx.beginPath();
        ctx.arc(canvas.width / 2, canvas.height / 2, circleRadious, 1.5 * Math.PI, renderdCircleValue * Math.PI);
        ctx.strokeStyle = this.progressbar.barStyles.color;
        ctx.lineWidth = this.progressbar.barStyles.lineWidth;
        ctx.lineCap = this.progressbar.barStyles.style;
        ctx.stroke();
        // render text
        ctx.font = `${this.progressbar.textStyles.fontSize}px ${this.progressbar.textStyles.fontFamily}`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillStyle = this.progressbar.textStyles.color;
        ctx.fillText(`${parcentageValue}%`, canvas.width / 2, canvas.height / 2 + 5);
        console.log(this.progressbar.textStyles.color);
    }
    drawCircleOnResize(parentWidth) {
        this.drawCircle(this.canvas, parentWidth);
    }
};
CircleProgressbarComponent.ɵfac = function CircleProgressbarComponent_Factory(t) { return new (t || CircleProgressbarComponent)(); };
CircleProgressbarComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: CircleProgressbarComponent, selectors: [["ngc-circle-progressbar"]], inputs: { progressbar: "progressbar" }, decls: 1, vars: 1, consts: [[1, "progressbar--circle", 3, "id"]], template: function CircleProgressbarComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelement(0, "canvas", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵpropertyInterpolate("id", ctx.progressbar.progressBarId);
    } }, styles: ["canvas[_ngcontent-%COMP%]{max-width:100%;vertical-align:middle}"] });
__decorate([
    Input()
], CircleProgressbarComponent.prototype, "progressbar", void 0);

let NgcProgressbarComponent = class NgcProgressbarComponent {
    constructor(elRef) {
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
        this.resizeSubject = new Subject();
        this.resizeSubject.pipe(debounceTime(100)).subscribe((parentWidth) => {
            this.circleProgressbarComponent.drawCircleOnResize(parentWidth);
        });
    }
    ngOnInit() { }
    ngOnChanges() {
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
    }
    onResize() {
        this.capturedInputs.parentElemnent.width = this.elRef.nativeElement.parentElement.clientWidth;
        this.resizeSubject.next(this.capturedInputs.parentElemnent.width);
    }
};
NgcProgressbarComponent.ɵfac = function NgcProgressbarComponent_Factory(t) { return new (t || NgcProgressbarComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
NgcProgressbarComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NgcProgressbarComponent, selectors: [["ngc-progressbar"]], viewQuery: function NgcProgressbarComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(CircleProgressbarComponent, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.circleProgressbarComponent = _t.first);
    } }, hostBindings: function NgcProgressbarComponent_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("resize", function NgcProgressbarComponent_resize_HostBindingHandler() { return ctx.onResize(); }, false, ɵngcc0.ɵɵresolveWindow);
    } }, inputs: { type: "type", value: "value", id: "id", styles: "styles" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 2, vars: 2, consts: [[3, "progressbar", 4, "ngIf"], [3, "progressbar"]], template: function NgcProgressbarComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, NgcProgressbarComponent_ngc_circle_progressbar_0_Template, 1, 1, "ngc-circle-progressbar", 0);
        ɵngcc0.ɵɵtemplate(1, NgcProgressbarComponent_ngc_line_progressbar_1_Template, 1, 1, "ngc-line-progressbar", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", ctx.type.toLowerCase() === "circle");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.type.toLowerCase() === "bar");
    } }, directives: function () { return [ɵngcc1.NgIf, CircleProgressbarComponent,
        LineProgressbarComponent]; }, encapsulation: 2 });
NgcProgressbarComponent.ctorParameters = () => [
    { type: ElementRef }
];
__decorate([
    Input()
], NgcProgressbarComponent.prototype, "type", void 0);
__decorate([
    Input()
], NgcProgressbarComponent.prototype, "value", void 0);
__decorate([
    Input()
], NgcProgressbarComponent.prototype, "id", void 0);
__decorate([
    Input()
], NgcProgressbarComponent.prototype, "styles", void 0);
__decorate([
    ViewChild(CircleProgressbarComponent)
], NgcProgressbarComponent.prototype, "circleProgressbarComponent", void 0);
__decorate([
    HostListener('window:resize', [])
], NgcProgressbarComponent.prototype, "onResize", null);

let LineProgressbarComponent = class LineProgressbarComponent {
    constructor() { }
    ngOnInit() { }
    ngAfterViewInit() {
        this.canvas = (document.querySelector(`.progressbar--bar#${this.progressbar.progressBarId}`));
        // drawig canvas initially
        this.drawBar(this.canvas, this.progressbar.parentElemnent.width);
    }
    drawBar(canvas, parentWidth) {
        console.log(this.progressbar);
        // set context
        const ctx = canvas.getContext('2d');
        // canvas height width
        canvas.width = parentWidth;
        canvas.height = this.progressbar.baseStyles.lineWidth;
        // draw base bar
        ctx.beginPath();
        ctx.rect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = this.progressbar.baseStyles.color;
        ctx.fill();
        // draw bar
        const parcentageValue = this.progressbar.progressBarValue;
        const parcentageWidth = (canvas.width / 100) * this.progressbar.progressBarValue;
        ctx.beginPath();
        ctx.rect(0, (this.progressbar.baseStyles.lineWidth -
            this.progressbar.barStyles.lineWidth) /
            2, parcentageWidth, this.progressbar.barStyles.lineWidth);
        ctx.fillStyle = this.progressbar.barStyles.color;
        ctx.fill();
        // render text
        ctx.font = `${this.progressbar.textStyles.fontSize}px ${this.progressbar.textStyles.fontFamily}`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillStyle = this.progressbar.textStyles.color;
        ctx.fillText(`${parcentageValue}%`, canvas.width / 2, canvas.height / 2 + 5);
    }
};
LineProgressbarComponent.ɵfac = function LineProgressbarComponent_Factory(t) { return new (t || LineProgressbarComponent)(); };
LineProgressbarComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: LineProgressbarComponent, selectors: [["ngc-line-progressbar"]], inputs: { progressbar: "progressbar" }, decls: 1, vars: 1, consts: [[1, "progressbar--bar", 3, "id"]], template: function LineProgressbarComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelement(0, "canvas", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵpropertyInterpolate("id", ctx.progressbar.progressBarId);
    } }, styles: ["canvas[_ngcontent-%COMP%]{max-width:100%;vertical-align:middle}"] });
__decorate([
    Input()
], LineProgressbarComponent.prototype, "progressbar", void 0);

let NgcProgressbarModule = class NgcProgressbarModule {
};
NgcProgressbarModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: NgcProgressbarModule });
NgcProgressbarModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function NgcProgressbarModule_Factory(t) { return new (t || NgcProgressbarModule)(); }, imports: [[CommonModule]] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NgcProgressbarService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CircleProgressbarComponent, [{
        type: Component,
        args: [{
                selector: 'ngc-circle-progressbar',
                template: "<canvas\r\n  class=\"progressbar--circle\"\r\n  id=\"{{ progressbar.progressBarId }}\"\r\n></canvas>\r\n",
                styles: ["canvas{max-width:100%;vertical-align:middle}"]
            }]
    }], function () { return []; }, { progressbar: [{
            type: Input
        }] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NgcProgressbarComponent, [{
        type: Component,
        args: [{
                selector: 'ngc-progressbar',
                template: `
    <ngc-circle-progressbar
      [progressbar]="capturedInputs"
      *ngIf="type.toLowerCase() === 'circle'"
    ></ngc-circle-progressbar>
    <ngc-line-progressbar
      [progressbar]="capturedInputs"
      *ngIf="type.toLowerCase() === 'bar'"
    ></ngc-line-progressbar>
  `
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }]; }, { onResize: [{
            type: HostListener,
            args: ['window:resize', []]
        }], type: [{
            type: Input
        }], value: [{
            type: Input
        }], id: [{
            type: Input
        }], styles: [{
            type: Input
        }], circleProgressbarComponent: [{
            type: ViewChild,
            args: [CircleProgressbarComponent]
        }] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(LineProgressbarComponent, [{
        type: Component,
        args: [{
                selector: 'ngc-line-progressbar',
                template: "<canvas class=\"progressbar--bar\" id=\"{{ progressbar.progressBarId }}\"></canvas>\r\n",
                styles: ["canvas{max-width:100%;vertical-align:middle}"]
            }]
    }], function () { return []; }, { progressbar: [{
            type: Input
        }] }); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NgcProgressbarModule, { declarations: function () { return [NgcProgressbarComponent,
        CircleProgressbarComponent,
        LineProgressbarComponent]; }, imports: function () { return [CommonModule]; }, exports: function () { return [NgcProgressbarComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NgcProgressbarModule, [{
        type: NgModule,
        args: [{
                declarations: [NgcProgressbarComponent, CircleProgressbarComponent, LineProgressbarComponent],
                imports: [CommonModule],
                exports: [NgcProgressbarComponent]
            }]
    }], null, null); })();

/*
 * Public API Surface of ngc-progressbar
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NgcProgressbarComponent, NgcProgressbarModule, NgcProgressbarService, CircleProgressbarComponent as ɵa, LineProgressbarComponent as ɵb };

//# sourceMappingURL=ngc-progressbar.js.map