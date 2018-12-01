import { Component, OnInit, ElementRef } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private titleService: Title, public el: ElementRef) {}

  ngOnInit() {
    this.titleService.setTitle('Shubhankar Das');
  }
}
