import { Component } from '@angular/core';

import { DataService } from './shared/data.service';
import { SkillsService } from './shared/skills.service';
import { WorkExperienceService } from './shared/work-experience.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService, SkillsService, WorkExperienceService],
})
export class AppComponent {}
