import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormConfig } from 'src/app/config/forms-config';
import { DenunciaModel } from 'src/app/models/parameters/denuncia.model';

declare const ShowNotificationMessage: any;

@Component({
  selector: 'app-crear-denuncia',
  templateUrl: './crear-denuncia.component.html',
  styleUrls: ['./crear-denuncia.component.css']
})
export class CrearDenunciaComponent implements OnInit {

  fgValidator: FormGroup;
  minLengthName: number = FormConfig.MIN_LENGTH_NAME;
  minLengthCode: number = FormConfig.MIN_LENGTH_CODE;

  constructor( 
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.FormBuilding();
  }

  FormBuilding() {
    this.fgValidator = this.fb.group({
      archivo:['',[Validators.required]],
      contenido: ['', [Validators.required, Validators.minLength(this.minLengthCode)]],
      fecha: ['', [Validators.required]]
    });
  }

  saveNewRecord() {
    if (this.fgValidator.invalid) {
      ShowNotificationMessage('Invalid Form');
    } else {
      let model = this.getRecordData();
    }
  }

  /**
   * Build a model instance to send it
   */
  getRecordData(): DenunciaModel {
    let model = new DenunciaModel();
    model.archivo = this.fgv.archivo.value;
    model.descripcion = this.fgv.contenido.value;
    model.fecha=this.fgv.fecha.value;
    return model;
  }

  get fgv() {
    return this.fgValidator.controls;
  }

}
