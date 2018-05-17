import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { NoticiasService } from '../../service/noticias.service';
import { Noticia } from '../../models/noticia';
import {subscribeToResult} from "rxjs/internal/util/subscribeToResult";
import {toArray} from "rxjs/internal/operators";

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css'],
  providers: [NoticiasService]
})
export class ListadoComponent implements OnInit {
  public noticias = [];
  public  favoritos = [];
  public articulo;
  breakpoint: number;

  constructor(
    private noticiaService: NoticiasService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }
  ngOnInit() {
    this.noticiaService.getNoticias().subscribe(
      result => {
        //Se tuvo que obtener del json solo los articles ya que el json completo se obtenia como un objeto

        this.articulo = result;
        // console.log(this.articulo);
        // this.articulo = this.articulo.response;
        // console.log(this.articulo);
        this.noticias = this.articulo;
        console.log(this.noticias);
        //console.log(this.noticias);
      },

      err => console.error(err),
      /*() => console.log(this.noticias.toString())*/
    );

    this.breakpoint = (window.innerWidth <= 400) ? 1 : 6;
  }
  agregarFavorito( noticia) {
    this.noticiaService.guardarFavorito(noticia);
  }

  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 400) ? 1 : 6;
  }

}
