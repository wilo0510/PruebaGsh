import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { CaracteristicasComponent } from './caracteristicas/caracteristicas.component';
import { ClientesComponent } from './clientes/clientes.component';
import { DestinosComponent } from './destinos/destinos.component';
import { ContactoComponent } from './contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CabeceraComponent,
    CaracteristicasComponent,
    ClientesComponent,
    DestinosComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
