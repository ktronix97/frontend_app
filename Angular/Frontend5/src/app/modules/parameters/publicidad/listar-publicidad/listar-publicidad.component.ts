import { Component, OnInit } from '@angular/core';
import { PublicidadModel } from 'src/app/models/parameters/publicidad.model';
import { FormConfig } from 'src/app/config/forms-config';
import { NgxSpinnerService } from "ngx-spinner";
import { PublicacionModel } from 'src/app/models/parameters/publicacion.model';
import { MuroService } from 'src/app/services/parameters/muro.service';

declare const ShowNotificationMessage: any;
declare const ShowRemoveConfirmationModal: any;
declare const closeModal: any;

@Component({
  selector: 'app-listar-publicidad',
  templateUrl: './listar-publicidad.component.html',
  styleUrls: ['./listar-publicidad.component.css']
})
export class ListarPublicidadComponent implements OnInit {

  listaPublicaciones: PublicacionModel[] = [];

  constructor(private servicioMuro:MuroService) { }

  ngOnInit(): void {
    this.getPublicaciones()
  }

  getPublicaciones(): void {
    this.servicioMuro.getPublicaciones().subscribe(
    publicaciones =>{
      this.listaPublicaciones=publicaciones
      }); 

}


}
