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
    "id_salon": 1,
    "name_salon": "Aula 1",
    "capacity": 30,
    "area_salon": 2,
    "assign": [
      {
        "period": {
          "id_period": 1,
          "start_period": 1340,
          "end_period": 1430
        },
        "curse": {
          "code_curse": "2807",
          "name_curse": "Práctica Inicial TI",
          "semester_curse": 6,
          "assigned_students": 20,
          "area_curse": 2,
          "abbr_curse": "Practica Inicial",
          "count_teachers": 1,
          "count_salons": 0,
          "weight": 300.0
        },
        "teacher": {
          "id_teacher": 5,
          "name_teacher": "Christian Lopez",
          "start_hour": 1300,
          "end_hour": 1900,
          "area_teacher": 2,
          "alter_teacher": "Christian",
          "count_assigned": 2,
          "max_curses": [
            {
              "start": 1340,
              "taken": true
            },
            {
              "start": 1430,
              "taken": false
            },
            {
              "start": 1520,
              "taken": true
            },
            {
              "start": 1610,
              "taken": false
            },
            {
              "start": 1700,
              "taken": false
            },
            {
              "start": 1750,
              "taken": false
            }
          ]
        },
        "schedule": 0,
        "status": 1,
        "message": "Asignado Christian Lopez"
      }]
  }];

  constructor(private loader: LoaderService, private areaS: CheckerService) { }

  ngOnInit() {
    this.areaS.getSchedule().subscribe(
      (response) => {
        this.salons = Object(response)['schedule'];
      },
      (error) => {
        console.error('Error sending data:', error);
      }
    );
  }
}
