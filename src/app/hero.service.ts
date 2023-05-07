import { Injectable } from '@angular/core';
import { MessageService } from './message.service';
import { HttpClient } from '@angular/common/http';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class HeroService {
  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES)
    this.messageService.add('HeroService: fetched heroes')
    return heroes
  }

  getHero(heroId: Number): Observable<Hero | undefined> {
    const hero = of(HEROES.find(hero => hero.id === heroId))
    this.messageService.add(`HeroService: fetched hero with id ${heroId}`)
    return hero
  }



  constructor(private messageService: MessageService) { }
}
