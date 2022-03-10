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
window.scroll(0,0)

  }

  anuncios(){
    this.router.navigate(['/anuncios'])
  }
  
  subir(){
    document.body.scrollTop = document.documentElement.scrollTop = 0;
}
}