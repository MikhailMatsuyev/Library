import { Component } from '@angular/core';
import { Book } from '../model/book.model';
import { BookRepository } from '../model/book.repository';

@Component({
    moduleId: module.id,
    templateUrl: 'bookTable.component.html'
})
export class BookTableComponent {

    constructor(private repository: BookRepository) { }

    getBooks(): Book[] {
        return this.repository.getBooks();
    }

    deleteBook(id: number) {
        this.repository.deleteBook(id);
    }
}
