import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { HeaderComponent } from './header/header.component';
import { SkillsComponent } from './skills/skills.component';
import { WorkListComponent } from './work-list/work-list.component';
import { HomeComponent } from './home/home.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LandingComponent,
    HeaderComponent,
    SkillsComponent,
    WorkListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      }
    ])
  ],
  providers: [
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
