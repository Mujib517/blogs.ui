import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent, HomeComponent, NewBlogComponent, BlogDetailComponent, AboutComponent, BlogListComponent, BlogResolver, SharedModule, BlogComponent, HeaderComponent, FooterComponent, BlogService }
    from './component.barrel';


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
        BlogListComponent, BlogComponent, HeaderComponent, NewBlogComponent, BlogDetailComponent, FooterComponent],
    bootstrap: [AppComponent],
    providers: [BlogService]
})
export class AppModule { }