import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SkillsService {
  constructor() {}

  skills: string[] = [
    'HTML',
    'CSS',
    'SASS',
    'JS',
    'TS',
    'Node.js',
    'Angular',
    'Bootstrap',
  ];
}
