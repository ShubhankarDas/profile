import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle('Shubhankar Das');
  }

  updateMoon(section) {
    let moon = document.getElementById('moon');

    if (section === 'home') {
      moon.style.cssText = '';
      moon.classList.add('moon-init');
      return;
    }

    moon.classList.remove('moon-init');

    if (section === 'skills') {
      moon.style.cssText = `
      width: 100%;
      height: 250px;
      top: 300px;
      right: 0;
      border-radius: 0;
    `;
    } else {
      let anchor = Array.from(
        document.getElementById('exp_one').parentNode.querySelectorAll('img')
      )[0];
      console.log(anchor.parentElement.getBoundingClientRect());
      console.log(anchor.getBoundingClientRect());

      // moon.style.cssText = `
      // width: 50px;
      // height: 50px;
      // top: 270px;
      // right: 835px;
      // border-radius: 50%;`;

      // if (anchor.getAttribute('section-anchor') === 'left') {
      // }
    }
  }

  updateBar(section) {
    let sidebar = document.getElementById('side-bar');

    let selectedTab = Array.from(sidebar.querySelectorAll('.selected'));
    selectedTab.forEach(li => li.classList.remove('selected'));

    if (section === 'home') {
      sidebar.classList.add('hide-slide');
    } else {
      sidebar.classList.remove('hide-slide');
    }

    let activeSideBar = Array.from(
      sidebar.querySelectorAll(`li[data-section-anchor='${section}']`)
    );
    activeSideBar.forEach(li => li.classList.add('selected'));
  }

  updateSection(section) {
    let scrollTo = document.getElementById(section);
    scrollTo.scrollIntoView({ behavior: 'smooth' });

    this.updateBar(section);
    // this.updateMoon(section);
  }
}
