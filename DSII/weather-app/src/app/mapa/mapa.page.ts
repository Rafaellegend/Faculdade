import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { climaProvider } from '../provider/clima';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit {
   
  public mapa : string;
  lat : any;
  log : any;

  
  
  

  constructor(private climaService:climaProvider,   public navCtrl: NavController) {
     this.lat  =this.climaService.lat;
     this.log  =this.climaService.log;


     this.mapa = "https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d14629.533437412194!2d"+this.lat+"!3d"+this.log+"!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1557627856692!5m2!1spt-BR!2sbr";
   
   }
     
       

  voltar(){

    this.navCtrl.navigateRoot('/home');
   }

  ngOnInit() {
  }

}
