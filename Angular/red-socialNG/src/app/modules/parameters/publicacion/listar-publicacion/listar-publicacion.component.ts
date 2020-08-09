import { Component, OnInit } from '@angular/core';
import { PublicacionModel } from '../../../../models/publicacion.model';

@Component({
  selector: 'app-listar-publicacion',
  templateUrl: './listar-publicacion.component.html',
  styleUrls: ['./listar-publicacion.component.css']
})
export class ListarPublicacionComponent implements OnInit {

  recordList: PublicacionModel[]

  constructor() { }

  ngOnInit(): void {
    //this.getRecordList();
  }

  /*getRecordList(){
    this.service.getAllRecords().subscribe(
      records => {
        this.recordList = records;
        console.log("Records:")
        console.log(this.recordList)
      },
      error => {
        console.log("Error with BackEnd")
      }
    )
  }*/

  RemoveRecordConfirmation(){

  }
}
