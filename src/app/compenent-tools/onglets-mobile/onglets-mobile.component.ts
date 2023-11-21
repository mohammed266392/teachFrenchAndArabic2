import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-onglets-mobile',
  templateUrl: './onglets-mobile.component.html',
  styleUrls: ['./onglets-mobile.component.css']
})
export class OngletsMobileComponent implements OnInit {

  @Input() onglets : string[] = []
  @Input() isClicked : boolean = false

  constructor() { }

  ngOnInit(): void {
  }

}
