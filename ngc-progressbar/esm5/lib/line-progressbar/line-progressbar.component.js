import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
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
export { LineProgressbarComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGluZS1wcm9ncmVzc2Jhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ2MtcHJvZ3Jlc3NiYXIvIiwic291cmNlcyI6WyJsaWIvbGluZS1wcm9ncmVzc2Jhci9saW5lLXByb2dyZXNzYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBUXhFO0lBR0U7SUFBZSxDQUFDO0lBRWhCLDJDQUFRLEdBQVIsY0FBa0IsQ0FBQztJQUVuQixrREFBZSxHQUFmO1FBQ0UsSUFBSSxDQUFDLE1BQU0sR0FBc0IsQ0FDL0IsUUFBUSxDQUFDLGFBQWEsQ0FDcEIsdUJBQXFCLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBZSxDQUN0RCxDQUNGLENBQUM7UUFFRiwwQkFBMEI7UUFDMUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ25FLENBQUM7SUFFRCwwQ0FBTyxHQUFQLFVBQVEsTUFBTSxFQUFFLFdBQVc7UUFDekIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDOUIsY0FBYztRQUNkLElBQU0sR0FBRyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEMsc0JBQXNCO1FBQ3RCLE1BQU0sQ0FBQyxLQUFLLEdBQUcsV0FBVyxDQUFDO1FBQzNCLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDO1FBRXRELGdCQUFnQjtRQUNoQixHQUFHLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDaEIsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzVDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDO1FBQ2xELEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUVYLFdBQVc7UUFDWCxJQUFNLGVBQWUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDO1FBQzFELElBQU0sZUFBZSxHQUNuQixDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQztRQUMzRCxHQUFHLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDaEIsR0FBRyxDQUFDLElBQUksQ0FDTixDQUFDLEVBQ0QsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxTQUFTO1lBQ3BDLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQztZQUNyQyxDQUFDLEVBQ0gsZUFBZSxFQUNmLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FDckMsQ0FBQztRQUNGLEdBQUcsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDO1FBQ2pELEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUVYLGNBQWM7UUFDZCxHQUFHLENBQUMsSUFBSSxHQUFNLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLFFBQVEsV0FBTSxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxVQUFZLENBQUM7UUFDakcsR0FBRyxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7UUFDekIsR0FBRyxDQUFDLFlBQVksR0FBRyxRQUFRLENBQUM7UUFDNUIsR0FBRyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUM7UUFDbEQsR0FBRyxDQUFDLFFBQVEsQ0FDUCxlQUFlLE1BQUcsRUFDckIsTUFBTSxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQ2hCLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FDdEIsQ0FBQztJQUNKLENBQUM7SUF6RFE7UUFBUixLQUFLLEVBQUU7aUVBQTBCO0lBRHZCLHdCQUF3QjtRQUxwQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsc0JBQXNCO1lBQ2hDLG1HQUFnRDs7U0FFakQsQ0FBQztPQUNXLHdCQUF3QixDQTJEcEM7SUFBRCwrQkFBQztDQUFBLEFBM0RELElBMkRDO1NBM0RZLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgQWZ0ZXJWaWV3SW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQcm9ncmVzc2JhciB9IGZyb20gJy4uL3Byb2dyZXNzYmFyJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbmdjLWxpbmUtcHJvZ3Jlc3NiYXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9saW5lLXByb2dyZXNzYmFyLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9saW5lLXByb2dyZXNzYmFyLmNvbXBvbmVudC5jc3MnXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIExpbmVQcm9ncmVzc2JhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XHJcbiAgQElucHV0KCkgcHJvZ3Jlc3NiYXI6IFByb2dyZXNzYmFyO1xyXG4gIGNhbnZhczogYW55O1xyXG4gIGNvbnN0cnVjdG9yKCkge31cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7fVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICB0aGlzLmNhbnZhcyA9IDxIVE1MQ2FudmFzRWxlbWVudD4oXHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICAgYC5wcm9ncmVzc2Jhci0tYmFyIyR7dGhpcy5wcm9ncmVzc2Jhci5wcm9ncmVzc0JhcklkfWBcclxuICAgICAgKVxyXG4gICAgKTtcclxuXHJcbiAgICAvLyBkcmF3aWcgY2FudmFzIGluaXRpYWxseVxyXG4gICAgdGhpcy5kcmF3QmFyKHRoaXMuY2FudmFzLCB0aGlzLnByb2dyZXNzYmFyLnBhcmVudEVsZW1uZW50LndpZHRoKTtcclxuICB9XHJcblxyXG4gIGRyYXdCYXIoY2FudmFzLCBwYXJlbnRXaWR0aCkge1xyXG4gICAgY29uc29sZS5sb2codGhpcy5wcm9ncmVzc2Jhcik7XHJcbiAgICAvLyBzZXQgY29udGV4dFxyXG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICAvLyBjYW52YXMgaGVpZ2h0IHdpZHRoXHJcbiAgICBjYW52YXMud2lkdGggPSBwYXJlbnRXaWR0aDtcclxuICAgIGNhbnZhcy5oZWlnaHQgPSB0aGlzLnByb2dyZXNzYmFyLmJhc2VTdHlsZXMubGluZVdpZHRoO1xyXG5cclxuICAgIC8vIGRyYXcgYmFzZSBiYXJcclxuICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgIGN0eC5yZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XHJcbiAgICBjdHguZmlsbFN0eWxlID0gdGhpcy5wcm9ncmVzc2Jhci5iYXNlU3R5bGVzLmNvbG9yO1xyXG4gICAgY3R4LmZpbGwoKTtcclxuXHJcbiAgICAvLyBkcmF3IGJhclxyXG4gICAgY29uc3QgcGFyY2VudGFnZVZhbHVlID0gdGhpcy5wcm9ncmVzc2Jhci5wcm9ncmVzc0JhclZhbHVlO1xyXG4gICAgY29uc3QgcGFyY2VudGFnZVdpZHRoID1cclxuICAgICAgKGNhbnZhcy53aWR0aCAvIDEwMCkgKiB0aGlzLnByb2dyZXNzYmFyLnByb2dyZXNzQmFyVmFsdWU7XHJcbiAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICBjdHgucmVjdChcclxuICAgICAgMCxcclxuICAgICAgKHRoaXMucHJvZ3Jlc3NiYXIuYmFzZVN0eWxlcy5saW5lV2lkdGggLVxyXG4gICAgICAgIHRoaXMucHJvZ3Jlc3NiYXIuYmFyU3R5bGVzLmxpbmVXaWR0aCkgL1xyXG4gICAgICAgIDIsXHJcbiAgICAgIHBhcmNlbnRhZ2VXaWR0aCxcclxuICAgICAgdGhpcy5wcm9ncmVzc2Jhci5iYXJTdHlsZXMubGluZVdpZHRoXHJcbiAgICApO1xyXG4gICAgY3R4LmZpbGxTdHlsZSA9IHRoaXMucHJvZ3Jlc3NiYXIuYmFyU3R5bGVzLmNvbG9yO1xyXG4gICAgY3R4LmZpbGwoKTtcclxuXHJcbiAgICAvLyByZW5kZXIgdGV4dFxyXG4gICAgY3R4LmZvbnQgPSBgJHt0aGlzLnByb2dyZXNzYmFyLnRleHRTdHlsZXMuZm9udFNpemV9cHggJHt0aGlzLnByb2dyZXNzYmFyLnRleHRTdHlsZXMuZm9udEZhbWlseX1gO1xyXG4gICAgY3R4LnRleHRBbGlnbiA9ICdjZW50ZXInO1xyXG4gICAgY3R4LnRleHRCYXNlbGluZSA9ICdtaWRkbGUnO1xyXG4gICAgY3R4LmZpbGxTdHlsZSA9IHRoaXMucHJvZ3Jlc3NiYXIudGV4dFN0eWxlcy5jb2xvcjtcclxuICAgIGN0eC5maWxsVGV4dChcclxuICAgICAgYCR7cGFyY2VudGFnZVZhbHVlfSVgLFxyXG4gICAgICBjYW52YXMud2lkdGggLyAyLFxyXG4gICAgICBjYW52YXMuaGVpZ2h0IC8gMiArIDVcclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiJdfQ==