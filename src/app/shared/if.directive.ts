import { Directive, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[if]',
    inputs: ['if']
})
export class IfDirective {

    constructor(private template: TemplateRef<any>, private container: ViewContainerRef) {

    }

    set if(value: boolean) {
        if (value) {
            this.container.createEmbeddedView(this.template);
        }
        else {
            //remove from dom
            this.container.clear();
        }
    }
}