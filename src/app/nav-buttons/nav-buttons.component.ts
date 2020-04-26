import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-nav-buttons',
  templateUrl: './nav-buttons.component.html',
  styleUrls: ['./nav-buttons.component.css']
})
export class NavButtonsComponent implements OnInit {

  @Input() next;
  @Input() previous;

  constructor() { }

  ngOnInit() {
  }

}
