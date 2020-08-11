import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import { FormConfig } from 'src/app/config/forms-config';

@Component({
  selector: 'app-listar-administrador',
  templateUrl: './listar-administrador.component.html',
  styleUrls: ['./listar-administrador.component.css']
})
export class ListarAdministradorComponent implements OnInit {


  page: number = 1;
  removeRecordId: String = '';
  itemsPageAmount: number = FormConfig.ITEMS_PER_PAGE;

  constructor(private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
        /** spinner starts on init */
        this.spinner.show();
 
        setTimeout(() => {
          /** spinner ends after 5 seconds */
          this.spinner.hide();
        }, 5000);
  }
  getRecordList(){
    
  }

  RemoveRecordConfirmation(id){

  }

  RemoveRecord(){

  }
}


