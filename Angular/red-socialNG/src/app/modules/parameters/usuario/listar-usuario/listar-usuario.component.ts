import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../../../models/User.model';

@Component({
  selector: 'app-listar-usuario',
  templateUrl: './listar-usuario.component.html',
  styleUrls: ['./listar-usuario.component.css']
})
export class ListarUsuarioComponent implements OnInit {

  recordList: UserModel[]

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
