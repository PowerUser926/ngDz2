import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';
import { LinkModel } from '../shared/link.model';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css'],
})
export class LinksComponent implements OnInit {
  links: LinkModel[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.links = this.dataService.links.slice();
  }
}
