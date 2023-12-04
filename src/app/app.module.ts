import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OngletsComponent } from './compenent-tools/onglets/onglets.component';
import { HeaderComponent } from './header/header.component';
import { OngletsMobileComponent } from './compenent-tools/onglets-mobile/onglets-mobile.component';
import { LandingComponent } from './landing/landing.component';
import { Landing2Component } from './landing2/landing2.component';
import { SavoirFaireComponent } from './savoir-faire/savoir-faire.component';
import { ScrollAnimation } from 'src/directives/scrollAnimation.directive';
import { SavoirFaire2Component } from './savoir-faire2/savoir-faire2.component';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HeaderComponent,
        OngletsComponent,
        OngletsMobileComponent,
        LandingComponent,
        Landing2Component,
        SavoirFaireComponent,
        SavoirFaire2Component
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
