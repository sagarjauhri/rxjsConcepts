import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ObservableListComponent } from './components/observable-list/observable-list.component';
import { FromEventComponent } from './components/from-event/from-event.component';
import { IntervalTimerComponent } from './components/interval-timer/interval-timer.component';


const routes: Routes = [
  {
    path: '',
    component: ObservableListComponent
  },
  {
    path: 'FromEvent',
    component: FromEventComponent
  },
  {
    path: 'interval/timer',
    component: IntervalTimerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ObservablesRoutingModule { }
