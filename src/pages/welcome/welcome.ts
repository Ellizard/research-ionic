import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AboutPage} from "../about/about";
import {TabsPage} from "../tabs/tabs";

@Component({
    selector: 'page-welcome',
    templateUrl: 'welcome.html'
})
export class WelcomePage {

    tabs = TabsPage;
    about = AboutPage;

    constructor(public navCtrl: NavController) {
    }







}
