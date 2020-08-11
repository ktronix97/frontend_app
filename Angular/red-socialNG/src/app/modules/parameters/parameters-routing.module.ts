import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './usuario/register/register.component';
import { CrearAdministradorComponent } from './administrador/crear-administrador/crear-administrador.component';
import { EditarAdministradorComponent } from './administrador/editar-administrador/editar-administrador.component';
import { ListarAdministradorComponent } from './administrador/listar-administrador/listar-administrador.component';
import { ListarComentarioComponent } from './comentario/listar-comentario/listar-comentario.component';
import { CrearComentarioComponent } from './comentario/crear-comentario/crear-comentario.component';
import { EditarComentarioComponent } from './comentario/editar-comentario/editar-comentario.component';
import { ListarDenunciaComponent } from './denuncia/listar-denuncia/listar-denuncia.component';
import { CrearDenunciaComponent } from './denuncia/crear-denuncia/crear-denuncia.component';
import { EditarDenunciaComponent } from './denuncia/editar-denuncia/editar-denuncia.component';
import { ListarImagenComponent } from './imagen/listar-imagen/listar-imagen.component';
import { CrearImagenComponent } from './imagen/crear-imagen/crear-imagen.component';
import { EditarImagenComponent } from './imagen/editar-imagen/editar-imagen.component';
import { ListarMuroComponent } from './muro/listar-muro/listar-muro.component';
import { CrearMuroComponent } from './muro/crear-muro/crear-muro.component';
import { EditarMuroComponent } from './muro/editar-muro/editar-muro.component';
import { ListarPublicacionComponent } from './publicacion/listar-publicacion/listar-publicacion.component';
import { CrearPublicacionComponent } from './publicacion/crear-publicacion/crear-publicacion.component';
import { EditarPublicacionComponent } from './publicacion/editar-publicacion/editar-publicacion.component';
import { ListarPublicidadComponent } from './publicidad/listar-publicidad/listar-publicidad.component';
import { CrearPublicidadComponent } from './publicidad/crear-publicidad/crear-publicidad.component';
import { EditarPublicidadComponent } from './publicidad/editar-publicidad/editar-publicidad.component';
import { ListarUsuarioComponent } from './usuario/listar-usuario/listar-usuario.component';
import { EditarUsuarioComponent } from './usuario/editar-usuario/editar-usuario.component';


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
    path:'usuario',
    component:ListarUsuarioComponent
  },
  {
    path:'usuario-edition/:id',
    component:EditarUsuarioComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametersRoutingModule { }
