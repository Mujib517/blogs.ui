import { Component,Input } from '@angular/core';

@Component({
    selector: 'app-blog',
    template: `<div>
       <h3>{{blog.title}}</h3>
       <p>{{blog.content}}</p>
       <div>IsPublished: <input type="checkbox" [(ngModel)]="blog.published"/></div>
    `
})
export class BlogComponent {
    @Input() blog: any;
    constructor() {}
}