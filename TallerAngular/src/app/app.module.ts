import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule, MatCheckboxModule, MatChipsModule,
  MatExpansionModule, MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule, MatMenuModule, MatProgressBarModule, MatProgressSpinnerModule, MatTabsModule,
  MatToolbarModule
} from '@angular/material';

// Componentes
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { ListadoComponent } from './components/listado/listado.component';
import { DetalleComponent } from './components/detalle/detalle.component';
import { FavoritosComponent } from './components/favoritos/favoritos.component';

// Importar rutas
import {appRoutingProviders, routing} from './app.routing';

// Servicios
import {GlobalService} from './service/global.service';
import {NoticiasService} from './service/noticias.service';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent,
    ListadoComponent,
    DetalleComponent,
    FavoritosComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatListModule,
    MatInputModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatToolbarModule,
    MatChipsModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatGridListModule,
    routing,
  ],
  providers: [appRoutingProviders, GlobalService, NoticiasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
