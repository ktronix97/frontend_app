/*¨import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PublicacionModel } from '../../models/publicacion.model'
import { Observable } from 'rxjs';
import { ServiceConfig } from '../../config/service.config';

@Injectable({
  providedIn: 'root'
})
export class PublicacionService {

  entity: String = 'publicacion';
  token: String;

  constructor(private http: HttpClient, private securityService: SecurityService) {
    this.token = this.securityService
  }

  getAllRecords(): Observable<PublicacionModel[]> {
    return this.http.get<PublicacionModel[]>(`${ServiceConfig.BASE_URL}${this.entity}`);
  }

  saveNewRecord(record: PublicacionModel): Observable<PublicacionModel> {
    return this.http.post<PublicacionModel>(`${ServiceConfig.BASE_URL}${this.entity}`, record, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.token}`
      })
    })
  }
}
*/