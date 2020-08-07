import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParametersRoutingModule } from './parameters-routing.module';
import { CrearComentarioComponent } from './comentario/crear-comentario/crear-comentario.component';
import { EditarComentarioComponent } from './comentario/editar-comentario/editar-comentario.component';
import { ListarComentarioComponent } from './comentario/listar-comentario/listar-comentario.component';
import { EliminarComentarioComponent } from './comentario/eliminar-comentario/eliminar-comentario.component';
import { CrearAdministradorComponent } from './administrador/crear-administrador/crear-administrador.component';
import { EditarAdministradorComponent } from './administrador/editar-administrador/editar-administrador.component';
import { EliminarAdministradorComponent } from './administrador/eliminar-administrador/eliminar-administrador.component';
import { ListarAdministradorComponent } from './administrador/listar-administrador/listar-administrador.component';
import { CrearDenunciaComponent } from './denuncia/crear-denuncia/crear-denuncia.component';
import { EditarDenunciaComponent } from './denuncia/editar-denuncia/editar-denuncia.component';
import { EliminarDenunciaComponent } from './denuncia/eliminar-denuncia/eliminar-denuncia.component';
import { ListarDenunciaComponent } from './denuncia/listar-denuncia/listar-denuncia.component';
import { CrearImagenComponent } from './imagen/crear-imagen/crear-imagen.component';
import { EditarImagenComponent } from './imagen/editar-imagen/editar-imagen.component';
import { EliminarImagenComponent } from './imagen/eliminar-imagen/eliminar-imagen.component';
import { ListarImagenComponent } from './imagen/listar-imagen/listar-imagen.component';
import { CrearMuroComponent } from './muro/crear-muro/crear-muro.component';
import { EditarMuroComponent } from './muro/editar-muro/editar-muro.component';
import { EliminarMuroComponent } from './muro/eliminar-muro/eliminar-muro.component';
import { ListarMuroComponent } from './muro/listar-muro/listar-muro.component';
import { CrearPublicacionComponent } from './publicacion/crear-publicacion/crear-publicacion.component';
import { EditarPublicacionComponent } from './publicacion/editar-publicacion/editar-publicacion.component';
import { EliminarPublicacionComponent } from './publicacion/eliminar-publicacion/eliminar-publicacion.component';
import { ListarPublicacionComponent } from './publicacion/listar-publicacion/listar-publicacion.component';
import { CrearPublicidadComponent } from './publicidad/crear-publicidad/crear-publicidad.component';
import { EditarPublicidadComponent } from './publicidad/editar-publicidad/editar-publicidad.component';
import { EliminarPublicidadComponent } from './publicidad/eliminar-publicidad/eliminar-publicidad.component';
import { ListarPublicidadComponent } from './publicidad/listar-publicidad/listar-publicidad.component';
import { CrearUsuarioComponent } from './usuario/crear-usuario/crear-usuario.component';
import { EditarUsuarioComponent } from './usuario/editar-usuario/editar-usuario.component';
import { EliminarUsuarioComponent } from './usuario/eliminar-usuario/eliminar-usuario.component';
import { ListarUsuarioComponent } from './usuario/listar-usuario/listar-usuario.component';
import { RegisterComponent } from './usuario/register/register.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { NgxSpinnerModule } from "ngx-spinner";


@NgModule({
  declarations: [CrearComentarioComponent, EditarComentarioComponent, ListarComentarioComponent, EliminarComentarioComponent, CrearAdministradorComponent, EditarAdministradorComponent, EliminarAdministradorComponent, ListarAdministradorComponent, CrearDenunciaComponent, EditarDenunciaComponent, EliminarDenunciaComponent, ListarDenunciaComponent, CrearImagenComponent, EditarImagenComponent, EliminarImagenComponent, ListarImagenComponent, CrearMuroComponent, EditarMuroComponent, EliminarMuroComponent, ListarMuroComponent, CrearPublicacionComponent, EditarPublicacionComponent, EliminarPublicacionComponent, ListarPublicacionComponent, CrearPublicidadComponent, EditarPublicidadComponent, EliminarPublicidadComponent, ListarPublicidadComponent, CrearUsuarioComponent, EditarUsuarioComponent, EliminarUsuarioComponent, ListarUsuarioComponent, RegisterComponent],
  imports: [
    CommonModule,
    ParametersRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    NgxSpinnerModule
  ]
})
export class ParametersModule { }
