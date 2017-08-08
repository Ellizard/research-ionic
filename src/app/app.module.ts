import {NgModule, ErrorHandler} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';

import {AboutPage} from '../pages/about/about';
import {ContactPage} from '../pages/contact/contact';
import {HomePage} from '../pages/home/home';

import {WelcomePage} from '../pages/welcome/welcome';
import {SlidePage} from '../pages/slide/slide';
import {TrialPage} from '../pages/trial/trial';
import {ResourcesPage} from "../pages/resources/resources";
import {NotificationPage} from "../pages/notification/notification";
import {SettingsPage} from "../pages/settings/settings";

import {TabsPage} from '../pages/tabs/tabs';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {LicensePage} from "../pages/license/license";
import {PersonalinfoPage} from "../pages/personalinfo/personalinfo";
import {MyinfoPage} from "../pages/myinfo/myinfo";



@NgModule({
    declarations: [
        MyApp,
        AboutPage,
        ContactPage,
        HomePage,
        WelcomePage,
        SlidePage,
        TrialPage,
        ResourcesPage,
        NotificationPage,
        SettingsPage,
        LicensePage,
        PersonalinfoPage,
        MyinfoPage,
        TabsPage
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        AboutPage,
        ContactPage,
        WelcomePage,
        SlidePage,
        HomePage,
        ResourcesPage,
        NotificationPage,
        SettingsPage,
        TrialPage,
        LicensePage,
        PersonalinfoPage,
        MyinfoPage,
        TabsPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler}
    ]
})
export class AppModule {
}
