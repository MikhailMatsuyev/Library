import { Component } from '@angular/core';
import { Book } from '../model/book.model';
import { BookRepository } from '../model/book.repository';
import { About} from '../model/about.model';
import { Router } from '@angular/router';

@Component({
    selector: 'library',
    moduleId: module.id,
    templateUrl: 'library.component.html'
})
export class LibraryComponent {
    public selectedCategory = null;
    public prod = '';

    constructor(private repository: BookRepository,
        private about: About,
        private router: Router) { }

    get books(): Book[] {
        return this.repository.getBooks(this.selectedCategory);
    }

    changeCategory(newCategory?: string) {
        const filterValue = newCategory.toLowerCase();
        this.selectedCategory = this.repository.getCategories().filter(category => category.toLowerCase().indexOf(filterValue) === 0);
    }

    changeBookName(newBook?: string) {
      const filterValue = newBook.toLowerCase();
      this.selectedCategory = this.repository.getAllBooks().filter(val => val.toLowerCase().indexOf(filterValue) === 0);
    }

    addBookToAbout(book: Book) {
        this.about.addLine(book);
        this.router.navigateByUrl('/about');
        this.about = null;
    }

    showMore(book) {
      this.prod = this.prod === book ? '' : book;
    }
}
