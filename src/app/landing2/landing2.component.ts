import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing2',
  templateUrl: './landing2.component.html',
  styleUrls: ['./landing2.component.css']
})
export class Landing2Component implements OnInit {
  image1 ="./../../assets/images/cuisine_marbre.jpg"
  image2 ="./../../assets/images/cuisine_marbre_blanc.png"
  constructor() { }

  ngOnInit(): void {
  }

}
