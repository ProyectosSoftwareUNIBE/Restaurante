import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {AuthService} from 'src/app/api/auth.service';
import {ItemService} from 'src/app/api/item.service';
import {ShoppingCartService} from 'src/app/api/shopping-cart.service';
import {NativeStorage} from '@ionic-native/native-storage/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    {provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
    AuthService,
    ItemService,
    ShoppingCartService,
    NativeStorage
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
