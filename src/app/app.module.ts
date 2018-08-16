import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LibraryModule } from './library/library.module';
import { LibraryComponent } from './library/library.component';
import { AboutDetailComponent } from './library/aboutDetail.component';
import { RouterModule } from '@angular/router';
import { LibraryFirstGuard } from './libraryFirst.guard';

@NgModule({
    imports: [BrowserModule, LibraryModule,
        RouterModule.forRoot([
            {
                path: 'library', component: LibraryComponent,
                canActivate: [LibraryFirstGuard]
            },
            {
                path: 'about', component: AboutDetailComponent,
                canActivate: [LibraryFirstGuard]
            },
            {
                path: 'admin',
                loadChildren: 'app/admin/admin.module#AdminModule',
                canActivate: [LibraryFirstGuard]
            },
            { path: "**", redirectTo: '/library' }
        ])],
    providers: [LibraryFirstGuard],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})

export class AppModule { }
