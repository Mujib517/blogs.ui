import { Component } from '@angular/core';

@Component({
    templateUrl: './home.html',
    selector: 'app-home',
    styles: [],
    styleUrls: [],
    providers: []
})
export class HomeComponent {

    myProperty: number = 0;

    constructor() {

        // setInterval(
        //     () => {
        //         this.myProperty++;
        //     },

        //     1000
        // )
    }

    changeValue() {
        this.myProperty++;
    }

    //event
    //setTimeouts
    //Webservice
}