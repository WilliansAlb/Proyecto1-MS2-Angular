import { Component, OnInit, inject } from '@angular/core';
import { LoaderService } from '../loader.service';
import { CheckerService } from '../checker.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {
  exampleShowed = "materia";
  insert = "area";
  file = null;
  jsonData = null;
  archivosJSON: any[] = [];
  disabledArea: boolean = false;
  modal_title: String = "Insertado";
  modal_body: String = "El area enviada fue insertada correctamente";
  modal_time: String = "";
  isShowed: boolean = false;
  icon: String = "#exclamation-triangle-fill";
  areas: any[] = [];

  ngOnInit(){
    this.areaS.getAreas().subscribe(
      (response) => {
        this.areas = Object(response)['areas'];
      },
      (error) => {
        console.error('Error sending data:', error);
      }
    );
  }

  onRadioChange(event: any) {
    this.exampleShowed = event.target.value;
    console.log(this.exampleShowed);
  }

  onFileChange(event: any) {
    this.file = event.target.files[0];
    this.leerArchivo();
  }

  onRadioChangeInsert(event: any) {
    this.insert = event.target.value;
  }


  loaderFile() {
    const output = document.getElementById('file-text') as HTMLSpanElement;
    this.sendData(JSON.parse(output.innerText));
  }

  leerArchivo() {
    const output = document.getElementById('file-text') as HTMLSpanElement;

    const file = this.file;
    if (!file) {
      output.innerText = 'Por favor, selecciona un archivo JSON primero.';
      return;
    }

    const reader = new FileReader();

    reader.onload = function (event) {
      try {
        const contenido = event.target!.result as string;
        const jsonData = JSON.parse(contenido);
        // Aquí puedes acceder y procesar los datos JSON según tus necesidades
        output.innerText = JSON.stringify(jsonData, null, 2);
      } catch (error: any) {
        output.innerText = 'Error al analizar el archivo JSON: ' + error.message;
      }
    };

    reader.readAsText(file);
  }


  constructor(private loader: LoaderService, private areaS: CheckerService) { }

  sendData(jsonData: any) {
    this.loader.sendDataToServlet(jsonData).subscribe(
      (response) => {
        console.log('Data sent successfully:', response);
      },
      (error) => {
        console.error('Error sending data:', error);
      }
    );
  }

  insertArea() {
    const name_area = document.getElementById('input-area-name') as HTMLInputElement;
    this.disabledArea = true;
    const data = [{ "type": "area", "data": [{ "name": name_area.value }] }];
    this.loader.sendDataToServlet(data).subscribe(
      (response) => {
        console.log('Data sent successfully:', response);
        this.disabledArea = false;
        this.modal_title = "Insertada área";
        this.modal_body = `El área "${name_area.value}" fue insertada correctamente`;
        name_area.value = "";
        this.icon = "#check-circle-fill";
        const fechaYHoraActual = new Date();
        const hora = fechaYHoraActual.getHours();
        const minutos = fechaYHoraActual.getMinutes();
        this.modal_time = `${hora}:${minutos}`;
        this.isShowed = true;
      },
      (error) => {
        console.error('Error sending data:', error);
        this.disabledArea = false;
        this.modal_title = "Error al insertar área";
        this.modal_body = `El área "${name_area}" no fue insertada`;
        const fechaYHoraActual = new Date();
        const hora = fechaYHoraActual.getHours();
        const minutos = fechaYHoraActual.getMinutes();
        this.modal_time = `${hora}:${minutos}`;
        this.icon = "#exclamation-triangle-fill";
        this.isShowed = true;
      }
    );
  }

  hiddenToast() {
    this.isShowed = false;
  }
}


