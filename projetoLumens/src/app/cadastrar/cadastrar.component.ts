import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  usuario: Usuario = new Usuario()
  senha: string
  confirmarSenha :string;
  tipoUsuarios: string;

  constructor(
    private authService: AuthService,//tudo que coloca dentro do construtor é injeção de dependência
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0,0)
  }

  confirmSenha(event: any) {
    this.confirmarSenha = event.target.value
  }

  tipoUsuario(event: any){
    this.tipoUsuarios = event.target.value
  }

  cadastrar(){
    this.usuario.tipo = this.tipoUsuarios

    if(this.usuario.senha != this.confirmarSenha){
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'As senhas estão incorretas!',
        showConfirmButton: false,
        timer: 1500
      })
    }else{
      this.authService.cadastrar(this.usuario).subscribe((resp:Usuario)=>{
        this.usuario = resp
        this.router.navigate(['/entrar'])
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Usuário cadastrado com sucesso!',
          showConfirmButton: false,
          timer: 1500
        })
      })

    }

  }
}
