import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear-muro',
  templateUrl: './crear-muro.component.html',
  styleUrls: ['./crear-muro.component.css']
})
export class CrearMuroComponent implements OnInit {

  fgValidator: FormGroup; 

  constructor(
    private fb : FormBuilder
  ) { }

  ngOnInit(): void {
    this.formBuilding();
  }

  formBuilding() {
    this.fgValidator = this.fb.group({
      id_muro: ['', [Validators.required]],
      id_usuario: ['', [Validators.required]]
    });
  }

  crear(){
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
