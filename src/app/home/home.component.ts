import { Component } from '@angular/core';
import { Landing2Component } from '../landing2/landing2.component';
import { SavoirFaire2Component } from '../savoir-faire2/savoir-faire2.component';
import { TextAnimationComponent } from '../compenent-tools/text-animation/text-animation.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone:true,
  imports :  [TextAnimationComponent, Landing2Component, SavoirFaire2Component]
})
export class HomeComponent {

}
