import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {

    if(environment.token == ''){
/*
      alert('Sua seção expirou, faça o login novamente!')
*/
      
    this.router.navigate(['/entrar'])
    }

  }

<<<<<<< HEAD
=======
  anuncios(){
    this.router.navigate(['/anuncios'])
  }
>>>>>>> ff389466cb1f78a6e4b285eb7ecfcbcfcd0646e0
  

}