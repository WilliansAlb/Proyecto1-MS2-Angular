import { Component } from '@angular/core';
import { LoaderService } from '../loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent {
  exampleShowed = "materia";
  insert = "profesor";
  file = null;
  jsonData = null;
  archivosJSON: any[] = [];

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
    } catch (error:any) {
      output.innerText = 'Error al analizar el archivo JSON: ' + error.message;
    }
  };

  reader.readAsText(file);
}


constructor(private loader: LoaderService) { }

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
}


