
import { Component } from "@angular/core";

@Component({
    selector: 'app-header',
    template: ` <nav class="navbar navbar-inverse">
        <div class="container-fluid">
            <div class="navbar-header">
            <a class="navbar-brand" routerLink="/">Blog Posts</a>
            </div>
            <ul class="nav navbar-nav">
                <li><a routerLink="/">Home</a></li>
                <li><a routerLink="/about">About</a></li>
                <li><a routerLink="/blogs">Blogs</a></li>
            </ul>
        </div>
</nav>`
})
export class HeaderComponent { }