import { Groupe } from './../../model/groupe/groupe';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class GroupeService {

  addGroupeURL : string;
  getGroupeURL : string;
  updateGroupeUrl : string;
  deleteGroupeUrl : string;
  getGroupeByNameurl : string;

  constructor(private http : HttpClient) {
    this.addGroupeURL = 'http://localhost:8080/groupe/addgroupe';
    this.getGroupeURL = 'http://localhost:8080/groupe/getAll';
    this.updateGroupeUrl = 'http://localhost:8080/groupe/updateGroupe';
    this.deleteGroupeUrl = 'http://localhost:8080/groupe/deleteGroupeById';
    this.getGroupeByNameurl =  'http://localhost:8080/groupe/getGroupeByName';

  }
  addGroupe(Groupe : Groupe): Observable<Groupe> {
     return this.http.post<Groupe>(this.addGroupeURL,Groupe);
   }

   getAllGroupe(): Observable<Groupe[]>{
     return this.http.get<Groupe[]>(this.getGroupeURL);
   }

   updateGroupe(Groupe :Groupe) : Observable<Groupe>{
     return this.http.put<Groupe>(this.updateGroupeUrl, Groupe);
   }

   deleteGroupe(groupe : Groupe) : Observable<Groupe> {
     return this.http.delete<Groupe>(this.deleteGroupeUrl+'/'+groupe.id);
   }

   getGroupeByName(name: any): Observable<Groupe[]> {
    return this.http.get<Groupe[]>(this.getGroupeByNameurl+'/'+Groupe.name);
  }

}
