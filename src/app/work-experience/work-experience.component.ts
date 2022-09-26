import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';
import { WorkExperienceService } from '../shared/work-experience.service';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css'],
})
export class WorkExperienceComponent implements OnInit {
  work_experience: string[] = [];

  constructor(private workExperienceService: WorkExperienceService) {}

  ngOnInit(): void {
    this.work_experience = this.workExperienceService.work_experience.slice();
  }
}
