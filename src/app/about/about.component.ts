import { Component, OnInit } from '@angular/core';

//transpilation

@Component({
  selector: 'app-about',
  template: `
    
    <h1 [ngClass]="cls">{{title}}</h1>
    <h1 [ngStyle]="style">{{title}}</h1>

    <input type="text" [(ngModel)]="title"/>


    <button [disabled]="disable" (click)="onClick()">Click me</button>
    <h1 *ngIf="show">My Heading</h1>
   <ul>
     <li *ngFor="let item of vals">{{item}}</li>
    </ul>

   <div [ngSwitch]="priority">
      <div *ngSwitchCase="'high'">Its of high priority</div>
      <div *ngSwitchCase="'low'">Its of low priority</div>
      <div *ngSwitchCase="'medium'">Its of medium priority</div>
      <div *ngSwitchDefault>Its of some priority</div>
   </div>
  `,
})
export class AboutComponent {
  title: string = "Blogs Angular App";
  show: boolean = false;
  disable: boolean = false;
  apply: boolean = true;
  vals = [1, 2, 3, 4, 5, 6, 7];
  priority: string = "high1";
  cls: string = "red border";
  style = { 'background-color': 'yellow' };

  age: number = 10;

  getTitle(): string {

    switch (this.age) {
      case 10:
        console.log("You are a kid");
        break;
      case 20:
        console.log("You are young");
        break;
      case 30:
        console.log("you are still young");
        break;
      default:
        console.log("You are awesome");
        break;
    }


    //update db
    //modifiying resource
    return this.title;



  }

  onClick() {
    console.log("button clicked");
  }
}
