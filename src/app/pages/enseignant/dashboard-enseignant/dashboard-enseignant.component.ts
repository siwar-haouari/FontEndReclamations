import { Enseignant } from './../../../model/enseignant/enseignant.model';
import { Pedagogique } from './../../../model/reclamations/pedagogique.model';
import { FormGroup } from '@angular/forms';
import { PedagogiqueService } from 'src/app/services/reclamations/pedagogique.service';
import { Router } from '@angular/router';
import { TokenStorageService } from './../../../_services/token-storage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-enseignant',
  templateUrl: './dashboard-enseignant.component.html',
  styleUrls: ['./dashboard-enseignant.component.css']
})
export class DashboardEnseignantComponent implements OnInit {
   //username
   private roles: string[] = [];
   isLoggedIn = false;
   showDashboardEnseignant = false;
   username?: string;
   kk!:Enseignant;

  PedagogiqueDetail !: FormGroup;
  PedagogiqueObj : Pedagogique = new Pedagogique();
  PedagogiqueList : Pedagogique[] = [];

  constructor(private tokenStorageService: TokenStorageService,private router: Router,private PedagogiqueService :PedagogiqueService) { }

  ngOnInit(): void {


    //login
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;
      this.showDashboardEnseignant = this.roles.includes('ROLE_ENSEIGNANT');
      this.username = user.username;
      this.kk  = user.id;
      this.router.navigateByUrl('/dashbordenseignant');
    }
    else{
      this.router.navigateByUrl('/login-enseignant');
    }

    this.chercherPedagogiqueByEnseignantId(this.kk);


  }


  //afficher les reclamations pour chaque ensiengant
  chercherPedagogiqueByEnseignantId(enseignant : Enseignant) {
    this.PedagogiqueService.getPedagogiqueByEnseignantId(enseignant).subscribe(res=>{
    this.PedagogiqueList= res;
    },err => {
      console.log(err);
    });

  }


  //logout
  logout(): void {
    this.tokenStorageService.signOut();
    this.router.navigateByUrl('/login-enseignant');
    window.location.reload();
  }


}

