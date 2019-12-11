import { Component } from '@angular/core';
import { climaProvider } from '../provider/clima';
import { NavController } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';





@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public nome : string;
  public idade : number;
  public climatempo : any;
  public dadostempo : any;
  public tempo :any;
  public logradouro : any;
  public resultado : any;
  public cidade : string;
  public objcidades  :any;
   

  constructor(public climaService:climaProvider,public navCtrl: NavController,private geolocation: Geolocation) {
 
    
   this.localizacao();

   
  }



public localizacao(){
  
  return new Promise(resolve => {

      
      this.geolocation.getCurrentPosition().then((resp) => {
      this.climaService.lat = resp.coords.latitude;
      this.climaService.log = resp.coords.longitude;
       

      //buscar o endereco
      this.endereco();
     
    }, err => {
    console.log(err);
    });
  });




/*
  this.geolocation.getCurrentPosition().then((resp) => {
    this.climaService.lat = resp.coords.latitude;
    this.climaService.log = resp.coords.longitude;
    return true; 
    
   }).catch((error) => {
     console.log('Error getting location', error);
   });
*/

}






public getcidade2(){
 // this.climaService.cidadeorigem = this.cidade;
   alert(this.cidade);
}


pgmapa(){
  this.navCtrl.navigateRoot('/mapa');
}

pgclima7(){
  this.navCtrl.navigateRoot('/clima7');
}


pg72(){
  
    //this.climaService.cidadeorigem = this.cidade;

    this.codcidade().then(data => {

      this.clima72().then(data => {
        alert('shdkfjsdhfljsd');
      });
      this.navCtrl.navigateRoot('/clima72');
   //  alert('data3');

    });
 
    
 

  
}


public clima72(){
  
  return new Promise(resolve => { 
  this.climaService.get72()
 .then(data => {
    this.climaService.clima  = data; 
 
 });

});

}



public paginatempo(){
  this.navCtrl.navigateRoot('/clima7');
}

  public getclima() {
    this.climaService.getclima()
    .then(data => {
     
     this.climatempo  = data; 
     

         
    });
  }


  public endereco(){
     this.climaService.getendereco()
    .then(data => {
       this.logradouro  = data; 

       //pegar a cidade
      this.resultado = this.logradouro.plus_code.compound_code.split(",");
      this.climaService.cidadeorigem = (this.resultado[0].substring(8,10000));
      this.cidade  =  this.climaService.cidadeorigem;
     
      //fucao para pegar o codigo da cidae
   
      this.codcidade();
      
    
    });

  }
  

 

  public codcidade(){

    return new Promise(resolve => {

    this.climaService.getcodcidade()
    .then(data => {
        this.objcidades  = data; 
        //alert(this.objcidades[0].id);
        this.climaService.idcidade =this.objcidades[0].id ;
        resolve(data); 
    
    
    });
   
  });

  }


}
