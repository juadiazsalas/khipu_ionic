import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {startByPaymentId} from '../../../node_modules/cordova-khenshin/www/khenshin';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController)
  { 
    
  }

  RealizarPago(){
    console.log('pagando con khipu');
    let idTransaccion =  "7rvf9hwljaus";
    
    try { 
       startByPaymentId(idTransaccion, this.successCallback, this.errorCallback)
    }
    catch(e) {
      alert("try catch : "+e);
    }

    
  }
  //Funcion para desplegar la respuesta cuando es satisfactorio
  successCallback(message){
    alert("message: "+message);
}
//Funcion si hubo un error
errorCallback(error){
    alert("Hubo un error: "+error);
}

}
