import { Component, Input } from '@angular/core';


@Component({
    selector: 'app-blog',
    template: `
    <div>
       <h3>{{blog.title | uppercase}}</h3>
       <p>{{blog.content}}</p>
       <div>IsPublished: <input type="checkbox" [(ngModel)]="blog.published"/></div>
       <hr/>
       <div>
        <div class="pull-left">Views: {{blog.views}}</div>
        <div class="pull-right">{{blog.lastUpdated | time}}</div>
       </div>
    `
})
export class BlogComponent {

    myObj:any;

    @Input() blog: any;
    constructor() { }
}