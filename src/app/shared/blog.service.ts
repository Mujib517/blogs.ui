import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class BlogService {

    private baseUrl: string = "http://api-express2.azurewebsites.net";

    constructor(private http: Http) { }

    get(pageIndex: number, pageSize: number) {
        // return this.http.get('http://localhost:3000/blogs/' + pageIndex + '/' + pageSize);
        return this.http.get(`${this.baseUrl}/blogs/${pageIndex}/${pageSize}`);
    }

    save(blog: any) {
        return this.http.post(`${this.baseUrl}/blogs`, blog);
    }
}