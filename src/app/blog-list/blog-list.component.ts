import { Component,OnInit } from '@angular/core';
import { BlogService } from "../shared/blog.service";

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html'
})
export class BlogListComponent implements OnInit {
  blogs: Array<any>;

  ngOnInit() {
    let service = new BlogService();
    this.blogs = service.get();
  }

  constructor() {}
  
}

