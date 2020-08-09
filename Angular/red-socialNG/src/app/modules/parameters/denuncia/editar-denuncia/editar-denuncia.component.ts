import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { FormConfig  } from 'src/app/config/forms-config';
import { DenunciaModel } from 'src/app/models/denuncia.model';

declare const ShowNotificationMessage: any;

@Component({
  selector: 'app-editar-denuncia',
  templateUrl: './editar-denuncia.component.html',
  styleUrls: ['./editar-denuncia.component.css']
})
export class EditarDenunciaComponent implements OnInit {

  fgValidator: FormGroup;
  minLengthName: number = FormConfig.MIN_LENGTH_NAME;
  minLengthCode: number = FormConfig.MIN_LENGTH_CODE;
  recordId: String = '';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    
    this.FormBuilding();
    this.getRecordById();
  }

  getRecordById() {
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

  FormBuilding() {
    this.fgValidator = this.fb.group({
      archivo:['',[Validators.required]],
      contenido: ['', [Validators.required, Validators.minLength(this.minLengthCode)]],
      fecha: ['', [Validators.required]]
    });
  }

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
