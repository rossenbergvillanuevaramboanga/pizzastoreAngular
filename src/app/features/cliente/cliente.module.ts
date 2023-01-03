import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from "@angular/router";
import { ClienteListComponent } from './cliente-list/cliente-list.component';


const routes: Routes = [
  {
    path: 'list',
    component: ClienteListComponent
  }
]

@NgModule({
  declarations: [
    ClienteListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ClienteModule { }
