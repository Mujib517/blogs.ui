import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Blog } from "../shared/blog.model";
import { BlogService } from "../shared/blog.service";


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

       <div class="row">
            <button class="btn btn-danger" (click)="onDelete(blog._id)">Remove</button>
       </div>
    `
})
export class BlogComponent {

    @Input() blog: Blog;
    @Output() notify: EventEmitter<any>;

    constructor(private blogSvc: BlogService) {
        this.notify = new EventEmitter();
    }

    onDelete(id: string) {
        this.blogSvc.remove(id)
            .subscribe(
            () => this.notify.emit({msg:"Message from child"}),
            (err) => console.log(err)
            )
    }
}