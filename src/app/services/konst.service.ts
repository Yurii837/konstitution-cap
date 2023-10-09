import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KonstService {

  constructor() { }

  public konstArr = [
    {
      section: 'Преамбула',
      articles: [
        {
          number: 1,
          name: 'Ст1',
          text: 'Текст1',
          fav: false
        },
        {
          number: 2,
          name: 'Ст2',
          text: '22Текст2',
          fav: false
        },
        {
          number: 3,
          name: 'Ст3',
          text: 'Текст3',
          fav: false
        },
        {
          number: 4,
          name: 'Ст4',
          text: 'Текст4',
          fav: false
        },
      ]
    },
    {
      section: 'Розділ 2',
      articles: [
        {
          number: 5,
          name: 'Ст5',
          text: 'Текст5',
          fav: false
        },
        {
          number: 2,
          name: 'Ст6',
          text: 'Текст6',
          fav: false
        },
        {
          number: 3,
          name: 'Cт7',
          text: 'Текст7',
          fav: false
        },
        {
          number: 4,
          name: 'Ст8',
          text: 'Текст8',
          fav: false
        },
      ]
    }
  ]
}
