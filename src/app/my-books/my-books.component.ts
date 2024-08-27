import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ManageBooksService } from '../shared/services/manage-books.service';
import { Book } from '../shared/models/book.model';
import { Observable } from 'rxjs';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { InfoBookDialogComponent } from '../info-book-dialog/info-book-dialog.component';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-my-books',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, ],
  templateUrl: './my-books.component.html',
  styleUrl: './my-books.component.scss',
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(100%)' }),
        animate('300ms ease-in', style({ opacity: 1, transform: 'translateY(0)' }))
      ]),
      transition(':leave', [
        animate('300ms ease-out', style({ opacity: 0, transform: 'translateY(100%)' }))
      ])
    ])
  ]
})
export class MyBooksComponent implements OnInit {
  public bookList$!: Observable<Book[]>;

  constructor(
    private router: Router,
    private manageBooksService: ManageBooksService,
    private dialog: MatDialog
  ) {
  }

  public ngOnInit(): void {
    this.bookList$ = this.manageBooksService.books$;
  }

  public createBook(): void {
    this.router.navigate(['/create-book']);
  }

  public removeBook(bookTitle: string): void {
    this.manageBooksService.removeBook(bookTitle);
  }

  public readMore(book: Book): void {
    this.dialog.open(InfoBookDialogComponent, { data: book });
  }
}
