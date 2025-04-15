import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TacheListComponent } from './components/tache-list/tache-list.component';
import { TacheFormComponent } from './components/tache-form/tache-form.component';
import { TacheCalculComponent } from './components/tache-calcul/tache-calcul.component';

const routes: Routes = [
  { path: '', redirectTo: '/taches', pathMatch: 'full' },
  { path: 'taches', component: TacheListComponent },
  { path: 'add-tache', component: TacheFormComponent },
  { path: 'update-tache/:id', component: TacheFormComponent },
  { path: 'calcul-montant', component: TacheCalculComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
