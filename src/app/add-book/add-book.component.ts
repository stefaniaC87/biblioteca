import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { Book } from '../models/book';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  constructor(private bookService: BookService) { }

  title: string = "aggiungi libro";
  newBook: Book;
  error = {
    ISBN: false,
    title: false,
    author: false,
    publisher: false,
    publicationDate: false,
    coverUrl: false
  }

  ngOnInit(): void {
    this.reset();

  }

  reset(): void {
    this.newBook = {
      ISBN: "",
      title: "",
      author: "",
      publisher: "",
      publicationDate: null,
      coverUrl: ""
    };
  }


  add() {
    let validate = true;
    if (new RegExp("^[0-9]{13}$").test(this.newBook.ISBN)) {
      this.error.ISBN = false;
    } else {
      this.error.ISBN = true;
      validate = false;
      this.newBook.ISBN = "";
    }

    if(this.newBook.title.length > 0){
      this.error.title = false;
    }else{
      this.error.title = true;
      validate = false;
    }

    if(this.newBook.author.length > 0){
      this.error.author = false;
    }else{
      this.error.author = true;
      validate = false;
    }



    if(this.newBook.publisher.length > 0){
      this.error.publisher = false;
    }else{
      this.error.publisher = true;
      validate = false;
    }

    if(this.newBook.publicationDate != null){
      this.error.publicationDate = false;
    }else{
      this.error.publicationDate = true;
      validate = false;
    }

    if (validate) {
      this.bookService.addBook(this.newBook);
      this.reset();
    }


  }

}
