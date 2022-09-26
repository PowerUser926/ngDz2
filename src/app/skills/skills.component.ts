import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';
import { SkillsService } from '../shared/skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  skills: string[] = [];
  certificates: string[] = [];

  constructor(
    private dataService: DataService,
    private skillsService: SkillsService
  ) {}

  ngOnInit(): void {
    this.skills = this.skillsService.skills.slice();
    this.certificates = this.dataService.certificates.slice();
  }
}
