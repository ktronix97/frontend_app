import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PublicacionModel } from '../../models/parameters/publicacion.model';
import { UserService } from '../users.service';
const url_base: string = 'http://localhost:3000/'

@Injectable({
  providedIn: 'root'
})
export class MuroService {


  token:string;
  constructor(private http:HttpClient,private service:UserService) {

    this.token=this.service.getToken();
   }

  getPublicacion(_id:String): Observable<PublicacionModel> {
    return this.http.get<PublicacionModel>(`${url_base}publicaciones/${_id}`);
  }

  getPublicaciones(): Observable<PublicacionModel[]> {
    return this.http.get<PublicacionModel[]>(`${url_base}publicaciones`);
  }

  getPublicacionesNumericamente(limiteInicial:number): Observable<PublicacionModel[]> {
    return this.http.get<PublicacionModel[]>(`${url_base}publicaciones?filter[limit]=10&filter[skip]=${limiteInicial}`);
  }



  crearPublicacion(publicacion: PublicacionModel): Observable<PublicacionModel> {
    return this.http.post<PublicacionModel>(`${url_base}publicaciones?access_token=${this.token}`, publicacion, {
      headers: new HttpHeaders({
        "content-type": "application/json"
      })
    });
  }


}
