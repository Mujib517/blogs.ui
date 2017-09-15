import { Directive, ElementRef, Input, Renderer } from '@angular/core';

@Directive({
    selector: '[show]',
    inputs: ['show']
})
export class ShowDirective {

    constructor(private el: ElementRef, private renderer: Renderer) {
    }

    set show(val: boolean) {
        // if (!val)
        //     this.el.nativeElement.style.display = "none";
        // else
        //     this.el.nativeElement.style.display = "inline";

        // this.el.nativeElement.style.display = val ? "inline" : "none";

        if (!val)
            this.renderer.setElementStyle(this.el.nativeElement, "display", "none");
        else
            this.renderer.setElementStyle(this.el.nativeElement, "display", "inline");
    }
}