import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-img-center',
  templateUrl: './img-center.component.html',
  styleUrls: ['./img-center.component.css']
})
export class ImgCenterComponent implements OnInit {

  @Input() photoName: string;
  @Input() legend: string;

  constructor() { }

  ngOnInit() {
  }

}
