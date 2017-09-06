import { Component, OnInit } from '@angular/core';
import { BlogService } from "../shared/blog.service";
import { NgForm } from "@angular/forms";

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
  blog: any;
  saveFailed: boolean = false;
  saveSuccess: boolean = false;

  constructor(private service: BlogService) { }

  ngOnInit() {
    this.blog = {};
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

  onSave(form: NgForm) {

    // var obj = {
    //   title: form.controls.title.value,
    //   content: form.controls.content.value
    // };

    //  console.dir(obj);
    // this.service.save(this.blog)
    //   .subscribe(
    //   () => {
    //     this.saveSuccess = true;
    //     this.getBlogs();
    //     this.clearAll();
    //   },
    //   () => this.saveFailed = true
    //   )
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

  clearAll() {
    this.blog = {};
  }

}





