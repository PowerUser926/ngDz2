import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PersonInfoComponent } from './person-info/person-info.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { SkillsComponent } from './skills/skills.component';
import { LinksComponent } from './links/links.component';

@NgModule({
  declarations: [AppComponent, PersonInfoComponent, WorkExperienceComponent, SkillsComponent, LinksComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
