import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoaderComponent } from './loader/loader.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { CreatorComponent } from './creator/creator.component';
import { StartComponent } from './start/start.component';

@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent,
    ScheduleComponent,
    CreatorComponent,
    StartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
