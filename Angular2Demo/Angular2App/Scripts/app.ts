

import {Component} from 'angular2/core';
import {NgForm}    from 'angular2/common';
import {UserComponent} from './usercomponent/usercomponent'


@Component({
    selector: 'my-app',
    template: '<user></user>',
    directives:[UserComponent]
})
export class AppComponent {
   
}