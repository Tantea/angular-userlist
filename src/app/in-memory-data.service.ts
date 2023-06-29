import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      {
        id: 11,
        firstName: 'Terrance',
        lastName: 'Orta',
        email: 'terrance@mail.com',
        street: 'Marion Road',
        city: 'Washington',
        country: 'USA',
        zipcode: '774-2217',
        photo:
          'https://i.pravatar.cc/150?img=51',
      },
      {
        id: 12,
        firstName: 'Richard',
        lastName: 'Mahoney',
        email: 'richard@mail.com',
        street: 'Lyon Street',
        city: 'New-York',
        country: 'USA',
        zipcode: '426-2869',
        photo:
          'https://i.pravatar.cc/150?img=54',
      },
      {
        id: 13,
        firstName: 'Donna',
        lastName: 'Price',
        email: 'donna@mail.com',
        street: 'Brigly',
        city: 'London',
        country: 'UK',
        zipcode: '866-2817',
        photo:
          'https://i.pravatar.cc/150?img=44',
      },
      {
        id: 14,
        firstName:'Michail',
        lastName: 'Janders',
        email: 'michail@mail.com',
        street: 'Olenki',
        city: 'Warsaw',
        country: 'Poland',
        zipcode: '901-748',
        photo:
          'https://i.pravatar.cc/150?img=14',
      },
      {
        id: 15,
        firstName: 'Dorothy',
        lastName: 'Spencer',
        email: 'dorothy@mail.com',
        street: 'Timberly',
        city: 'Porto',
        country: 'Canada',
        zipcode: '394-9254',
        photo:
          'https://i.pravatar.cc/150?img=49',
      },
      {
        id: 16,
        firstName: 'Anny',
        lastName: 'Adams',
        email: 'tadamse@mail.com',
        street: 'Hamilton',
        city: 'Main',
        country: 'Uk',
        zipcode: '575-394',
        photo:
          'https://i.pravatar.cc/150?img=15',
      },
      {
        id: 17,
        firstName: 'Anndy',
        lastName: 'Far',
        email: 'farce@mail.com',
        street: 'Laysy',
        city: 'Liverpool',
        country: 'Uk',
        zipcode: '573-354',
        photo:
          'https://i.pravatar.cc/150?img=18',
      },
      {
        id: 18,
        firstName: 'Canny',
        lastName: 'Moore',
        email: 'moore@mail.com',
        street: 'Hamilton',
        city: 'Rochester',
        country: 'Uk',
        zipcode: '573-394',
        photo:
          'https://i.pravatar.cc/150?img=19',
      },
      {
        id: 19,
        firstName: 'Tan',
        lastName: 'Saw',
        email: 'saw@mail.com',
        street: 'Hamilton',
        city: 'Rochester',
        country: 'Uk',
        zipcode: '573-394',
        photo:
          'https://i.pravatar.cc/150?img=21',
      },
      {
        id: 20,
        firstName: 'Tonny',
        lastName: 'Adams',
        email: 'terrance@mail.com',
        street: 'Hamilton',
        city: 'Rochester',
        country: 'Uk',
        zipcode: '573-394',
        photo:
          'https://i.pravatar.cc/150?img=47',
      },
      {
        id: 21,
        firstName: 'Marry',
        lastName: 'Fox',
        email: 'terrance@mail.com',
        street: 'Hamilton',
        city: 'Rochester',
        country: 'Uk',
        zipcode: '573-394',
        photo:
          'https://i.pravatar.cc/150?img=34',
      },
      {
        id: 22,
        firstName: 'Wandy',
        lastName: 'Cher',
        email: 'terrance@mail.com',
        street: 'Hamilton',
        city: 'Rochester',
        country: 'Uk',
        zipcode: '573-394',
        photo:
          'https://i.pravatar.cc/150?img=61',
      },
      {
        id: 23,
        firstName: 'Katy',
        lastName: 'Smith',
        email: 'terrance@mail.com',
        street: 'Hamilton',
        city: 'Rochester',
        country: 'Uk',
        zipcode: '573-394',
        photo:
          'https://i.pravatar.cc/150?img=29',
      },
      {
        id: 24,
        firstName: 'Adam',
        lastName: 'Mith',
        email: 'terrance@mail.com',
        street: 'Hamilton',
        city: 'Rochester',
        country: 'Uk',
        zipcode: '573-394',
        photo:
          'https://i.pravatar.cc/150?img=31',
      },
      {
        id: 25,
        firstName: 'Andy',
        lastName: 'Fir',
        email: 'terrance@mail.com',
        street: 'Hamilton',
        city: 'Rochester',
        country: 'Uk',
        zipcode: '573-394',
        photo:
          'https://i.pravatar.cc/150?img=34',
      },
      {
        id: 26,
        firstName: 'Mika',
        lastName: 'Kolm',
        email: 'terrance@mail.com',
        street: 'Hamilton',
        city: 'Rochester',
        country: 'Uk',
        zipcode: '573-394',
        photo:
          'https://i.pravatar.cc/150?img=35',
      },
      {
        id: 27,
        firstName: 'Ilya',
        lastName: 'Shohn',
        email: 'terrance@mail.com',
        street: 'Hamilton',
        city: 'Rochester',
        country: 'Uk',
        zipcode: '573-394',
        photo:
          'https://i.pravatar.cc/150?img=65',
      },
      {
        id: 28,
        firstName: 'Paul',
        lastName: 'Duke',
        email: 'terrance@mail.com',
        street: 'Hamilton',
        city: 'Rochester',
        country: 'Uk',
        zipcode: '573-394',
        photo:
          'https://i.pravatar.cc/150?img=53',
      },
      {
        id: 29,
        firstName: 'Daisy',
        lastName: 'Camin',
        email: 'terrance@mail.com',
        street: 'Hamilton',
        city: 'Rochester',
        country: 'Uk',
        zipcode: '573-394',
        photo:
          'https://i.pravatar.cc/150?img=55',
      },
      {
        id: 30,
        firstName: 'Shon',
        lastName: 'Homms',
        email: 'terrance@mail.com',
        street: 'Hamilton',
        city: 'Rochester',
        country: 'Uk',
        zipcode: '573-394',
        photo:
          'https://i.pravatar.cc/150?img=57',
      },
    ];
    return {heroes};
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
