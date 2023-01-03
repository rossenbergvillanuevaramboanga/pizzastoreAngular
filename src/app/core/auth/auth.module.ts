import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import {FormsModule} from "@angular/forms";
import {MaterialModule} from "../../shared/material.module";
import {MatInputModule} from "@angular/material/input";



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    MatInputModule
  ]
})
export class AuthModule { }
