import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-viewer',
  templateUrl: './project-viewer.component.html',
  styleUrls: ['./project-viewer.component.scss']
})
export class ProjectViewerComponent implements OnInit {
  projectDetails =
    {
      convertfly: {
        title: 'Convertfly',
        heroImage: '/assets/images/convertfly-home.png',
        background: '#354285'
      },
      visualgator: {
        title: 'VisualGator',
        heroImage: 'assets/images/Editor.png',
        background: '#253756db',
        class: 'img-shadow'
      },
      skillsalpha: {
        title: 'Skills Alpha',
        heroImage: 'assets/images/Editor.png',
        background: '#253756db',
        class: 'img-shadow'
      },
      yoola: {
        title: 'Yoola',
        heroImage: 'assets/images/Editor.png',
        background: '#253756db',
        class: 'img-shadow'
      }
    };
  project;
  projectName;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.projectName = params.get('projectName');
      this.project = this.projectDetails[this.projectName];
    });
  }
}
