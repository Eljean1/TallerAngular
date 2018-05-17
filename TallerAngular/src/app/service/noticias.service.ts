import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GlobalService} from '../service/global.service';
import {Noticia} from "../models/noticia";


@Injectable()
export class NoticiasService {
  public url: string;
  public favoritos: Noticia[];

  constructor(
    public _http: HttpClient,
    private _url: GlobalService,
  ) {
    this.url = _url.getUrl();
  }
  getNoticias() {
    console.log(this.url);
    return this._http.get(this.url);
  }
  getNoticia(id) {
    console.log('Id de la noticia:' + id);
    return this._http.get(this.url+'/search?id='+id);
  }
  getFavoritos() {
    if (localStorage.getItem('favoritos') == null) {
      this.favoritos = [];
    } else {
      this.favoritos = JSON.parse(localStorage.getItem('favoritos'));
    }
    return this.favoritos;
  }
  guardarFavorito(favorito: Noticia) {
    this.favoritos.unshift(favorito);
    let favoritos  = [];
    if (localStorage.getItem('favoritos') == null) {
      favoritos = [];
      favoritos.unshift(favorito);
      localStorage.setItem('favoritos', JSON.stringify(favoritos));
    } else {
      favoritos = JSON.parse(localStorage.getItem('favoritos'));
      favoritos.unshift(favorito);
      localStorage.setItem('favoritos', JSON.stringify(favoritos));
    }
  }
  borrarFavorito(favorito: Noticia) {
    for (let i = 0; this.favoritos.length; i++) {
      if (favorito == this.favoritos[i]) {
        this.favoritos.splice(i, 1 ) ;
        localStorage.setItem('favoritos', JSON.stringify(this.favoritos));
        return this.favoritos;
      }
    }
  }
}
