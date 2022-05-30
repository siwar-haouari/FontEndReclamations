import { TokenStorageService } from './../../../_services/token-storage.service';
import { Enseignant } from './../../../model/enseignant/enseignant.model';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup ,FormControl} from '@angular/forms';
import { EnseignantService } from 'src/app/service/enseignant/enseignant.service';


@Component({
  selector: 'app-enseignant',
  templateUrl: './enseignant.component.html',
  styleUrls: ['./enseignant.component.css']
})
export class EnseignantComponent implements OnInit {

  EnseignantDetail !: FormGroup;
  EnseignantObj : Enseignant = new Enseignant();
  EnseignantList : Enseignant[] = [];

  constructor(private formBuilder : FormBuilder, private enseignantService : EnseignantService ,private tokenStorageService: TokenStorageService,private router: Router) { }

  ngOnInit(): void {

    this.getAllEnseignant();

    this.EnseignantDetail = this.formBuilder.group({

      id : [''],
      cin : [''],
      nom : [''],
      prenom : [''],
      typeContrat : [''],
      specialite : [''],
      username : [''],
      email : [''],
      password : [''],
    });

  }

  addEnseignant() {

    console.log(this.EnseignantDetail);
    this.EnseignantObj.id = this.EnseignantDetail.value.id;
    this.EnseignantObj.cin = this.EnseignantDetail.value.cin;
    this.EnseignantObj.nom = this.EnseignantDetail.value.nom;
    this.EnseignantObj.prenom = this.EnseignantDetail.value.prenom;
    this.EnseignantObj.typeContrat = this.EnseignantDetail.value.typeContrat;
    this.EnseignantObj.specialite = this.EnseignantDetail.value.specialite;
    this.EnseignantObj.username = this.EnseignantDetail.value.username;
    this.EnseignantObj.email = this.EnseignantDetail.value.email;
    this.EnseignantObj.password = this.EnseignantDetail.value.password;

    this.enseignantService.addEnseignant(this.EnseignantObj).subscribe(res=>{
        console.log(res);

        this.getAllEnseignant();
        window.location.reload();

    },err=>{
        console.log(err);
    });

  }

  getAllEnseignant() {
    this.enseignantService.getAllEnseignant().subscribe(res=>{
        this.EnseignantList= res;
    },err=>{
      console.log("error while fetching data.")
    });
  }

  editEnseignant(Enseignant : Enseignant) {

    this.EnseignantDetail.controls['id'].setValue(Enseignant.id);
    this.EnseignantDetail.controls['cin'].setValue(Enseignant.cin);
    this.EnseignantDetail.controls['nom'].setValue(Enseignant.nom);
    this.EnseignantDetail.controls['prenom'].setValue(Enseignant.prenom);
    this.EnseignantDetail.controls['typeContrat'].setValue(Enseignant.typeContrat);
    this.EnseignantDetail.controls['specialite'].setValue(Enseignant.specialite);
    this.EnseignantDetail.controls['username'].setValue(Enseignant.username);
    this.EnseignantDetail.controls['email'].setValue(Enseignant.email);
    this.EnseignantDetail.controls['password'].setValue(Enseignant.password);


  }

  updateEnseignant() {

    console.log(this.EnseignantDetail);

    this.EnseignantObj.id = this.EnseignantDetail.value.id;
    this.EnseignantObj.cin = this.EnseignantDetail.value.cin;
    this.EnseignantObj.nom = this.EnseignantDetail.value.nom;
    this.EnseignantObj.prenom = this.EnseignantDetail.value.prenom;
    this.EnseignantObj.typeContrat = this.EnseignantDetail.value.typeContrat;
    this.EnseignantObj.specialite = this.EnseignantDetail.value.specialite;
    this.EnseignantObj.username = this.EnseignantDetail.value.username;
    this.EnseignantObj.email = this.EnseignantDetail.value.email;
    this.EnseignantObj.password = this.EnseignantDetail.value.password;

    this.enseignantService.updateEnseignant(this.EnseignantObj).subscribe(res=>{
      console.log(res);

      this.getAllEnseignant();
      window.location.reload();

  },err=>{
      console.log(err);
  });

}

  deleteEnseignant(Enseignant : Enseignant) {

    this.enseignantService.deleteEnseignant(Enseignant).subscribe(res=>{
      console.log(res);
      alert('Enseignant deleted successfully');
      this.getAllEnseignant();
    },err => {
      console.log(err);
    });

  }



}
