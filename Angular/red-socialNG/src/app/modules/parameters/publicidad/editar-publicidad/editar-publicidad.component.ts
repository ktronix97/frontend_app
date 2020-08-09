import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router , ActivatedRoute  } from '@angular/router';
import { FormConfig } from 'src/app/config/forms-config';
import { PublicidadModel } from 'src/app/models/publicidad.model';

declare const ShowNotificationMessage: any;

@Component({
  selector: 'app-editar-publicidad',
  templateUrl: './editar-publicidad.component.html',
  styleUrls: ['./editar-publicidad.component.css']
})
export class EditarPublicidadComponent implements OnInit {

  fgValidator: FormGroup;
  minLengthName: number = FormConfig.MIN_LENGTH_NAME;
  minLengthCode: number = FormConfig.MIN_LENGTH_CODE;
  recordId: String = '';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) { 
    this.recordId = this.route.snapshot.params["id"];
  }

  ngOnInit(): void {
    this.FormBuilding();
    this.getRecordById();
  }

  getRecordById() {
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
      ShowNotificationMessage('Editado con exito');
    }
  }

  editRecord() {
    
  }

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
