import { Component, OnInit } from '@angular/core';
import { BlogService } from "../shared/blog.service";

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html'
})
export class BlogListComponent implements OnInit {
  blogs: Array<any> = [];

  users: Array<any> = [];

  // private service: BlogService;
  // //dependency injection
  // constructor(service: BlogService) {
  //   this.service = service;
  // }

  constructor(private service: BlogService) { }

  ngOnInit() {
    // this.blogs = this.service.get();

    // this.service.get()
    //   .subscribe(this.next, this.failed, this.complete);


    this.service.get()
      .subscribe(response => this.users = response.json(), err => console.log(err));
  }
}





