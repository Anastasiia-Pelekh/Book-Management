import { CommonModule, Location } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ManageBooksService } from '../shared/services/manage-books.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BookColors } from '../shared/data/books.data';

@Component({
  selector: 'app-create-book',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule, 
    ReactiveFormsModule, 
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatTooltipModule
  ],
  templateUrl: './book-settings.component.html',
  styleUrl: './book-settings.component.scss'
})
export class BookSettingsComponent implements OnInit {
  public bookForm!: FormGroup;

  public readonly bookColors = BookColors;
  public readonly currentBookTitle = signal('');
  public readonly isEditMode = signal(false);

  constructor(
    private location: Location,
    private manageBooksService: ManageBooksService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  public ngOnInit(): void {
    this.bookForm = new FormGroup({
      title: new FormControl('', Validators.required),
      author: new FormControl('', Validators.required),
      year: new FormControl(null, [
        Validators.required,
        Validators.min(1000),
        Validators.max(new Date().getFullYear())
      ]),
      color: new FormControl('var(--gray-medium)', Validators.required),
      description: new FormControl('', Validators.required)
    });

    this.route.paramMap.subscribe(params => {
      const title = params.get('title');
      if (title) {
        this.isEditMode.set(true);
        this.currentBookTitle.set(title);
        this.loadBookDetails(title);
      }
    });
  }

  public createBook(): void {
    if (this.isEditMode() && this.currentBookTitle()) {
      this.updateBook();
    } else {
      this.addNewBook();
    }
  }

  private addNewBook(): void {
    const book = this.bookForm.value;
    this.manageBooksService.addNewBook(book);
    this.router.navigate(['/my-books']);
  }

  private updateBook(): void {
    const updatedBook = this.bookForm.value;
    this.manageBooksService.updateBook(this.currentBookTitle(), updatedBook);
    this.router.navigate(['/my-books']);
  }

  public removeBook(): void {
    this.manageBooksService.removeBook(this.bookForm.get('title')?.value);
  }

  public goBack(): void {
    this.location.back();
  }

  public isColorChecked(colorCode: string): boolean {
    return this.bookForm.get('color')?.value === colorCode;
  }

  public chooseColor(colorCode: string): void {
    this.bookForm.get('color')?.setValue(colorCode);
  }

  private loadBookDetails(title: string): void {
    const book = this.manageBooksService.getBookList().find(b => b.title === title);
    if (book) {
      this.bookForm.patchValue(book);
    }
  }
}
