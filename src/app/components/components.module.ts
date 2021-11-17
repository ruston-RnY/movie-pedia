import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BannerComponent } from './banner/banner.component';
import { SectionThumbComponent } from './section-thumb/section-thumb.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ListMoviesComponent } from './list-movies/list-movies.component';



@NgModule({
  declarations: [
    BannerComponent,
    SectionThumbComponent,
    ContactUsComponent,
    ListMoviesComponent
  ],
  exports: [
    BannerComponent,
    SectionThumbComponent,
    ContactUsComponent,
    ListMoviesComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
