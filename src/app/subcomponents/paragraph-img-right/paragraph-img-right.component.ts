import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-paragraph-img-right',
  templateUrl: './paragraph-img-right.component.html',
  styleUrls: ['./paragraph-img-right.component.css']
})
export class ParagraphImgRightComponent implements OnInit {

  @Input() para: string;
  @Input() nomImg: string;
  @Input() legend: string;

  constructor() { }

  ngOnInit() {
  }

}
