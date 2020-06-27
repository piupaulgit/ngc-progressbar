import { __decorate } from 'tslib';
import { ɵɵdefineInjectable, Injectable, Input, Component, ElementRef, ViewChild, HostListener, NgModule } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

var NgcProgressbarService = /** @class */ (function () {
    function NgcProgressbarService() {
    }
    NgcProgressbarService.ɵprov = ɵɵdefineInjectable({ factory: function NgcProgressbarService_Factory() { return new NgcProgressbarService(); }, token: NgcProgressbarService, providedIn: "root" });
    NgcProgressbarService = __decorate([
        Injectable({
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
        Input()
    ], CircleProgressbarComponent.prototype, "progressbar", void 0);
    CircleProgressbarComponent = __decorate([
        Component({
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
        this.resizeSubject = new Subject();
        this.resizeSubject.pipe(debounceTime(100)).subscribe(function (parentWidth) {
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
        { type: ElementRef }
    ]; };
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
    NgcProgressbarComponent = __decorate([
        Component({
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
        Input()
    ], LineProgressbarComponent.prototype, "progressbar", void 0);
    LineProgressbarComponent = __decorate([
        Component({
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
        NgModule({
            declarations: [NgcProgressbarComponent, CircleProgressbarComponent, LineProgressbarComponent],
            imports: [CommonModule],
            exports: [NgcProgressbarComponent],
        })
    ], NgcProgressbarModule);
    return NgcProgressbarModule;
}());

/*
 * Public API Surface of ngc-progressbar
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NgcProgressbarComponent, NgcProgressbarModule, NgcProgressbarService, CircleProgressbarComponent as ɵa, LineProgressbarComponent as ɵb };
//# sourceMappingURL=ngc-progressbar.js.map
