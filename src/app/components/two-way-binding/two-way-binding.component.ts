import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent implements OnInit {

  name: string = ''
  team: string = ''

  info(): void {
    console.log('Nick: ' + this.name);
    console.log('Team: ' + this.team);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
