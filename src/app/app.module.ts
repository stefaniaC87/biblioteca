import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgxWebstorageModule} from 'ngx-webstorage';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import { AddBookComponent } from './add-book/add-book.component';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    AddBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxWebstorageModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
