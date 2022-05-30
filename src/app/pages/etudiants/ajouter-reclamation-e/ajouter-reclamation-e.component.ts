import { AuthService } from 'src/app/_services/auth.service';
import { TokenStorageService } from './../../../_services/token-storage.service';
import { EtudiantService } from './../../../service/etudiant/etudiant.service';
import { Etudiant } from './../../../model/etudiant/etudiant.model';
import { EnseignantService } from './../../../service/enseignant/enseignant.service';
import { Enseignant } from './../../../model/enseignant/enseignant.model';
import { Pedagogique } from './../../../model/reclamations/pedagogique.model';
import { AdministrativeService } from './../../../services/reclamations/administrative.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Administrative } from './../../../model/reclamations/administrative.model';
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { PedagogiqueService } from 'src/app/services/reclamations/pedagogique.service';

@Component({
  selector: 'app-ajouter-reclamation-e',
  templateUrl: './ajouter-reclamation-e.component.html',
  styleUrls: ['./ajouter-reclamation-e.component.css']
})
export class AjouterReclamationEComponent implements OnInit {


  //administrative
  AdministrativeDetail !: FormGroup;
  AdministrativeObj : Administrative = new Administrative();
  AdministrativeList : Administrative[] = [];

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


  constructor(private formBuilder : FormBuilder, private AdministrativeService : AdministrativeService ,private pedagogiqueService : PedagogiqueService ,private enseignantService : EnseignantService,private etudiantService : EtudiantService,private tokenStorageService: TokenStorageService, private authService:AuthService) { }

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
    //this.chercherAdministrativeByEtudiantId(user.id);
      this.AdministrativeDetail = this.formBuilder.group({

      sujet: [''],
      description: [''],
      etat: [''],
      etudiant: [''],


    });

    this.PedagogiqueDetail = this.formBuilder.group({

      id : [''],
      sujet: [''],
      description: [''],
      etat: [''],
      enseignant: [''],

    });


    $("#form2").hide();

    $('input[type="radio"]').click(function () {

      var inputValue = $(this).attr("value");

      if (inputValue == "hide") {
        $("#form2").hide();
        $("#form1").show();
      } else {
        $("#form1").hide();
        $("#form2").show();
      }
    });
 }

//afficher la liste des reclamations administratives

getAllAdministrative() {
  this.AdministrativeService.getAllAdministrative().subscribe(res=>{
      this.AdministrativeList= res;
  },err=>{
    console.log("error while fetching data.")
    this.AdministrativeList = err.error.message;

  });
}

//ajouter reclamation administrative

  addAdministrative() {

    console.log(this.AdministrativeDetail);
    this.AdministrativeObj.id= this.AdministrativeDetail.value.id;
    this.AdministrativeObj.sujet = this.AdministrativeDetail.value.sujet;
    this.AdministrativeObj.etat = "en cours"
    this.AdministrativeObj.description = this.AdministrativeDetail.value.description;
    this.AdministrativeObj.etudiant =  this.kk;

    this.AdministrativeService.addAdministrative(this.AdministrativeObj).subscribe(res=>{
        console.log(res);

      alert("ajout avec succees");
     // sessionStorage.clear();

    },err=>{
        console.log(err);
    });

  }

  //ajouter reclamation pedagogique

  addPedagogique() {

    console.log(this.PedagogiqueDetail);
    this.PedagogiqueObj.id= this.PedagogiqueDetail.value.id;
    this.PedagogiqueObj.sujet = this.PedagogiqueDetail.value.sujet;
    this.PedagogiqueObj.description = this.PedagogiqueDetail.value.description;
    this.PedagogiqueObj.etat = "en cours";
    this.PedagogiqueObj.enseignant = this.PedagogiqueDetail.value.enseignant;
    this.PedagogiqueObj.etudiant =  this.kk;



    this.pedagogiqueService.addPedagogique(this.PedagogiqueObj).subscribe(res=>{
        console.log(res);

       window.location.reload();

    },err=>{
        console.log(err);
    });

  }

  //afficher tous les enseignants

  getAllEnseignant() {
    this.enseignantService.getAllEnseignant().subscribe(res=>{
        this.EnseignantList= res;
    },err=>{
      console.log("error while fetching data.")
    });
  }
}





