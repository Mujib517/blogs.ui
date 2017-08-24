import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
    <div>
      <input type="text" [(ngModel)]="title"/>
    </div>
    <h2 [style.border]="apply?'1px solid black':'none'" >{{title}}</h2>

    <button [disabled]="disable" (click)="onClick()">Click me</button>
  `,
})
export class AboutComponent {
  title: string = "Blogs Angular App";

  disable: boolean = false;
  apply:boolean=true;

  getTitle(): string {
    //update db
    //modifiying resource
    return this.title;
  }

  onClick() {
    console.log("button clicked");
  }
}
