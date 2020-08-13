import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormConfig } from 'src/app/config/forms-config';
import { ImagenModel } from '../../../../models/parameters/imagen.model';


declare const ShowNotificationMessage: any;

@Component({
  selector: 'app-crear-imagen',
  templateUrl: './crear-imagen.component.html',
  styleUrls: ['./crear-imagen.component.css']
})
export class CrearImagenComponent implements OnInit {

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
      text: ['', [Validators.required, Validators.minLength(this.minLengthCode) , Validators.maxLength(100)]],
      ruta: ['', [Validators.required]],
      titulo: ['', [Validators.required , Validators.minLength(this.minLengthCode)]],

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
  getRecordData(): ImagenModel {
    let model = new ImagenModel();
    model.descripcion = this.fgv.text.value;
    model.id_imagen = this.fgv.ruta.value;
    model.titulo=this.fgv.titulo.value;

    return model;
  }

  get fgv() {
    return this.fgValidator.controls;
  }

}
