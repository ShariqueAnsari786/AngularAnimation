import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wm-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
  host: { 'class': 'wm-theme-colors' }
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
