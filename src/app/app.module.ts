import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DownloaderComponent } from './Components/downloader/downloader.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { PreviewComponent } from './Components/preview/preview.component';
import { HowItWorksComponent } from './Components/how-it-works/how-it-works.component';
import { SupportedPlatformsComponent } from './Components/supported-platforms/supported-platforms.component';
import { FAQComponent } from './Components/faq/faq.component';
import { ReadyToDownloadComponent } from './Components/ready-to-download/ready-to-download.component';
import { CheckHTMLComponent } from './Components/check-html/check-html.component'; 

@NgModule({
  declarations: [
    AppComponent,
    DownloaderComponent,
    HeaderComponent,
    FooterComponent,
    PreviewComponent,
    HowItWorksComponent,
    SupportedPlatformsComponent,
    FAQComponent,
    ReadyToDownloadComponent,
    CheckHTMLComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
