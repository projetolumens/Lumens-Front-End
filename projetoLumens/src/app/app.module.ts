import { HttpClientModule } from '@angular/common/http'; 
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { Observable } from 'rxjs';
import { AppComponent } from './app.component';
import { RodapeComponent } from './rodape/rodape.component';
import { EntrarComponent } from './entrar/entrar.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { InicioComponent } from './inicio/inicio.component';
import { ContatoComponent } from './contato/contato.component';
import { PostagemDeleteComponent } from './delete/postagem-delete/postagem-delete.component';
import { CategoriaComponent } from './categoria/categoria/categoria.component';
import { PostagemEditComponent } from './edit/postagem-edit/postagem-edit.component';
import { AnunciosComponent } from './anuncios/anuncios.component';
import { CategoriaDeleteComponent } from './delete/categoria-delete/categoria-delete.component';
import { OrderModule } from 'ngx-order-pipe';
import { UserEditComponent } from './edit/user-edit/user-edit.component';
import { MenuLogadoComponent } from './menu-logado/menu-logado.component';







@NgModule({
  declarations: [
    AppComponent,
    RodapeComponent,
    EntrarComponent,
    CadastrarComponent,
    InicioComponent,
    ContatoComponent,
    CategoriaComponent,
    AnunciosComponent, 
    PostagemDeleteComponent, 
    PostagemEditComponent,
    CategoriaDeleteComponent,
    UserEditComponent,
    MenuLogadoComponent,
   
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    OrderModule
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }