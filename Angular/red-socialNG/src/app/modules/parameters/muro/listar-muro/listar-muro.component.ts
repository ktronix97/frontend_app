import { Component, OnInit } from '@angular/core';
import { MuroModel } from '../../../../models/muro.model';

@Component({
  selector: 'app-listar-muro',
  templateUrl: './listar-muro.component.html',
  styleUrls: ['./listar-muro.component.css']
})
export class ListarMuroComponent implements OnInit {

  recordList: MuroModel[]

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
