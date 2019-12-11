import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { climaProvider } from '../provider/clima';

@Component({
  selector: 'app-clima7',
  templateUrl: './clima7.page.html',
  styleUrls: ['./clima7.page.scss'],
})
export class Clima7Page implements OnInit {
   public clima : any;
  constructor(public climaService:climaProvider,public navCtrl: NavController) {
     
     this.climadays();

   }



   public climadays(){
    this.climaService.get7dias()
   .then(data => {
      this.clima  = data; 
   
   });


  }
   
   voltar(){

    this.navCtrl.navigateRoot('/home');
   }

  ngOnInit() {
  }

}
