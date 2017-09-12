import { Component } from '@angular/core';

@Component({
  template: `

      <header>
        <app-header></app-header>
      </header>

      <main>
      <div class="container">
        <router-outlet></router-outlet>
      </div>
      </main>
      
      <app-footer></app-footer>
    `,
  selector: 'app'
})
export class AppComponent { }