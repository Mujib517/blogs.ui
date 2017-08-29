import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogComponent } from './blog/blog.component';

@NgModule({
    imports: [BrowserModule,FormsModule],
    declarations: [AppComponent,HomeComponent, AboutComponent, BlogListComponent,BlogComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }