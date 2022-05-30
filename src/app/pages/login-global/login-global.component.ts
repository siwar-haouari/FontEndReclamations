import { Router } from '@angular/router';
import { TokenStorageService } from './../../_services/token-storage.service';
import { EtudiantauthServiceService } from './../../_services/etudiantauth-service.service';
import { Component, OnInit } from '@angular/core';
import { sampleTime } from 'rxjs';

@Component({
  selector: 'app-login-global',
  templateUrl: './login-global.component.html',
  styleUrls: ['./login-global.component.css']
})
export class LoginGlobalComponent implements OnInit {
  form: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(private authService: EtudiantauthServiceService, private tokenStorage: TokenStorageService,private router: Router) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
      this.router.navigateByUrl('/dashbordetudiant');
    }
  }
  onSubmit(): void {
    const { username, password } = this.form;

    this.authService.login(username, password).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        this.router.navigateByUrl('/dashbordetudiant');
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }
  reloadPage(): void {
    window.location.reload();
  }
}
