import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {

  // list-array
  animals = [
    {name: "Thor", type: "Dog"},
    {name: "Naninha", type: "Cat"},
    {name: "Mel", type: "Dog"},
    {name: "Turquesa", type: "Cat"}
  ];

  animes = [
    { name: 'One Piece', price: 20 },
    { name: 'Naruto', price: 50 },
    { name: 'Dragon Ball', price: 10 }
  ];

  techs = [
    { name: 'Angular', made: 'Google'},
    { name: 'TypeScript', made: 'Microsoft'},
    { name: 'React', made: 'Facebook'},
    { name: 'Java', made: 'Microsystem'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
