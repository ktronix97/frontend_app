import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router , ActivatedRoute  } from '@angular/router';
import { FormConfig } from 'src/app/config/forms-config';
import { ComentarioModel } from 'src/app/models/parameters/comentario.model';

declare const ShowNotificationMessage: any;

@Component({
  selector: 'app-editar-comentario',
  templateUrl: './editar-comentario.component.html',
  styleUrls: ['./editar-comentario.component.css']
})
export class EditarComentarioComponent implements OnInit {

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
      ShowNotificationMessage('Editado con exito');
    }
  }

  editRecord() {
    
  }

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
