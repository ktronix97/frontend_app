import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserModel } from '../../../models/User.model';
import MD5 from 'crypto-js/md5';

declare const ShowNotificationMessage:any ;

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
      ShowNotificationMessage('invalid User');
    }else{
      let model=this.getLoginData();
      console.log(model);
      alert('Welcome');
    }
  }
   /** 
    * Build a model instance to send it 
    * 
    * 
    *  */
  getLoginData():UserModel{
      let model=new UserModel();
      model.correo=this.fvg.email.value;
      model.contraseña=MD5(this.fvg.password.value).toString();
      return model;     
  }
 
 
  get fvg(){
    return this.fgValidator.controls;
  }

}