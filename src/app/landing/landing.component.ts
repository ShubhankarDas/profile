import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  @Output() updateSideBar = new EventEmitter()

  constructor() {}

  scroll() {
    this.updateSideBar.emit('skills')
  }

  ngOnInit() {}
}
