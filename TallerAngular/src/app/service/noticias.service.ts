import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GlobalService} from '../service/global.service';

@Injectable()
export class NoticiasService {
  public url: string;
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

}
