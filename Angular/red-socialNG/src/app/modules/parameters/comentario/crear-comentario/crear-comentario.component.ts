import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormConfig } from 'src/app/config/forms-config';
import { ComentarioModel } from 'src/app/models/comentario.model';

declare const ShowNotificationMessage: any;

@Component({
  selector: 'app-crear-comentario',
  templateUrl: './crear-comentario.component.html',
  styleUrls: ['./crear-comentario.component.css']
})
export class CrearComentarioComponent implements OnInit {

  fgValidator: FormGroup;
  minLengthName: number = FormConfig.MIN_LENGTH_NAME;
  minLengthCode: number = FormConfig.MIN_LENGTH_CODE;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) { 
  }

  ngOnInit(): void {
    this.FormBuilding();
  }
  
  FormBuilding() {
    this.fgValidator = this.fb.group({
      text: ['', [Validators.required, Validators.minLength(this.minLengthCode) , Validators.maxLength(100)]],
      ruta: ['', [Validators.required]],
      like: ['', [Validators.required]],
      dislike: ['', [Validators.required]],
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
  getRecordData(): ComentarioModel {
    let model = new ComentarioModel();
    model.text = this.fgv.text.value;
    model.id_imagen = this.fgv.ruta.value;
    model.like=this.fgv.like.value;
    model.dislike=this.fgv.dislike.value;
    model.fecha=this.fgv.fecha.value;
    return model;
  }

  get fgv() {
    return this.fgValidator.controls;
  }


}
