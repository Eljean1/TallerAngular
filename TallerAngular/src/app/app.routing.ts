import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

// Componentes a Utilizar
import {HomeComponent} from './components/home/home.component';
import {ErrorComponent} from './components/error/error.component';
import {ListadoComponent} from './components/listado/listado.component';
import {DetalleComponent} from './components/detalle/detalle.component';
import {FavoritosComponent} from "./components/favoritos/favoritos.component";

const appRoutes: Routes = [
  {path: '', component: ListadoComponent},
  {path: 'home', component: ListadoComponent},
  {path: 'listado', component: ListadoComponent},
  {path: 'favoritos', component: FavoritosComponent},
  {path: 'detalle-noticia/:id', component: DetalleComponent},
  {path: '**', component: ErrorComponent},
];
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
