import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormConfig } from 'src/app/config/forms-config';
import { PublicidadModel } from 'src/app/models/parameters/publicidad.model';

declare const ShowNotificationMessage: any;

@Component({
  selector: 'app-crear-publicidad',
  templateUrl: './crear-publicidad.component.html',
  styleUrls: ['./crear-publicidad.component.css']
})
export class CrearPublicidadComponent implements OnInit {

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
      contenido: ['', [Validators.required, Validators.minLength(this.minLengthCode)]],
      id_admin: ['', [Validators.required, Validators.minLength(this.minLengthName)]],
      id_muro: ['', [Validators.required, Validators.minLength(this.minLengthName)]],
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
  getRecordData(): PublicidadModel {
    let model = new PublicidadModel();
    model.contenido = this.fgv.contenido.value;
    model.id_admin = this.fgv.id_admin.value;
    model.id_muro=this.fgv.id_muro.value;
    model.fecha=this.fgv.fecha.value;
    return model;
  }

  get fgv() {
    return this.fgValidator.controls;
  }

}
