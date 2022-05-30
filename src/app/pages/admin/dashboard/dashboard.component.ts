import { Router } from '@angular/router';
import { TokenStorageService } from './../../../_services/token-storage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  private roles: string[] = [];
  isLoggedIn = false;
  showDashboard = false;
  showDashboardEtudiant = false;
  username?: string;

  constructor(private tokenStorageService: TokenStorageService,private router: Router) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showDashboard = this.roles.includes('ROLE_ADMIN');
      this.showDashboardEtudiant = this.roles.includes('ROLE_USER');

      this.username = user.username;

    }
  }

  logout(): void {


    if(this.roles.includes('ROLE_ADMIN')){

      this.router.navigateByUrl('/login-admin')
      this.tokenStorageService.signOut();


    }
    else{
      this.router.navigateByUrl('/login-etudiant')
      this.tokenStorageService.signOut();


    }
  }
}
