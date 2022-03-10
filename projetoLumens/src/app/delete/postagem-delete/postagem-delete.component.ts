import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Postagem } from 'src/app/model/Postagem';
import { PostagemService } from 'src/app/service/postagem.service';
import { environment } from 'src/environments/environment.prod';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-postagem-delete',
  templateUrl: './postagem-delete.component.html',
  styleUrls: ['./postagem-delete.component.css']
})
export class PostagemDeleteComponent implements OnInit {

  
  postagem: Postagem = new Postagem()
  IdPost: number

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private postagemService: PostagemService
  ) { }

   ngOnInit(){

    window.scroll(0,0)
    
    if(environment.token == ''){
      this.router.navigate(['/entrar'])
    }

    this.IdPost = this.route.snapshot.params['id']
    this.findByIdPostagem(this.IdPost)
    
  }

  findByIdPostagem(id:number){
    this.postagemService.getByIdPostagem(id).subscribe((resp: Postagem)=> {
      this.postagem = resp
    })
  }

  apagar(){
    this.postagemService.deletePostagem(this.IdPost).subscribe(()=>{
    
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Postagem apagada com sucesso!',
        showConfirmButton: false,
        timer: 1500
      })
      this.router.navigate(['/anuncios'])
    })
  }

}
