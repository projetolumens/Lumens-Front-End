import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  formContato : FormGroup;

  constructor() { }

  ngOnInit() {
    
    this.formContato = new FormGroup({
      'name' : new FormControl(null, Validators.required),
      'email' : new FormControl(null, [Validators.required, Validators.email]),
      'message' : new FormControl(null, [Validators.required, Validators.minLength(10)])
    });
    }
  
    clicksub() {
      console.log(this.formContato.value);
      this.formContato.reset();
    }
    get name() {
      return this.formContato.get('name');
    }
    get email() {
      return this.formContato.get('email');
    }
    get message() {
      return this.formContato.get('message');
    }
  
  }
