import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-chapter-title',
  templateUrl: './chapter-title.component.html',
  styleUrls: ['./chapter-title.component.css']
})
export class ChapterTitleComponent implements OnInit {

  @Input() title;
  @Input() subTitle;

  constructor() { }

  ngOnInit() {
  }

}
