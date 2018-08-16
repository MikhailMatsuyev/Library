import { Injectable } from '@angular/core';
import { Book } from './book.model';
import { RestDataSource } from './rest.datasource';

@Injectable()
export class BookRepository {
    private books: Book[] = [];
    private categories: string[] = [];

    constructor(private dataSource: RestDataSource) {
        dataSource.getBooks().subscribe(data => {
            this.books = data;
            this.categories = data.map(p => p.category)
                .filter((c, index, array) => array.indexOf(c) === index).sort();
        });
    }
    getBooks(category: string[]= []): Book[] {

      if (category === null) { return this.books; }

      const newArr: Book[] = [];
      for (const val of this.books) {
        for (const cat of category) {
          if ((cat === val.category) || (cat === val.name)) {
            newArr.push(val);
          }
        }
      }
      return newArr;
    }

    getBook(id: number): Book {
        return this.books.find(p => p.id === id);
    }

    getCategories(): string[] {
        return this.categories;
    }

    getAllBooks() {
      return this.books.map(val => val.name);

    }

    saveBook(book: Book) {
        if (book.id == null || book.id === 0) {
            this.dataSource.saveBook(book)
                .subscribe(p => this.books.push(p));
        } else {
            this.dataSource.updateBook(book)
                .subscribe(p => {
                    this.books.splice(this.books.
                        findIndex(p => p.id === book.id), 1, book);
                });
        }
    }

    deleteBook(id: number) {
        this.dataSource.deleteBook(id).subscribe(p => {
            this.books.splice(this.books.
                findIndex(p => p.id === id), 1);
        });
    }
}
