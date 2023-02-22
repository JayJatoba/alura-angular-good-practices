import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FootnoteModule } from './components/footnote/footnote.module';
import { HeaderComponent } from './components/header/header.component';
import { HeaderModule } from './components/header/header.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HeaderModule,
    FootnoteModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
