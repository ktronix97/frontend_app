import { Component, OnInit } from '@angular/core';
import { MuroModel } from '../../../../models/parameters/muro.model';
import { PublicacionModel } from '../../../../models/parameters/publicacion.model';
import { servicesVersion } from 'typescript';
import { MuroService } from '../../../../services/parameters/muro.service';

@Component({
  selector: 'app-listar-muro',
  templateUrl: './listar-muro.component.html',
  styleUrls: ['./listar-muro.component.css']
})
export class ListarMuroComponent implements OnInit {

  listaPublicaciones: PublicacionModel[] = [];
  numArticulos: number = 0
  numTotalPublicaciones: number=0

  constructor(private servicioMuro:MuroService) { }

  ngOnInit() {
    this.getPublicaciones();
  }

  //Se llama el servicio el cual trae los articulos
  getPublicaciones(): void {
      this.servicioMuro.getPublicacionesNumericamente(this.numArticulos).subscribe(
      publicaciones =>{this.listaPublicaciones=this.listaPublicaciones.concat(publicaciones)}); 
      this.numArticulos=this.numArticulos+10
  }

  actualizaPublicaciones(): void {
    this.getPublicaciones()
    }

  enviaReaccionLike(id_publicacion:String): void {
      alert("Se ha enviado un like a "+id_publicacion)
      //Agrega funcion envio like

  }

  enviaReaccionDislike(id_publicacion:String): void {
      alert("Se ha enviado un dislike a "+id_publicacion)
      //Agrega funcion envio dislike
  }

  actualizaNumeroDePublicaciones():void{
    this.numTotalPublicaciones=0
  }


}



