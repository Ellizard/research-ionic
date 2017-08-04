import {Component} from '@angular/core';
import {NavController, ModalController, ViewController} from 'ionic-angular';
import {TrialPage} from "../trial/trial";
import {TabsPage} from "../tabs/tabs";


@Component({
    selector: 'page-slide',
    templateUrl: 'slide.html'
})
export class SlidePage {



    trial = TrialPage;
    tabs = TabsPage;

    constructor(public navCtrl: NavController,
                public modalCtrl: ModalController,
                public viewCtrl: ViewController) {

    }

    // Close popup with slider;
    closeSlider() {
        this.viewCtrl.dismiss();
    }

}
