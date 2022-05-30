import { DashboardModule } from './modules/dashboard.module';
import { EtudiantsModule } from './modules/etudiants.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './pages/admin/register/register.component';
import { LoginAdminComponent } from './pages/admin/login-admin/login-admin.component';
import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { LoginGlobalComponent } from './pages/login-global/login-global.component';
import { LoginEnseignantComponent } from './pages/enseignant/login-enseignant/login-enseignant.component';
import { EnseignantsModule } from './modules/enseignant.module';



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginAdminComponent,
    LoginGlobalComponent,
    LoginEnseignantComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    EtudiantsModule,
    EnseignantsModule
  ],

  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
