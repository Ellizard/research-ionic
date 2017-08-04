import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {PersonalinfoPage} from "../personalinfo/personalinfo";

@Component({
  selector: 'page-license',
  templateUrl: 'license.html'
})
export class LicensePage {

  personalPage = PersonalinfoPage;

  constructor(public navCtrl: NavController) {

  }



}
