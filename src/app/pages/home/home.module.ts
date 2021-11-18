import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from 'src/app/components/components.module';
import { ModalModule } from 'ngx-bootstrap/modal';

import { HomeComponent } from './home.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    RouterModule.forChild([{ path: '', component: HomeComponent }]),
    CommonModule,
    ComponentsModule,
    SlickCarouselModule,
    ModalModule.forRoot()
  ]
})
export class HomeModule { }
