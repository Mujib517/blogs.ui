import { Component } from '@angular/core';

@Component({
    template: `

      <header>
        <app-header></app-header>
      </header>

      <main>
        <router-outlet></router-outlet>
      </main>

      <footer>
        &copy;mycoolblogs@2017.com
      </footer>
    `,
    selector: 'app'
})
export class AppComponent { }