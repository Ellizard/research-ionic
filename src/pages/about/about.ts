import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {SlidePage} from "../slide/slide";
import {TrialPage} from "../trial/trial";
import {TabsPage} from "../tabs/tabs";

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  tabs = TabsPage;

  constructor(public navCtrl: NavController) {

  }

}
