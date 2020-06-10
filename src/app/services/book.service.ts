import { Injectable } from '@angular/core';
import {LocalStorageService, SessionStorageService} from 'ngx-webstorage';
import { Book } from '../models/book';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private localStorage:LocalStorageService) { }
  books : Book[];
BOOKS = [
  {
    ISBN: "8876250484",
    title: "Twilight",
    author: "Stephenie Meyer",
    publisher: "Fazi",
    pubblicationDate : new Date("01-01-2006"),
    coverUrl: "assets/images/twilight.jpg"
  },
  {
    ISBN: "0788893250191",
    title: "New Moon",
    author: "Stephenie Meyer",
    publisher: "Fazi",
    pubblicationDate : new Date("27-04-2007"),
    coverUrl: "assets/images/newMoon.jpg"
  },
  {
    ISBN: "9788893250207",
    title: "Eclipse",
    author: "Stephenie Meyer",
    publisher: "Fazi",
    pubblicationDate : new Date("16-11-2007"),
    coverUrl: "assets/images/eclipse.jpg"
  },
  {
    ISBN: "9788893259978",
    title: "Breaking Dawn",
    author: "Stephenie Meyer",
    publisher: "Fazi",
    pubblicationDate : new Date("30-10-2008"),
    coverUrl: "assets/images/breaking.jpg"
  },
]

getBooks(): Observable<Book[]> {
  this.books = this.localStorage.retrieve("books") || this.BOOKS;
  return of(this.books);
}
addBook(book : Book){
  this.books.push(book);
  this.saveBookInLocalStorage();
}
saveBookInLocalStorage(): void{
  this.localStorage.store("books", this.books);
}
}
