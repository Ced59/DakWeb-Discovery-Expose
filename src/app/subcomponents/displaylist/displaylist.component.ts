import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-displaylist',
  templateUrl: './displaylist.component.html',
  styleUrls: ['./displaylist.component.css']
})
export class DisplaylistComponent implements OnInit {

  @Input() title;
  @Input() list;

  constructor() { }

  ngOnInit() {
  }

}
