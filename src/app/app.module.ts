import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoaderComponent } from './loader/loader.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { CreatorComponent } from './creator/creator.component';
import { StartComponent } from './start/start.component';
import { HttpClientModule } from '@angular/common/http';
import { checkerGuard } from './checker.guard';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent,
    ScheduleComponent,
    CreatorComponent,
    StartComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
