import { Injectable } from '@angular/core';
import { OnInit } from '@angular/core';

@Injectable()
export class GlobalService implements OnInit {
  constructor() { }
  //private url = 'https://newsapi.org/v2/top-headlines?sources=national-geographic&apiKey=ed6bb68169694928beada76957626d34&callback=?';
  private url = 'https://sheetsu.com/apis/v1.0su/c5fbb990d30b';
  ngOnInit() {
    console.log(this.url);
  }
  getUrl() {
    return this.url;
  }
}
