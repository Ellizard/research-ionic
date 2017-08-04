import {Component} from '@angular/core';
import {ContactPage} from '../contact/contact';
import {ResourcesPage} from "../resources/resources";
import {NotificationPage} from "../notification/notification";
import {SettingsPage} from "../settings/settings";
import {TrialPage} from "../trial/trial";

@Component({
    templateUrl: 'tabs.html'
})

export class TabsPage {

    tab1Root = TrialPage;
    tab2Root = ResourcesPage;
    tab3Root = ContactPage;
    tab4Root = NotificationPage;
    tab5Root = SettingsPage;

    constructor() {}

}
