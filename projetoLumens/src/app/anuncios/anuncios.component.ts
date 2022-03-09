import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Categoria } from '../model/Categoria';
import { Postagem } from '../model/Postagem';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';
import { CategoriaService } from '../service/categoria.service';
import { PostagemService } from '../service/postagem.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-anuncios',
  templateUrl: './anuncios.component.html',
  styleUrls: ['./anuncios.component.css']
})
export class AnunciosComponent implements OnInit {
  nome = environment.nomeCompleto
  foto = environment.foto
  id = environment.id
  tituloPost: string
  nomeCategoria: string
  postagem: Postagem = new Postagem()
  categoria: Categoria = new Categoria()
  idCategoria: number
  listaPostagens: Postagem[]
  listaCategorias: Categoria[]
  

  usuario: Usuario = new Usuario()
  idUser = environment.id

  key = 'data'
  reverse = true

  constructor(
    private router: Router,
    private postagemService: PostagemService,
    private categoriaService: CategoriaService,
    public authService: AuthService

  ) { }

  ngOnInit() {
    window.scroll(0,0) /* */

    this.getAllCategorias()
    this.getAllPostagens()
  
  }

  
  logado(){
    if(environment.token != ''){
      return true
    }
    return false
  }

  getAllPostagens() {
    this.postagemService.getAllPostagens().subscribe((resp: Postagem[]) => {
      this.listaPostagens = resp
    })
  }
  findByIdUsuario() {
    this.authService.getByIdUser(this.idUser).subscribe((resp: Usuario) => {
      this.usuario = resp
    })
  }

  getAllCategorias(){
    this.categoriaService.getAllCategoria().subscribe((resp: Categoria[]) => {
      this.listaCategorias = resp
    })
  }

  findByIdCategoria(){
    this.categoriaService.getByIdCategoria(this.idCategoria).subscribe((resp: Categoria) => {
      this.categoria = resp
    })
  }
  findByTituloPostagem(){

    if(this.tituloPost ==''){
      this.getAllPostagens()

    } else{
      this.postagemService.getByTituloPostagem(this.tituloPost).subscribe((resp: Postagem[])=>{
        this.listaPostagens = resp
      })
    }
  }

  findByNomeCategoria(){
    if(this.nomeCategoria == ''){
      this.getAllCategorias()
    }else{
      this.categoriaService.getByNomeCategoria(this.nomeCategoria).subscribe((resp: Categoria[]) =>{
      })
    }
  }


  publicar() {
    this.categoria.id = this.idCategoria
    this.postagem.categoria = this.categoria

    this.usuario.id = this.idUser
    this.postagem.usuario = this.usuario

    this.postagemService.postPostagem(this.postagem).subscribe((resp: Postagem) => {
      this.postagem = resp
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Postagem anunciada com sucesso!',
        showConfirmButton: false,
        timer: 1500
      })
      this.postagem = new Postagem()
      this.getAllPostagens()
    })
  }
  sair(){

    this.router.navigate(['/entrar'])
    environment.token = ''
    environment.nomeCompleto = ''
    environment.foto = ''
    environment.tipo = ''
    environment.id = 0
    
    
    }
    contato(){
      this.router.navigate(['/contato'])
    } 
}