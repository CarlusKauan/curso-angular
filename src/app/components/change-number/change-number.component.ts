import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-change-number',
  templateUrl: './change-number.component.html',
  styleUrls: ['./change-number.component.css']
})
export class ChangeNumberComponent implements OnInit {

  // emissão de evento
  @Output() changeNumber: EventEmitter<any> = new EventEmitter()

  handleClick(): void {
    // emitindo evento
    this.changeNumber.emit();
  }
  constructor() { }

  ngOnInit(): void {
  }

}
