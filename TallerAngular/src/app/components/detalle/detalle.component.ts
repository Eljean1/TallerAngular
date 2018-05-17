import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {NoticiasService} from '../../service/noticias.service';
import {Noticia} from '../../models/noticia';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css'],
  providers: [NoticiasService]
})
export class DetalleComponent implements OnInit {
  public noticia: Noticia;
  constructor(
    private _noticiasService: NoticiasService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
  }
  ngOnInit() {
    console.log('producto-detail.Component.ts cargado...');
    this.getProducto();
  }
  getProducto() {
    this._route.params.forEach((params: Params) => {
      const id = params['id'];

      this._noticiasService.getNoticia(id).subscribe(
        response => {
          this.noticia = response[0];
          console.log(this.noticia);

          // this._router.navigate(['/productos']);
        },
        error => {
          console.log(<any>error);
        }
      );
    });
  }
}

