﻿import {Component} from 'angular2/core';
@Component({
    selector: 'my-app',
    template: '<h1>{{title}}</h1><h2>{{hero}} details!</h2>'
})
export class AppComponent {
    public title = 'vishal';
    public hero = 'Windstorm';
}