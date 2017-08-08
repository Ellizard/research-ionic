import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-myinfo',
  templateUrl: 'myinfo.html'
})
export class MyinfoPage {

  status: boolean = false;
  constructor(public navCtrl: NavController) {

  }



  showBlock(){
    if (status)
      this.status = false;
    else
      this.status = true;
  }





}
