import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatTableModule} from "@angular/material/table";
import {MatIconModule} from "@angular/material/icon";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule
  ],
  exports:[
    MatToolbarModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule
  ]
})
export class MaterialModule { }
