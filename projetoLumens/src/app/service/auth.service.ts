import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuarioLogin } from '../model/UsuarioLogin';
import { Observable } from 'rxjs';
import { Usuario } from '../model/Usuario';
import { environment } from 'src/environments/environment.prod';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
  ) { }


  token = {
    headers: new HttpHeaders().set("authorization", environment.token)
  }

  entrar(UsuarioLogin: UsuarioLogin): Observable<UsuarioLogin>{
    return this.http.post<UsuarioLogin>('http://localhost:8080/usuarios/logar', UsuarioLogin)
  }

  cadastrar(usuario:Usuario): Observable<Usuario>{
    return this.http.post<Usuario>('http://localhost:8080/usuarios/cadastrar', usuario)
  }
  atualizar(usuario: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>('http://localhost:8080/usuarios/atualizar',usuario);
  }

  getByIdUser(id: number): Observable<Usuario>{
    return this.http.get<Usuario>(`http://localhost:8080/usuarios${id}`)
  }

  logado(){
    let ok: boolean = false;

    if(environment.token != ''){
      ok = true;
    }

    return ok
  }


}
