import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-viewer',
  templateUrl: './project-viewer.component.html',
  styleUrls: ['./project-viewer.component.scss']
})
export class ProjectViewerComponent implements OnInit {
  projectDetails = {
    convertfly: {
      id: 'convertfly',
      title: 'Convertfly',
      heroImage: '/assets/images/convertfly-home.png',
      // background: '#354285'
      background: '#e61758'
    },
    visualgator: {
      id: 'visaulgator',
      title: 'VisualGator',
      heroImage: 'assets/images/Editor.png',
      background: '#253756db',
      class: 'img-shadow'
    },
    skillsalpha: {
      id: 'skillsalpha',
      title: 'Skills Alpha',
      heroImage: 'assets/images/Editor.png',
      background: '#253756db',
      class: 'img-shadow'
    },
    yoola: {
      id: 'yoola',
      title: 'Yoola',
      heroImage: 'assets/images/Editor.png',
      background: '#253756db',
      class: 'img-shadow'
    }
  };
  project;
  projectName;

  constructor(private titleService: Title, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.projectName = params.get('projectName');
      this.titleService.setTitle(this.projectDetails[this.projectName].title);
      this.project = this.projectDetails[this.projectName];
    });
  }
}
