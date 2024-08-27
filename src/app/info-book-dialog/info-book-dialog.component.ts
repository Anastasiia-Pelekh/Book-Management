import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { Book } from '../shared/models/book.model';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info-book-dialog',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, MatDialogModule],
  templateUrl: './info-book-dialog.component.html',
  styleUrl: './info-book-dialog.component.scss'
})
export class InfoBookDialogComponent {
  constructor(
    private dialogRef: MatDialogRef<InfoBookDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public book: Book,
    private router: Router
  ){}

  public editBook(bookTitle: string): void {
    this.dialogRef.close();
    this.router.navigate(['/edit-book', bookTitle]);
  }
}
