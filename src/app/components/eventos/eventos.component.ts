import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  show: boolean = true;
  hide: string = "Nenhuma mensagem"

  showMessagem(): void {
    // para exibir e esconder !
    this.show = !this.show;
  };

  constructor() { }

  ngOnInit(): void {
  }

}
