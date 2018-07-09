import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Response } from '@angular/http';
import { Usuario } from './model/usuario';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable()
export class UsuarioService {

  private urlUsuario = 'http://192.168.137.13:8080/usuario';

  constructor(

    private http:HttpClient
  ) { }

  salvar (usuario : Usuario) : Observable<Usuario> {
    return this.http.post<Usuario>(this.urlUsuario, usuario);

  }

}
