import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { UsuarioLogin } from '../model/UsuarioLogin';
import { AuthService } from '../service/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css']
})
export class EntrarComponent implements OnInit {

  usuarioLogin:  UsuarioLogin = new UsuarioLogin()

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0,0)
  }

  entrar(){
    this.auth.entrar(this.usuarioLogin).subscribe((resp: UsuarioLogin)=>{
      this.usuarioLogin = resp

      environment.token = this.usuarioLogin.token
      environment.nomeCompleto = this.usuarioLogin.nomeCompleto
      environment.foto = this.usuarioLogin.foto
      environment.id = this.usuarioLogin.id

      console.log(environment.token)
      console.log(environment.nomeCompleto)
      console.log(environment.foto)
      console.log(environment.id)

      this.router.navigate(['/anuncios'])
    }, erro => {
      if(erro.status != 200){
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Usuário ou senha estão incorretos!',
          showConfirmButton: false,
          timer: 1500
        })
      }
    })
  }

}