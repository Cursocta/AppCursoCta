import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, Platform } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { FotoPage } from "../pages/foto/foto";
import { Camera } from "@ionic-native/camera";
import { File } from "@ionic-native/file";

import { MapaPage } from '../pages/mapas/mapa';
import { GoogleMaps } from "@ionic-native/google-maps";
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FotoPage,
    MapaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    FotoPage,
    MapaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Camera,
    File,
    GoogleMaps
    
  ]
})
export class AppModule {}
