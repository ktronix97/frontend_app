import { Component, OnInit } from '@angular/core';
import { ComentarioModel } from 'src/app/models/comentario.model';
import { FormConfig } from 'src/app/config/forms-config';
import { NgxSpinnerService } from "ngx-spinner";

declare const ShowNotificationMessage: any;
declare const ShowRemoveConfirmationModal: any;
declare const closeModal: any;


@Component({
  selector: 'app-listar-comentario',
  templateUrl: './listar-comentario.component.html',
  styleUrls: ['./listar-comentario.component.css']
})
export class ListarComentarioComponent implements OnInit {

  page: number = 1;
  recordList: ComentarioModel[];
  removeRecordId: String = '';
  itemsPageAmount: number = FormConfig.ITEMS_PER_PAGE;

  constructor(  private spinner: NgxSpinnerService ) { }

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
