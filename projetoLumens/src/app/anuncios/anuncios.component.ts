import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Categoria } from '../model/Categoria';
import { Postagem } from '../model/Postagem';
import { Produto } from '../model/Produto';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';
import { CategoriaService } from '../service/categoria.service';
import { PostagemService } from '../service/postagem.service';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-anuncios',
  templateUrl: './anuncios.component.html',
  styleUrls: ['./anuncios.component.css']
})
export class AnunciosComponent implements OnInit {
  nome = environment.nomeCompleto
  foto = environment.foto
  id = environment.id

  produto: Produto = new Produto()
  postagem: Postagem = new Postagem()
  categoria: Categoria = new Categoria()


  idCategoria: number
  listaPostagens: Postagem[]
  listaCategorias: Categoria[]
  listaProdutos: Produto[]

  usuario: Usuario = new Usuario()
  idUser = environment.id

  constructor(
    private router: Router,
    private postagemService: PostagemService,
    private produtoService: ProdutoService,
    private categoriaService: CategoriaService,
    public authService: AuthService

  ) { }

  ngOnInit() {
    window.scroll(0,0) /* */

    this.getAllCategorias()
    this.getAllProdutos()
  
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

  getAllProdutos(){
    this.produtoService.getAllProdutos().subscribe((resp: Produto[]) => {
      this.listaProdutos = resp
    })
  }

  findByTituloProduto(titulo: string){
    this.produtoService.getByTituloProduto(titulo).subscribe((resp: Produto[]) => {
      this.listaProdutos = resp
      console.log(this.listaProdutos)
    })
  }

  findByIdCategoria(){
    this.categoriaService.getByIdCategoria(this.idCategoria).subscribe((resp: Categoria) => {
      this.categoria = resp
    })
  }

  publicar() {
    this.categoria.id = this.idCategoria
    this.postagem.categoria = this.categoria

    this.usuario.id = this.idUser
    this.postagem.usuario = this.usuario

    this.postagemService.postPostagem(this.postagem).subscribe((resp: Postagem) => {
      this.postagem = resp
      alert('Postagem anunciada com sucesso!')
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
    
}