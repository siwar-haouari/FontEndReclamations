import { Router } from '@angular/router';
import { TokenStorageService } from './../../../_services/token-storage.service';
import { Component, OnInit } from '@angular/core';
import { EnseignatAuthService } from 'src/app/_services/enseignat-auth.service';

@Component({
  selector: 'app-login-enseignant',
  templateUrl: './login-enseignant.component.html',
  styleUrls: ['./login-enseignant.component.css']
})
export class LoginEnseignantComponent implements OnInit {
  form: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(private authService: EnseignatAuthService, private tokenStorage: TokenStorageService,private router: Router) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
      this.router.navigateByUrl('/dashbordenseignant');
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
        this.router.navigateByUrl('/dashbordenseignant');
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
