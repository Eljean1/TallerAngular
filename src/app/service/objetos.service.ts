import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GlobalService} from '../service/global.service';

@Injectable()
export class ObjetosService {
  public url: string;
  constructor(
    public _http: HttpClient,
    private _url: GlobalService,
  ) {
    this.url = _url.getUrl();
  }
  getObjetos() {
    console.log(this.url);
    console.log(this.url);
    return this._http.get(this.url + '/photos');
  }
  getObjeto(id) {
    console.log(id);
    return this._http.get(this.url + '/photos/' + id);
  }

}
