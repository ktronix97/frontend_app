import { Component, OnInit } from '@angular/core';
import { FormConfig } from 'src/app/config/forms-config';
import { NgxSpinnerService } from "ngx-spinner";
import { ImagenModel } from '../../../../models/parameters/imagen.model';


declare const ShowNotificationMessage: any;
declare const ShowRemoveConfirmationModal: any;
declare const closeModal: any;

@Component({
  selector: 'app-listar-imagen',
  templateUrl: './listar-imagen.component.html',
  styleUrls: ['./listar-imagen.component.css']
})
export class ListarImagenComponent implements OnInit {
  
  page: number = 1;
  removeRecordId: String = '';
  itemsPageAmount: number = FormConfig.ITEMS_PER_PAGE;
  recordList: ImagenModel[];

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
