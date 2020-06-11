import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'promise',
    loadChildren: () => import('./modules/promises/promises.module').then(m => m.PromisesModule)
  },
  {
    path: 'observable',
    loadChildren: () => import('./modules/observables/observables.module').then(m => m.ObservablesModule)
  },
  {
    path: '',
    redirectTo: 'promise',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
