import { Injectable } from '@angular/core';
import { Book } from './book.model';

@Injectable()
export class About {
    public lines: AboutLine[] = [];
    addLine(book: Book) {
        this.lines = [];
        this.lines.push(new AboutLine(book));
    }
}

export class AboutLine {
    constructor(public book: Book) {}
}
