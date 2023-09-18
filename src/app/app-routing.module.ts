import { NgModule, inject } from '@angular/core';
import { RouterModule, Routes, provideRouter, withComponentInputBinding } from '@angular/router';
import { LoaderComponent } from './loader/loader.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { CreatorComponent } from './creator/creator.component';
import { StartComponent } from './start/start.component';
import { checkerGuard } from './checker.guard';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  {
    path: 'loader', component: LoaderComponent
  }, {
    path: 'schedule/:id', component: ScheduleComponent,
    canActivate: [checkerGuard]
  }, {
    path: 'creator', component: CreatorComponent,
    canActivate: [checkerGuard]
  }, {
    path: 'list', component: ListComponent,
    canActivate: [checkerGuard]
  }, {
    path: '', component: StartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[
    provideRouter(routes,withComponentInputBinding())
  ]
})
export class AppRoutingModule { }
