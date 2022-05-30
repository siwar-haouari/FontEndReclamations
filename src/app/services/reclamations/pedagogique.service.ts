import { Enseignant } from './../../model/enseignant/enseignant.model';
import { Etudiant } from './../../model/etudiant/etudiant.model';
import { Observable } from 'rxjs';
import { Pedagogique } from './../../model/reclamations/pedagogique.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PedagogiqueService {
  addPedagogiqueURL : string;
  getPedagogiqueURL : string;
  updatePedagogiqueUrl : string;
  deletePedagogiqueUrl : string;
  etatPedagogiqueUrl : string;
  getPedagogiqueByEtudiantIdUrl :  String;
  getPedagogiqueByEnseignantIdUrl :  String;
  traiterPedagogiqueUrl : string;


  constructor(private http : HttpClient) {

    this.addPedagogiqueURL = 'http://localhost:8080/Pedagogique/addPedagogique';
    this.getPedagogiqueURL = 'http://localhost:8080/Pedagogique/getAll';
    this.updatePedagogiqueUrl = 'http://localhost:8080/Pedagogique/updatePedagogique';
    this.deletePedagogiqueUrl = 'http://localhost:8080/Pedagogique/deletePedagogiqueById';
    this.etatPedagogiqueUrl = 'http://localhost:8080/Pedagogique/getPedagogiqueByEtat';
    this.getPedagogiqueByEtudiantIdUrl =  'http://localhost:8080/Pedagogique/getPedagogiqueByEtudiantId';
    this.getPedagogiqueByEnseignantIdUrl =  'http://localhost:8080/Pedagogique/getPedagogiqueByEnseignantId';
    this.traiterPedagogiqueUrl =  'http://localhost:8080/Pedagogique/traiterPedagogique';


  }
  addPedagogique(Pedagogique : Pedagogique): Observable<Pedagogique> {
    return this.http.post<Pedagogique>(this.addPedagogiqueURL,Pedagogique);
  }

  getAllPedagogique(): Observable<Pedagogique[]>{
    return this.http.get<Pedagogique[]>(this.getPedagogiqueURL);
  }

  updatePedagogique(Pedagogique :Pedagogique) : Observable<Pedagogique>{
    return this.http.put<Pedagogique>(this.updatePedagogiqueUrl, Pedagogique);
  }

  deletePedagogique(Pedagogique : Pedagogique) : Observable<Pedagogique> {
    return this.http.delete<Pedagogique>(this.deletePedagogiqueUrl+'/'+Pedagogique.id);
  }

  getPedagogiqueByEtat(): Observable<Pedagogique[]>{
    return this.http.get<Pedagogique[]>(this.getPedagogiqueURL);
  }

  getPedagogiqueByEtudiantId(etudiant : Etudiant): Observable<Pedagogique[]> {
    return this.http.get<Pedagogique[]>(this.getPedagogiqueByEtudiantIdUrl+'/'+etudiant);
  }

  getPedagogiqueByEnseignantId(enseignant : Enseignant): Observable<Pedagogique[]> {
    return this.http.get<Pedagogique[]>(this.getPedagogiqueByEnseignantIdUrl+'/'+enseignant);
  }
  traiterPedagogique(Pedagogique :Pedagogique) : Observable<Pedagogique[]>{
    return this.http.put<Pedagogique[]>(this.traiterPedagogiqueUrl, Pedagogique);
  }


}



