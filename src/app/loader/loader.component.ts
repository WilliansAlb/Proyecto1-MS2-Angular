import { Component } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent {
  exampleShowed = "materia";
  insert = "profesor";

  onRadioChange(event:any){
    this.exampleShowed = event.target.value;
    console.log(this.exampleShowed);
  }

  onRadioChangeInsert(event:any){
    this.insert = event.target.value;
  }
}
