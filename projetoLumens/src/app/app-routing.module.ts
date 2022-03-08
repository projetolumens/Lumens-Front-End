import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnunciosComponent } from './anuncios/anuncios.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { ContatoComponent } from './contato/contato.component';
import { PostagemDeleteComponent } from './delete/postagem-delete/postagem-delete.component';
import { EntrarComponent } from './entrar/entrar.component';
import { InicioComponent } from './inicio/inicio.component';


const routes: Routes = [
  {path:'', redirectTo: 'entrar', pathMatch: 'full'},
  {path:'entrar', component: EntrarComponent},
  {path:'cadastrar', component: CadastrarComponent},
  {path:'inicio', component:InicioComponent},
  {path:'contato', component: ContatoComponent},
  {path:'anuncios', component:AnunciosComponent},

  {path:'postagem-delete/:id', component: PostagemDeleteComponent},
  {path:'postagem-edit/:id', component: PostagemEditComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }