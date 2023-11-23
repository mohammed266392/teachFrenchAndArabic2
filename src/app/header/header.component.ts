import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  onglets : string[] = ['Home','Contact','A propos']
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
