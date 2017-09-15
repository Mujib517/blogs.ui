import { Component, OnInit } from '@angular/core';
import { BlogService } from "../shared/blog.service";
import { NgForm } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { Blog } from "../shared/blog.model";

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html'
})
export class BlogListComponent implements OnInit {
  blogs: Array<Blog> = [];
  metadata: any;
  failed: boolean = false;
  pageIndex: number = 0;
  pageSize: number = 10;

  constructor(private service: BlogService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getResolverData();
  }

  private getResolverData() {
    let response = this.route.snapshot.data["blogs"];

    let parsedResult = JSON.parse(response._body);
    this.blogs = parsedResult.data;
    this.metadata = parsedResult.metadata;
  }

  next() {
    // if (this.pageIndex >= this.metadata.pages - 1) return;
    this.pageIndex++;
    this.getBlogs();
  }

  prev() {
    if (this.pageIndex == 0) return;
    this.pageIndex--;
    this.getBlogs();
  }


  private getBlogs() {
    this.service.get(this.pageIndex, this.pageSize)
      .subscribe(response => {
        let result = response.json();
        this.blogs = result.data;
        this.metadata = result.metadata;
      },
      err => this.failed = true);
  }

  disableNext() {
    this.pageIndex >= this.metadata.pages - 1;
  }

  onPageSizeChanged() {
    this.getBlogs();
  }

  onNotification(event) {
    console.log(event);
    this.getBlogs();
  }

}





