import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

  tipoUsuario:String="-1"

  constructor(private servicio: UserService,private router: Router) { }

  ngOnInit(): void {
    if(this.servicio.getRol()){
      this.tipoUsuario=this.servicio.getRol()
      
    }
    else{
      this.tipoUsuario="-1"

    }
    
  }

  cerrarSesion():void{
    alert("bye bye")
    this.servicio.logOutUser();
    this.router.navigate(["/home"]);
  }
}
