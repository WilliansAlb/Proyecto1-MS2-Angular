import { Component, Input, OnInit } from '@angular/core';
import { LoaderService } from '../loader.service';
import { CheckerService } from '../checker.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  description_parameters = [{
    description:"Valor por asignación", class:"fa fa-graduation-cap"
  },{
    description:"Valor por profesores", class:"fa fa-person-chalkboard"
  },{
    description:"Valor por salones", class:"fa fa-school"
  },{
    description:"Valor por Sistemas", class:"fa fa-terminal"
  },{
    description:"Valor por Civil", class:"fa fa-helmet-safety"
  },{
    description:"Valor por Mecanica", class:"fa fa-wrench"
  },{
    description:"Valor por Industrial", class:"fa fa-industry"
  },{
    description:"Valor por Mecanica Industrial", class:"fa fa-gears"
  },{
    description:"Valor Semestre Desfasado", class:"fa fa-percent"
  }];
  parameters_used = [{
    id_parameter: -1, factor: -1
  }];
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
  efficienty = 0.0;
  load = false;
  showWarnings = false;
  dataSchedule = false;
  id_schedule = -1;
  date_schedule = "";
  name_schedule = "";

  @Input() id?: any;
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

  constructor(private loader: LoaderService, private areaS: CheckerService, private route: ActivatedRoute) {
    route.paramMap.subscribe((params) => console.log(params));
  }

  ngOnInit() {
    if (this.id == 0 || this.id == 'random') {
      this.areaS.getSchedule().subscribe(
        (response) => {
          this.salons = Object(response)['schedule'];
          this.efficienty = (Object(response)['efficienty']).toFixed(2);
          this.parameters_used = Object(response)['parameters'];
          this.load = true;
        },
        (error) => {
          console.error('Error sending data:', error);
        }
      );
    } else {
      this.areaS.getScheduleForId(this.id).subscribe(
        (response) => {
          this.salons = Object(response)['schedule'];
          var temp = Object(response)['dataSchedule'];
          this.parameters_used = Object(response)['parameters'];
          this.name_schedule = temp.name_schedule;
          this.id_schedule = temp.id_schedule;
          this.date_schedule = temp.date_schedule;
          this.efficienty = temp.efficiency_schedule.toFixed(2);
          this.load = true;
          this.dataSchedule = true;
        },
        (error) => {
          console.error('Error sending data:', error);
        }
      );
    }

  }
}
