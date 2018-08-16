import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';
import { AdminComponent } from './admin.component';
import { AuthGuard } from './auth.guard';
import { BookTableComponent } from './bookTable.component';
import { BookEditorComponent } from './bookEditor.component';

const routing = RouterModule.forChild([
    { path: 'auth', component: AuthComponent },
    {
        path: 'main', component: AdminComponent, canActivate: [AuthGuard],
        children: [
            { path: 'books/:mode/:id', component: BookEditorComponent },
            { path: 'books/:mode', component: BookEditorComponent },
            { path: 'books', component: BookEditorComponent },
            { path: '**', redirectTo: 'books' }
        ]
    },
    { path: '**', redirectTo: 'auth' }
]);

@NgModule({
    imports: [CommonModule, FormsModule, routing],
    providers: [AuthGuard],
    declarations: [AuthComponent, AdminComponent,
      BookTableComponent, BookEditorComponent]
})
export class AdminModule {}
