import { Observable } from 'rxjs';
import { Etudiant } from './../../model/etudiant/etudiant.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {
  addEtudiantURL : string;
  getEtudiantURL : string;
  updateEtudiantUrl : string;
  deleteEtudiantUrl : string;


  constructor(private http : HttpClient) {
    this.addEtudiantURL = 'http://localhost:8080/Etudiant/addEtudiant';
    this.getEtudiantURL = 'http://localhost:8080/Etudiant/getAllEtudiant';
    this.updateEtudiantUrl = 'http://localhost:8080/Etudiant/updateEtudiant';
    this.deleteEtudiantUrl = 'http://localhost:8080/Etudiant/deleteEtudiantById';

  }
  addEtudiant(Etudiant : Etudiant): Observable<Etudiant> {
     return this.http.post<Etudiant>(this.addEtudiantURL,Etudiant);
   }

   getAllEtudiant(): Observable<Etudiant[]>{
     return this.http.get<Etudiant[]>(this.getEtudiantURL);
   }

   updateEtudiant(Etudiant :Etudiant) : Observable<Etudiant>{
     return this.http.put<Etudiant>(this.updateEtudiantUrl, Etudiant);
   }

   deleteEtudiant(Etudiant : Etudiant) : Observable<Etudiant> {
     return this.http.delete<Etudiant>(this.deleteEtudiantUrl+'/'+Etudiant.id);
   }



}

