import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { UserModel } from '../models/user.model';
const url_base: string = 'http://localhost:3000/'


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  loginUser(nombreUsuario: string, clave: string): Observable<any> {

    try {
      return this.http.post<UserModel>(`${url_base}login-usuario`,
        {
          nombre_usuario:nombreUsuario,
          clave:clave
        },
        {
          headers: new HttpHeaders({
            "content-type": "application/json"
          })
        }).pipe(
          retry(0),
          catchError((err) => {
            console.log("error desde el servicio")
            return throwError("Error");
          })
        );
    } catch (error) {

    }
  }

  crearUsuario(user:UserModel): Observable<UserModel> {
    return this.http.post<UserModel>(`${url_base}Users`,user,{
      headers:new HttpHeaders({
        "content-type":"application/json"
      })
    });
  }

  
  //Guarda los datos
  guardarToken(token) {
    localStorage.setItem("token", token);
  }

  guardarRol(rol) {
    localStorage.setItem("rol", rol);
  }

  guardarUserId(id) {
    localStorage.setItem("id", id);
  }

  guardarInformacionUser(user: UserModel): void {
    localStorage.setItem("userInfo", JSON.stringify(user));
  }


  //Recupera los datos

  getToken() {
    return localStorage.getItem("token");
  }

  getRol() {
    return localStorage.getItem("rol");
  }

  getUserId() {
    return localStorage.getItem("id");
  }

  getInformacionUser() {
    let userInfo = (JSON.stringify(localStorage.getItem("userInfo")));
    if (userInfo=="null") 
    {
      return null;
    }
    return userInfo;
  }

  //Restaura los datos
  logOutUser() {
    localStorage.removeItem("token");
    localStorage.removeItem("rol");
    localStorage.removeItem("id");
    localStorage.removeItem("userInfo");
  }

  getUsuarios(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(`${url_base}usuarios`);
  }
  

}

