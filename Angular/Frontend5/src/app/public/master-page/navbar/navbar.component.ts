import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/users.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  tipoUsuario:String="-1"
  nombreUsuario:String="Usuario"
  urlFotoUsuario:String="☺"

  constructor(private servicio: UserService) { }

  ngOnInit(): void {
    if(this.servicio.getRol()){
      this.tipoUsuario=this.servicio.getRol()
      
    }
    else{
      this.tipoUsuario="-1"

    }
    
  }



}
