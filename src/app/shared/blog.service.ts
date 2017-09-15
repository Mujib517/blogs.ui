import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/retry';

@Injectable()
export class BlogService {

    private baseUrl: string = "http://api-express2.azurewebsites.net";

    constructor(private http: Http) { }

    get(pageIndex: number, pageSize: number) {
        // return this.http.get('http://localhost:3000/blogs/' + pageIndex + '/' + pageSize);
        return this.http.get(`${this.baseUrl}/blogs/${pageIndex}/${pageSize}`)
            .retry(4);
    }

    save(blog: any) {
        return this.http.post(`${this.baseUrl}/blogs`, blog);
    }

    getById(id: string) {
        return this.http.get(`${this.baseUrl}/blogs/${id}`);
    }

    remove(id:string){
         return this.http.delete(`${this.baseUrl}/blogs/${id}`);
    }
}