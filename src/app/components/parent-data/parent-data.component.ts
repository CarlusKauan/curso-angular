import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-parent-data',
  templateUrl: './parent-data.component.html',
  styleUrls: ['./parent-data.component.css']
})
export class ParentDataComponent implements OnInit {

  @Input() name: String = '';
  @Input() age: any = '';
  @Input() userData!: {email: string, role: string};
  @Input() status = '';

  constructor() { }

  ngOnInit(): void {
  }

}
