import { AuthService } from 'src/app/_services/auth.service';
import { TokenStorageService } from './../../../_services/token-storage.service';
import { EtudiantService } from './../../../service/etudiant/etudiant.service';
import { Etudiant } from './../../../model/etudiant/etudiant.model';
import { EnseignantService } from './../../../service/enseignant/enseignant.service';
import { Enseignant } from './../../../model/enseignant/enseignant.model';
import { Pedagogique } from './../../../model/reclamations/pedagogique.model';
import { AdministrativeService } from './../../../services/reclamations/administrative.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Administrative } from './../../../model/reclamations/administrative.model';
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { PedagogiqueService } from 'src/app/services/reclamations/pedagogique.service';
@Component({
  selector: 'app-liste-reclamation-pedagogique-e',
  templateUrl: './liste-reclamation-pedagogique-e.component.html',
  styleUrls: ['./liste-reclamation-pedagogique-e.component.css']
})
export class ListeReclamationPedagogiqueEComponent implements OnInit {

  //pedagogique
  PedagogiqueDetail !: FormGroup;
  PedagogiqueObj : Pedagogique = new Pedagogique();
  PedagogiqueList : Pedagogique[] = [];

    //enseignant
    EnseignantDetail !: FormGroup;
    EnseignantObj : Enseignant = new Enseignant();
    EnseignantList : Enseignant[] = [];

   //Etudiant
   EtudiantDetail !: FormGroup;
   EtudiantObj : Etudiant = new Etudiant();
   EtudiantList : Etudiant[] = [];

   //username
   private roles: string[] = [];
   isLoggedIn = false;
   showDashboardEtudiant = false;
   username?: string;
   kk!:Etudiant;

  constructor(private formBuilder : FormBuilder,private pedagogiqueService : PedagogiqueService ,private enseignantService : EnseignantService,private etudiantService : EtudiantService,private tokenStorageService: TokenStorageService, private authService:AuthService) { }

  ngOnInit(): void {

    const user = this.tokenStorageService.getUser();

    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      this.roles = user.roles;

      this.showDashboardEtudiant = this.roles.includes('ROLE_ETUDIANT');

      this.username = user.username;
      this.kk  = user.id;

    }

    this.getAllEnseignant();
    this.chercherPedagogiqueByEtudiantId(this.kk);

    this.PedagogiqueDetail = this.formBuilder.group({

      id : [''],
      sujet: [''],
      description: [''],
      etat: [''],
      idEnseignant: [''],
      etudiant: [''],


    });

 }
  getAllEnseignant() {
    this.enseignantService.getAllEnseignant().subscribe(res=>{
        this.EnseignantList= res;
    },err=>{
      console.log("error while fetching data.")
    });
  }

  chercherPedagogiqueByEtudiantId(etudiant : Etudiant) {

    this.pedagogiqueService.getPedagogiqueByEtudiantId(etudiant).subscribe(res=>{
      console.log(res);
     this.PedagogiqueList= res;

    },err => {
      console.log(err);
    });

  }



}





