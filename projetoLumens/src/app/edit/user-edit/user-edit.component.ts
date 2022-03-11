import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/model/Usuario';
import { AuthService } from 'src/app/service/auth.service';
import { environment } from 'src/environments/environment.prod';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  usuario: Usuario = new Usuario()
  idUser: number
  confirmarSenha :string;
  tipoUsuarios: string;


  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    window.scroll(0,0)

    if(environment.token == ''){
      this.router.navigate(['/entrar'])
    }

    this.idUser = this.route.snapshot.params['id']
    this.findByIdUsuario(this.idUser)
  }

  confirmSenha(event: any) {
    this.confirmarSenha = event.target.value
  }

  tipoUsuario(event: any){
    this.tipoUsuarios = event.target.value
  }

  atualizar(){

    this.usuario.tipo = this.tipoUsuarios

    if (this.usuario.senha != this.confirmarSenha) {
      Swal.fire({
        position: 'center',
        icon: 'info',
        title: 'As senhas estão diferentes.',
        showConfirmButton: false,
        timer: 1500
      })
    } else {

      this.usuario.postagem = [];

      console.log(JSON.stringify(this.usuario))

      this.authService.atualizar(this.usuario).subscribe((resp: Usuario) => {
        this.usuario = resp
        this.router.navigate(['/anuncios'])
        Swal.fire({
          position: 'center',
          icon: 'info',
          title: 'Usuário atualizado com sucesso! Faça o login novamente.',
          showConfirmButton: false,
          timer: 1500
        })
        environment.token = ''
        environment.nomeCompleto = ''
        environment.foto = ''
        environment.tipo = ''
        environment.id = 0



        this.router.navigate(['/entrar'])
      })
    }
  }



  findByIdUsuario(id: number){
    this.authService.getByIdUser(id).subscribe((resp: Usuario)=>{
      this.usuario = resp
    })
  }

}
