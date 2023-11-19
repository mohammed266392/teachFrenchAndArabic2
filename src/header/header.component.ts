import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  onglets : string[] = ['Home','Contact']
  constructor() { }

  ngOnInit(): void {
  }

}
