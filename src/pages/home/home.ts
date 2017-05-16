import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FotoPage } from "../foto/foto";

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
}
