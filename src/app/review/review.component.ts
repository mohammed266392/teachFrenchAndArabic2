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
    new Review(5,'Moha2656','Super entreprise, de super finition, ça fait plaisir !!','2023-10-02'),
    new Review(5,'Antoine2656','Super entreprise, de super finition, ça fait plaisir !!','2023-10-02'),
    new Review(5,'Ayoub2656','Super entreprise, de super finition, ça fait plaisir !!','2023-10-02'),
    new Review(5,'Mounir2656','Super entreprise, de super finition, ça fait plaisir !!','2023-10-02'),
    new Review(5,'moha2656','Super entreprise, de super finition, ça fait plaisir !!','2023-10-02'),
    new Review(5,'moha2656','Super entreprise, de super finition, ça fait plaisir !!','2023-10-02'),
    new Review(5,'moha2656','Super entreprise, de super finition, ça fait plaisir !!','2023-10-02'),
    new Review(5,'moha2656','Super entreprise, de super finition, ça fait plaisir !!','2023-10-02'),
    new Review(5,'moha2656','Super entreprise, de super finition, ça fait plaisir !!','2023-10-02'),
  ]
  reviewsByEtats : boolean[][] = []
  indexMain : number = 0 
  hiddenFlecheDroite :boolean=false
  hiddenFlecheGauche :boolean=true

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
    if(indexCurrent>0){
      this.decalageEtatAGauche(this.reviewsByEtats[indexCurrent-1])
    }
    if(indexCurrent<this.reviews.length){
      this.decalageEtatAGauche(this.reviewsByEtats[indexCurrent])
    }
    if(indexCurrent+1<this.reviews.length){
      this.decalageEtatAGauche(this.reviewsByEtats[indexCurrent+1])
    }
    if(indexCurrent+2<this.reviews.length){
      this.decalageEtatAGauche(this.reviewsByEtats[indexCurrent+2])
    }
    this.indexMain = this.indexMain +1
    this.hiddenFlecheDroite = this.isHiddenFlecheDroite()
    this.hiddenFlecheGauche = this.isHiddenFlecheGauche()
  }

  clickFlecheGauche(){
    console.log("click gauche")
    let indexCurrent = this.indexMain
    if((indexCurrent-2)>=0){
      console.log("blabla")
      this.decalageEtatADroite(this.reviewsByEtats[indexCurrent-2])
    }
    if((indexCurrent-1)>=0){
      this.decalageEtatADroite(this.reviewsByEtats[indexCurrent-1])
    }
    this.decalageEtatADroite(this.reviewsByEtats[indexCurrent])
    if(indexCurrent+1<this.reviewsByEtats.length){
      this.decalageEtatADroite(this.reviewsByEtats[indexCurrent+1])
    }
    this.indexMain = this.indexMain -1
    this.hiddenFlecheDroite = this.isHiddenFlecheDroite()
    this.hiddenFlecheGauche = this.isHiddenFlecheGauche()

  }
  decalageEtatADroite(tab: boolean[]) {
    console.log('6--',tab)
    const indexADecaler = tab.findIndex( element => element==true)
    if(indexADecaler<this.reviews.length){
      tab[indexADecaler]=false
      tab[indexADecaler+1]=true
    }
  }

  decalageEtatAGauche(tab : boolean[]) : void{
    const indexADecaler = tab.findIndex( element => element==true)
    if(indexADecaler!=0){
      tab[indexADecaler]=false
      tab[indexADecaler-1]=true
    }
  }

  isHiddenFlecheDroite() : boolean{
    return this.indexMain==this.reviews.length-1
  }
  isHiddenFlecheGauche() : boolean{
    return this.indexMain==0
  }

}
