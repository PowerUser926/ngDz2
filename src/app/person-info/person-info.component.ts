import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';
import { PersonInfoModel } from '../shared/person-info.model';

@Component({
  selector: 'app-person-info',
  templateUrl: './person-info.component.html',
  styleUrls: ['./person-info.component.css'],
})
export class PersonInfoComponent implements OnInit {
  person!: PersonInfoModel;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.person = { ...this.dataService.personInfo };
  }
}
