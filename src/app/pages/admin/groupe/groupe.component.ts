import { Groupe } from './../../../model/groupe/groupe';
import { GroupeService } from './../../../service/groupe/groupe.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup ,FormControl} from '@angular/forms';

@Component({
  selector: 'app-groupe',
  templateUrl: './groupe.component.html',
  styleUrls: ['./groupe.component.css']
})
export class GroupeComponent implements OnInit {

  GroupeDetail !: FormGroup;
  GroupeObj : Groupe = new Groupe();
  GroupeList : Groupe[] = [];

  constructor(private formBuilder : FormBuilder, private groupeService : GroupeService) { }

  ngOnInit(): void {

    this.getAllGroupes();

    this.GroupeDetail = this.formBuilder.group({
      id : [''],
      nom : [''],
    });

  }

  addGroupe() {
    console.log(this.GroupeDetail);
    this.GroupeObj.id = this.GroupeDetail.value.id;
    this.GroupeObj.nom = this.GroupeDetail.value.nom;

    this.groupeService.addGroupe(this.GroupeObj).subscribe(res=>{
      console.log(res);
      this.getAllGroupes();
      window.location.reload();

  },err=>{
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

  editGroupe(groupe : Groupe) {
    this.GroupeDetail.controls['id'].setValue(groupe.id);
    this.GroupeDetail.controls['nom'].setValue(groupe.nom);
  }

  updateGroupe() {

    this.GroupeObj.id = this.GroupeDetail.value.id;
    this.GroupeObj.nom = this.GroupeDetail.value.nom;


    this.groupeService.updateGroupe(this.GroupeObj).subscribe(res=>{
      console.log(res);
      this.getAllGroupes();
      window.location.reload();

    },err=>{
      console.log(err);
    })

  }

  deleteGroupe(groupe : Groupe) {

    this.groupeService.deleteGroupe(groupe).subscribe(res=>{
     // console.log(res);
      //alert('groupe deleted successfully');
      window.location.reload();
      this.getAllGroupes();
    },err => {
      console.log(err);
    });

  }



}
