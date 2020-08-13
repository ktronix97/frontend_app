import { Component, OnInit } from '@angular/core';
import { UserService } from './services/users.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  rol = '0';

  constructor(private servicio: UserService) { }

  ngOnInit() {
    if(this.servicio.getRol())
    {
      this.rol=this.servicio.getRol()
    }
    else{
      this.rol="-1"
    }

  }

}