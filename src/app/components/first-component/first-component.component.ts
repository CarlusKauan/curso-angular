import { Component, OnInit } from '@angular/core';

// Decorator -> meta configuração do componente !
@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {
  // exportando uma classe que é acessivel via-template
  name: string = "Carlos";
  number: Number = 12;
  job = "Angular Developer";
  hobbies = ['Caminhar', 'Ler', 'Orar'];
  car =  {
    name: 'Civic',
    year: 2009
  };

  // inicia as propriedades no angular, e fazem DI
  constructor() { }

  ngOnInit(): void {
  }

}
