import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VirusInfoComponent } from './virus-info/virus-info.component';
import { HttpClientModule } from '@angular/common/http';
import { TranslatePipe } from './shared/translate.pipe';


@NgModule({
  declarations: [
    AppComponent,
    VirusInfoComponent,
    TranslatePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
