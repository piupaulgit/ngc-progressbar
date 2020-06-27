import { OnInit, OnChanges, ElementRef } from '@angular/core';
import { Progressbar } from './progressbar';
import { Subject } from 'rxjs';
import * as ɵngcc0 from '@angular/core';
export declare class NgcProgressbarComponent implements OnInit, OnChanges {
    private elRef;
    type: string;
    value: number;
    id: string;
    styles: any;
    capturedInputs: Progressbar;
    defaultBaseStyle: Progressbar['baseStyles'];
    defaultBarStyle: Progressbar['barStyles'];
    defaultTextStyle: Progressbar['textStyles'];
    resizeSubject: Subject<unknown>;
    private circleProgressbarComponent;
    constructor(elRef: ElementRef);
    ngOnInit(): void;
    ngOnChanges(): void;
    onResize(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgcProgressbarComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NgcProgressbarComponent, "ngc-progressbar", never, { "type": "type"; "value": "value"; "id": "id"; "styles": "styles"; }, {}, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdjLXByb2dyZXNzYmFyLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJuZ2MtcHJvZ3Jlc3NiYXIuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9uSW5pdCwgT25DaGFuZ2VzLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFByb2dyZXNzYmFyIH0gZnJvbSAnLi9wcm9ncmVzc2Jhcic7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTmdjUHJvZ3Jlc3NiYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XHJcbiAgICBwcml2YXRlIGVsUmVmO1xyXG4gICAgdHlwZTogc3RyaW5nO1xyXG4gICAgdmFsdWU6IG51bWJlcjtcclxuICAgIGlkOiBzdHJpbmc7XHJcbiAgICBzdHlsZXM6IGFueTtcclxuICAgIGNhcHR1cmVkSW5wdXRzOiBQcm9ncmVzc2JhcjtcclxuICAgIGRlZmF1bHRCYXNlU3R5bGU6IFByb2dyZXNzYmFyWydiYXNlU3R5bGVzJ107XHJcbiAgICBkZWZhdWx0QmFyU3R5bGU6IFByb2dyZXNzYmFyWydiYXJTdHlsZXMnXTtcclxuICAgIGRlZmF1bHRUZXh0U3R5bGU6IFByb2dyZXNzYmFyWyd0ZXh0U3R5bGVzJ107XHJcbiAgICByZXNpemVTdWJqZWN0OiBTdWJqZWN0PHVua25vd24+O1xyXG4gICAgcHJpdmF0ZSBjaXJjbGVQcm9ncmVzc2JhckNvbXBvbmVudDtcclxuICAgIGNvbnN0cnVjdG9yKGVsUmVmOiBFbGVtZW50UmVmKTtcclxuICAgIG5nT25Jbml0KCk6IHZvaWQ7XHJcbiAgICBuZ09uQ2hhbmdlcygpOiB2b2lkO1xyXG4gICAgb25SZXNpemUoKTogdm9pZDtcclxufVxyXG4iXX0=