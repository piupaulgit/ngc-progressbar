import { __decorate } from "tslib";
import { Component, OnInit, Input, OnChanges, ElementRef, HostListener, ViewChild, } from '@angular/core';
import { CircleProgressbarComponent } from './circle-progressbar/circle-progressbar.component';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
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
export { NgcProgressbarComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdjLXByb2dyZXNzYmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nYy1wcm9ncmVzc2Jhci8iLCJzb3VyY2VzIjpbImxpYi9uZ2MtcHJvZ3Jlc3NiYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULE1BQU0sRUFDTixLQUFLLEVBQ0wsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osU0FBUyxHQUNWLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBQy9GLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBZ0I5QztJQW9DRSxpQ0FBb0IsS0FBaUI7UUFBckMsaUJBSUM7UUFKbUIsVUFBSyxHQUFMLEtBQUssQ0FBWTtRQXhCckMscUJBQWdCLEdBQThCO1lBQzVDLEtBQUssRUFBRSxTQUFTO1lBQ2hCLFNBQVMsRUFBRSxHQUFHO1lBQ2QsS0FBSyxFQUFFLE1BQU07U0FDZCxDQUFDO1FBRUYsb0JBQWUsR0FBNkI7WUFDMUMsS0FBSyxFQUFFLE1BQU07WUFDYixTQUFTLEVBQUUsR0FBRztZQUNkLEtBQUssRUFBRSxNQUFNO1NBQ2QsQ0FBQztRQUVGLHFCQUFnQixHQUE4QjtZQUM1QyxRQUFRLEVBQUUsRUFBRTtZQUNaLFVBQVUsRUFBRSxPQUFPO1lBQ25CLEtBQUssRUFBRSxLQUFLO1lBQ1osUUFBUSxFQUFFLFFBQVE7WUFDbEIsSUFBSSxFQUFFLGVBQWU7U0FDdEIsQ0FBQztRQUVGLGtCQUFhLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUs1QixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQyxXQUFXO1lBQy9ELEtBQUksQ0FB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QjtRQWRuQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsaUJBQWlCO1lBQzNCLFFBQVEsRUFBRSwyU0FTVDtTQUVGLENBQUM7T0FDVyx1QkFBdUIsQ0F1R25DO0lBQUQsOEJBQUM7Q0FBQSxBQXZHRCxJQXVHQztTQXZHWSx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBPbkluaXQsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgSG9zdExpc3RlbmVyLFxyXG4gIFZpZXdDaGlsZCxcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUHJvZ3Jlc3NiYXIgfSBmcm9tICcuL3Byb2dyZXNzYmFyJztcclxuaW1wb3J0IHsgQ2lyY2xlUHJvZ3Jlc3NiYXJDb21wb25lbnQgfSBmcm9tICcuL2NpcmNsZS1wcm9ncmVzc2Jhci9jaXJjbGUtcHJvZ3Jlc3NiYXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ25nYy1wcm9ncmVzc2JhcicsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxuZ2MtY2lyY2xlLXByb2dyZXNzYmFyXHJcbiAgICAgIFtwcm9ncmVzc2Jhcl09XCJjYXB0dXJlZElucHV0c1wiXHJcbiAgICAgICpuZ0lmPVwidHlwZS50b0xvd2VyQ2FzZSgpID09PSAnY2lyY2xlJ1wiXHJcbiAgICA+PC9uZ2MtY2lyY2xlLXByb2dyZXNzYmFyPlxyXG4gICAgPG5nYy1saW5lLXByb2dyZXNzYmFyXHJcbiAgICAgIFtwcm9ncmVzc2Jhcl09XCJjYXB0dXJlZElucHV0c1wiXHJcbiAgICAgICpuZ0lmPVwidHlwZS50b0xvd2VyQ2FzZSgpID09PSAnYmFyJ1wiXHJcbiAgICA+PC9uZ2MtbGluZS1wcm9ncmVzc2Jhcj5cclxuICBgLFxyXG4gIHN0eWxlczogW10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ2NQcm9ncmVzc2JhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcclxuICBASW5wdXQoKVxyXG4gIHR5cGU6IHN0cmluZztcclxuICBASW5wdXQoKVxyXG4gIHZhbHVlOiBudW1iZXI7XHJcbiAgQElucHV0KClcclxuICBpZDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpXHJcbiAgc3R5bGVzO1xyXG5cclxuICBjYXB0dXJlZElucHV0czogUHJvZ3Jlc3NiYXI7XHJcblxyXG4gIGRlZmF1bHRCYXNlU3R5bGU6IFByb2dyZXNzYmFyWydiYXNlU3R5bGVzJ10gPSB7XHJcbiAgICBjb2xvcjogJyNmMWYxZjEnLFxyXG4gICAgbGluZVdpZHRoOiAxMDAsXHJcbiAgICBzdHlsZTogJ2J1dHQnLFxyXG4gIH07XHJcblxyXG4gIGRlZmF1bHRCYXJTdHlsZTogUHJvZ3Jlc3NiYXJbJ2JhclN0eWxlcyddID0ge1xyXG4gICAgY29sb3I6ICcjMzMzJyxcclxuICAgIGxpbmVXaWR0aDogMTAwLFxyXG4gICAgc3R5bGU6ICdidXR0JyxcclxuICB9O1xyXG5cclxuICBkZWZhdWx0VGV4dFN0eWxlOiBQcm9ncmVzc2JhclsndGV4dFN0eWxlcyddID0ge1xyXG4gICAgZm9udFNpemU6IDIwLFxyXG4gICAgZm9udEZhbWlseTogJ0FyaWFsJyxcclxuICAgIGNvbG9yOiAncmVkJyxcclxuICAgIHBvc2l0aW9uOiAnY2VudGVyJyxcclxuICAgIGh0bWw6ICc8c3Bhbj48L3NwYW4+JyxcclxuICB9O1xyXG5cclxuICByZXNpemVTdWJqZWN0ID0gbmV3IFN1YmplY3QoKTtcclxuXHJcbiAgQFZpZXdDaGlsZChDaXJjbGVQcm9ncmVzc2JhckNvbXBvbmVudClcclxuICBwcml2YXRlIGNpcmNsZVByb2dyZXNzYmFyQ29tcG9uZW50OiBDaXJjbGVQcm9ncmVzc2JhckNvbXBvbmVudDtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsUmVmOiBFbGVtZW50UmVmKSB7XHJcbiAgICB0aGlzLnJlc2l6ZVN1YmplY3QucGlwZShkZWJvdW5jZVRpbWUoMTAwKSkuc3Vic2NyaWJlKChwYXJlbnRXaWR0aCkgPT4ge1xyXG4gICAgICB0aGlzLmNpcmNsZVByb2dyZXNzYmFyQ29tcG9uZW50LmRyYXdDaXJjbGVPblJlc2l6ZShwYXJlbnRXaWR0aCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge31cclxuXHJcbiAgbmdPbkNoYW5nZXMoKSB7XHJcbiAgICB0aGlzLmNhcHR1cmVkSW5wdXRzID0ge1xyXG4gICAgICBwYXJlbnRFbGVtbmVudDoge1xyXG4gICAgICAgIHdpZHRoOiB0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQucGFyZW50RWxlbWVudC5jbGllbnRXaWR0aCxcclxuICAgICAgICBoZWlnaHQ6IHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudC5wYXJlbnRFbGVtZW50LmNsaWVudEhlaWdodCxcclxuICAgICAgfSxcclxuICAgICAgcHJvZ3Jlc3NCYXJUeXBlOiB0aGlzLnR5cGUsXHJcbiAgICAgIHByb2dyZXNzQmFyVmFsdWU6IHRoaXMudmFsdWUsXHJcbiAgICAgIHByb2dyZXNzQmFySWQ6IHRoaXMuaWQsXHJcbiAgICAgIHByb2dyZXNzQmFyUmFkaXVzOiB0aGlzLnN0eWxlcz8ucHJvZ3Jlc3NCYXJSYWRpdXNcclxuICAgICAgICA/IHRoaXMuc3R5bGVzPy5wcm9ncmVzc0JhclJhZGl1c1xyXG4gICAgICAgIDogJzEwMCcsXHJcbiAgICAgIGJhclN0eWxlczoge1xyXG4gICAgICAgIGNvbG9yOiB0aGlzLnN0eWxlcz8uYmFyU3R5bGVzPy5jb2xvclxyXG4gICAgICAgICAgPyB0aGlzLnN0eWxlcz8uYmFyU3R5bGVzPy5jb2xvclxyXG4gICAgICAgICAgOiB0aGlzLmRlZmF1bHRCYXJTdHlsZS5jb2xvcixcclxuICAgICAgICBzdHlsZTogdGhpcy5zdHlsZXM/LmJhclN0eWxlcz8uc3R5bGVcclxuICAgICAgICAgID8gdGhpcy5zdHlsZXM/LmJhclN0eWxlcz8uc3R5bGVcclxuICAgICAgICAgIDogdGhpcy5kZWZhdWx0QmFyU3R5bGUuc3R5bGUsXHJcbiAgICAgICAgbGluZVdpZHRoOiB0aGlzLnN0eWxlcz8uYmFyU3R5bGVzPy5saW5lV2lkdGhcclxuICAgICAgICAgID8gdGhpcy5zdHlsZXM/LmJhclN0eWxlcz8ubGluZVdpZHRoXHJcbiAgICAgICAgICA6IHRoaXMuZGVmYXVsdEJhclN0eWxlLmxpbmVXaWR0aCxcclxuICAgICAgfSxcclxuICAgICAgYmFzZVN0eWxlczoge1xyXG4gICAgICAgIGNvbG9yOiB0aGlzLnN0eWxlcz8uYmFzZVN0eWxlcz8uY29sb3JcclxuICAgICAgICAgID8gdGhpcy5zdHlsZXM/LmJhc2VTdHlsZXM/LmNvbG9yXHJcbiAgICAgICAgICA6IHRoaXMuZGVmYXVsdEJhc2VTdHlsZS5jb2xvcixcclxuICAgICAgICBzdHlsZTogdGhpcy5zdHlsZXM/LmJhc2VTdHlsZXM/LnN0eWxlXHJcbiAgICAgICAgICA/IHRoaXMuc3R5bGVzPy5iYXNlU3R5bGVzPy5zdHlsZVxyXG4gICAgICAgICAgOiB0aGlzLmRlZmF1bHRCYXNlU3R5bGUuc3R5bGUsXHJcbiAgICAgICAgbGluZVdpZHRoOiB0aGlzLnN0eWxlcz8uYmFzZVN0eWxlcz8ubGluZVdpZHRoXHJcbiAgICAgICAgICA/IHRoaXMuc3R5bGVzPy5iYXNlU3R5bGVzPy5saW5lV2lkdGhcclxuICAgICAgICAgIDogdGhpcy5kZWZhdWx0QmFzZVN0eWxlLmxpbmVXaWR0aCxcclxuICAgICAgfSxcclxuICAgICAgdGV4dFN0eWxlczoge1xyXG4gICAgICAgIGNvbG9yOiB0aGlzLnN0eWxlcz8udGV4dFN0eWxlcz8uY29sb3JcclxuICAgICAgICAgID8gdGhpcy5zdHlsZXM/LnRleHRTdHlsZXM/LmNvbG9yXHJcbiAgICAgICAgICA6IHRoaXMuZGVmYXVsdFRleHRTdHlsZS5jb2xvcixcclxuICAgICAgICBmb250U2l6ZTogdGhpcy5zdHlsZXM/LnRleHRTdHlsZXM/LmZvbnRTaXplXHJcbiAgICAgICAgICA/IHRoaXMuc3R5bGVzPy50ZXh0U3R5bGVzPy5mb250U2l6ZVxyXG4gICAgICAgICAgOiB0aGlzLmRlZmF1bHRUZXh0U3R5bGUuZm9udFNpemUsXHJcbiAgICAgICAgZm9udEZhbWlseTogdGhpcy5zdHlsZXM/LnRleHRTdHlsZXM/LmZvbnRGYW1pbHlcclxuICAgICAgICAgID8gdGhpcy5zdHlsZXM/LnRleHRTdHlsZXM/LmZvbnRGYW1pbHlcclxuICAgICAgICAgIDogdGhpcy5kZWZhdWx0VGV4dFN0eWxlLmZvbnRGYW1pbHksXHJcbiAgICAgICAgcG9zaXRpb246IHRoaXMuc3R5bGVzPy50ZXh0U3R5bGVzPy5wb3NpdGlvblxyXG4gICAgICAgICAgPyB0aGlzLnN0eWxlcz8udGV4dFN0eWxlcz8ucG9zaXRpb25cclxuICAgICAgICAgIDogdGhpcy5kZWZhdWx0VGV4dFN0eWxlLnBvc2l0aW9uLFxyXG4gICAgICAgIGh0bWw6IHRoaXMuc3R5bGVzPy50ZXh0U3R5bGVzPy5odG1sXHJcbiAgICAgICAgICA/IHRoaXMuc3R5bGVzPy50ZXh0U3R5bGVzPy5odG1sXHJcbiAgICAgICAgICA6IHRoaXMuZGVmYXVsdFRleHRTdHlsZS5odG1sLFxyXG4gICAgICB9LFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzpyZXNpemUnLCBbXSlcclxuICBvblJlc2l6ZSgpIHtcclxuICAgIHRoaXMuY2FwdHVyZWRJbnB1dHMucGFyZW50RWxlbW5lbnQud2lkdGggPSB0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQucGFyZW50RWxlbWVudC5jbGllbnRXaWR0aDtcclxuICAgIHRoaXMucmVzaXplU3ViamVjdC5uZXh0KHRoaXMuY2FwdHVyZWRJbnB1dHMucGFyZW50RWxlbW5lbnQud2lkdGgpO1xyXG4gIH1cclxufVxyXG4iXX0=