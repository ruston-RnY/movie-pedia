import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from 'src/app/components/components.module';

import { MovieComponent } from './movie.component';
import { MovieListComponent } from './movie-list/movie-list.component';


@NgModule({
  declarations: [
    MovieComponent,
    MovieListComponent
  ],
  imports: [
    RouterModule.forChild([
      {
        path: '', component: MovieComponent,
        children: [
          { path: '', component: MovieListComponent, pathMatch: 'full' },
          { path: ':type', component: MovieListComponent, pathMatch: 'full' },
          { path: 'search/:keyword', component: MovieListComponent, pathMatch: 'full' },
        ]
      },
    ]),
    CommonModule,
    ComponentsModule
  ]
})
export class MovieModule { }
