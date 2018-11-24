import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

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
      background: '#354285'
      // background: '#e61758'
    },
    visualgator: {
      id: 'visaulgator',
      title: 'VisualGator',
      heroImage: 'assets/images/Editor.png',
      background: '#253756db',
      imgClass: 'img-shadow',
      imgContainer: 'pad'
    },
    skillsalpha: {
      id: 'skillsalpha',
      title: 'Skills Alpha',
      heroImage: 'assets/images/cover-desktop.png',
      background: '#283e99',
      imgClass: 'img-shadow',
      imgContainer: 'pad'
    },
    yoola: {
      id: 'yoola',
      title: 'Yoola',
      heroImage: 'assets/images/cover.png',
      background: '#f15475',
      imgClass: 'img-shadow',
      imgContainer: 'pad'
    }
  };
  project;
  projectName;

  constructor(
    private titleService: Title,
    private route: ActivatedRoute,
    private _location: Location,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.projectName = params.get('projectName');
      if (this.projectDetails.hasOwnProperty(this.projectName)) {
        this.titleService.setTitle(this.projectDetails[this.projectName].title);
        this.project = this.projectDetails[this.projectName];
      } else {
        this.router.navigate(['/']);
      }
    });
  }

  backClicked() {
    this._location.back();
  }
}
