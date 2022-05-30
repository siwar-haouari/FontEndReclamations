import { TokenStorageService } from './../../../_services/token-storage.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-etudiant',
  templateUrl: './dashboard-etudiant.component.html',
  styleUrls: ['./dashboard-etudiant.component.css']
})
export class DashboardEtudiantComponent implements OnInit {
  private roles: string[] = [];
  isLoggedIn = false;
  showDashboardEtudiant = false;
  username?: string;

  constructor(private tokenStorageService: TokenStorageService,private router: Router) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showDashboardEtudiant = this.roles.includes('ROLE_ETUDIANT');

      this.username = user.username;
      this.router.navigateByUrl('/dashbordetudiant');
    }
    else{
      this.router.navigateByUrl('/login-etudiant');

    }


  }

  logout(): void {
    this.tokenStorageService.signOut();
    this.router.navigateByUrl('/login-etudiant');
    window.location.reload();
  }
}

