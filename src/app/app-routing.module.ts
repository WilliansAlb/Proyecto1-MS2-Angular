import { NgModule, inject } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoaderComponent } from './loader/loader.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { CreatorComponent } from './creator/creator.component';
import { StartComponent } from './start/start.component';
import { checkerGuard } from './checker.guard';

const routes: Routes = [
  {
    path: 'loader', component: LoaderComponent
  }, {
    path: 'schedule', component: ScheduleComponent,
    canActivate: [checkerGuard]
  }, {
    path: 'creator', component: CreatorComponent,
    canActivate: [checkerGuard]
  }, {
    path: '', component: StartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
