import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import { OrdineListComponent } from './ordine-list/ordine-list.component';

const routes: Routes = [
  {
    path: 'list',
    component: OrdineListComponent
  }
]

@NgModule({
  declarations: [
    OrdineListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class OrdineModule { }
