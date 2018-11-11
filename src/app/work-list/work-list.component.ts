import { Component, OnInit, NgModule } from '@angular/core';
@Component({
  selector: 'work-list',
  templateUrl: './work-list.component.html',
  styleUrls: ['./work-list.component.scss']
})
export class WorkListComponent implements OnInit {
  workItems = [
    {
      title: 'Convertfly',
      img: '../../assets/images/convertfly-home.png'
    },
    {
      title: 'Visualgator',
      img: '../../assets/images/Editor.png',
      imgClass:'img-shadow'
    },
    {
      title: 'SkillsAlpha',
      img: '../../assets/images/skillsalpha.png',
      imgClass: 'img-shadow'
    },
    {
      title: 'Yoola App',
      img: '../../assets/images/convertfly-home.png'
    }
  ];

  constructor() {}

  ngOnInit() {}
}
