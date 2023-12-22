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
    new Review('5','Moha2656','Super entreprise, de super finition, ça fait plaisir !!','2023-10-02'),
    new Review('5','Antoine2656','Super entreprise, de super finition, ça fait plaisir !!','2023-10-02'),
    new Review('5','Ayoub2656','Super entreprise, de super finition, ça fait plaisir !!','2023-10-02'),
    new Review('5','Mounir2656','Super entreprise, de super finition, ça fait plaisir !!','2023-10-02'),
    new Review('5','moha2656','Super entreprise, de super finition, ça fait plaisir !!','2023-10-02'),
    new Review('5','moha2656','Super entreprise, de super finition, ça fait plaisir !!','2023-10-02'),
    new Review('5','moha2656','Super entreprise, de super finition, ça fait plaisir !!','2023-10-02'),
    new Review('5','moha2656','Super entreprise, de super finition, ça fait plaisir !!','2023-10-02'),
    new Review('5','moha2656','Super entreprise, de super finition, ça fait plaisir !!','2023-10-02'),
  ]
  reviewsByEtats : boolean[][] = []
  indexMain : number = 0 

  constructor() { 
    this.initialisationReviews()
    console.log('initialisation : ',this.reviewsByEtats)
  }

  initialisationReviews(){
    for(let i = 0; i<= this.reviews.length; i++){
      if(i==0){
        this.reviewsByEtats.push([false,false,true,false,false])
      }
      if(i==1){
        this.reviewsByEtats.push([false,false,false,true,false])
      }
      if(i>2){
        this.reviewsByEtats.push([false,false,false,false,true])
      }
    }
  }


  clickFlecheDroite(){
    console.log("click droit")
    let indexCurrent = this.indexMain
    while(indexCurrent<this.reviews.length && this.reviewsByEtats[indexCurrent][4]!=true){
      console.log('1indexCurrent',indexCurrent)
      this.decalageEtatAGauche(this.reviewsByEtats[indexCurrent])
      indexCurrent = indexCurrent+1
    }
    console.log('2indexCurrent',indexCurrent)
    if(indexCurrent<this.reviews.length && this.reviewsByEtats[indexCurrent][4]==true){
      console.log('3indexCurrent',indexCurrent)
      this.decalageEtatAGauche(this.reviewsByEtats[indexCurrent])
    }
    this.indexMain = this.indexMain +1

  }
  decalageEtatAGauche(tab : boolean[]) : void{
    console.log('4--',tab)
    const indexADecaler = tab.findIndex( element => element==true)
    if(indexADecaler!=0){
      tab[indexADecaler]=false
      tab[indexADecaler-1]=true
    }
  }
  clickFlecheGauche(){
    console.log("click gauche")
  }

}
