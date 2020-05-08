import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-paragraph-img-left',
  templateUrl: './paragraph-img-left.component.html',
  styleUrls: ['./paragraph-img-left.component.css']
})
export class ParagraphImgLeftComponent implements OnInit {

  @Input() para: string;
  @Input() nomImg: string;
  @Input() legend: string;
  @Input() video = false;
  @Input() nomVideo: string;
  linkVideo: string;

  constructor() { }

  ngOnInit() {
    if (this.video) {
      this.linkVideo = '../resources/videos/' + this.nomVideo;
    }
  }

}
