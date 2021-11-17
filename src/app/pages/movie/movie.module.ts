import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from 'src/app/components/components.module';

import { MovieComponent } from './movie.component';


@NgModule({
  declarations: [
    MovieComponent
  ],
  imports: [
    RouterModule.forChild([{ path: '', component: MovieComponent }]),
    CommonModule,
    ComponentsModule
  ]
})
export class MovieModule { }
