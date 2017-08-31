import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class BlogService {

    constructor(private http: Http) { }

    get(pageIndex: number, pageSize: number) {
        // return this.http.get('http://localhost:3000/blogs/' + pageIndex + '/' + pageSize);
        return this.http.get(`http://localhost:3000/blogs/${pageIndex}/${pageSize}`);
    }
}