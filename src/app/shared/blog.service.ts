import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class BlogService {

    constructor(private http: Http) { }

    get() {
        return this.http.get('https://api.github.com/users');
    }
}