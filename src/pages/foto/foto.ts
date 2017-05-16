import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import {File} from '@ionic-native/file';

@Component({
  selector: 'foto-page',
  templateUrl: 'foto.html'
})
export class FotoPage {
  image:any;
  constructor(public navCtrl: NavController,private camera: Camera,private file:File) {

const options: CameraOptions = {
  quality: 100,
  destinationType: this.camera.DestinationType.DATA_URL,
  encodingType: this.camera.EncodingType.JPEG,
  mediaType: this.camera.MediaType.PICTURE
}

this.camera.getPicture(options).then((imageData) => {
 this.image='data:image/jpeg;base64,' + imageData;
 
 
}, (err) => {
 // Handle error
});

  }

}
