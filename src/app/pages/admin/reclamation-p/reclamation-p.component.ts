import { Enseignant } from './../../../model/enseignant/enseignant.model';
import { EnseignantService } from './../../../service/enseignant/enseignant.service';
import { Pedagogique } from './../../../model/reclamations/pedagogique.model';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { PedagogiqueService } from 'src/app/services/reclamations/pedagogique.service';

@Component({
  selector: 'app-reclamation-p',
  templateUrl: './reclamation-p.component.html',
  styleUrls: ['./reclamation-p.component.css']
})
export class ReclamationPComponent implements OnInit {

  PedagogiqueDetail !: FormGroup;
  PedagogiqueObj : Pedagogique = new Pedagogique();
  PedagogiqueList : Pedagogique[] = [];

  EnseignantDetail !: FormGroup;
  EnseignantObj : Enseignant = new Enseignant();
  EnseignantList : Enseignant[] = [];


  constructor(private formBuilder : FormBuilder,private PedagogiqueService : PedagogiqueService ,private router: Router,private enseignantService : EnseignantService) { }

  ngOnInit(): void {

    this.getAllPedagogique();
    this.getAllEnseignant();
    this.PedagogiqueDetail = this.formBuilder.group({

      id : [''],
      sujet: [''],
      description: [''],
      etat: [''],
      etudiant_id: [''],
      enseignant : [''],


    });


  }

  getAllPedagogique() {
    this.PedagogiqueService.getAllPedagogique().subscribe(res=>{
        this.PedagogiqueList= res;
    },err=>{
      console.log("error while fetching data.")
    });
  }

  deletePedagogique(Pedagogique : Pedagogique) {

    this.PedagogiqueService.deletePedagogique(Pedagogique).subscribe(res=>{
      console.log(res);
     // alert('Pedagogique deleted successfully');
      this.getAllPedagogique();
      window.location.reload();

    },err => {
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

  traiterPedagogique(Pedagogique : Pedagogique) {
    this.PedagogiqueService.traiterPedagogique(Pedagogique).subscribe(res=>{
      console.log(res);
      this.getAllPedagogique();
    },err => {
      console.log(err);
    });

  }


}
