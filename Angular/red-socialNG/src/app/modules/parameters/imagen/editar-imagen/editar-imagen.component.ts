import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router , ActivatedRoute  } from '@angular/router';
import { FormConfig } from 'src/app/config/forms-config';
import { ImagenModel } from 'src/app/models/parameters/imagen.model';

declare const ShowNotificationMessage: any;

@Component({
  selector: 'app-editar-imagen',
  templateUrl: './editar-imagen.component.html',
  styleUrls: ['./editar-imagen.component.css']
})
export class EditarImagenComponent implements OnInit {

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
  }

  getRecordById() {
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
      ShowNotificationMessage('Editado con exito');
    }
  }

  editRecord() {
    
  }

  get fgv() {
    return this.fgValidator.controls;
  }

}
