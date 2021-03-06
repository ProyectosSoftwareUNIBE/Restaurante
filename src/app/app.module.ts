import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ItemService } from './service/item.service';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { AuthService } from './service/auth.service';
import { ShoppingCartService } from './service/shopping-cart.service';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    AuthService,
    ItemService,
    ShoppingCartService,
    NativeStorage
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
