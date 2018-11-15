import { Component, OnInit, NgModule } from '@angular/core';
@Component({
  selector: 'work-list',
  templateUrl: './work-list.component.html',
  styleUrls: ['./work-list.component.scss']
})
export class WorkListComponent implements OnInit {
  workItems = [
    {
      id: 'exp_one',
      title: 'Convertfly',
      anchor: 'left',
      img: '../../assets/images/convertfly-home.png'
    },
    {
      id: 'exp_two',
      title: 'Visualgator',
      anchor: 'right',
      img: '../../assets/images/Editor.png',
      imgClass: 'img-shadow'
    },
    {
      id: 'exp_three',
      title: 'SkillsAlpha',
      anchor: 'left',
      img: '../../assets/images/cover-desktop.png',
      imgClass: 'img-shadow'
    },
    {
      id: 'exp_four',
      title: 'Yoola App',
      anchor: 'right',
      img: '../../assets/images/cover.png',
      imgClass: 'img-shadow'
    }
  ];

  constructor() {}

  ngOnInit() {}
}
