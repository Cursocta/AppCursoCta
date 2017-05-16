import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Storage, IonicStorageModule } from "@ionic/storage"

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PictureProvider } from "../providers/picture.provider";
import { FotoPage } from "../pages/foto/foto";
import { Camera } from "@ionic-native/camera";
import { File } from "@ionic-native/file";
import { SharingProvider } from "../providers/sharing.provider";
import { SocialSharing } from "@ionic-native/social-sharing";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FotoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    FotoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PictureProvider,
    SharingProvider,
    Camera,
    File,
    SocialSharing
  ]
})
export class AppModule {}
