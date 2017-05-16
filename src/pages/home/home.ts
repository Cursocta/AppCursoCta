import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FotoPage } from "../foto/foto";
import { GaleriaPage } from "../galeria/galeria";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }


  Foto()
  {
    console.log("foto");
    this.navCtrl.push(FotoPage);
  }
   
  aGaleria(){
    this.navCtrl.push(GaleriaPage)
    console.log("a Galeria que nos vamos");
  }
}
