import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './usuario/register/register.component';
import { CrearAdministradorComponent } from './administrador/crear-administrador/crear-administrador.component';
import { EditarAdministradorComponent } from './administrador/editar-administrador/editar-administrador.component';
import { EliminarAdministradorComponent } from './administrador/eliminar-administrador/eliminar-administrador.component';
import { ListarAdministradorComponent } from './administrador/listar-administrador/listar-administrador.component';
import { ListarComentarioComponent } from './comentario/listar-comentario/listar-comentario.component';
import { CrearComentarioComponent } from './comentario/crear-comentario/crear-comentario.component';
import { EditarComentarioComponent } from './comentario/editar-comentario/editar-comentario.component';
import { EliminarComentarioComponent } from './comentario/eliminar-comentario/eliminar-comentario.component';
import { ListarDenunciaComponent } from './denuncia/listar-denuncia/listar-denuncia.component';
import { CrearDenunciaComponent } from './denuncia/crear-denuncia/crear-denuncia.component';
import { EditarDenunciaComponent } from './denuncia/editar-denuncia/editar-denuncia.component';
import { EliminarDenunciaComponent } from './denuncia/eliminar-denuncia/eliminar-denuncia.component';
import { ListarImagenComponent } from './imagen/listar-imagen/listar-imagen.component';
import { CrearImagenComponent } from './imagen/crear-imagen/crear-imagen.component';
import { EditarImagenComponent } from './imagen/editar-imagen/editar-imagen.component';
import { EliminarImagenComponent } from './imagen/eliminar-imagen/eliminar-imagen.component';
import { ListarMuroComponent } from './muro/listar-muro/listar-muro.component';
import { CrearMuroComponent } from './muro/crear-muro/crear-muro.component';
import { EditarMuroComponent } from './muro/editar-muro/editar-muro.component';
import { EliminarMuroComponent } from './muro/eliminar-muro/eliminar-muro.component';
import { ListarPublicacionComponent } from './publicacion/listar-publicacion/listar-publicacion.component';
import { CrearPublicacionComponent } from './publicacion/crear-publicacion/crear-publicacion.component';
import { EditarPublicacionComponent } from './publicacion/editar-publicacion/editar-publicacion.component';
import { EliminarPublicacionComponent } from './publicacion/eliminar-publicacion/eliminar-publicacion.component';
import { ListarPublicidadComponent } from './publicidad/listar-publicidad/listar-publicidad.component';
import { CrearPublicidadComponent } from './publicidad/crear-publicidad/crear-publicidad.component';
import { EditarPublicidadComponent } from './publicidad/editar-publicidad/editar-publicidad.component';
import { EliminarPublicidadComponent } from './publicidad/eliminar-publicidad/eliminar-publicidad.component';
import { ListarUsuarioComponent } from './usuario/listar-usuario/listar-usuario.component';
import { CrearUsuarioComponent } from './usuario/crear-usuario/crear-usuario.component';
import { EditarUsuarioComponent } from './usuario/editar-usuario/editar-usuario.component';
import { EliminarUsuarioComponent } from './usuario/eliminar-usuario/eliminar-usuario.component';

const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'administrador-creation',
    component: CrearAdministradorComponent
  },
  {
    path:'administrador-edition',
    component:EditarAdministradorComponent
  },
  {
    path:'administrador-remove',
    component:EliminarAdministradorComponent
  },
  {
    path:'administrador',
    component:ListarAdministradorComponent
  },
  {
    path:'comentario',
    component:ListarComentarioComponent
  },
  {
    path:'comentario-creation',
    component:CrearComentarioComponent
  },
  {
    path:'comentario-edition',
    component:EditarComentarioComponent
  },
  {
    path:'comentario-remove',
    component:EliminarComentarioComponent
  },
  {
    path:'denuncia',
    component:ListarDenunciaComponent
  },
  {
    path:'denuncia-creation',
    component:CrearDenunciaComponent
  },
  {
    path:'denuncia-edition',
    component:EditarDenunciaComponent
  },
  {
    path:'denuncia-remove',
    component:EliminarDenunciaComponent
  },
  {
    path:'imagen',
    component:ListarImagenComponent
  },
  {
    path:'imagen-creation',
    component:CrearImagenComponent
  },
  {
    path:'imagen-edition',
    component:EditarImagenComponent
  },
  {
    path:'imagen-remove',
    component:EliminarImagenComponent
  },
  {
    path:'muro',
    component:ListarMuroComponent
  },
  {
    path:'muro-creation',
    component:CrearMuroComponent
  },
  {
    path:'muro-edition/:id_muro',
    component:EditarMuroComponent
  },
  {
    path:'muro-remove',
    component:EliminarMuroComponent
  },
  {
    path:'publicacion',
    component:ListarPublicacionComponent
  },
  {
    path:'publicacion-creation',
    component:CrearPublicacionComponent
  },
  {
    path:'publicacion-edition/:id_publicacion',
    component:EditarPublicacionComponent
  },
  {
    path:'publicacion-remove',
    component:EliminarPublicacionComponent
  },
  {
    path:'publicidad',
    component:ListarPublicidadComponent
  },
  {
    path:'publicidad-creation',
    component:CrearPublicidadComponent
  },
  {
    path:'publicidad-edition',
    component:EditarPublicidadComponent
  },
  {
    path:'publicidad-remove',
    component:EliminarPublicidadComponent
  },
  {
    path:'usuario',
    component:ListarUsuarioComponent
  },
  {
    path:'usuario-creation',
    component:CrearUsuarioComponent
  },
  {
    path:'usuario-edition/:id',
    component:EditarUsuarioComponent
  },
  {
    path:'usuario-remove',
    component:EliminarUsuarioComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametersRoutingModule { }
