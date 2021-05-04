import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {AuthService} from 'src/app/api/auth.service';
import {ItemService} from 'src/app/api/item.service';
import {ShoppingCartService} from 'src/app/api/shopping-cart.service';

@NgModule({
    declarations: [AppComponent],
    entryComponents: [],
    imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
    providers: [
        {provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
        AuthService,
        ItemService,
        ShoppingCartService
    ],
    bootstrap: [AppComponent],
})
export class AppModule {
}
