import { Component, OnInit } from '@angular/core';
import { PublicacionModel } from '../../../../models/parameters/publicacion.model';
import { FormConfig } from 'src/app/config/forms-config';
import { NgxSpinnerService } from "ngx-spinner";

declare const ShowNotificationMessage: any;
declare const ShowRemoveConfirmationModal: any;
declare const closeModal: any;


@Component({
  selector: 'app-listar-publicacion',
  templateUrl: './listar-publicacion.component.html',
  styleUrls: ['./listar-publicacion.component.css']
})
export class ListarPublicacionComponent implements OnInit {

  page: number = 1;
  removeRecordId: String = '';
  itemsPageAmount: number = FormConfig.ITEMS_PER_PAGE;
  recordList: PublicacionModel[]

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

