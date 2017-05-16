import { Injectable } from "@angular/core";
import { Storage } from "@ionic/storage";

@Injectable()
export class PictureProvider {
    constructor(private storage: Storage) {

    }
}