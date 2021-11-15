import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BannerComponent } from './banner/banner.component';
import { SectionThumbComponent } from './section-thumb/section-thumb.component';
import { ContactUsComponent } from './contact-us/contact-us.component';



@NgModule({
  declarations: [
    BannerComponent,
    SectionThumbComponent,
    ContactUsComponent
  ],
  exports: [
    BannerComponent,
    SectionThumbComponent,
    ContactUsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
