import { Injectable } from '@angular/core';
import { PersonInfoModel } from './person-info.model';
import { LinkModel } from './link.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  personInfo: PersonInfoModel = {
    first_name: 'Ihor',
    last_name: 'Horbulin',
    birth_date: new Date('1998-09-21'),
    phone: '098-828-38-30',
    address: 'Ukraine, Kyiv',
    salary: 100000,
    photo: 'assets/my_photo.jpg',
  };

  certificates: string[] = [];

  links: LinkModel[] = [
    { title: 'GitHub', url: 'https://github.com/PowerUser926' },
    {
      title: 'LinkedIn',
      url: 'https://www.linkedin.com/in/%D1%96%D0%B3%D0%BE%D1%80-%D0%B3%D0%BE%D1%80%D0%B1%D1%83%D0%BB%D1%96%D0%BD-9557bb243/',
    },
  ];
}
