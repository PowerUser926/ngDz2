import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WorkExperienceService {
  constructor() {}

  work_experience: string[] = [
    'Assistant accountant',
    'Call center operator',
    'Sales manager',
    'Front-End developer',
  ];
}
