import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../../../models/User.model';
import { UserService } from 'src/app/services/users.service';

@Component({
  selector: 'app-listar-usuario',
  templateUrl: './listar-usuario.component.html',
  styleUrls: ['./listar-usuario.component.css']
})
export class ListarUsuarioComponent implements OnInit {

  listaUsuarios: UserModel[] = [];

  constructor(private servicioUser:UserService) { }

  ngOnInit(): void {
    this.getUsuarios();
    
  }

  getUsuarios(): void {
    this.servicioUser.getUsuarios().subscribe(
    usuarios =>{
      this.listaUsuarios=usuarios
      }); 

}


  RemoveRecordConfirmation(){

  }
}
