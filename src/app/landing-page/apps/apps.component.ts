import { Component, OnInit } from '@angular/core';
import { AppMenu } from './appMenu';

@Component({
  selector: 'app-all-apps',
  templateUrl: './apps.component.html',
  styleUrls: ['./apps.component.scss']
})
export class AppsComponent implements OnInit {

  allApps = [
    new AppMenu('business', 'Scoping and Ordering'),
    new AppMenu('date_range', 'Planning'),
    new AppMenu('receipt', 'Receiving'),
    new AppMenu('swap_horiz', 'Tracking and Tracing'),
    new AppMenu('timeline', 'Analytics'),
  ];

  constructor() { }

  ngOnInit() {
  }

}
