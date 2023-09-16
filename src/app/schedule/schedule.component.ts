import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../loader.service';
import { CheckerService } from '../checker.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  periods = [{
    id: '1', start: '13:40', end: '14:30'
  }, {
    id: '2', start: '14:30', end: '15:20'
  }, {
    id: '3', start: '15:20', end: '16:10'
  }, {
    id: '4', start: '16:10', end: '17:00'
  }, {
    id: '5', start: '17:00', end: '17:50'
  }, {
    id: '6', start: '17:50', end: '18:40'
  }, {
    id: '7', start: '18:40', end: '19:30'
  }, {
    id: '8', start: '19:30', end: '20:20'
  }, {
    id: '9', start: '20:20', end: '21:10'
  }];
  salons = [{
    nombre: "Aula 1",
    id: 1
  }];

  constructor(private loader: LoaderService, private areaS: CheckerService) { }

  ngOnInit() {
    this.areaS.getSchedule().subscribe(
      (response) => {
        this.salons = Object(response)['salons'];
      },
      (error) => {
        console.error('Error sending data:', error);
      }
    );
  }
}
