import { Component } from '@angular/core';
import { SavoirFaire2Component } from './savoir-faire2/savoir-faire2.component';
import { HeaderComponent } from './header/header.component';
import { Landing2Component } from './landing2/landing2.component';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: true,
    imports: [HeaderComponent, Landing2Component, SavoirFaire2Component]
})
export class AppComponent {
  title = 'teachFrenchAndArabic2';
}
