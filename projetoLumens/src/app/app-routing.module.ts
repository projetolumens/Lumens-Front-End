import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnunciosComponent } from './anuncios/anuncios.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { ContatoComponent } from './contato/contato.component';
<<<<<<< HEAD
=======
import { PostagemDeleteComponent } from './delete/postagem-delete/postagem-delete.component';
import { PostagemEditComponent } from './edit/postagem-edit/postagem-edit.component';
>>>>>>> ff389466cb1f78a6e4b285eb7ecfcbcfcd0646e0
import { EntrarComponent } from './entrar/entrar.component';
import { InicioComponent } from './inicio/inicio.component';


const routes: Routes = [
  {path:'', redirectTo: 'entrar', pathMatch: 'full'},
  {path:'entrar', component: EntrarComponent},
  {path:'cadastrar', component: CadastrarComponent},
  {path:'inicio', component:InicioComponent},
<<<<<<< HEAD
  {path:'contato', component: ContatoComponent}
=======
  {path:'contato', component: ContatoComponent},
  {path:'anuncios', component:AnunciosComponent},
>>>>>>> ff389466cb1f78a6e4b285eb7ecfcbcfcd0646e0

  {path:'postagem-delete/:id', component: PostagemDeleteComponent},
  {path:'postagem-edit/:id', component: PostagemEditComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }