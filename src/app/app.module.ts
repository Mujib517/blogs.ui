import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogComponent } from './blog/blog.component';
import { BlogService } from "./shared/blog.service";
import { SharedModule } from "./shared/shared.module";
import { HeaderComponent } from "./header/header.component";
import { NewBlogComponent } from "./new-blog/new-blog.component";
import { BlogDetailComponent } from "./blog-detail/blog-detail.component";
import { BlogResolver } from "./shared/blog.resolver";


const routes = [
    { path: '', component: HomeComponent },
    { path: 'blogs', component: BlogListComponent, resolve: { blogs: BlogResolver } },
    { path: 'blogs/new', component: NewBlogComponent },
    { path: 'blog/:id', component: BlogDetailComponent },
    { path: 'about', component: AboutComponent },
    { path: '**', component: HomeComponent }
];


@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule, SharedModule, RouterModule.forRoot(routes)],
    declarations: [AppComponent, HomeComponent, AboutComponent,
        BlogListComponent, BlogComponent, HeaderComponent, NewBlogComponent, BlogDetailComponent],
    bootstrap: [AppComponent],
    providers: [BlogService]
})
export class AppModule { }