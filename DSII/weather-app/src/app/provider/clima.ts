import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';

/*
  Generated class for the ClientesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class climaProvider {

    public lat : any;
    public log : any;
    public nome : string;
    public idade : string ;
    public cidadeorigem : string;
    public idcidade  : string;
    public clima : any;

  constructor(public http: HttpClient,private geolocation: Geolocation  ) {
    console.log('Hello ClientesProvider Provider');

    //this.localizacao;
  }



  public localizacao(){

    this.geolocation.getCurrentPosition().then((resp) => {
      this.lat = resp.coords.latitude;
      this.log = resp.coords.longitude;
      console.log('sucesso');
      
     }).catch((error) => {
       console.log('Error getting location', error);
     });
  
  
  }

  public getclima() {
    return new Promise(resolve => {
      this.http.get("http://apiadvisor.climatempo.com.br/api/v1/forecast/locale/3477/days/15?token=92fd9aaef65db6438a38b0584279a448").subscribe(data => {
    //  this.http.get(this.urlcep).subscribe(data => {
        resolve(data);
      }, err => {
      console.log(err);
      });
    });
  }

 

//usando api mapas
public  getendereco() {


//  alert("https://maps.googleapis.com/maps/api/geocode/json?latlng="+this.lat+","+this.log+"&key=AIzaSyClpgdvgRJoFyki3IPDsdjfK-1gUfzy0Xo");
  return new Promise(resolve => {
    this.http.get("https://maps.googleapis.com/maps/api/geocode/json?latlng="+this.lat+","+this.log+"&key=AIzaSyBqyy_zTS9NH5LZkcN653PecVDg-ta-JPQ").subscribe(data => {
  //  this.http.get(this.urlcep).subscribe(data => {
      resolve(data);
    }, err => {
    console.log(err);
    });
  });
}


public getcodcidade() {

 // alert("http://apiadvisor.climatempo.com.br/api/v1/locale/city?name="+this.cidadeorigem+"&state=SP&token=92fd9aaef65db6438a38b0584279a448");
  return new Promise(resolve => {
    this.http.get("http://apiadvisor.climatempo.com.br/api/v1/locale/city?name="+this.cidadeorigem+"&state=SP&token=92fd9aaef65db6438a38b0584279a448").subscribe(data => {
  //  this.http.get(this.urlcep).subscribe(data => {
      resolve(data);
    }, err => {
    console.log(err);
    });
  });
}




public get7dias() {

   return new Promise(resolve => {
     this.http.get("http://apiadvisor.climatempo.com.br/api/v1/forecast/locale/"+this.idcidade+"/days/15?token=92fd9aaef65db6438a38b0584279a448").subscribe(data => {
       resolve(data);
     }, err => {
     console.log(err);
     });
   });
 }




 public get72() {
 // alert("http://apiadvisor.climatempo.com.br/api/v1/forecast/locale/"+this.idcidade +"/hours/72?token=92fd9aaef65db6438a38b0584279a448");
  return new Promise(resolve => {
    this.http.get("http://apiadvisor.climatempo.com.br/api/v1/forecast/locale/"+this.idcidade +"/hours/72?token=92fd9aaef65db6438a38b0584279a448").subscribe(data => {
      resolve(data);
      this.clima = data;
    }, err => {
    console.log(err);
    });
  });
}



}