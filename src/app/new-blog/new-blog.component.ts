import { Component } from '@angular/core';
import { BlogService } from "../shared/blog.service";
import { Router } from "@angular/router";
import { Blog } from "../shared/blog.model";

@Component({
  template: `
    <div class="row">

  <div *ngIf="saveFailed" class="alert alert-danger">Failed to save data</div>
  <div *ngIf="saveSuccess" class="alert alert-success">Successfully saved!!</div>

  <form novalidate #frm="ngForm">
    <div class="col-md-4">
      <h3>Add new blog post</h3>

      <!--<div class="form-group">
        <input type="text" placeholder="PhoneNumber" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" #ctrlPhone="ngModel" [(ngModel)]="blog.phoneNumber" name="phone"/>
        <span *ngIf="ctrlPhone.invalid" class="text-danger">Invalid Phonenumber</span>
      </div>-->

      <div class="form-group">

        <input type="text" class="form-control" placeholder="Title" [(ngModel)]="blog.title" name="title" required minlength="4"
          maxlength="10" #ctrlTitle="ngModel" />

        <span *ngIf="ctrlTitle.dirty && ctrlTitle.errors?.required" class="text-danger">Required</span>
        <span *ngIf="ctrlTitle.dirty && ctrlTitle.errors?.minlength" class="text-danger">Min 4 chars</span>
        <span *ngIf="ctrlTitle.dirty &&  ctrlTitle.errors?.maxlength" class="text-danger">Max 10 chars</span>

      </div>
      <div class="form-group">
        <textarea placeholder="Content" class="form-control" rows="5" cols="50" [(ngModel)]="blog.content" name="content" required
          #ctrlContent="ngModel"></textarea>

        <span *ngIf="ctrlContent.touched && ctrlContent.invalid" class="text-danger">Required</span>
      </div>
      <div class="form-group">
        Publish <input type="checkbox" [(ngModel)]="blog.published" name="published" />
      </div>


      <div class="form-group">
        <button [disabled]="frm.invalid" class="btn btn-danger" (click)="onSave(frm)">Add New Post</button>
      </div>

    </div>
  </form>
</div>

    `
})
export class NewBlogComponent {

  saveSuccess: boolean = false;
  saveFailed: boolean = false;
  blog: Blog;

  constructor(private service: BlogService, private route: Router) {
    this.blog = new Blog();
  }

  onSave() {
    this.service.save(this.blog)
      .subscribe(
      () => {
        this.saveSuccess = true;
        this.clearAll();
        this.route.navigate(['/blogs']);
      },
      () => this.saveFailed = true
      )
  }

  clearAll() {
    this.blog = new Blog();
  }
}  
