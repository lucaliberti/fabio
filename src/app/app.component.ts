import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-card-game';
  cardStatus:string[]=[ 'default' , 'flipped' ] ;
  cardID:number[]=[ 0 , 1 ] ;

  fromFiglioEvntHandlr( evntData: { cardID:number ,  status:string } ){
    console.log("Sono il padre: dal figlio " + evntData.cardID+  " ho ricevuto status="+evntData.status )
    this.cardStatus[evntData.cardID]=evntData.status
    console.log(this.cardStatus)
  }
}
