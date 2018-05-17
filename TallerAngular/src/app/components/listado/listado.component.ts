import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { NoticiasService } from '../../service/noticias.service';
import { Noticia } from '../../models/noticia';
import {subscribeToResult} from "rxjs/internal/util/subscribeToResult";

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css'],
  providers: [NoticiasService]
})
export class ListadoComponent implements OnInit {
  public noticias = [];
  public articulo;
  //public noticias1 : any[];

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
        this.noticias = this.articulo.articles;

        console.log(this.articulo.articles);

      },

      err => console.error(err),
      () => console.log(this.noticias.toString())
    );
  }
}
