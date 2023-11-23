import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  // imageLandingPage = "./../../assets/images/image_marbre_2_v1.jpg"
  imageLandingPage1 = "./../../assets/images/image_landing_page2.png"
  imageLandingPage2 = "./../../assets/images/image_landing_page1.png"

  nbImageEchantillon = [
    {id:1,srcLink:"./../../assets/images/bulle-marbre1.png"},
    {id:2,srcLink:"./../../assets/images/bulle-marbre2.png"},
    {id:3,srcLink:"./../../assets/images/bulle-marbre3.png"},
    {id:4,srcLink:"./../../assets/images/bulle-marbre4.png"},
    {id:4,srcLink:"./../../assets/images/bulle-marbre5.png"},
    {id:4,srcLink:"./../../assets/images/bulle-marbre6.png"}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
