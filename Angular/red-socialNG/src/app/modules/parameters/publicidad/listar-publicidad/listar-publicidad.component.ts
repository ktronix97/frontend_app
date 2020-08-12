import { Component, OnInit } from '@angular/core';
import { PublicidadModel } from 'src/app/models/parameters/publicidad.model';
import { FormConfig } from 'src/app/config/forms-config';
import { NgxSpinnerService } from "ngx-spinner";

declare const ShowNotificationMessage: any;
declare const ShowRemoveConfirmationModal: any;
declare const closeModal: any;

@Component({
  selector: 'app-listar-publicidad',
  templateUrl: './listar-publicidad.component.html',
  styleUrls: ['./listar-publicidad.component.css']
})
export class ListarPublicidadComponent implements OnInit {

  page: number = 1;
  recordList: PublicidadModel[];
  removeRecordId: String = '';
  itemsPageAmount: number = FormConfig.ITEMS_PER_PAGE;

  constructor( private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.spinner.show();
    this.getRecordList();
  }

  getRecordList() {
  
    setTimeout(() => {
        /** spinner ends after 5 seconds */
        this.spinner.hide();
      }, 1000); 
  
}

RemoveRecordConfirmation(id) {
  this.removeRecordId = id;
  ShowRemoveConfirmationModal();
}

RemoveRecord(){
  
}

}
