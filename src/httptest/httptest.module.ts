import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { yas } from './app.component';

@NgModule({
  declarations: [
    yas
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [yas]
})
export class HttpClientTestingModule  { }
