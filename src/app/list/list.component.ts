import { Component } from '@angular/core';
import { CheckerService } from '../checker.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  schedules = [{
    id_schedule: 1, name_schedule: "", date_schedule: "", efficiency_schedule: 0.00, parameters_used: [{
      id_parameter: -1, factor: -1
    }]
  }];
  description_parameters = [{
    description: "Valor por asignación", class: "fa fa-graduation-cap"
  }, {
    description: "Valor por profesores", class: "fa fa-person-chalkboard"
  }, {
    description: "Valor por salones", class: "fa fa-school"
  }, {
    description: "Valor por Sistemas", class: "fa fa-terminal"
  }, {
    description: "Valor por Civil", class: "fa fa-helmet-safety"
  }, {
    description: "Valor por Mecanica", class: "fa fa-wrench"
  }, {
    description: "Valor por Industrial", class: "fa fa-industry"
  }, {
    description: "Valor por Mecanica Industrial", class: "fa fa-gears"
  }, {
    description: "Valor Semestre Desfasado", class: "fa fa-percent"
  },];
  load = false;

  constructor(private scheduleService: CheckerService) { }
  ngOnInit() {
    this.scheduleService.getSchedules().subscribe(
      (response) => {
        this.schedules = Object(response)['schedules'];
        console.log(this.schedules);

        this.load = true;
      },
      (error) => {
        console.error('Error sending data:', error);
      }
    );
  }
}
