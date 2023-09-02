import { Component } from '@angular/core';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent {
  periods = [{
    id: '1', start: '8:00', end: '8:50'
  },{
    id: '2', start: '8:50', end: '9:40'
  }, {
    id: '3', start: '9:40', end: '10:30'
  }, {
    id: '4', start: '10:30', end: '11:20'
  }, {
    id: '5', start: '11:20', end: '12:10'
  }, {
    id: '6', start: '12:10', end: '13:00'
  }, {
    id: '7', start: '13:00', end: '13:40'
  }, {
    id: '8', start: '13:40', end: '14:30'
  }, {
    id: '9', start: '14:30', end: '15:20'
  }, {
    id: '10', start: '15:20', end: '16:10'
  }, {
    id: '11', start: '16:10', end: '17:00'
  }, {
    id: '12', start: '17:00', end: '17:50'
  }, {
    id: '13', start: '17:50', end: '18:40'
  }, {
    id: '14', start: '18:40', end: '19:30'
  }, {
    id: '15', start: '19:30', end: '20:20'
  }, {
    id: '16', start: '20:20', end: '21:10'
  }];
  salons = [{
    nombre: "Aula 1"
  },{
    nombre: "Aula 3"
  },{
    nombre: "Aula Magna"
  },{
    nombre: "Aula 5"
  },{
    nombre: "Aula 6"
  },{
    nombre: "Aula 7"
  },{
    nombre: "Aula 8"
  },{
    nombre: "Aula 9"
  },{
    nombre: "Aula 10"
  },{
    nombre: "Aula 11"
  },{
    nombre: "Aula 12"
  },{
    nombre: "Aula 13"
  },{
    nombre: "Salón de Proyecciones"
  },{
    nombre: "Aula TICs"
  },{
    nombre: "Laboratorio de Aguas"
  },{
    nombre: "Laboratorio Electrica"
  },{
    nombre: "Salon de Dibujo"
  },{
    nombre: "Laboratorio de Fisica"
  },{
    nombre: "Laboratorio de Industrial"
  },{
    nombre: "Cancha"
  },{
    nombre: "Laboratorio de Quimica"
  },{
    nombre: "Salon Hugo Pineda"
  }]
}
