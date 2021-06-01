import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'appetizers',
        loadChildren: () => import('../entrada/entrada.module').then(m => m.EntradaPageModule)
      },
      {
        path: 'maincourses',
        loadChildren: () => import('../platos-fuertes/platos-fuertes.module').then(m => m.PlatosFuertesPageModule)
      },
      {
        path: 'drinks',
        loadChildren: () => import('../platos-fuertes/platos-fuertes.module').then(m => m.PlatosFuertesPageModule)
      },
      {
        path: 'shoppingcart',
        loadChildren: () => import('../shopping-cart/shopping-cart.module').then(m => m.ShoppingCartPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/appetizers',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/appetizers',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
