import { Component, Input } from '@angular/core';
import { Blog } from "../shared/blog.model";


@Component({
    selector: 'app-blog',
    template: `
    <div>
       <a routerLink="/blog/{{blog._id}}"><h3>{{blog.title | uppercase}}</h3></a>
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

    @Input() blog: Blog;
    constructor() { }
}