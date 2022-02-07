import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  imgSrc:string='./assets/default.png'
  @Input() status:string
  @Input() cardID:number
  @Output() fromFiglioEvnt = new EventEmitter<{ cardID:number ,  status:string }>();

  constructor() { }

  ngOnInit(): void {
    if (this.status=='default') {
      this.imgSrc='./assets/default.png'
    } else {
       this.imgSrc='./assets/3cuori.png'
    }
  }

  flipCard() { 
    console.log("sono la carta "+this.cardID+" e cambio stato")
    if (this.status=='default') {
      this.status='flipped'
      this.imgSrc='./assets/3cuori.png'
    } else {
      this.status='default'
      this.imgSrc='./assets/default.png'
    }

    // gestione dell'evento da inviare al padre
    this.fromFiglioEvnt.emit( {cardID:this.cardID , status: this.status } )
  }


}
