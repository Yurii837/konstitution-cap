import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KonstService {

  constructor() { }

  public articles = [
    {
      number: 1,
      name: 'A',
      text: '111',
      fav: false
    },
    {
      number: 2,
      name: 'B',
      text: '222',
      fav: false
    },
    {
      number: 3,
      name: 'C',
      text: '333',
      fav: false
    },
    {
      number: 4,
      name: 'D',
      text: '444',
      fav: false
    },
  ]
}
