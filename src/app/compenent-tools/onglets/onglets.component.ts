import { Component, Input, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
    selector: 'app-onglets',
    templateUrl: './onglets.component.html',
    styleUrls: ['./onglets.component.css'],
    standalone: true,
    imports: [NgFor]
})
export class OngletsComponent implements OnInit {
  @Input() onglets: string[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
