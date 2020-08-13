import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar-administrador',
  templateUrl: './editar-administrador.component.html',
  styleUrls: ['./editar-administrador.component.css']
})
export class EditarAdministradorComponent implements OnInit {

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
      cargo: ['', [Validators.required, Validators.minLength(2)]],
      empresa: ['', [Validators.required, Validators.minLength(2)]],
      contrasena: ['', [Validators.required, Validators.minLength(7)]],
      celular: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  editAdmin(){
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
