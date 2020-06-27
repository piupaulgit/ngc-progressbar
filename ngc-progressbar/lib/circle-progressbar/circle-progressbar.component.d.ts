import { OnInit, AfterViewInit } from '@angular/core';
import { Progressbar } from '../progressbar';
import * as ɵngcc0 from '@angular/core';
export declare class CircleProgressbarComponent implements OnInit, AfterViewInit {
    progressbar: Progressbar;
    canvas: any;
    constructor();
    ngOnInit(): void;
    ngAfterViewInit(): void;
    drawCircle(canvas: any, parentWidth: any): void;
    drawCircleOnResize(parentWidth: any): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CircleProgressbarComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<CircleProgressbarComponent, "ngc-circle-progressbar", never, { "progressbar": "progressbar"; }, {}, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2lyY2xlLXByb2dyZXNzYmFyLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJjaXJjbGUtcHJvZ3Jlc3NiYXIuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQcm9ncmVzc2JhciB9IGZyb20gJy4uL3Byb2dyZXNzYmFyJztcclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQ2lyY2xlUHJvZ3Jlc3NiYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xyXG4gICAgcHJvZ3Jlc3NiYXI6IFByb2dyZXNzYmFyO1xyXG4gICAgY2FudmFzOiBhbnk7XHJcbiAgICBjb25zdHJ1Y3RvcigpO1xyXG4gICAgbmdPbkluaXQoKTogdm9pZDtcclxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkO1xyXG4gICAgZHJhd0NpcmNsZShjYW52YXM6IGFueSwgcGFyZW50V2lkdGg6IGFueSk6IHZvaWQ7XHJcbiAgICBkcmF3Q2lyY2xlT25SZXNpemUocGFyZW50V2lkdGg6IGFueSk6IHZvaWQ7XHJcbn1cclxuIl19