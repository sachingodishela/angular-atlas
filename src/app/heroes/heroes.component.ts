import { HeroService } from '../hero.service';
import { Component } from '@angular/core';
import { Hero } from '../hero';
import { Location } from '@angular/common';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  providers: [HeroService]
})

export class HeroesComponent {
  constructor(
    private heroService: HeroService,
    private messageService: MessageService,
    private location: Location
  ) { }

  heroes: Hero[] = []

  fetchHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => {
      this.heroes = heroes
    })
  }

  ngOnInit(): void {
    this.fetchHeroes();
  }
}
