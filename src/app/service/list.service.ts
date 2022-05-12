import { Injectable } from '@angular/core';

import { Anime } from '../Anime';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor() { }

  remove(animes: Anime[], anime: Anime){
    return animes.filter((a) => anime.name !== a.name)
  }

  adicionar(animes: Anime[], anime: Anime){
    return animes.push({name: 'Kimetsu', price: 20, age: 10 })
  }
}
