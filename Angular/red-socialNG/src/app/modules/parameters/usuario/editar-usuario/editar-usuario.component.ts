import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit {

  fgValidator: FormGroup; 

  constructor(
    private fb : FormBuilder
  ) { }

  ngOnInit(): void {
    this.formBuilding();
  }

  formBuilding() {
    this.fgValidator = this.fb.group({
      primerNombre: ['', [Validators.required, Validators.minLength(2)]],
      segundoNombre: ['', [Validators.minLength(2)]],
      primerApellido: ['', [Validators.required, Validators.minLength(2)]],
      segundoApellido: ['', [Validators.minLength(2)]],
      correo: ['', [Validators.required, Validators.email]],
      nombreUsuario: ['', [Validators.required, Validators.minLength(2)]],
      contrasena: ['', [Validators.required, Validators.minLength(7)]],
      ciudad: ['', [Validators.required, Validators.minLength(2)]],
      celular: ['', [Validators.required, Validators.minLength(10)]],
      nacimiento: ['', [Validators.required, Validators.minLength(2)]],
      genero: ['', [Validators.required, Validators.minLength(2)]]
    });
  }

  adminRegister(){
    if(this.fgValidator.invalid){
      alert('Invalid Form...');
    }else{
      alert('To Register');
    }
  }

  get fgv() {
    return this.fgValidator.controls;
  }

}
