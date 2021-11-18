import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from 'src/app/components/components.module';

import { AboutComponent } from './about.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    RouterModule.forChild([{ path: '', component: AboutComponent }]),
    CommonModule,
    ComponentsModule
  ]
})
export class AboutModule { }
