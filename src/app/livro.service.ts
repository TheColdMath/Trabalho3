import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Livro } from './model/livro';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class LivroService {

  private urlLivro = 'http://192.168.137.13:8080/livro';

  constructor(

    private http:HttpClient
  ) { }

  salvar (livro : Livro) : Observable<Livro> {
    return this.http.post<Livro>(this.urlLivro, livro);

  }

  buscarTodos(): Observable<Array<Livro>>{
    return this.http.get<Array<Livro>>(this.urlLivro);
  }
}
