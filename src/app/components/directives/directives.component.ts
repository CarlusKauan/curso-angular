import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  // definindo props dinamicos
  size = 25;
  font= "Arial";
  color = 'tomato';
  upper = 'uppercase';

  // adicionar classes em uma array
  classes = ['green-title', 'small-title']

  // adicionando string que com [ngClass]="underline", vira uma class
  underline = 'underline-title'

  constructor() { }

  ngOnInit(): void {
  }

}
