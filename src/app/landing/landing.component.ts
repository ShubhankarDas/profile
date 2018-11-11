import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  constructor() {}
  scroll(el) {
    let scrollTo = document.getElementById(el);
    console.log(scrollTo);
    scrollTo.scrollIntoView({ behavior: 'smooth' });
  }

  ngOnInit() {}
}
