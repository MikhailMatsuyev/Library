import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ModelModule } from '../model/model.module';
import { LibraryComponent } from './library.component';
import { AboutDetailComponent } from './aboutDetail.component';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [ModelModule, BrowserModule, FormsModule, RouterModule],
    declarations: [LibraryComponent, AboutDetailComponent],
    exports: [LibraryComponent, AboutDetailComponent]
})
export class LibraryModule { }
