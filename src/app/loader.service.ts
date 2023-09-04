import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  private servletUrl = 'http://localhost:4200/api/GenorarioJava/loader'; // Replace with your servlet URL

  constructor(private http: HttpClient) {}

  sendDataToServlet(data: any) {
    return this.http.post(this.servletUrl,data);
  }
}
