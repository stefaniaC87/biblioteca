import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {

  constructor(public bookService: BookService) { }

  ngOnInit(): void {
  }
  save(): void {
    this.bookService.selectedBook = null;
    this.bookService.saveBookInLocalStorage();
  }

}
