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
<<<<<<< HEAD
=======
import { PostagemDeleteComponent } from './delete/postagem-delete/postagem-delete.component';
import { EditComponent } from './edit/edit.component';
import { CategoriaComponent } from './categoria/categoria/categoria.component';
import { PostagemEditComponent } from './edit/postagem-edit/postagem-edit.component';
import { AnunciosComponent } from './anuncios/anuncios.component';



>>>>>>> ff389466cb1f78a6e4b285eb7ecfcbcfcd0646e0



@NgModule({
  declarations: [
    AppComponent,
    RodapeComponent,
    EntrarComponent,
    CadastrarComponent,
    InicioComponent,
    ContatoComponent,
<<<<<<< HEAD
=======
    CategoriaComponent,
    AnunciosComponent, 
    PostagemDeleteComponent, 
    PostagemEditComponent

  

>>>>>>> ff389466cb1f78a6e4b285eb7ecfcbcfcd0646e0
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }