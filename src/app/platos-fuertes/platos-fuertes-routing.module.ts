import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlatosFuertesPage } from './platos-fuertes.page';

const routes: Routes = [
  {
    path: '',
    component: PlatosFuertesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlatosFuertesPageRoutingModule {}
