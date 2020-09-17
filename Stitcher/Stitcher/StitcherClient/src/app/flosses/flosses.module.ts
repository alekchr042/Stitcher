import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlossesRoutingModule } from './flosses-routing.module';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { FlossesListComponent } from './flosses-list/flosses-list.component';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    FlossesRoutingModule
  ],
  declarations: [
    FlossesListComponent
  ]
})
export class FlossesModule { }
