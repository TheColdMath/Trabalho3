import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocacaoModel } from './model/locacaoModel';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { Livro } from './model/livro';

@Injectable()
export class LocacaoService {

  private urlLocacao = 'http://192.168.137.13:8080/locacao';

  constructor(

    
    private http:HttpClient
  ) { }

  salvar (locacao : LocacaoModel) : Observable<LocacaoModel> {
    return this.http.post<LocacaoModel>(this.urlLocacao, locacao);

  }
}
