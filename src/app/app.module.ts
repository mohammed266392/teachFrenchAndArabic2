import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OngletsComponent } from './compenent-tools/onglets/onglets.component';
import { HeaderComponent } from './header/header.component';
import { OngletsMobileComponent } from './compenent-tools/onglets-mobile/onglets-mobile.component';
import { LandingComponent } from './landing/landing.component';
import { Landing2Component } from './landing2/landing2.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    OngletsComponent,
    OngletsMobileComponent,
    LandingComponent,
    Landing2Component

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
