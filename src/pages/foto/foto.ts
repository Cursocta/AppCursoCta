import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import {File} from '@ionic-native/file';

@Component({
  selector: 'foto-page',
  templateUrl: 'foto.html'
})
export class FotoPage {

  constructor(public navCtrl: NavController,private camera: Camera,private file:File) {

const options: CameraOptions = {
  quality: 100,
  destinationType: this.camera.DestinationType.FILE_URI,
  encodingType: this.camera.EncodingType.JPEG,
  mediaType: this.camera.MediaType.PICTURE
}

this.camera.getPicture(options).then((imageData) => {
 var currentName = imageData.replace(/^.*[\\\/]/, '');
 
  //Create a new name for the photo
  let d = new Date(),
      n = d.getTime(),
      newFileName = n + ".jpg";
 
  //Move the file to permanent storage
  file.moveFile(file.tempDirectory, currentName, file.dataDirectory, newFileName).then(function(success){
     console.log("imagen guardada"); 
   }, function(error){
     console.log("imagen error")
  });
 
 
}, (err) => {
 // Handle error
});

  }

}
