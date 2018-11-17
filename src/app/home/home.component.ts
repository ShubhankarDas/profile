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
      width: 20px;
      height: 250px;
      top: 40%;
      right: 80%;
      border-radius: 0;
    `;
    } else if(section === 'footer'){

    }
    else{
      let anchor = document.getElementById(section);

      console.log(anchor.getAttribute('data-anchor'));

      if (anchor.getAttribute('data-anchor') === 'left') {
        moon.style.cssText = `
          width: 50px;
          height: 50px;
          top: 30%;
          right: 80%;
          border-radius: 50%;`;
      } else {
        moon.style.cssText = `
          width: 50px;
          height: 50px;
          top: 30%;
          right: 15%;
          border-radius: 50%;`;
      }
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
    this.updateMoon(section);
  }
}
