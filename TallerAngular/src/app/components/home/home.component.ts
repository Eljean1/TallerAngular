import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  color: string;
  opciones = [
    {name: 'nada', color: '' },
    {name: 'Crear', color: 'primary' },
    {name: 'Editar', color: 'accent' },
    {name: 'Borrar', color: 'warn' }
  ];
  ngOnInit() {
    console.log('El Componente se ha Iniciado' + this.opciones);
  }


}
