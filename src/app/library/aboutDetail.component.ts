import { Component } from '@angular/core';
import { About } from '../model/about.model';

@Component({
    moduleId: module.id,
    templateUrl: 'aboutDetail.component.html'
})
export class AboutDetailComponent {
    constructor(public about: About) { }
}
