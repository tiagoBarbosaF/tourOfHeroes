import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Legolas' },
      { id: 12, name: 'Araton' },
      { id: 13, name: 'Dr Drue' },
      { id: 14, name: 'May' },
      { id: 15, name: 'Ayla' },
      { id: 16, name: 'Drumpete' },
      { id: 17, name: 'Tristan' },
      { id: 18, name: 'Thyrael' },
      { id: 19, name: 'Gondor' },
      { id: 20, name: 'Arthuria' },
    ];
    return { heroes };
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0
      ? Math.max(...heroes.map((hero) => hero.id)) + 1
      : 11;
  }
  constructor() {}
}
