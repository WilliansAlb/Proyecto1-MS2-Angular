import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoaderComponent } from './loader/loader.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { CreatorComponent } from './creator/creator.component';
import { StartComponent } from './start/start.component';

const routes: Routes = [
  {
    path: 'loader', component: LoaderComponent
  }, {
    path: 'schedule', component: ScheduleComponent
  }, {
    path: 'creator', component: CreatorComponent
  }, {
    path: '', component: StartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
