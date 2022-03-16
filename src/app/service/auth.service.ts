import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuarioLogin } from '../model/UsuarioLogin';
import { Observable } from 'rxjs';
import { Usuario } from '../model/Usuario';
import { environment } from 'src/environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
  ) { }


  token = {
    headers: new HttpHeaders().set("Authorization", environment.token)
  }

  entrar(UsuarioLogin: UsuarioLogin): Observable<UsuarioLogin>{
    return this.http.post<UsuarioLogin>('https://projetolumens.herokuapp.com/usuarios/logar', UsuarioLogin)
  }

  cadastrar(usuario:Usuario): Observable<Usuario>{
    return this.http.post<Usuario>('https://projetolumens.herokuapp.com/usuarios/cadastrar', usuario)
  }
  atualizar(usuario: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>('https://projetolumens.herokuapp.com/usuarios/atualizar',usuario);
  }

  getByIdUser(id: number): Observable<Usuario>{
    return this.http.get<Usuario>(`https://projetolumens.herokuapp.com/usuarios/${id}`)
  }

  logado(){
    let ok: boolean = false;

    if(environment.token != ''){
      ok = true;
    }

    return ok
  }

  adm(){
    let ok: boolean = false
    
    if (environment.tipo == 'adm'){
      ok = true
    }
    
    return ok
  }

}
