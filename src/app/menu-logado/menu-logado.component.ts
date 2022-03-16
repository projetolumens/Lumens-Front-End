import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-menu-logado',
  templateUrl: './menu-logado.component.html',
  styleUrls: ['./menu-logado.component.css']
})
export class MenuLogadoComponent implements OnInit {
  nome = environment.nomeCompleto
  foto = environment.foto
  id = environment.id
  
  constructor(
    private router: Router,
    public auth : AuthService
  ) { }

  ngOnInit(){
  }

  sair(){

this.router.navigate(['/entrar'])
environment.token = ''
environment.nomeCompleto = ''
environment.foto = ''
environment.tipo = ''
environment.id = 0
}
}
