import { Etudiant } from './../../model/etudiant/etudiant.model';
import { Administrative } from './../../model/reclamations/administrative.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class AdministrativeService {

  addAdministrativeURL : string;
  getAdministrativeURL : string;
  updateAdministrativeUrl : string;
  deleteAdministrativeUrl : string;
  getAdministrativeByNameurl : string;
  traiterAdministrativeUrl : string;
  getAdministrativeByEtudiantIdUrl :  String;
  getAdministrativeByIdUrl :  String;

  constructor(private http : HttpClient) {
    this.addAdministrativeURL = 'http://localhost:8080/Administrative/addAdministrative';
    this.getAdministrativeURL = 'http://localhost:8080/Administrative/getAll';
    this.updateAdministrativeUrl = 'http://localhost:8080/Administrative/updateAdministrative';
    this.deleteAdministrativeUrl = 'http://localhost:8080/Administrative/deleteAdministrativeById';
    this.getAdministrativeByNameurl =  'http://localhost:8080/Administrative/getAdministrativeByName';
    this.traiterAdministrativeUrl =  'http://localhost:8080/Administrative/traiterAdministrative';
    this.getAdministrativeByEtudiantIdUrl =  'http://localhost:8080/Administrative/getAdministrativeByEtudiantId';
    this.getAdministrativeByIdUrl =  'http://localhost:8080/Administrative/getAdministrativeById';

  }

  addAdministrative(administrative : Administrative): Observable<Administrative> {
     return this.http.post<Administrative>(this.addAdministrativeURL,administrative);
   }

   getAllAdministrative(): Observable<Administrative[]>{
     return this.http.get<Administrative[]>(this.getAdministrativeURL);
   }

   updateAdministrative(administrative :Administrative) : Observable<Administrative>{
     return this.http.put<Administrative>(this.updateAdministrativeUrl, administrative);
   }

   deleteAdministrative(administrative : Administrative) : Observable<Administrative> {
     return this.http.delete<Administrative>(this.deleteAdministrativeUrl+'/'+administrative.id);
   }

  getAdministrativeByEtudiantId(etudiant : Etudiant): Observable<Administrative[]> {
    return this.http.get<Administrative[]>(this.getAdministrativeByEtudiantIdUrl+'/'+etudiant);
  }
  traiterAdministrative(administrative :Administrative) : Observable<Administrative[]>{
    return this.http.put<Administrative[]>(this.traiterAdministrativeUrl, administrative);
  }
  getAdministrativeById(id :any): Observable<Administrative[]> {
    return this.http.get<Administrative[]>(this.getAdministrativeByIdUrl+'/'+id);
  }



}
