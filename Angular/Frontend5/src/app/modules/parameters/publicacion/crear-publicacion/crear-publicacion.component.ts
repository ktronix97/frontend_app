import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PublicacionModel } from 'src/app/models/parameters/publicacion.model';
import { MuroService } from 'src/app/services/parameters/muro.service';
import { UserService } from 'src/app/services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-publicacion',
  templateUrl: './crear-publicacion.component.html',
  styleUrls: ['./crear-publicacion.component.css']
})
export class CrearPublicacionComponent implements OnInit {

  fgValidator: FormGroup;

  texto: String;
  urlImagen: String;

  constructor(
    private fb: FormBuilder,
    private servicioMuro:MuroService,
    private servicioUsuario:UserService,
    private router:Router

  ) { }

  ngOnInit(): void {
    this.formBuilding();
  }

  formBuilding() {
    this.fgValidator = this.fb.group({
      texto: ['', [Validators.required, Validators.minLength(2)]]
    });
  }

  crearPublicacion() {

    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date + ' ' + time;

    let idUsuario=this.servicioUsuario.getUserId()

    let publicacion: PublicacionModel = {
      usuarioId: idUsuario,
      texto: this.texto,
      urlImagen:this.urlImagen,
      fecha: dateTime,
      compartido: 0,
      muroId: "",
      
    }


    this.servicioMuro.crearPublicacion(publicacion).subscribe(() => {
      alert("Se ha creado una nueva publicacion")    
    });



  }

}
