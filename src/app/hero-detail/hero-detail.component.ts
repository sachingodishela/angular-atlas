import { Component, Input } from '@angular/core';
import { Hero } from '../hero';
import { Location } from '@angular/common';
import { HeroService } from '../hero.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})

export class HeroDetailComponent {
  constructor(
    private heroService: HeroService,
    private location: Location,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getHero()
  }

  getHero(): void {
    const heroId = Number(this.route.snapshot.paramMap.get('id'))
    this.heroService.getHero(heroId).subscribe(hero => {
      this.hero = hero
    })
  }

  @Input() hero?: Hero

  goBack(): void {
    this.location.back()
  }
}
