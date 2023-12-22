import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { QualificationsComponent } from './qualifications/qualifications.component';
import { EducationComponent } from './education/education.component';
import { BannerComponent } from './banner/banner.component';
import { HomeComponent } from './home.component';


@NgModule({
  declarations: [
    AboutComponent,
    ContactComponent,
    QualificationsComponent,
    EducationComponent,
    BannerComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
