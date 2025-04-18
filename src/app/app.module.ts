import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { EtudiantsComponent } from './Components/etudiants/etudiants.component';
import { BlocComponent } from './Components/bloc/bloc.component';
import { FormsModule  } from '@angular/forms';
import { FooterComponent } from './Components/footer/footer.component';
import { HeaderComponent } from './Components/header/header.component';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReservationComponent } from './Components/reservation/reservation.component';

@NgModule({
  declarations: [
    AppComponent,
    EtudiantsComponent,
    BlocComponent,
    FooterComponent,
    HeaderComponent,
    ReservationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    DialogModule,
    ButtonModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
