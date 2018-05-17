import { Component, OnInit } from '@angular/core';
import {NoticiasService} from "../../service/noticias.service";

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent implements OnInit {

  public let; favoritos = [];

  constructor(private noticiaService: NoticiasService) { }

  ngOnInit() {
    this.favoritos = this.noticiaService.getFavoritos();
    console.log(this.favoritos);
  }
  borrarFavorito(noticia) {
    this.noticiaService.borrarFavorito(noticia);
  }

}
