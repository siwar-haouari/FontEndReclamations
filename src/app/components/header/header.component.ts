import { TokenStorageService } from './../../_services/token-storage.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

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
    else if(this.roles.includes('ROLE_ETUDIANT')){
      this.router.navigateByUrl('/login-etudiant')
      this.tokenStorageService.signOut();
    }
    else if(this.roles.includes('ROLE_ENSEIGNANT')){
      this.router.navigateByUrl('/login-enseignant')
      this.tokenStorageService.signOut();
    }




  }
}
