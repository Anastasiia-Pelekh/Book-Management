import { Injectable } from '@angular/core';
import { Book } from '../models/book.model';
import { BookList } from '../data/books.data';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ManageBooksService {
  private storageKey = 'books';

  private booksSubject = new BehaviorSubject<Book[]>(this.getInitialBooks());
  public books$ = this.booksSubject.asObservable();

  private getInitialBooks(): Book[] {
    const storedBooks = localStorage.getItem(this.storageKey);
    return storedBooks ? JSON.parse(storedBooks) : BookList;
  }

  public getBookList(): Book[] {
    return this.booksSubject.getValue();
  }

  public addNewBook(book: Book): void {
    const books = this.getBookList();
    books.push(book);
    localStorage.setItem(this.storageKey, JSON.stringify(books));
    this.booksSubject.next(books);
  }

  public removeBook(bookTitle: string): void {
    const books = this.getBookList().filter(book => book.title !== bookTitle);
    localStorage.setItem(this.storageKey, JSON.stringify(books));
    this.booksSubject.next(books);
  }

  public updateBook(bookTitle: string, updatedBook: Book): void {
    const books = this.getBookList().map(book => {
      if (book.title === bookTitle) {
        return updatedBook;
      }
      return book;
    });

    localStorage.setItem(this.storageKey, JSON.stringify(books));
    this.booksSubject.next(books);
  }
}
