import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [

  {
    path: 'cliente',
    loadChildren: () => import('./features/cliente/cliente.module').then(m => m.ClienteModule)
  },
  {
    path: 'ordine',
    loadChildren: () => import('./features/ordine/ordine.module').then(m => m.OrdineModule)
  },
  {
    path: 'pizza',
    loadChildren: () => import('./features/pizza/pizza.module').then(m => m.PizzaModule)
  },
  {
    path: '',
    redirectTo: 'cliente',
    pathMatch: 'full'
  }

]



@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
