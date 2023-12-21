import { Component } from '@angular/core';
import { Review } from '../object';
import { NgClass, NgFor } from '@angular/common';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css'],
  standalone:true,
  imports:[NgClass, NgFor]
})
export class ReviewComponent {

  reviews : Review[] = [
    new Review('5','moha2656','Super entreprise, de super finition, ça fait plaisir !!','2023-10-02'),
    new Review('5','moha2656','Super entreprise, de super finition, ça fait plaisir !!','2023-10-02'),
    new Review('5','moha2656','Super entreprise, de super finition, ça fait plaisir !!','2023-10-02'),
    new Review('5','moha2656','Super entreprise, de super finition, ça fait plaisir !!','2023-10-02'),
    new Review('5','moha2656','Super entreprise, de super finition, ça fait plaisir !!','2023-10-02'),
    new Review('5','moha2656','Super entreprise, de super finition, ça fait plaisir !!','2023-10-02'),
    new Review('5','moha2656','Super entreprise, de super finition, ça fait plaisir !!','2023-10-02'),
    new Review('5','moha2656','Super entreprise, de super finition, ça fait plaisir !!','2023-10-02'),
    new Review('5','moha2656','Super entreprise, de super finition, ça fait plaisir !!','2023-10-02'),
  ]
  tabIndex: Object = {
   'container_review--too-left':0,
   'container_review--left':1,
   'container_review--main':2,
   'container_review--right':3,
   'container_review--too-right':4,
  }
  indexDepart : number = 0
  indexFin : number = 4

  constructor() { 
    console.log('1--', this.reviews)

    this.initialisationReviews(0,4)

    console.log('2--', this.reviews)
  }

  initialisationReviews(valueDepart : number, valueFin : number){
    let i = valueDepart
    for(const review of this.reviews){
      if(i==valueDepart){
        review.setTooLeft(true)
      }
      if(i==valueDepart+1 && i<=valueFin ){
        review.setLeft(true)
      }
      if(i==valueDepart+2 && i<=valueFin ){
        review.setMain(true)
      }
      if(i==valueDepart+3 && i<=valueFin ){
        review.setRight(true)
      }
      if(i==valueDepart+4 && i<=valueFin ){
        review.setTooRight(true)
      }
      i++
    }
  }


  clickFlecheDroite(){
    console.log("click droit")
    this.initialisationReviews(this.indexDepart+1,this.indexFin+1)
    console.log('3--',this.reviews)
    // for(let review of this.reviews){

    // }
  }

  clickFlecheGauche(){
    console.log("click gauche")
  }

}
