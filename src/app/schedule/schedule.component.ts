import { Component } from '@angular/core';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent {
  periods = [{
    id: '1', start: '8:40', end: '9:30'
  }, {
    id: '2', start: '9:30', end: '10:20'
  }, {
    id: '3', start: '10:20', end: '11:10'
  }, {
    id: '4', start: '11:10', end: '12:00'
  }, {
    id: '5', start: '12:00', end: '13:40'
  }, {
    id: '6', start: '13:40', end: '14:30'
  }, {
    id: '7', start: '14:30', end: '15:20'
  }, {
    id: '8', start: '15:20', end: '16:10'
  }, {
    id: '9', start: '16:10', end: '17:00'
  }, {
    id: '10', start: '17:00', end: '17:50'
  }, {
    id: '11', start: '17:50', end: '18:40'
  }, {
    id: '12', start: '18:40', end: '19:30'
  }, {
    id: '13', start: '19:30', end: '20:20'
  }, {
    id: '14', start: '20:20', end: '21:10'
  }];
}
