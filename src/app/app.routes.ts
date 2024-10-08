import { Routes } from '@angular/router';
import { MyBooksComponent } from './components/my-books/my-books.component';
import { BookSettingsComponent } from './components/book-settings/book-settings.component';
import { LayoutComponent } from './components/layout/layout.component';

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
