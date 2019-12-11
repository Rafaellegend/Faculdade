import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { climaProvider } from '../provider/clima';

@Component({
  selector: 'app-clima72',
  templateUrl: './clima72.page.html',
  styleUrls: ['./clima72.page.scss'],
})
export class Clima72Page implements OnInit {
  public clima : any;
  constructor(public climaService:climaProvider ,public navCtrl: NavController) { 

   // this.clima72();
  

  // clima
  }

  ngOnInit() {
    
  
  }

  public clima72(){
    //this.climaService.idcidade = '3481';
    this.climaService.get72()
   .then(data => {
      this.clima  = data; 
   
   });
  }

  voltar(){

    this.navCtrl.navigateRoot('/home');
   }
}
