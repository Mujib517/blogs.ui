import { Resolve } from "@angular/router";
import { BlogService } from "./blog.service";
import { Injectable } from '@angular/core';

@Injectable()
export class BlogResolver implements Resolve<any> {

    constructor(private blogSvc: BlogService) { }

    resolve() {
        return this.blogSvc.get(0, 10);
    }
}