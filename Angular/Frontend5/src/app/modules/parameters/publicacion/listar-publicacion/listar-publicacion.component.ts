import { Component, OnInit } from '@angular/core';
import { PublicacionModel } from '../../../../models/parameters/publicacion.model';
import { FormConfig } from 'src/app/config/forms-config';
import { NgxSpinnerService } from "ngx-spinner";
import { ActivatedRoute, Router } from '@angular/router';
import { MuroService } from '../../../../services/parameters/muro.service';

declare const ShowNotificationMessage: any;
declare const ShowRemoveConfirmationModal: any;
declare const closeModal: any;


@Component({
  selector: 'app-listar-publicacion',
  templateUrl: './listar-publicacion.component.html',
  styleUrls: ['./listar-publicacion.component.css']
})
export class ListarPublicacionComponent implements OnInit {

  publicacion: PublicacionModel = null;

  constructor( private servicioMuro:MuroService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.muestraPublicacion();
  }

     
  muestraPublicacion(){
    const id = this.route.snapshot.paramMap.get('id_publicacion');
    this.servicioMuro.getPublicacion(id).subscribe(
      publicaciones =>{this.publicacion=publicaciones}); 
  }



}

