import { Routes } from "@angular/router";
import { AppComponent } from "./app.component";

const routes: Routes = [
    {path:'',
    loadComponent: () => import("./app.component").then(module => module.AppComponent)
    }
  ];