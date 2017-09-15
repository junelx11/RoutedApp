import { Component, OnInit } from '@angular/core';
import { SharedService } from './common.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
})
export class DisplayComponent implements OnInit {
  studColl: Array<object>;

  constructor(private dataStore: SharedService) { }

  ngOnInit() {
    
    this.studColl = this.dataStore.getStudent();
  }

}