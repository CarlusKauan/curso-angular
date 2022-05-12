import { Component, OnInit } from '@angular/core';
import { Anime } from 'src/app/Anime';
// import service
import { ListService } from 'src/app/service/list.service';

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

  animes: Anime[] = [
    { name: 'One Piece', price: 20, age: 50 },
    { name: 'Naruto', price: 50, age: 20 },
    { name: 'Dragon Ball', price: 10, age: 70 }
  ];

  techs = [
    { name: 'Angular', made: 'Google'},
    { name: 'TypeScript', made: 'Microsoft'},
    { name: 'React', made: 'Facebook'},
    { name: 'Java', made: 'Microsystem'}
  ]

  // instanciando o service
  constructor(private listService: ListService) {}

  ngOnInit(): void {
  }

  animeAge = ''

  showAge(anime: Anime): void{
    this.animeAge = `O anime ${anime.name} tem ${anime.age} anos`;
  }

  removeAnime(anime: Anime): void {
    console.log('Removendo Anime..')
    this.animes = this.listService.remove(this.animes, anime);
  }

  adicionarAnime(anime: Anime): void {
    console.log('Adicionar anime')
    this.listService.adicionar(this.animes, anime);
  }

}
