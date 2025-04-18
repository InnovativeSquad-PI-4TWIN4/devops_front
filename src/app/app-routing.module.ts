import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {  HomeComponent } from './Components/home/home.component';
import {  EtudiantsComponent } from './Components/etudiants/etudiants.component';
import { ReservationComponent } from './Components/reservation/reservation.component';
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'addmenu', component: EtudiantsComponent },
  { path: 'list-reservation', component: ReservationComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
