import { Component, Input, OnInit } from '@angular/core';
import { NgClass, NgFor } from '@angular/common';

@Component({
    selector: 'app-onglets-mobile',
    templateUrl: './onglets-mobile.component.html',
    styleUrls: ['./onglets-mobile.component.css'],
    standalone: true,
    imports: [NgClass, NgFor]
})
export class OngletsMobileComponent implements OnInit {

  @Input() onglets : string[] = []
  @Input() isClicked : boolean = false

  constructor() { }

  ngOnInit(): void {
  }

}
