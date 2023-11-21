import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OngletsComponent } from './compenent-tools/onglets/onglets.component';
import { HeaderComponent } from './header/header.component';
import { OngletsMobileComponent } from './compenent-tools/onglets-mobile/onglets-mobile.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    OngletsComponent,
    OngletsMobileComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
