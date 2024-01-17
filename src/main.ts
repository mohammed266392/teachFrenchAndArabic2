import { enableProdMode, importProvidersFrom } from '@angular/core';


import { environment } from './environments/environment';
import { AppComponent } from './app/app.component';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { Routes, provideRouter } from '@angular/router';
import { HttpClient, provideHttpClient } from '@angular/common/http';


  const routes: Routes = [
    {path:'',
    loadComponent: () => import("././app/home/home.component").then(module => module.HomeComponent)
    },
    {path:'home',
    loadComponent: () => import("././app/home/home.component").then(module => module.HomeComponent)
    },
    {path:'contact',
    loadComponent: () => import("././app/contact/contact.component").then(module => module.ContactComponent)
    }
  ];


if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
    providers: [
      provideHttpClient(),
      importProvidersFrom(BrowserModule),
      provideRouter(routes)
    ]
})
  .catch(err => console.error(err));
