import { Observable } from 'rxjs';
import { Enseignant } from './../../model/enseignant/enseignant.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnseignantService {

  addEnseignantURL : string;
  getEnseignantURL : string;
  updateEnseignantUrl : string;
  deleteEnseignantUrl : string;

  constructor(private http : HttpClient) {
    this.addEnseignantURL = 'http://localhost:8080/Enseignant/addEnseignant';
    this.getEnseignantURL = 'http://localhost:8080/Enseignant/getAll';
    this.updateEnseignantUrl = 'http://localhost:8080/Enseignant/updateEnseignant';
    this.deleteEnseignantUrl = 'http://localhost:8080/Enseignant/deleteEnseignantById';

  }
  addEnseignant(Enseignant : Enseignant): Observable<Enseignant> {
     return this.http.post<Enseignant>(this.addEnseignantURL,Enseignant);
   }

   getAllEnseignant(): Observable<Enseignant[]>{
     return this.http.get<Enseignant[]>(this.getEnseignantURL);
   }

   updateEnseignant(Enseignant :Enseignant) : Observable<Enseignant>{
     return this.http.put<Enseignant>(this.updateEnseignantUrl, Enseignant);
   }

   deleteEnseignant(Enseignant : Enseignant) : Observable<Enseignant> {
     return this.http.delete<Enseignant>(this.deleteEnseignantUrl+'/'+Enseignant.id);
   }

}

