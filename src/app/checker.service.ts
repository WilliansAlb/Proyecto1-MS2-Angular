import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CheckerService {
  private servletUrl = 'http://localhost:4200/api/GenorarioBackend/checkerArea'; // Replace with your servlet URL

  constructor(private http: HttpClient) {}
  
  getAreas(){
    return this.http.get(this.servletUrl);
  }

  getSchedule(){
    return this.http.get('http://localhost:4200/api/GenorarioBackend/provider?type=schedule');
  }
  
  getSchedules(){
    return this.http.get('http://localhost:4200/api/GenorarioBackend/provider?type=schedules');
  }

  getScheduleForId(id:any){
    return this.http.get('http://localhost:4200/api/GenorarioBackend/provider?type=schedule&id='+id);
  }

  getParameter(){
    return this.http.get('http://localhost:4200/api/GenorarioBackend/provider?type=parameter');
  }
}
