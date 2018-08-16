import { NgModule } from '@angular/core';
import { BookRepository } from './book.repository';
import { About } from './about.model';
import { RestDataSource } from './rest.datasource';
import { HttpModule } from '@angular/http';
import { AuthService } from './auth.service';

@NgModule({
    imports: [HttpModule],
    providers: [BookRepository, About, RestDataSource, AuthService]
})
export class ModelModule { }
