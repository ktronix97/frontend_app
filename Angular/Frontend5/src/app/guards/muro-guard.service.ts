import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MuroGuardService implements CanActivate {


  constructor(private router:Router) { }

  canActivate()
  {
    var autor:String="Autor"
    if(autor=="autor")
    {
      return true;
    }
    else
    {
      if(autor=="editor")
      {
        this.router.navigate(["/editor"]);
      }
      else
      {
        this.router.navigate(["/evaluador"]);
      }
    }
  }
}
