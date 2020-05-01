import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-paragraph-bold-center',
  templateUrl: './paragraph-bold-center.component.html',
  styleUrls: ['./paragraph-bold-center.component.css']
})
export class ParagraphBoldCenterComponent implements OnInit {

  @Input() para;

  constructor() { }

  ngOnInit() {
  }

}
