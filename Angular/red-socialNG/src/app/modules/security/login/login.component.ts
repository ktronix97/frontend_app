import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  fgValidator: FormGroup; 

  constructor(
    private fb : FormBuilder
  ) { }

  ngOnInit(): void {
    this.formBuilding();
  }

  formBuilding() {
    this.fgValidator = this.fb.group({
     
      email: ['', [Validators.required, Validators.email]],
      password:['', [Validators.required]]
    });
  }

  userLogin(){
    if(this.fgValidator.invalid){
      alert('Invalid User...');
    }else{
      alert('Welcome');
    }
  }

  get fvg(){
    return this.fgValidator.controls;
  }

}