import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear-publicacion',
  templateUrl: './crear-publicacion.component.html',
  styleUrls: ['./crear-publicacion.component.css']
})
export class CrearPublicacionComponent implements OnInit {

  fgValidator: FormGroup; 

  constructor(
    private fb : FormBuilder
  ) { }

  ngOnInit(): void {
    this.formBuilding();
  }

  formBuilding() {
    this.fgValidator = this.fb.group({
      texto: ['', [Validators.required, Validators.minLength(2)]]
    });
  }

  crear(){
    if(this.fgValidator.invalid){
      alert('Invalid Form...');
    }else{
      alert('To Register');
    }
  }

}
