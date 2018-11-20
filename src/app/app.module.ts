import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { HeaderComponent } from './header/header.component';
import { SkillsComponent } from './skills/skills.component';
import { WorkListComponent } from './work-list/work-list.component';
import { HomeComponent } from './home/home.component';
import { SideTabComponent } from './side-tab/side-tab.component';
import { FooterComponent } from './footer/footer.component';
import { ProjectViewerComponent } from './project-viewer/project-viewer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LandingComponent,
    HeaderComponent,
    SkillsComponent,
    WorkListComponent,
    SideTabComponent,
    FooterComponent,
    ProjectViewerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'project/:projectName',
        component: ProjectViewerComponent
      }
    ])
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule {}
