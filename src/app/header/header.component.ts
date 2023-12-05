import { Component, OnInit } from '@angular/core';
import { OngletsMobileComponent } from '../compenent-tools/onglets-mobile/onglets-mobile.component';
import { NgClass } from '@angular/common';
import { OngletsComponent } from '../compenent-tools/onglets/onglets.component';
import { Onglet } from '../object';


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
    standalone: true,
    imports: [OngletsComponent, NgClass, OngletsMobileComponent]
})
export class HeaderComponent implements OnInit {
  onglets : Onglet[] = [new Onglet('Home','home'),new Onglet('Contact','contact'),new Onglet('A propos','a-propos')]
  ongletsMobile : string[] = ['Home','Contact','A propos']
  title : string = "Pierre Noble"
  logo : string = "./../../assets/images/logo_teachFrenchAndArabic.png"
  menuBurgerIsClicked : boolean = false
  constructor() { }

  ngOnInit(): void {
  }


  clickHeader() : void {
    this.menuBurgerIsClicked = !this.menuBurgerIsClicked
  }
}
