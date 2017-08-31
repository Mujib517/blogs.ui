import { Component, OnInit } from '@angular/core';
import { BlogService } from "../shared/blog.service";

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html'
})
export class BlogListComponent implements OnInit {
  blogs: Array<any> = [];
  metadata: any;
  failed: boolean = false;
  pageIndex: number = 0;
  pageSize: number = 10;

  constructor(private service: BlogService) { }

  ngOnInit() {
    this.getBlogs();
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

}





