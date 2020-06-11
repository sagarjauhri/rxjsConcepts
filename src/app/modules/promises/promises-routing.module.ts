import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PromisesComponent } from './components/promises/promises.component';


const routes: Routes = [
  {
    path: '',
    component: PromisesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PromisesRoutingModule { }
