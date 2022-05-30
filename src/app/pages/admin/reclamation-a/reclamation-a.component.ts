import { EtudiantService } from './../../../service/etudiant/etudiant.service';
import { Router } from '@angular/router';
import { TokenStorageService } from './../../../_services/token-storage.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Administrative } from './../../../model/reclamations/administrative.model';
import { Component, OnInit, Input } from '@angular/core';
import { AdministrativeService } from 'src/app/services/reclamations/administrative.service';

@Component({
  selector: 'app-reclamation-a',
  templateUrl: './reclamation-a.component.html',
  styleUrls: ['./reclamation-a.component.css']
})
export class ReclamationAComponent implements OnInit {

  AdministrativeDetail !: FormGroup;
  AdministrativeObj : Administrative = new Administrative();
  AdministrativeList : Administrative[] = [];

  constructor(private formBuilder : FormBuilder,  private administrativeService : AdministrativeService ,private router: Router) { }

  ngOnInit(): void {

    this.getAllAdministrative();

    this.AdministrativeDetail = this.formBuilder.group({

      id : [''],
      sujet: [''],
      description: [''],
      etat: [''],
      etudiant: [''],


    });


  }


  getAdministrativeById(id:number){
    this.administrativeService.getAdministrativeById(id).subscribe(res=>{
      this.getAdministrativeById(id);
  },err=>{
    console.log("error while fetching data.")
  });

  }


  getAllAdministrative() {
    this.administrativeService.getAllAdministrative().subscribe(res=>{
        this.AdministrativeList= res;
    },err=>{
      console.log("error while fetching data.")
    });
  }


  deleteAdministrative(administrative : Administrative) {

    this.administrativeService.deleteAdministrative(administrative).subscribe(res=>{
      console.log(res);
     // alert('Administrative deleted successfully');
      this.getAllAdministrative();
      window.location.reload();

    },err => {
      console.log(err);
    });

  }

  traiterAdministrative(administrative : Administrative) {
    this.administrativeService.traiterAdministrative(administrative).subscribe(res=>{
      console.log(res);
      this.getAllAdministrative();
    },err => {
      console.log(err);
    });

  }


}
