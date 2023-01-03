import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PizzaListComponent } from './pizza-list/pizza-list.component';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {
    path: 'list',
    component: PizzaListComponent
  }
]

@NgModule({
  declarations: [
    PizzaListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PizzaModule { }
