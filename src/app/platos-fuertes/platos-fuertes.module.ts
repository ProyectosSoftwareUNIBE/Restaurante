import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlatosFuertesPageRoutingModule } from './platos-fuertes-routing.module';

import { PlatosFuertesPage } from './platos-fuertes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlatosFuertesPageRoutingModule
  ],
  declarations: [PlatosFuertesPage]
})
export class PlatosFuertesPageModule {}
