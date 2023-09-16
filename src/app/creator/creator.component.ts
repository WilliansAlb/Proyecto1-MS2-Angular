import { Component, OnInit } from '@angular/core';
import { CheckerService } from '../checker.service';
import { LoaderService } from '../loader.service';

@Component({
    selector: 'app-creator',
    templateUrl: './creator.component.html',
    styleUrls: ['./creator.component.css']
})
export class CreatorComponent implements OnInit {
    parameters: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    curses = [{ "curso": "template", "codigo": "000" }];
    priorityCurses: any = [];
    loadChanges = false;

    constructor(private provider: CheckerService, private loader: LoaderService) { }
    ngOnInit() {
        this.provider.getParameter().subscribe(
            (response) => {
                let listParameters = Object(response)['parameters'];
                this.curses = Object(response)['curses'];
                console.log(this.curses);
                this.parameters[0] = listParameters[0].factor;
                this.parameters[1] = listParameters[1].factor;
                this.parameters[2] = listParameters[2].factor;
                this.parameters[3] = listParameters[3].factor;
                this.parameters[4] = listParameters[4].factor;
                this.parameters[5] = listParameters[5].factor;
                this.parameters[6] = listParameters[6].factor;
                this.parameters[7] = listParameters[7].factor;
                this.parameters[8] = listParameters[8].factor;
                this.parameters[9] = listParameters[9].factor;
                this.parameters[10] = listParameters[10].factor;
            },
            (error) => {
                console.error('Error sending data:', error);
            }
        );
    }

    changeValue(event: any, index: number) {
        let div = event.target.parentNode.parentNode.parentNode.parentNode.children[0].children[0].children[0] as HTMLButtonElement;
        const changeParameters = document.getElementById('changeParameters') as HTMLButtonElement;
        this.parameters[index] = event.target.value;
        div.classList.add("fas");
        div.classList.add("fa-circle");
        this.loadChanges = true;
        changeParameters.disabled = false;
        changeParameters.children[0].classList.remove("fa-check-circle");
        changeParameters.children[0].classList.add("fa-save");
    }

    changeValues() {
        const changeParameters = document.getElementById('changeParameters') as HTMLButtonElement;
        changeParameters.disabled = true;
        let dataItems = [];
        for (let i = 0; i < this.parameters.length; i++) {
            dataItems.push({ "value": this.parameters[i] as number });
        }
        const data = [{
            "type": "parameter", "data": dataItems
        }];
        this.loader.sendParameterData(data).subscribe(
            (response) => {
                changeParameters.children[0].classList.remove("fa-save");
                changeParameters.children[0].classList.add("fa-check-circle");
                var is = document.getElementsByClassName("accordion-icon");
                for (let i = 0; i < is.length; i++) {
                    const element = is[i];
                    element.classList.remove("fa-circle");
                }
            },
            (error) => {
                console.error('Error sending data:', error);
                changeParameters.disabled = false;
            }
        );
    }
    addCurse(event: any) {
        var element = event.target.parentNode.children[0] as HTMLInputElement;
        var splitValue = element.value.split("-")[0] + "-";
        const valorExiste = this.priorityCurses.some((elemento: any) => elemento.includes(splitValue));
        if (!valorExiste) {
            this.priorityCurses.push(element.value);
            element.value = "";
        }
    }

    deleteTag(event: any) {
        var element = event.target.parentNode as HTMLSpanElement;
        const indexToDelete = this.priorityCurses.indexOf(element.title);
        if (indexToDelete !== -1) {
            this.priorityCurses.splice(indexToDelete, 1); // Elimina 1 elemento a partir del índice dado
        } 
    }

    sendGenerate(){
        var generateScheduleName = document.getElementById("generate-schedule-name") as HTMLInputElement;
        var selectPriority = document.getElementById("select-priority") as HTMLSelectElement;
        var spans:any = document.getElementsByClassName("curse-tag");
        var values = "";
        for (let i = 0; i < spans.length; i++) {
            const element = spans[i].title;
            values+= element.split("-")[0];
            if (i!=spans.length-1){
                values+=",";
            }
        }
        var data = [{"type":"generate","data":[{"name":generateScheduleName.value,"priority":selectPriority.value,"curses":values}]}];
        console.log(data);
        
        
    }
}
