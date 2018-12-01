import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { HeaderComponent } from './header/header.component';
import { SkillsComponent } from './skills/skills.component';
import { WorkListComponent } from './work-list/work-list.component';
import { HomeComponent } from './home/home.component';
import { SideTabComponent } from './side-tab/side-tab.component';
import { FooterComponent } from './footer/footer.component';
import { ProjectViewerComponent } from './project-viewer/project-viewer.component';
import { FadeInDirective } from './directives/fade-in.directive';

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
    ProjectViewerComponent,
    FadeInDirective
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      [
        {
          path: '',
          component: HomeComponent,
          data: {
            state: 'home'
          }
        },
        {
          path: 'project/:projectName',
          component: ProjectViewerComponent,
          data: {
            state: 'projectView'
          }
        }
      ],
      { scrollPositionRestoration: 'enabled' }
    )
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule {}
