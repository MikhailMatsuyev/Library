import { Injectable } from '@angular/core';
import { Http, Request, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Book } from './book.model';
import 'rxjs/add/operator/map';

const PROTOCOL = 'http';
const PORT = 3555;

@Injectable()
export class RestDataSource {
    baseUrl: string;
    auth_token: string;

    constructor(private http: Http) {
        this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
    }

    authenticate(user: string, pass: string): Observable<boolean> {
        return this.http.request(new Request({
            method: RequestMethod.Post,
            url: this.baseUrl + 'login',
            body: { name: user, password: pass }
        })).map(response => {
            const r = response.json();
            this.auth_token = r.success ? r.token : null;
            return r.success;
        });
    }

    getBooks(): Observable<Book[]> {
      console.log('---------');
        return this.sendRequest(RequestMethod.Get, 'books') as Observable<Book[]>;
    }

    saveBook(book: Book): Observable<Book> {
        return this.sendRequest(RequestMethod.Post, 'books',
            book, true) as Observable<Book>;
    }

    updateBook(book): Observable<Book> {
        return this.sendRequest(RequestMethod.Put,
            `books/${book.id}`, book, true) as Observable<Book>;
    }

    deleteBook(id: number): Observable<Book> {
        return this.sendRequest(RequestMethod.Delete,
            `books/${id}`, null, true) as Observable<Book>;
    }

    private sendRequest(verb: RequestMethod,
            url: string, body?: Book, auth: boolean = false)
                : Observable<Book | Book[]> {

        const request = new Request({
            method: verb,
            url: this.baseUrl + url,
            body: body
        });
        if (auth && this.auth_token != null) {
            request.headers.set('Authorization', `Bearer<${this.auth_token}>`);
        }
        return this.http.request(request).map(response => response.json());
    }

}
