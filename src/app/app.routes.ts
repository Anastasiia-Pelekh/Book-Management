import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { MyBooksComponent } from './my-books/my-books.component';
import { BookSettingsComponent } from './book-settings/book-settings.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'my-books',
    pathMatch: 'full'
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'my-books',
        component: MyBooksComponent
      },
      {
        path: 'create-book',
        component: BookSettingsComponent
      },
      {
        path: 'edit-book/:title',
        component: BookSettingsComponent
      }
    ]
  }
];
