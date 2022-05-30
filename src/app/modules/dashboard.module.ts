import { DashboardComponent } from '../pages/admin/dashboard/dashboard.component';
import { ComponentsModule } from './components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { GroupeComponent } from '../pages/admin/groupe/groupe.component';
import { EnseignantComponent } from '../pages/admin/enseignant/enseignant.component';
import { EtudiantComponent } from '../pages/admin/etudiant/etudiant.component';
import { ReclamationAComponent } from '../pages/admin/reclamation-a/reclamation-a.component';
import { ReclamationPComponent } from '../pages/admin/reclamation-p/reclamation-p.component';




@NgModule({
  declarations: [
    DashboardComponent,
    GroupeComponent,
    EnseignantComponent,
    EtudiantComponent,
    ReclamationAComponent,
    ReclamationPComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ComponentsModule,
    MatSidenavModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],

  exports: [
    GroupeComponent,
    EnseignantComponent,
    EtudiantComponent,
  ]


})
export class DashboardModule {}
