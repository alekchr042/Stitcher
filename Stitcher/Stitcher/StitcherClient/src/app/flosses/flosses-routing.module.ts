import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlossesListComponent } from './flosses-list/flosses-list.component';


const routes: Routes = [
  {
    path: '',
    component: FlossesListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlossesRoutingModule { }
