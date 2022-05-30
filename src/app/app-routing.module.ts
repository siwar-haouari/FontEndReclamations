import { LoginEnseignantComponent } from './pages/enseignant/login-enseignant/login-enseignant.component';
import { ListeReclamationPedagogiqueEComponent } from './pages/etudiants/liste-reclamation-pedagogique-e/liste-reclamation-pedagogique-e.component';
import { ReclamationAComponent } from './pages/admin/reclamation-a/reclamation-a.component';
import { DashboardEnseignantComponent } from './pages/enseignant/dashboard-enseignant/dashboard-enseignant.component';
import { ReclamationsEComponent } from './pages/etudiants/reclamations-e/reclamations-e.component';
import { DashboardEtudiantComponent } from './pages/etudiants/dashboard-etudiant/dashboard-etudiant.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './pages/admin/register/register.component';
import { LoginAdminComponent } from './pages/admin/login-admin/login-admin.component';
import { LoginGlobalComponent } from './pages/login-global/login-global.component';
import { EnseignantComponent } from './pages/admin/enseignant/enseignant.component';
import { GroupeComponent } from './pages/admin/groupe/groupe.component';
import { EtudiantComponent } from './pages/admin/etudiant/etudiant.component';
import { AjouterReclamationEComponent } from './pages/etudiants/ajouter-reclamation-e/ajouter-reclamation-e.component';
import { ReclamationPComponent } from './pages/admin/reclamation-p/reclamation-p.component';

const routes: Routes = [{

  path: 'dashboard',
  component: DashboardComponent,

  children: [{
    path: 'groupe',
    component: GroupeComponent
  },
  {
    path: 'enseignant',
    component: EnseignantComponent
  },
  {
    path: 'etudiant',
    component: EtudiantComponent
  },
  {
    path: 'administrative',
    component: ReclamationAComponent
  },
  {
    path: 'pedagogique',
    component: ReclamationPComponent
  }
]
},
{
  path: 'login-etudiant',
  component: LoginGlobalComponent,

},
{
  path: 'login-enseignant',
  component: LoginEnseignantComponent,

},
{
  path: 'register',
  component: RegisterComponent,

},
{
  path: 'login-admin',
  component: LoginAdminComponent,

},
{
  path: 'dashbordetudiant',
  component: DashboardEtudiantComponent,
  children: [{

    path: 'reclamation',
    component: ReclamationsEComponent
  },
  {

    path: 'ajouterreclamation',
    component: AjouterReclamationEComponent
  },
  {

    path: 'reclamationp',
    component: ListeReclamationPedagogiqueEComponent
  }
]

},
{
  path: 'dashbordenseignant',
  component: DashboardEnseignantComponent,

},

{
  path: '',
  component: LoginGlobalComponent , pathMatch: 'full',

},
{
  path: 'dashbordenseignant',
  component: DashboardEnseignantComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
