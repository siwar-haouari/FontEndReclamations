import { SidebareEnseignantComponent } from './../pages/enseignant/sidebare-enseignant/sidebare-enseignant.component';
import { DashboardEnseignantComponent } from './../pages/enseignant/dashboard-enseignant/dashboard-enseignant.component';

import { ComponentsModule } from './components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';




@NgModule({
  declarations: [
    DashboardEnseignantComponent,
    SidebareEnseignantComponent
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
export class EnseignantsModule { }
