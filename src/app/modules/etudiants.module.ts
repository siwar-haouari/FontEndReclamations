import { ListeReclamationPedagogiqueEComponent } from './../pages/etudiants/liste-reclamation-pedagogique-e/liste-reclamation-pedagogique-e.component';
import { ReclamationsEComponent } from './../pages/etudiants/reclamations-e/reclamations-e.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ComponentsModule } from './components.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardEtudiantComponent } from '../pages/etudiants/dashboard-etudiant/dashboard-etudiant.component';
import { SidebarEComponent } from '../pages/etudiants/sidebar-e/sidebar-e.component';
import { AjouterReclamationEComponent } from '../pages/etudiants/ajouter-reclamation-e/ajouter-reclamation-e.component';



@NgModule({
  declarations: [
    DashboardEtudiantComponent,
    SidebarEComponent,
    ReclamationsEComponent,
    AjouterReclamationEComponent,
    ListeReclamationPedagogiqueEComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ComponentsModule,
    MatSidenavModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class EtudiantsModule { }
