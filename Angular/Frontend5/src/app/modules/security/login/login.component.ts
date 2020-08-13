import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserModel } from '../../../models/User.model';
import { Router } from '@angular/router';
import { UserService } from '../../../services/users.service';

declare const ShowNotificationMessage: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  fgValidator: FormGroup;
  usuario: string = "";
  password: string = "";


  constructor(private servicio: UserService, private router: Router, private fb: FormBuilder) { }

  ngOnInit() {
  }




  userLogin(): void {
    this.servicio.loginUser(this.usuario,this.password).subscribe(item => {

        this.servicio.guardarToken(item.token);
        this.servicio.guardarUserId(item.data.id_usuario);
        this.servicio.guardarRol(item.data.rol);
        this.servicio.guardarInformacionUser(item.data);

        if (this.servicio.getRol() == "0") {
          alert("Bienvenido de nuevo, usuario")
          this.router.navigate(["/home"]);
        }
        else if (this.servicio.getRol() == "1") {
          this.router.navigate(["/home"]);
        }

    }, (err) => {
      alert("El usuario o la contraseña son incorrectos")
    });
  }


}