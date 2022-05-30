import { GroupeService } from './../../../service/groupe/groupe.service';
import { Groupe } from './../../../model/groupe/groupe';
import { Etudiant } from './../../../model/etudiant/etudiant.model';
import { EtudiantService } from './../../../service/etudiant/etudiant.service';

import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent implements OnInit {

  EtudiantDetail !: FormGroup;
  EtudiantObj : Etudiant = new Etudiant();
  EtudiantList : Etudiant[] = [];

  GroupeDetail !: FormGroup;
  GroupeObj : Groupe = new Groupe();
   GroupeList : Groupe[] = [];

  constructor(private formBuilder : FormBuilder, private etudiantService : EtudiantService , private groupeService: GroupeService) { }

  ngOnInit(): void {

    this.getAllEtudiant();
    this.getAllGroupes();
    this.EtudiantDetail = this.formBuilder.group({

      id : [''],
      cin : [''],
      nom : [''],
      prenom : [''],
      matricule : [''],
      username : [''],
      email : [''],
      password : [''],
      groupe : [''],

    });

  }

  addEtudiant() {

    console.log(this.EtudiantDetail);
    this.EtudiantObj.id = this.EtudiantDetail.value.id;
    this.EtudiantObj.cin = this.EtudiantDetail.value.cin;
    this.EtudiantObj.nom = this.EtudiantDetail.value.nom;
    this.EtudiantObj.prenom = this.EtudiantDetail.value.prenom;
    this.EtudiantObj.matricule = this.EtudiantDetail.value.matricule;
    this.EtudiantObj.username = this.EtudiantDetail.value.username;
    this.EtudiantObj.email = this.EtudiantDetail.value.email;
    this.EtudiantObj.password = this.EtudiantDetail.value.password;
    this.EtudiantObj.groupe = this.EtudiantDetail.value.groupe;


    this.etudiantService.addEtudiant(this.EtudiantObj).subscribe(res=>{
        console.log(res);

        this.getAllEtudiant();

       window.location.reload();

    },err=>{
        console.log(err);
    });

  }

  getAllEtudiant() {
    this.etudiantService.getAllEtudiant().subscribe(res=>{

        this.EtudiantList= res;
    },err=>{
      console.log("error while fetching data.")
    });
  }

  editEtudiant(Etudiant : Etudiant) {

    this.EtudiantDetail.controls['id'].setValue(Etudiant.id);
    this.EtudiantDetail.controls['cin'].setValue(Etudiant.cin);
    this.EtudiantDetail.controls['nom'].setValue(Etudiant.nom);
    this.EtudiantDetail.controls['prenom'].setValue(Etudiant.prenom);
    this.EtudiantDetail.controls['matricule'].setValue(Etudiant.matricule);
    this.EtudiantDetail.controls['username'].setValue(Etudiant.username);
    this.EtudiantDetail.controls['email'].setValue(Etudiant.email);
    this.EtudiantDetail.controls['password'].setValue(Etudiant.password);
    this.EtudiantDetail.controls['groupe'].setValue(Etudiant.groupe);


  }

  updateEtudiant() {

    console.log(this.EtudiantDetail);

    this.EtudiantObj.id = this.EtudiantDetail.value.id;
    this.EtudiantObj.cin = this.EtudiantDetail.value.cin;
    this.EtudiantObj.nom = this.EtudiantDetail.value.nom;
    this.EtudiantObj.prenom = this.EtudiantDetail.value.prenom;
    this.EtudiantObj.matricule = this.EtudiantDetail.value.matricule;
    this.EtudiantObj.username = this.EtudiantDetail.value.username;
    this.EtudiantObj.email = this.EtudiantDetail.value.email;
    this.EtudiantObj.password = this.EtudiantDetail.value.password;
    this.EtudiantObj.groupe = this.EtudiantDetail.value.groupe;


    this.etudiantService.updateEtudiant(this.EtudiantObj).subscribe(res=>{
      console.log(res);

      this.getAllEtudiant();
     window.location.reload();

  },err=>{
      console.log(err);
  });

}

deleteEtudiant(Etudiant : Etudiant) {

  this.etudiantService.deleteEtudiant(Etudiant).subscribe(res=>{
    console.log(res);
    //alert('Etudiant deleted successfully');
    this.getAllEtudiant();
  },err => {
    console.log(err);
  });

}
deleteGroupe(groupe : Groupe) {

  this.groupeService.deleteGroupe(groupe).subscribe(res=>{
    console.log(res);
    //alert('groupe deleted successfully');
    window.location.reload();
    this.getAllGroupes();
  },err => {
    console.log(err);
  });

}

getAllGroupes() {
  this.groupeService.getAllGroupe().subscribe(res=>{
      this.GroupeList = res;
  },err=>{
    console.log("error while fetching data.")
  });
}






}
