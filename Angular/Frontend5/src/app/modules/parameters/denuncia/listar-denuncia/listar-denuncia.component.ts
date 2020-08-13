import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import { FormConfig } from 'src/app/config/forms-config';
import { DenunciaModel } from 'src/app/models/parameters/denuncia.model';

declare const ShowNotificationMessage: any;
declare const ShowRemoveConfirmationModal: any;
declare const closeModal: any;

@Component({
  selector: 'app-listar-denuncia',
  templateUrl: './listar-denuncia.component.html',
  styleUrls: ['./listar-denuncia.component.css']
})
export class ListarDenunciaComponent implements OnInit {

  page: number = 1;
  recordList: DenunciaModel[];
  removeRecordId: String = '';
  itemsPageAmount: number = FormConfig.ITEMS_PER_PAGE;

  constructor(private spinner: NgxSpinnerService) { }

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
