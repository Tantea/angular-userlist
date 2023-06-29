import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { faker } from '@faker-js/faker';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css']
})
export class HeroesListComponent  {

  heroes: Hero[] = [];

  constructor(public heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }

  add(firstName: string, lastName: string, photo: string, email: string, zipcode: string, country: string, city: string, street: string): void {
    firstName = faker.person.firstName();
    lastName = faker.person.lastName();
    photo = faker.image.avatar();
    email = faker.internet.email();
    country = faker.location.country();
    city = faker.location.city();
    street = faker.location.street();
    zipcode = faker.location.zipCode();

    if (!firstName && !lastName) { return; }
    this.heroService.addHero({ firstName, lastName, photo, email, zipcode, country, city, street } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
  }
}
