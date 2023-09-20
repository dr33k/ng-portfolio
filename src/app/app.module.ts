import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { QualificationsComponent } from './qualifications/qualifications.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { EducationComponent } from './education/education.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    QualificationsComponent,
    ContactComponent,
    AboutComponent,
    EducationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
