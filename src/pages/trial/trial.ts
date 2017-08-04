import {Component} from '@angular/core';
import {ModalController, NavController} from 'ionic-angular';
import {SlidePage} from "../slide/slide";

@Component({
    selector: 'page-trial',
    templateUrl: 'trial.html'
})
export class TrialPage {


    constructor(public modalCtrl: ModalController,
                public navCtrl: NavController) {
    }


    ionViewCanEnter() {
      // Put here the code you want to execute
        const modal = this.modalCtrl.create(SlidePage);

        modal.onDidDismiss(data => {
            console.log(data);
        });


        modal.present()
    }



}

