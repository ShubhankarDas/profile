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
      img: '../../assets/images/convertfly-home.png'
    },
    {
      title: 'SkillsAlpha',
      img: '../../assets/images/skillsalpha.png'
    },
    {
      title: 'Yoola App',
      img: '../../assets/images/convertfly-home.png'
    }
  ];

  constructor() {}

  ngOnInit() {}
}
