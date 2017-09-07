import { Component, OnInit } from '@angular/core';
import { BlogService } from "../shared/blog.service";

@Component({
  selector: 'app-blog-detail',
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

    <div>
        <div *ngFor="let comment of blog.comments">
          <h4>{{comment.name}}</h4>
          <h4>{{comment.subject}}</h4>
          <div>{{comment.message}}</div>
          <div class="pull-right">{{comment.date | date}}</div>
          <hr/>
        </div>
    </div>
  `
})
export class BlogDetailComponent implements OnInit {

  blog: any={};

  constructor(private blogSvc: BlogService) { }

  ngOnInit() {
    this.blogSvc.getById("597800e668f3662f785f55a3")
      .subscribe(
      (response) => this.blog = response.json()
      )
  }

}
